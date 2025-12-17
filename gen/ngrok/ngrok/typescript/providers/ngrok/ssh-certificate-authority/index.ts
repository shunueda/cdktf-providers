// https://registry.terraform.io/providers/ngrok/ngrok/0.6.0/docs/resources/ssh_certificate_authority
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SshCertificateAuthorityConfig extends cdktf.TerraformMetaArguments {
  /**
  * human-readable description of this SSH Certificate Authority. optional, max 255 bytes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ngrok/ngrok/0.6.0/docs/resources/ssh_certificate_authority#description SshCertificateAuthority#description}
  */
  readonly description?: string;
  /**
  * the type of elliptic curve to use when creating an ECDSA key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ngrok/ngrok/0.6.0/docs/resources/ssh_certificate_authority#elliptic_curve SshCertificateAuthority#elliptic_curve}
  */
  readonly ellipticCurve?: string;
  /**
  * the key size to use when creating an RSA key. one of `2048` or `4096`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ngrok/ngrok/0.6.0/docs/resources/ssh_certificate_authority#key_size SshCertificateAuthority#key_size}
  */
  readonly keySize?: number;
  /**
  * arbitrary user-defined machine-readable data of this SSH Certificate Authority. optional, max 4096 bytes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ngrok/ngrok/0.6.0/docs/resources/ssh_certificate_authority#metadata SshCertificateAuthority#metadata}
  */
  readonly metadata?: string;
  /**
  * the type of private key to generate. one of `rsa`, `ecdsa`, `ed25519`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ngrok/ngrok/0.6.0/docs/resources/ssh_certificate_authority#private_key_type SshCertificateAuthority#private_key_type}
  */
  readonly privateKeyType?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ngrok/ngrok/0.6.0/docs/resources/ssh_certificate_authority ngrok_ssh_certificate_authority}
*/
export class SshCertificateAuthority extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ngrok_ssh_certificate_authority";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SshCertificateAuthority resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SshCertificateAuthority to import
  * @param importFromId The id of the existing SshCertificateAuthority that should be imported. Refer to the {@link https://registry.terraform.io/providers/ngrok/ngrok/0.6.0/docs/resources/ssh_certificate_authority#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SshCertificateAuthority to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ngrok_ssh_certificate_authority", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ngrok/ngrok/0.6.0/docs/resources/ssh_certificate_authority ngrok_ssh_certificate_authority} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SshCertificateAuthorityConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SshCertificateAuthorityConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'ngrok_ssh_certificate_authority',
      terraformGeneratorMetadata: {
        providerName: 'ngrok',
        providerVersion: '0.6.0',
        providerVersionConstraint: '0.6.0'
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
    this._ellipticCurve = config.ellipticCurve;
    this._keySize = config.keySize;
    this._metadata = config.metadata;
    this._privateKeyType = config.privateKeyType;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // elliptic_curve - computed: false, optional: true, required: false
  private _ellipticCurve?: string; 
  public get ellipticCurve() {
    return this.getStringAttribute('elliptic_curve');
  }
  public set ellipticCurve(value: string) {
    this._ellipticCurve = value;
  }
  public resetEllipticCurve() {
    this._ellipticCurve = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ellipticCurveInput() {
    return this._ellipticCurve;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // key_size - computed: false, optional: true, required: false
  private _keySize?: number; 
  public get keySize() {
    return this.getNumberAttribute('key_size');
  }
  public set keySize(value: number) {
    this._keySize = value;
  }
  public resetKeySize() {
    this._keySize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keySizeInput() {
    return this._keySize;
  }

  // key_type - computed: true, optional: false, required: false
  public get keyType() {
    return this.getStringAttribute('key_type');
  }

  // metadata - computed: false, optional: true, required: false
  private _metadata?: string; 
  public get metadata() {
    return this.getStringAttribute('metadata');
  }
  public set metadata(value: string) {
    this._metadata = value;
  }
  public resetMetadata() {
    this._metadata = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata;
  }

  // private_key_type - computed: false, optional: true, required: false
  private _privateKeyType?: string; 
  public get privateKeyType() {
    return this.getStringAttribute('private_key_type');
  }
  public set privateKeyType(value: string) {
    this._privateKeyType = value;
  }
  public resetPrivateKeyType() {
    this._privateKeyType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateKeyTypeInput() {
    return this._privateKeyType;
  }

  // public_key - computed: true, optional: false, required: false
  public get publicKey() {
    return this.getStringAttribute('public_key');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      elliptic_curve: cdktf.stringToTerraform(this._ellipticCurve),
      key_size: cdktf.numberToTerraform(this._keySize),
      metadata: cdktf.stringToTerraform(this._metadata),
      private_key_type: cdktf.stringToTerraform(this._privateKeyType),
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
      elliptic_curve: {
        value: cdktf.stringToHclTerraform(this._ellipticCurve),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      key_size: {
        value: cdktf.numberToHclTerraform(this._keySize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      metadata: {
        value: cdktf.stringToHclTerraform(this._metadata),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      private_key_type: {
        value: cdktf.stringToHclTerraform(this._privateKeyType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
