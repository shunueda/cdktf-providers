// https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_webfilter_profile_ftgdwf
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ObjectWebfilterProfileFtgdwfConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_webfilter_profile_ftgdwf#adom ObjectWebfilterProfileFtgdwf#adom}
  */
  readonly adom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_webfilter_profile_ftgdwf#dynamic_sort_subtable ObjectWebfilterProfileFtgdwf#dynamic_sort_subtable}
  */
  readonly dynamicSortSubtable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_webfilter_profile_ftgdwf#exempt_quota ObjectWebfilterProfileFtgdwf#exempt_quota}
  */
  readonly exemptQuota?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_webfilter_profile_ftgdwf#id ObjectWebfilterProfileFtgdwf#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_webfilter_profile_ftgdwf#max_quota_timeout ObjectWebfilterProfileFtgdwf#max_quota_timeout}
  */
  readonly maxQuotaTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_webfilter_profile_ftgdwf#options ObjectWebfilterProfileFtgdwf#options}
  */
  readonly options?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_webfilter_profile_ftgdwf#ovrd ObjectWebfilterProfileFtgdwf#ovrd}
  */
  readonly ovrd?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_webfilter_profile_ftgdwf#profile ObjectWebfilterProfileFtgdwf#profile}
  */
  readonly profile: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_webfilter_profile_ftgdwf#rate_crl_urls ObjectWebfilterProfileFtgdwf#rate_crl_urls}
  */
  readonly rateCrlUrls?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_webfilter_profile_ftgdwf#rate_css_urls ObjectWebfilterProfileFtgdwf#rate_css_urls}
  */
  readonly rateCssUrls?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_webfilter_profile_ftgdwf#rate_image_urls ObjectWebfilterProfileFtgdwf#rate_image_urls}
  */
  readonly rateImageUrls?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_webfilter_profile_ftgdwf#rate_javascript_urls ObjectWebfilterProfileFtgdwf#rate_javascript_urls}
  */
  readonly rateJavascriptUrls?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_webfilter_profile_ftgdwf#scopetype ObjectWebfilterProfileFtgdwf#scopetype}
  */
  readonly scopetype?: string;
  /**
  * filters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_webfilter_profile_ftgdwf#filters ObjectWebfilterProfileFtgdwf#filters}
  */
  readonly filters?: ObjectWebfilterProfileFtgdwfFilters[] | cdktf.IResolvable;
  /**
  * quota block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_webfilter_profile_ftgdwf#quota ObjectWebfilterProfileFtgdwf#quota}
  */
  readonly quota?: ObjectWebfilterProfileFtgdwfQuota[] | cdktf.IResolvable;
  /**
  * risk block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_webfilter_profile_ftgdwf#risk ObjectWebfilterProfileFtgdwf#risk}
  */
  readonly risk?: ObjectWebfilterProfileFtgdwfRisk[] | cdktf.IResolvable;
}
export interface ObjectWebfilterProfileFtgdwfFilters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_webfilter_profile_ftgdwf#action ObjectWebfilterProfileFtgdwf#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_webfilter_profile_ftgdwf#auth_usr_grp ObjectWebfilterProfileFtgdwf#auth_usr_grp}
  */
  readonly authUsrGrp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_webfilter_profile_ftgdwf#category ObjectWebfilterProfileFtgdwf#category}
  */
  readonly category?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_webfilter_profile_ftgdwf#id ObjectWebfilterProfileFtgdwf#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_webfilter_profile_ftgdwf#log ObjectWebfilterProfileFtgdwf#log}
  */
  readonly log?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_webfilter_profile_ftgdwf#override_replacemsg ObjectWebfilterProfileFtgdwf#override_replacemsg}
  */
  readonly overrideReplacemsg?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_webfilter_profile_ftgdwf#warn_duration ObjectWebfilterProfileFtgdwf#warn_duration}
  */
  readonly warnDuration?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_webfilter_profile_ftgdwf#warning_duration_type ObjectWebfilterProfileFtgdwf#warning_duration_type}
  */
  readonly warningDurationType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_webfilter_profile_ftgdwf#warning_prompt ObjectWebfilterProfileFtgdwf#warning_prompt}
  */
  readonly warningPrompt?: string;
}

export function objectWebfilterProfileFtgdwfFiltersToTerraform(struct?: ObjectWebfilterProfileFtgdwfFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    auth_usr_grp: cdktf.stringToTerraform(struct!.authUsrGrp),
    category: cdktf.stringToTerraform(struct!.category),
    id: cdktf.numberToTerraform(struct!.id),
    log: cdktf.stringToTerraform(struct!.log),
    override_replacemsg: cdktf.stringToTerraform(struct!.overrideReplacemsg),
    warn_duration: cdktf.stringToTerraform(struct!.warnDuration),
    warning_duration_type: cdktf.stringToTerraform(struct!.warningDurationType),
    warning_prompt: cdktf.stringToTerraform(struct!.warningPrompt),
  }
}


export function objectWebfilterProfileFtgdwfFiltersToHclTerraform(struct?: ObjectWebfilterProfileFtgdwfFilters | cdktf.IResolvable): any {
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
    auth_usr_grp: {
      value: cdktf.stringToHclTerraform(struct!.authUsrGrp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    category: {
      value: cdktf.stringToHclTerraform(struct!.category),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObjectWebfilterProfileFtgdwfFiltersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ObjectWebfilterProfileFtgdwfFilters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._authUsrGrp !== undefined) {
      hasAnyValues = true;
      internalValueResult.authUsrGrp = this._authUsrGrp;
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObjectWebfilterProfileFtgdwfFilters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._authUsrGrp = undefined;
      this._category = undefined;
      this._id = undefined;
      this._log = undefined;
      this._overrideReplacemsg = undefined;
      this._warnDuration = undefined;
      this._warningDurationType = undefined;
      this._warningPrompt = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._authUsrGrp = value.authUsrGrp;
      this._category = value.category;
      this._id = value.id;
      this._log = value.log;
      this._overrideReplacemsg = value.overrideReplacemsg;
      this._warnDuration = value.warnDuration;
      this._warningDurationType = value.warningDurationType;
      this._warningPrompt = value.warningPrompt;
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

  // auth_usr_grp - computed: false, optional: true, required: false
  private _authUsrGrp?: string; 
  public get authUsrGrp() {
    return this.getStringAttribute('auth_usr_grp');
  }
  public set authUsrGrp(value: string) {
    this._authUsrGrp = value;
  }
  public resetAuthUsrGrp() {
    this._authUsrGrp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authUsrGrpInput() {
    return this._authUsrGrp;
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

  // id - computed: false, optional: true, required: false
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

  // warn_duration - computed: false, optional: true, required: false
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

  // warning_duration_type - computed: false, optional: true, required: false
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

  // warning_prompt - computed: false, optional: true, required: false
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
}

export class ObjectWebfilterProfileFtgdwfFiltersList extends cdktf.ComplexList {
  public internalValue? : ObjectWebfilterProfileFtgdwfFilters[] | cdktf.IResolvable

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
  public get(index: number): ObjectWebfilterProfileFtgdwfFiltersOutputReference {
    return new ObjectWebfilterProfileFtgdwfFiltersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObjectWebfilterProfileFtgdwfQuota {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_webfilter_profile_ftgdwf#category ObjectWebfilterProfileFtgdwf#category}
  */
  readonly category?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_webfilter_profile_ftgdwf#duration ObjectWebfilterProfileFtgdwf#duration}
  */
  readonly duration?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_webfilter_profile_ftgdwf#id ObjectWebfilterProfileFtgdwf#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_webfilter_profile_ftgdwf#override_replacemsg ObjectWebfilterProfileFtgdwf#override_replacemsg}
  */
  readonly overrideReplacemsg?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_webfilter_profile_ftgdwf#type ObjectWebfilterProfileFtgdwf#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_webfilter_profile_ftgdwf#unit ObjectWebfilterProfileFtgdwf#unit}
  */
  readonly unit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_webfilter_profile_ftgdwf#value ObjectWebfilterProfileFtgdwf#value}
  */
  readonly value?: number;
}

export function objectWebfilterProfileFtgdwfQuotaToTerraform(struct?: ObjectWebfilterProfileFtgdwfQuota | cdktf.IResolvable): any {
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


export function objectWebfilterProfileFtgdwfQuotaToHclTerraform(struct?: ObjectWebfilterProfileFtgdwfQuota | cdktf.IResolvable): any {
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

export class ObjectWebfilterProfileFtgdwfQuotaOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ObjectWebfilterProfileFtgdwfQuota | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ObjectWebfilterProfileFtgdwfQuota | cdktf.IResolvable | undefined) {
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

  // duration - computed: false, optional: true, required: false
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

  // id - computed: false, optional: true, required: false
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

  // type - computed: false, optional: true, required: false
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

  // unit - computed: false, optional: true, required: false
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

  // value - computed: false, optional: true, required: false
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

export class ObjectWebfilterProfileFtgdwfQuotaList extends cdktf.ComplexList {
  public internalValue? : ObjectWebfilterProfileFtgdwfQuota[] | cdktf.IResolvable

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
  public get(index: number): ObjectWebfilterProfileFtgdwfQuotaOutputReference {
    return new ObjectWebfilterProfileFtgdwfQuotaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObjectWebfilterProfileFtgdwfRisk {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_webfilter_profile_ftgdwf#action ObjectWebfilterProfileFtgdwf#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_webfilter_profile_ftgdwf#id ObjectWebfilterProfileFtgdwf#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_webfilter_profile_ftgdwf#log ObjectWebfilterProfileFtgdwf#log}
  */
  readonly log?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_webfilter_profile_ftgdwf#risk_level ObjectWebfilterProfileFtgdwf#risk_level}
  */
  readonly riskLevel?: string[];
}

export function objectWebfilterProfileFtgdwfRiskToTerraform(struct?: ObjectWebfilterProfileFtgdwfRisk | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    id: cdktf.numberToTerraform(struct!.id),
    log: cdktf.stringToTerraform(struct!.log),
    risk_level: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.riskLevel),
  }
}


export function objectWebfilterProfileFtgdwfRiskToHclTerraform(struct?: ObjectWebfilterProfileFtgdwfRisk | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.riskLevel),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObjectWebfilterProfileFtgdwfRiskOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ObjectWebfilterProfileFtgdwfRisk | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ObjectWebfilterProfileFtgdwfRisk | cdktf.IResolvable | undefined) {
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

  // id - computed: false, optional: true, required: false
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

  // risk_level - computed: true, optional: true, required: false
  private _riskLevel?: string[]; 
  public get riskLevel() {
    return cdktf.Fn.tolist(this.getListAttribute('risk_level'));
  }
  public set riskLevel(value: string[]) {
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

export class ObjectWebfilterProfileFtgdwfRiskList extends cdktf.ComplexList {
  public internalValue? : ObjectWebfilterProfileFtgdwfRisk[] | cdktf.IResolvable

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
  public get(index: number): ObjectWebfilterProfileFtgdwfRiskOutputReference {
    return new ObjectWebfilterProfileFtgdwfRiskOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_webfilter_profile_ftgdwf fortimanager_object_webfilter_profile_ftgdwf}
*/
export class ObjectWebfilterProfileFtgdwf extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortimanager_object_webfilter_profile_ftgdwf";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ObjectWebfilterProfileFtgdwf resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ObjectWebfilterProfileFtgdwf to import
  * @param importFromId The id of the existing ObjectWebfilterProfileFtgdwf that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_webfilter_profile_ftgdwf#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ObjectWebfilterProfileFtgdwf to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortimanager_object_webfilter_profile_ftgdwf", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_webfilter_profile_ftgdwf fortimanager_object_webfilter_profile_ftgdwf} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ObjectWebfilterProfileFtgdwfConfig
  */
  public constructor(scope: Construct, id: string, config: ObjectWebfilterProfileFtgdwfConfig) {
    super(scope, id, {
      terraformResourceType: 'fortimanager_object_webfilter_profile_ftgdwf',
      terraformGeneratorMetadata: {
        providerName: 'fortimanager',
        providerVersion: '1.15.0',
        providerVersionConstraint: '1.15.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._adom = config.adom;
    this._dynamicSortSubtable = config.dynamicSortSubtable;
    this._exemptQuota = config.exemptQuota;
    this._id = config.id;
    this._maxQuotaTimeout = config.maxQuotaTimeout;
    this._options = config.options;
    this._ovrd = config.ovrd;
    this._profile = config.profile;
    this._rateCrlUrls = config.rateCrlUrls;
    this._rateCssUrls = config.rateCssUrls;
    this._rateImageUrls = config.rateImageUrls;
    this._rateJavascriptUrls = config.rateJavascriptUrls;
    this._scopetype = config.scopetype;
    this._filters.internalValue = config.filters;
    this._quota.internalValue = config.quota;
    this._risk.internalValue = config.risk;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // adom - computed: false, optional: true, required: false
  private _adom?: string; 
  public get adom() {
    return this.getStringAttribute('adom');
  }
  public set adom(value: string) {
    this._adom = value;
  }
  public resetAdom() {
    this._adom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adomInput() {
    return this._adom;
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

  // exempt_quota - computed: true, optional: true, required: false
  private _exemptQuota?: string[]; 
  public get exemptQuota() {
    return cdktf.Fn.tolist(this.getListAttribute('exempt_quota'));
  }
  public set exemptQuota(value: string[]) {
    this._exemptQuota = value;
  }
  public resetExemptQuota() {
    this._exemptQuota = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exemptQuotaInput() {
    return this._exemptQuota;
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
  private _options?: string[]; 
  public get options() {
    return cdktf.Fn.tolist(this.getListAttribute('options'));
  }
  public set options(value: string[]) {
    this._options = value;
  }
  public resetOptions() {
    this._options = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionsInput() {
    return this._options;
  }

  // ovrd - computed: true, optional: true, required: false
  private _ovrd?: string[]; 
  public get ovrd() {
    return cdktf.Fn.tolist(this.getListAttribute('ovrd'));
  }
  public set ovrd(value: string[]) {
    this._ovrd = value;
  }
  public resetOvrd() {
    this._ovrd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ovrdInput() {
    return this._ovrd;
  }

  // profile - computed: false, optional: false, required: true
  private _profile?: string; 
  public get profile() {
    return this.getStringAttribute('profile');
  }
  public set profile(value: string) {
    this._profile = value;
  }
  // Temporarily expose input value. Use with caution.
  public get profileInput() {
    return this._profile;
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

  // rate_image_urls - computed: true, optional: true, required: false
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

  // scopetype - computed: false, optional: true, required: false
  private _scopetype?: string; 
  public get scopetype() {
    return this.getStringAttribute('scopetype');
  }
  public set scopetype(value: string) {
    this._scopetype = value;
  }
  public resetScopetype() {
    this._scopetype = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopetypeInput() {
    return this._scopetype;
  }

  // filters - computed: false, optional: true, required: false
  private _filters = new ObjectWebfilterProfileFtgdwfFiltersList(this, "filters", false);
  public get filters() {
    return this._filters;
  }
  public putFilters(value: ObjectWebfilterProfileFtgdwfFilters[] | cdktf.IResolvable) {
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
  private _quota = new ObjectWebfilterProfileFtgdwfQuotaList(this, "quota", false);
  public get quota() {
    return this._quota;
  }
  public putQuota(value: ObjectWebfilterProfileFtgdwfQuota[] | cdktf.IResolvable) {
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
  private _risk = new ObjectWebfilterProfileFtgdwfRiskList(this, "risk", false);
  public get risk() {
    return this._risk;
  }
  public putRisk(value: ObjectWebfilterProfileFtgdwfRisk[] | cdktf.IResolvable) {
    this._risk.internalValue = value;
  }
  public resetRisk() {
    this._risk.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get riskInput() {
    return this._risk.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      adom: cdktf.stringToTerraform(this._adom),
      dynamic_sort_subtable: cdktf.stringToTerraform(this._dynamicSortSubtable),
      exempt_quota: cdktf.listMapper(cdktf.stringToTerraform, false)(this._exemptQuota),
      id: cdktf.stringToTerraform(this._id),
      max_quota_timeout: cdktf.numberToTerraform(this._maxQuotaTimeout),
      options: cdktf.listMapper(cdktf.stringToTerraform, false)(this._options),
      ovrd: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ovrd),
      profile: cdktf.stringToTerraform(this._profile),
      rate_crl_urls: cdktf.stringToTerraform(this._rateCrlUrls),
      rate_css_urls: cdktf.stringToTerraform(this._rateCssUrls),
      rate_image_urls: cdktf.stringToTerraform(this._rateImageUrls),
      rate_javascript_urls: cdktf.stringToTerraform(this._rateJavascriptUrls),
      scopetype: cdktf.stringToTerraform(this._scopetype),
      filters: cdktf.listMapper(objectWebfilterProfileFtgdwfFiltersToTerraform, true)(this._filters.internalValue),
      quota: cdktf.listMapper(objectWebfilterProfileFtgdwfQuotaToTerraform, true)(this._quota.internalValue),
      risk: cdktf.listMapper(objectWebfilterProfileFtgdwfRiskToTerraform, true)(this._risk.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      adom: {
        value: cdktf.stringToHclTerraform(this._adom),
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
      exempt_quota: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._exemptQuota),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_quota_timeout: {
        value: cdktf.numberToHclTerraform(this._maxQuotaTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      options: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._options),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      ovrd: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ovrd),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      profile: {
        value: cdktf.stringToHclTerraform(this._profile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rate_crl_urls: {
        value: cdktf.stringToHclTerraform(this._rateCrlUrls),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rate_css_urls: {
        value: cdktf.stringToHclTerraform(this._rateCssUrls),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rate_image_urls: {
        value: cdktf.stringToHclTerraform(this._rateImageUrls),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rate_javascript_urls: {
        value: cdktf.stringToHclTerraform(this._rateJavascriptUrls),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scopetype: {
        value: cdktf.stringToHclTerraform(this._scopetype),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      filters: {
        value: cdktf.listMapperHcl(objectWebfilterProfileFtgdwfFiltersToHclTerraform, true)(this._filters.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ObjectWebfilterProfileFtgdwfFiltersList",
      },
      quota: {
        value: cdktf.listMapperHcl(objectWebfilterProfileFtgdwfQuotaToHclTerraform, true)(this._quota.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ObjectWebfilterProfileFtgdwfQuotaList",
      },
      risk: {
        value: cdktf.listMapperHcl(objectWebfilterProfileFtgdwfRiskToHclTerraform, true)(this._risk.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ObjectWebfilterProfileFtgdwfRiskList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
