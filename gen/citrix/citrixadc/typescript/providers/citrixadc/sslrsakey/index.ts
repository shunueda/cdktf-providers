// https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/sslrsakey
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SslrsakeyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/sslrsakey#aes256 Sslrsakey#aes256}
  */
  readonly aes256?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/sslrsakey#bits Sslrsakey#bits}
  */
  readonly bits: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/sslrsakey#des Sslrsakey#des}
  */
  readonly des?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/sslrsakey#des3 Sslrsakey#des3}
  */
  readonly des3?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/sslrsakey#exponent Sslrsakey#exponent}
  */
  readonly exponent?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/sslrsakey#id Sslrsakey#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/sslrsakey#keyfile Sslrsakey#keyfile}
  */
  readonly keyfile: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/sslrsakey#keyform Sslrsakey#keyform}
  */
  readonly keyform?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/sslrsakey#password Sslrsakey#password}
  */
  readonly password?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/sslrsakey#pkcs8 Sslrsakey#pkcs8}
  */
  readonly pkcs8?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/sslrsakey citrixadc_sslrsakey}
*/
export class Sslrsakey extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrixadc_sslrsakey";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Sslrsakey resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Sslrsakey to import
  * @param importFromId The id of the existing Sslrsakey that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/sslrsakey#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Sslrsakey to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrixadc_sslrsakey", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/sslrsakey citrixadc_sslrsakey} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SslrsakeyConfig
  */
  public constructor(scope: Construct, id: string, config: SslrsakeyConfig) {
    super(scope, id, {
      terraformResourceType: 'citrixadc_sslrsakey',
      terraformGeneratorMetadata: {
        providerName: 'citrixadc',
        providerVersion: '2.0.0',
        providerVersionConstraint: '2.0.0'
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
    this._bits = config.bits;
    this._des = config.des;
    this._des3 = config.des3;
    this._exponent = config.exponent;
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

  // bits - computed: false, optional: false, required: true
  private _bits?: number; 
  public get bits() {
    return this.getNumberAttribute('bits');
  }
  public set bits(value: number) {
    this._bits = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bitsInput() {
    return this._bits;
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

  // exponent - computed: false, optional: true, required: false
  private _exponent?: string; 
  public get exponent() {
    return this.getStringAttribute('exponent');
  }
  public set exponent(value: string) {
    this._exponent = value;
  }
  public resetExponent() {
    this._exponent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exponentInput() {
    return this._exponent;
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
      bits: cdktf.numberToTerraform(this._bits),
      des: cdktf.booleanToTerraform(this._des),
      des3: cdktf.booleanToTerraform(this._des3),
      exponent: cdktf.stringToTerraform(this._exponent),
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
      bits: {
        value: cdktf.numberToHclTerraform(this._bits),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
      exponent: {
        value: cdktf.stringToHclTerraform(this._exponent),
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
