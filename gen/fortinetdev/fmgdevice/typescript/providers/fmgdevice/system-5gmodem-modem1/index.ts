// https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_5gmodem_modem1
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface System5GmodemModem1Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_5gmodem_modem1#carrier_config System5GmodemModem1#carrier_config}
  */
  readonly carrierConfig?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_5gmodem_modem1#custom_ipv4_netmask System5GmodemModem1#custom_ipv4_netmask}
  */
  readonly customIpv4Netmask?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_5gmodem_modem1#default_gateway System5GmodemModem1#default_gateway}
  */
  readonly defaultGateway?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_5gmodem_modem1#default_netmask System5GmodemModem1#default_netmask}
  */
  readonly defaultNetmask?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_5gmodem_modem1#device_name System5GmodemModem1#device_name}
  */
  readonly deviceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_5gmodem_modem1#gps_service System5GmodemModem1#gps_service}
  */
  readonly gpsService?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_5gmodem_modem1#id System5GmodemModem1#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_5gmodem_modem1#intferface System5GmodemModem1#intferface}
  */
  readonly intferface?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_5gmodem_modem1#modem_id System5GmodemModem1#modem_id}
  */
  readonly modemId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_5gmodem_modem1#network_type System5GmodemModem1#network_type}
  */
  readonly networkType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_5gmodem_modem1#sim1_data_plan System5GmodemModem1#sim1_data_plan}
  */
  readonly sim1DataPlan?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_5gmodem_modem1#sim1_pin System5GmodemModem1#sim1_pin}
  */
  readonly sim1Pin?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_5gmodem_modem1#sim2_data_plan System5GmodemModem1#sim2_data_plan}
  */
  readonly sim2DataPlan?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_5gmodem_modem1#sim2_pin System5GmodemModem1#sim2_pin}
  */
  readonly sim2Pin?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_5gmodem_modem1#sim_data_plan System5GmodemModem1#sim_data_plan}
  */
  readonly simDataPlan?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_5gmodem_modem1#sim_pin System5GmodemModem1#sim_pin}
  */
  readonly simPin?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_5gmodem_modem1#status System5GmodemModem1#status}
  */
  readonly status?: string;
  /**
  * sim_switch block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_5gmodem_modem1#sim_switch System5GmodemModem1#sim_switch}
  */
  readonly simSwitch?: System5GmodemModem1SimSwitch;
}
export interface System5GmodemModem1SimSwitch {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_5gmodem_modem1#active_sim_slot System5GmodemModem1#active_sim_slot}
  */
  readonly activeSimSlot?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_5gmodem_modem1#by_connection_state System5GmodemModem1#by_connection_state}
  */
  readonly byConnectionState?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_5gmodem_modem1#by_link_monitor System5GmodemModem1#by_link_monitor}
  */
  readonly byLinkMonitor?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_5gmodem_modem1#by_sim_state System5GmodemModem1#by_sim_state}
  */
  readonly bySimState?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_5gmodem_modem1#link_monitor System5GmodemModem1#link_monitor}
  */
  readonly linkMonitor?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_5gmodem_modem1#modem_disconnection_time System5GmodemModem1#modem_disconnection_time}
  */
  readonly modemDisconnectionTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_5gmodem_modem1#sim_switch_log_alert_interval System5GmodemModem1#sim_switch_log_alert_interval}
  */
  readonly simSwitchLogAlertInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_5gmodem_modem1#sim_switch_log_alert_threshold System5GmodemModem1#sim_switch_log_alert_threshold}
  */
  readonly simSwitchLogAlertThreshold?: number;
}

export function system5GmodemModem1SimSwitchToTerraform(struct?: System5GmodemModem1SimSwitchOutputReference | System5GmodemModem1SimSwitch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    active_sim_slot: cdktf.stringToTerraform(struct!.activeSimSlot),
    by_connection_state: cdktf.stringToTerraform(struct!.byConnectionState),
    by_link_monitor: cdktf.stringToTerraform(struct!.byLinkMonitor),
    by_sim_state: cdktf.stringToTerraform(struct!.bySimState),
    link_monitor: cdktf.stringToTerraform(struct!.linkMonitor),
    modem_disconnection_time: cdktf.numberToTerraform(struct!.modemDisconnectionTime),
    sim_switch_log_alert_interval: cdktf.numberToTerraform(struct!.simSwitchLogAlertInterval),
    sim_switch_log_alert_threshold: cdktf.numberToTerraform(struct!.simSwitchLogAlertThreshold),
  }
}


export function system5GmodemModem1SimSwitchToHclTerraform(struct?: System5GmodemModem1SimSwitchOutputReference | System5GmodemModem1SimSwitch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    active_sim_slot: {
      value: cdktf.stringToHclTerraform(struct!.activeSimSlot),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    by_connection_state: {
      value: cdktf.stringToHclTerraform(struct!.byConnectionState),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    by_link_monitor: {
      value: cdktf.stringToHclTerraform(struct!.byLinkMonitor),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    by_sim_state: {
      value: cdktf.stringToHclTerraform(struct!.bySimState),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    link_monitor: {
      value: cdktf.stringToHclTerraform(struct!.linkMonitor),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    modem_disconnection_time: {
      value: cdktf.numberToHclTerraform(struct!.modemDisconnectionTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sim_switch_log_alert_interval: {
      value: cdktf.numberToHclTerraform(struct!.simSwitchLogAlertInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sim_switch_log_alert_threshold: {
      value: cdktf.numberToHclTerraform(struct!.simSwitchLogAlertThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class System5GmodemModem1SimSwitchOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): System5GmodemModem1SimSwitch | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._activeSimSlot !== undefined) {
      hasAnyValues = true;
      internalValueResult.activeSimSlot = this._activeSimSlot;
    }
    if (this._byConnectionState !== undefined) {
      hasAnyValues = true;
      internalValueResult.byConnectionState = this._byConnectionState;
    }
    if (this._byLinkMonitor !== undefined) {
      hasAnyValues = true;
      internalValueResult.byLinkMonitor = this._byLinkMonitor;
    }
    if (this._bySimState !== undefined) {
      hasAnyValues = true;
      internalValueResult.bySimState = this._bySimState;
    }
    if (this._linkMonitor !== undefined) {
      hasAnyValues = true;
      internalValueResult.linkMonitor = this._linkMonitor;
    }
    if (this._modemDisconnectionTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.modemDisconnectionTime = this._modemDisconnectionTime;
    }
    if (this._simSwitchLogAlertInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.simSwitchLogAlertInterval = this._simSwitchLogAlertInterval;
    }
    if (this._simSwitchLogAlertThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.simSwitchLogAlertThreshold = this._simSwitchLogAlertThreshold;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: System5GmodemModem1SimSwitch | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._activeSimSlot = undefined;
      this._byConnectionState = undefined;
      this._byLinkMonitor = undefined;
      this._bySimState = undefined;
      this._linkMonitor = undefined;
      this._modemDisconnectionTime = undefined;
      this._simSwitchLogAlertInterval = undefined;
      this._simSwitchLogAlertThreshold = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._activeSimSlot = value.activeSimSlot;
      this._byConnectionState = value.byConnectionState;
      this._byLinkMonitor = value.byLinkMonitor;
      this._bySimState = value.bySimState;
      this._linkMonitor = value.linkMonitor;
      this._modemDisconnectionTime = value.modemDisconnectionTime;
      this._simSwitchLogAlertInterval = value.simSwitchLogAlertInterval;
      this._simSwitchLogAlertThreshold = value.simSwitchLogAlertThreshold;
    }
  }

  // active_sim_slot - computed: false, optional: true, required: false
  private _activeSimSlot?: string; 
  public get activeSimSlot() {
    return this.getStringAttribute('active_sim_slot');
  }
  public set activeSimSlot(value: string) {
    this._activeSimSlot = value;
  }
  public resetActiveSimSlot() {
    this._activeSimSlot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeSimSlotInput() {
    return this._activeSimSlot;
  }

  // by_connection_state - computed: false, optional: true, required: false
  private _byConnectionState?: string; 
  public get byConnectionState() {
    return this.getStringAttribute('by_connection_state');
  }
  public set byConnectionState(value: string) {
    this._byConnectionState = value;
  }
  public resetByConnectionState() {
    this._byConnectionState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get byConnectionStateInput() {
    return this._byConnectionState;
  }

  // by_link_monitor - computed: false, optional: true, required: false
  private _byLinkMonitor?: string; 
  public get byLinkMonitor() {
    return this.getStringAttribute('by_link_monitor');
  }
  public set byLinkMonitor(value: string) {
    this._byLinkMonitor = value;
  }
  public resetByLinkMonitor() {
    this._byLinkMonitor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get byLinkMonitorInput() {
    return this._byLinkMonitor;
  }

  // by_sim_state - computed: false, optional: true, required: false
  private _bySimState?: string; 
  public get bySimState() {
    return this.getStringAttribute('by_sim_state');
  }
  public set bySimState(value: string) {
    this._bySimState = value;
  }
  public resetBySimState() {
    this._bySimState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bySimStateInput() {
    return this._bySimState;
  }

  // link_monitor - computed: false, optional: true, required: false
  private _linkMonitor?: string; 
  public get linkMonitor() {
    return this.getStringAttribute('link_monitor');
  }
  public set linkMonitor(value: string) {
    this._linkMonitor = value;
  }
  public resetLinkMonitor() {
    this._linkMonitor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linkMonitorInput() {
    return this._linkMonitor;
  }

  // modem_disconnection_time - computed: false, optional: true, required: false
  private _modemDisconnectionTime?: number; 
  public get modemDisconnectionTime() {
    return this.getNumberAttribute('modem_disconnection_time');
  }
  public set modemDisconnectionTime(value: number) {
    this._modemDisconnectionTime = value;
  }
  public resetModemDisconnectionTime() {
    this._modemDisconnectionTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modemDisconnectionTimeInput() {
    return this._modemDisconnectionTime;
  }

  // sim_switch_log_alert_interval - computed: false, optional: true, required: false
  private _simSwitchLogAlertInterval?: number; 
  public get simSwitchLogAlertInterval() {
    return this.getNumberAttribute('sim_switch_log_alert_interval');
  }
  public set simSwitchLogAlertInterval(value: number) {
    this._simSwitchLogAlertInterval = value;
  }
  public resetSimSwitchLogAlertInterval() {
    this._simSwitchLogAlertInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get simSwitchLogAlertIntervalInput() {
    return this._simSwitchLogAlertInterval;
  }

  // sim_switch_log_alert_threshold - computed: false, optional: true, required: false
  private _simSwitchLogAlertThreshold?: number; 
  public get simSwitchLogAlertThreshold() {
    return this.getNumberAttribute('sim_switch_log_alert_threshold');
  }
  public set simSwitchLogAlertThreshold(value: number) {
    this._simSwitchLogAlertThreshold = value;
  }
  public resetSimSwitchLogAlertThreshold() {
    this._simSwitchLogAlertThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get simSwitchLogAlertThresholdInput() {
    return this._simSwitchLogAlertThreshold;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_5gmodem_modem1 fmgdevice_system_5gmodem_modem1}
*/
export class System5GmodemModem1 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fmgdevice_system_5gmodem_modem1";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a System5GmodemModem1 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the System5GmodemModem1 to import
  * @param importFromId The id of the existing System5GmodemModem1 that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_5gmodem_modem1#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the System5GmodemModem1 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fmgdevice_system_5gmodem_modem1", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_5gmodem_modem1 fmgdevice_system_5gmodem_modem1} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options System5GmodemModem1Config = {}
  */
  public constructor(scope: Construct, id: string, config: System5GmodemModem1Config = {}) {
    super(scope, id, {
      terraformResourceType: 'fmgdevice_system_5gmodem_modem1',
      terraformGeneratorMetadata: {
        providerName: 'fmgdevice',
        providerVersion: '1.2.1',
        providerVersionConstraint: '1.2.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._carrierConfig = config.carrierConfig;
    this._customIpv4Netmask = config.customIpv4Netmask;
    this._defaultGateway = config.defaultGateway;
    this._defaultNetmask = config.defaultNetmask;
    this._deviceName = config.deviceName;
    this._gpsService = config.gpsService;
    this._id = config.id;
    this._intferface = config.intferface;
    this._modemId = config.modemId;
    this._networkType = config.networkType;
    this._sim1DataPlan = config.sim1DataPlan;
    this._sim1Pin = config.sim1Pin;
    this._sim2DataPlan = config.sim2DataPlan;
    this._sim2Pin = config.sim2Pin;
    this._simDataPlan = config.simDataPlan;
    this._simPin = config.simPin;
    this._status = config.status;
    this._simSwitch.internalValue = config.simSwitch;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // carrier_config - computed: false, optional: true, required: false
  private _carrierConfig?: string; 
  public get carrierConfig() {
    return this.getStringAttribute('carrier_config');
  }
  public set carrierConfig(value: string) {
    this._carrierConfig = value;
  }
  public resetCarrierConfig() {
    this._carrierConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get carrierConfigInput() {
    return this._carrierConfig;
  }

  // custom_ipv4_netmask - computed: true, optional: true, required: false
  private _customIpv4Netmask?: string; 
  public get customIpv4Netmask() {
    return this.getStringAttribute('custom_ipv4_netmask');
  }
  public set customIpv4Netmask(value: string) {
    this._customIpv4Netmask = value;
  }
  public resetCustomIpv4Netmask() {
    this._customIpv4Netmask = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customIpv4NetmaskInput() {
    return this._customIpv4Netmask;
  }

  // default_gateway - computed: true, optional: true, required: false
  private _defaultGateway?: string; 
  public get defaultGateway() {
    return this.getStringAttribute('default_gateway');
  }
  public set defaultGateway(value: string) {
    this._defaultGateway = value;
  }
  public resetDefaultGateway() {
    this._defaultGateway = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultGatewayInput() {
    return this._defaultGateway;
  }

  // default_netmask - computed: true, optional: true, required: false
  private _defaultNetmask?: string; 
  public get defaultNetmask() {
    return this.getStringAttribute('default_netmask');
  }
  public set defaultNetmask(value: string) {
    this._defaultNetmask = value;
  }
  public resetDefaultNetmask() {
    this._defaultNetmask = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultNetmaskInput() {
    return this._defaultNetmask;
  }

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

  // gps_service - computed: true, optional: true, required: false
  private _gpsService?: string; 
  public get gpsService() {
    return this.getStringAttribute('gps_service');
  }
  public set gpsService(value: string) {
    this._gpsService = value;
  }
  public resetGpsService() {
    this._gpsService = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gpsServiceInput() {
    return this._gpsService;
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

  // intferface - computed: false, optional: true, required: false
  private _intferface?: string; 
  public get intferface() {
    return this.getStringAttribute('intferface');
  }
  public set intferface(value: string) {
    this._intferface = value;
  }
  public resetIntferface() {
    this._intferface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intferfaceInput() {
    return this._intferface;
  }

  // modem_id - computed: false, optional: true, required: false
  private _modemId?: number; 
  public get modemId() {
    return this.getNumberAttribute('modem_id');
  }
  public set modemId(value: number) {
    this._modemId = value;
  }
  public resetModemId() {
    this._modemId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modemIdInput() {
    return this._modemId;
  }

  // network_type - computed: true, optional: true, required: false
  private _networkType?: string; 
  public get networkType() {
    return this.getStringAttribute('network_type');
  }
  public set networkType(value: string) {
    this._networkType = value;
  }
  public resetNetworkType() {
    this._networkType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkTypeInput() {
    return this._networkType;
  }

  // sim1_data_plan - computed: true, optional: true, required: false
  private _sim1DataPlan?: string[]; 
  public get sim1DataPlan() {
    return cdktf.Fn.tolist(this.getListAttribute('sim1_data_plan'));
  }
  public set sim1DataPlan(value: string[]) {
    this._sim1DataPlan = value;
  }
  public resetSim1DataPlan() {
    this._sim1DataPlan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sim1DataPlanInput() {
    return this._sim1DataPlan;
  }

  // sim1_pin - computed: true, optional: true, required: false
  private _sim1Pin?: string[]; 
  public get sim1Pin() {
    return cdktf.Fn.tolist(this.getListAttribute('sim1_pin'));
  }
  public set sim1Pin(value: string[]) {
    this._sim1Pin = value;
  }
  public resetSim1Pin() {
    this._sim1Pin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sim1PinInput() {
    return this._sim1Pin;
  }

  // sim2_data_plan - computed: true, optional: true, required: false
  private _sim2DataPlan?: string[]; 
  public get sim2DataPlan() {
    return cdktf.Fn.tolist(this.getListAttribute('sim2_data_plan'));
  }
  public set sim2DataPlan(value: string[]) {
    this._sim2DataPlan = value;
  }
  public resetSim2DataPlan() {
    this._sim2DataPlan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sim2DataPlanInput() {
    return this._sim2DataPlan;
  }

  // sim2_pin - computed: true, optional: true, required: false
  private _sim2Pin?: string[]; 
  public get sim2Pin() {
    return cdktf.Fn.tolist(this.getListAttribute('sim2_pin'));
  }
  public set sim2Pin(value: string[]) {
    this._sim2Pin = value;
  }
  public resetSim2Pin() {
    this._sim2Pin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sim2PinInput() {
    return this._sim2Pin;
  }

  // sim_data_plan - computed: true, optional: true, required: false
  private _simDataPlan?: string[]; 
  public get simDataPlan() {
    return cdktf.Fn.tolist(this.getListAttribute('sim_data_plan'));
  }
  public set simDataPlan(value: string[]) {
    this._simDataPlan = value;
  }
  public resetSimDataPlan() {
    this._simDataPlan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get simDataPlanInput() {
    return this._simDataPlan;
  }

  // sim_pin - computed: true, optional: true, required: false
  private _simPin?: string[]; 
  public get simPin() {
    return cdktf.Fn.tolist(this.getListAttribute('sim_pin'));
  }
  public set simPin(value: string[]) {
    this._simPin = value;
  }
  public resetSimPin() {
    this._simPin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get simPinInput() {
    return this._simPin;
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

  // sim_switch - computed: false, optional: true, required: false
  private _simSwitch = new System5GmodemModem1SimSwitchOutputReference(this, "sim_switch");
  public get simSwitch() {
    return this._simSwitch;
  }
  public putSimSwitch(value: System5GmodemModem1SimSwitch) {
    this._simSwitch.internalValue = value;
  }
  public resetSimSwitch() {
    this._simSwitch.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get simSwitchInput() {
    return this._simSwitch.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      carrier_config: cdktf.stringToTerraform(this._carrierConfig),
      custom_ipv4_netmask: cdktf.stringToTerraform(this._customIpv4Netmask),
      default_gateway: cdktf.stringToTerraform(this._defaultGateway),
      default_netmask: cdktf.stringToTerraform(this._defaultNetmask),
      device_name: cdktf.stringToTerraform(this._deviceName),
      gps_service: cdktf.stringToTerraform(this._gpsService),
      id: cdktf.stringToTerraform(this._id),
      intferface: cdktf.stringToTerraform(this._intferface),
      modem_id: cdktf.numberToTerraform(this._modemId),
      network_type: cdktf.stringToTerraform(this._networkType),
      sim1_data_plan: cdktf.listMapper(cdktf.stringToTerraform, false)(this._sim1DataPlan),
      sim1_pin: cdktf.listMapper(cdktf.stringToTerraform, false)(this._sim1Pin),
      sim2_data_plan: cdktf.listMapper(cdktf.stringToTerraform, false)(this._sim2DataPlan),
      sim2_pin: cdktf.listMapper(cdktf.stringToTerraform, false)(this._sim2Pin),
      sim_data_plan: cdktf.listMapper(cdktf.stringToTerraform, false)(this._simDataPlan),
      sim_pin: cdktf.listMapper(cdktf.stringToTerraform, false)(this._simPin),
      status: cdktf.stringToTerraform(this._status),
      sim_switch: system5GmodemModem1SimSwitchToTerraform(this._simSwitch.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      carrier_config: {
        value: cdktf.stringToHclTerraform(this._carrierConfig),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_ipv4_netmask: {
        value: cdktf.stringToHclTerraform(this._customIpv4Netmask),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default_gateway: {
        value: cdktf.stringToHclTerraform(this._defaultGateway),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default_netmask: {
        value: cdktf.stringToHclTerraform(this._defaultNetmask),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      device_name: {
        value: cdktf.stringToHclTerraform(this._deviceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gps_service: {
        value: cdktf.stringToHclTerraform(this._gpsService),
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
      intferface: {
        value: cdktf.stringToHclTerraform(this._intferface),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      modem_id: {
        value: cdktf.numberToHclTerraform(this._modemId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      network_type: {
        value: cdktf.stringToHclTerraform(this._networkType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sim1_data_plan: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._sim1DataPlan),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      sim1_pin: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._sim1Pin),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      sim2_data_plan: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._sim2DataPlan),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      sim2_pin: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._sim2Pin),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      sim_data_plan: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._simDataPlan),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      sim_pin: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._simPin),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      status: {
        value: cdktf.stringToHclTerraform(this._status),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sim_switch: {
        value: system5GmodemModem1SimSwitchToHclTerraform(this._simSwitch.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "System5GmodemModem1SimSwitchList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
