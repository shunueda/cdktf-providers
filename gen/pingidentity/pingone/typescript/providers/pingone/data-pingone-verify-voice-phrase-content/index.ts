// https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/data-sources/verify_voice_phrase_content
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataPingoneVerifyVoicePhraseContentConfig extends cdktf.TerraformMetaArguments {
  /**
  * PingOne environment identifier (UUID) in which the verify voice phrase exists.  Must be a valid PingOne resource ID.  This field is immutable and will trigger a replace plan if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/data-sources/verify_voice_phrase_content#environment_id DataPingoneVerifyVoicePhraseContent#environment_id}
  */
  readonly environmentId: string;
  /**
  * Identifier (UUID) associated with the voice phrase content.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/data-sources/verify_voice_phrase_content#voice_phrase_content_id DataPingoneVerifyVoicePhraseContent#voice_phrase_content_id}
  */
  readonly voicePhraseContentId: string;
  /**
  * The identifier (UUID) of the `voice_phrase` associated with the `voice_phrase_content` configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/data-sources/verify_voice_phrase_content#voice_phrase_id DataPingoneVerifyVoicePhraseContent#voice_phrase_id}
  */
  readonly voicePhraseId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/data-sources/verify_voice_phrase_content pingone_verify_voice_phrase_content}
*/
export class DataPingoneVerifyVoicePhraseContent extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pingone_verify_voice_phrase_content";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataPingoneVerifyVoicePhraseContent resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataPingoneVerifyVoicePhraseContent to import
  * @param importFromId The id of the existing DataPingoneVerifyVoicePhraseContent that should be imported. Refer to the {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/data-sources/verify_voice_phrase_content#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataPingoneVerifyVoicePhraseContent to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pingone_verify_voice_phrase_content", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/data-sources/verify_voice_phrase_content pingone_verify_voice_phrase_content} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataPingoneVerifyVoicePhraseContentConfig
  */
  public constructor(scope: Construct, id: string, config: DataPingoneVerifyVoicePhraseContentConfig) {
    super(scope, id, {
      terraformResourceType: 'pingone_verify_voice_phrase_content',
      terraformGeneratorMetadata: {
        providerName: 'pingone',
        providerVersion: '1.14.0',
        providerVersionConstraint: '1.14.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._environmentId = config.environmentId;
    this._voicePhraseContentId = config.voicePhraseContentId;
    this._voicePhraseId = config.voicePhraseId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // content - computed: true, optional: false, required: false
  public get content() {
    return this.getStringAttribute('content');
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
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

  // locale - computed: true, optional: false, required: false
  public get locale() {
    return this.getStringAttribute('locale');
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // voice_phrase_content_id - computed: false, optional: false, required: true
  private _voicePhraseContentId?: string; 
  public get voicePhraseContentId() {
    return this.getStringAttribute('voice_phrase_content_id');
  }
  public set voicePhraseContentId(value: string) {
    this._voicePhraseContentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get voicePhraseContentIdInput() {
    return this._voicePhraseContentId;
  }

  // voice_phrase_id - computed: false, optional: false, required: true
  private _voicePhraseId?: string; 
  public get voicePhraseId() {
    return this.getStringAttribute('voice_phrase_id');
  }
  public set voicePhraseId(value: string) {
    this._voicePhraseId = value;
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
      environment_id: cdktf.stringToTerraform(this._environmentId),
      voice_phrase_content_id: cdktf.stringToTerraform(this._voicePhraseContentId),
      voice_phrase_id: cdktf.stringToTerraform(this._voicePhraseId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      environment_id: {
        value: cdktf.stringToHclTerraform(this._environmentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      voice_phrase_content_id: {
        value: cdktf.stringToHclTerraform(this._voicePhraseContentId),
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
