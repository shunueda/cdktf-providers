// https://registry.terraform.io/providers/paragor/jks/0.9.0/docs/resources/trust_store
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TrustStoreConfig extends cdktf.TerraformMetaArguments {
  /**
  * CA certificates or chains to include in generated trust store; in PEM format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paragor/jks/0.9.0/docs/resources/trust_store#certificates TrustStore#certificates}
  */
  readonly certificates: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paragor/jks/0.9.0/docs/resources/trust_store#id TrustStore#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Password to secure trust store. Defaults to empty string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paragor/jks/0.9.0/docs/resources/trust_store#password TrustStore#password}
  */
  readonly password?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/paragor/jks/0.9.0/docs/resources/trust_store jks_trust_store}
*/
export class TrustStore extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "jks_trust_store";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a TrustStore resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TrustStore to import
  * @param importFromId The id of the existing TrustStore that should be imported. Refer to the {@link https://registry.terraform.io/providers/paragor/jks/0.9.0/docs/resources/trust_store#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TrustStore to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "jks_trust_store", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/paragor/jks/0.9.0/docs/resources/trust_store jks_trust_store} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TrustStoreConfig
  */
  public constructor(scope: Construct, id: string, config: TrustStoreConfig) {
    super(scope, id, {
      terraformResourceType: 'jks_trust_store',
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
    this._certificates = config.certificates;
    this._id = config.id;
    this._password = config.password;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // certificates - computed: false, optional: false, required: true
  private _certificates?: string[]; 
  public get certificates() {
    return this.getListAttribute('certificates');
  }
  public set certificates(value: string[]) {
    this._certificates = value;
  }
  // Temporarily expose input value. Use with caution.
  public get certificatesInput() {
    return this._certificates;
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

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      certificates: cdktf.listMapper(cdktf.stringToTerraform, false)(this._certificates),
      id: cdktf.stringToTerraform(this._id),
      password: cdktf.stringToTerraform(this._password),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      certificates: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._certificates),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
