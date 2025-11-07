// https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_ha_vcluster
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SystemHaVclusterAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_ha_vcluster#device_name SystemHaVclusterA#device_name}
  */
  readonly deviceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_ha_vcluster#id SystemHaVclusterA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_ha_vcluster#monitor SystemHaVclusterA#monitor}
  */
  readonly monitor?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_ha_vcluster#override SystemHaVclusterA#override}
  */
  readonly override?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_ha_vcluster#override_wait_time SystemHaVclusterA#override_wait_time}
  */
  readonly overrideWaitTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_ha_vcluster#pingserver_failover_threshold SystemHaVclusterA#pingserver_failover_threshold}
  */
  readonly pingserverFailoverThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_ha_vcluster#pingserver_flip_timeout SystemHaVclusterA#pingserver_flip_timeout}
  */
  readonly pingserverFlipTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_ha_vcluster#pingserver_monitor_interface SystemHaVclusterA#pingserver_monitor_interface}
  */
  readonly pingserverMonitorInterface?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_ha_vcluster#pingserver_secondary_force_reset SystemHaVclusterA#pingserver_secondary_force_reset}
  */
  readonly pingserverSecondaryForceReset?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_ha_vcluster#pingserver_slave_force_reset SystemHaVclusterA#pingserver_slave_force_reset}
  */
  readonly pingserverSlaveForceReset?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_ha_vcluster#priority SystemHaVclusterA#priority}
  */
  readonly priority?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_ha_vcluster#vcluster_id SystemHaVclusterA#vcluster_id}
  */
  readonly vclusterId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_ha_vcluster#vdom SystemHaVclusterA#vdom}
  */
  readonly vdom?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_ha_vcluster fmgdevice_system_ha_vcluster}
*/
export class SystemHaVclusterA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fmgdevice_system_ha_vcluster";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SystemHaVclusterA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SystemHaVclusterA to import
  * @param importFromId The id of the existing SystemHaVclusterA that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_ha_vcluster#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SystemHaVclusterA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fmgdevice_system_ha_vcluster", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_ha_vcluster fmgdevice_system_ha_vcluster} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SystemHaVclusterAConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SystemHaVclusterAConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fmgdevice_system_ha_vcluster',
      terraformGeneratorMetadata: {
        providerName: 'fmgdevice',
        providerVersion: '1.2.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._deviceName = config.deviceName;
    this._id = config.id;
    this._monitor = config.monitor;
    this._override = config.override;
    this._overrideWaitTime = config.overrideWaitTime;
    this._pingserverFailoverThreshold = config.pingserverFailoverThreshold;
    this._pingserverFlipTimeout = config.pingserverFlipTimeout;
    this._pingserverMonitorInterface = config.pingserverMonitorInterface;
    this._pingserverSecondaryForceReset = config.pingserverSecondaryForceReset;
    this._pingserverSlaveForceReset = config.pingserverSlaveForceReset;
    this._priority = config.priority;
    this._vclusterId = config.vclusterId;
    this._vdom = config.vdom;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // device_name - computed: true, optional: true, required: false
  private _deviceName?: string; 
  public get deviceName() {
    return this.getStringAttribute('device_name');
  }
  public set deviceName(value: string) {
    this._deviceName = value;
  }
  public resetDeviceName() {
    this._deviceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceNameInput() {
    return this._deviceName;
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

  // monitor - computed: true, optional: true, required: false
  private _monitor?: string[]; 
  public get monitor() {
    return cdktf.Fn.tolist(this.getListAttribute('monitor'));
  }
  public set monitor(value: string[]) {
    this._monitor = value;
  }
  public resetMonitor() {
    this._monitor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitorInput() {
    return this._monitor;
  }

  // override - computed: true, optional: true, required: false
  private _override?: string; 
  public get override() {
    return this.getStringAttribute('override');
  }
  public set override(value: string) {
    this._override = value;
  }
  public resetOverride() {
    this._override = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overrideInput() {
    return this._override;
  }

  // override_wait_time - computed: false, optional: true, required: false
  private _overrideWaitTime?: number; 
  public get overrideWaitTime() {
    return this.getNumberAttribute('override_wait_time');
  }
  public set overrideWaitTime(value: number) {
    this._overrideWaitTime = value;
  }
  public resetOverrideWaitTime() {
    this._overrideWaitTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overrideWaitTimeInput() {
    return this._overrideWaitTime;
  }

  // pingserver_failover_threshold - computed: false, optional: true, required: false
  private _pingserverFailoverThreshold?: number; 
  public get pingserverFailoverThreshold() {
    return this.getNumberAttribute('pingserver_failover_threshold');
  }
  public set pingserverFailoverThreshold(value: number) {
    this._pingserverFailoverThreshold = value;
  }
  public resetPingserverFailoverThreshold() {
    this._pingserverFailoverThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pingserverFailoverThresholdInput() {
    return this._pingserverFailoverThreshold;
  }

  // pingserver_flip_timeout - computed: true, optional: true, required: false
  private _pingserverFlipTimeout?: number; 
  public get pingserverFlipTimeout() {
    return this.getNumberAttribute('pingserver_flip_timeout');
  }
  public set pingserverFlipTimeout(value: number) {
    this._pingserverFlipTimeout = value;
  }
  public resetPingserverFlipTimeout() {
    this._pingserverFlipTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pingserverFlipTimeoutInput() {
    return this._pingserverFlipTimeout;
  }

  // pingserver_monitor_interface - computed: true, optional: true, required: false
  private _pingserverMonitorInterface?: string[]; 
  public get pingserverMonitorInterface() {
    return cdktf.Fn.tolist(this.getListAttribute('pingserver_monitor_interface'));
  }
  public set pingserverMonitorInterface(value: string[]) {
    this._pingserverMonitorInterface = value;
  }
  public resetPingserverMonitorInterface() {
    this._pingserverMonitorInterface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pingserverMonitorInterfaceInput() {
    return this._pingserverMonitorInterface;
  }

  // pingserver_secondary_force_reset - computed: true, optional: true, required: false
  private _pingserverSecondaryForceReset?: string; 
  public get pingserverSecondaryForceReset() {
    return this.getStringAttribute('pingserver_secondary_force_reset');
  }
  public set pingserverSecondaryForceReset(value: string) {
    this._pingserverSecondaryForceReset = value;
  }
  public resetPingserverSecondaryForceReset() {
    this._pingserverSecondaryForceReset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pingserverSecondaryForceResetInput() {
    return this._pingserverSecondaryForceReset;
  }

  // pingserver_slave_force_reset - computed: false, optional: true, required: false
  private _pingserverSlaveForceReset?: string; 
  public get pingserverSlaveForceReset() {
    return this.getStringAttribute('pingserver_slave_force_reset');
  }
  public set pingserverSlaveForceReset(value: string) {
    this._pingserverSlaveForceReset = value;
  }
  public resetPingserverSlaveForceReset() {
    this._pingserverSlaveForceReset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pingserverSlaveForceResetInput() {
    return this._pingserverSlaveForceReset;
  }

  // priority - computed: true, optional: true, required: false
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // vcluster_id - computed: false, optional: true, required: false
  private _vclusterId?: number; 
  public get vclusterId() {
    return this.getNumberAttribute('vcluster_id');
  }
  public set vclusterId(value: number) {
    this._vclusterId = value;
  }
  public resetVclusterId() {
    this._vclusterId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vclusterIdInput() {
    return this._vclusterId;
  }

  // vdom - computed: true, optional: true, required: false
  private _vdom?: string[]; 
  public get vdom() {
    return cdktf.Fn.tolist(this.getListAttribute('vdom'));
  }
  public set vdom(value: string[]) {
    this._vdom = value;
  }
  public resetVdom() {
    this._vdom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vdomInput() {
    return this._vdom;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      device_name: cdktf.stringToTerraform(this._deviceName),
      id: cdktf.stringToTerraform(this._id),
      monitor: cdktf.listMapper(cdktf.stringToTerraform, false)(this._monitor),
      override: cdktf.stringToTerraform(this._override),
      override_wait_time: cdktf.numberToTerraform(this._overrideWaitTime),
      pingserver_failover_threshold: cdktf.numberToTerraform(this._pingserverFailoverThreshold),
      pingserver_flip_timeout: cdktf.numberToTerraform(this._pingserverFlipTimeout),
      pingserver_monitor_interface: cdktf.listMapper(cdktf.stringToTerraform, false)(this._pingserverMonitorInterface),
      pingserver_secondary_force_reset: cdktf.stringToTerraform(this._pingserverSecondaryForceReset),
      pingserver_slave_force_reset: cdktf.stringToTerraform(this._pingserverSlaveForceReset),
      priority: cdktf.numberToTerraform(this._priority),
      vcluster_id: cdktf.numberToTerraform(this._vclusterId),
      vdom: cdktf.listMapper(cdktf.stringToTerraform, false)(this._vdom),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      device_name: {
        value: cdktf.stringToHclTerraform(this._deviceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      monitor: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._monitor),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      override: {
        value: cdktf.stringToHclTerraform(this._override),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      override_wait_time: {
        value: cdktf.numberToHclTerraform(this._overrideWaitTime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      pingserver_failover_threshold: {
        value: cdktf.numberToHclTerraform(this._pingserverFailoverThreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      pingserver_flip_timeout: {
        value: cdktf.numberToHclTerraform(this._pingserverFlipTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      pingserver_monitor_interface: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._pingserverMonitorInterface),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      pingserver_secondary_force_reset: {
        value: cdktf.stringToHclTerraform(this._pingserverSecondaryForceReset),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pingserver_slave_force_reset: {
        value: cdktf.stringToHclTerraform(this._pingserverSlaveForceReset),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      priority: {
        value: cdktf.numberToHclTerraform(this._priority),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      vcluster_id: {
        value: cdktf.numberToHclTerraform(this._vclusterId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      vdom: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._vdom),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
