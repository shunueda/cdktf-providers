// https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/stage_captcha
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface StageCaptchaConfig extends cdktf.TerraformMetaArguments {
  /**
  * Defaults to `https://www.recaptcha.net/recaptcha/api/siteverify`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/stage_captcha#api_url StageCaptcha#api_url}
  */
  readonly apiUrl?: string;
  /**
  * Defaults to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/stage_captcha#error_on_invalid_score StageCaptcha#error_on_invalid_score}
  */
  readonly errorOnInvalidScore?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/stage_captcha#id StageCaptcha#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/stage_captcha#interactive StageCaptcha#interactive}
  */
  readonly interactive?: boolean | cdktf.IResolvable;
  /**
  * Defaults to `https://www.recaptcha.net/recaptcha/api.js`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/stage_captcha#js_url StageCaptcha#js_url}
  */
  readonly jsUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/stage_captcha#name StageCaptcha#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/stage_captcha#private_key StageCaptcha#private_key}
  */
  readonly privateKey: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/stage_captcha#public_key StageCaptcha#public_key}
  */
  readonly publicKey: string;
  /**
  * Defaults to `0.5`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/stage_captcha#score_max_threshold StageCaptcha#score_max_threshold}
  */
  readonly scoreMaxThreshold?: number;
  /**
  * Defaults to `1`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/stage_captcha#score_min_threshold StageCaptcha#score_min_threshold}
  */
  readonly scoreMinThreshold?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/stage_captcha authentik_stage_captcha}
*/
export class StageCaptcha extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "authentik_stage_captcha";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a StageCaptcha resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the StageCaptcha to import
  * @param importFromId The id of the existing StageCaptcha that should be imported. Refer to the {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/stage_captcha#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the StageCaptcha to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "authentik_stage_captcha", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/stage_captcha authentik_stage_captcha} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options StageCaptchaConfig
  */
  public constructor(scope: Construct, id: string, config: StageCaptchaConfig) {
    super(scope, id, {
      terraformResourceType: 'authentik_stage_captcha',
      terraformGeneratorMetadata: {
        providerName: 'authentik',
        providerVersion: '2025.10.0',
        providerVersionConstraint: '2025.10.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._apiUrl = config.apiUrl;
    this._errorOnInvalidScore = config.errorOnInvalidScore;
    this._id = config.id;
    this._interactive = config.interactive;
    this._jsUrl = config.jsUrl;
    this._name = config.name;
    this._privateKey = config.privateKey;
    this._publicKey = config.publicKey;
    this._scoreMaxThreshold = config.scoreMaxThreshold;
    this._scoreMinThreshold = config.scoreMinThreshold;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // api_url - computed: false, optional: true, required: false
  private _apiUrl?: string; 
  public get apiUrl() {
    return this.getStringAttribute('api_url');
  }
  public set apiUrl(value: string) {
    this._apiUrl = value;
  }
  public resetApiUrl() {
    this._apiUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiUrlInput() {
    return this._apiUrl;
  }

  // error_on_invalid_score - computed: false, optional: true, required: false
  private _errorOnInvalidScore?: boolean | cdktf.IResolvable; 
  public get errorOnInvalidScore() {
    return this.getBooleanAttribute('error_on_invalid_score');
  }
  public set errorOnInvalidScore(value: boolean | cdktf.IResolvable) {
    this._errorOnInvalidScore = value;
  }
  public resetErrorOnInvalidScore() {
    this._errorOnInvalidScore = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorOnInvalidScoreInput() {
    return this._errorOnInvalidScore;
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

  // interactive - computed: false, optional: true, required: false
  private _interactive?: boolean | cdktf.IResolvable; 
  public get interactive() {
    return this.getBooleanAttribute('interactive');
  }
  public set interactive(value: boolean | cdktf.IResolvable) {
    this._interactive = value;
  }
  public resetInteractive() {
    this._interactive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interactiveInput() {
    return this._interactive;
  }

  // js_url - computed: false, optional: true, required: false
  private _jsUrl?: string; 
  public get jsUrl() {
    return this.getStringAttribute('js_url');
  }
  public set jsUrl(value: string) {
    this._jsUrl = value;
  }
  public resetJsUrl() {
    this._jsUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jsUrlInput() {
    return this._jsUrl;
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

  // private_key - computed: false, optional: false, required: true
  private _privateKey?: string; 
  public get privateKey() {
    return this.getStringAttribute('private_key');
  }
  public set privateKey(value: string) {
    this._privateKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get privateKeyInput() {
    return this._privateKey;
  }

  // public_key - computed: false, optional: false, required: true
  private _publicKey?: string; 
  public get publicKey() {
    return this.getStringAttribute('public_key');
  }
  public set publicKey(value: string) {
    this._publicKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get publicKeyInput() {
    return this._publicKey;
  }

  // score_max_threshold - computed: false, optional: true, required: false
  private _scoreMaxThreshold?: number; 
  public get scoreMaxThreshold() {
    return this.getNumberAttribute('score_max_threshold');
  }
  public set scoreMaxThreshold(value: number) {
    this._scoreMaxThreshold = value;
  }
  public resetScoreMaxThreshold() {
    this._scoreMaxThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scoreMaxThresholdInput() {
    return this._scoreMaxThreshold;
  }

  // score_min_threshold - computed: false, optional: true, required: false
  private _scoreMinThreshold?: number; 
  public get scoreMinThreshold() {
    return this.getNumberAttribute('score_min_threshold');
  }
  public set scoreMinThreshold(value: number) {
    this._scoreMinThreshold = value;
  }
  public resetScoreMinThreshold() {
    this._scoreMinThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scoreMinThresholdInput() {
    return this._scoreMinThreshold;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      api_url: cdktf.stringToTerraform(this._apiUrl),
      error_on_invalid_score: cdktf.booleanToTerraform(this._errorOnInvalidScore),
      id: cdktf.stringToTerraform(this._id),
      interactive: cdktf.booleanToTerraform(this._interactive),
      js_url: cdktf.stringToTerraform(this._jsUrl),
      name: cdktf.stringToTerraform(this._name),
      private_key: cdktf.stringToTerraform(this._privateKey),
      public_key: cdktf.stringToTerraform(this._publicKey),
      score_max_threshold: cdktf.numberToTerraform(this._scoreMaxThreshold),
      score_min_threshold: cdktf.numberToTerraform(this._scoreMinThreshold),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      api_url: {
        value: cdktf.stringToHclTerraform(this._apiUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      error_on_invalid_score: {
        value: cdktf.booleanToHclTerraform(this._errorOnInvalidScore),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      interactive: {
        value: cdktf.booleanToHclTerraform(this._interactive),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      js_url: {
        value: cdktf.stringToHclTerraform(this._jsUrl),
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
      private_key: {
        value: cdktf.stringToHclTerraform(this._privateKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      public_key: {
        value: cdktf.stringToHclTerraform(this._publicKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      score_max_threshold: {
        value: cdktf.numberToHclTerraform(this._scoreMaxThreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      score_min_threshold: {
        value: cdktf.numberToHclTerraform(this._scoreMinThreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
