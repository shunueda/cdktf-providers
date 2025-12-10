// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/mps_content_review_template
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MpsContentReviewTemplateConfig extends cdktf.TerraformMetaArguments {
  /**
  * Content review template description information, length limit: 256 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/mps_content_review_template#comment MpsContentReviewTemplate#comment}
  */
  readonly comment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/mps_content_review_template#id MpsContentReviewTemplate#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Content review template name, length limit: 64 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/mps_content_review_template#name MpsContentReviewTemplate#name}
  */
  readonly name?: string;
  /**
  * political_configure block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/mps_content_review_template#political_configure MpsContentReviewTemplate#political_configure}
  */
  readonly politicalConfigure?: MpsContentReviewTemplatePoliticalConfigure;
  /**
  * porn_configure block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/mps_content_review_template#porn_configure MpsContentReviewTemplate#porn_configure}
  */
  readonly pornConfigure?: MpsContentReviewTemplatePornConfigure;
  /**
  * prohibited_configure block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/mps_content_review_template#prohibited_configure MpsContentReviewTemplate#prohibited_configure}
  */
  readonly prohibitedConfigure?: MpsContentReviewTemplateProhibitedConfigure;
  /**
  * terrorism_configure block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/mps_content_review_template#terrorism_configure MpsContentReviewTemplate#terrorism_configure}
  */
  readonly terrorismConfigure?: MpsContentReviewTemplateTerrorismConfigure;
  /**
  * user_define_configure block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/mps_content_review_template#user_define_configure MpsContentReviewTemplate#user_define_configure}
  */
  readonly userDefineConfigure?: MpsContentReviewTemplateUserDefineConfigure;
}
export interface MpsContentReviewTemplatePoliticalConfigureAsrReviewInfo {
  /**
  * The score threshold for judging suspected violations. When the smart review reaches the score above, it is considered suspected violations. If it is not filled, the default is 100 points. Value range: 0~100.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/mps_content_review_template#block_confidence MpsContentReviewTemplate#block_confidence}
  */
  readonly blockConfidence?: number;
  /**
  * The score threshold for judging whether manual review is required for violations. When the intelligent review reaches the score above, it is considered that manual review is required. If it is not filled, the default is 75 points. Value range: 0~100.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/mps_content_review_template#review_confidence MpsContentReviewTemplate#review_confidence}
  */
  readonly reviewConfidence?: number;
  /**
  * Political asr task switch, optional value:ON/OFF.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/mps_content_review_template#switch MpsContentReviewTemplate#switch}
  */
  readonly switch: string;
}

export function mpsContentReviewTemplatePoliticalConfigureAsrReviewInfoToTerraform(struct?: MpsContentReviewTemplatePoliticalConfigureAsrReviewInfoOutputReference | MpsContentReviewTemplatePoliticalConfigureAsrReviewInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    block_confidence: cdktf.numberToTerraform(struct!.blockConfidence),
    review_confidence: cdktf.numberToTerraform(struct!.reviewConfidence),
    switch: cdktf.stringToTerraform(struct!.switch),
  }
}


export function mpsContentReviewTemplatePoliticalConfigureAsrReviewInfoToHclTerraform(struct?: MpsContentReviewTemplatePoliticalConfigureAsrReviewInfoOutputReference | MpsContentReviewTemplatePoliticalConfigureAsrReviewInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    block_confidence: {
      value: cdktf.numberToHclTerraform(struct!.blockConfidence),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    review_confidence: {
      value: cdktf.numberToHclTerraform(struct!.reviewConfidence),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    switch: {
      value: cdktf.stringToHclTerraform(struct!.switch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MpsContentReviewTemplatePoliticalConfigureAsrReviewInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MpsContentReviewTemplatePoliticalConfigureAsrReviewInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._blockConfidence !== undefined) {
      hasAnyValues = true;
      internalValueResult.blockConfidence = this._blockConfidence;
    }
    if (this._reviewConfidence !== undefined) {
      hasAnyValues = true;
      internalValueResult.reviewConfidence = this._reviewConfidence;
    }
    if (this._switch !== undefined) {
      hasAnyValues = true;
      internalValueResult.switch = this._switch;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MpsContentReviewTemplatePoliticalConfigureAsrReviewInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._blockConfidence = undefined;
      this._reviewConfidence = undefined;
      this._switch = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._blockConfidence = value.blockConfidence;
      this._reviewConfidence = value.reviewConfidence;
      this._switch = value.switch;
    }
  }

  // block_confidence - computed: false, optional: true, required: false
  private _blockConfidence?: number; 
  public get blockConfidence() {
    return this.getNumberAttribute('block_confidence');
  }
  public set blockConfidence(value: number) {
    this._blockConfidence = value;
  }
  public resetBlockConfidence() {
    this._blockConfidence = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockConfidenceInput() {
    return this._blockConfidence;
  }

  // review_confidence - computed: false, optional: true, required: false
  private _reviewConfidence?: number; 
  public get reviewConfidence() {
    return this.getNumberAttribute('review_confidence');
  }
  public set reviewConfidence(value: number) {
    this._reviewConfidence = value;
  }
  public resetReviewConfidence() {
    this._reviewConfidence = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reviewConfidenceInput() {
    return this._reviewConfidence;
  }

  // switch - computed: false, optional: false, required: true
  private _switch?: string; 
  public get switch() {
    return this.getStringAttribute('switch');
  }
  public set switch(value: string) {
    this._switch = value;
  }
  // Temporarily expose input value. Use with caution.
  public get switchInput() {
    return this._switch;
  }
}
export interface MpsContentReviewTemplatePoliticalConfigureImgReviewInfo {
  /**
  * The score threshold for judging suspected violations. When the smart review reaches the score above, it is considered suspected violations. If it is not filled, the default is 97 points. Value range: 0~100.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/mps_content_review_template#block_confidence MpsContentReviewTemplate#block_confidence}
  */
  readonly blockConfidence?: number;
  /**
  * Political image filter tag, if the review result contains the selected tag, the result will be returned, if the filter tag is empty, all the review results will be returned, the optional value is:violation_photo, politician, entertainment, sport, entrepreneur, scholar, celebrity, military.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/mps_content_review_template#label_set MpsContentReviewTemplate#label_set}
  */
  readonly labelSet?: string[];
  /**
  * The score threshold for judging whether manual review is required for violations. When the intelligent review reaches the score above, it is considered that manual review is required. If it is not filled, the default is 95 points. Value range: 0~100.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/mps_content_review_template#review_confidence MpsContentReviewTemplate#review_confidence}
  */
  readonly reviewConfidence?: number;
  /**
  * Political image task switch, optional value:ON/OFF.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/mps_content_review_template#switch MpsContentReviewTemplate#switch}
  */
  readonly switch: string;
}

export function mpsContentReviewTemplatePoliticalConfigureImgReviewInfoToTerraform(struct?: MpsContentReviewTemplatePoliticalConfigureImgReviewInfoOutputReference | MpsContentReviewTemplatePoliticalConfigureImgReviewInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    block_confidence: cdktf.numberToTerraform(struct!.blockConfidence),
    label_set: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.labelSet),
    review_confidence: cdktf.numberToTerraform(struct!.reviewConfidence),
    switch: cdktf.stringToTerraform(struct!.switch),
  }
}


export function mpsContentReviewTemplatePoliticalConfigureImgReviewInfoToHclTerraform(struct?: MpsContentReviewTemplatePoliticalConfigureImgReviewInfoOutputReference | MpsContentReviewTemplatePoliticalConfigureImgReviewInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    block_confidence: {
      value: cdktf.numberToHclTerraform(struct!.blockConfidence),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    label_set: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.labelSet),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    review_confidence: {
      value: cdktf.numberToHclTerraform(struct!.reviewConfidence),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    switch: {
      value: cdktf.stringToHclTerraform(struct!.switch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MpsContentReviewTemplatePoliticalConfigureImgReviewInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MpsContentReviewTemplatePoliticalConfigureImgReviewInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._blockConfidence !== undefined) {
      hasAnyValues = true;
      internalValueResult.blockConfidence = this._blockConfidence;
    }
    if (this._labelSet !== undefined) {
      hasAnyValues = true;
      internalValueResult.labelSet = this._labelSet;
    }
    if (this._reviewConfidence !== undefined) {
      hasAnyValues = true;
      internalValueResult.reviewConfidence = this._reviewConfidence;
    }
    if (this._switch !== undefined) {
      hasAnyValues = true;
      internalValueResult.switch = this._switch;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MpsContentReviewTemplatePoliticalConfigureImgReviewInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._blockConfidence = undefined;
      this._labelSet = undefined;
      this._reviewConfidence = undefined;
      this._switch = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._blockConfidence = value.blockConfidence;
      this._labelSet = value.labelSet;
      this._reviewConfidence = value.reviewConfidence;
      this._switch = value.switch;
    }
  }

  // block_confidence - computed: false, optional: true, required: false
  private _blockConfidence?: number; 
  public get blockConfidence() {
    return this.getNumberAttribute('block_confidence');
  }
  public set blockConfidence(value: number) {
    this._blockConfidence = value;
  }
  public resetBlockConfidence() {
    this._blockConfidence = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockConfidenceInput() {
    return this._blockConfidence;
  }

  // label_set - computed: false, optional: true, required: false
  private _labelSet?: string[]; 
  public get labelSet() {
    return cdktf.Fn.tolist(this.getListAttribute('label_set'));
  }
  public set labelSet(value: string[]) {
    this._labelSet = value;
  }
  public resetLabelSet() {
    this._labelSet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelSetInput() {
    return this._labelSet;
  }

  // review_confidence - computed: false, optional: true, required: false
  private _reviewConfidence?: number; 
  public get reviewConfidence() {
    return this.getNumberAttribute('review_confidence');
  }
  public set reviewConfidence(value: number) {
    this._reviewConfidence = value;
  }
  public resetReviewConfidence() {
    this._reviewConfidence = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reviewConfidenceInput() {
    return this._reviewConfidence;
  }

  // switch - computed: false, optional: false, required: true
  private _switch?: string; 
  public get switch() {
    return this.getStringAttribute('switch');
  }
  public set switch(value: string) {
    this._switch = value;
  }
  // Temporarily expose input value. Use with caution.
  public get switchInput() {
    return this._switch;
  }
}
export interface MpsContentReviewTemplatePoliticalConfigureOcrReviewInfo {
  /**
  * The score threshold for judging suspected violations. When the smart review reaches the score above, it is considered suspected violations. If it is not filled, the default is 100 points. Value range: 0~100.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/mps_content_review_template#block_confidence MpsContentReviewTemplate#block_confidence}
  */
  readonly blockConfidence?: number;
  /**
  * The score threshold for judging whether manual review is required for violations. When the intelligent review reaches the score above, it is considered that manual review is required. If it is not filled, the default is 75 points. Value range: 0~100.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/mps_content_review_template#review_confidence MpsContentReviewTemplate#review_confidence}
  */
  readonly reviewConfidence?: number;
  /**
  * Political ocr task switch, optional value:ON/OFF.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/mps_content_review_template#switch MpsContentReviewTemplate#switch}
  */
  readonly switch: string;
}

export function mpsContentReviewTemplatePoliticalConfigureOcrReviewInfoToTerraform(struct?: MpsContentReviewTemplatePoliticalConfigureOcrReviewInfoOutputReference | MpsContentReviewTemplatePoliticalConfigureOcrReviewInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    block_confidence: cdktf.numberToTerraform(struct!.blockConfidence),
    review_confidence: cdktf.numberToTerraform(struct!.reviewConfidence),
    switch: cdktf.stringToTerraform(struct!.switch),
  }
}


export function mpsContentReviewTemplatePoliticalConfigureOcrReviewInfoToHclTerraform(struct?: MpsContentReviewTemplatePoliticalConfigureOcrReviewInfoOutputReference | MpsContentReviewTemplatePoliticalConfigureOcrReviewInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    block_confidence: {
      value: cdktf.numberToHclTerraform(struct!.blockConfidence),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    review_confidence: {
      value: cdktf.numberToHclTerraform(struct!.reviewConfidence),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    switch: {
      value: cdktf.stringToHclTerraform(struct!.switch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MpsContentReviewTemplatePoliticalConfigureOcrReviewInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MpsContentReviewTemplatePoliticalConfigureOcrReviewInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._blockConfidence !== undefined) {
      hasAnyValues = true;
      internalValueResult.blockConfidence = this._blockConfidence;
    }
    if (this._reviewConfidence !== undefined) {
      hasAnyValues = true;
      internalValueResult.reviewConfidence = this._reviewConfidence;
    }
    if (this._switch !== undefined) {
      hasAnyValues = true;
      internalValueResult.switch = this._switch;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MpsContentReviewTemplatePoliticalConfigureOcrReviewInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._blockConfidence = undefined;
      this._reviewConfidence = undefined;
      this._switch = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._blockConfidence = value.blockConfidence;
      this._reviewConfidence = value.reviewConfidence;
      this._switch = value.switch;
    }
  }

  // block_confidence - computed: false, optional: true, required: false
  private _blockConfidence?: number; 
  public get blockConfidence() {
    return this.getNumberAttribute('block_confidence');
  }
  public set blockConfidence(value: number) {
    this._blockConfidence = value;
  }
  public resetBlockConfidence() {
    this._blockConfidence = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockConfidenceInput() {
    return this._blockConfidence;
  }

  // review_confidence - computed: false, optional: true, required: false
  private _reviewConfidence?: number; 
  public get reviewConfidence() {
    return this.getNumberAttribute('review_confidence');
  }
  public set reviewConfidence(value: number) {
    this._reviewConfidence = value;
  }
  public resetReviewConfidence() {
    this._reviewConfidence = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reviewConfidenceInput() {
    return this._reviewConfidence;
  }

  // switch - computed: false, optional: false, required: true
  private _switch?: string; 
  public get switch() {
    return this.getStringAttribute('switch');
  }
  public set switch(value: string) {
    this._switch = value;
  }
  // Temporarily expose input value. Use with caution.
  public get switchInput() {
    return this._switch;
  }
}
export interface MpsContentReviewTemplatePoliticalConfigure {
  /**
  * asr_review_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/mps_content_review_template#asr_review_info MpsContentReviewTemplate#asr_review_info}
  */
  readonly asrReviewInfo?: MpsContentReviewTemplatePoliticalConfigureAsrReviewInfo;
  /**
  * img_review_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/mps_content_review_template#img_review_info MpsContentReviewTemplate#img_review_info}
  */
  readonly imgReviewInfo?: MpsContentReviewTemplatePoliticalConfigureImgReviewInfo;
  /**
  * ocr_review_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/mps_content_review_template#ocr_review_info MpsContentReviewTemplate#ocr_review_info}
  */
  readonly ocrReviewInfo?: MpsContentReviewTemplatePoliticalConfigureOcrReviewInfo;
}

export function mpsContentReviewTemplatePoliticalConfigureToTerraform(struct?: MpsContentReviewTemplatePoliticalConfigureOutputReference | MpsContentReviewTemplatePoliticalConfigure): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    asr_review_info: mpsContentReviewTemplatePoliticalConfigureAsrReviewInfoToTerraform(struct!.asrReviewInfo),
    img_review_info: mpsContentReviewTemplatePoliticalConfigureImgReviewInfoToTerraform(struct!.imgReviewInfo),
    ocr_review_info: mpsContentReviewTemplatePoliticalConfigureOcrReviewInfoToTerraform(struct!.ocrReviewInfo),
  }
}


export function mpsContentReviewTemplatePoliticalConfigureToHclTerraform(struct?: MpsContentReviewTemplatePoliticalConfigureOutputReference | MpsContentReviewTemplatePoliticalConfigure): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    asr_review_info: {
      value: mpsContentReviewTemplatePoliticalConfigureAsrReviewInfoToHclTerraform(struct!.asrReviewInfo),
      isBlock: true,
      type: "list",
      storageClassType: "MpsContentReviewTemplatePoliticalConfigureAsrReviewInfoList",
    },
    img_review_info: {
      value: mpsContentReviewTemplatePoliticalConfigureImgReviewInfoToHclTerraform(struct!.imgReviewInfo),
      isBlock: true,
      type: "list",
      storageClassType: "MpsContentReviewTemplatePoliticalConfigureImgReviewInfoList",
    },
    ocr_review_info: {
      value: mpsContentReviewTemplatePoliticalConfigureOcrReviewInfoToHclTerraform(struct!.ocrReviewInfo),
      isBlock: true,
      type: "list",
      storageClassType: "MpsContentReviewTemplatePoliticalConfigureOcrReviewInfoList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MpsContentReviewTemplatePoliticalConfigureOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MpsContentReviewTemplatePoliticalConfigure | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._asrReviewInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.asrReviewInfo = this._asrReviewInfo?.internalValue;
    }
    if (this._imgReviewInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.imgReviewInfo = this._imgReviewInfo?.internalValue;
    }
    if (this._ocrReviewInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ocrReviewInfo = this._ocrReviewInfo?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MpsContentReviewTemplatePoliticalConfigure | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._asrReviewInfo.internalValue = undefined;
      this._imgReviewInfo.internalValue = undefined;
      this._ocrReviewInfo.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._asrReviewInfo.internalValue = value.asrReviewInfo;
      this._imgReviewInfo.internalValue = value.imgReviewInfo;
      this._ocrReviewInfo.internalValue = value.ocrReviewInfo;
    }
  }

  // asr_review_info - computed: false, optional: true, required: false
  private _asrReviewInfo = new MpsContentReviewTemplatePoliticalConfigureAsrReviewInfoOutputReference(this, "asr_review_info");
  public get asrReviewInfo() {
    return this._asrReviewInfo;
  }
  public putAsrReviewInfo(value: MpsContentReviewTemplatePoliticalConfigureAsrReviewInfo) {
    this._asrReviewInfo.internalValue = value;
  }
  public resetAsrReviewInfo() {
    this._asrReviewInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asrReviewInfoInput() {
    return this._asrReviewInfo.internalValue;
  }

  // img_review_info - computed: false, optional: true, required: false
  private _imgReviewInfo = new MpsContentReviewTemplatePoliticalConfigureImgReviewInfoOutputReference(this, "img_review_info");
  public get imgReviewInfo() {
    return this._imgReviewInfo;
  }
  public putImgReviewInfo(value: MpsContentReviewTemplatePoliticalConfigureImgReviewInfo) {
    this._imgReviewInfo.internalValue = value;
  }
  public resetImgReviewInfo() {
    this._imgReviewInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imgReviewInfoInput() {
    return this._imgReviewInfo.internalValue;
  }

  // ocr_review_info - computed: false, optional: true, required: false
  private _ocrReviewInfo = new MpsContentReviewTemplatePoliticalConfigureOcrReviewInfoOutputReference(this, "ocr_review_info");
  public get ocrReviewInfo() {
    return this._ocrReviewInfo;
  }
  public putOcrReviewInfo(value: MpsContentReviewTemplatePoliticalConfigureOcrReviewInfo) {
    this._ocrReviewInfo.internalValue = value;
  }
  public resetOcrReviewInfo() {
    this._ocrReviewInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ocrReviewInfoInput() {
    return this._ocrReviewInfo.internalValue;
  }
}
export interface MpsContentReviewTemplatePornConfigureAsrReviewInfo {
  /**
  * The score threshold for judging suspected violations. When the smart review reaches the score above, it is considered suspected violations. If it is not filled, the default is 100 points. Value range: 0~100.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/mps_content_review_template#block_confidence MpsContentReviewTemplate#block_confidence}
  */
  readonly blockConfidence?: number;
  /**
  * The score threshold for judging whether manual review is required for violations. When the intelligent review reaches the score above, it is considered that manual review is required. If it is not filled, the default is 75 points. Value range: 0~100.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/mps_content_review_template#review_confidence MpsContentReviewTemplate#review_confidence}
  */
  readonly reviewConfidence?: number;
  /**
  * Voice pornography task switch, optional value:ON/OFF.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/mps_content_review_template#switch MpsContentReviewTemplate#switch}
  */
  readonly switch: string;
}

export function mpsContentReviewTemplatePornConfigureAsrReviewInfoToTerraform(struct?: MpsContentReviewTemplatePornConfigureAsrReviewInfoOutputReference | MpsContentReviewTemplatePornConfigureAsrReviewInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    block_confidence: cdktf.numberToTerraform(struct!.blockConfidence),
    review_confidence: cdktf.numberToTerraform(struct!.reviewConfidence),
    switch: cdktf.stringToTerraform(struct!.switch),
  }
}


export function mpsContentReviewTemplatePornConfigureAsrReviewInfoToHclTerraform(struct?: MpsContentReviewTemplatePornConfigureAsrReviewInfoOutputReference | MpsContentReviewTemplatePornConfigureAsrReviewInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    block_confidence: {
      value: cdktf.numberToHclTerraform(struct!.blockConfidence),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    review_confidence: {
      value: cdktf.numberToHclTerraform(struct!.reviewConfidence),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    switch: {
      value: cdktf.stringToHclTerraform(struct!.switch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MpsContentReviewTemplatePornConfigureAsrReviewInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MpsContentReviewTemplatePornConfigureAsrReviewInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._blockConfidence !== undefined) {
      hasAnyValues = true;
      internalValueResult.blockConfidence = this._blockConfidence;
    }
    if (this._reviewConfidence !== undefined) {
      hasAnyValues = true;
      internalValueResult.reviewConfidence = this._reviewConfidence;
    }
    if (this._switch !== undefined) {
      hasAnyValues = true;
      internalValueResult.switch = this._switch;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MpsContentReviewTemplatePornConfigureAsrReviewInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._blockConfidence = undefined;
      this._reviewConfidence = undefined;
      this._switch = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._blockConfidence = value.blockConfidence;
      this._reviewConfidence = value.reviewConfidence;
      this._switch = value.switch;
    }
  }

  // block_confidence - computed: false, optional: true, required: false
  private _blockConfidence?: number; 
  public get blockConfidence() {
    return this.getNumberAttribute('block_confidence');
  }
  public set blockConfidence(value: number) {
    this._blockConfidence = value;
  }
  public resetBlockConfidence() {
    this._blockConfidence = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockConfidenceInput() {
    return this._blockConfidence;
  }

  // review_confidence - computed: false, optional: true, required: false
  private _reviewConfidence?: number; 
  public get reviewConfidence() {
    return this.getNumberAttribute('review_confidence');
  }
  public set reviewConfidence(value: number) {
    this._reviewConfidence = value;
  }
  public resetReviewConfidence() {
    this._reviewConfidence = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reviewConfidenceInput() {
    return this._reviewConfidence;
  }

  // switch - computed: false, optional: false, required: true
  private _switch?: string; 
  public get switch() {
    return this.getStringAttribute('switch');
  }
  public set switch(value: string) {
    this._switch = value;
  }
  // Temporarily expose input value. Use with caution.
  public get switchInput() {
    return this._switch;
  }
}
export interface MpsContentReviewTemplatePornConfigureImgReviewInfo {
  /**
  * The score threshold for judging suspected violations. When the smart review reaches the score above, it is considered suspected violations. If it is not filled, the default is 90 points. Value range: 0~100.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/mps_content_review_template#block_confidence MpsContentReviewTemplate#block_confidence}
  */
  readonly blockConfidence?: number;
  /**
  * Porn image filter label, if the review result contains the selected label, the result will be returned. If the filter label is empty, all the review results will be returned. The optional value is:porn, vulgar, intimacy, sexy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/mps_content_review_template#label_set MpsContentReviewTemplate#label_set}
  */
  readonly labelSet?: string[];
  /**
  * The score threshold for judging whether manual review is required for violations. When the intelligent review reaches the score above, it is considered that manual review is required. If it is not filled, the default is 0. Value range: 0~100.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/mps_content_review_template#review_confidence MpsContentReviewTemplate#review_confidence}
  */
  readonly reviewConfidence?: number;
  /**
  * Porn screen task switch, optional value:ON/OFF.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/mps_content_review_template#switch MpsContentReviewTemplate#switch}
  */
  readonly switch: string;
}

export function mpsContentReviewTemplatePornConfigureImgReviewInfoToTerraform(struct?: MpsContentReviewTemplatePornConfigureImgReviewInfoOutputReference | MpsContentReviewTemplatePornConfigureImgReviewInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    block_confidence: cdktf.numberToTerraform(struct!.blockConfidence),
    label_set: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.labelSet),
    review_confidence: cdktf.numberToTerraform(struct!.reviewConfidence),
    switch: cdktf.stringToTerraform(struct!.switch),
  }
}


export function mpsContentReviewTemplatePornConfigureImgReviewInfoToHclTerraform(struct?: MpsContentReviewTemplatePornConfigureImgReviewInfoOutputReference | MpsContentReviewTemplatePornConfigureImgReviewInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    block_confidence: {
      value: cdktf.numberToHclTerraform(struct!.blockConfidence),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    label_set: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.labelSet),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    review_confidence: {
      value: cdktf.numberToHclTerraform(struct!.reviewConfidence),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    switch: {
      value: cdktf.stringToHclTerraform(struct!.switch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MpsContentReviewTemplatePornConfigureImgReviewInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MpsContentReviewTemplatePornConfigureImgReviewInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._blockConfidence !== undefined) {
      hasAnyValues = true;
      internalValueResult.blockConfidence = this._blockConfidence;
    }
    if (this._labelSet !== undefined) {
      hasAnyValues = true;
      internalValueResult.labelSet = this._labelSet;
    }
    if (this._reviewConfidence !== undefined) {
      hasAnyValues = true;
      internalValueResult.reviewConfidence = this._reviewConfidence;
    }
    if (this._switch !== undefined) {
      hasAnyValues = true;
      internalValueResult.switch = this._switch;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MpsContentReviewTemplatePornConfigureImgReviewInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._blockConfidence = undefined;
      this._labelSet = undefined;
      this._reviewConfidence = undefined;
      this._switch = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._blockConfidence = value.blockConfidence;
      this._labelSet = value.labelSet;
      this._reviewConfidence = value.reviewConfidence;
      this._switch = value.switch;
    }
  }

  // block_confidence - computed: false, optional: true, required: false
  private _blockConfidence?: number; 
  public get blockConfidence() {
    return this.getNumberAttribute('block_confidence');
  }
  public set blockConfidence(value: number) {
    this._blockConfidence = value;
  }
  public resetBlockConfidence() {
    this._blockConfidence = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockConfidenceInput() {
    return this._blockConfidence;
  }

  // label_set - computed: false, optional: true, required: false
  private _labelSet?: string[]; 
  public get labelSet() {
    return cdktf.Fn.tolist(this.getListAttribute('label_set'));
  }
  public set labelSet(value: string[]) {
    this._labelSet = value;
  }
  public resetLabelSet() {
    this._labelSet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelSetInput() {
    return this._labelSet;
  }

  // review_confidence - computed: false, optional: true, required: false
  private _reviewConfidence?: number; 
  public get reviewConfidence() {
    return this.getNumberAttribute('review_confidence');
  }
  public set reviewConfidence(value: number) {
    this._reviewConfidence = value;
  }
  public resetReviewConfidence() {
    this._reviewConfidence = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reviewConfidenceInput() {
    return this._reviewConfidence;
  }

  // switch - computed: false, optional: false, required: true
  private _switch?: string; 
  public get switch() {
    return this.getStringAttribute('switch');
  }
  public set switch(value: string) {
    this._switch = value;
  }
  // Temporarily expose input value. Use with caution.
  public get switchInput() {
    return this._switch;
  }
}
export interface MpsContentReviewTemplatePornConfigureOcrReviewInfo {
  /**
  * The score threshold for judging suspected violations. When the smart review reaches the score above, it is considered suspected violations. If it is not filled, the default is 100 points. Value range: 0~100.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/mps_content_review_template#block_confidence MpsContentReviewTemplate#block_confidence}
  */
  readonly blockConfidence?: number;
  /**
  * The score threshold for judging whether manual review is required for violations. When the intelligent review reaches the score above, it is considered that manual review is required. If it is not filled, the default is 75 points. Value range: 0~100.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/mps_content_review_template#review_confidence MpsContentReviewTemplate#review_confidence}
  */
  readonly reviewConfidence?: number;
  /**
  * Ocr pornography task switch, optional value:ON/OFF.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/mps_content_review_template#switch MpsContentReviewTemplate#switch}
  */
  readonly switch: string;
}

export function mpsContentReviewTemplatePornConfigureOcrReviewInfoToTerraform(struct?: MpsContentReviewTemplatePornConfigureOcrReviewInfoOutputReference | MpsContentReviewTemplatePornConfigureOcrReviewInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    block_confidence: cdktf.numberToTerraform(struct!.blockConfidence),
    review_confidence: cdktf.numberToTerraform(struct!.reviewConfidence),
    switch: cdktf.stringToTerraform(struct!.switch),
  }
}


export function mpsContentReviewTemplatePornConfigureOcrReviewInfoToHclTerraform(struct?: MpsContentReviewTemplatePornConfigureOcrReviewInfoOutputReference | MpsContentReviewTemplatePornConfigureOcrReviewInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    block_confidence: {
      value: cdktf.numberToHclTerraform(struct!.blockConfidence),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    review_confidence: {
      value: cdktf.numberToHclTerraform(struct!.reviewConfidence),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    switch: {
      value: cdktf.stringToHclTerraform(struct!.switch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MpsContentReviewTemplatePornConfigureOcrReviewInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MpsContentReviewTemplatePornConfigureOcrReviewInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._blockConfidence !== undefined) {
      hasAnyValues = true;
      internalValueResult.blockConfidence = this._blockConfidence;
    }
    if (this._reviewConfidence !== undefined) {
      hasAnyValues = true;
      internalValueResult.reviewConfidence = this._reviewConfidence;
    }
    if (this._switch !== undefined) {
      hasAnyValues = true;
      internalValueResult.switch = this._switch;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MpsContentReviewTemplatePornConfigureOcrReviewInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._blockConfidence = undefined;
      this._reviewConfidence = undefined;
      this._switch = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._blockConfidence = value.blockConfidence;
      this._reviewConfidence = value.reviewConfidence;
      this._switch = value.switch;
    }
  }

  // block_confidence - computed: false, optional: true, required: false
  private _blockConfidence?: number; 
  public get blockConfidence() {
    return this.getNumberAttribute('block_confidence');
  }
  public set blockConfidence(value: number) {
    this._blockConfidence = value;
  }
  public resetBlockConfidence() {
    this._blockConfidence = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockConfidenceInput() {
    return this._blockConfidence;
  }

  // review_confidence - computed: false, optional: true, required: false
  private _reviewConfidence?: number; 
  public get reviewConfidence() {
    return this.getNumberAttribute('review_confidence');
  }
  public set reviewConfidence(value: number) {
    this._reviewConfidence = value;
  }
  public resetReviewConfidence() {
    this._reviewConfidence = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reviewConfidenceInput() {
    return this._reviewConfidence;
  }

  // switch - computed: false, optional: false, required: true
  private _switch?: string; 
  public get switch() {
    return this.getStringAttribute('switch');
  }
  public set switch(value: string) {
    this._switch = value;
  }
  // Temporarily expose input value. Use with caution.
  public get switchInput() {
    return this._switch;
  }
}
export interface MpsContentReviewTemplatePornConfigure {
  /**
  * asr_review_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/mps_content_review_template#asr_review_info MpsContentReviewTemplate#asr_review_info}
  */
  readonly asrReviewInfo?: MpsContentReviewTemplatePornConfigureAsrReviewInfo;
  /**
  * img_review_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/mps_content_review_template#img_review_info MpsContentReviewTemplate#img_review_info}
  */
  readonly imgReviewInfo?: MpsContentReviewTemplatePornConfigureImgReviewInfo;
  /**
  * ocr_review_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/mps_content_review_template#ocr_review_info MpsContentReviewTemplate#ocr_review_info}
  */
  readonly ocrReviewInfo?: MpsContentReviewTemplatePornConfigureOcrReviewInfo;
}

export function mpsContentReviewTemplatePornConfigureToTerraform(struct?: MpsContentReviewTemplatePornConfigureOutputReference | MpsContentReviewTemplatePornConfigure): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    asr_review_info: mpsContentReviewTemplatePornConfigureAsrReviewInfoToTerraform(struct!.asrReviewInfo),
    img_review_info: mpsContentReviewTemplatePornConfigureImgReviewInfoToTerraform(struct!.imgReviewInfo),
    ocr_review_info: mpsContentReviewTemplatePornConfigureOcrReviewInfoToTerraform(struct!.ocrReviewInfo),
  }
}


export function mpsContentReviewTemplatePornConfigureToHclTerraform(struct?: MpsContentReviewTemplatePornConfigureOutputReference | MpsContentReviewTemplatePornConfigure): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    asr_review_info: {
      value: mpsContentReviewTemplatePornConfigureAsrReviewInfoToHclTerraform(struct!.asrReviewInfo),
      isBlock: true,
      type: "list",
      storageClassType: "MpsContentReviewTemplatePornConfigureAsrReviewInfoList",
    },
    img_review_info: {
      value: mpsContentReviewTemplatePornConfigureImgReviewInfoToHclTerraform(struct!.imgReviewInfo),
      isBlock: true,
      type: "list",
      storageClassType: "MpsContentReviewTemplatePornConfigureImgReviewInfoList",
    },
    ocr_review_info: {
      value: mpsContentReviewTemplatePornConfigureOcrReviewInfoToHclTerraform(struct!.ocrReviewInfo),
      isBlock: true,
      type: "list",
      storageClassType: "MpsContentReviewTemplatePornConfigureOcrReviewInfoList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MpsContentReviewTemplatePornConfigureOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MpsContentReviewTemplatePornConfigure | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._asrReviewInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.asrReviewInfo = this._asrReviewInfo?.internalValue;
    }
    if (this._imgReviewInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.imgReviewInfo = this._imgReviewInfo?.internalValue;
    }
    if (this._ocrReviewInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ocrReviewInfo = this._ocrReviewInfo?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MpsContentReviewTemplatePornConfigure | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._asrReviewInfo.internalValue = undefined;
      this._imgReviewInfo.internalValue = undefined;
      this._ocrReviewInfo.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._asrReviewInfo.internalValue = value.asrReviewInfo;
      this._imgReviewInfo.internalValue = value.imgReviewInfo;
      this._ocrReviewInfo.internalValue = value.ocrReviewInfo;
    }
  }

  // asr_review_info - computed: false, optional: true, required: false
  private _asrReviewInfo = new MpsContentReviewTemplatePornConfigureAsrReviewInfoOutputReference(this, "asr_review_info");
  public get asrReviewInfo() {
    return this._asrReviewInfo;
  }
  public putAsrReviewInfo(value: MpsContentReviewTemplatePornConfigureAsrReviewInfo) {
    this._asrReviewInfo.internalValue = value;
  }
  public resetAsrReviewInfo() {
    this._asrReviewInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asrReviewInfoInput() {
    return this._asrReviewInfo.internalValue;
  }

  // img_review_info - computed: false, optional: true, required: false
  private _imgReviewInfo = new MpsContentReviewTemplatePornConfigureImgReviewInfoOutputReference(this, "img_review_info");
  public get imgReviewInfo() {
    return this._imgReviewInfo;
  }
  public putImgReviewInfo(value: MpsContentReviewTemplatePornConfigureImgReviewInfo) {
    this._imgReviewInfo.internalValue = value;
  }
  public resetImgReviewInfo() {
    this._imgReviewInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imgReviewInfoInput() {
    return this._imgReviewInfo.internalValue;
  }

  // ocr_review_info - computed: false, optional: true, required: false
  private _ocrReviewInfo = new MpsContentReviewTemplatePornConfigureOcrReviewInfoOutputReference(this, "ocr_review_info");
  public get ocrReviewInfo() {
    return this._ocrReviewInfo;
  }
  public putOcrReviewInfo(value: MpsContentReviewTemplatePornConfigureOcrReviewInfo) {
    this._ocrReviewInfo.internalValue = value;
  }
  public resetOcrReviewInfo() {
    this._ocrReviewInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ocrReviewInfoInput() {
    return this._ocrReviewInfo.internalValue;
  }
}
export interface MpsContentReviewTemplateProhibitedConfigureAsrReviewInfo {
  /**
  * The score threshold for judging suspected violations. When the smart review reaches the score above, it is considered suspected violations. If it is not filled, the default is 100 points. Value range: 0~100.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/mps_content_review_template#block_confidence MpsContentReviewTemplate#block_confidence}
  */
  readonly blockConfidence?: number;
  /**
  * The score threshold for judging whether manual review is required for violations. When the intelligent review reaches the score above, it is considered that manual review is required. If it is not filled, the default is 75 points. Value range: 0~100.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/mps_content_review_template#review_confidence MpsContentReviewTemplate#review_confidence}
  */
  readonly reviewConfidence?: number;
  /**
  * Voice Prohibition task switch, optional value:ON/OFF.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/mps_content_review_template#switch MpsContentReviewTemplate#switch}
  */
  readonly switch: string;
}

export function mpsContentReviewTemplateProhibitedConfigureAsrReviewInfoToTerraform(struct?: MpsContentReviewTemplateProhibitedConfigureAsrReviewInfoOutputReference | MpsContentReviewTemplateProhibitedConfigureAsrReviewInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    block_confidence: cdktf.numberToTerraform(struct!.blockConfidence),
    review_confidence: cdktf.numberToTerraform(struct!.reviewConfidence),
    switch: cdktf.stringToTerraform(struct!.switch),
  }
}


export function mpsContentReviewTemplateProhibitedConfigureAsrReviewInfoToHclTerraform(struct?: MpsContentReviewTemplateProhibitedConfigureAsrReviewInfoOutputReference | MpsContentReviewTemplateProhibitedConfigureAsrReviewInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    block_confidence: {
      value: cdktf.numberToHclTerraform(struct!.blockConfidence),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    review_confidence: {
      value: cdktf.numberToHclTerraform(struct!.reviewConfidence),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    switch: {
      value: cdktf.stringToHclTerraform(struct!.switch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MpsContentReviewTemplateProhibitedConfigureAsrReviewInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MpsContentReviewTemplateProhibitedConfigureAsrReviewInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._blockConfidence !== undefined) {
      hasAnyValues = true;
      internalValueResult.blockConfidence = this._blockConfidence;
    }
    if (this._reviewConfidence !== undefined) {
      hasAnyValues = true;
      internalValueResult.reviewConfidence = this._reviewConfidence;
    }
    if (this._switch !== undefined) {
      hasAnyValues = true;
      internalValueResult.switch = this._switch;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MpsContentReviewTemplateProhibitedConfigureAsrReviewInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._blockConfidence = undefined;
      this._reviewConfidence = undefined;
      this._switch = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._blockConfidence = value.blockConfidence;
      this._reviewConfidence = value.reviewConfidence;
      this._switch = value.switch;
    }
  }

  // block_confidence - computed: false, optional: true, required: false
  private _blockConfidence?: number; 
  public get blockConfidence() {
    return this.getNumberAttribute('block_confidence');
  }
  public set blockConfidence(value: number) {
    this._blockConfidence = value;
  }
  public resetBlockConfidence() {
    this._blockConfidence = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockConfidenceInput() {
    return this._blockConfidence;
  }

  // review_confidence - computed: false, optional: true, required: false
  private _reviewConfidence?: number; 
  public get reviewConfidence() {
    return this.getNumberAttribute('review_confidence');
  }
  public set reviewConfidence(value: number) {
    this._reviewConfidence = value;
  }
  public resetReviewConfidence() {
    this._reviewConfidence = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reviewConfidenceInput() {
    return this._reviewConfidence;
  }

  // switch - computed: false, optional: false, required: true
  private _switch?: string; 
  public get switch() {
    return this.getStringAttribute('switch');
  }
  public set switch(value: string) {
    this._switch = value;
  }
  // Temporarily expose input value. Use with caution.
  public get switchInput() {
    return this._switch;
  }
}
export interface MpsContentReviewTemplateProhibitedConfigureOcrReviewInfo {
  /**
  * The score threshold for judging suspected violations. When the smart review reaches the score above, it is considered suspected violations. If it is not filled, the default is 100 points. Value range: 0~100.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/mps_content_review_template#block_confidence MpsContentReviewTemplate#block_confidence}
  */
  readonly blockConfidence?: number;
  /**
  * The score threshold for judging whether manual review is required for violations. When the intelligent review reaches the score above, it is considered that manual review is required. If it is not filled, the default is 75 points. Value range: 0~100.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/mps_content_review_template#review_confidence MpsContentReviewTemplate#review_confidence}
  */
  readonly reviewConfidence?: number;
  /**
  * Ocr Prohibition task switch, optional value:ON/OFF.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/mps_content_review_template#switch MpsContentReviewTemplate#switch}
  */
  readonly switch: string;
}

export function mpsContentReviewTemplateProhibitedConfigureOcrReviewInfoToTerraform(struct?: MpsContentReviewTemplateProhibitedConfigureOcrReviewInfoOutputReference | MpsContentReviewTemplateProhibitedConfigureOcrReviewInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    block_confidence: cdktf.numberToTerraform(struct!.blockConfidence),
    review_confidence: cdktf.numberToTerraform(struct!.reviewConfidence),
    switch: cdktf.stringToTerraform(struct!.switch),
  }
}


export function mpsContentReviewTemplateProhibitedConfigureOcrReviewInfoToHclTerraform(struct?: MpsContentReviewTemplateProhibitedConfigureOcrReviewInfoOutputReference | MpsContentReviewTemplateProhibitedConfigureOcrReviewInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    block_confidence: {
      value: cdktf.numberToHclTerraform(struct!.blockConfidence),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    review_confidence: {
      value: cdktf.numberToHclTerraform(struct!.reviewConfidence),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    switch: {
      value: cdktf.stringToHclTerraform(struct!.switch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MpsContentReviewTemplateProhibitedConfigureOcrReviewInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MpsContentReviewTemplateProhibitedConfigureOcrReviewInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._blockConfidence !== undefined) {
      hasAnyValues = true;
      internalValueResult.blockConfidence = this._blockConfidence;
    }
    if (this._reviewConfidence !== undefined) {
      hasAnyValues = true;
      internalValueResult.reviewConfidence = this._reviewConfidence;
    }
    if (this._switch !== undefined) {
      hasAnyValues = true;
      internalValueResult.switch = this._switch;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MpsContentReviewTemplateProhibitedConfigureOcrReviewInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._blockConfidence = undefined;
      this._reviewConfidence = undefined;
      this._switch = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._blockConfidence = value.blockConfidence;
      this._reviewConfidence = value.reviewConfidence;
      this._switch = value.switch;
    }
  }

  // block_confidence - computed: false, optional: true, required: false
  private _blockConfidence?: number; 
  public get blockConfidence() {
    return this.getNumberAttribute('block_confidence');
  }
  public set blockConfidence(value: number) {
    this._blockConfidence = value;
  }
  public resetBlockConfidence() {
    this._blockConfidence = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockConfidenceInput() {
    return this._blockConfidence;
  }

  // review_confidence - computed: false, optional: true, required: false
  private _reviewConfidence?: number; 
  public get reviewConfidence() {
    return this.getNumberAttribute('review_confidence');
  }
  public set reviewConfidence(value: number) {
    this._reviewConfidence = value;
  }
  public resetReviewConfidence() {
    this._reviewConfidence = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reviewConfidenceInput() {
    return this._reviewConfidence;
  }

  // switch - computed: false, optional: false, required: true
  private _switch?: string; 
  public get switch() {
    return this.getStringAttribute('switch');
  }
  public set switch(value: string) {
    this._switch = value;
  }
  // Temporarily expose input value. Use with caution.
  public get switchInput() {
    return this._switch;
  }
}
export interface MpsContentReviewTemplateProhibitedConfigure {
  /**
  * asr_review_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/mps_content_review_template#asr_review_info MpsContentReviewTemplate#asr_review_info}
  */
  readonly asrReviewInfo?: MpsContentReviewTemplateProhibitedConfigureAsrReviewInfo;
  /**
  * ocr_review_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/mps_content_review_template#ocr_review_info MpsContentReviewTemplate#ocr_review_info}
  */
  readonly ocrReviewInfo?: MpsContentReviewTemplateProhibitedConfigureOcrReviewInfo;
}

export function mpsContentReviewTemplateProhibitedConfigureToTerraform(struct?: MpsContentReviewTemplateProhibitedConfigureOutputReference | MpsContentReviewTemplateProhibitedConfigure): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    asr_review_info: mpsContentReviewTemplateProhibitedConfigureAsrReviewInfoToTerraform(struct!.asrReviewInfo),
    ocr_review_info: mpsContentReviewTemplateProhibitedConfigureOcrReviewInfoToTerraform(struct!.ocrReviewInfo),
  }
}


export function mpsContentReviewTemplateProhibitedConfigureToHclTerraform(struct?: MpsContentReviewTemplateProhibitedConfigureOutputReference | MpsContentReviewTemplateProhibitedConfigure): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    asr_review_info: {
      value: mpsContentReviewTemplateProhibitedConfigureAsrReviewInfoToHclTerraform(struct!.asrReviewInfo),
      isBlock: true,
      type: "list",
      storageClassType: "MpsContentReviewTemplateProhibitedConfigureAsrReviewInfoList",
    },
    ocr_review_info: {
      value: mpsContentReviewTemplateProhibitedConfigureOcrReviewInfoToHclTerraform(struct!.ocrReviewInfo),
      isBlock: true,
      type: "list",
      storageClassType: "MpsContentReviewTemplateProhibitedConfigureOcrReviewInfoList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MpsContentReviewTemplateProhibitedConfigureOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MpsContentReviewTemplateProhibitedConfigure | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._asrReviewInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.asrReviewInfo = this._asrReviewInfo?.internalValue;
    }
    if (this._ocrReviewInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ocrReviewInfo = this._ocrReviewInfo?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MpsContentReviewTemplateProhibitedConfigure | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._asrReviewInfo.internalValue = undefined;
      this._ocrReviewInfo.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._asrReviewInfo.internalValue = value.asrReviewInfo;
      this._ocrReviewInfo.internalValue = value.ocrReviewInfo;
    }
  }

  // asr_review_info - computed: false, optional: true, required: false
  private _asrReviewInfo = new MpsContentReviewTemplateProhibitedConfigureAsrReviewInfoOutputReference(this, "asr_review_info");
  public get asrReviewInfo() {
    return this._asrReviewInfo;
  }
  public putAsrReviewInfo(value: MpsContentReviewTemplateProhibitedConfigureAsrReviewInfo) {
    this._asrReviewInfo.internalValue = value;
  }
  public resetAsrReviewInfo() {
    this._asrReviewInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asrReviewInfoInput() {
    return this._asrReviewInfo.internalValue;
  }

  // ocr_review_info - computed: false, optional: true, required: false
  private _ocrReviewInfo = new MpsContentReviewTemplateProhibitedConfigureOcrReviewInfoOutputReference(this, "ocr_review_info");
  public get ocrReviewInfo() {
    return this._ocrReviewInfo;
  }
  public putOcrReviewInfo(value: MpsContentReviewTemplateProhibitedConfigureOcrReviewInfo) {
    this._ocrReviewInfo.internalValue = value;
  }
  public resetOcrReviewInfo() {
    this._ocrReviewInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ocrReviewInfoInput() {
    return this._ocrReviewInfo.internalValue;
  }
}
export interface MpsContentReviewTemplateTerrorismConfigureImgReviewInfo {
  /**
  * The score threshold for judging suspected violations. When the smart review reaches the score above, it is considered suspected violations. If it is not filled, the default is 90 points. Value range: 0~100.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/mps_content_review_template#block_confidence MpsContentReviewTemplate#block_confidence}
  */
  readonly blockConfidence?: number;
  /**
  * Terrorism image filter tag, if the review result contains the selected tag, the result will be returned, if the filter tag is empty, all the review results will be returned, the optional value is:guns, crowd, bloody, police, banners, militant, explosion, terrorists, scenario.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/mps_content_review_template#label_set MpsContentReviewTemplate#label_set}
  */
  readonly labelSet?: string[];
  /**
  * The score threshold for judging whether manual review is required for violations. When the intelligent review reaches the score above, it is considered that manual review is required. If it is not filled, the default is 80 points. Value range: 0~100.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/mps_content_review_template#review_confidence MpsContentReviewTemplate#review_confidence}
  */
  readonly reviewConfidence?: number;
  /**
  * Terrorism image task switch, optional value:ON/OFF.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/mps_content_review_template#switch MpsContentReviewTemplate#switch}
  */
  readonly switch: string;
}

export function mpsContentReviewTemplateTerrorismConfigureImgReviewInfoToTerraform(struct?: MpsContentReviewTemplateTerrorismConfigureImgReviewInfoOutputReference | MpsContentReviewTemplateTerrorismConfigureImgReviewInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    block_confidence: cdktf.numberToTerraform(struct!.blockConfidence),
    label_set: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.labelSet),
    review_confidence: cdktf.numberToTerraform(struct!.reviewConfidence),
    switch: cdktf.stringToTerraform(struct!.switch),
  }
}


export function mpsContentReviewTemplateTerrorismConfigureImgReviewInfoToHclTerraform(struct?: MpsContentReviewTemplateTerrorismConfigureImgReviewInfoOutputReference | MpsContentReviewTemplateTerrorismConfigureImgReviewInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    block_confidence: {
      value: cdktf.numberToHclTerraform(struct!.blockConfidence),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    label_set: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.labelSet),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    review_confidence: {
      value: cdktf.numberToHclTerraform(struct!.reviewConfidence),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    switch: {
      value: cdktf.stringToHclTerraform(struct!.switch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MpsContentReviewTemplateTerrorismConfigureImgReviewInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MpsContentReviewTemplateTerrorismConfigureImgReviewInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._blockConfidence !== undefined) {
      hasAnyValues = true;
      internalValueResult.blockConfidence = this._blockConfidence;
    }
    if (this._labelSet !== undefined) {
      hasAnyValues = true;
      internalValueResult.labelSet = this._labelSet;
    }
    if (this._reviewConfidence !== undefined) {
      hasAnyValues = true;
      internalValueResult.reviewConfidence = this._reviewConfidence;
    }
    if (this._switch !== undefined) {
      hasAnyValues = true;
      internalValueResult.switch = this._switch;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MpsContentReviewTemplateTerrorismConfigureImgReviewInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._blockConfidence = undefined;
      this._labelSet = undefined;
      this._reviewConfidence = undefined;
      this._switch = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._blockConfidence = value.blockConfidence;
      this._labelSet = value.labelSet;
      this._reviewConfidence = value.reviewConfidence;
      this._switch = value.switch;
    }
  }

  // block_confidence - computed: false, optional: true, required: false
  private _blockConfidence?: number; 
  public get blockConfidence() {
    return this.getNumberAttribute('block_confidence');
  }
  public set blockConfidence(value: number) {
    this._blockConfidence = value;
  }
  public resetBlockConfidence() {
    this._blockConfidence = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockConfidenceInput() {
    return this._blockConfidence;
  }

  // label_set - computed: false, optional: true, required: false
  private _labelSet?: string[]; 
  public get labelSet() {
    return cdktf.Fn.tolist(this.getListAttribute('label_set'));
  }
  public set labelSet(value: string[]) {
    this._labelSet = value;
  }
  public resetLabelSet() {
    this._labelSet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelSetInput() {
    return this._labelSet;
  }

  // review_confidence - computed: false, optional: true, required: false
  private _reviewConfidence?: number; 
  public get reviewConfidence() {
    return this.getNumberAttribute('review_confidence');
  }
  public set reviewConfidence(value: number) {
    this._reviewConfidence = value;
  }
  public resetReviewConfidence() {
    this._reviewConfidence = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reviewConfidenceInput() {
    return this._reviewConfidence;
  }

  // switch - computed: false, optional: false, required: true
  private _switch?: string; 
  public get switch() {
    return this.getStringAttribute('switch');
  }
  public set switch(value: string) {
    this._switch = value;
  }
  // Temporarily expose input value. Use with caution.
  public get switchInput() {
    return this._switch;
  }
}
export interface MpsContentReviewTemplateTerrorismConfigureOcrReviewInfo {
  /**
  * The score threshold for judging suspected violations. When the smart review reaches the score above, it is considered suspected violations. If it is not filled, the default is 100 points. Value range: 0~100.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/mps_content_review_template#block_confidence MpsContentReviewTemplate#block_confidence}
  */
  readonly blockConfidence?: number;
  /**
  * The score threshold for judging whether manual review is required for violations. When the intelligent review reaches the score above, it is considered that manual review is required. If it is not filled, the default is 75 points. Value range: 0~100.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/mps_content_review_template#review_confidence MpsContentReviewTemplate#review_confidence}
  */
  readonly reviewConfidence?: number;
  /**
  * Ocr terrorism image task switch, optional value:ON/OFF.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/mps_content_review_template#switch MpsContentReviewTemplate#switch}
  */
  readonly switch: string;
}

export function mpsContentReviewTemplateTerrorismConfigureOcrReviewInfoToTerraform(struct?: MpsContentReviewTemplateTerrorismConfigureOcrReviewInfoOutputReference | MpsContentReviewTemplateTerrorismConfigureOcrReviewInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    block_confidence: cdktf.numberToTerraform(struct!.blockConfidence),
    review_confidence: cdktf.numberToTerraform(struct!.reviewConfidence),
    switch: cdktf.stringToTerraform(struct!.switch),
  }
}


export function mpsContentReviewTemplateTerrorismConfigureOcrReviewInfoToHclTerraform(struct?: MpsContentReviewTemplateTerrorismConfigureOcrReviewInfoOutputReference | MpsContentReviewTemplateTerrorismConfigureOcrReviewInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    block_confidence: {
      value: cdktf.numberToHclTerraform(struct!.blockConfidence),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    review_confidence: {
      value: cdktf.numberToHclTerraform(struct!.reviewConfidence),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    switch: {
      value: cdktf.stringToHclTerraform(struct!.switch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MpsContentReviewTemplateTerrorismConfigureOcrReviewInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MpsContentReviewTemplateTerrorismConfigureOcrReviewInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._blockConfidence !== undefined) {
      hasAnyValues = true;
      internalValueResult.blockConfidence = this._blockConfidence;
    }
    if (this._reviewConfidence !== undefined) {
      hasAnyValues = true;
      internalValueResult.reviewConfidence = this._reviewConfidence;
    }
    if (this._switch !== undefined) {
      hasAnyValues = true;
      internalValueResult.switch = this._switch;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MpsContentReviewTemplateTerrorismConfigureOcrReviewInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._blockConfidence = undefined;
      this._reviewConfidence = undefined;
      this._switch = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._blockConfidence = value.blockConfidence;
      this._reviewConfidence = value.reviewConfidence;
      this._switch = value.switch;
    }
  }

  // block_confidence - computed: false, optional: true, required: false
  private _blockConfidence?: number; 
  public get blockConfidence() {
    return this.getNumberAttribute('block_confidence');
  }
  public set blockConfidence(value: number) {
    this._blockConfidence = value;
  }
  public resetBlockConfidence() {
    this._blockConfidence = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockConfidenceInput() {
    return this._blockConfidence;
  }

  // review_confidence - computed: false, optional: true, required: false
  private _reviewConfidence?: number; 
  public get reviewConfidence() {
    return this.getNumberAttribute('review_confidence');
  }
  public set reviewConfidence(value: number) {
    this._reviewConfidence = value;
  }
  public resetReviewConfidence() {
    this._reviewConfidence = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reviewConfidenceInput() {
    return this._reviewConfidence;
  }

  // switch - computed: false, optional: false, required: true
  private _switch?: string; 
  public get switch() {
    return this.getStringAttribute('switch');
  }
  public set switch(value: string) {
    this._switch = value;
  }
  // Temporarily expose input value. Use with caution.
  public get switchInput() {
    return this._switch;
  }
}
export interface MpsContentReviewTemplateTerrorismConfigure {
  /**
  * img_review_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/mps_content_review_template#img_review_info MpsContentReviewTemplate#img_review_info}
  */
  readonly imgReviewInfo?: MpsContentReviewTemplateTerrorismConfigureImgReviewInfo;
  /**
  * ocr_review_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/mps_content_review_template#ocr_review_info MpsContentReviewTemplate#ocr_review_info}
  */
  readonly ocrReviewInfo: MpsContentReviewTemplateTerrorismConfigureOcrReviewInfo;
}

export function mpsContentReviewTemplateTerrorismConfigureToTerraform(struct?: MpsContentReviewTemplateTerrorismConfigureOutputReference | MpsContentReviewTemplateTerrorismConfigure): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    img_review_info: mpsContentReviewTemplateTerrorismConfigureImgReviewInfoToTerraform(struct!.imgReviewInfo),
    ocr_review_info: mpsContentReviewTemplateTerrorismConfigureOcrReviewInfoToTerraform(struct!.ocrReviewInfo),
  }
}


export function mpsContentReviewTemplateTerrorismConfigureToHclTerraform(struct?: MpsContentReviewTemplateTerrorismConfigureOutputReference | MpsContentReviewTemplateTerrorismConfigure): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    img_review_info: {
      value: mpsContentReviewTemplateTerrorismConfigureImgReviewInfoToHclTerraform(struct!.imgReviewInfo),
      isBlock: true,
      type: "list",
      storageClassType: "MpsContentReviewTemplateTerrorismConfigureImgReviewInfoList",
    },
    ocr_review_info: {
      value: mpsContentReviewTemplateTerrorismConfigureOcrReviewInfoToHclTerraform(struct!.ocrReviewInfo),
      isBlock: true,
      type: "list",
      storageClassType: "MpsContentReviewTemplateTerrorismConfigureOcrReviewInfoList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MpsContentReviewTemplateTerrorismConfigureOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MpsContentReviewTemplateTerrorismConfigure | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._imgReviewInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.imgReviewInfo = this._imgReviewInfo?.internalValue;
    }
    if (this._ocrReviewInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ocrReviewInfo = this._ocrReviewInfo?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MpsContentReviewTemplateTerrorismConfigure | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._imgReviewInfo.internalValue = undefined;
      this._ocrReviewInfo.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._imgReviewInfo.internalValue = value.imgReviewInfo;
      this._ocrReviewInfo.internalValue = value.ocrReviewInfo;
    }
  }

  // img_review_info - computed: false, optional: true, required: false
  private _imgReviewInfo = new MpsContentReviewTemplateTerrorismConfigureImgReviewInfoOutputReference(this, "img_review_info");
  public get imgReviewInfo() {
    return this._imgReviewInfo;
  }
  public putImgReviewInfo(value: MpsContentReviewTemplateTerrorismConfigureImgReviewInfo) {
    this._imgReviewInfo.internalValue = value;
  }
  public resetImgReviewInfo() {
    this._imgReviewInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imgReviewInfoInput() {
    return this._imgReviewInfo.internalValue;
  }

  // ocr_review_info - computed: false, optional: false, required: true
  private _ocrReviewInfo = new MpsContentReviewTemplateTerrorismConfigureOcrReviewInfoOutputReference(this, "ocr_review_info");
  public get ocrReviewInfo() {
    return this._ocrReviewInfo;
  }
  public putOcrReviewInfo(value: MpsContentReviewTemplateTerrorismConfigureOcrReviewInfo) {
    this._ocrReviewInfo.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ocrReviewInfoInput() {
    return this._ocrReviewInfo.internalValue;
  }
}
export interface MpsContentReviewTemplateUserDefineConfigureAsrReviewInfo {
  /**
  * The score threshold for judging suspected violations. When the smart review reaches the score above, it is considered suspected violations. If it is not filled, the default is 100 points. Value range: 0~100.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/mps_content_review_template#block_confidence MpsContentReviewTemplate#block_confidence}
  */
  readonly blockConfidence?: number;
  /**
  * User-defined asr tags, the review result contains the selected tag and returns the result, if the filter tag is empty, all review results are returned. If you want to use the tag filtering function, when adding a asr library, you need to add the corresponding character tag.The maximum number of tags is 10, and the length of each tag is up to 16 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/mps_content_review_template#label_set MpsContentReviewTemplate#label_set}
  */
  readonly labelSet?: string[];
  /**
  * The score threshold for judging whether manual review is required for violations. When the intelligent review reaches the score above, it is considered that manual review is required. If it is not filled, the default is 75 points. Value range: 0~100.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/mps_content_review_template#review_confidence MpsContentReviewTemplate#review_confidence}
  */
  readonly reviewConfidence?: number;
  /**
  * User-defined asr review task switch, optional value:ON/OFF.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/mps_content_review_template#switch MpsContentReviewTemplate#switch}
  */
  readonly switch: string;
}

export function mpsContentReviewTemplateUserDefineConfigureAsrReviewInfoToTerraform(struct?: MpsContentReviewTemplateUserDefineConfigureAsrReviewInfoOutputReference | MpsContentReviewTemplateUserDefineConfigureAsrReviewInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    block_confidence: cdktf.numberToTerraform(struct!.blockConfidence),
    label_set: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.labelSet),
    review_confidence: cdktf.numberToTerraform(struct!.reviewConfidence),
    switch: cdktf.stringToTerraform(struct!.switch),
  }
}


export function mpsContentReviewTemplateUserDefineConfigureAsrReviewInfoToHclTerraform(struct?: MpsContentReviewTemplateUserDefineConfigureAsrReviewInfoOutputReference | MpsContentReviewTemplateUserDefineConfigureAsrReviewInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    block_confidence: {
      value: cdktf.numberToHclTerraform(struct!.blockConfidence),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    label_set: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.labelSet),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    review_confidence: {
      value: cdktf.numberToHclTerraform(struct!.reviewConfidence),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    switch: {
      value: cdktf.stringToHclTerraform(struct!.switch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MpsContentReviewTemplateUserDefineConfigureAsrReviewInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MpsContentReviewTemplateUserDefineConfigureAsrReviewInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._blockConfidence !== undefined) {
      hasAnyValues = true;
      internalValueResult.blockConfidence = this._blockConfidence;
    }
    if (this._labelSet !== undefined) {
      hasAnyValues = true;
      internalValueResult.labelSet = this._labelSet;
    }
    if (this._reviewConfidence !== undefined) {
      hasAnyValues = true;
      internalValueResult.reviewConfidence = this._reviewConfidence;
    }
    if (this._switch !== undefined) {
      hasAnyValues = true;
      internalValueResult.switch = this._switch;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MpsContentReviewTemplateUserDefineConfigureAsrReviewInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._blockConfidence = undefined;
      this._labelSet = undefined;
      this._reviewConfidence = undefined;
      this._switch = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._blockConfidence = value.blockConfidence;
      this._labelSet = value.labelSet;
      this._reviewConfidence = value.reviewConfidence;
      this._switch = value.switch;
    }
  }

  // block_confidence - computed: false, optional: true, required: false
  private _blockConfidence?: number; 
  public get blockConfidence() {
    return this.getNumberAttribute('block_confidence');
  }
  public set blockConfidence(value: number) {
    this._blockConfidence = value;
  }
  public resetBlockConfidence() {
    this._blockConfidence = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockConfidenceInput() {
    return this._blockConfidence;
  }

  // label_set - computed: false, optional: true, required: false
  private _labelSet?: string[]; 
  public get labelSet() {
    return cdktf.Fn.tolist(this.getListAttribute('label_set'));
  }
  public set labelSet(value: string[]) {
    this._labelSet = value;
  }
  public resetLabelSet() {
    this._labelSet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelSetInput() {
    return this._labelSet;
  }

  // review_confidence - computed: false, optional: true, required: false
  private _reviewConfidence?: number; 
  public get reviewConfidence() {
    return this.getNumberAttribute('review_confidence');
  }
  public set reviewConfidence(value: number) {
    this._reviewConfidence = value;
  }
  public resetReviewConfidence() {
    this._reviewConfidence = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reviewConfidenceInput() {
    return this._reviewConfidence;
  }

  // switch - computed: false, optional: false, required: true
  private _switch?: string; 
  public get switch() {
    return this.getStringAttribute('switch');
  }
  public set switch(value: string) {
    this._switch = value;
  }
  // Temporarily expose input value. Use with caution.
  public get switchInput() {
    return this._switch;
  }
}
export interface MpsContentReviewTemplateUserDefineConfigureFaceReviewInfo {
  /**
  * The score threshold for judging suspected violations. When the smart review reaches the score above, it is considered suspected violations. If it is not filled, the default is 100 points. Value range: 0~100.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/mps_content_review_template#block_confidence MpsContentReviewTemplate#block_confidence}
  */
  readonly blockConfidence?: number;
  /**
  * User-defined face review tags, the review result contains the selected tag and returns the result, if the filter tag is empty, all review results are returned. If you want to use the tag filtering function, when adding a face library, you need to add the corresponding character tag.The maximum number of tags is 10, and the length of each tag is up to 16 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/mps_content_review_template#label_set MpsContentReviewTemplate#label_set}
  */
  readonly labelSet?: string[];
  /**
  * The score threshold for judging whether manual review is required for violations. When the intelligent review reaches the score above, it is considered that manual review is required. If it is not filled, the default is 75 points. Value range: 0~100.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/mps_content_review_template#review_confidence MpsContentReviewTemplate#review_confidence}
  */
  readonly reviewConfidence?: number;
  /**
  * User-defined face review task switch, optional value:ON/OFF.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/mps_content_review_template#switch MpsContentReviewTemplate#switch}
  */
  readonly switch: string;
}

export function mpsContentReviewTemplateUserDefineConfigureFaceReviewInfoToTerraform(struct?: MpsContentReviewTemplateUserDefineConfigureFaceReviewInfoOutputReference | MpsContentReviewTemplateUserDefineConfigureFaceReviewInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    block_confidence: cdktf.numberToTerraform(struct!.blockConfidence),
    label_set: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.labelSet),
    review_confidence: cdktf.numberToTerraform(struct!.reviewConfidence),
    switch: cdktf.stringToTerraform(struct!.switch),
  }
}


export function mpsContentReviewTemplateUserDefineConfigureFaceReviewInfoToHclTerraform(struct?: MpsContentReviewTemplateUserDefineConfigureFaceReviewInfoOutputReference | MpsContentReviewTemplateUserDefineConfigureFaceReviewInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    block_confidence: {
      value: cdktf.numberToHclTerraform(struct!.blockConfidence),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    label_set: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.labelSet),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    review_confidence: {
      value: cdktf.numberToHclTerraform(struct!.reviewConfidence),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    switch: {
      value: cdktf.stringToHclTerraform(struct!.switch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MpsContentReviewTemplateUserDefineConfigureFaceReviewInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MpsContentReviewTemplateUserDefineConfigureFaceReviewInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._blockConfidence !== undefined) {
      hasAnyValues = true;
      internalValueResult.blockConfidence = this._blockConfidence;
    }
    if (this._labelSet !== undefined) {
      hasAnyValues = true;
      internalValueResult.labelSet = this._labelSet;
    }
    if (this._reviewConfidence !== undefined) {
      hasAnyValues = true;
      internalValueResult.reviewConfidence = this._reviewConfidence;
    }
    if (this._switch !== undefined) {
      hasAnyValues = true;
      internalValueResult.switch = this._switch;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MpsContentReviewTemplateUserDefineConfigureFaceReviewInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._blockConfidence = undefined;
      this._labelSet = undefined;
      this._reviewConfidence = undefined;
      this._switch = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._blockConfidence = value.blockConfidence;
      this._labelSet = value.labelSet;
      this._reviewConfidence = value.reviewConfidence;
      this._switch = value.switch;
    }
  }

  // block_confidence - computed: false, optional: true, required: false
  private _blockConfidence?: number; 
  public get blockConfidence() {
    return this.getNumberAttribute('block_confidence');
  }
  public set blockConfidence(value: number) {
    this._blockConfidence = value;
  }
  public resetBlockConfidence() {
    this._blockConfidence = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockConfidenceInput() {
    return this._blockConfidence;
  }

  // label_set - computed: false, optional: true, required: false
  private _labelSet?: string[]; 
  public get labelSet() {
    return cdktf.Fn.tolist(this.getListAttribute('label_set'));
  }
  public set labelSet(value: string[]) {
    this._labelSet = value;
  }
  public resetLabelSet() {
    this._labelSet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelSetInput() {
    return this._labelSet;
  }

  // review_confidence - computed: false, optional: true, required: false
  private _reviewConfidence?: number; 
  public get reviewConfidence() {
    return this.getNumberAttribute('review_confidence');
  }
  public set reviewConfidence(value: number) {
    this._reviewConfidence = value;
  }
  public resetReviewConfidence() {
    this._reviewConfidence = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reviewConfidenceInput() {
    return this._reviewConfidence;
  }

  // switch - computed: false, optional: false, required: true
  private _switch?: string; 
  public get switch() {
    return this.getStringAttribute('switch');
  }
  public set switch(value: string) {
    this._switch = value;
  }
  // Temporarily expose input value. Use with caution.
  public get switchInput() {
    return this._switch;
  }
}
export interface MpsContentReviewTemplateUserDefineConfigureOcrReviewInfo {
  /**
  * The score threshold for judging suspected violations. When the smart review reaches the score above, it is considered suspected violations. If it is not filled, the default is 100 points. Value range: 0~100.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/mps_content_review_template#block_confidence MpsContentReviewTemplate#block_confidence}
  */
  readonly blockConfidence?: number;
  /**
  * User-defined ocr tags, the review result contains the selected tag and returns the result, if the filter tag is empty, all review results are returned. If you want to use the tag filtering function, when adding a ocr library, you need to add the corresponding character tag.The maximum number of tags is 10, and the length of each tag is up to 16 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/mps_content_review_template#label_set MpsContentReviewTemplate#label_set}
  */
  readonly labelSet?: string[];
  /**
  * The score threshold for judging whether manual review is required for violations. When the intelligent review reaches the score above, it is considered that manual review is required. If it is not filled, the default is 75 points. Value range: 0~100.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/mps_content_review_template#review_confidence MpsContentReviewTemplate#review_confidence}
  */
  readonly reviewConfidence?: number;
  /**
  * User-defined ocr text review task switch, optional value:ON/OFF.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/mps_content_review_template#switch MpsContentReviewTemplate#switch}
  */
  readonly switch: string;
}

export function mpsContentReviewTemplateUserDefineConfigureOcrReviewInfoToTerraform(struct?: MpsContentReviewTemplateUserDefineConfigureOcrReviewInfoOutputReference | MpsContentReviewTemplateUserDefineConfigureOcrReviewInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    block_confidence: cdktf.numberToTerraform(struct!.blockConfidence),
    label_set: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.labelSet),
    review_confidence: cdktf.numberToTerraform(struct!.reviewConfidence),
    switch: cdktf.stringToTerraform(struct!.switch),
  }
}


export function mpsContentReviewTemplateUserDefineConfigureOcrReviewInfoToHclTerraform(struct?: MpsContentReviewTemplateUserDefineConfigureOcrReviewInfoOutputReference | MpsContentReviewTemplateUserDefineConfigureOcrReviewInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    block_confidence: {
      value: cdktf.numberToHclTerraform(struct!.blockConfidence),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    label_set: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.labelSet),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    review_confidence: {
      value: cdktf.numberToHclTerraform(struct!.reviewConfidence),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    switch: {
      value: cdktf.stringToHclTerraform(struct!.switch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MpsContentReviewTemplateUserDefineConfigureOcrReviewInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MpsContentReviewTemplateUserDefineConfigureOcrReviewInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._blockConfidence !== undefined) {
      hasAnyValues = true;
      internalValueResult.blockConfidence = this._blockConfidence;
    }
    if (this._labelSet !== undefined) {
      hasAnyValues = true;
      internalValueResult.labelSet = this._labelSet;
    }
    if (this._reviewConfidence !== undefined) {
      hasAnyValues = true;
      internalValueResult.reviewConfidence = this._reviewConfidence;
    }
    if (this._switch !== undefined) {
      hasAnyValues = true;
      internalValueResult.switch = this._switch;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MpsContentReviewTemplateUserDefineConfigureOcrReviewInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._blockConfidence = undefined;
      this._labelSet = undefined;
      this._reviewConfidence = undefined;
      this._switch = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._blockConfidence = value.blockConfidence;
      this._labelSet = value.labelSet;
      this._reviewConfidence = value.reviewConfidence;
      this._switch = value.switch;
    }
  }

  // block_confidence - computed: false, optional: true, required: false
  private _blockConfidence?: number; 
  public get blockConfidence() {
    return this.getNumberAttribute('block_confidence');
  }
  public set blockConfidence(value: number) {
    this._blockConfidence = value;
  }
  public resetBlockConfidence() {
    this._blockConfidence = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockConfidenceInput() {
    return this._blockConfidence;
  }

  // label_set - computed: false, optional: true, required: false
  private _labelSet?: string[]; 
  public get labelSet() {
    return cdktf.Fn.tolist(this.getListAttribute('label_set'));
  }
  public set labelSet(value: string[]) {
    this._labelSet = value;
  }
  public resetLabelSet() {
    this._labelSet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelSetInput() {
    return this._labelSet;
  }

  // review_confidence - computed: false, optional: true, required: false
  private _reviewConfidence?: number; 
  public get reviewConfidence() {
    return this.getNumberAttribute('review_confidence');
  }
  public set reviewConfidence(value: number) {
    this._reviewConfidence = value;
  }
  public resetReviewConfidence() {
    this._reviewConfidence = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reviewConfidenceInput() {
    return this._reviewConfidence;
  }

  // switch - computed: false, optional: false, required: true
  private _switch?: string; 
  public get switch() {
    return this.getStringAttribute('switch');
  }
  public set switch(value: string) {
    this._switch = value;
  }
  // Temporarily expose input value. Use with caution.
  public get switchInput() {
    return this._switch;
  }
}
export interface MpsContentReviewTemplateUserDefineConfigure {
  /**
  * asr_review_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/mps_content_review_template#asr_review_info MpsContentReviewTemplate#asr_review_info}
  */
  readonly asrReviewInfo?: MpsContentReviewTemplateUserDefineConfigureAsrReviewInfo;
  /**
  * face_review_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/mps_content_review_template#face_review_info MpsContentReviewTemplate#face_review_info}
  */
  readonly faceReviewInfo?: MpsContentReviewTemplateUserDefineConfigureFaceReviewInfo;
  /**
  * ocr_review_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/mps_content_review_template#ocr_review_info MpsContentReviewTemplate#ocr_review_info}
  */
  readonly ocrReviewInfo?: MpsContentReviewTemplateUserDefineConfigureOcrReviewInfo;
}

export function mpsContentReviewTemplateUserDefineConfigureToTerraform(struct?: MpsContentReviewTemplateUserDefineConfigureOutputReference | MpsContentReviewTemplateUserDefineConfigure): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    asr_review_info: mpsContentReviewTemplateUserDefineConfigureAsrReviewInfoToTerraform(struct!.asrReviewInfo),
    face_review_info: mpsContentReviewTemplateUserDefineConfigureFaceReviewInfoToTerraform(struct!.faceReviewInfo),
    ocr_review_info: mpsContentReviewTemplateUserDefineConfigureOcrReviewInfoToTerraform(struct!.ocrReviewInfo),
  }
}


export function mpsContentReviewTemplateUserDefineConfigureToHclTerraform(struct?: MpsContentReviewTemplateUserDefineConfigureOutputReference | MpsContentReviewTemplateUserDefineConfigure): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    asr_review_info: {
      value: mpsContentReviewTemplateUserDefineConfigureAsrReviewInfoToHclTerraform(struct!.asrReviewInfo),
      isBlock: true,
      type: "list",
      storageClassType: "MpsContentReviewTemplateUserDefineConfigureAsrReviewInfoList",
    },
    face_review_info: {
      value: mpsContentReviewTemplateUserDefineConfigureFaceReviewInfoToHclTerraform(struct!.faceReviewInfo),
      isBlock: true,
      type: "list",
      storageClassType: "MpsContentReviewTemplateUserDefineConfigureFaceReviewInfoList",
    },
    ocr_review_info: {
      value: mpsContentReviewTemplateUserDefineConfigureOcrReviewInfoToHclTerraform(struct!.ocrReviewInfo),
      isBlock: true,
      type: "list",
      storageClassType: "MpsContentReviewTemplateUserDefineConfigureOcrReviewInfoList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MpsContentReviewTemplateUserDefineConfigureOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MpsContentReviewTemplateUserDefineConfigure | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._asrReviewInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.asrReviewInfo = this._asrReviewInfo?.internalValue;
    }
    if (this._faceReviewInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.faceReviewInfo = this._faceReviewInfo?.internalValue;
    }
    if (this._ocrReviewInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ocrReviewInfo = this._ocrReviewInfo?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MpsContentReviewTemplateUserDefineConfigure | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._asrReviewInfo.internalValue = undefined;
      this._faceReviewInfo.internalValue = undefined;
      this._ocrReviewInfo.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._asrReviewInfo.internalValue = value.asrReviewInfo;
      this._faceReviewInfo.internalValue = value.faceReviewInfo;
      this._ocrReviewInfo.internalValue = value.ocrReviewInfo;
    }
  }

  // asr_review_info - computed: false, optional: true, required: false
  private _asrReviewInfo = new MpsContentReviewTemplateUserDefineConfigureAsrReviewInfoOutputReference(this, "asr_review_info");
  public get asrReviewInfo() {
    return this._asrReviewInfo;
  }
  public putAsrReviewInfo(value: MpsContentReviewTemplateUserDefineConfigureAsrReviewInfo) {
    this._asrReviewInfo.internalValue = value;
  }
  public resetAsrReviewInfo() {
    this._asrReviewInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asrReviewInfoInput() {
    return this._asrReviewInfo.internalValue;
  }

  // face_review_info - computed: false, optional: true, required: false
  private _faceReviewInfo = new MpsContentReviewTemplateUserDefineConfigureFaceReviewInfoOutputReference(this, "face_review_info");
  public get faceReviewInfo() {
    return this._faceReviewInfo;
  }
  public putFaceReviewInfo(value: MpsContentReviewTemplateUserDefineConfigureFaceReviewInfo) {
    this._faceReviewInfo.internalValue = value;
  }
  public resetFaceReviewInfo() {
    this._faceReviewInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get faceReviewInfoInput() {
    return this._faceReviewInfo.internalValue;
  }

  // ocr_review_info - computed: false, optional: true, required: false
  private _ocrReviewInfo = new MpsContentReviewTemplateUserDefineConfigureOcrReviewInfoOutputReference(this, "ocr_review_info");
  public get ocrReviewInfo() {
    return this._ocrReviewInfo;
  }
  public putOcrReviewInfo(value: MpsContentReviewTemplateUserDefineConfigureOcrReviewInfo) {
    this._ocrReviewInfo.internalValue = value;
  }
  public resetOcrReviewInfo() {
    this._ocrReviewInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ocrReviewInfoInput() {
    return this._ocrReviewInfo.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/mps_content_review_template tencentcloud_mps_content_review_template}
*/
export class MpsContentReviewTemplate extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_mps_content_review_template";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MpsContentReviewTemplate resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MpsContentReviewTemplate to import
  * @param importFromId The id of the existing MpsContentReviewTemplate that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/mps_content_review_template#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MpsContentReviewTemplate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_mps_content_review_template", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/mps_content_review_template tencentcloud_mps_content_review_template} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MpsContentReviewTemplateConfig = {}
  */
  public constructor(scope: Construct, id: string, config: MpsContentReviewTemplateConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_mps_content_review_template',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.43',
        providerVersionConstraint: '1.82.43'
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
    this._id = config.id;
    this._name = config.name;
    this._politicalConfigure.internalValue = config.politicalConfigure;
    this._pornConfigure.internalValue = config.pornConfigure;
    this._prohibitedConfigure.internalValue = config.prohibitedConfigure;
    this._terrorismConfigure.internalValue = config.terrorismConfigure;
    this._userDefineConfigure.internalValue = config.userDefineConfigure;
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

  // political_configure - computed: false, optional: true, required: false
  private _politicalConfigure = new MpsContentReviewTemplatePoliticalConfigureOutputReference(this, "political_configure");
  public get politicalConfigure() {
    return this._politicalConfigure;
  }
  public putPoliticalConfigure(value: MpsContentReviewTemplatePoliticalConfigure) {
    this._politicalConfigure.internalValue = value;
  }
  public resetPoliticalConfigure() {
    this._politicalConfigure.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get politicalConfigureInput() {
    return this._politicalConfigure.internalValue;
  }

  // porn_configure - computed: false, optional: true, required: false
  private _pornConfigure = new MpsContentReviewTemplatePornConfigureOutputReference(this, "porn_configure");
  public get pornConfigure() {
    return this._pornConfigure;
  }
  public putPornConfigure(value: MpsContentReviewTemplatePornConfigure) {
    this._pornConfigure.internalValue = value;
  }
  public resetPornConfigure() {
    this._pornConfigure.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pornConfigureInput() {
    return this._pornConfigure.internalValue;
  }

  // prohibited_configure - computed: false, optional: true, required: false
  private _prohibitedConfigure = new MpsContentReviewTemplateProhibitedConfigureOutputReference(this, "prohibited_configure");
  public get prohibitedConfigure() {
    return this._prohibitedConfigure;
  }
  public putProhibitedConfigure(value: MpsContentReviewTemplateProhibitedConfigure) {
    this._prohibitedConfigure.internalValue = value;
  }
  public resetProhibitedConfigure() {
    this._prohibitedConfigure.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prohibitedConfigureInput() {
    return this._prohibitedConfigure.internalValue;
  }

  // terrorism_configure - computed: false, optional: true, required: false
  private _terrorismConfigure = new MpsContentReviewTemplateTerrorismConfigureOutputReference(this, "terrorism_configure");
  public get terrorismConfigure() {
    return this._terrorismConfigure;
  }
  public putTerrorismConfigure(value: MpsContentReviewTemplateTerrorismConfigure) {
    this._terrorismConfigure.internalValue = value;
  }
  public resetTerrorismConfigure() {
    this._terrorismConfigure.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get terrorismConfigureInput() {
    return this._terrorismConfigure.internalValue;
  }

  // user_define_configure - computed: false, optional: true, required: false
  private _userDefineConfigure = new MpsContentReviewTemplateUserDefineConfigureOutputReference(this, "user_define_configure");
  public get userDefineConfigure() {
    return this._userDefineConfigure;
  }
  public putUserDefineConfigure(value: MpsContentReviewTemplateUserDefineConfigure) {
    this._userDefineConfigure.internalValue = value;
  }
  public resetUserDefineConfigure() {
    this._userDefineConfigure.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userDefineConfigureInput() {
    return this._userDefineConfigure.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      comment: cdktf.stringToTerraform(this._comment),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      political_configure: mpsContentReviewTemplatePoliticalConfigureToTerraform(this._politicalConfigure.internalValue),
      porn_configure: mpsContentReviewTemplatePornConfigureToTerraform(this._pornConfigure.internalValue),
      prohibited_configure: mpsContentReviewTemplateProhibitedConfigureToTerraform(this._prohibitedConfigure.internalValue),
      terrorism_configure: mpsContentReviewTemplateTerrorismConfigureToTerraform(this._terrorismConfigure.internalValue),
      user_define_configure: mpsContentReviewTemplateUserDefineConfigureToTerraform(this._userDefineConfigure.internalValue),
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
      id: {
        value: cdktf.stringToHclTerraform(this._id),
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
      political_configure: {
        value: mpsContentReviewTemplatePoliticalConfigureToHclTerraform(this._politicalConfigure.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MpsContentReviewTemplatePoliticalConfigureList",
      },
      porn_configure: {
        value: mpsContentReviewTemplatePornConfigureToHclTerraform(this._pornConfigure.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MpsContentReviewTemplatePornConfigureList",
      },
      prohibited_configure: {
        value: mpsContentReviewTemplateProhibitedConfigureToHclTerraform(this._prohibitedConfigure.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MpsContentReviewTemplateProhibitedConfigureList",
      },
      terrorism_configure: {
        value: mpsContentReviewTemplateTerrorismConfigureToHclTerraform(this._terrorismConfigure.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MpsContentReviewTemplateTerrorismConfigureList",
      },
      user_define_configure: {
        value: mpsContentReviewTemplateUserDefineConfigureToHclTerraform(this._userDefineConfigure.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MpsContentReviewTemplateUserDefineConfigureList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
