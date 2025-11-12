// https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/ipsecprofile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IpsecprofileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/ipsecprofile#encalgo Ipsecprofile#encalgo}
  */
  readonly encalgo?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/ipsecprofile#hashalgo Ipsecprofile#hashalgo}
  */
  readonly hashalgo?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/ipsecprofile#id Ipsecprofile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/ipsecprofile#ikeretryinterval Ipsecprofile#ikeretryinterval}
  */
  readonly ikeretryinterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/ipsecprofile#ikeversion Ipsecprofile#ikeversion}
  */
  readonly ikeversion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/ipsecprofile#lifetime Ipsecprofile#lifetime}
  */
  readonly lifetime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/ipsecprofile#livenesscheckinterval Ipsecprofile#livenesscheckinterval}
  */
  readonly livenesscheckinterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/ipsecprofile#name Ipsecprofile#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/ipsecprofile#peerpublickey Ipsecprofile#peerpublickey}
  */
  readonly peerpublickey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/ipsecprofile#perfectforwardsecrecy Ipsecprofile#perfectforwardsecrecy}
  */
  readonly perfectforwardsecrecy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/ipsecprofile#privatekey Ipsecprofile#privatekey}
  */
  readonly privatekey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/ipsecprofile#psk Ipsecprofile#psk}
  */
  readonly psk?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/ipsecprofile#publickey Ipsecprofile#publickey}
  */
  readonly publickey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/ipsecprofile#replaywindowsize Ipsecprofile#replaywindowsize}
  */
  readonly replaywindowsize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/ipsecprofile#retransmissiontime Ipsecprofile#retransmissiontime}
  */
  readonly retransmissiontime?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/ipsecprofile citrixadc_ipsecprofile}
*/
export class Ipsecprofile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrixadc_ipsecprofile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Ipsecprofile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Ipsecprofile to import
  * @param importFromId The id of the existing Ipsecprofile that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/ipsecprofile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Ipsecprofile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrixadc_ipsecprofile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/ipsecprofile citrixadc_ipsecprofile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IpsecprofileConfig
  */
  public constructor(scope: Construct, id: string, config: IpsecprofileConfig) {
    super(scope, id, {
      terraformResourceType: 'citrixadc_ipsecprofile',
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
    this._encalgo = config.encalgo;
    this._hashalgo = config.hashalgo;
    this._id = config.id;
    this._ikeretryinterval = config.ikeretryinterval;
    this._ikeversion = config.ikeversion;
    this._lifetime = config.lifetime;
    this._livenesscheckinterval = config.livenesscheckinterval;
    this._name = config.name;
    this._peerpublickey = config.peerpublickey;
    this._perfectforwardsecrecy = config.perfectforwardsecrecy;
    this._privatekey = config.privatekey;
    this._psk = config.psk;
    this._publickey = config.publickey;
    this._replaywindowsize = config.replaywindowsize;
    this._retransmissiontime = config.retransmissiontime;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // encalgo - computed: true, optional: true, required: false
  private _encalgo?: string[]; 
  public get encalgo() {
    return this.getListAttribute('encalgo');
  }
  public set encalgo(value: string[]) {
    this._encalgo = value;
  }
  public resetEncalgo() {
    this._encalgo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encalgoInput() {
    return this._encalgo;
  }

  // hashalgo - computed: true, optional: true, required: false
  private _hashalgo?: string[]; 
  public get hashalgo() {
    return this.getListAttribute('hashalgo');
  }
  public set hashalgo(value: string[]) {
    this._hashalgo = value;
  }
  public resetHashalgo() {
    this._hashalgo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hashalgoInput() {
    return this._hashalgo;
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

  // ikeretryinterval - computed: true, optional: true, required: false
  private _ikeretryinterval?: number; 
  public get ikeretryinterval() {
    return this.getNumberAttribute('ikeretryinterval');
  }
  public set ikeretryinterval(value: number) {
    this._ikeretryinterval = value;
  }
  public resetIkeretryinterval() {
    this._ikeretryinterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ikeretryintervalInput() {
    return this._ikeretryinterval;
  }

  // ikeversion - computed: true, optional: true, required: false
  private _ikeversion?: string; 
  public get ikeversion() {
    return this.getStringAttribute('ikeversion');
  }
  public set ikeversion(value: string) {
    this._ikeversion = value;
  }
  public resetIkeversion() {
    this._ikeversion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ikeversionInput() {
    return this._ikeversion;
  }

  // lifetime - computed: true, optional: true, required: false
  private _lifetime?: number; 
  public get lifetime() {
    return this.getNumberAttribute('lifetime');
  }
  public set lifetime(value: number) {
    this._lifetime = value;
  }
  public resetLifetime() {
    this._lifetime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lifetimeInput() {
    return this._lifetime;
  }

  // livenesscheckinterval - computed: true, optional: true, required: false
  private _livenesscheckinterval?: number; 
  public get livenesscheckinterval() {
    return this.getNumberAttribute('livenesscheckinterval');
  }
  public set livenesscheckinterval(value: number) {
    this._livenesscheckinterval = value;
  }
  public resetLivenesscheckinterval() {
    this._livenesscheckinterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get livenesscheckintervalInput() {
    return this._livenesscheckinterval;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // peerpublickey - computed: true, optional: true, required: false
  private _peerpublickey?: string; 
  public get peerpublickey() {
    return this.getStringAttribute('peerpublickey');
  }
  public set peerpublickey(value: string) {
    this._peerpublickey = value;
  }
  public resetPeerpublickey() {
    this._peerpublickey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peerpublickeyInput() {
    return this._peerpublickey;
  }

  // perfectforwardsecrecy - computed: true, optional: true, required: false
  private _perfectforwardsecrecy?: string; 
  public get perfectforwardsecrecy() {
    return this.getStringAttribute('perfectforwardsecrecy');
  }
  public set perfectforwardsecrecy(value: string) {
    this._perfectforwardsecrecy = value;
  }
  public resetPerfectforwardsecrecy() {
    this._perfectforwardsecrecy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get perfectforwardsecrecyInput() {
    return this._perfectforwardsecrecy;
  }

  // privatekey - computed: true, optional: true, required: false
  private _privatekey?: string; 
  public get privatekey() {
    return this.getStringAttribute('privatekey');
  }
  public set privatekey(value: string) {
    this._privatekey = value;
  }
  public resetPrivatekey() {
    this._privatekey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privatekeyInput() {
    return this._privatekey;
  }

  // psk - computed: true, optional: true, required: false
  private _psk?: string; 
  public get psk() {
    return this.getStringAttribute('psk');
  }
  public set psk(value: string) {
    this._psk = value;
  }
  public resetPsk() {
    this._psk = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pskInput() {
    return this._psk;
  }

  // publickey - computed: true, optional: true, required: false
  private _publickey?: string; 
  public get publickey() {
    return this.getStringAttribute('publickey');
  }
  public set publickey(value: string) {
    this._publickey = value;
  }
  public resetPublickey() {
    this._publickey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publickeyInput() {
    return this._publickey;
  }

  // replaywindowsize - computed: true, optional: true, required: false
  private _replaywindowsize?: number; 
  public get replaywindowsize() {
    return this.getNumberAttribute('replaywindowsize');
  }
  public set replaywindowsize(value: number) {
    this._replaywindowsize = value;
  }
  public resetReplaywindowsize() {
    this._replaywindowsize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replaywindowsizeInput() {
    return this._replaywindowsize;
  }

  // retransmissiontime - computed: true, optional: true, required: false
  private _retransmissiontime?: number; 
  public get retransmissiontime() {
    return this.getNumberAttribute('retransmissiontime');
  }
  public set retransmissiontime(value: number) {
    this._retransmissiontime = value;
  }
  public resetRetransmissiontime() {
    this._retransmissiontime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retransmissiontimeInput() {
    return this._retransmissiontime;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      encalgo: cdktf.listMapper(cdktf.stringToTerraform, false)(this._encalgo),
      hashalgo: cdktf.listMapper(cdktf.stringToTerraform, false)(this._hashalgo),
      id: cdktf.stringToTerraform(this._id),
      ikeretryinterval: cdktf.numberToTerraform(this._ikeretryinterval),
      ikeversion: cdktf.stringToTerraform(this._ikeversion),
      lifetime: cdktf.numberToTerraform(this._lifetime),
      livenesscheckinterval: cdktf.numberToTerraform(this._livenesscheckinterval),
      name: cdktf.stringToTerraform(this._name),
      peerpublickey: cdktf.stringToTerraform(this._peerpublickey),
      perfectforwardsecrecy: cdktf.stringToTerraform(this._perfectforwardsecrecy),
      privatekey: cdktf.stringToTerraform(this._privatekey),
      psk: cdktf.stringToTerraform(this._psk),
      publickey: cdktf.stringToTerraform(this._publickey),
      replaywindowsize: cdktf.numberToTerraform(this._replaywindowsize),
      retransmissiontime: cdktf.numberToTerraform(this._retransmissiontime),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      encalgo: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._encalgo),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      hashalgo: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._hashalgo),
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
      ikeretryinterval: {
        value: cdktf.numberToHclTerraform(this._ikeretryinterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ikeversion: {
        value: cdktf.stringToHclTerraform(this._ikeversion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      lifetime: {
        value: cdktf.numberToHclTerraform(this._lifetime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      livenesscheckinterval: {
        value: cdktf.numberToHclTerraform(this._livenesscheckinterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      peerpublickey: {
        value: cdktf.stringToHclTerraform(this._peerpublickey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      perfectforwardsecrecy: {
        value: cdktf.stringToHclTerraform(this._perfectforwardsecrecy),
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
      psk: {
        value: cdktf.stringToHclTerraform(this._psk),
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
      replaywindowsize: {
        value: cdktf.numberToHclTerraform(this._replaywindowsize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      retransmissiontime: {
        value: cdktf.numberToHclTerraform(this._retransmissiontime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
