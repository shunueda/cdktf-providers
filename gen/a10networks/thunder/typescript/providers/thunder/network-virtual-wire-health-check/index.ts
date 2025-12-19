// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/network_virtual_wire_health_check
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NetworkVirtualWireHealthCheckConfig extends cdktf.TerraformMetaArguments {
  /**
  * Threshold(Packet Per Second) for entering active mode
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/network_virtual_wire_health_check#active_threshold NetworkVirtualWireHealthCheck#active_threshold}
  */
  readonly activeThreshold?: number;
  /**
  * Enable the health check
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/network_virtual_wire_health_check#enable NetworkVirtualWireHealthCheck#enable}
  */
  readonly enable?: number;
  /**
  * Ethernet interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/network_virtual_wire_health_check#ethernet NetworkVirtualWireHealthCheck#ethernet}
  */
  readonly ethernet?: number;
  /**
  * Interval (Seconds), default is 3, 0 for interface event only
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/network_virtual_wire_health_check#garp_interval NetworkVirtualWireHealthCheck#garp_interval}
  */
  readonly garpInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/network_virtual_wire_health_check#id NetworkVirtualWireHealthCheck#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * inner VLAN for 802.1QinQ
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/network_virtual_wire_health_check#inner_vlan NetworkVirtualWireHealthCheck#inner_vlan}
  */
  readonly innerVlan?: number;
  /**
  * Only count packets with configured inner VLAN ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/network_virtual_wire_health_check#inner_vlan_packet_count NetworkVirtualWireHealthCheck#inner_vlan_packet_count}
  */
  readonly innerVlanPacketCount?: number;
  /**
  * Interval (Seconds), default is 3
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/network_virtual_wire_health_check#interval NetworkVirtualWireHealthCheck#interval}
  */
  readonly interval?: number;
  /**
  * Only count L3 packets
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/network_virtual_wire_health_check#l3_packet NetworkVirtualWireHealthCheck#l3_packet}
  */
  readonly l3Packet?: number;
  /**
  * 'ping': Ping; 'garp': GARP; 'packet-count': Packet Count;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/network_virtual_wire_health_check#method NetworkVirtualWireHealthCheck#method}
  */
  readonly method?: string;
  /**
  * Nexthop address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/network_virtual_wire_health_check#nexthop_ip NetworkVirtualWireHealthCheck#nexthop_ip}
  */
  readonly nexthopIp?: string;
  /**
  * Nexthop mac address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/network_virtual_wire_health_check#nexthop_mac NetworkVirtualWireHealthCheck#nexthop_mac}
  */
  readonly nexthopMac?: string;
  /**
  * Health check state stands for the partition
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/network_virtual_wire_health_check#partition_health_check NetworkVirtualWireHealthCheck#partition_health_check}
  */
  readonly partitionHealthCheck?: number;
  /**
  * Ethernet interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/network_virtual_wire_health_check#sby_ethernet NetworkVirtualWireHealthCheck#sby_ethernet}
  */
  readonly sbyEthernet?: number;
  /**
  * Trunk interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/network_virtual_wire_health_check#sby_trunk NetworkVirtualWireHealthCheck#sby_trunk}
  */
  readonly sbyTrunk?: number;
  /**
  * source ip for ping method
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/network_virtual_wire_health_check#source_ip NetworkVirtualWireHealthCheck#source_ip}
  */
  readonly sourceIp?: string;
  /**
  * source mac for ping method
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/network_virtual_wire_health_check#source_mac NetworkVirtualWireHealthCheck#source_mac}
  */
  readonly sourceMac?: string;
  /**
  * Trunk interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/network_virtual_wire_health_check#trunk NetworkVirtualWireHealthCheck#trunk}
  */
  readonly trunk?: number;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/network_virtual_wire_health_check#user_tag NetworkVirtualWireHealthCheck#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/network_virtual_wire_health_check#uuid NetworkVirtualWireHealthCheck#uuid}
  */
  readonly uuid?: string;
  /**
  * VLAN ID, specify 1 for untagged traffic
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/network_virtual_wire_health_check#vlan NetworkVirtualWireHealthCheck#vlan}
  */
  readonly vlan: number;
  /**
  * sampling_enable block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/network_virtual_wire_health_check#sampling_enable NetworkVirtualWireHealthCheck#sampling_enable}
  */
  readonly samplingEnable?: NetworkVirtualWireHealthCheckSamplingEnable[] | cdktf.IResolvable;
}
export interface NetworkVirtualWireHealthCheckSamplingEnable {
  /**
  * 'all': all; 'act-event': Active Event Count; 'sby-event': Standby Event Count; 'packet-count': Packet Count;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/network_virtual_wire_health_check#counters1 NetworkVirtualWireHealthCheck#counters1}
  */
  readonly counters1?: string;
}

export function networkVirtualWireHealthCheckSamplingEnableToTerraform(struct?: NetworkVirtualWireHealthCheckSamplingEnable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    counters1: cdktf.stringToTerraform(struct!.counters1),
  }
}


export function networkVirtualWireHealthCheckSamplingEnableToHclTerraform(struct?: NetworkVirtualWireHealthCheckSamplingEnable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    counters1: {
      value: cdktf.stringToHclTerraform(struct!.counters1),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkVirtualWireHealthCheckSamplingEnableOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): NetworkVirtualWireHealthCheckSamplingEnable | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._counters1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.counters1 = this._counters1;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkVirtualWireHealthCheckSamplingEnable | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._counters1 = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._counters1 = value.counters1;
    }
  }

  // counters1 - computed: false, optional: true, required: false
  private _counters1?: string; 
  public get counters1() {
    return this.getStringAttribute('counters1');
  }
  public set counters1(value: string) {
    this._counters1 = value;
  }
  public resetCounters1() {
    this._counters1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get counters1Input() {
    return this._counters1;
  }
}

export class NetworkVirtualWireHealthCheckSamplingEnableList extends cdktf.ComplexList {
  public internalValue? : NetworkVirtualWireHealthCheckSamplingEnable[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): NetworkVirtualWireHealthCheckSamplingEnableOutputReference {
    return new NetworkVirtualWireHealthCheckSamplingEnableOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/network_virtual_wire_health_check thunder_network_virtual_wire_health_check}
*/
export class NetworkVirtualWireHealthCheck extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_network_virtual_wire_health_check";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a NetworkVirtualWireHealthCheck resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NetworkVirtualWireHealthCheck to import
  * @param importFromId The id of the existing NetworkVirtualWireHealthCheck that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/network_virtual_wire_health_check#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NetworkVirtualWireHealthCheck to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_network_virtual_wire_health_check", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/network_virtual_wire_health_check thunder_network_virtual_wire_health_check} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NetworkVirtualWireHealthCheckConfig
  */
  public constructor(scope: Construct, id: string, config: NetworkVirtualWireHealthCheckConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_network_virtual_wire_health_check',
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
    this._activeThreshold = config.activeThreshold;
    this._enable = config.enable;
    this._ethernet = config.ethernet;
    this._garpInterval = config.garpInterval;
    this._id = config.id;
    this._innerVlan = config.innerVlan;
    this._innerVlanPacketCount = config.innerVlanPacketCount;
    this._interval = config.interval;
    this._l3Packet = config.l3Packet;
    this._method = config.method;
    this._nexthopIp = config.nexthopIp;
    this._nexthopMac = config.nexthopMac;
    this._partitionHealthCheck = config.partitionHealthCheck;
    this._sbyEthernet = config.sbyEthernet;
    this._sbyTrunk = config.sbyTrunk;
    this._sourceIp = config.sourceIp;
    this._sourceMac = config.sourceMac;
    this._trunk = config.trunk;
    this._userTag = config.userTag;
    this._uuid = config.uuid;
    this._vlan = config.vlan;
    this._samplingEnable.internalValue = config.samplingEnable;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // active_threshold - computed: false, optional: true, required: false
  private _activeThreshold?: number; 
  public get activeThreshold() {
    return this.getNumberAttribute('active_threshold');
  }
  public set activeThreshold(value: number) {
    this._activeThreshold = value;
  }
  public resetActiveThreshold() {
    this._activeThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeThresholdInput() {
    return this._activeThreshold;
  }

  // enable - computed: false, optional: true, required: false
  private _enable?: number; 
  public get enable() {
    return this.getNumberAttribute('enable');
  }
  public set enable(value: number) {
    this._enable = value;
  }
  public resetEnable() {
    this._enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
  }

  // ethernet - computed: false, optional: true, required: false
  private _ethernet?: number; 
  public get ethernet() {
    return this.getNumberAttribute('ethernet');
  }
  public set ethernet(value: number) {
    this._ethernet = value;
  }
  public resetEthernet() {
    this._ethernet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ethernetInput() {
    return this._ethernet;
  }

  // garp_interval - computed: false, optional: true, required: false
  private _garpInterval?: number; 
  public get garpInterval() {
    return this.getNumberAttribute('garp_interval');
  }
  public set garpInterval(value: number) {
    this._garpInterval = value;
  }
  public resetGarpInterval() {
    this._garpInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get garpIntervalInput() {
    return this._garpInterval;
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

  // inner_vlan - computed: false, optional: true, required: false
  private _innerVlan?: number; 
  public get innerVlan() {
    return this.getNumberAttribute('inner_vlan');
  }
  public set innerVlan(value: number) {
    this._innerVlan = value;
  }
  public resetInnerVlan() {
    this._innerVlan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get innerVlanInput() {
    return this._innerVlan;
  }

  // inner_vlan_packet_count - computed: false, optional: true, required: false
  private _innerVlanPacketCount?: number; 
  public get innerVlanPacketCount() {
    return this.getNumberAttribute('inner_vlan_packet_count');
  }
  public set innerVlanPacketCount(value: number) {
    this._innerVlanPacketCount = value;
  }
  public resetInnerVlanPacketCount() {
    this._innerVlanPacketCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get innerVlanPacketCountInput() {
    return this._innerVlanPacketCount;
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

  // l3_packet - computed: false, optional: true, required: false
  private _l3Packet?: number; 
  public get l3Packet() {
    return this.getNumberAttribute('l3_packet');
  }
  public set l3Packet(value: number) {
    this._l3Packet = value;
  }
  public resetL3Packet() {
    this._l3Packet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l3PacketInput() {
    return this._l3Packet;
  }

  // method - computed: false, optional: true, required: false
  private _method?: string; 
  public get method() {
    return this.getStringAttribute('method');
  }
  public set method(value: string) {
    this._method = value;
  }
  public resetMethod() {
    this._method = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get methodInput() {
    return this._method;
  }

  // nexthop_ip - computed: false, optional: true, required: false
  private _nexthopIp?: string; 
  public get nexthopIp() {
    return this.getStringAttribute('nexthop_ip');
  }
  public set nexthopIp(value: string) {
    this._nexthopIp = value;
  }
  public resetNexthopIp() {
    this._nexthopIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nexthopIpInput() {
    return this._nexthopIp;
  }

  // nexthop_mac - computed: false, optional: true, required: false
  private _nexthopMac?: string; 
  public get nexthopMac() {
    return this.getStringAttribute('nexthop_mac');
  }
  public set nexthopMac(value: string) {
    this._nexthopMac = value;
  }
  public resetNexthopMac() {
    this._nexthopMac = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nexthopMacInput() {
    return this._nexthopMac;
  }

  // partition_health_check - computed: false, optional: true, required: false
  private _partitionHealthCheck?: number; 
  public get partitionHealthCheck() {
    return this.getNumberAttribute('partition_health_check');
  }
  public set partitionHealthCheck(value: number) {
    this._partitionHealthCheck = value;
  }
  public resetPartitionHealthCheck() {
    this._partitionHealthCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get partitionHealthCheckInput() {
    return this._partitionHealthCheck;
  }

  // sby_ethernet - computed: false, optional: true, required: false
  private _sbyEthernet?: number; 
  public get sbyEthernet() {
    return this.getNumberAttribute('sby_ethernet');
  }
  public set sbyEthernet(value: number) {
    this._sbyEthernet = value;
  }
  public resetSbyEthernet() {
    this._sbyEthernet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sbyEthernetInput() {
    return this._sbyEthernet;
  }

  // sby_trunk - computed: false, optional: true, required: false
  private _sbyTrunk?: number; 
  public get sbyTrunk() {
    return this.getNumberAttribute('sby_trunk');
  }
  public set sbyTrunk(value: number) {
    this._sbyTrunk = value;
  }
  public resetSbyTrunk() {
    this._sbyTrunk = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sbyTrunkInput() {
    return this._sbyTrunk;
  }

  // source_ip - computed: false, optional: true, required: false
  private _sourceIp?: string; 
  public get sourceIp() {
    return this.getStringAttribute('source_ip');
  }
  public set sourceIp(value: string) {
    this._sourceIp = value;
  }
  public resetSourceIp() {
    this._sourceIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceIpInput() {
    return this._sourceIp;
  }

  // source_mac - computed: false, optional: true, required: false
  private _sourceMac?: string; 
  public get sourceMac() {
    return this.getStringAttribute('source_mac');
  }
  public set sourceMac(value: string) {
    this._sourceMac = value;
  }
  public resetSourceMac() {
    this._sourceMac = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceMacInput() {
    return this._sourceMac;
  }

  // trunk - computed: false, optional: true, required: false
  private _trunk?: number; 
  public get trunk() {
    return this.getNumberAttribute('trunk');
  }
  public set trunk(value: number) {
    this._trunk = value;
  }
  public resetTrunk() {
    this._trunk = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trunkInput() {
    return this._trunk;
  }

  // user_tag - computed: false, optional: true, required: false
  private _userTag?: string; 
  public get userTag() {
    return this.getStringAttribute('user_tag');
  }
  public set userTag(value: string) {
    this._userTag = value;
  }
  public resetUserTag() {
    this._userTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userTagInput() {
    return this._userTag;
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

  // vlan - computed: false, optional: false, required: true
  private _vlan?: number; 
  public get vlan() {
    return this.getNumberAttribute('vlan');
  }
  public set vlan(value: number) {
    this._vlan = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanInput() {
    return this._vlan;
  }

  // sampling_enable - computed: false, optional: true, required: false
  private _samplingEnable = new NetworkVirtualWireHealthCheckSamplingEnableList(this, "sampling_enable", false);
  public get samplingEnable() {
    return this._samplingEnable;
  }
  public putSamplingEnable(value: NetworkVirtualWireHealthCheckSamplingEnable[] | cdktf.IResolvable) {
    this._samplingEnable.internalValue = value;
  }
  public resetSamplingEnable() {
    this._samplingEnable.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samplingEnableInput() {
    return this._samplingEnable.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      active_threshold: cdktf.numberToTerraform(this._activeThreshold),
      enable: cdktf.numberToTerraform(this._enable),
      ethernet: cdktf.numberToTerraform(this._ethernet),
      garp_interval: cdktf.numberToTerraform(this._garpInterval),
      id: cdktf.stringToTerraform(this._id),
      inner_vlan: cdktf.numberToTerraform(this._innerVlan),
      inner_vlan_packet_count: cdktf.numberToTerraform(this._innerVlanPacketCount),
      interval: cdktf.numberToTerraform(this._interval),
      l3_packet: cdktf.numberToTerraform(this._l3Packet),
      method: cdktf.stringToTerraform(this._method),
      nexthop_ip: cdktf.stringToTerraform(this._nexthopIp),
      nexthop_mac: cdktf.stringToTerraform(this._nexthopMac),
      partition_health_check: cdktf.numberToTerraform(this._partitionHealthCheck),
      sby_ethernet: cdktf.numberToTerraform(this._sbyEthernet),
      sby_trunk: cdktf.numberToTerraform(this._sbyTrunk),
      source_ip: cdktf.stringToTerraform(this._sourceIp),
      source_mac: cdktf.stringToTerraform(this._sourceMac),
      trunk: cdktf.numberToTerraform(this._trunk),
      user_tag: cdktf.stringToTerraform(this._userTag),
      uuid: cdktf.stringToTerraform(this._uuid),
      vlan: cdktf.numberToTerraform(this._vlan),
      sampling_enable: cdktf.listMapper(networkVirtualWireHealthCheckSamplingEnableToTerraform, true)(this._samplingEnable.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      active_threshold: {
        value: cdktf.numberToHclTerraform(this._activeThreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      enable: {
        value: cdktf.numberToHclTerraform(this._enable),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ethernet: {
        value: cdktf.numberToHclTerraform(this._ethernet),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      garp_interval: {
        value: cdktf.numberToHclTerraform(this._garpInterval),
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
      inner_vlan: {
        value: cdktf.numberToHclTerraform(this._innerVlan),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      inner_vlan_packet_count: {
        value: cdktf.numberToHclTerraform(this._innerVlanPacketCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      interval: {
        value: cdktf.numberToHclTerraform(this._interval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      l3_packet: {
        value: cdktf.numberToHclTerraform(this._l3Packet),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      method: {
        value: cdktf.stringToHclTerraform(this._method),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      nexthop_ip: {
        value: cdktf.stringToHclTerraform(this._nexthopIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      nexthop_mac: {
        value: cdktf.stringToHclTerraform(this._nexthopMac),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      partition_health_check: {
        value: cdktf.numberToHclTerraform(this._partitionHealthCheck),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      sby_ethernet: {
        value: cdktf.numberToHclTerraform(this._sbyEthernet),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      sby_trunk: {
        value: cdktf.numberToHclTerraform(this._sbyTrunk),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      source_ip: {
        value: cdktf.stringToHclTerraform(this._sourceIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_mac: {
        value: cdktf.stringToHclTerraform(this._sourceMac),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      trunk: {
        value: cdktf.numberToHclTerraform(this._trunk),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      user_tag: {
        value: cdktf.stringToHclTerraform(this._userTag),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vlan: {
        value: cdktf.numberToHclTerraform(this._vlan),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      sampling_enable: {
        value: cdktf.listMapperHcl(networkVirtualWireHealthCheckSamplingEnableToHclTerraform, true)(this._samplingEnable.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "NetworkVirtualWireHealthCheckSamplingEnableList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
