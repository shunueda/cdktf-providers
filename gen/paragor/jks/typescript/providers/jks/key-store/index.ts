// https://registry.terraform.io/providers/paragor/jks/0.9.0/docs/resources/key_store
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface KeyStoreConfig extends cdktf.TerraformMetaArguments {
  /**
  * Certificates key to include in generated key store; in PEM format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paragor/jks/0.9.0/docs/resources/key_store#ca KeyStore#ca}
  */
  readonly ca?: string;
  /**
  * Certificates key to include in generated key store; in PEM format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paragor/jks/0.9.0/docs/resources/key_store#certificate_chain KeyStore#certificate_chain}
  */
  readonly certificateChain: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paragor/jks/0.9.0/docs/resources/key_store#id KeyStore#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Password to secure key store. Defaults to empty string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paragor/jks/0.9.0/docs/resources/key_store#password KeyStore#password}
  */
  readonly password: string;
  /**
  * Private key to include in generated key store; in PEM format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paragor/jks/0.9.0/docs/resources/key_store#private_key KeyStore#private_key}
  */
  readonly privateKey: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/paragor/jks/0.9.0/docs/resources/key_store jks_key_store}
*/
export class KeyStore extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "jks_key_store";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a KeyStore resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the KeyStore to import
  * @param importFromId The id of the existing KeyStore that should be imported. Refer to the {@link https://registry.terraform.io/providers/paragor/jks/0.9.0/docs/resources/key_store#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the KeyStore to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "jks_key_store", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/paragor/jks/0.9.0/docs/resources/key_store jks_key_store} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options KeyStoreConfig
  */
  public constructor(scope: Construct, id: string, config: KeyStoreConfig) {
    super(scope, id, {
      terraformResourceType: 'jks_key_store',
      terraformGeneratorMetadata: {
        providerName: 'jks',
        providerVersion: '0.9.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._ca = config.ca;
    this._certificateChain = config.certificateChain;
    this._id = config.id;
    this._password = config.password;
    this._privateKey = config.privateKey;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // ca - computed: false, optional: true, required: false
  private _ca?: string; 
  public get ca() {
    return this.getStringAttribute('ca');
  }
  public set ca(value: string) {
    this._ca = value;
  }
  public resetCa() {
    this._ca = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caInput() {
    return this._ca;
  }

  // certificate_chain - computed: false, optional: false, required: true
  private _certificateChain?: string[]; 
  public get certificateChain() {
    return this.getListAttribute('certificate_chain');
  }
  public set certificateChain(value: string[]) {
    this._certificateChain = value;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateChainInput() {
    return this._certificateChain;
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

  // jks - computed: true, optional: false, required: false
  public get jks() {
    return this.getStringAttribute('jks');
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      ca: cdktf.stringToTerraform(this._ca),
      certificate_chain: cdktf.listMapper(cdktf.stringToTerraform, false)(this._certificateChain),
      id: cdktf.stringToTerraform(this._id),
      password: cdktf.stringToTerraform(this._password),
      private_key: cdktf.stringToTerraform(this._privateKey),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      ca: {
        value: cdktf.stringToHclTerraform(this._ca),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      certificate_chain: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._certificateChain),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
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
