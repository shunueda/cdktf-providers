// https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/sslcertkey
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SslcertkeyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/sslcertkey#bundle Sslcertkey#bundle}
  */
  readonly bundle?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/sslcertkey#cert Sslcertkey#cert}
  */
  readonly cert?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/sslcertkey#certkey Sslcertkey#certkey}
  */
  readonly certkey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/sslcertkey#expirymonitor Sslcertkey#expirymonitor}
  */
  readonly expirymonitor?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/sslcertkey#fipskey Sslcertkey#fipskey}
  */
  readonly fipskey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/sslcertkey#hsmkey Sslcertkey#hsmkey}
  */
  readonly hsmkey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/sslcertkey#id Sslcertkey#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/sslcertkey#inform Sslcertkey#inform}
  */
  readonly inform?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/sslcertkey#key Sslcertkey#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/sslcertkey#linkcertkeyname Sslcertkey#linkcertkeyname}
  */
  readonly linkcertkeyname?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/sslcertkey#nodomaincheck Sslcertkey#nodomaincheck}
  */
  readonly nodomaincheck?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/sslcertkey#notificationperiod Sslcertkey#notificationperiod}
  */
  readonly notificationperiod?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/sslcertkey#ocspstaplingcache Sslcertkey#ocspstaplingcache}
  */
  readonly ocspstaplingcache?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/sslcertkey#passplain Sslcertkey#passplain}
  */
  readonly passplain?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/sslcertkey#password Sslcertkey#password}
  */
  readonly password?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/sslcertkey citrixadc_sslcertkey}
*/
export class Sslcertkey extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrixadc_sslcertkey";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Sslcertkey resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Sslcertkey to import
  * @param importFromId The id of the existing Sslcertkey that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/sslcertkey#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Sslcertkey to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrixadc_sslcertkey", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/sslcertkey citrixadc_sslcertkey} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SslcertkeyConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SslcertkeyConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'citrixadc_sslcertkey',
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
    this._bundle = config.bundle;
    this._cert = config.cert;
    this._certkey = config.certkey;
    this._expirymonitor = config.expirymonitor;
    this._fipskey = config.fipskey;
    this._hsmkey = config.hsmkey;
    this._id = config.id;
    this._inform = config.inform;
    this._key = config.key;
    this._linkcertkeyname = config.linkcertkeyname;
    this._nodomaincheck = config.nodomaincheck;
    this._notificationperiod = config.notificationperiod;
    this._ocspstaplingcache = config.ocspstaplingcache;
    this._passplain = config.passplain;
    this._password = config.password;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bundle - computed: true, optional: true, required: false
  private _bundle?: string; 
  public get bundle() {
    return this.getStringAttribute('bundle');
  }
  public set bundle(value: string) {
    this._bundle = value;
  }
  public resetBundle() {
    this._bundle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bundleInput() {
    return this._bundle;
  }

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

  // certkey - computed: true, optional: true, required: false
  private _certkey?: string; 
  public get certkey() {
    return this.getStringAttribute('certkey');
  }
  public set certkey(value: string) {
    this._certkey = value;
  }
  public resetCertkey() {
    this._certkey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certkeyInput() {
    return this._certkey;
  }

  // expirymonitor - computed: true, optional: true, required: false
  private _expirymonitor?: string; 
  public get expirymonitor() {
    return this.getStringAttribute('expirymonitor');
  }
  public set expirymonitor(value: string) {
    this._expirymonitor = value;
  }
  public resetExpirymonitor() {
    this._expirymonitor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expirymonitorInput() {
    return this._expirymonitor;
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

  // hsmkey - computed: true, optional: true, required: false
  private _hsmkey?: string; 
  public get hsmkey() {
    return this.getStringAttribute('hsmkey');
  }
  public set hsmkey(value: string) {
    this._hsmkey = value;
  }
  public resetHsmkey() {
    this._hsmkey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hsmkeyInput() {
    return this._hsmkey;
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

  // linkcertkeyname - computed: false, optional: true, required: false
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

  // notificationperiod - computed: true, optional: true, required: false
  private _notificationperiod?: number; 
  public get notificationperiod() {
    return this.getNumberAttribute('notificationperiod');
  }
  public set notificationperiod(value: number) {
    this._notificationperiod = value;
  }
  public resetNotificationperiod() {
    this._notificationperiod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationperiodInput() {
    return this._notificationperiod;
  }

  // ocspstaplingcache - computed: true, optional: true, required: false
  private _ocspstaplingcache?: boolean | cdktf.IResolvable; 
  public get ocspstaplingcache() {
    return this.getBooleanAttribute('ocspstaplingcache');
  }
  public set ocspstaplingcache(value: boolean | cdktf.IResolvable) {
    this._ocspstaplingcache = value;
  }
  public resetOcspstaplingcache() {
    this._ocspstaplingcache = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ocspstaplingcacheInput() {
    return this._ocspstaplingcache;
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
      bundle: cdktf.stringToTerraform(this._bundle),
      cert: cdktf.stringToTerraform(this._cert),
      certkey: cdktf.stringToTerraform(this._certkey),
      expirymonitor: cdktf.stringToTerraform(this._expirymonitor),
      fipskey: cdktf.stringToTerraform(this._fipskey),
      hsmkey: cdktf.stringToTerraform(this._hsmkey),
      id: cdktf.stringToTerraform(this._id),
      inform: cdktf.stringToTerraform(this._inform),
      key: cdktf.stringToTerraform(this._key),
      linkcertkeyname: cdktf.stringToTerraform(this._linkcertkeyname),
      nodomaincheck: cdktf.booleanToTerraform(this._nodomaincheck),
      notificationperiod: cdktf.numberToTerraform(this._notificationperiod),
      ocspstaplingcache: cdktf.booleanToTerraform(this._ocspstaplingcache),
      passplain: cdktf.stringToTerraform(this._passplain),
      password: cdktf.booleanToTerraform(this._password),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      bundle: {
        value: cdktf.stringToHclTerraform(this._bundle),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
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
      expirymonitor: {
        value: cdktf.stringToHclTerraform(this._expirymonitor),
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
      hsmkey: {
        value: cdktf.stringToHclTerraform(this._hsmkey),
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
      notificationperiod: {
        value: cdktf.numberToHclTerraform(this._notificationperiod),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ocspstaplingcache: {
        value: cdktf.booleanToHclTerraform(this._ocspstaplingcache),
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
