// https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/server_settings_ws_trust_sts_settings_issuer_certificate
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ServerSettingsWsTrustStsSettingsIssuerCertificateConfig extends cdktf.TerraformMetaArguments {
  /**
  * The persistent, unique ID for the certificate. It can be any combination of `[a-z0-9._-]`. This property is system-assigned if not specified. This field is immutable and will trigger a replacement plan if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/server_settings_ws_trust_sts_settings_issuer_certificate#certificate_id ServerSettingsWsTrustStsSettingsIssuerCertificate#certificate_id}
  */
  readonly certificateId?: string;
  /**
  * Cryptographic Provider. This is only applicable if Hybrid HSM mode is `true`. Options are `LOCAL` or `HSM`. This field is immutable and will trigger a replacement plan if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/server_settings_ws_trust_sts_settings_issuer_certificate#crypto_provider ServerSettingsWsTrustStsSettingsIssuerCertificate#crypto_provider}
  */
  readonly cryptoProvider?: string;
  /**
  * The certificate data in PEM format. New line characters should be omitted or encoded in this value. This field is immutable and will trigger a replacement plan if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/server_settings_ws_trust_sts_settings_issuer_certificate#file_data ServerSettingsWsTrustStsSettingsIssuerCertificate#file_data}
  */
  readonly fileData: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/server_settings_ws_trust_sts_settings_issuer_certificate pingfederate_server_settings_ws_trust_sts_settings_issuer_certificate}
*/
export class ServerSettingsWsTrustStsSettingsIssuerCertificate extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pingfederate_server_settings_ws_trust_sts_settings_issuer_certificate";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ServerSettingsWsTrustStsSettingsIssuerCertificate resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ServerSettingsWsTrustStsSettingsIssuerCertificate to import
  * @param importFromId The id of the existing ServerSettingsWsTrustStsSettingsIssuerCertificate that should be imported. Refer to the {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/server_settings_ws_trust_sts_settings_issuer_certificate#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ServerSettingsWsTrustStsSettingsIssuerCertificate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pingfederate_server_settings_ws_trust_sts_settings_issuer_certificate", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/server_settings_ws_trust_sts_settings_issuer_certificate pingfederate_server_settings_ws_trust_sts_settings_issuer_certificate} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ServerSettingsWsTrustStsSettingsIssuerCertificateConfig
  */
  public constructor(scope: Construct, id: string, config: ServerSettingsWsTrustStsSettingsIssuerCertificateConfig) {
    super(scope, id, {
      terraformResourceType: 'pingfederate_server_settings_ws_trust_sts_settings_issuer_certificate',
      terraformGeneratorMetadata: {
        providerName: 'pingfederate',
        providerVersion: '1.6.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._certificateId = config.certificateId;
    this._cryptoProvider = config.cryptoProvider;
    this._fileData = config.fileData;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // active - computed: true, optional: false, required: false
  public get active() {
    return this.getBooleanAttribute('active');
  }

  // certificate_id - computed: true, optional: true, required: false
  private _certificateId?: string; 
  public get certificateId() {
    return this.getStringAttribute('certificate_id');
  }
  public set certificateId(value: string) {
    this._certificateId = value;
  }
  public resetCertificateId() {
    this._certificateId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateIdInput() {
    return this._certificateId;
  }

  // crypto_provider - computed: false, optional: true, required: false
  private _cryptoProvider?: string; 
  public get cryptoProvider() {
    return this.getStringAttribute('crypto_provider');
  }
  public set cryptoProvider(value: string) {
    this._cryptoProvider = value;
  }
  public resetCryptoProvider() {
    this._cryptoProvider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cryptoProviderInput() {
    return this._cryptoProvider;
  }

  // expires - computed: true, optional: false, required: false
  public get expires() {
    return this.getStringAttribute('expires');
  }

  // file_data - computed: false, optional: false, required: true
  private _fileData?: string; 
  public get fileData() {
    return this.getStringAttribute('file_data');
  }
  public set fileData(value: string) {
    this._fileData = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fileDataInput() {
    return this._fileData;
  }

  // formatted_file_data - computed: true, optional: false, required: false
  public get formattedFileData() {
    return this.getStringAttribute('formatted_file_data');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // issuer_dn - computed: true, optional: false, required: false
  public get issuerDn() {
    return this.getStringAttribute('issuer_dn');
  }

  // key_algorithm - computed: true, optional: false, required: false
  public get keyAlgorithm() {
    return this.getStringAttribute('key_algorithm');
  }

  // key_size - computed: true, optional: false, required: false
  public get keySize() {
    return this.getNumberAttribute('key_size');
  }

  // serial_number - computed: true, optional: false, required: false
  public get serialNumber() {
    return this.getStringAttribute('serial_number');
  }

  // sha1_fingerprint - computed: true, optional: false, required: false
  public get sha1Fingerprint() {
    return this.getStringAttribute('sha1_fingerprint');
  }

  // sha256_fingerprint - computed: true, optional: false, required: false
  public get sha256Fingerprint() {
    return this.getStringAttribute('sha256_fingerprint');
  }

  // signature_algorithm - computed: true, optional: false, required: false
  public get signatureAlgorithm() {
    return this.getStringAttribute('signature_algorithm');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // subject_alternative_names - computed: true, optional: false, required: false
  public get subjectAlternativeNames() {
    return cdktf.Fn.tolist(this.getListAttribute('subject_alternative_names'));
  }

  // subject_dn - computed: true, optional: false, required: false
  public get subjectDn() {
    return this.getStringAttribute('subject_dn');
  }

  // valid_from - computed: true, optional: false, required: false
  public get validFrom() {
    return this.getStringAttribute('valid_from');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getNumberAttribute('version');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      certificate_id: cdktf.stringToTerraform(this._certificateId),
      crypto_provider: cdktf.stringToTerraform(this._cryptoProvider),
      file_data: cdktf.stringToTerraform(this._fileData),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      certificate_id: {
        value: cdktf.stringToHclTerraform(this._certificateId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      crypto_provider: {
        value: cdktf.stringToHclTerraform(this._cryptoProvider),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      file_data: {
        value: cdktf.stringToHclTerraform(this._fileData),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
