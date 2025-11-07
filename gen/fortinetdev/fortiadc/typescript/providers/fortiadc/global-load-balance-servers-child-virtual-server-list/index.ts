// https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/global_load_balance_servers_child_virtual_server_list
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GlobalLoadBalanceServersChildVirtualServerListConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/global_load_balance_servers_child_virtual_server_list#address_type GlobalLoadBalanceServersChildVirtualServerList#address_type}
  */
  readonly addressType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/global_load_balance_servers_child_virtual_server_list#description GlobalLoadBalanceServersChildVirtualServerList#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/global_load_balance_servers_child_virtual_server_list#gateway GlobalLoadBalanceServersChildVirtualServerList#gateway}
  */
  readonly gateway?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/global_load_balance_servers_child_virtual_server_list#gateway_select GlobalLoadBalanceServersChildVirtualServerList#gateway_select}
  */
  readonly gatewaySelect?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/global_load_balance_servers_child_virtual_server_list#id GlobalLoadBalanceServersChildVirtualServerList#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/global_load_balance_servers_child_virtual_server_list#ip GlobalLoadBalanceServersChildVirtualServerList#ip}
  */
  readonly ip?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/global_load_balance_servers_child_virtual_server_list#ip6 GlobalLoadBalanceServersChildVirtualServerList#ip6}
  */
  readonly ip6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/global_load_balance_servers_child_virtual_server_list#mkey GlobalLoadBalanceServersChildVirtualServerList#mkey}
  */
  readonly mkey: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/global_load_balance_servers_child_virtual_server_list#pkey GlobalLoadBalanceServersChildVirtualServerList#pkey}
  */
  readonly pkey: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/global_load_balance_servers_child_virtual_server_list#vdom GlobalLoadBalanceServersChildVirtualServerList#vdom}
  */
  readonly vdom?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/global_load_balance_servers_child_virtual_server_list fortiadc_global_load_balance_servers_child_virtual_server_list}
*/
export class GlobalLoadBalanceServersChildVirtualServerList extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortiadc_global_load_balance_servers_child_virtual_server_list";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GlobalLoadBalanceServersChildVirtualServerList resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GlobalLoadBalanceServersChildVirtualServerList to import
  * @param importFromId The id of the existing GlobalLoadBalanceServersChildVirtualServerList that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/global_load_balance_servers_child_virtual_server_list#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GlobalLoadBalanceServersChildVirtualServerList to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortiadc_global_load_balance_servers_child_virtual_server_list", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/global_load_balance_servers_child_virtual_server_list fortiadc_global_load_balance_servers_child_virtual_server_list} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GlobalLoadBalanceServersChildVirtualServerListConfig
  */
  public constructor(scope: Construct, id: string, config: GlobalLoadBalanceServersChildVirtualServerListConfig) {
    super(scope, id, {
      terraformResourceType: 'fortiadc_global_load_balance_servers_child_virtual_server_list',
      terraformGeneratorMetadata: {
        providerName: 'fortiadc',
        providerVersion: '1.3.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._addressType = config.addressType;
    this._description = config.description;
    this._gateway = config.gateway;
    this._gatewaySelect = config.gatewaySelect;
    this._id = config.id;
    this._ip = config.ip;
    this._ip6 = config.ip6;
    this._mkey = config.mkey;
    this._pkey = config.pkey;
    this._vdom = config.vdom;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // address_type - computed: true, optional: true, required: false
  private _addressType?: string; 
  public get addressType() {
    return this.getStringAttribute('address_type');
  }
  public set addressType(value: string) {
    this._addressType = value;
  }
  public resetAddressType() {
    this._addressType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressTypeInput() {
    return this._addressType;
  }

  // description - computed: true, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
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

  // gateway_select - computed: true, optional: true, required: false
  private _gatewaySelect?: string; 
  public get gatewaySelect() {
    return this.getStringAttribute('gateway_select');
  }
  public set gatewaySelect(value: string) {
    this._gatewaySelect = value;
  }
  public resetGatewaySelect() {
    this._gatewaySelect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewaySelectInput() {
    return this._gatewaySelect;
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

  // ip - computed: true, optional: true, required: false
  private _ip?: string; 
  public get ip() {
    return this.getStringAttribute('ip');
  }
  public set ip(value: string) {
    this._ip = value;
  }
  public resetIp() {
    this._ip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipInput() {
    return this._ip;
  }

  // ip6 - computed: true, optional: true, required: false
  private _ip6?: string; 
  public get ip6() {
    return this.getStringAttribute('ip6');
  }
  public set ip6(value: string) {
    this._ip6 = value;
  }
  public resetIp6() {
    this._ip6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ip6Input() {
    return this._ip6;
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

  // pkey - computed: false, optional: false, required: true
  private _pkey?: string; 
  public get pkey() {
    return this.getStringAttribute('pkey');
  }
  public set pkey(value: string) {
    this._pkey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pkeyInput() {
    return this._pkey;
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
      address_type: cdktf.stringToTerraform(this._addressType),
      description: cdktf.stringToTerraform(this._description),
      gateway: cdktf.stringToTerraform(this._gateway),
      gateway_select: cdktf.stringToTerraform(this._gatewaySelect),
      id: cdktf.stringToTerraform(this._id),
      ip: cdktf.stringToTerraform(this._ip),
      ip6: cdktf.stringToTerraform(this._ip6),
      mkey: cdktf.stringToTerraform(this._mkey),
      pkey: cdktf.stringToTerraform(this._pkey),
      vdom: cdktf.stringToTerraform(this._vdom),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      address_type: {
        value: cdktf.stringToHclTerraform(this._addressType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gateway: {
        value: cdktf.stringToHclTerraform(this._gateway),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gateway_select: {
        value: cdktf.stringToHclTerraform(this._gatewaySelect),
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
      ip: {
        value: cdktf.stringToHclTerraform(this._ip),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ip6: {
        value: cdktf.stringToHclTerraform(this._ip6),
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
      pkey: {
        value: cdktf.stringToHclTerraform(this._pkey),
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
