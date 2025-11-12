// https://registry.terraform.io/providers/chilicat/pkcs12/0.2.5/docs/resources/from_pem
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FromPemConfig extends cdktf.TerraformMetaArguments {
  /**
  * CA (or list of CAs)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chilicat/pkcs12/0.2.5/docs/resources/from_pem#ca_pem FromPem#ca_pem}
  */
  readonly caPem?: string;
  /**
  * Certificate or certificate chain
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chilicat/pkcs12/0.2.5/docs/resources/from_pem#cert_pem FromPem#cert_pem}
  */
  readonly certPem: string;
  /**
  * Set encoding
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chilicat/pkcs12/0.2.5/docs/resources/from_pem#encoding FromPem#encoding}
  */
  readonly encoding?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chilicat/pkcs12/0.2.5/docs/resources/from_pem#id FromPem#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Keystore password
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chilicat/pkcs12/0.2.5/docs/resources/from_pem#password FromPem#password}
  */
  readonly password: string;
  /**
  * Private Key password
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chilicat/pkcs12/0.2.5/docs/resources/from_pem#private_key_pass FromPem#private_key_pass}
  */
  readonly privateKeyPass?: string;
  /**
  * Private Key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chilicat/pkcs12/0.2.5/docs/resources/from_pem#private_key_pem FromPem#private_key_pem}
  */
  readonly privateKeyPem: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/chilicat/pkcs12/0.2.5/docs/resources/from_pem pkcs12_from_pem}
*/
export class FromPem extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pkcs12_from_pem";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a FromPem resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the FromPem to import
  * @param importFromId The id of the existing FromPem that should be imported. Refer to the {@link https://registry.terraform.io/providers/chilicat/pkcs12/0.2.5/docs/resources/from_pem#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the FromPem to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pkcs12_from_pem", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/chilicat/pkcs12/0.2.5/docs/resources/from_pem pkcs12_from_pem} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FromPemConfig
  */
  public constructor(scope: Construct, id: string, config: FromPemConfig) {
    super(scope, id, {
      terraformResourceType: 'pkcs12_from_pem',
      terraformGeneratorMetadata: {
        providerName: 'pkcs12',
        providerVersion: '0.2.5',
        providerVersionConstraint: '0.2.5'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._caPem = config.caPem;
    this._certPem = config.certPem;
    this._encoding = config.encoding;
    this._id = config.id;
    this._password = config.password;
    this._privateKeyPass = config.privateKeyPass;
    this._privateKeyPem = config.privateKeyPem;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // ca_pem - computed: false, optional: true, required: false
  private _caPem?: string; 
  public get caPem() {
    return this.getStringAttribute('ca_pem');
  }
  public set caPem(value: string) {
    this._caPem = value;
  }
  public resetCaPem() {
    this._caPem = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caPemInput() {
    return this._caPem;
  }

  // cert_pem - computed: false, optional: false, required: true
  private _certPem?: string; 
  public get certPem() {
    return this.getStringAttribute('cert_pem');
  }
  public set certPem(value: string) {
    this._certPem = value;
  }
  // Temporarily expose input value. Use with caution.
  public get certPemInput() {
    return this._certPem;
  }

  // encoding - computed: false, optional: true, required: false
  private _encoding?: string; 
  public get encoding() {
    return this.getStringAttribute('encoding');
  }
  public set encoding(value: string) {
    this._encoding = value;
  }
  public resetEncoding() {
    this._encoding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encodingInput() {
    return this._encoding;
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

  // password - computed: false, optional: false, required: true
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // private_key_pass - computed: false, optional: true, required: false
  private _privateKeyPass?: string; 
  public get privateKeyPass() {
    return this.getStringAttribute('private_key_pass');
  }
  public set privateKeyPass(value: string) {
    this._privateKeyPass = value;
  }
  public resetPrivateKeyPass() {
    this._privateKeyPass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateKeyPassInput() {
    return this._privateKeyPass;
  }

  // private_key_pem - computed: false, optional: false, required: true
  private _privateKeyPem?: string; 
  public get privateKeyPem() {
    return this.getStringAttribute('private_key_pem');
  }
  public set privateKeyPem(value: string) {
    this._privateKeyPem = value;
  }
  // Temporarily expose input value. Use with caution.
  public get privateKeyPemInput() {
    return this._privateKeyPem;
  }

  // result - computed: true, optional: false, required: false
  public get result() {
    return this.getStringAttribute('result');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      ca_pem: cdktf.stringToTerraform(this._caPem),
      cert_pem: cdktf.stringToTerraform(this._certPem),
      encoding: cdktf.stringToTerraform(this._encoding),
      id: cdktf.stringToTerraform(this._id),
      password: cdktf.stringToTerraform(this._password),
      private_key_pass: cdktf.stringToTerraform(this._privateKeyPass),
      private_key_pem: cdktf.stringToTerraform(this._privateKeyPem),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      ca_pem: {
        value: cdktf.stringToHclTerraform(this._caPem),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cert_pem: {
        value: cdktf.stringToHclTerraform(this._certPem),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      encoding: {
        value: cdktf.stringToHclTerraform(this._encoding),
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
      password: {
        value: cdktf.stringToHclTerraform(this._password),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      private_key_pass: {
        value: cdktf.stringToHclTerraform(this._privateKeyPass),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      private_key_pem: {
        value: cdktf.stringToHclTerraform(this._privateKeyPem),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
