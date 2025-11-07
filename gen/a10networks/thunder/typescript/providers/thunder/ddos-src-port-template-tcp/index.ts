// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_src_port_template_tcp
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DdosSrcPortTemplateTcpConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_src_port_template_tcp#id DdosSrcPortTemplateTcp#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_src_port_template_tcp#name DdosSrcPortTemplateTcp#name}
  */
  readonly name: string;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_src_port_template_tcp#user_tag DdosSrcPortTemplateTcp#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_src_port_template_tcp#uuid DdosSrcPortTemplateTcp#uuid}
  */
  readonly uuid?: string;
  /**
  * filter_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_src_port_template_tcp#filter_list DdosSrcPortTemplateTcp#filter_list}
  */
  readonly filterList?: DdosSrcPortTemplateTcpFilterListStruct[] | cdktf.IResolvable;
}
export interface DdosSrcPortTemplateTcpFilterListStruct {
  /**
  * Filter Expression using Berkeley Packet Filter syntax
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_src_port_template_tcp#byte_offset_filter DdosSrcPortTemplateTcp#byte_offset_filter}
  */
  readonly byteOffsetFilter?: string;
  /**
  * 'blacklist-src': Also blacklist the source when action is taken; 'whitelist-src': Whitelist the source after filter passes, packets are dropped until then; 'count-only': Take no action and continue processing the next filter;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_src_port_template_tcp#tcp_filter_action DdosSrcPortTemplateTcp#tcp_filter_action}
  */
  readonly tcpFilterAction?: string;
  /**
  * Regex Expression
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_src_port_template_tcp#tcp_filter_regex DdosSrcPortTemplateTcp#tcp_filter_regex}
  */
  readonly tcpFilterRegex?: string;
  /**
  * Sequence number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_src_port_template_tcp#tcp_filter_seq DdosSrcPortTemplateTcp#tcp_filter_seq}
  */
  readonly tcpFilterSeq: number;
  /**
  * action taken when it does not match
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_src_port_template_tcp#tcp_filter_unmatched DdosSrcPortTemplateTcp#tcp_filter_unmatched}
  */
  readonly tcpFilterUnmatched?: number;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_src_port_template_tcp#user_tag DdosSrcPortTemplateTcp#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_src_port_template_tcp#uuid DdosSrcPortTemplateTcp#uuid}
  */
  readonly uuid?: string;
}

export function ddosSrcPortTemplateTcpFilterListStructToTerraform(struct?: DdosSrcPortTemplateTcpFilterListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    byte_offset_filter: cdktf.stringToTerraform(struct!.byteOffsetFilter),
    tcp_filter_action: cdktf.stringToTerraform(struct!.tcpFilterAction),
    tcp_filter_regex: cdktf.stringToTerraform(struct!.tcpFilterRegex),
    tcp_filter_seq: cdktf.numberToTerraform(struct!.tcpFilterSeq),
    tcp_filter_unmatched: cdktf.numberToTerraform(struct!.tcpFilterUnmatched),
    user_tag: cdktf.stringToTerraform(struct!.userTag),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function ddosSrcPortTemplateTcpFilterListStructToHclTerraform(struct?: DdosSrcPortTemplateTcpFilterListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    byte_offset_filter: {
      value: cdktf.stringToHclTerraform(struct!.byteOffsetFilter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tcp_filter_action: {
      value: cdktf.stringToHclTerraform(struct!.tcpFilterAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tcp_filter_regex: {
      value: cdktf.stringToHclTerraform(struct!.tcpFilterRegex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tcp_filter_seq: {
      value: cdktf.numberToHclTerraform(struct!.tcpFilterSeq),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_filter_unmatched: {
      value: cdktf.numberToHclTerraform(struct!.tcpFilterUnmatched),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    user_tag: {
      value: cdktf.stringToHclTerraform(struct!.userTag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class DdosSrcPortTemplateTcpFilterListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DdosSrcPortTemplateTcpFilterListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._byteOffsetFilter !== undefined) {
      hasAnyValues = true;
      internalValueResult.byteOffsetFilter = this._byteOffsetFilter;
    }
    if (this._tcpFilterAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpFilterAction = this._tcpFilterAction;
    }
    if (this._tcpFilterRegex !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpFilterRegex = this._tcpFilterRegex;
    }
    if (this._tcpFilterSeq !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpFilterSeq = this._tcpFilterSeq;
    }
    if (this._tcpFilterUnmatched !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpFilterUnmatched = this._tcpFilterUnmatched;
    }
    if (this._userTag !== undefined) {
      hasAnyValues = true;
      internalValueResult.userTag = this._userTag;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosSrcPortTemplateTcpFilterListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._byteOffsetFilter = undefined;
      this._tcpFilterAction = undefined;
      this._tcpFilterRegex = undefined;
      this._tcpFilterSeq = undefined;
      this._tcpFilterUnmatched = undefined;
      this._userTag = undefined;
      this._uuid = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._byteOffsetFilter = value.byteOffsetFilter;
      this._tcpFilterAction = value.tcpFilterAction;
      this._tcpFilterRegex = value.tcpFilterRegex;
      this._tcpFilterSeq = value.tcpFilterSeq;
      this._tcpFilterUnmatched = value.tcpFilterUnmatched;
      this._userTag = value.userTag;
      this._uuid = value.uuid;
    }
  }

  // byte_offset_filter - computed: false, optional: true, required: false
  private _byteOffsetFilter?: string; 
  public get byteOffsetFilter() {
    return this.getStringAttribute('byte_offset_filter');
  }
  public set byteOffsetFilter(value: string) {
    this._byteOffsetFilter = value;
  }
  public resetByteOffsetFilter() {
    this._byteOffsetFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get byteOffsetFilterInput() {
    return this._byteOffsetFilter;
  }

  // tcp_filter_action - computed: false, optional: true, required: false
  private _tcpFilterAction?: string; 
  public get tcpFilterAction() {
    return this.getStringAttribute('tcp_filter_action');
  }
  public set tcpFilterAction(value: string) {
    this._tcpFilterAction = value;
  }
  public resetTcpFilterAction() {
    this._tcpFilterAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpFilterActionInput() {
    return this._tcpFilterAction;
  }

  // tcp_filter_regex - computed: false, optional: true, required: false
  private _tcpFilterRegex?: string; 
  public get tcpFilterRegex() {
    return this.getStringAttribute('tcp_filter_regex');
  }
  public set tcpFilterRegex(value: string) {
    this._tcpFilterRegex = value;
  }
  public resetTcpFilterRegex() {
    this._tcpFilterRegex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpFilterRegexInput() {
    return this._tcpFilterRegex;
  }

  // tcp_filter_seq - computed: false, optional: false, required: true
  private _tcpFilterSeq?: number; 
  public get tcpFilterSeq() {
    return this.getNumberAttribute('tcp_filter_seq');
  }
  public set tcpFilterSeq(value: number) {
    this._tcpFilterSeq = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpFilterSeqInput() {
    return this._tcpFilterSeq;
  }

  // tcp_filter_unmatched - computed: false, optional: true, required: false
  private _tcpFilterUnmatched?: number; 
  public get tcpFilterUnmatched() {
    return this.getNumberAttribute('tcp_filter_unmatched');
  }
  public set tcpFilterUnmatched(value: number) {
    this._tcpFilterUnmatched = value;
  }
  public resetTcpFilterUnmatched() {
    this._tcpFilterUnmatched = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpFilterUnmatchedInput() {
    return this._tcpFilterUnmatched;
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
}

export class DdosSrcPortTemplateTcpFilterListStructList extends cdktf.ComplexList {
  public internalValue? : DdosSrcPortTemplateTcpFilterListStruct[] | cdktf.IResolvable

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
  public get(index: number): DdosSrcPortTemplateTcpFilterListStructOutputReference {
    return new DdosSrcPortTemplateTcpFilterListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_src_port_template_tcp thunder_ddos_src_port_template_tcp}
*/
export class DdosSrcPortTemplateTcp extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_ddos_src_port_template_tcp";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DdosSrcPortTemplateTcp resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DdosSrcPortTemplateTcp to import
  * @param importFromId The id of the existing DdosSrcPortTemplateTcp that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_src_port_template_tcp#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DdosSrcPortTemplateTcp to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_ddos_src_port_template_tcp", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_src_port_template_tcp thunder_ddos_src_port_template_tcp} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DdosSrcPortTemplateTcpConfig
  */
  public constructor(scope: Construct, id: string, config: DdosSrcPortTemplateTcpConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_ddos_src_port_template_tcp',
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
    this._id = config.id;
    this._name = config.name;
    this._userTag = config.userTag;
    this._uuid = config.uuid;
    this._filterList.internalValue = config.filterList;
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

  // filter_list - computed: false, optional: true, required: false
  private _filterList = new DdosSrcPortTemplateTcpFilterListStructList(this, "filter_list", false);
  public get filterList() {
    return this._filterList;
  }
  public putFilterList(value: DdosSrcPortTemplateTcpFilterListStruct[] | cdktf.IResolvable) {
    this._filterList.internalValue = value;
  }
  public resetFilterList() {
    this._filterList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterListInput() {
    return this._filterList.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      user_tag: cdktf.stringToTerraform(this._userTag),
      uuid: cdktf.stringToTerraform(this._uuid),
      filter_list: cdktf.listMapper(ddosSrcPortTemplateTcpFilterListStructToTerraform, true)(this._filterList.internalValue),
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
      filter_list: {
        value: cdktf.listMapperHcl(ddosSrcPortTemplateTcpFilterListStructToHclTerraform, true)(this._filterList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DdosSrcPortTemplateTcpFilterListStructList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
