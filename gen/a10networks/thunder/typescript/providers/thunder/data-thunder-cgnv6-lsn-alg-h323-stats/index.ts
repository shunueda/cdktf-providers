// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_lsn_alg_h323_stats
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderCgnv6LsnAlgH323StatsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_lsn_alg_h323_stats#id DataThunderCgnv6LsnAlgH323Stats#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * stats block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_lsn_alg_h323_stats#stats DataThunderCgnv6LsnAlgH323Stats#stats}
  */
  readonly stats?: DataThunderCgnv6LsnAlgH323StatsStats;
}
export interface DataThunderCgnv6LsnAlgH323StatsStats {
  /**
  * H323 FastStart
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_lsn_alg_h323_stats#fast_start DataThunderCgnv6LsnAlgH323Stats#fast_start}
  */
  readonly fastStart?: number;
  /**
  * H323 H225 Call Signaling Message
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_lsn_alg_h323_stats#h225cs_message DataThunderCgnv6LsnAlgH323Stats#h225cs_message}
  */
  readonly h225CsMessage?: number;
  /**
  * H323 H225 RAS Message
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_lsn_alg_h323_stats#h225ras_message DataThunderCgnv6LsnAlgH323Stats#h225ras_message}
  */
  readonly h225RasMessage?: number;
  /**
  * H323 H245 Tunnelled Message
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_lsn_alg_h323_stats#h245_tunneled DataThunderCgnv6LsnAlgH323Stats#h245_tunneled}
  */
  readonly h245Tunneled?: number;
  /**
  * H323 H245 Media Control Message
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_lsn_alg_h323_stats#h245ctl_message DataThunderCgnv6LsnAlgH323Stats#h245ctl_message}
  */
  readonly h245CtlMessage?: number;
  /**
  * Message Parse Error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_lsn_alg_h323_stats#parse_error DataThunderCgnv6LsnAlgH323Stats#parse_error}
  */
  readonly parseError?: number;
  /**
  * TCP Out-of-Order Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_lsn_alg_h323_stats#tcp_out_of_order_drop DataThunderCgnv6LsnAlgH323Stats#tcp_out_of_order_drop}
  */
  readonly tcpOutOfOrderDrop?: number;
}

export function dataThunderCgnv6LsnAlgH323StatsStatsToTerraform(struct?: DataThunderCgnv6LsnAlgH323StatsStatsOutputReference | DataThunderCgnv6LsnAlgH323StatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fast_start: cdktf.numberToTerraform(struct!.fastStart),
    h225cs_message: cdktf.numberToTerraform(struct!.h225CsMessage),
    h225ras_message: cdktf.numberToTerraform(struct!.h225RasMessage),
    h245_tunneled: cdktf.numberToTerraform(struct!.h245Tunneled),
    h245ctl_message: cdktf.numberToTerraform(struct!.h245CtlMessage),
    parse_error: cdktf.numberToTerraform(struct!.parseError),
    tcp_out_of_order_drop: cdktf.numberToTerraform(struct!.tcpOutOfOrderDrop),
  }
}


export function dataThunderCgnv6LsnAlgH323StatsStatsToHclTerraform(struct?: DataThunderCgnv6LsnAlgH323StatsStatsOutputReference | DataThunderCgnv6LsnAlgH323StatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fast_start: {
      value: cdktf.numberToHclTerraform(struct!.fastStart),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    h225cs_message: {
      value: cdktf.numberToHclTerraform(struct!.h225CsMessage),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    h225ras_message: {
      value: cdktf.numberToHclTerraform(struct!.h225RasMessage),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    h245_tunneled: {
      value: cdktf.numberToHclTerraform(struct!.h245Tunneled),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    h245ctl_message: {
      value: cdktf.numberToHclTerraform(struct!.h245CtlMessage),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    parse_error: {
      value: cdktf.numberToHclTerraform(struct!.parseError),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_out_of_order_drop: {
      value: cdktf.numberToHclTerraform(struct!.tcpOutOfOrderDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderCgnv6LsnAlgH323StatsStatsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderCgnv6LsnAlgH323StatsStats | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fastStart !== undefined) {
      hasAnyValues = true;
      internalValueResult.fastStart = this._fastStart;
    }
    if (this._h225CsMessage !== undefined) {
      hasAnyValues = true;
      internalValueResult.h225CsMessage = this._h225CsMessage;
    }
    if (this._h225RasMessage !== undefined) {
      hasAnyValues = true;
      internalValueResult.h225RasMessage = this._h225RasMessage;
    }
    if (this._h245Tunneled !== undefined) {
      hasAnyValues = true;
      internalValueResult.h245Tunneled = this._h245Tunneled;
    }
    if (this._h245CtlMessage !== undefined) {
      hasAnyValues = true;
      internalValueResult.h245CtlMessage = this._h245CtlMessage;
    }
    if (this._parseError !== undefined) {
      hasAnyValues = true;
      internalValueResult.parseError = this._parseError;
    }
    if (this._tcpOutOfOrderDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpOutOfOrderDrop = this._tcpOutOfOrderDrop;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderCgnv6LsnAlgH323StatsStats | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._fastStart = undefined;
      this._h225CsMessage = undefined;
      this._h225RasMessage = undefined;
      this._h245Tunneled = undefined;
      this._h245CtlMessage = undefined;
      this._parseError = undefined;
      this._tcpOutOfOrderDrop = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._fastStart = value.fastStart;
      this._h225CsMessage = value.h225CsMessage;
      this._h225RasMessage = value.h225RasMessage;
      this._h245Tunneled = value.h245Tunneled;
      this._h245CtlMessage = value.h245CtlMessage;
      this._parseError = value.parseError;
      this._tcpOutOfOrderDrop = value.tcpOutOfOrderDrop;
    }
  }

  // fast_start - computed: false, optional: true, required: false
  private _fastStart?: number; 
  public get fastStart() {
    return this.getNumberAttribute('fast_start');
  }
  public set fastStart(value: number) {
    this._fastStart = value;
  }
  public resetFastStart() {
    this._fastStart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fastStartInput() {
    return this._fastStart;
  }

  // h225cs_message - computed: false, optional: true, required: false
  private _h225CsMessage?: number; 
  public get h225CsMessage() {
    return this.getNumberAttribute('h225cs_message');
  }
  public set h225CsMessage(value: number) {
    this._h225CsMessage = value;
  }
  public resetH225CsMessage() {
    this._h225CsMessage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get h225CsMessageInput() {
    return this._h225CsMessage;
  }

  // h225ras_message - computed: false, optional: true, required: false
  private _h225RasMessage?: number; 
  public get h225RasMessage() {
    return this.getNumberAttribute('h225ras_message');
  }
  public set h225RasMessage(value: number) {
    this._h225RasMessage = value;
  }
  public resetH225RasMessage() {
    this._h225RasMessage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get h225RasMessageInput() {
    return this._h225RasMessage;
  }

  // h245_tunneled - computed: false, optional: true, required: false
  private _h245Tunneled?: number; 
  public get h245Tunneled() {
    return this.getNumberAttribute('h245_tunneled');
  }
  public set h245Tunneled(value: number) {
    this._h245Tunneled = value;
  }
  public resetH245Tunneled() {
    this._h245Tunneled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get h245TunneledInput() {
    return this._h245Tunneled;
  }

  // h245ctl_message - computed: false, optional: true, required: false
  private _h245CtlMessage?: number; 
  public get h245CtlMessage() {
    return this.getNumberAttribute('h245ctl_message');
  }
  public set h245CtlMessage(value: number) {
    this._h245CtlMessage = value;
  }
  public resetH245CtlMessage() {
    this._h245CtlMessage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get h245CtlMessageInput() {
    return this._h245CtlMessage;
  }

  // parse_error - computed: false, optional: true, required: false
  private _parseError?: number; 
  public get parseError() {
    return this.getNumberAttribute('parse_error');
  }
  public set parseError(value: number) {
    this._parseError = value;
  }
  public resetParseError() {
    this._parseError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parseErrorInput() {
    return this._parseError;
  }

  // tcp_out_of_order_drop - computed: false, optional: true, required: false
  private _tcpOutOfOrderDrop?: number; 
  public get tcpOutOfOrderDrop() {
    return this.getNumberAttribute('tcp_out_of_order_drop');
  }
  public set tcpOutOfOrderDrop(value: number) {
    this._tcpOutOfOrderDrop = value;
  }
  public resetTcpOutOfOrderDrop() {
    this._tcpOutOfOrderDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpOutOfOrderDropInput() {
    return this._tcpOutOfOrderDrop;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_lsn_alg_h323_stats thunder_cgnv6_lsn_alg_h323_stats}
*/
export class DataThunderCgnv6LsnAlgH323Stats extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_cgnv6_lsn_alg_h323_stats";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderCgnv6LsnAlgH323Stats resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderCgnv6LsnAlgH323Stats to import
  * @param importFromId The id of the existing DataThunderCgnv6LsnAlgH323Stats that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_lsn_alg_h323_stats#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderCgnv6LsnAlgH323Stats to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_cgnv6_lsn_alg_h323_stats", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_lsn_alg_h323_stats thunder_cgnv6_lsn_alg_h323_stats} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderCgnv6LsnAlgH323StatsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderCgnv6LsnAlgH323StatsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_cgnv6_lsn_alg_h323_stats',
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
    this._stats.internalValue = config.stats;
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

  // stats - computed: false, optional: true, required: false
  private _stats = new DataThunderCgnv6LsnAlgH323StatsStatsOutputReference(this, "stats");
  public get stats() {
    return this._stats;
  }
  public putStats(value: DataThunderCgnv6LsnAlgH323StatsStats) {
    this._stats.internalValue = value;
  }
  public resetStats() {
    this._stats.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statsInput() {
    return this._stats.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      stats: dataThunderCgnv6LsnAlgH323StatsStatsToTerraform(this._stats.internalValue),
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
      stats: {
        value: dataThunderCgnv6LsnAlgH323StatsStatsToHclTerraform(this._stats.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderCgnv6LsnAlgH323StatsStatsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
