// https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/cloud_guard_detector_recipe
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciCloudGuardDetectorRecipeConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/cloud_guard_detector_recipe#detector_recipe_id DataOciCloudGuardDetectorRecipe#detector_recipe_id}
  */
  readonly detectorRecipeId: string;
}
export interface DataOciCloudGuardDetectorRecipeDetectorRulesCandidateResponderRules {
}

export function dataOciCloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesToTerraform(struct?: DataOciCloudGuardDetectorRecipeDetectorRulesCandidateResponderRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciCloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesToHclTerraform(struct?: DataOciCloudGuardDetectorRecipeDetectorRulesCandidateResponderRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciCloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciCloudGuardDetectorRecipeDetectorRulesCandidateResponderRules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciCloudGuardDetectorRecipeDetectorRulesCandidateResponderRules | undefined) {
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

export class DataOciCloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesList extends cdktf.ComplexList {

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
  public get(index: number): DataOciCloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesOutputReference {
    return new DataOciCloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsAdditionalProperties {
}

export function dataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsAdditionalPropertiesToTerraform(struct?: DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsAdditionalProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsAdditionalPropertiesToHclTerraform(struct?: DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsAdditionalProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsAdditionalPropertiesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsAdditionalProperties | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsAdditionalProperties | undefined) {
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

export class DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsAdditionalPropertiesList extends cdktf.ComplexList {

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
  public get(index: number): DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsAdditionalPropertiesOutputReference {
    return new DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsAdditionalPropertiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsAllowedValues {
}

export function dataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsAllowedValuesToTerraform(struct?: DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsAllowedValues): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsAllowedValuesToHclTerraform(struct?: DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsAllowedValues): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsAllowedValuesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsAllowedValues | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsAllowedValues | undefined) {
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

export class DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsAllowedValuesList extends cdktf.ComplexList {

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
  public get(index: number): DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsAllowedValuesOutputReference {
    return new DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsAllowedValuesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValues {
}

export function dataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesToTerraform(struct?: DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValues): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesToHclTerraform(struct?: DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValues): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValues | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValues | undefined) {
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

export class DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesList extends cdktf.ComplexList {

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
  public get(index: number): DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesOutputReference {
    return new DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurations {
}

export function dataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsToTerraform(struct?: DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsToHclTerraform(struct?: DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurations | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // additional_properties - computed: true, optional: false, required: false
  private _additionalProperties = new DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsAdditionalPropertiesList(this, "additional_properties", false);
  public get additionalProperties() {
    return this._additionalProperties;
  }

  // allowed_values - computed: true, optional: false, required: false
  private _allowedValues = new DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsAllowedValuesList(this, "allowed_values", false);
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
  private _values = new DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesList(this, "values", false);
  public get values() {
    return this._values;
  }
}

export class DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsOutputReference {
    return new DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciCloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappings {
}

export function dataOciCloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsToTerraform(struct?: DataOciCloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciCloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsToHclTerraform(struct?: DataOciCloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciCloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciCloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciCloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappings | undefined) {
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

export class DataOciCloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciCloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsOutputReference {
    return new DataOciCloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciCloudGuardDetectorRecipeDetectorRulesDetails {
}

export function dataOciCloudGuardDetectorRecipeDetectorRulesDetailsToTerraform(struct?: DataOciCloudGuardDetectorRecipeDetectorRulesDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciCloudGuardDetectorRecipeDetectorRulesDetailsToHclTerraform(struct?: DataOciCloudGuardDetectorRecipeDetectorRulesDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciCloudGuardDetectorRecipeDetectorRulesDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciCloudGuardDetectorRecipeDetectorRulesDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciCloudGuardDetectorRecipeDetectorRulesDetails | undefined) {
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
  private _configurations = new DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsList(this, "configurations", false);
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
  private _entitiesMappings = new DataOciCloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsList(this, "entities_mappings", false);
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

export class DataOciCloudGuardDetectorRecipeDetectorRulesDetailsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciCloudGuardDetectorRecipeDetectorRulesDetailsOutputReference {
    return new DataOciCloudGuardDetectorRecipeDetectorRulesDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciCloudGuardDetectorRecipeDetectorRulesEntitiesMappings {
}

export function dataOciCloudGuardDetectorRecipeDetectorRulesEntitiesMappingsToTerraform(struct?: DataOciCloudGuardDetectorRecipeDetectorRulesEntitiesMappings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciCloudGuardDetectorRecipeDetectorRulesEntitiesMappingsToHclTerraform(struct?: DataOciCloudGuardDetectorRecipeDetectorRulesEntitiesMappings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciCloudGuardDetectorRecipeDetectorRulesEntitiesMappingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciCloudGuardDetectorRecipeDetectorRulesEntitiesMappings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciCloudGuardDetectorRecipeDetectorRulesEntitiesMappings | undefined) {
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

export class DataOciCloudGuardDetectorRecipeDetectorRulesEntitiesMappingsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciCloudGuardDetectorRecipeDetectorRulesEntitiesMappingsOutputReference {
    return new DataOciCloudGuardDetectorRecipeDetectorRulesEntitiesMappingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciCloudGuardDetectorRecipeDetectorRulesRuleType {
}

export function dataOciCloudGuardDetectorRecipeDetectorRulesRuleTypeToTerraform(struct?: DataOciCloudGuardDetectorRecipeDetectorRulesRuleType): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciCloudGuardDetectorRecipeDetectorRulesRuleTypeToHclTerraform(struct?: DataOciCloudGuardDetectorRecipeDetectorRulesRuleType): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciCloudGuardDetectorRecipeDetectorRulesRuleTypeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciCloudGuardDetectorRecipeDetectorRulesRuleType | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciCloudGuardDetectorRecipeDetectorRulesRuleType | undefined) {
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

export class DataOciCloudGuardDetectorRecipeDetectorRulesRuleTypeList extends cdktf.ComplexList {

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
  public get(index: number): DataOciCloudGuardDetectorRecipeDetectorRulesRuleTypeOutputReference {
    return new DataOciCloudGuardDetectorRecipeDetectorRulesRuleTypeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciCloudGuardDetectorRecipeDetectorRules {
}

export function dataOciCloudGuardDetectorRecipeDetectorRulesToTerraform(struct?: DataOciCloudGuardDetectorRecipeDetectorRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciCloudGuardDetectorRecipeDetectorRulesToHclTerraform(struct?: DataOciCloudGuardDetectorRecipeDetectorRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciCloudGuardDetectorRecipeDetectorRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciCloudGuardDetectorRecipeDetectorRules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciCloudGuardDetectorRecipeDetectorRules | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // candidate_responder_rules - computed: true, optional: false, required: false
  private _candidateResponderRules = new DataOciCloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesList(this, "candidate_responder_rules", false);
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
  private _details = new DataOciCloudGuardDetectorRecipeDetectorRulesDetailsList(this, "details", false);
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
  private _entitiesMappings = new DataOciCloudGuardDetectorRecipeDetectorRulesEntitiesMappingsList(this, "entities_mappings", false);
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
  private _ruleType = new DataOciCloudGuardDetectorRecipeDetectorRulesRuleTypeList(this, "rule_type", false);
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

export class DataOciCloudGuardDetectorRecipeDetectorRulesList extends cdktf.ComplexList {

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
  public get(index: number): DataOciCloudGuardDetectorRecipeDetectorRulesOutputReference {
    return new DataOciCloudGuardDetectorRecipeDetectorRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRules {
}

export function dataOciCloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesToTerraform(struct?: DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciCloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesToHclTerraform(struct?: DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRules | undefined) {
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

export class DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesList extends cdktf.ComplexList {

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
  public get(index: number): DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesOutputReference {
    return new DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsAdditionalProperties {
}

export function dataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsAdditionalPropertiesToTerraform(struct?: DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsAdditionalProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsAdditionalPropertiesToHclTerraform(struct?: DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsAdditionalProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsAdditionalPropertiesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsAdditionalProperties | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsAdditionalProperties | undefined) {
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

export class DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsAdditionalPropertiesList extends cdktf.ComplexList {

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
  public get(index: number): DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsAdditionalPropertiesOutputReference {
    return new DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsAdditionalPropertiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsAllowedValues {
}

export function dataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsAllowedValuesToTerraform(struct?: DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsAllowedValues): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsAllowedValuesToHclTerraform(struct?: DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsAllowedValues): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsAllowedValuesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsAllowedValues | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsAllowedValues | undefined) {
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

export class DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsAllowedValuesList extends cdktf.ComplexList {

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
  public get(index: number): DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsAllowedValuesOutputReference {
    return new DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsAllowedValuesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValues {
}

export function dataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesToTerraform(struct?: DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValues): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesToHclTerraform(struct?: DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValues): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValues | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValues | undefined) {
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

export class DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesList extends cdktf.ComplexList {

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
  public get(index: number): DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference {
    return new DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurations {
}

export function dataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsToTerraform(struct?: DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsToHclTerraform(struct?: DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurations | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // additional_properties - computed: true, optional: false, required: false
  private _additionalProperties = new DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsAdditionalPropertiesList(this, "additional_properties", false);
  public get additionalProperties() {
    return this._additionalProperties;
  }

  // allowed_values - computed: true, optional: false, required: false
  private _allowedValues = new DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsAllowedValuesList(this, "allowed_values", false);
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
  private _values = new DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesList(this, "values", false);
  public get values() {
    return this._values;
  }
}

export class DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsOutputReference {
    return new DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappings {
}

export function dataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsToTerraform(struct?: DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsToHclTerraform(struct?: DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappings | undefined) {
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

export class DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference {
    return new DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetails {
}

export function dataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsToTerraform(struct?: DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsToHclTerraform(struct?: DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetails | undefined) {
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
  private _configurations = new DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsList(this, "configurations", false);
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
  private _entitiesMappings = new DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsList(this, "entities_mappings", false);
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

export class DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsOutputReference {
    return new DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappings {
}

export function dataOciCloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsToTerraform(struct?: DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciCloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsToHclTerraform(struct?: DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappings | undefined) {
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

export class DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsOutputReference {
    return new DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesRuleType {
}

export function dataOciCloudGuardDetectorRecipeEffectiveDetectorRulesRuleTypeToTerraform(struct?: DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesRuleType): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciCloudGuardDetectorRecipeEffectiveDetectorRulesRuleTypeToHclTerraform(struct?: DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesRuleType): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesRuleTypeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesRuleType | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesRuleType | undefined) {
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

export class DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesRuleTypeList extends cdktf.ComplexList {

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
  public get(index: number): DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesRuleTypeOutputReference {
    return new DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesRuleTypeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciCloudGuardDetectorRecipeEffectiveDetectorRules {
}

export function dataOciCloudGuardDetectorRecipeEffectiveDetectorRulesToTerraform(struct?: DataOciCloudGuardDetectorRecipeEffectiveDetectorRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciCloudGuardDetectorRecipeEffectiveDetectorRulesToHclTerraform(struct?: DataOciCloudGuardDetectorRecipeEffectiveDetectorRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciCloudGuardDetectorRecipeEffectiveDetectorRules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciCloudGuardDetectorRecipeEffectiveDetectorRules | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // candidate_responder_rules - computed: true, optional: false, required: false
  private _candidateResponderRules = new DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesList(this, "candidate_responder_rules", false);
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
  private _details = new DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsList(this, "details", false);
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
  private _entitiesMappings = new DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsList(this, "entities_mappings", false);
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
  private _ruleType = new DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesRuleTypeList(this, "rule_type", false);
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

export class DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesList extends cdktf.ComplexList {

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
  public get(index: number): DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesOutputReference {
    return new DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/cloud_guard_detector_recipe oci_cloud_guard_detector_recipe}
*/
export class DataOciCloudGuardDetectorRecipe extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_cloud_guard_detector_recipe";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciCloudGuardDetectorRecipe resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciCloudGuardDetectorRecipe to import
  * @param importFromId The id of the existing DataOciCloudGuardDetectorRecipe that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/cloud_guard_detector_recipe#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciCloudGuardDetectorRecipe to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_cloud_guard_detector_recipe", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/cloud_guard_detector_recipe oci_cloud_guard_detector_recipe} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciCloudGuardDetectorRecipeConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciCloudGuardDetectorRecipeConfig) {
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
    this._detectorRecipeId = config.detectorRecipeId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // detector_rules - computed: true, optional: false, required: false
  private _detectorRules = new DataOciCloudGuardDetectorRecipeDetectorRulesList(this, "detector_rules", false);
  public get detectorRules() {
    return this._detectorRules;
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // effective_detector_rules - computed: true, optional: false, required: false
  private _effectiveDetectorRules = new DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesList(this, "effective_detector_rules", false);
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      detector_recipe_id: cdktf.stringToTerraform(this._detectorRecipeId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      detector_recipe_id: {
        value: cdktf.stringToHclTerraform(this._detectorRecipeId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
