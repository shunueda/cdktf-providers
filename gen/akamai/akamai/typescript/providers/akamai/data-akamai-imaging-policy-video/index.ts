// https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/imaging_policy_video
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAkamaiImagingPolicyVideoConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/imaging_policy_video#id DataAkamaiImagingPolicyVideo#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/imaging_policy_video#policy DataAkamaiImagingPolicyVideo#policy}
  */
  readonly policy: DataAkamaiImagingPolicyVideoPolicy;
}
export interface DataAkamaiImagingPolicyVideoPolicyBreakpoints {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/imaging_policy_video#widths DataAkamaiImagingPolicyVideo#widths}
  */
  readonly widths?: number[];
}

export function dataAkamaiImagingPolicyVideoPolicyBreakpointsToTerraform(struct?: DataAkamaiImagingPolicyVideoPolicyBreakpointsOutputReference | DataAkamaiImagingPolicyVideoPolicyBreakpoints): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    widths: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.widths),
  }
}


export function dataAkamaiImagingPolicyVideoPolicyBreakpointsToHclTerraform(struct?: DataAkamaiImagingPolicyVideoPolicyBreakpointsOutputReference | DataAkamaiImagingPolicyVideoPolicyBreakpoints): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    widths: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.widths),
      isBlock: false,
      type: "list",
      storageClassType: "numberList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataAkamaiImagingPolicyVideoPolicyBreakpointsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataAkamaiImagingPolicyVideoPolicyBreakpoints | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._widths !== undefined) {
      hasAnyValues = true;
      internalValueResult.widths = this._widths;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAkamaiImagingPolicyVideoPolicyBreakpoints | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._widths = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._widths = value.widths;
    }
  }

  // widths - computed: false, optional: true, required: false
  private _widths?: number[]; 
  public get widths() {
    return this.getNumberListAttribute('widths');
  }
  public set widths(value: number[]) {
    this._widths = value;
  }
  public resetWidths() {
    this._widths = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get widthsInput() {
    return this._widths;
  }
}
export interface DataAkamaiImagingPolicyVideoPolicyOutput {
  /**
  * The quality of derivative videos. High preserves video quality with reduced byte savings while low reduces video quality to increase byte savings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/imaging_policy_video#perceptual_quality DataAkamaiImagingPolicyVideo#perceptual_quality}
  */
  readonly perceptualQuality?: string;
  /**
  * The quality of derivative videos. High preserves video quality with reduced byte savings while low reduces video quality to increase byte savings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/imaging_policy_video#perceptual_quality_var DataAkamaiImagingPolicyVideo#perceptual_quality_var}
  */
  readonly perceptualQualityVar?: string;
  /**
  * Allows you to add a specific placeholder video that appears when a user first requests a video, but before Image & Video Manager processes the video. If not specified the original video plays during the processing time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/imaging_policy_video#placeholder_video_url DataAkamaiImagingPolicyVideo#placeholder_video_url}
  */
  readonly placeholderVideoUrl?: string;
  /**
  * Allows you to add a specific placeholder video that appears when a user first requests a video, but before Image & Video Manager processes the video. If not specified the original video plays during the processing time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/imaging_policy_video#placeholder_video_url_var DataAkamaiImagingPolicyVideo#placeholder_video_url_var}
  */
  readonly placeholderVideoUrlVar?: string;
  /**
  * Override the quality of video to serve when Image & Video Manager detects a slow connection. Specifying lower values lets users with slow connections browse your site with reduced load times without impacting the quality of videos for users with faster connections.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/imaging_policy_video#video_adaptive_quality DataAkamaiImagingPolicyVideo#video_adaptive_quality}
  */
  readonly videoAdaptiveQuality?: string;
  /**
  * Override the quality of video to serve when Image & Video Manager detects a slow connection. Specifying lower values lets users with slow connections browse your site with reduced load times without impacting the quality of videos for users with faster connections.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/imaging_policy_video#video_adaptive_quality_var DataAkamaiImagingPolicyVideo#video_adaptive_quality_var}
  */
  readonly videoAdaptiveQualityVar?: string;
}

export function dataAkamaiImagingPolicyVideoPolicyOutputToTerraform(struct?: DataAkamaiImagingPolicyVideoPolicyOutputOutputReference | DataAkamaiImagingPolicyVideoPolicyOutput): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    perceptual_quality: cdktf.stringToTerraform(struct!.perceptualQuality),
    perceptual_quality_var: cdktf.stringToTerraform(struct!.perceptualQualityVar),
    placeholder_video_url: cdktf.stringToTerraform(struct!.placeholderVideoUrl),
    placeholder_video_url_var: cdktf.stringToTerraform(struct!.placeholderVideoUrlVar),
    video_adaptive_quality: cdktf.stringToTerraform(struct!.videoAdaptiveQuality),
    video_adaptive_quality_var: cdktf.stringToTerraform(struct!.videoAdaptiveQualityVar),
  }
}


export function dataAkamaiImagingPolicyVideoPolicyOutputToHclTerraform(struct?: DataAkamaiImagingPolicyVideoPolicyOutputOutputReference | DataAkamaiImagingPolicyVideoPolicyOutput): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    perceptual_quality: {
      value: cdktf.stringToHclTerraform(struct!.perceptualQuality),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    perceptual_quality_var: {
      value: cdktf.stringToHclTerraform(struct!.perceptualQualityVar),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    placeholder_video_url: {
      value: cdktf.stringToHclTerraform(struct!.placeholderVideoUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    placeholder_video_url_var: {
      value: cdktf.stringToHclTerraform(struct!.placeholderVideoUrlVar),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    video_adaptive_quality: {
      value: cdktf.stringToHclTerraform(struct!.videoAdaptiveQuality),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    video_adaptive_quality_var: {
      value: cdktf.stringToHclTerraform(struct!.videoAdaptiveQualityVar),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataAkamaiImagingPolicyVideoPolicyOutputOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataAkamaiImagingPolicyVideoPolicyOutput | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._perceptualQuality !== undefined) {
      hasAnyValues = true;
      internalValueResult.perceptualQuality = this._perceptualQuality;
    }
    if (this._perceptualQualityVar !== undefined) {
      hasAnyValues = true;
      internalValueResult.perceptualQualityVar = this._perceptualQualityVar;
    }
    if (this._placeholderVideoUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.placeholderVideoUrl = this._placeholderVideoUrl;
    }
    if (this._placeholderVideoUrlVar !== undefined) {
      hasAnyValues = true;
      internalValueResult.placeholderVideoUrlVar = this._placeholderVideoUrlVar;
    }
    if (this._videoAdaptiveQuality !== undefined) {
      hasAnyValues = true;
      internalValueResult.videoAdaptiveQuality = this._videoAdaptiveQuality;
    }
    if (this._videoAdaptiveQualityVar !== undefined) {
      hasAnyValues = true;
      internalValueResult.videoAdaptiveQualityVar = this._videoAdaptiveQualityVar;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAkamaiImagingPolicyVideoPolicyOutput | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._perceptualQuality = undefined;
      this._perceptualQualityVar = undefined;
      this._placeholderVideoUrl = undefined;
      this._placeholderVideoUrlVar = undefined;
      this._videoAdaptiveQuality = undefined;
      this._videoAdaptiveQualityVar = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._perceptualQuality = value.perceptualQuality;
      this._perceptualQualityVar = value.perceptualQualityVar;
      this._placeholderVideoUrl = value.placeholderVideoUrl;
      this._placeholderVideoUrlVar = value.placeholderVideoUrlVar;
      this._videoAdaptiveQuality = value.videoAdaptiveQuality;
      this._videoAdaptiveQualityVar = value.videoAdaptiveQualityVar;
    }
  }

  // perceptual_quality - computed: false, optional: true, required: false
  private _perceptualQuality?: string; 
  public get perceptualQuality() {
    return this.getStringAttribute('perceptual_quality');
  }
  public set perceptualQuality(value: string) {
    this._perceptualQuality = value;
  }
  public resetPerceptualQuality() {
    this._perceptualQuality = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get perceptualQualityInput() {
    return this._perceptualQuality;
  }

  // perceptual_quality_var - computed: false, optional: true, required: false
  private _perceptualQualityVar?: string; 
  public get perceptualQualityVar() {
    return this.getStringAttribute('perceptual_quality_var');
  }
  public set perceptualQualityVar(value: string) {
    this._perceptualQualityVar = value;
  }
  public resetPerceptualQualityVar() {
    this._perceptualQualityVar = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get perceptualQualityVarInput() {
    return this._perceptualQualityVar;
  }

  // placeholder_video_url - computed: false, optional: true, required: false
  private _placeholderVideoUrl?: string; 
  public get placeholderVideoUrl() {
    return this.getStringAttribute('placeholder_video_url');
  }
  public set placeholderVideoUrl(value: string) {
    this._placeholderVideoUrl = value;
  }
  public resetPlaceholderVideoUrl() {
    this._placeholderVideoUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get placeholderVideoUrlInput() {
    return this._placeholderVideoUrl;
  }

  // placeholder_video_url_var - computed: false, optional: true, required: false
  private _placeholderVideoUrlVar?: string; 
  public get placeholderVideoUrlVar() {
    return this.getStringAttribute('placeholder_video_url_var');
  }
  public set placeholderVideoUrlVar(value: string) {
    this._placeholderVideoUrlVar = value;
  }
  public resetPlaceholderVideoUrlVar() {
    this._placeholderVideoUrlVar = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get placeholderVideoUrlVarInput() {
    return this._placeholderVideoUrlVar;
  }

  // video_adaptive_quality - computed: false, optional: true, required: false
  private _videoAdaptiveQuality?: string; 
  public get videoAdaptiveQuality() {
    return this.getStringAttribute('video_adaptive_quality');
  }
  public set videoAdaptiveQuality(value: string) {
    this._videoAdaptiveQuality = value;
  }
  public resetVideoAdaptiveQuality() {
    this._videoAdaptiveQuality = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get videoAdaptiveQualityInput() {
    return this._videoAdaptiveQuality;
  }

  // video_adaptive_quality_var - computed: false, optional: true, required: false
  private _videoAdaptiveQualityVar?: string; 
  public get videoAdaptiveQualityVar() {
    return this.getStringAttribute('video_adaptive_quality_var');
  }
  public set videoAdaptiveQualityVar(value: string) {
    this._videoAdaptiveQualityVar = value;
  }
  public resetVideoAdaptiveQualityVar() {
    this._videoAdaptiveQualityVar = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get videoAdaptiveQualityVarInput() {
    return this._videoAdaptiveQualityVar;
  }
}
export interface DataAkamaiImagingPolicyVideoPolicyVariablesEnumOptions {
  /**
  * The unique identifier for each enum value, up to 50 alphanumeric characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/imaging_policy_video#id DataAkamaiImagingPolicyVideo#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * The value of the variable when the `id` is provided.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/imaging_policy_video#value DataAkamaiImagingPolicyVideo#value}
  */
  readonly value: string;
}

export function dataAkamaiImagingPolicyVideoPolicyVariablesEnumOptionsToTerraform(struct?: DataAkamaiImagingPolicyVideoPolicyVariablesEnumOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataAkamaiImagingPolicyVideoPolicyVariablesEnumOptionsToHclTerraform(struct?: DataAkamaiImagingPolicyVideoPolicyVariablesEnumOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
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

export class DataAkamaiImagingPolicyVideoPolicyVariablesEnumOptionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAkamaiImagingPolicyVideoPolicyVariablesEnumOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAkamaiImagingPolicyVideoPolicyVariablesEnumOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._value = value.value;
    }
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
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

export class DataAkamaiImagingPolicyVideoPolicyVariablesEnumOptionsList extends cdktf.ComplexList {
  public internalValue? : DataAkamaiImagingPolicyVideoPolicyVariablesEnumOptions[] | cdktf.IResolvable

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
  public get(index: number): DataAkamaiImagingPolicyVideoPolicyVariablesEnumOptionsOutputReference {
    return new DataAkamaiImagingPolicyVideoPolicyVariablesEnumOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAkamaiImagingPolicyVideoPolicyVariables {
  /**
  * The default value of the variable if no query parameter is provided. It needs to be one of the `enumOptions` if any are provided.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/imaging_policy_video#default_value DataAkamaiImagingPolicyVideo#default_value}
  */
  readonly defaultValue: string;
  /**
  * The name of the variable, also available as the query parameter name to set the variable's value dynamically. Use up to 50 alphanumeric characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/imaging_policy_video#name DataAkamaiImagingPolicyVideo#name}
  */
  readonly name: string;
  /**
  * A postfix added to the value provided for the variable, or to the default value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/imaging_policy_video#postfix DataAkamaiImagingPolicyVideo#postfix}
  */
  readonly postfix?: string;
  /**
  * A prefix added to the value provided for the variable, or to the default value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/imaging_policy_video#prefix DataAkamaiImagingPolicyVideo#prefix}
  */
  readonly prefix?: string;
  /**
  * The type of value for the variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/imaging_policy_video#type DataAkamaiImagingPolicyVideo#type}
  */
  readonly type: string;
  /**
  * enum_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/imaging_policy_video#enum_options DataAkamaiImagingPolicyVideo#enum_options}
  */
  readonly enumOptions?: DataAkamaiImagingPolicyVideoPolicyVariablesEnumOptions[] | cdktf.IResolvable;
}

export function dataAkamaiImagingPolicyVideoPolicyVariablesToTerraform(struct?: DataAkamaiImagingPolicyVideoPolicyVariables | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_value: cdktf.stringToTerraform(struct!.defaultValue),
    name: cdktf.stringToTerraform(struct!.name),
    postfix: cdktf.stringToTerraform(struct!.postfix),
    prefix: cdktf.stringToTerraform(struct!.prefix),
    type: cdktf.stringToTerraform(struct!.type),
    enum_options: cdktf.listMapper(dataAkamaiImagingPolicyVideoPolicyVariablesEnumOptionsToTerraform, true)(struct!.enumOptions),
  }
}


export function dataAkamaiImagingPolicyVideoPolicyVariablesToHclTerraform(struct?: DataAkamaiImagingPolicyVideoPolicyVariables | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_value: {
      value: cdktf.stringToHclTerraform(struct!.defaultValue),
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
    postfix: {
      value: cdktf.stringToHclTerraform(struct!.postfix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prefix: {
      value: cdktf.stringToHclTerraform(struct!.prefix),
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
    enum_options: {
      value: cdktf.listMapperHcl(dataAkamaiImagingPolicyVideoPolicyVariablesEnumOptionsToHclTerraform, true)(struct!.enumOptions),
      isBlock: true,
      type: "list",
      storageClassType: "DataAkamaiImagingPolicyVideoPolicyVariablesEnumOptionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataAkamaiImagingPolicyVideoPolicyVariablesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAkamaiImagingPolicyVideoPolicyVariables | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultValue = this._defaultValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._postfix !== undefined) {
      hasAnyValues = true;
      internalValueResult.postfix = this._postfix;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._enumOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.enumOptions = this._enumOptions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAkamaiImagingPolicyVideoPolicyVariables | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._defaultValue = undefined;
      this._name = undefined;
      this._postfix = undefined;
      this._prefix = undefined;
      this._type = undefined;
      this._enumOptions.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._defaultValue = value.defaultValue;
      this._name = value.name;
      this._postfix = value.postfix;
      this._prefix = value.prefix;
      this._type = value.type;
      this._enumOptions.internalValue = value.enumOptions;
    }
  }

  // default_value - computed: false, optional: false, required: true
  private _defaultValue?: string; 
  public get defaultValue() {
    return this.getStringAttribute('default_value');
  }
  public set defaultValue(value: string) {
    this._defaultValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultValueInput() {
    return this._defaultValue;
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

  // postfix - computed: false, optional: true, required: false
  private _postfix?: string; 
  public get postfix() {
    return this.getStringAttribute('postfix');
  }
  public set postfix(value: string) {
    this._postfix = value;
  }
  public resetPostfix() {
    this._postfix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get postfixInput() {
    return this._postfix;
  }

  // prefix - computed: false, optional: true, required: false
  private _prefix?: string; 
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string) {
    this._prefix = value;
  }
  public resetPrefix() {
    this._prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // enum_options - computed: false, optional: true, required: false
  private _enumOptions = new DataAkamaiImagingPolicyVideoPolicyVariablesEnumOptionsList(this, "enum_options", false);
  public get enumOptions() {
    return this._enumOptions;
  }
  public putEnumOptions(value: DataAkamaiImagingPolicyVideoPolicyVariablesEnumOptions[] | cdktf.IResolvable) {
    this._enumOptions.internalValue = value;
  }
  public resetEnumOptions() {
    this._enumOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enumOptionsInput() {
    return this._enumOptions.internalValue;
  }
}

export class DataAkamaiImagingPolicyVideoPolicyVariablesList extends cdktf.ComplexList {
  public internalValue? : DataAkamaiImagingPolicyVideoPolicyVariables[] | cdktf.IResolvable

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
  public get(index: number): DataAkamaiImagingPolicyVideoPolicyVariablesOutputReference {
    return new DataAkamaiImagingPolicyVideoPolicyVariablesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAkamaiImagingPolicyVideoPolicy {
  /**
  * Hosts that are allowed for image/video URLs within transformations or variables.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/imaging_policy_video#hosts DataAkamaiImagingPolicyVideo#hosts}
  */
  readonly hosts?: string[];
  /**
  * The amount of time in seconds that the policy takes to rollout. During the rollout an increasing proportion of images/videos will begin to use the new policy instead of the cached images/videos from the previous version. This value has no effect on the staging network.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/imaging_policy_video#rollout_duration DataAkamaiImagingPolicyVideo#rollout_duration}
  */
  readonly rolloutDuration?: string;
  /**
  * breakpoints block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/imaging_policy_video#breakpoints DataAkamaiImagingPolicyVideo#breakpoints}
  */
  readonly breakpoints?: DataAkamaiImagingPolicyVideoPolicyBreakpoints;
  /**
  * output block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/imaging_policy_video#output DataAkamaiImagingPolicyVideo#output}
  */
  readonly output?: DataAkamaiImagingPolicyVideoPolicyOutput;
  /**
  * variables block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/imaging_policy_video#variables DataAkamaiImagingPolicyVideo#variables}
  */
  readonly variables?: DataAkamaiImagingPolicyVideoPolicyVariables[] | cdktf.IResolvable;
}

export function dataAkamaiImagingPolicyVideoPolicyToTerraform(struct?: DataAkamaiImagingPolicyVideoPolicyOutputReference | DataAkamaiImagingPolicyVideoPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hosts: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.hosts),
    rollout_duration: cdktf.stringToTerraform(struct!.rolloutDuration),
    breakpoints: dataAkamaiImagingPolicyVideoPolicyBreakpointsToTerraform(struct!.breakpoints),
    output: dataAkamaiImagingPolicyVideoPolicyOutputToTerraform(struct!.output),
    variables: cdktf.listMapper(dataAkamaiImagingPolicyVideoPolicyVariablesToTerraform, true)(struct!.variables),
  }
}


export function dataAkamaiImagingPolicyVideoPolicyToHclTerraform(struct?: DataAkamaiImagingPolicyVideoPolicyOutputReference | DataAkamaiImagingPolicyVideoPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hosts: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.hosts),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    rollout_duration: {
      value: cdktf.stringToHclTerraform(struct!.rolloutDuration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    breakpoints: {
      value: dataAkamaiImagingPolicyVideoPolicyBreakpointsToHclTerraform(struct!.breakpoints),
      isBlock: true,
      type: "list",
      storageClassType: "DataAkamaiImagingPolicyVideoPolicyBreakpointsList",
    },
    output: {
      value: dataAkamaiImagingPolicyVideoPolicyOutputToHclTerraform(struct!.output),
      isBlock: true,
      type: "list",
      storageClassType: "DataAkamaiImagingPolicyVideoPolicyOutputList",
    },
    variables: {
      value: cdktf.listMapperHcl(dataAkamaiImagingPolicyVideoPolicyVariablesToHclTerraform, true)(struct!.variables),
      isBlock: true,
      type: "list",
      storageClassType: "DataAkamaiImagingPolicyVideoPolicyVariablesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataAkamaiImagingPolicyVideoPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataAkamaiImagingPolicyVideoPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hosts !== undefined) {
      hasAnyValues = true;
      internalValueResult.hosts = this._hosts;
    }
    if (this._rolloutDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.rolloutDuration = this._rolloutDuration;
    }
    if (this._breakpoints?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.breakpoints = this._breakpoints?.internalValue;
    }
    if (this._output?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.output = this._output?.internalValue;
    }
    if (this._variables?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.variables = this._variables?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAkamaiImagingPolicyVideoPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._hosts = undefined;
      this._rolloutDuration = undefined;
      this._breakpoints.internalValue = undefined;
      this._output.internalValue = undefined;
      this._variables.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._hosts = value.hosts;
      this._rolloutDuration = value.rolloutDuration;
      this._breakpoints.internalValue = value.breakpoints;
      this._output.internalValue = value.output;
      this._variables.internalValue = value.variables;
    }
  }

  // hosts - computed: false, optional: true, required: false
  private _hosts?: string[]; 
  public get hosts() {
    return this.getListAttribute('hosts');
  }
  public set hosts(value: string[]) {
    this._hosts = value;
  }
  public resetHosts() {
    this._hosts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostsInput() {
    return this._hosts;
  }

  // rollout_duration - computed: false, optional: true, required: false
  private _rolloutDuration?: string; 
  public get rolloutDuration() {
    return this.getStringAttribute('rollout_duration');
  }
  public set rolloutDuration(value: string) {
    this._rolloutDuration = value;
  }
  public resetRolloutDuration() {
    this._rolloutDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rolloutDurationInput() {
    return this._rolloutDuration;
  }

  // breakpoints - computed: false, optional: true, required: false
  private _breakpoints = new DataAkamaiImagingPolicyVideoPolicyBreakpointsOutputReference(this, "breakpoints");
  public get breakpoints() {
    return this._breakpoints;
  }
  public putBreakpoints(value: DataAkamaiImagingPolicyVideoPolicyBreakpoints) {
    this._breakpoints.internalValue = value;
  }
  public resetBreakpoints() {
    this._breakpoints.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get breakpointsInput() {
    return this._breakpoints.internalValue;
  }

  // output - computed: false, optional: true, required: false
  private _output = new DataAkamaiImagingPolicyVideoPolicyOutputOutputReference(this, "output");
  public get output() {
    return this._output;
  }
  public putOutput(value: DataAkamaiImagingPolicyVideoPolicyOutput) {
    this._output.internalValue = value;
  }
  public resetOutput() {
    this._output.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputInput() {
    return this._output.internalValue;
  }

  // variables - computed: false, optional: true, required: false
  private _variables = new DataAkamaiImagingPolicyVideoPolicyVariablesList(this, "variables", false);
  public get variables() {
    return this._variables;
  }
  public putVariables(value: DataAkamaiImagingPolicyVideoPolicyVariables[] | cdktf.IResolvable) {
    this._variables.internalValue = value;
  }
  public resetVariables() {
    this._variables.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get variablesInput() {
    return this._variables.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/imaging_policy_video akamai_imaging_policy_video}
*/
export class DataAkamaiImagingPolicyVideo extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "akamai_imaging_policy_video";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAkamaiImagingPolicyVideo resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAkamaiImagingPolicyVideo to import
  * @param importFromId The id of the existing DataAkamaiImagingPolicyVideo that should be imported. Refer to the {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/imaging_policy_video#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAkamaiImagingPolicyVideo to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "akamai_imaging_policy_video", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/imaging_policy_video akamai_imaging_policy_video} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAkamaiImagingPolicyVideoConfig
  */
  public constructor(scope: Construct, id: string, config: DataAkamaiImagingPolicyVideoConfig) {
    super(scope, id, {
      terraformResourceType: 'akamai_imaging_policy_video',
      terraformGeneratorMetadata: {
        providerName: 'akamai',
        providerVersion: '9.1.0',
        providerVersionConstraint: '9.1.0'
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
    this._policy.internalValue = config.policy;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // json - computed: true, optional: false, required: false
  public get json() {
    return this.getStringAttribute('json');
  }

  // policy - computed: false, optional: false, required: true
  private _policy = new DataAkamaiImagingPolicyVideoPolicyOutputReference(this, "policy");
  public get policy() {
    return this._policy;
  }
  public putPolicy(value: DataAkamaiImagingPolicyVideoPolicy) {
    this._policy.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get policyInput() {
    return this._policy.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      policy: dataAkamaiImagingPolicyVideoPolicyToTerraform(this._policy.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      policy: {
        value: dataAkamaiImagingPolicyVideoPolicyToHclTerraform(this._policy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataAkamaiImagingPolicyVideoPolicyList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
