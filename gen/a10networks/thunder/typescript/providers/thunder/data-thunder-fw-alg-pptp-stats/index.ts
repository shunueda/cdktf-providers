// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_alg_pptp_stats
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderFwAlgPptpStatsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_alg_pptp_stats#id DataThunderFwAlgPptpStats#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * stats block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_alg_pptp_stats#stats DataThunderFwAlgPptpStats#stats}
  */
  readonly stats?: DataThunderFwAlgPptpStatsStats;
}
export interface DataThunderFwAlgPptpStatsStats {
  /**
  * Call ID Mismatch on Call Reply
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_alg_pptp_stats#call_reply_pns_call_id_mismatch DataThunderFwAlgPptpStats#call_reply_pns_call_id_mismatch}
  */
  readonly callReplyPnsCallIdMismatch?: number;
  /**
  * Call ID Mismatch on Call Request
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_alg_pptp_stats#call_req_pns_call_id_mismatch DataThunderFwAlgPptpStats#call_req_pns_call_id_mismatch}
  */
  readonly callReqPnsCallIdMismatch?: number;
  /**
  * Calls Established
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_alg_pptp_stats#calls_established DataThunderFwAlgPptpStats#calls_established}
  */
  readonly callsEstablished?: number;
  /**
  * GRE Session Created
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_alg_pptp_stats#gre_session_created DataThunderFwAlgPptpStats#gre_session_created}
  */
  readonly greSessionCreated?: number;
  /**
  * GRE Session Freed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_alg_pptp_stats#gre_session_freed DataThunderFwAlgPptpStats#gre_session_freed}
  */
  readonly greSessionFreed?: number;
}

export function dataThunderFwAlgPptpStatsStatsToTerraform(struct?: DataThunderFwAlgPptpStatsStatsOutputReference | DataThunderFwAlgPptpStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    call_reply_pns_call_id_mismatch: cdktf.numberToTerraform(struct!.callReplyPnsCallIdMismatch),
    call_req_pns_call_id_mismatch: cdktf.numberToTerraform(struct!.callReqPnsCallIdMismatch),
    calls_established: cdktf.numberToTerraform(struct!.callsEstablished),
    gre_session_created: cdktf.numberToTerraform(struct!.greSessionCreated),
    gre_session_freed: cdktf.numberToTerraform(struct!.greSessionFreed),
  }
}


export function dataThunderFwAlgPptpStatsStatsToHclTerraform(struct?: DataThunderFwAlgPptpStatsStatsOutputReference | DataThunderFwAlgPptpStatsStats): any {
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
    gre_session_created: {
      value: cdktf.numberToHclTerraform(struct!.greSessionCreated),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gre_session_freed: {
      value: cdktf.numberToHclTerraform(struct!.greSessionFreed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderFwAlgPptpStatsStatsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderFwAlgPptpStatsStats | undefined {
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
    if (this._greSessionCreated !== undefined) {
      hasAnyValues = true;
      internalValueResult.greSessionCreated = this._greSessionCreated;
    }
    if (this._greSessionFreed !== undefined) {
      hasAnyValues = true;
      internalValueResult.greSessionFreed = this._greSessionFreed;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderFwAlgPptpStatsStats | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._callReplyPnsCallIdMismatch = undefined;
      this._callReqPnsCallIdMismatch = undefined;
      this._callsEstablished = undefined;
      this._greSessionCreated = undefined;
      this._greSessionFreed = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._callReplyPnsCallIdMismatch = value.callReplyPnsCallIdMismatch;
      this._callReqPnsCallIdMismatch = value.callReqPnsCallIdMismatch;
      this._callsEstablished = value.callsEstablished;
      this._greSessionCreated = value.greSessionCreated;
      this._greSessionFreed = value.greSessionFreed;
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

  // gre_session_created - computed: false, optional: true, required: false
  private _greSessionCreated?: number; 
  public get greSessionCreated() {
    return this.getNumberAttribute('gre_session_created');
  }
  public set greSessionCreated(value: number) {
    this._greSessionCreated = value;
  }
  public resetGreSessionCreated() {
    this._greSessionCreated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get greSessionCreatedInput() {
    return this._greSessionCreated;
  }

  // gre_session_freed - computed: false, optional: true, required: false
  private _greSessionFreed?: number; 
  public get greSessionFreed() {
    return this.getNumberAttribute('gre_session_freed');
  }
  public set greSessionFreed(value: number) {
    this._greSessionFreed = value;
  }
  public resetGreSessionFreed() {
    this._greSessionFreed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get greSessionFreedInput() {
    return this._greSessionFreed;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_alg_pptp_stats thunder_fw_alg_pptp_stats}
*/
export class DataThunderFwAlgPptpStats extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_fw_alg_pptp_stats";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderFwAlgPptpStats resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderFwAlgPptpStats to import
  * @param importFromId The id of the existing DataThunderFwAlgPptpStats that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_alg_pptp_stats#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderFwAlgPptpStats to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_fw_alg_pptp_stats", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_alg_pptp_stats thunder_fw_alg_pptp_stats} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderFwAlgPptpStatsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderFwAlgPptpStatsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_fw_alg_pptp_stats',
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
  private _stats = new DataThunderFwAlgPptpStatsStatsOutputReference(this, "stats");
  public get stats() {
    return this._stats;
  }
  public putStats(value: DataThunderFwAlgPptpStatsStats) {
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
      stats: dataThunderFwAlgPptpStatsStatsToTerraform(this._stats.internalValue),
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
        value: dataThunderFwAlgPptpStatsStatsToHclTerraform(this._stats.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderFwAlgPptpStatsStatsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
