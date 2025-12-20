// https://registry.terraform.io/providers/files-com/files/0.1.419/docs/resources/as2_station
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface As2StationConfig extends cdktf.TerraformMetaArguments {
  /**
  * The station's formal AS2 name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.419/docs/resources/as2_station#name As2Station#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.419/docs/resources/as2_station#private_key As2Station#private_key}
  */
  readonly privateKey: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.419/docs/resources/as2_station#private_key_password As2Station#private_key_password}
  */
  readonly privateKeyPassword?: string;
  /**
  * Public certificate used for message security.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.419/docs/resources/as2_station#public_certificate As2Station#public_certificate}
  */
  readonly publicCertificate: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/files-com/files/0.1.419/docs/resources/as2_station files_as2_station}
*/
export class As2Station extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "files_as2_station";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a As2Station resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the As2Station to import
  * @param importFromId The id of the existing As2Station that should be imported. Refer to the {@link https://registry.terraform.io/providers/files-com/files/0.1.419/docs/resources/as2_station#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the As2Station to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "files_as2_station", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/files-com/files/0.1.419/docs/resources/as2_station files_as2_station} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options As2StationConfig
  */
  public constructor(scope: Construct, id: string, config: As2StationConfig) {
    super(scope, id, {
      terraformResourceType: 'files_as2_station',
      terraformGeneratorMetadata: {
        providerName: 'files',
        providerVersion: '0.1.419',
        providerVersionConstraint: '0.1.419'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._name = config.name;
    this._privateKey = config.privateKey;
    this._privateKeyPassword = config.privateKeyPassword;
    this._publicCertificate = config.publicCertificate;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // domain - computed: true, optional: false, required: false
  public get domain() {
    return this.getStringAttribute('domain');
  }

  // hex_public_certificate_serial - computed: true, optional: false, required: false
  public get hexPublicCertificateSerial() {
    return this.getStringAttribute('hex_public_certificate_serial');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
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

  // private_key_md5 - computed: true, optional: false, required: false
  public get privateKeyMd5() {
    return this.getStringAttribute('private_key_md5');
  }

  // private_key_password - computed: false, optional: true, required: false
  private _privateKeyPassword?: string; 
  public get privateKeyPassword() {
    return this.getStringAttribute('private_key_password');
  }
  public set privateKeyPassword(value: string) {
    this._privateKeyPassword = value;
  }
  public resetPrivateKeyPassword() {
    this._privateKeyPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateKeyPasswordInput() {
    return this._privateKeyPassword;
  }

  // private_key_password_md5 - computed: true, optional: false, required: false
  public get privateKeyPasswordMd5() {
    return this.getStringAttribute('private_key_password_md5');
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

  // uri - computed: true, optional: false, required: false
  public get uri() {
    return this.getStringAttribute('uri');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: cdktf.stringToTerraform(this._name),
      private_key: cdktf.stringToTerraform(this._privateKey),
      private_key_password: cdktf.stringToTerraform(this._privateKeyPassword),
      public_certificate: cdktf.stringToTerraform(this._publicCertificate),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
      private_key_password: {
        value: cdktf.stringToHclTerraform(this._privateKeyPassword),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
