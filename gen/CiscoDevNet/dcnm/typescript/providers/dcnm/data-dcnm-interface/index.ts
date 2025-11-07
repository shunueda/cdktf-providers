// https://registry.terraform.io/providers/ciscodevnet/dcnm/1.2.7/docs/data-sources/interface
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataDcnmInterfaceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/dcnm/1.2.7/docs/data-sources/interface#access_vlans DataDcnmInterface#access_vlans}
  */
  readonly accessVlans?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/dcnm/1.2.7/docs/data-sources/interface#admin_state DataDcnmInterface#admin_state}
  */
  readonly adminState?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/dcnm/1.2.7/docs/data-sources/interface#allowed_vlans DataDcnmInterface#allowed_vlans}
  */
  readonly allowedVlans?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/dcnm/1.2.7/docs/data-sources/interface#bpdu_guard_flag DataDcnmInterface#bpdu_guard_flag}
  */
  readonly bpduGuardFlag?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/dcnm/1.2.7/docs/data-sources/interface#configuration DataDcnmInterface#configuration}
  */
  readonly configuration?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/dcnm/1.2.7/docs/data-sources/interface#deploy DataDcnmInterface#deploy}
  */
  readonly deploy?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/dcnm/1.2.7/docs/data-sources/interface#description DataDcnmInterface#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/dcnm/1.2.7/docs/data-sources/interface#ethernet_speed DataDcnmInterface#ethernet_speed}
  */
  readonly ethernetSpeed?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/dcnm/1.2.7/docs/data-sources/interface#fabric_name DataDcnmInterface#fabric_name}
  */
  readonly fabricName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/dcnm/1.2.7/docs/data-sources/interface#id DataDcnmInterface#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/dcnm/1.2.7/docs/data-sources/interface#ipv4 DataDcnmInterface#ipv4}
  */
  readonly ipv4?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/dcnm/1.2.7/docs/data-sources/interface#ipv4_prefix DataDcnmInterface#ipv4_prefix}
  */
  readonly ipv4Prefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/dcnm/1.2.7/docs/data-sources/interface#ipv6 DataDcnmInterface#ipv6}
  */
  readonly ipv6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/dcnm/1.2.7/docs/data-sources/interface#ipv6_prefix DataDcnmInterface#ipv6_prefix}
  */
  readonly ipv6Prefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/dcnm/1.2.7/docs/data-sources/interface#loopback_ls_routing DataDcnmInterface#loopback_ls_routing}
  */
  readonly loopbackLsRouting?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/dcnm/1.2.7/docs/data-sources/interface#loopback_replication_mode DataDcnmInterface#loopback_replication_mode}
  */
  readonly loopbackReplicationMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/dcnm/1.2.7/docs/data-sources/interface#loopback_router_id DataDcnmInterface#loopback_router_id}
  */
  readonly loopbackRouterId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/dcnm/1.2.7/docs/data-sources/interface#loopback_routing_tag DataDcnmInterface#loopback_routing_tag}
  */
  readonly loopbackRoutingTag?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/dcnm/1.2.7/docs/data-sources/interface#loopback_tag DataDcnmInterface#loopback_tag}
  */
  readonly loopbackTag?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/dcnm/1.2.7/docs/data-sources/interface#mode DataDcnmInterface#mode}
  */
  readonly mode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/dcnm/1.2.7/docs/data-sources/interface#mtu DataDcnmInterface#mtu}
  */
  readonly mtu?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/dcnm/1.2.7/docs/data-sources/interface#name DataDcnmInterface#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/dcnm/1.2.7/docs/data-sources/interface#pc_interface DataDcnmInterface#pc_interface}
  */
  readonly pcInterface?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/dcnm/1.2.7/docs/data-sources/interface#policy DataDcnmInterface#policy}
  */
  readonly policy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/dcnm/1.2.7/docs/data-sources/interface#port_fast_flag DataDcnmInterface#port_fast_flag}
  */
  readonly portFastFlag?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/dcnm/1.2.7/docs/data-sources/interface#serial_number DataDcnmInterface#serial_number}
  */
  readonly serialNumber: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/dcnm/1.2.7/docs/data-sources/interface#subinterface_mtu DataDcnmInterface#subinterface_mtu}
  */
  readonly subinterfaceMtu?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/dcnm/1.2.7/docs/data-sources/interface#subinterface_vlan DataDcnmInterface#subinterface_vlan}
  */
  readonly subinterfaceVlan?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/dcnm/1.2.7/docs/data-sources/interface#switch_name_1 DataDcnmInterface#switch_name_1}
  */
  readonly switchName1?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/dcnm/1.2.7/docs/data-sources/interface#switch_name_2 DataDcnmInterface#switch_name_2}
  */
  readonly switchName2?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/dcnm/1.2.7/docs/data-sources/interface#type DataDcnmInterface#type}
  */
  readonly type: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/dcnm/1.2.7/docs/data-sources/interface#vpc_peer1_access_vlans DataDcnmInterface#vpc_peer1_access_vlans}
  */
  readonly vpcPeer1AccessVlans?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/dcnm/1.2.7/docs/data-sources/interface#vpc_peer1_allowed_vlans DataDcnmInterface#vpc_peer1_allowed_vlans}
  */
  readonly vpcPeer1AllowedVlans?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/dcnm/1.2.7/docs/data-sources/interface#vpc_peer1_conf DataDcnmInterface#vpc_peer1_conf}
  */
  readonly vpcPeer1Conf?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/dcnm/1.2.7/docs/data-sources/interface#vpc_peer1_desc DataDcnmInterface#vpc_peer1_desc}
  */
  readonly vpcPeer1Desc?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/dcnm/1.2.7/docs/data-sources/interface#vpc_peer1_id DataDcnmInterface#vpc_peer1_id}
  */
  readonly vpcPeer1Id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/dcnm/1.2.7/docs/data-sources/interface#vpc_peer1_interface DataDcnmInterface#vpc_peer1_interface}
  */
  readonly vpcPeer1Interface?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/dcnm/1.2.7/docs/data-sources/interface#vpc_peer2_access_vlans DataDcnmInterface#vpc_peer2_access_vlans}
  */
  readonly vpcPeer2AccessVlans?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/dcnm/1.2.7/docs/data-sources/interface#vpc_peer2_allowed_vlans DataDcnmInterface#vpc_peer2_allowed_vlans}
  */
  readonly vpcPeer2AllowedVlans?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/dcnm/1.2.7/docs/data-sources/interface#vpc_peer2_conf DataDcnmInterface#vpc_peer2_conf}
  */
  readonly vpcPeer2Conf?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/dcnm/1.2.7/docs/data-sources/interface#vpc_peer2_desc DataDcnmInterface#vpc_peer2_desc}
  */
  readonly vpcPeer2Desc?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/dcnm/1.2.7/docs/data-sources/interface#vpc_peer2_id DataDcnmInterface#vpc_peer2_id}
  */
  readonly vpcPeer2Id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/dcnm/1.2.7/docs/data-sources/interface#vpc_peer2_interface DataDcnmInterface#vpc_peer2_interface}
  */
  readonly vpcPeer2Interface?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/dcnm/1.2.7/docs/data-sources/interface#vrf DataDcnmInterface#vrf}
  */
  readonly vrf?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/dcnm/1.2.7/docs/data-sources/interface dcnm_interface}
*/
export class DataDcnmInterface extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dcnm_interface";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataDcnmInterface resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataDcnmInterface to import
  * @param importFromId The id of the existing DataDcnmInterface that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/dcnm/1.2.7/docs/data-sources/interface#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataDcnmInterface to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dcnm_interface", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/dcnm/1.2.7/docs/data-sources/interface dcnm_interface} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataDcnmInterfaceConfig
  */
  public constructor(scope: Construct, id: string, config: DataDcnmInterfaceConfig) {
    super(scope, id, {
      terraformResourceType: 'dcnm_interface',
      terraformGeneratorMetadata: {
        providerName: 'dcnm',
        providerVersion: '1.2.7'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accessVlans = config.accessVlans;
    this._adminState = config.adminState;
    this._allowedVlans = config.allowedVlans;
    this._bpduGuardFlag = config.bpduGuardFlag;
    this._configuration = config.configuration;
    this._deploy = config.deploy;
    this._description = config.description;
    this._ethernetSpeed = config.ethernetSpeed;
    this._fabricName = config.fabricName;
    this._id = config.id;
    this._ipv4 = config.ipv4;
    this._ipv4Prefix = config.ipv4Prefix;
    this._ipv6 = config.ipv6;
    this._ipv6Prefix = config.ipv6Prefix;
    this._loopbackLsRouting = config.loopbackLsRouting;
    this._loopbackReplicationMode = config.loopbackReplicationMode;
    this._loopbackRouterId = config.loopbackRouterId;
    this._loopbackRoutingTag = config.loopbackRoutingTag;
    this._loopbackTag = config.loopbackTag;
    this._mode = config.mode;
    this._mtu = config.mtu;
    this._name = config.name;
    this._pcInterface = config.pcInterface;
    this._policy = config.policy;
    this._portFastFlag = config.portFastFlag;
    this._serialNumber = config.serialNumber;
    this._subinterfaceMtu = config.subinterfaceMtu;
    this._subinterfaceVlan = config.subinterfaceVlan;
    this._switchName1 = config.switchName1;
    this._switchName2 = config.switchName2;
    this._type = config.type;
    this._vpcPeer1AccessVlans = config.vpcPeer1AccessVlans;
    this._vpcPeer1AllowedVlans = config.vpcPeer1AllowedVlans;
    this._vpcPeer1Conf = config.vpcPeer1Conf;
    this._vpcPeer1Desc = config.vpcPeer1Desc;
    this._vpcPeer1Id = config.vpcPeer1Id;
    this._vpcPeer1Interface = config.vpcPeer1Interface;
    this._vpcPeer2AccessVlans = config.vpcPeer2AccessVlans;
    this._vpcPeer2AllowedVlans = config.vpcPeer2AllowedVlans;
    this._vpcPeer2Conf = config.vpcPeer2Conf;
    this._vpcPeer2Desc = config.vpcPeer2Desc;
    this._vpcPeer2Id = config.vpcPeer2Id;
    this._vpcPeer2Interface = config.vpcPeer2Interface;
    this._vrf = config.vrf;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_vlans - computed: true, optional: true, required: false
  private _accessVlans?: string; 
  public get accessVlans() {
    return this.getStringAttribute('access_vlans');
  }
  public set accessVlans(value: string) {
    this._accessVlans = value;
  }
  public resetAccessVlans() {
    this._accessVlans = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessVlansInput() {
    return this._accessVlans;
  }

  // admin_state - computed: true, optional: true, required: false
  private _adminState?: boolean | cdktf.IResolvable; 
  public get adminState() {
    return this.getBooleanAttribute('admin_state');
  }
  public set adminState(value: boolean | cdktf.IResolvable) {
    this._adminState = value;
  }
  public resetAdminState() {
    this._adminState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminStateInput() {
    return this._adminState;
  }

  // allowed_vlans - computed: true, optional: true, required: false
  private _allowedVlans?: string; 
  public get allowedVlans() {
    return this.getStringAttribute('allowed_vlans');
  }
  public set allowedVlans(value: string) {
    this._allowedVlans = value;
  }
  public resetAllowedVlans() {
    this._allowedVlans = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedVlansInput() {
    return this._allowedVlans;
  }

  // bpdu_guard_flag - computed: true, optional: true, required: false
  private _bpduGuardFlag?: string; 
  public get bpduGuardFlag() {
    return this.getStringAttribute('bpdu_guard_flag');
  }
  public set bpduGuardFlag(value: string) {
    this._bpduGuardFlag = value;
  }
  public resetBpduGuardFlag() {
    this._bpduGuardFlag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bpduGuardFlagInput() {
    return this._bpduGuardFlag;
  }

  // configuration - computed: true, optional: true, required: false
  private _configuration?: string; 
  public get configuration() {
    return this.getStringAttribute('configuration');
  }
  public set configuration(value: string) {
    this._configuration = value;
  }
  public resetConfiguration() {
    this._configuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationInput() {
    return this._configuration;
  }

  // deploy - computed: true, optional: true, required: false
  private _deploy?: boolean | cdktf.IResolvable; 
  public get deploy() {
    return this.getBooleanAttribute('deploy');
  }
  public set deploy(value: boolean | cdktf.IResolvable) {
    this._deploy = value;
  }
  public resetDeploy() {
    this._deploy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deployInput() {
    return this._deploy;
  }

  // description - computed: true, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // ethernet_speed - computed: true, optional: true, required: false
  private _ethernetSpeed?: string; 
  public get ethernetSpeed() {
    return this.getStringAttribute('ethernet_speed');
  }
  public set ethernetSpeed(value: string) {
    this._ethernetSpeed = value;
  }
  public resetEthernetSpeed() {
    this._ethernetSpeed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ethernetSpeedInput() {
    return this._ethernetSpeed;
  }

  // fabric_name - computed: true, optional: true, required: false
  private _fabricName?: string; 
  public get fabricName() {
    return this.getStringAttribute('fabric_name');
  }
  public set fabricName(value: string) {
    this._fabricName = value;
  }
  public resetFabricName() {
    this._fabricName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fabricNameInput() {
    return this._fabricName;
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

  // ipv4 - computed: true, optional: true, required: false
  private _ipv4?: string; 
  public get ipv4() {
    return this.getStringAttribute('ipv4');
  }
  public set ipv4(value: string) {
    this._ipv4 = value;
  }
  public resetIpv4() {
    this._ipv4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4Input() {
    return this._ipv4;
  }

  // ipv4_prefix - computed: true, optional: true, required: false
  private _ipv4Prefix?: string; 
  public get ipv4Prefix() {
    return this.getStringAttribute('ipv4_prefix');
  }
  public set ipv4Prefix(value: string) {
    this._ipv4Prefix = value;
  }
  public resetIpv4Prefix() {
    this._ipv4Prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4PrefixInput() {
    return this._ipv4Prefix;
  }

  // ipv6 - computed: true, optional: true, required: false
  private _ipv6?: string; 
  public get ipv6() {
    return this.getStringAttribute('ipv6');
  }
  public set ipv6(value: string) {
    this._ipv6 = value;
  }
  public resetIpv6() {
    this._ipv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6Input() {
    return this._ipv6;
  }

  // ipv6_prefix - computed: true, optional: true, required: false
  private _ipv6Prefix?: string; 
  public get ipv6Prefix() {
    return this.getStringAttribute('ipv6_prefix');
  }
  public set ipv6Prefix(value: string) {
    this._ipv6Prefix = value;
  }
  public resetIpv6Prefix() {
    this._ipv6Prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6PrefixInput() {
    return this._ipv6Prefix;
  }

  // loopback_ls_routing - computed: true, optional: true, required: false
  private _loopbackLsRouting?: string; 
  public get loopbackLsRouting() {
    return this.getStringAttribute('loopback_ls_routing');
  }
  public set loopbackLsRouting(value: string) {
    this._loopbackLsRouting = value;
  }
  public resetLoopbackLsRouting() {
    this._loopbackLsRouting = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loopbackLsRoutingInput() {
    return this._loopbackLsRouting;
  }

  // loopback_replication_mode - computed: true, optional: true, required: false
  private _loopbackReplicationMode?: string; 
  public get loopbackReplicationMode() {
    return this.getStringAttribute('loopback_replication_mode');
  }
  public set loopbackReplicationMode(value: string) {
    this._loopbackReplicationMode = value;
  }
  public resetLoopbackReplicationMode() {
    this._loopbackReplicationMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loopbackReplicationModeInput() {
    return this._loopbackReplicationMode;
  }

  // loopback_router_id - computed: true, optional: true, required: false
  private _loopbackRouterId?: string; 
  public get loopbackRouterId() {
    return this.getStringAttribute('loopback_router_id');
  }
  public set loopbackRouterId(value: string) {
    this._loopbackRouterId = value;
  }
  public resetLoopbackRouterId() {
    this._loopbackRouterId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loopbackRouterIdInput() {
    return this._loopbackRouterId;
  }

  // loopback_routing_tag - computed: true, optional: true, required: false
  private _loopbackRoutingTag?: string; 
  public get loopbackRoutingTag() {
    return this.getStringAttribute('loopback_routing_tag');
  }
  public set loopbackRoutingTag(value: string) {
    this._loopbackRoutingTag = value;
  }
  public resetLoopbackRoutingTag() {
    this._loopbackRoutingTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loopbackRoutingTagInput() {
    return this._loopbackRoutingTag;
  }

  // loopback_tag - computed: true, optional: true, required: false
  private _loopbackTag?: string; 
  public get loopbackTag() {
    return this.getStringAttribute('loopback_tag');
  }
  public set loopbackTag(value: string) {
    this._loopbackTag = value;
  }
  public resetLoopbackTag() {
    this._loopbackTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loopbackTagInput() {
    return this._loopbackTag;
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

  // mtu - computed: true, optional: true, required: false
  private _mtu?: string; 
  public get mtu() {
    return this.getStringAttribute('mtu');
  }
  public set mtu(value: string) {
    this._mtu = value;
  }
  public resetMtu() {
    this._mtu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mtuInput() {
    return this._mtu;
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

  // pc_interface - computed: true, optional: true, required: false
  private _pcInterface?: string[]; 
  public get pcInterface() {
    return this.getListAttribute('pc_interface');
  }
  public set pcInterface(value: string[]) {
    this._pcInterface = value;
  }
  public resetPcInterface() {
    this._pcInterface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pcInterfaceInput() {
    return this._pcInterface;
  }

  // policy - computed: true, optional: true, required: false
  private _policy?: string; 
  public get policy() {
    return this.getStringAttribute('policy');
  }
  public set policy(value: string) {
    this._policy = value;
  }
  public resetPolicy() {
    this._policy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyInput() {
    return this._policy;
  }

  // port_fast_flag - computed: false, optional: true, required: false
  private _portFastFlag?: boolean | cdktf.IResolvable; 
  public get portFastFlag() {
    return this.getBooleanAttribute('port_fast_flag');
  }
  public set portFastFlag(value: boolean | cdktf.IResolvable) {
    this._portFastFlag = value;
  }
  public resetPortFastFlag() {
    this._portFastFlag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portFastFlagInput() {
    return this._portFastFlag;
  }

  // serial_number - computed: false, optional: false, required: true
  private _serialNumber?: string; 
  public get serialNumber() {
    return this.getStringAttribute('serial_number');
  }
  public set serialNumber(value: string) {
    this._serialNumber = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serialNumberInput() {
    return this._serialNumber;
  }

  // subinterface_mtu - computed: true, optional: true, required: false
  private _subinterfaceMtu?: string; 
  public get subinterfaceMtu() {
    return this.getStringAttribute('subinterface_mtu');
  }
  public set subinterfaceMtu(value: string) {
    this._subinterfaceMtu = value;
  }
  public resetSubinterfaceMtu() {
    this._subinterfaceMtu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subinterfaceMtuInput() {
    return this._subinterfaceMtu;
  }

  // subinterface_vlan - computed: true, optional: true, required: false
  private _subinterfaceVlan?: number; 
  public get subinterfaceVlan() {
    return this.getNumberAttribute('subinterface_vlan');
  }
  public set subinterfaceVlan(value: number) {
    this._subinterfaceVlan = value;
  }
  public resetSubinterfaceVlan() {
    this._subinterfaceVlan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subinterfaceVlanInput() {
    return this._subinterfaceVlan;
  }

  // switch_name_1 - computed: true, optional: true, required: false
  private _switchName1?: string; 
  public get switchName1() {
    return this.getStringAttribute('switch_name_1');
  }
  public set switchName1(value: string) {
    this._switchName1 = value;
  }
  public resetSwitchName1() {
    this._switchName1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get switchName1Input() {
    return this._switchName1;
  }

  // switch_name_2 - computed: true, optional: true, required: false
  private _switchName2?: string; 
  public get switchName2() {
    return this.getStringAttribute('switch_name_2');
  }
  public set switchName2(value: string) {
    this._switchName2 = value;
  }
  public resetSwitchName2() {
    this._switchName2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get switchName2Input() {
    return this._switchName2;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // vpc_peer1_access_vlans - computed: true, optional: true, required: false
  private _vpcPeer1AccessVlans?: string; 
  public get vpcPeer1AccessVlans() {
    return this.getStringAttribute('vpc_peer1_access_vlans');
  }
  public set vpcPeer1AccessVlans(value: string) {
    this._vpcPeer1AccessVlans = value;
  }
  public resetVpcPeer1AccessVlans() {
    this._vpcPeer1AccessVlans = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcPeer1AccessVlansInput() {
    return this._vpcPeer1AccessVlans;
  }

  // vpc_peer1_allowed_vlans - computed: true, optional: true, required: false
  private _vpcPeer1AllowedVlans?: string; 
  public get vpcPeer1AllowedVlans() {
    return this.getStringAttribute('vpc_peer1_allowed_vlans');
  }
  public set vpcPeer1AllowedVlans(value: string) {
    this._vpcPeer1AllowedVlans = value;
  }
  public resetVpcPeer1AllowedVlans() {
    this._vpcPeer1AllowedVlans = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcPeer1AllowedVlansInput() {
    return this._vpcPeer1AllowedVlans;
  }

  // vpc_peer1_conf - computed: true, optional: true, required: false
  private _vpcPeer1Conf?: string; 
  public get vpcPeer1Conf() {
    return this.getStringAttribute('vpc_peer1_conf');
  }
  public set vpcPeer1Conf(value: string) {
    this._vpcPeer1Conf = value;
  }
  public resetVpcPeer1Conf() {
    this._vpcPeer1Conf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcPeer1ConfInput() {
    return this._vpcPeer1Conf;
  }

  // vpc_peer1_desc - computed: true, optional: true, required: false
  private _vpcPeer1Desc?: string; 
  public get vpcPeer1Desc() {
    return this.getStringAttribute('vpc_peer1_desc');
  }
  public set vpcPeer1Desc(value: string) {
    this._vpcPeer1Desc = value;
  }
  public resetVpcPeer1Desc() {
    this._vpcPeer1Desc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcPeer1DescInput() {
    return this._vpcPeer1Desc;
  }

  // vpc_peer1_id - computed: true, optional: true, required: false
  private _vpcPeer1Id?: number; 
  public get vpcPeer1Id() {
    return this.getNumberAttribute('vpc_peer1_id');
  }
  public set vpcPeer1Id(value: number) {
    this._vpcPeer1Id = value;
  }
  public resetVpcPeer1Id() {
    this._vpcPeer1Id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcPeer1IdInput() {
    return this._vpcPeer1Id;
  }

  // vpc_peer1_interface - computed: true, optional: true, required: false
  private _vpcPeer1Interface?: string[]; 
  public get vpcPeer1Interface() {
    return this.getListAttribute('vpc_peer1_interface');
  }
  public set vpcPeer1Interface(value: string[]) {
    this._vpcPeer1Interface = value;
  }
  public resetVpcPeer1Interface() {
    this._vpcPeer1Interface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcPeer1InterfaceInput() {
    return this._vpcPeer1Interface;
  }

  // vpc_peer2_access_vlans - computed: true, optional: true, required: false
  private _vpcPeer2AccessVlans?: string; 
  public get vpcPeer2AccessVlans() {
    return this.getStringAttribute('vpc_peer2_access_vlans');
  }
  public set vpcPeer2AccessVlans(value: string) {
    this._vpcPeer2AccessVlans = value;
  }
  public resetVpcPeer2AccessVlans() {
    this._vpcPeer2AccessVlans = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcPeer2AccessVlansInput() {
    return this._vpcPeer2AccessVlans;
  }

  // vpc_peer2_allowed_vlans - computed: true, optional: true, required: false
  private _vpcPeer2AllowedVlans?: string; 
  public get vpcPeer2AllowedVlans() {
    return this.getStringAttribute('vpc_peer2_allowed_vlans');
  }
  public set vpcPeer2AllowedVlans(value: string) {
    this._vpcPeer2AllowedVlans = value;
  }
  public resetVpcPeer2AllowedVlans() {
    this._vpcPeer2AllowedVlans = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcPeer2AllowedVlansInput() {
    return this._vpcPeer2AllowedVlans;
  }

  // vpc_peer2_conf - computed: true, optional: true, required: false
  private _vpcPeer2Conf?: string; 
  public get vpcPeer2Conf() {
    return this.getStringAttribute('vpc_peer2_conf');
  }
  public set vpcPeer2Conf(value: string) {
    this._vpcPeer2Conf = value;
  }
  public resetVpcPeer2Conf() {
    this._vpcPeer2Conf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcPeer2ConfInput() {
    return this._vpcPeer2Conf;
  }

  // vpc_peer2_desc - computed: true, optional: true, required: false
  private _vpcPeer2Desc?: string; 
  public get vpcPeer2Desc() {
    return this.getStringAttribute('vpc_peer2_desc');
  }
  public set vpcPeer2Desc(value: string) {
    this._vpcPeer2Desc = value;
  }
  public resetVpcPeer2Desc() {
    this._vpcPeer2Desc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcPeer2DescInput() {
    return this._vpcPeer2Desc;
  }

  // vpc_peer2_id - computed: true, optional: true, required: false
  private _vpcPeer2Id?: number; 
  public get vpcPeer2Id() {
    return this.getNumberAttribute('vpc_peer2_id');
  }
  public set vpcPeer2Id(value: number) {
    this._vpcPeer2Id = value;
  }
  public resetVpcPeer2Id() {
    this._vpcPeer2Id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcPeer2IdInput() {
    return this._vpcPeer2Id;
  }

  // vpc_peer2_interface - computed: true, optional: true, required: false
  private _vpcPeer2Interface?: string[]; 
  public get vpcPeer2Interface() {
    return this.getListAttribute('vpc_peer2_interface');
  }
  public set vpcPeer2Interface(value: string[]) {
    this._vpcPeer2Interface = value;
  }
  public resetVpcPeer2Interface() {
    this._vpcPeer2Interface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcPeer2InterfaceInput() {
    return this._vpcPeer2Interface;
  }

  // vrf - computed: true, optional: true, required: false
  private _vrf?: string; 
  public get vrf() {
    return this.getStringAttribute('vrf');
  }
  public set vrf(value: string) {
    this._vrf = value;
  }
  public resetVrf() {
    this._vrf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vrfInput() {
    return this._vrf;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      access_vlans: cdktf.stringToTerraform(this._accessVlans),
      admin_state: cdktf.booleanToTerraform(this._adminState),
      allowed_vlans: cdktf.stringToTerraform(this._allowedVlans),
      bpdu_guard_flag: cdktf.stringToTerraform(this._bpduGuardFlag),
      configuration: cdktf.stringToTerraform(this._configuration),
      deploy: cdktf.booleanToTerraform(this._deploy),
      description: cdktf.stringToTerraform(this._description),
      ethernet_speed: cdktf.stringToTerraform(this._ethernetSpeed),
      fabric_name: cdktf.stringToTerraform(this._fabricName),
      id: cdktf.stringToTerraform(this._id),
      ipv4: cdktf.stringToTerraform(this._ipv4),
      ipv4_prefix: cdktf.stringToTerraform(this._ipv4Prefix),
      ipv6: cdktf.stringToTerraform(this._ipv6),
      ipv6_prefix: cdktf.stringToTerraform(this._ipv6Prefix),
      loopback_ls_routing: cdktf.stringToTerraform(this._loopbackLsRouting),
      loopback_replication_mode: cdktf.stringToTerraform(this._loopbackReplicationMode),
      loopback_router_id: cdktf.stringToTerraform(this._loopbackRouterId),
      loopback_routing_tag: cdktf.stringToTerraform(this._loopbackRoutingTag),
      loopback_tag: cdktf.stringToTerraform(this._loopbackTag),
      mode: cdktf.stringToTerraform(this._mode),
      mtu: cdktf.stringToTerraform(this._mtu),
      name: cdktf.stringToTerraform(this._name),
      pc_interface: cdktf.listMapper(cdktf.stringToTerraform, false)(this._pcInterface),
      policy: cdktf.stringToTerraform(this._policy),
      port_fast_flag: cdktf.booleanToTerraform(this._portFastFlag),
      serial_number: cdktf.stringToTerraform(this._serialNumber),
      subinterface_mtu: cdktf.stringToTerraform(this._subinterfaceMtu),
      subinterface_vlan: cdktf.numberToTerraform(this._subinterfaceVlan),
      switch_name_1: cdktf.stringToTerraform(this._switchName1),
      switch_name_2: cdktf.stringToTerraform(this._switchName2),
      type: cdktf.stringToTerraform(this._type),
      vpc_peer1_access_vlans: cdktf.stringToTerraform(this._vpcPeer1AccessVlans),
      vpc_peer1_allowed_vlans: cdktf.stringToTerraform(this._vpcPeer1AllowedVlans),
      vpc_peer1_conf: cdktf.stringToTerraform(this._vpcPeer1Conf),
      vpc_peer1_desc: cdktf.stringToTerraform(this._vpcPeer1Desc),
      vpc_peer1_id: cdktf.numberToTerraform(this._vpcPeer1Id),
      vpc_peer1_interface: cdktf.listMapper(cdktf.stringToTerraform, false)(this._vpcPeer1Interface),
      vpc_peer2_access_vlans: cdktf.stringToTerraform(this._vpcPeer2AccessVlans),
      vpc_peer2_allowed_vlans: cdktf.stringToTerraform(this._vpcPeer2AllowedVlans),
      vpc_peer2_conf: cdktf.stringToTerraform(this._vpcPeer2Conf),
      vpc_peer2_desc: cdktf.stringToTerraform(this._vpcPeer2Desc),
      vpc_peer2_id: cdktf.numberToTerraform(this._vpcPeer2Id),
      vpc_peer2_interface: cdktf.listMapper(cdktf.stringToTerraform, false)(this._vpcPeer2Interface),
      vrf: cdktf.stringToTerraform(this._vrf),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      access_vlans: {
        value: cdktf.stringToHclTerraform(this._accessVlans),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      admin_state: {
        value: cdktf.booleanToHclTerraform(this._adminState),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      allowed_vlans: {
        value: cdktf.stringToHclTerraform(this._allowedVlans),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bpdu_guard_flag: {
        value: cdktf.stringToHclTerraform(this._bpduGuardFlag),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      configuration: {
        value: cdktf.stringToHclTerraform(this._configuration),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      deploy: {
        value: cdktf.booleanToHclTerraform(this._deploy),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ethernet_speed: {
        value: cdktf.stringToHclTerraform(this._ethernetSpeed),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fabric_name: {
        value: cdktf.stringToHclTerraform(this._fabricName),
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
      ipv4: {
        value: cdktf.stringToHclTerraform(this._ipv4),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv4_prefix: {
        value: cdktf.stringToHclTerraform(this._ipv4Prefix),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv6: {
        value: cdktf.stringToHclTerraform(this._ipv6),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv6_prefix: {
        value: cdktf.stringToHclTerraform(this._ipv6Prefix),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      loopback_ls_routing: {
        value: cdktf.stringToHclTerraform(this._loopbackLsRouting),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      loopback_replication_mode: {
        value: cdktf.stringToHclTerraform(this._loopbackReplicationMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      loopback_router_id: {
        value: cdktf.stringToHclTerraform(this._loopbackRouterId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      loopback_routing_tag: {
        value: cdktf.stringToHclTerraform(this._loopbackRoutingTag),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      loopback_tag: {
        value: cdktf.stringToHclTerraform(this._loopbackTag),
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
      mtu: {
        value: cdktf.stringToHclTerraform(this._mtu),
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
      pc_interface: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._pcInterface),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      policy: {
        value: cdktf.stringToHclTerraform(this._policy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      port_fast_flag: {
        value: cdktf.booleanToHclTerraform(this._portFastFlag),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      serial_number: {
        value: cdktf.stringToHclTerraform(this._serialNumber),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      subinterface_mtu: {
        value: cdktf.stringToHclTerraform(this._subinterfaceMtu),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      subinterface_vlan: {
        value: cdktf.numberToHclTerraform(this._subinterfaceVlan),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      switch_name_1: {
        value: cdktf.stringToHclTerraform(this._switchName1),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      switch_name_2: {
        value: cdktf.stringToHclTerraform(this._switchName2),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vpc_peer1_access_vlans: {
        value: cdktf.stringToHclTerraform(this._vpcPeer1AccessVlans),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vpc_peer1_allowed_vlans: {
        value: cdktf.stringToHclTerraform(this._vpcPeer1AllowedVlans),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vpc_peer1_conf: {
        value: cdktf.stringToHclTerraform(this._vpcPeer1Conf),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vpc_peer1_desc: {
        value: cdktf.stringToHclTerraform(this._vpcPeer1Desc),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vpc_peer1_id: {
        value: cdktf.numberToHclTerraform(this._vpcPeer1Id),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      vpc_peer1_interface: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._vpcPeer1Interface),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      vpc_peer2_access_vlans: {
        value: cdktf.stringToHclTerraform(this._vpcPeer2AccessVlans),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vpc_peer2_allowed_vlans: {
        value: cdktf.stringToHclTerraform(this._vpcPeer2AllowedVlans),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vpc_peer2_conf: {
        value: cdktf.stringToHclTerraform(this._vpcPeer2Conf),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vpc_peer2_desc: {
        value: cdktf.stringToHclTerraform(this._vpcPeer2Desc),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vpc_peer2_id: {
        value: cdktf.numberToHclTerraform(this._vpcPeer2Id),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      vpc_peer2_interface: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._vpcPeer2Interface),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      vrf: {
        value: cdktf.stringToHclTerraform(this._vrf),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
