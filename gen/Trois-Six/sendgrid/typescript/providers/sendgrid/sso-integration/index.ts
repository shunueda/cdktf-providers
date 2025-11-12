// https://registry.terraform.io/providers/trois-six/sendgrid/0.2.1/docs/resources/sso_integration
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SsoIntegrationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Indicates if the integration is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/trois-six/sendgrid/0.2.1/docs/resources/sso_integration#enabled SsoIntegration#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * An identifier provided by your IdP to identify Twilio SendGrid in the SAML interaction.
  * 					This is called the 'SAML Issuer ID' in the Twilio SendGrid UI.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/trois-six/sendgrid/0.2.1/docs/resources/sso_integration#entity_id SsoIntegration#entity_id}
  */
  readonly entityId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/trois-six/sendgrid/0.2.1/docs/resources/sso_integration#id SsoIntegration#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the integration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/trois-six/sendgrid/0.2.1/docs/resources/sso_integration#name SsoIntegration#name}
  */
  readonly name: string;
  /**
  * The IdP's SAML POST endpoint. This endpoint should receive requests
  * 					and initiate an SSO login flow. This is called the 'Embed Link' in the Twilio SendGrid UI.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/trois-six/sendgrid/0.2.1/docs/resources/sso_integration#signin_url SsoIntegration#signin_url}
  */
  readonly signinUrl?: string;
  /**
  * This URL is relevant only for an IdP-initiated authentication flow.
  * 					If a user authenticates from their IdP, this URL will return them to their IdP when logging out.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/trois-six/sendgrid/0.2.1/docs/resources/sso_integration#signout_url SsoIntegration#signout_url}
  */
  readonly signoutUrl?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/trois-six/sendgrid/0.2.1/docs/resources/sso_integration sendgrid_sso_integration}
*/
export class SsoIntegration extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sendgrid_sso_integration";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SsoIntegration resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SsoIntegration to import
  * @param importFromId The id of the existing SsoIntegration that should be imported. Refer to the {@link https://registry.terraform.io/providers/trois-six/sendgrid/0.2.1/docs/resources/sso_integration#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SsoIntegration to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sendgrid_sso_integration", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/trois-six/sendgrid/0.2.1/docs/resources/sso_integration sendgrid_sso_integration} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SsoIntegrationConfig
  */
  public constructor(scope: Construct, id: string, config: SsoIntegrationConfig) {
    super(scope, id, {
      terraformResourceType: 'sendgrid_sso_integration',
      terraformGeneratorMetadata: {
        providerName: 'sendgrid',
        providerVersion: '0.2.1',
        providerVersionConstraint: '0.2.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._enabled = config.enabled;
    this._entityId = config.entityId;
    this._id = config.id;
    this._name = config.name;
    this._signinUrl = config.signinUrl;
    this._signoutUrl = config.signoutUrl;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // audience_url - computed: true, optional: false, required: false
  public get audienceUrl() {
    return this.getStringAttribute('audience_url');
  }

  // completed_integration - computed: true, optional: false, required: false
  public get completedIntegration() {
    return this.getBooleanAttribute('completed_integration');
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // entity_id - computed: false, optional: true, required: false
  private _entityId?: string; 
  public get entityId() {
    return this.getStringAttribute('entity_id');
  }
  public set entityId(value: string) {
    this._entityId = value;
  }
  public resetEntityId() {
    this._entityId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entityIdInput() {
    return this._entityId;
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

  // signin_url - computed: false, optional: true, required: false
  private _signinUrl?: string; 
  public get signinUrl() {
    return this.getStringAttribute('signin_url');
  }
  public set signinUrl(value: string) {
    this._signinUrl = value;
  }
  public resetSigninUrl() {
    this._signinUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get signinUrlInput() {
    return this._signinUrl;
  }

  // signout_url - computed: false, optional: true, required: false
  private _signoutUrl?: string; 
  public get signoutUrl() {
    return this.getStringAttribute('signout_url');
  }
  public set signoutUrl(value: string) {
    this._signoutUrl = value;
  }
  public resetSignoutUrl() {
    this._signoutUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get signoutUrlInput() {
    return this._signoutUrl;
  }

  // single_signon_url - computed: true, optional: false, required: false
  public get singleSignonUrl() {
    return this.getStringAttribute('single_signon_url');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      enabled: cdktf.booleanToTerraform(this._enabled),
      entity_id: cdktf.stringToTerraform(this._entityId),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      signin_url: cdktf.stringToTerraform(this._signinUrl),
      signout_url: cdktf.stringToTerraform(this._signoutUrl),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      entity_id: {
        value: cdktf.stringToHclTerraform(this._entityId),
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
      signin_url: {
        value: cdktf.stringToHclTerraform(this._signinUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      signout_url: {
        value: cdktf.stringToHclTerraform(this._signoutUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
