// https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_interface_child_trust_ip_list
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SystemInterfaceChildTrustIpListConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_interface_child_trust_ip_list#id SystemInterfaceChildTrustIpList#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_interface_child_trust_ip_list#ip6_max SystemInterfaceChildTrustIpList#ip6_max}
  */
  readonly ip6Max?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_interface_child_trust_ip_list#ip6_min SystemInterfaceChildTrustIpList#ip6_min}
  */
  readonly ip6Min?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_interface_child_trust_ip_list#ip6_netmask SystemInterfaceChildTrustIpList#ip6_netmask}
  */
  readonly ip6Netmask?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_interface_child_trust_ip_list#ip_max SystemInterfaceChildTrustIpList#ip_max}
  */
  readonly ipMax?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_interface_child_trust_ip_list#ip_min SystemInterfaceChildTrustIpList#ip_min}
  */
  readonly ipMin?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_interface_child_trust_ip_list#ip_netmask SystemInterfaceChildTrustIpList#ip_netmask}
  */
  readonly ipNetmask?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_interface_child_trust_ip_list#name SystemInterfaceChildTrustIpList#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_interface_child_trust_ip_list#pkey SystemInterfaceChildTrustIpList#pkey}
  */
  readonly pkey: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_interface_child_trust_ip_list#type SystemInterfaceChildTrustIpList#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_interface_child_trust_ip_list#vdom SystemInterfaceChildTrustIpList#vdom}
  */
  readonly vdom?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_interface_child_trust_ip_list fortiadc_system_interface_child_trust_ip_list}
*/
export class SystemInterfaceChildTrustIpList extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortiadc_system_interface_child_trust_ip_list";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SystemInterfaceChildTrustIpList resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SystemInterfaceChildTrustIpList to import
  * @param importFromId The id of the existing SystemInterfaceChildTrustIpList that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_interface_child_trust_ip_list#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SystemInterfaceChildTrustIpList to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortiadc_system_interface_child_trust_ip_list", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_interface_child_trust_ip_list fortiadc_system_interface_child_trust_ip_list} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SystemInterfaceChildTrustIpListConfig
  */
  public constructor(scope: Construct, id: string, config: SystemInterfaceChildTrustIpListConfig) {
    super(scope, id, {
      terraformResourceType: 'fortiadc_system_interface_child_trust_ip_list',
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
    this._id = config.id;
    this._ip6Max = config.ip6Max;
    this._ip6Min = config.ip6Min;
    this._ip6Netmask = config.ip6Netmask;
    this._ipMax = config.ipMax;
    this._ipMin = config.ipMin;
    this._ipNetmask = config.ipNetmask;
    this._name = config.name;
    this._pkey = config.pkey;
    this._type = config.type;
    this._vdom = config.vdom;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // ip6_max - computed: true, optional: true, required: false
  private _ip6Max?: string; 
  public get ip6Max() {
    return this.getStringAttribute('ip6_max');
  }
  public set ip6Max(value: string) {
    this._ip6Max = value;
  }
  public resetIp6Max() {
    this._ip6Max = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ip6MaxInput() {
    return this._ip6Max;
  }

  // ip6_min - computed: true, optional: true, required: false
  private _ip6Min?: string; 
  public get ip6Min() {
    return this.getStringAttribute('ip6_min');
  }
  public set ip6Min(value: string) {
    this._ip6Min = value;
  }
  public resetIp6Min() {
    this._ip6Min = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ip6MinInput() {
    return this._ip6Min;
  }

  // ip6_netmask - computed: true, optional: true, required: false
  private _ip6Netmask?: string; 
  public get ip6Netmask() {
    return this.getStringAttribute('ip6_netmask');
  }
  public set ip6Netmask(value: string) {
    this._ip6Netmask = value;
  }
  public resetIp6Netmask() {
    this._ip6Netmask = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ip6NetmaskInput() {
    return this._ip6Netmask;
  }

  // ip_max - computed: true, optional: true, required: false
  private _ipMax?: string; 
  public get ipMax() {
    return this.getStringAttribute('ip_max');
  }
  public set ipMax(value: string) {
    this._ipMax = value;
  }
  public resetIpMax() {
    this._ipMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipMaxInput() {
    return this._ipMax;
  }

  // ip_min - computed: true, optional: true, required: false
  private _ipMin?: string; 
  public get ipMin() {
    return this.getStringAttribute('ip_min');
  }
  public set ipMin(value: string) {
    this._ipMin = value;
  }
  public resetIpMin() {
    this._ipMin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipMinInput() {
    return this._ipMin;
  }

  // ip_netmask - computed: true, optional: true, required: false
  private _ipNetmask?: string; 
  public get ipNetmask() {
    return this.getStringAttribute('ip_netmask');
  }
  public set ipNetmask(value: string) {
    this._ipNetmask = value;
  }
  public resetIpNetmask() {
    this._ipNetmask = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipNetmaskInput() {
    return this._ipNetmask;
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
      id: cdktf.stringToTerraform(this._id),
      ip6_max: cdktf.stringToTerraform(this._ip6Max),
      ip6_min: cdktf.stringToTerraform(this._ip6Min),
      ip6_netmask: cdktf.stringToTerraform(this._ip6Netmask),
      ip_max: cdktf.stringToTerraform(this._ipMax),
      ip_min: cdktf.stringToTerraform(this._ipMin),
      ip_netmask: cdktf.stringToTerraform(this._ipNetmask),
      name: cdktf.stringToTerraform(this._name),
      pkey: cdktf.stringToTerraform(this._pkey),
      type: cdktf.stringToTerraform(this._type),
      vdom: cdktf.stringToTerraform(this._vdom),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ip6_max: {
        value: cdktf.stringToHclTerraform(this._ip6Max),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ip6_min: {
        value: cdktf.stringToHclTerraform(this._ip6Min),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ip6_netmask: {
        value: cdktf.stringToHclTerraform(this._ip6Netmask),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ip_max: {
        value: cdktf.stringToHclTerraform(this._ipMax),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ip_min: {
        value: cdktf.stringToHclTerraform(this._ipMin),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ip_netmask: {
        value: cdktf.stringToHclTerraform(this._ipNetmask),
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
      pkey: {
        value: cdktf.stringToHclTerraform(this._pkey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
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
