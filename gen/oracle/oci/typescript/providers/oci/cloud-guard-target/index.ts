// https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/cloud_guard_target
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CloudGuardTargetConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/cloud_guard_target#compartment_id CloudGuardTarget#compartment_id}
  */
  readonly compartmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/cloud_guard_target#defined_tags CloudGuardTarget#defined_tags}
  */
  readonly definedTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/cloud_guard_target#description CloudGuardTarget#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/cloud_guard_target#display_name CloudGuardTarget#display_name}
  */
  readonly displayName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/cloud_guard_target#freeform_tags CloudGuardTarget#freeform_tags}
  */
  readonly freeformTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/cloud_guard_target#id CloudGuardTarget#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/cloud_guard_target#state CloudGuardTarget#state}
  */
  readonly state?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/cloud_guard_target#target_resource_id CloudGuardTarget#target_resource_id}
  */
  readonly targetResourceId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/cloud_guard_target#target_resource_type CloudGuardTarget#target_resource_type}
  */
  readonly targetResourceType: string;
  /**
  * target_detector_recipes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/cloud_guard_target#target_detector_recipes CloudGuardTarget#target_detector_recipes}
  */
  readonly targetDetectorRecipes?: CloudGuardTargetTargetDetectorRecipes[] | cdktf.IResolvable;
  /**
  * target_responder_recipes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/cloud_guard_target#target_responder_recipes CloudGuardTarget#target_responder_recipes}
  */
  readonly targetResponderRecipes?: CloudGuardTargetTargetResponderRecipes[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/cloud_guard_target#timeouts CloudGuardTarget#timeouts}
  */
  readonly timeouts?: CloudGuardTargetTimeouts;
}
export interface CloudGuardTargetTargetDetailsTargetSecurityZoneRecipes {
}

export function cloudGuardTargetTargetDetailsTargetSecurityZoneRecipesToTerraform(struct?: CloudGuardTargetTargetDetailsTargetSecurityZoneRecipes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function cloudGuardTargetTargetDetailsTargetSecurityZoneRecipesToHclTerraform(struct?: CloudGuardTargetTargetDetailsTargetSecurityZoneRecipes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class CloudGuardTargetTargetDetailsTargetSecurityZoneRecipesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudGuardTargetTargetDetailsTargetSecurityZoneRecipes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudGuardTargetTargetDetailsTargetSecurityZoneRecipes | undefined) {
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

export class CloudGuardTargetTargetDetailsTargetSecurityZoneRecipesList extends cdktf.ComplexList {

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
  public get(index: number): CloudGuardTargetTargetDetailsTargetSecurityZoneRecipesOutputReference {
    return new CloudGuardTargetTargetDetailsTargetSecurityZoneRecipesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudGuardTargetTargetDetails {
}

export function cloudGuardTargetTargetDetailsToTerraform(struct?: CloudGuardTargetTargetDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function cloudGuardTargetTargetDetailsToHclTerraform(struct?: CloudGuardTargetTargetDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class CloudGuardTargetTargetDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudGuardTargetTargetDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudGuardTargetTargetDetails | undefined) {
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
  private _targetSecurityZoneRecipes = new CloudGuardTargetTargetDetailsTargetSecurityZoneRecipesList(this, "target_security_zone_recipes", false);
  public get targetSecurityZoneRecipes() {
    return this._targetSecurityZoneRecipes;
  }
}

export class CloudGuardTargetTargetDetailsList extends cdktf.ComplexList {

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
  public get(index: number): CloudGuardTargetTargetDetailsOutputReference {
    return new CloudGuardTargetTargetDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroups {
}

export function cloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsToTerraform(struct?: CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function cloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsToHclTerraform(struct?: CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroups | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroups | undefined) {
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

export class CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsList extends cdktf.ComplexList {

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
  public get(index: number): CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsOutputReference {
    return new CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsAdditionalProperties {
}

export function cloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsAdditionalPropertiesToTerraform(struct?: CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsAdditionalProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function cloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsAdditionalPropertiesToHclTerraform(struct?: CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsAdditionalProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsAdditionalPropertiesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsAdditionalProperties | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsAdditionalProperties | undefined) {
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

export class CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsAdditionalPropertiesList extends cdktf.ComplexList {

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
  public get(index: number): CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsAdditionalPropertiesOutputReference {
    return new CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsAdditionalPropertiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsAllowedValues {
}

export function cloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsAllowedValuesToTerraform(struct?: CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsAllowedValues): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function cloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsAllowedValuesToHclTerraform(struct?: CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsAllowedValues): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsAllowedValuesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsAllowedValues | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsAllowedValues | undefined) {
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

export class CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsAllowedValuesList extends cdktf.ComplexList {

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
  public get(index: number): CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsAllowedValuesOutputReference {
    return new CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsAllowedValuesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValues {
}

export function cloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesToTerraform(struct?: CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValues): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function cloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesToHclTerraform(struct?: CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValues): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValues | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValues | undefined) {
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

export class CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesList extends cdktf.ComplexList {

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
  public get(index: number): CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference {
    return new CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurations {
}

export function cloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsToTerraform(struct?: CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function cloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsToHclTerraform(struct?: CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurations | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // additional_properties - computed: true, optional: false, required: false
  private _additionalProperties = new CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsAdditionalPropertiesList(this, "additional_properties", false);
  public get additionalProperties() {
    return this._additionalProperties;
  }

  // allowed_values - computed: true, optional: false, required: false
  private _allowedValues = new CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsAllowedValuesList(this, "allowed_values", false);
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
  private _values = new CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesList(this, "values", false);
  public get values() {
    return this._values;
  }
}

export class CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsList extends cdktf.ComplexList {

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
  public get(index: number): CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference {
    return new CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetails {
}

export function cloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsToTerraform(struct?: CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function cloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsToHclTerraform(struct?: CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // condition_groups - computed: true, optional: false, required: false
  private _conditionGroups = new CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsList(this, "condition_groups", false);
  public get conditionGroups() {
    return this._conditionGroups;
  }

  // configurations - computed: true, optional: false, required: false
  private _configurations = new CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsList(this, "configurations", false);
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

export class CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsList extends cdktf.ComplexList {

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
  public get(index: number): CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference {
    return new CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappings {
}

export function cloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsToTerraform(struct?: CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function cloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsToHclTerraform(struct?: CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappings | undefined) {
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

export class CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsList extends cdktf.ComplexList {

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
  public get(index: number): CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsOutputReference {
    return new CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesRuleType {
}

export function cloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesRuleTypeToTerraform(struct?: CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesRuleType): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function cloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesRuleTypeToHclTerraform(struct?: CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesRuleType): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesRuleTypeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesRuleType | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesRuleType | undefined) {
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

export class CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesRuleTypeList extends cdktf.ComplexList {

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
  public get(index: number): CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesRuleTypeOutputReference {
    return new CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesRuleTypeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRules {
}

export function cloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesToTerraform(struct?: CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function cloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesToHclTerraform(struct?: CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRules | undefined) {
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
  private _details = new CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsList(this, "details", false);
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
  private _entitiesMappings = new CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsList(this, "entities_mappings", false);
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
  private _ruleType = new CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesRuleTypeList(this, "rule_type", false);
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

export class CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesList extends cdktf.ComplexList {

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
  public get(index: number): CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesOutputReference {
    return new CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappings {
}

export function cloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsToTerraform(struct?: CloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function cloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsToHclTerraform(struct?: CloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class CloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappings | undefined) {
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

export class CloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsList extends cdktf.ComplexList {

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
  public get(index: number): CloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsOutputReference {
    return new CloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudGuardTargetTargetDetectorRecipesDetectorRulesRuleType {
}

export function cloudGuardTargetTargetDetectorRecipesDetectorRulesRuleTypeToTerraform(struct?: CloudGuardTargetTargetDetectorRecipesDetectorRulesRuleType): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function cloudGuardTargetTargetDetectorRecipesDetectorRulesRuleTypeToHclTerraform(struct?: CloudGuardTargetTargetDetectorRecipesDetectorRulesRuleType): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class CloudGuardTargetTargetDetectorRecipesDetectorRulesRuleTypeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudGuardTargetTargetDetectorRecipesDetectorRulesRuleType | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudGuardTargetTargetDetectorRecipesDetectorRulesRuleType | undefined) {
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

export class CloudGuardTargetTargetDetectorRecipesDetectorRulesRuleTypeList extends cdktf.ComplexList {

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
  public get(index: number): CloudGuardTargetTargetDetectorRecipesDetectorRulesRuleTypeOutputReference {
    return new CloudGuardTargetTargetDetectorRecipesDetectorRulesRuleTypeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsAdditionalProperties {
}

export function cloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsAdditionalPropertiesToTerraform(struct?: CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsAdditionalProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function cloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsAdditionalPropertiesToHclTerraform(struct?: CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsAdditionalProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsAdditionalPropertiesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsAdditionalProperties | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsAdditionalProperties | undefined) {
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

export class CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsAdditionalPropertiesList extends cdktf.ComplexList {

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
  public get(index: number): CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsAdditionalPropertiesOutputReference {
    return new CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsAdditionalPropertiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsAllowedValues {
}

export function cloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsAllowedValuesToTerraform(struct?: CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsAllowedValues): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function cloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsAllowedValuesToHclTerraform(struct?: CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsAllowedValues): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsAllowedValuesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsAllowedValues | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsAllowedValues | undefined) {
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

export class CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsAllowedValuesList extends cdktf.ComplexList {

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
  public get(index: number): CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsAllowedValuesOutputReference {
    return new CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsAllowedValuesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValues {
}

export function cloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesToTerraform(struct?: CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValues): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function cloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesToHclTerraform(struct?: CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValues): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValues | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValues | undefined) {
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

export class CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesList extends cdktf.ComplexList {

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
  public get(index: number): CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesOutputReference {
    return new CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurations {
}

export function cloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsToTerraform(struct?: CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function cloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsToHclTerraform(struct?: CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurations | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // additional_properties - computed: true, optional: false, required: false
  private _additionalProperties = new CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsAdditionalPropertiesList(this, "additional_properties", false);
  public get additionalProperties() {
    return this._additionalProperties;
  }

  // allowed_values - computed: true, optional: false, required: false
  private _allowedValues = new CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsAllowedValuesList(this, "allowed_values", false);
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
  private _values = new CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesList(this, "values", false);
  public get values() {
    return this._values;
  }
}

export class CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsList extends cdktf.ComplexList {

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
  public get(index: number): CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference {
    return new CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroups {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/cloud_guard_target#compartment_id CloudGuardTarget#compartment_id}
  */
  readonly compartmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/cloud_guard_target#condition CloudGuardTarget#condition}
  */
  readonly condition: string;
}

export function cloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsToTerraform(struct?: CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    compartment_id: cdktf.stringToTerraform(struct!.compartmentId),
    condition: cdktf.stringToTerraform(struct!.condition),
  }
}


export function cloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsToHclTerraform(struct?: CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    compartment_id: {
      value: cdktf.stringToHclTerraform(struct!.compartmentId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    condition: {
      value: cdktf.stringToHclTerraform(struct!.condition),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroups | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._compartmentId !== undefined) {
      hasAnyValues = true;
      internalValueResult.compartmentId = this._compartmentId;
    }
    if (this._condition !== undefined) {
      hasAnyValues = true;
      internalValueResult.condition = this._condition;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroups | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._compartmentId = undefined;
      this._condition = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._compartmentId = value.compartmentId;
      this._condition = value.condition;
    }
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

  // condition - computed: false, optional: false, required: true
  private _condition?: string; 
  public get condition() {
    return this.getStringAttribute('condition');
  }
  public set condition(value: string) {
    this._condition = value;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionInput() {
    return this._condition;
  }
}

export class CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsList extends cdktf.ComplexList {
  public internalValue? : CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroups[] | cdktf.IResolvable

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
  public get(index: number): CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsOutputReference {
    return new CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudGuardTargetTargetDetectorRecipesDetectorRulesDetails {
  /**
  * condition_groups block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/cloud_guard_target#condition_groups CloudGuardTarget#condition_groups}
  */
  readonly conditionGroups?: CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroups[] | cdktf.IResolvable;
}

export function cloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsToTerraform(struct?: CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsOutputReference | CloudGuardTargetTargetDetectorRecipesDetectorRulesDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    condition_groups: cdktf.listMapper(cloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsToTerraform, true)(struct!.conditionGroups),
  }
}


export function cloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsToHclTerraform(struct?: CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsOutputReference | CloudGuardTargetTargetDetectorRecipesDetectorRulesDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    condition_groups: {
      value: cdktf.listMapperHcl(cloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsToHclTerraform, true)(struct!.conditionGroups),
      isBlock: true,
      type: "list",
      storageClassType: "CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudGuardTargetTargetDetectorRecipesDetectorRulesDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._conditionGroups?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.conditionGroups = this._conditionGroups?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudGuardTargetTargetDetectorRecipesDetectorRulesDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._conditionGroups.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._conditionGroups.internalValue = value.conditionGroups;
    }
  }

  // configurations - computed: true, optional: false, required: false
  private _configurations = new CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsList(this, "configurations", false);
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

  // condition_groups - computed: false, optional: true, required: false
  private _conditionGroups = new CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsList(this, "condition_groups", false);
  public get conditionGroups() {
    return this._conditionGroups;
  }
  public putConditionGroups(value: CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroups[] | cdktf.IResolvable) {
    this._conditionGroups.internalValue = value;
  }
  public resetConditionGroups() {
    this._conditionGroups.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionGroupsInput() {
    return this._conditionGroups.internalValue;
  }
}
export interface CloudGuardTargetTargetDetectorRecipesDetectorRules {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/cloud_guard_target#detector_rule_id CloudGuardTarget#detector_rule_id}
  */
  readonly detectorRuleId: string;
  /**
  * details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/cloud_guard_target#details CloudGuardTarget#details}
  */
  readonly details: CloudGuardTargetTargetDetectorRecipesDetectorRulesDetails;
}

export function cloudGuardTargetTargetDetectorRecipesDetectorRulesToTerraform(struct?: CloudGuardTargetTargetDetectorRecipesDetectorRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    detector_rule_id: cdktf.stringToTerraform(struct!.detectorRuleId),
    details: cloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsToTerraform(struct!.details),
  }
}


export function cloudGuardTargetTargetDetectorRecipesDetectorRulesToHclTerraform(struct?: CloudGuardTargetTargetDetectorRecipesDetectorRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    detector_rule_id: {
      value: cdktf.stringToHclTerraform(struct!.detectorRuleId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    details: {
      value: cloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsToHclTerraform(struct!.details),
      isBlock: true,
      type: "list",
      storageClassType: "CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudGuardTargetTargetDetectorRecipesDetectorRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudGuardTargetTargetDetectorRecipesDetectorRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._detectorRuleId !== undefined) {
      hasAnyValues = true;
      internalValueResult.detectorRuleId = this._detectorRuleId;
    }
    if (this._details?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.details = this._details?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudGuardTargetTargetDetectorRecipesDetectorRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._detectorRuleId = undefined;
      this._details.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._detectorRuleId = value.detectorRuleId;
      this._details.internalValue = value.details;
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

  // detector - computed: true, optional: false, required: false
  public get detector() {
    return this.getStringAttribute('detector');
  }

  // detector_rule_id - computed: false, optional: false, required: true
  private _detectorRuleId?: string; 
  public get detectorRuleId() {
    return this.getStringAttribute('detector_rule_id');
  }
  public set detectorRuleId(value: string) {
    this._detectorRuleId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get detectorRuleIdInput() {
    return this._detectorRuleId;
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // entities_mappings - computed: true, optional: false, required: false
  private _entitiesMappings = new CloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsList(this, "entities_mappings", false);
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
  private _ruleType = new CloudGuardTargetTargetDetectorRecipesDetectorRulesRuleTypeList(this, "rule_type", false);
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

  // details - computed: false, optional: false, required: true
  private _details = new CloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsOutputReference(this, "details");
  public get details() {
    return this._details;
  }
  public putDetails(value: CloudGuardTargetTargetDetectorRecipesDetectorRulesDetails) {
    this._details.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get detailsInput() {
    return this._details.internalValue;
  }
}

export class CloudGuardTargetTargetDetectorRecipesDetectorRulesList extends cdktf.ComplexList {
  public internalValue? : CloudGuardTargetTargetDetectorRecipesDetectorRules[] | cdktf.IResolvable

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
  public get(index: number): CloudGuardTargetTargetDetectorRecipesDetectorRulesOutputReference {
    return new CloudGuardTargetTargetDetectorRecipesDetectorRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudGuardTargetTargetDetectorRecipes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/cloud_guard_target#detector_recipe_id CloudGuardTarget#detector_recipe_id}
  */
  readonly detectorRecipeId: string;
  /**
  * detector_rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/cloud_guard_target#detector_rules CloudGuardTarget#detector_rules}
  */
  readonly detectorRules?: CloudGuardTargetTargetDetectorRecipesDetectorRules[] | cdktf.IResolvable;
}

export function cloudGuardTargetTargetDetectorRecipesToTerraform(struct?: CloudGuardTargetTargetDetectorRecipes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    detector_recipe_id: cdktf.stringToTerraform(struct!.detectorRecipeId),
    detector_rules: cdktf.listMapper(cloudGuardTargetTargetDetectorRecipesDetectorRulesToTerraform, true)(struct!.detectorRules),
  }
}


export function cloudGuardTargetTargetDetectorRecipesToHclTerraform(struct?: CloudGuardTargetTargetDetectorRecipes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    detector_recipe_id: {
      value: cdktf.stringToHclTerraform(struct!.detectorRecipeId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    detector_rules: {
      value: cdktf.listMapperHcl(cloudGuardTargetTargetDetectorRecipesDetectorRulesToHclTerraform, true)(struct!.detectorRules),
      isBlock: true,
      type: "list",
      storageClassType: "CloudGuardTargetTargetDetectorRecipesDetectorRulesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudGuardTargetTargetDetectorRecipesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudGuardTargetTargetDetectorRecipes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._detectorRecipeId !== undefined) {
      hasAnyValues = true;
      internalValueResult.detectorRecipeId = this._detectorRecipeId;
    }
    if (this._detectorRules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.detectorRules = this._detectorRules?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudGuardTargetTargetDetectorRecipes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._detectorRecipeId = undefined;
      this._detectorRules.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._detectorRecipeId = value.detectorRecipeId;
      this._detectorRules.internalValue = value.detectorRules;
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

  // detector_recipe_id - computed: false, optional: false, required: true
  private _detectorRecipeId?: string; 
  public get detectorRecipeId() {
    return this.getStringAttribute('detector_recipe_id');
  }
  public set detectorRecipeId(value: string) {
    this._detectorRecipeId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get detectorRecipeIdInput() {
    return this._detectorRecipeId;
  }

  // detector_recipe_type - computed: true, optional: false, required: false
  public get detectorRecipeType() {
    return this.getStringAttribute('detector_recipe_type');
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // effective_detector_rules - computed: true, optional: false, required: false
  private _effectiveDetectorRules = new CloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesList(this, "effective_detector_rules", false);
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

  // detector_rules - computed: false, optional: true, required: false
  private _detectorRules = new CloudGuardTargetTargetDetectorRecipesDetectorRulesList(this, "detector_rules", false);
  public get detectorRules() {
    return this._detectorRules;
  }
  public putDetectorRules(value: CloudGuardTargetTargetDetectorRecipesDetectorRules[] | cdktf.IResolvable) {
    this._detectorRules.internalValue = value;
  }
  public resetDetectorRules() {
    this._detectorRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get detectorRulesInput() {
    return this._detectorRules.internalValue;
  }
}

export class CloudGuardTargetTargetDetectorRecipesList extends cdktf.ComplexList {
  public internalValue? : CloudGuardTargetTargetDetectorRecipes[] | cdktf.IResolvable

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
  public get(index: number): CloudGuardTargetTargetDetectorRecipesOutputReference {
    return new CloudGuardTargetTargetDetectorRecipesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurations {
}

export function cloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsToTerraform(struct?: CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function cloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsToHclTerraform(struct?: CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurations | undefined) {
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

export class CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsList extends cdktf.ComplexList {

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
  public get(index: number): CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsOutputReference {
    return new CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetails {
}

export function cloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsToTerraform(struct?: CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function cloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsToHclTerraform(struct?: CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetails | undefined) {
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
  private _configurations = new CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsList(this, "configurations", false);
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

export class CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsList extends cdktf.ComplexList {

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
  public get(index: number): CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference {
    return new CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudGuardTargetTargetResponderRecipesEffectiveResponderRules {
}

export function cloudGuardTargetTargetResponderRecipesEffectiveResponderRulesToTerraform(struct?: CloudGuardTargetTargetResponderRecipesEffectiveResponderRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function cloudGuardTargetTargetResponderRecipesEffectiveResponderRulesToHclTerraform(struct?: CloudGuardTargetTargetResponderRecipesEffectiveResponderRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudGuardTargetTargetResponderRecipesEffectiveResponderRules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudGuardTargetTargetResponderRecipesEffectiveResponderRules | undefined) {
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
  private _details = new CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsList(this, "details", false);
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

export class CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesList extends cdktf.ComplexList {

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
  public get(index: number): CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesOutputReference {
    return new CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurations {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/cloud_guard_target#config_key CloudGuardTarget#config_key}
  */
  readonly configKey: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/cloud_guard_target#name CloudGuardTarget#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/cloud_guard_target#value CloudGuardTarget#value}
  */
  readonly value: string;
}

export function cloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsToTerraform(struct?: CloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config_key: cdktf.stringToTerraform(struct!.configKey),
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function cloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsToHclTerraform(struct?: CloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    config_key: {
      value: cdktf.stringToHclTerraform(struct!.configKey),
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
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._configKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.configKey = this._configKey;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._configKey = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._configKey = value.configKey;
      this._name = value.name;
      this._value = value.value;
    }
  }

  // config_key - computed: false, optional: false, required: true
  private _configKey?: string; 
  public get configKey() {
    return this.getStringAttribute('config_key');
  }
  public set configKey(value: string) {
    this._configKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configKeyInput() {
    return this._configKey;
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

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class CloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsList extends cdktf.ComplexList {
  public internalValue? : CloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurations[] | cdktf.IResolvable

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
  public get(index: number): CloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference {
    return new CloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudGuardTargetTargetResponderRecipesResponderRulesDetails {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/cloud_guard_target#condition CloudGuardTarget#condition}
  */
  readonly condition?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/cloud_guard_target#mode CloudGuardTarget#mode}
  */
  readonly mode?: string;
  /**
  * configurations block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/cloud_guard_target#configurations CloudGuardTarget#configurations}
  */
  readonly configurations?: CloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurations[] | cdktf.IResolvable;
}

export function cloudGuardTargetTargetResponderRecipesResponderRulesDetailsToTerraform(struct?: CloudGuardTargetTargetResponderRecipesResponderRulesDetailsOutputReference | CloudGuardTargetTargetResponderRecipesResponderRulesDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    condition: cdktf.stringToTerraform(struct!.condition),
    mode: cdktf.stringToTerraform(struct!.mode),
    configurations: cdktf.listMapper(cloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsToTerraform, true)(struct!.configurations),
  }
}


export function cloudGuardTargetTargetResponderRecipesResponderRulesDetailsToHclTerraform(struct?: CloudGuardTargetTargetResponderRecipesResponderRulesDetailsOutputReference | CloudGuardTargetTargetResponderRecipesResponderRulesDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    condition: {
      value: cdktf.stringToHclTerraform(struct!.condition),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mode: {
      value: cdktf.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    configurations: {
      value: cdktf.listMapperHcl(cloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsToHclTerraform, true)(struct!.configurations),
      isBlock: true,
      type: "list",
      storageClassType: "CloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudGuardTargetTargetResponderRecipesResponderRulesDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudGuardTargetTargetResponderRecipesResponderRulesDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._condition !== undefined) {
      hasAnyValues = true;
      internalValueResult.condition = this._condition;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._configurations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.configurations = this._configurations?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudGuardTargetTargetResponderRecipesResponderRulesDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._condition = undefined;
      this._mode = undefined;
      this._configurations.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._condition = value.condition;
      this._mode = value.mode;
      this._configurations.internalValue = value.configurations;
    }
  }

  // condition - computed: true, optional: true, required: false
  private _condition?: string; 
  public get condition() {
    return this.getStringAttribute('condition');
  }
  public set condition(value: string) {
    this._condition = value;
  }
  public resetCondition() {
    this._condition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionInput() {
    return this._condition;
  }

  // is_enabled - computed: true, optional: false, required: false
  public get isEnabled() {
    return this.getBooleanAttribute('is_enabled');
  }

  // mode - computed: true, optional: true, required: false
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }

  // configurations - computed: false, optional: true, required: false
  private _configurations = new CloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsList(this, "configurations", false);
  public get configurations() {
    return this._configurations;
  }
  public putConfigurations(value: CloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurations[] | cdktf.IResolvable) {
    this._configurations.internalValue = value;
  }
  public resetConfigurations() {
    this._configurations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationsInput() {
    return this._configurations.internalValue;
  }
}
export interface CloudGuardTargetTargetResponderRecipesResponderRules {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/cloud_guard_target#responder_rule_id CloudGuardTarget#responder_rule_id}
  */
  readonly responderRuleId: string;
  /**
  * details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/cloud_guard_target#details CloudGuardTarget#details}
  */
  readonly details: CloudGuardTargetTargetResponderRecipesResponderRulesDetails;
}

export function cloudGuardTargetTargetResponderRecipesResponderRulesToTerraform(struct?: CloudGuardTargetTargetResponderRecipesResponderRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    responder_rule_id: cdktf.stringToTerraform(struct!.responderRuleId),
    details: cloudGuardTargetTargetResponderRecipesResponderRulesDetailsToTerraform(struct!.details),
  }
}


export function cloudGuardTargetTargetResponderRecipesResponderRulesToHclTerraform(struct?: CloudGuardTargetTargetResponderRecipesResponderRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    responder_rule_id: {
      value: cdktf.stringToHclTerraform(struct!.responderRuleId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    details: {
      value: cloudGuardTargetTargetResponderRecipesResponderRulesDetailsToHclTerraform(struct!.details),
      isBlock: true,
      type: "list",
      storageClassType: "CloudGuardTargetTargetResponderRecipesResponderRulesDetailsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudGuardTargetTargetResponderRecipesResponderRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudGuardTargetTargetResponderRecipesResponderRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._responderRuleId !== undefined) {
      hasAnyValues = true;
      internalValueResult.responderRuleId = this._responderRuleId;
    }
    if (this._details?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.details = this._details?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudGuardTargetTargetResponderRecipesResponderRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._responderRuleId = undefined;
      this._details.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._responderRuleId = value.responderRuleId;
      this._details.internalValue = value.details;
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

  // lifecycle_details - computed: true, optional: false, required: false
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
  }

  // policies - computed: true, optional: false, required: false
  public get policies() {
    return this.getListAttribute('policies');
  }

  // responder_rule_id - computed: false, optional: false, required: true
  private _responderRuleId?: string; 
  public get responderRuleId() {
    return this.getStringAttribute('responder_rule_id');
  }
  public set responderRuleId(value: string) {
    this._responderRuleId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get responderRuleIdInput() {
    return this._responderRuleId;
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

  // details - computed: false, optional: false, required: true
  private _details = new CloudGuardTargetTargetResponderRecipesResponderRulesDetailsOutputReference(this, "details");
  public get details() {
    return this._details;
  }
  public putDetails(value: CloudGuardTargetTargetResponderRecipesResponderRulesDetails) {
    this._details.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get detailsInput() {
    return this._details.internalValue;
  }
}

export class CloudGuardTargetTargetResponderRecipesResponderRulesList extends cdktf.ComplexList {
  public internalValue? : CloudGuardTargetTargetResponderRecipesResponderRules[] | cdktf.IResolvable

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
  public get(index: number): CloudGuardTargetTargetResponderRecipesResponderRulesOutputReference {
    return new CloudGuardTargetTargetResponderRecipesResponderRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudGuardTargetTargetResponderRecipes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/cloud_guard_target#responder_recipe_id CloudGuardTarget#responder_recipe_id}
  */
  readonly responderRecipeId: string;
  /**
  * responder_rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/cloud_guard_target#responder_rules CloudGuardTarget#responder_rules}
  */
  readonly responderRules?: CloudGuardTargetTargetResponderRecipesResponderRules[] | cdktf.IResolvable;
}

export function cloudGuardTargetTargetResponderRecipesToTerraform(struct?: CloudGuardTargetTargetResponderRecipes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    responder_recipe_id: cdktf.stringToTerraform(struct!.responderRecipeId),
    responder_rules: cdktf.listMapper(cloudGuardTargetTargetResponderRecipesResponderRulesToTerraform, true)(struct!.responderRules),
  }
}


export function cloudGuardTargetTargetResponderRecipesToHclTerraform(struct?: CloudGuardTargetTargetResponderRecipes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    responder_recipe_id: {
      value: cdktf.stringToHclTerraform(struct!.responderRecipeId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    responder_rules: {
      value: cdktf.listMapperHcl(cloudGuardTargetTargetResponderRecipesResponderRulesToHclTerraform, true)(struct!.responderRules),
      isBlock: true,
      type: "list",
      storageClassType: "CloudGuardTargetTargetResponderRecipesResponderRulesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudGuardTargetTargetResponderRecipesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudGuardTargetTargetResponderRecipes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._responderRecipeId !== undefined) {
      hasAnyValues = true;
      internalValueResult.responderRecipeId = this._responderRecipeId;
    }
    if (this._responderRules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.responderRules = this._responderRules?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudGuardTargetTargetResponderRecipes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._responderRecipeId = undefined;
      this._responderRules.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._responderRecipeId = value.responderRecipeId;
      this._responderRules.internalValue = value.responderRules;
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
  private _effectiveResponderRules = new CloudGuardTargetTargetResponderRecipesEffectiveResponderRulesList(this, "effective_responder_rules", false);
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

  // responder_recipe_id - computed: false, optional: false, required: true
  private _responderRecipeId?: string; 
  public get responderRecipeId() {
    return this.getStringAttribute('responder_recipe_id');
  }
  public set responderRecipeId(value: string) {
    this._responderRecipeId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get responderRecipeIdInput() {
    return this._responderRecipeId;
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_updated - computed: true, optional: false, required: false
  public get timeUpdated() {
    return this.getStringAttribute('time_updated');
  }

  // responder_rules - computed: false, optional: true, required: false
  private _responderRules = new CloudGuardTargetTargetResponderRecipesResponderRulesList(this, "responder_rules", false);
  public get responderRules() {
    return this._responderRules;
  }
  public putResponderRules(value: CloudGuardTargetTargetResponderRecipesResponderRules[] | cdktf.IResolvable) {
    this._responderRules.internalValue = value;
  }
  public resetResponderRules() {
    this._responderRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responderRulesInput() {
    return this._responderRules.internalValue;
  }
}

export class CloudGuardTargetTargetResponderRecipesList extends cdktf.ComplexList {
  public internalValue? : CloudGuardTargetTargetResponderRecipes[] | cdktf.IResolvable

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
  public get(index: number): CloudGuardTargetTargetResponderRecipesOutputReference {
    return new CloudGuardTargetTargetResponderRecipesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudGuardTargetTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/cloud_guard_target#create CloudGuardTarget#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/cloud_guard_target#delete CloudGuardTarget#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/cloud_guard_target#update CloudGuardTarget#update}
  */
  readonly update?: string;
}

export function cloudGuardTargetTimeoutsToTerraform(struct?: CloudGuardTargetTimeouts | cdktf.IResolvable): any {
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


export function cloudGuardTargetTimeoutsToHclTerraform(struct?: CloudGuardTargetTimeouts | cdktf.IResolvable): any {
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

export class CloudGuardTargetTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CloudGuardTargetTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: CloudGuardTargetTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/cloud_guard_target oci_cloud_guard_target}
*/
export class CloudGuardTarget extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_cloud_guard_target";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CloudGuardTarget resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CloudGuardTarget to import
  * @param importFromId The id of the existing CloudGuardTarget that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/cloud_guard_target#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CloudGuardTarget to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_cloud_guard_target", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/cloud_guard_target oci_cloud_guard_target} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CloudGuardTargetConfig
  */
  public constructor(scope: Construct, id: string, config: CloudGuardTargetConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_cloud_guard_target',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.25.0'
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
    this._definedTags = config.definedTags;
    this._description = config.description;
    this._displayName = config.displayName;
    this._freeformTags = config.freeformTags;
    this._id = config.id;
    this._state = config.state;
    this._targetResourceId = config.targetResourceId;
    this._targetResourceType = config.targetResourceType;
    this._targetDetectorRecipes.internalValue = config.targetDetectorRecipes;
    this._targetResponderRecipes.internalValue = config.targetResponderRecipes;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // description - computed: true, optional: true, required: false
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

  // state - computed: true, optional: true, required: false
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

  // system_tags - computed: true, optional: false, required: false
  private _systemTags = new cdktf.StringMap(this, "system_tags");
  public get systemTags() {
    return this._systemTags;
  }

  // target_details - computed: true, optional: false, required: false
  private _targetDetails = new CloudGuardTargetTargetDetailsList(this, "target_details", false);
  public get targetDetails() {
    return this._targetDetails;
  }

  // target_resource_id - computed: false, optional: false, required: true
  private _targetResourceId?: string; 
  public get targetResourceId() {
    return this.getStringAttribute('target_resource_id');
  }
  public set targetResourceId(value: string) {
    this._targetResourceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetResourceIdInput() {
    return this._targetResourceId;
  }

  // target_resource_type - computed: false, optional: false, required: true
  private _targetResourceType?: string; 
  public get targetResourceType() {
    return this.getStringAttribute('target_resource_type');
  }
  public set targetResourceType(value: string) {
    this._targetResourceType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetResourceTypeInput() {
    return this._targetResourceType;
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_updated - computed: true, optional: false, required: false
  public get timeUpdated() {
    return this.getStringAttribute('time_updated');
  }

  // target_detector_recipes - computed: false, optional: true, required: false
  private _targetDetectorRecipes = new CloudGuardTargetTargetDetectorRecipesList(this, "target_detector_recipes", false);
  public get targetDetectorRecipes() {
    return this._targetDetectorRecipes;
  }
  public putTargetDetectorRecipes(value: CloudGuardTargetTargetDetectorRecipes[] | cdktf.IResolvable) {
    this._targetDetectorRecipes.internalValue = value;
  }
  public resetTargetDetectorRecipes() {
    this._targetDetectorRecipes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetDetectorRecipesInput() {
    return this._targetDetectorRecipes.internalValue;
  }

  // target_responder_recipes - computed: false, optional: true, required: false
  private _targetResponderRecipes = new CloudGuardTargetTargetResponderRecipesList(this, "target_responder_recipes", false);
  public get targetResponderRecipes() {
    return this._targetResponderRecipes;
  }
  public putTargetResponderRecipes(value: CloudGuardTargetTargetResponderRecipes[] | cdktf.IResolvable) {
    this._targetResponderRecipes.internalValue = value;
  }
  public resetTargetResponderRecipes() {
    this._targetResponderRecipes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetResponderRecipesInput() {
    return this._targetResponderRecipes.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new CloudGuardTargetTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: CloudGuardTargetTimeouts) {
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
      compartment_id: cdktf.stringToTerraform(this._compartmentId),
      defined_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._definedTags),
      description: cdktf.stringToTerraform(this._description),
      display_name: cdktf.stringToTerraform(this._displayName),
      freeform_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._freeformTags),
      id: cdktf.stringToTerraform(this._id),
      state: cdktf.stringToTerraform(this._state),
      target_resource_id: cdktf.stringToTerraform(this._targetResourceId),
      target_resource_type: cdktf.stringToTerraform(this._targetResourceType),
      target_detector_recipes: cdktf.listMapper(cloudGuardTargetTargetDetectorRecipesToTerraform, true)(this._targetDetectorRecipes.internalValue),
      target_responder_recipes: cdktf.listMapper(cloudGuardTargetTargetResponderRecipesToTerraform, true)(this._targetResponderRecipes.internalValue),
      timeouts: cloudGuardTargetTimeoutsToTerraform(this._timeouts.internalValue),
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
      defined_tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._definedTags),
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
      id: {
        value: cdktf.stringToHclTerraform(this._id),
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
      target_resource_id: {
        value: cdktf.stringToHclTerraform(this._targetResourceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      target_resource_type: {
        value: cdktf.stringToHclTerraform(this._targetResourceType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      target_detector_recipes: {
        value: cdktf.listMapperHcl(cloudGuardTargetTargetDetectorRecipesToHclTerraform, true)(this._targetDetectorRecipes.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CloudGuardTargetTargetDetectorRecipesList",
      },
      target_responder_recipes: {
        value: cdktf.listMapperHcl(cloudGuardTargetTargetResponderRecipesToHclTerraform, true)(this._targetResponderRecipes.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CloudGuardTargetTargetResponderRecipesList",
      },
      timeouts: {
        value: cloudGuardTargetTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CloudGuardTargetTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
