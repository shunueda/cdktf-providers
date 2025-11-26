// https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/saml_server_profile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SamlServerProfileConfig extends cdktf.TerraformMetaArguments {
  /**
  * The identity provider certificate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/saml_server_profile#certificate SamlServerProfile#certificate}
  */
  readonly certificate: string;
  /**
  * The device in which the resource is defined
  * 
  * > ℹ️ **Note:** You must specify exactly one of `device`, `folder`, and `snippet`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/saml_server_profile#device SamlServerProfile#device}
  */
  readonly device?: string;
  /**
  * The identity provider ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/saml_server_profile#entity_id SamlServerProfile#entity_id}
  */
  readonly entityId: string;
  /**
  * The folder in which the resource is defined
  * 
  * > ℹ️ **Note:** You must specify exactly one of `device`, `folder`, and `snippet`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/saml_server_profile#folder SamlServerProfile#folder}
  */
  readonly folder?: string;
  /**
  * Maxiumum clock skew
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/saml_server_profile#max_clock_skew SamlServerProfile#max_clock_skew}
  */
  readonly maxClockSkew?: number;
  /**
  * The name of the SAML server profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/saml_server_profile#name SamlServerProfile#name}
  */
  readonly name: string;
  /**
  * SAML HTTP binding for SLO requests to the identity provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/saml_server_profile#slo_bindings SamlServerProfile#slo_bindings}
  */
  readonly sloBindings?: string;
  /**
  * The snippet in which the resource is defined
  * 
  * > ℹ️ **Note:** You must specify exactly one of `device`, `folder`, and `snippet`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/saml_server_profile#snippet SamlServerProfile#snippet}
  */
  readonly snippet?: string;
  /**
  * SAML HTTP binding for SSO requests to the identity provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/saml_server_profile#sso_bindings SamlServerProfile#sso_bindings}
  */
  readonly ssoBindings: string;
  /**
  * Identity provider SSO URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/saml_server_profile#sso_url SamlServerProfile#sso_url}
  */
  readonly ssoUrl: string;
  /**
  * Validate the identity provider certificate?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/saml_server_profile#validate_idp_certificate SamlServerProfile#validate_idp_certificate}
  */
  readonly validateIdpCertificate?: boolean | cdktf.IResolvable;
  /**
  * Sign SAML message to the identity provider?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/saml_server_profile#want_auth_requests_signed SamlServerProfile#want_auth_requests_signed}
  */
  readonly wantAuthRequestsSigned?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/saml_server_profile scm_saml_server_profile}
*/
export class SamlServerProfile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "scm_saml_server_profile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SamlServerProfile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SamlServerProfile to import
  * @param importFromId The id of the existing SamlServerProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/saml_server_profile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SamlServerProfile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "scm_saml_server_profile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/saml_server_profile scm_saml_server_profile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SamlServerProfileConfig
  */
  public constructor(scope: Construct, id: string, config: SamlServerProfileConfig) {
    super(scope, id, {
      terraformResourceType: 'scm_saml_server_profile',
      terraformGeneratorMetadata: {
        providerName: 'scm',
        providerVersion: '1.0.5',
        providerVersionConstraint: '1.0.5'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._certificate = config.certificate;
    this._device = config.device;
    this._entityId = config.entityId;
    this._folder = config.folder;
    this._maxClockSkew = config.maxClockSkew;
    this._name = config.name;
    this._sloBindings = config.sloBindings;
    this._snippet = config.snippet;
    this._ssoBindings = config.ssoBindings;
    this._ssoUrl = config.ssoUrl;
    this._validateIdpCertificate = config.validateIdpCertificate;
    this._wantAuthRequestsSigned = config.wantAuthRequestsSigned;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // certificate - computed: false, optional: false, required: true
  private _certificate?: string; 
  public get certificate() {
    return this.getStringAttribute('certificate');
  }
  public set certificate(value: string) {
    this._certificate = value;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateInput() {
    return this._certificate;
  }

  // device - computed: false, optional: true, required: false
  private _device?: string; 
  public get device() {
    return this.getStringAttribute('device');
  }
  public set device(value: string) {
    this._device = value;
  }
  public resetDevice() {
    this._device = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceInput() {
    return this._device;
  }

  // entity_id - computed: false, optional: false, required: true
  private _entityId?: string; 
  public get entityId() {
    return this.getStringAttribute('entity_id');
  }
  public set entityId(value: string) {
    this._entityId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get entityIdInput() {
    return this._entityId;
  }

  // folder - computed: false, optional: true, required: false
  private _folder?: string; 
  public get folder() {
    return this.getStringAttribute('folder');
  }
  public set folder(value: string) {
    this._folder = value;
  }
  public resetFolder() {
    this._folder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get folderInput() {
    return this._folder;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // max_clock_skew - computed: false, optional: true, required: false
  private _maxClockSkew?: number; 
  public get maxClockSkew() {
    return this.getNumberAttribute('max_clock_skew');
  }
  public set maxClockSkew(value: number) {
    this._maxClockSkew = value;
  }
  public resetMaxClockSkew() {
    this._maxClockSkew = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxClockSkewInput() {
    return this._maxClockSkew;
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

  // slo_bindings - computed: false, optional: true, required: false
  private _sloBindings?: string; 
  public get sloBindings() {
    return this.getStringAttribute('slo_bindings');
  }
  public set sloBindings(value: string) {
    this._sloBindings = value;
  }
  public resetSloBindings() {
    this._sloBindings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sloBindingsInput() {
    return this._sloBindings;
  }

  // snippet - computed: false, optional: true, required: false
  private _snippet?: string; 
  public get snippet() {
    return this.getStringAttribute('snippet');
  }
  public set snippet(value: string) {
    this._snippet = value;
  }
  public resetSnippet() {
    this._snippet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snippetInput() {
    return this._snippet;
  }

  // sso_bindings - computed: false, optional: false, required: true
  private _ssoBindings?: string; 
  public get ssoBindings() {
    return this.getStringAttribute('sso_bindings');
  }
  public set ssoBindings(value: string) {
    this._ssoBindings = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ssoBindingsInput() {
    return this._ssoBindings;
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

  // tfid - computed: true, optional: false, required: false
  public get tfid() {
    return this.getStringAttribute('tfid');
  }

  // validate_idp_certificate - computed: false, optional: true, required: false
  private _validateIdpCertificate?: boolean | cdktf.IResolvable; 
  public get validateIdpCertificate() {
    return this.getBooleanAttribute('validate_idp_certificate');
  }
  public set validateIdpCertificate(value: boolean | cdktf.IResolvable) {
    this._validateIdpCertificate = value;
  }
  public resetValidateIdpCertificate() {
    this._validateIdpCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validateIdpCertificateInput() {
    return this._validateIdpCertificate;
  }

  // want_auth_requests_signed - computed: false, optional: true, required: false
  private _wantAuthRequestsSigned?: boolean | cdktf.IResolvable; 
  public get wantAuthRequestsSigned() {
    return this.getBooleanAttribute('want_auth_requests_signed');
  }
  public set wantAuthRequestsSigned(value: boolean | cdktf.IResolvable) {
    this._wantAuthRequestsSigned = value;
  }
  public resetWantAuthRequestsSigned() {
    this._wantAuthRequestsSigned = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wantAuthRequestsSignedInput() {
    return this._wantAuthRequestsSigned;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      certificate: cdktf.stringToTerraform(this._certificate),
      device: cdktf.stringToTerraform(this._device),
      entity_id: cdktf.stringToTerraform(this._entityId),
      folder: cdktf.stringToTerraform(this._folder),
      max_clock_skew: cdktf.numberToTerraform(this._maxClockSkew),
      name: cdktf.stringToTerraform(this._name),
      slo_bindings: cdktf.stringToTerraform(this._sloBindings),
      snippet: cdktf.stringToTerraform(this._snippet),
      sso_bindings: cdktf.stringToTerraform(this._ssoBindings),
      sso_url: cdktf.stringToTerraform(this._ssoUrl),
      validate_idp_certificate: cdktf.booleanToTerraform(this._validateIdpCertificate),
      want_auth_requests_signed: cdktf.booleanToTerraform(this._wantAuthRequestsSigned),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      certificate: {
        value: cdktf.stringToHclTerraform(this._certificate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      device: {
        value: cdktf.stringToHclTerraform(this._device),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      entity_id: {
        value: cdktf.stringToHclTerraform(this._entityId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      folder: {
        value: cdktf.stringToHclTerraform(this._folder),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_clock_skew: {
        value: cdktf.numberToHclTerraform(this._maxClockSkew),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      slo_bindings: {
        value: cdktf.stringToHclTerraform(this._sloBindings),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      snippet: {
        value: cdktf.stringToHclTerraform(this._snippet),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sso_bindings: {
        value: cdktf.stringToHclTerraform(this._ssoBindings),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sso_url: {
        value: cdktf.stringToHclTerraform(this._ssoUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      validate_idp_certificate: {
        value: cdktf.booleanToHclTerraform(this._validateIdpCertificate),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      want_auth_requests_signed: {
        value: cdktf.booleanToHclTerraform(this._wantAuthRequestsSigned),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
