// https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/cloud_guard_detector_recipe
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CloudGuardDetectorRecipeConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/cloud_guard_detector_recipe#compartment_id CloudGuardDetectorRecipe#compartment_id}
  */
  readonly compartmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/cloud_guard_detector_recipe#defined_tags CloudGuardDetectorRecipe#defined_tags}
  */
  readonly definedTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/cloud_guard_detector_recipe#description CloudGuardDetectorRecipe#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/cloud_guard_detector_recipe#detector CloudGuardDetectorRecipe#detector}
  */
  readonly detector?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/cloud_guard_detector_recipe#display_name CloudGuardDetectorRecipe#display_name}
  */
  readonly displayName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/cloud_guard_detector_recipe#freeform_tags CloudGuardDetectorRecipe#freeform_tags}
  */
  readonly freeformTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/cloud_guard_detector_recipe#id CloudGuardDetectorRecipe#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/cloud_guard_detector_recipe#source_detector_recipe_id CloudGuardDetectorRecipe#source_detector_recipe_id}
  */
  readonly sourceDetectorRecipeId?: string;
  /**
  * detector_rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/cloud_guard_detector_recipe#detector_rules CloudGuardDetectorRecipe#detector_rules}
  */
  readonly detectorRules?: CloudGuardDetectorRecipeDetectorRules[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/cloud_guard_detector_recipe#timeouts CloudGuardDetectorRecipe#timeouts}
  */
  readonly timeouts?: CloudGuardDetectorRecipeTimeouts;
}
export interface CloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRules {
}

export function cloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesToTerraform(struct?: CloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function cloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesToHclTerraform(struct?: CloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class CloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRules | undefined) {
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // is_preferred - computed: true, optional: false, required: false
  public get isPreferred() {
    return this.getBooleanAttribute('is_preferred');
  }
}

export class CloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesList extends cdktf.ComplexList {

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
  public get(index: number): CloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesOutputReference {
    return new CloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsAdditionalProperties {
}

export function cloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsAdditionalPropertiesToTerraform(struct?: CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsAdditionalProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function cloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsAdditionalPropertiesToHclTerraform(struct?: CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsAdditionalProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsAdditionalPropertiesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsAdditionalProperties | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsAdditionalProperties | undefined) {
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

export class CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsAdditionalPropertiesList extends cdktf.ComplexList {

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
  public get(index: number): CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsAdditionalPropertiesOutputReference {
    return new CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsAdditionalPropertiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsAllowedValues {
}

export function cloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsAllowedValuesToTerraform(struct?: CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsAllowedValues): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function cloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsAllowedValuesToHclTerraform(struct?: CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsAllowedValues): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsAllowedValuesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsAllowedValues | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsAllowedValues | undefined) {
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

export class CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsAllowedValuesList extends cdktf.ComplexList {

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
  public get(index: number): CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsAllowedValuesOutputReference {
    return new CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsAllowedValuesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValues {
}

export function cloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesToTerraform(struct?: CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValues): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function cloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesToHclTerraform(struct?: CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValues): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValues | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValues | undefined) {
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

export class CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesList extends cdktf.ComplexList {

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
  public get(index: number): CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference {
    return new CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurations {
}

export function cloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsToTerraform(struct?: CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function cloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsToHclTerraform(struct?: CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurations | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // additional_properties - computed: true, optional: false, required: false
  private _additionalProperties = new CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsAdditionalPropertiesList(this, "additional_properties", false);
  public get additionalProperties() {
    return this._additionalProperties;
  }

  // allowed_values - computed: true, optional: false, required: false
  private _allowedValues = new CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsAllowedValuesList(this, "allowed_values", false);
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
  private _values = new CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesList(this, "values", false);
  public get values() {
    return this._values;
  }
}

export class CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsList extends cdktf.ComplexList {

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
  public get(index: number): CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsOutputReference {
    return new CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappings {
}

export function cloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsToTerraform(struct?: CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function cloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsToHclTerraform(struct?: CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappings | undefined) {
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

export class CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsList extends cdktf.ComplexList {

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
  public get(index: number): CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference {
    return new CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudGuardDetectorRecipeEffectiveDetectorRulesDetails {
}

export function cloudGuardDetectorRecipeEffectiveDetectorRulesDetailsToTerraform(struct?: CloudGuardDetectorRecipeEffectiveDetectorRulesDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function cloudGuardDetectorRecipeEffectiveDetectorRulesDetailsToHclTerraform(struct?: CloudGuardDetectorRecipeEffectiveDetectorRulesDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudGuardDetectorRecipeEffectiveDetectorRulesDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudGuardDetectorRecipeEffectiveDetectorRulesDetails | undefined) {
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
  private _configurations = new CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsList(this, "configurations", false);
  public get configurations() {
    return this._configurations;
  }

  // data_source_id - computed: true, optional: false, required: false
  public get dataSourceId() {
    return this.getStringAttribute('data_source_id');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // entities_mappings - computed: true, optional: false, required: false
  private _entitiesMappings = new CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsList(this, "entities_mappings", false);
  public get entitiesMappings() {
    return this._entitiesMappings;
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

  // recommendation - computed: true, optional: false, required: false
  public get recommendation() {
    return this.getStringAttribute('recommendation');
  }

  // risk_level - computed: true, optional: false, required: false
  public get riskLevel() {
    return this.getStringAttribute('risk_level');
  }
}

export class CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsList extends cdktf.ComplexList {

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
  public get(index: number): CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsOutputReference {
    return new CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappings {
}

export function cloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsToTerraform(struct?: CloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function cloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsToHclTerraform(struct?: CloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class CloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappings | undefined) {
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

export class CloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsList extends cdktf.ComplexList {

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
  public get(index: number): CloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsOutputReference {
    return new CloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudGuardDetectorRecipeEffectiveDetectorRulesRuleType {
}

export function cloudGuardDetectorRecipeEffectiveDetectorRulesRuleTypeToTerraform(struct?: CloudGuardDetectorRecipeEffectiveDetectorRulesRuleType): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function cloudGuardDetectorRecipeEffectiveDetectorRulesRuleTypeToHclTerraform(struct?: CloudGuardDetectorRecipeEffectiveDetectorRulesRuleType): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class CloudGuardDetectorRecipeEffectiveDetectorRulesRuleTypeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudGuardDetectorRecipeEffectiveDetectorRulesRuleType | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudGuardDetectorRecipeEffectiveDetectorRulesRuleType | undefined) {
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

export class CloudGuardDetectorRecipeEffectiveDetectorRulesRuleTypeList extends cdktf.ComplexList {

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
  public get(index: number): CloudGuardDetectorRecipeEffectiveDetectorRulesRuleTypeOutputReference {
    return new CloudGuardDetectorRecipeEffectiveDetectorRulesRuleTypeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudGuardDetectorRecipeEffectiveDetectorRules {
}

export function cloudGuardDetectorRecipeEffectiveDetectorRulesToTerraform(struct?: CloudGuardDetectorRecipeEffectiveDetectorRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function cloudGuardDetectorRecipeEffectiveDetectorRulesToHclTerraform(struct?: CloudGuardDetectorRecipeEffectiveDetectorRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class CloudGuardDetectorRecipeEffectiveDetectorRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudGuardDetectorRecipeEffectiveDetectorRules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudGuardDetectorRecipeEffectiveDetectorRules | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // candidate_responder_rules - computed: true, optional: false, required: false
  private _candidateResponderRules = new CloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesList(this, "candidate_responder_rules", false);
  public get candidateResponderRules() {
    return this._candidateResponderRules;
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
  private _details = new CloudGuardDetectorRecipeEffectiveDetectorRulesDetailsList(this, "details", false);
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
  private _entitiesMappings = new CloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsList(this, "entities_mappings", false);
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
  private _ruleType = new CloudGuardDetectorRecipeEffectiveDetectorRulesRuleTypeList(this, "rule_type", false);
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

export class CloudGuardDetectorRecipeEffectiveDetectorRulesList extends cdktf.ComplexList {

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
  public get(index: number): CloudGuardDetectorRecipeEffectiveDetectorRulesOutputReference {
    return new CloudGuardDetectorRecipeEffectiveDetectorRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudGuardDetectorRecipeDetectorRulesCandidateResponderRules {
}

export function cloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesToTerraform(struct?: CloudGuardDetectorRecipeDetectorRulesCandidateResponderRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function cloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesToHclTerraform(struct?: CloudGuardDetectorRecipeDetectorRulesCandidateResponderRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class CloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudGuardDetectorRecipeDetectorRulesCandidateResponderRules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudGuardDetectorRecipeDetectorRulesCandidateResponderRules | undefined) {
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // is_preferred - computed: true, optional: false, required: false
  public get isPreferred() {
    return this.getBooleanAttribute('is_preferred');
  }
}

export class CloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesList extends cdktf.ComplexList {

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
  public get(index: number): CloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesOutputReference {
    return new CloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudGuardDetectorRecipeDetectorRulesEntitiesMappings {
}

export function cloudGuardDetectorRecipeDetectorRulesEntitiesMappingsToTerraform(struct?: CloudGuardDetectorRecipeDetectorRulesEntitiesMappings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function cloudGuardDetectorRecipeDetectorRulesEntitiesMappingsToHclTerraform(struct?: CloudGuardDetectorRecipeDetectorRulesEntitiesMappings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class CloudGuardDetectorRecipeDetectorRulesEntitiesMappingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudGuardDetectorRecipeDetectorRulesEntitiesMappings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudGuardDetectorRecipeDetectorRulesEntitiesMappings | undefined) {
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

export class CloudGuardDetectorRecipeDetectorRulesEntitiesMappingsList extends cdktf.ComplexList {

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
  public get(index: number): CloudGuardDetectorRecipeDetectorRulesEntitiesMappingsOutputReference {
    return new CloudGuardDetectorRecipeDetectorRulesEntitiesMappingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudGuardDetectorRecipeDetectorRulesRuleType {
}

export function cloudGuardDetectorRecipeDetectorRulesRuleTypeToTerraform(struct?: CloudGuardDetectorRecipeDetectorRulesRuleType): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function cloudGuardDetectorRecipeDetectorRulesRuleTypeToHclTerraform(struct?: CloudGuardDetectorRecipeDetectorRulesRuleType): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class CloudGuardDetectorRecipeDetectorRulesRuleTypeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudGuardDetectorRecipeDetectorRulesRuleType | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudGuardDetectorRecipeDetectorRulesRuleType | undefined) {
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

export class CloudGuardDetectorRecipeDetectorRulesRuleTypeList extends cdktf.ComplexList {

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
  public get(index: number): CloudGuardDetectorRecipeDetectorRulesRuleTypeOutputReference {
    return new CloudGuardDetectorRecipeDetectorRulesRuleTypeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsAdditionalProperties {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/cloud_guard_detector_recipe#key CloudGuardDetectorRecipe#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/cloud_guard_detector_recipe#property_type CloudGuardDetectorRecipe#property_type}
  */
  readonly propertyType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/cloud_guard_detector_recipe#value CloudGuardDetectorRecipe#value}
  */
  readonly value?: string;
}

export function cloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsAdditionalPropertiesToTerraform(struct?: CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsAdditionalProperties | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    property_type: cdktf.stringToTerraform(struct!.propertyType),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function cloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsAdditionalPropertiesToHclTerraform(struct?: CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsAdditionalProperties | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    property_type: {
      value: cdktf.stringToHclTerraform(struct!.propertyType),
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

export class CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsAdditionalPropertiesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsAdditionalProperties | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._propertyType !== undefined) {
      hasAnyValues = true;
      internalValueResult.propertyType = this._propertyType;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsAdditionalProperties | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._propertyType = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._propertyType = value.propertyType;
      this._value = value.value;
    }
  }

  // key - computed: true, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // property_type - computed: true, optional: true, required: false
  private _propertyType?: string; 
  public get propertyType() {
    return this.getStringAttribute('property_type');
  }
  public set propertyType(value: string) {
    this._propertyType = value;
  }
  public resetPropertyType() {
    this._propertyType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propertyTypeInput() {
    return this._propertyType;
  }

  // value - computed: true, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
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

export class CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsAdditionalPropertiesList extends cdktf.ComplexList {
  public internalValue? : CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsAdditionalProperties[] | cdktf.IResolvable

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
  public get(index: number): CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsAdditionalPropertiesOutputReference {
    return new CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsAdditionalPropertiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsAllowedValues {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/cloud_guard_detector_recipe#key CloudGuardDetectorRecipe#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/cloud_guard_detector_recipe#value CloudGuardDetectorRecipe#value}
  */
  readonly value: string;
}

export function cloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsAllowedValuesToTerraform(struct?: CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsAllowedValues | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function cloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsAllowedValuesToHclTerraform(struct?: CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsAllowedValues | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
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

export class CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsAllowedValuesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsAllowedValues | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsAllowedValues | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
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

export class CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsAllowedValuesList extends cdktf.ComplexList {
  public internalValue? : CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsAllowedValues[] | cdktf.IResolvable

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
  public get(index: number): CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsAllowedValuesOutputReference {
    return new CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsAllowedValuesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValues {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/cloud_guard_detector_recipe#list_type CloudGuardDetectorRecipe#list_type}
  */
  readonly listType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/cloud_guard_detector_recipe#managed_list_type CloudGuardDetectorRecipe#managed_list_type}
  */
  readonly managedListType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/cloud_guard_detector_recipe#value CloudGuardDetectorRecipe#value}
  */
  readonly value: string;
}

export function cloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesToTerraform(struct?: CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValues | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    list_type: cdktf.stringToTerraform(struct!.listType),
    managed_list_type: cdktf.stringToTerraform(struct!.managedListType),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function cloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesToHclTerraform(struct?: CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValues | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    list_type: {
      value: cdktf.stringToHclTerraform(struct!.listType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    managed_list_type: {
      value: cdktf.stringToHclTerraform(struct!.managedListType),
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

export class CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValues | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._listType !== undefined) {
      hasAnyValues = true;
      internalValueResult.listType = this._listType;
    }
    if (this._managedListType !== undefined) {
      hasAnyValues = true;
      internalValueResult.managedListType = this._managedListType;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValues | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._listType = undefined;
      this._managedListType = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._listType = value.listType;
      this._managedListType = value.managedListType;
      this._value = value.value;
    }
  }

  // list_type - computed: false, optional: false, required: true
  private _listType?: string; 
  public get listType() {
    return this.getStringAttribute('list_type');
  }
  public set listType(value: string) {
    this._listType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get listTypeInput() {
    return this._listType;
  }

  // managed_list_type - computed: false, optional: false, required: true
  private _managedListType?: string; 
  public get managedListType() {
    return this.getStringAttribute('managed_list_type');
  }
  public set managedListType(value: string) {
    this._managedListType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get managedListTypeInput() {
    return this._managedListType;
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

export class CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesList extends cdktf.ComplexList {
  public internalValue? : CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValues[] | cdktf.IResolvable

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
  public get(index: number): CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesOutputReference {
    return new CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudGuardDetectorRecipeDetectorRulesDetailsConfigurations {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/cloud_guard_detector_recipe#allowed_values_data_type CloudGuardDetectorRecipe#allowed_values_data_type}
  */
  readonly allowedValuesDataType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/cloud_guard_detector_recipe#config_key CloudGuardDetectorRecipe#config_key}
  */
  readonly configKey: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/cloud_guard_detector_recipe#data_type CloudGuardDetectorRecipe#data_type}
  */
  readonly dataType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/cloud_guard_detector_recipe#name CloudGuardDetectorRecipe#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/cloud_guard_detector_recipe#value CloudGuardDetectorRecipe#value}
  */
  readonly value?: string;
  /**
  * additional_properties block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/cloud_guard_detector_recipe#additional_properties CloudGuardDetectorRecipe#additional_properties}
  */
  readonly additionalProperties?: CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsAdditionalProperties[] | cdktf.IResolvable;
  /**
  * allowed_values block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/cloud_guard_detector_recipe#allowed_values CloudGuardDetectorRecipe#allowed_values}
  */
  readonly allowedValues?: CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsAllowedValues[] | cdktf.IResolvable;
  /**
  * values block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/cloud_guard_detector_recipe#values CloudGuardDetectorRecipe#values}
  */
  readonly values?: CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValues[] | cdktf.IResolvable;
}

export function cloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsToTerraform(struct?: CloudGuardDetectorRecipeDetectorRulesDetailsConfigurations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed_values_data_type: cdktf.stringToTerraform(struct!.allowedValuesDataType),
    config_key: cdktf.stringToTerraform(struct!.configKey),
    data_type: cdktf.stringToTerraform(struct!.dataType),
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
    additional_properties: cdktf.listMapper(cloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsAdditionalPropertiesToTerraform, true)(struct!.additionalProperties),
    allowed_values: cdktf.listMapper(cloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsAllowedValuesToTerraform, true)(struct!.allowedValues),
    values: cdktf.listMapper(cloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesToTerraform, true)(struct!.values),
  }
}


export function cloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsToHclTerraform(struct?: CloudGuardDetectorRecipeDetectorRulesDetailsConfigurations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allowed_values_data_type: {
      value: cdktf.stringToHclTerraform(struct!.allowedValuesDataType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    config_key: {
      value: cdktf.stringToHclTerraform(struct!.configKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    data_type: {
      value: cdktf.stringToHclTerraform(struct!.dataType),
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
    additional_properties: {
      value: cdktf.listMapperHcl(cloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsAdditionalPropertiesToHclTerraform, true)(struct!.additionalProperties),
      isBlock: true,
      type: "list",
      storageClassType: "CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsAdditionalPropertiesList",
    },
    allowed_values: {
      value: cdktf.listMapperHcl(cloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsAllowedValuesToHclTerraform, true)(struct!.allowedValues),
      isBlock: true,
      type: "list",
      storageClassType: "CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsAllowedValuesList",
    },
    values: {
      value: cdktf.listMapperHcl(cloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesToHclTerraform, true)(struct!.values),
      isBlock: true,
      type: "list",
      storageClassType: "CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudGuardDetectorRecipeDetectorRulesDetailsConfigurations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedValuesDataType !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedValuesDataType = this._allowedValuesDataType;
    }
    if (this._configKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.configKey = this._configKey;
    }
    if (this._dataType !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataType = this._dataType;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    if (this._additionalProperties?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalProperties = this._additionalProperties?.internalValue;
    }
    if (this._allowedValues?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedValues = this._allowedValues?.internalValue;
    }
    if (this._values?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudGuardDetectorRecipeDetectorRulesDetailsConfigurations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowedValuesDataType = undefined;
      this._configKey = undefined;
      this._dataType = undefined;
      this._name = undefined;
      this._value = undefined;
      this._additionalProperties.internalValue = undefined;
      this._allowedValues.internalValue = undefined;
      this._values.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowedValuesDataType = value.allowedValuesDataType;
      this._configKey = value.configKey;
      this._dataType = value.dataType;
      this._name = value.name;
      this._value = value.value;
      this._additionalProperties.internalValue = value.additionalProperties;
      this._allowedValues.internalValue = value.allowedValues;
      this._values.internalValue = value.values;
    }
  }

  // allowed_values_data_type - computed: true, optional: true, required: false
  private _allowedValuesDataType?: string; 
  public get allowedValuesDataType() {
    return this.getStringAttribute('allowed_values_data_type');
  }
  public set allowedValuesDataType(value: string) {
    this._allowedValuesDataType = value;
  }
  public resetAllowedValuesDataType() {
    this._allowedValuesDataType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedValuesDataTypeInput() {
    return this._allowedValuesDataType;
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

  // data_type - computed: true, optional: true, required: false
  private _dataType?: string; 
  public get dataType() {
    return this.getStringAttribute('data_type');
  }
  public set dataType(value: string) {
    this._dataType = value;
  }
  public resetDataType() {
    this._dataType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataTypeInput() {
    return this._dataType;
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

  // value - computed: true, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }

  // additional_properties - computed: false, optional: true, required: false
  private _additionalProperties = new CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsAdditionalPropertiesList(this, "additional_properties", false);
  public get additionalProperties() {
    return this._additionalProperties;
  }
  public putAdditionalProperties(value: CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsAdditionalProperties[] | cdktf.IResolvable) {
    this._additionalProperties.internalValue = value;
  }
  public resetAdditionalProperties() {
    this._additionalProperties.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalPropertiesInput() {
    return this._additionalProperties.internalValue;
  }

  // allowed_values - computed: false, optional: true, required: false
  private _allowedValues = new CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsAllowedValuesList(this, "allowed_values", false);
  public get allowedValues() {
    return this._allowedValues;
  }
  public putAllowedValues(value: CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsAllowedValues[] | cdktf.IResolvable) {
    this._allowedValues.internalValue = value;
  }
  public resetAllowedValues() {
    this._allowedValues.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedValuesInput() {
    return this._allowedValues.internalValue;
  }

  // values - computed: false, optional: true, required: false
  private _values = new CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesList(this, "values", false);
  public get values() {
    return this._values;
  }
  public putValues(value: CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValues[] | cdktf.IResolvable) {
    this._values.internalValue = value;
  }
  public resetValues() {
    this._values.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values.internalValue;
  }
}

export class CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsList extends cdktf.ComplexList {
  public internalValue? : CloudGuardDetectorRecipeDetectorRulesDetailsConfigurations[] | cdktf.IResolvable

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
  public get(index: number): CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsOutputReference {
    return new CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/cloud_guard_detector_recipe#display_name CloudGuardDetectorRecipe#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/cloud_guard_detector_recipe#entity_type CloudGuardDetectorRecipe#entity_type}
  */
  readonly entityType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/cloud_guard_detector_recipe#query_field CloudGuardDetectorRecipe#query_field}
  */
  readonly queryField: string;
}

export function cloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsToTerraform(struct?: CloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    display_name: cdktf.stringToTerraform(struct!.displayName),
    entity_type: cdktf.stringToTerraform(struct!.entityType),
    query_field: cdktf.stringToTerraform(struct!.queryField),
  }
}


export function cloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsToHclTerraform(struct?: CloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    display_name: {
      value: cdktf.stringToHclTerraform(struct!.displayName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    entity_type: {
      value: cdktf.stringToHclTerraform(struct!.entityType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    query_field: {
      value: cdktf.stringToHclTerraform(struct!.queryField),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._displayName !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayName = this._displayName;
    }
    if (this._entityType !== undefined) {
      hasAnyValues = true;
      internalValueResult.entityType = this._entityType;
    }
    if (this._queryField !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryField = this._queryField;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._displayName = undefined;
      this._entityType = undefined;
      this._queryField = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._displayName = value.displayName;
      this._entityType = value.entityType;
      this._queryField = value.queryField;
    }
  }

  // display_name - computed: true, optional: true, required: false
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

  // entity_type - computed: true, optional: true, required: false
  private _entityType?: string; 
  public get entityType() {
    return this.getStringAttribute('entity_type');
  }
  public set entityType(value: string) {
    this._entityType = value;
  }
  public resetEntityType() {
    this._entityType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entityTypeInput() {
    return this._entityType;
  }

  // query_field - computed: false, optional: false, required: true
  private _queryField?: string; 
  public get queryField() {
    return this.getStringAttribute('query_field');
  }
  public set queryField(value: string) {
    this._queryField = value;
  }
  // Temporarily expose input value. Use with caution.
  public get queryFieldInput() {
    return this._queryField;
  }
}

export class CloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsList extends cdktf.ComplexList {
  public internalValue? : CloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappings[] | cdktf.IResolvable

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
  public get(index: number): CloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsOutputReference {
    return new CloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudGuardDetectorRecipeDetectorRulesDetails {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/cloud_guard_detector_recipe#condition CloudGuardDetectorRecipe#condition}
  */
  readonly condition?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/cloud_guard_detector_recipe#data_source_id CloudGuardDetectorRecipe#data_source_id}
  */
  readonly dataSourceId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/cloud_guard_detector_recipe#description CloudGuardDetectorRecipe#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/cloud_guard_detector_recipe#is_enabled CloudGuardDetectorRecipe#is_enabled}
  */
  readonly isEnabled: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/cloud_guard_detector_recipe#labels CloudGuardDetectorRecipe#labels}
  */
  readonly labels?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/cloud_guard_detector_recipe#recommendation CloudGuardDetectorRecipe#recommendation}
  */
  readonly recommendation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/cloud_guard_detector_recipe#risk_level CloudGuardDetectorRecipe#risk_level}
  */
  readonly riskLevel: string;
  /**
  * configurations block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/cloud_guard_detector_recipe#configurations CloudGuardDetectorRecipe#configurations}
  */
  readonly configurations?: CloudGuardDetectorRecipeDetectorRulesDetailsConfigurations[] | cdktf.IResolvable;
  /**
  * entities_mappings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/cloud_guard_detector_recipe#entities_mappings CloudGuardDetectorRecipe#entities_mappings}
  */
  readonly entitiesMappings?: CloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappings[] | cdktf.IResolvable;
}

export function cloudGuardDetectorRecipeDetectorRulesDetailsToTerraform(struct?: CloudGuardDetectorRecipeDetectorRulesDetailsOutputReference | CloudGuardDetectorRecipeDetectorRulesDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    condition: cdktf.stringToTerraform(struct!.condition),
    data_source_id: cdktf.stringToTerraform(struct!.dataSourceId),
    description: cdktf.stringToTerraform(struct!.description),
    is_enabled: cdktf.booleanToTerraform(struct!.isEnabled),
    labels: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.labels),
    recommendation: cdktf.stringToTerraform(struct!.recommendation),
    risk_level: cdktf.stringToTerraform(struct!.riskLevel),
    configurations: cdktf.listMapper(cloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsToTerraform, true)(struct!.configurations),
    entities_mappings: cdktf.listMapper(cloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsToTerraform, true)(struct!.entitiesMappings),
  }
}


export function cloudGuardDetectorRecipeDetectorRulesDetailsToHclTerraform(struct?: CloudGuardDetectorRecipeDetectorRulesDetailsOutputReference | CloudGuardDetectorRecipeDetectorRulesDetails): any {
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
    data_source_id: {
      value: cdktf.stringToHclTerraform(struct!.dataSourceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.isEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    labels: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.labels),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    recommendation: {
      value: cdktf.stringToHclTerraform(struct!.recommendation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    risk_level: {
      value: cdktf.stringToHclTerraform(struct!.riskLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    configurations: {
      value: cdktf.listMapperHcl(cloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsToHclTerraform, true)(struct!.configurations),
      isBlock: true,
      type: "list",
      storageClassType: "CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsList",
    },
    entities_mappings: {
      value: cdktf.listMapperHcl(cloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsToHclTerraform, true)(struct!.entitiesMappings),
      isBlock: true,
      type: "list",
      storageClassType: "CloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudGuardDetectorRecipeDetectorRulesDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudGuardDetectorRecipeDetectorRulesDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._condition !== undefined) {
      hasAnyValues = true;
      internalValueResult.condition = this._condition;
    }
    if (this._dataSourceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataSourceId = this._dataSourceId;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._isEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.isEnabled = this._isEnabled;
    }
    if (this._labels !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels;
    }
    if (this._recommendation !== undefined) {
      hasAnyValues = true;
      internalValueResult.recommendation = this._recommendation;
    }
    if (this._riskLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.riskLevel = this._riskLevel;
    }
    if (this._configurations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.configurations = this._configurations?.internalValue;
    }
    if (this._entitiesMappings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.entitiesMappings = this._entitiesMappings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudGuardDetectorRecipeDetectorRulesDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._condition = undefined;
      this._dataSourceId = undefined;
      this._description = undefined;
      this._isEnabled = undefined;
      this._labels = undefined;
      this._recommendation = undefined;
      this._riskLevel = undefined;
      this._configurations.internalValue = undefined;
      this._entitiesMappings.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._condition = value.condition;
      this._dataSourceId = value.dataSourceId;
      this._description = value.description;
      this._isEnabled = value.isEnabled;
      this._labels = value.labels;
      this._recommendation = value.recommendation;
      this._riskLevel = value.riskLevel;
      this._configurations.internalValue = value.configurations;
      this._entitiesMappings.internalValue = value.entitiesMappings;
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

  // data_source_id - computed: true, optional: true, required: false
  private _dataSourceId?: string; 
  public get dataSourceId() {
    return this.getStringAttribute('data_source_id');
  }
  public set dataSourceId(value: string) {
    this._dataSourceId = value;
  }
  public resetDataSourceId() {
    this._dataSourceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataSourceIdInput() {
    return this._dataSourceId;
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

  // is_configuration_allowed - computed: true, optional: false, required: false
  public get isConfigurationAllowed() {
    return this.getBooleanAttribute('is_configuration_allowed');
  }

  // is_enabled - computed: false, optional: false, required: true
  private _isEnabled?: boolean | cdktf.IResolvable; 
  public get isEnabled() {
    return this.getBooleanAttribute('is_enabled');
  }
  public set isEnabled(value: boolean | cdktf.IResolvable) {
    this._isEnabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get isEnabledInput() {
    return this._isEnabled;
  }

  // labels - computed: true, optional: true, required: false
  private _labels?: string[]; 
  public get labels() {
    return this.getListAttribute('labels');
  }
  public set labels(value: string[]) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
  }

  // recommendation - computed: true, optional: true, required: false
  private _recommendation?: string; 
  public get recommendation() {
    return this.getStringAttribute('recommendation');
  }
  public set recommendation(value: string) {
    this._recommendation = value;
  }
  public resetRecommendation() {
    this._recommendation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recommendationInput() {
    return this._recommendation;
  }

  // risk_level - computed: false, optional: false, required: true
  private _riskLevel?: string; 
  public get riskLevel() {
    return this.getStringAttribute('risk_level');
  }
  public set riskLevel(value: string) {
    this._riskLevel = value;
  }
  // Temporarily expose input value. Use with caution.
  public get riskLevelInput() {
    return this._riskLevel;
  }

  // configurations - computed: false, optional: true, required: false
  private _configurations = new CloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsList(this, "configurations", false);
  public get configurations() {
    return this._configurations;
  }
  public putConfigurations(value: CloudGuardDetectorRecipeDetectorRulesDetailsConfigurations[] | cdktf.IResolvable) {
    this._configurations.internalValue = value;
  }
  public resetConfigurations() {
    this._configurations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationsInput() {
    return this._configurations.internalValue;
  }

  // entities_mappings - computed: false, optional: true, required: false
  private _entitiesMappings = new CloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsList(this, "entities_mappings", false);
  public get entitiesMappings() {
    return this._entitiesMappings;
  }
  public putEntitiesMappings(value: CloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappings[] | cdktf.IResolvable) {
    this._entitiesMappings.internalValue = value;
  }
  public resetEntitiesMappings() {
    this._entitiesMappings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entitiesMappingsInput() {
    return this._entitiesMappings.internalValue;
  }
}
export interface CloudGuardDetectorRecipeDetectorRules {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/cloud_guard_detector_recipe#detector_rule_id CloudGuardDetectorRecipe#detector_rule_id}
  */
  readonly detectorRuleId: string;
  /**
  * details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/cloud_guard_detector_recipe#details CloudGuardDetectorRecipe#details}
  */
  readonly details: CloudGuardDetectorRecipeDetectorRulesDetails;
}

export function cloudGuardDetectorRecipeDetectorRulesToTerraform(struct?: CloudGuardDetectorRecipeDetectorRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    detector_rule_id: cdktf.stringToTerraform(struct!.detectorRuleId),
    details: cloudGuardDetectorRecipeDetectorRulesDetailsToTerraform(struct!.details),
  }
}


export function cloudGuardDetectorRecipeDetectorRulesToHclTerraform(struct?: CloudGuardDetectorRecipeDetectorRules | cdktf.IResolvable): any {
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
      value: cloudGuardDetectorRecipeDetectorRulesDetailsToHclTerraform(struct!.details),
      isBlock: true,
      type: "list",
      storageClassType: "CloudGuardDetectorRecipeDetectorRulesDetailsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudGuardDetectorRecipeDetectorRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudGuardDetectorRecipeDetectorRules | cdktf.IResolvable | undefined {
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

  public set internalValue(value: CloudGuardDetectorRecipeDetectorRules | cdktf.IResolvable | undefined) {
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

  // candidate_responder_rules - computed: true, optional: false, required: false
  private _candidateResponderRules = new CloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesList(this, "candidate_responder_rules", false);
  public get candidateResponderRules() {
    return this._candidateResponderRules;
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
  private _entitiesMappings = new CloudGuardDetectorRecipeDetectorRulesEntitiesMappingsList(this, "entities_mappings", false);
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
  private _ruleType = new CloudGuardDetectorRecipeDetectorRulesRuleTypeList(this, "rule_type", false);
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
  private _details = new CloudGuardDetectorRecipeDetectorRulesDetailsOutputReference(this, "details");
  public get details() {
    return this._details;
  }
  public putDetails(value: CloudGuardDetectorRecipeDetectorRulesDetails) {
    this._details.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get detailsInput() {
    return this._details.internalValue;
  }
}

export class CloudGuardDetectorRecipeDetectorRulesList extends cdktf.ComplexList {
  public internalValue? : CloudGuardDetectorRecipeDetectorRules[] | cdktf.IResolvable

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
  public get(index: number): CloudGuardDetectorRecipeDetectorRulesOutputReference {
    return new CloudGuardDetectorRecipeDetectorRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudGuardDetectorRecipeTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/cloud_guard_detector_recipe#create CloudGuardDetectorRecipe#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/cloud_guard_detector_recipe#delete CloudGuardDetectorRecipe#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/cloud_guard_detector_recipe#update CloudGuardDetectorRecipe#update}
  */
  readonly update?: string;
}

export function cloudGuardDetectorRecipeTimeoutsToTerraform(struct?: CloudGuardDetectorRecipeTimeouts | cdktf.IResolvable): any {
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


export function cloudGuardDetectorRecipeTimeoutsToHclTerraform(struct?: CloudGuardDetectorRecipeTimeouts | cdktf.IResolvable): any {
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

export class CloudGuardDetectorRecipeTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CloudGuardDetectorRecipeTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: CloudGuardDetectorRecipeTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/cloud_guard_detector_recipe oci_cloud_guard_detector_recipe}
*/
export class CloudGuardDetectorRecipe extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_cloud_guard_detector_recipe";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CloudGuardDetectorRecipe resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CloudGuardDetectorRecipe to import
  * @param importFromId The id of the existing CloudGuardDetectorRecipe that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/cloud_guard_detector_recipe#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CloudGuardDetectorRecipe to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_cloud_guard_detector_recipe", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/cloud_guard_detector_recipe oci_cloud_guard_detector_recipe} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CloudGuardDetectorRecipeConfig
  */
  public constructor(scope: Construct, id: string, config: CloudGuardDetectorRecipeConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_cloud_guard_detector_recipe',
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
    this._definedTags = config.definedTags;
    this._description = config.description;
    this._detector = config.detector;
    this._displayName = config.displayName;
    this._freeformTags = config.freeformTags;
    this._id = config.id;
    this._sourceDetectorRecipeId = config.sourceDetectorRecipeId;
    this._detectorRules.internalValue = config.detectorRules;
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

  // detector - computed: true, optional: true, required: false
  private _detector?: string; 
  public get detector() {
    return this.getStringAttribute('detector');
  }
  public set detector(value: string) {
    this._detector = value;
  }
  public resetDetector() {
    this._detector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get detectorInput() {
    return this._detector;
  }

  // detector_recipe_type - computed: true, optional: false, required: false
  public get detectorRecipeType() {
    return this.getStringAttribute('detector_recipe_type');
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

  // effective_detector_rules - computed: true, optional: false, required: false
  private _effectiveDetectorRules = new CloudGuardDetectorRecipeEffectiveDetectorRulesList(this, "effective_detector_rules", false);
  public get effectiveDetectorRules() {
    return this._effectiveDetectorRules;
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

  // owner - computed: true, optional: false, required: false
  public get owner() {
    return this.getStringAttribute('owner');
  }

  // source_detector_recipe_id - computed: true, optional: true, required: false
  private _sourceDetectorRecipeId?: string; 
  public get sourceDetectorRecipeId() {
    return this.getStringAttribute('source_detector_recipe_id');
  }
  public set sourceDetectorRecipeId(value: string) {
    this._sourceDetectorRecipeId = value;
  }
  public resetSourceDetectorRecipeId() {
    this._sourceDetectorRecipeId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceDetectorRecipeIdInput() {
    return this._sourceDetectorRecipeId;
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

  // target_ids - computed: true, optional: false, required: false
  public get targetIds() {
    return this.getListAttribute('target_ids');
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
  private _detectorRules = new CloudGuardDetectorRecipeDetectorRulesList(this, "detector_rules", false);
  public get detectorRules() {
    return this._detectorRules;
  }
  public putDetectorRules(value: CloudGuardDetectorRecipeDetectorRules[] | cdktf.IResolvable) {
    this._detectorRules.internalValue = value;
  }
  public resetDetectorRules() {
    this._detectorRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get detectorRulesInput() {
    return this._detectorRules.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new CloudGuardDetectorRecipeTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: CloudGuardDetectorRecipeTimeouts) {
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
      detector: cdktf.stringToTerraform(this._detector),
      display_name: cdktf.stringToTerraform(this._displayName),
      freeform_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._freeformTags),
      id: cdktf.stringToTerraform(this._id),
      source_detector_recipe_id: cdktf.stringToTerraform(this._sourceDetectorRecipeId),
      detector_rules: cdktf.listMapper(cloudGuardDetectorRecipeDetectorRulesToTerraform, true)(this._detectorRules.internalValue),
      timeouts: cloudGuardDetectorRecipeTimeoutsToTerraform(this._timeouts.internalValue),
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
      detector: {
        value: cdktf.stringToHclTerraform(this._detector),
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
      source_detector_recipe_id: {
        value: cdktf.stringToHclTerraform(this._sourceDetectorRecipeId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      detector_rules: {
        value: cdktf.listMapperHcl(cloudGuardDetectorRecipeDetectorRulesToHclTerraform, true)(this._detectorRules.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CloudGuardDetectorRecipeDetectorRulesList",
      },
      timeouts: {
        value: cloudGuardDetectorRecipeTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CloudGuardDetectorRecipeTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
