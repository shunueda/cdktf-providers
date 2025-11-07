// https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/firewall_ipv6ehfilter
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FirewallIpv6EhfilterConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/firewall_ipv6ehfilter#auth FirewallIpv6Ehfilter#auth}
  */
  readonly auth?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/firewall_ipv6ehfilter#dest_opt FirewallIpv6Ehfilter#dest_opt}
  */
  readonly destOpt?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/firewall_ipv6ehfilter#device_name FirewallIpv6Ehfilter#device_name}
  */
  readonly deviceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/firewall_ipv6ehfilter#fragment FirewallIpv6Ehfilter#fragment}
  */
  readonly fragment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/firewall_ipv6ehfilter#hdopt_type FirewallIpv6Ehfilter#hdopt_type}
  */
  readonly hdoptType?: number[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/firewall_ipv6ehfilter#hop_opt FirewallIpv6Ehfilter#hop_opt}
  */
  readonly hopOpt?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/firewall_ipv6ehfilter#id FirewallIpv6Ehfilter#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/firewall_ipv6ehfilter#no_next FirewallIpv6Ehfilter#no_next}
  */
  readonly noNext?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/firewall_ipv6ehfilter#routing FirewallIpv6Ehfilter#routing}
  */
  readonly routing?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/firewall_ipv6ehfilter#routing_type FirewallIpv6Ehfilter#routing_type}
  */
  readonly routingType?: number[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/firewall_ipv6ehfilter fmgdevice_firewall_ipv6ehfilter}
*/
export class FirewallIpv6Ehfilter extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fmgdevice_firewall_ipv6ehfilter";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a FirewallIpv6Ehfilter resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the FirewallIpv6Ehfilter to import
  * @param importFromId The id of the existing FirewallIpv6Ehfilter that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/firewall_ipv6ehfilter#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the FirewallIpv6Ehfilter to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fmgdevice_firewall_ipv6ehfilter", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/firewall_ipv6ehfilter fmgdevice_firewall_ipv6ehfilter} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FirewallIpv6EhfilterConfig = {}
  */
  public constructor(scope: Construct, id: string, config: FirewallIpv6EhfilterConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fmgdevice_firewall_ipv6ehfilter',
      terraformGeneratorMetadata: {
        providerName: 'fmgdevice',
        providerVersion: '1.2.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._auth = config.auth;
    this._destOpt = config.destOpt;
    this._deviceName = config.deviceName;
    this._fragment = config.fragment;
    this._hdoptType = config.hdoptType;
    this._hopOpt = config.hopOpt;
    this._id = config.id;
    this._noNext = config.noNext;
    this._routing = config.routing;
    this._routingType = config.routingType;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auth - computed: false, optional: true, required: false
  private _auth?: string; 
  public get auth() {
    return this.getStringAttribute('auth');
  }
  public set auth(value: string) {
    this._auth = value;
  }
  public resetAuth() {
    this._auth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authInput() {
    return this._auth;
  }

  // dest_opt - computed: true, optional: true, required: false
  private _destOpt?: string; 
  public get destOpt() {
    return this.getStringAttribute('dest_opt');
  }
  public set destOpt(value: string) {
    this._destOpt = value;
  }
  public resetDestOpt() {
    this._destOpt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destOptInput() {
    return this._destOpt;
  }

  // device_name - computed: true, optional: true, required: false
  private _deviceName?: string; 
  public get deviceName() {
    return this.getStringAttribute('device_name');
  }
  public set deviceName(value: string) {
    this._deviceName = value;
  }
  public resetDeviceName() {
    this._deviceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceNameInput() {
    return this._deviceName;
  }

  // fragment - computed: true, optional: true, required: false
  private _fragment?: string; 
  public get fragment() {
    return this.getStringAttribute('fragment');
  }
  public set fragment(value: string) {
    this._fragment = value;
  }
  public resetFragment() {
    this._fragment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fragmentInput() {
    return this._fragment;
  }

  // hdopt_type - computed: true, optional: true, required: false
  private _hdoptType?: number[]; 
  public get hdoptType() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('hdopt_type')));
  }
  public set hdoptType(value: number[]) {
    this._hdoptType = value;
  }
  public resetHdoptType() {
    this._hdoptType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hdoptTypeInput() {
    return this._hdoptType;
  }

  // hop_opt - computed: true, optional: true, required: false
  private _hopOpt?: string; 
  public get hopOpt() {
    return this.getStringAttribute('hop_opt');
  }
  public set hopOpt(value: string) {
    this._hopOpt = value;
  }
  public resetHopOpt() {
    this._hopOpt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hopOptInput() {
    return this._hopOpt;
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

  // no_next - computed: true, optional: true, required: false
  private _noNext?: string; 
  public get noNext() {
    return this.getStringAttribute('no_next');
  }
  public set noNext(value: string) {
    this._noNext = value;
  }
  public resetNoNext() {
    this._noNext = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noNextInput() {
    return this._noNext;
  }

  // routing - computed: true, optional: true, required: false
  private _routing?: string; 
  public get routing() {
    return this.getStringAttribute('routing');
  }
  public set routing(value: string) {
    this._routing = value;
  }
  public resetRouting() {
    this._routing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routingInput() {
    return this._routing;
  }

  // routing_type - computed: true, optional: true, required: false
  private _routingType?: number[]; 
  public get routingType() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('routing_type')));
  }
  public set routingType(value: number[]) {
    this._routingType = value;
  }
  public resetRoutingType() {
    this._routingType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routingTypeInput() {
    return this._routingType;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      auth: cdktf.stringToTerraform(this._auth),
      dest_opt: cdktf.stringToTerraform(this._destOpt),
      device_name: cdktf.stringToTerraform(this._deviceName),
      fragment: cdktf.stringToTerraform(this._fragment),
      hdopt_type: cdktf.listMapper(cdktf.numberToTerraform, false)(this._hdoptType),
      hop_opt: cdktf.stringToTerraform(this._hopOpt),
      id: cdktf.stringToTerraform(this._id),
      no_next: cdktf.stringToTerraform(this._noNext),
      routing: cdktf.stringToTerraform(this._routing),
      routing_type: cdktf.listMapper(cdktf.numberToTerraform, false)(this._routingType),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      auth: {
        value: cdktf.stringToHclTerraform(this._auth),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dest_opt: {
        value: cdktf.stringToHclTerraform(this._destOpt),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      device_name: {
        value: cdktf.stringToHclTerraform(this._deviceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fragment: {
        value: cdktf.stringToHclTerraform(this._fragment),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hdopt_type: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._hdoptType),
        isBlock: false,
        type: "set",
        storageClassType: "numberList",
      },
      hop_opt: {
        value: cdktf.stringToHclTerraform(this._hopOpt),
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
      no_next: {
        value: cdktf.stringToHclTerraform(this._noNext),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      routing: {
        value: cdktf.stringToHclTerraform(this._routing),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      routing_type: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._routingType),
        isBlock: false,
        type: "set",
        storageClassType: "numberList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
