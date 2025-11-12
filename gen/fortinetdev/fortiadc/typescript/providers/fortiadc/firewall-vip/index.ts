// https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/firewall_vip
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FirewallVipConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/firewall_vip#extif FirewallVip#extif}
  */
  readonly extif?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/firewall_vip#extip FirewallVip#extip}
  */
  readonly extip?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/firewall_vip#extport FirewallVip#extport}
  */
  readonly extport?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/firewall_vip#id FirewallVip#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/firewall_vip#mappedip_max FirewallVip#mappedip_max}
  */
  readonly mappedipMax?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/firewall_vip#mappedip_min FirewallVip#mappedip_min}
  */
  readonly mappedipMin?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/firewall_vip#mappedport_max FirewallVip#mappedport_max}
  */
  readonly mappedportMax?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/firewall_vip#mappedport_min FirewallVip#mappedport_min}
  */
  readonly mappedportMin?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/firewall_vip#mkey FirewallVip#mkey}
  */
  readonly mkey: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/firewall_vip#no_nat FirewallVip#no_nat}
  */
  readonly noNat?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/firewall_vip#portforward FirewallVip#portforward}
  */
  readonly portforward?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/firewall_vip#proto FirewallVip#proto}
  */
  readonly proto?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/firewall_vip#status FirewallVip#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/firewall_vip#traffic_group FirewallVip#traffic_group}
  */
  readonly trafficGroup?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/firewall_vip#vdom FirewallVip#vdom}
  */
  readonly vdom?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/firewall_vip fortiadc_firewall_vip}
*/
export class FirewallVip extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortiadc_firewall_vip";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a FirewallVip resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the FirewallVip to import
  * @param importFromId The id of the existing FirewallVip that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/firewall_vip#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the FirewallVip to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortiadc_firewall_vip", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/firewall_vip fortiadc_firewall_vip} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FirewallVipConfig
  */
  public constructor(scope: Construct, id: string, config: FirewallVipConfig) {
    super(scope, id, {
      terraformResourceType: 'fortiadc_firewall_vip',
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
    this._extif = config.extif;
    this._extip = config.extip;
    this._extport = config.extport;
    this._id = config.id;
    this._mappedipMax = config.mappedipMax;
    this._mappedipMin = config.mappedipMin;
    this._mappedportMax = config.mappedportMax;
    this._mappedportMin = config.mappedportMin;
    this._mkey = config.mkey;
    this._noNat = config.noNat;
    this._portforward = config.portforward;
    this._proto = config.proto;
    this._status = config.status;
    this._trafficGroup = config.trafficGroup;
    this._vdom = config.vdom;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // extif - computed: true, optional: true, required: false
  private _extif?: string; 
  public get extif() {
    return this.getStringAttribute('extif');
  }
  public set extif(value: string) {
    this._extif = value;
  }
  public resetExtif() {
    this._extif = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extifInput() {
    return this._extif;
  }

  // extip - computed: true, optional: true, required: false
  private _extip?: string; 
  public get extip() {
    return this.getStringAttribute('extip');
  }
  public set extip(value: string) {
    this._extip = value;
  }
  public resetExtip() {
    this._extip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extipInput() {
    return this._extip;
  }

  // extport - computed: true, optional: true, required: false
  private _extport?: string; 
  public get extport() {
    return this.getStringAttribute('extport');
  }
  public set extport(value: string) {
    this._extport = value;
  }
  public resetExtport() {
    this._extport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extportInput() {
    return this._extport;
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

  // mappedip_max - computed: true, optional: true, required: false
  private _mappedipMax?: string; 
  public get mappedipMax() {
    return this.getStringAttribute('mappedip_max');
  }
  public set mappedipMax(value: string) {
    this._mappedipMax = value;
  }
  public resetMappedipMax() {
    this._mappedipMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mappedipMaxInput() {
    return this._mappedipMax;
  }

  // mappedip_min - computed: true, optional: true, required: false
  private _mappedipMin?: string; 
  public get mappedipMin() {
    return this.getStringAttribute('mappedip_min');
  }
  public set mappedipMin(value: string) {
    this._mappedipMin = value;
  }
  public resetMappedipMin() {
    this._mappedipMin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mappedipMinInput() {
    return this._mappedipMin;
  }

  // mappedport_max - computed: true, optional: true, required: false
  private _mappedportMax?: string; 
  public get mappedportMax() {
    return this.getStringAttribute('mappedport_max');
  }
  public set mappedportMax(value: string) {
    this._mappedportMax = value;
  }
  public resetMappedportMax() {
    this._mappedportMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mappedportMaxInput() {
    return this._mappedportMax;
  }

  // mappedport_min - computed: true, optional: true, required: false
  private _mappedportMin?: string; 
  public get mappedportMin() {
    return this.getStringAttribute('mappedport_min');
  }
  public set mappedportMin(value: string) {
    this._mappedportMin = value;
  }
  public resetMappedportMin() {
    this._mappedportMin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mappedportMinInput() {
    return this._mappedportMin;
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

  // no_nat - computed: true, optional: true, required: false
  private _noNat?: string; 
  public get noNat() {
    return this.getStringAttribute('no_nat');
  }
  public set noNat(value: string) {
    this._noNat = value;
  }
  public resetNoNat() {
    this._noNat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noNatInput() {
    return this._noNat;
  }

  // portforward - computed: true, optional: true, required: false
  private _portforward?: string; 
  public get portforward() {
    return this.getStringAttribute('portforward');
  }
  public set portforward(value: string) {
    this._portforward = value;
  }
  public resetPortforward() {
    this._portforward = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portforwardInput() {
    return this._portforward;
  }

  // proto - computed: true, optional: true, required: false
  private _proto?: string; 
  public get proto() {
    return this.getStringAttribute('proto');
  }
  public set proto(value: string) {
    this._proto = value;
  }
  public resetProto() {
    this._proto = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protoInput() {
    return this._proto;
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
      extif: cdktf.stringToTerraform(this._extif),
      extip: cdktf.stringToTerraform(this._extip),
      extport: cdktf.stringToTerraform(this._extport),
      id: cdktf.stringToTerraform(this._id),
      mappedip_max: cdktf.stringToTerraform(this._mappedipMax),
      mappedip_min: cdktf.stringToTerraform(this._mappedipMin),
      mappedport_max: cdktf.stringToTerraform(this._mappedportMax),
      mappedport_min: cdktf.stringToTerraform(this._mappedportMin),
      mkey: cdktf.stringToTerraform(this._mkey),
      no_nat: cdktf.stringToTerraform(this._noNat),
      portforward: cdktf.stringToTerraform(this._portforward),
      proto: cdktf.stringToTerraform(this._proto),
      status: cdktf.stringToTerraform(this._status),
      traffic_group: cdktf.stringToTerraform(this._trafficGroup),
      vdom: cdktf.stringToTerraform(this._vdom),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      extif: {
        value: cdktf.stringToHclTerraform(this._extif),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      extip: {
        value: cdktf.stringToHclTerraform(this._extip),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      extport: {
        value: cdktf.stringToHclTerraform(this._extport),
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
      mappedip_max: {
        value: cdktf.stringToHclTerraform(this._mappedipMax),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mappedip_min: {
        value: cdktf.stringToHclTerraform(this._mappedipMin),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mappedport_max: {
        value: cdktf.stringToHclTerraform(this._mappedportMax),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mappedport_min: {
        value: cdktf.stringToHclTerraform(this._mappedportMin),
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
      no_nat: {
        value: cdktf.stringToHclTerraform(this._noNat),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      portforward: {
        value: cdktf.stringToHclTerraform(this._portforward),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      proto: {
        value: cdktf.stringToHclTerraform(this._proto),
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
      traffic_group: {
        value: cdktf.stringToHclTerraform(this._trafficGroup),
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
