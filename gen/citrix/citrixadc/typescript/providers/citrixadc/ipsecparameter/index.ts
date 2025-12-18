// https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/ipsecparameter
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IpsecparameterConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/ipsecparameter#encalgo Ipsecparameter#encalgo}
  */
  readonly encalgo?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/ipsecparameter#hashalgo Ipsecparameter#hashalgo}
  */
  readonly hashalgo?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/ipsecparameter#id Ipsecparameter#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/ipsecparameter#ikeretryinterval Ipsecparameter#ikeretryinterval}
  */
  readonly ikeretryinterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/ipsecparameter#ikeversion Ipsecparameter#ikeversion}
  */
  readonly ikeversion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/ipsecparameter#lifetime Ipsecparameter#lifetime}
  */
  readonly lifetime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/ipsecparameter#livenesscheckinterval Ipsecparameter#livenesscheckinterval}
  */
  readonly livenesscheckinterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/ipsecparameter#perfectforwardsecrecy Ipsecparameter#perfectforwardsecrecy}
  */
  readonly perfectforwardsecrecy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/ipsecparameter#replaywindowsize Ipsecparameter#replaywindowsize}
  */
  readonly replaywindowsize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/ipsecparameter#retransmissiontime Ipsecparameter#retransmissiontime}
  */
  readonly retransmissiontime?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/ipsecparameter citrixadc_ipsecparameter}
*/
export class Ipsecparameter extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrixadc_ipsecparameter";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Ipsecparameter resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Ipsecparameter to import
  * @param importFromId The id of the existing Ipsecparameter that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/ipsecparameter#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Ipsecparameter to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrixadc_ipsecparameter", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/ipsecparameter citrixadc_ipsecparameter} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IpsecparameterConfig = {}
  */
  public constructor(scope: Construct, id: string, config: IpsecparameterConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'citrixadc_ipsecparameter',
      terraformGeneratorMetadata: {
        providerName: 'citrixadc',
        providerVersion: '2.1.0',
        providerVersionConstraint: '2.1.0'
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
    this._perfectforwardsecrecy = config.perfectforwardsecrecy;
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
      perfectforwardsecrecy: cdktf.stringToTerraform(this._perfectforwardsecrecy),
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
      perfectforwardsecrecy: {
        value: cdktf.stringToHclTerraform(this._perfectforwardsecrecy),
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
