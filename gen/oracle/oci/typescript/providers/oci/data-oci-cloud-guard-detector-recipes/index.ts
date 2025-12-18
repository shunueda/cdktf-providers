// https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/cloud_guard_detector_recipes
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciCloudGuardDetectorRecipesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/cloud_guard_detector_recipes#access_level DataOciCloudGuardDetectorRecipes#access_level}
  */
  readonly accessLevel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/cloud_guard_detector_recipes#compartment_id DataOciCloudGuardDetectorRecipes#compartment_id}
  */
  readonly compartmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/cloud_guard_detector_recipes#compartment_id_in_subtree DataOciCloudGuardDetectorRecipes#compartment_id_in_subtree}
  */
  readonly compartmentIdInSubtree?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/cloud_guard_detector_recipes#display_name DataOciCloudGuardDetectorRecipes#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/cloud_guard_detector_recipes#id DataOciCloudGuardDetectorRecipes#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/cloud_guard_detector_recipes#resource_metadata_only DataOciCloudGuardDetectorRecipes#resource_metadata_only}
  */
  readonly resourceMetadataOnly?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/cloud_guard_detector_recipes#state DataOciCloudGuardDetectorRecipes#state}
  */
  readonly state?: string;
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/cloud_guard_detector_recipes#filter DataOciCloudGuardDetectorRecipes#filter}
  */
  readonly filter?: DataOciCloudGuardDetectorRecipesFilter[] | cdktf.IResolvable;
}
export interface DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRules {
}

export function dataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesToTerraform(struct?: DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesToHclTerraform(struct?: DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRules | undefined) {
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

export class DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesList extends cdktf.ComplexList {

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
  public get(index: number): DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesOutputReference {
    return new DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsAdditionalProperties {
}

export function dataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsAdditionalPropertiesToTerraform(struct?: DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsAdditionalProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsAdditionalPropertiesToHclTerraform(struct?: DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsAdditionalProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsAdditionalPropertiesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsAdditionalProperties | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsAdditionalProperties | undefined) {
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

export class DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsAdditionalPropertiesList extends cdktf.ComplexList {

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
  public get(index: number): DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsAdditionalPropertiesOutputReference {
    return new DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsAdditionalPropertiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsAllowedValues {
}

export function dataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsAllowedValuesToTerraform(struct?: DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsAllowedValues): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsAllowedValuesToHclTerraform(struct?: DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsAllowedValues): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsAllowedValuesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsAllowedValues | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsAllowedValues | undefined) {
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

export class DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsAllowedValuesList extends cdktf.ComplexList {

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
  public get(index: number): DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsAllowedValuesOutputReference {
    return new DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsAllowedValuesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValues {
}

export function dataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesToTerraform(struct?: DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValues): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesToHclTerraform(struct?: DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValues): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValues | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValues | undefined) {
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

export class DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesList extends cdktf.ComplexList {

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
  public get(index: number): DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesOutputReference {
    return new DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurations {
}

export function dataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsToTerraform(struct?: DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsToHclTerraform(struct?: DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurations | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // additional_properties - computed: true, optional: false, required: false
  private _additionalProperties = new DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsAdditionalPropertiesList(this, "additional_properties", false);
  public get additionalProperties() {
    return this._additionalProperties;
  }

  // allowed_values - computed: true, optional: false, required: false
  private _allowedValues = new DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsAllowedValuesList(this, "allowed_values", false);
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
  private _values = new DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsValuesList(this, "values", false);
  public get values() {
    return this._values;
  }
}

export class DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsOutputReference {
    return new DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappings {
}

export function dataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsToTerraform(struct?: DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsToHclTerraform(struct?: DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappings | undefined) {
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

export class DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsOutputReference {
    return new DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetails {
}

export function dataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsToTerraform(struct?: DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsToHclTerraform(struct?: DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetails | undefined) {
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
  private _configurations = new DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsConfigurationsList(this, "configurations", false);
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
  private _entitiesMappings = new DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsEntitiesMappingsList(this, "entities_mappings", false);
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

export class DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsOutputReference {
    return new DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappings {
}

export function dataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsToTerraform(struct?: DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsToHclTerraform(struct?: DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappings | undefined) {
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

export class DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsOutputReference {
    return new DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesRuleType {
}

export function dataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesRuleTypeToTerraform(struct?: DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesRuleType): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesRuleTypeToHclTerraform(struct?: DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesRuleType): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesRuleTypeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesRuleType | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesRuleType | undefined) {
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

export class DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesRuleTypeList extends cdktf.ComplexList {

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
  public get(index: number): DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesRuleTypeOutputReference {
    return new DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesRuleTypeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRules {
}

export function dataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesToTerraform(struct?: DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesToHclTerraform(struct?: DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRules | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // candidate_responder_rules - computed: true, optional: false, required: false
  private _candidateResponderRules = new DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesCandidateResponderRulesList(this, "candidate_responder_rules", false);
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
  private _details = new DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesDetailsList(this, "details", false);
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
  private _entitiesMappings = new DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesEntitiesMappingsList(this, "entities_mappings", false);
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
  private _ruleType = new DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesRuleTypeList(this, "rule_type", false);
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

export class DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesList extends cdktf.ComplexList {

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
  public get(index: number): DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesOutputReference {
    return new DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRules {
}

export function dataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesToTerraform(struct?: DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesToHclTerraform(struct?: DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRules | undefined) {
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

export class DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesList extends cdktf.ComplexList {

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
  public get(index: number): DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesOutputReference {
    return new DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsAdditionalProperties {
}

export function dataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsAdditionalPropertiesToTerraform(struct?: DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsAdditionalProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsAdditionalPropertiesToHclTerraform(struct?: DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsAdditionalProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsAdditionalPropertiesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsAdditionalProperties | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsAdditionalProperties | undefined) {
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

export class DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsAdditionalPropertiesList extends cdktf.ComplexList {

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
  public get(index: number): DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsAdditionalPropertiesOutputReference {
    return new DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsAdditionalPropertiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsAllowedValues {
}

export function dataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsAllowedValuesToTerraform(struct?: DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsAllowedValues): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsAllowedValuesToHclTerraform(struct?: DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsAllowedValues): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsAllowedValuesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsAllowedValues | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsAllowedValues | undefined) {
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

export class DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsAllowedValuesList extends cdktf.ComplexList {

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
  public get(index: number): DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsAllowedValuesOutputReference {
    return new DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsAllowedValuesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValues {
}

export function dataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesToTerraform(struct?: DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValues): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesToHclTerraform(struct?: DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValues): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValues | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValues | undefined) {
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

export class DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesList extends cdktf.ComplexList {

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
  public get(index: number): DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference {
    return new DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurations {
}

export function dataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsToTerraform(struct?: DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsToHclTerraform(struct?: DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurations | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // additional_properties - computed: true, optional: false, required: false
  private _additionalProperties = new DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsAdditionalPropertiesList(this, "additional_properties", false);
  public get additionalProperties() {
    return this._additionalProperties;
  }

  // allowed_values - computed: true, optional: false, required: false
  private _allowedValues = new DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsAllowedValuesList(this, "allowed_values", false);
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
  private _values = new DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsValuesList(this, "values", false);
  public get values() {
    return this._values;
  }
}

export class DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsOutputReference {
    return new DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappings {
}

export function dataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsToTerraform(struct?: DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsToHclTerraform(struct?: DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappings | undefined) {
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

export class DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference {
    return new DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetails {
}

export function dataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsToTerraform(struct?: DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsToHclTerraform(struct?: DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetails | undefined) {
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
  private _configurations = new DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsConfigurationsList(this, "configurations", false);
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
  private _entitiesMappings = new DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsEntitiesMappingsList(this, "entities_mappings", false);
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

export class DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsOutputReference {
    return new DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappings {
}

export function dataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsToTerraform(struct?: DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsToHclTerraform(struct?: DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappings | undefined) {
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

export class DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsOutputReference {
    return new DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesRuleType {
}

export function dataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesRuleTypeToTerraform(struct?: DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesRuleType): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesRuleTypeToHclTerraform(struct?: DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesRuleType): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesRuleTypeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesRuleType | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesRuleType | undefined) {
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

export class DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesRuleTypeList extends cdktf.ComplexList {

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
  public get(index: number): DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesRuleTypeOutputReference {
    return new DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesRuleTypeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRules {
}

export function dataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesToTerraform(struct?: DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesToHclTerraform(struct?: DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRules | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // candidate_responder_rules - computed: true, optional: false, required: false
  private _candidateResponderRules = new DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesCandidateResponderRulesList(this, "candidate_responder_rules", false);
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
  private _details = new DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesDetailsList(this, "details", false);
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
  private _entitiesMappings = new DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesEntitiesMappingsList(this, "entities_mappings", false);
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
  private _ruleType = new DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesRuleTypeList(this, "rule_type", false);
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

export class DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesList extends cdktf.ComplexList {

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
  public get(index: number): DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesOutputReference {
    return new DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItems {
}

export function dataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsToTerraform(struct?: DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsToHclTerraform(struct?: DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItems | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItems | undefined) {
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

  // detector - computed: true, optional: false, required: false
  public get detector() {
    return this.getStringAttribute('detector');
  }

  // detector_recipe_type - computed: true, optional: false, required: false
  public get detectorRecipeType() {
    return this.getStringAttribute('detector_recipe_type');
  }

  // detector_rules - computed: true, optional: false, required: false
  private _detectorRules = new DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsDetectorRulesList(this, "detector_rules", false);
  public get detectorRules() {
    return this._detectorRules;
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // effective_detector_rules - computed: true, optional: false, required: false
  private _effectiveDetectorRules = new DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsEffectiveDetectorRulesList(this, "effective_detector_rules", false);
  public get effectiveDetectorRules() {
    return this._effectiveDetectorRules;
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

  // owner - computed: true, optional: false, required: false
  public get owner() {
    return this.getStringAttribute('owner');
  }

  // source_detector_recipe_id - computed: true, optional: false, required: false
  public get sourceDetectorRecipeId() {
    return this.getStringAttribute('source_detector_recipe_id');
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
}

export class DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsOutputReference {
    return new DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciCloudGuardDetectorRecipesDetectorRecipeCollection {
}

export function dataOciCloudGuardDetectorRecipesDetectorRecipeCollectionToTerraform(struct?: DataOciCloudGuardDetectorRecipesDetectorRecipeCollection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciCloudGuardDetectorRecipesDetectorRecipeCollectionToHclTerraform(struct?: DataOciCloudGuardDetectorRecipesDetectorRecipeCollection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciCloudGuardDetectorRecipesDetectorRecipeCollection | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciCloudGuardDetectorRecipesDetectorRecipeCollection | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // items - computed: true, optional: false, required: false
  private _items = new DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
}

export class DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionList extends cdktf.ComplexList {

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
  public get(index: number): DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionOutputReference {
    return new DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciCloudGuardDetectorRecipesFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/cloud_guard_detector_recipes#name DataOciCloudGuardDetectorRecipes#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/cloud_guard_detector_recipes#regex DataOciCloudGuardDetectorRecipes#regex}
  */
  readonly regex?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/cloud_guard_detector_recipes#values DataOciCloudGuardDetectorRecipes#values}
  */
  readonly values: string[];
}

export function dataOciCloudGuardDetectorRecipesFilterToTerraform(struct?: DataOciCloudGuardDetectorRecipesFilter | cdktf.IResolvable): any {
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


export function dataOciCloudGuardDetectorRecipesFilterToHclTerraform(struct?: DataOciCloudGuardDetectorRecipesFilter | cdktf.IResolvable): any {
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

export class DataOciCloudGuardDetectorRecipesFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciCloudGuardDetectorRecipesFilter | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataOciCloudGuardDetectorRecipesFilter | cdktf.IResolvable | undefined) {
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

export class DataOciCloudGuardDetectorRecipesFilterList extends cdktf.ComplexList {
  public internalValue? : DataOciCloudGuardDetectorRecipesFilter[] | cdktf.IResolvable

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
  public get(index: number): DataOciCloudGuardDetectorRecipesFilterOutputReference {
    return new DataOciCloudGuardDetectorRecipesFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/cloud_guard_detector_recipes oci_cloud_guard_detector_recipes}
*/
export class DataOciCloudGuardDetectorRecipes extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_cloud_guard_detector_recipes";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciCloudGuardDetectorRecipes resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciCloudGuardDetectorRecipes to import
  * @param importFromId The id of the existing DataOciCloudGuardDetectorRecipes that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/cloud_guard_detector_recipes#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciCloudGuardDetectorRecipes to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_cloud_guard_detector_recipes", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/cloud_guard_detector_recipes oci_cloud_guard_detector_recipes} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciCloudGuardDetectorRecipesConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciCloudGuardDetectorRecipesConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_cloud_guard_detector_recipes',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.29.0',
        providerVersionConstraint: '7.29.0'
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
    this._resourceMetadataOnly = config.resourceMetadataOnly;
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

  // detector_recipe_collection - computed: true, optional: false, required: false
  private _detectorRecipeCollection = new DataOciCloudGuardDetectorRecipesDetectorRecipeCollectionList(this, "detector_recipe_collection", false);
  public get detectorRecipeCollection() {
    return this._detectorRecipeCollection;
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

  // resource_metadata_only - computed: false, optional: true, required: false
  private _resourceMetadataOnly?: boolean | cdktf.IResolvable; 
  public get resourceMetadataOnly() {
    return this.getBooleanAttribute('resource_metadata_only');
  }
  public set resourceMetadataOnly(value: boolean | cdktf.IResolvable) {
    this._resourceMetadataOnly = value;
  }
  public resetResourceMetadataOnly() {
    this._resourceMetadataOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceMetadataOnlyInput() {
    return this._resourceMetadataOnly;
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
  private _filter = new DataOciCloudGuardDetectorRecipesFilterList(this, "filter", true);
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataOciCloudGuardDetectorRecipesFilter[] | cdktf.IResolvable) {
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
      resource_metadata_only: cdktf.booleanToTerraform(this._resourceMetadataOnly),
      state: cdktf.stringToTerraform(this._state),
      filter: cdktf.listMapper(dataOciCloudGuardDetectorRecipesFilterToTerraform, true)(this._filter.internalValue),
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
      resource_metadata_only: {
        value: cdktf.booleanToHclTerraform(this._resourceMetadataOnly),
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
        value: cdktf.listMapperHcl(dataOciCloudGuardDetectorRecipesFilterToHclTerraform, true)(this._filter.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataOciCloudGuardDetectorRecipesFilterList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
