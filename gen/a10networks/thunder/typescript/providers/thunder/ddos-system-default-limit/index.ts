// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_system_default_limit
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DdosSystemDefaultLimitConfig extends cdktf.TerraformMetaArguments {
  /**
  * Configure Default Kibit (kibibit / 1024-bit) rate limit
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_system_default_limit#default_bit_rate_limit DdosSystemDefaultLimit#default_bit_rate_limit}
  */
  readonly defaultBitRateLimit?: number;
  /**
  * Configure Default Connection limit
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_system_default_limit#default_conn_limit DdosSystemDefaultLimit#default_conn_limit}
  */
  readonly defaultConnLimit?: number;
  /**
  * Configure Default Connection rate limit
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_system_default_limit#default_conn_rate_limit DdosSystemDefaultLimit#default_conn_rate_limit}
  */
  readonly defaultConnRateLimit?: number;
  /**
  * Configure Default Fragmented packet rate limit
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_system_default_limit#default_frag_pkt_rate_limit DdosSystemDefaultLimit#default_frag_pkt_rate_limit}
  */
  readonly defaultFragPktRateLimit?: number;
  /**
  * Configure Default Packet rate limit
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_system_default_limit#default_pkt_rate_limit DdosSystemDefaultLimit#default_pkt_rate_limit}
  */
  readonly defaultPktRateLimit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_system_default_limit#id DdosSystemDefaultLimit#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * 'dst-entry': dst-entry; 'dst-icmp': dst-icmp; 'dst-other': dst-other; 'dst-tcp': dst-tcp; 'dst-udp': dst-udp; 'src-entry': src-entry; 'src-icmp': src-icmp; 'src-other': src-other; 'src-tcp': src-tcp; 'src-udp': src-udp;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_system_default_limit#limit_type DdosSystemDefaultLimit#limit_type}
  */
  readonly limitType: string;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_system_default_limit#user_tag DdosSystemDefaultLimit#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_system_default_limit#uuid DdosSystemDefaultLimit#uuid}
  */
  readonly uuid?: string;
  /**
  * default_over_limit_action block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_system_default_limit#default_over_limit_action DdosSystemDefaultLimit#default_over_limit_action}
  */
  readonly defaultOverLimitAction?: DdosSystemDefaultLimitDefaultOverLimitAction;
}
export interface DdosSystemDefaultLimitDefaultOverLimitAction {
  /**
  * Silently Drop the new connection / new packet when it exceeds limit
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_system_default_limit#drop DdosSystemDefaultLimit#drop}
  */
  readonly drop?: number;
}

export function ddosSystemDefaultLimitDefaultOverLimitActionToTerraform(struct?: DdosSystemDefaultLimitDefaultOverLimitActionOutputReference | DdosSystemDefaultLimitDefaultOverLimitAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    drop: cdktf.numberToTerraform(struct!.drop),
  }
}


export function ddosSystemDefaultLimitDefaultOverLimitActionToHclTerraform(struct?: DdosSystemDefaultLimitDefaultOverLimitActionOutputReference | DdosSystemDefaultLimitDefaultOverLimitAction): any {
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

export class DdosSystemDefaultLimitDefaultOverLimitActionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosSystemDefaultLimitDefaultOverLimitAction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._drop !== undefined) {
      hasAnyValues = true;
      internalValueResult.drop = this._drop;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosSystemDefaultLimitDefaultOverLimitAction | undefined) {
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

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_system_default_limit thunder_ddos_system_default_limit}
*/
export class DdosSystemDefaultLimit extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_ddos_system_default_limit";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DdosSystemDefaultLimit resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DdosSystemDefaultLimit to import
  * @param importFromId The id of the existing DdosSystemDefaultLimit that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_system_default_limit#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DdosSystemDefaultLimit to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_ddos_system_default_limit", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_system_default_limit thunder_ddos_system_default_limit} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DdosSystemDefaultLimitConfig
  */
  public constructor(scope: Construct, id: string, config: DdosSystemDefaultLimitConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_ddos_system_default_limit',
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
    this._defaultBitRateLimit = config.defaultBitRateLimit;
    this._defaultConnLimit = config.defaultConnLimit;
    this._defaultConnRateLimit = config.defaultConnRateLimit;
    this._defaultFragPktRateLimit = config.defaultFragPktRateLimit;
    this._defaultPktRateLimit = config.defaultPktRateLimit;
    this._id = config.id;
    this._limitType = config.limitType;
    this._userTag = config.userTag;
    this._uuid = config.uuid;
    this._defaultOverLimitAction.internalValue = config.defaultOverLimitAction;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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
  private _defaultOverLimitAction = new DdosSystemDefaultLimitDefaultOverLimitActionOutputReference(this, "default_over_limit_action");
  public get defaultOverLimitAction() {
    return this._defaultOverLimitAction;
  }
  public putDefaultOverLimitAction(value: DdosSystemDefaultLimitDefaultOverLimitAction) {
    this._defaultOverLimitAction.internalValue = value;
  }
  public resetDefaultOverLimitAction() {
    this._defaultOverLimitAction.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultOverLimitActionInput() {
    return this._defaultOverLimitAction.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      default_bit_rate_limit: cdktf.numberToTerraform(this._defaultBitRateLimit),
      default_conn_limit: cdktf.numberToTerraform(this._defaultConnLimit),
      default_conn_rate_limit: cdktf.numberToTerraform(this._defaultConnRateLimit),
      default_frag_pkt_rate_limit: cdktf.numberToTerraform(this._defaultFragPktRateLimit),
      default_pkt_rate_limit: cdktf.numberToTerraform(this._defaultPktRateLimit),
      id: cdktf.stringToTerraform(this._id),
      limit_type: cdktf.stringToTerraform(this._limitType),
      user_tag: cdktf.stringToTerraform(this._userTag),
      uuid: cdktf.stringToTerraform(this._uuid),
      default_over_limit_action: ddosSystemDefaultLimitDefaultOverLimitActionToTerraform(this._defaultOverLimitAction.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      default_bit_rate_limit: {
        value: cdktf.numberToHclTerraform(this._defaultBitRateLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      default_conn_limit: {
        value: cdktf.numberToHclTerraform(this._defaultConnLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      default_conn_rate_limit: {
        value: cdktf.numberToHclTerraform(this._defaultConnRateLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      default_frag_pkt_rate_limit: {
        value: cdktf.numberToHclTerraform(this._defaultFragPktRateLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      default_pkt_rate_limit: {
        value: cdktf.numberToHclTerraform(this._defaultPktRateLimit),
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
      limit_type: {
        value: cdktf.stringToHclTerraform(this._limitType),
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
      default_over_limit_action: {
        value: ddosSystemDefaultLimitDefaultOverLimitActionToHclTerraform(this._defaultOverLimitAction.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DdosSystemDefaultLimitDefaultOverLimitActionList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
