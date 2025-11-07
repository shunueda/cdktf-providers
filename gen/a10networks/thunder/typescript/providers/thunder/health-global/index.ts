// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/health_global
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface HealthGlobalConfig extends cdktf.TerraformMetaArguments {
  /**
  * Health Check Rate per 500ms (default 1000)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/health_global#check_rate HealthGlobal#check_rate}
  */
  readonly checkRate?: number;
  /**
  * Disable the Health Check Rate Auto Adjustment
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/health_global#disable_auto_adjust HealthGlobal#disable_auto_adjust}
  */
  readonly disableAutoAdjust?: number;
  /**
  * Define the External Health Check Rate (Number of External Script Programs (default 2))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/health_global#external_rate HealthGlobal#external_rate}
  */
  readonly externalRate?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/health_global#id HealthGlobal#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Specify the Healthcheck Interval (Interval Value, in seconds (default 5))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/health_global#interval HealthGlobal#interval}
  */
  readonly interval?: number;
  /**
  * Start Health Monitoring in Multi-Process Mode (Specify the number of multiple processes (default 1))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/health_global#multi_process HealthGlobal#multi_process}
  */
  readonly multiProcess?: number;
  /**
  * Specify the Unit Time for the rate (Specify the Unit Time, multiple of 100ms)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/health_global#per HealthGlobal#per}
  */
  readonly per?: number;
  /**
  * Specify the Healthcheck Retries (Retry Count (default 3))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/health_global#retry HealthGlobal#retry}
  */
  readonly retry?: number;
  /**
  * Specify the Healthcheck Timeout (Timeout Value, in seconds (default 5), Timeout should be less than or equal to interval)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/health_global#timeout HealthGlobal#timeout}
  */
  readonly timeout?: number;
  /**
  * Specify the Healthcheck Retries before declaring target up (Up-retry count (default 1))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/health_global#up_retry HealthGlobal#up_retry}
  */
  readonly upRetry?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/health_global#uuid HealthGlobal#uuid}
  */
  readonly uuid?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/health_global thunder_health_global}
*/
export class HealthGlobal extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_health_global";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a HealthGlobal resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the HealthGlobal to import
  * @param importFromId The id of the existing HealthGlobal that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/health_global#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the HealthGlobal to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_health_global", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/health_global thunder_health_global} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options HealthGlobalConfig = {}
  */
  public constructor(scope: Construct, id: string, config: HealthGlobalConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_health_global',
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
    this._checkRate = config.checkRate;
    this._disableAutoAdjust = config.disableAutoAdjust;
    this._externalRate = config.externalRate;
    this._id = config.id;
    this._interval = config.interval;
    this._multiProcess = config.multiProcess;
    this._per = config.per;
    this._retry = config.retry;
    this._timeout = config.timeout;
    this._upRetry = config.upRetry;
    this._uuid = config.uuid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // check_rate - computed: false, optional: true, required: false
  private _checkRate?: number; 
  public get checkRate() {
    return this.getNumberAttribute('check_rate');
  }
  public set checkRate(value: number) {
    this._checkRate = value;
  }
  public resetCheckRate() {
    this._checkRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checkRateInput() {
    return this._checkRate;
  }

  // disable_auto_adjust - computed: false, optional: true, required: false
  private _disableAutoAdjust?: number; 
  public get disableAutoAdjust() {
    return this.getNumberAttribute('disable_auto_adjust');
  }
  public set disableAutoAdjust(value: number) {
    this._disableAutoAdjust = value;
  }
  public resetDisableAutoAdjust() {
    this._disableAutoAdjust = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableAutoAdjustInput() {
    return this._disableAutoAdjust;
  }

  // external_rate - computed: false, optional: true, required: false
  private _externalRate?: number; 
  public get externalRate() {
    return this.getNumberAttribute('external_rate');
  }
  public set externalRate(value: number) {
    this._externalRate = value;
  }
  public resetExternalRate() {
    this._externalRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalRateInput() {
    return this._externalRate;
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

  // interval - computed: false, optional: true, required: false
  private _interval?: number; 
  public get interval() {
    return this.getNumberAttribute('interval');
  }
  public set interval(value: number) {
    this._interval = value;
  }
  public resetInterval() {
    this._interval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInput() {
    return this._interval;
  }

  // multi_process - computed: false, optional: true, required: false
  private _multiProcess?: number; 
  public get multiProcess() {
    return this.getNumberAttribute('multi_process');
  }
  public set multiProcess(value: number) {
    this._multiProcess = value;
  }
  public resetMultiProcess() {
    this._multiProcess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multiProcessInput() {
    return this._multiProcess;
  }

  // per - computed: false, optional: true, required: false
  private _per?: number; 
  public get per() {
    return this.getNumberAttribute('per');
  }
  public set per(value: number) {
    this._per = value;
  }
  public resetPer() {
    this._per = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get perInput() {
    return this._per;
  }

  // retry - computed: false, optional: true, required: false
  private _retry?: number; 
  public get retry() {
    return this.getNumberAttribute('retry');
  }
  public set retry(value: number) {
    this._retry = value;
  }
  public resetRetry() {
    this._retry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryInput() {
    return this._retry;
  }

  // timeout - computed: false, optional: true, required: false
  private _timeout?: number; 
  public get timeout() {
    return this.getNumberAttribute('timeout');
  }
  public set timeout(value: number) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
  }

  // up_retry - computed: false, optional: true, required: false
  private _upRetry?: number; 
  public get upRetry() {
    return this.getNumberAttribute('up_retry');
  }
  public set upRetry(value: number) {
    this._upRetry = value;
  }
  public resetUpRetry() {
    this._upRetry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get upRetryInput() {
    return this._upRetry;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      check_rate: cdktf.numberToTerraform(this._checkRate),
      disable_auto_adjust: cdktf.numberToTerraform(this._disableAutoAdjust),
      external_rate: cdktf.numberToTerraform(this._externalRate),
      id: cdktf.stringToTerraform(this._id),
      interval: cdktf.numberToTerraform(this._interval),
      multi_process: cdktf.numberToTerraform(this._multiProcess),
      per: cdktf.numberToTerraform(this._per),
      retry: cdktf.numberToTerraform(this._retry),
      timeout: cdktf.numberToTerraform(this._timeout),
      up_retry: cdktf.numberToTerraform(this._upRetry),
      uuid: cdktf.stringToTerraform(this._uuid),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      check_rate: {
        value: cdktf.numberToHclTerraform(this._checkRate),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      disable_auto_adjust: {
        value: cdktf.numberToHclTerraform(this._disableAutoAdjust),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      external_rate: {
        value: cdktf.numberToHclTerraform(this._externalRate),
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
      interval: {
        value: cdktf.numberToHclTerraform(this._interval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      multi_process: {
        value: cdktf.numberToHclTerraform(this._multiProcess),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      per: {
        value: cdktf.numberToHclTerraform(this._per),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      retry: {
        value: cdktf.numberToHclTerraform(this._retry),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      timeout: {
        value: cdktf.numberToHclTerraform(this._timeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      up_retry: {
        value: cdktf.numberToHclTerraform(this._upRetry),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
