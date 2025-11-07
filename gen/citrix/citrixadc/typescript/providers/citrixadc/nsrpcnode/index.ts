// https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nsrpcnode
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NsrpcnodeConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nsrpcnode#id Nsrpcnode#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nsrpcnode#ipaddress Nsrpcnode#ipaddress}
  */
  readonly ipaddress: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nsrpcnode#password Nsrpcnode#password}
  */
  readonly password?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nsrpcnode#secure Nsrpcnode#secure}
  */
  readonly secure?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nsrpcnode#srcip Nsrpcnode#srcip}
  */
  readonly srcip?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nsrpcnode#validatecert Nsrpcnode#validatecert}
  */
  readonly validatecert?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nsrpcnode citrixadc_nsrpcnode}
*/
export class Nsrpcnode extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrixadc_nsrpcnode";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Nsrpcnode resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Nsrpcnode to import
  * @param importFromId The id of the existing Nsrpcnode that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nsrpcnode#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Nsrpcnode to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrixadc_nsrpcnode", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nsrpcnode citrixadc_nsrpcnode} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NsrpcnodeConfig
  */
  public constructor(scope: Construct, id: string, config: NsrpcnodeConfig) {
    super(scope, id, {
      terraformResourceType: 'citrixadc_nsrpcnode',
      terraformGeneratorMetadata: {
        providerName: 'citrixadc',
        providerVersion: '1.45.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._ipaddress = config.ipaddress;
    this._password = config.password;
    this._secure = config.secure;
    this._srcip = config.srcip;
    this._validatecert = config.validatecert;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // ipaddress - computed: false, optional: false, required: true
  private _ipaddress?: string; 
  public get ipaddress() {
    return this.getStringAttribute('ipaddress');
  }
  public set ipaddress(value: string) {
    this._ipaddress = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipaddressInput() {
    return this._ipaddress;
  }

  // password - computed: true, optional: true, required: false
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

  // secure - computed: true, optional: true, required: false
  private _secure?: string; 
  public get secure() {
    return this.getStringAttribute('secure');
  }
  public set secure(value: string) {
    this._secure = value;
  }
  public resetSecure() {
    this._secure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secureInput() {
    return this._secure;
  }

  // srcip - computed: true, optional: true, required: false
  private _srcip?: string; 
  public get srcip() {
    return this.getStringAttribute('srcip');
  }
  public set srcip(value: string) {
    this._srcip = value;
  }
  public resetSrcip() {
    this._srcip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcipInput() {
    return this._srcip;
  }

  // validatecert - computed: true, optional: true, required: false
  private _validatecert?: string; 
  public get validatecert() {
    return this.getStringAttribute('validatecert');
  }
  public set validatecert(value: string) {
    this._validatecert = value;
  }
  public resetValidatecert() {
    this._validatecert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validatecertInput() {
    return this._validatecert;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      ipaddress: cdktf.stringToTerraform(this._ipaddress),
      password: cdktf.stringToTerraform(this._password),
      secure: cdktf.stringToTerraform(this._secure),
      srcip: cdktf.stringToTerraform(this._srcip),
      validatecert: cdktf.stringToTerraform(this._validatecert),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipaddress: {
        value: cdktf.stringToHclTerraform(this._ipaddress),
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
      secure: {
        value: cdktf.stringToHclTerraform(this._secure),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      srcip: {
        value: cdktf.stringToHclTerraform(this._srcip),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      validatecert: {
        value: cdktf.stringToHclTerraform(this._validatecert),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
