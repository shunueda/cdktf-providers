// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/ci_media_speech_recognition_template
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CiMediaSpeechRecognitionTemplateConfig extends cdktf.TerraformMetaArguments {
  /**
  * bucket name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/ci_media_speech_recognition_template#bucket CiMediaSpeechRecognitionTemplate#bucket}
  */
  readonly bucket: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/ci_media_speech_recognition_template#id CiMediaSpeechRecognitionTemplate#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The template name only supports `Chinese`, `English`, `numbers`, `_`, `-` and `*`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/ci_media_speech_recognition_template#name CiMediaSpeechRecognitionTemplate#name}
  */
  readonly name: string;
  /**
  * speech_recognition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/ci_media_speech_recognition_template#speech_recognition CiMediaSpeechRecognitionTemplate#speech_recognition}
  */
  readonly speechRecognition: CiMediaSpeechRecognitionTemplateSpeechRecognition;
}
export interface CiMediaSpeechRecognitionTemplateSpeechRecognition {
  /**
  * Number of voice channels: 1 means mono. EngineModelType supports only mono for non-telephone scenarios, and 2 means dual channels (only 8k_zh engine model supports dual channels, which should correspond to both sides of the call).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/ci_media_speech_recognition_template#channel_num CiMediaSpeechRecognitionTemplate#channel_num}
  */
  readonly channelNum: string;
  /**
  * Whether to perform intelligent conversion of Arabic numerals (currently supports Mandarin Chinese engine): 0 means no conversion, directly output Chinese numbers, 1 means intelligently convert to Arabic numerals according to the scene, 3 means enable math-related digital conversion, the default value is 0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/ci_media_speech_recognition_template#convert_num_mode CiMediaSpeechRecognitionTemplate#convert_num_mode}
  */
  readonly convertNumMode?: string;
  /**
  * Engine model type, divided into phone scene and non-phone scene, phone scene: 8k_zh: phone 8k Chinese Mandarin general (can be used for dual-channel audio), 8k_zh_s: phone 8k Chinese Mandarin speaker separation (only for monophonic audio), 8k_en: Telephone 8k English; non-telephone scene: 16k_zh: 16k Mandarin Chinese, 16k_zh_video: 16k audio and video field, 16k_en: 16k English, 16k_ca: 16k Cantonese, 16k_ja: 16k Japanese, 16k_zh_edu: Chinese education, 16k_en_edu: English education, 16k_zh_medical: medical, 16k_th: Thai, 16k_zh_dialect: multi-dialect, supports 23 dialects.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/ci_media_speech_recognition_template#engine_model_type CiMediaSpeechRecognitionTemplate#engine_model_type}
  */
  readonly engineModelType: string;
  /**
  * Whether to filter dirty words (currently supports Mandarin Chinese engine): 0 means not to filter dirty words, 1 means to filter dirty words, 2 means to replace dirty words with *, the default value is 0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/ci_media_speech_recognition_template#filter_dirty CiMediaSpeechRecognitionTemplate#filter_dirty}
  */
  readonly filterDirty?: string;
  /**
  * Whether to pass modal particles (currently supports Mandarin Chinese engine): 0 means not to filter modal particles, 1 means partial filtering, 2 means strict filtering, and the default value is 0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/ci_media_speech_recognition_template#filter_modal CiMediaSpeechRecognitionTemplate#filter_modal}
  */
  readonly filterModal?: string;
  /**
  * Whether to filter punctuation (currently supports Mandarin Chinese engine): 0 means no filtering, 1 means filtering end-of-sentence punctuation, 2 means filtering all punctuation, the default value is 0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/ci_media_speech_recognition_template#filter_punc CiMediaSpeechRecognitionTemplate#filter_punc}
  */
  readonly filterPunc?: string;
  /**
  * Output file type, optional txt, srt. The default is txt.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/ci_media_speech_recognition_template#output_file_type CiMediaSpeechRecognitionTemplate#output_file_type}
  */
  readonly outputFileType?: string;
  /**
  * Recognition result return form: 0 means the recognition result text (including segmented time stamps), 1 is the detailed recognition result at the word level granularity, without punctuation, and includes the speech rate value (a list of word time stamps, generally used to generate subtitle scenes), 2 Detailed recognition results at word-level granularity (including punctuation and speech rate values)..
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/ci_media_speech_recognition_template#res_text_format CiMediaSpeechRecognitionTemplate#res_text_format}
  */
  readonly resTextFormat?: string;
  /**
  * Whether to enable speaker separation: 0 means not enabled, 1 means enabled (only supports 8k_zh, 16k_zh, 16k_zh_video, monophonic audio), the default value is 0, Note: 8K telephony scenarios suggest using dual-channel to distinguish between the two parties, set ChannelNum=2 is enough, no need to enable speaker separation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/ci_media_speech_recognition_template#speaker_diarization CiMediaSpeechRecognitionTemplate#speaker_diarization}
  */
  readonly speakerDiarization?: string;
  /**
  * The number of speakers to be separated (need to be used in conjunction with enabling speaker separation), value range: 0-10, 0 means automatic separation (currently only supports <= 6 people), 1-10 represents the number of specified speakers to be separated. The default value is 0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/ci_media_speech_recognition_template#speaker_number CiMediaSpeechRecognitionTemplate#speaker_number}
  */
  readonly speakerNumber?: string;
}

export function ciMediaSpeechRecognitionTemplateSpeechRecognitionToTerraform(struct?: CiMediaSpeechRecognitionTemplateSpeechRecognitionOutputReference | CiMediaSpeechRecognitionTemplateSpeechRecognition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    channel_num: cdktf.stringToTerraform(struct!.channelNum),
    convert_num_mode: cdktf.stringToTerraform(struct!.convertNumMode),
    engine_model_type: cdktf.stringToTerraform(struct!.engineModelType),
    filter_dirty: cdktf.stringToTerraform(struct!.filterDirty),
    filter_modal: cdktf.stringToTerraform(struct!.filterModal),
    filter_punc: cdktf.stringToTerraform(struct!.filterPunc),
    output_file_type: cdktf.stringToTerraform(struct!.outputFileType),
    res_text_format: cdktf.stringToTerraform(struct!.resTextFormat),
    speaker_diarization: cdktf.stringToTerraform(struct!.speakerDiarization),
    speaker_number: cdktf.stringToTerraform(struct!.speakerNumber),
  }
}


export function ciMediaSpeechRecognitionTemplateSpeechRecognitionToHclTerraform(struct?: CiMediaSpeechRecognitionTemplateSpeechRecognitionOutputReference | CiMediaSpeechRecognitionTemplateSpeechRecognition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    channel_num: {
      value: cdktf.stringToHclTerraform(struct!.channelNum),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    convert_num_mode: {
      value: cdktf.stringToHclTerraform(struct!.convertNumMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    engine_model_type: {
      value: cdktf.stringToHclTerraform(struct!.engineModelType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    filter_dirty: {
      value: cdktf.stringToHclTerraform(struct!.filterDirty),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    filter_modal: {
      value: cdktf.stringToHclTerraform(struct!.filterModal),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    filter_punc: {
      value: cdktf.stringToHclTerraform(struct!.filterPunc),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    output_file_type: {
      value: cdktf.stringToHclTerraform(struct!.outputFileType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    res_text_format: {
      value: cdktf.stringToHclTerraform(struct!.resTextFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    speaker_diarization: {
      value: cdktf.stringToHclTerraform(struct!.speakerDiarization),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    speaker_number: {
      value: cdktf.stringToHclTerraform(struct!.speakerNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CiMediaSpeechRecognitionTemplateSpeechRecognitionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CiMediaSpeechRecognitionTemplateSpeechRecognition | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._channelNum !== undefined) {
      hasAnyValues = true;
      internalValueResult.channelNum = this._channelNum;
    }
    if (this._convertNumMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.convertNumMode = this._convertNumMode;
    }
    if (this._engineModelType !== undefined) {
      hasAnyValues = true;
      internalValueResult.engineModelType = this._engineModelType;
    }
    if (this._filterDirty !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterDirty = this._filterDirty;
    }
    if (this._filterModal !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterModal = this._filterModal;
    }
    if (this._filterPunc !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterPunc = this._filterPunc;
    }
    if (this._outputFileType !== undefined) {
      hasAnyValues = true;
      internalValueResult.outputFileType = this._outputFileType;
    }
    if (this._resTextFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.resTextFormat = this._resTextFormat;
    }
    if (this._speakerDiarization !== undefined) {
      hasAnyValues = true;
      internalValueResult.speakerDiarization = this._speakerDiarization;
    }
    if (this._speakerNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.speakerNumber = this._speakerNumber;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CiMediaSpeechRecognitionTemplateSpeechRecognition | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._channelNum = undefined;
      this._convertNumMode = undefined;
      this._engineModelType = undefined;
      this._filterDirty = undefined;
      this._filterModal = undefined;
      this._filterPunc = undefined;
      this._outputFileType = undefined;
      this._resTextFormat = undefined;
      this._speakerDiarization = undefined;
      this._speakerNumber = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._channelNum = value.channelNum;
      this._convertNumMode = value.convertNumMode;
      this._engineModelType = value.engineModelType;
      this._filterDirty = value.filterDirty;
      this._filterModal = value.filterModal;
      this._filterPunc = value.filterPunc;
      this._outputFileType = value.outputFileType;
      this._resTextFormat = value.resTextFormat;
      this._speakerDiarization = value.speakerDiarization;
      this._speakerNumber = value.speakerNumber;
    }
  }

  // channel_num - computed: false, optional: false, required: true
  private _channelNum?: string; 
  public get channelNum() {
    return this.getStringAttribute('channel_num');
  }
  public set channelNum(value: string) {
    this._channelNum = value;
  }
  // Temporarily expose input value. Use with caution.
  public get channelNumInput() {
    return this._channelNum;
  }

  // convert_num_mode - computed: false, optional: true, required: false
  private _convertNumMode?: string; 
  public get convertNumMode() {
    return this.getStringAttribute('convert_num_mode');
  }
  public set convertNumMode(value: string) {
    this._convertNumMode = value;
  }
  public resetConvertNumMode() {
    this._convertNumMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get convertNumModeInput() {
    return this._convertNumMode;
  }

  // engine_model_type - computed: false, optional: false, required: true
  private _engineModelType?: string; 
  public get engineModelType() {
    return this.getStringAttribute('engine_model_type');
  }
  public set engineModelType(value: string) {
    this._engineModelType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get engineModelTypeInput() {
    return this._engineModelType;
  }

  // filter_dirty - computed: false, optional: true, required: false
  private _filterDirty?: string; 
  public get filterDirty() {
    return this.getStringAttribute('filter_dirty');
  }
  public set filterDirty(value: string) {
    this._filterDirty = value;
  }
  public resetFilterDirty() {
    this._filterDirty = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterDirtyInput() {
    return this._filterDirty;
  }

  // filter_modal - computed: false, optional: true, required: false
  private _filterModal?: string; 
  public get filterModal() {
    return this.getStringAttribute('filter_modal');
  }
  public set filterModal(value: string) {
    this._filterModal = value;
  }
  public resetFilterModal() {
    this._filterModal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterModalInput() {
    return this._filterModal;
  }

  // filter_punc - computed: false, optional: true, required: false
  private _filterPunc?: string; 
  public get filterPunc() {
    return this.getStringAttribute('filter_punc');
  }
  public set filterPunc(value: string) {
    this._filterPunc = value;
  }
  public resetFilterPunc() {
    this._filterPunc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterPuncInput() {
    return this._filterPunc;
  }

  // output_file_type - computed: false, optional: true, required: false
  private _outputFileType?: string; 
  public get outputFileType() {
    return this.getStringAttribute('output_file_type');
  }
  public set outputFileType(value: string) {
    this._outputFileType = value;
  }
  public resetOutputFileType() {
    this._outputFileType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputFileTypeInput() {
    return this._outputFileType;
  }

  // res_text_format - computed: false, optional: true, required: false
  private _resTextFormat?: string; 
  public get resTextFormat() {
    return this.getStringAttribute('res_text_format');
  }
  public set resTextFormat(value: string) {
    this._resTextFormat = value;
  }
  public resetResTextFormat() {
    this._resTextFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resTextFormatInput() {
    return this._resTextFormat;
  }

  // speaker_diarization - computed: false, optional: true, required: false
  private _speakerDiarization?: string; 
  public get speakerDiarization() {
    return this.getStringAttribute('speaker_diarization');
  }
  public set speakerDiarization(value: string) {
    this._speakerDiarization = value;
  }
  public resetSpeakerDiarization() {
    this._speakerDiarization = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get speakerDiarizationInput() {
    return this._speakerDiarization;
  }

  // speaker_number - computed: false, optional: true, required: false
  private _speakerNumber?: string; 
  public get speakerNumber() {
    return this.getStringAttribute('speaker_number');
  }
  public set speakerNumber(value: string) {
    this._speakerNumber = value;
  }
  public resetSpeakerNumber() {
    this._speakerNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get speakerNumberInput() {
    return this._speakerNumber;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/ci_media_speech_recognition_template tencentcloud_ci_media_speech_recognition_template}
*/
export class CiMediaSpeechRecognitionTemplate extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_ci_media_speech_recognition_template";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CiMediaSpeechRecognitionTemplate resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CiMediaSpeechRecognitionTemplate to import
  * @param importFromId The id of the existing CiMediaSpeechRecognitionTemplate that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/ci_media_speech_recognition_template#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CiMediaSpeechRecognitionTemplate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_ci_media_speech_recognition_template", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/ci_media_speech_recognition_template tencentcloud_ci_media_speech_recognition_template} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CiMediaSpeechRecognitionTemplateConfig
  */
  public constructor(scope: Construct, id: string, config: CiMediaSpeechRecognitionTemplateConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_ci_media_speech_recognition_template',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.38',
        providerVersionConstraint: '1.82.38'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._bucket = config.bucket;
    this._id = config.id;
    this._name = config.name;
    this._speechRecognition.internalValue = config.speechRecognition;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bucket - computed: false, optional: false, required: true
  private _bucket?: string; 
  public get bucket() {
    return this.getStringAttribute('bucket');
  }
  public set bucket(value: string) {
    this._bucket = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketInput() {
    return this._bucket;
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

  // speech_recognition - computed: false, optional: false, required: true
  private _speechRecognition = new CiMediaSpeechRecognitionTemplateSpeechRecognitionOutputReference(this, "speech_recognition");
  public get speechRecognition() {
    return this._speechRecognition;
  }
  public putSpeechRecognition(value: CiMediaSpeechRecognitionTemplateSpeechRecognition) {
    this._speechRecognition.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get speechRecognitionInput() {
    return this._speechRecognition.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      bucket: cdktf.stringToTerraform(this._bucket),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      speech_recognition: ciMediaSpeechRecognitionTemplateSpeechRecognitionToTerraform(this._speechRecognition.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      bucket: {
        value: cdktf.stringToHclTerraform(this._bucket),
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
      speech_recognition: {
        value: ciMediaSpeechRecognitionTemplateSpeechRecognitionToHclTerraform(this._speechRecognition.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CiMediaSpeechRecognitionTemplateSpeechRecognitionList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
