// https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/forms_recaptcha_v2
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FormsRecaptchaV2Config extends cdktf.TerraformMetaArguments {
  /**
  * The ID of the environment to manage the reCAPTCHA v2 configuration in.  Must be a valid PingOne resource ID.  This field is immutable and will trigger a replace plan if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/forms_recaptcha_v2#environment_id FormsRecaptchaV2#environment_id}
  */
  readonly environmentId: string;
  /**
  * A string that specifies the confidential secret key for the Recaptcha configuration provided by Google. This is a required property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/forms_recaptcha_v2#secret_key FormsRecaptchaV2#secret_key}
  */
  readonly secretKey: string;
  /**
  * A string that specifies the public site key for the Recaptcha configuration provided by Google. This is a required property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/forms_recaptcha_v2#site_key FormsRecaptchaV2#site_key}
  */
  readonly siteKey: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/forms_recaptcha_v2 pingone_forms_recaptcha_v2}
*/
export class FormsRecaptchaV2 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pingone_forms_recaptcha_v2";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a FormsRecaptchaV2 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the FormsRecaptchaV2 to import
  * @param importFromId The id of the existing FormsRecaptchaV2 that should be imported. Refer to the {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/forms_recaptcha_v2#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the FormsRecaptchaV2 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pingone_forms_recaptcha_v2", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/forms_recaptcha_v2 pingone_forms_recaptcha_v2} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FormsRecaptchaV2Config
  */
  public constructor(scope: Construct, id: string, config: FormsRecaptchaV2Config) {
    super(scope, id, {
      terraformResourceType: 'pingone_forms_recaptcha_v2',
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
    this._environmentId = config.environmentId;
    this._secretKey = config.secretKey;
    this._siteKey = config.siteKey;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // secret_key - computed: false, optional: false, required: true
  private _secretKey?: string; 
  public get secretKey() {
    return this.getStringAttribute('secret_key');
  }
  public set secretKey(value: string) {
    this._secretKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretKeyInput() {
    return this._secretKey;
  }

  // site_key - computed: false, optional: false, required: true
  private _siteKey?: string; 
  public get siteKey() {
    return this.getStringAttribute('site_key');
  }
  public set siteKey(value: string) {
    this._siteKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get siteKeyInput() {
    return this._siteKey;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      environment_id: cdktf.stringToTerraform(this._environmentId),
      secret_key: cdktf.stringToTerraform(this._secretKey),
      site_key: cdktf.stringToTerraform(this._siteKey),
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
      secret_key: {
        value: cdktf.stringToHclTerraform(this._secretKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      site_key: {
        value: cdktf.stringToHclTerraform(this._siteKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
