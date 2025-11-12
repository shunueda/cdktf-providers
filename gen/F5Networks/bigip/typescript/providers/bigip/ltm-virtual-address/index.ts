// https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_virtual_address
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LtmVirtualAddressConfig extends cdktf.TerraformMetaArguments {
  /**
  * Enabled dynamic routing of the address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_virtual_address#advertize_route LtmVirtualAddress#advertize_route}
  */
  readonly advertizeRoute?: string;
  /**
  * Enable or disable ARP for the virtual address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_virtual_address#arp LtmVirtualAddress#arp}
  */
  readonly arp?: boolean | cdktf.IResolvable;
  /**
  * Automatically delete the virtual address with the virtual server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_virtual_address#auto_delete LtmVirtualAddress#auto_delete}
  */
  readonly autoDelete?: boolean | cdktf.IResolvable;
  /**
  * Max number of connections for virtual address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_virtual_address#conn_limit LtmVirtualAddress#conn_limit}
  */
  readonly connLimit?: number;
  /**
  * Enable or disable the virtual address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_virtual_address#enabled LtmVirtualAddress#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Enable/Disable ICMP response to the virtual address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_virtual_address#icmp_echo LtmVirtualAddress#icmp_echo}
  */
  readonly icmpEcho?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_virtual_address#id LtmVirtualAddress#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of the virtual address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_virtual_address#name LtmVirtualAddress#name}
  */
  readonly name: string;
  /**
  * Specify the partition and traffic group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_virtual_address#traffic_group LtmVirtualAddress#traffic_group}
  */
  readonly trafficGroup?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_virtual_address bigip_ltm_virtual_address}
*/
export class LtmVirtualAddress extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "bigip_ltm_virtual_address";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a LtmVirtualAddress resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LtmVirtualAddress to import
  * @param importFromId The id of the existing LtmVirtualAddress that should be imported. Refer to the {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_virtual_address#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LtmVirtualAddress to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "bigip_ltm_virtual_address", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_virtual_address bigip_ltm_virtual_address} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LtmVirtualAddressConfig
  */
  public constructor(scope: Construct, id: string, config: LtmVirtualAddressConfig) {
    super(scope, id, {
      terraformResourceType: 'bigip_ltm_virtual_address',
      terraformGeneratorMetadata: {
        providerName: 'bigip',
        providerVersion: '1.24.1',
        providerVersionConstraint: '1.24.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._advertizeRoute = config.advertizeRoute;
    this._arp = config.arp;
    this._autoDelete = config.autoDelete;
    this._connLimit = config.connLimit;
    this._enabled = config.enabled;
    this._icmpEcho = config.icmpEcho;
    this._id = config.id;
    this._name = config.name;
    this._trafficGroup = config.trafficGroup;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // advertize_route - computed: false, optional: true, required: false
  private _advertizeRoute?: string; 
  public get advertizeRoute() {
    return this.getStringAttribute('advertize_route');
  }
  public set advertizeRoute(value: string) {
    this._advertizeRoute = value;
  }
  public resetAdvertizeRoute() {
    this._advertizeRoute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advertizeRouteInput() {
    return this._advertizeRoute;
  }

  // arp - computed: false, optional: true, required: false
  private _arp?: boolean | cdktf.IResolvable; 
  public get arp() {
    return this.getBooleanAttribute('arp');
  }
  public set arp(value: boolean | cdktf.IResolvable) {
    this._arp = value;
  }
  public resetArp() {
    this._arp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get arpInput() {
    return this._arp;
  }

  // auto_delete - computed: false, optional: true, required: false
  private _autoDelete?: boolean | cdktf.IResolvable; 
  public get autoDelete() {
    return this.getBooleanAttribute('auto_delete');
  }
  public set autoDelete(value: boolean | cdktf.IResolvable) {
    this._autoDelete = value;
  }
  public resetAutoDelete() {
    this._autoDelete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoDeleteInput() {
    return this._autoDelete;
  }

  // conn_limit - computed: false, optional: true, required: false
  private _connLimit?: number; 
  public get connLimit() {
    return this.getNumberAttribute('conn_limit');
  }
  public set connLimit(value: number) {
    this._connLimit = value;
  }
  public resetConnLimit() {
    this._connLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connLimitInput() {
    return this._connLimit;
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // icmp_echo - computed: false, optional: true, required: false
  private _icmpEcho?: string; 
  public get icmpEcho() {
    return this.getStringAttribute('icmp_echo');
  }
  public set icmpEcho(value: string) {
    this._icmpEcho = value;
  }
  public resetIcmpEcho() {
    this._icmpEcho = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpEchoInput() {
    return this._icmpEcho;
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

  // traffic_group - computed: false, optional: true, required: false
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      advertize_route: cdktf.stringToTerraform(this._advertizeRoute),
      arp: cdktf.booleanToTerraform(this._arp),
      auto_delete: cdktf.booleanToTerraform(this._autoDelete),
      conn_limit: cdktf.numberToTerraform(this._connLimit),
      enabled: cdktf.booleanToTerraform(this._enabled),
      icmp_echo: cdktf.stringToTerraform(this._icmpEcho),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      traffic_group: cdktf.stringToTerraform(this._trafficGroup),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      advertize_route: {
        value: cdktf.stringToHclTerraform(this._advertizeRoute),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      arp: {
        value: cdktf.booleanToHclTerraform(this._arp),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      auto_delete: {
        value: cdktf.booleanToHclTerraform(this._autoDelete),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      conn_limit: {
        value: cdktf.numberToHclTerraform(this._connLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      icmp_echo: {
        value: cdktf.stringToHclTerraform(this._icmpEcho),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
