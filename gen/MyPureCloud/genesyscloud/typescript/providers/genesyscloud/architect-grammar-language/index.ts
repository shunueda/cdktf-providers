// https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/architect_grammar_language
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ArchitectGrammarLanguageConfig extends cdktf.TerraformMetaArguments {
  /**
  * The id of the grammar this language belongs too. If this is changed a new language is created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/architect_grammar_language#grammar_id ArchitectGrammarLanguage#grammar_id}
  */
  readonly grammarId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/architect_grammar_language#id ArchitectGrammarLanguage#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Language name. (eg. en-us). If this is changed a new language is created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/architect_grammar_language#language ArchitectGrammarLanguage#language}
  */
  readonly language: string;
  /**
  * dtmf_file_data block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/architect_grammar_language#dtmf_file_data ArchitectGrammarLanguage#dtmf_file_data}
  */
  readonly dtmfFileData?: ArchitectGrammarLanguageDtmfFileData;
  /**
  * voice_file_data block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/architect_grammar_language#voice_file_data ArchitectGrammarLanguage#voice_file_data}
  */
  readonly voiceFileData?: ArchitectGrammarLanguageVoiceFileData;
}
export interface ArchitectGrammarLanguageDtmfFileData {
  /**
  * Hash value of the file content. Used to detect changes. Required for non-S3 file paths.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/architect_grammar_language#file_content_hash ArchitectGrammarLanguage#file_content_hash}
  */
  readonly fileContentHash?: string;
  /**
  * The name of the file as defined by the user. Note: Changes to files stored in S3 will not be detected by Terraform due to a technical limitation in the Terraform Plugin SDK.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/architect_grammar_language#file_name ArchitectGrammarLanguage#file_name}
  */
  readonly fileName: string;
  /**
  * The extension of the file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/architect_grammar_language#file_type ArchitectGrammarLanguage#file_type}
  */
  readonly fileType: string;
}

export function architectGrammarLanguageDtmfFileDataToTerraform(struct?: ArchitectGrammarLanguageDtmfFileDataOutputReference | ArchitectGrammarLanguageDtmfFileData): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    file_content_hash: cdktf.stringToTerraform(struct!.fileContentHash),
    file_name: cdktf.stringToTerraform(struct!.fileName),
    file_type: cdktf.stringToTerraform(struct!.fileType),
  }
}


export function architectGrammarLanguageDtmfFileDataToHclTerraform(struct?: ArchitectGrammarLanguageDtmfFileDataOutputReference | ArchitectGrammarLanguageDtmfFileData): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    file_content_hash: {
      value: cdktf.stringToHclTerraform(struct!.fileContentHash),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    file_name: {
      value: cdktf.stringToHclTerraform(struct!.fileName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    file_type: {
      value: cdktf.stringToHclTerraform(struct!.fileType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ArchitectGrammarLanguageDtmfFileDataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ArchitectGrammarLanguageDtmfFileData | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fileContentHash !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileContentHash = this._fileContentHash;
    }
    if (this._fileName !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileName = this._fileName;
    }
    if (this._fileType !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileType = this._fileType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ArchitectGrammarLanguageDtmfFileData | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._fileContentHash = undefined;
      this._fileName = undefined;
      this._fileType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._fileContentHash = value.fileContentHash;
      this._fileName = value.fileName;
      this._fileType = value.fileType;
    }
  }

  // file_content_hash - computed: false, optional: true, required: false
  private _fileContentHash?: string; 
  public get fileContentHash() {
    return this.getStringAttribute('file_content_hash');
  }
  public set fileContentHash(value: string) {
    this._fileContentHash = value;
  }
  public resetFileContentHash() {
    this._fileContentHash = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileContentHashInput() {
    return this._fileContentHash;
  }

  // file_name - computed: false, optional: false, required: true
  private _fileName?: string; 
  public get fileName() {
    return this.getStringAttribute('file_name');
  }
  public set fileName(value: string) {
    this._fileName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fileNameInput() {
    return this._fileName;
  }

  // file_type - computed: false, optional: false, required: true
  private _fileType?: string; 
  public get fileType() {
    return this.getStringAttribute('file_type');
  }
  public set fileType(value: string) {
    this._fileType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fileTypeInput() {
    return this._fileType;
  }
}
export interface ArchitectGrammarLanguageVoiceFileData {
  /**
  * Hash value of the file content. Used to detect changes. Required for non-S3 file paths.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/architect_grammar_language#file_content_hash ArchitectGrammarLanguage#file_content_hash}
  */
  readonly fileContentHash?: string;
  /**
  * The name of the file as defined by the user. Note: Changes to files stored in S3 will not be detected by Terraform due to a technical limitation in the Terraform Plugin SDK.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/architect_grammar_language#file_name ArchitectGrammarLanguage#file_name}
  */
  readonly fileName: string;
  /**
  * The extension of the file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/architect_grammar_language#file_type ArchitectGrammarLanguage#file_type}
  */
  readonly fileType: string;
}

export function architectGrammarLanguageVoiceFileDataToTerraform(struct?: ArchitectGrammarLanguageVoiceFileDataOutputReference | ArchitectGrammarLanguageVoiceFileData): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    file_content_hash: cdktf.stringToTerraform(struct!.fileContentHash),
    file_name: cdktf.stringToTerraform(struct!.fileName),
    file_type: cdktf.stringToTerraform(struct!.fileType),
  }
}


export function architectGrammarLanguageVoiceFileDataToHclTerraform(struct?: ArchitectGrammarLanguageVoiceFileDataOutputReference | ArchitectGrammarLanguageVoiceFileData): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    file_content_hash: {
      value: cdktf.stringToHclTerraform(struct!.fileContentHash),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    file_name: {
      value: cdktf.stringToHclTerraform(struct!.fileName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    file_type: {
      value: cdktf.stringToHclTerraform(struct!.fileType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ArchitectGrammarLanguageVoiceFileDataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ArchitectGrammarLanguageVoiceFileData | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fileContentHash !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileContentHash = this._fileContentHash;
    }
    if (this._fileName !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileName = this._fileName;
    }
    if (this._fileType !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileType = this._fileType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ArchitectGrammarLanguageVoiceFileData | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._fileContentHash = undefined;
      this._fileName = undefined;
      this._fileType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._fileContentHash = value.fileContentHash;
      this._fileName = value.fileName;
      this._fileType = value.fileType;
    }
  }

  // file_content_hash - computed: false, optional: true, required: false
  private _fileContentHash?: string; 
  public get fileContentHash() {
    return this.getStringAttribute('file_content_hash');
  }
  public set fileContentHash(value: string) {
    this._fileContentHash = value;
  }
  public resetFileContentHash() {
    this._fileContentHash = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileContentHashInput() {
    return this._fileContentHash;
  }

  // file_name - computed: false, optional: false, required: true
  private _fileName?: string; 
  public get fileName() {
    return this.getStringAttribute('file_name');
  }
  public set fileName(value: string) {
    this._fileName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fileNameInput() {
    return this._fileName;
  }

  // file_type - computed: false, optional: false, required: true
  private _fileType?: string; 
  public get fileType() {
    return this.getStringAttribute('file_type');
  }
  public set fileType(value: string) {
    this._fileType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fileTypeInput() {
    return this._fileType;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/architect_grammar_language genesyscloud_architect_grammar_language}
*/
export class ArchitectGrammarLanguage extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "genesyscloud_architect_grammar_language";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ArchitectGrammarLanguage resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ArchitectGrammarLanguage to import
  * @param importFromId The id of the existing ArchitectGrammarLanguage that should be imported. Refer to the {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/architect_grammar_language#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ArchitectGrammarLanguage to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "genesyscloud_architect_grammar_language", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/architect_grammar_language genesyscloud_architect_grammar_language} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ArchitectGrammarLanguageConfig
  */
  public constructor(scope: Construct, id: string, config: ArchitectGrammarLanguageConfig) {
    super(scope, id, {
      terraformResourceType: 'genesyscloud_architect_grammar_language',
      terraformGeneratorMetadata: {
        providerName: 'genesyscloud',
        providerVersion: '1.73.0',
        providerVersionConstraint: '1.73.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._grammarId = config.grammarId;
    this._id = config.id;
    this._language = config.language;
    this._dtmfFileData.internalValue = config.dtmfFileData;
    this._voiceFileData.internalValue = config.voiceFileData;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // grammar_id - computed: false, optional: false, required: true
  private _grammarId?: string; 
  public get grammarId() {
    return this.getStringAttribute('grammar_id');
  }
  public set grammarId(value: string) {
    this._grammarId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get grammarIdInput() {
    return this._grammarId;
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

  // language - computed: false, optional: false, required: true
  private _language?: string; 
  public get language() {
    return this.getStringAttribute('language');
  }
  public set language(value: string) {
    this._language = value;
  }
  // Temporarily expose input value. Use with caution.
  public get languageInput() {
    return this._language;
  }

  // dtmf_file_data - computed: false, optional: true, required: false
  private _dtmfFileData = new ArchitectGrammarLanguageDtmfFileDataOutputReference(this, "dtmf_file_data");
  public get dtmfFileData() {
    return this._dtmfFileData;
  }
  public putDtmfFileData(value: ArchitectGrammarLanguageDtmfFileData) {
    this._dtmfFileData.internalValue = value;
  }
  public resetDtmfFileData() {
    this._dtmfFileData.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dtmfFileDataInput() {
    return this._dtmfFileData.internalValue;
  }

  // voice_file_data - computed: false, optional: true, required: false
  private _voiceFileData = new ArchitectGrammarLanguageVoiceFileDataOutputReference(this, "voice_file_data");
  public get voiceFileData() {
    return this._voiceFileData;
  }
  public putVoiceFileData(value: ArchitectGrammarLanguageVoiceFileData) {
    this._voiceFileData.internalValue = value;
  }
  public resetVoiceFileData() {
    this._voiceFileData.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get voiceFileDataInput() {
    return this._voiceFileData.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      grammar_id: cdktf.stringToTerraform(this._grammarId),
      id: cdktf.stringToTerraform(this._id),
      language: cdktf.stringToTerraform(this._language),
      dtmf_file_data: architectGrammarLanguageDtmfFileDataToTerraform(this._dtmfFileData.internalValue),
      voice_file_data: architectGrammarLanguageVoiceFileDataToTerraform(this._voiceFileData.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      grammar_id: {
        value: cdktf.stringToHclTerraform(this._grammarId),
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
      language: {
        value: cdktf.stringToHclTerraform(this._language),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dtmf_file_data: {
        value: architectGrammarLanguageDtmfFileDataToHclTerraform(this._dtmfFileData.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ArchitectGrammarLanguageDtmfFileDataList",
      },
      voice_file_data: {
        value: architectGrammarLanguageVoiceFileDataToHclTerraform(this._voiceFileData.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ArchitectGrammarLanguageVoiceFileDataList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
