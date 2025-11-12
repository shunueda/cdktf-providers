// https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/sslcertkey_update
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SslcertkeyUpdateConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/sslcertkey_update#cert SslcertkeyUpdate#cert}
  */
  readonly cert?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/sslcertkey_update#certkey SslcertkeyUpdate#certkey}
  */
  readonly certkey: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/sslcertkey_update#fipskey SslcertkeyUpdate#fipskey}
  */
  readonly fipskey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/sslcertkey_update#id SslcertkeyUpdate#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/sslcertkey_update#inform SslcertkeyUpdate#inform}
  */
  readonly inform?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/sslcertkey_update#key SslcertkeyUpdate#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/sslcertkey_update#linkcertkeyname SslcertkeyUpdate#linkcertkeyname}
  */
  readonly linkcertkeyname?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/sslcertkey_update#nodomaincheck SslcertkeyUpdate#nodomaincheck}
  */
  readonly nodomaincheck?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/sslcertkey_update#passplain SslcertkeyUpdate#passplain}
  */
  readonly passplain?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/sslcertkey_update#password SslcertkeyUpdate#password}
  */
  readonly password?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/sslcertkey_update citrixadc_sslcertkey_update}
*/
export class SslcertkeyUpdate extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrixadc_sslcertkey_update";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SslcertkeyUpdate resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SslcertkeyUpdate to import
  * @param importFromId The id of the existing SslcertkeyUpdate that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/sslcertkey_update#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SslcertkeyUpdate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrixadc_sslcertkey_update", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/sslcertkey_update citrixadc_sslcertkey_update} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SslcertkeyUpdateConfig
  */
  public constructor(scope: Construct, id: string, config: SslcertkeyUpdateConfig) {
    super(scope, id, {
      terraformResourceType: 'citrixadc_sslcertkey_update',
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
    this._cert = config.cert;
    this._certkey = config.certkey;
    this._fipskey = config.fipskey;
    this._id = config.id;
    this._inform = config.inform;
    this._key = config.key;
    this._linkcertkeyname = config.linkcertkeyname;
    this._nodomaincheck = config.nodomaincheck;
    this._passplain = config.passplain;
    this._password = config.password;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cert - computed: true, optional: true, required: false
  private _cert?: string; 
  public get cert() {
    return this.getStringAttribute('cert');
  }
  public set cert(value: string) {
    this._cert = value;
  }
  public resetCert() {
    this._cert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certInput() {
    return this._cert;
  }

  // certkey - computed: false, optional: false, required: true
  private _certkey?: string; 
  public get certkey() {
    return this.getStringAttribute('certkey');
  }
  public set certkey(value: string) {
    this._certkey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get certkeyInput() {
    return this._certkey;
  }

  // fipskey - computed: true, optional: true, required: false
  private _fipskey?: string; 
  public get fipskey() {
    return this.getStringAttribute('fipskey');
  }
  public set fipskey(value: string) {
    this._fipskey = value;
  }
  public resetFipskey() {
    this._fipskey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fipskeyInput() {
    return this._fipskey;
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

  // inform - computed: true, optional: true, required: false
  private _inform?: string; 
  public get inform() {
    return this.getStringAttribute('inform');
  }
  public set inform(value: string) {
    this._inform = value;
  }
  public resetInform() {
    this._inform = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get informInput() {
    return this._inform;
  }

  // key - computed: true, optional: true, required: false
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

  // linkcertkeyname - computed: true, optional: true, required: false
  private _linkcertkeyname?: string; 
  public get linkcertkeyname() {
    return this.getStringAttribute('linkcertkeyname');
  }
  public set linkcertkeyname(value: string) {
    this._linkcertkeyname = value;
  }
  public resetLinkcertkeyname() {
    this._linkcertkeyname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linkcertkeynameInput() {
    return this._linkcertkeyname;
  }

  // nodomaincheck - computed: true, optional: true, required: false
  private _nodomaincheck?: boolean | cdktf.IResolvable; 
  public get nodomaincheck() {
    return this.getBooleanAttribute('nodomaincheck');
  }
  public set nodomaincheck(value: boolean | cdktf.IResolvable) {
    this._nodomaincheck = value;
  }
  public resetNodomaincheck() {
    this._nodomaincheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodomaincheckInput() {
    return this._nodomaincheck;
  }

  // passplain - computed: true, optional: true, required: false
  private _passplain?: string; 
  public get passplain() {
    return this.getStringAttribute('passplain');
  }
  public set passplain(value: string) {
    this._passplain = value;
  }
  public resetPassplain() {
    this._passplain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passplainInput() {
    return this._passplain;
  }

  // password - computed: true, optional: true, required: false
  private _password?: boolean | cdktf.IResolvable; 
  public get password() {
    return this.getBooleanAttribute('password');
  }
  public set password(value: boolean | cdktf.IResolvable) {
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
      cert: cdktf.stringToTerraform(this._cert),
      certkey: cdktf.stringToTerraform(this._certkey),
      fipskey: cdktf.stringToTerraform(this._fipskey),
      id: cdktf.stringToTerraform(this._id),
      inform: cdktf.stringToTerraform(this._inform),
      key: cdktf.stringToTerraform(this._key),
      linkcertkeyname: cdktf.stringToTerraform(this._linkcertkeyname),
      nodomaincheck: cdktf.booleanToTerraform(this._nodomaincheck),
      passplain: cdktf.stringToTerraform(this._passplain),
      password: cdktf.booleanToTerraform(this._password),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cert: {
        value: cdktf.stringToHclTerraform(this._cert),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      certkey: {
        value: cdktf.stringToHclTerraform(this._certkey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fipskey: {
        value: cdktf.stringToHclTerraform(this._fipskey),
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
      inform: {
        value: cdktf.stringToHclTerraform(this._inform),
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
      linkcertkeyname: {
        value: cdktf.stringToHclTerraform(this._linkcertkeyname),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      nodomaincheck: {
        value: cdktf.booleanToHclTerraform(this._nodomaincheck),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      passplain: {
        value: cdktf.stringToHclTerraform(this._passplain),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      password: {
        value: cdktf.booleanToHclTerraform(this._password),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
