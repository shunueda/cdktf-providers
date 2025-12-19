// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_ftp_data_stats
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderSlbFtpDataStatsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_ftp_data_stats#id DataThunderSlbFtpDataStats#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * stats block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_ftp_data_stats#stats DataThunderSlbFtpDataStats#stats}
  */
  readonly stats?: DataThunderSlbFtpDataStatsStats;
}
export interface DataThunderSlbFtpDataStatsStats {
  /**
  * Drop Data Port out of range
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_ftp_data_stats#port_out_of_range DataThunderSlbFtpDataStats#port_out_of_range}
  */
  readonly portOutOfRange?: number;
  /**
  * Total Data Sessions
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_ftp_data_stats#sessions_num DataThunderSlbFtpDataStats#sessions_num}
  */
  readonly sessionsNum?: number;
}

export function dataThunderSlbFtpDataStatsStatsToTerraform(struct?: DataThunderSlbFtpDataStatsStatsOutputReference | DataThunderSlbFtpDataStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    port_out_of_range: cdktf.numberToTerraform(struct!.portOutOfRange),
    sessions_num: cdktf.numberToTerraform(struct!.sessionsNum),
  }
}


export function dataThunderSlbFtpDataStatsStatsToHclTerraform(struct?: DataThunderSlbFtpDataStatsStatsOutputReference | DataThunderSlbFtpDataStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    port_out_of_range: {
      value: cdktf.numberToHclTerraform(struct!.portOutOfRange),
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

export class DataThunderSlbFtpDataStatsStatsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderSlbFtpDataStatsStats | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._portOutOfRange !== undefined) {
      hasAnyValues = true;
      internalValueResult.portOutOfRange = this._portOutOfRange;
    }
    if (this._sessionsNum !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessionsNum = this._sessionsNum;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderSlbFtpDataStatsStats | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._portOutOfRange = undefined;
      this._sessionsNum = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._portOutOfRange = value.portOutOfRange;
      this._sessionsNum = value.sessionsNum;
    }
  }

  // port_out_of_range - computed: false, optional: true, required: false
  private _portOutOfRange?: number; 
  public get portOutOfRange() {
    return this.getNumberAttribute('port_out_of_range');
  }
  public set portOutOfRange(value: number) {
    this._portOutOfRange = value;
  }
  public resetPortOutOfRange() {
    this._portOutOfRange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portOutOfRangeInput() {
    return this._portOutOfRange;
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
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_ftp_data_stats thunder_slb_ftp_data_stats}
*/
export class DataThunderSlbFtpDataStats extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_slb_ftp_data_stats";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderSlbFtpDataStats resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderSlbFtpDataStats to import
  * @param importFromId The id of the existing DataThunderSlbFtpDataStats that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_ftp_data_stats#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderSlbFtpDataStats to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_slb_ftp_data_stats", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_ftp_data_stats thunder_slb_ftp_data_stats} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderSlbFtpDataStatsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderSlbFtpDataStatsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_slb_ftp_data_stats',
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
  private _stats = new DataThunderSlbFtpDataStatsStatsOutputReference(this, "stats");
  public get stats() {
    return this._stats;
  }
  public putStats(value: DataThunderSlbFtpDataStatsStats) {
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
      stats: dataThunderSlbFtpDataStatsStatsToTerraform(this._stats.internalValue),
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
        value: dataThunderSlbFtpDataStatsStatsToHclTerraform(this._stats.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderSlbFtpDataStatsStatsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
