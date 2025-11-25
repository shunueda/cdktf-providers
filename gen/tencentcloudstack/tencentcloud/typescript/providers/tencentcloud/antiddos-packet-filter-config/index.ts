// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/antiddos_packet_filter_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AntiddosPacketFilterConfigConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/antiddos_packet_filter_config#id AntiddosPacketFilterConfig#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * resource id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/antiddos_packet_filter_config#instance_id AntiddosPacketFilterConfig#instance_id}
  */
  readonly instanceId: string;
  /**
  * packet_filter_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/antiddos_packet_filter_config#packet_filter_config AntiddosPacketFilterConfig#packet_filter_config}
  */
  readonly packetFilterConfig: AntiddosPacketFilterConfigPacketFilterConfig;
}
export interface AntiddosPacketFilterConfigPacketFilterConfig {
  /**
  * Action, value [drop (discard) transmit (release) drop_black (discard and pull black) drop_rst (intercept) drop_black_rst (intercept and pull black) forward (continue protection)].
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/antiddos_packet_filter_config#action AntiddosPacketFilterConfig#action}
  */
  readonly action: string;
  /**
  * The detection depth starting from the detection position, with a value of [0-1500].
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/antiddos_packet_filter_config#depth AntiddosPacketFilterConfig#depth}
  */
  readonly depth?: number;
  /**
  * The second detection depth starting from the second detection position, with a value of [01500].
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/antiddos_packet_filter_config#depth2 AntiddosPacketFilterConfig#depth2}
  */
  readonly depth2?: number;
  /**
  * end destination port, ranging from 0 to 65535.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/antiddos_packet_filter_config#dport_end AntiddosPacketFilterConfig#dport_end}
  */
  readonly dportEnd: number;
  /**
  * Starting destination port, ranging from 0 to 65535.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/antiddos_packet_filter_config#dport_start AntiddosPacketFilterConfig#dport_start}
  */
  readonly dportStart: number;
  /**
  * Whether to include detection values, with a value of [0 (inclusive) and 1 (exclusive)].
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/antiddos_packet_filter_config#is_not AntiddosPacketFilterConfig#is_not}
  */
  readonly isNot?: number;
  /**
  * Whether the second detection includes detection values, with a value of [0 (inclusive) and 1 (exclusive)].
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/antiddos_packet_filter_config#is_not2 AntiddosPacketFilterConfig#is_not2}
  */
  readonly isNot2?: number;
  /**
  * Detection position, value [begin_l3 (IP header) begin_l4 (TCP/UDP header) begin_l5 (T payload) no_match (mismatch)].
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/antiddos_packet_filter_config#match_begin AntiddosPacketFilterConfig#match_begin}
  */
  readonly matchBegin?: string;
  /**
  * Second detection position, value [begin_l5 (load) no_match (mismatch)].
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/antiddos_packet_filter_config#match_begin2 AntiddosPacketFilterConfig#match_begin2}
  */
  readonly matchBegin2?: string;
  /**
  * When there is a second detection condition, the AND or relationship with the first detection condition, with the value [and (and relationship) none (fill in this value when there is no second detection condition)].
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/antiddos_packet_filter_config#match_logic AntiddosPacketFilterConfig#match_logic}
  */
  readonly matchLogic?: string;
  /**
  * Detection type, value [Sunday (keyword) pcre (regular expression)].
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/antiddos_packet_filter_config#match_type AntiddosPacketFilterConfig#match_type}
  */
  readonly matchType?: string;
  /**
  * The second detection type, with a value of [Sunday (keyword) pcre (regular expression)].
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/antiddos_packet_filter_config#match_type2 AntiddosPacketFilterConfig#match_type2}
  */
  readonly matchType2?: string;
  /**
  * The offset from the detection position, with a value range of [0, Depth].
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/antiddos_packet_filter_config#offset AntiddosPacketFilterConfig#offset}
  */
  readonly offset?: number;
  /**
  * The offset from the second detection position, with a value range of [0, Depth2].
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/antiddos_packet_filter_config#offset2 AntiddosPacketFilterConfig#offset2}
  */
  readonly offset2?: number;
  /**
  * Greater than message length, value 1+.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/antiddos_packet_filter_config#pkt_len_gt AntiddosPacketFilterConfig#pkt_len_gt}
  */
  readonly pktLenGt?: number;
  /**
  * The maximum message length, ranging from 1 to 1500, must be greater than or equal to the minimum message length.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/antiddos_packet_filter_config#pktlen_max AntiddosPacketFilterConfig#pktlen_max}
  */
  readonly pktlenMax: number;
  /**
  * Minimum message length, ranging from 1 to 1500.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/antiddos_packet_filter_config#pktlen_min AntiddosPacketFilterConfig#pktlen_min}
  */
  readonly pktlenMin: number;
  /**
  * Protocol, value [TCP udp icmp all].
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/antiddos_packet_filter_config#protocol AntiddosPacketFilterConfig#protocol}
  */
  readonly protocol: string;
  /**
  * End source port, values range from 1 to 65535, must be greater than or equal to the start source port.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/antiddos_packet_filter_config#sport_end AntiddosPacketFilterConfig#sport_end}
  */
  readonly sportEnd: number;
  /**
  * Starting source port, ranging from 0 to 65535.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/antiddos_packet_filter_config#sport_start AntiddosPacketFilterConfig#sport_start}
  */
  readonly sportStart: number;
  /**
  * Detection value, key string or regular expression, value [When the detection type is Sunday, please fill in the string or hexadecimal bytecode, for example, x313233 corresponds to the hexadecimal word&gt;section code of the string &#39;123&#39;; when the detection type is pcre, please fill in the regular expression character string;].
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/antiddos_packet_filter_config#str AntiddosPacketFilterConfig#str}
  */
  readonly str?: string;
  /**
  * key string or regular expression, value [When the detection type is Sunday, please fill in the string or hexadecimal bytecode, for example, x313233 corresponds to the hexadecimal word&gt;section code of the string &#39;123&#39;; when the detection type is pcre, please fill in the regular expression character string;].
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/antiddos_packet_filter_config#str2 AntiddosPacketFilterConfig#str2}
  */
  readonly str2?: string;
}

export function antiddosPacketFilterConfigPacketFilterConfigToTerraform(struct?: AntiddosPacketFilterConfigPacketFilterConfigOutputReference | AntiddosPacketFilterConfigPacketFilterConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    depth: cdktf.numberToTerraform(struct!.depth),
    depth2: cdktf.numberToTerraform(struct!.depth2),
    dport_end: cdktf.numberToTerraform(struct!.dportEnd),
    dport_start: cdktf.numberToTerraform(struct!.dportStart),
    is_not: cdktf.numberToTerraform(struct!.isNot),
    is_not2: cdktf.numberToTerraform(struct!.isNot2),
    match_begin: cdktf.stringToTerraform(struct!.matchBegin),
    match_begin2: cdktf.stringToTerraform(struct!.matchBegin2),
    match_logic: cdktf.stringToTerraform(struct!.matchLogic),
    match_type: cdktf.stringToTerraform(struct!.matchType),
    match_type2: cdktf.stringToTerraform(struct!.matchType2),
    offset: cdktf.numberToTerraform(struct!.offset),
    offset2: cdktf.numberToTerraform(struct!.offset2),
    pkt_len_gt: cdktf.numberToTerraform(struct!.pktLenGt),
    pktlen_max: cdktf.numberToTerraform(struct!.pktlenMax),
    pktlen_min: cdktf.numberToTerraform(struct!.pktlenMin),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    sport_end: cdktf.numberToTerraform(struct!.sportEnd),
    sport_start: cdktf.numberToTerraform(struct!.sportStart),
    str: cdktf.stringToTerraform(struct!.str),
    str2: cdktf.stringToTerraform(struct!.str2),
  }
}


export function antiddosPacketFilterConfigPacketFilterConfigToHclTerraform(struct?: AntiddosPacketFilterConfigPacketFilterConfigOutputReference | AntiddosPacketFilterConfigPacketFilterConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    depth: {
      value: cdktf.numberToHclTerraform(struct!.depth),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    depth2: {
      value: cdktf.numberToHclTerraform(struct!.depth2),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dport_end: {
      value: cdktf.numberToHclTerraform(struct!.dportEnd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dport_start: {
      value: cdktf.numberToHclTerraform(struct!.dportStart),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    is_not: {
      value: cdktf.numberToHclTerraform(struct!.isNot),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    is_not2: {
      value: cdktf.numberToHclTerraform(struct!.isNot2),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    match_begin: {
      value: cdktf.stringToHclTerraform(struct!.matchBegin),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    match_begin2: {
      value: cdktf.stringToHclTerraform(struct!.matchBegin2),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    match_logic: {
      value: cdktf.stringToHclTerraform(struct!.matchLogic),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    match_type: {
      value: cdktf.stringToHclTerraform(struct!.matchType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    match_type2: {
      value: cdktf.stringToHclTerraform(struct!.matchType2),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    offset: {
      value: cdktf.numberToHclTerraform(struct!.offset),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    offset2: {
      value: cdktf.numberToHclTerraform(struct!.offset2),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pkt_len_gt: {
      value: cdktf.numberToHclTerraform(struct!.pktLenGt),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pktlen_max: {
      value: cdktf.numberToHclTerraform(struct!.pktlenMax),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pktlen_min: {
      value: cdktf.numberToHclTerraform(struct!.pktlenMin),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    protocol: {
      value: cdktf.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sport_end: {
      value: cdktf.numberToHclTerraform(struct!.sportEnd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sport_start: {
      value: cdktf.numberToHclTerraform(struct!.sportStart),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    str: {
      value: cdktf.stringToHclTerraform(struct!.str),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    str2: {
      value: cdktf.stringToHclTerraform(struct!.str2),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AntiddosPacketFilterConfigPacketFilterConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AntiddosPacketFilterConfigPacketFilterConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._depth !== undefined) {
      hasAnyValues = true;
      internalValueResult.depth = this._depth;
    }
    if (this._depth2 !== undefined) {
      hasAnyValues = true;
      internalValueResult.depth2 = this._depth2;
    }
    if (this._dportEnd !== undefined) {
      hasAnyValues = true;
      internalValueResult.dportEnd = this._dportEnd;
    }
    if (this._dportStart !== undefined) {
      hasAnyValues = true;
      internalValueResult.dportStart = this._dportStart;
    }
    if (this._isNot !== undefined) {
      hasAnyValues = true;
      internalValueResult.isNot = this._isNot;
    }
    if (this._isNot2 !== undefined) {
      hasAnyValues = true;
      internalValueResult.isNot2 = this._isNot2;
    }
    if (this._matchBegin !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchBegin = this._matchBegin;
    }
    if (this._matchBegin2 !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchBegin2 = this._matchBegin2;
    }
    if (this._matchLogic !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchLogic = this._matchLogic;
    }
    if (this._matchType !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchType = this._matchType;
    }
    if (this._matchType2 !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchType2 = this._matchType2;
    }
    if (this._offset !== undefined) {
      hasAnyValues = true;
      internalValueResult.offset = this._offset;
    }
    if (this._offset2 !== undefined) {
      hasAnyValues = true;
      internalValueResult.offset2 = this._offset2;
    }
    if (this._pktLenGt !== undefined) {
      hasAnyValues = true;
      internalValueResult.pktLenGt = this._pktLenGt;
    }
    if (this._pktlenMax !== undefined) {
      hasAnyValues = true;
      internalValueResult.pktlenMax = this._pktlenMax;
    }
    if (this._pktlenMin !== undefined) {
      hasAnyValues = true;
      internalValueResult.pktlenMin = this._pktlenMin;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._sportEnd !== undefined) {
      hasAnyValues = true;
      internalValueResult.sportEnd = this._sportEnd;
    }
    if (this._sportStart !== undefined) {
      hasAnyValues = true;
      internalValueResult.sportStart = this._sportStart;
    }
    if (this._str !== undefined) {
      hasAnyValues = true;
      internalValueResult.str = this._str;
    }
    if (this._str2 !== undefined) {
      hasAnyValues = true;
      internalValueResult.str2 = this._str2;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AntiddosPacketFilterConfigPacketFilterConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._action = undefined;
      this._depth = undefined;
      this._depth2 = undefined;
      this._dportEnd = undefined;
      this._dportStart = undefined;
      this._isNot = undefined;
      this._isNot2 = undefined;
      this._matchBegin = undefined;
      this._matchBegin2 = undefined;
      this._matchLogic = undefined;
      this._matchType = undefined;
      this._matchType2 = undefined;
      this._offset = undefined;
      this._offset2 = undefined;
      this._pktLenGt = undefined;
      this._pktlenMax = undefined;
      this._pktlenMin = undefined;
      this._protocol = undefined;
      this._sportEnd = undefined;
      this._sportStart = undefined;
      this._str = undefined;
      this._str2 = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._action = value.action;
      this._depth = value.depth;
      this._depth2 = value.depth2;
      this._dportEnd = value.dportEnd;
      this._dportStart = value.dportStart;
      this._isNot = value.isNot;
      this._isNot2 = value.isNot2;
      this._matchBegin = value.matchBegin;
      this._matchBegin2 = value.matchBegin2;
      this._matchLogic = value.matchLogic;
      this._matchType = value.matchType;
      this._matchType2 = value.matchType2;
      this._offset = value.offset;
      this._offset2 = value.offset2;
      this._pktLenGt = value.pktLenGt;
      this._pktlenMax = value.pktlenMax;
      this._pktlenMin = value.pktlenMin;
      this._protocol = value.protocol;
      this._sportEnd = value.sportEnd;
      this._sportStart = value.sportStart;
      this._str = value.str;
      this._str2 = value.str2;
    }
  }

  // action - computed: false, optional: false, required: true
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // depth - computed: false, optional: true, required: false
  private _depth?: number; 
  public get depth() {
    return this.getNumberAttribute('depth');
  }
  public set depth(value: number) {
    this._depth = value;
  }
  public resetDepth() {
    this._depth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get depthInput() {
    return this._depth;
  }

  // depth2 - computed: false, optional: true, required: false
  private _depth2?: number; 
  public get depth2() {
    return this.getNumberAttribute('depth2');
  }
  public set depth2(value: number) {
    this._depth2 = value;
  }
  public resetDepth2() {
    this._depth2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get depth2Input() {
    return this._depth2;
  }

  // dport_end - computed: false, optional: false, required: true
  private _dportEnd?: number; 
  public get dportEnd() {
    return this.getNumberAttribute('dport_end');
  }
  public set dportEnd(value: number) {
    this._dportEnd = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dportEndInput() {
    return this._dportEnd;
  }

  // dport_start - computed: false, optional: false, required: true
  private _dportStart?: number; 
  public get dportStart() {
    return this.getNumberAttribute('dport_start');
  }
  public set dportStart(value: number) {
    this._dportStart = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dportStartInput() {
    return this._dportStart;
  }

  // is_not - computed: false, optional: true, required: false
  private _isNot?: number; 
  public get isNot() {
    return this.getNumberAttribute('is_not');
  }
  public set isNot(value: number) {
    this._isNot = value;
  }
  public resetIsNot() {
    this._isNot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isNotInput() {
    return this._isNot;
  }

  // is_not2 - computed: false, optional: true, required: false
  private _isNot2?: number; 
  public get isNot2() {
    return this.getNumberAttribute('is_not2');
  }
  public set isNot2(value: number) {
    this._isNot2 = value;
  }
  public resetIsNot2() {
    this._isNot2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isNot2Input() {
    return this._isNot2;
  }

  // match_begin - computed: false, optional: true, required: false
  private _matchBegin?: string; 
  public get matchBegin() {
    return this.getStringAttribute('match_begin');
  }
  public set matchBegin(value: string) {
    this._matchBegin = value;
  }
  public resetMatchBegin() {
    this._matchBegin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchBeginInput() {
    return this._matchBegin;
  }

  // match_begin2 - computed: true, optional: true, required: false
  private _matchBegin2?: string; 
  public get matchBegin2() {
    return this.getStringAttribute('match_begin2');
  }
  public set matchBegin2(value: string) {
    this._matchBegin2 = value;
  }
  public resetMatchBegin2() {
    this._matchBegin2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchBegin2Input() {
    return this._matchBegin2;
  }

  // match_logic - computed: true, optional: true, required: false
  private _matchLogic?: string; 
  public get matchLogic() {
    return this.getStringAttribute('match_logic');
  }
  public set matchLogic(value: string) {
    this._matchLogic = value;
  }
  public resetMatchLogic() {
    this._matchLogic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchLogicInput() {
    return this._matchLogic;
  }

  // match_type - computed: false, optional: true, required: false
  private _matchType?: string; 
  public get matchType() {
    return this.getStringAttribute('match_type');
  }
  public set matchType(value: string) {
    this._matchType = value;
  }
  public resetMatchType() {
    this._matchType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchTypeInput() {
    return this._matchType;
  }

  // match_type2 - computed: false, optional: true, required: false
  private _matchType2?: string; 
  public get matchType2() {
    return this.getStringAttribute('match_type2');
  }
  public set matchType2(value: string) {
    this._matchType2 = value;
  }
  public resetMatchType2() {
    this._matchType2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchType2Input() {
    return this._matchType2;
  }

  // offset - computed: false, optional: true, required: false
  private _offset?: number; 
  public get offset() {
    return this.getNumberAttribute('offset');
  }
  public set offset(value: number) {
    this._offset = value;
  }
  public resetOffset() {
    this._offset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get offsetInput() {
    return this._offset;
  }

  // offset2 - computed: false, optional: true, required: false
  private _offset2?: number; 
  public get offset2() {
    return this.getNumberAttribute('offset2');
  }
  public set offset2(value: number) {
    this._offset2 = value;
  }
  public resetOffset2() {
    this._offset2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get offset2Input() {
    return this._offset2;
  }

  // pkt_len_gt - computed: false, optional: true, required: false
  private _pktLenGt?: number; 
  public get pktLenGt() {
    return this.getNumberAttribute('pkt_len_gt');
  }
  public set pktLenGt(value: number) {
    this._pktLenGt = value;
  }
  public resetPktLenGt() {
    this._pktLenGt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pktLenGtInput() {
    return this._pktLenGt;
  }

  // pktlen_max - computed: false, optional: false, required: true
  private _pktlenMax?: number; 
  public get pktlenMax() {
    return this.getNumberAttribute('pktlen_max');
  }
  public set pktlenMax(value: number) {
    this._pktlenMax = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pktlenMaxInput() {
    return this._pktlenMax;
  }

  // pktlen_min - computed: false, optional: false, required: true
  private _pktlenMin?: number; 
  public get pktlenMin() {
    return this.getNumberAttribute('pktlen_min');
  }
  public set pktlenMin(value: number) {
    this._pktlenMin = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pktlenMinInput() {
    return this._pktlenMin;
  }

  // protocol - computed: false, optional: false, required: true
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // sport_end - computed: false, optional: false, required: true
  private _sportEnd?: number; 
  public get sportEnd() {
    return this.getNumberAttribute('sport_end');
  }
  public set sportEnd(value: number) {
    this._sportEnd = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sportEndInput() {
    return this._sportEnd;
  }

  // sport_start - computed: false, optional: false, required: true
  private _sportStart?: number; 
  public get sportStart() {
    return this.getNumberAttribute('sport_start');
  }
  public set sportStart(value: number) {
    this._sportStart = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sportStartInput() {
    return this._sportStart;
  }

  // str - computed: false, optional: true, required: false
  private _str?: string; 
  public get str() {
    return this.getStringAttribute('str');
  }
  public set str(value: string) {
    this._str = value;
  }
  public resetStr() {
    this._str = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get strInput() {
    return this._str;
  }

  // str2 - computed: false, optional: true, required: false
  private _str2?: string; 
  public get str2() {
    return this.getStringAttribute('str2');
  }
  public set str2(value: string) {
    this._str2 = value;
  }
  public resetStr2() {
    this._str2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get str2Input() {
    return this._str2;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/antiddos_packet_filter_config tencentcloud_antiddos_packet_filter_config}
*/
export class AntiddosPacketFilterConfig extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_antiddos_packet_filter_config";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AntiddosPacketFilterConfig resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AntiddosPacketFilterConfig to import
  * @param importFromId The id of the existing AntiddosPacketFilterConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/antiddos_packet_filter_config#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AntiddosPacketFilterConfig to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_antiddos_packet_filter_config", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/antiddos_packet_filter_config tencentcloud_antiddos_packet_filter_config} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AntiddosPacketFilterConfigConfig
  */
  public constructor(scope: Construct, id: string, config: AntiddosPacketFilterConfigConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_antiddos_packet_filter_config',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.38',
        providerVersionConstraint: '1.82.38'
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
    this._instanceId = config.instanceId;
    this._packetFilterConfig.internalValue = config.packetFilterConfig;
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

  // instance_id - computed: false, optional: false, required: true
  private _instanceId?: string; 
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }
  public set instanceId(value: string) {
    this._instanceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceIdInput() {
    return this._instanceId;
  }

  // packet_filter_config - computed: false, optional: false, required: true
  private _packetFilterConfig = new AntiddosPacketFilterConfigPacketFilterConfigOutputReference(this, "packet_filter_config");
  public get packetFilterConfig() {
    return this._packetFilterConfig;
  }
  public putPacketFilterConfig(value: AntiddosPacketFilterConfigPacketFilterConfig) {
    this._packetFilterConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get packetFilterConfigInput() {
    return this._packetFilterConfig.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      instance_id: cdktf.stringToTerraform(this._instanceId),
      packet_filter_config: antiddosPacketFilterConfigPacketFilterConfigToTerraform(this._packetFilterConfig.internalValue),
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
      instance_id: {
        value: cdktf.stringToHclTerraform(this._instanceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      packet_filter_config: {
        value: antiddosPacketFilterConfigPacketFilterConfigToHclTerraform(this._packetFilterConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AntiddosPacketFilterConfigPacketFilterConfigList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
