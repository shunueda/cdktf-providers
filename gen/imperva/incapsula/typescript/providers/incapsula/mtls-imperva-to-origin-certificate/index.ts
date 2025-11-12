// https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/mtls_imperva_to_origin_certificate
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MtlsImpervaToOriginCertificateConfig extends cdktf.TerraformMetaArguments {
  /**
  * Numeric identifier of the account to operate on. If not specified, operation will be performed on the account identified by the authentication parameters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/mtls_imperva_to_origin_certificate#account_id MtlsImpervaToOriginCertificate#account_id}
  */
  readonly accountId?: string;
  /**
  * Your mTLS client certificate file in base64 format. Supported formats: PEM, DER and PFX. Only RSA certificates are currently supported. The certificate RSA key size must be 2048 bit or less. The certificate must be issued by a certificate authority (CA) and cannot be self-signed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/mtls_imperva_to_origin_certificate#certificate MtlsImpervaToOriginCertificate#certificate}
  */
  readonly certificate: string;
  /**
  * A descriptive name for your mTLS client certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/mtls_imperva_to_origin_certificate#certificate_name MtlsImpervaToOriginCertificate#certificate_name}
  */
  readonly certificateName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/mtls_imperva_to_origin_certificate#id MtlsImpervaToOriginCertificate#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Currently ignored. If terraform plan flags this field as changed, it means that any of: certificate, private_key, or passphrase has changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/mtls_imperva_to_origin_certificate#input_hash MtlsImpervaToOriginCertificate#input_hash}
  */
  readonly inputHash?: string;
  /**
  * Your private key passphrase. Leave empty if the private key is not password protected.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/mtls_imperva_to_origin_certificate#passphrase MtlsImpervaToOriginCertificate#passphrase}
  */
  readonly passphrase?: string;
  /**
  * Your private key file in base64 format. Supported formats: PEM, DER. If PFX certificate is used, then this field can remain empty.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/mtls_imperva_to_origin_certificate#private_key MtlsImpervaToOriginCertificate#private_key}
  */
  readonly privateKey?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/mtls_imperva_to_origin_certificate incapsula_mtls_imperva_to_origin_certificate}
*/
export class MtlsImpervaToOriginCertificate extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "incapsula_mtls_imperva_to_origin_certificate";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MtlsImpervaToOriginCertificate resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MtlsImpervaToOriginCertificate to import
  * @param importFromId The id of the existing MtlsImpervaToOriginCertificate that should be imported. Refer to the {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/mtls_imperva_to_origin_certificate#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MtlsImpervaToOriginCertificate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "incapsula_mtls_imperva_to_origin_certificate", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/mtls_imperva_to_origin_certificate incapsula_mtls_imperva_to_origin_certificate} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MtlsImpervaToOriginCertificateConfig
  */
  public constructor(scope: Construct, id: string, config: MtlsImpervaToOriginCertificateConfig) {
    super(scope, id, {
      terraformResourceType: 'incapsula_mtls_imperva_to_origin_certificate',
      terraformGeneratorMetadata: {
        providerName: 'incapsula',
        providerVersion: '3.35.1',
        providerVersionConstraint: '3.35.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accountId = config.accountId;
    this._certificate = config.certificate;
    this._certificateName = config.certificateName;
    this._id = config.id;
    this._inputHash = config.inputHash;
    this._passphrase = config.passphrase;
    this._privateKey = config.privateKey;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_id - computed: false, optional: true, required: false
  private _accountId?: string; 
  public get accountId() {
    return this.getStringAttribute('account_id');
  }
  public set accountId(value: string) {
    this._accountId = value;
  }
  public resetAccountId() {
    this._accountId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountIdInput() {
    return this._accountId;
  }

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

  // certificate_name - computed: false, optional: true, required: false
  private _certificateName?: string; 
  public get certificateName() {
    return this.getStringAttribute('certificate_name');
  }
  public set certificateName(value: string) {
    this._certificateName = value;
  }
  public resetCertificateName() {
    this._certificateName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateNameInput() {
    return this._certificateName;
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

  // input_hash - computed: false, optional: true, required: false
  private _inputHash?: string; 
  public get inputHash() {
    return this.getStringAttribute('input_hash');
  }
  public set inputHash(value: string) {
    this._inputHash = value;
  }
  public resetInputHash() {
    this._inputHash = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputHashInput() {
    return this._inputHash;
  }

  // passphrase - computed: false, optional: true, required: false
  private _passphrase?: string; 
  public get passphrase() {
    return this.getStringAttribute('passphrase');
  }
  public set passphrase(value: string) {
    this._passphrase = value;
  }
  public resetPassphrase() {
    this._passphrase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passphraseInput() {
    return this._passphrase;
  }

  // private_key - computed: false, optional: true, required: false
  private _privateKey?: string; 
  public get privateKey() {
    return this.getStringAttribute('private_key');
  }
  public set privateKey(value: string) {
    this._privateKey = value;
  }
  public resetPrivateKey() {
    this._privateKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateKeyInput() {
    return this._privateKey;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktf.stringToTerraform(this._accountId),
      certificate: cdktf.stringToTerraform(this._certificate),
      certificate_name: cdktf.stringToTerraform(this._certificateName),
      id: cdktf.stringToTerraform(this._id),
      input_hash: cdktf.stringToTerraform(this._inputHash),
      passphrase: cdktf.stringToTerraform(this._passphrase),
      private_key: cdktf.stringToTerraform(this._privateKey),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      account_id: {
        value: cdktf.stringToHclTerraform(this._accountId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      certificate: {
        value: cdktf.stringToHclTerraform(this._certificate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      certificate_name: {
        value: cdktf.stringToHclTerraform(this._certificateName),
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
      input_hash: {
        value: cdktf.stringToHclTerraform(this._inputHash),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      passphrase: {
        value: cdktf.stringToHclTerraform(this._passphrase),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
