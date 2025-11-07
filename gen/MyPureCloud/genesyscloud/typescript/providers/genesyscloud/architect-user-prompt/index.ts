// https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/architect_user_prompt
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ArchitectUserPromptConfig extends cdktf.TerraformMetaArguments {
  /**
  * Description of the user audio prompt.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/architect_user_prompt#description ArchitectUserPrompt#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/architect_user_prompt#id ArchitectUserPrompt#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of the user audio prompt. Note: If the name of the user prompt is changed, this will cause the Prompt to be dropped and recreated with a new ID. This will generate a new ID for the prompt and will invalidate any Architect flows referencing it.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/architect_user_prompt#name ArchitectUserPrompt#name}
  */
  readonly name: string;
  /**
  * Audio of TTS resources for the audio prompt.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/architect_user_prompt#resources ArchitectUserPrompt#resources}
  */
  readonly resources?: ArchitectUserPromptResources[] | cdktf.IResolvable;
}
export interface ArchitectUserPromptResources {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/architect_user_prompt#file_content_hash ArchitectUserPrompt#file_content_hash}
  */
  readonly fileContentHash?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/architect_user_prompt#filename ArchitectUserPrompt#filename}
  */
  readonly filename?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/architect_user_prompt#language ArchitectUserPrompt#language}
  */
  readonly language?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/architect_user_prompt#text ArchitectUserPrompt#text}
  */
  readonly text?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/architect_user_prompt#tts_string ArchitectUserPrompt#tts_string}
  */
  readonly ttsString?: string;
}

export function architectUserPromptResourcesToTerraform(struct?: ArchitectUserPromptResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    file_content_hash: cdktf.stringToTerraform(struct!.fileContentHash),
    filename: cdktf.stringToTerraform(struct!.filename),
    language: cdktf.stringToTerraform(struct!.language),
    text: cdktf.stringToTerraform(struct!.text),
    tts_string: cdktf.stringToTerraform(struct!.ttsString),
  }
}


export function architectUserPromptResourcesToHclTerraform(struct?: ArchitectUserPromptResources | cdktf.IResolvable): any {
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
    filename: {
      value: cdktf.stringToHclTerraform(struct!.filename),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    language: {
      value: cdktf.stringToHclTerraform(struct!.language),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    text: {
      value: cdktf.stringToHclTerraform(struct!.text),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tts_string: {
      value: cdktf.stringToHclTerraform(struct!.ttsString),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ArchitectUserPromptResourcesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ArchitectUserPromptResources | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fileContentHash !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileContentHash = this._fileContentHash;
    }
    if (this._filename !== undefined) {
      hasAnyValues = true;
      internalValueResult.filename = this._filename;
    }
    if (this._language !== undefined) {
      hasAnyValues = true;
      internalValueResult.language = this._language;
    }
    if (this._text !== undefined) {
      hasAnyValues = true;
      internalValueResult.text = this._text;
    }
    if (this._ttsString !== undefined) {
      hasAnyValues = true;
      internalValueResult.ttsString = this._ttsString;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ArchitectUserPromptResources | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fileContentHash = undefined;
      this._filename = undefined;
      this._language = undefined;
      this._text = undefined;
      this._ttsString = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fileContentHash = value.fileContentHash;
      this._filename = value.filename;
      this._language = value.language;
      this._text = value.text;
      this._ttsString = value.ttsString;
    }
  }

  // file_content_hash - computed: true, optional: true, required: false
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

  // filename - computed: true, optional: true, required: false
  private _filename?: string; 
  public get filename() {
    return this.getStringAttribute('filename');
  }
  public set filename(value: string) {
    this._filename = value;
  }
  public resetFilename() {
    this._filename = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filenameInput() {
    return this._filename;
  }

  // language - computed: true, optional: true, required: false
  private _language?: string; 
  public get language() {
    return this.getStringAttribute('language');
  }
  public set language(value: string) {
    this._language = value;
  }
  public resetLanguage() {
    this._language = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get languageInput() {
    return this._language;
  }

  // text - computed: true, optional: true, required: false
  private _text?: string; 
  public get text() {
    return this.getStringAttribute('text');
  }
  public set text(value: string) {
    this._text = value;
  }
  public resetText() {
    this._text = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get textInput() {
    return this._text;
  }

  // tts_string - computed: true, optional: true, required: false
  private _ttsString?: string; 
  public get ttsString() {
    return this.getStringAttribute('tts_string');
  }
  public set ttsString(value: string) {
    this._ttsString = value;
  }
  public resetTtsString() {
    this._ttsString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ttsStringInput() {
    return this._ttsString;
  }
}

export class ArchitectUserPromptResourcesList extends cdktf.ComplexList {
  public internalValue? : ArchitectUserPromptResources[] | cdktf.IResolvable

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
  public get(index: number): ArchitectUserPromptResourcesOutputReference {
    return new ArchitectUserPromptResourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/architect_user_prompt genesyscloud_architect_user_prompt}
*/
export class ArchitectUserPrompt extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "genesyscloud_architect_user_prompt";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ArchitectUserPrompt resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ArchitectUserPrompt to import
  * @param importFromId The id of the existing ArchitectUserPrompt that should be imported. Refer to the {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/architect_user_prompt#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ArchitectUserPrompt to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "genesyscloud_architect_user_prompt", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/architect_user_prompt genesyscloud_architect_user_prompt} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ArchitectUserPromptConfig
  */
  public constructor(scope: Construct, id: string, config: ArchitectUserPromptConfig) {
    super(scope, id, {
      terraformResourceType: 'genesyscloud_architect_user_prompt',
      terraformGeneratorMetadata: {
        providerName: 'genesyscloud',
        providerVersion: '1.70.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._description = config.description;
    this._id = config.id;
    this._name = config.name;
    this._resources.internalValue = config.resources;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
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

  // resources - computed: true, optional: true, required: false
  private _resources = new ArchitectUserPromptResourcesList(this, "resources", true);
  public get resources() {
    return this._resources;
  }
  public putResources(value: ArchitectUserPromptResources[] | cdktf.IResolvable) {
    this._resources.internalValue = value;
  }
  public resetResources() {
    this._resources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesInput() {
    return this._resources.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      resources: cdktf.listMapper(architectUserPromptResourcesToTerraform, false)(this._resources.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
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
      resources: {
        value: cdktf.listMapperHcl(architectUserPromptResourcesToHclTerraform, false)(this._resources.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ArchitectUserPromptResourcesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
