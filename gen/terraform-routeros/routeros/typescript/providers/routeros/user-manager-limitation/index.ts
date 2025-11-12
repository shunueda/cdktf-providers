// https://registry.terraform.io/providers/terraform-routeros/routeros/1.91.0/docs/resources/user_manager_limitation
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface UserManagerLimitationConfig extends cdktf.TerraformMetaArguments {
  /**
  * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.91.0/docs/resources/user_manager_limitation#___path___ UserManagerLimitation#___path___}
  */
  readonly path?: string;
  /**
  * The total amount of traffic a user can download in bytes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.91.0/docs/resources/user_manager_limitation#download_limit UserManagerLimitation#download_limit}
  */
  readonly downloadLimit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.91.0/docs/resources/user_manager_limitation#id UserManagerLimitation#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Unique name of the limitation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.91.0/docs/resources/user_manager_limitation#name UserManagerLimitation#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.91.0/docs/resources/user_manager_limitation#rate_limit_burst_rx UserManagerLimitation#rate_limit_burst_rx}
  */
  readonly rateLimitBurstRx?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.91.0/docs/resources/user_manager_limitation#rate_limit_burst_threshold_rx UserManagerLimitation#rate_limit_burst_threshold_rx}
  */
  readonly rateLimitBurstThresholdRx?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.91.0/docs/resources/user_manager_limitation#rate_limit_burst_threshold_tx UserManagerLimitation#rate_limit_burst_threshold_tx}
  */
  readonly rateLimitBurstThresholdTx?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.91.0/docs/resources/user_manager_limitation#rate_limit_burst_time_rx UserManagerLimitation#rate_limit_burst_time_rx}
  */
  readonly rateLimitBurstTimeRx?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.91.0/docs/resources/user_manager_limitation#rate_limit_burst_time_tx UserManagerLimitation#rate_limit_burst_time_tx}
  */
  readonly rateLimitBurstTimeTx?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.91.0/docs/resources/user_manager_limitation#rate_limit_burst_tx UserManagerLimitation#rate_limit_burst_tx}
  */
  readonly rateLimitBurstTx?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.91.0/docs/resources/user_manager_limitation#rate_limit_min_rx UserManagerLimitation#rate_limit_min_rx}
  */
  readonly rateLimitMinRx?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.91.0/docs/resources/user_manager_limitation#rate_limit_min_tx UserManagerLimitation#rate_limit_min_tx}
  */
  readonly rateLimitMinTx?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.91.0/docs/resources/user_manager_limitation#rate_limit_priority UserManagerLimitation#rate_limit_priority}
  */
  readonly rateLimitPriority?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.91.0/docs/resources/user_manager_limitation#rate_limit_rx UserManagerLimitation#rate_limit_rx}
  */
  readonly rateLimitRx?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.91.0/docs/resources/user_manager_limitation#rate_limit_tx UserManagerLimitation#rate_limit_tx}
  */
  readonly rateLimitTx?: number;
  /**
  * The interval from `reset_counters_start_time` when all associated user statistics are cleared.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.91.0/docs/resources/user_manager_limitation#reset_counters_interval UserManagerLimitation#reset_counters_interval}
  */
  readonly resetCountersInterval?: string;
  /**
  * Static date and time value from which `reset_counters_interval` is calculated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.91.0/docs/resources/user_manager_limitation#reset_counters_start_time UserManagerLimitation#reset_counters_start_time}
  */
  readonly resetCountersStartTime?: string;
  /**
  * The total amount of aggregated (download+upload) traffic in bytes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.91.0/docs/resources/user_manager_limitation#transfer_limit UserManagerLimitation#transfer_limit}
  */
  readonly transferLimit?: number;
  /**
  * The total amount of traffic a user can upload in bytes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.91.0/docs/resources/user_manager_limitation#upload_limit UserManagerLimitation#upload_limit}
  */
  readonly uploadLimit?: number;
  /**
  * The total amount of uptime a user can stay active.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.91.0/docs/resources/user_manager_limitation#uptime_limit UserManagerLimitation#uptime_limit}
  */
  readonly uptimeLimit?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.91.0/docs/resources/user_manager_limitation routeros_user_manager_limitation}
*/
export class UserManagerLimitation extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "routeros_user_manager_limitation";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a UserManagerLimitation resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the UserManagerLimitation to import
  * @param importFromId The id of the existing UserManagerLimitation that should be imported. Refer to the {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.91.0/docs/resources/user_manager_limitation#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the UserManagerLimitation to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "routeros_user_manager_limitation", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.91.0/docs/resources/user_manager_limitation routeros_user_manager_limitation} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options UserManagerLimitationConfig
  */
  public constructor(scope: Construct, id: string, config: UserManagerLimitationConfig) {
    super(scope, id, {
      terraformResourceType: 'routeros_user_manager_limitation',
      terraformGeneratorMetadata: {
        providerName: 'routeros',
        providerVersion: '1.91.0',
        providerVersionConstraint: '1.91.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._path = config.path;
    this._downloadLimit = config.downloadLimit;
    this._id = config.id;
    this._name = config.name;
    this._rateLimitBurstRx = config.rateLimitBurstRx;
    this._rateLimitBurstThresholdRx = config.rateLimitBurstThresholdRx;
    this._rateLimitBurstThresholdTx = config.rateLimitBurstThresholdTx;
    this._rateLimitBurstTimeRx = config.rateLimitBurstTimeRx;
    this._rateLimitBurstTimeTx = config.rateLimitBurstTimeTx;
    this._rateLimitBurstTx = config.rateLimitBurstTx;
    this._rateLimitMinRx = config.rateLimitMinRx;
    this._rateLimitMinTx = config.rateLimitMinTx;
    this._rateLimitPriority = config.rateLimitPriority;
    this._rateLimitRx = config.rateLimitRx;
    this._rateLimitTx = config.rateLimitTx;
    this._resetCountersInterval = config.resetCountersInterval;
    this._resetCountersStartTime = config.resetCountersStartTime;
    this._transferLimit = config.transferLimit;
    this._uploadLimit = config.uploadLimit;
    this._uptimeLimit = config.uptimeLimit;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // ___path___ - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('___path___');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // download_limit - computed: false, optional: true, required: false
  private _downloadLimit?: number; 
  public get downloadLimit() {
    return this.getNumberAttribute('download_limit');
  }
  public set downloadLimit(value: number) {
    this._downloadLimit = value;
  }
  public resetDownloadLimit() {
    this._downloadLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get downloadLimitInput() {
    return this._downloadLimit;
  }

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

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // rate_limit_burst_rx - computed: false, optional: true, required: false
  private _rateLimitBurstRx?: number; 
  public get rateLimitBurstRx() {
    return this.getNumberAttribute('rate_limit_burst_rx');
  }
  public set rateLimitBurstRx(value: number) {
    this._rateLimitBurstRx = value;
  }
  public resetRateLimitBurstRx() {
    this._rateLimitBurstRx = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rateLimitBurstRxInput() {
    return this._rateLimitBurstRx;
  }

  // rate_limit_burst_threshold_rx - computed: false, optional: true, required: false
  private _rateLimitBurstThresholdRx?: number; 
  public get rateLimitBurstThresholdRx() {
    return this.getNumberAttribute('rate_limit_burst_threshold_rx');
  }
  public set rateLimitBurstThresholdRx(value: number) {
    this._rateLimitBurstThresholdRx = value;
  }
  public resetRateLimitBurstThresholdRx() {
    this._rateLimitBurstThresholdRx = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rateLimitBurstThresholdRxInput() {
    return this._rateLimitBurstThresholdRx;
  }

  // rate_limit_burst_threshold_tx - computed: false, optional: true, required: false
  private _rateLimitBurstThresholdTx?: number; 
  public get rateLimitBurstThresholdTx() {
    return this.getNumberAttribute('rate_limit_burst_threshold_tx');
  }
  public set rateLimitBurstThresholdTx(value: number) {
    this._rateLimitBurstThresholdTx = value;
  }
  public resetRateLimitBurstThresholdTx() {
    this._rateLimitBurstThresholdTx = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rateLimitBurstThresholdTxInput() {
    return this._rateLimitBurstThresholdTx;
  }

  // rate_limit_burst_time_rx - computed: false, optional: true, required: false
  private _rateLimitBurstTimeRx?: string; 
  public get rateLimitBurstTimeRx() {
    return this.getStringAttribute('rate_limit_burst_time_rx');
  }
  public set rateLimitBurstTimeRx(value: string) {
    this._rateLimitBurstTimeRx = value;
  }
  public resetRateLimitBurstTimeRx() {
    this._rateLimitBurstTimeRx = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rateLimitBurstTimeRxInput() {
    return this._rateLimitBurstTimeRx;
  }

  // rate_limit_burst_time_tx - computed: false, optional: true, required: false
  private _rateLimitBurstTimeTx?: string; 
  public get rateLimitBurstTimeTx() {
    return this.getStringAttribute('rate_limit_burst_time_tx');
  }
  public set rateLimitBurstTimeTx(value: string) {
    this._rateLimitBurstTimeTx = value;
  }
  public resetRateLimitBurstTimeTx() {
    this._rateLimitBurstTimeTx = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rateLimitBurstTimeTxInput() {
    return this._rateLimitBurstTimeTx;
  }

  // rate_limit_burst_tx - computed: false, optional: true, required: false
  private _rateLimitBurstTx?: number; 
  public get rateLimitBurstTx() {
    return this.getNumberAttribute('rate_limit_burst_tx');
  }
  public set rateLimitBurstTx(value: number) {
    this._rateLimitBurstTx = value;
  }
  public resetRateLimitBurstTx() {
    this._rateLimitBurstTx = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rateLimitBurstTxInput() {
    return this._rateLimitBurstTx;
  }

  // rate_limit_min_rx - computed: false, optional: true, required: false
  private _rateLimitMinRx?: number; 
  public get rateLimitMinRx() {
    return this.getNumberAttribute('rate_limit_min_rx');
  }
  public set rateLimitMinRx(value: number) {
    this._rateLimitMinRx = value;
  }
  public resetRateLimitMinRx() {
    this._rateLimitMinRx = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rateLimitMinRxInput() {
    return this._rateLimitMinRx;
  }

  // rate_limit_min_tx - computed: false, optional: true, required: false
  private _rateLimitMinTx?: number; 
  public get rateLimitMinTx() {
    return this.getNumberAttribute('rate_limit_min_tx');
  }
  public set rateLimitMinTx(value: number) {
    this._rateLimitMinTx = value;
  }
  public resetRateLimitMinTx() {
    this._rateLimitMinTx = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rateLimitMinTxInput() {
    return this._rateLimitMinTx;
  }

  // rate_limit_priority - computed: false, optional: true, required: false
  private _rateLimitPriority?: number; 
  public get rateLimitPriority() {
    return this.getNumberAttribute('rate_limit_priority');
  }
  public set rateLimitPriority(value: number) {
    this._rateLimitPriority = value;
  }
  public resetRateLimitPriority() {
    this._rateLimitPriority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rateLimitPriorityInput() {
    return this._rateLimitPriority;
  }

  // rate_limit_rx - computed: false, optional: true, required: false
  private _rateLimitRx?: number; 
  public get rateLimitRx() {
    return this.getNumberAttribute('rate_limit_rx');
  }
  public set rateLimitRx(value: number) {
    this._rateLimitRx = value;
  }
  public resetRateLimitRx() {
    this._rateLimitRx = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rateLimitRxInput() {
    return this._rateLimitRx;
  }

  // rate_limit_tx - computed: false, optional: true, required: false
  private _rateLimitTx?: number; 
  public get rateLimitTx() {
    return this.getNumberAttribute('rate_limit_tx');
  }
  public set rateLimitTx(value: number) {
    this._rateLimitTx = value;
  }
  public resetRateLimitTx() {
    this._rateLimitTx = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rateLimitTxInput() {
    return this._rateLimitTx;
  }

  // reset_counters_interval - computed: false, optional: true, required: false
  private _resetCountersInterval?: string; 
  public get resetCountersInterval() {
    return this.getStringAttribute('reset_counters_interval');
  }
  public set resetCountersInterval(value: string) {
    this._resetCountersInterval = value;
  }
  public resetResetCountersInterval() {
    this._resetCountersInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resetCountersIntervalInput() {
    return this._resetCountersInterval;
  }

  // reset_counters_start_time - computed: false, optional: true, required: false
  private _resetCountersStartTime?: string; 
  public get resetCountersStartTime() {
    return this.getStringAttribute('reset_counters_start_time');
  }
  public set resetCountersStartTime(value: string) {
    this._resetCountersStartTime = value;
  }
  public resetResetCountersStartTime() {
    this._resetCountersStartTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resetCountersStartTimeInput() {
    return this._resetCountersStartTime;
  }

  // transfer_limit - computed: false, optional: true, required: false
  private _transferLimit?: number; 
  public get transferLimit() {
    return this.getNumberAttribute('transfer_limit');
  }
  public set transferLimit(value: number) {
    this._transferLimit = value;
  }
  public resetTransferLimit() {
    this._transferLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transferLimitInput() {
    return this._transferLimit;
  }

  // upload_limit - computed: false, optional: true, required: false
  private _uploadLimit?: number; 
  public get uploadLimit() {
    return this.getNumberAttribute('upload_limit');
  }
  public set uploadLimit(value: number) {
    this._uploadLimit = value;
  }
  public resetUploadLimit() {
    this._uploadLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uploadLimitInput() {
    return this._uploadLimit;
  }

  // uptime_limit - computed: false, optional: true, required: false
  private _uptimeLimit?: string; 
  public get uptimeLimit() {
    return this.getStringAttribute('uptime_limit');
  }
  public set uptimeLimit(value: string) {
    this._uptimeLimit = value;
  }
  public resetUptimeLimit() {
    this._uptimeLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uptimeLimitInput() {
    return this._uptimeLimit;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      ___path___: cdktf.stringToTerraform(this._path),
      download_limit: cdktf.numberToTerraform(this._downloadLimit),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      rate_limit_burst_rx: cdktf.numberToTerraform(this._rateLimitBurstRx),
      rate_limit_burst_threshold_rx: cdktf.numberToTerraform(this._rateLimitBurstThresholdRx),
      rate_limit_burst_threshold_tx: cdktf.numberToTerraform(this._rateLimitBurstThresholdTx),
      rate_limit_burst_time_rx: cdktf.stringToTerraform(this._rateLimitBurstTimeRx),
      rate_limit_burst_time_tx: cdktf.stringToTerraform(this._rateLimitBurstTimeTx),
      rate_limit_burst_tx: cdktf.numberToTerraform(this._rateLimitBurstTx),
      rate_limit_min_rx: cdktf.numberToTerraform(this._rateLimitMinRx),
      rate_limit_min_tx: cdktf.numberToTerraform(this._rateLimitMinTx),
      rate_limit_priority: cdktf.numberToTerraform(this._rateLimitPriority),
      rate_limit_rx: cdktf.numberToTerraform(this._rateLimitRx),
      rate_limit_tx: cdktf.numberToTerraform(this._rateLimitTx),
      reset_counters_interval: cdktf.stringToTerraform(this._resetCountersInterval),
      reset_counters_start_time: cdktf.stringToTerraform(this._resetCountersStartTime),
      transfer_limit: cdktf.numberToTerraform(this._transferLimit),
      upload_limit: cdktf.numberToTerraform(this._uploadLimit),
      uptime_limit: cdktf.stringToTerraform(this._uptimeLimit),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      ___path___: {
        value: cdktf.stringToHclTerraform(this._path),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      download_limit: {
        value: cdktf.numberToHclTerraform(this._downloadLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rate_limit_burst_rx: {
        value: cdktf.numberToHclTerraform(this._rateLimitBurstRx),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      rate_limit_burst_threshold_rx: {
        value: cdktf.numberToHclTerraform(this._rateLimitBurstThresholdRx),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      rate_limit_burst_threshold_tx: {
        value: cdktf.numberToHclTerraform(this._rateLimitBurstThresholdTx),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      rate_limit_burst_time_rx: {
        value: cdktf.stringToHclTerraform(this._rateLimitBurstTimeRx),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rate_limit_burst_time_tx: {
        value: cdktf.stringToHclTerraform(this._rateLimitBurstTimeTx),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rate_limit_burst_tx: {
        value: cdktf.numberToHclTerraform(this._rateLimitBurstTx),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      rate_limit_min_rx: {
        value: cdktf.numberToHclTerraform(this._rateLimitMinRx),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      rate_limit_min_tx: {
        value: cdktf.numberToHclTerraform(this._rateLimitMinTx),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      rate_limit_priority: {
        value: cdktf.numberToHclTerraform(this._rateLimitPriority),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      rate_limit_rx: {
        value: cdktf.numberToHclTerraform(this._rateLimitRx),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      rate_limit_tx: {
        value: cdktf.numberToHclTerraform(this._rateLimitTx),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      reset_counters_interval: {
        value: cdktf.stringToHclTerraform(this._resetCountersInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      reset_counters_start_time: {
        value: cdktf.stringToHclTerraform(this._resetCountersStartTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      transfer_limit: {
        value: cdktf.numberToHclTerraform(this._transferLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      upload_limit: {
        value: cdktf.numberToHclTerraform(this._uploadLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      uptime_limit: {
        value: cdktf.stringToHclTerraform(this._uptimeLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
