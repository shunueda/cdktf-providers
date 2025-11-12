// https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_log_ioc
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SystemLogIocConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_log_ioc#id SystemLogIoc#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_log_ioc#notification SystemLogIoc#notification}
  */
  readonly notification?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_log_ioc#notification_throttle SystemLogIoc#notification_throttle}
  */
  readonly notificationThrottle?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_log_ioc#rescan_max_runner SystemLogIoc#rescan_max_runner}
  */
  readonly rescanMaxRunner?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_log_ioc#rescan_run_at SystemLogIoc#rescan_run_at}
  */
  readonly rescanRunAt?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_log_ioc#rescan_status SystemLogIoc#rescan_status}
  */
  readonly rescanStatus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_log_ioc#status SystemLogIoc#status}
  */
  readonly status?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_log_ioc fortimanager_system_log_ioc}
*/
export class SystemLogIoc extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortimanager_system_log_ioc";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SystemLogIoc resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SystemLogIoc to import
  * @param importFromId The id of the existing SystemLogIoc that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_log_ioc#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SystemLogIoc to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortimanager_system_log_ioc", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_log_ioc fortimanager_system_log_ioc} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SystemLogIocConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SystemLogIocConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortimanager_system_log_ioc',
      terraformGeneratorMetadata: {
        providerName: 'fortimanager',
        providerVersion: '1.14.0',
        providerVersionConstraint: '1.14.0'
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
    this._notification = config.notification;
    this._notificationThrottle = config.notificationThrottle;
    this._rescanMaxRunner = config.rescanMaxRunner;
    this._rescanRunAt = config.rescanRunAt;
    this._rescanStatus = config.rescanStatus;
    this._status = config.status;
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

  // notification - computed: true, optional: true, required: false
  private _notification?: string; 
  public get notification() {
    return this.getStringAttribute('notification');
  }
  public set notification(value: string) {
    this._notification = value;
  }
  public resetNotification() {
    this._notification = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationInput() {
    return this._notification;
  }

  // notification_throttle - computed: true, optional: true, required: false
  private _notificationThrottle?: number; 
  public get notificationThrottle() {
    return this.getNumberAttribute('notification_throttle');
  }
  public set notificationThrottle(value: number) {
    this._notificationThrottle = value;
  }
  public resetNotificationThrottle() {
    this._notificationThrottle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationThrottleInput() {
    return this._notificationThrottle;
  }

  // rescan_max_runner - computed: true, optional: true, required: false
  private _rescanMaxRunner?: number; 
  public get rescanMaxRunner() {
    return this.getNumberAttribute('rescan_max_runner');
  }
  public set rescanMaxRunner(value: number) {
    this._rescanMaxRunner = value;
  }
  public resetRescanMaxRunner() {
    this._rescanMaxRunner = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rescanMaxRunnerInput() {
    return this._rescanMaxRunner;
  }

  // rescan_run_at - computed: true, optional: true, required: false
  private _rescanRunAt?: number; 
  public get rescanRunAt() {
    return this.getNumberAttribute('rescan_run_at');
  }
  public set rescanRunAt(value: number) {
    this._rescanRunAt = value;
  }
  public resetRescanRunAt() {
    this._rescanRunAt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rescanRunAtInput() {
    return this._rescanRunAt;
  }

  // rescan_status - computed: true, optional: true, required: false
  private _rescanStatus?: string; 
  public get rescanStatus() {
    return this.getStringAttribute('rescan_status');
  }
  public set rescanStatus(value: string) {
    this._rescanStatus = value;
  }
  public resetRescanStatus() {
    this._rescanStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rescanStatusInput() {
    return this._rescanStatus;
  }

  // status - computed: true, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      notification: cdktf.stringToTerraform(this._notification),
      notification_throttle: cdktf.numberToTerraform(this._notificationThrottle),
      rescan_max_runner: cdktf.numberToTerraform(this._rescanMaxRunner),
      rescan_run_at: cdktf.numberToTerraform(this._rescanRunAt),
      rescan_status: cdktf.stringToTerraform(this._rescanStatus),
      status: cdktf.stringToTerraform(this._status),
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
      notification: {
        value: cdktf.stringToHclTerraform(this._notification),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      notification_throttle: {
        value: cdktf.numberToHclTerraform(this._notificationThrottle),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      rescan_max_runner: {
        value: cdktf.numberToHclTerraform(this._rescanMaxRunner),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      rescan_run_at: {
        value: cdktf.numberToHclTerraform(this._rescanRunAt),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      rescan_status: {
        value: cdktf.stringToHclTerraform(this._rescanStatus),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      status: {
        value: cdktf.stringToHclTerraform(this._status),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
