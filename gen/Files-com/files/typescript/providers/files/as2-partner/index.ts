// https://registry.terraform.io/providers/files-com/files/0.1.420/docs/resources/as2_partner
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface As2PartnerConfig extends cdktf.TerraformMetaArguments {
  /**
  * Additional HTTP Headers for outgoing message sent to this partner.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.420/docs/resources/as2_partner#additional_http_headers As2Partner#additional_http_headers}
  */
  readonly additionalHttpHeaders?: { [key: string]: any };
  /**
  * ID of the AS2 Station associated with this partner.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.420/docs/resources/as2_partner#as2_station_id As2Partner#as2_station_id}
  */
  readonly as2StationId: number;
  /**
  * Default mime type of the file attached to the encrypted message
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.420/docs/resources/as2_partner#default_mime_type As2Partner#default_mime_type}
  */
  readonly defaultMimeType?: string;
  /**
  * If `true`, we will use your site's dedicated IPs for all outbound connections to this AS2 Partner.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.420/docs/resources/as2_partner#enable_dedicated_ips As2Partner#enable_dedicated_ips}
  */
  readonly enableDedicatedIps?: boolean | cdktf.IResolvable;
  /**
  * Password to send to server for HTTP Authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.420/docs/resources/as2_partner#http_auth_password As2Partner#http_auth_password}
  */
  readonly httpAuthPassword?: string;
  /**
  * Username to send to server for HTTP Authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.420/docs/resources/as2_partner#http_auth_username As2Partner#http_auth_username}
  */
  readonly httpAuthUsername?: string;
  /**
  * How should Files.com evaluate message transfer success based on a partner's MDN response?  This setting does not affect MDN storage; all MDNs received from a partner are always stored. `none`: MDN is stored for informational purposes only, a successful HTTPS transfer is a successful AS2 transfer. `weak`: Inspect the MDN for MIC and Disposition only. `normal`: `weak` plus validate MDN signature matches body, `strict`: `normal` but do not allow signatures from self-signed or incorrectly purposed certificates. `auto`: Automatically set the correct value for this setting based on next mdn received.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.420/docs/resources/as2_partner#mdn_validation_level As2Partner#mdn_validation_level}
  */
  readonly mdnValidationLevel?: string;
  /**
  * The partner's formal AS2 name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.420/docs/resources/as2_partner#name As2Partner#name}
  */
  readonly name: string;
  /**
  * Public certificate used for message security.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.420/docs/resources/as2_partner#public_certificate As2Partner#public_certificate}
  */
  readonly publicCertificate: string;
  /**
  * Should we require that the remote HTTP server have a valid SSL Certificate for HTTPS? (This only applies to Outgoing AS2 message from Files.com to a Partner.)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.420/docs/resources/as2_partner#server_certificate As2Partner#server_certificate}
  */
  readonly serverCertificate?: string;
  /**
  * Should Files.com require signatures on incoming AS2 messages?  `normal`: require that incoming messages are signed with a valid matching signature. `none`: Unsigned incoming messages are allowed. `auto`: Automatically set the correct value for this setting based on next message received.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.420/docs/resources/as2_partner#signature_validation_level As2Partner#signature_validation_level}
  */
  readonly signatureValidationLevel?: string;
  /**
  * Public URI where we will send the AS2 messages (via HTTP/HTTPS).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.420/docs/resources/as2_partner#uri As2Partner#uri}
  */
  readonly uri: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/files-com/files/0.1.420/docs/resources/as2_partner files_as2_partner}
*/
export class As2Partner extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "files_as2_partner";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a As2Partner resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the As2Partner to import
  * @param importFromId The id of the existing As2Partner that should be imported. Refer to the {@link https://registry.terraform.io/providers/files-com/files/0.1.420/docs/resources/as2_partner#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the As2Partner to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "files_as2_partner", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/files-com/files/0.1.420/docs/resources/as2_partner files_as2_partner} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options As2PartnerConfig
  */
  public constructor(scope: Construct, id: string, config: As2PartnerConfig) {
    super(scope, id, {
      terraformResourceType: 'files_as2_partner',
      terraformGeneratorMetadata: {
        providerName: 'files',
        providerVersion: '0.1.420',
        providerVersionConstraint: '0.1.420'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._additionalHttpHeaders = config.additionalHttpHeaders;
    this._as2StationId = config.as2StationId;
    this._defaultMimeType = config.defaultMimeType;
    this._enableDedicatedIps = config.enableDedicatedIps;
    this._httpAuthPassword = config.httpAuthPassword;
    this._httpAuthUsername = config.httpAuthUsername;
    this._mdnValidationLevel = config.mdnValidationLevel;
    this._name = config.name;
    this._publicCertificate = config.publicCertificate;
    this._serverCertificate = config.serverCertificate;
    this._signatureValidationLevel = config.signatureValidationLevel;
    this._uri = config.uri;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // additional_http_headers - computed: true, optional: true, required: false
  private _additionalHttpHeaders?: { [key: string]: any }; 
  public get additionalHttpHeaders() {
    return this.getAnyMapAttribute('additional_http_headers');
  }
  public set additionalHttpHeaders(value: { [key: string]: any }) {
    this._additionalHttpHeaders = value;
  }
  public resetAdditionalHttpHeaders() {
    this._additionalHttpHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalHttpHeadersInput() {
    return this._additionalHttpHeaders;
  }

  // as2_station_id - computed: false, optional: false, required: true
  private _as2StationId?: number; 
  public get as2StationId() {
    return this.getNumberAttribute('as2_station_id');
  }
  public set as2StationId(value: number) {
    this._as2StationId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get as2StationIdInput() {
    return this._as2StationId;
  }

  // default_mime_type - computed: true, optional: true, required: false
  private _defaultMimeType?: string; 
  public get defaultMimeType() {
    return this.getStringAttribute('default_mime_type');
  }
  public set defaultMimeType(value: string) {
    this._defaultMimeType = value;
  }
  public resetDefaultMimeType() {
    this._defaultMimeType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultMimeTypeInput() {
    return this._defaultMimeType;
  }

  // enable_dedicated_ips - computed: true, optional: true, required: false
  private _enableDedicatedIps?: boolean | cdktf.IResolvable; 
  public get enableDedicatedIps() {
    return this.getBooleanAttribute('enable_dedicated_ips');
  }
  public set enableDedicatedIps(value: boolean | cdktf.IResolvable) {
    this._enableDedicatedIps = value;
  }
  public resetEnableDedicatedIps() {
    this._enableDedicatedIps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableDedicatedIpsInput() {
    return this._enableDedicatedIps;
  }

  // hex_public_certificate_serial - computed: true, optional: false, required: false
  public get hexPublicCertificateSerial() {
    return this.getStringAttribute('hex_public_certificate_serial');
  }

  // http_auth_password - computed: false, optional: true, required: false
  private _httpAuthPassword?: string; 
  public get httpAuthPassword() {
    return this.getStringAttribute('http_auth_password');
  }
  public set httpAuthPassword(value: string) {
    this._httpAuthPassword = value;
  }
  public resetHttpAuthPassword() {
    this._httpAuthPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpAuthPasswordInput() {
    return this._httpAuthPassword;
  }

  // http_auth_username - computed: true, optional: true, required: false
  private _httpAuthUsername?: string; 
  public get httpAuthUsername() {
    return this.getStringAttribute('http_auth_username');
  }
  public set httpAuthUsername(value: string) {
    this._httpAuthUsername = value;
  }
  public resetHttpAuthUsername() {
    this._httpAuthUsername = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpAuthUsernameInput() {
    return this._httpAuthUsername;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // mdn_validation_level - computed: true, optional: true, required: false
  private _mdnValidationLevel?: string; 
  public get mdnValidationLevel() {
    return this.getStringAttribute('mdn_validation_level');
  }
  public set mdnValidationLevel(value: string) {
    this._mdnValidationLevel = value;
  }
  public resetMdnValidationLevel() {
    this._mdnValidationLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mdnValidationLevelInput() {
    return this._mdnValidationLevel;
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

  // public_certificate - computed: false, optional: false, required: true
  private _publicCertificate?: string; 
  public get publicCertificate() {
    return this.getStringAttribute('public_certificate');
  }
  public set publicCertificate(value: string) {
    this._publicCertificate = value;
  }
  // Temporarily expose input value. Use with caution.
  public get publicCertificateInput() {
    return this._publicCertificate;
  }

  // public_certificate_issuer - computed: true, optional: false, required: false
  public get publicCertificateIssuer() {
    return this.getStringAttribute('public_certificate_issuer');
  }

  // public_certificate_md5 - computed: true, optional: false, required: false
  public get publicCertificateMd5() {
    return this.getStringAttribute('public_certificate_md5');
  }

  // public_certificate_not_after - computed: true, optional: false, required: false
  public get publicCertificateNotAfter() {
    return this.getStringAttribute('public_certificate_not_after');
  }

  // public_certificate_not_before - computed: true, optional: false, required: false
  public get publicCertificateNotBefore() {
    return this.getStringAttribute('public_certificate_not_before');
  }

  // public_certificate_serial - computed: true, optional: false, required: false
  public get publicCertificateSerial() {
    return this.getStringAttribute('public_certificate_serial');
  }

  // public_certificate_subject - computed: true, optional: false, required: false
  public get publicCertificateSubject() {
    return this.getStringAttribute('public_certificate_subject');
  }

  // server_certificate - computed: true, optional: true, required: false
  private _serverCertificate?: string; 
  public get serverCertificate() {
    return this.getStringAttribute('server_certificate');
  }
  public set serverCertificate(value: string) {
    this._serverCertificate = value;
  }
  public resetServerCertificate() {
    this._serverCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverCertificateInput() {
    return this._serverCertificate;
  }

  // signature_validation_level - computed: true, optional: true, required: false
  private _signatureValidationLevel?: string; 
  public get signatureValidationLevel() {
    return this.getStringAttribute('signature_validation_level');
  }
  public set signatureValidationLevel(value: string) {
    this._signatureValidationLevel = value;
  }
  public resetSignatureValidationLevel() {
    this._signatureValidationLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get signatureValidationLevelInput() {
    return this._signatureValidationLevel;
  }

  // uri - computed: false, optional: false, required: true
  private _uri?: string; 
  public get uri() {
    return this.getStringAttribute('uri');
  }
  public set uri(value: string) {
    this._uri = value;
  }
  // Temporarily expose input value. Use with caution.
  public get uriInput() {
    return this._uri;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      additional_http_headers: cdktf.hashMapper(cdktf.anyToTerraform)(this._additionalHttpHeaders),
      as2_station_id: cdktf.numberToTerraform(this._as2StationId),
      default_mime_type: cdktf.stringToTerraform(this._defaultMimeType),
      enable_dedicated_ips: cdktf.booleanToTerraform(this._enableDedicatedIps),
      http_auth_password: cdktf.stringToTerraform(this._httpAuthPassword),
      http_auth_username: cdktf.stringToTerraform(this._httpAuthUsername),
      mdn_validation_level: cdktf.stringToTerraform(this._mdnValidationLevel),
      name: cdktf.stringToTerraform(this._name),
      public_certificate: cdktf.stringToTerraform(this._publicCertificate),
      server_certificate: cdktf.stringToTerraform(this._serverCertificate),
      signature_validation_level: cdktf.stringToTerraform(this._signatureValidationLevel),
      uri: cdktf.stringToTerraform(this._uri),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      additional_http_headers: {
        value: cdktf.hashMapperHcl(cdktf.anyToHclTerraform)(this._additionalHttpHeaders),
        isBlock: false,
        type: "map",
        storageClassType: "anyMap",
      },
      as2_station_id: {
        value: cdktf.numberToHclTerraform(this._as2StationId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      default_mime_type: {
        value: cdktf.stringToHclTerraform(this._defaultMimeType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enable_dedicated_ips: {
        value: cdktf.booleanToHclTerraform(this._enableDedicatedIps),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      http_auth_password: {
        value: cdktf.stringToHclTerraform(this._httpAuthPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      http_auth_username: {
        value: cdktf.stringToHclTerraform(this._httpAuthUsername),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mdn_validation_level: {
        value: cdktf.stringToHclTerraform(this._mdnValidationLevel),
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
      public_certificate: {
        value: cdktf.stringToHclTerraform(this._publicCertificate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      server_certificate: {
        value: cdktf.stringToHclTerraform(this._serverCertificate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      signature_validation_level: {
        value: cdktf.stringToHclTerraform(this._signatureValidationLevel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      uri: {
        value: cdktf.stringToHclTerraform(this._uri),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
