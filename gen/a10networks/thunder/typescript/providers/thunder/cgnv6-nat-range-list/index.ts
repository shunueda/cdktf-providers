// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_nat_range_list
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface Cgnv6NatRangeListConfig extends cdktf.TerraformMetaArguments {
  /**
  * Mask for this Address range
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_nat_range_list#global_netmaskv4 Cgnv6NatRangeList#global_netmaskv4}
  */
  readonly globalNetmaskv4?: string;
  /**
  * Global Start IPv4 Address of this list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_nat_range_list#global_start_ipv4_addr Cgnv6NatRangeList#global_start_ipv4_addr}
  */
  readonly globalStartIpv4Addr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_nat_range_list#id Cgnv6NatRangeList#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Mask for this Address range
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_nat_range_list#local_netmaskv4 Cgnv6NatRangeList#local_netmaskv4}
  */
  readonly localNetmaskv4?: string;
  /**
  * Local Start IPv4 Address of this list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_nat_range_list#local_start_ipv4_addr Cgnv6NatRangeList#local_start_ipv4_addr}
  */
  readonly localStartIpv4Addr?: string;
  /**
  * Name for this Static List
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_nat_range_list#name Cgnv6NatRangeList#name}
  */
  readonly name: string;
  /**
  * Inside User Partition (Partition Name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_nat_range_list#partition Cgnv6NatRangeList#partition}
  */
  readonly partition: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_nat_range_list#uuid Cgnv6NatRangeList#uuid}
  */
  readonly uuid?: string;
  /**
  * Number of addresses to be translated in this range
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_nat_range_list#v4_count Cgnv6NatRangeList#v4_count}
  */
  readonly v4Count?: number;
  /**
  * VRRP-A vrid (Specify ha VRRP-A vrid)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_nat_range_list#v4_vrid Cgnv6NatRangeList#v4_vrid}
  */
  readonly v4Vrid?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_nat_range_list thunder_cgnv6_nat_range_list}
*/
export class Cgnv6NatRangeList extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_cgnv6_nat_range_list";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Cgnv6NatRangeList resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Cgnv6NatRangeList to import
  * @param importFromId The id of the existing Cgnv6NatRangeList that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_nat_range_list#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Cgnv6NatRangeList to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_cgnv6_nat_range_list", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_nat_range_list thunder_cgnv6_nat_range_list} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options Cgnv6NatRangeListConfig
  */
  public constructor(scope: Construct, id: string, config: Cgnv6NatRangeListConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_cgnv6_nat_range_list',
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
    this._id = config.id;
    this._localNetmaskv4 = config.localNetmaskv4;
    this._localStartIpv4Addr = config.localStartIpv4Addr;
    this._name = config.name;
    this._partition = config.partition;
    this._uuid = config.uuid;
    this._v4Count = config.v4Count;
    this._v4Vrid = config.v4Vrid;
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

  // partition - computed: false, optional: false, required: true
  private _partition?: string; 
  public get partition() {
    return this.getStringAttribute('partition');
  }
  public set partition(value: string) {
    this._partition = value;
  }
  // Temporarily expose input value. Use with caution.
  public get partitionInput() {
    return this._partition;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      global_netmaskv4: cdktf.stringToTerraform(this._globalNetmaskv4),
      global_start_ipv4_addr: cdktf.stringToTerraform(this._globalStartIpv4Addr),
      id: cdktf.stringToTerraform(this._id),
      local_netmaskv4: cdktf.stringToTerraform(this._localNetmaskv4),
      local_start_ipv4_addr: cdktf.stringToTerraform(this._localStartIpv4Addr),
      name: cdktf.stringToTerraform(this._name),
      partition: cdktf.stringToTerraform(this._partition),
      uuid: cdktf.stringToTerraform(this._uuid),
      v4_count: cdktf.numberToTerraform(this._v4Count),
      v4_vrid: cdktf.numberToTerraform(this._v4Vrid),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      partition: {
        value: cdktf.stringToHclTerraform(this._partition),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
