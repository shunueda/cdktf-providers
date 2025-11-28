// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/mps_ai_recognition_template
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MpsAiRecognitionTemplateConfig extends cdktf.TerraformMetaArguments {
  /**
  * Ai recognition template description information, length limit: 256 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/mps_ai_recognition_template#comment MpsAiRecognitionTemplate#comment}
  */
  readonly comment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/mps_ai_recognition_template#id MpsAiRecognitionTemplate#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Ai recognition template name, length limit: 64 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/mps_ai_recognition_template#name MpsAiRecognitionTemplate#name}
  */
  readonly name?: string;
  /**
  * asr_full_text_configure block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/mps_ai_recognition_template#asr_full_text_configure MpsAiRecognitionTemplate#asr_full_text_configure}
  */
  readonly asrFullTextConfigure?: MpsAiRecognitionTemplateAsrFullTextConfigure;
  /**
  * asr_words_configure block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/mps_ai_recognition_template#asr_words_configure MpsAiRecognitionTemplate#asr_words_configure}
  */
  readonly asrWordsConfigure?: MpsAiRecognitionTemplateAsrWordsConfigure;
  /**
  * face_configure block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/mps_ai_recognition_template#face_configure MpsAiRecognitionTemplate#face_configure}
  */
  readonly faceConfigure?: MpsAiRecognitionTemplateFaceConfigure;
  /**
  * ocr_full_text_configure block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/mps_ai_recognition_template#ocr_full_text_configure MpsAiRecognitionTemplate#ocr_full_text_configure}
  */
  readonly ocrFullTextConfigure?: MpsAiRecognitionTemplateOcrFullTextConfigure;
  /**
  * ocr_words_configure block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/mps_ai_recognition_template#ocr_words_configure MpsAiRecognitionTemplate#ocr_words_configure}
  */
  readonly ocrWordsConfigure?: MpsAiRecognitionTemplateOcrWordsConfigure;
}
export interface MpsAiRecognitionTemplateAsrFullTextConfigure {
  /**
  * Generated subtitle file format, if left blank or blank string means no subtitle file will be generated, optional value:vtt: Generate WebVTT subtitle files.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/mps_ai_recognition_template#subtitle_format MpsAiRecognitionTemplate#subtitle_format}
  */
  readonly subtitleFormat?: string;
  /**
  * Asr full text recognition task switch, optional value:ON/OFF.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/mps_ai_recognition_template#switch MpsAiRecognitionTemplate#switch}
  */
  readonly switch: string;
}

export function mpsAiRecognitionTemplateAsrFullTextConfigureToTerraform(struct?: MpsAiRecognitionTemplateAsrFullTextConfigureOutputReference | MpsAiRecognitionTemplateAsrFullTextConfigure): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    subtitle_format: cdktf.stringToTerraform(struct!.subtitleFormat),
    switch: cdktf.stringToTerraform(struct!.switch),
  }
}


export function mpsAiRecognitionTemplateAsrFullTextConfigureToHclTerraform(struct?: MpsAiRecognitionTemplateAsrFullTextConfigureOutputReference | MpsAiRecognitionTemplateAsrFullTextConfigure): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    subtitle_format: {
      value: cdktf.stringToHclTerraform(struct!.subtitleFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class MpsAiRecognitionTemplateAsrFullTextConfigureOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MpsAiRecognitionTemplateAsrFullTextConfigure | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._subtitleFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.subtitleFormat = this._subtitleFormat;
    }
    if (this._switch !== undefined) {
      hasAnyValues = true;
      internalValueResult.switch = this._switch;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MpsAiRecognitionTemplateAsrFullTextConfigure | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._subtitleFormat = undefined;
      this._switch = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._subtitleFormat = value.subtitleFormat;
      this._switch = value.switch;
    }
  }

  // subtitle_format - computed: false, optional: true, required: false
  private _subtitleFormat?: string; 
  public get subtitleFormat() {
    return this.getStringAttribute('subtitle_format');
  }
  public set subtitleFormat(value: string) {
    this._subtitleFormat = value;
  }
  public resetSubtitleFormat() {
    this._subtitleFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subtitleFormatInput() {
    return this._subtitleFormat;
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
export interface MpsAiRecognitionTemplateAsrWordsConfigure {
  /**
  * Keyword filter label, specify the label of the keyword to be returned. If not filled or empty, all results will be returned.The maximum number of tags is 10, and the length of each tag is up to 16 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/mps_ai_recognition_template#label_set MpsAiRecognitionTemplate#label_set}
  */
  readonly labelSet?: string[];
  /**
  * Asr word recognition task switch, optional value:ON/OFF.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/mps_ai_recognition_template#switch MpsAiRecognitionTemplate#switch}
  */
  readonly switch: string;
}

export function mpsAiRecognitionTemplateAsrWordsConfigureToTerraform(struct?: MpsAiRecognitionTemplateAsrWordsConfigureOutputReference | MpsAiRecognitionTemplateAsrWordsConfigure): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    label_set: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.labelSet),
    switch: cdktf.stringToTerraform(struct!.switch),
  }
}


export function mpsAiRecognitionTemplateAsrWordsConfigureToHclTerraform(struct?: MpsAiRecognitionTemplateAsrWordsConfigureOutputReference | MpsAiRecognitionTemplateAsrWordsConfigure): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    label_set: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.labelSet),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
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

export class MpsAiRecognitionTemplateAsrWordsConfigureOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MpsAiRecognitionTemplateAsrWordsConfigure | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._labelSet !== undefined) {
      hasAnyValues = true;
      internalValueResult.labelSet = this._labelSet;
    }
    if (this._switch !== undefined) {
      hasAnyValues = true;
      internalValueResult.switch = this._switch;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MpsAiRecognitionTemplateAsrWordsConfigure | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._labelSet = undefined;
      this._switch = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._labelSet = value.labelSet;
      this._switch = value.switch;
    }
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
export interface MpsAiRecognitionTemplateFaceConfigure {
  /**
  * Default face filter tag, specify the tag of the default face that needs to be returned. If not filled or empty, all default face results will be returned. Label optional value:entertainment, sport, politician.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/mps_ai_recognition_template#default_library_label_set MpsAiRecognitionTemplate#default_library_label_set}
  */
  readonly defaultLibraryLabelSet?: string[];
  /**
  * Face library selection, optional value:Default, UserDefine, AllDefault value: All, use the system default face library and user-defined face library.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/mps_ai_recognition_template#face_library MpsAiRecognitionTemplate#face_library}
  */
  readonly faceLibrary?: string;
  /**
  * Face recognition filter score, when the recognition result reaches the score above, the recognition result will be returned. The default is 95 points. Value range: 0 - 100.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/mps_ai_recognition_template#score MpsAiRecognitionTemplate#score}
  */
  readonly score?: number;
  /**
  * Ai face recognition task switch, optional value:ON/OFF.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/mps_ai_recognition_template#switch MpsAiRecognitionTemplate#switch}
  */
  readonly switch: string;
  /**
  * User-defined face filter tag, specify the tag of the user-defined face that needs to be returned. If not filled or empty, all custom face results will be returned.The maximum number of tags is 100, and the length of each tag is up to 16 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/mps_ai_recognition_template#user_define_library_label_set MpsAiRecognitionTemplate#user_define_library_label_set}
  */
  readonly userDefineLibraryLabelSet?: string[];
}

export function mpsAiRecognitionTemplateFaceConfigureToTerraform(struct?: MpsAiRecognitionTemplateFaceConfigureOutputReference | MpsAiRecognitionTemplateFaceConfigure): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_library_label_set: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.defaultLibraryLabelSet),
    face_library: cdktf.stringToTerraform(struct!.faceLibrary),
    score: cdktf.numberToTerraform(struct!.score),
    switch: cdktf.stringToTerraform(struct!.switch),
    user_define_library_label_set: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.userDefineLibraryLabelSet),
  }
}


export function mpsAiRecognitionTemplateFaceConfigureToHclTerraform(struct?: MpsAiRecognitionTemplateFaceConfigureOutputReference | MpsAiRecognitionTemplateFaceConfigure): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_library_label_set: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.defaultLibraryLabelSet),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    face_library: {
      value: cdktf.stringToHclTerraform(struct!.faceLibrary),
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
    switch: {
      value: cdktf.stringToHclTerraform(struct!.switch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_define_library_label_set: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.userDefineLibraryLabelSet),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MpsAiRecognitionTemplateFaceConfigureOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MpsAiRecognitionTemplateFaceConfigure | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultLibraryLabelSet !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultLibraryLabelSet = this._defaultLibraryLabelSet;
    }
    if (this._faceLibrary !== undefined) {
      hasAnyValues = true;
      internalValueResult.faceLibrary = this._faceLibrary;
    }
    if (this._score !== undefined) {
      hasAnyValues = true;
      internalValueResult.score = this._score;
    }
    if (this._switch !== undefined) {
      hasAnyValues = true;
      internalValueResult.switch = this._switch;
    }
    if (this._userDefineLibraryLabelSet !== undefined) {
      hasAnyValues = true;
      internalValueResult.userDefineLibraryLabelSet = this._userDefineLibraryLabelSet;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MpsAiRecognitionTemplateFaceConfigure | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._defaultLibraryLabelSet = undefined;
      this._faceLibrary = undefined;
      this._score = undefined;
      this._switch = undefined;
      this._userDefineLibraryLabelSet = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._defaultLibraryLabelSet = value.defaultLibraryLabelSet;
      this._faceLibrary = value.faceLibrary;
      this._score = value.score;
      this._switch = value.switch;
      this._userDefineLibraryLabelSet = value.userDefineLibraryLabelSet;
    }
  }

  // default_library_label_set - computed: false, optional: true, required: false
  private _defaultLibraryLabelSet?: string[]; 
  public get defaultLibraryLabelSet() {
    return cdktf.Fn.tolist(this.getListAttribute('default_library_label_set'));
  }
  public set defaultLibraryLabelSet(value: string[]) {
    this._defaultLibraryLabelSet = value;
  }
  public resetDefaultLibraryLabelSet() {
    this._defaultLibraryLabelSet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultLibraryLabelSetInput() {
    return this._defaultLibraryLabelSet;
  }

  // face_library - computed: false, optional: true, required: false
  private _faceLibrary?: string; 
  public get faceLibrary() {
    return this.getStringAttribute('face_library');
  }
  public set faceLibrary(value: string) {
    this._faceLibrary = value;
  }
  public resetFaceLibrary() {
    this._faceLibrary = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get faceLibraryInput() {
    return this._faceLibrary;
  }

  // score - computed: false, optional: true, required: false
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

  // user_define_library_label_set - computed: false, optional: true, required: false
  private _userDefineLibraryLabelSet?: string[]; 
  public get userDefineLibraryLabelSet() {
    return cdktf.Fn.tolist(this.getListAttribute('user_define_library_label_set'));
  }
  public set userDefineLibraryLabelSet(value: string[]) {
    this._userDefineLibraryLabelSet = value;
  }
  public resetUserDefineLibraryLabelSet() {
    this._userDefineLibraryLabelSet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userDefineLibraryLabelSetInput() {
    return this._userDefineLibraryLabelSet;
  }
}
export interface MpsAiRecognitionTemplateOcrFullTextConfigure {
  /**
  * Ocr full text recognition task switch, optional value:ON/OFF.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/mps_ai_recognition_template#switch MpsAiRecognitionTemplate#switch}
  */
  readonly switch: string;
}

export function mpsAiRecognitionTemplateOcrFullTextConfigureToTerraform(struct?: MpsAiRecognitionTemplateOcrFullTextConfigureOutputReference | MpsAiRecognitionTemplateOcrFullTextConfigure): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    switch: cdktf.stringToTerraform(struct!.switch),
  }
}


export function mpsAiRecognitionTemplateOcrFullTextConfigureToHclTerraform(struct?: MpsAiRecognitionTemplateOcrFullTextConfigureOutputReference | MpsAiRecognitionTemplateOcrFullTextConfigure): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class MpsAiRecognitionTemplateOcrFullTextConfigureOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MpsAiRecognitionTemplateOcrFullTextConfigure | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._switch !== undefined) {
      hasAnyValues = true;
      internalValueResult.switch = this._switch;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MpsAiRecognitionTemplateOcrFullTextConfigure | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._switch = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._switch = value.switch;
    }
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
export interface MpsAiRecognitionTemplateOcrWordsConfigure {
  /**
  * Keyword filter label, specify the label of the keyword to be returned. If not filled or empty, all results will be returned.The maximum number of tags is 10, and the length of each tag is up to 16 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/mps_ai_recognition_template#label_set MpsAiRecognitionTemplate#label_set}
  */
  readonly labelSet?: string[];
  /**
  * Ocr words recognition task switch, optional value:ON/OFF.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/mps_ai_recognition_template#switch MpsAiRecognitionTemplate#switch}
  */
  readonly switch: string;
}

export function mpsAiRecognitionTemplateOcrWordsConfigureToTerraform(struct?: MpsAiRecognitionTemplateOcrWordsConfigureOutputReference | MpsAiRecognitionTemplateOcrWordsConfigure): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    label_set: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.labelSet),
    switch: cdktf.stringToTerraform(struct!.switch),
  }
}


export function mpsAiRecognitionTemplateOcrWordsConfigureToHclTerraform(struct?: MpsAiRecognitionTemplateOcrWordsConfigureOutputReference | MpsAiRecognitionTemplateOcrWordsConfigure): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    label_set: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.labelSet),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
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

export class MpsAiRecognitionTemplateOcrWordsConfigureOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MpsAiRecognitionTemplateOcrWordsConfigure | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._labelSet !== undefined) {
      hasAnyValues = true;
      internalValueResult.labelSet = this._labelSet;
    }
    if (this._switch !== undefined) {
      hasAnyValues = true;
      internalValueResult.switch = this._switch;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MpsAiRecognitionTemplateOcrWordsConfigure | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._labelSet = undefined;
      this._switch = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._labelSet = value.labelSet;
      this._switch = value.switch;
    }
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

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/mps_ai_recognition_template tencentcloud_mps_ai_recognition_template}
*/
export class MpsAiRecognitionTemplate extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_mps_ai_recognition_template";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MpsAiRecognitionTemplate resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MpsAiRecognitionTemplate to import
  * @param importFromId The id of the existing MpsAiRecognitionTemplate that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/mps_ai_recognition_template#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MpsAiRecognitionTemplate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_mps_ai_recognition_template", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/mps_ai_recognition_template tencentcloud_mps_ai_recognition_template} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MpsAiRecognitionTemplateConfig = {}
  */
  public constructor(scope: Construct, id: string, config: MpsAiRecognitionTemplateConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_mps_ai_recognition_template',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.39',
        providerVersionConstraint: '1.82.39'
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
    this._asrFullTextConfigure.internalValue = config.asrFullTextConfigure;
    this._asrWordsConfigure.internalValue = config.asrWordsConfigure;
    this._faceConfigure.internalValue = config.faceConfigure;
    this._ocrFullTextConfigure.internalValue = config.ocrFullTextConfigure;
    this._ocrWordsConfigure.internalValue = config.ocrWordsConfigure;
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

  // asr_full_text_configure - computed: false, optional: true, required: false
  private _asrFullTextConfigure = new MpsAiRecognitionTemplateAsrFullTextConfigureOutputReference(this, "asr_full_text_configure");
  public get asrFullTextConfigure() {
    return this._asrFullTextConfigure;
  }
  public putAsrFullTextConfigure(value: MpsAiRecognitionTemplateAsrFullTextConfigure) {
    this._asrFullTextConfigure.internalValue = value;
  }
  public resetAsrFullTextConfigure() {
    this._asrFullTextConfigure.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asrFullTextConfigureInput() {
    return this._asrFullTextConfigure.internalValue;
  }

  // asr_words_configure - computed: false, optional: true, required: false
  private _asrWordsConfigure = new MpsAiRecognitionTemplateAsrWordsConfigureOutputReference(this, "asr_words_configure");
  public get asrWordsConfigure() {
    return this._asrWordsConfigure;
  }
  public putAsrWordsConfigure(value: MpsAiRecognitionTemplateAsrWordsConfigure) {
    this._asrWordsConfigure.internalValue = value;
  }
  public resetAsrWordsConfigure() {
    this._asrWordsConfigure.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asrWordsConfigureInput() {
    return this._asrWordsConfigure.internalValue;
  }

  // face_configure - computed: false, optional: true, required: false
  private _faceConfigure = new MpsAiRecognitionTemplateFaceConfigureOutputReference(this, "face_configure");
  public get faceConfigure() {
    return this._faceConfigure;
  }
  public putFaceConfigure(value: MpsAiRecognitionTemplateFaceConfigure) {
    this._faceConfigure.internalValue = value;
  }
  public resetFaceConfigure() {
    this._faceConfigure.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get faceConfigureInput() {
    return this._faceConfigure.internalValue;
  }

  // ocr_full_text_configure - computed: false, optional: true, required: false
  private _ocrFullTextConfigure = new MpsAiRecognitionTemplateOcrFullTextConfigureOutputReference(this, "ocr_full_text_configure");
  public get ocrFullTextConfigure() {
    return this._ocrFullTextConfigure;
  }
  public putOcrFullTextConfigure(value: MpsAiRecognitionTemplateOcrFullTextConfigure) {
    this._ocrFullTextConfigure.internalValue = value;
  }
  public resetOcrFullTextConfigure() {
    this._ocrFullTextConfigure.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ocrFullTextConfigureInput() {
    return this._ocrFullTextConfigure.internalValue;
  }

  // ocr_words_configure - computed: false, optional: true, required: false
  private _ocrWordsConfigure = new MpsAiRecognitionTemplateOcrWordsConfigureOutputReference(this, "ocr_words_configure");
  public get ocrWordsConfigure() {
    return this._ocrWordsConfigure;
  }
  public putOcrWordsConfigure(value: MpsAiRecognitionTemplateOcrWordsConfigure) {
    this._ocrWordsConfigure.internalValue = value;
  }
  public resetOcrWordsConfigure() {
    this._ocrWordsConfigure.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ocrWordsConfigureInput() {
    return this._ocrWordsConfigure.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      comment: cdktf.stringToTerraform(this._comment),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      asr_full_text_configure: mpsAiRecognitionTemplateAsrFullTextConfigureToTerraform(this._asrFullTextConfigure.internalValue),
      asr_words_configure: mpsAiRecognitionTemplateAsrWordsConfigureToTerraform(this._asrWordsConfigure.internalValue),
      face_configure: mpsAiRecognitionTemplateFaceConfigureToTerraform(this._faceConfigure.internalValue),
      ocr_full_text_configure: mpsAiRecognitionTemplateOcrFullTextConfigureToTerraform(this._ocrFullTextConfigure.internalValue),
      ocr_words_configure: mpsAiRecognitionTemplateOcrWordsConfigureToTerraform(this._ocrWordsConfigure.internalValue),
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
      asr_full_text_configure: {
        value: mpsAiRecognitionTemplateAsrFullTextConfigureToHclTerraform(this._asrFullTextConfigure.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MpsAiRecognitionTemplateAsrFullTextConfigureList",
      },
      asr_words_configure: {
        value: mpsAiRecognitionTemplateAsrWordsConfigureToHclTerraform(this._asrWordsConfigure.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MpsAiRecognitionTemplateAsrWordsConfigureList",
      },
      face_configure: {
        value: mpsAiRecognitionTemplateFaceConfigureToHclTerraform(this._faceConfigure.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MpsAiRecognitionTemplateFaceConfigureList",
      },
      ocr_full_text_configure: {
        value: mpsAiRecognitionTemplateOcrFullTextConfigureToHclTerraform(this._ocrFullTextConfigure.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MpsAiRecognitionTemplateOcrFullTextConfigureList",
      },
      ocr_words_configure: {
        value: mpsAiRecognitionTemplateOcrWordsConfigureToHclTerraform(this._ocrWordsConfigure.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MpsAiRecognitionTemplateOcrWordsConfigureList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
