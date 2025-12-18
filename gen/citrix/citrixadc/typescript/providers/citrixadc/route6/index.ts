// https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/route6
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface Route6Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/route6#advertise Route6#advertise}
  */
  readonly advertise?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/route6#cost Route6#cost}
  */
  readonly cost?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/route6#detail Route6#detail}
  */
  readonly detail?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/route6#distance Route6#distance}
  */
  readonly distance?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/route6#gateway Route6#gateway}
  */
  readonly gateway?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/route6#id Route6#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/route6#mgmt Route6#mgmt}
  */
  readonly mgmt?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/route6#monitor Route6#monitor}
  */
  readonly monitor?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/route6#msr Route6#msr}
  */
  readonly msr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/route6#network Route6#network}
  */
  readonly network: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/route6#ownergroup Route6#ownergroup}
  */
  readonly ownergroup?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/route6#routetype Route6#routetype}
  */
  readonly routetype?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/route6#td Route6#td}
  */
  readonly td?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/route6#vlan Route6#vlan}
  */
  readonly vlan?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/route6#vxlan Route6#vxlan}
  */
  readonly vxlan?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/route6#weight Route6#weight}
  */
  readonly weight?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/route6 citrixadc_route6}
*/
export class Route6 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrixadc_route6";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Route6 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Route6 to import
  * @param importFromId The id of the existing Route6 that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/route6#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Route6 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrixadc_route6", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/route6 citrixadc_route6} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options Route6Config
  */
  public constructor(scope: Construct, id: string, config: Route6Config) {
    super(scope, id, {
      terraformResourceType: 'citrixadc_route6',
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
    this._advertise = config.advertise;
    this._cost = config.cost;
    this._detail = config.detail;
    this._distance = config.distance;
    this._gateway = config.gateway;
    this._id = config.id;
    this._mgmt = config.mgmt;
    this._monitor = config.monitor;
    this._msr = config.msr;
    this._network = config.network;
    this._ownergroup = config.ownergroup;
    this._routetype = config.routetype;
    this._td = config.td;
    this._vlan = config.vlan;
    this._vxlan = config.vxlan;
    this._weight = config.weight;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // advertise - computed: true, optional: true, required: false
  private _advertise?: string; 
  public get advertise() {
    return this.getStringAttribute('advertise');
  }
  public set advertise(value: string) {
    this._advertise = value;
  }
  public resetAdvertise() {
    this._advertise = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advertiseInput() {
    return this._advertise;
  }

  // cost - computed: true, optional: true, required: false
  private _cost?: number; 
  public get cost() {
    return this.getNumberAttribute('cost');
  }
  public set cost(value: number) {
    this._cost = value;
  }
  public resetCost() {
    this._cost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get costInput() {
    return this._cost;
  }

  // detail - computed: true, optional: true, required: false
  private _detail?: boolean | cdktf.IResolvable; 
  public get detail() {
    return this.getBooleanAttribute('detail');
  }
  public set detail(value: boolean | cdktf.IResolvable) {
    this._detail = value;
  }
  public resetDetail() {
    this._detail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get detailInput() {
    return this._detail;
  }

  // distance - computed: true, optional: true, required: false
  private _distance?: number; 
  public get distance() {
    return this.getNumberAttribute('distance');
  }
  public set distance(value: number) {
    this._distance = value;
  }
  public resetDistance() {
    this._distance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get distanceInput() {
    return this._distance;
  }

  // gateway - computed: true, optional: true, required: false
  private _gateway?: string; 
  public get gateway() {
    return this.getStringAttribute('gateway');
  }
  public set gateway(value: string) {
    this._gateway = value;
  }
  public resetGateway() {
    this._gateway = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayInput() {
    return this._gateway;
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

  // mgmt - computed: true, optional: true, required: false
  private _mgmt?: boolean | cdktf.IResolvable; 
  public get mgmt() {
    return this.getBooleanAttribute('mgmt');
  }
  public set mgmt(value: boolean | cdktf.IResolvable) {
    this._mgmt = value;
  }
  public resetMgmt() {
    this._mgmt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mgmtInput() {
    return this._mgmt;
  }

  // monitor - computed: true, optional: true, required: false
  private _monitor?: string; 
  public get monitor() {
    return this.getStringAttribute('monitor');
  }
  public set monitor(value: string) {
    this._monitor = value;
  }
  public resetMonitor() {
    this._monitor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitorInput() {
    return this._monitor;
  }

  // msr - computed: true, optional: true, required: false
  private _msr?: string; 
  public get msr() {
    return this.getStringAttribute('msr');
  }
  public set msr(value: string) {
    this._msr = value;
  }
  public resetMsr() {
    this._msr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get msrInput() {
    return this._msr;
  }

  // network - computed: false, optional: false, required: true
  private _network?: string; 
  public get network() {
    return this.getStringAttribute('network');
  }
  public set network(value: string) {
    this._network = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInput() {
    return this._network;
  }

  // ownergroup - computed: true, optional: true, required: false
  private _ownergroup?: string; 
  public get ownergroup() {
    return this.getStringAttribute('ownergroup');
  }
  public set ownergroup(value: string) {
    this._ownergroup = value;
  }
  public resetOwnergroup() {
    this._ownergroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ownergroupInput() {
    return this._ownergroup;
  }

  // routetype - computed: true, optional: true, required: false
  private _routetype?: string; 
  public get routetype() {
    return this.getStringAttribute('routetype');
  }
  public set routetype(value: string) {
    this._routetype = value;
  }
  public resetRoutetype() {
    this._routetype = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routetypeInput() {
    return this._routetype;
  }

  // td - computed: true, optional: true, required: false
  private _td?: number; 
  public get td() {
    return this.getNumberAttribute('td');
  }
  public set td(value: number) {
    this._td = value;
  }
  public resetTd() {
    this._td = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tdInput() {
    return this._td;
  }

  // vlan - computed: true, optional: true, required: false
  private _vlan?: number; 
  public get vlan() {
    return this.getNumberAttribute('vlan');
  }
  public set vlan(value: number) {
    this._vlan = value;
  }
  public resetVlan() {
    this._vlan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanInput() {
    return this._vlan;
  }

  // vxlan - computed: true, optional: true, required: false
  private _vxlan?: number; 
  public get vxlan() {
    return this.getNumberAttribute('vxlan');
  }
  public set vxlan(value: number) {
    this._vxlan = value;
  }
  public resetVxlan() {
    this._vxlan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vxlanInput() {
    return this._vxlan;
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
      advertise: cdktf.stringToTerraform(this._advertise),
      cost: cdktf.numberToTerraform(this._cost),
      detail: cdktf.booleanToTerraform(this._detail),
      distance: cdktf.numberToTerraform(this._distance),
      gateway: cdktf.stringToTerraform(this._gateway),
      id: cdktf.stringToTerraform(this._id),
      mgmt: cdktf.booleanToTerraform(this._mgmt),
      monitor: cdktf.stringToTerraform(this._monitor),
      msr: cdktf.stringToTerraform(this._msr),
      network: cdktf.stringToTerraform(this._network),
      ownergroup: cdktf.stringToTerraform(this._ownergroup),
      routetype: cdktf.stringToTerraform(this._routetype),
      td: cdktf.numberToTerraform(this._td),
      vlan: cdktf.numberToTerraform(this._vlan),
      vxlan: cdktf.numberToTerraform(this._vxlan),
      weight: cdktf.numberToTerraform(this._weight),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      advertise: {
        value: cdktf.stringToHclTerraform(this._advertise),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cost: {
        value: cdktf.numberToHclTerraform(this._cost),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      detail: {
        value: cdktf.booleanToHclTerraform(this._detail),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      distance: {
        value: cdktf.numberToHclTerraform(this._distance),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      gateway: {
        value: cdktf.stringToHclTerraform(this._gateway),
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
      mgmt: {
        value: cdktf.booleanToHclTerraform(this._mgmt),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      monitor: {
        value: cdktf.stringToHclTerraform(this._monitor),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      msr: {
        value: cdktf.stringToHclTerraform(this._msr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      network: {
        value: cdktf.stringToHclTerraform(this._network),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ownergroup: {
        value: cdktf.stringToHclTerraform(this._ownergroup),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      routetype: {
        value: cdktf.stringToHclTerraform(this._routetype),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      td: {
        value: cdktf.numberToHclTerraform(this._td),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      vlan: {
        value: cdktf.numberToHclTerraform(this._vlan),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      vxlan: {
        value: cdktf.numberToHclTerraform(this._vxlan),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
