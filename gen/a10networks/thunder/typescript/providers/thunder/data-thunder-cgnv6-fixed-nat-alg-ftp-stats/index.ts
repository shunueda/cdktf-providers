// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_fixed_nat_alg_ftp_stats
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderCgnv6FixedNatAlgFtpStatsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_fixed_nat_alg_ftp_stats#id DataThunderCgnv6FixedNatAlgFtpStats#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * stats block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_fixed_nat_alg_ftp_stats#stats DataThunderCgnv6FixedNatAlgFtpStats#stats}
  */
  readonly stats?: DataThunderCgnv6FixedNatAlgFtpStatsStats;
}
export interface DataThunderCgnv6FixedNatAlgFtpStatsStats {
  /**
  * EPRT Requests From Client
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_fixed_nat_alg_ftp_stats#eprt_requests DataThunderCgnv6FixedNatAlgFtpStats#eprt_requests}
  */
  readonly eprtRequests?: number;
  /**
  * EPSV Replies From Server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_fixed_nat_alg_ftp_stats#epsv_replies DataThunderCgnv6FixedNatAlgFtpStats#epsv_replies}
  */
  readonly epsvReplies?: number;
  /**
  * LPRT Requests From Client
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_fixed_nat_alg_ftp_stats#lprt_requests DataThunderCgnv6FixedNatAlgFtpStats#lprt_requests}
  */
  readonly lprtRequests?: number;
  /**
  * LPSV Replies From Server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_fixed_nat_alg_ftp_stats#lpsv_replies DataThunderCgnv6FixedNatAlgFtpStats#lpsv_replies}
  */
  readonly lpsvReplies?: number;
  /**
  * PASV Replies From Server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_fixed_nat_alg_ftp_stats#pasv_replies DataThunderCgnv6FixedNatAlgFtpStats#pasv_replies}
  */
  readonly pasvReplies?: number;
  /**
  * PORT Requests From Client
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_fixed_nat_alg_ftp_stats#port_requests DataThunderCgnv6FixedNatAlgFtpStats#port_requests}
  */
  readonly portRequests?: number;
}

export function dataThunderCgnv6FixedNatAlgFtpStatsStatsToTerraform(struct?: DataThunderCgnv6FixedNatAlgFtpStatsStatsOutputReference | DataThunderCgnv6FixedNatAlgFtpStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    eprt_requests: cdktf.numberToTerraform(struct!.eprtRequests),
    epsv_replies: cdktf.numberToTerraform(struct!.epsvReplies),
    lprt_requests: cdktf.numberToTerraform(struct!.lprtRequests),
    lpsv_replies: cdktf.numberToTerraform(struct!.lpsvReplies),
    pasv_replies: cdktf.numberToTerraform(struct!.pasvReplies),
    port_requests: cdktf.numberToTerraform(struct!.portRequests),
  }
}


export function dataThunderCgnv6FixedNatAlgFtpStatsStatsToHclTerraform(struct?: DataThunderCgnv6FixedNatAlgFtpStatsStatsOutputReference | DataThunderCgnv6FixedNatAlgFtpStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    eprt_requests: {
      value: cdktf.numberToHclTerraform(struct!.eprtRequests),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    epsv_replies: {
      value: cdktf.numberToHclTerraform(struct!.epsvReplies),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    lprt_requests: {
      value: cdktf.numberToHclTerraform(struct!.lprtRequests),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    lpsv_replies: {
      value: cdktf.numberToHclTerraform(struct!.lpsvReplies),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pasv_replies: {
      value: cdktf.numberToHclTerraform(struct!.pasvReplies),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    port_requests: {
      value: cdktf.numberToHclTerraform(struct!.portRequests),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderCgnv6FixedNatAlgFtpStatsStatsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderCgnv6FixedNatAlgFtpStatsStats | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._eprtRequests !== undefined) {
      hasAnyValues = true;
      internalValueResult.eprtRequests = this._eprtRequests;
    }
    if (this._epsvReplies !== undefined) {
      hasAnyValues = true;
      internalValueResult.epsvReplies = this._epsvReplies;
    }
    if (this._lprtRequests !== undefined) {
      hasAnyValues = true;
      internalValueResult.lprtRequests = this._lprtRequests;
    }
    if (this._lpsvReplies !== undefined) {
      hasAnyValues = true;
      internalValueResult.lpsvReplies = this._lpsvReplies;
    }
    if (this._pasvReplies !== undefined) {
      hasAnyValues = true;
      internalValueResult.pasvReplies = this._pasvReplies;
    }
    if (this._portRequests !== undefined) {
      hasAnyValues = true;
      internalValueResult.portRequests = this._portRequests;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderCgnv6FixedNatAlgFtpStatsStats | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._eprtRequests = undefined;
      this._epsvReplies = undefined;
      this._lprtRequests = undefined;
      this._lpsvReplies = undefined;
      this._pasvReplies = undefined;
      this._portRequests = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._eprtRequests = value.eprtRequests;
      this._epsvReplies = value.epsvReplies;
      this._lprtRequests = value.lprtRequests;
      this._lpsvReplies = value.lpsvReplies;
      this._pasvReplies = value.pasvReplies;
      this._portRequests = value.portRequests;
    }
  }

  // eprt_requests - computed: false, optional: true, required: false
  private _eprtRequests?: number; 
  public get eprtRequests() {
    return this.getNumberAttribute('eprt_requests');
  }
  public set eprtRequests(value: number) {
    this._eprtRequests = value;
  }
  public resetEprtRequests() {
    this._eprtRequests = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eprtRequestsInput() {
    return this._eprtRequests;
  }

  // epsv_replies - computed: false, optional: true, required: false
  private _epsvReplies?: number; 
  public get epsvReplies() {
    return this.getNumberAttribute('epsv_replies');
  }
  public set epsvReplies(value: number) {
    this._epsvReplies = value;
  }
  public resetEpsvReplies() {
    this._epsvReplies = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get epsvRepliesInput() {
    return this._epsvReplies;
  }

  // lprt_requests - computed: false, optional: true, required: false
  private _lprtRequests?: number; 
  public get lprtRequests() {
    return this.getNumberAttribute('lprt_requests');
  }
  public set lprtRequests(value: number) {
    this._lprtRequests = value;
  }
  public resetLprtRequests() {
    this._lprtRequests = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lprtRequestsInput() {
    return this._lprtRequests;
  }

  // lpsv_replies - computed: false, optional: true, required: false
  private _lpsvReplies?: number; 
  public get lpsvReplies() {
    return this.getNumberAttribute('lpsv_replies');
  }
  public set lpsvReplies(value: number) {
    this._lpsvReplies = value;
  }
  public resetLpsvReplies() {
    this._lpsvReplies = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lpsvRepliesInput() {
    return this._lpsvReplies;
  }

  // pasv_replies - computed: false, optional: true, required: false
  private _pasvReplies?: number; 
  public get pasvReplies() {
    return this.getNumberAttribute('pasv_replies');
  }
  public set pasvReplies(value: number) {
    this._pasvReplies = value;
  }
  public resetPasvReplies() {
    this._pasvReplies = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pasvRepliesInput() {
    return this._pasvReplies;
  }

  // port_requests - computed: false, optional: true, required: false
  private _portRequests?: number; 
  public get portRequests() {
    return this.getNumberAttribute('port_requests');
  }
  public set portRequests(value: number) {
    this._portRequests = value;
  }
  public resetPortRequests() {
    this._portRequests = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portRequestsInput() {
    return this._portRequests;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_fixed_nat_alg_ftp_stats thunder_cgnv6_fixed_nat_alg_ftp_stats}
*/
export class DataThunderCgnv6FixedNatAlgFtpStats extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_cgnv6_fixed_nat_alg_ftp_stats";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderCgnv6FixedNatAlgFtpStats resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderCgnv6FixedNatAlgFtpStats to import
  * @param importFromId The id of the existing DataThunderCgnv6FixedNatAlgFtpStats that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_fixed_nat_alg_ftp_stats#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderCgnv6FixedNatAlgFtpStats to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_cgnv6_fixed_nat_alg_ftp_stats", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_fixed_nat_alg_ftp_stats thunder_cgnv6_fixed_nat_alg_ftp_stats} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderCgnv6FixedNatAlgFtpStatsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderCgnv6FixedNatAlgFtpStatsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_cgnv6_fixed_nat_alg_ftp_stats',
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
  private _stats = new DataThunderCgnv6FixedNatAlgFtpStatsStatsOutputReference(this, "stats");
  public get stats() {
    return this._stats;
  }
  public putStats(value: DataThunderCgnv6FixedNatAlgFtpStatsStats) {
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
      stats: dataThunderCgnv6FixedNatAlgFtpStatsStatsToTerraform(this._stats.internalValue),
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
        value: dataThunderCgnv6FixedNatAlgFtpStatsStatsToHclTerraform(this._stats.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderCgnv6FixedNatAlgFtpStatsStatsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
