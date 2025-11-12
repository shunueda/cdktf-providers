// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/tuple_filter
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TupleFilterConfig extends cdktf.TerraformMetaArguments {
  /**
  * 'ipv4': IPv4 tuple filter; 'ipv6': IPv6 tuple filter;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/tuple_filter#filter_type TupleFilter#filter_type}
  */
  readonly filterType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/tuple_filter#id TupleFilter#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Tuple filter name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/tuple_filter#name TupleFilter#name}
  */
  readonly name: string;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/tuple_filter#user_tag TupleFilter#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/tuple_filter#uuid TupleFilter#uuid}
  */
  readonly uuid?: string;
  /**
  * filter_rule_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/tuple_filter#filter_rule_list TupleFilter#filter_rule_list}
  */
  readonly filterRuleList?: TupleFilterFilterRuleListStruct[] | cdktf.IResolvable;
}
export interface TupleFilterFilterRuleListStruct {
  /**
  * Destination IPv4 address with prefix
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/tuple_filter#dst_addr TupleFilter#dst_addr}
  */
  readonly dstAddr?: string;
  /**
  * Destination port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/tuple_filter#dst_port TupleFilter#dst_port}
  */
  readonly dstPort?: number;
  /**
  * Destination IPv6 address with prefix
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/tuple_filter#dst_v6_addr TupleFilter#dst_v6_addr}
  */
  readonly dstV6Addr?: string;
  /**
  * Destination port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/tuple_filter#dst_v6_port TupleFilter#dst_v6_port}
  */
  readonly dstV6Port?: number;
  /**
  * filter rule id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/tuple_filter#id1 TupleFilter#id1}
  */
  readonly id1: number;
  /**
  * Source IPv4 address with prefix
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/tuple_filter#src_addr TupleFilter#src_addr}
  */
  readonly srcAddr?: string;
  /**
  * Source port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/tuple_filter#src_port TupleFilter#src_port}
  */
  readonly srcPort?: number;
  /**
  * Source IPv6 address with prefix
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/tuple_filter#src_v6_addr TupleFilter#src_v6_addr}
  */
  readonly srcV6Addr?: string;
  /**
  * Source port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/tuple_filter#src_v6_port TupleFilter#src_v6_port}
  */
  readonly srcV6Port?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/tuple_filter#uuid TupleFilter#uuid}
  */
  readonly uuid?: string;
}

export function tupleFilterFilterRuleListStructToTerraform(struct?: TupleFilterFilterRuleListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dst_addr: cdktf.stringToTerraform(struct!.dstAddr),
    dst_port: cdktf.numberToTerraform(struct!.dstPort),
    dst_v6_addr: cdktf.stringToTerraform(struct!.dstV6Addr),
    dst_v6_port: cdktf.numberToTerraform(struct!.dstV6Port),
    id1: cdktf.numberToTerraform(struct!.id1),
    src_addr: cdktf.stringToTerraform(struct!.srcAddr),
    src_port: cdktf.numberToTerraform(struct!.srcPort),
    src_v6_addr: cdktf.stringToTerraform(struct!.srcV6Addr),
    src_v6_port: cdktf.numberToTerraform(struct!.srcV6Port),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function tupleFilterFilterRuleListStructToHclTerraform(struct?: TupleFilterFilterRuleListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dst_addr: {
      value: cdktf.stringToHclTerraform(struct!.dstAddr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dst_port: {
      value: cdktf.numberToHclTerraform(struct!.dstPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dst_v6_addr: {
      value: cdktf.stringToHclTerraform(struct!.dstV6Addr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dst_v6_port: {
      value: cdktf.numberToHclTerraform(struct!.dstV6Port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    id1: {
      value: cdktf.numberToHclTerraform(struct!.id1),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_addr: {
      value: cdktf.stringToHclTerraform(struct!.srcAddr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    src_port: {
      value: cdktf.numberToHclTerraform(struct!.srcPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_v6_addr: {
      value: cdktf.stringToHclTerraform(struct!.srcV6Addr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    src_v6_port: {
      value: cdktf.numberToHclTerraform(struct!.srcV6Port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TupleFilterFilterRuleListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): TupleFilterFilterRuleListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dstAddr !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstAddr = this._dstAddr;
    }
    if (this._dstPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstPort = this._dstPort;
    }
    if (this._dstV6Addr !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstV6Addr = this._dstV6Addr;
    }
    if (this._dstV6Port !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstV6Port = this._dstV6Port;
    }
    if (this._id1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.id1 = this._id1;
    }
    if (this._srcAddr !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcAddr = this._srcAddr;
    }
    if (this._srcPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcPort = this._srcPort;
    }
    if (this._srcV6Addr !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcV6Addr = this._srcV6Addr;
    }
    if (this._srcV6Port !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcV6Port = this._srcV6Port;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TupleFilterFilterRuleListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dstAddr = undefined;
      this._dstPort = undefined;
      this._dstV6Addr = undefined;
      this._dstV6Port = undefined;
      this._id1 = undefined;
      this._srcAddr = undefined;
      this._srcPort = undefined;
      this._srcV6Addr = undefined;
      this._srcV6Port = undefined;
      this._uuid = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dstAddr = value.dstAddr;
      this._dstPort = value.dstPort;
      this._dstV6Addr = value.dstV6Addr;
      this._dstV6Port = value.dstV6Port;
      this._id1 = value.id1;
      this._srcAddr = value.srcAddr;
      this._srcPort = value.srcPort;
      this._srcV6Addr = value.srcV6Addr;
      this._srcV6Port = value.srcV6Port;
      this._uuid = value.uuid;
    }
  }

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
}

export class TupleFilterFilterRuleListStructList extends cdktf.ComplexList {
  public internalValue? : TupleFilterFilterRuleListStruct[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): TupleFilterFilterRuleListStructOutputReference {
    return new TupleFilterFilterRuleListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/tuple_filter thunder_tuple_filter}
*/
export class TupleFilter extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_tuple_filter";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a TupleFilter resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TupleFilter to import
  * @param importFromId The id of the existing TupleFilter that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/tuple_filter#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TupleFilter to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_tuple_filter", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/tuple_filter thunder_tuple_filter} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TupleFilterConfig
  */
  public constructor(scope: Construct, id: string, config: TupleFilterConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_tuple_filter',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.4.2',
        providerVersionConstraint: '1.4.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._filterType = config.filterType;
    this._id = config.id;
    this._name = config.name;
    this._userTag = config.userTag;
    this._uuid = config.uuid;
    this._filterRuleList.internalValue = config.filterRuleList;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // filter_type - computed: false, optional: false, required: true
  private _filterType?: string; 
  public get filterType() {
    return this.getStringAttribute('filter_type');
  }
  public set filterType(value: string) {
    this._filterType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get filterTypeInput() {
    return this._filterType;
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

  // user_tag - computed: false, optional: true, required: false
  private _userTag?: string; 
  public get userTag() {
    return this.getStringAttribute('user_tag');
  }
  public set userTag(value: string) {
    this._userTag = value;
  }
  public resetUserTag() {
    this._userTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userTagInput() {
    return this._userTag;
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

  // filter_rule_list - computed: false, optional: true, required: false
  private _filterRuleList = new TupleFilterFilterRuleListStructList(this, "filter_rule_list", false);
  public get filterRuleList() {
    return this._filterRuleList;
  }
  public putFilterRuleList(value: TupleFilterFilterRuleListStruct[] | cdktf.IResolvable) {
    this._filterRuleList.internalValue = value;
  }
  public resetFilterRuleList() {
    this._filterRuleList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterRuleListInput() {
    return this._filterRuleList.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      filter_type: cdktf.stringToTerraform(this._filterType),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      user_tag: cdktf.stringToTerraform(this._userTag),
      uuid: cdktf.stringToTerraform(this._uuid),
      filter_rule_list: cdktf.listMapper(tupleFilterFilterRuleListStructToTerraform, true)(this._filterRuleList.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      filter_type: {
        value: cdktf.stringToHclTerraform(this._filterType),
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
      user_tag: {
        value: cdktf.stringToHclTerraform(this._userTag),
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
      filter_rule_list: {
        value: cdktf.listMapperHcl(tupleFilterFilterRuleListStructToHclTerraform, true)(this._filterRuleList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TupleFilterFilterRuleListStructList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
