// https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/dnskey
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DnskeyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/dnskey#algorithm Dnskey#algorithm}
  */
  readonly algorithm?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/dnskey#autorollover Dnskey#autorollover}
  */
  readonly autorollover?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/dnskey#expires Dnskey#expires}
  */
  readonly expires?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/dnskey#filenameprefix Dnskey#filenameprefix}
  */
  readonly filenameprefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/dnskey#id Dnskey#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/dnskey#keyname Dnskey#keyname}
  */
  readonly keyname: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/dnskey#keysize Dnskey#keysize}
  */
  readonly keysize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/dnskey#keytype Dnskey#keytype}
  */
  readonly keytype?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/dnskey#notificationperiod Dnskey#notificationperiod}
  */
  readonly notificationperiod?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/dnskey#password Dnskey#password}
  */
  readonly password?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/dnskey#privatekey Dnskey#privatekey}
  */
  readonly privatekey: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/dnskey#publickey Dnskey#publickey}
  */
  readonly publickey: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/dnskey#revoke Dnskey#revoke}
  */
  readonly revoke?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/dnskey#rollovermethod Dnskey#rollovermethod}
  */
  readonly rollovermethod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/dnskey#src Dnskey#src}
  */
  readonly src?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/dnskey#ttl Dnskey#ttl}
  */
  readonly ttl?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/dnskey#units1 Dnskey#units1}
  */
  readonly units1?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/dnskey#units2 Dnskey#units2}
  */
  readonly units2?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/dnskey#zonename Dnskey#zonename}
  */
  readonly zonename?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/dnskey citrixadc_dnskey}
*/
export class Dnskey extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrixadc_dnskey";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Dnskey resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Dnskey to import
  * @param importFromId The id of the existing Dnskey that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/dnskey#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Dnskey to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrixadc_dnskey", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/dnskey citrixadc_dnskey} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DnskeyConfig
  */
  public constructor(scope: Construct, id: string, config: DnskeyConfig) {
    super(scope, id, {
      terraformResourceType: 'citrixadc_dnskey',
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
    this._algorithm = config.algorithm;
    this._autorollover = config.autorollover;
    this._expires = config.expires;
    this._filenameprefix = config.filenameprefix;
    this._id = config.id;
    this._keyname = config.keyname;
    this._keysize = config.keysize;
    this._keytype = config.keytype;
    this._notificationperiod = config.notificationperiod;
    this._password = config.password;
    this._privatekey = config.privatekey;
    this._publickey = config.publickey;
    this._revoke = config.revoke;
    this._rollovermethod = config.rollovermethod;
    this._src = config.src;
    this._ttl = config.ttl;
    this._units1 = config.units1;
    this._units2 = config.units2;
    this._zonename = config.zonename;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // algorithm - computed: true, optional: true, required: false
  private _algorithm?: string; 
  public get algorithm() {
    return this.getStringAttribute('algorithm');
  }
  public set algorithm(value: string) {
    this._algorithm = value;
  }
  public resetAlgorithm() {
    this._algorithm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get algorithmInput() {
    return this._algorithm;
  }

  // autorollover - computed: true, optional: true, required: false
  private _autorollover?: string; 
  public get autorollover() {
    return this.getStringAttribute('autorollover');
  }
  public set autorollover(value: string) {
    this._autorollover = value;
  }
  public resetAutorollover() {
    this._autorollover = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autorolloverInput() {
    return this._autorollover;
  }

  // expires - computed: true, optional: true, required: false
  private _expires?: number; 
  public get expires() {
    return this.getNumberAttribute('expires');
  }
  public set expires(value: number) {
    this._expires = value;
  }
  public resetExpires() {
    this._expires = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expiresInput() {
    return this._expires;
  }

  // filenameprefix - computed: true, optional: true, required: false
  private _filenameprefix?: string; 
  public get filenameprefix() {
    return this.getStringAttribute('filenameprefix');
  }
  public set filenameprefix(value: string) {
    this._filenameprefix = value;
  }
  public resetFilenameprefix() {
    this._filenameprefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filenameprefixInput() {
    return this._filenameprefix;
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

  // keyname - computed: false, optional: false, required: true
  private _keyname?: string; 
  public get keyname() {
    return this.getStringAttribute('keyname');
  }
  public set keyname(value: string) {
    this._keyname = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keynameInput() {
    return this._keyname;
  }

  // keysize - computed: true, optional: true, required: false
  private _keysize?: number; 
  public get keysize() {
    return this.getNumberAttribute('keysize');
  }
  public set keysize(value: number) {
    this._keysize = value;
  }
  public resetKeysize() {
    this._keysize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keysizeInput() {
    return this._keysize;
  }

  // keytype - computed: true, optional: true, required: false
  private _keytype?: string; 
  public get keytype() {
    return this.getStringAttribute('keytype');
  }
  public set keytype(value: string) {
    this._keytype = value;
  }
  public resetKeytype() {
    this._keytype = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keytypeInput() {
    return this._keytype;
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

  // privatekey - computed: false, optional: false, required: true
  private _privatekey?: string; 
  public get privatekey() {
    return this.getStringAttribute('privatekey');
  }
  public set privatekey(value: string) {
    this._privatekey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get privatekeyInput() {
    return this._privatekey;
  }

  // publickey - computed: false, optional: false, required: true
  private _publickey?: string; 
  public get publickey() {
    return this.getStringAttribute('publickey');
  }
  public set publickey(value: string) {
    this._publickey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get publickeyInput() {
    return this._publickey;
  }

  // revoke - computed: true, optional: true, required: false
  private _revoke?: boolean | cdktf.IResolvable; 
  public get revoke() {
    return this.getBooleanAttribute('revoke');
  }
  public set revoke(value: boolean | cdktf.IResolvable) {
    this._revoke = value;
  }
  public resetRevoke() {
    this._revoke = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get revokeInput() {
    return this._revoke;
  }

  // rollovermethod - computed: true, optional: true, required: false
  private _rollovermethod?: string; 
  public get rollovermethod() {
    return this.getStringAttribute('rollovermethod');
  }
  public set rollovermethod(value: string) {
    this._rollovermethod = value;
  }
  public resetRollovermethod() {
    this._rollovermethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rollovermethodInput() {
    return this._rollovermethod;
  }

  // src - computed: true, optional: true, required: false
  private _src?: string; 
  public get src() {
    return this.getStringAttribute('src');
  }
  public set src(value: string) {
    this._src = value;
  }
  public resetSrc() {
    this._src = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcInput() {
    return this._src;
  }

  // ttl - computed: true, optional: true, required: false
  private _ttl?: number; 
  public get ttl() {
    return this.getNumberAttribute('ttl');
  }
  public set ttl(value: number) {
    this._ttl = value;
  }
  public resetTtl() {
    this._ttl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ttlInput() {
    return this._ttl;
  }

  // units1 - computed: true, optional: true, required: false
  private _units1?: string; 
  public get units1() {
    return this.getStringAttribute('units1');
  }
  public set units1(value: string) {
    this._units1 = value;
  }
  public resetUnits1() {
    this._units1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get units1Input() {
    return this._units1;
  }

  // units2 - computed: true, optional: true, required: false
  private _units2?: string; 
  public get units2() {
    return this.getStringAttribute('units2');
  }
  public set units2(value: string) {
    this._units2 = value;
  }
  public resetUnits2() {
    this._units2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get units2Input() {
    return this._units2;
  }

  // zonename - computed: true, optional: true, required: false
  private _zonename?: string; 
  public get zonename() {
    return this.getStringAttribute('zonename');
  }
  public set zonename(value: string) {
    this._zonename = value;
  }
  public resetZonename() {
    this._zonename = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zonenameInput() {
    return this._zonename;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      algorithm: cdktf.stringToTerraform(this._algorithm),
      autorollover: cdktf.stringToTerraform(this._autorollover),
      expires: cdktf.numberToTerraform(this._expires),
      filenameprefix: cdktf.stringToTerraform(this._filenameprefix),
      id: cdktf.stringToTerraform(this._id),
      keyname: cdktf.stringToTerraform(this._keyname),
      keysize: cdktf.numberToTerraform(this._keysize),
      keytype: cdktf.stringToTerraform(this._keytype),
      notificationperiod: cdktf.numberToTerraform(this._notificationperiod),
      password: cdktf.stringToTerraform(this._password),
      privatekey: cdktf.stringToTerraform(this._privatekey),
      publickey: cdktf.stringToTerraform(this._publickey),
      revoke: cdktf.booleanToTerraform(this._revoke),
      rollovermethod: cdktf.stringToTerraform(this._rollovermethod),
      src: cdktf.stringToTerraform(this._src),
      ttl: cdktf.numberToTerraform(this._ttl),
      units1: cdktf.stringToTerraform(this._units1),
      units2: cdktf.stringToTerraform(this._units2),
      zonename: cdktf.stringToTerraform(this._zonename),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      algorithm: {
        value: cdktf.stringToHclTerraform(this._algorithm),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      autorollover: {
        value: cdktf.stringToHclTerraform(this._autorollover),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      expires: {
        value: cdktf.numberToHclTerraform(this._expires),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      filenameprefix: {
        value: cdktf.stringToHclTerraform(this._filenameprefix),
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
      keyname: {
        value: cdktf.stringToHclTerraform(this._keyname),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      keysize: {
        value: cdktf.numberToHclTerraform(this._keysize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      keytype: {
        value: cdktf.stringToHclTerraform(this._keytype),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      notificationperiod: {
        value: cdktf.numberToHclTerraform(this._notificationperiod),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      password: {
        value: cdktf.stringToHclTerraform(this._password),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      privatekey: {
        value: cdktf.stringToHclTerraform(this._privatekey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      publickey: {
        value: cdktf.stringToHclTerraform(this._publickey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      revoke: {
        value: cdktf.booleanToHclTerraform(this._revoke),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      rollovermethod: {
        value: cdktf.stringToHclTerraform(this._rollovermethod),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      src: {
        value: cdktf.stringToHclTerraform(this._src),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ttl: {
        value: cdktf.numberToHclTerraform(this._ttl),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      units1: {
        value: cdktf.stringToHclTerraform(this._units1),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      units2: {
        value: cdktf.stringToHclTerraform(this._units2),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      zonename: {
        value: cdktf.stringToHclTerraform(this._zonename),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
