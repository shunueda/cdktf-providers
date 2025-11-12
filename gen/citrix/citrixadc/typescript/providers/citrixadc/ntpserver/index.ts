// https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/ntpserver
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NtpserverConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/ntpserver#autokey Ntpserver#autokey}
  */
  readonly autokey?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/ntpserver#id Ntpserver#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/ntpserver#key Ntpserver#key}
  */
  readonly key?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/ntpserver#maxpoll Ntpserver#maxpoll}
  */
  readonly maxpoll?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/ntpserver#minpoll Ntpserver#minpoll}
  */
  readonly minpoll?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/ntpserver#preferredntpserver Ntpserver#preferredntpserver}
  */
  readonly preferredntpserver?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/ntpserver#serverip Ntpserver#serverip}
  */
  readonly serverip?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/ntpserver#servername Ntpserver#servername}
  */
  readonly servername?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/ntpserver citrixadc_ntpserver}
*/
export class Ntpserver extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrixadc_ntpserver";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Ntpserver resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Ntpserver to import
  * @param importFromId The id of the existing Ntpserver that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/ntpserver#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Ntpserver to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrixadc_ntpserver", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/ntpserver citrixadc_ntpserver} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NtpserverConfig = {}
  */
  public constructor(scope: Construct, id: string, config: NtpserverConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'citrixadc_ntpserver',
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
    this._autokey = config.autokey;
    this._id = config.id;
    this._key = config.key;
    this._maxpoll = config.maxpoll;
    this._minpoll = config.minpoll;
    this._preferredntpserver = config.preferredntpserver;
    this._serverip = config.serverip;
    this._servername = config.servername;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // autokey - computed: true, optional: true, required: false
  private _autokey?: boolean | cdktf.IResolvable; 
  public get autokey() {
    return this.getBooleanAttribute('autokey');
  }
  public set autokey(value: boolean | cdktf.IResolvable) {
    this._autokey = value;
  }
  public resetAutokey() {
    this._autokey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autokeyInput() {
    return this._autokey;
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

  // key - computed: true, optional: true, required: false
  private _key?: number; 
  public get key() {
    return this.getNumberAttribute('key');
  }
  public set key(value: number) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // maxpoll - computed: true, optional: true, required: false
  private _maxpoll?: number; 
  public get maxpoll() {
    return this.getNumberAttribute('maxpoll');
  }
  public set maxpoll(value: number) {
    this._maxpoll = value;
  }
  public resetMaxpoll() {
    this._maxpoll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxpollInput() {
    return this._maxpoll;
  }

  // minpoll - computed: true, optional: true, required: false
  private _minpoll?: number; 
  public get minpoll() {
    return this.getNumberAttribute('minpoll');
  }
  public set minpoll(value: number) {
    this._minpoll = value;
  }
  public resetMinpoll() {
    this._minpoll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minpollInput() {
    return this._minpoll;
  }

  // preferredntpserver - computed: true, optional: true, required: false
  private _preferredntpserver?: string; 
  public get preferredntpserver() {
    return this.getStringAttribute('preferredntpserver');
  }
  public set preferredntpserver(value: string) {
    this._preferredntpserver = value;
  }
  public resetPreferredntpserver() {
    this._preferredntpserver = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferredntpserverInput() {
    return this._preferredntpserver;
  }

  // serverip - computed: false, optional: true, required: false
  private _serverip?: string; 
  public get serverip() {
    return this.getStringAttribute('serverip');
  }
  public set serverip(value: string) {
    this._serverip = value;
  }
  public resetServerip() {
    this._serverip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serveripInput() {
    return this._serverip;
  }

  // servername - computed: false, optional: true, required: false
  private _servername?: string; 
  public get servername() {
    return this.getStringAttribute('servername');
  }
  public set servername(value: string) {
    this._servername = value;
  }
  public resetServername() {
    this._servername = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get servernameInput() {
    return this._servername;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      autokey: cdktf.booleanToTerraform(this._autokey),
      id: cdktf.stringToTerraform(this._id),
      key: cdktf.numberToTerraform(this._key),
      maxpoll: cdktf.numberToTerraform(this._maxpoll),
      minpoll: cdktf.numberToTerraform(this._minpoll),
      preferredntpserver: cdktf.stringToTerraform(this._preferredntpserver),
      serverip: cdktf.stringToTerraform(this._serverip),
      servername: cdktf.stringToTerraform(this._servername),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      autokey: {
        value: cdktf.booleanToHclTerraform(this._autokey),
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
      key: {
        value: cdktf.numberToHclTerraform(this._key),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      maxpoll: {
        value: cdktf.numberToHclTerraform(this._maxpoll),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      minpoll: {
        value: cdktf.numberToHclTerraform(this._minpoll),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      preferredntpserver: {
        value: cdktf.stringToHclTerraform(this._preferredntpserver),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      serverip: {
        value: cdktf.stringToHclTerraform(this._serverip),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      servername: {
        value: cdktf.stringToHclTerraform(this._servername),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
