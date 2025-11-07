// https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/security_web_filter_profile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SecurityWebFilterProfileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/security_web_filter_profile#block_invalid_url SecurityWebFilterProfile#block_invalid_url}
  */
  readonly blockInvalidUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/security_web_filter_profile#content_filters SecurityWebFilterProfile#content_filters}
  */
  readonly contentFilters?: SecurityWebFilterProfileContentFilters[] | cdktf.IResolvable;
  /**
  * The direction of the target resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/security_web_filter_profile#direction SecurityWebFilterProfile#direction}
  */
  readonly direction?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/security_web_filter_profile#enforce_safe_search SecurityWebFilterProfile#enforce_safe_search}
  */
  readonly enforceSafeSearch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/security_web_filter_profile#fortiguard_filters SecurityWebFilterProfile#fortiguard_filters}
  */
  readonly fortiguardFilters?: SecurityWebFilterProfileFortiguardFilters[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/security_web_filter_profile#fortiguard_local_category_filters SecurityWebFilterProfile#fortiguard_local_category_filters}
  */
  readonly fortiguardLocalCategoryFilters?: SecurityWebFilterProfileFortiguardLocalCategoryFilters[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/security_web_filter_profile#fqdn_threat_feed_filters SecurityWebFilterProfile#fqdn_threat_feed_filters}
  */
  readonly fqdnThreatFeedFilters?: SecurityWebFilterProfileFqdnThreatFeedFilters[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/security_web_filter_profile#http_headers SecurityWebFilterProfile#http_headers}
  */
  readonly httpHeaders?: SecurityWebFilterProfileHttpHeaders[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/security_web_filter_profile#primary_key SecurityWebFilterProfile#primary_key}
  */
  readonly primaryKey: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/security_web_filter_profile#traffic_on_rating_error SecurityWebFilterProfile#traffic_on_rating_error}
  */
  readonly trafficOnRatingError?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/security_web_filter_profile#url_filters SecurityWebFilterProfile#url_filters}
  */
  readonly urlFilters?: SecurityWebFilterProfileUrlFilters[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/security_web_filter_profile#use_fortiguard_filters SecurityWebFilterProfile#use_fortiguard_filters}
  */
  readonly useFortiguardFilters?: string;
}
export interface SecurityWebFilterProfileContentFilters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/security_web_filter_profile#action SecurityWebFilterProfile#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/security_web_filter_profile#lang SecurityWebFilterProfile#lang}
  */
  readonly lang?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/security_web_filter_profile#pattern SecurityWebFilterProfile#pattern}
  */
  readonly pattern?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/security_web_filter_profile#pattern_type SecurityWebFilterProfile#pattern_type}
  */
  readonly patternType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/security_web_filter_profile#score SecurityWebFilterProfile#score}
  */
  readonly score?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/security_web_filter_profile#status SecurityWebFilterProfile#status}
  */
  readonly status?: string;
}

export function securityWebFilterProfileContentFiltersToTerraform(struct?: SecurityWebFilterProfileContentFilters | cdktf.IResolvable): any {
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


export function securityWebFilterProfileContentFiltersToHclTerraform(struct?: SecurityWebFilterProfileContentFilters | cdktf.IResolvable): any {
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

export class SecurityWebFilterProfileContentFiltersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SecurityWebFilterProfileContentFilters | cdktf.IResolvable | undefined {
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

  public set internalValue(value: SecurityWebFilterProfileContentFilters | cdktf.IResolvable | undefined) {
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

export class SecurityWebFilterProfileContentFiltersList extends cdktf.ComplexList {
  public internalValue? : SecurityWebFilterProfileContentFilters[] | cdktf.IResolvable

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
  public get(index: number): SecurityWebFilterProfileContentFiltersOutputReference {
    return new SecurityWebFilterProfileContentFiltersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecurityWebFilterProfileFortiguardFiltersCategory {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/security_web_filter_profile#datasource SecurityWebFilterProfile#datasource}
  */
  readonly datasource?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/security_web_filter_profile#primary_key SecurityWebFilterProfile#primary_key}
  */
  readonly primaryKey?: string;
}

export function securityWebFilterProfileFortiguardFiltersCategoryToTerraform(struct?: SecurityWebFilterProfileFortiguardFiltersCategory | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    datasource: cdktf.stringToTerraform(struct!.datasource),
    primary_key: cdktf.stringToTerraform(struct!.primaryKey),
  }
}


export function securityWebFilterProfileFortiguardFiltersCategoryToHclTerraform(struct?: SecurityWebFilterProfileFortiguardFiltersCategory | cdktf.IResolvable): any {
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

export class SecurityWebFilterProfileFortiguardFiltersCategoryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SecurityWebFilterProfileFortiguardFiltersCategory | cdktf.IResolvable | undefined {
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

  public set internalValue(value: SecurityWebFilterProfileFortiguardFiltersCategory | cdktf.IResolvable | undefined) {
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
export interface SecurityWebFilterProfileFortiguardFilters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/security_web_filter_profile#action SecurityWebFilterProfile#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/security_web_filter_profile#category SecurityWebFilterProfile#category}
  */
  readonly category?: SecurityWebFilterProfileFortiguardFiltersCategory;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/security_web_filter_profile#warning_duration SecurityWebFilterProfile#warning_duration}
  */
  readonly warningDuration?: string;
}

export function securityWebFilterProfileFortiguardFiltersToTerraform(struct?: SecurityWebFilterProfileFortiguardFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    category: securityWebFilterProfileFortiguardFiltersCategoryToTerraform(struct!.category),
    warning_duration: cdktf.stringToTerraform(struct!.warningDuration),
  }
}


export function securityWebFilterProfileFortiguardFiltersToHclTerraform(struct?: SecurityWebFilterProfileFortiguardFilters | cdktf.IResolvable): any {
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
      value: securityWebFilterProfileFortiguardFiltersCategoryToHclTerraform(struct!.category),
      isBlock: true,
      type: "struct",
      storageClassType: "SecurityWebFilterProfileFortiguardFiltersCategory",
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

export class SecurityWebFilterProfileFortiguardFiltersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SecurityWebFilterProfileFortiguardFilters | cdktf.IResolvable | undefined {
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

  public set internalValue(value: SecurityWebFilterProfileFortiguardFilters | cdktf.IResolvable | undefined) {
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
  private _category = new SecurityWebFilterProfileFortiguardFiltersCategoryOutputReference(this, "category");
  public get category() {
    return this._category;
  }
  public putCategory(value: SecurityWebFilterProfileFortiguardFiltersCategory) {
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

export class SecurityWebFilterProfileFortiguardFiltersList extends cdktf.ComplexList {
  public internalValue? : SecurityWebFilterProfileFortiguardFilters[] | cdktf.IResolvable

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
  public get(index: number): SecurityWebFilterProfileFortiguardFiltersOutputReference {
    return new SecurityWebFilterProfileFortiguardFiltersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecurityWebFilterProfileFortiguardLocalCategoryFiltersCategory {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/security_web_filter_profile#datasource SecurityWebFilterProfile#datasource}
  */
  readonly datasource?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/security_web_filter_profile#primary_key SecurityWebFilterProfile#primary_key}
  */
  readonly primaryKey?: string;
}

export function securityWebFilterProfileFortiguardLocalCategoryFiltersCategoryToTerraform(struct?: SecurityWebFilterProfileFortiguardLocalCategoryFiltersCategory | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    datasource: cdktf.stringToTerraform(struct!.datasource),
    primary_key: cdktf.stringToTerraform(struct!.primaryKey),
  }
}


export function securityWebFilterProfileFortiguardLocalCategoryFiltersCategoryToHclTerraform(struct?: SecurityWebFilterProfileFortiguardLocalCategoryFiltersCategory | cdktf.IResolvable): any {
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

export class SecurityWebFilterProfileFortiguardLocalCategoryFiltersCategoryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SecurityWebFilterProfileFortiguardLocalCategoryFiltersCategory | cdktf.IResolvable | undefined {
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

  public set internalValue(value: SecurityWebFilterProfileFortiguardLocalCategoryFiltersCategory | cdktf.IResolvable | undefined) {
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
export interface SecurityWebFilterProfileFortiguardLocalCategoryFilters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/security_web_filter_profile#action SecurityWebFilterProfile#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/security_web_filter_profile#category SecurityWebFilterProfile#category}
  */
  readonly category?: SecurityWebFilterProfileFortiguardLocalCategoryFiltersCategory;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/security_web_filter_profile#warning_duration SecurityWebFilterProfile#warning_duration}
  */
  readonly warningDuration?: string;
}

export function securityWebFilterProfileFortiguardLocalCategoryFiltersToTerraform(struct?: SecurityWebFilterProfileFortiguardLocalCategoryFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    category: securityWebFilterProfileFortiguardLocalCategoryFiltersCategoryToTerraform(struct!.category),
    warning_duration: cdktf.stringToTerraform(struct!.warningDuration),
  }
}


export function securityWebFilterProfileFortiguardLocalCategoryFiltersToHclTerraform(struct?: SecurityWebFilterProfileFortiguardLocalCategoryFilters | cdktf.IResolvable): any {
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
      value: securityWebFilterProfileFortiguardLocalCategoryFiltersCategoryToHclTerraform(struct!.category),
      isBlock: true,
      type: "struct",
      storageClassType: "SecurityWebFilterProfileFortiguardLocalCategoryFiltersCategory",
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

export class SecurityWebFilterProfileFortiguardLocalCategoryFiltersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SecurityWebFilterProfileFortiguardLocalCategoryFilters | cdktf.IResolvable | undefined {
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

  public set internalValue(value: SecurityWebFilterProfileFortiguardLocalCategoryFilters | cdktf.IResolvable | undefined) {
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
  private _category = new SecurityWebFilterProfileFortiguardLocalCategoryFiltersCategoryOutputReference(this, "category");
  public get category() {
    return this._category;
  }
  public putCategory(value: SecurityWebFilterProfileFortiguardLocalCategoryFiltersCategory) {
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

export class SecurityWebFilterProfileFortiguardLocalCategoryFiltersList extends cdktf.ComplexList {
  public internalValue? : SecurityWebFilterProfileFortiguardLocalCategoryFilters[] | cdktf.IResolvable

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
  public get(index: number): SecurityWebFilterProfileFortiguardLocalCategoryFiltersOutputReference {
    return new SecurityWebFilterProfileFortiguardLocalCategoryFiltersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecurityWebFilterProfileFqdnThreatFeedFiltersCategory {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/security_web_filter_profile#datasource SecurityWebFilterProfile#datasource}
  */
  readonly datasource?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/security_web_filter_profile#primary_key SecurityWebFilterProfile#primary_key}
  */
  readonly primaryKey?: string;
}

export function securityWebFilterProfileFqdnThreatFeedFiltersCategoryToTerraform(struct?: SecurityWebFilterProfileFqdnThreatFeedFiltersCategory | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    datasource: cdktf.stringToTerraform(struct!.datasource),
    primary_key: cdktf.stringToTerraform(struct!.primaryKey),
  }
}


export function securityWebFilterProfileFqdnThreatFeedFiltersCategoryToHclTerraform(struct?: SecurityWebFilterProfileFqdnThreatFeedFiltersCategory | cdktf.IResolvable): any {
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

export class SecurityWebFilterProfileFqdnThreatFeedFiltersCategoryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SecurityWebFilterProfileFqdnThreatFeedFiltersCategory | cdktf.IResolvable | undefined {
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

  public set internalValue(value: SecurityWebFilterProfileFqdnThreatFeedFiltersCategory | cdktf.IResolvable | undefined) {
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
export interface SecurityWebFilterProfileFqdnThreatFeedFilters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/security_web_filter_profile#action SecurityWebFilterProfile#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/security_web_filter_profile#category SecurityWebFilterProfile#category}
  */
  readonly category?: SecurityWebFilterProfileFqdnThreatFeedFiltersCategory;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/security_web_filter_profile#warning_duration SecurityWebFilterProfile#warning_duration}
  */
  readonly warningDuration?: string;
}

export function securityWebFilterProfileFqdnThreatFeedFiltersToTerraform(struct?: SecurityWebFilterProfileFqdnThreatFeedFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    category: securityWebFilterProfileFqdnThreatFeedFiltersCategoryToTerraform(struct!.category),
    warning_duration: cdktf.stringToTerraform(struct!.warningDuration),
  }
}


export function securityWebFilterProfileFqdnThreatFeedFiltersToHclTerraform(struct?: SecurityWebFilterProfileFqdnThreatFeedFilters | cdktf.IResolvable): any {
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
      value: securityWebFilterProfileFqdnThreatFeedFiltersCategoryToHclTerraform(struct!.category),
      isBlock: true,
      type: "struct",
      storageClassType: "SecurityWebFilterProfileFqdnThreatFeedFiltersCategory",
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

export class SecurityWebFilterProfileFqdnThreatFeedFiltersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SecurityWebFilterProfileFqdnThreatFeedFilters | cdktf.IResolvable | undefined {
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

  public set internalValue(value: SecurityWebFilterProfileFqdnThreatFeedFilters | cdktf.IResolvable | undefined) {
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
  private _category = new SecurityWebFilterProfileFqdnThreatFeedFiltersCategoryOutputReference(this, "category");
  public get category() {
    return this._category;
  }
  public putCategory(value: SecurityWebFilterProfileFqdnThreatFeedFiltersCategory) {
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

export class SecurityWebFilterProfileFqdnThreatFeedFiltersList extends cdktf.ComplexList {
  public internalValue? : SecurityWebFilterProfileFqdnThreatFeedFilters[] | cdktf.IResolvable

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
  public get(index: number): SecurityWebFilterProfileFqdnThreatFeedFiltersOutputReference {
    return new SecurityWebFilterProfileFqdnThreatFeedFiltersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecurityWebFilterProfileHttpHeadersDestinations {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/security_web_filter_profile#datasource SecurityWebFilterProfile#datasource}
  */
  readonly datasource?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/security_web_filter_profile#primary_key SecurityWebFilterProfile#primary_key}
  */
  readonly primaryKey?: string;
}

export function securityWebFilterProfileHttpHeadersDestinationsToTerraform(struct?: SecurityWebFilterProfileHttpHeadersDestinations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    datasource: cdktf.stringToTerraform(struct!.datasource),
    primary_key: cdktf.stringToTerraform(struct!.primaryKey),
  }
}


export function securityWebFilterProfileHttpHeadersDestinationsToHclTerraform(struct?: SecurityWebFilterProfileHttpHeadersDestinations | cdktf.IResolvable): any {
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

export class SecurityWebFilterProfileHttpHeadersDestinationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SecurityWebFilterProfileHttpHeadersDestinations | cdktf.IResolvable | undefined {
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

  public set internalValue(value: SecurityWebFilterProfileHttpHeadersDestinations | cdktf.IResolvable | undefined) {
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

export class SecurityWebFilterProfileHttpHeadersDestinationsList extends cdktf.ComplexList {
  public internalValue? : SecurityWebFilterProfileHttpHeadersDestinations[] | cdktf.IResolvable

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
  public get(index: number): SecurityWebFilterProfileHttpHeadersDestinationsOutputReference {
    return new SecurityWebFilterProfileHttpHeadersDestinationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecurityWebFilterProfileHttpHeaders {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/security_web_filter_profile#action SecurityWebFilterProfile#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/security_web_filter_profile#content SecurityWebFilterProfile#content}
  */
  readonly content?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/security_web_filter_profile#destinations SecurityWebFilterProfile#destinations}
  */
  readonly destinations?: SecurityWebFilterProfileHttpHeadersDestinations[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/security_web_filter_profile#name SecurityWebFilterProfile#name}
  */
  readonly name?: string;
}

export function securityWebFilterProfileHttpHeadersToTerraform(struct?: SecurityWebFilterProfileHttpHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    content: cdktf.stringToTerraform(struct!.content),
    destinations: cdktf.listMapper(securityWebFilterProfileHttpHeadersDestinationsToTerraform, false)(struct!.destinations),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function securityWebFilterProfileHttpHeadersToHclTerraform(struct?: SecurityWebFilterProfileHttpHeaders | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(securityWebFilterProfileHttpHeadersDestinationsToHclTerraform, false)(struct!.destinations),
      isBlock: true,
      type: "list",
      storageClassType: "SecurityWebFilterProfileHttpHeadersDestinationsList",
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

export class SecurityWebFilterProfileHttpHeadersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SecurityWebFilterProfileHttpHeaders | cdktf.IResolvable | undefined {
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

  public set internalValue(value: SecurityWebFilterProfileHttpHeaders | cdktf.IResolvable | undefined) {
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
  private _destinations = new SecurityWebFilterProfileHttpHeadersDestinationsList(this, "destinations", false);
  public get destinations() {
    return this._destinations;
  }
  public putDestinations(value: SecurityWebFilterProfileHttpHeadersDestinations[] | cdktf.IResolvable) {
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

export class SecurityWebFilterProfileHttpHeadersList extends cdktf.ComplexList {
  public internalValue? : SecurityWebFilterProfileHttpHeaders[] | cdktf.IResolvable

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
  public get(index: number): SecurityWebFilterProfileHttpHeadersOutputReference {
    return new SecurityWebFilterProfileHttpHeadersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecurityWebFilterProfileUrlFilters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/security_web_filter_profile#action SecurityWebFilterProfile#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/security_web_filter_profile#status SecurityWebFilterProfile#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/security_web_filter_profile#type SecurityWebFilterProfile#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/security_web_filter_profile#url SecurityWebFilterProfile#url}
  */
  readonly url?: string;
}

export function securityWebFilterProfileUrlFiltersToTerraform(struct?: SecurityWebFilterProfileUrlFilters | cdktf.IResolvable): any {
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


export function securityWebFilterProfileUrlFiltersToHclTerraform(struct?: SecurityWebFilterProfileUrlFilters | cdktf.IResolvable): any {
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

export class SecurityWebFilterProfileUrlFiltersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SecurityWebFilterProfileUrlFilters | cdktf.IResolvable | undefined {
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

  public set internalValue(value: SecurityWebFilterProfileUrlFilters | cdktf.IResolvable | undefined) {
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

export class SecurityWebFilterProfileUrlFiltersList extends cdktf.ComplexList {
  public internalValue? : SecurityWebFilterProfileUrlFilters[] | cdktf.IResolvable

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
  public get(index: number): SecurityWebFilterProfileUrlFiltersOutputReference {
    return new SecurityWebFilterProfileUrlFiltersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/security_web_filter_profile fortisase_security_web_filter_profile}
*/
export class SecurityWebFilterProfile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortisase_security_web_filter_profile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SecurityWebFilterProfile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SecurityWebFilterProfile to import
  * @param importFromId The id of the existing SecurityWebFilterProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/security_web_filter_profile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SecurityWebFilterProfile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortisase_security_web_filter_profile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortisase/1.0.0/docs/resources/security_web_filter_profile fortisase_security_web_filter_profile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SecurityWebFilterProfileConfig
  */
  public constructor(scope: Construct, id: string, config: SecurityWebFilterProfileConfig) {
    super(scope, id, {
      terraformResourceType: 'fortisase_security_web_filter_profile',
      terraformGeneratorMetadata: {
        providerName: 'fortisase',
        providerVersion: '1.0.0'
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
  private _contentFilters = new SecurityWebFilterProfileContentFiltersList(this, "content_filters", false);
  public get contentFilters() {
    return this._contentFilters;
  }
  public putContentFilters(value: SecurityWebFilterProfileContentFilters[] | cdktf.IResolvable) {
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
  private _fortiguardFilters = new SecurityWebFilterProfileFortiguardFiltersList(this, "fortiguard_filters", false);
  public get fortiguardFilters() {
    return this._fortiguardFilters;
  }
  public putFortiguardFilters(value: SecurityWebFilterProfileFortiguardFilters[] | cdktf.IResolvable) {
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
  private _fortiguardLocalCategoryFilters = new SecurityWebFilterProfileFortiguardLocalCategoryFiltersList(this, "fortiguard_local_category_filters", false);
  public get fortiguardLocalCategoryFilters() {
    return this._fortiguardLocalCategoryFilters;
  }
  public putFortiguardLocalCategoryFilters(value: SecurityWebFilterProfileFortiguardLocalCategoryFilters[] | cdktf.IResolvable) {
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
  private _fqdnThreatFeedFilters = new SecurityWebFilterProfileFqdnThreatFeedFiltersList(this, "fqdn_threat_feed_filters", false);
  public get fqdnThreatFeedFilters() {
    return this._fqdnThreatFeedFilters;
  }
  public putFqdnThreatFeedFilters(value: SecurityWebFilterProfileFqdnThreatFeedFilters[] | cdktf.IResolvable) {
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
  private _httpHeaders = new SecurityWebFilterProfileHttpHeadersList(this, "http_headers", false);
  public get httpHeaders() {
    return this._httpHeaders;
  }
  public putHttpHeaders(value: SecurityWebFilterProfileHttpHeaders[] | cdktf.IResolvable) {
    this._httpHeaders.internalValue = value;
  }
  public resetHttpHeaders() {
    this._httpHeaders.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpHeadersInput() {
    return this._httpHeaders.internalValue;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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
  private _urlFilters = new SecurityWebFilterProfileUrlFiltersList(this, "url_filters", false);
  public get urlFilters() {
    return this._urlFilters;
  }
  public putUrlFilters(value: SecurityWebFilterProfileUrlFilters[] | cdktf.IResolvable) {
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
      content_filters: cdktf.listMapper(securityWebFilterProfileContentFiltersToTerraform, false)(this._contentFilters.internalValue),
      direction: cdktf.stringToTerraform(this._direction),
      enforce_safe_search: cdktf.stringToTerraform(this._enforceSafeSearch),
      fortiguard_filters: cdktf.listMapper(securityWebFilterProfileFortiguardFiltersToTerraform, false)(this._fortiguardFilters.internalValue),
      fortiguard_local_category_filters: cdktf.listMapper(securityWebFilterProfileFortiguardLocalCategoryFiltersToTerraform, false)(this._fortiguardLocalCategoryFilters.internalValue),
      fqdn_threat_feed_filters: cdktf.listMapper(securityWebFilterProfileFqdnThreatFeedFiltersToTerraform, false)(this._fqdnThreatFeedFilters.internalValue),
      http_headers: cdktf.listMapper(securityWebFilterProfileHttpHeadersToTerraform, false)(this._httpHeaders.internalValue),
      primary_key: cdktf.stringToTerraform(this._primaryKey),
      traffic_on_rating_error: cdktf.stringToTerraform(this._trafficOnRatingError),
      url_filters: cdktf.listMapper(securityWebFilterProfileUrlFiltersToTerraform, false)(this._urlFilters.internalValue),
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
        value: cdktf.listMapperHcl(securityWebFilterProfileContentFiltersToHclTerraform, false)(this._contentFilters.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SecurityWebFilterProfileContentFiltersList",
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
        value: cdktf.listMapperHcl(securityWebFilterProfileFortiguardFiltersToHclTerraform, false)(this._fortiguardFilters.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SecurityWebFilterProfileFortiguardFiltersList",
      },
      fortiguard_local_category_filters: {
        value: cdktf.listMapperHcl(securityWebFilterProfileFortiguardLocalCategoryFiltersToHclTerraform, false)(this._fortiguardLocalCategoryFilters.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SecurityWebFilterProfileFortiguardLocalCategoryFiltersList",
      },
      fqdn_threat_feed_filters: {
        value: cdktf.listMapperHcl(securityWebFilterProfileFqdnThreatFeedFiltersToHclTerraform, false)(this._fqdnThreatFeedFilters.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SecurityWebFilterProfileFqdnThreatFeedFiltersList",
      },
      http_headers: {
        value: cdktf.listMapperHcl(securityWebFilterProfileHttpHeadersToHclTerraform, false)(this._httpHeaders.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SecurityWebFilterProfileHttpHeadersList",
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
        value: cdktf.listMapperHcl(securityWebFilterProfileUrlFiltersToHclTerraform, false)(this._urlFilters.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SecurityWebFilterProfileUrlFiltersList",
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
