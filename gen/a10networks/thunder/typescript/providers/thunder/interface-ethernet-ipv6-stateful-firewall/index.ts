// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet_ipv6_stateful_firewall
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface InterfaceEthernetIpv6StatefulFirewallAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Access-list for traffic from the outside
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet_ipv6_stateful_firewall#access_list InterfaceEthernetIpv6StatefulFirewallA#access_list}
  */
  readonly accessList?: number;
  /**
  * Access-list Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet_ipv6_stateful_firewall#acl_name InterfaceEthernetIpv6StatefulFirewallA#acl_name}
  */
  readonly aclName?: string;
  /**
  * Class List (Class List Name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet_ipv6_stateful_firewall#class_list InterfaceEthernetIpv6StatefulFirewallA#class_list}
  */
  readonly classList?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet_ipv6_stateful_firewall#id InterfaceEthernetIpv6StatefulFirewallA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Ifnum
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet_ipv6_stateful_firewall#ifnum InterfaceEthernetIpv6StatefulFirewallA#ifnum}
  */
  readonly ifnum: string;
  /**
  * Inside (private) interface for stateful firewall
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet_ipv6_stateful_firewall#inside InterfaceEthernetIpv6StatefulFirewallA#inside}
  */
  readonly inside?: number;
  /**
  * Outside (public) interface for stateful firewall
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet_ipv6_stateful_firewall#outside InterfaceEthernetIpv6StatefulFirewallA#outside}
  */
  readonly outside?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet_ipv6_stateful_firewall#uuid InterfaceEthernetIpv6StatefulFirewallA#uuid}
  */
  readonly uuid?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet_ipv6_stateful_firewall thunder_interface_ethernet_ipv6_stateful_firewall}
*/
export class InterfaceEthernetIpv6StatefulFirewallA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_interface_ethernet_ipv6_stateful_firewall";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a InterfaceEthernetIpv6StatefulFirewallA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the InterfaceEthernetIpv6StatefulFirewallA to import
  * @param importFromId The id of the existing InterfaceEthernetIpv6StatefulFirewallA that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet_ipv6_stateful_firewall#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the InterfaceEthernetIpv6StatefulFirewallA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_interface_ethernet_ipv6_stateful_firewall", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet_ipv6_stateful_firewall thunder_interface_ethernet_ipv6_stateful_firewall} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options InterfaceEthernetIpv6StatefulFirewallAConfig
  */
  public constructor(scope: Construct, id: string, config: InterfaceEthernetIpv6StatefulFirewallAConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_interface_ethernet_ipv6_stateful_firewall',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.4.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accessList = config.accessList;
    this._aclName = config.aclName;
    this._classList = config.classList;
    this._id = config.id;
    this._ifnum = config.ifnum;
    this._inside = config.inside;
    this._outside = config.outside;
    this._uuid = config.uuid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_list - computed: false, optional: true, required: false
  private _accessList?: number; 
  public get accessList() {
    return this.getNumberAttribute('access_list');
  }
  public set accessList(value: number) {
    this._accessList = value;
  }
  public resetAccessList() {
    this._accessList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessListInput() {
    return this._accessList;
  }

  // acl_name - computed: false, optional: true, required: false
  private _aclName?: string; 
  public get aclName() {
    return this.getStringAttribute('acl_name');
  }
  public set aclName(value: string) {
    this._aclName = value;
  }
  public resetAclName() {
    this._aclName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aclNameInput() {
    return this._aclName;
  }

  // class_list - computed: false, optional: true, required: false
  private _classList?: string; 
  public get classList() {
    return this.getStringAttribute('class_list');
  }
  public set classList(value: string) {
    this._classList = value;
  }
  public resetClassList() {
    this._classList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classListInput() {
    return this._classList;
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

  // ifnum - computed: false, optional: false, required: true
  private _ifnum?: string; 
  public get ifnum() {
    return this.getStringAttribute('ifnum');
  }
  public set ifnum(value: string) {
    this._ifnum = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ifnumInput() {
    return this._ifnum;
  }

  // inside - computed: false, optional: true, required: false
  private _inside?: number; 
  public get inside() {
    return this.getNumberAttribute('inside');
  }
  public set inside(value: number) {
    this._inside = value;
  }
  public resetInside() {
    this._inside = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insideInput() {
    return this._inside;
  }

  // outside - computed: false, optional: true, required: false
  private _outside?: number; 
  public get outside() {
    return this.getNumberAttribute('outside');
  }
  public set outside(value: number) {
    this._outside = value;
  }
  public resetOutside() {
    this._outside = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outsideInput() {
    return this._outside;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      access_list: cdktf.numberToTerraform(this._accessList),
      acl_name: cdktf.stringToTerraform(this._aclName),
      class_list: cdktf.stringToTerraform(this._classList),
      id: cdktf.stringToTerraform(this._id),
      ifnum: cdktf.stringToTerraform(this._ifnum),
      inside: cdktf.numberToTerraform(this._inside),
      outside: cdktf.numberToTerraform(this._outside),
      uuid: cdktf.stringToTerraform(this._uuid),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      access_list: {
        value: cdktf.numberToHclTerraform(this._accessList),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      acl_name: {
        value: cdktf.stringToHclTerraform(this._aclName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      class_list: {
        value: cdktf.stringToHclTerraform(this._classList),
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
      ifnum: {
        value: cdktf.stringToHclTerraform(this._ifnum),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      inside: {
        value: cdktf.numberToHclTerraform(this._inside),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      outside: {
        value: cdktf.numberToHclTerraform(this._outside),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
