// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_fixed_nat_alg_pptp_stats
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderCgnv6FixedNatAlgPptpStatsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_fixed_nat_alg_pptp_stats#id DataThunderCgnv6FixedNatAlgPptpStats#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * stats block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_fixed_nat_alg_pptp_stats#stats DataThunderCgnv6FixedNatAlgPptpStats#stats}
  */
  readonly stats?: DataThunderCgnv6FixedNatAlgPptpStatsStats;
}
export interface DataThunderCgnv6FixedNatAlgPptpStatsStats {
  /**
  * Call ID Mismatch on Call Reply
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_fixed_nat_alg_pptp_stats#call_reply_pns_call_id_mismatch DataThunderCgnv6FixedNatAlgPptpStats#call_reply_pns_call_id_mismatch}
  */
  readonly callReplyPnsCallIdMismatch?: number;
  /**
  * Call ID Mismatch on Call Request
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_fixed_nat_alg_pptp_stats#call_req_pns_call_id_mismatch DataThunderCgnv6FixedNatAlgPptpStats#call_req_pns_call_id_mismatch}
  */
  readonly callReqPnsCallIdMismatch?: number;
  /**
  * Calls Established
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_fixed_nat_alg_pptp_stats#calls_established DataThunderCgnv6FixedNatAlgPptpStats#calls_established}
  */
  readonly callsEstablished?: number;
  /**
  * GRE Sessions Created
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_fixed_nat_alg_pptp_stats#gre_sessions_created DataThunderCgnv6FixedNatAlgPptpStats#gre_sessions_created}
  */
  readonly greSessionsCreated?: number;
  /**
  * GRE Sessions Freed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_fixed_nat_alg_pptp_stats#gre_sessions_freed DataThunderCgnv6FixedNatAlgPptpStats#gre_sessions_freed}
  */
  readonly greSessionsFreed?: number;
  /**
  * Mismatched PNS Call ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_fixed_nat_alg_pptp_stats#mismatched_pns_call_id DataThunderCgnv6FixedNatAlgPptpStats#mismatched_pns_call_id}
  */
  readonly mismatchedPnsCallId?: number;
  /**
  * No Matching GRE Session
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_fixed_nat_alg_pptp_stats#no_gre_session_match DataThunderCgnv6FixedNatAlgPptpStats#no_gre_session_match}
  */
  readonly noGreSessionMatch?: number;
}

export function dataThunderCgnv6FixedNatAlgPptpStatsStatsToTerraform(struct?: DataThunderCgnv6FixedNatAlgPptpStatsStatsOutputReference | DataThunderCgnv6FixedNatAlgPptpStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    call_reply_pns_call_id_mismatch: cdktf.numberToTerraform(struct!.callReplyPnsCallIdMismatch),
    call_req_pns_call_id_mismatch: cdktf.numberToTerraform(struct!.callReqPnsCallIdMismatch),
    calls_established: cdktf.numberToTerraform(struct!.callsEstablished),
    gre_sessions_created: cdktf.numberToTerraform(struct!.greSessionsCreated),
    gre_sessions_freed: cdktf.numberToTerraform(struct!.greSessionsFreed),
    mismatched_pns_call_id: cdktf.numberToTerraform(struct!.mismatchedPnsCallId),
    no_gre_session_match: cdktf.numberToTerraform(struct!.noGreSessionMatch),
  }
}


export function dataThunderCgnv6FixedNatAlgPptpStatsStatsToHclTerraform(struct?: DataThunderCgnv6FixedNatAlgPptpStatsStatsOutputReference | DataThunderCgnv6FixedNatAlgPptpStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    call_reply_pns_call_id_mismatch: {
      value: cdktf.numberToHclTerraform(struct!.callReplyPnsCallIdMismatch),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    call_req_pns_call_id_mismatch: {
      value: cdktf.numberToHclTerraform(struct!.callReqPnsCallIdMismatch),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    calls_established: {
      value: cdktf.numberToHclTerraform(struct!.callsEstablished),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gre_sessions_created: {
      value: cdktf.numberToHclTerraform(struct!.greSessionsCreated),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gre_sessions_freed: {
      value: cdktf.numberToHclTerraform(struct!.greSessionsFreed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mismatched_pns_call_id: {
      value: cdktf.numberToHclTerraform(struct!.mismatchedPnsCallId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    no_gre_session_match: {
      value: cdktf.numberToHclTerraform(struct!.noGreSessionMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderCgnv6FixedNatAlgPptpStatsStatsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderCgnv6FixedNatAlgPptpStatsStats | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._callReplyPnsCallIdMismatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.callReplyPnsCallIdMismatch = this._callReplyPnsCallIdMismatch;
    }
    if (this._callReqPnsCallIdMismatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.callReqPnsCallIdMismatch = this._callReqPnsCallIdMismatch;
    }
    if (this._callsEstablished !== undefined) {
      hasAnyValues = true;
      internalValueResult.callsEstablished = this._callsEstablished;
    }
    if (this._greSessionsCreated !== undefined) {
      hasAnyValues = true;
      internalValueResult.greSessionsCreated = this._greSessionsCreated;
    }
    if (this._greSessionsFreed !== undefined) {
      hasAnyValues = true;
      internalValueResult.greSessionsFreed = this._greSessionsFreed;
    }
    if (this._mismatchedPnsCallId !== undefined) {
      hasAnyValues = true;
      internalValueResult.mismatchedPnsCallId = this._mismatchedPnsCallId;
    }
    if (this._noGreSessionMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.noGreSessionMatch = this._noGreSessionMatch;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderCgnv6FixedNatAlgPptpStatsStats | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._callReplyPnsCallIdMismatch = undefined;
      this._callReqPnsCallIdMismatch = undefined;
      this._callsEstablished = undefined;
      this._greSessionsCreated = undefined;
      this._greSessionsFreed = undefined;
      this._mismatchedPnsCallId = undefined;
      this._noGreSessionMatch = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._callReplyPnsCallIdMismatch = value.callReplyPnsCallIdMismatch;
      this._callReqPnsCallIdMismatch = value.callReqPnsCallIdMismatch;
      this._callsEstablished = value.callsEstablished;
      this._greSessionsCreated = value.greSessionsCreated;
      this._greSessionsFreed = value.greSessionsFreed;
      this._mismatchedPnsCallId = value.mismatchedPnsCallId;
      this._noGreSessionMatch = value.noGreSessionMatch;
    }
  }

  // call_reply_pns_call_id_mismatch - computed: false, optional: true, required: false
  private _callReplyPnsCallIdMismatch?: number; 
  public get callReplyPnsCallIdMismatch() {
    return this.getNumberAttribute('call_reply_pns_call_id_mismatch');
  }
  public set callReplyPnsCallIdMismatch(value: number) {
    this._callReplyPnsCallIdMismatch = value;
  }
  public resetCallReplyPnsCallIdMismatch() {
    this._callReplyPnsCallIdMismatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get callReplyPnsCallIdMismatchInput() {
    return this._callReplyPnsCallIdMismatch;
  }

  // call_req_pns_call_id_mismatch - computed: false, optional: true, required: false
  private _callReqPnsCallIdMismatch?: number; 
  public get callReqPnsCallIdMismatch() {
    return this.getNumberAttribute('call_req_pns_call_id_mismatch');
  }
  public set callReqPnsCallIdMismatch(value: number) {
    this._callReqPnsCallIdMismatch = value;
  }
  public resetCallReqPnsCallIdMismatch() {
    this._callReqPnsCallIdMismatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get callReqPnsCallIdMismatchInput() {
    return this._callReqPnsCallIdMismatch;
  }

  // calls_established - computed: false, optional: true, required: false
  private _callsEstablished?: number; 
  public get callsEstablished() {
    return this.getNumberAttribute('calls_established');
  }
  public set callsEstablished(value: number) {
    this._callsEstablished = value;
  }
  public resetCallsEstablished() {
    this._callsEstablished = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get callsEstablishedInput() {
    return this._callsEstablished;
  }

  // gre_sessions_created - computed: false, optional: true, required: false
  private _greSessionsCreated?: number; 
  public get greSessionsCreated() {
    return this.getNumberAttribute('gre_sessions_created');
  }
  public set greSessionsCreated(value: number) {
    this._greSessionsCreated = value;
  }
  public resetGreSessionsCreated() {
    this._greSessionsCreated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get greSessionsCreatedInput() {
    return this._greSessionsCreated;
  }

  // gre_sessions_freed - computed: false, optional: true, required: false
  private _greSessionsFreed?: number; 
  public get greSessionsFreed() {
    return this.getNumberAttribute('gre_sessions_freed');
  }
  public set greSessionsFreed(value: number) {
    this._greSessionsFreed = value;
  }
  public resetGreSessionsFreed() {
    this._greSessionsFreed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get greSessionsFreedInput() {
    return this._greSessionsFreed;
  }

  // mismatched_pns_call_id - computed: false, optional: true, required: false
  private _mismatchedPnsCallId?: number; 
  public get mismatchedPnsCallId() {
    return this.getNumberAttribute('mismatched_pns_call_id');
  }
  public set mismatchedPnsCallId(value: number) {
    this._mismatchedPnsCallId = value;
  }
  public resetMismatchedPnsCallId() {
    this._mismatchedPnsCallId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mismatchedPnsCallIdInput() {
    return this._mismatchedPnsCallId;
  }

  // no_gre_session_match - computed: false, optional: true, required: false
  private _noGreSessionMatch?: number; 
  public get noGreSessionMatch() {
    return this.getNumberAttribute('no_gre_session_match');
  }
  public set noGreSessionMatch(value: number) {
    this._noGreSessionMatch = value;
  }
  public resetNoGreSessionMatch() {
    this._noGreSessionMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noGreSessionMatchInput() {
    return this._noGreSessionMatch;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_fixed_nat_alg_pptp_stats thunder_cgnv6_fixed_nat_alg_pptp_stats}
*/
export class DataThunderCgnv6FixedNatAlgPptpStats extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_cgnv6_fixed_nat_alg_pptp_stats";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderCgnv6FixedNatAlgPptpStats resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderCgnv6FixedNatAlgPptpStats to import
  * @param importFromId The id of the existing DataThunderCgnv6FixedNatAlgPptpStats that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_fixed_nat_alg_pptp_stats#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderCgnv6FixedNatAlgPptpStats to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_cgnv6_fixed_nat_alg_pptp_stats", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_fixed_nat_alg_pptp_stats thunder_cgnv6_fixed_nat_alg_pptp_stats} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderCgnv6FixedNatAlgPptpStatsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderCgnv6FixedNatAlgPptpStatsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_cgnv6_fixed_nat_alg_pptp_stats',
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
  private _stats = new DataThunderCgnv6FixedNatAlgPptpStatsStatsOutputReference(this, "stats");
  public get stats() {
    return this._stats;
  }
  public putStats(value: DataThunderCgnv6FixedNatAlgPptpStatsStats) {
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
      stats: dataThunderCgnv6FixedNatAlgPptpStatsStatsToTerraform(this._stats.internalValue),
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
        value: dataThunderCgnv6FixedNatAlgPptpStatsStatsToHclTerraform(this._stats.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderCgnv6FixedNatAlgPptpStatsStatsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
