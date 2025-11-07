// https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_ha
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SystemHaConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_ha#arp_interval SystemHa#arp_interval}
  */
  readonly arpInterval?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_ha#arp_num SystemHa#arp_num}
  */
  readonly arpNum?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_ha#config_priority SystemHa#config_priority}
  */
  readonly configPriority?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_ha#datadev SystemHa#datadev}
  */
  readonly datadev?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_ha#failover_hold_time SystemHa#failover_hold_time}
  */
  readonly failoverHoldTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_ha#failover_threshold SystemHa#failover_threshold}
  */
  readonly failoverThreshold?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_ha#group_name SystemHa#group_name}
  */
  readonly groupName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_ha#groupid SystemHa#groupid}
  */
  readonly groupid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_ha#hb_lost_threshold SystemHa#hb_lost_threshold}
  */
  readonly hbLostThreshold?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_ha#hbdev SystemHa#hbdev}
  */
  readonly hbdev?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_ha#hbtype SystemHa#hbtype}
  */
  readonly hbtype?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_ha#id SystemHa#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_ha#interface_list SystemHa#interface_list}
  */
  readonly interfaceList?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_ha#interval SystemHa#interval}
  */
  readonly interval?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_ha#local_address SystemHa#local_address}
  */
  readonly localAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_ha#local_node_id SystemHa#local_node_id}
  */
  readonly localNodeId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_ha#mgmt_interface SystemHa#mgmt_interface}
  */
  readonly mgmtInterface?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_ha#mgmt_ip SystemHa#mgmt_ip}
  */
  readonly mgmtIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_ha#mgmt_ip_allowaccess SystemHa#mgmt_ip_allowaccess}
  */
  readonly mgmtIpAllowaccess?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_ha#mgmt_status SystemHa#mgmt_status}
  */
  readonly mgmtStatus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_ha#mode SystemHa#mode}
  */
  readonly mode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_ha#monitor_enable SystemHa#monitor_enable}
  */
  readonly monitorEnable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_ha#node_list SystemHa#node_list}
  */
  readonly nodeList?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_ha#override SystemHa#override}
  */
  readonly override?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_ha#peer_address SystemHa#peer_address}
  */
  readonly peerAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_ha#priority SystemHa#priority}
  */
  readonly priority?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_ha#sync_l4_connection SystemHa#sync_l4_connection}
  */
  readonly syncL4Connection?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_ha#sync_l4_persistent SystemHa#sync_l4_persistent}
  */
  readonly syncL4Persistent?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_ha#sync_l7_persistent SystemHa#sync_l7_persistent}
  */
  readonly syncL7Persistent?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_ha fortiadc_system_ha}
*/
export class SystemHa extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortiadc_system_ha";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SystemHa resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SystemHa to import
  * @param importFromId The id of the existing SystemHa that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_ha#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SystemHa to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortiadc_system_ha", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_ha fortiadc_system_ha} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SystemHaConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SystemHaConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortiadc_system_ha',
      terraformGeneratorMetadata: {
        providerName: 'fortiadc',
        providerVersion: '1.3.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._arpInterval = config.arpInterval;
    this._arpNum = config.arpNum;
    this._configPriority = config.configPriority;
    this._datadev = config.datadev;
    this._failoverHoldTime = config.failoverHoldTime;
    this._failoverThreshold = config.failoverThreshold;
    this._groupName = config.groupName;
    this._groupid = config.groupid;
    this._hbLostThreshold = config.hbLostThreshold;
    this._hbdev = config.hbdev;
    this._hbtype = config.hbtype;
    this._id = config.id;
    this._interfaceList = config.interfaceList;
    this._interval = config.interval;
    this._localAddress = config.localAddress;
    this._localNodeId = config.localNodeId;
    this._mgmtInterface = config.mgmtInterface;
    this._mgmtIp = config.mgmtIp;
    this._mgmtIpAllowaccess = config.mgmtIpAllowaccess;
    this._mgmtStatus = config.mgmtStatus;
    this._mode = config.mode;
    this._monitorEnable = config.monitorEnable;
    this._nodeList = config.nodeList;
    this._override = config.override;
    this._peerAddress = config.peerAddress;
    this._priority = config.priority;
    this._syncL4Connection = config.syncL4Connection;
    this._syncL4Persistent = config.syncL4Persistent;
    this._syncL7Persistent = config.syncL7Persistent;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arp_interval - computed: true, optional: true, required: false
  private _arpInterval?: string; 
  public get arpInterval() {
    return this.getStringAttribute('arp_interval');
  }
  public set arpInterval(value: string) {
    this._arpInterval = value;
  }
  public resetArpInterval() {
    this._arpInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get arpIntervalInput() {
    return this._arpInterval;
  }

  // arp_num - computed: true, optional: true, required: false
  private _arpNum?: string; 
  public get arpNum() {
    return this.getStringAttribute('arp_num');
  }
  public set arpNum(value: string) {
    this._arpNum = value;
  }
  public resetArpNum() {
    this._arpNum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get arpNumInput() {
    return this._arpNum;
  }

  // config_priority - computed: true, optional: true, required: false
  private _configPriority?: string; 
  public get configPriority() {
    return this.getStringAttribute('config_priority');
  }
  public set configPriority(value: string) {
    this._configPriority = value;
  }
  public resetConfigPriority() {
    this._configPriority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configPriorityInput() {
    return this._configPriority;
  }

  // datadev - computed: true, optional: true, required: false
  private _datadev?: string; 
  public get datadev() {
    return this.getStringAttribute('datadev');
  }
  public set datadev(value: string) {
    this._datadev = value;
  }
  public resetDatadev() {
    this._datadev = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datadevInput() {
    return this._datadev;
  }

  // failover_hold_time - computed: true, optional: true, required: false
  private _failoverHoldTime?: string; 
  public get failoverHoldTime() {
    return this.getStringAttribute('failover_hold_time');
  }
  public set failoverHoldTime(value: string) {
    this._failoverHoldTime = value;
  }
  public resetFailoverHoldTime() {
    this._failoverHoldTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failoverHoldTimeInput() {
    return this._failoverHoldTime;
  }

  // failover_threshold - computed: true, optional: true, required: false
  private _failoverThreshold?: string; 
  public get failoverThreshold() {
    return this.getStringAttribute('failover_threshold');
  }
  public set failoverThreshold(value: string) {
    this._failoverThreshold = value;
  }
  public resetFailoverThreshold() {
    this._failoverThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failoverThresholdInput() {
    return this._failoverThreshold;
  }

  // group_name - computed: true, optional: true, required: false
  private _groupName?: string; 
  public get groupName() {
    return this.getStringAttribute('group_name');
  }
  public set groupName(value: string) {
    this._groupName = value;
  }
  public resetGroupName() {
    this._groupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupNameInput() {
    return this._groupName;
  }

  // groupid - computed: true, optional: true, required: false
  private _groupid?: string; 
  public get groupid() {
    return this.getStringAttribute('groupid');
  }
  public set groupid(value: string) {
    this._groupid = value;
  }
  public resetGroupid() {
    this._groupid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupidInput() {
    return this._groupid;
  }

  // hb_lost_threshold - computed: true, optional: true, required: false
  private _hbLostThreshold?: string; 
  public get hbLostThreshold() {
    return this.getStringAttribute('hb_lost_threshold');
  }
  public set hbLostThreshold(value: string) {
    this._hbLostThreshold = value;
  }
  public resetHbLostThreshold() {
    this._hbLostThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hbLostThresholdInput() {
    return this._hbLostThreshold;
  }

  // hbdev - computed: true, optional: true, required: false
  private _hbdev?: string; 
  public get hbdev() {
    return this.getStringAttribute('hbdev');
  }
  public set hbdev(value: string) {
    this._hbdev = value;
  }
  public resetHbdev() {
    this._hbdev = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hbdevInput() {
    return this._hbdev;
  }

  // hbtype - computed: true, optional: true, required: false
  private _hbtype?: string; 
  public get hbtype() {
    return this.getStringAttribute('hbtype');
  }
  public set hbtype(value: string) {
    this._hbtype = value;
  }
  public resetHbtype() {
    this._hbtype = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hbtypeInput() {
    return this._hbtype;
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

  // interface_list - computed: true, optional: true, required: false
  private _interfaceList?: string; 
  public get interfaceList() {
    return this.getStringAttribute('interface_list');
  }
  public set interfaceList(value: string) {
    this._interfaceList = value;
  }
  public resetInterfaceList() {
    this._interfaceList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceListInput() {
    return this._interfaceList;
  }

  // interval - computed: true, optional: true, required: false
  private _interval?: string; 
  public get interval() {
    return this.getStringAttribute('interval');
  }
  public set interval(value: string) {
    this._interval = value;
  }
  public resetInterval() {
    this._interval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInput() {
    return this._interval;
  }

  // local_address - computed: true, optional: true, required: false
  private _localAddress?: string; 
  public get localAddress() {
    return this.getStringAttribute('local_address');
  }
  public set localAddress(value: string) {
    this._localAddress = value;
  }
  public resetLocalAddress() {
    this._localAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localAddressInput() {
    return this._localAddress;
  }

  // local_node_id - computed: true, optional: true, required: false
  private _localNodeId?: string; 
  public get localNodeId() {
    return this.getStringAttribute('local_node_id');
  }
  public set localNodeId(value: string) {
    this._localNodeId = value;
  }
  public resetLocalNodeId() {
    this._localNodeId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localNodeIdInput() {
    return this._localNodeId;
  }

  // mgmt_interface - computed: true, optional: true, required: false
  private _mgmtInterface?: string; 
  public get mgmtInterface() {
    return this.getStringAttribute('mgmt_interface');
  }
  public set mgmtInterface(value: string) {
    this._mgmtInterface = value;
  }
  public resetMgmtInterface() {
    this._mgmtInterface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mgmtInterfaceInput() {
    return this._mgmtInterface;
  }

  // mgmt_ip - computed: true, optional: true, required: false
  private _mgmtIp?: string; 
  public get mgmtIp() {
    return this.getStringAttribute('mgmt_ip');
  }
  public set mgmtIp(value: string) {
    this._mgmtIp = value;
  }
  public resetMgmtIp() {
    this._mgmtIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mgmtIpInput() {
    return this._mgmtIp;
  }

  // mgmt_ip_allowaccess - computed: true, optional: true, required: false
  private _mgmtIpAllowaccess?: string; 
  public get mgmtIpAllowaccess() {
    return this.getStringAttribute('mgmt_ip_allowaccess');
  }
  public set mgmtIpAllowaccess(value: string) {
    this._mgmtIpAllowaccess = value;
  }
  public resetMgmtIpAllowaccess() {
    this._mgmtIpAllowaccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mgmtIpAllowaccessInput() {
    return this._mgmtIpAllowaccess;
  }

  // mgmt_status - computed: true, optional: true, required: false
  private _mgmtStatus?: string; 
  public get mgmtStatus() {
    return this.getStringAttribute('mgmt_status');
  }
  public set mgmtStatus(value: string) {
    this._mgmtStatus = value;
  }
  public resetMgmtStatus() {
    this._mgmtStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mgmtStatusInput() {
    return this._mgmtStatus;
  }

  // mode - computed: true, optional: true, required: false
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }

  // monitor_enable - computed: true, optional: true, required: false
  private _monitorEnable?: string; 
  public get monitorEnable() {
    return this.getStringAttribute('monitor_enable');
  }
  public set monitorEnable(value: string) {
    this._monitorEnable = value;
  }
  public resetMonitorEnable() {
    this._monitorEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitorEnableInput() {
    return this._monitorEnable;
  }

  // node_list - computed: true, optional: true, required: false
  private _nodeList?: string; 
  public get nodeList() {
    return this.getStringAttribute('node_list');
  }
  public set nodeList(value: string) {
    this._nodeList = value;
  }
  public resetNodeList() {
    this._nodeList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeListInput() {
    return this._nodeList;
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

  // peer_address - computed: true, optional: true, required: false
  private _peerAddress?: string; 
  public get peerAddress() {
    return this.getStringAttribute('peer_address');
  }
  public set peerAddress(value: string) {
    this._peerAddress = value;
  }
  public resetPeerAddress() {
    this._peerAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peerAddressInput() {
    return this._peerAddress;
  }

  // priority - computed: true, optional: true, required: false
  private _priority?: string; 
  public get priority() {
    return this.getStringAttribute('priority');
  }
  public set priority(value: string) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // sync_l4_connection - computed: true, optional: true, required: false
  private _syncL4Connection?: string; 
  public get syncL4Connection() {
    return this.getStringAttribute('sync_l4_connection');
  }
  public set syncL4Connection(value: string) {
    this._syncL4Connection = value;
  }
  public resetSyncL4Connection() {
    this._syncL4Connection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncL4ConnectionInput() {
    return this._syncL4Connection;
  }

  // sync_l4_persistent - computed: true, optional: true, required: false
  private _syncL4Persistent?: string; 
  public get syncL4Persistent() {
    return this.getStringAttribute('sync_l4_persistent');
  }
  public set syncL4Persistent(value: string) {
    this._syncL4Persistent = value;
  }
  public resetSyncL4Persistent() {
    this._syncL4Persistent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncL4PersistentInput() {
    return this._syncL4Persistent;
  }

  // sync_l7_persistent - computed: true, optional: true, required: false
  private _syncL7Persistent?: string; 
  public get syncL7Persistent() {
    return this.getStringAttribute('sync_l7_persistent');
  }
  public set syncL7Persistent(value: string) {
    this._syncL7Persistent = value;
  }
  public resetSyncL7Persistent() {
    this._syncL7Persistent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncL7PersistentInput() {
    return this._syncL7Persistent;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      arp_interval: cdktf.stringToTerraform(this._arpInterval),
      arp_num: cdktf.stringToTerraform(this._arpNum),
      config_priority: cdktf.stringToTerraform(this._configPriority),
      datadev: cdktf.stringToTerraform(this._datadev),
      failover_hold_time: cdktf.stringToTerraform(this._failoverHoldTime),
      failover_threshold: cdktf.stringToTerraform(this._failoverThreshold),
      group_name: cdktf.stringToTerraform(this._groupName),
      groupid: cdktf.stringToTerraform(this._groupid),
      hb_lost_threshold: cdktf.stringToTerraform(this._hbLostThreshold),
      hbdev: cdktf.stringToTerraform(this._hbdev),
      hbtype: cdktf.stringToTerraform(this._hbtype),
      id: cdktf.stringToTerraform(this._id),
      interface_list: cdktf.stringToTerraform(this._interfaceList),
      interval: cdktf.stringToTerraform(this._interval),
      local_address: cdktf.stringToTerraform(this._localAddress),
      local_node_id: cdktf.stringToTerraform(this._localNodeId),
      mgmt_interface: cdktf.stringToTerraform(this._mgmtInterface),
      mgmt_ip: cdktf.stringToTerraform(this._mgmtIp),
      mgmt_ip_allowaccess: cdktf.stringToTerraform(this._mgmtIpAllowaccess),
      mgmt_status: cdktf.stringToTerraform(this._mgmtStatus),
      mode: cdktf.stringToTerraform(this._mode),
      monitor_enable: cdktf.stringToTerraform(this._monitorEnable),
      node_list: cdktf.stringToTerraform(this._nodeList),
      override: cdktf.stringToTerraform(this._override),
      peer_address: cdktf.stringToTerraform(this._peerAddress),
      priority: cdktf.stringToTerraform(this._priority),
      sync_l4_connection: cdktf.stringToTerraform(this._syncL4Connection),
      sync_l4_persistent: cdktf.stringToTerraform(this._syncL4Persistent),
      sync_l7_persistent: cdktf.stringToTerraform(this._syncL7Persistent),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      arp_interval: {
        value: cdktf.stringToHclTerraform(this._arpInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      arp_num: {
        value: cdktf.stringToHclTerraform(this._arpNum),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      config_priority: {
        value: cdktf.stringToHclTerraform(this._configPriority),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      datadev: {
        value: cdktf.stringToHclTerraform(this._datadev),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      failover_hold_time: {
        value: cdktf.stringToHclTerraform(this._failoverHoldTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      failover_threshold: {
        value: cdktf.stringToHclTerraform(this._failoverThreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      group_name: {
        value: cdktf.stringToHclTerraform(this._groupName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      groupid: {
        value: cdktf.stringToHclTerraform(this._groupid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hb_lost_threshold: {
        value: cdktf.stringToHclTerraform(this._hbLostThreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hbdev: {
        value: cdktf.stringToHclTerraform(this._hbdev),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hbtype: {
        value: cdktf.stringToHclTerraform(this._hbtype),
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
      interface_list: {
        value: cdktf.stringToHclTerraform(this._interfaceList),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      interval: {
        value: cdktf.stringToHclTerraform(this._interval),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      local_address: {
        value: cdktf.stringToHclTerraform(this._localAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      local_node_id: {
        value: cdktf.stringToHclTerraform(this._localNodeId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mgmt_interface: {
        value: cdktf.stringToHclTerraform(this._mgmtInterface),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mgmt_ip: {
        value: cdktf.stringToHclTerraform(this._mgmtIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mgmt_ip_allowaccess: {
        value: cdktf.stringToHclTerraform(this._mgmtIpAllowaccess),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mgmt_status: {
        value: cdktf.stringToHclTerraform(this._mgmtStatus),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mode: {
        value: cdktf.stringToHclTerraform(this._mode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      monitor_enable: {
        value: cdktf.stringToHclTerraform(this._monitorEnable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      node_list: {
        value: cdktf.stringToHclTerraform(this._nodeList),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      override: {
        value: cdktf.stringToHclTerraform(this._override),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      peer_address: {
        value: cdktf.stringToHclTerraform(this._peerAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      priority: {
        value: cdktf.stringToHclTerraform(this._priority),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sync_l4_connection: {
        value: cdktf.stringToHclTerraform(this._syncL4Connection),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sync_l4_persistent: {
        value: cdktf.stringToHclTerraform(this._syncL4Persistent),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sync_l7_persistent: {
        value: cdktf.stringToHclTerraform(this._syncL7Persistent),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
