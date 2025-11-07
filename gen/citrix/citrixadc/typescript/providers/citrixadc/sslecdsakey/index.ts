// https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/sslecdsakey
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SslecdsakeyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/sslecdsakey#aes256 Sslecdsakey#aes256}
  */
  readonly aes256?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/sslecdsakey#curve Sslecdsakey#curve}
  */
  readonly curve: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/sslecdsakey#des Sslecdsakey#des}
  */
  readonly des?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/sslecdsakey#des3 Sslecdsakey#des3}
  */
  readonly des3?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/sslecdsakey#id Sslecdsakey#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/sslecdsakey#keyfile Sslecdsakey#keyfile}
  */
  readonly keyfile: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/sslecdsakey#keyform Sslecdsakey#keyform}
  */
  readonly keyform?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/sslecdsakey#password Sslecdsakey#password}
  */
  readonly password?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/sslecdsakey#pkcs8 Sslecdsakey#pkcs8}
  */
  readonly pkcs8?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/sslecdsakey citrixadc_sslecdsakey}
*/
export class Sslecdsakey extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrixadc_sslecdsakey";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Sslecdsakey resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Sslecdsakey to import
  * @param importFromId The id of the existing Sslecdsakey that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/sslecdsakey#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Sslecdsakey to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrixadc_sslecdsakey", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/sslecdsakey citrixadc_sslecdsakey} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SslecdsakeyConfig
  */
  public constructor(scope: Construct, id: string, config: SslecdsakeyConfig) {
    super(scope, id, {
      terraformResourceType: 'citrixadc_sslecdsakey',
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
    this._aes256 = config.aes256;
    this._curve = config.curve;
    this._des = config.des;
    this._des3 = config.des3;
    this._id = config.id;
    this._keyfile = config.keyfile;
    this._keyform = config.keyform;
    this._password = config.password;
    this._pkcs8 = config.pkcs8;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // aes256 - computed: false, optional: true, required: false
  private _aes256?: boolean | cdktf.IResolvable; 
  public get aes256() {
    return this.getBooleanAttribute('aes256');
  }
  public set aes256(value: boolean | cdktf.IResolvable) {
    this._aes256 = value;
  }
  public resetAes256() {
    this._aes256 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aes256Input() {
    return this._aes256;
  }

  // curve - computed: false, optional: false, required: true
  private _curve?: string; 
  public get curve() {
    return this.getStringAttribute('curve');
  }
  public set curve(value: string) {
    this._curve = value;
  }
  // Temporarily expose input value. Use with caution.
  public get curveInput() {
    return this._curve;
  }

  // des - computed: false, optional: true, required: false
  private _des?: boolean | cdktf.IResolvable; 
  public get des() {
    return this.getBooleanAttribute('des');
  }
  public set des(value: boolean | cdktf.IResolvable) {
    this._des = value;
  }
  public resetDes() {
    this._des = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get desInput() {
    return this._des;
  }

  // des3 - computed: false, optional: true, required: false
  private _des3?: boolean | cdktf.IResolvable; 
  public get des3() {
    return this.getBooleanAttribute('des3');
  }
  public set des3(value: boolean | cdktf.IResolvable) {
    this._des3 = value;
  }
  public resetDes3() {
    this._des3 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get des3Input() {
    return this._des3;
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

  // keyfile - computed: false, optional: false, required: true
  private _keyfile?: string; 
  public get keyfile() {
    return this.getStringAttribute('keyfile');
  }
  public set keyfile(value: string) {
    this._keyfile = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyfileInput() {
    return this._keyfile;
  }

  // keyform - computed: false, optional: true, required: false
  private _keyform?: string; 
  public get keyform() {
    return this.getStringAttribute('keyform');
  }
  public set keyform(value: string) {
    this._keyform = value;
  }
  public resetKeyform() {
    this._keyform = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyformInput() {
    return this._keyform;
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

  // pkcs8 - computed: false, optional: true, required: false
  private _pkcs8?: boolean | cdktf.IResolvable; 
  public get pkcs8() {
    return this.getBooleanAttribute('pkcs8');
  }
  public set pkcs8(value: boolean | cdktf.IResolvable) {
    this._pkcs8 = value;
  }
  public resetPkcs8() {
    this._pkcs8 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pkcs8Input() {
    return this._pkcs8;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      aes256: cdktf.booleanToTerraform(this._aes256),
      curve: cdktf.stringToTerraform(this._curve),
      des: cdktf.booleanToTerraform(this._des),
      des3: cdktf.booleanToTerraform(this._des3),
      id: cdktf.stringToTerraform(this._id),
      keyfile: cdktf.stringToTerraform(this._keyfile),
      keyform: cdktf.stringToTerraform(this._keyform),
      password: cdktf.stringToTerraform(this._password),
      pkcs8: cdktf.booleanToTerraform(this._pkcs8),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      aes256: {
        value: cdktf.booleanToHclTerraform(this._aes256),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      curve: {
        value: cdktf.stringToHclTerraform(this._curve),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      des: {
        value: cdktf.booleanToHclTerraform(this._des),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      des3: {
        value: cdktf.booleanToHclTerraform(this._des3),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      keyfile: {
        value: cdktf.stringToHclTerraform(this._keyfile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      keyform: {
        value: cdktf.stringToHclTerraform(this._keyform),
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
      pkcs8: {
        value: cdktf.booleanToHclTerraform(this._pkcs8),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
