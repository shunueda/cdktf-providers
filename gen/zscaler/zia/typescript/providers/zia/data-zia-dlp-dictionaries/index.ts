// https://registry.terraform.io/providers/zscaler/zia/4.6.4/docs/data-sources/dlp_dictionaries
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataZiaDlpDictionariesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.4/docs/data-sources/dlp_dictionaries#id DataZiaDlpDictionaries#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.4/docs/data-sources/dlp_dictionaries#name DataZiaDlpDictionaries#name}
  */
  readonly name?: string;
}
export interface DataZiaDlpDictionariesExactDataMatchDetails {
}

export function dataZiaDlpDictionariesExactDataMatchDetailsToTerraform(struct?: DataZiaDlpDictionariesExactDataMatchDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataZiaDlpDictionariesExactDataMatchDetailsToHclTerraform(struct?: DataZiaDlpDictionariesExactDataMatchDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataZiaDlpDictionariesExactDataMatchDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataZiaDlpDictionariesExactDataMatchDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZiaDlpDictionariesExactDataMatchDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // dictionary_edm_mapping_id - computed: true, optional: false, required: false
  public get dictionaryEdmMappingId() {
    return this.getNumberAttribute('dictionary_edm_mapping_id');
  }

  // primary_field - computed: true, optional: false, required: false
  public get primaryField() {
    return this.getNumberAttribute('primary_field');
  }

  // schema_id - computed: true, optional: false, required: false
  public get schemaId() {
    return this.getNumberAttribute('schema_id');
  }

  // secondary_field_match_on - computed: true, optional: false, required: false
  public get secondaryFieldMatchOn() {
    return this.getStringAttribute('secondary_field_match_on');
  }

  // secondary_fields - computed: true, optional: false, required: false
  public get secondaryFields() {
    return this.getNumberListAttribute('secondary_fields');
  }
}

export class DataZiaDlpDictionariesExactDataMatchDetailsList extends cdktf.ComplexList {

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
  public get(index: number): DataZiaDlpDictionariesExactDataMatchDetailsOutputReference {
    return new DataZiaDlpDictionariesExactDataMatchDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataZiaDlpDictionariesIdmProfileMatchAccuracyAdpIdmProfile {
}

export function dataZiaDlpDictionariesIdmProfileMatchAccuracyAdpIdmProfileToTerraform(struct?: DataZiaDlpDictionariesIdmProfileMatchAccuracyAdpIdmProfile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataZiaDlpDictionariesIdmProfileMatchAccuracyAdpIdmProfileToHclTerraform(struct?: DataZiaDlpDictionariesIdmProfileMatchAccuracyAdpIdmProfile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataZiaDlpDictionariesIdmProfileMatchAccuracyAdpIdmProfileOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataZiaDlpDictionariesIdmProfileMatchAccuracyAdpIdmProfile | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZiaDlpDictionariesIdmProfileMatchAccuracyAdpIdmProfile | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // extensions - computed: true, optional: false, required: false
  private _extensions = new cdktf.StringMap(this, "extensions");
  public get extensions() {
    return this._extensions;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class DataZiaDlpDictionariesIdmProfileMatchAccuracyAdpIdmProfileList extends cdktf.ComplexList {

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
  public get(index: number): DataZiaDlpDictionariesIdmProfileMatchAccuracyAdpIdmProfileOutputReference {
    return new DataZiaDlpDictionariesIdmProfileMatchAccuracyAdpIdmProfileOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataZiaDlpDictionariesIdmProfileMatchAccuracy {
}

export function dataZiaDlpDictionariesIdmProfileMatchAccuracyToTerraform(struct?: DataZiaDlpDictionariesIdmProfileMatchAccuracy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataZiaDlpDictionariesIdmProfileMatchAccuracyToHclTerraform(struct?: DataZiaDlpDictionariesIdmProfileMatchAccuracy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataZiaDlpDictionariesIdmProfileMatchAccuracyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataZiaDlpDictionariesIdmProfileMatchAccuracy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZiaDlpDictionariesIdmProfileMatchAccuracy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // adp_idm_profile - computed: true, optional: false, required: false
  private _adpIdmProfile = new DataZiaDlpDictionariesIdmProfileMatchAccuracyAdpIdmProfileList(this, "adp_idm_profile", true);
  public get adpIdmProfile() {
    return this._adpIdmProfile;
  }

  // match_accuracy - computed: true, optional: false, required: false
  public get matchAccuracy() {
    return this.getStringAttribute('match_accuracy');
  }
}

export class DataZiaDlpDictionariesIdmProfileMatchAccuracyList extends cdktf.ComplexList {

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
  public get(index: number): DataZiaDlpDictionariesIdmProfileMatchAccuracyOutputReference {
    return new DataZiaDlpDictionariesIdmProfileMatchAccuracyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataZiaDlpDictionariesPatterns {
}

export function dataZiaDlpDictionariesPatternsToTerraform(struct?: DataZiaDlpDictionariesPatterns): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataZiaDlpDictionariesPatternsToHclTerraform(struct?: DataZiaDlpDictionariesPatterns): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataZiaDlpDictionariesPatternsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataZiaDlpDictionariesPatterns | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZiaDlpDictionariesPatterns | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // action - computed: true, optional: false, required: false
  public get action() {
    return this.getStringAttribute('action');
  }

  // pattern - computed: true, optional: false, required: false
  public get pattern() {
    return this.getStringAttribute('pattern');
  }
}

export class DataZiaDlpDictionariesPatternsList extends cdktf.ComplexList {

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
  public get(index: number): DataZiaDlpDictionariesPatternsOutputReference {
    return new DataZiaDlpDictionariesPatternsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataZiaDlpDictionariesPhrases {
}

export function dataZiaDlpDictionariesPhrasesToTerraform(struct?: DataZiaDlpDictionariesPhrases): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataZiaDlpDictionariesPhrasesToHclTerraform(struct?: DataZiaDlpDictionariesPhrases): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataZiaDlpDictionariesPhrasesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataZiaDlpDictionariesPhrases | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZiaDlpDictionariesPhrases | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // action - computed: true, optional: false, required: false
  public get action() {
    return this.getStringAttribute('action');
  }

  // phrase - computed: true, optional: false, required: false
  public get phrase() {
    return this.getStringAttribute('phrase');
  }
}

export class DataZiaDlpDictionariesPhrasesList extends cdktf.ComplexList {

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
  public get(index: number): DataZiaDlpDictionariesPhrasesOutputReference {
    return new DataZiaDlpDictionariesPhrasesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/zscaler/zia/4.6.4/docs/data-sources/dlp_dictionaries zia_dlp_dictionaries}
*/
export class DataZiaDlpDictionaries extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "zia_dlp_dictionaries";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataZiaDlpDictionaries resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataZiaDlpDictionaries to import
  * @param importFromId The id of the existing DataZiaDlpDictionaries that should be imported. Refer to the {@link https://registry.terraform.io/providers/zscaler/zia/4.6.4/docs/data-sources/dlp_dictionaries#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataZiaDlpDictionaries to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "zia_dlp_dictionaries", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/zscaler/zia/4.6.4/docs/data-sources/dlp_dictionaries zia_dlp_dictionaries} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataZiaDlpDictionariesConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataZiaDlpDictionariesConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'zia_dlp_dictionaries',
      terraformGeneratorMetadata: {
        providerName: 'zia',
        providerVersion: '4.6.4',
        providerVersionConstraint: '4.6.4'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bin_numbers - computed: true, optional: false, required: false
  public get binNumbers() {
    return this.getNumberListAttribute('bin_numbers');
  }

  // confidence_level_for_predefined_dict - computed: true, optional: false, required: false
  public get confidenceLevelForPredefinedDict() {
    return this.getStringAttribute('confidence_level_for_predefined_dict');
  }

  // confidence_threshold - computed: true, optional: false, required: false
  public get confidenceThreshold() {
    return this.getStringAttribute('confidence_threshold');
  }

  // custom - computed: true, optional: false, required: false
  public get custom() {
    return this.getBooleanAttribute('custom');
  }

  // custom_phrase_match_type - computed: true, optional: false, required: false
  public get customPhraseMatchType() {
    return this.getStringAttribute('custom_phrase_match_type');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // dict_template_id - computed: true, optional: false, required: false
  public get dictTemplateId() {
    return this.getNumberAttribute('dict_template_id');
  }

  // dictionary_type - computed: true, optional: false, required: false
  public get dictionaryType() {
    return this.getStringAttribute('dictionary_type');
  }

  // exact_data_match_details - computed: true, optional: false, required: false
  private _exactDataMatchDetails = new DataZiaDlpDictionariesExactDataMatchDetailsList(this, "exact_data_match_details", true);
  public get exactDataMatchDetails() {
    return this._exactDataMatchDetails;
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

  // idm_profile_match_accuracy - computed: true, optional: false, required: false
  private _idmProfileMatchAccuracy = new DataZiaDlpDictionariesIdmProfileMatchAccuracyList(this, "idm_profile_match_accuracy", true);
  public get idmProfileMatchAccuracy() {
    return this._idmProfileMatchAccuracy;
  }

  // ignore_exact_match_idm_dict - computed: true, optional: false, required: false
  public get ignoreExactMatchIdmDict() {
    return this.getBooleanAttribute('ignore_exact_match_idm_dict');
  }

  // include_bin_numbers - computed: true, optional: false, required: false
  public get includeBinNumbers() {
    return this.getBooleanAttribute('include_bin_numbers');
  }

  // name - computed: true, optional: true, required: false
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

  // name_l10n_tag - computed: true, optional: false, required: false
  public get nameL10NTag() {
    return this.getBooleanAttribute('name_l10n_tag');
  }

  // patterns - computed: true, optional: false, required: false
  private _patterns = new DataZiaDlpDictionariesPatternsList(this, "patterns", true);
  public get patterns() {
    return this._patterns;
  }

  // phrases - computed: true, optional: false, required: false
  private _phrases = new DataZiaDlpDictionariesPhrasesList(this, "phrases", true);
  public get phrases() {
    return this._phrases;
  }

  // predefined_clone - computed: true, optional: false, required: false
  public get predefinedClone() {
    return this.getBooleanAttribute('predefined_clone');
  }

  // proximity - computed: true, optional: false, required: false
  public get proximity() {
    return this.getNumberAttribute('proximity');
  }

  // proximity_length_enabled - computed: true, optional: false, required: false
  public get proximityLengthEnabled() {
    return this.getBooleanAttribute('proximity_length_enabled');
  }

  // threshold_type - computed: true, optional: false, required: false
  public get thresholdType() {
    return this.getStringAttribute('threshold_type');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.numberToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.numberToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
