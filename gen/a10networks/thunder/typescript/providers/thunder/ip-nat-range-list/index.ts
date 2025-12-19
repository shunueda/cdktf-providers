// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ip_nat_range_list
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IpNatRangeListConfig extends cdktf.TerraformMetaArguments {
  /**
  * Mask for this Address range
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ip_nat_range_list#global_netmaskv4 IpNatRangeList#global_netmaskv4}
  */
  readonly globalNetmaskv4?: string;
  /**
  * Global Start IPv4 Address of this list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ip_nat_range_list#global_start_ipv4_addr IpNatRangeList#global_start_ipv4_addr}
  */
  readonly globalStartIpv4Addr?: string;
  /**
  * Global Start IPv6 Address of this list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ip_nat_range_list#global_start_ipv6_addr IpNatRangeList#global_start_ipv6_addr}
  */
  readonly globalStartIpv6Addr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ip_nat_range_list#id IpNatRangeList#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Mask for this Address range
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ip_nat_range_list#local_netmaskv4 IpNatRangeList#local_netmaskv4}
  */
  readonly localNetmaskv4?: string;
  /**
  * Local Start IPv4 Address of this list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ip_nat_range_list#local_start_ipv4_addr IpNatRangeList#local_start_ipv4_addr}
  */
  readonly localStartIpv4Addr?: string;
  /**
  * Local Start IPv6 Address of this list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ip_nat_range_list#local_start_ipv6_addr IpNatRangeList#local_start_ipv6_addr}
  */
  readonly localStartIpv6Addr?: string;
  /**
  * Name for this Static List
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ip_nat_range_list#name IpNatRangeList#name}
  */
  readonly name: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ip_nat_range_list#uuid IpNatRangeList#uuid}
  */
  readonly uuid?: string;
  /**
  * Access list ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ip_nat_range_list#v4_acl_id IpNatRangeList#v4_acl_id}
  */
  readonly v4AclId?: number;
  /**
  * Access list name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ip_nat_range_list#v4_acl_name IpNatRangeList#v4_acl_name}
  */
  readonly v4AclName?: string;
  /**
  * Number of addresses to be translated in this range
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ip_nat_range_list#v4_count IpNatRangeList#v4_count}
  */
  readonly v4Count?: number;
  /**
  * VRRP-A vrid (Specify ha VRRP-A vrid)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ip_nat_range_list#v4_vrid IpNatRangeList#v4_vrid}
  */
  readonly v4Vrid?: number;
  /**
  * Access list name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ip_nat_range_list#v6_acl_name IpNatRangeList#v6_acl_name}
  */
  readonly v6AclName?: string;
  /**
  * Number of addresses to be translated in this range
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ip_nat_range_list#v6_count IpNatRangeList#v6_count}
  */
  readonly v6Count?: number;
  /**
  * VRRP-A vrid (Specify ha VRRP-A vrid)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ip_nat_range_list#v6_vrid IpNatRangeList#v6_vrid}
  */
  readonly v6Vrid?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ip_nat_range_list thunder_ip_nat_range_list}
*/
export class IpNatRangeList extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_ip_nat_range_list";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IpNatRangeList resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IpNatRangeList to import
  * @param importFromId The id of the existing IpNatRangeList that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ip_nat_range_list#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IpNatRangeList to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_ip_nat_range_list", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ip_nat_range_list thunder_ip_nat_range_list} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IpNatRangeListConfig
  */
  public constructor(scope: Construct, id: string, config: IpNatRangeListConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_ip_nat_range_list',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.5.0',
        providerVersionConstraint: '1.5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._globalNetmaskv4 = config.globalNetmaskv4;
    this._globalStartIpv4Addr = config.globalStartIpv4Addr;
    this._globalStartIpv6Addr = config.globalStartIpv6Addr;
    this._id = config.id;
    this._localNetmaskv4 = config.localNetmaskv4;
    this._localStartIpv4Addr = config.localStartIpv4Addr;
    this._localStartIpv6Addr = config.localStartIpv6Addr;
    this._name = config.name;
    this._uuid = config.uuid;
    this._v4AclId = config.v4AclId;
    this._v4AclName = config.v4AclName;
    this._v4Count = config.v4Count;
    this._v4Vrid = config.v4Vrid;
    this._v6AclName = config.v6AclName;
    this._v6Count = config.v6Count;
    this._v6Vrid = config.v6Vrid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // global_netmaskv4 - computed: false, optional: true, required: false
  private _globalNetmaskv4?: string; 
  public get globalNetmaskv4() {
    return this.getStringAttribute('global_netmaskv4');
  }
  public set globalNetmaskv4(value: string) {
    this._globalNetmaskv4 = value;
  }
  public resetGlobalNetmaskv4() {
    this._globalNetmaskv4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get globalNetmaskv4Input() {
    return this._globalNetmaskv4;
  }

  // global_start_ipv4_addr - computed: false, optional: true, required: false
  private _globalStartIpv4Addr?: string; 
  public get globalStartIpv4Addr() {
    return this.getStringAttribute('global_start_ipv4_addr');
  }
  public set globalStartIpv4Addr(value: string) {
    this._globalStartIpv4Addr = value;
  }
  public resetGlobalStartIpv4Addr() {
    this._globalStartIpv4Addr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get globalStartIpv4AddrInput() {
    return this._globalStartIpv4Addr;
  }

  // global_start_ipv6_addr - computed: false, optional: true, required: false
  private _globalStartIpv6Addr?: string; 
  public get globalStartIpv6Addr() {
    return this.getStringAttribute('global_start_ipv6_addr');
  }
  public set globalStartIpv6Addr(value: string) {
    this._globalStartIpv6Addr = value;
  }
  public resetGlobalStartIpv6Addr() {
    this._globalStartIpv6Addr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get globalStartIpv6AddrInput() {
    return this._globalStartIpv6Addr;
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

  // local_netmaskv4 - computed: false, optional: true, required: false
  private _localNetmaskv4?: string; 
  public get localNetmaskv4() {
    return this.getStringAttribute('local_netmaskv4');
  }
  public set localNetmaskv4(value: string) {
    this._localNetmaskv4 = value;
  }
  public resetLocalNetmaskv4() {
    this._localNetmaskv4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localNetmaskv4Input() {
    return this._localNetmaskv4;
  }

  // local_start_ipv4_addr - computed: false, optional: true, required: false
  private _localStartIpv4Addr?: string; 
  public get localStartIpv4Addr() {
    return this.getStringAttribute('local_start_ipv4_addr');
  }
  public set localStartIpv4Addr(value: string) {
    this._localStartIpv4Addr = value;
  }
  public resetLocalStartIpv4Addr() {
    this._localStartIpv4Addr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localStartIpv4AddrInput() {
    return this._localStartIpv4Addr;
  }

  // local_start_ipv6_addr - computed: false, optional: true, required: false
  private _localStartIpv6Addr?: string; 
  public get localStartIpv6Addr() {
    return this.getStringAttribute('local_start_ipv6_addr');
  }
  public set localStartIpv6Addr(value: string) {
    this._localStartIpv6Addr = value;
  }
  public resetLocalStartIpv6Addr() {
    this._localStartIpv6Addr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localStartIpv6AddrInput() {
    return this._localStartIpv6Addr;
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

  // v4_acl_id - computed: false, optional: true, required: false
  private _v4AclId?: number; 
  public get v4AclId() {
    return this.getNumberAttribute('v4_acl_id');
  }
  public set v4AclId(value: number) {
    this._v4AclId = value;
  }
  public resetV4AclId() {
    this._v4AclId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v4AclIdInput() {
    return this._v4AclId;
  }

  // v4_acl_name - computed: false, optional: true, required: false
  private _v4AclName?: string; 
  public get v4AclName() {
    return this.getStringAttribute('v4_acl_name');
  }
  public set v4AclName(value: string) {
    this._v4AclName = value;
  }
  public resetV4AclName() {
    this._v4AclName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v4AclNameInput() {
    return this._v4AclName;
  }

  // v4_count - computed: false, optional: true, required: false
  private _v4Count?: number; 
  public get v4Count() {
    return this.getNumberAttribute('v4_count');
  }
  public set v4Count(value: number) {
    this._v4Count = value;
  }
  public resetV4Count() {
    this._v4Count = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v4CountInput() {
    return this._v4Count;
  }

  // v4_vrid - computed: false, optional: true, required: false
  private _v4Vrid?: number; 
  public get v4Vrid() {
    return this.getNumberAttribute('v4_vrid');
  }
  public set v4Vrid(value: number) {
    this._v4Vrid = value;
  }
  public resetV4Vrid() {
    this._v4Vrid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v4VridInput() {
    return this._v4Vrid;
  }

  // v6_acl_name - computed: false, optional: true, required: false
  private _v6AclName?: string; 
  public get v6AclName() {
    return this.getStringAttribute('v6_acl_name');
  }
  public set v6AclName(value: string) {
    this._v6AclName = value;
  }
  public resetV6AclName() {
    this._v6AclName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v6AclNameInput() {
    return this._v6AclName;
  }

  // v6_count - computed: false, optional: true, required: false
  private _v6Count?: number; 
  public get v6Count() {
    return this.getNumberAttribute('v6_count');
  }
  public set v6Count(value: number) {
    this._v6Count = value;
  }
  public resetV6Count() {
    this._v6Count = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v6CountInput() {
    return this._v6Count;
  }

  // v6_vrid - computed: false, optional: true, required: false
  private _v6Vrid?: number; 
  public get v6Vrid() {
    return this.getNumberAttribute('v6_vrid');
  }
  public set v6Vrid(value: number) {
    this._v6Vrid = value;
  }
  public resetV6Vrid() {
    this._v6Vrid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v6VridInput() {
    return this._v6Vrid;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      global_netmaskv4: cdktf.stringToTerraform(this._globalNetmaskv4),
      global_start_ipv4_addr: cdktf.stringToTerraform(this._globalStartIpv4Addr),
      global_start_ipv6_addr: cdktf.stringToTerraform(this._globalStartIpv6Addr),
      id: cdktf.stringToTerraform(this._id),
      local_netmaskv4: cdktf.stringToTerraform(this._localNetmaskv4),
      local_start_ipv4_addr: cdktf.stringToTerraform(this._localStartIpv4Addr),
      local_start_ipv6_addr: cdktf.stringToTerraform(this._localStartIpv6Addr),
      name: cdktf.stringToTerraform(this._name),
      uuid: cdktf.stringToTerraform(this._uuid),
      v4_acl_id: cdktf.numberToTerraform(this._v4AclId),
      v4_acl_name: cdktf.stringToTerraform(this._v4AclName),
      v4_count: cdktf.numberToTerraform(this._v4Count),
      v4_vrid: cdktf.numberToTerraform(this._v4Vrid),
      v6_acl_name: cdktf.stringToTerraform(this._v6AclName),
      v6_count: cdktf.numberToTerraform(this._v6Count),
      v6_vrid: cdktf.numberToTerraform(this._v6Vrid),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      global_netmaskv4: {
        value: cdktf.stringToHclTerraform(this._globalNetmaskv4),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      global_start_ipv4_addr: {
        value: cdktf.stringToHclTerraform(this._globalStartIpv4Addr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      global_start_ipv6_addr: {
        value: cdktf.stringToHclTerraform(this._globalStartIpv6Addr),
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
      local_netmaskv4: {
        value: cdktf.stringToHclTerraform(this._localNetmaskv4),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      local_start_ipv4_addr: {
        value: cdktf.stringToHclTerraform(this._localStartIpv4Addr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      local_start_ipv6_addr: {
        value: cdktf.stringToHclTerraform(this._localStartIpv6Addr),
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
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      v4_acl_id: {
        value: cdktf.numberToHclTerraform(this._v4AclId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      v4_acl_name: {
        value: cdktf.stringToHclTerraform(this._v4AclName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      v4_count: {
        value: cdktf.numberToHclTerraform(this._v4Count),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      v4_vrid: {
        value: cdktf.numberToHclTerraform(this._v4Vrid),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      v6_acl_name: {
        value: cdktf.stringToHclTerraform(this._v6AclName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      v6_count: {
        value: cdktf.numberToHclTerraform(this._v6Count),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      v6_vrid: {
        value: cdktf.numberToHclTerraform(this._v6Vrid),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
