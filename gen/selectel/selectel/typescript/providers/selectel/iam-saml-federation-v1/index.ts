// https://registry.terraform.io/providers/selectel/selectel/7.1.0/docs/resources/iam_saml_federation_v1
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IamSamlFederationV1Config extends cdktf.TerraformMetaArguments {
  /**
  * Description of the Federation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/selectel/selectel/7.1.0/docs/resources/iam_saml_federation_v1#description IamSamlFederationV1#description}
  */
  readonly description?: string;
  /**
  * Enable forced authentication at every login.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/selectel/selectel/7.1.0/docs/resources/iam_saml_federation_v1#force_authn IamSamlFederationV1#force_authn}
  */
  readonly forceAuthn?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/selectel/selectel/7.1.0/docs/resources/iam_saml_federation_v1#id IamSamlFederationV1#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * ID of the credential provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/selectel/selectel/7.1.0/docs/resources/iam_saml_federation_v1#issuer IamSamlFederationV1#issuer}
  */
  readonly issuer: string;
  /**
  * Name of the Federation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/selectel/selectel/7.1.0/docs/resources/iam_saml_federation_v1#name IamSamlFederationV1#name}
  */
  readonly name: string;
  /**
  * Session lifetime.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/selectel/selectel/7.1.0/docs/resources/iam_saml_federation_v1#session_max_age_hours IamSamlFederationV1#session_max_age_hours}
  */
  readonly sessionMaxAgeHours: number;
  /**
  * Should sign authentication requests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/selectel/selectel/7.1.0/docs/resources/iam_saml_federation_v1#sign_authn_requests IamSamlFederationV1#sign_authn_requests}
  */
  readonly signAuthnRequests?: boolean | cdktf.IResolvable;
  /**
  * Single sign-on endpoint URL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/selectel/selectel/7.1.0/docs/resources/iam_saml_federation_v1#sso_url IamSamlFederationV1#sso_url}
  */
  readonly ssoUrl: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/selectel/selectel/7.1.0/docs/resources/iam_saml_federation_v1 selectel_iam_saml_federation_v1}
*/
export class IamSamlFederationV1 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "selectel_iam_saml_federation_v1";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IamSamlFederationV1 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IamSamlFederationV1 to import
  * @param importFromId The id of the existing IamSamlFederationV1 that should be imported. Refer to the {@link https://registry.terraform.io/providers/selectel/selectel/7.1.0/docs/resources/iam_saml_federation_v1#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IamSamlFederationV1 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "selectel_iam_saml_federation_v1", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/selectel/selectel/7.1.0/docs/resources/iam_saml_federation_v1 selectel_iam_saml_federation_v1} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IamSamlFederationV1Config
  */
  public constructor(scope: Construct, id: string, config: IamSamlFederationV1Config) {
    super(scope, id, {
      terraformResourceType: 'selectel_iam_saml_federation_v1',
      terraformGeneratorMetadata: {
        providerName: 'selectel',
        providerVersion: '7.1.0',
        providerVersionConstraint: '7.1.0'
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
    this._forceAuthn = config.forceAuthn;
    this._id = config.id;
    this._issuer = config.issuer;
    this._name = config.name;
    this._sessionMaxAgeHours = config.sessionMaxAgeHours;
    this._signAuthnRequests = config.signAuthnRequests;
    this._ssoUrl = config.ssoUrl;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_id - computed: true, optional: false, required: false
  public get accountId() {
    return this.getStringAttribute('account_id');
  }

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

  // force_authn - computed: false, optional: true, required: false
  private _forceAuthn?: boolean | cdktf.IResolvable; 
  public get forceAuthn() {
    return this.getBooleanAttribute('force_authn');
  }
  public set forceAuthn(value: boolean | cdktf.IResolvable) {
    this._forceAuthn = value;
  }
  public resetForceAuthn() {
    this._forceAuthn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceAuthnInput() {
    return this._forceAuthn;
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

  // issuer - computed: false, optional: false, required: true
  private _issuer?: string; 
  public get issuer() {
    return this.getStringAttribute('issuer');
  }
  public set issuer(value: string) {
    this._issuer = value;
  }
  // Temporarily expose input value. Use with caution.
  public get issuerInput() {
    return this._issuer;
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

  // session_max_age_hours - computed: false, optional: false, required: true
  private _sessionMaxAgeHours?: number; 
  public get sessionMaxAgeHours() {
    return this.getNumberAttribute('session_max_age_hours');
  }
  public set sessionMaxAgeHours(value: number) {
    this._sessionMaxAgeHours = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionMaxAgeHoursInput() {
    return this._sessionMaxAgeHours;
  }

  // sign_authn_requests - computed: false, optional: true, required: false
  private _signAuthnRequests?: boolean | cdktf.IResolvable; 
  public get signAuthnRequests() {
    return this.getBooleanAttribute('sign_authn_requests');
  }
  public set signAuthnRequests(value: boolean | cdktf.IResolvable) {
    this._signAuthnRequests = value;
  }
  public resetSignAuthnRequests() {
    this._signAuthnRequests = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get signAuthnRequestsInput() {
    return this._signAuthnRequests;
  }

  // sso_url - computed: false, optional: false, required: true
  private _ssoUrl?: string; 
  public get ssoUrl() {
    return this.getStringAttribute('sso_url');
  }
  public set ssoUrl(value: string) {
    this._ssoUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ssoUrlInput() {
    return this._ssoUrl;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      force_authn: cdktf.booleanToTerraform(this._forceAuthn),
      id: cdktf.stringToTerraform(this._id),
      issuer: cdktf.stringToTerraform(this._issuer),
      name: cdktf.stringToTerraform(this._name),
      session_max_age_hours: cdktf.numberToTerraform(this._sessionMaxAgeHours),
      sign_authn_requests: cdktf.booleanToTerraform(this._signAuthnRequests),
      sso_url: cdktf.stringToTerraform(this._ssoUrl),
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
      force_authn: {
        value: cdktf.booleanToHclTerraform(this._forceAuthn),
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
      issuer: {
        value: cdktf.stringToHclTerraform(this._issuer),
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
      session_max_age_hours: {
        value: cdktf.numberToHclTerraform(this._sessionMaxAgeHours),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      sign_authn_requests: {
        value: cdktf.booleanToHclTerraform(this._signAuthnRequests),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      sso_url: {
        value: cdktf.stringToHclTerraform(this._ssoUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
