// https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/data-sources/verify_voice_phrase
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataPingoneVerifyVoicePhraseConfig extends cdktf.TerraformMetaArguments {
  /**
  * Name of the voice phrase container displayed in PingOne Admin UI or other administrative interface managing the container.  Exactly one of the following must be defined: `voice_phrase_id`, `display_name`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/data-sources/verify_voice_phrase#display_name DataPingoneVerifyVoicePhrase#display_name}
  */
  readonly displayName?: string;
  /**
  * PingOne environment identifier (UUID) in which the verify voice phrase exists.  Must be a valid PingOne resource ID.  This field is immutable and will trigger a replace plan if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/data-sources/verify_voice_phrase#environment_id DataPingoneVerifyVoicePhrase#environment_id}
  */
  readonly environmentId: string;
  /**
  * Identifier (UUID) associated with the voice phrase.  Exactly one of the following must be defined: `voice_phrase_id`, `display_name`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/data-sources/verify_voice_phrase#voice_phrase_id DataPingoneVerifyVoicePhrase#voice_phrase_id}
  */
  readonly voicePhraseId?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/data-sources/verify_voice_phrase pingone_verify_voice_phrase}
*/
export class DataPingoneVerifyVoicePhrase extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pingone_verify_voice_phrase";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataPingoneVerifyVoicePhrase resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataPingoneVerifyVoicePhrase to import
  * @param importFromId The id of the existing DataPingoneVerifyVoicePhrase that should be imported. Refer to the {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/data-sources/verify_voice_phrase#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataPingoneVerifyVoicePhrase to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pingone_verify_voice_phrase", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/data-sources/verify_voice_phrase pingone_verify_voice_phrase} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataPingoneVerifyVoicePhraseConfig
  */
  public constructor(scope: Construct, id: string, config: DataPingoneVerifyVoicePhraseConfig) {
    super(scope, id, {
      terraformResourceType: 'pingone_verify_voice_phrase',
      terraformGeneratorMetadata: {
        providerName: 'pingone',
        providerVersion: '1.14.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._displayName = config.displayName;
    this._environmentId = config.environmentId;
    this._voicePhraseId = config.voicePhraseId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // display_name - computed: false, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // environment_id - computed: false, optional: false, required: true
  private _environmentId?: string; 
  public get environmentId() {
    return this.getStringAttribute('environment_id');
  }
  public set environmentId(value: string) {
    this._environmentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentIdInput() {
    return this._environmentId;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // voice_phrase_id - computed: false, optional: true, required: false
  private _voicePhraseId?: string; 
  public get voicePhraseId() {
    return this.getStringAttribute('voice_phrase_id');
  }
  public set voicePhraseId(value: string) {
    this._voicePhraseId = value;
  }
  public resetVoicePhraseId() {
    this._voicePhraseId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get voicePhraseIdInput() {
    return this._voicePhraseId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      display_name: cdktf.stringToTerraform(this._displayName),
      environment_id: cdktf.stringToTerraform(this._environmentId),
      voice_phrase_id: cdktf.stringToTerraform(this._voicePhraseId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      environment_id: {
        value: cdktf.stringToHclTerraform(this._environmentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      voice_phrase_id: {
        value: cdktf.stringToHclTerraform(this._voicePhraseId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
