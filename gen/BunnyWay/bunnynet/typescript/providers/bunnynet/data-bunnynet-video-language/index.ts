// https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.2/docs/data-sources/video_language
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataBunnynetVideoLanguageConfig extends cdktf.TerraformMetaArguments {
  /**
  * The code of the video language.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.2/docs/data-sources/video_language#code DataBunnynetVideoLanguage#code}
  */
  readonly code: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.2/docs/data-sources/video_language bunnynet_video_language}
*/
export class DataBunnynetVideoLanguage extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "bunnynet_video_language";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataBunnynetVideoLanguage resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataBunnynetVideoLanguage to import
  * @param importFromId The id of the existing DataBunnynetVideoLanguage that should be imported. Refer to the {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.2/docs/data-sources/video_language#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataBunnynetVideoLanguage to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "bunnynet_video_language", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.2/docs/data-sources/video_language bunnynet_video_language} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataBunnynetVideoLanguageConfig
  */
  public constructor(scope: Construct, id: string, config: DataBunnynetVideoLanguageConfig) {
    super(scope, id, {
      terraformResourceType: 'bunnynet_video_language',
      terraformGeneratorMetadata: {
        providerName: 'bunnynet',
        providerVersion: '0.11.2',
        providerVersionConstraint: '0.11.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._code = config.code;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // code - computed: false, optional: false, required: true
  private _code?: string; 
  public get code() {
    return this.getStringAttribute('code');
  }
  public set code(value: string) {
    this._code = value;
  }
  // Temporarily expose input value. Use with caution.
  public get codeInput() {
    return this._code;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // support_player_translation - computed: true, optional: false, required: false
  public get supportPlayerTranslation() {
    return this.getBooleanAttribute('support_player_translation');
  }

  // support_transcribing - computed: true, optional: false, required: false
  public get supportTranscribing() {
    return this.getBooleanAttribute('support_transcribing');
  }

  // transcribing_accuracy - computed: true, optional: false, required: false
  public get transcribingAccuracy() {
    return this.getNumberAttribute('transcribing_accuracy');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      code: cdktf.stringToTerraform(this._code),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      code: {
        value: cdktf.stringToHclTerraform(this._code),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
