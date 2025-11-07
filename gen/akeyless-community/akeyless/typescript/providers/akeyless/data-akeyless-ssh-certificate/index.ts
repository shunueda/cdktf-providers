// https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/data-sources/ssh_certificate
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAkeylessSshCertificateConfig extends cdktf.TerraformMetaArguments {
  /**
  * The name of the SSH certificate issuer
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/data-sources/ssh_certificate#cert_issuer_name DataAkeylessSshCertificate#cert_issuer_name}
  */
  readonly certIssuerName: string;
  /**
  * The username to sign in the SSH certificate (use a comma-separated list for more than one username)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/data-sources/ssh_certificate#cert_username DataAkeylessSshCertificate#cert_username}
  */
  readonly certUsername: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/data-sources/ssh_certificate#id DataAkeylessSshCertificate#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Set this option to output legacy ('ssh-rsa-cert-v01@openssh.com') signing algorithm name in the certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/data-sources/ssh_certificate#legacy_signing_alg_name DataAkeylessSshCertificate#legacy_signing_alg_name}
  */
  readonly legacySigningAlgName?: boolean | cdktf.IResolvable;
  /**
  * SSH public key file contents
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/data-sources/ssh_certificate#public_key_data DataAkeylessSshCertificate#public_key_data}
  */
  readonly publicKeyData: string;
  /**
  * Updated certificate lifetime in seconds (must be less than the Certificate Issuer default TTL)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/data-sources/ssh_certificate#ttl DataAkeylessSshCertificate#ttl}
  */
  readonly ttl?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/data-sources/ssh_certificate akeyless_ssh_certificate}
*/
export class DataAkeylessSshCertificate extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "akeyless_ssh_certificate";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAkeylessSshCertificate resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAkeylessSshCertificate to import
  * @param importFromId The id of the existing DataAkeylessSshCertificate that should be imported. Refer to the {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/data-sources/ssh_certificate#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAkeylessSshCertificate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "akeyless_ssh_certificate", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/data-sources/ssh_certificate akeyless_ssh_certificate} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAkeylessSshCertificateConfig
  */
  public constructor(scope: Construct, id: string, config: DataAkeylessSshCertificateConfig) {
    super(scope, id, {
      terraformResourceType: 'akeyless_ssh_certificate',
      terraformGeneratorMetadata: {
        providerName: 'akeyless',
        providerVersion: '1.11.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._certIssuerName = config.certIssuerName;
    this._certUsername = config.certUsername;
    this._id = config.id;
    this._legacySigningAlgName = config.legacySigningAlgName;
    this._publicKeyData = config.publicKeyData;
    this._ttl = config.ttl;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cert_issuer_name - computed: false, optional: false, required: true
  private _certIssuerName?: string; 
  public get certIssuerName() {
    return this.getStringAttribute('cert_issuer_name');
  }
  public set certIssuerName(value: string) {
    this._certIssuerName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get certIssuerNameInput() {
    return this._certIssuerName;
  }

  // cert_username - computed: false, optional: false, required: true
  private _certUsername?: string; 
  public get certUsername() {
    return this.getStringAttribute('cert_username');
  }
  public set certUsername(value: string) {
    this._certUsername = value;
  }
  // Temporarily expose input value. Use with caution.
  public get certUsernameInput() {
    return this._certUsername;
  }

  // data - computed: true, optional: false, required: false
  public get data() {
    return this.getStringAttribute('data');
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

  // legacy_signing_alg_name - computed: false, optional: true, required: false
  private _legacySigningAlgName?: boolean | cdktf.IResolvable; 
  public get legacySigningAlgName() {
    return this.getBooleanAttribute('legacy_signing_alg_name');
  }
  public set legacySigningAlgName(value: boolean | cdktf.IResolvable) {
    this._legacySigningAlgName = value;
  }
  public resetLegacySigningAlgName() {
    this._legacySigningAlgName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get legacySigningAlgNameInput() {
    return this._legacySigningAlgName;
  }

  // public_key_data - computed: false, optional: false, required: true
  private _publicKeyData?: string; 
  public get publicKeyData() {
    return this.getStringAttribute('public_key_data');
  }
  public set publicKeyData(value: string) {
    this._publicKeyData = value;
  }
  // Temporarily expose input value. Use with caution.
  public get publicKeyDataInput() {
    return this._publicKeyData;
  }

  // ttl - computed: false, optional: true, required: false
  private _ttl?: number; 
  public get ttl() {
    return this.getNumberAttribute('ttl');
  }
  public set ttl(value: number) {
    this._ttl = value;
  }
  public resetTtl() {
    this._ttl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ttlInput() {
    return this._ttl;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cert_issuer_name: cdktf.stringToTerraform(this._certIssuerName),
      cert_username: cdktf.stringToTerraform(this._certUsername),
      id: cdktf.stringToTerraform(this._id),
      legacy_signing_alg_name: cdktf.booleanToTerraform(this._legacySigningAlgName),
      public_key_data: cdktf.stringToTerraform(this._publicKeyData),
      ttl: cdktf.numberToTerraform(this._ttl),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cert_issuer_name: {
        value: cdktf.stringToHclTerraform(this._certIssuerName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cert_username: {
        value: cdktf.stringToHclTerraform(this._certUsername),
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
      legacy_signing_alg_name: {
        value: cdktf.booleanToHclTerraform(this._legacySigningAlgName),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      public_key_data: {
        value: cdktf.stringToHclTerraform(this._publicKeyData),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ttl: {
        value: cdktf.numberToHclTerraform(this._ttl),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
