// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_tcp_syn_cookie_stats
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderFwTcpSynCookieStatsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_tcp_syn_cookie_stats#id DataThunderFwTcpSynCookieStats#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * stats block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_tcp_syn_cookie_stats#stats DataThunderFwTcpSynCookieStats#stats}
  */
  readonly stats?: DataThunderFwTcpSynCookieStatsStats;
}
export interface DataThunderFwTcpSynCookieStatsStats {
  /**
  * SYN cookie SYN ACK sent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_tcp_syn_cookie_stats#syn_ack_sent DataThunderFwTcpSynCookieStats#syn_ack_sent}
  */
  readonly synAckSent?: number;
  /**
  * SYN cookie verification failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_tcp_syn_cookie_stats#verification_failed DataThunderFwTcpSynCookieStats#verification_failed}
  */
  readonly verificationFailed?: number;
  /**
  * SYN cookie verification passed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_tcp_syn_cookie_stats#verification_passed DataThunderFwTcpSynCookieStats#verification_passed}
  */
  readonly verificationPassed?: number;
}

export function dataThunderFwTcpSynCookieStatsStatsToTerraform(struct?: DataThunderFwTcpSynCookieStatsStatsOutputReference | DataThunderFwTcpSynCookieStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    syn_ack_sent: cdktf.numberToTerraform(struct!.synAckSent),
    verification_failed: cdktf.numberToTerraform(struct!.verificationFailed),
    verification_passed: cdktf.numberToTerraform(struct!.verificationPassed),
  }
}


export function dataThunderFwTcpSynCookieStatsStatsToHclTerraform(struct?: DataThunderFwTcpSynCookieStatsStatsOutputReference | DataThunderFwTcpSynCookieStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    syn_ack_sent: {
      value: cdktf.numberToHclTerraform(struct!.synAckSent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    verification_failed: {
      value: cdktf.numberToHclTerraform(struct!.verificationFailed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    verification_passed: {
      value: cdktf.numberToHclTerraform(struct!.verificationPassed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderFwTcpSynCookieStatsStatsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderFwTcpSynCookieStatsStats | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._synAckSent !== undefined) {
      hasAnyValues = true;
      internalValueResult.synAckSent = this._synAckSent;
    }
    if (this._verificationFailed !== undefined) {
      hasAnyValues = true;
      internalValueResult.verificationFailed = this._verificationFailed;
    }
    if (this._verificationPassed !== undefined) {
      hasAnyValues = true;
      internalValueResult.verificationPassed = this._verificationPassed;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderFwTcpSynCookieStatsStats | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._synAckSent = undefined;
      this._verificationFailed = undefined;
      this._verificationPassed = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._synAckSent = value.synAckSent;
      this._verificationFailed = value.verificationFailed;
      this._verificationPassed = value.verificationPassed;
    }
  }

  // syn_ack_sent - computed: false, optional: true, required: false
  private _synAckSent?: number; 
  public get synAckSent() {
    return this.getNumberAttribute('syn_ack_sent');
  }
  public set synAckSent(value: number) {
    this._synAckSent = value;
  }
  public resetSynAckSent() {
    this._synAckSent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get synAckSentInput() {
    return this._synAckSent;
  }

  // verification_failed - computed: false, optional: true, required: false
  private _verificationFailed?: number; 
  public get verificationFailed() {
    return this.getNumberAttribute('verification_failed');
  }
  public set verificationFailed(value: number) {
    this._verificationFailed = value;
  }
  public resetVerificationFailed() {
    this._verificationFailed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verificationFailedInput() {
    return this._verificationFailed;
  }

  // verification_passed - computed: false, optional: true, required: false
  private _verificationPassed?: number; 
  public get verificationPassed() {
    return this.getNumberAttribute('verification_passed');
  }
  public set verificationPassed(value: number) {
    this._verificationPassed = value;
  }
  public resetVerificationPassed() {
    this._verificationPassed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verificationPassedInput() {
    return this._verificationPassed;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_tcp_syn_cookie_stats thunder_fw_tcp_syn_cookie_stats}
*/
export class DataThunderFwTcpSynCookieStats extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_fw_tcp_syn_cookie_stats";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderFwTcpSynCookieStats resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderFwTcpSynCookieStats to import
  * @param importFromId The id of the existing DataThunderFwTcpSynCookieStats that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_tcp_syn_cookie_stats#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderFwTcpSynCookieStats to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_fw_tcp_syn_cookie_stats", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_tcp_syn_cookie_stats thunder_fw_tcp_syn_cookie_stats} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderFwTcpSynCookieStatsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderFwTcpSynCookieStatsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_fw_tcp_syn_cookie_stats',
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
  private _stats = new DataThunderFwTcpSynCookieStatsStatsOutputReference(this, "stats");
  public get stats() {
    return this._stats;
  }
  public putStats(value: DataThunderFwTcpSynCookieStatsStats) {
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
      stats: dataThunderFwTcpSynCookieStatsStatsToTerraform(this._stats.internalValue),
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
        value: dataThunderFwTcpSynCookieStatsStatsToHclTerraform(this._stats.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderFwTcpSynCookieStatsStatsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
