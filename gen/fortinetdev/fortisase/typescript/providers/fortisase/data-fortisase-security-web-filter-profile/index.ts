// https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/security_web_filter_profile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataFortisaseSecurityWebFilterProfileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/security_web_filter_profile#block_invalid_url DataFortisaseSecurityWebFilterProfile#block_invalid_url}
  */
  readonly blockInvalidUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/security_web_filter_profile#content_filters DataFortisaseSecurityWebFilterProfile#content_filters}
  */
  readonly contentFilters?: DataFortisaseSecurityWebFilterProfileContentFilters[] | cdktf.IResolvable;
  /**
  * The direction of the target resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/security_web_filter_profile#direction DataFortisaseSecurityWebFilterProfile#direction}
  */
  readonly direction?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/security_web_filter_profile#enforce_safe_search DataFortisaseSecurityWebFilterProfile#enforce_safe_search}
  */
  readonly enforceSafeSearch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/security_web_filter_profile#fortiguard_filters DataFortisaseSecurityWebFilterProfile#fortiguard_filters}
  */
  readonly fortiguardFilters?: DataFortisaseSecurityWebFilterProfileFortiguardFilters[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/security_web_filter_profile#fortiguard_local_category_filters DataFortisaseSecurityWebFilterProfile#fortiguard_local_category_filters}
  */
  readonly fortiguardLocalCategoryFilters?: DataFortisaseSecurityWebFilterProfileFortiguardLocalCategoryFilters[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/security_web_filter_profile#fqdn_threat_feed_filters DataFortisaseSecurityWebFilterProfile#fqdn_threat_feed_filters}
  */
  readonly fqdnThreatFeedFilters?: DataFortisaseSecurityWebFilterProfileFqdnThreatFeedFilters[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/security_web_filter_profile#http_headers DataFortisaseSecurityWebFilterProfile#http_headers}
  */
  readonly httpHeaders?: DataFortisaseSecurityWebFilterProfileHttpHeaders[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/security_web_filter_profile#primary_key DataFortisaseSecurityWebFilterProfile#primary_key}
  */
  readonly primaryKey: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/security_web_filter_profile#traffic_on_rating_error DataFortisaseSecurityWebFilterProfile#traffic_on_rating_error}
  */
  readonly trafficOnRatingError?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/security_web_filter_profile#url_filters DataFortisaseSecurityWebFilterProfile#url_filters}
  */
  readonly urlFilters?: DataFortisaseSecurityWebFilterProfileUrlFilters[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/security_web_filter_profile#use_fortiguard_filters DataFortisaseSecurityWebFilterProfile#use_fortiguard_filters}
  */
  readonly useFortiguardFilters?: string;
}
export interface DataFortisaseSecurityWebFilterProfileContentFilters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/security_web_filter_profile#action DataFortisaseSecurityWebFilterProfile#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/security_web_filter_profile#lang DataFortisaseSecurityWebFilterProfile#lang}
  */
  readonly lang?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/security_web_filter_profile#pattern DataFortisaseSecurityWebFilterProfile#pattern}
  */
  readonly pattern?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/security_web_filter_profile#pattern_type DataFortisaseSecurityWebFilterProfile#pattern_type}
  */
  readonly patternType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/security_web_filter_profile#score DataFortisaseSecurityWebFilterProfile#score}
  */
  readonly score?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/security_web_filter_profile#status DataFortisaseSecurityWebFilterProfile#status}
  */
  readonly status?: string;
}

export function dataFortisaseSecurityWebFilterProfileContentFiltersToTerraform(struct?: DataFortisaseSecurityWebFilterProfileContentFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    lang: cdktf.stringToTerraform(struct!.lang),
    pattern: cdktf.stringToTerraform(struct!.pattern),
    pattern_type: cdktf.stringToTerraform(struct!.patternType),
    score: cdktf.numberToTerraform(struct!.score),
    status: cdktf.stringToTerraform(struct!.status),
  }
}


export function dataFortisaseSecurityWebFilterProfileContentFiltersToHclTerraform(struct?: DataFortisaseSecurityWebFilterProfileContentFilters | cdktf.IResolvable): any {
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
    lang: {
      value: cdktf.stringToHclTerraform(struct!.lang),
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
    pattern_type: {
      value: cdktf.stringToHclTerraform(struct!.patternType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    score: {
      value: cdktf.numberToHclTerraform(struct!.score),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataFortisaseSecurityWebFilterProfileContentFiltersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataFortisaseSecurityWebFilterProfileContentFilters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._lang !== undefined) {
      hasAnyValues = true;
      internalValueResult.lang = this._lang;
    }
    if (this._pattern !== undefined) {
      hasAnyValues = true;
      internalValueResult.pattern = this._pattern;
    }
    if (this._patternType !== undefined) {
      hasAnyValues = true;
      internalValueResult.patternType = this._patternType;
    }
    if (this._score !== undefined) {
      hasAnyValues = true;
      internalValueResult.score = this._score;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFortisaseSecurityWebFilterProfileContentFilters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._lang = undefined;
      this._pattern = undefined;
      this._patternType = undefined;
      this._score = undefined;
      this._status = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._lang = value.lang;
      this._pattern = value.pattern;
      this._patternType = value.patternType;
      this._score = value.score;
      this._status = value.status;
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

  // lang - computed: true, optional: true, required: false
  private _lang?: string; 
  public get lang() {
    return this.getStringAttribute('lang');
  }
  public set lang(value: string) {
    this._lang = value;
  }
  public resetLang() {
    this._lang = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get langInput() {
    return this._lang;
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

  // pattern_type - computed: true, optional: true, required: false
  private _patternType?: string; 
  public get patternType() {
    return this.getStringAttribute('pattern_type');
  }
  public set patternType(value: string) {
    this._patternType = value;
  }
  public resetPatternType() {
    this._patternType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get patternTypeInput() {
    return this._patternType;
  }

  // score - computed: true, optional: true, required: false
  private _score?: number; 
  public get score() {
    return this.getNumberAttribute('score');
  }
  public set score(value: number) {
    this._score = value;
  }
  public resetScore() {
    this._score = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scoreInput() {
    return this._score;
  }

  // status - computed: true, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }
}

export class DataFortisaseSecurityWebFilterProfileContentFiltersList extends cdktf.ComplexList {
  public internalValue? : DataFortisaseSecurityWebFilterProfileContentFilters[] | cdktf.IResolvable

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
  public get(index: number): DataFortisaseSecurityWebFilterProfileContentFiltersOutputReference {
    return new DataFortisaseSecurityWebFilterProfileContentFiltersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataFortisaseSecurityWebFilterProfileFortiguardFiltersCategory {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/security_web_filter_profile#datasource DataFortisaseSecurityWebFilterProfile#datasource}
  */
  readonly datasource?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/security_web_filter_profile#primary_key DataFortisaseSecurityWebFilterProfile#primary_key}
  */
  readonly primaryKey?: string;
}

export function dataFortisaseSecurityWebFilterProfileFortiguardFiltersCategoryToTerraform(struct?: DataFortisaseSecurityWebFilterProfileFortiguardFiltersCategory | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    datasource: cdktf.stringToTerraform(struct!.datasource),
    primary_key: cdktf.stringToTerraform(struct!.primaryKey),
  }
}


export function dataFortisaseSecurityWebFilterProfileFortiguardFiltersCategoryToHclTerraform(struct?: DataFortisaseSecurityWebFilterProfileFortiguardFiltersCategory | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    datasource: {
      value: cdktf.stringToHclTerraform(struct!.datasource),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    primary_key: {
      value: cdktf.stringToHclTerraform(struct!.primaryKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataFortisaseSecurityWebFilterProfileFortiguardFiltersCategoryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataFortisaseSecurityWebFilterProfileFortiguardFiltersCategory | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._datasource !== undefined) {
      hasAnyValues = true;
      internalValueResult.datasource = this._datasource;
    }
    if (this._primaryKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.primaryKey = this._primaryKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFortisaseSecurityWebFilterProfileFortiguardFiltersCategory | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._datasource = undefined;
      this._primaryKey = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._datasource = value.datasource;
      this._primaryKey = value.primaryKey;
    }
  }

  // datasource - computed: true, optional: true, required: false
  private _datasource?: string; 
  public get datasource() {
    return this.getStringAttribute('datasource');
  }
  public set datasource(value: string) {
    this._datasource = value;
  }
  public resetDatasource() {
    this._datasource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datasourceInput() {
    return this._datasource;
  }

  // primary_key - computed: true, optional: true, required: false
  private _primaryKey?: string; 
  public get primaryKey() {
    return this.getStringAttribute('primary_key');
  }
  public set primaryKey(value: string) {
    this._primaryKey = value;
  }
  public resetPrimaryKey() {
    this._primaryKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryKeyInput() {
    return this._primaryKey;
  }
}
export interface DataFortisaseSecurityWebFilterProfileFortiguardFilters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/security_web_filter_profile#action DataFortisaseSecurityWebFilterProfile#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/security_web_filter_profile#category DataFortisaseSecurityWebFilterProfile#category}
  */
  readonly category?: DataFortisaseSecurityWebFilterProfileFortiguardFiltersCategory;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/security_web_filter_profile#warning_duration DataFortisaseSecurityWebFilterProfile#warning_duration}
  */
  readonly warningDuration?: string;
}

export function dataFortisaseSecurityWebFilterProfileFortiguardFiltersToTerraform(struct?: DataFortisaseSecurityWebFilterProfileFortiguardFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    category: dataFortisaseSecurityWebFilterProfileFortiguardFiltersCategoryToTerraform(struct!.category),
    warning_duration: cdktf.stringToTerraform(struct!.warningDuration),
  }
}


export function dataFortisaseSecurityWebFilterProfileFortiguardFiltersToHclTerraform(struct?: DataFortisaseSecurityWebFilterProfileFortiguardFilters | cdktf.IResolvable): any {
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
    category: {
      value: dataFortisaseSecurityWebFilterProfileFortiguardFiltersCategoryToHclTerraform(struct!.category),
      isBlock: true,
      type: "struct",
      storageClassType: "DataFortisaseSecurityWebFilterProfileFortiguardFiltersCategory",
    },
    warning_duration: {
      value: cdktf.stringToHclTerraform(struct!.warningDuration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataFortisaseSecurityWebFilterProfileFortiguardFiltersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataFortisaseSecurityWebFilterProfileFortiguardFilters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._category?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.category = this._category?.internalValue;
    }
    if (this._warningDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.warningDuration = this._warningDuration;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFortisaseSecurityWebFilterProfileFortiguardFilters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._category.internalValue = undefined;
      this._warningDuration = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._category.internalValue = value.category;
      this._warningDuration = value.warningDuration;
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

  // category - computed: true, optional: true, required: false
  private _category = new DataFortisaseSecurityWebFilterProfileFortiguardFiltersCategoryOutputReference(this, "category");
  public get category() {
    return this._category;
  }
  public putCategory(value: DataFortisaseSecurityWebFilterProfileFortiguardFiltersCategory) {
    this._category.internalValue = value;
  }
  public resetCategory() {
    this._category.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categoryInput() {
    return this._category.internalValue;
  }

  // warning_duration - computed: true, optional: true, required: false
  private _warningDuration?: string; 
  public get warningDuration() {
    return this.getStringAttribute('warning_duration');
  }
  public set warningDuration(value: string) {
    this._warningDuration = value;
  }
  public resetWarningDuration() {
    this._warningDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get warningDurationInput() {
    return this._warningDuration;
  }
}

export class DataFortisaseSecurityWebFilterProfileFortiguardFiltersList extends cdktf.ComplexList {
  public internalValue? : DataFortisaseSecurityWebFilterProfileFortiguardFilters[] | cdktf.IResolvable

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
  public get(index: number): DataFortisaseSecurityWebFilterProfileFortiguardFiltersOutputReference {
    return new DataFortisaseSecurityWebFilterProfileFortiguardFiltersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataFortisaseSecurityWebFilterProfileFortiguardLocalCategoryFiltersCategory {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/security_web_filter_profile#datasource DataFortisaseSecurityWebFilterProfile#datasource}
  */
  readonly datasource?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/security_web_filter_profile#primary_key DataFortisaseSecurityWebFilterProfile#primary_key}
  */
  readonly primaryKey?: string;
}

export function dataFortisaseSecurityWebFilterProfileFortiguardLocalCategoryFiltersCategoryToTerraform(struct?: DataFortisaseSecurityWebFilterProfileFortiguardLocalCategoryFiltersCategory | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    datasource: cdktf.stringToTerraform(struct!.datasource),
    primary_key: cdktf.stringToTerraform(struct!.primaryKey),
  }
}


export function dataFortisaseSecurityWebFilterProfileFortiguardLocalCategoryFiltersCategoryToHclTerraform(struct?: DataFortisaseSecurityWebFilterProfileFortiguardLocalCategoryFiltersCategory | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    datasource: {
      value: cdktf.stringToHclTerraform(struct!.datasource),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    primary_key: {
      value: cdktf.stringToHclTerraform(struct!.primaryKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataFortisaseSecurityWebFilterProfileFortiguardLocalCategoryFiltersCategoryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataFortisaseSecurityWebFilterProfileFortiguardLocalCategoryFiltersCategory | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._datasource !== undefined) {
      hasAnyValues = true;
      internalValueResult.datasource = this._datasource;
    }
    if (this._primaryKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.primaryKey = this._primaryKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFortisaseSecurityWebFilterProfileFortiguardLocalCategoryFiltersCategory | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._datasource = undefined;
      this._primaryKey = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._datasource = value.datasource;
      this._primaryKey = value.primaryKey;
    }
  }

  // datasource - computed: true, optional: true, required: false
  private _datasource?: string; 
  public get datasource() {
    return this.getStringAttribute('datasource');
  }
  public set datasource(value: string) {
    this._datasource = value;
  }
  public resetDatasource() {
    this._datasource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datasourceInput() {
    return this._datasource;
  }

  // primary_key - computed: true, optional: true, required: false
  private _primaryKey?: string; 
  public get primaryKey() {
    return this.getStringAttribute('primary_key');
  }
  public set primaryKey(value: string) {
    this._primaryKey = value;
  }
  public resetPrimaryKey() {
    this._primaryKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryKeyInput() {
    return this._primaryKey;
  }
}
export interface DataFortisaseSecurityWebFilterProfileFortiguardLocalCategoryFilters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/security_web_filter_profile#action DataFortisaseSecurityWebFilterProfile#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/security_web_filter_profile#category DataFortisaseSecurityWebFilterProfile#category}
  */
  readonly category?: DataFortisaseSecurityWebFilterProfileFortiguardLocalCategoryFiltersCategory;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/security_web_filter_profile#warning_duration DataFortisaseSecurityWebFilterProfile#warning_duration}
  */
  readonly warningDuration?: string;
}

export function dataFortisaseSecurityWebFilterProfileFortiguardLocalCategoryFiltersToTerraform(struct?: DataFortisaseSecurityWebFilterProfileFortiguardLocalCategoryFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    category: dataFortisaseSecurityWebFilterProfileFortiguardLocalCategoryFiltersCategoryToTerraform(struct!.category),
    warning_duration: cdktf.stringToTerraform(struct!.warningDuration),
  }
}


export function dataFortisaseSecurityWebFilterProfileFortiguardLocalCategoryFiltersToHclTerraform(struct?: DataFortisaseSecurityWebFilterProfileFortiguardLocalCategoryFilters | cdktf.IResolvable): any {
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
    category: {
      value: dataFortisaseSecurityWebFilterProfileFortiguardLocalCategoryFiltersCategoryToHclTerraform(struct!.category),
      isBlock: true,
      type: "struct",
      storageClassType: "DataFortisaseSecurityWebFilterProfileFortiguardLocalCategoryFiltersCategory",
    },
    warning_duration: {
      value: cdktf.stringToHclTerraform(struct!.warningDuration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataFortisaseSecurityWebFilterProfileFortiguardLocalCategoryFiltersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataFortisaseSecurityWebFilterProfileFortiguardLocalCategoryFilters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._category?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.category = this._category?.internalValue;
    }
    if (this._warningDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.warningDuration = this._warningDuration;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFortisaseSecurityWebFilterProfileFortiguardLocalCategoryFilters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._category.internalValue = undefined;
      this._warningDuration = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._category.internalValue = value.category;
      this._warningDuration = value.warningDuration;
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

  // category - computed: true, optional: true, required: false
  private _category = new DataFortisaseSecurityWebFilterProfileFortiguardLocalCategoryFiltersCategoryOutputReference(this, "category");
  public get category() {
    return this._category;
  }
  public putCategory(value: DataFortisaseSecurityWebFilterProfileFortiguardLocalCategoryFiltersCategory) {
    this._category.internalValue = value;
  }
  public resetCategory() {
    this._category.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categoryInput() {
    return this._category.internalValue;
  }

  // warning_duration - computed: true, optional: true, required: false
  private _warningDuration?: string; 
  public get warningDuration() {
    return this.getStringAttribute('warning_duration');
  }
  public set warningDuration(value: string) {
    this._warningDuration = value;
  }
  public resetWarningDuration() {
    this._warningDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get warningDurationInput() {
    return this._warningDuration;
  }
}

export class DataFortisaseSecurityWebFilterProfileFortiguardLocalCategoryFiltersList extends cdktf.ComplexList {
  public internalValue? : DataFortisaseSecurityWebFilterProfileFortiguardLocalCategoryFilters[] | cdktf.IResolvable

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
  public get(index: number): DataFortisaseSecurityWebFilterProfileFortiguardLocalCategoryFiltersOutputReference {
    return new DataFortisaseSecurityWebFilterProfileFortiguardLocalCategoryFiltersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataFortisaseSecurityWebFilterProfileFqdnThreatFeedFiltersCategory {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/security_web_filter_profile#datasource DataFortisaseSecurityWebFilterProfile#datasource}
  */
  readonly datasource?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/security_web_filter_profile#primary_key DataFortisaseSecurityWebFilterProfile#primary_key}
  */
  readonly primaryKey?: string;
}

export function dataFortisaseSecurityWebFilterProfileFqdnThreatFeedFiltersCategoryToTerraform(struct?: DataFortisaseSecurityWebFilterProfileFqdnThreatFeedFiltersCategory | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    datasource: cdktf.stringToTerraform(struct!.datasource),
    primary_key: cdktf.stringToTerraform(struct!.primaryKey),
  }
}


export function dataFortisaseSecurityWebFilterProfileFqdnThreatFeedFiltersCategoryToHclTerraform(struct?: DataFortisaseSecurityWebFilterProfileFqdnThreatFeedFiltersCategory | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    datasource: {
      value: cdktf.stringToHclTerraform(struct!.datasource),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    primary_key: {
      value: cdktf.stringToHclTerraform(struct!.primaryKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataFortisaseSecurityWebFilterProfileFqdnThreatFeedFiltersCategoryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataFortisaseSecurityWebFilterProfileFqdnThreatFeedFiltersCategory | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._datasource !== undefined) {
      hasAnyValues = true;
      internalValueResult.datasource = this._datasource;
    }
    if (this._primaryKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.primaryKey = this._primaryKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFortisaseSecurityWebFilterProfileFqdnThreatFeedFiltersCategory | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._datasource = undefined;
      this._primaryKey = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._datasource = value.datasource;
      this._primaryKey = value.primaryKey;
    }
  }

  // datasource - computed: true, optional: true, required: false
  private _datasource?: string; 
  public get datasource() {
    return this.getStringAttribute('datasource');
  }
  public set datasource(value: string) {
    this._datasource = value;
  }
  public resetDatasource() {
    this._datasource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datasourceInput() {
    return this._datasource;
  }

  // primary_key - computed: true, optional: true, required: false
  private _primaryKey?: string; 
  public get primaryKey() {
    return this.getStringAttribute('primary_key');
  }
  public set primaryKey(value: string) {
    this._primaryKey = value;
  }
  public resetPrimaryKey() {
    this._primaryKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryKeyInput() {
    return this._primaryKey;
  }
}
export interface DataFortisaseSecurityWebFilterProfileFqdnThreatFeedFilters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/security_web_filter_profile#action DataFortisaseSecurityWebFilterProfile#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/security_web_filter_profile#category DataFortisaseSecurityWebFilterProfile#category}
  */
  readonly category?: DataFortisaseSecurityWebFilterProfileFqdnThreatFeedFiltersCategory;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/security_web_filter_profile#warning_duration DataFortisaseSecurityWebFilterProfile#warning_duration}
  */
  readonly warningDuration?: string;
}

export function dataFortisaseSecurityWebFilterProfileFqdnThreatFeedFiltersToTerraform(struct?: DataFortisaseSecurityWebFilterProfileFqdnThreatFeedFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    category: dataFortisaseSecurityWebFilterProfileFqdnThreatFeedFiltersCategoryToTerraform(struct!.category),
    warning_duration: cdktf.stringToTerraform(struct!.warningDuration),
  }
}


export function dataFortisaseSecurityWebFilterProfileFqdnThreatFeedFiltersToHclTerraform(struct?: DataFortisaseSecurityWebFilterProfileFqdnThreatFeedFilters | cdktf.IResolvable): any {
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
    category: {
      value: dataFortisaseSecurityWebFilterProfileFqdnThreatFeedFiltersCategoryToHclTerraform(struct!.category),
      isBlock: true,
      type: "struct",
      storageClassType: "DataFortisaseSecurityWebFilterProfileFqdnThreatFeedFiltersCategory",
    },
    warning_duration: {
      value: cdktf.stringToHclTerraform(struct!.warningDuration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataFortisaseSecurityWebFilterProfileFqdnThreatFeedFiltersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataFortisaseSecurityWebFilterProfileFqdnThreatFeedFilters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._category?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.category = this._category?.internalValue;
    }
    if (this._warningDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.warningDuration = this._warningDuration;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFortisaseSecurityWebFilterProfileFqdnThreatFeedFilters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._category.internalValue = undefined;
      this._warningDuration = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._category.internalValue = value.category;
      this._warningDuration = value.warningDuration;
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

  // category - computed: true, optional: true, required: false
  private _category = new DataFortisaseSecurityWebFilterProfileFqdnThreatFeedFiltersCategoryOutputReference(this, "category");
  public get category() {
    return this._category;
  }
  public putCategory(value: DataFortisaseSecurityWebFilterProfileFqdnThreatFeedFiltersCategory) {
    this._category.internalValue = value;
  }
  public resetCategory() {
    this._category.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categoryInput() {
    return this._category.internalValue;
  }

  // warning_duration - computed: true, optional: true, required: false
  private _warningDuration?: string; 
  public get warningDuration() {
    return this.getStringAttribute('warning_duration');
  }
  public set warningDuration(value: string) {
    this._warningDuration = value;
  }
  public resetWarningDuration() {
    this._warningDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get warningDurationInput() {
    return this._warningDuration;
  }
}

export class DataFortisaseSecurityWebFilterProfileFqdnThreatFeedFiltersList extends cdktf.ComplexList {
  public internalValue? : DataFortisaseSecurityWebFilterProfileFqdnThreatFeedFilters[] | cdktf.IResolvable

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
  public get(index: number): DataFortisaseSecurityWebFilterProfileFqdnThreatFeedFiltersOutputReference {
    return new DataFortisaseSecurityWebFilterProfileFqdnThreatFeedFiltersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataFortisaseSecurityWebFilterProfileHttpHeadersDestinations {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/security_web_filter_profile#datasource DataFortisaseSecurityWebFilterProfile#datasource}
  */
  readonly datasource?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/security_web_filter_profile#primary_key DataFortisaseSecurityWebFilterProfile#primary_key}
  */
  readonly primaryKey?: string;
}

export function dataFortisaseSecurityWebFilterProfileHttpHeadersDestinationsToTerraform(struct?: DataFortisaseSecurityWebFilterProfileHttpHeadersDestinations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    datasource: cdktf.stringToTerraform(struct!.datasource),
    primary_key: cdktf.stringToTerraform(struct!.primaryKey),
  }
}


export function dataFortisaseSecurityWebFilterProfileHttpHeadersDestinationsToHclTerraform(struct?: DataFortisaseSecurityWebFilterProfileHttpHeadersDestinations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    datasource: {
      value: cdktf.stringToHclTerraform(struct!.datasource),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    primary_key: {
      value: cdktf.stringToHclTerraform(struct!.primaryKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataFortisaseSecurityWebFilterProfileHttpHeadersDestinationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataFortisaseSecurityWebFilterProfileHttpHeadersDestinations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._datasource !== undefined) {
      hasAnyValues = true;
      internalValueResult.datasource = this._datasource;
    }
    if (this._primaryKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.primaryKey = this._primaryKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFortisaseSecurityWebFilterProfileHttpHeadersDestinations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._datasource = undefined;
      this._primaryKey = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._datasource = value.datasource;
      this._primaryKey = value.primaryKey;
    }
  }

  // datasource - computed: true, optional: true, required: false
  private _datasource?: string; 
  public get datasource() {
    return this.getStringAttribute('datasource');
  }
  public set datasource(value: string) {
    this._datasource = value;
  }
  public resetDatasource() {
    this._datasource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datasourceInput() {
    return this._datasource;
  }

  // primary_key - computed: true, optional: true, required: false
  private _primaryKey?: string; 
  public get primaryKey() {
    return this.getStringAttribute('primary_key');
  }
  public set primaryKey(value: string) {
    this._primaryKey = value;
  }
  public resetPrimaryKey() {
    this._primaryKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryKeyInput() {
    return this._primaryKey;
  }
}

export class DataFortisaseSecurityWebFilterProfileHttpHeadersDestinationsList extends cdktf.ComplexList {
  public internalValue? : DataFortisaseSecurityWebFilterProfileHttpHeadersDestinations[] | cdktf.IResolvable

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
  public get(index: number): DataFortisaseSecurityWebFilterProfileHttpHeadersDestinationsOutputReference {
    return new DataFortisaseSecurityWebFilterProfileHttpHeadersDestinationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataFortisaseSecurityWebFilterProfileHttpHeaders {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/security_web_filter_profile#action DataFortisaseSecurityWebFilterProfile#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/security_web_filter_profile#content DataFortisaseSecurityWebFilterProfile#content}
  */
  readonly content?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/security_web_filter_profile#destinations DataFortisaseSecurityWebFilterProfile#destinations}
  */
  readonly destinations?: DataFortisaseSecurityWebFilterProfileHttpHeadersDestinations[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/security_web_filter_profile#name DataFortisaseSecurityWebFilterProfile#name}
  */
  readonly name?: string;
}

export function dataFortisaseSecurityWebFilterProfileHttpHeadersToTerraform(struct?: DataFortisaseSecurityWebFilterProfileHttpHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    content: cdktf.stringToTerraform(struct!.content),
    destinations: cdktf.listMapper(dataFortisaseSecurityWebFilterProfileHttpHeadersDestinationsToTerraform, false)(struct!.destinations),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataFortisaseSecurityWebFilterProfileHttpHeadersToHclTerraform(struct?: DataFortisaseSecurityWebFilterProfileHttpHeaders | cdktf.IResolvable): any {
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
    content: {
      value: cdktf.stringToHclTerraform(struct!.content),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    destinations: {
      value: cdktf.listMapperHcl(dataFortisaseSecurityWebFilterProfileHttpHeadersDestinationsToHclTerraform, false)(struct!.destinations),
      isBlock: true,
      type: "list",
      storageClassType: "DataFortisaseSecurityWebFilterProfileHttpHeadersDestinationsList",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataFortisaseSecurityWebFilterProfileHttpHeadersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataFortisaseSecurityWebFilterProfileHttpHeaders | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._content !== undefined) {
      hasAnyValues = true;
      internalValueResult.content = this._content;
    }
    if (this._destinations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinations = this._destinations?.internalValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFortisaseSecurityWebFilterProfileHttpHeaders | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._content = undefined;
      this._destinations.internalValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._content = value.content;
      this._destinations.internalValue = value.destinations;
      this._name = value.name;
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

  // content - computed: true, optional: true, required: false
  private _content?: string; 
  public get content() {
    return this.getStringAttribute('content');
  }
  public set content(value: string) {
    this._content = value;
  }
  public resetContent() {
    this._content = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentInput() {
    return this._content;
  }

  // destinations - computed: true, optional: true, required: false
  private _destinations = new DataFortisaseSecurityWebFilterProfileHttpHeadersDestinationsList(this, "destinations", false);
  public get destinations() {
    return this._destinations;
  }
  public putDestinations(value: DataFortisaseSecurityWebFilterProfileHttpHeadersDestinations[] | cdktf.IResolvable) {
    this._destinations.internalValue = value;
  }
  public resetDestinations() {
    this._destinations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationsInput() {
    return this._destinations.internalValue;
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
}

export class DataFortisaseSecurityWebFilterProfileHttpHeadersList extends cdktf.ComplexList {
  public internalValue? : DataFortisaseSecurityWebFilterProfileHttpHeaders[] | cdktf.IResolvable

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
  public get(index: number): DataFortisaseSecurityWebFilterProfileHttpHeadersOutputReference {
    return new DataFortisaseSecurityWebFilterProfileHttpHeadersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataFortisaseSecurityWebFilterProfileUrlFilters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/security_web_filter_profile#action DataFortisaseSecurityWebFilterProfile#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/security_web_filter_profile#status DataFortisaseSecurityWebFilterProfile#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/security_web_filter_profile#type DataFortisaseSecurityWebFilterProfile#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/security_web_filter_profile#url DataFortisaseSecurityWebFilterProfile#url}
  */
  readonly url?: string;
}

export function dataFortisaseSecurityWebFilterProfileUrlFiltersToTerraform(struct?: DataFortisaseSecurityWebFilterProfileUrlFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    status: cdktf.stringToTerraform(struct!.status),
    type: cdktf.stringToTerraform(struct!.type),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function dataFortisaseSecurityWebFilterProfileUrlFiltersToHclTerraform(struct?: DataFortisaseSecurityWebFilterProfileUrlFilters | cdktf.IResolvable): any {
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
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataFortisaseSecurityWebFilterProfileUrlFiltersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataFortisaseSecurityWebFilterProfileUrlFilters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFortisaseSecurityWebFilterProfileUrlFilters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._status = undefined;
      this._type = undefined;
      this._url = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._status = value.status;
      this._type = value.type;
      this._url = value.url;
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

  // status - computed: true, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // type - computed: true, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // url - computed: true, optional: true, required: false
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  public resetUrl() {
    this._url = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }
}

export class DataFortisaseSecurityWebFilterProfileUrlFiltersList extends cdktf.ComplexList {
  public internalValue? : DataFortisaseSecurityWebFilterProfileUrlFilters[] | cdktf.IResolvable

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
  public get(index: number): DataFortisaseSecurityWebFilterProfileUrlFiltersOutputReference {
    return new DataFortisaseSecurityWebFilterProfileUrlFiltersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/security_web_filter_profile fortisase_security_web_filter_profile}
*/
export class DataFortisaseSecurityWebFilterProfile extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortisase_security_web_filter_profile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataFortisaseSecurityWebFilterProfile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataFortisaseSecurityWebFilterProfile to import
  * @param importFromId The id of the existing DataFortisaseSecurityWebFilterProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/security_web_filter_profile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataFortisaseSecurityWebFilterProfile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortisase_security_web_filter_profile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/data-sources/security_web_filter_profile fortisase_security_web_filter_profile} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataFortisaseSecurityWebFilterProfileConfig
  */
  public constructor(scope: Construct, id: string, config: DataFortisaseSecurityWebFilterProfileConfig) {
    super(scope, id, {
      terraformResourceType: 'fortisase_security_web_filter_profile',
      terraformGeneratorMetadata: {
        providerName: 'fortisase',
        providerVersion: '1.0.0',
        providerVersionConstraint: '1.0.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._blockInvalidUrl = config.blockInvalidUrl;
    this._contentFilters.internalValue = config.contentFilters;
    this._direction = config.direction;
    this._enforceSafeSearch = config.enforceSafeSearch;
    this._fortiguardFilters.internalValue = config.fortiguardFilters;
    this._fortiguardLocalCategoryFilters.internalValue = config.fortiguardLocalCategoryFilters;
    this._fqdnThreatFeedFilters.internalValue = config.fqdnThreatFeedFilters;
    this._httpHeaders.internalValue = config.httpHeaders;
    this._primaryKey = config.primaryKey;
    this._trafficOnRatingError = config.trafficOnRatingError;
    this._urlFilters.internalValue = config.urlFilters;
    this._useFortiguardFilters = config.useFortiguardFilters;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // block_invalid_url - computed: true, optional: true, required: false
  private _blockInvalidUrl?: string; 
  public get blockInvalidUrl() {
    return this.getStringAttribute('block_invalid_url');
  }
  public set blockInvalidUrl(value: string) {
    this._blockInvalidUrl = value;
  }
  public resetBlockInvalidUrl() {
    this._blockInvalidUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockInvalidUrlInput() {
    return this._blockInvalidUrl;
  }

  // content_filters - computed: true, optional: true, required: false
  private _contentFilters = new DataFortisaseSecurityWebFilterProfileContentFiltersList(this, "content_filters", false);
  public get contentFilters() {
    return this._contentFilters;
  }
  public putContentFilters(value: DataFortisaseSecurityWebFilterProfileContentFilters[] | cdktf.IResolvable) {
    this._contentFilters.internalValue = value;
  }
  public resetContentFilters() {
    this._contentFilters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentFiltersInput() {
    return this._contentFilters.internalValue;
  }

  // direction - computed: true, optional: true, required: false
  private _direction?: string; 
  public get direction() {
    return this.getStringAttribute('direction');
  }
  public set direction(value: string) {
    this._direction = value;
  }
  public resetDirection() {
    this._direction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get directionInput() {
    return this._direction;
  }

  // enforce_safe_search - computed: true, optional: true, required: false
  private _enforceSafeSearch?: string; 
  public get enforceSafeSearch() {
    return this.getStringAttribute('enforce_safe_search');
  }
  public set enforceSafeSearch(value: string) {
    this._enforceSafeSearch = value;
  }
  public resetEnforceSafeSearch() {
    this._enforceSafeSearch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enforceSafeSearchInput() {
    return this._enforceSafeSearch;
  }

  // fortiguard_filters - computed: true, optional: true, required: false
  private _fortiguardFilters = new DataFortisaseSecurityWebFilterProfileFortiguardFiltersList(this, "fortiguard_filters", false);
  public get fortiguardFilters() {
    return this._fortiguardFilters;
  }
  public putFortiguardFilters(value: DataFortisaseSecurityWebFilterProfileFortiguardFilters[] | cdktf.IResolvable) {
    this._fortiguardFilters.internalValue = value;
  }
  public resetFortiguardFilters() {
    this._fortiguardFilters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fortiguardFiltersInput() {
    return this._fortiguardFilters.internalValue;
  }

  // fortiguard_local_category_filters - computed: true, optional: true, required: false
  private _fortiguardLocalCategoryFilters = new DataFortisaseSecurityWebFilterProfileFortiguardLocalCategoryFiltersList(this, "fortiguard_local_category_filters", false);
  public get fortiguardLocalCategoryFilters() {
    return this._fortiguardLocalCategoryFilters;
  }
  public putFortiguardLocalCategoryFilters(value: DataFortisaseSecurityWebFilterProfileFortiguardLocalCategoryFilters[] | cdktf.IResolvable) {
    this._fortiguardLocalCategoryFilters.internalValue = value;
  }
  public resetFortiguardLocalCategoryFilters() {
    this._fortiguardLocalCategoryFilters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fortiguardLocalCategoryFiltersInput() {
    return this._fortiguardLocalCategoryFilters.internalValue;
  }

  // fqdn_threat_feed_filters - computed: true, optional: true, required: false
  private _fqdnThreatFeedFilters = new DataFortisaseSecurityWebFilterProfileFqdnThreatFeedFiltersList(this, "fqdn_threat_feed_filters", false);
  public get fqdnThreatFeedFilters() {
    return this._fqdnThreatFeedFilters;
  }
  public putFqdnThreatFeedFilters(value: DataFortisaseSecurityWebFilterProfileFqdnThreatFeedFilters[] | cdktf.IResolvable) {
    this._fqdnThreatFeedFilters.internalValue = value;
  }
  public resetFqdnThreatFeedFilters() {
    this._fqdnThreatFeedFilters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fqdnThreatFeedFiltersInput() {
    return this._fqdnThreatFeedFilters.internalValue;
  }

  // http_headers - computed: true, optional: true, required: false
  private _httpHeaders = new DataFortisaseSecurityWebFilterProfileHttpHeadersList(this, "http_headers", false);
  public get httpHeaders() {
    return this._httpHeaders;
  }
  public putHttpHeaders(value: DataFortisaseSecurityWebFilterProfileHttpHeaders[] | cdktf.IResolvable) {
    this._httpHeaders.internalValue = value;
  }
  public resetHttpHeaders() {
    this._httpHeaders.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpHeadersInput() {
    return this._httpHeaders.internalValue;
  }

  // primary_key - computed: false, optional: false, required: true
  private _primaryKey?: string; 
  public get primaryKey() {
    return this.getStringAttribute('primary_key');
  }
  public set primaryKey(value: string) {
    this._primaryKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryKeyInput() {
    return this._primaryKey;
  }

  // traffic_on_rating_error - computed: true, optional: true, required: false
  private _trafficOnRatingError?: string; 
  public get trafficOnRatingError() {
    return this.getStringAttribute('traffic_on_rating_error');
  }
  public set trafficOnRatingError(value: string) {
    this._trafficOnRatingError = value;
  }
  public resetTrafficOnRatingError() {
    this._trafficOnRatingError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trafficOnRatingErrorInput() {
    return this._trafficOnRatingError;
  }

  // url_filters - computed: true, optional: true, required: false
  private _urlFilters = new DataFortisaseSecurityWebFilterProfileUrlFiltersList(this, "url_filters", false);
  public get urlFilters() {
    return this._urlFilters;
  }
  public putUrlFilters(value: DataFortisaseSecurityWebFilterProfileUrlFilters[] | cdktf.IResolvable) {
    this._urlFilters.internalValue = value;
  }
  public resetUrlFilters() {
    this._urlFilters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlFiltersInput() {
    return this._urlFilters.internalValue;
  }

  // use_fortiguard_filters - computed: true, optional: true, required: false
  private _useFortiguardFilters?: string; 
  public get useFortiguardFilters() {
    return this.getStringAttribute('use_fortiguard_filters');
  }
  public set useFortiguardFilters(value: string) {
    this._useFortiguardFilters = value;
  }
  public resetUseFortiguardFilters() {
    this._useFortiguardFilters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useFortiguardFiltersInput() {
    return this._useFortiguardFilters;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      block_invalid_url: cdktf.stringToTerraform(this._blockInvalidUrl),
      content_filters: cdktf.listMapper(dataFortisaseSecurityWebFilterProfileContentFiltersToTerraform, false)(this._contentFilters.internalValue),
      direction: cdktf.stringToTerraform(this._direction),
      enforce_safe_search: cdktf.stringToTerraform(this._enforceSafeSearch),
      fortiguard_filters: cdktf.listMapper(dataFortisaseSecurityWebFilterProfileFortiguardFiltersToTerraform, false)(this._fortiguardFilters.internalValue),
      fortiguard_local_category_filters: cdktf.listMapper(dataFortisaseSecurityWebFilterProfileFortiguardLocalCategoryFiltersToTerraform, false)(this._fortiguardLocalCategoryFilters.internalValue),
      fqdn_threat_feed_filters: cdktf.listMapper(dataFortisaseSecurityWebFilterProfileFqdnThreatFeedFiltersToTerraform, false)(this._fqdnThreatFeedFilters.internalValue),
      http_headers: cdktf.listMapper(dataFortisaseSecurityWebFilterProfileHttpHeadersToTerraform, false)(this._httpHeaders.internalValue),
      primary_key: cdktf.stringToTerraform(this._primaryKey),
      traffic_on_rating_error: cdktf.stringToTerraform(this._trafficOnRatingError),
      url_filters: cdktf.listMapper(dataFortisaseSecurityWebFilterProfileUrlFiltersToTerraform, false)(this._urlFilters.internalValue),
      use_fortiguard_filters: cdktf.stringToTerraform(this._useFortiguardFilters),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      block_invalid_url: {
        value: cdktf.stringToHclTerraform(this._blockInvalidUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      content_filters: {
        value: cdktf.listMapperHcl(dataFortisaseSecurityWebFilterProfileContentFiltersToHclTerraform, false)(this._contentFilters.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataFortisaseSecurityWebFilterProfileContentFiltersList",
      },
      direction: {
        value: cdktf.stringToHclTerraform(this._direction),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enforce_safe_search: {
        value: cdktf.stringToHclTerraform(this._enforceSafeSearch),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fortiguard_filters: {
        value: cdktf.listMapperHcl(dataFortisaseSecurityWebFilterProfileFortiguardFiltersToHclTerraform, false)(this._fortiguardFilters.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataFortisaseSecurityWebFilterProfileFortiguardFiltersList",
      },
      fortiguard_local_category_filters: {
        value: cdktf.listMapperHcl(dataFortisaseSecurityWebFilterProfileFortiguardLocalCategoryFiltersToHclTerraform, false)(this._fortiguardLocalCategoryFilters.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataFortisaseSecurityWebFilterProfileFortiguardLocalCategoryFiltersList",
      },
      fqdn_threat_feed_filters: {
        value: cdktf.listMapperHcl(dataFortisaseSecurityWebFilterProfileFqdnThreatFeedFiltersToHclTerraform, false)(this._fqdnThreatFeedFilters.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataFortisaseSecurityWebFilterProfileFqdnThreatFeedFiltersList",
      },
      http_headers: {
        value: cdktf.listMapperHcl(dataFortisaseSecurityWebFilterProfileHttpHeadersToHclTerraform, false)(this._httpHeaders.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataFortisaseSecurityWebFilterProfileHttpHeadersList",
      },
      primary_key: {
        value: cdktf.stringToHclTerraform(this._primaryKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      traffic_on_rating_error: {
        value: cdktf.stringToHclTerraform(this._trafficOnRatingError),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      url_filters: {
        value: cdktf.listMapperHcl(dataFortisaseSecurityWebFilterProfileUrlFiltersToHclTerraform, false)(this._urlFilters.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataFortisaseSecurityWebFilterProfileUrlFiltersList",
      },
      use_fortiguard_filters: {
        value: cdktf.stringToHclTerraform(this._useFortiguardFilters),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
