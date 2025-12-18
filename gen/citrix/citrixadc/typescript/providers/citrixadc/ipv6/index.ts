// https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/ipv6
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface Ipv6Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/ipv6#dodad Ipv6#dodad}
  */
  readonly dodad?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/ipv6#id Ipv6#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/ipv6#natprefix Ipv6#natprefix}
  */
  readonly natprefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/ipv6#ndbasereachtime Ipv6#ndbasereachtime}
  */
  readonly ndbasereachtime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/ipv6#ndretransmissiontime Ipv6#ndretransmissiontime}
  */
  readonly ndretransmissiontime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/ipv6#ralearning Ipv6#ralearning}
  */
  readonly ralearning?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/ipv6#routerredirection Ipv6#routerredirection}
  */
  readonly routerredirection?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/ipv6#td Ipv6#td}
  */
  readonly td?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/ipv6#usipnatprefix Ipv6#usipnatprefix}
  */
  readonly usipnatprefix?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/ipv6 citrixadc_ipv6}
*/
export class Ipv6 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrixadc_ipv6";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Ipv6 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Ipv6 to import
  * @param importFromId The id of the existing Ipv6 that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/ipv6#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Ipv6 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrixadc_ipv6", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/ipv6 citrixadc_ipv6} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options Ipv6Config = {}
  */
  public constructor(scope: Construct, id: string, config: Ipv6Config = {}) {
    super(scope, id, {
      terraformResourceType: 'citrixadc_ipv6',
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
    this._dodad = config.dodad;
    this._id = config.id;
    this._natprefix = config.natprefix;
    this._ndbasereachtime = config.ndbasereachtime;
    this._ndretransmissiontime = config.ndretransmissiontime;
    this._ralearning = config.ralearning;
    this._routerredirection = config.routerredirection;
    this._td = config.td;
    this._usipnatprefix = config.usipnatprefix;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // dodad - computed: true, optional: true, required: false
  private _dodad?: string; 
  public get dodad() {
    return this.getStringAttribute('dodad');
  }
  public set dodad(value: string) {
    this._dodad = value;
  }
  public resetDodad() {
    this._dodad = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dodadInput() {
    return this._dodad;
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

  // natprefix - computed: true, optional: true, required: false
  private _natprefix?: string; 
  public get natprefix() {
    return this.getStringAttribute('natprefix');
  }
  public set natprefix(value: string) {
    this._natprefix = value;
  }
  public resetNatprefix() {
    this._natprefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get natprefixInput() {
    return this._natprefix;
  }

  // ndbasereachtime - computed: true, optional: true, required: false
  private _ndbasereachtime?: number; 
  public get ndbasereachtime() {
    return this.getNumberAttribute('ndbasereachtime');
  }
  public set ndbasereachtime(value: number) {
    this._ndbasereachtime = value;
  }
  public resetNdbasereachtime() {
    this._ndbasereachtime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ndbasereachtimeInput() {
    return this._ndbasereachtime;
  }

  // ndretransmissiontime - computed: true, optional: true, required: false
  private _ndretransmissiontime?: number; 
  public get ndretransmissiontime() {
    return this.getNumberAttribute('ndretransmissiontime');
  }
  public set ndretransmissiontime(value: number) {
    this._ndretransmissiontime = value;
  }
  public resetNdretransmissiontime() {
    this._ndretransmissiontime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ndretransmissiontimeInput() {
    return this._ndretransmissiontime;
  }

  // ralearning - computed: true, optional: true, required: false
  private _ralearning?: string; 
  public get ralearning() {
    return this.getStringAttribute('ralearning');
  }
  public set ralearning(value: string) {
    this._ralearning = value;
  }
  public resetRalearning() {
    this._ralearning = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ralearningInput() {
    return this._ralearning;
  }

  // routerredirection - computed: true, optional: true, required: false
  private _routerredirection?: string; 
  public get routerredirection() {
    return this.getStringAttribute('routerredirection');
  }
  public set routerredirection(value: string) {
    this._routerredirection = value;
  }
  public resetRouterredirection() {
    this._routerredirection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routerredirectionInput() {
    return this._routerredirection;
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

  // usipnatprefix - computed: true, optional: true, required: false
  private _usipnatprefix?: string; 
  public get usipnatprefix() {
    return this.getStringAttribute('usipnatprefix');
  }
  public set usipnatprefix(value: string) {
    this._usipnatprefix = value;
  }
  public resetUsipnatprefix() {
    this._usipnatprefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usipnatprefixInput() {
    return this._usipnatprefix;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      dodad: cdktf.stringToTerraform(this._dodad),
      id: cdktf.stringToTerraform(this._id),
      natprefix: cdktf.stringToTerraform(this._natprefix),
      ndbasereachtime: cdktf.numberToTerraform(this._ndbasereachtime),
      ndretransmissiontime: cdktf.numberToTerraform(this._ndretransmissiontime),
      ralearning: cdktf.stringToTerraform(this._ralearning),
      routerredirection: cdktf.stringToTerraform(this._routerredirection),
      td: cdktf.numberToTerraform(this._td),
      usipnatprefix: cdktf.stringToTerraform(this._usipnatprefix),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      dodad: {
        value: cdktf.stringToHclTerraform(this._dodad),
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
      natprefix: {
        value: cdktf.stringToHclTerraform(this._natprefix),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ndbasereachtime: {
        value: cdktf.numberToHclTerraform(this._ndbasereachtime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ndretransmissiontime: {
        value: cdktf.numberToHclTerraform(this._ndretransmissiontime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ralearning: {
        value: cdktf.stringToHclTerraform(this._ralearning),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      routerredirection: {
        value: cdktf.stringToHclTerraform(this._routerredirection),
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
      usipnatprefix: {
        value: cdktf.stringToHclTerraform(this._usipnatprefix),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
