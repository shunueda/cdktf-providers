// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_system_default
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DdosSystemDefaultConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_system_default#id DdosSystemDefault#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_system_default#uuid DdosSystemDefault#uuid}
  */
  readonly uuid?: string;
  /**
  * limit_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_system_default#limit_list DdosSystemDefault#limit_list}
  */
  readonly limitList?: DdosSystemDefaultLimitListStruct[] | cdktf.IResolvable;
}
export interface DdosSystemDefaultLimitListDefaultOverLimitAction {
  /**
  * Silently Drop the new connection / new packet when it exceeds limit
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_system_default#drop DdosSystemDefault#drop}
  */
  readonly drop?: number;
}

export function ddosSystemDefaultLimitListDefaultOverLimitActionToTerraform(struct?: DdosSystemDefaultLimitListDefaultOverLimitActionOutputReference | DdosSystemDefaultLimitListDefaultOverLimitAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    drop: cdktf.numberToTerraform(struct!.drop),
  }
}


export function ddosSystemDefaultLimitListDefaultOverLimitActionToHclTerraform(struct?: DdosSystemDefaultLimitListDefaultOverLimitActionOutputReference | DdosSystemDefaultLimitListDefaultOverLimitAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    drop: {
      value: cdktf.numberToHclTerraform(struct!.drop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosSystemDefaultLimitListDefaultOverLimitActionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosSystemDefaultLimitListDefaultOverLimitAction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._drop !== undefined) {
      hasAnyValues = true;
      internalValueResult.drop = this._drop;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosSystemDefaultLimitListDefaultOverLimitAction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._drop = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._drop = value.drop;
    }
  }

  // drop - computed: false, optional: true, required: false
  private _drop?: number; 
  public get drop() {
    return this.getNumberAttribute('drop');
  }
  public set drop(value: number) {
    this._drop = value;
  }
  public resetDrop() {
    this._drop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropInput() {
    return this._drop;
  }
}
export interface DdosSystemDefaultLimitListStruct {
  /**
  * Configure Default Kibit (kibibit / 1024-bit) rate limit
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_system_default#default_bit_rate_limit DdosSystemDefault#default_bit_rate_limit}
  */
  readonly defaultBitRateLimit?: number;
  /**
  * Configure Default Connection limit
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_system_default#default_conn_limit DdosSystemDefault#default_conn_limit}
  */
  readonly defaultConnLimit?: number;
  /**
  * Configure Default Connection rate limit
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_system_default#default_conn_rate_limit DdosSystemDefault#default_conn_rate_limit}
  */
  readonly defaultConnRateLimit?: number;
  /**
  * Configure Default Fragmented packet rate limit
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_system_default#default_frag_pkt_rate_limit DdosSystemDefault#default_frag_pkt_rate_limit}
  */
  readonly defaultFragPktRateLimit?: number;
  /**
  * Configure Default Packet rate limit
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_system_default#default_pkt_rate_limit DdosSystemDefault#default_pkt_rate_limit}
  */
  readonly defaultPktRateLimit?: number;
  /**
  * 'dst-entry': dst-entry; 'dst-icmp': dst-icmp; 'dst-other': dst-other; 'dst-tcp': dst-tcp; 'dst-udp': dst-udp; 'src-entry': src-entry; 'src-icmp': src-icmp; 'src-other': src-other; 'src-tcp': src-tcp; 'src-udp': src-udp;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_system_default#limit_type DdosSystemDefault#limit_type}
  */
  readonly limitType: string;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_system_default#user_tag DdosSystemDefault#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_system_default#uuid DdosSystemDefault#uuid}
  */
  readonly uuid?: string;
  /**
  * default_over_limit_action block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_system_default#default_over_limit_action DdosSystemDefault#default_over_limit_action}
  */
  readonly defaultOverLimitAction?: DdosSystemDefaultLimitListDefaultOverLimitAction;
}

export function ddosSystemDefaultLimitListStructToTerraform(struct?: DdosSystemDefaultLimitListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_bit_rate_limit: cdktf.numberToTerraform(struct!.defaultBitRateLimit),
    default_conn_limit: cdktf.numberToTerraform(struct!.defaultConnLimit),
    default_conn_rate_limit: cdktf.numberToTerraform(struct!.defaultConnRateLimit),
    default_frag_pkt_rate_limit: cdktf.numberToTerraform(struct!.defaultFragPktRateLimit),
    default_pkt_rate_limit: cdktf.numberToTerraform(struct!.defaultPktRateLimit),
    limit_type: cdktf.stringToTerraform(struct!.limitType),
    user_tag: cdktf.stringToTerraform(struct!.userTag),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    default_over_limit_action: ddosSystemDefaultLimitListDefaultOverLimitActionToTerraform(struct!.defaultOverLimitAction),
  }
}


export function ddosSystemDefaultLimitListStructToHclTerraform(struct?: DdosSystemDefaultLimitListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_bit_rate_limit: {
      value: cdktf.numberToHclTerraform(struct!.defaultBitRateLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    default_conn_limit: {
      value: cdktf.numberToHclTerraform(struct!.defaultConnLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    default_conn_rate_limit: {
      value: cdktf.numberToHclTerraform(struct!.defaultConnRateLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    default_frag_pkt_rate_limit: {
      value: cdktf.numberToHclTerraform(struct!.defaultFragPktRateLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    default_pkt_rate_limit: {
      value: cdktf.numberToHclTerraform(struct!.defaultPktRateLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    limit_type: {
      value: cdktf.stringToHclTerraform(struct!.limitType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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
    default_over_limit_action: {
      value: ddosSystemDefaultLimitListDefaultOverLimitActionToHclTerraform(struct!.defaultOverLimitAction),
      isBlock: true,
      type: "list",
      storageClassType: "DdosSystemDefaultLimitListDefaultOverLimitActionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosSystemDefaultLimitListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DdosSystemDefaultLimitListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultBitRateLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultBitRateLimit = this._defaultBitRateLimit;
    }
    if (this._defaultConnLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultConnLimit = this._defaultConnLimit;
    }
    if (this._defaultConnRateLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultConnRateLimit = this._defaultConnRateLimit;
    }
    if (this._defaultFragPktRateLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultFragPktRateLimit = this._defaultFragPktRateLimit;
    }
    if (this._defaultPktRateLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultPktRateLimit = this._defaultPktRateLimit;
    }
    if (this._limitType !== undefined) {
      hasAnyValues = true;
      internalValueResult.limitType = this._limitType;
    }
    if (this._userTag !== undefined) {
      hasAnyValues = true;
      internalValueResult.userTag = this._userTag;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._defaultOverLimitAction?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultOverLimitAction = this._defaultOverLimitAction?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosSystemDefaultLimitListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._defaultBitRateLimit = undefined;
      this._defaultConnLimit = undefined;
      this._defaultConnRateLimit = undefined;
      this._defaultFragPktRateLimit = undefined;
      this._defaultPktRateLimit = undefined;
      this._limitType = undefined;
      this._userTag = undefined;
      this._uuid = undefined;
      this._defaultOverLimitAction.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._defaultBitRateLimit = value.defaultBitRateLimit;
      this._defaultConnLimit = value.defaultConnLimit;
      this._defaultConnRateLimit = value.defaultConnRateLimit;
      this._defaultFragPktRateLimit = value.defaultFragPktRateLimit;
      this._defaultPktRateLimit = value.defaultPktRateLimit;
      this._limitType = value.limitType;
      this._userTag = value.userTag;
      this._uuid = value.uuid;
      this._defaultOverLimitAction.internalValue = value.defaultOverLimitAction;
    }
  }

  // default_bit_rate_limit - computed: false, optional: true, required: false
  private _defaultBitRateLimit?: number; 
  public get defaultBitRateLimit() {
    return this.getNumberAttribute('default_bit_rate_limit');
  }
  public set defaultBitRateLimit(value: number) {
    this._defaultBitRateLimit = value;
  }
  public resetDefaultBitRateLimit() {
    this._defaultBitRateLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultBitRateLimitInput() {
    return this._defaultBitRateLimit;
  }

  // default_conn_limit - computed: false, optional: true, required: false
  private _defaultConnLimit?: number; 
  public get defaultConnLimit() {
    return this.getNumberAttribute('default_conn_limit');
  }
  public set defaultConnLimit(value: number) {
    this._defaultConnLimit = value;
  }
  public resetDefaultConnLimit() {
    this._defaultConnLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultConnLimitInput() {
    return this._defaultConnLimit;
  }

  // default_conn_rate_limit - computed: false, optional: true, required: false
  private _defaultConnRateLimit?: number; 
  public get defaultConnRateLimit() {
    return this.getNumberAttribute('default_conn_rate_limit');
  }
  public set defaultConnRateLimit(value: number) {
    this._defaultConnRateLimit = value;
  }
  public resetDefaultConnRateLimit() {
    this._defaultConnRateLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultConnRateLimitInput() {
    return this._defaultConnRateLimit;
  }

  // default_frag_pkt_rate_limit - computed: false, optional: true, required: false
  private _defaultFragPktRateLimit?: number; 
  public get defaultFragPktRateLimit() {
    return this.getNumberAttribute('default_frag_pkt_rate_limit');
  }
  public set defaultFragPktRateLimit(value: number) {
    this._defaultFragPktRateLimit = value;
  }
  public resetDefaultFragPktRateLimit() {
    this._defaultFragPktRateLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultFragPktRateLimitInput() {
    return this._defaultFragPktRateLimit;
  }

  // default_pkt_rate_limit - computed: false, optional: true, required: false
  private _defaultPktRateLimit?: number; 
  public get defaultPktRateLimit() {
    return this.getNumberAttribute('default_pkt_rate_limit');
  }
  public set defaultPktRateLimit(value: number) {
    this._defaultPktRateLimit = value;
  }
  public resetDefaultPktRateLimit() {
    this._defaultPktRateLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultPktRateLimitInput() {
    return this._defaultPktRateLimit;
  }

  // limit_type - computed: false, optional: false, required: true
  private _limitType?: string; 
  public get limitType() {
    return this.getStringAttribute('limit_type');
  }
  public set limitType(value: string) {
    this._limitType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get limitTypeInput() {
    return this._limitType;
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

  // default_over_limit_action - computed: false, optional: true, required: false
  private _defaultOverLimitAction = new DdosSystemDefaultLimitListDefaultOverLimitActionOutputReference(this, "default_over_limit_action");
  public get defaultOverLimitAction() {
    return this._defaultOverLimitAction;
  }
  public putDefaultOverLimitAction(value: DdosSystemDefaultLimitListDefaultOverLimitAction) {
    this._defaultOverLimitAction.internalValue = value;
  }
  public resetDefaultOverLimitAction() {
    this._defaultOverLimitAction.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultOverLimitActionInput() {
    return this._defaultOverLimitAction.internalValue;
  }
}

export class DdosSystemDefaultLimitListStructList extends cdktf.ComplexList {
  public internalValue? : DdosSystemDefaultLimitListStruct[] | cdktf.IResolvable

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
  public get(index: number): DdosSystemDefaultLimitListStructOutputReference {
    return new DdosSystemDefaultLimitListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_system_default thunder_ddos_system_default}
*/
export class DdosSystemDefault extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_ddos_system_default";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DdosSystemDefault resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DdosSystemDefault to import
  * @param importFromId The id of the existing DdosSystemDefault that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_system_default#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DdosSystemDefault to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_ddos_system_default", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_system_default thunder_ddos_system_default} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DdosSystemDefaultConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DdosSystemDefaultConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_ddos_system_default',
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
    this._uuid = config.uuid;
    this._limitList.internalValue = config.limitList;
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

  // limit_list - computed: false, optional: true, required: false
  private _limitList = new DdosSystemDefaultLimitListStructList(this, "limit_list", false);
  public get limitList() {
    return this._limitList;
  }
  public putLimitList(value: DdosSystemDefaultLimitListStruct[] | cdktf.IResolvable) {
    this._limitList.internalValue = value;
  }
  public resetLimitList() {
    this._limitList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitListInput() {
    return this._limitList.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      uuid: cdktf.stringToTerraform(this._uuid),
      limit_list: cdktf.listMapper(ddosSystemDefaultLimitListStructToTerraform, true)(this._limitList.internalValue),
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
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      limit_list: {
        value: cdktf.listMapperHcl(ddosSystemDefaultLimitListStructToHclTerraform, true)(this._limitList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DdosSystemDefaultLimitListStructList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
