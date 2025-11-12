// https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/gslbservicegroup_lbmonitor_binding
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GslbservicegroupLbmonitorBindingConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/gslbservicegroup_lbmonitor_binding#hashid GslbservicegroupLbmonitorBinding#hashid}
  */
  readonly hashid?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/gslbservicegroup_lbmonitor_binding#id GslbservicegroupLbmonitorBinding#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/gslbservicegroup_lbmonitor_binding#monitor_name GslbservicegroupLbmonitorBinding#monitor_name}
  */
  readonly monitorName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/gslbservicegroup_lbmonitor_binding#monstate GslbservicegroupLbmonitorBinding#monstate}
  */
  readonly monstate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/gslbservicegroup_lbmonitor_binding#passive GslbservicegroupLbmonitorBinding#passive}
  */
  readonly passive?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/gslbservicegroup_lbmonitor_binding#port GslbservicegroupLbmonitorBinding#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/gslbservicegroup_lbmonitor_binding#publicip GslbservicegroupLbmonitorBinding#publicip}
  */
  readonly publicip?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/gslbservicegroup_lbmonitor_binding#publicport GslbservicegroupLbmonitorBinding#publicport}
  */
  readonly publicport?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/gslbservicegroup_lbmonitor_binding#servicegroupname GslbservicegroupLbmonitorBinding#servicegroupname}
  */
  readonly servicegroupname: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/gslbservicegroup_lbmonitor_binding#siteprefix GslbservicegroupLbmonitorBinding#siteprefix}
  */
  readonly siteprefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/gslbservicegroup_lbmonitor_binding#state GslbservicegroupLbmonitorBinding#state}
  */
  readonly state?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/gslbservicegroup_lbmonitor_binding#weight GslbservicegroupLbmonitorBinding#weight}
  */
  readonly weight?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/gslbservicegroup_lbmonitor_binding citrixadc_gslbservicegroup_lbmonitor_binding}
*/
export class GslbservicegroupLbmonitorBinding extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrixadc_gslbservicegroup_lbmonitor_binding";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GslbservicegroupLbmonitorBinding resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GslbservicegroupLbmonitorBinding to import
  * @param importFromId The id of the existing GslbservicegroupLbmonitorBinding that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/gslbservicegroup_lbmonitor_binding#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GslbservicegroupLbmonitorBinding to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrixadc_gslbservicegroup_lbmonitor_binding", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/gslbservicegroup_lbmonitor_binding citrixadc_gslbservicegroup_lbmonitor_binding} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GslbservicegroupLbmonitorBindingConfig
  */
  public constructor(scope: Construct, id: string, config: GslbservicegroupLbmonitorBindingConfig) {
    super(scope, id, {
      terraformResourceType: 'citrixadc_gslbservicegroup_lbmonitor_binding',
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
    this._hashid = config.hashid;
    this._id = config.id;
    this._monitorName = config.monitorName;
    this._monstate = config.monstate;
    this._passive = config.passive;
    this._port = config.port;
    this._publicip = config.publicip;
    this._publicport = config.publicport;
    this._servicegroupname = config.servicegroupname;
    this._siteprefix = config.siteprefix;
    this._state = config.state;
    this._weight = config.weight;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // hashid - computed: true, optional: true, required: false
  private _hashid?: number; 
  public get hashid() {
    return this.getNumberAttribute('hashid');
  }
  public set hashid(value: number) {
    this._hashid = value;
  }
  public resetHashid() {
    this._hashid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hashidInput() {
    return this._hashid;
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

  // monitor_name - computed: false, optional: false, required: true
  private _monitorName?: string; 
  public get monitorName() {
    return this.getStringAttribute('monitor_name');
  }
  public set monitorName(value: string) {
    this._monitorName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get monitorNameInput() {
    return this._monitorName;
  }

  // monstate - computed: true, optional: true, required: false
  private _monstate?: string; 
  public get monstate() {
    return this.getStringAttribute('monstate');
  }
  public set monstate(value: string) {
    this._monstate = value;
  }
  public resetMonstate() {
    this._monstate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monstateInput() {
    return this._monstate;
  }

  // passive - computed: true, optional: true, required: false
  private _passive?: boolean | cdktf.IResolvable; 
  public get passive() {
    return this.getBooleanAttribute('passive');
  }
  public set passive(value: boolean | cdktf.IResolvable) {
    this._passive = value;
  }
  public resetPassive() {
    this._passive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passiveInput() {
    return this._passive;
  }

  // port - computed: true, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // publicip - computed: true, optional: true, required: false
  private _publicip?: string; 
  public get publicip() {
    return this.getStringAttribute('publicip');
  }
  public set publicip(value: string) {
    this._publicip = value;
  }
  public resetPublicip() {
    this._publicip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicipInput() {
    return this._publicip;
  }

  // publicport - computed: true, optional: true, required: false
  private _publicport?: number; 
  public get publicport() {
    return this.getNumberAttribute('publicport');
  }
  public set publicport(value: number) {
    this._publicport = value;
  }
  public resetPublicport() {
    this._publicport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicportInput() {
    return this._publicport;
  }

  // servicegroupname - computed: false, optional: false, required: true
  private _servicegroupname?: string; 
  public get servicegroupname() {
    return this.getStringAttribute('servicegroupname');
  }
  public set servicegroupname(value: string) {
    this._servicegroupname = value;
  }
  // Temporarily expose input value. Use with caution.
  public get servicegroupnameInput() {
    return this._servicegroupname;
  }

  // siteprefix - computed: true, optional: true, required: false
  private _siteprefix?: string; 
  public get siteprefix() {
    return this.getStringAttribute('siteprefix');
  }
  public set siteprefix(value: string) {
    this._siteprefix = value;
  }
  public resetSiteprefix() {
    this._siteprefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get siteprefixInput() {
    return this._siteprefix;
  }

  // state - computed: true, optional: true, required: false
  private _state?: string; 
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string) {
    this._state = value;
  }
  public resetState() {
    this._state = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
  }

  // weight - computed: true, optional: true, required: false
  private _weight?: number; 
  public get weight() {
    return this.getNumberAttribute('weight');
  }
  public set weight(value: number) {
    this._weight = value;
  }
  public resetWeight() {
    this._weight = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weightInput() {
    return this._weight;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      hashid: cdktf.numberToTerraform(this._hashid),
      id: cdktf.stringToTerraform(this._id),
      monitor_name: cdktf.stringToTerraform(this._monitorName),
      monstate: cdktf.stringToTerraform(this._monstate),
      passive: cdktf.booleanToTerraform(this._passive),
      port: cdktf.numberToTerraform(this._port),
      publicip: cdktf.stringToTerraform(this._publicip),
      publicport: cdktf.numberToTerraform(this._publicport),
      servicegroupname: cdktf.stringToTerraform(this._servicegroupname),
      siteprefix: cdktf.stringToTerraform(this._siteprefix),
      state: cdktf.stringToTerraform(this._state),
      weight: cdktf.numberToTerraform(this._weight),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      hashid: {
        value: cdktf.numberToHclTerraform(this._hashid),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      monitor_name: {
        value: cdktf.stringToHclTerraform(this._monitorName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      monstate: {
        value: cdktf.stringToHclTerraform(this._monstate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      passive: {
        value: cdktf.booleanToHclTerraform(this._passive),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      port: {
        value: cdktf.numberToHclTerraform(this._port),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      publicip: {
        value: cdktf.stringToHclTerraform(this._publicip),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      publicport: {
        value: cdktf.numberToHclTerraform(this._publicport),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      servicegroupname: {
        value: cdktf.stringToHclTerraform(this._servicegroupname),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      siteprefix: {
        value: cdktf.stringToHclTerraform(this._siteprefix),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      state: {
        value: cdktf.stringToHclTerraform(this._state),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      weight: {
        value: cdktf.numberToHclTerraform(this._weight),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
