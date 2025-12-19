// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/controller_probe_info_stats
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderControllerProbeInfoStatsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/controller_probe_info_stats#id DataThunderControllerProbeInfoStats#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * stats block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/controller_probe_info_stats#stats DataThunderControllerProbeInfoStats#stats}
  */
  readonly stats?: DataThunderControllerProbeInfoStatsStats;
}
export interface DataThunderControllerProbeInfoStatsStats {
  /**
  * DATA_SHOWTECH samples failed to send to probe
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/controller_probe_info_stats#data_showtech_failed DataThunderControllerProbeInfoStats#data_showtech_failed}
  */
  readonly dataShowtechFailed?: number;
  /**
  * DATA_SHOWTECH samples sent successfully to probe
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/controller_probe_info_stats#data_showtech_sent DataThunderControllerProbeInfoStats#data_showtech_sent}
  */
  readonly dataShowtechSent?: number;
  /**
  * DATA_VARLOG samples failed to send to probe
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/controller_probe_info_stats#data_varlog_failed DataThunderControllerProbeInfoStats#data_varlog_failed}
  */
  readonly dataVarlogFailed?: number;
  /**
  * DATA_VARLOG samples sent successfully to probe
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/controller_probe_info_stats#data_varlog_sent DataThunderControllerProbeInfoStats#data_varlog_sent}
  */
  readonly dataVarlogSent?: number;
  /**
  * SSH_CONNECTION failures (ACOS-A10C)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/controller_probe_info_stats#ssh_connection_failed DataThunderControllerProbeInfoStats#ssh_connection_failed}
  */
  readonly sshConnectionFailed?: number;
}

export function dataThunderControllerProbeInfoStatsStatsToTerraform(struct?: DataThunderControllerProbeInfoStatsStatsOutputReference | DataThunderControllerProbeInfoStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    data_showtech_failed: cdktf.numberToTerraform(struct!.dataShowtechFailed),
    data_showtech_sent: cdktf.numberToTerraform(struct!.dataShowtechSent),
    data_varlog_failed: cdktf.numberToTerraform(struct!.dataVarlogFailed),
    data_varlog_sent: cdktf.numberToTerraform(struct!.dataVarlogSent),
    ssh_connection_failed: cdktf.numberToTerraform(struct!.sshConnectionFailed),
  }
}


export function dataThunderControllerProbeInfoStatsStatsToHclTerraform(struct?: DataThunderControllerProbeInfoStatsStatsOutputReference | DataThunderControllerProbeInfoStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    data_showtech_failed: {
      value: cdktf.numberToHclTerraform(struct!.dataShowtechFailed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    data_showtech_sent: {
      value: cdktf.numberToHclTerraform(struct!.dataShowtechSent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    data_varlog_failed: {
      value: cdktf.numberToHclTerraform(struct!.dataVarlogFailed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    data_varlog_sent: {
      value: cdktf.numberToHclTerraform(struct!.dataVarlogSent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ssh_connection_failed: {
      value: cdktf.numberToHclTerraform(struct!.sshConnectionFailed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderControllerProbeInfoStatsStatsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderControllerProbeInfoStatsStats | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dataShowtechFailed !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataShowtechFailed = this._dataShowtechFailed;
    }
    if (this._dataShowtechSent !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataShowtechSent = this._dataShowtechSent;
    }
    if (this._dataVarlogFailed !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataVarlogFailed = this._dataVarlogFailed;
    }
    if (this._dataVarlogSent !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataVarlogSent = this._dataVarlogSent;
    }
    if (this._sshConnectionFailed !== undefined) {
      hasAnyValues = true;
      internalValueResult.sshConnectionFailed = this._sshConnectionFailed;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderControllerProbeInfoStatsStats | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dataShowtechFailed = undefined;
      this._dataShowtechSent = undefined;
      this._dataVarlogFailed = undefined;
      this._dataVarlogSent = undefined;
      this._sshConnectionFailed = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dataShowtechFailed = value.dataShowtechFailed;
      this._dataShowtechSent = value.dataShowtechSent;
      this._dataVarlogFailed = value.dataVarlogFailed;
      this._dataVarlogSent = value.dataVarlogSent;
      this._sshConnectionFailed = value.sshConnectionFailed;
    }
  }

  // data_showtech_failed - computed: false, optional: true, required: false
  private _dataShowtechFailed?: number; 
  public get dataShowtechFailed() {
    return this.getNumberAttribute('data_showtech_failed');
  }
  public set dataShowtechFailed(value: number) {
    this._dataShowtechFailed = value;
  }
  public resetDataShowtechFailed() {
    this._dataShowtechFailed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataShowtechFailedInput() {
    return this._dataShowtechFailed;
  }

  // data_showtech_sent - computed: false, optional: true, required: false
  private _dataShowtechSent?: number; 
  public get dataShowtechSent() {
    return this.getNumberAttribute('data_showtech_sent');
  }
  public set dataShowtechSent(value: number) {
    this._dataShowtechSent = value;
  }
  public resetDataShowtechSent() {
    this._dataShowtechSent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataShowtechSentInput() {
    return this._dataShowtechSent;
  }

  // data_varlog_failed - computed: false, optional: true, required: false
  private _dataVarlogFailed?: number; 
  public get dataVarlogFailed() {
    return this.getNumberAttribute('data_varlog_failed');
  }
  public set dataVarlogFailed(value: number) {
    this._dataVarlogFailed = value;
  }
  public resetDataVarlogFailed() {
    this._dataVarlogFailed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataVarlogFailedInput() {
    return this._dataVarlogFailed;
  }

  // data_varlog_sent - computed: false, optional: true, required: false
  private _dataVarlogSent?: number; 
  public get dataVarlogSent() {
    return this.getNumberAttribute('data_varlog_sent');
  }
  public set dataVarlogSent(value: number) {
    this._dataVarlogSent = value;
  }
  public resetDataVarlogSent() {
    this._dataVarlogSent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataVarlogSentInput() {
    return this._dataVarlogSent;
  }

  // ssh_connection_failed - computed: false, optional: true, required: false
  private _sshConnectionFailed?: number; 
  public get sshConnectionFailed() {
    return this.getNumberAttribute('ssh_connection_failed');
  }
  public set sshConnectionFailed(value: number) {
    this._sshConnectionFailed = value;
  }
  public resetSshConnectionFailed() {
    this._sshConnectionFailed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshConnectionFailedInput() {
    return this._sshConnectionFailed;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/controller_probe_info_stats thunder_controller_probe_info_stats}
*/
export class DataThunderControllerProbeInfoStats extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_controller_probe_info_stats";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderControllerProbeInfoStats resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderControllerProbeInfoStats to import
  * @param importFromId The id of the existing DataThunderControllerProbeInfoStats that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/controller_probe_info_stats#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderControllerProbeInfoStats to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_controller_probe_info_stats", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/controller_probe_info_stats thunder_controller_probe_info_stats} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderControllerProbeInfoStatsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderControllerProbeInfoStatsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_controller_probe_info_stats',
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
  private _stats = new DataThunderControllerProbeInfoStatsStatsOutputReference(this, "stats");
  public get stats() {
    return this._stats;
  }
  public putStats(value: DataThunderControllerProbeInfoStatsStats) {
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
      stats: dataThunderControllerProbeInfoStatsStatsToTerraform(this._stats.internalValue),
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
        value: dataThunderControllerProbeInfoStatsStatsToHclTerraform(this._stats.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderControllerProbeInfoStatsStatsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
