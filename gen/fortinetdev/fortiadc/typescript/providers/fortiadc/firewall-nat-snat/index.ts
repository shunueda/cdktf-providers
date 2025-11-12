// https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/firewall_nat_snat
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FirewallNatSnatConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/firewall_nat_snat#from FirewallNatSnat#from}
  */
  readonly from?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/firewall_nat_snat#id FirewallNatSnat#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/firewall_nat_snat#mkey FirewallNatSnat#mkey}
  */
  readonly mkey: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/firewall_nat_snat#out_interface FirewallNatSnat#out_interface}
  */
  readonly outInterface?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/firewall_nat_snat#status FirewallNatSnat#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/firewall_nat_snat#to FirewallNatSnat#to}
  */
  readonly to?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/firewall_nat_snat#traffic_group FirewallNatSnat#traffic_group}
  */
  readonly trafficGroup?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/firewall_nat_snat#trans_to_ip FirewallNatSnat#trans_to_ip}
  */
  readonly transToIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/firewall_nat_snat#trans_to_ip_end FirewallNatSnat#trans_to_ip_end}
  */
  readonly transToIpEnd?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/firewall_nat_snat#trans_to_ip_start FirewallNatSnat#trans_to_ip_start}
  */
  readonly transToIpStart?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/firewall_nat_snat#trans_to_type FirewallNatSnat#trans_to_type}
  */
  readonly transToType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/firewall_nat_snat#vdom FirewallNatSnat#vdom}
  */
  readonly vdom?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/firewall_nat_snat fortiadc_firewall_nat_snat}
*/
export class FirewallNatSnat extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortiadc_firewall_nat_snat";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a FirewallNatSnat resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the FirewallNatSnat to import
  * @param importFromId The id of the existing FirewallNatSnat that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/firewall_nat_snat#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the FirewallNatSnat to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortiadc_firewall_nat_snat", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/firewall_nat_snat fortiadc_firewall_nat_snat} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FirewallNatSnatConfig
  */
  public constructor(scope: Construct, id: string, config: FirewallNatSnatConfig) {
    super(scope, id, {
      terraformResourceType: 'fortiadc_firewall_nat_snat',
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
    this._from = config.from;
    this._id = config.id;
    this._mkey = config.mkey;
    this._outInterface = config.outInterface;
    this._status = config.status;
    this._to = config.to;
    this._trafficGroup = config.trafficGroup;
    this._transToIp = config.transToIp;
    this._transToIpEnd = config.transToIpEnd;
    this._transToIpStart = config.transToIpStart;
    this._transToType = config.transToType;
    this._vdom = config.vdom;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // from - computed: true, optional: true, required: false
  private _from?: string; 
  public get from() {
    return this.getStringAttribute('from');
  }
  public set from(value: string) {
    this._from = value;
  }
  public resetFrom() {
    this._from = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fromInput() {
    return this._from;
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

  // out_interface - computed: true, optional: true, required: false
  private _outInterface?: string; 
  public get outInterface() {
    return this.getStringAttribute('out_interface');
  }
  public set outInterface(value: string) {
    this._outInterface = value;
  }
  public resetOutInterface() {
    this._outInterface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outInterfaceInput() {
    return this._outInterface;
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

  // to - computed: true, optional: true, required: false
  private _to?: string; 
  public get to() {
    return this.getStringAttribute('to');
  }
  public set to(value: string) {
    this._to = value;
  }
  public resetTo() {
    this._to = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get toInput() {
    return this._to;
  }

  // traffic_group - computed: true, optional: true, required: false
  private _trafficGroup?: string; 
  public get trafficGroup() {
    return this.getStringAttribute('traffic_group');
  }
  public set trafficGroup(value: string) {
    this._trafficGroup = value;
  }
  public resetTrafficGroup() {
    this._trafficGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trafficGroupInput() {
    return this._trafficGroup;
  }

  // trans_to_ip - computed: true, optional: true, required: false
  private _transToIp?: string; 
  public get transToIp() {
    return this.getStringAttribute('trans_to_ip');
  }
  public set transToIp(value: string) {
    this._transToIp = value;
  }
  public resetTransToIp() {
    this._transToIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transToIpInput() {
    return this._transToIp;
  }

  // trans_to_ip_end - computed: true, optional: true, required: false
  private _transToIpEnd?: string; 
  public get transToIpEnd() {
    return this.getStringAttribute('trans_to_ip_end');
  }
  public set transToIpEnd(value: string) {
    this._transToIpEnd = value;
  }
  public resetTransToIpEnd() {
    this._transToIpEnd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transToIpEndInput() {
    return this._transToIpEnd;
  }

  // trans_to_ip_start - computed: true, optional: true, required: false
  private _transToIpStart?: string; 
  public get transToIpStart() {
    return this.getStringAttribute('trans_to_ip_start');
  }
  public set transToIpStart(value: string) {
    this._transToIpStart = value;
  }
  public resetTransToIpStart() {
    this._transToIpStart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transToIpStartInput() {
    return this._transToIpStart;
  }

  // trans_to_type - computed: true, optional: true, required: false
  private _transToType?: string; 
  public get transToType() {
    return this.getStringAttribute('trans_to_type');
  }
  public set transToType(value: string) {
    this._transToType = value;
  }
  public resetTransToType() {
    this._transToType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transToTypeInput() {
    return this._transToType;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      from: cdktf.stringToTerraform(this._from),
      id: cdktf.stringToTerraform(this._id),
      mkey: cdktf.stringToTerraform(this._mkey),
      out_interface: cdktf.stringToTerraform(this._outInterface),
      status: cdktf.stringToTerraform(this._status),
      to: cdktf.stringToTerraform(this._to),
      traffic_group: cdktf.stringToTerraform(this._trafficGroup),
      trans_to_ip: cdktf.stringToTerraform(this._transToIp),
      trans_to_ip_end: cdktf.stringToTerraform(this._transToIpEnd),
      trans_to_ip_start: cdktf.stringToTerraform(this._transToIpStart),
      trans_to_type: cdktf.stringToTerraform(this._transToType),
      vdom: cdktf.stringToTerraform(this._vdom),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      from: {
        value: cdktf.stringToHclTerraform(this._from),
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
      mkey: {
        value: cdktf.stringToHclTerraform(this._mkey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      out_interface: {
        value: cdktf.stringToHclTerraform(this._outInterface),
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
      to: {
        value: cdktf.stringToHclTerraform(this._to),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      traffic_group: {
        value: cdktf.stringToHclTerraform(this._trafficGroup),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      trans_to_ip: {
        value: cdktf.stringToHclTerraform(this._transToIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      trans_to_ip_end: {
        value: cdktf.stringToHclTerraform(this._transToIpEnd),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      trans_to_ip_start: {
        value: cdktf.stringToHclTerraform(this._transToIpStart),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      trans_to_type: {
        value: cdktf.stringToHclTerraform(this._transToType),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
