// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ftp_ctl_stats
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderSlbFtpCtlStatsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ftp_ctl_stats#id DataThunderSlbFtpCtlStats#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * stats block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ftp_ctl_stats#stats DataThunderSlbFtpCtlStats#stats}
  */
  readonly stats?: DataThunderSlbFtpCtlStatsStats;
}
export interface DataThunderSlbFtpCtlStatsStats {
  /**
  * Total PASV helper sessions
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ftp_ctl_stats#alg_pasv_helper_created DataThunderSlbFtpCtlStats#alg_pasv_helper_created}
  */
  readonly algPasvHelperCreated?: number;
  /**
  * PASV helper freed unused
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ftp_ctl_stats#alg_pasv_helper_freed_unused DataThunderSlbFtpCtlStats#alg_pasv_helper_freed_unused}
  */
  readonly algPasvHelperFreedUnused?: number;
  /**
  * Total ALG packets
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ftp_ctl_stats#alg_pkts_num DataThunderSlbFtpCtlStats#alg_pkts_num}
  */
  readonly algPktsNum?: number;
  /**
  * ALG packets rexmitted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ftp_ctl_stats#alg_pkts_xmitted_num DataThunderSlbFtpCtlStats#alg_pkts_xmitted_num}
  */
  readonly algPktsXmittedNum?: number;
  /**
  * Total PORT helper sessions
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ftp_ctl_stats#alg_port_helper_created DataThunderSlbFtpCtlStats#alg_port_helper_created}
  */
  readonly algPortHelperCreated?: number;
  /**
  * PORT helper freed unused
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ftp_ctl_stats#alg_port_helper_freed_unused DataThunderSlbFtpCtlStats#alg_port_helper_freed_unused}
  */
  readonly algPortHelperFreedUnused?: number;
  /**
  * PORT helper NAT free
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ftp_ctl_stats#alg_port_helper_nat_free DataThunderSlbFtpCtlStats#alg_port_helper_nat_free}
  */
  readonly algPortHelperNatFree?: number;
  /**
  * Total Control Sessions
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ftp_ctl_stats#sessions_num DataThunderSlbFtpCtlStats#sessions_num}
  */
  readonly sessionsNum?: number;
}

export function dataThunderSlbFtpCtlStatsStatsToTerraform(struct?: DataThunderSlbFtpCtlStatsStatsOutputReference | DataThunderSlbFtpCtlStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    alg_pasv_helper_created: cdktf.numberToTerraform(struct!.algPasvHelperCreated),
    alg_pasv_helper_freed_unused: cdktf.numberToTerraform(struct!.algPasvHelperFreedUnused),
    alg_pkts_num: cdktf.numberToTerraform(struct!.algPktsNum),
    alg_pkts_xmitted_num: cdktf.numberToTerraform(struct!.algPktsXmittedNum),
    alg_port_helper_created: cdktf.numberToTerraform(struct!.algPortHelperCreated),
    alg_port_helper_freed_unused: cdktf.numberToTerraform(struct!.algPortHelperFreedUnused),
    alg_port_helper_nat_free: cdktf.numberToTerraform(struct!.algPortHelperNatFree),
    sessions_num: cdktf.numberToTerraform(struct!.sessionsNum),
  }
}


export function dataThunderSlbFtpCtlStatsStatsToHclTerraform(struct?: DataThunderSlbFtpCtlStatsStatsOutputReference | DataThunderSlbFtpCtlStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    alg_pasv_helper_created: {
      value: cdktf.numberToHclTerraform(struct!.algPasvHelperCreated),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    alg_pasv_helper_freed_unused: {
      value: cdktf.numberToHclTerraform(struct!.algPasvHelperFreedUnused),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    alg_pkts_num: {
      value: cdktf.numberToHclTerraform(struct!.algPktsNum),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    alg_pkts_xmitted_num: {
      value: cdktf.numberToHclTerraform(struct!.algPktsXmittedNum),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    alg_port_helper_created: {
      value: cdktf.numberToHclTerraform(struct!.algPortHelperCreated),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    alg_port_helper_freed_unused: {
      value: cdktf.numberToHclTerraform(struct!.algPortHelperFreedUnused),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    alg_port_helper_nat_free: {
      value: cdktf.numberToHclTerraform(struct!.algPortHelperNatFree),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sessions_num: {
      value: cdktf.numberToHclTerraform(struct!.sessionsNum),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderSlbFtpCtlStatsStatsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderSlbFtpCtlStatsStats | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._algPasvHelperCreated !== undefined) {
      hasAnyValues = true;
      internalValueResult.algPasvHelperCreated = this._algPasvHelperCreated;
    }
    if (this._algPasvHelperFreedUnused !== undefined) {
      hasAnyValues = true;
      internalValueResult.algPasvHelperFreedUnused = this._algPasvHelperFreedUnused;
    }
    if (this._algPktsNum !== undefined) {
      hasAnyValues = true;
      internalValueResult.algPktsNum = this._algPktsNum;
    }
    if (this._algPktsXmittedNum !== undefined) {
      hasAnyValues = true;
      internalValueResult.algPktsXmittedNum = this._algPktsXmittedNum;
    }
    if (this._algPortHelperCreated !== undefined) {
      hasAnyValues = true;
      internalValueResult.algPortHelperCreated = this._algPortHelperCreated;
    }
    if (this._algPortHelperFreedUnused !== undefined) {
      hasAnyValues = true;
      internalValueResult.algPortHelperFreedUnused = this._algPortHelperFreedUnused;
    }
    if (this._algPortHelperNatFree !== undefined) {
      hasAnyValues = true;
      internalValueResult.algPortHelperNatFree = this._algPortHelperNatFree;
    }
    if (this._sessionsNum !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessionsNum = this._sessionsNum;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderSlbFtpCtlStatsStats | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._algPasvHelperCreated = undefined;
      this._algPasvHelperFreedUnused = undefined;
      this._algPktsNum = undefined;
      this._algPktsXmittedNum = undefined;
      this._algPortHelperCreated = undefined;
      this._algPortHelperFreedUnused = undefined;
      this._algPortHelperNatFree = undefined;
      this._sessionsNum = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._algPasvHelperCreated = value.algPasvHelperCreated;
      this._algPasvHelperFreedUnused = value.algPasvHelperFreedUnused;
      this._algPktsNum = value.algPktsNum;
      this._algPktsXmittedNum = value.algPktsXmittedNum;
      this._algPortHelperCreated = value.algPortHelperCreated;
      this._algPortHelperFreedUnused = value.algPortHelperFreedUnused;
      this._algPortHelperNatFree = value.algPortHelperNatFree;
      this._sessionsNum = value.sessionsNum;
    }
  }

  // alg_pasv_helper_created - computed: false, optional: true, required: false
  private _algPasvHelperCreated?: number; 
  public get algPasvHelperCreated() {
    return this.getNumberAttribute('alg_pasv_helper_created');
  }
  public set algPasvHelperCreated(value: number) {
    this._algPasvHelperCreated = value;
  }
  public resetAlgPasvHelperCreated() {
    this._algPasvHelperCreated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get algPasvHelperCreatedInput() {
    return this._algPasvHelperCreated;
  }

  // alg_pasv_helper_freed_unused - computed: false, optional: true, required: false
  private _algPasvHelperFreedUnused?: number; 
  public get algPasvHelperFreedUnused() {
    return this.getNumberAttribute('alg_pasv_helper_freed_unused');
  }
  public set algPasvHelperFreedUnused(value: number) {
    this._algPasvHelperFreedUnused = value;
  }
  public resetAlgPasvHelperFreedUnused() {
    this._algPasvHelperFreedUnused = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get algPasvHelperFreedUnusedInput() {
    return this._algPasvHelperFreedUnused;
  }

  // alg_pkts_num - computed: false, optional: true, required: false
  private _algPktsNum?: number; 
  public get algPktsNum() {
    return this.getNumberAttribute('alg_pkts_num');
  }
  public set algPktsNum(value: number) {
    this._algPktsNum = value;
  }
  public resetAlgPktsNum() {
    this._algPktsNum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get algPktsNumInput() {
    return this._algPktsNum;
  }

  // alg_pkts_xmitted_num - computed: false, optional: true, required: false
  private _algPktsXmittedNum?: number; 
  public get algPktsXmittedNum() {
    return this.getNumberAttribute('alg_pkts_xmitted_num');
  }
  public set algPktsXmittedNum(value: number) {
    this._algPktsXmittedNum = value;
  }
  public resetAlgPktsXmittedNum() {
    this._algPktsXmittedNum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get algPktsXmittedNumInput() {
    return this._algPktsXmittedNum;
  }

  // alg_port_helper_created - computed: false, optional: true, required: false
  private _algPortHelperCreated?: number; 
  public get algPortHelperCreated() {
    return this.getNumberAttribute('alg_port_helper_created');
  }
  public set algPortHelperCreated(value: number) {
    this._algPortHelperCreated = value;
  }
  public resetAlgPortHelperCreated() {
    this._algPortHelperCreated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get algPortHelperCreatedInput() {
    return this._algPortHelperCreated;
  }

  // alg_port_helper_freed_unused - computed: false, optional: true, required: false
  private _algPortHelperFreedUnused?: number; 
  public get algPortHelperFreedUnused() {
    return this.getNumberAttribute('alg_port_helper_freed_unused');
  }
  public set algPortHelperFreedUnused(value: number) {
    this._algPortHelperFreedUnused = value;
  }
  public resetAlgPortHelperFreedUnused() {
    this._algPortHelperFreedUnused = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get algPortHelperFreedUnusedInput() {
    return this._algPortHelperFreedUnused;
  }

  // alg_port_helper_nat_free - computed: false, optional: true, required: false
  private _algPortHelperNatFree?: number; 
  public get algPortHelperNatFree() {
    return this.getNumberAttribute('alg_port_helper_nat_free');
  }
  public set algPortHelperNatFree(value: number) {
    this._algPortHelperNatFree = value;
  }
  public resetAlgPortHelperNatFree() {
    this._algPortHelperNatFree = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get algPortHelperNatFreeInput() {
    return this._algPortHelperNatFree;
  }

  // sessions_num - computed: false, optional: true, required: false
  private _sessionsNum?: number; 
  public get sessionsNum() {
    return this.getNumberAttribute('sessions_num');
  }
  public set sessionsNum(value: number) {
    this._sessionsNum = value;
  }
  public resetSessionsNum() {
    this._sessionsNum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionsNumInput() {
    return this._sessionsNum;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ftp_ctl_stats thunder_slb_ftp_ctl_stats}
*/
export class DataThunderSlbFtpCtlStats extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_slb_ftp_ctl_stats";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderSlbFtpCtlStats resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderSlbFtpCtlStats to import
  * @param importFromId The id of the existing DataThunderSlbFtpCtlStats that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ftp_ctl_stats#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderSlbFtpCtlStats to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_slb_ftp_ctl_stats", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_ftp_ctl_stats thunder_slb_ftp_ctl_stats} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderSlbFtpCtlStatsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderSlbFtpCtlStatsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_slb_ftp_ctl_stats',
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
  private _stats = new DataThunderSlbFtpCtlStatsStatsOutputReference(this, "stats");
  public get stats() {
    return this._stats;
  }
  public putStats(value: DataThunderSlbFtpCtlStatsStats) {
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
      stats: dataThunderSlbFtpCtlStatsStatsToTerraform(this._stats.internalValue),
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
        value: dataThunderSlbFtpCtlStatsStatsToHclTerraform(this._stats.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderSlbFtpCtlStatsStatsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
