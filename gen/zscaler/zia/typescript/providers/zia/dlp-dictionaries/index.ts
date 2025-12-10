// https://registry.terraform.io/providers/zscaler/zia/4.6.5/docs/resources/dlp_dictionaries
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DlpDictionariesConfig extends cdktf.TerraformMetaArguments {
  /**
  * The list of Bank Identification Number (BIN) values that are included or excluded from the Credit Cards dictionary. BIN values can be specified only for Diners Club, Mastercard, RuPay, and Visa cards. Up to 512 BIN values can be configured in a dictionary. Note: This field is applicable only to the predefined Credit Cards dictionary and its clones.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.5/docs/resources/dlp_dictionaries#bin_numbers DlpDictionaries#bin_numbers}
  */
  readonly binNumbers?: number[];
  /**
  * The DLP confidence threshold for predefined dictionaries
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.5/docs/resources/dlp_dictionaries#confidence_level_for_predefined_dict DlpDictionaries#confidence_level_for_predefined_dict}
  */
  readonly confidenceLevelForPredefinedDict?: string;
  /**
  * The DLP confidence threshold
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.5/docs/resources/dlp_dictionaries#confidence_threshold DlpDictionaries#confidence_threshold}
  */
  readonly confidenceThreshold?: string;
  /**
  * The DLP dictionary proximity length.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.5/docs/resources/dlp_dictionaries#custom DlpDictionaries#custom}
  */
  readonly custom?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.5/docs/resources/dlp_dictionaries#custom_phrase_match_type DlpDictionaries#custom_phrase_match_type}
  */
  readonly customPhraseMatchType?: string;
  /**
  * The desciption of the DLP dictionary
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.5/docs/resources/dlp_dictionaries#description DlpDictionaries#description}
  */
  readonly description?: string;
  /**
  * ID of the predefined dictionary (original source dictionary) that is used for cloning. This field is applicable only to cloned dictionaries. Only a limited set of identification-based predefined dictionaries (e.g., Credit Cards, Social Security Numbers, National Identification Numbers, etc.) can be cloned. Up to 4 clones can be created from a predefined dictionary.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.5/docs/resources/dlp_dictionaries#dict_template_id DlpDictionaries#dict_template_id}
  */
  readonly dictTemplateId?: number;
  /**
  * The DLP dictionary type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.5/docs/resources/dlp_dictionaries#dictionary_type DlpDictionaries#dictionary_type}
  */
  readonly dictionaryType?: string;
  /**
  * List of hierarchical identifiers for the DLP dictionary.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.5/docs/resources/dlp_dictionaries#hierarchical_identifiers DlpDictionaries#hierarchical_identifiers}
  */
  readonly hierarchicalIdentifiers?: string[];
  /**
  * Indicates whether to exclude documents that are a 100% match to already-indexed documents from triggering an Indexed Document Match (IDM) Dictionary.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.5/docs/resources/dlp_dictionaries#ignore_exact_match_idm_dict DlpDictionaries#ignore_exact_match_idm_dict}
  */
  readonly ignoreExactMatchIdmDict?: boolean | cdktf.IResolvable;
  /**
  * A true value denotes that the specified Bank Identification Number (BIN) values are included in the Credit Cards dictionary. A false value denotes that the specified BIN values are excluded from the Credit Cards dictionary.Note: This field is applicable only to the predefined Credit Cards dictionary and its clones.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.5/docs/resources/dlp_dictionaries#include_bin_numbers DlpDictionaries#include_bin_numbers}
  */
  readonly includeBinNumbers?: boolean | cdktf.IResolvable;
  /**
  * The DLP dictionary's name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.5/docs/resources/dlp_dictionaries#name DlpDictionaries#name}
  */
  readonly name?: string;
  /**
  * The DLP dictionary proximity length that defines how close a high confidence phrase must be to an instance of the pattern (that the dictionary detects) to count as a match.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.5/docs/resources/dlp_dictionaries#proximity DlpDictionaries#proximity}
  */
  readonly proximity?: number;
  /**
  * A Boolean constant that indicates if proximity length is enabled or disabled for a custom DLP dictionary.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.5/docs/resources/dlp_dictionaries#proximity_enabled_for_custom_dictionary DlpDictionaries#proximity_enabled_for_custom_dictionary}
  */
  readonly proximityEnabledForCustomDictionary?: boolean | cdktf.IResolvable;
  /**
  * exact_data_match_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.5/docs/resources/dlp_dictionaries#exact_data_match_details DlpDictionaries#exact_data_match_details}
  */
  readonly exactDataMatchDetails?: DlpDictionariesExactDataMatchDetails[] | cdktf.IResolvable;
  /**
  * idm_profile_match_accuracy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.5/docs/resources/dlp_dictionaries#idm_profile_match_accuracy DlpDictionaries#idm_profile_match_accuracy}
  */
  readonly idmProfileMatchAccuracy?: DlpDictionariesIdmProfileMatchAccuracy[] | cdktf.IResolvable;
  /**
  * patterns block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.5/docs/resources/dlp_dictionaries#patterns DlpDictionaries#patterns}
  */
  readonly patterns?: DlpDictionariesPatterns[] | cdktf.IResolvable;
  /**
  * phrases block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.5/docs/resources/dlp_dictionaries#phrases DlpDictionaries#phrases}
  */
  readonly phrases?: DlpDictionariesPhrases[] | cdktf.IResolvable;
}
export interface DlpDictionariesExactDataMatchDetails {
  /**
  * The unique identifier for the EDM mapping
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.5/docs/resources/dlp_dictionaries#dictionary_edm_mapping_id DlpDictionaries#dictionary_edm_mapping_id}
  */
  readonly dictionaryEdmMappingId?: number;
  /**
  * The EDM template's primary field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.5/docs/resources/dlp_dictionaries#primary_fields DlpDictionaries#primary_fields}
  */
  readonly primaryFields?: number[];
  /**
  * The unique identifier for the EDM template (or schema).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.5/docs/resources/dlp_dictionaries#schema_id DlpDictionaries#schema_id}
  */
  readonly schemaId?: number;
  /**
  * The EDM secondary field to match on.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.5/docs/resources/dlp_dictionaries#secondary_field_match_on DlpDictionaries#secondary_field_match_on}
  */
  readonly secondaryFieldMatchOn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.5/docs/resources/dlp_dictionaries#secondary_fields DlpDictionaries#secondary_fields}
  */
  readonly secondaryFields?: number[];
}

export function dlpDictionariesExactDataMatchDetailsToTerraform(struct?: DlpDictionariesExactDataMatchDetails | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dictionary_edm_mapping_id: cdktf.numberToTerraform(struct!.dictionaryEdmMappingId),
    primary_fields: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.primaryFields),
    schema_id: cdktf.numberToTerraform(struct!.schemaId),
    secondary_field_match_on: cdktf.stringToTerraform(struct!.secondaryFieldMatchOn),
    secondary_fields: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.secondaryFields),
  }
}


export function dlpDictionariesExactDataMatchDetailsToHclTerraform(struct?: DlpDictionariesExactDataMatchDetails | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dictionary_edm_mapping_id: {
      value: cdktf.numberToHclTerraform(struct!.dictionaryEdmMappingId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    primary_fields: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.primaryFields),
      isBlock: false,
      type: "list",
      storageClassType: "numberList",
    },
    schema_id: {
      value: cdktf.numberToHclTerraform(struct!.schemaId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    secondary_field_match_on: {
      value: cdktf.stringToHclTerraform(struct!.secondaryFieldMatchOn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secondary_fields: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.secondaryFields),
      isBlock: false,
      type: "list",
      storageClassType: "numberList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DlpDictionariesExactDataMatchDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DlpDictionariesExactDataMatchDetails | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dictionaryEdmMappingId !== undefined) {
      hasAnyValues = true;
      internalValueResult.dictionaryEdmMappingId = this._dictionaryEdmMappingId;
    }
    if (this._primaryFields !== undefined) {
      hasAnyValues = true;
      internalValueResult.primaryFields = this._primaryFields;
    }
    if (this._schemaId !== undefined) {
      hasAnyValues = true;
      internalValueResult.schemaId = this._schemaId;
    }
    if (this._secondaryFieldMatchOn !== undefined) {
      hasAnyValues = true;
      internalValueResult.secondaryFieldMatchOn = this._secondaryFieldMatchOn;
    }
    if (this._secondaryFields !== undefined) {
      hasAnyValues = true;
      internalValueResult.secondaryFields = this._secondaryFields;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DlpDictionariesExactDataMatchDetails | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dictionaryEdmMappingId = undefined;
      this._primaryFields = undefined;
      this._schemaId = undefined;
      this._secondaryFieldMatchOn = undefined;
      this._secondaryFields = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dictionaryEdmMappingId = value.dictionaryEdmMappingId;
      this._primaryFields = value.primaryFields;
      this._schemaId = value.schemaId;
      this._secondaryFieldMatchOn = value.secondaryFieldMatchOn;
      this._secondaryFields = value.secondaryFields;
    }
  }

  // dictionary_edm_mapping_id - computed: true, optional: true, required: false
  private _dictionaryEdmMappingId?: number; 
  public get dictionaryEdmMappingId() {
    return this.getNumberAttribute('dictionary_edm_mapping_id');
  }
  public set dictionaryEdmMappingId(value: number) {
    this._dictionaryEdmMappingId = value;
  }
  public resetDictionaryEdmMappingId() {
    this._dictionaryEdmMappingId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dictionaryEdmMappingIdInput() {
    return this._dictionaryEdmMappingId;
  }

  // primary_fields - computed: true, optional: true, required: false
  private _primaryFields?: number[]; 
  public get primaryFields() {
    return this.getNumberListAttribute('primary_fields');
  }
  public set primaryFields(value: number[]) {
    this._primaryFields = value;
  }
  public resetPrimaryFields() {
    this._primaryFields = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryFieldsInput() {
    return this._primaryFields;
  }

  // schema_id - computed: true, optional: true, required: false
  private _schemaId?: number; 
  public get schemaId() {
    return this.getNumberAttribute('schema_id');
  }
  public set schemaId(value: number) {
    this._schemaId = value;
  }
  public resetSchemaId() {
    this._schemaId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaIdInput() {
    return this._schemaId;
  }

  // secondary_field_match_on - computed: false, optional: true, required: false
  private _secondaryFieldMatchOn?: string; 
  public get secondaryFieldMatchOn() {
    return this.getStringAttribute('secondary_field_match_on');
  }
  public set secondaryFieldMatchOn(value: string) {
    this._secondaryFieldMatchOn = value;
  }
  public resetSecondaryFieldMatchOn() {
    this._secondaryFieldMatchOn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondaryFieldMatchOnInput() {
    return this._secondaryFieldMatchOn;
  }

  // secondary_fields - computed: true, optional: true, required: false
  private _secondaryFields?: number[]; 
  public get secondaryFields() {
    return this.getNumberListAttribute('secondary_fields');
  }
  public set secondaryFields(value: number[]) {
    this._secondaryFields = value;
  }
  public resetSecondaryFields() {
    this._secondaryFields = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondaryFieldsInput() {
    return this._secondaryFields;
  }
}

export class DlpDictionariesExactDataMatchDetailsList extends cdktf.ComplexList {
  public internalValue? : DlpDictionariesExactDataMatchDetails[] | cdktf.IResolvable

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
  public get(index: number): DlpDictionariesExactDataMatchDetailsOutputReference {
    return new DlpDictionariesExactDataMatchDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DlpDictionariesIdmProfileMatchAccuracyAdpIdmProfile {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.5/docs/resources/dlp_dictionaries#extensions DlpDictionaries#extensions}
  */
  readonly extensions?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.5/docs/resources/dlp_dictionaries#id DlpDictionaries#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
}

export function dlpDictionariesIdmProfileMatchAccuracyAdpIdmProfileToTerraform(struct?: DlpDictionariesIdmProfileMatchAccuracyAdpIdmProfile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    extensions: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.extensions),
    id: cdktf.numberToTerraform(struct!.id),
  }
}


export function dlpDictionariesIdmProfileMatchAccuracyAdpIdmProfileToHclTerraform(struct?: DlpDictionariesIdmProfileMatchAccuracyAdpIdmProfile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    extensions: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.extensions),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    id: {
      value: cdktf.numberToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DlpDictionariesIdmProfileMatchAccuracyAdpIdmProfileOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DlpDictionariesIdmProfileMatchAccuracyAdpIdmProfile | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._extensions !== undefined) {
      hasAnyValues = true;
      internalValueResult.extensions = this._extensions;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DlpDictionariesIdmProfileMatchAccuracyAdpIdmProfile | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._extensions = undefined;
      this._id = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._extensions = value.extensions;
      this._id = value.id;
    }
  }

  // extensions - computed: true, optional: true, required: false
  private _extensions?: { [key: string]: string }; 
  public get extensions() {
    return this.getStringMapAttribute('extensions');
  }
  public set extensions(value: { [key: string]: string }) {
    this._extensions = value;
  }
  public resetExtensions() {
    this._extensions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extensionsInput() {
    return this._extensions;
  }

  // id - computed: true, optional: true, required: false
  private _id?: number; 
  public get id() {
    return this.getNumberAttribute('id');
  }
  public set id(value: number) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }
}

export class DlpDictionariesIdmProfileMatchAccuracyAdpIdmProfileList extends cdktf.ComplexList {
  public internalValue? : DlpDictionariesIdmProfileMatchAccuracyAdpIdmProfile[] | cdktf.IResolvable

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
  public get(index: number): DlpDictionariesIdmProfileMatchAccuracyAdpIdmProfileOutputReference {
    return new DlpDictionariesIdmProfileMatchAccuracyAdpIdmProfileOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DlpDictionariesIdmProfileMatchAccuracy {
  /**
  * The IDM template match accuracy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.5/docs/resources/dlp_dictionaries#match_accuracy DlpDictionaries#match_accuracy}
  */
  readonly matchAccuracy?: string;
  /**
  * adp_idm_profile block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.5/docs/resources/dlp_dictionaries#adp_idm_profile DlpDictionaries#adp_idm_profile}
  */
  readonly adpIdmProfile?: DlpDictionariesIdmProfileMatchAccuracyAdpIdmProfile[] | cdktf.IResolvable;
}

export function dlpDictionariesIdmProfileMatchAccuracyToTerraform(struct?: DlpDictionariesIdmProfileMatchAccuracy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_accuracy: cdktf.stringToTerraform(struct!.matchAccuracy),
    adp_idm_profile: cdktf.listMapper(dlpDictionariesIdmProfileMatchAccuracyAdpIdmProfileToTerraform, true)(struct!.adpIdmProfile),
  }
}


export function dlpDictionariesIdmProfileMatchAccuracyToHclTerraform(struct?: DlpDictionariesIdmProfileMatchAccuracy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_accuracy: {
      value: cdktf.stringToHclTerraform(struct!.matchAccuracy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    adp_idm_profile: {
      value: cdktf.listMapperHcl(dlpDictionariesIdmProfileMatchAccuracyAdpIdmProfileToHclTerraform, true)(struct!.adpIdmProfile),
      isBlock: true,
      type: "set",
      storageClassType: "DlpDictionariesIdmProfileMatchAccuracyAdpIdmProfileList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DlpDictionariesIdmProfileMatchAccuracyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DlpDictionariesIdmProfileMatchAccuracy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchAccuracy !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchAccuracy = this._matchAccuracy;
    }
    if (this._adpIdmProfile?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.adpIdmProfile = this._adpIdmProfile?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DlpDictionariesIdmProfileMatchAccuracy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchAccuracy = undefined;
      this._adpIdmProfile.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matchAccuracy = value.matchAccuracy;
      this._adpIdmProfile.internalValue = value.adpIdmProfile;
    }
  }

  // match_accuracy - computed: true, optional: true, required: false
  private _matchAccuracy?: string; 
  public get matchAccuracy() {
    return this.getStringAttribute('match_accuracy');
  }
  public set matchAccuracy(value: string) {
    this._matchAccuracy = value;
  }
  public resetMatchAccuracy() {
    this._matchAccuracy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchAccuracyInput() {
    return this._matchAccuracy;
  }

  // adp_idm_profile - computed: false, optional: true, required: false
  private _adpIdmProfile = new DlpDictionariesIdmProfileMatchAccuracyAdpIdmProfileList(this, "adp_idm_profile", true);
  public get adpIdmProfile() {
    return this._adpIdmProfile;
  }
  public putAdpIdmProfile(value: DlpDictionariesIdmProfileMatchAccuracyAdpIdmProfile[] | cdktf.IResolvable) {
    this._adpIdmProfile.internalValue = value;
  }
  public resetAdpIdmProfile() {
    this._adpIdmProfile.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adpIdmProfileInput() {
    return this._adpIdmProfile.internalValue;
  }
}

export class DlpDictionariesIdmProfileMatchAccuracyList extends cdktf.ComplexList {
  public internalValue? : DlpDictionariesIdmProfileMatchAccuracy[] | cdktf.IResolvable

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
  public get(index: number): DlpDictionariesIdmProfileMatchAccuracyOutputReference {
    return new DlpDictionariesIdmProfileMatchAccuracyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DlpDictionariesPatterns {
  /**
  * The action applied to a DLP dictionary using patterns
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.5/docs/resources/dlp_dictionaries#action DlpDictionaries#action}
  */
  readonly action?: string;
  /**
  * DLP dictionary pattern
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.5/docs/resources/dlp_dictionaries#pattern DlpDictionaries#pattern}
  */
  readonly pattern?: string;
}

export function dlpDictionariesPatternsToTerraform(struct?: DlpDictionariesPatterns | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    pattern: cdktf.stringToTerraform(struct!.pattern),
  }
}


export function dlpDictionariesPatternsToHclTerraform(struct?: DlpDictionariesPatterns | cdktf.IResolvable): any {
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
    pattern: {
      value: cdktf.stringToHclTerraform(struct!.pattern),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DlpDictionariesPatternsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DlpDictionariesPatterns | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._pattern !== undefined) {
      hasAnyValues = true;
      internalValueResult.pattern = this._pattern;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DlpDictionariesPatterns | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._pattern = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._pattern = value.pattern;
    }
  }

  // action - computed: true, optional: true, required: false
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

  // pattern - computed: true, optional: true, required: false
  private _pattern?: string; 
  public get pattern() {
    return this.getStringAttribute('pattern');
  }
  public set pattern(value: string) {
    this._pattern = value;
  }
  public resetPattern() {
    this._pattern = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get patternInput() {
    return this._pattern;
  }
}

export class DlpDictionariesPatternsList extends cdktf.ComplexList {
  public internalValue? : DlpDictionariesPatterns[] | cdktf.IResolvable

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
  public get(index: number): DlpDictionariesPatternsOutputReference {
    return new DlpDictionariesPatternsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DlpDictionariesPhrases {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.5/docs/resources/dlp_dictionaries#action DlpDictionaries#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.5/docs/resources/dlp_dictionaries#phrase DlpDictionaries#phrase}
  */
  readonly phrase?: string;
}

export function dlpDictionariesPhrasesToTerraform(struct?: DlpDictionariesPhrases | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    phrase: cdktf.stringToTerraform(struct!.phrase),
  }
}


export function dlpDictionariesPhrasesToHclTerraform(struct?: DlpDictionariesPhrases | cdktf.IResolvable): any {
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
    phrase: {
      value: cdktf.stringToHclTerraform(struct!.phrase),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DlpDictionariesPhrasesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DlpDictionariesPhrases | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._phrase !== undefined) {
      hasAnyValues = true;
      internalValueResult.phrase = this._phrase;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DlpDictionariesPhrases | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._phrase = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._phrase = value.phrase;
    }
  }

  // action - computed: true, optional: true, required: false
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

  // phrase - computed: true, optional: true, required: false
  private _phrase?: string; 
  public get phrase() {
    return this.getStringAttribute('phrase');
  }
  public set phrase(value: string) {
    this._phrase = value;
  }
  public resetPhrase() {
    this._phrase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get phraseInput() {
    return this._phrase;
  }
}

export class DlpDictionariesPhrasesList extends cdktf.ComplexList {
  public internalValue? : DlpDictionariesPhrases[] | cdktf.IResolvable

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
  public get(index: number): DlpDictionariesPhrasesOutputReference {
    return new DlpDictionariesPhrasesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/zscaler/zia/4.6.5/docs/resources/dlp_dictionaries zia_dlp_dictionaries}
*/
export class DlpDictionaries extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "zia_dlp_dictionaries";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DlpDictionaries resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DlpDictionaries to import
  * @param importFromId The id of the existing DlpDictionaries that should be imported. Refer to the {@link https://registry.terraform.io/providers/zscaler/zia/4.6.5/docs/resources/dlp_dictionaries#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DlpDictionaries to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "zia_dlp_dictionaries", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/zscaler/zia/4.6.5/docs/resources/dlp_dictionaries zia_dlp_dictionaries} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DlpDictionariesConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DlpDictionariesConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'zia_dlp_dictionaries',
      terraformGeneratorMetadata: {
        providerName: 'zia',
        providerVersion: '4.6.5',
        providerVersionConstraint: '4.6.5'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._binNumbers = config.binNumbers;
    this._confidenceLevelForPredefinedDict = config.confidenceLevelForPredefinedDict;
    this._confidenceThreshold = config.confidenceThreshold;
    this._custom = config.custom;
    this._customPhraseMatchType = config.customPhraseMatchType;
    this._description = config.description;
    this._dictTemplateId = config.dictTemplateId;
    this._dictionaryType = config.dictionaryType;
    this._hierarchicalIdentifiers = config.hierarchicalIdentifiers;
    this._ignoreExactMatchIdmDict = config.ignoreExactMatchIdmDict;
    this._includeBinNumbers = config.includeBinNumbers;
    this._name = config.name;
    this._proximity = config.proximity;
    this._proximityEnabledForCustomDictionary = config.proximityEnabledForCustomDictionary;
    this._exactDataMatchDetails.internalValue = config.exactDataMatchDetails;
    this._idmProfileMatchAccuracy.internalValue = config.idmProfileMatchAccuracy;
    this._patterns.internalValue = config.patterns;
    this._phrases.internalValue = config.phrases;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bin_numbers - computed: false, optional: true, required: false
  private _binNumbers?: number[]; 
  public get binNumbers() {
    return this.getNumberListAttribute('bin_numbers');
  }
  public set binNumbers(value: number[]) {
    this._binNumbers = value;
  }
  public resetBinNumbers() {
    this._binNumbers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get binNumbersInput() {
    return this._binNumbers;
  }

  // confidence_level_for_predefined_dict - computed: false, optional: true, required: false
  private _confidenceLevelForPredefinedDict?: string; 
  public get confidenceLevelForPredefinedDict() {
    return this.getStringAttribute('confidence_level_for_predefined_dict');
  }
  public set confidenceLevelForPredefinedDict(value: string) {
    this._confidenceLevelForPredefinedDict = value;
  }
  public resetConfidenceLevelForPredefinedDict() {
    this._confidenceLevelForPredefinedDict = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get confidenceLevelForPredefinedDictInput() {
    return this._confidenceLevelForPredefinedDict;
  }

  // confidence_threshold - computed: false, optional: true, required: false
  private _confidenceThreshold?: string; 
  public get confidenceThreshold() {
    return this.getStringAttribute('confidence_threshold');
  }
  public set confidenceThreshold(value: string) {
    this._confidenceThreshold = value;
  }
  public resetConfidenceThreshold() {
    this._confidenceThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get confidenceThresholdInput() {
    return this._confidenceThreshold;
  }

  // custom - computed: true, optional: true, required: false
  private _custom?: boolean | cdktf.IResolvable; 
  public get custom() {
    return this.getBooleanAttribute('custom');
  }
  public set custom(value: boolean | cdktf.IResolvable) {
    this._custom = value;
  }
  public resetCustom() {
    this._custom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customInput() {
    return this._custom;
  }

  // custom_phrase_match_type - computed: false, optional: true, required: false
  private _customPhraseMatchType?: string; 
  public get customPhraseMatchType() {
    return this.getStringAttribute('custom_phrase_match_type');
  }
  public set customPhraseMatchType(value: string) {
    this._customPhraseMatchType = value;
  }
  public resetCustomPhraseMatchType() {
    this._customPhraseMatchType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customPhraseMatchTypeInput() {
    return this._customPhraseMatchType;
  }

  // description - computed: false, optional: true, required: false
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

  // dict_template_id - computed: false, optional: true, required: false
  private _dictTemplateId?: number; 
  public get dictTemplateId() {
    return this.getNumberAttribute('dict_template_id');
  }
  public set dictTemplateId(value: number) {
    this._dictTemplateId = value;
  }
  public resetDictTemplateId() {
    this._dictTemplateId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dictTemplateIdInput() {
    return this._dictTemplateId;
  }

  // dictionary_id - computed: true, optional: false, required: false
  public get dictionaryId() {
    return this.getNumberAttribute('dictionary_id');
  }

  // dictionary_type - computed: false, optional: true, required: false
  private _dictionaryType?: string; 
  public get dictionaryType() {
    return this.getStringAttribute('dictionary_type');
  }
  public set dictionaryType(value: string) {
    this._dictionaryType = value;
  }
  public resetDictionaryType() {
    this._dictionaryType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dictionaryTypeInput() {
    return this._dictionaryType;
  }

  // hierarchical_identifiers - computed: false, optional: true, required: false
  private _hierarchicalIdentifiers?: string[]; 
  public get hierarchicalIdentifiers() {
    return cdktf.Fn.tolist(this.getListAttribute('hierarchical_identifiers'));
  }
  public set hierarchicalIdentifiers(value: string[]) {
    this._hierarchicalIdentifiers = value;
  }
  public resetHierarchicalIdentifiers() {
    this._hierarchicalIdentifiers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hierarchicalIdentifiersInput() {
    return this._hierarchicalIdentifiers;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ignore_exact_match_idm_dict - computed: false, optional: true, required: false
  private _ignoreExactMatchIdmDict?: boolean | cdktf.IResolvable; 
  public get ignoreExactMatchIdmDict() {
    return this.getBooleanAttribute('ignore_exact_match_idm_dict');
  }
  public set ignoreExactMatchIdmDict(value: boolean | cdktf.IResolvable) {
    this._ignoreExactMatchIdmDict = value;
  }
  public resetIgnoreExactMatchIdmDict() {
    this._ignoreExactMatchIdmDict = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreExactMatchIdmDictInput() {
    return this._ignoreExactMatchIdmDict;
  }

  // include_bin_numbers - computed: true, optional: true, required: false
  private _includeBinNumbers?: boolean | cdktf.IResolvable; 
  public get includeBinNumbers() {
    return this.getBooleanAttribute('include_bin_numbers');
  }
  public set includeBinNumbers(value: boolean | cdktf.IResolvable) {
    this._includeBinNumbers = value;
  }
  public resetIncludeBinNumbers() {
    this._includeBinNumbers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeBinNumbersInput() {
    return this._includeBinNumbers;
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

  // proximity - computed: false, optional: true, required: false
  private _proximity?: number; 
  public get proximity() {
    return this.getNumberAttribute('proximity');
  }
  public set proximity(value: number) {
    this._proximity = value;
  }
  public resetProximity() {
    this._proximity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proximityInput() {
    return this._proximity;
  }

  // proximity_enabled_for_custom_dictionary - computed: false, optional: true, required: false
  private _proximityEnabledForCustomDictionary?: boolean | cdktf.IResolvable; 
  public get proximityEnabledForCustomDictionary() {
    return this.getBooleanAttribute('proximity_enabled_for_custom_dictionary');
  }
  public set proximityEnabledForCustomDictionary(value: boolean | cdktf.IResolvable) {
    this._proximityEnabledForCustomDictionary = value;
  }
  public resetProximityEnabledForCustomDictionary() {
    this._proximityEnabledForCustomDictionary = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proximityEnabledForCustomDictionaryInput() {
    return this._proximityEnabledForCustomDictionary;
  }

  // exact_data_match_details - computed: false, optional: true, required: false
  private _exactDataMatchDetails = new DlpDictionariesExactDataMatchDetailsList(this, "exact_data_match_details", true);
  public get exactDataMatchDetails() {
    return this._exactDataMatchDetails;
  }
  public putExactDataMatchDetails(value: DlpDictionariesExactDataMatchDetails[] | cdktf.IResolvable) {
    this._exactDataMatchDetails.internalValue = value;
  }
  public resetExactDataMatchDetails() {
    this._exactDataMatchDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exactDataMatchDetailsInput() {
    return this._exactDataMatchDetails.internalValue;
  }

  // idm_profile_match_accuracy - computed: false, optional: true, required: false
  private _idmProfileMatchAccuracy = new DlpDictionariesIdmProfileMatchAccuracyList(this, "idm_profile_match_accuracy", true);
  public get idmProfileMatchAccuracy() {
    return this._idmProfileMatchAccuracy;
  }
  public putIdmProfileMatchAccuracy(value: DlpDictionariesIdmProfileMatchAccuracy[] | cdktf.IResolvable) {
    this._idmProfileMatchAccuracy.internalValue = value;
  }
  public resetIdmProfileMatchAccuracy() {
    this._idmProfileMatchAccuracy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idmProfileMatchAccuracyInput() {
    return this._idmProfileMatchAccuracy.internalValue;
  }

  // patterns - computed: false, optional: true, required: false
  private _patterns = new DlpDictionariesPatternsList(this, "patterns", true);
  public get patterns() {
    return this._patterns;
  }
  public putPatterns(value: DlpDictionariesPatterns[] | cdktf.IResolvable) {
    this._patterns.internalValue = value;
  }
  public resetPatterns() {
    this._patterns.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get patternsInput() {
    return this._patterns.internalValue;
  }

  // phrases - computed: false, optional: true, required: false
  private _phrases = new DlpDictionariesPhrasesList(this, "phrases", true);
  public get phrases() {
    return this._phrases;
  }
  public putPhrases(value: DlpDictionariesPhrases[] | cdktf.IResolvable) {
    this._phrases.internalValue = value;
  }
  public resetPhrases() {
    this._phrases.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get phrasesInput() {
    return this._phrases.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      bin_numbers: cdktf.listMapper(cdktf.numberToTerraform, false)(this._binNumbers),
      confidence_level_for_predefined_dict: cdktf.stringToTerraform(this._confidenceLevelForPredefinedDict),
      confidence_threshold: cdktf.stringToTerraform(this._confidenceThreshold),
      custom: cdktf.booleanToTerraform(this._custom),
      custom_phrase_match_type: cdktf.stringToTerraform(this._customPhraseMatchType),
      description: cdktf.stringToTerraform(this._description),
      dict_template_id: cdktf.numberToTerraform(this._dictTemplateId),
      dictionary_type: cdktf.stringToTerraform(this._dictionaryType),
      hierarchical_identifiers: cdktf.listMapper(cdktf.stringToTerraform, false)(this._hierarchicalIdentifiers),
      ignore_exact_match_idm_dict: cdktf.booleanToTerraform(this._ignoreExactMatchIdmDict),
      include_bin_numbers: cdktf.booleanToTerraform(this._includeBinNumbers),
      name: cdktf.stringToTerraform(this._name),
      proximity: cdktf.numberToTerraform(this._proximity),
      proximity_enabled_for_custom_dictionary: cdktf.booleanToTerraform(this._proximityEnabledForCustomDictionary),
      exact_data_match_details: cdktf.listMapper(dlpDictionariesExactDataMatchDetailsToTerraform, true)(this._exactDataMatchDetails.internalValue),
      idm_profile_match_accuracy: cdktf.listMapper(dlpDictionariesIdmProfileMatchAccuracyToTerraform, true)(this._idmProfileMatchAccuracy.internalValue),
      patterns: cdktf.listMapper(dlpDictionariesPatternsToTerraform, true)(this._patterns.internalValue),
      phrases: cdktf.listMapper(dlpDictionariesPhrasesToTerraform, true)(this._phrases.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      bin_numbers: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._binNumbers),
        isBlock: false,
        type: "list",
        storageClassType: "numberList",
      },
      confidence_level_for_predefined_dict: {
        value: cdktf.stringToHclTerraform(this._confidenceLevelForPredefinedDict),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      confidence_threshold: {
        value: cdktf.stringToHclTerraform(this._confidenceThreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom: {
        value: cdktf.booleanToHclTerraform(this._custom),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      custom_phrase_match_type: {
        value: cdktf.stringToHclTerraform(this._customPhraseMatchType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dict_template_id: {
        value: cdktf.numberToHclTerraform(this._dictTemplateId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      dictionary_type: {
        value: cdktf.stringToHclTerraform(this._dictionaryType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hierarchical_identifiers: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._hierarchicalIdentifiers),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      ignore_exact_match_idm_dict: {
        value: cdktf.booleanToHclTerraform(this._ignoreExactMatchIdmDict),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      include_bin_numbers: {
        value: cdktf.booleanToHclTerraform(this._includeBinNumbers),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      proximity: {
        value: cdktf.numberToHclTerraform(this._proximity),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      proximity_enabled_for_custom_dictionary: {
        value: cdktf.booleanToHclTerraform(this._proximityEnabledForCustomDictionary),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      exact_data_match_details: {
        value: cdktf.listMapperHcl(dlpDictionariesExactDataMatchDetailsToHclTerraform, true)(this._exactDataMatchDetails.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DlpDictionariesExactDataMatchDetailsList",
      },
      idm_profile_match_accuracy: {
        value: cdktf.listMapperHcl(dlpDictionariesIdmProfileMatchAccuracyToHclTerraform, true)(this._idmProfileMatchAccuracy.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DlpDictionariesIdmProfileMatchAccuracyList",
      },
      patterns: {
        value: cdktf.listMapperHcl(dlpDictionariesPatternsToHclTerraform, true)(this._patterns.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DlpDictionariesPatternsList",
      },
      phrases: {
        value: cdktf.listMapperHcl(dlpDictionariesPhrasesToHclTerraform, true)(this._phrases.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DlpDictionariesPhrasesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
