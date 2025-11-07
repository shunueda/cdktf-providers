// https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/sslhsmkey
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SslhsmkeyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/sslhsmkey#hsmkeyname Sslhsmkey#hsmkeyname}
  */
  readonly hsmkeyname: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/sslhsmkey#hsmtype Sslhsmkey#hsmtype}
  */
  readonly hsmtype?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/sslhsmkey#id Sslhsmkey#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/sslhsmkey#key Sslhsmkey#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/sslhsmkey#keystore Sslhsmkey#keystore}
  */
  readonly keystore?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/sslhsmkey#password Sslhsmkey#password}
  */
  readonly password?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/sslhsmkey#serialnum Sslhsmkey#serialnum}
  */
  readonly serialnum?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/sslhsmkey citrixadc_sslhsmkey}
*/
export class Sslhsmkey extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrixadc_sslhsmkey";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Sslhsmkey resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Sslhsmkey to import
  * @param importFromId The id of the existing Sslhsmkey that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/sslhsmkey#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Sslhsmkey to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrixadc_sslhsmkey", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/sslhsmkey citrixadc_sslhsmkey} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SslhsmkeyConfig
  */
  public constructor(scope: Construct, id: string, config: SslhsmkeyConfig) {
    super(scope, id, {
      terraformResourceType: 'citrixadc_sslhsmkey',
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
    this._hsmkeyname = config.hsmkeyname;
    this._hsmtype = config.hsmtype;
    this._id = config.id;
    this._key = config.key;
    this._keystore = config.keystore;
    this._password = config.password;
    this._serialnum = config.serialnum;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // hsmkeyname - computed: false, optional: false, required: true
  private _hsmkeyname?: string; 
  public get hsmkeyname() {
    return this.getStringAttribute('hsmkeyname');
  }
  public set hsmkeyname(value: string) {
    this._hsmkeyname = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hsmkeynameInput() {
    return this._hsmkeyname;
  }

  // hsmtype - computed: false, optional: true, required: false
  private _hsmtype?: string; 
  public get hsmtype() {
    return this.getStringAttribute('hsmtype');
  }
  public set hsmtype(value: string) {
    this._hsmtype = value;
  }
  public resetHsmtype() {
    this._hsmtype = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hsmtypeInput() {
    return this._hsmtype;
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

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // keystore - computed: false, optional: true, required: false
  private _keystore?: string; 
  public get keystore() {
    return this.getStringAttribute('keystore');
  }
  public set keystore(value: string) {
    this._keystore = value;
  }
  public resetKeystore() {
    this._keystore = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keystoreInput() {
    return this._keystore;
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

  // serialnum - computed: false, optional: true, required: false
  private _serialnum?: string; 
  public get serialnum() {
    return this.getStringAttribute('serialnum');
  }
  public set serialnum(value: string) {
    this._serialnum = value;
  }
  public resetSerialnum() {
    this._serialnum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serialnumInput() {
    return this._serialnum;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      hsmkeyname: cdktf.stringToTerraform(this._hsmkeyname),
      hsmtype: cdktf.stringToTerraform(this._hsmtype),
      id: cdktf.stringToTerraform(this._id),
      key: cdktf.stringToTerraform(this._key),
      keystore: cdktf.stringToTerraform(this._keystore),
      password: cdktf.stringToTerraform(this._password),
      serialnum: cdktf.stringToTerraform(this._serialnum),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      hsmkeyname: {
        value: cdktf.stringToHclTerraform(this._hsmkeyname),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hsmtype: {
        value: cdktf.stringToHclTerraform(this._hsmtype),
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
      key: {
        value: cdktf.stringToHclTerraform(this._key),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      keystore: {
        value: cdktf.stringToHclTerraform(this._keystore),
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
      serialnum: {
        value: cdktf.stringToHclTerraform(this._serialnum),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
