// https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_iptranslation
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FirewallIptranslationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_iptranslation#endip FirewallIptranslation#endip}
  */
  readonly endip: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_iptranslation#id FirewallIptranslation#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_iptranslation#map_startip FirewallIptranslation#map_startip}
  */
  readonly mapStartip: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_iptranslation#startip FirewallIptranslation#startip}
  */
  readonly startip: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_iptranslation#transid FirewallIptranslation#transid}
  */
  readonly transid?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_iptranslation#type FirewallIptranslation#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_iptranslation#vdomparam FirewallIptranslation#vdomparam}
  */
  readonly vdomparam?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_iptranslation fortios_firewall_iptranslation}
*/
export class FirewallIptranslation extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortios_firewall_iptranslation";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a FirewallIptranslation resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the FirewallIptranslation to import
  * @param importFromId The id of the existing FirewallIptranslation that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_iptranslation#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the FirewallIptranslation to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortios_firewall_iptranslation", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_iptranslation fortios_firewall_iptranslation} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FirewallIptranslationConfig
  */
  public constructor(scope: Construct, id: string, config: FirewallIptranslationConfig) {
    super(scope, id, {
      terraformResourceType: 'fortios_firewall_iptranslation',
      terraformGeneratorMetadata: {
        providerName: 'fortios',
        providerVersion: '1.23.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._endip = config.endip;
    this._id = config.id;
    this._mapStartip = config.mapStartip;
    this._startip = config.startip;
    this._transid = config.transid;
    this._type = config.type;
    this._vdomparam = config.vdomparam;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // endip - computed: false, optional: false, required: true
  private _endip?: string; 
  public get endip() {
    return this.getStringAttribute('endip');
  }
  public set endip(value: string) {
    this._endip = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endipInput() {
    return this._endip;
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

  // map_startip - computed: false, optional: false, required: true
  private _mapStartip?: string; 
  public get mapStartip() {
    return this.getStringAttribute('map_startip');
  }
  public set mapStartip(value: string) {
    this._mapStartip = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mapStartipInput() {
    return this._mapStartip;
  }

  // startip - computed: false, optional: false, required: true
  private _startip?: string; 
  public get startip() {
    return this.getStringAttribute('startip');
  }
  public set startip(value: string) {
    this._startip = value;
  }
  // Temporarily expose input value. Use with caution.
  public get startipInput() {
    return this._startip;
  }

  // transid - computed: false, optional: true, required: false
  private _transid?: number; 
  public get transid() {
    return this.getNumberAttribute('transid');
  }
  public set transid(value: number) {
    this._transid = value;
  }
  public resetTransid() {
    this._transid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transidInput() {
    return this._transid;
  }

  // type - computed: true, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // vdomparam - computed: true, optional: true, required: false
  private _vdomparam?: string; 
  public get vdomparam() {
    return this.getStringAttribute('vdomparam');
  }
  public set vdomparam(value: string) {
    this._vdomparam = value;
  }
  public resetVdomparam() {
    this._vdomparam = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vdomparamInput() {
    return this._vdomparam;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      endip: cdktf.stringToTerraform(this._endip),
      id: cdktf.stringToTerraform(this._id),
      map_startip: cdktf.stringToTerraform(this._mapStartip),
      startip: cdktf.stringToTerraform(this._startip),
      transid: cdktf.numberToTerraform(this._transid),
      type: cdktf.stringToTerraform(this._type),
      vdomparam: cdktf.stringToTerraform(this._vdomparam),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      endip: {
        value: cdktf.stringToHclTerraform(this._endip),
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
      map_startip: {
        value: cdktf.stringToHclTerraform(this._mapStartip),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      startip: {
        value: cdktf.stringToHclTerraform(this._startip),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      transid: {
        value: cdktf.numberToHclTerraform(this._transid),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vdomparam: {
        value: cdktf.stringToHclTerraform(this._vdomparam),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
