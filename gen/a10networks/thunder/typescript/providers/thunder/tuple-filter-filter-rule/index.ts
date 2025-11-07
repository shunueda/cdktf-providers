// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/tuple_filter_filter_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TupleFilterFilterRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Destination IPv4 address with prefix
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/tuple_filter_filter_rule#dst_addr TupleFilterFilterRule#dst_addr}
  */
  readonly dstAddr?: string;
  /**
  * Destination port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/tuple_filter_filter_rule#dst_port TupleFilterFilterRule#dst_port}
  */
  readonly dstPort?: number;
  /**
  * Destination IPv6 address with prefix
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/tuple_filter_filter_rule#dst_v6_addr TupleFilterFilterRule#dst_v6_addr}
  */
  readonly dstV6Addr?: string;
  /**
  * Destination port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/tuple_filter_filter_rule#dst_v6_port TupleFilterFilterRule#dst_v6_port}
  */
  readonly dstV6Port?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/tuple_filter_filter_rule#id TupleFilterFilterRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * filter rule id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/tuple_filter_filter_rule#id1 TupleFilterFilterRule#id1}
  */
  readonly id1: number;
  /**
  * Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/tuple_filter_filter_rule#name TupleFilterFilterRule#name}
  */
  readonly name: string;
  /**
  * Source IPv4 address with prefix
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/tuple_filter_filter_rule#src_addr TupleFilterFilterRule#src_addr}
  */
  readonly srcAddr?: string;
  /**
  * Source port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/tuple_filter_filter_rule#src_port TupleFilterFilterRule#src_port}
  */
  readonly srcPort?: number;
  /**
  * Source IPv6 address with prefix
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/tuple_filter_filter_rule#src_v6_addr TupleFilterFilterRule#src_v6_addr}
  */
  readonly srcV6Addr?: string;
  /**
  * Source port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/tuple_filter_filter_rule#src_v6_port TupleFilterFilterRule#src_v6_port}
  */
  readonly srcV6Port?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/tuple_filter_filter_rule#uuid TupleFilterFilterRule#uuid}
  */
  readonly uuid?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/tuple_filter_filter_rule thunder_tuple_filter_filter_rule}
*/
export class TupleFilterFilterRule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_tuple_filter_filter_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a TupleFilterFilterRule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TupleFilterFilterRule to import
  * @param importFromId The id of the existing TupleFilterFilterRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/tuple_filter_filter_rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TupleFilterFilterRule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_tuple_filter_filter_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/tuple_filter_filter_rule thunder_tuple_filter_filter_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TupleFilterFilterRuleConfig
  */
  public constructor(scope: Construct, id: string, config: TupleFilterFilterRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_tuple_filter_filter_rule',
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
    this._dstAddr = config.dstAddr;
    this._dstPort = config.dstPort;
    this._dstV6Addr = config.dstV6Addr;
    this._dstV6Port = config.dstV6Port;
    this._id = config.id;
    this._id1 = config.id1;
    this._name = config.name;
    this._srcAddr = config.srcAddr;
    this._srcPort = config.srcPort;
    this._srcV6Addr = config.srcV6Addr;
    this._srcV6Port = config.srcV6Port;
    this._uuid = config.uuid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // dst_addr - computed: false, optional: true, required: false
  private _dstAddr?: string; 
  public get dstAddr() {
    return this.getStringAttribute('dst_addr');
  }
  public set dstAddr(value: string) {
    this._dstAddr = value;
  }
  public resetDstAddr() {
    this._dstAddr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstAddrInput() {
    return this._dstAddr;
  }

  // dst_port - computed: false, optional: true, required: false
  private _dstPort?: number; 
  public get dstPort() {
    return this.getNumberAttribute('dst_port');
  }
  public set dstPort(value: number) {
    this._dstPort = value;
  }
  public resetDstPort() {
    this._dstPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstPortInput() {
    return this._dstPort;
  }

  // dst_v6_addr - computed: false, optional: true, required: false
  private _dstV6Addr?: string; 
  public get dstV6Addr() {
    return this.getStringAttribute('dst_v6_addr');
  }
  public set dstV6Addr(value: string) {
    this._dstV6Addr = value;
  }
  public resetDstV6Addr() {
    this._dstV6Addr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstV6AddrInput() {
    return this._dstV6Addr;
  }

  // dst_v6_port - computed: false, optional: true, required: false
  private _dstV6Port?: number; 
  public get dstV6Port() {
    return this.getNumberAttribute('dst_v6_port');
  }
  public set dstV6Port(value: number) {
    this._dstV6Port = value;
  }
  public resetDstV6Port() {
    this._dstV6Port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstV6PortInput() {
    return this._dstV6Port;
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

  // id1 - computed: false, optional: false, required: true
  private _id1?: number; 
  public get id1() {
    return this.getNumberAttribute('id1');
  }
  public set id1(value: number) {
    this._id1 = value;
  }
  // Temporarily expose input value. Use with caution.
  public get id1Input() {
    return this._id1;
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

  // src_addr - computed: false, optional: true, required: false
  private _srcAddr?: string; 
  public get srcAddr() {
    return this.getStringAttribute('src_addr');
  }
  public set srcAddr(value: string) {
    this._srcAddr = value;
  }
  public resetSrcAddr() {
    this._srcAddr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcAddrInput() {
    return this._srcAddr;
  }

  // src_port - computed: false, optional: true, required: false
  private _srcPort?: number; 
  public get srcPort() {
    return this.getNumberAttribute('src_port');
  }
  public set srcPort(value: number) {
    this._srcPort = value;
  }
  public resetSrcPort() {
    this._srcPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcPortInput() {
    return this._srcPort;
  }

  // src_v6_addr - computed: false, optional: true, required: false
  private _srcV6Addr?: string; 
  public get srcV6Addr() {
    return this.getStringAttribute('src_v6_addr');
  }
  public set srcV6Addr(value: string) {
    this._srcV6Addr = value;
  }
  public resetSrcV6Addr() {
    this._srcV6Addr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcV6AddrInput() {
    return this._srcV6Addr;
  }

  // src_v6_port - computed: false, optional: true, required: false
  private _srcV6Port?: number; 
  public get srcV6Port() {
    return this.getNumberAttribute('src_v6_port');
  }
  public set srcV6Port(value: number) {
    this._srcV6Port = value;
  }
  public resetSrcV6Port() {
    this._srcV6Port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcV6PortInput() {
    return this._srcV6Port;
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
      dst_addr: cdktf.stringToTerraform(this._dstAddr),
      dst_port: cdktf.numberToTerraform(this._dstPort),
      dst_v6_addr: cdktf.stringToTerraform(this._dstV6Addr),
      dst_v6_port: cdktf.numberToTerraform(this._dstV6Port),
      id: cdktf.stringToTerraform(this._id),
      id1: cdktf.numberToTerraform(this._id1),
      name: cdktf.stringToTerraform(this._name),
      src_addr: cdktf.stringToTerraform(this._srcAddr),
      src_port: cdktf.numberToTerraform(this._srcPort),
      src_v6_addr: cdktf.stringToTerraform(this._srcV6Addr),
      src_v6_port: cdktf.numberToTerraform(this._srcV6Port),
      uuid: cdktf.stringToTerraform(this._uuid),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      dst_addr: {
        value: cdktf.stringToHclTerraform(this._dstAddr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dst_port: {
        value: cdktf.numberToHclTerraform(this._dstPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      dst_v6_addr: {
        value: cdktf.stringToHclTerraform(this._dstV6Addr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dst_v6_port: {
        value: cdktf.numberToHclTerraform(this._dstV6Port),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id1: {
        value: cdktf.numberToHclTerraform(this._id1),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      src_addr: {
        value: cdktf.stringToHclTerraform(this._srcAddr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      src_port: {
        value: cdktf.numberToHclTerraform(this._srcPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      src_v6_addr: {
        value: cdktf.stringToHclTerraform(this._srcV6Addr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      src_v6_port: {
        value: cdktf.numberToHclTerraform(this._srcV6Port),
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
