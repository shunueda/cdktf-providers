// https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/webfilter_profile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WebfilterProfileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/webfilter_profile#comment WebfilterProfile#comment}
  */
  readonly comment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/webfilter_profile#dynamic_sort_subtable WebfilterProfile#dynamic_sort_subtable}
  */
  readonly dynamicSortSubtable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/webfilter_profile#extended_log WebfilterProfile#extended_log}
  */
  readonly extendedLog?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/webfilter_profile#feature_set WebfilterProfile#feature_set}
  */
  readonly featureSet?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/webfilter_profile#get_all_tables WebfilterProfile#get_all_tables}
  */
  readonly fetchAllTables?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/webfilter_profile#https_replacemsg WebfilterProfile#https_replacemsg}
  */
  readonly httpsReplacemsg?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/webfilter_profile#id WebfilterProfile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/webfilter_profile#inspection_mode WebfilterProfile#inspection_mode}
  */
  readonly inspectionMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/webfilter_profile#log_all_url WebfilterProfile#log_all_url}
  */
  readonly logAllUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/webfilter_profile#name WebfilterProfile#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/webfilter_profile#options WebfilterProfile#options}
  */
  readonly options?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/webfilter_profile#ovrd_perm WebfilterProfile#ovrd_perm}
  */
  readonly ovrdPerm?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/webfilter_profile#post_action WebfilterProfile#post_action}
  */
  readonly postAction?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/webfilter_profile#replacemsg_group WebfilterProfile#replacemsg_group}
  */
  readonly replacemsgGroup?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/webfilter_profile#vdomparam WebfilterProfile#vdomparam}
  */
  readonly vdomparam?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/webfilter_profile#web_antiphishing_log WebfilterProfile#web_antiphishing_log}
  */
  readonly webAntiphishingLog?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/webfilter_profile#web_content_log WebfilterProfile#web_content_log}
  */
  readonly webContentLog?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/webfilter_profile#web_extended_all_action_log WebfilterProfile#web_extended_all_action_log}
  */
  readonly webExtendedAllActionLog?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/webfilter_profile#web_filter_activex_log WebfilterProfile#web_filter_activex_log}
  */
  readonly webFilterActivexLog?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/webfilter_profile#web_filter_applet_log WebfilterProfile#web_filter_applet_log}
  */
  readonly webFilterAppletLog?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/webfilter_profile#web_filter_command_block_log WebfilterProfile#web_filter_command_block_log}
  */
  readonly webFilterCommandBlockLog?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/webfilter_profile#web_filter_cookie_log WebfilterProfile#web_filter_cookie_log}
  */
  readonly webFilterCookieLog?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/webfilter_profile#web_filter_cookie_removal_log WebfilterProfile#web_filter_cookie_removal_log}
  */
  readonly webFilterCookieRemovalLog?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/webfilter_profile#web_filter_js_log WebfilterProfile#web_filter_js_log}
  */
  readonly webFilterJsLog?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/webfilter_profile#web_filter_jscript_log WebfilterProfile#web_filter_jscript_log}
  */
  readonly webFilterJscriptLog?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/webfilter_profile#web_filter_referer_log WebfilterProfile#web_filter_referer_log}
  */
  readonly webFilterRefererLog?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/webfilter_profile#web_filter_unknown_log WebfilterProfile#web_filter_unknown_log}
  */
  readonly webFilterUnknownLog?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/webfilter_profile#web_filter_vbs_log WebfilterProfile#web_filter_vbs_log}
  */
  readonly webFilterVbsLog?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/webfilter_profile#web_flow_log_encoding WebfilterProfile#web_flow_log_encoding}
  */
  readonly webFlowLogEncoding?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/webfilter_profile#web_ftgd_err_log WebfilterProfile#web_ftgd_err_log}
  */
  readonly webFtgdErrLog?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/webfilter_profile#web_ftgd_quota_usage WebfilterProfile#web_ftgd_quota_usage}
  */
  readonly webFtgdQuotaUsage?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/webfilter_profile#web_invalid_domain_log WebfilterProfile#web_invalid_domain_log}
  */
  readonly webInvalidDomainLog?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/webfilter_profile#web_url_log WebfilterProfile#web_url_log}
  */
  readonly webUrlLog?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/webfilter_profile#wisp WebfilterProfile#wisp}
  */
  readonly wisp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/webfilter_profile#wisp_algorithm WebfilterProfile#wisp_algorithm}
  */
  readonly wispAlgorithm?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/webfilter_profile#youtube_channel_status WebfilterProfile#youtube_channel_status}
  */
  readonly youtubeChannelStatus?: string;
  /**
  * antiphish block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/webfilter_profile#antiphish WebfilterProfile#antiphish}
  */
  readonly antiphish?: WebfilterProfileAntiphish;
  /**
  * file_filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/webfilter_profile#file_filter WebfilterProfile#file_filter}
  */
  readonly fileFilter?: WebfilterProfileFileFilter;
  /**
  * ftgd_wf block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/webfilter_profile#ftgd_wf WebfilterProfile#ftgd_wf}
  */
  readonly ftgdWf?: WebfilterProfileFtgdWf;
  /**
  * override block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/webfilter_profile#override WebfilterProfile#override}
  */
  readonly override?: WebfilterProfileOverride;
  /**
  * web block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/webfilter_profile#web WebfilterProfile#web}
  */
  readonly web?: WebfilterProfileWeb;
  /**
  * wisp_servers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/webfilter_profile#wisp_servers WebfilterProfile#wisp_servers}
  */
  readonly wispServers?: WebfilterProfileWispServers[] | cdktf.IResolvable;
  /**
  * youtube_channel_filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/webfilter_profile#youtube_channel_filter WebfilterProfile#youtube_channel_filter}
  */
  readonly youtubeChannelFilter?: WebfilterProfileYoutubeChannelFilter[] | cdktf.IResolvable;
}
export interface WebfilterProfileAntiphishCustomPatterns {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/webfilter_profile#category WebfilterProfile#category}
  */
  readonly category?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/webfilter_profile#pattern WebfilterProfile#pattern}
  */
  readonly pattern?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/webfilter_profile#type WebfilterProfile#type}
  */
  readonly type?: string;
}

export function webfilterProfileAntiphishCustomPatternsToTerraform(struct?: WebfilterProfileAntiphishCustomPatterns | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    category: cdktf.stringToTerraform(struct!.category),
    pattern: cdktf.stringToTerraform(struct!.pattern),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function webfilterProfileAntiphishCustomPatternsToHclTerraform(struct?: WebfilterProfileAntiphishCustomPatterns | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    category: {
      value: cdktf.stringToHclTerraform(struct!.category),
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
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WebfilterProfileAntiphishCustomPatternsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WebfilterProfileAntiphishCustomPatterns | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._category !== undefined) {
      hasAnyValues = true;
      internalValueResult.category = this._category;
    }
    if (this._pattern !== undefined) {
      hasAnyValues = true;
      internalValueResult.pattern = this._pattern;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WebfilterProfileAntiphishCustomPatterns | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._category = undefined;
      this._pattern = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._category = value.category;
      this._pattern = value.pattern;
      this._type = value.type;
    }
  }

  // category - computed: true, optional: true, required: false
  private _category?: string; 
  public get category() {
    return this.getStringAttribute('category');
  }
  public set category(value: string) {
    this._category = value;
  }
  public resetCategory() {
    this._category = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categoryInput() {
    return this._category;
  }

  // pattern - computed: false, optional: true, required: false
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
}

export class WebfilterProfileAntiphishCustomPatternsList extends cdktf.ComplexList {
  public internalValue? : WebfilterProfileAntiphishCustomPatterns[] | cdktf.IResolvable

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
  public get(index: number): WebfilterProfileAntiphishCustomPatternsOutputReference {
    return new WebfilterProfileAntiphishCustomPatternsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WebfilterProfileAntiphishInspectionEntries {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/webfilter_profile#action WebfilterProfile#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/webfilter_profile#fortiguard_category WebfilterProfile#fortiguard_category}
  */
  readonly fortiguardCategory?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/webfilter_profile#name WebfilterProfile#name}
  */
  readonly name?: string;
}

export function webfilterProfileAntiphishInspectionEntriesToTerraform(struct?: WebfilterProfileAntiphishInspectionEntries | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    fortiguard_category: cdktf.stringToTerraform(struct!.fortiguardCategory),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function webfilterProfileAntiphishInspectionEntriesToHclTerraform(struct?: WebfilterProfileAntiphishInspectionEntries | cdktf.IResolvable): any {
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
    fortiguard_category: {
      value: cdktf.stringToHclTerraform(struct!.fortiguardCategory),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WebfilterProfileAntiphishInspectionEntriesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WebfilterProfileAntiphishInspectionEntries | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._fortiguardCategory !== undefined) {
      hasAnyValues = true;
      internalValueResult.fortiguardCategory = this._fortiguardCategory;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WebfilterProfileAntiphishInspectionEntries | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._fortiguardCategory = undefined;
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
      this._fortiguardCategory = value.fortiguardCategory;
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

  // fortiguard_category - computed: true, optional: true, required: false
  private _fortiguardCategory?: string; 
  public get fortiguardCategory() {
    return this.getStringAttribute('fortiguard_category');
  }
  public set fortiguardCategory(value: string) {
    this._fortiguardCategory = value;
  }
  public resetFortiguardCategory() {
    this._fortiguardCategory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fortiguardCategoryInput() {
    return this._fortiguardCategory;
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
}

export class WebfilterProfileAntiphishInspectionEntriesList extends cdktf.ComplexList {
  public internalValue? : WebfilterProfileAntiphishInspectionEntries[] | cdktf.IResolvable

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
  public get(index: number): WebfilterProfileAntiphishInspectionEntriesOutputReference {
    return new WebfilterProfileAntiphishInspectionEntriesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WebfilterProfileAntiphish {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/webfilter_profile#authentication WebfilterProfile#authentication}
  */
  readonly authentication?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/webfilter_profile#check_basic_auth WebfilterProfile#check_basic_auth}
  */
  readonly checkBasicAuth?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/webfilter_profile#check_uri WebfilterProfile#check_uri}
  */
  readonly checkUri?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/webfilter_profile#check_username_only WebfilterProfile#check_username_only}
  */
  readonly checkUsernameOnly?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/webfilter_profile#default_action WebfilterProfile#default_action}
  */
  readonly defaultAction?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/webfilter_profile#domain_controller WebfilterProfile#domain_controller}
  */
  readonly domainController?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/webfilter_profile#ldap WebfilterProfile#ldap}
  */
  readonly ldap?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/webfilter_profile#max_body_len WebfilterProfile#max_body_len}
  */
  readonly maxBodyLen?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/webfilter_profile#status WebfilterProfile#status}
  */
  readonly status?: string;
  /**
  * custom_patterns block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/webfilter_profile#custom_patterns WebfilterProfile#custom_patterns}
  */
  readonly customPatterns?: WebfilterProfileAntiphishCustomPatterns[] | cdktf.IResolvable;
  /**
  * inspection_entries block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/webfilter_profile#inspection_entries WebfilterProfile#inspection_entries}
  */
  readonly inspectionEntries?: WebfilterProfileAntiphishInspectionEntries[] | cdktf.IResolvable;
}

export function webfilterProfileAntiphishToTerraform(struct?: WebfilterProfileAntiphishOutputReference | WebfilterProfileAntiphish): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authentication: cdktf.stringToTerraform(struct!.authentication),
    check_basic_auth: cdktf.stringToTerraform(struct!.checkBasicAuth),
    check_uri: cdktf.stringToTerraform(struct!.checkUri),
    check_username_only: cdktf.stringToTerraform(struct!.checkUsernameOnly),
    default_action: cdktf.stringToTerraform(struct!.defaultAction),
    domain_controller: cdktf.stringToTerraform(struct!.domainController),
    ldap: cdktf.stringToTerraform(struct!.ldap),
    max_body_len: cdktf.numberToTerraform(struct!.maxBodyLen),
    status: cdktf.stringToTerraform(struct!.status),
    custom_patterns: cdktf.listMapper(webfilterProfileAntiphishCustomPatternsToTerraform, true)(struct!.customPatterns),
    inspection_entries: cdktf.listMapper(webfilterProfileAntiphishInspectionEntriesToTerraform, true)(struct!.inspectionEntries),
  }
}


export function webfilterProfileAntiphishToHclTerraform(struct?: WebfilterProfileAntiphishOutputReference | WebfilterProfileAntiphish): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    authentication: {
      value: cdktf.stringToHclTerraform(struct!.authentication),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    check_basic_auth: {
      value: cdktf.stringToHclTerraform(struct!.checkBasicAuth),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    check_uri: {
      value: cdktf.stringToHclTerraform(struct!.checkUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    check_username_only: {
      value: cdktf.stringToHclTerraform(struct!.checkUsernameOnly),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    default_action: {
      value: cdktf.stringToHclTerraform(struct!.defaultAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    domain_controller: {
      value: cdktf.stringToHclTerraform(struct!.domainController),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ldap: {
      value: cdktf.stringToHclTerraform(struct!.ldap),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_body_len: {
      value: cdktf.numberToHclTerraform(struct!.maxBodyLen),
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
    custom_patterns: {
      value: cdktf.listMapperHcl(webfilterProfileAntiphishCustomPatternsToHclTerraform, true)(struct!.customPatterns),
      isBlock: true,
      type: "list",
      storageClassType: "WebfilterProfileAntiphishCustomPatternsList",
    },
    inspection_entries: {
      value: cdktf.listMapperHcl(webfilterProfileAntiphishInspectionEntriesToHclTerraform, true)(struct!.inspectionEntries),
      isBlock: true,
      type: "list",
      storageClassType: "WebfilterProfileAntiphishInspectionEntriesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WebfilterProfileAntiphishOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WebfilterProfileAntiphish | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authentication !== undefined) {
      hasAnyValues = true;
      internalValueResult.authentication = this._authentication;
    }
    if (this._checkBasicAuth !== undefined) {
      hasAnyValues = true;
      internalValueResult.checkBasicAuth = this._checkBasicAuth;
    }
    if (this._checkUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.checkUri = this._checkUri;
    }
    if (this._checkUsernameOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.checkUsernameOnly = this._checkUsernameOnly;
    }
    if (this._defaultAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultAction = this._defaultAction;
    }
    if (this._domainController !== undefined) {
      hasAnyValues = true;
      internalValueResult.domainController = this._domainController;
    }
    if (this._ldap !== undefined) {
      hasAnyValues = true;
      internalValueResult.ldap = this._ldap;
    }
    if (this._maxBodyLen !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxBodyLen = this._maxBodyLen;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    if (this._customPatterns?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customPatterns = this._customPatterns?.internalValue;
    }
    if (this._inspectionEntries?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.inspectionEntries = this._inspectionEntries?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WebfilterProfileAntiphish | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._authentication = undefined;
      this._checkBasicAuth = undefined;
      this._checkUri = undefined;
      this._checkUsernameOnly = undefined;
      this._defaultAction = undefined;
      this._domainController = undefined;
      this._ldap = undefined;
      this._maxBodyLen = undefined;
      this._status = undefined;
      this._customPatterns.internalValue = undefined;
      this._inspectionEntries.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._authentication = value.authentication;
      this._checkBasicAuth = value.checkBasicAuth;
      this._checkUri = value.checkUri;
      this._checkUsernameOnly = value.checkUsernameOnly;
      this._defaultAction = value.defaultAction;
      this._domainController = value.domainController;
      this._ldap = value.ldap;
      this._maxBodyLen = value.maxBodyLen;
      this._status = value.status;
      this._customPatterns.internalValue = value.customPatterns;
      this._inspectionEntries.internalValue = value.inspectionEntries;
    }
  }

  // authentication - computed: true, optional: true, required: false
  private _authentication?: string; 
  public get authentication() {
    return this.getStringAttribute('authentication');
  }
  public set authentication(value: string) {
    this._authentication = value;
  }
  public resetAuthentication() {
    this._authentication = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationInput() {
    return this._authentication;
  }

  // check_basic_auth - computed: true, optional: true, required: false
  private _checkBasicAuth?: string; 
  public get checkBasicAuth() {
    return this.getStringAttribute('check_basic_auth');
  }
  public set checkBasicAuth(value: string) {
    this._checkBasicAuth = value;
  }
  public resetCheckBasicAuth() {
    this._checkBasicAuth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checkBasicAuthInput() {
    return this._checkBasicAuth;
  }

  // check_uri - computed: true, optional: true, required: false
  private _checkUri?: string; 
  public get checkUri() {
    return this.getStringAttribute('check_uri');
  }
  public set checkUri(value: string) {
    this._checkUri = value;
  }
  public resetCheckUri() {
    this._checkUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checkUriInput() {
    return this._checkUri;
  }

  // check_username_only - computed: true, optional: true, required: false
  private _checkUsernameOnly?: string; 
  public get checkUsernameOnly() {
    return this.getStringAttribute('check_username_only');
  }
  public set checkUsernameOnly(value: string) {
    this._checkUsernameOnly = value;
  }
  public resetCheckUsernameOnly() {
    this._checkUsernameOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checkUsernameOnlyInput() {
    return this._checkUsernameOnly;
  }

  // default_action - computed: true, optional: true, required: false
  private _defaultAction?: string; 
  public get defaultAction() {
    return this.getStringAttribute('default_action');
  }
  public set defaultAction(value: string) {
    this._defaultAction = value;
  }
  public resetDefaultAction() {
    this._defaultAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultActionInput() {
    return this._defaultAction;
  }

  // domain_controller - computed: false, optional: true, required: false
  private _domainController?: string; 
  public get domainController() {
    return this.getStringAttribute('domain_controller');
  }
  public set domainController(value: string) {
    this._domainController = value;
  }
  public resetDomainController() {
    this._domainController = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainControllerInput() {
    return this._domainController;
  }

  // ldap - computed: false, optional: true, required: false
  private _ldap?: string; 
  public get ldap() {
    return this.getStringAttribute('ldap');
  }
  public set ldap(value: string) {
    this._ldap = value;
  }
  public resetLdap() {
    this._ldap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ldapInput() {
    return this._ldap;
  }

  // max_body_len - computed: true, optional: true, required: false
  private _maxBodyLen?: number; 
  public get maxBodyLen() {
    return this.getNumberAttribute('max_body_len');
  }
  public set maxBodyLen(value: number) {
    this._maxBodyLen = value;
  }
  public resetMaxBodyLen() {
    this._maxBodyLen = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxBodyLenInput() {
    return this._maxBodyLen;
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

  // custom_patterns - computed: false, optional: true, required: false
  private _customPatterns = new WebfilterProfileAntiphishCustomPatternsList(this, "custom_patterns", false);
  public get customPatterns() {
    return this._customPatterns;
  }
  public putCustomPatterns(value: WebfilterProfileAntiphishCustomPatterns[] | cdktf.IResolvable) {
    this._customPatterns.internalValue = value;
  }
  public resetCustomPatterns() {
    this._customPatterns.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customPatternsInput() {
    return this._customPatterns.internalValue;
  }

  // inspection_entries - computed: false, optional: true, required: false
  private _inspectionEntries = new WebfilterProfileAntiphishInspectionEntriesList(this, "inspection_entries", false);
  public get inspectionEntries() {
    return this._inspectionEntries;
  }
  public putInspectionEntries(value: WebfilterProfileAntiphishInspectionEntries[] | cdktf.IResolvable) {
    this._inspectionEntries.internalValue = value;
  }
  public resetInspectionEntries() {
    this._inspectionEntries.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inspectionEntriesInput() {
    return this._inspectionEntries.internalValue;
  }
}
export interface WebfilterProfileFileFilterEntriesFileType {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/webfilter_profile#name WebfilterProfile#name}
  */
  readonly name?: string;
}

export function webfilterProfileFileFilterEntriesFileTypeToTerraform(struct?: WebfilterProfileFileFilterEntriesFileType | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function webfilterProfileFileFilterEntriesFileTypeToHclTerraform(struct?: WebfilterProfileFileFilterEntriesFileType | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WebfilterProfileFileFilterEntriesFileTypeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WebfilterProfileFileFilterEntriesFileType | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WebfilterProfileFileFilterEntriesFileType | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
    }
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
}

export class WebfilterProfileFileFilterEntriesFileTypeList extends cdktf.ComplexList {
  public internalValue? : WebfilterProfileFileFilterEntriesFileType[] | cdktf.IResolvable

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
  public get(index: number): WebfilterProfileFileFilterEntriesFileTypeOutputReference {
    return new WebfilterProfileFileFilterEntriesFileTypeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WebfilterProfileFileFilterEntries {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/webfilter_profile#action WebfilterProfile#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/webfilter_profile#comment WebfilterProfile#comment}
  */
  readonly comment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/webfilter_profile#direction WebfilterProfile#direction}
  */
  readonly direction?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/webfilter_profile#filter WebfilterProfile#filter}
  */
  readonly filter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/webfilter_profile#password_protected WebfilterProfile#password_protected}
  */
  readonly passwordProtected?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/webfilter_profile#protocol WebfilterProfile#protocol}
  */
  readonly protocol?: string;
  /**
  * file_type block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/webfilter_profile#file_type WebfilterProfile#file_type}
  */
  readonly fileType?: WebfilterProfileFileFilterEntriesFileType[] | cdktf.IResolvable;
}

export function webfilterProfileFileFilterEntriesToTerraform(struct?: WebfilterProfileFileFilterEntries | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    comment: cdktf.stringToTerraform(struct!.comment),
    direction: cdktf.stringToTerraform(struct!.direction),
    filter: cdktf.stringToTerraform(struct!.filter),
    password_protected: cdktf.stringToTerraform(struct!.passwordProtected),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    file_type: cdktf.listMapper(webfilterProfileFileFilterEntriesFileTypeToTerraform, true)(struct!.fileType),
  }
}


export function webfilterProfileFileFilterEntriesToHclTerraform(struct?: WebfilterProfileFileFilterEntries | cdktf.IResolvable): any {
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
    comment: {
      value: cdktf.stringToHclTerraform(struct!.comment),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    direction: {
      value: cdktf.stringToHclTerraform(struct!.direction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    filter: {
      value: cdktf.stringToHclTerraform(struct!.filter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    password_protected: {
      value: cdktf.stringToHclTerraform(struct!.passwordProtected),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    protocol: {
      value: cdktf.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    file_type: {
      value: cdktf.listMapperHcl(webfilterProfileFileFilterEntriesFileTypeToHclTerraform, true)(struct!.fileType),
      isBlock: true,
      type: "set",
      storageClassType: "WebfilterProfileFileFilterEntriesFileTypeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WebfilterProfileFileFilterEntriesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WebfilterProfileFileFilterEntries | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._comment !== undefined) {
      hasAnyValues = true;
      internalValueResult.comment = this._comment;
    }
    if (this._direction !== undefined) {
      hasAnyValues = true;
      internalValueResult.direction = this._direction;
    }
    if (this._filter !== undefined) {
      hasAnyValues = true;
      internalValueResult.filter = this._filter;
    }
    if (this._passwordProtected !== undefined) {
      hasAnyValues = true;
      internalValueResult.passwordProtected = this._passwordProtected;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._fileType?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileType = this._fileType?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WebfilterProfileFileFilterEntries | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._comment = undefined;
      this._direction = undefined;
      this._filter = undefined;
      this._passwordProtected = undefined;
      this._protocol = undefined;
      this._fileType.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._comment = value.comment;
      this._direction = value.direction;
      this._filter = value.filter;
      this._passwordProtected = value.passwordProtected;
      this._protocol = value.protocol;
      this._fileType.internalValue = value.fileType;
    }
  }

  // action - computed: false, optional: true, required: false
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

  // comment - computed: false, optional: true, required: false
  private _comment?: string; 
  public get comment() {
    return this.getStringAttribute('comment');
  }
  public set comment(value: string) {
    this._comment = value;
  }
  public resetComment() {
    this._comment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentInput() {
    return this._comment;
  }

  // direction - computed: false, optional: true, required: false
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

  // filter - computed: false, optional: true, required: false
  private _filter?: string; 
  public get filter() {
    return this.getStringAttribute('filter');
  }
  public set filter(value: string) {
    this._filter = value;
  }
  public resetFilter() {
    this._filter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter;
  }

  // password_protected - computed: false, optional: true, required: false
  private _passwordProtected?: string; 
  public get passwordProtected() {
    return this.getStringAttribute('password_protected');
  }
  public set passwordProtected(value: string) {
    this._passwordProtected = value;
  }
  public resetPasswordProtected() {
    this._passwordProtected = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordProtectedInput() {
    return this._passwordProtected;
  }

  // protocol - computed: false, optional: true, required: false
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  public resetProtocol() {
    this._protocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // file_type - computed: false, optional: true, required: false
  private _fileType = new WebfilterProfileFileFilterEntriesFileTypeList(this, "file_type", true);
  public get fileType() {
    return this._fileType;
  }
  public putFileType(value: WebfilterProfileFileFilterEntriesFileType[] | cdktf.IResolvable) {
    this._fileType.internalValue = value;
  }
  public resetFileType() {
    this._fileType.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileTypeInput() {
    return this._fileType.internalValue;
  }
}

export class WebfilterProfileFileFilterEntriesList extends cdktf.ComplexList {
  public internalValue? : WebfilterProfileFileFilterEntries[] | cdktf.IResolvable

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
  public get(index: number): WebfilterProfileFileFilterEntriesOutputReference {
    return new WebfilterProfileFileFilterEntriesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WebfilterProfileFileFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/webfilter_profile#log WebfilterProfile#log}
  */
  readonly log?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/webfilter_profile#scan_archive_contents WebfilterProfile#scan_archive_contents}
  */
  readonly scanArchiveContents?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/webfilter_profile#status WebfilterProfile#status}
  */
  readonly status?: string;
  /**
  * entries block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/webfilter_profile#entries WebfilterProfile#entries}
  */
  readonly entries?: WebfilterProfileFileFilterEntries[] | cdktf.IResolvable;
}

export function webfilterProfileFileFilterToTerraform(struct?: WebfilterProfileFileFilterOutputReference | WebfilterProfileFileFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    log: cdktf.stringToTerraform(struct!.log),
    scan_archive_contents: cdktf.stringToTerraform(struct!.scanArchiveContents),
    status: cdktf.stringToTerraform(struct!.status),
    entries: cdktf.listMapper(webfilterProfileFileFilterEntriesToTerraform, true)(struct!.entries),
  }
}


export function webfilterProfileFileFilterToHclTerraform(struct?: WebfilterProfileFileFilterOutputReference | WebfilterProfileFileFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    log: {
      value: cdktf.stringToHclTerraform(struct!.log),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scan_archive_contents: {
      value: cdktf.stringToHclTerraform(struct!.scanArchiveContents),
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
    entries: {
      value: cdktf.listMapperHcl(webfilterProfileFileFilterEntriesToHclTerraform, true)(struct!.entries),
      isBlock: true,
      type: "list",
      storageClassType: "WebfilterProfileFileFilterEntriesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WebfilterProfileFileFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WebfilterProfileFileFilter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._log !== undefined) {
      hasAnyValues = true;
      internalValueResult.log = this._log;
    }
    if (this._scanArchiveContents !== undefined) {
      hasAnyValues = true;
      internalValueResult.scanArchiveContents = this._scanArchiveContents;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    if (this._entries?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.entries = this._entries?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WebfilterProfileFileFilter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._log = undefined;
      this._scanArchiveContents = undefined;
      this._status = undefined;
      this._entries.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._log = value.log;
      this._scanArchiveContents = value.scanArchiveContents;
      this._status = value.status;
      this._entries.internalValue = value.entries;
    }
  }

  // log - computed: false, optional: true, required: false
  private _log?: string; 
  public get log() {
    return this.getStringAttribute('log');
  }
  public set log(value: string) {
    this._log = value;
  }
  public resetLog() {
    this._log = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logInput() {
    return this._log;
  }

  // scan_archive_contents - computed: false, optional: true, required: false
  private _scanArchiveContents?: string; 
  public get scanArchiveContents() {
    return this.getStringAttribute('scan_archive_contents');
  }
  public set scanArchiveContents(value: string) {
    this._scanArchiveContents = value;
  }
  public resetScanArchiveContents() {
    this._scanArchiveContents = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scanArchiveContentsInput() {
    return this._scanArchiveContents;
  }

  // status - computed: false, optional: true, required: false
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

  // entries - computed: false, optional: true, required: false
  private _entries = new WebfilterProfileFileFilterEntriesList(this, "entries", false);
  public get entries() {
    return this._entries;
  }
  public putEntries(value: WebfilterProfileFileFilterEntries[] | cdktf.IResolvable) {
    this._entries.internalValue = value;
  }
  public resetEntries() {
    this._entries.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entriesInput() {
    return this._entries.internalValue;
  }
}
export interface WebfilterProfileFtgdWfFiltersAuthUsrGrp {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/webfilter_profile#name WebfilterProfile#name}
  */
  readonly name?: string;
}

export function webfilterProfileFtgdWfFiltersAuthUsrGrpToTerraform(struct?: WebfilterProfileFtgdWfFiltersAuthUsrGrp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function webfilterProfileFtgdWfFiltersAuthUsrGrpToHclTerraform(struct?: WebfilterProfileFtgdWfFiltersAuthUsrGrp | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WebfilterProfileFtgdWfFiltersAuthUsrGrpOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WebfilterProfileFtgdWfFiltersAuthUsrGrp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WebfilterProfileFtgdWfFiltersAuthUsrGrp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
    }
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
}

export class WebfilterProfileFtgdWfFiltersAuthUsrGrpList extends cdktf.ComplexList {
  public internalValue? : WebfilterProfileFtgdWfFiltersAuthUsrGrp[] | cdktf.IResolvable

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
  public get(index: number): WebfilterProfileFtgdWfFiltersAuthUsrGrpOutputReference {
    return new WebfilterProfileFtgdWfFiltersAuthUsrGrpOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WebfilterProfileFtgdWfFilters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/webfilter_profile#action WebfilterProfile#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/webfilter_profile#category WebfilterProfile#category}
  */
  readonly category?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/webfilter_profile#id WebfilterProfile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/webfilter_profile#log WebfilterProfile#log}
  */
  readonly log?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/webfilter_profile#override_replacemsg WebfilterProfile#override_replacemsg}
  */
  readonly overrideReplacemsg?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/webfilter_profile#warn_duration WebfilterProfile#warn_duration}
  */
  readonly warnDuration?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/webfilter_profile#warning_duration_type WebfilterProfile#warning_duration_type}
  */
  readonly warningDurationType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/webfilter_profile#warning_prompt WebfilterProfile#warning_prompt}
  */
  readonly warningPrompt?: string;
  /**
  * auth_usr_grp block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/webfilter_profile#auth_usr_grp WebfilterProfile#auth_usr_grp}
  */
  readonly authUsrGrp?: WebfilterProfileFtgdWfFiltersAuthUsrGrp[] | cdktf.IResolvable;
}

export function webfilterProfileFtgdWfFiltersToTerraform(struct?: WebfilterProfileFtgdWfFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    category: cdktf.numberToTerraform(struct!.category),
    id: cdktf.numberToTerraform(struct!.id),
    log: cdktf.stringToTerraform(struct!.log),
    override_replacemsg: cdktf.stringToTerraform(struct!.overrideReplacemsg),
    warn_duration: cdktf.stringToTerraform(struct!.warnDuration),
    warning_duration_type: cdktf.stringToTerraform(struct!.warningDurationType),
    warning_prompt: cdktf.stringToTerraform(struct!.warningPrompt),
    auth_usr_grp: cdktf.listMapper(webfilterProfileFtgdWfFiltersAuthUsrGrpToTerraform, true)(struct!.authUsrGrp),
  }
}


export function webfilterProfileFtgdWfFiltersToHclTerraform(struct?: WebfilterProfileFtgdWfFilters | cdktf.IResolvable): any {
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
      value: cdktf.numberToHclTerraform(struct!.category),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    id: {
      value: cdktf.numberToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    log: {
      value: cdktf.stringToHclTerraform(struct!.log),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    override_replacemsg: {
      value: cdktf.stringToHclTerraform(struct!.overrideReplacemsg),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    warn_duration: {
      value: cdktf.stringToHclTerraform(struct!.warnDuration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    warning_duration_type: {
      value: cdktf.stringToHclTerraform(struct!.warningDurationType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    warning_prompt: {
      value: cdktf.stringToHclTerraform(struct!.warningPrompt),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    auth_usr_grp: {
      value: cdktf.listMapperHcl(webfilterProfileFtgdWfFiltersAuthUsrGrpToHclTerraform, true)(struct!.authUsrGrp),
      isBlock: true,
      type: "set",
      storageClassType: "WebfilterProfileFtgdWfFiltersAuthUsrGrpList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WebfilterProfileFtgdWfFiltersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WebfilterProfileFtgdWfFilters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._category !== undefined) {
      hasAnyValues = true;
      internalValueResult.category = this._category;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._log !== undefined) {
      hasAnyValues = true;
      internalValueResult.log = this._log;
    }
    if (this._overrideReplacemsg !== undefined) {
      hasAnyValues = true;
      internalValueResult.overrideReplacemsg = this._overrideReplacemsg;
    }
    if (this._warnDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.warnDuration = this._warnDuration;
    }
    if (this._warningDurationType !== undefined) {
      hasAnyValues = true;
      internalValueResult.warningDurationType = this._warningDurationType;
    }
    if (this._warningPrompt !== undefined) {
      hasAnyValues = true;
      internalValueResult.warningPrompt = this._warningPrompt;
    }
    if (this._authUsrGrp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authUsrGrp = this._authUsrGrp?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WebfilterProfileFtgdWfFilters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._category = undefined;
      this._id = undefined;
      this._log = undefined;
      this._overrideReplacemsg = undefined;
      this._warnDuration = undefined;
      this._warningDurationType = undefined;
      this._warningPrompt = undefined;
      this._authUsrGrp.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._category = value.category;
      this._id = value.id;
      this._log = value.log;
      this._overrideReplacemsg = value.overrideReplacemsg;
      this._warnDuration = value.warnDuration;
      this._warningDurationType = value.warningDurationType;
      this._warningPrompt = value.warningPrompt;
      this._authUsrGrp.internalValue = value.authUsrGrp;
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

  // category - computed: false, optional: true, required: false
  private _category?: number; 
  public get category() {
    return this.getNumberAttribute('category');
  }
  public set category(value: number) {
    this._category = value;
  }
  public resetCategory() {
    this._category = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categoryInput() {
    return this._category;
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

  // log - computed: true, optional: true, required: false
  private _log?: string; 
  public get log() {
    return this.getStringAttribute('log');
  }
  public set log(value: string) {
    this._log = value;
  }
  public resetLog() {
    this._log = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logInput() {
    return this._log;
  }

  // override_replacemsg - computed: false, optional: true, required: false
  private _overrideReplacemsg?: string; 
  public get overrideReplacemsg() {
    return this.getStringAttribute('override_replacemsg');
  }
  public set overrideReplacemsg(value: string) {
    this._overrideReplacemsg = value;
  }
  public resetOverrideReplacemsg() {
    this._overrideReplacemsg = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overrideReplacemsgInput() {
    return this._overrideReplacemsg;
  }

  // warn_duration - computed: true, optional: true, required: false
  private _warnDuration?: string; 
  public get warnDuration() {
    return this.getStringAttribute('warn_duration');
  }
  public set warnDuration(value: string) {
    this._warnDuration = value;
  }
  public resetWarnDuration() {
    this._warnDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get warnDurationInput() {
    return this._warnDuration;
  }

  // warning_duration_type - computed: true, optional: true, required: false
  private _warningDurationType?: string; 
  public get warningDurationType() {
    return this.getStringAttribute('warning_duration_type');
  }
  public set warningDurationType(value: string) {
    this._warningDurationType = value;
  }
  public resetWarningDurationType() {
    this._warningDurationType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get warningDurationTypeInput() {
    return this._warningDurationType;
  }

  // warning_prompt - computed: true, optional: true, required: false
  private _warningPrompt?: string; 
  public get warningPrompt() {
    return this.getStringAttribute('warning_prompt');
  }
  public set warningPrompt(value: string) {
    this._warningPrompt = value;
  }
  public resetWarningPrompt() {
    this._warningPrompt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get warningPromptInput() {
    return this._warningPrompt;
  }

  // auth_usr_grp - computed: false, optional: true, required: false
  private _authUsrGrp = new WebfilterProfileFtgdWfFiltersAuthUsrGrpList(this, "auth_usr_grp", true);
  public get authUsrGrp() {
    return this._authUsrGrp;
  }
  public putAuthUsrGrp(value: WebfilterProfileFtgdWfFiltersAuthUsrGrp[] | cdktf.IResolvable) {
    this._authUsrGrp.internalValue = value;
  }
  public resetAuthUsrGrp() {
    this._authUsrGrp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authUsrGrpInput() {
    return this._authUsrGrp.internalValue;
  }
}

export class WebfilterProfileFtgdWfFiltersList extends cdktf.ComplexList {
  public internalValue? : WebfilterProfileFtgdWfFilters[] | cdktf.IResolvable

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
  public get(index: number): WebfilterProfileFtgdWfFiltersOutputReference {
    return new WebfilterProfileFtgdWfFiltersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WebfilterProfileFtgdWfQuota {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/webfilter_profile#category WebfilterProfile#category}
  */
  readonly category?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/webfilter_profile#duration WebfilterProfile#duration}
  */
  readonly duration?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/webfilter_profile#id WebfilterProfile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/webfilter_profile#override_replacemsg WebfilterProfile#override_replacemsg}
  */
  readonly overrideReplacemsg?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/webfilter_profile#type WebfilterProfile#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/webfilter_profile#unit WebfilterProfile#unit}
  */
  readonly unit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/webfilter_profile#value WebfilterProfile#value}
  */
  readonly value?: number;
}

export function webfilterProfileFtgdWfQuotaToTerraform(struct?: WebfilterProfileFtgdWfQuota | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    category: cdktf.stringToTerraform(struct!.category),
    duration: cdktf.stringToTerraform(struct!.duration),
    id: cdktf.numberToTerraform(struct!.id),
    override_replacemsg: cdktf.stringToTerraform(struct!.overrideReplacemsg),
    type: cdktf.stringToTerraform(struct!.type),
    unit: cdktf.stringToTerraform(struct!.unit),
    value: cdktf.numberToTerraform(struct!.value),
  }
}


export function webfilterProfileFtgdWfQuotaToHclTerraform(struct?: WebfilterProfileFtgdWfQuota | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    category: {
      value: cdktf.stringToHclTerraform(struct!.category),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    duration: {
      value: cdktf.stringToHclTerraform(struct!.duration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.numberToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    override_replacemsg: {
      value: cdktf.stringToHclTerraform(struct!.overrideReplacemsg),
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
    unit: {
      value: cdktf.stringToHclTerraform(struct!.unit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.numberToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WebfilterProfileFtgdWfQuotaOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WebfilterProfileFtgdWfQuota | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._category !== undefined) {
      hasAnyValues = true;
      internalValueResult.category = this._category;
    }
    if (this._duration !== undefined) {
      hasAnyValues = true;
      internalValueResult.duration = this._duration;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._overrideReplacemsg !== undefined) {
      hasAnyValues = true;
      internalValueResult.overrideReplacemsg = this._overrideReplacemsg;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._unit !== undefined) {
      hasAnyValues = true;
      internalValueResult.unit = this._unit;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WebfilterProfileFtgdWfQuota | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._category = undefined;
      this._duration = undefined;
      this._id = undefined;
      this._overrideReplacemsg = undefined;
      this._type = undefined;
      this._unit = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._category = value.category;
      this._duration = value.duration;
      this._id = value.id;
      this._overrideReplacemsg = value.overrideReplacemsg;
      this._type = value.type;
      this._unit = value.unit;
      this._value = value.value;
    }
  }

  // category - computed: false, optional: true, required: false
  private _category?: string; 
  public get category() {
    return this.getStringAttribute('category');
  }
  public set category(value: string) {
    this._category = value;
  }
  public resetCategory() {
    this._category = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categoryInput() {
    return this._category;
  }

  // duration - computed: true, optional: true, required: false
  private _duration?: string; 
  public get duration() {
    return this.getStringAttribute('duration');
  }
  public set duration(value: string) {
    this._duration = value;
  }
  public resetDuration() {
    this._duration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get durationInput() {
    return this._duration;
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

  // override_replacemsg - computed: false, optional: true, required: false
  private _overrideReplacemsg?: string; 
  public get overrideReplacemsg() {
    return this.getStringAttribute('override_replacemsg');
  }
  public set overrideReplacemsg(value: string) {
    this._overrideReplacemsg = value;
  }
  public resetOverrideReplacemsg() {
    this._overrideReplacemsg = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overrideReplacemsgInput() {
    return this._overrideReplacemsg;
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

  // unit - computed: true, optional: true, required: false
  private _unit?: string; 
  public get unit() {
    return this.getStringAttribute('unit');
  }
  public set unit(value: string) {
    this._unit = value;
  }
  public resetUnit() {
    this._unit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unitInput() {
    return this._unit;
  }

  // value - computed: true, optional: true, required: false
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
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

export class WebfilterProfileFtgdWfQuotaList extends cdktf.ComplexList {
  public internalValue? : WebfilterProfileFtgdWfQuota[] | cdktf.IResolvable

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
  public get(index: number): WebfilterProfileFtgdWfQuotaOutputReference {
    return new WebfilterProfileFtgdWfQuotaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WebfilterProfileFtgdWfRisk {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/webfilter_profile#action WebfilterProfile#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/webfilter_profile#id WebfilterProfile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/webfilter_profile#log WebfilterProfile#log}
  */
  readonly log?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/webfilter_profile#risk_level WebfilterProfile#risk_level}
  */
  readonly riskLevel?: string;
}

export function webfilterProfileFtgdWfRiskToTerraform(struct?: WebfilterProfileFtgdWfRisk | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    id: cdktf.numberToTerraform(struct!.id),
    log: cdktf.stringToTerraform(struct!.log),
    risk_level: cdktf.stringToTerraform(struct!.riskLevel),
  }
}


export function webfilterProfileFtgdWfRiskToHclTerraform(struct?: WebfilterProfileFtgdWfRisk | cdktf.IResolvable): any {
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
    id: {
      value: cdktf.numberToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    log: {
      value: cdktf.stringToHclTerraform(struct!.log),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WebfilterProfileFtgdWfRiskOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WebfilterProfileFtgdWfRisk | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._log !== undefined) {
      hasAnyValues = true;
      internalValueResult.log = this._log;
    }
    if (this._riskLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.riskLevel = this._riskLevel;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WebfilterProfileFtgdWfRisk | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._id = undefined;
      this._log = undefined;
      this._riskLevel = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._id = value.id;
      this._log = value.log;
      this._riskLevel = value.riskLevel;
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

  // log - computed: true, optional: true, required: false
  private _log?: string; 
  public get log() {
    return this.getStringAttribute('log');
  }
  public set log(value: string) {
    this._log = value;
  }
  public resetLog() {
    this._log = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logInput() {
    return this._log;
  }

  // risk_level - computed: false, optional: true, required: false
  private _riskLevel?: string; 
  public get riskLevel() {
    return this.getStringAttribute('risk_level');
  }
  public set riskLevel(value: string) {
    this._riskLevel = value;
  }
  public resetRiskLevel() {
    this._riskLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get riskLevelInput() {
    return this._riskLevel;
  }
}

export class WebfilterProfileFtgdWfRiskList extends cdktf.ComplexList {
  public internalValue? : WebfilterProfileFtgdWfRisk[] | cdktf.IResolvable

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
  public get(index: number): WebfilterProfileFtgdWfRiskOutputReference {
    return new WebfilterProfileFtgdWfRiskOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WebfilterProfileFtgdWf {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/webfilter_profile#exempt_quota WebfilterProfile#exempt_quota}
  */
  readonly exemptQuota?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/webfilter_profile#max_quota_timeout WebfilterProfile#max_quota_timeout}
  */
  readonly maxQuotaTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/webfilter_profile#options WebfilterProfile#options}
  */
  readonly options?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/webfilter_profile#ovrd WebfilterProfile#ovrd}
  */
  readonly ovrd?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/webfilter_profile#rate_crl_urls WebfilterProfile#rate_crl_urls}
  */
  readonly rateCrlUrls?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/webfilter_profile#rate_css_urls WebfilterProfile#rate_css_urls}
  */
  readonly rateCssUrls?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/webfilter_profile#rate_image_urls WebfilterProfile#rate_image_urls}
  */
  readonly rateImageUrls?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/webfilter_profile#rate_javascript_urls WebfilterProfile#rate_javascript_urls}
  */
  readonly rateJavascriptUrls?: string;
  /**
  * filters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/webfilter_profile#filters WebfilterProfile#filters}
  */
  readonly filters?: WebfilterProfileFtgdWfFilters[] | cdktf.IResolvable;
  /**
  * quota block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/webfilter_profile#quota WebfilterProfile#quota}
  */
  readonly quota?: WebfilterProfileFtgdWfQuota[] | cdktf.IResolvable;
  /**
  * risk block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/webfilter_profile#risk WebfilterProfile#risk}
  */
  readonly risk?: WebfilterProfileFtgdWfRisk[] | cdktf.IResolvable;
}

export function webfilterProfileFtgdWfToTerraform(struct?: WebfilterProfileFtgdWfOutputReference | WebfilterProfileFtgdWf): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exempt_quota: cdktf.stringToTerraform(struct!.exemptQuota),
    max_quota_timeout: cdktf.numberToTerraform(struct!.maxQuotaTimeout),
    options: cdktf.stringToTerraform(struct!.options),
    ovrd: cdktf.stringToTerraform(struct!.ovrd),
    rate_crl_urls: cdktf.stringToTerraform(struct!.rateCrlUrls),
    rate_css_urls: cdktf.stringToTerraform(struct!.rateCssUrls),
    rate_image_urls: cdktf.stringToTerraform(struct!.rateImageUrls),
    rate_javascript_urls: cdktf.stringToTerraform(struct!.rateJavascriptUrls),
    filters: cdktf.listMapper(webfilterProfileFtgdWfFiltersToTerraform, true)(struct!.filters),
    quota: cdktf.listMapper(webfilterProfileFtgdWfQuotaToTerraform, true)(struct!.quota),
    risk: cdktf.listMapper(webfilterProfileFtgdWfRiskToTerraform, true)(struct!.risk),
  }
}


export function webfilterProfileFtgdWfToHclTerraform(struct?: WebfilterProfileFtgdWfOutputReference | WebfilterProfileFtgdWf): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exempt_quota: {
      value: cdktf.stringToHclTerraform(struct!.exemptQuota),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_quota_timeout: {
      value: cdktf.numberToHclTerraform(struct!.maxQuotaTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    options: {
      value: cdktf.stringToHclTerraform(struct!.options),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ovrd: {
      value: cdktf.stringToHclTerraform(struct!.ovrd),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rate_crl_urls: {
      value: cdktf.stringToHclTerraform(struct!.rateCrlUrls),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rate_css_urls: {
      value: cdktf.stringToHclTerraform(struct!.rateCssUrls),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rate_image_urls: {
      value: cdktf.stringToHclTerraform(struct!.rateImageUrls),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rate_javascript_urls: {
      value: cdktf.stringToHclTerraform(struct!.rateJavascriptUrls),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    filters: {
      value: cdktf.listMapperHcl(webfilterProfileFtgdWfFiltersToHclTerraform, true)(struct!.filters),
      isBlock: true,
      type: "list",
      storageClassType: "WebfilterProfileFtgdWfFiltersList",
    },
    quota: {
      value: cdktf.listMapperHcl(webfilterProfileFtgdWfQuotaToHclTerraform, true)(struct!.quota),
      isBlock: true,
      type: "list",
      storageClassType: "WebfilterProfileFtgdWfQuotaList",
    },
    risk: {
      value: cdktf.listMapperHcl(webfilterProfileFtgdWfRiskToHclTerraform, true)(struct!.risk),
      isBlock: true,
      type: "list",
      storageClassType: "WebfilterProfileFtgdWfRiskList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WebfilterProfileFtgdWfOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WebfilterProfileFtgdWf | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exemptQuota !== undefined) {
      hasAnyValues = true;
      internalValueResult.exemptQuota = this._exemptQuota;
    }
    if (this._maxQuotaTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxQuotaTimeout = this._maxQuotaTimeout;
    }
    if (this._options !== undefined) {
      hasAnyValues = true;
      internalValueResult.options = this._options;
    }
    if (this._ovrd !== undefined) {
      hasAnyValues = true;
      internalValueResult.ovrd = this._ovrd;
    }
    if (this._rateCrlUrls !== undefined) {
      hasAnyValues = true;
      internalValueResult.rateCrlUrls = this._rateCrlUrls;
    }
    if (this._rateCssUrls !== undefined) {
      hasAnyValues = true;
      internalValueResult.rateCssUrls = this._rateCssUrls;
    }
    if (this._rateImageUrls !== undefined) {
      hasAnyValues = true;
      internalValueResult.rateImageUrls = this._rateImageUrls;
    }
    if (this._rateJavascriptUrls !== undefined) {
      hasAnyValues = true;
      internalValueResult.rateJavascriptUrls = this._rateJavascriptUrls;
    }
    if (this._filters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.filters = this._filters?.internalValue;
    }
    if (this._quota?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.quota = this._quota?.internalValue;
    }
    if (this._risk?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.risk = this._risk?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WebfilterProfileFtgdWf | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._exemptQuota = undefined;
      this._maxQuotaTimeout = undefined;
      this._options = undefined;
      this._ovrd = undefined;
      this._rateCrlUrls = undefined;
      this._rateCssUrls = undefined;
      this._rateImageUrls = undefined;
      this._rateJavascriptUrls = undefined;
      this._filters.internalValue = undefined;
      this._quota.internalValue = undefined;
      this._risk.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._exemptQuota = value.exemptQuota;
      this._maxQuotaTimeout = value.maxQuotaTimeout;
      this._options = value.options;
      this._ovrd = value.ovrd;
      this._rateCrlUrls = value.rateCrlUrls;
      this._rateCssUrls = value.rateCssUrls;
      this._rateImageUrls = value.rateImageUrls;
      this._rateJavascriptUrls = value.rateJavascriptUrls;
      this._filters.internalValue = value.filters;
      this._quota.internalValue = value.quota;
      this._risk.internalValue = value.risk;
    }
  }

  // exempt_quota - computed: true, optional: true, required: false
  private _exemptQuota?: string; 
  public get exemptQuota() {
    return this.getStringAttribute('exempt_quota');
  }
  public set exemptQuota(value: string) {
    this._exemptQuota = value;
  }
  public resetExemptQuota() {
    this._exemptQuota = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exemptQuotaInput() {
    return this._exemptQuota;
  }

  // max_quota_timeout - computed: true, optional: true, required: false
  private _maxQuotaTimeout?: number; 
  public get maxQuotaTimeout() {
    return this.getNumberAttribute('max_quota_timeout');
  }
  public set maxQuotaTimeout(value: number) {
    this._maxQuotaTimeout = value;
  }
  public resetMaxQuotaTimeout() {
    this._maxQuotaTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxQuotaTimeoutInput() {
    return this._maxQuotaTimeout;
  }

  // options - computed: true, optional: true, required: false
  private _options?: string; 
  public get options() {
    return this.getStringAttribute('options');
  }
  public set options(value: string) {
    this._options = value;
  }
  public resetOptions() {
    this._options = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionsInput() {
    return this._options;
  }

  // ovrd - computed: false, optional: true, required: false
  private _ovrd?: string; 
  public get ovrd() {
    return this.getStringAttribute('ovrd');
  }
  public set ovrd(value: string) {
    this._ovrd = value;
  }
  public resetOvrd() {
    this._ovrd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ovrdInput() {
    return this._ovrd;
  }

  // rate_crl_urls - computed: true, optional: true, required: false
  private _rateCrlUrls?: string; 
  public get rateCrlUrls() {
    return this.getStringAttribute('rate_crl_urls');
  }
  public set rateCrlUrls(value: string) {
    this._rateCrlUrls = value;
  }
  public resetRateCrlUrls() {
    this._rateCrlUrls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rateCrlUrlsInput() {
    return this._rateCrlUrls;
  }

  // rate_css_urls - computed: true, optional: true, required: false
  private _rateCssUrls?: string; 
  public get rateCssUrls() {
    return this.getStringAttribute('rate_css_urls');
  }
  public set rateCssUrls(value: string) {
    this._rateCssUrls = value;
  }
  public resetRateCssUrls() {
    this._rateCssUrls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rateCssUrlsInput() {
    return this._rateCssUrls;
  }

  // rate_image_urls - computed: false, optional: true, required: false
  private _rateImageUrls?: string; 
  public get rateImageUrls() {
    return this.getStringAttribute('rate_image_urls');
  }
  public set rateImageUrls(value: string) {
    this._rateImageUrls = value;
  }
  public resetRateImageUrls() {
    this._rateImageUrls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rateImageUrlsInput() {
    return this._rateImageUrls;
  }

  // rate_javascript_urls - computed: true, optional: true, required: false
  private _rateJavascriptUrls?: string; 
  public get rateJavascriptUrls() {
    return this.getStringAttribute('rate_javascript_urls');
  }
  public set rateJavascriptUrls(value: string) {
    this._rateJavascriptUrls = value;
  }
  public resetRateJavascriptUrls() {
    this._rateJavascriptUrls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rateJavascriptUrlsInput() {
    return this._rateJavascriptUrls;
  }

  // filters - computed: false, optional: true, required: false
  private _filters = new WebfilterProfileFtgdWfFiltersList(this, "filters", false);
  public get filters() {
    return this._filters;
  }
  public putFilters(value: WebfilterProfileFtgdWfFilters[] | cdktf.IResolvable) {
    this._filters.internalValue = value;
  }
  public resetFilters() {
    this._filters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filtersInput() {
    return this._filters.internalValue;
  }

  // quota - computed: false, optional: true, required: false
  private _quota = new WebfilterProfileFtgdWfQuotaList(this, "quota", false);
  public get quota() {
    return this._quota;
  }
  public putQuota(value: WebfilterProfileFtgdWfQuota[] | cdktf.IResolvable) {
    this._quota.internalValue = value;
  }
  public resetQuota() {
    this._quota.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get quotaInput() {
    return this._quota.internalValue;
  }

  // risk - computed: false, optional: true, required: false
  private _risk = new WebfilterProfileFtgdWfRiskList(this, "risk", false);
  public get risk() {
    return this._risk;
  }
  public putRisk(value: WebfilterProfileFtgdWfRisk[] | cdktf.IResolvable) {
    this._risk.internalValue = value;
  }
  public resetRisk() {
    this._risk.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get riskInput() {
    return this._risk.internalValue;
  }
}
export interface WebfilterProfileOverrideOvrdUserGroup {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/webfilter_profile#name WebfilterProfile#name}
  */
  readonly name?: string;
}

export function webfilterProfileOverrideOvrdUserGroupToTerraform(struct?: WebfilterProfileOverrideOvrdUserGroup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function webfilterProfileOverrideOvrdUserGroupToHclTerraform(struct?: WebfilterProfileOverrideOvrdUserGroup | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WebfilterProfileOverrideOvrdUserGroupOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WebfilterProfileOverrideOvrdUserGroup | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WebfilterProfileOverrideOvrdUserGroup | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
    }
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
}

export class WebfilterProfileOverrideOvrdUserGroupList extends cdktf.ComplexList {
  public internalValue? : WebfilterProfileOverrideOvrdUserGroup[] | cdktf.IResolvable

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
  public get(index: number): WebfilterProfileOverrideOvrdUserGroupOutputReference {
    return new WebfilterProfileOverrideOvrdUserGroupOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WebfilterProfileOverrideProfile {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/webfilter_profile#name WebfilterProfile#name}
  */
  readonly name?: string;
}

export function webfilterProfileOverrideProfileToTerraform(struct?: WebfilterProfileOverrideProfile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function webfilterProfileOverrideProfileToHclTerraform(struct?: WebfilterProfileOverrideProfile | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WebfilterProfileOverrideProfileOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WebfilterProfileOverrideProfile | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WebfilterProfileOverrideProfile | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
    }
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
}

export class WebfilterProfileOverrideProfileList extends cdktf.ComplexList {
  public internalValue? : WebfilterProfileOverrideProfile[] | cdktf.IResolvable

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
  public get(index: number): WebfilterProfileOverrideProfileOutputReference {
    return new WebfilterProfileOverrideProfileOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WebfilterProfileOverride {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/webfilter_profile#ovrd_cookie WebfilterProfile#ovrd_cookie}
  */
  readonly ovrdCookie?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/webfilter_profile#ovrd_dur WebfilterProfile#ovrd_dur}
  */
  readonly ovrdDur?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/webfilter_profile#ovrd_dur_mode WebfilterProfile#ovrd_dur_mode}
  */
  readonly ovrdDurMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/webfilter_profile#ovrd_scope WebfilterProfile#ovrd_scope}
  */
  readonly ovrdScope?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/webfilter_profile#profile_attribute WebfilterProfile#profile_attribute}
  */
  readonly profileAttribute?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/webfilter_profile#profile_type WebfilterProfile#profile_type}
  */
  readonly profileType?: string;
  /**
  * ovrd_user_group block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/webfilter_profile#ovrd_user_group WebfilterProfile#ovrd_user_group}
  */
  readonly ovrdUserGroup?: WebfilterProfileOverrideOvrdUserGroup[] | cdktf.IResolvable;
  /**
  * profile block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/webfilter_profile#profile WebfilterProfile#profile}
  */
  readonly profile?: WebfilterProfileOverrideProfile[] | cdktf.IResolvable;
}

export function webfilterProfileOverrideToTerraform(struct?: WebfilterProfileOverrideOutputReference | WebfilterProfileOverride): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ovrd_cookie: cdktf.stringToTerraform(struct!.ovrdCookie),
    ovrd_dur: cdktf.stringToTerraform(struct!.ovrdDur),
    ovrd_dur_mode: cdktf.stringToTerraform(struct!.ovrdDurMode),
    ovrd_scope: cdktf.stringToTerraform(struct!.ovrdScope),
    profile_attribute: cdktf.stringToTerraform(struct!.profileAttribute),
    profile_type: cdktf.stringToTerraform(struct!.profileType),
    ovrd_user_group: cdktf.listMapper(webfilterProfileOverrideOvrdUserGroupToTerraform, true)(struct!.ovrdUserGroup),
    profile: cdktf.listMapper(webfilterProfileOverrideProfileToTerraform, true)(struct!.profile),
  }
}


export function webfilterProfileOverrideToHclTerraform(struct?: WebfilterProfileOverrideOutputReference | WebfilterProfileOverride): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ovrd_cookie: {
      value: cdktf.stringToHclTerraform(struct!.ovrdCookie),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ovrd_dur: {
      value: cdktf.stringToHclTerraform(struct!.ovrdDur),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ovrd_dur_mode: {
      value: cdktf.stringToHclTerraform(struct!.ovrdDurMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ovrd_scope: {
      value: cdktf.stringToHclTerraform(struct!.ovrdScope),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    profile_attribute: {
      value: cdktf.stringToHclTerraform(struct!.profileAttribute),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    profile_type: {
      value: cdktf.stringToHclTerraform(struct!.profileType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ovrd_user_group: {
      value: cdktf.listMapperHcl(webfilterProfileOverrideOvrdUserGroupToHclTerraform, true)(struct!.ovrdUserGroup),
      isBlock: true,
      type: "set",
      storageClassType: "WebfilterProfileOverrideOvrdUserGroupList",
    },
    profile: {
      value: cdktf.listMapperHcl(webfilterProfileOverrideProfileToHclTerraform, true)(struct!.profile),
      isBlock: true,
      type: "set",
      storageClassType: "WebfilterProfileOverrideProfileList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WebfilterProfileOverrideOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WebfilterProfileOverride | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ovrdCookie !== undefined) {
      hasAnyValues = true;
      internalValueResult.ovrdCookie = this._ovrdCookie;
    }
    if (this._ovrdDur !== undefined) {
      hasAnyValues = true;
      internalValueResult.ovrdDur = this._ovrdDur;
    }
    if (this._ovrdDurMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.ovrdDurMode = this._ovrdDurMode;
    }
    if (this._ovrdScope !== undefined) {
      hasAnyValues = true;
      internalValueResult.ovrdScope = this._ovrdScope;
    }
    if (this._profileAttribute !== undefined) {
      hasAnyValues = true;
      internalValueResult.profileAttribute = this._profileAttribute;
    }
    if (this._profileType !== undefined) {
      hasAnyValues = true;
      internalValueResult.profileType = this._profileType;
    }
    if (this._ovrdUserGroup?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ovrdUserGroup = this._ovrdUserGroup?.internalValue;
    }
    if (this._profile?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.profile = this._profile?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WebfilterProfileOverride | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ovrdCookie = undefined;
      this._ovrdDur = undefined;
      this._ovrdDurMode = undefined;
      this._ovrdScope = undefined;
      this._profileAttribute = undefined;
      this._profileType = undefined;
      this._ovrdUserGroup.internalValue = undefined;
      this._profile.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ovrdCookie = value.ovrdCookie;
      this._ovrdDur = value.ovrdDur;
      this._ovrdDurMode = value.ovrdDurMode;
      this._ovrdScope = value.ovrdScope;
      this._profileAttribute = value.profileAttribute;
      this._profileType = value.profileType;
      this._ovrdUserGroup.internalValue = value.ovrdUserGroup;
      this._profile.internalValue = value.profile;
    }
  }

  // ovrd_cookie - computed: true, optional: true, required: false
  private _ovrdCookie?: string; 
  public get ovrdCookie() {
    return this.getStringAttribute('ovrd_cookie');
  }
  public set ovrdCookie(value: string) {
    this._ovrdCookie = value;
  }
  public resetOvrdCookie() {
    this._ovrdCookie = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ovrdCookieInput() {
    return this._ovrdCookie;
  }

  // ovrd_dur - computed: true, optional: true, required: false
  private _ovrdDur?: string; 
  public get ovrdDur() {
    return this.getStringAttribute('ovrd_dur');
  }
  public set ovrdDur(value: string) {
    this._ovrdDur = value;
  }
  public resetOvrdDur() {
    this._ovrdDur = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ovrdDurInput() {
    return this._ovrdDur;
  }

  // ovrd_dur_mode - computed: true, optional: true, required: false
  private _ovrdDurMode?: string; 
  public get ovrdDurMode() {
    return this.getStringAttribute('ovrd_dur_mode');
  }
  public set ovrdDurMode(value: string) {
    this._ovrdDurMode = value;
  }
  public resetOvrdDurMode() {
    this._ovrdDurMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ovrdDurModeInput() {
    return this._ovrdDurMode;
  }

  // ovrd_scope - computed: true, optional: true, required: false
  private _ovrdScope?: string; 
  public get ovrdScope() {
    return this.getStringAttribute('ovrd_scope');
  }
  public set ovrdScope(value: string) {
    this._ovrdScope = value;
  }
  public resetOvrdScope() {
    this._ovrdScope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ovrdScopeInput() {
    return this._ovrdScope;
  }

  // profile_attribute - computed: true, optional: true, required: false
  private _profileAttribute?: string; 
  public get profileAttribute() {
    return this.getStringAttribute('profile_attribute');
  }
  public set profileAttribute(value: string) {
    this._profileAttribute = value;
  }
  public resetProfileAttribute() {
    this._profileAttribute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get profileAttributeInput() {
    return this._profileAttribute;
  }

  // profile_type - computed: true, optional: true, required: false
  private _profileType?: string; 
  public get profileType() {
    return this.getStringAttribute('profile_type');
  }
  public set profileType(value: string) {
    this._profileType = value;
  }
  public resetProfileType() {
    this._profileType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get profileTypeInput() {
    return this._profileType;
  }

  // ovrd_user_group - computed: false, optional: true, required: false
  private _ovrdUserGroup = new WebfilterProfileOverrideOvrdUserGroupList(this, "ovrd_user_group", true);
  public get ovrdUserGroup() {
    return this._ovrdUserGroup;
  }
  public putOvrdUserGroup(value: WebfilterProfileOverrideOvrdUserGroup[] | cdktf.IResolvable) {
    this._ovrdUserGroup.internalValue = value;
  }
  public resetOvrdUserGroup() {
    this._ovrdUserGroup.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ovrdUserGroupInput() {
    return this._ovrdUserGroup.internalValue;
  }

  // profile - computed: false, optional: true, required: false
  private _profile = new WebfilterProfileOverrideProfileList(this, "profile", true);
  public get profile() {
    return this._profile;
  }
  public putProfile(value: WebfilterProfileOverrideProfile[] | cdktf.IResolvable) {
    this._profile.internalValue = value;
  }
  public resetProfile() {
    this._profile.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get profileInput() {
    return this._profile.internalValue;
  }
}
export interface WebfilterProfileWebKeywordMatch {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/webfilter_profile#pattern WebfilterProfile#pattern}
  */
  readonly pattern?: string;
}

export function webfilterProfileWebKeywordMatchToTerraform(struct?: WebfilterProfileWebKeywordMatch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    pattern: cdktf.stringToTerraform(struct!.pattern),
  }
}


export function webfilterProfileWebKeywordMatchToHclTerraform(struct?: WebfilterProfileWebKeywordMatch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class WebfilterProfileWebKeywordMatchOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WebfilterProfileWebKeywordMatch | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._pattern !== undefined) {
      hasAnyValues = true;
      internalValueResult.pattern = this._pattern;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WebfilterProfileWebKeywordMatch | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._pattern = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._pattern = value.pattern;
    }
  }

  // pattern - computed: false, optional: true, required: false
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

export class WebfilterProfileWebKeywordMatchList extends cdktf.ComplexList {
  public internalValue? : WebfilterProfileWebKeywordMatch[] | cdktf.IResolvable

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
  public get(index: number): WebfilterProfileWebKeywordMatchOutputReference {
    return new WebfilterProfileWebKeywordMatchOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WebfilterProfileWeb {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/webfilter_profile#allowlist WebfilterProfile#allowlist}
  */
  readonly allowlist?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/webfilter_profile#blacklist WebfilterProfile#blacklist}
  */
  readonly blacklist?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/webfilter_profile#blocklist WebfilterProfile#blocklist}
  */
  readonly blocklist?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/webfilter_profile#bword_table WebfilterProfile#bword_table}
  */
  readonly bwordTable?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/webfilter_profile#bword_threshold WebfilterProfile#bword_threshold}
  */
  readonly bwordThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/webfilter_profile#content_header_list WebfilterProfile#content_header_list}
  */
  readonly contentHeaderList?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/webfilter_profile#log_search WebfilterProfile#log_search}
  */
  readonly logSearch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/webfilter_profile#safe_search WebfilterProfile#safe_search}
  */
  readonly safeSearch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/webfilter_profile#urlfilter_table WebfilterProfile#urlfilter_table}
  */
  readonly urlfilterTable?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/webfilter_profile#vimeo_restrict WebfilterProfile#vimeo_restrict}
  */
  readonly vimeoRestrict?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/webfilter_profile#whitelist WebfilterProfile#whitelist}
  */
  readonly whitelist?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/webfilter_profile#youtube_restrict WebfilterProfile#youtube_restrict}
  */
  readonly youtubeRestrict?: string;
  /**
  * keyword_match block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/webfilter_profile#keyword_match WebfilterProfile#keyword_match}
  */
  readonly keywordMatch?: WebfilterProfileWebKeywordMatch[] | cdktf.IResolvable;
}

export function webfilterProfileWebToTerraform(struct?: WebfilterProfileWebOutputReference | WebfilterProfileWeb): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowlist: cdktf.stringToTerraform(struct!.allowlist),
    blacklist: cdktf.stringToTerraform(struct!.blacklist),
    blocklist: cdktf.stringToTerraform(struct!.blocklist),
    bword_table: cdktf.numberToTerraform(struct!.bwordTable),
    bword_threshold: cdktf.numberToTerraform(struct!.bwordThreshold),
    content_header_list: cdktf.numberToTerraform(struct!.contentHeaderList),
    log_search: cdktf.stringToTerraform(struct!.logSearch),
    safe_search: cdktf.stringToTerraform(struct!.safeSearch),
    urlfilter_table: cdktf.numberToTerraform(struct!.urlfilterTable),
    vimeo_restrict: cdktf.stringToTerraform(struct!.vimeoRestrict),
    whitelist: cdktf.stringToTerraform(struct!.whitelist),
    youtube_restrict: cdktf.stringToTerraform(struct!.youtubeRestrict),
    keyword_match: cdktf.listMapper(webfilterProfileWebKeywordMatchToTerraform, true)(struct!.keywordMatch),
  }
}


export function webfilterProfileWebToHclTerraform(struct?: WebfilterProfileWebOutputReference | WebfilterProfileWeb): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allowlist: {
      value: cdktf.stringToHclTerraform(struct!.allowlist),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    blacklist: {
      value: cdktf.stringToHclTerraform(struct!.blacklist),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    blocklist: {
      value: cdktf.stringToHclTerraform(struct!.blocklist),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bword_table: {
      value: cdktf.numberToHclTerraform(struct!.bwordTable),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    bword_threshold: {
      value: cdktf.numberToHclTerraform(struct!.bwordThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    content_header_list: {
      value: cdktf.numberToHclTerraform(struct!.contentHeaderList),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    log_search: {
      value: cdktf.stringToHclTerraform(struct!.logSearch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    safe_search: {
      value: cdktf.stringToHclTerraform(struct!.safeSearch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    urlfilter_table: {
      value: cdktf.numberToHclTerraform(struct!.urlfilterTable),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    vimeo_restrict: {
      value: cdktf.stringToHclTerraform(struct!.vimeoRestrict),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    whitelist: {
      value: cdktf.stringToHclTerraform(struct!.whitelist),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    youtube_restrict: {
      value: cdktf.stringToHclTerraform(struct!.youtubeRestrict),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    keyword_match: {
      value: cdktf.listMapperHcl(webfilterProfileWebKeywordMatchToHclTerraform, true)(struct!.keywordMatch),
      isBlock: true,
      type: "set",
      storageClassType: "WebfilterProfileWebKeywordMatchList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WebfilterProfileWebOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WebfilterProfileWeb | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowlist !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowlist = this._allowlist;
    }
    if (this._blacklist !== undefined) {
      hasAnyValues = true;
      internalValueResult.blacklist = this._blacklist;
    }
    if (this._blocklist !== undefined) {
      hasAnyValues = true;
      internalValueResult.blocklist = this._blocklist;
    }
    if (this._bwordTable !== undefined) {
      hasAnyValues = true;
      internalValueResult.bwordTable = this._bwordTable;
    }
    if (this._bwordThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.bwordThreshold = this._bwordThreshold;
    }
    if (this._contentHeaderList !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentHeaderList = this._contentHeaderList;
    }
    if (this._logSearch !== undefined) {
      hasAnyValues = true;
      internalValueResult.logSearch = this._logSearch;
    }
    if (this._safeSearch !== undefined) {
      hasAnyValues = true;
      internalValueResult.safeSearch = this._safeSearch;
    }
    if (this._urlfilterTable !== undefined) {
      hasAnyValues = true;
      internalValueResult.urlfilterTable = this._urlfilterTable;
    }
    if (this._vimeoRestrict !== undefined) {
      hasAnyValues = true;
      internalValueResult.vimeoRestrict = this._vimeoRestrict;
    }
    if (this._whitelist !== undefined) {
      hasAnyValues = true;
      internalValueResult.whitelist = this._whitelist;
    }
    if (this._youtubeRestrict !== undefined) {
      hasAnyValues = true;
      internalValueResult.youtubeRestrict = this._youtubeRestrict;
    }
    if (this._keywordMatch?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.keywordMatch = this._keywordMatch?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WebfilterProfileWeb | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowlist = undefined;
      this._blacklist = undefined;
      this._blocklist = undefined;
      this._bwordTable = undefined;
      this._bwordThreshold = undefined;
      this._contentHeaderList = undefined;
      this._logSearch = undefined;
      this._safeSearch = undefined;
      this._urlfilterTable = undefined;
      this._vimeoRestrict = undefined;
      this._whitelist = undefined;
      this._youtubeRestrict = undefined;
      this._keywordMatch.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowlist = value.allowlist;
      this._blacklist = value.blacklist;
      this._blocklist = value.blocklist;
      this._bwordTable = value.bwordTable;
      this._bwordThreshold = value.bwordThreshold;
      this._contentHeaderList = value.contentHeaderList;
      this._logSearch = value.logSearch;
      this._safeSearch = value.safeSearch;
      this._urlfilterTable = value.urlfilterTable;
      this._vimeoRestrict = value.vimeoRestrict;
      this._whitelist = value.whitelist;
      this._youtubeRestrict = value.youtubeRestrict;
      this._keywordMatch.internalValue = value.keywordMatch;
    }
  }

  // allowlist - computed: false, optional: true, required: false
  private _allowlist?: string; 
  public get allowlist() {
    return this.getStringAttribute('allowlist');
  }
  public set allowlist(value: string) {
    this._allowlist = value;
  }
  public resetAllowlist() {
    this._allowlist = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowlistInput() {
    return this._allowlist;
  }

  // blacklist - computed: true, optional: true, required: false
  private _blacklist?: string; 
  public get blacklist() {
    return this.getStringAttribute('blacklist');
  }
  public set blacklist(value: string) {
    this._blacklist = value;
  }
  public resetBlacklist() {
    this._blacklist = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blacklistInput() {
    return this._blacklist;
  }

  // blocklist - computed: true, optional: true, required: false
  private _blocklist?: string; 
  public get blocklist() {
    return this.getStringAttribute('blocklist');
  }
  public set blocklist(value: string) {
    this._blocklist = value;
  }
  public resetBlocklist() {
    this._blocklist = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blocklistInput() {
    return this._blocklist;
  }

  // bword_table - computed: false, optional: true, required: false
  private _bwordTable?: number; 
  public get bwordTable() {
    return this.getNumberAttribute('bword_table');
  }
  public set bwordTable(value: number) {
    this._bwordTable = value;
  }
  public resetBwordTable() {
    this._bwordTable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bwordTableInput() {
    return this._bwordTable;
  }

  // bword_threshold - computed: true, optional: true, required: false
  private _bwordThreshold?: number; 
  public get bwordThreshold() {
    return this.getNumberAttribute('bword_threshold');
  }
  public set bwordThreshold(value: number) {
    this._bwordThreshold = value;
  }
  public resetBwordThreshold() {
    this._bwordThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bwordThresholdInput() {
    return this._bwordThreshold;
  }

  // content_header_list - computed: false, optional: true, required: false
  private _contentHeaderList?: number; 
  public get contentHeaderList() {
    return this.getNumberAttribute('content_header_list');
  }
  public set contentHeaderList(value: number) {
    this._contentHeaderList = value;
  }
  public resetContentHeaderList() {
    this._contentHeaderList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentHeaderListInput() {
    return this._contentHeaderList;
  }

  // log_search - computed: true, optional: true, required: false
  private _logSearch?: string; 
  public get logSearch() {
    return this.getStringAttribute('log_search');
  }
  public set logSearch(value: string) {
    this._logSearch = value;
  }
  public resetLogSearch() {
    this._logSearch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logSearchInput() {
    return this._logSearch;
  }

  // safe_search - computed: false, optional: true, required: false
  private _safeSearch?: string; 
  public get safeSearch() {
    return this.getStringAttribute('safe_search');
  }
  public set safeSearch(value: string) {
    this._safeSearch = value;
  }
  public resetSafeSearch() {
    this._safeSearch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get safeSearchInput() {
    return this._safeSearch;
  }

  // urlfilter_table - computed: false, optional: true, required: false
  private _urlfilterTable?: number; 
  public get urlfilterTable() {
    return this.getNumberAttribute('urlfilter_table');
  }
  public set urlfilterTable(value: number) {
    this._urlfilterTable = value;
  }
  public resetUrlfilterTable() {
    this._urlfilterTable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlfilterTableInput() {
    return this._urlfilterTable;
  }

  // vimeo_restrict - computed: false, optional: true, required: false
  private _vimeoRestrict?: string; 
  public get vimeoRestrict() {
    return this.getStringAttribute('vimeo_restrict');
  }
  public set vimeoRestrict(value: string) {
    this._vimeoRestrict = value;
  }
  public resetVimeoRestrict() {
    this._vimeoRestrict = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vimeoRestrictInput() {
    return this._vimeoRestrict;
  }

  // whitelist - computed: false, optional: true, required: false
  private _whitelist?: string; 
  public get whitelist() {
    return this.getStringAttribute('whitelist');
  }
  public set whitelist(value: string) {
    this._whitelist = value;
  }
  public resetWhitelist() {
    this._whitelist = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get whitelistInput() {
    return this._whitelist;
  }

  // youtube_restrict - computed: true, optional: true, required: false
  private _youtubeRestrict?: string; 
  public get youtubeRestrict() {
    return this.getStringAttribute('youtube_restrict');
  }
  public set youtubeRestrict(value: string) {
    this._youtubeRestrict = value;
  }
  public resetYoutubeRestrict() {
    this._youtubeRestrict = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get youtubeRestrictInput() {
    return this._youtubeRestrict;
  }

  // keyword_match - computed: false, optional: true, required: false
  private _keywordMatch = new WebfilterProfileWebKeywordMatchList(this, "keyword_match", true);
  public get keywordMatch() {
    return this._keywordMatch;
  }
  public putKeywordMatch(value: WebfilterProfileWebKeywordMatch[] | cdktf.IResolvable) {
    this._keywordMatch.internalValue = value;
  }
  public resetKeywordMatch() {
    this._keywordMatch.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keywordMatchInput() {
    return this._keywordMatch.internalValue;
  }
}
export interface WebfilterProfileWispServers {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/webfilter_profile#name WebfilterProfile#name}
  */
  readonly name?: string;
}

export function webfilterProfileWispServersToTerraform(struct?: WebfilterProfileWispServers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function webfilterProfileWispServersToHclTerraform(struct?: WebfilterProfileWispServers | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WebfilterProfileWispServersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WebfilterProfileWispServers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WebfilterProfileWispServers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
    }
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
}

export class WebfilterProfileWispServersList extends cdktf.ComplexList {
  public internalValue? : WebfilterProfileWispServers[] | cdktf.IResolvable

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
  public get(index: number): WebfilterProfileWispServersOutputReference {
    return new WebfilterProfileWispServersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WebfilterProfileYoutubeChannelFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/webfilter_profile#channel_id WebfilterProfile#channel_id}
  */
  readonly channelId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/webfilter_profile#comment WebfilterProfile#comment}
  */
  readonly comment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/webfilter_profile#id WebfilterProfile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
}

export function webfilterProfileYoutubeChannelFilterToTerraform(struct?: WebfilterProfileYoutubeChannelFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    channel_id: cdktf.stringToTerraform(struct!.channelId),
    comment: cdktf.stringToTerraform(struct!.comment),
    id: cdktf.numberToTerraform(struct!.id),
  }
}


export function webfilterProfileYoutubeChannelFilterToHclTerraform(struct?: WebfilterProfileYoutubeChannelFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    channel_id: {
      value: cdktf.stringToHclTerraform(struct!.channelId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    comment: {
      value: cdktf.stringToHclTerraform(struct!.comment),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class WebfilterProfileYoutubeChannelFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WebfilterProfileYoutubeChannelFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._channelId !== undefined) {
      hasAnyValues = true;
      internalValueResult.channelId = this._channelId;
    }
    if (this._comment !== undefined) {
      hasAnyValues = true;
      internalValueResult.comment = this._comment;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WebfilterProfileYoutubeChannelFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._channelId = undefined;
      this._comment = undefined;
      this._id = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._channelId = value.channelId;
      this._comment = value.comment;
      this._id = value.id;
    }
  }

  // channel_id - computed: false, optional: true, required: false
  private _channelId?: string; 
  public get channelId() {
    return this.getStringAttribute('channel_id');
  }
  public set channelId(value: string) {
    this._channelId = value;
  }
  public resetChannelId() {
    this._channelId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get channelIdInput() {
    return this._channelId;
  }

  // comment - computed: false, optional: true, required: false
  private _comment?: string; 
  public get comment() {
    return this.getStringAttribute('comment');
  }
  public set comment(value: string) {
    this._comment = value;
  }
  public resetComment() {
    this._comment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentInput() {
    return this._comment;
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

export class WebfilterProfileYoutubeChannelFilterList extends cdktf.ComplexList {
  public internalValue? : WebfilterProfileYoutubeChannelFilter[] | cdktf.IResolvable

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
  public get(index: number): WebfilterProfileYoutubeChannelFilterOutputReference {
    return new WebfilterProfileYoutubeChannelFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/webfilter_profile fortios_webfilter_profile}
*/
export class WebfilterProfile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortios_webfilter_profile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a WebfilterProfile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the WebfilterProfile to import
  * @param importFromId The id of the existing WebfilterProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/webfilter_profile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the WebfilterProfile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortios_webfilter_profile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/webfilter_profile fortios_webfilter_profile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WebfilterProfileConfig
  */
  public constructor(scope: Construct, id: string, config: WebfilterProfileConfig) {
    super(scope, id, {
      terraformResourceType: 'fortios_webfilter_profile',
      terraformGeneratorMetadata: {
        providerName: 'fortios',
        providerVersion: '1.23.0',
        providerVersionConstraint: '1.23.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._comment = config.comment;
    this._dynamicSortSubtable = config.dynamicSortSubtable;
    this._extendedLog = config.extendedLog;
    this._featureSet = config.featureSet;
    this._getAllTables = config.fetchAllTables;
    this._httpsReplacemsg = config.httpsReplacemsg;
    this._id = config.id;
    this._inspectionMode = config.inspectionMode;
    this._logAllUrl = config.logAllUrl;
    this._name = config.name;
    this._options = config.options;
    this._ovrdPerm = config.ovrdPerm;
    this._postAction = config.postAction;
    this._replacemsgGroup = config.replacemsgGroup;
    this._vdomparam = config.vdomparam;
    this._webAntiphishingLog = config.webAntiphishingLog;
    this._webContentLog = config.webContentLog;
    this._webExtendedAllActionLog = config.webExtendedAllActionLog;
    this._webFilterActivexLog = config.webFilterActivexLog;
    this._webFilterAppletLog = config.webFilterAppletLog;
    this._webFilterCommandBlockLog = config.webFilterCommandBlockLog;
    this._webFilterCookieLog = config.webFilterCookieLog;
    this._webFilterCookieRemovalLog = config.webFilterCookieRemovalLog;
    this._webFilterJsLog = config.webFilterJsLog;
    this._webFilterJscriptLog = config.webFilterJscriptLog;
    this._webFilterRefererLog = config.webFilterRefererLog;
    this._webFilterUnknownLog = config.webFilterUnknownLog;
    this._webFilterVbsLog = config.webFilterVbsLog;
    this._webFlowLogEncoding = config.webFlowLogEncoding;
    this._webFtgdErrLog = config.webFtgdErrLog;
    this._webFtgdQuotaUsage = config.webFtgdQuotaUsage;
    this._webInvalidDomainLog = config.webInvalidDomainLog;
    this._webUrlLog = config.webUrlLog;
    this._wisp = config.wisp;
    this._wispAlgorithm = config.wispAlgorithm;
    this._youtubeChannelStatus = config.youtubeChannelStatus;
    this._antiphish.internalValue = config.antiphish;
    this._fileFilter.internalValue = config.fileFilter;
    this._ftgdWf.internalValue = config.ftgdWf;
    this._override.internalValue = config.override;
    this._web.internalValue = config.web;
    this._wispServers.internalValue = config.wispServers;
    this._youtubeChannelFilter.internalValue = config.youtubeChannelFilter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // comment - computed: false, optional: true, required: false
  private _comment?: string; 
  public get comment() {
    return this.getStringAttribute('comment');
  }
  public set comment(value: string) {
    this._comment = value;
  }
  public resetComment() {
    this._comment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentInput() {
    return this._comment;
  }

  // dynamic_sort_subtable - computed: false, optional: true, required: false
  private _dynamicSortSubtable?: string; 
  public get dynamicSortSubtable() {
    return this.getStringAttribute('dynamic_sort_subtable');
  }
  public set dynamicSortSubtable(value: string) {
    this._dynamicSortSubtable = value;
  }
  public resetDynamicSortSubtable() {
    this._dynamicSortSubtable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicSortSubtableInput() {
    return this._dynamicSortSubtable;
  }

  // extended_log - computed: true, optional: true, required: false
  private _extendedLog?: string; 
  public get extendedLog() {
    return this.getStringAttribute('extended_log');
  }
  public set extendedLog(value: string) {
    this._extendedLog = value;
  }
  public resetExtendedLog() {
    this._extendedLog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extendedLogInput() {
    return this._extendedLog;
  }

  // feature_set - computed: true, optional: true, required: false
  private _featureSet?: string; 
  public get featureSet() {
    return this.getStringAttribute('feature_set');
  }
  public set featureSet(value: string) {
    this._featureSet = value;
  }
  public resetFeatureSet() {
    this._featureSet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get featureSetInput() {
    return this._featureSet;
  }

  // get_all_tables - computed: false, optional: true, required: false
  private _getAllTables?: string; 
  public get fetchAllTables() {
    return this.getStringAttribute('get_all_tables');
  }
  public set fetchAllTables(value: string) {
    this._getAllTables = value;
  }
  public resetFetchAllTables() {
    this._getAllTables = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fetchAllTablesInput() {
    return this._getAllTables;
  }

  // https_replacemsg - computed: true, optional: true, required: false
  private _httpsReplacemsg?: string; 
  public get httpsReplacemsg() {
    return this.getStringAttribute('https_replacemsg');
  }
  public set httpsReplacemsg(value: string) {
    this._httpsReplacemsg = value;
  }
  public resetHttpsReplacemsg() {
    this._httpsReplacemsg = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpsReplacemsgInput() {
    return this._httpsReplacemsg;
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

  // inspection_mode - computed: false, optional: true, required: false
  private _inspectionMode?: string; 
  public get inspectionMode() {
    return this.getStringAttribute('inspection_mode');
  }
  public set inspectionMode(value: string) {
    this._inspectionMode = value;
  }
  public resetInspectionMode() {
    this._inspectionMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inspectionModeInput() {
    return this._inspectionMode;
  }

  // log_all_url - computed: true, optional: true, required: false
  private _logAllUrl?: string; 
  public get logAllUrl() {
    return this.getStringAttribute('log_all_url');
  }
  public set logAllUrl(value: string) {
    this._logAllUrl = value;
  }
  public resetLogAllUrl() {
    this._logAllUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logAllUrlInput() {
    return this._logAllUrl;
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

  // options - computed: false, optional: true, required: false
  private _options?: string; 
  public get options() {
    return this.getStringAttribute('options');
  }
  public set options(value: string) {
    this._options = value;
  }
  public resetOptions() {
    this._options = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionsInput() {
    return this._options;
  }

  // ovrd_perm - computed: false, optional: true, required: false
  private _ovrdPerm?: string; 
  public get ovrdPerm() {
    return this.getStringAttribute('ovrd_perm');
  }
  public set ovrdPerm(value: string) {
    this._ovrdPerm = value;
  }
  public resetOvrdPerm() {
    this._ovrdPerm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ovrdPermInput() {
    return this._ovrdPerm;
  }

  // post_action - computed: true, optional: true, required: false
  private _postAction?: string; 
  public get postAction() {
    return this.getStringAttribute('post_action');
  }
  public set postAction(value: string) {
    this._postAction = value;
  }
  public resetPostAction() {
    this._postAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get postActionInput() {
    return this._postAction;
  }

  // replacemsg_group - computed: false, optional: true, required: false
  private _replacemsgGroup?: string; 
  public get replacemsgGroup() {
    return this.getStringAttribute('replacemsg_group');
  }
  public set replacemsgGroup(value: string) {
    this._replacemsgGroup = value;
  }
  public resetReplacemsgGroup() {
    this._replacemsgGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replacemsgGroupInput() {
    return this._replacemsgGroup;
  }

  // vdomparam - computed: true, optional: true, required: false
  private _vdomparam?: string; 
  public get vdomparam() {
    return this.getStringAttribute('vdomparam');
  }
  public set vdomparam(value: string) {
    this._vdomparam = value;
  }
  public resetVdomparam() {
    this._vdomparam = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vdomparamInput() {
    return this._vdomparam;
  }

  // web_antiphishing_log - computed: true, optional: true, required: false
  private _webAntiphishingLog?: string; 
  public get webAntiphishingLog() {
    return this.getStringAttribute('web_antiphishing_log');
  }
  public set webAntiphishingLog(value: string) {
    this._webAntiphishingLog = value;
  }
  public resetWebAntiphishingLog() {
    this._webAntiphishingLog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webAntiphishingLogInput() {
    return this._webAntiphishingLog;
  }

  // web_content_log - computed: true, optional: true, required: false
  private _webContentLog?: string; 
  public get webContentLog() {
    return this.getStringAttribute('web_content_log');
  }
  public set webContentLog(value: string) {
    this._webContentLog = value;
  }
  public resetWebContentLog() {
    this._webContentLog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webContentLogInput() {
    return this._webContentLog;
  }

  // web_extended_all_action_log - computed: true, optional: true, required: false
  private _webExtendedAllActionLog?: string; 
  public get webExtendedAllActionLog() {
    return this.getStringAttribute('web_extended_all_action_log');
  }
  public set webExtendedAllActionLog(value: string) {
    this._webExtendedAllActionLog = value;
  }
  public resetWebExtendedAllActionLog() {
    this._webExtendedAllActionLog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webExtendedAllActionLogInput() {
    return this._webExtendedAllActionLog;
  }

  // web_filter_activex_log - computed: true, optional: true, required: false
  private _webFilterActivexLog?: string; 
  public get webFilterActivexLog() {
    return this.getStringAttribute('web_filter_activex_log');
  }
  public set webFilterActivexLog(value: string) {
    this._webFilterActivexLog = value;
  }
  public resetWebFilterActivexLog() {
    this._webFilterActivexLog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webFilterActivexLogInput() {
    return this._webFilterActivexLog;
  }

  // web_filter_applet_log - computed: true, optional: true, required: false
  private _webFilterAppletLog?: string; 
  public get webFilterAppletLog() {
    return this.getStringAttribute('web_filter_applet_log');
  }
  public set webFilterAppletLog(value: string) {
    this._webFilterAppletLog = value;
  }
  public resetWebFilterAppletLog() {
    this._webFilterAppletLog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webFilterAppletLogInput() {
    return this._webFilterAppletLog;
  }

  // web_filter_command_block_log - computed: true, optional: true, required: false
  private _webFilterCommandBlockLog?: string; 
  public get webFilterCommandBlockLog() {
    return this.getStringAttribute('web_filter_command_block_log');
  }
  public set webFilterCommandBlockLog(value: string) {
    this._webFilterCommandBlockLog = value;
  }
  public resetWebFilterCommandBlockLog() {
    this._webFilterCommandBlockLog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webFilterCommandBlockLogInput() {
    return this._webFilterCommandBlockLog;
  }

  // web_filter_cookie_log - computed: true, optional: true, required: false
  private _webFilterCookieLog?: string; 
  public get webFilterCookieLog() {
    return this.getStringAttribute('web_filter_cookie_log');
  }
  public set webFilterCookieLog(value: string) {
    this._webFilterCookieLog = value;
  }
  public resetWebFilterCookieLog() {
    this._webFilterCookieLog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webFilterCookieLogInput() {
    return this._webFilterCookieLog;
  }

  // web_filter_cookie_removal_log - computed: true, optional: true, required: false
  private _webFilterCookieRemovalLog?: string; 
  public get webFilterCookieRemovalLog() {
    return this.getStringAttribute('web_filter_cookie_removal_log');
  }
  public set webFilterCookieRemovalLog(value: string) {
    this._webFilterCookieRemovalLog = value;
  }
  public resetWebFilterCookieRemovalLog() {
    this._webFilterCookieRemovalLog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webFilterCookieRemovalLogInput() {
    return this._webFilterCookieRemovalLog;
  }

  // web_filter_js_log - computed: true, optional: true, required: false
  private _webFilterJsLog?: string; 
  public get webFilterJsLog() {
    return this.getStringAttribute('web_filter_js_log');
  }
  public set webFilterJsLog(value: string) {
    this._webFilterJsLog = value;
  }
  public resetWebFilterJsLog() {
    this._webFilterJsLog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webFilterJsLogInput() {
    return this._webFilterJsLog;
  }

  // web_filter_jscript_log - computed: true, optional: true, required: false
  private _webFilterJscriptLog?: string; 
  public get webFilterJscriptLog() {
    return this.getStringAttribute('web_filter_jscript_log');
  }
  public set webFilterJscriptLog(value: string) {
    this._webFilterJscriptLog = value;
  }
  public resetWebFilterJscriptLog() {
    this._webFilterJscriptLog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webFilterJscriptLogInput() {
    return this._webFilterJscriptLog;
  }

  // web_filter_referer_log - computed: true, optional: true, required: false
  private _webFilterRefererLog?: string; 
  public get webFilterRefererLog() {
    return this.getStringAttribute('web_filter_referer_log');
  }
  public set webFilterRefererLog(value: string) {
    this._webFilterRefererLog = value;
  }
  public resetWebFilterRefererLog() {
    this._webFilterRefererLog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webFilterRefererLogInput() {
    return this._webFilterRefererLog;
  }

  // web_filter_unknown_log - computed: true, optional: true, required: false
  private _webFilterUnknownLog?: string; 
  public get webFilterUnknownLog() {
    return this.getStringAttribute('web_filter_unknown_log');
  }
  public set webFilterUnknownLog(value: string) {
    this._webFilterUnknownLog = value;
  }
  public resetWebFilterUnknownLog() {
    this._webFilterUnknownLog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webFilterUnknownLogInput() {
    return this._webFilterUnknownLog;
  }

  // web_filter_vbs_log - computed: true, optional: true, required: false
  private _webFilterVbsLog?: string; 
  public get webFilterVbsLog() {
    return this.getStringAttribute('web_filter_vbs_log');
  }
  public set webFilterVbsLog(value: string) {
    this._webFilterVbsLog = value;
  }
  public resetWebFilterVbsLog() {
    this._webFilterVbsLog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webFilterVbsLogInput() {
    return this._webFilterVbsLog;
  }

  // web_flow_log_encoding - computed: true, optional: true, required: false
  private _webFlowLogEncoding?: string; 
  public get webFlowLogEncoding() {
    return this.getStringAttribute('web_flow_log_encoding');
  }
  public set webFlowLogEncoding(value: string) {
    this._webFlowLogEncoding = value;
  }
  public resetWebFlowLogEncoding() {
    this._webFlowLogEncoding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webFlowLogEncodingInput() {
    return this._webFlowLogEncoding;
  }

  // web_ftgd_err_log - computed: true, optional: true, required: false
  private _webFtgdErrLog?: string; 
  public get webFtgdErrLog() {
    return this.getStringAttribute('web_ftgd_err_log');
  }
  public set webFtgdErrLog(value: string) {
    this._webFtgdErrLog = value;
  }
  public resetWebFtgdErrLog() {
    this._webFtgdErrLog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webFtgdErrLogInput() {
    return this._webFtgdErrLog;
  }

  // web_ftgd_quota_usage - computed: true, optional: true, required: false
  private _webFtgdQuotaUsage?: string; 
  public get webFtgdQuotaUsage() {
    return this.getStringAttribute('web_ftgd_quota_usage');
  }
  public set webFtgdQuotaUsage(value: string) {
    this._webFtgdQuotaUsage = value;
  }
  public resetWebFtgdQuotaUsage() {
    this._webFtgdQuotaUsage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webFtgdQuotaUsageInput() {
    return this._webFtgdQuotaUsage;
  }

  // web_invalid_domain_log - computed: true, optional: true, required: false
  private _webInvalidDomainLog?: string; 
  public get webInvalidDomainLog() {
    return this.getStringAttribute('web_invalid_domain_log');
  }
  public set webInvalidDomainLog(value: string) {
    this._webInvalidDomainLog = value;
  }
  public resetWebInvalidDomainLog() {
    this._webInvalidDomainLog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webInvalidDomainLogInput() {
    return this._webInvalidDomainLog;
  }

  // web_url_log - computed: true, optional: true, required: false
  private _webUrlLog?: string; 
  public get webUrlLog() {
    return this.getStringAttribute('web_url_log');
  }
  public set webUrlLog(value: string) {
    this._webUrlLog = value;
  }
  public resetWebUrlLog() {
    this._webUrlLog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webUrlLogInput() {
    return this._webUrlLog;
  }

  // wisp - computed: true, optional: true, required: false
  private _wisp?: string; 
  public get wisp() {
    return this.getStringAttribute('wisp');
  }
  public set wisp(value: string) {
    this._wisp = value;
  }
  public resetWisp() {
    this._wisp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wispInput() {
    return this._wisp;
  }

  // wisp_algorithm - computed: true, optional: true, required: false
  private _wispAlgorithm?: string; 
  public get wispAlgorithm() {
    return this.getStringAttribute('wisp_algorithm');
  }
  public set wispAlgorithm(value: string) {
    this._wispAlgorithm = value;
  }
  public resetWispAlgorithm() {
    this._wispAlgorithm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wispAlgorithmInput() {
    return this._wispAlgorithm;
  }

  // youtube_channel_status - computed: true, optional: true, required: false
  private _youtubeChannelStatus?: string; 
  public get youtubeChannelStatus() {
    return this.getStringAttribute('youtube_channel_status');
  }
  public set youtubeChannelStatus(value: string) {
    this._youtubeChannelStatus = value;
  }
  public resetYoutubeChannelStatus() {
    this._youtubeChannelStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get youtubeChannelStatusInput() {
    return this._youtubeChannelStatus;
  }

  // antiphish - computed: false, optional: true, required: false
  private _antiphish = new WebfilterProfileAntiphishOutputReference(this, "antiphish");
  public get antiphish() {
    return this._antiphish;
  }
  public putAntiphish(value: WebfilterProfileAntiphish) {
    this._antiphish.internalValue = value;
  }
  public resetAntiphish() {
    this._antiphish.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get antiphishInput() {
    return this._antiphish.internalValue;
  }

  // file_filter - computed: false, optional: true, required: false
  private _fileFilter = new WebfilterProfileFileFilterOutputReference(this, "file_filter");
  public get fileFilter() {
    return this._fileFilter;
  }
  public putFileFilter(value: WebfilterProfileFileFilter) {
    this._fileFilter.internalValue = value;
  }
  public resetFileFilter() {
    this._fileFilter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileFilterInput() {
    return this._fileFilter.internalValue;
  }

  // ftgd_wf - computed: false, optional: true, required: false
  private _ftgdWf = new WebfilterProfileFtgdWfOutputReference(this, "ftgd_wf");
  public get ftgdWf() {
    return this._ftgdWf;
  }
  public putFtgdWf(value: WebfilterProfileFtgdWf) {
    this._ftgdWf.internalValue = value;
  }
  public resetFtgdWf() {
    this._ftgdWf.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ftgdWfInput() {
    return this._ftgdWf.internalValue;
  }

  // override - computed: false, optional: true, required: false
  private _override = new WebfilterProfileOverrideOutputReference(this, "override");
  public get override() {
    return this._override;
  }
  public putOverride(value: WebfilterProfileOverride) {
    this._override.internalValue = value;
  }
  public resetOverride() {
    this._override.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overrideInput() {
    return this._override.internalValue;
  }

  // web - computed: false, optional: true, required: false
  private _web = new WebfilterProfileWebOutputReference(this, "web");
  public get web() {
    return this._web;
  }
  public putWeb(value: WebfilterProfileWeb) {
    this._web.internalValue = value;
  }
  public resetWeb() {
    this._web.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webInput() {
    return this._web.internalValue;
  }

  // wisp_servers - computed: false, optional: true, required: false
  private _wispServers = new WebfilterProfileWispServersList(this, "wisp_servers", true);
  public get wispServers() {
    return this._wispServers;
  }
  public putWispServers(value: WebfilterProfileWispServers[] | cdktf.IResolvable) {
    this._wispServers.internalValue = value;
  }
  public resetWispServers() {
    this._wispServers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wispServersInput() {
    return this._wispServers.internalValue;
  }

  // youtube_channel_filter - computed: false, optional: true, required: false
  private _youtubeChannelFilter = new WebfilterProfileYoutubeChannelFilterList(this, "youtube_channel_filter", false);
  public get youtubeChannelFilter() {
    return this._youtubeChannelFilter;
  }
  public putYoutubeChannelFilter(value: WebfilterProfileYoutubeChannelFilter[] | cdktf.IResolvable) {
    this._youtubeChannelFilter.internalValue = value;
  }
  public resetYoutubeChannelFilter() {
    this._youtubeChannelFilter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get youtubeChannelFilterInput() {
    return this._youtubeChannelFilter.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      comment: cdktf.stringToTerraform(this._comment),
      dynamic_sort_subtable: cdktf.stringToTerraform(this._dynamicSortSubtable),
      extended_log: cdktf.stringToTerraform(this._extendedLog),
      feature_set: cdktf.stringToTerraform(this._featureSet),
      get_all_tables: cdktf.stringToTerraform(this._getAllTables),
      https_replacemsg: cdktf.stringToTerraform(this._httpsReplacemsg),
      id: cdktf.stringToTerraform(this._id),
      inspection_mode: cdktf.stringToTerraform(this._inspectionMode),
      log_all_url: cdktf.stringToTerraform(this._logAllUrl),
      name: cdktf.stringToTerraform(this._name),
      options: cdktf.stringToTerraform(this._options),
      ovrd_perm: cdktf.stringToTerraform(this._ovrdPerm),
      post_action: cdktf.stringToTerraform(this._postAction),
      replacemsg_group: cdktf.stringToTerraform(this._replacemsgGroup),
      vdomparam: cdktf.stringToTerraform(this._vdomparam),
      web_antiphishing_log: cdktf.stringToTerraform(this._webAntiphishingLog),
      web_content_log: cdktf.stringToTerraform(this._webContentLog),
      web_extended_all_action_log: cdktf.stringToTerraform(this._webExtendedAllActionLog),
      web_filter_activex_log: cdktf.stringToTerraform(this._webFilterActivexLog),
      web_filter_applet_log: cdktf.stringToTerraform(this._webFilterAppletLog),
      web_filter_command_block_log: cdktf.stringToTerraform(this._webFilterCommandBlockLog),
      web_filter_cookie_log: cdktf.stringToTerraform(this._webFilterCookieLog),
      web_filter_cookie_removal_log: cdktf.stringToTerraform(this._webFilterCookieRemovalLog),
      web_filter_js_log: cdktf.stringToTerraform(this._webFilterJsLog),
      web_filter_jscript_log: cdktf.stringToTerraform(this._webFilterJscriptLog),
      web_filter_referer_log: cdktf.stringToTerraform(this._webFilterRefererLog),
      web_filter_unknown_log: cdktf.stringToTerraform(this._webFilterUnknownLog),
      web_filter_vbs_log: cdktf.stringToTerraform(this._webFilterVbsLog),
      web_flow_log_encoding: cdktf.stringToTerraform(this._webFlowLogEncoding),
      web_ftgd_err_log: cdktf.stringToTerraform(this._webFtgdErrLog),
      web_ftgd_quota_usage: cdktf.stringToTerraform(this._webFtgdQuotaUsage),
      web_invalid_domain_log: cdktf.stringToTerraform(this._webInvalidDomainLog),
      web_url_log: cdktf.stringToTerraform(this._webUrlLog),
      wisp: cdktf.stringToTerraform(this._wisp),
      wisp_algorithm: cdktf.stringToTerraform(this._wispAlgorithm),
      youtube_channel_status: cdktf.stringToTerraform(this._youtubeChannelStatus),
      antiphish: webfilterProfileAntiphishToTerraform(this._antiphish.internalValue),
      file_filter: webfilterProfileFileFilterToTerraform(this._fileFilter.internalValue),
      ftgd_wf: webfilterProfileFtgdWfToTerraform(this._ftgdWf.internalValue),
      override: webfilterProfileOverrideToTerraform(this._override.internalValue),
      web: webfilterProfileWebToTerraform(this._web.internalValue),
      wisp_servers: cdktf.listMapper(webfilterProfileWispServersToTerraform, true)(this._wispServers.internalValue),
      youtube_channel_filter: cdktf.listMapper(webfilterProfileYoutubeChannelFilterToTerraform, true)(this._youtubeChannelFilter.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      comment: {
        value: cdktf.stringToHclTerraform(this._comment),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dynamic_sort_subtable: {
        value: cdktf.stringToHclTerraform(this._dynamicSortSubtable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      extended_log: {
        value: cdktf.stringToHclTerraform(this._extendedLog),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      feature_set: {
        value: cdktf.stringToHclTerraform(this._featureSet),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      get_all_tables: {
        value: cdktf.stringToHclTerraform(this._getAllTables),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      https_replacemsg: {
        value: cdktf.stringToHclTerraform(this._httpsReplacemsg),
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
      inspection_mode: {
        value: cdktf.stringToHclTerraform(this._inspectionMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      log_all_url: {
        value: cdktf.stringToHclTerraform(this._logAllUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      options: {
        value: cdktf.stringToHclTerraform(this._options),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ovrd_perm: {
        value: cdktf.stringToHclTerraform(this._ovrdPerm),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      post_action: {
        value: cdktf.stringToHclTerraform(this._postAction),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      replacemsg_group: {
        value: cdktf.stringToHclTerraform(this._replacemsgGroup),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vdomparam: {
        value: cdktf.stringToHclTerraform(this._vdomparam),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      web_antiphishing_log: {
        value: cdktf.stringToHclTerraform(this._webAntiphishingLog),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      web_content_log: {
        value: cdktf.stringToHclTerraform(this._webContentLog),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      web_extended_all_action_log: {
        value: cdktf.stringToHclTerraform(this._webExtendedAllActionLog),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      web_filter_activex_log: {
        value: cdktf.stringToHclTerraform(this._webFilterActivexLog),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      web_filter_applet_log: {
        value: cdktf.stringToHclTerraform(this._webFilterAppletLog),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      web_filter_command_block_log: {
        value: cdktf.stringToHclTerraform(this._webFilterCommandBlockLog),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      web_filter_cookie_log: {
        value: cdktf.stringToHclTerraform(this._webFilterCookieLog),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      web_filter_cookie_removal_log: {
        value: cdktf.stringToHclTerraform(this._webFilterCookieRemovalLog),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      web_filter_js_log: {
        value: cdktf.stringToHclTerraform(this._webFilterJsLog),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      web_filter_jscript_log: {
        value: cdktf.stringToHclTerraform(this._webFilterJscriptLog),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      web_filter_referer_log: {
        value: cdktf.stringToHclTerraform(this._webFilterRefererLog),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      web_filter_unknown_log: {
        value: cdktf.stringToHclTerraform(this._webFilterUnknownLog),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      web_filter_vbs_log: {
        value: cdktf.stringToHclTerraform(this._webFilterVbsLog),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      web_flow_log_encoding: {
        value: cdktf.stringToHclTerraform(this._webFlowLogEncoding),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      web_ftgd_err_log: {
        value: cdktf.stringToHclTerraform(this._webFtgdErrLog),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      web_ftgd_quota_usage: {
        value: cdktf.stringToHclTerraform(this._webFtgdQuotaUsage),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      web_invalid_domain_log: {
        value: cdktf.stringToHclTerraform(this._webInvalidDomainLog),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      web_url_log: {
        value: cdktf.stringToHclTerraform(this._webUrlLog),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      wisp: {
        value: cdktf.stringToHclTerraform(this._wisp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      wisp_algorithm: {
        value: cdktf.stringToHclTerraform(this._wispAlgorithm),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      youtube_channel_status: {
        value: cdktf.stringToHclTerraform(this._youtubeChannelStatus),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      antiphish: {
        value: webfilterProfileAntiphishToHclTerraform(this._antiphish.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "WebfilterProfileAntiphishList",
      },
      file_filter: {
        value: webfilterProfileFileFilterToHclTerraform(this._fileFilter.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "WebfilterProfileFileFilterList",
      },
      ftgd_wf: {
        value: webfilterProfileFtgdWfToHclTerraform(this._ftgdWf.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "WebfilterProfileFtgdWfList",
      },
      override: {
        value: webfilterProfileOverrideToHclTerraform(this._override.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "WebfilterProfileOverrideList",
      },
      web: {
        value: webfilterProfileWebToHclTerraform(this._web.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "WebfilterProfileWebList",
      },
      wisp_servers: {
        value: cdktf.listMapperHcl(webfilterProfileWispServersToHclTerraform, true)(this._wispServers.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "WebfilterProfileWispServersList",
      },
      youtube_channel_filter: {
        value: cdktf.listMapperHcl(webfilterProfileYoutubeChannelFilterToHclTerraform, true)(this._youtubeChannelFilter.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "WebfilterProfileYoutubeChannelFilterList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
