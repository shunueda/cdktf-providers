// https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_vdom
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SystemVdomConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_vdom#concurrentsession SystemVdom#concurrentsession}
  */
  readonly concurrentsession?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_vdom#ep SystemVdom#ep}
  */
  readonly ep?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_vdom#hc SystemVdom#hc}
  */
  readonly hc?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_vdom#id SystemVdom#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_vdom#inbound SystemVdom#inbound}
  */
  readonly inbound?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_vdom#l4cps SystemVdom#l4cps}
  */
  readonly l4Cps?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_vdom#l7cps SystemVdom#l7cps}
  */
  readonly l7Cps?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_vdom#l7rps SystemVdom#l7rps}
  */
  readonly l7Rps?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_vdom#lu SystemVdom#lu}
  */
  readonly lu?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_vdom#mkey SystemVdom#mkey}
  */
  readonly mkey: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_vdom#outbound SystemVdom#outbound}
  */
  readonly outbound?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_vdom#rs SystemVdom#rs}
  */
  readonly rs?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_vdom#sp SystemVdom#sp}
  */
  readonly sp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_vdom#sslcps SystemVdom#sslcps}
  */
  readonly sslcps?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_vdom#sslthroughput SystemVdom#sslthroughput}
  */
  readonly sslthroughput?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_vdom#status SystemVdom#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_vdom#ug SystemVdom#ug}
  */
  readonly ug?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_vdom#vdom SystemVdom#vdom}
  */
  readonly vdom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_vdom#vs SystemVdom#vs}
  */
  readonly vs?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_vdom fortiadc_system_vdom}
*/
export class SystemVdom extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortiadc_system_vdom";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SystemVdom resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SystemVdom to import
  * @param importFromId The id of the existing SystemVdom that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_vdom#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SystemVdom to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortiadc_system_vdom", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_vdom fortiadc_system_vdom} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SystemVdomConfig
  */
  public constructor(scope: Construct, id: string, config: SystemVdomConfig) {
    super(scope, id, {
      terraformResourceType: 'fortiadc_system_vdom',
      terraformGeneratorMetadata: {
        providerName: 'fortiadc',
        providerVersion: '1.3.1',
        providerVersionConstraint: '1.3.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._concurrentsession = config.concurrentsession;
    this._ep = config.ep;
    this._hc = config.hc;
    this._id = config.id;
    this._inbound = config.inbound;
    this._l4Cps = config.l4Cps;
    this._l7Cps = config.l7Cps;
    this._l7Rps = config.l7Rps;
    this._lu = config.lu;
    this._mkey = config.mkey;
    this._outbound = config.outbound;
    this._rs = config.rs;
    this._sp = config.sp;
    this._sslcps = config.sslcps;
    this._sslthroughput = config.sslthroughput;
    this._status = config.status;
    this._ug = config.ug;
    this._vdom = config.vdom;
    this._vs = config.vs;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // concurrentsession - computed: true, optional: true, required: false
  private _concurrentsession?: string; 
  public get concurrentsession() {
    return this.getStringAttribute('concurrentsession');
  }
  public set concurrentsession(value: string) {
    this._concurrentsession = value;
  }
  public resetConcurrentsession() {
    this._concurrentsession = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get concurrentsessionInput() {
    return this._concurrentsession;
  }

  // ep - computed: true, optional: true, required: false
  private _ep?: string; 
  public get ep() {
    return this.getStringAttribute('ep');
  }
  public set ep(value: string) {
    this._ep = value;
  }
  public resetEp() {
    this._ep = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get epInput() {
    return this._ep;
  }

  // hc - computed: true, optional: true, required: false
  private _hc?: string; 
  public get hc() {
    return this.getStringAttribute('hc');
  }
  public set hc(value: string) {
    this._hc = value;
  }
  public resetHc() {
    this._hc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hcInput() {
    return this._hc;
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

  // inbound - computed: true, optional: true, required: false
  private _inbound?: string; 
  public get inbound() {
    return this.getStringAttribute('inbound');
  }
  public set inbound(value: string) {
    this._inbound = value;
  }
  public resetInbound() {
    this._inbound = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inboundInput() {
    return this._inbound;
  }

  // l4cps - computed: true, optional: true, required: false
  private _l4Cps?: string; 
  public get l4Cps() {
    return this.getStringAttribute('l4cps');
  }
  public set l4Cps(value: string) {
    this._l4Cps = value;
  }
  public resetL4Cps() {
    this._l4Cps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l4CpsInput() {
    return this._l4Cps;
  }

  // l7cps - computed: true, optional: true, required: false
  private _l7Cps?: string; 
  public get l7Cps() {
    return this.getStringAttribute('l7cps');
  }
  public set l7Cps(value: string) {
    this._l7Cps = value;
  }
  public resetL7Cps() {
    this._l7Cps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l7CpsInput() {
    return this._l7Cps;
  }

  // l7rps - computed: true, optional: true, required: false
  private _l7Rps?: string; 
  public get l7Rps() {
    return this.getStringAttribute('l7rps');
  }
  public set l7Rps(value: string) {
    this._l7Rps = value;
  }
  public resetL7Rps() {
    this._l7Rps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l7RpsInput() {
    return this._l7Rps;
  }

  // lu - computed: true, optional: true, required: false
  private _lu?: string; 
  public get lu() {
    return this.getStringAttribute('lu');
  }
  public set lu(value: string) {
    this._lu = value;
  }
  public resetLu() {
    this._lu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get luInput() {
    return this._lu;
  }

  // mkey - computed: false, optional: false, required: true
  private _mkey?: string; 
  public get mkey() {
    return this.getStringAttribute('mkey');
  }
  public set mkey(value: string) {
    this._mkey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mkeyInput() {
    return this._mkey;
  }

  // outbound - computed: true, optional: true, required: false
  private _outbound?: string; 
  public get outbound() {
    return this.getStringAttribute('outbound');
  }
  public set outbound(value: string) {
    this._outbound = value;
  }
  public resetOutbound() {
    this._outbound = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outboundInput() {
    return this._outbound;
  }

  // rs - computed: true, optional: true, required: false
  private _rs?: string; 
  public get rs() {
    return this.getStringAttribute('rs');
  }
  public set rs(value: string) {
    this._rs = value;
  }
  public resetRs() {
    this._rs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rsInput() {
    return this._rs;
  }

  // sp - computed: true, optional: true, required: false
  private _sp?: string; 
  public get sp() {
    return this.getStringAttribute('sp');
  }
  public set sp(value: string) {
    this._sp = value;
  }
  public resetSp() {
    this._sp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spInput() {
    return this._sp;
  }

  // sslcps - computed: true, optional: true, required: false
  private _sslcps?: string; 
  public get sslcps() {
    return this.getStringAttribute('sslcps');
  }
  public set sslcps(value: string) {
    this._sslcps = value;
  }
  public resetSslcps() {
    this._sslcps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslcpsInput() {
    return this._sslcps;
  }

  // sslthroughput - computed: true, optional: true, required: false
  private _sslthroughput?: string; 
  public get sslthroughput() {
    return this.getStringAttribute('sslthroughput');
  }
  public set sslthroughput(value: string) {
    this._sslthroughput = value;
  }
  public resetSslthroughput() {
    this._sslthroughput = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslthroughputInput() {
    return this._sslthroughput;
  }

  // status - computed: true, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // ug - computed: true, optional: true, required: false
  private _ug?: string; 
  public get ug() {
    return this.getStringAttribute('ug');
  }
  public set ug(value: string) {
    this._ug = value;
  }
  public resetUg() {
    this._ug = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ugInput() {
    return this._ug;
  }

  // vdom - computed: false, optional: true, required: false
  private _vdom?: string; 
  public get vdom() {
    return this.getStringAttribute('vdom');
  }
  public set vdom(value: string) {
    this._vdom = value;
  }
  public resetVdom() {
    this._vdom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vdomInput() {
    return this._vdom;
  }

  // vs - computed: true, optional: true, required: false
  private _vs?: string; 
  public get vs() {
    return this.getStringAttribute('vs');
  }
  public set vs(value: string) {
    this._vs = value;
  }
  public resetVs() {
    this._vs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vsInput() {
    return this._vs;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      concurrentsession: cdktf.stringToTerraform(this._concurrentsession),
      ep: cdktf.stringToTerraform(this._ep),
      hc: cdktf.stringToTerraform(this._hc),
      id: cdktf.stringToTerraform(this._id),
      inbound: cdktf.stringToTerraform(this._inbound),
      l4cps: cdktf.stringToTerraform(this._l4Cps),
      l7cps: cdktf.stringToTerraform(this._l7Cps),
      l7rps: cdktf.stringToTerraform(this._l7Rps),
      lu: cdktf.stringToTerraform(this._lu),
      mkey: cdktf.stringToTerraform(this._mkey),
      outbound: cdktf.stringToTerraform(this._outbound),
      rs: cdktf.stringToTerraform(this._rs),
      sp: cdktf.stringToTerraform(this._sp),
      sslcps: cdktf.stringToTerraform(this._sslcps),
      sslthroughput: cdktf.stringToTerraform(this._sslthroughput),
      status: cdktf.stringToTerraform(this._status),
      ug: cdktf.stringToTerraform(this._ug),
      vdom: cdktf.stringToTerraform(this._vdom),
      vs: cdktf.stringToTerraform(this._vs),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      concurrentsession: {
        value: cdktf.stringToHclTerraform(this._concurrentsession),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ep: {
        value: cdktf.stringToHclTerraform(this._ep),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hc: {
        value: cdktf.stringToHclTerraform(this._hc),
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
      inbound: {
        value: cdktf.stringToHclTerraform(this._inbound),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      l4cps: {
        value: cdktf.stringToHclTerraform(this._l4Cps),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      l7cps: {
        value: cdktf.stringToHclTerraform(this._l7Cps),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      l7rps: {
        value: cdktf.stringToHclTerraform(this._l7Rps),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      lu: {
        value: cdktf.stringToHclTerraform(this._lu),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mkey: {
        value: cdktf.stringToHclTerraform(this._mkey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      outbound: {
        value: cdktf.stringToHclTerraform(this._outbound),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rs: {
        value: cdktf.stringToHclTerraform(this._rs),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sp: {
        value: cdktf.stringToHclTerraform(this._sp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sslcps: {
        value: cdktf.stringToHclTerraform(this._sslcps),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sslthroughput: {
        value: cdktf.stringToHclTerraform(this._sslthroughput),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      status: {
        value: cdktf.stringToHclTerraform(this._status),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ug: {
        value: cdktf.stringToHclTerraform(this._ug),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vdom: {
        value: cdktf.stringToHclTerraform(this._vdom),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vs: {
        value: cdktf.stringToHclTerraform(this._vs),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
