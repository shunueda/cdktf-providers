// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_mssql_stats
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderSlbMssqlStatsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_mssql_stats#id DataThunderSlbMssqlStats#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * stats block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_mssql_stats#stats DataThunderSlbMssqlStats#stats}
  */
  readonly stats?: DataThunderSlbMssqlStatsStats;
}
export interface DataThunderSlbMssqlStatsStats {
  /**
  * Authentication Failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_mssql_stats#auth_failure DataThunderSlbMssqlStats#auth_failure}
  */
  readonly authFailure?: number;
  /**
  * Authentication Success
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_mssql_stats#auth_success DataThunderSlbMssqlStats#auth_success}
  */
  readonly authSuccess?: number;
  /**
  * Client FIN
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_mssql_stats#client_fin DataThunderSlbMssqlStats#client_fin}
  */
  readonly clientFin?: number;
  /**
  * DB commands reply
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_mssql_stats#commands DataThunderSlbMssqlStats#commands}
  */
  readonly commands?: number;
  /**
  * Curr BE Encryption Conns
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_mssql_stats#curr_be_enc DataThunderSlbMssqlStats#curr_be_enc}
  */
  readonly currBeEnc?: number;
  /**
  * Curr FE Encryption Conns
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_mssql_stats#curr_fe_enc DataThunderSlbMssqlStats#curr_fe_enc}
  */
  readonly currFeEnc?: number;
  /**
  * Curr Proxy Conns
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_mssql_stats#curr_proxy DataThunderSlbMssqlStats#curr_proxy}
  */
  readonly currProxy?: number;
  /**
  * DB Queries
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_mssql_stats#queries DataThunderSlbMssqlStats#queries}
  */
  readonly queries?: number;
  /**
  * Server FIN
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_mssql_stats#server_fin DataThunderSlbMssqlStats#server_fin}
  */
  readonly serverFin?: number;
  /**
  * Session err
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_mssql_stats#session_err DataThunderSlbMssqlStats#session_err}
  */
  readonly sessionErr?: number;
  /**
  * Total BE Encryption Conns
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_mssql_stats#total_be_enc DataThunderSlbMssqlStats#total_be_enc}
  */
  readonly totalBeEnc?: number;
  /**
  * Total FE Encryption Conns
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_mssql_stats#total_fe_enc DataThunderSlbMssqlStats#total_fe_enc}
  */
  readonly totalFeEnc?: number;
  /**
  * Total Proxy Conns
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_mssql_stats#total_proxy DataThunderSlbMssqlStats#total_proxy}
  */
  readonly totalProxy?: number;
}

export function dataThunderSlbMssqlStatsStatsToTerraform(struct?: DataThunderSlbMssqlStatsStatsOutputReference | DataThunderSlbMssqlStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auth_failure: cdktf.numberToTerraform(struct!.authFailure),
    auth_success: cdktf.numberToTerraform(struct!.authSuccess),
    client_fin: cdktf.numberToTerraform(struct!.clientFin),
    commands: cdktf.numberToTerraform(struct!.commands),
    curr_be_enc: cdktf.numberToTerraform(struct!.currBeEnc),
    curr_fe_enc: cdktf.numberToTerraform(struct!.currFeEnc),
    curr_proxy: cdktf.numberToTerraform(struct!.currProxy),
    queries: cdktf.numberToTerraform(struct!.queries),
    server_fin: cdktf.numberToTerraform(struct!.serverFin),
    session_err: cdktf.numberToTerraform(struct!.sessionErr),
    total_be_enc: cdktf.numberToTerraform(struct!.totalBeEnc),
    total_fe_enc: cdktf.numberToTerraform(struct!.totalFeEnc),
    total_proxy: cdktf.numberToTerraform(struct!.totalProxy),
  }
}


export function dataThunderSlbMssqlStatsStatsToHclTerraform(struct?: DataThunderSlbMssqlStatsStatsOutputReference | DataThunderSlbMssqlStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auth_failure: {
      value: cdktf.numberToHclTerraform(struct!.authFailure),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    auth_success: {
      value: cdktf.numberToHclTerraform(struct!.authSuccess),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    client_fin: {
      value: cdktf.numberToHclTerraform(struct!.clientFin),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    commands: {
      value: cdktf.numberToHclTerraform(struct!.commands),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    curr_be_enc: {
      value: cdktf.numberToHclTerraform(struct!.currBeEnc),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    curr_fe_enc: {
      value: cdktf.numberToHclTerraform(struct!.currFeEnc),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    curr_proxy: {
      value: cdktf.numberToHclTerraform(struct!.currProxy),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    queries: {
      value: cdktf.numberToHclTerraform(struct!.queries),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    server_fin: {
      value: cdktf.numberToHclTerraform(struct!.serverFin),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    session_err: {
      value: cdktf.numberToHclTerraform(struct!.sessionErr),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    total_be_enc: {
      value: cdktf.numberToHclTerraform(struct!.totalBeEnc),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    total_fe_enc: {
      value: cdktf.numberToHclTerraform(struct!.totalFeEnc),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    total_proxy: {
      value: cdktf.numberToHclTerraform(struct!.totalProxy),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderSlbMssqlStatsStatsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderSlbMssqlStatsStats | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.authFailure = this._authFailure;
    }
    if (this._authSuccess !== undefined) {
      hasAnyValues = true;
      internalValueResult.authSuccess = this._authSuccess;
    }
    if (this._clientFin !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientFin = this._clientFin;
    }
    if (this._commands !== undefined) {
      hasAnyValues = true;
      internalValueResult.commands = this._commands;
    }
    if (this._currBeEnc !== undefined) {
      hasAnyValues = true;
      internalValueResult.currBeEnc = this._currBeEnc;
    }
    if (this._currFeEnc !== undefined) {
      hasAnyValues = true;
      internalValueResult.currFeEnc = this._currFeEnc;
    }
    if (this._currProxy !== undefined) {
      hasAnyValues = true;
      internalValueResult.currProxy = this._currProxy;
    }
    if (this._queries !== undefined) {
      hasAnyValues = true;
      internalValueResult.queries = this._queries;
    }
    if (this._serverFin !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverFin = this._serverFin;
    }
    if (this._sessionErr !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessionErr = this._sessionErr;
    }
    if (this._totalBeEnc !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalBeEnc = this._totalBeEnc;
    }
    if (this._totalFeEnc !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalFeEnc = this._totalFeEnc;
    }
    if (this._totalProxy !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalProxy = this._totalProxy;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderSlbMssqlStatsStats | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._authFailure = undefined;
      this._authSuccess = undefined;
      this._clientFin = undefined;
      this._commands = undefined;
      this._currBeEnc = undefined;
      this._currFeEnc = undefined;
      this._currProxy = undefined;
      this._queries = undefined;
      this._serverFin = undefined;
      this._sessionErr = undefined;
      this._totalBeEnc = undefined;
      this._totalFeEnc = undefined;
      this._totalProxy = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._authFailure = value.authFailure;
      this._authSuccess = value.authSuccess;
      this._clientFin = value.clientFin;
      this._commands = value.commands;
      this._currBeEnc = value.currBeEnc;
      this._currFeEnc = value.currFeEnc;
      this._currProxy = value.currProxy;
      this._queries = value.queries;
      this._serverFin = value.serverFin;
      this._sessionErr = value.sessionErr;
      this._totalBeEnc = value.totalBeEnc;
      this._totalFeEnc = value.totalFeEnc;
      this._totalProxy = value.totalProxy;
    }
  }

  // auth_failure - computed: false, optional: true, required: false
  private _authFailure?: number; 
  public get authFailure() {
    return this.getNumberAttribute('auth_failure');
  }
  public set authFailure(value: number) {
    this._authFailure = value;
  }
  public resetAuthFailure() {
    this._authFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authFailureInput() {
    return this._authFailure;
  }

  // auth_success - computed: false, optional: true, required: false
  private _authSuccess?: number; 
  public get authSuccess() {
    return this.getNumberAttribute('auth_success');
  }
  public set authSuccess(value: number) {
    this._authSuccess = value;
  }
  public resetAuthSuccess() {
    this._authSuccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authSuccessInput() {
    return this._authSuccess;
  }

  // client_fin - computed: false, optional: true, required: false
  private _clientFin?: number; 
  public get clientFin() {
    return this.getNumberAttribute('client_fin');
  }
  public set clientFin(value: number) {
    this._clientFin = value;
  }
  public resetClientFin() {
    this._clientFin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientFinInput() {
    return this._clientFin;
  }

  // commands - computed: false, optional: true, required: false
  private _commands?: number; 
  public get commands() {
    return this.getNumberAttribute('commands');
  }
  public set commands(value: number) {
    this._commands = value;
  }
  public resetCommands() {
    this._commands = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commandsInput() {
    return this._commands;
  }

  // curr_be_enc - computed: false, optional: true, required: false
  private _currBeEnc?: number; 
  public get currBeEnc() {
    return this.getNumberAttribute('curr_be_enc');
  }
  public set currBeEnc(value: number) {
    this._currBeEnc = value;
  }
  public resetCurrBeEnc() {
    this._currBeEnc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get currBeEncInput() {
    return this._currBeEnc;
  }

  // curr_fe_enc - computed: false, optional: true, required: false
  private _currFeEnc?: number; 
  public get currFeEnc() {
    return this.getNumberAttribute('curr_fe_enc');
  }
  public set currFeEnc(value: number) {
    this._currFeEnc = value;
  }
  public resetCurrFeEnc() {
    this._currFeEnc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get currFeEncInput() {
    return this._currFeEnc;
  }

  // curr_proxy - computed: false, optional: true, required: false
  private _currProxy?: number; 
  public get currProxy() {
    return this.getNumberAttribute('curr_proxy');
  }
  public set currProxy(value: number) {
    this._currProxy = value;
  }
  public resetCurrProxy() {
    this._currProxy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get currProxyInput() {
    return this._currProxy;
  }

  // queries - computed: false, optional: true, required: false
  private _queries?: number; 
  public get queries() {
    return this.getNumberAttribute('queries');
  }
  public set queries(value: number) {
    this._queries = value;
  }
  public resetQueries() {
    this._queries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queriesInput() {
    return this._queries;
  }

  // server_fin - computed: false, optional: true, required: false
  private _serverFin?: number; 
  public get serverFin() {
    return this.getNumberAttribute('server_fin');
  }
  public set serverFin(value: number) {
    this._serverFin = value;
  }
  public resetServerFin() {
    this._serverFin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverFinInput() {
    return this._serverFin;
  }

  // session_err - computed: false, optional: true, required: false
  private _sessionErr?: number; 
  public get sessionErr() {
    return this.getNumberAttribute('session_err');
  }
  public set sessionErr(value: number) {
    this._sessionErr = value;
  }
  public resetSessionErr() {
    this._sessionErr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionErrInput() {
    return this._sessionErr;
  }

  // total_be_enc - computed: false, optional: true, required: false
  private _totalBeEnc?: number; 
  public get totalBeEnc() {
    return this.getNumberAttribute('total_be_enc');
  }
  public set totalBeEnc(value: number) {
    this._totalBeEnc = value;
  }
  public resetTotalBeEnc() {
    this._totalBeEnc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalBeEncInput() {
    return this._totalBeEnc;
  }

  // total_fe_enc - computed: false, optional: true, required: false
  private _totalFeEnc?: number; 
  public get totalFeEnc() {
    return this.getNumberAttribute('total_fe_enc');
  }
  public set totalFeEnc(value: number) {
    this._totalFeEnc = value;
  }
  public resetTotalFeEnc() {
    this._totalFeEnc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalFeEncInput() {
    return this._totalFeEnc;
  }

  // total_proxy - computed: false, optional: true, required: false
  private _totalProxy?: number; 
  public get totalProxy() {
    return this.getNumberAttribute('total_proxy');
  }
  public set totalProxy(value: number) {
    this._totalProxy = value;
  }
  public resetTotalProxy() {
    this._totalProxy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalProxyInput() {
    return this._totalProxy;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_mssql_stats thunder_slb_mssql_stats}
*/
export class DataThunderSlbMssqlStats extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_slb_mssql_stats";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderSlbMssqlStats resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderSlbMssqlStats to import
  * @param importFromId The id of the existing DataThunderSlbMssqlStats that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_mssql_stats#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderSlbMssqlStats to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_slb_mssql_stats", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_mssql_stats thunder_slb_mssql_stats} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderSlbMssqlStatsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderSlbMssqlStatsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_slb_mssql_stats',
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
  private _stats = new DataThunderSlbMssqlStatsStatsOutputReference(this, "stats");
  public get stats() {
    return this._stats;
  }
  public putStats(value: DataThunderSlbMssqlStatsStats) {
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
      stats: dataThunderSlbMssqlStatsStatsToTerraform(this._stats.internalValue),
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
        value: dataThunderSlbMssqlStatsStatsToHclTerraform(this._stats.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderSlbMssqlStatsStatsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
