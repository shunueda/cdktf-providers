// https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_managedswitch
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ObjectSwitchcontrollerManagedswitchConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_managedswitch#_platform ObjectSwitchcontrollerManagedswitch#_platform}
  */
  readonly platform?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_managedswitch#adom ObjectSwitchcontrollerManagedswitch#adom}
  */
  readonly adom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_managedswitch#description ObjectSwitchcontrollerManagedswitch#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_managedswitch#dhcp_server_access_list ObjectSwitchcontrollerManagedswitch#dhcp_server_access_list}
  */
  readonly dhcpServerAccessList?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_managedswitch#dynamic_sort_subtable ObjectSwitchcontrollerManagedswitch#dynamic_sort_subtable}
  */
  readonly dynamicSortSubtable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_managedswitch#firmware_provision ObjectSwitchcontrollerManagedswitch#firmware_provision}
  */
  readonly firmwareProvision?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_managedswitch#firmware_provision_latest ObjectSwitchcontrollerManagedswitch#firmware_provision_latest}
  */
  readonly firmwareProvisionLatest?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_managedswitch#firmware_provision_version ObjectSwitchcontrollerManagedswitch#firmware_provision_version}
  */
  readonly firmwareProvisionVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_managedswitch#id ObjectSwitchcontrollerManagedswitch#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_managedswitch#l3_discovered ObjectSwitchcontrollerManagedswitch#l3_discovered}
  */
  readonly l3Discovered?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_managedswitch#mclag_igmp_snooping_aware ObjectSwitchcontrollerManagedswitch#mclag_igmp_snooping_aware}
  */
  readonly mclagIgmpSnoopingAware?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_managedswitch#mgmt_mode ObjectSwitchcontrollerManagedswitch#mgmt_mode}
  */
  readonly mgmtMode?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_managedswitch#name ObjectSwitchcontrollerManagedswitch#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_managedswitch#override_snmp_community ObjectSwitchcontrollerManagedswitch#override_snmp_community}
  */
  readonly overrideSnmpCommunity?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_managedswitch#override_snmp_sysinfo ObjectSwitchcontrollerManagedswitch#override_snmp_sysinfo}
  */
  readonly overrideSnmpSysinfo?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_managedswitch#override_snmp_trap_threshold ObjectSwitchcontrollerManagedswitch#override_snmp_trap_threshold}
  */
  readonly overrideSnmpTrapThreshold?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_managedswitch#override_snmp_user ObjectSwitchcontrollerManagedswitch#override_snmp_user}
  */
  readonly overrideSnmpUser?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_managedswitch#poe_detection_type ObjectSwitchcontrollerManagedswitch#poe_detection_type}
  */
  readonly poeDetectionType?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_managedswitch#ptp_profile ObjectSwitchcontrollerManagedswitch#ptp_profile}
  */
  readonly ptpProfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_managedswitch#ptp_status ObjectSwitchcontrollerManagedswitch#ptp_status}
  */
  readonly ptpStatus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_managedswitch#purdue_level ObjectSwitchcontrollerManagedswitch#purdue_level}
  */
  readonly purdueLevel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_managedswitch#qos_drop_policy ObjectSwitchcontrollerManagedswitch#qos_drop_policy}
  */
  readonly qosDropPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_managedswitch#qos_red_probability ObjectSwitchcontrollerManagedswitch#qos_red_probability}
  */
  readonly qosRedProbability?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_managedswitch#radius_nas_ip ObjectSwitchcontrollerManagedswitch#radius_nas_ip}
  */
  readonly radiusNasIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_managedswitch#radius_nas_ip_override ObjectSwitchcontrollerManagedswitch#radius_nas_ip_override}
  */
  readonly radiusNasIpOverride?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_managedswitch#route_offload ObjectSwitchcontrollerManagedswitch#route_offload}
  */
  readonly routeOffload?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_managedswitch#route_offload_mclag ObjectSwitchcontrollerManagedswitch#route_offload_mclag}
  */
  readonly routeOffloadMclag?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_managedswitch#scopetype ObjectSwitchcontrollerManagedswitch#scopetype}
  */
  readonly scopetype?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_managedswitch#switch_dhcp_opt43_key ObjectSwitchcontrollerManagedswitch#switch_dhcp_opt43_key}
  */
  readonly switchDhcpOpt43Key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_managedswitch#switch_id ObjectSwitchcontrollerManagedswitch#switch_id}
  */
  readonly switchId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_managedswitch#tdr_supported ObjectSwitchcontrollerManagedswitch#tdr_supported}
  */
  readonly tdrSupported?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_managedswitch#tunnel_discovered ObjectSwitchcontrollerManagedswitch#tunnel_discovered}
  */
  readonly tunnelDiscovered?: number;
  /**
  * custom_command block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_managedswitch#custom_command ObjectSwitchcontrollerManagedswitch#custom_command}
  */
  readonly customCommand?: ObjectSwitchcontrollerManagedswitchCustomCommand[] | cdktf.IResolvable;
  /**
  * dhcp_snooping_static_client block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_managedswitch#dhcp_snooping_static_client ObjectSwitchcontrollerManagedswitch#dhcp_snooping_static_client}
  */
  readonly dhcpSnoopingStaticClient?: ObjectSwitchcontrollerManagedswitchDhcpSnoopingStaticClient[] | cdktf.IResolvable;
  /**
  * ports block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_managedswitch#ports ObjectSwitchcontrollerManagedswitch#ports}
  */
  readonly ports?: ObjectSwitchcontrollerManagedswitchPorts[] | cdktf.IResolvable;
  /**
  * route_offload_router block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_managedswitch#route_offload_router ObjectSwitchcontrollerManagedswitch#route_offload_router}
  */
  readonly routeOffloadRouter?: ObjectSwitchcontrollerManagedswitchRouteOffloadRouter[] | cdktf.IResolvable;
  /**
  * vlan block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_managedswitch#vlan ObjectSwitchcontrollerManagedswitch#vlan}
  */
  readonly vlan?: ObjectSwitchcontrollerManagedswitchVlan[] | cdktf.IResolvable;
}
export interface ObjectSwitchcontrollerManagedswitchCustomCommand {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_managedswitch#command_entry ObjectSwitchcontrollerManagedswitch#command_entry}
  */
  readonly commandEntry?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_managedswitch#command_name ObjectSwitchcontrollerManagedswitch#command_name}
  */
  readonly commandName?: string;
}

export function objectSwitchcontrollerManagedswitchCustomCommandToTerraform(struct?: ObjectSwitchcontrollerManagedswitchCustomCommand | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    command_entry: cdktf.stringToTerraform(struct!.commandEntry),
    command_name: cdktf.stringToTerraform(struct!.commandName),
  }
}


export function objectSwitchcontrollerManagedswitchCustomCommandToHclTerraform(struct?: ObjectSwitchcontrollerManagedswitchCustomCommand | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    command_entry: {
      value: cdktf.stringToHclTerraform(struct!.commandEntry),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    command_name: {
      value: cdktf.stringToHclTerraform(struct!.commandName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObjectSwitchcontrollerManagedswitchCustomCommandOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ObjectSwitchcontrollerManagedswitchCustomCommand | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._commandEntry !== undefined) {
      hasAnyValues = true;
      internalValueResult.commandEntry = this._commandEntry;
    }
    if (this._commandName !== undefined) {
      hasAnyValues = true;
      internalValueResult.commandName = this._commandName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObjectSwitchcontrollerManagedswitchCustomCommand | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._commandEntry = undefined;
      this._commandName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._commandEntry = value.commandEntry;
      this._commandName = value.commandName;
    }
  }

  // command_entry - computed: false, optional: true, required: false
  private _commandEntry?: string; 
  public get commandEntry() {
    return this.getStringAttribute('command_entry');
  }
  public set commandEntry(value: string) {
    this._commandEntry = value;
  }
  public resetCommandEntry() {
    this._commandEntry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commandEntryInput() {
    return this._commandEntry;
  }

  // command_name - computed: false, optional: true, required: false
  private _commandName?: string; 
  public get commandName() {
    return this.getStringAttribute('command_name');
  }
  public set commandName(value: string) {
    this._commandName = value;
  }
  public resetCommandName() {
    this._commandName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commandNameInput() {
    return this._commandName;
  }
}

export class ObjectSwitchcontrollerManagedswitchCustomCommandList extends cdktf.ComplexList {
  public internalValue? : ObjectSwitchcontrollerManagedswitchCustomCommand[] | cdktf.IResolvable

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
  public get(index: number): ObjectSwitchcontrollerManagedswitchCustomCommandOutputReference {
    return new ObjectSwitchcontrollerManagedswitchCustomCommandOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObjectSwitchcontrollerManagedswitchDhcpSnoopingStaticClient {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_managedswitch#ip ObjectSwitchcontrollerManagedswitch#ip}
  */
  readonly ip?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_managedswitch#mac ObjectSwitchcontrollerManagedswitch#mac}
  */
  readonly mac?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_managedswitch#name ObjectSwitchcontrollerManagedswitch#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_managedswitch#port ObjectSwitchcontrollerManagedswitch#port}
  */
  readonly port?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_managedswitch#vlan ObjectSwitchcontrollerManagedswitch#vlan}
  */
  readonly vlan?: string;
}

export function objectSwitchcontrollerManagedswitchDhcpSnoopingStaticClientToTerraform(struct?: ObjectSwitchcontrollerManagedswitchDhcpSnoopingStaticClient | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip: cdktf.stringToTerraform(struct!.ip),
    mac: cdktf.stringToTerraform(struct!.mac),
    name: cdktf.stringToTerraform(struct!.name),
    port: cdktf.stringToTerraform(struct!.port),
    vlan: cdktf.stringToTerraform(struct!.vlan),
  }
}


export function objectSwitchcontrollerManagedswitchDhcpSnoopingStaticClientToHclTerraform(struct?: ObjectSwitchcontrollerManagedswitchDhcpSnoopingStaticClient | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ip: {
      value: cdktf.stringToHclTerraform(struct!.ip),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mac: {
      value: cdktf.stringToHclTerraform(struct!.mac),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.stringToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vlan: {
      value: cdktf.stringToHclTerraform(struct!.vlan),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObjectSwitchcontrollerManagedswitchDhcpSnoopingStaticClientOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ObjectSwitchcontrollerManagedswitchDhcpSnoopingStaticClient | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ip !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip = this._ip;
    }
    if (this._mac !== undefined) {
      hasAnyValues = true;
      internalValueResult.mac = this._mac;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._vlan !== undefined) {
      hasAnyValues = true;
      internalValueResult.vlan = this._vlan;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObjectSwitchcontrollerManagedswitchDhcpSnoopingStaticClient | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ip = undefined;
      this._mac = undefined;
      this._name = undefined;
      this._port = undefined;
      this._vlan = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ip = value.ip;
      this._mac = value.mac;
      this._name = value.name;
      this._port = value.port;
      this._vlan = value.vlan;
    }
  }

  // ip - computed: true, optional: true, required: false
  private _ip?: string; 
  public get ip() {
    return this.getStringAttribute('ip');
  }
  public set ip(value: string) {
    this._ip = value;
  }
  public resetIp() {
    this._ip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipInput() {
    return this._ip;
  }

  // mac - computed: true, optional: true, required: false
  private _mac?: string; 
  public get mac() {
    return this.getStringAttribute('mac');
  }
  public set mac(value: string) {
    this._mac = value;
  }
  public resetMac() {
    this._mac = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macInput() {
    return this._mac;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // port - computed: false, optional: true, required: false
  private _port?: string; 
  public get port() {
    return this.getStringAttribute('port');
  }
  public set port(value: string) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // vlan - computed: false, optional: true, required: false
  private _vlan?: string; 
  public get vlan() {
    return this.getStringAttribute('vlan');
  }
  public set vlan(value: string) {
    this._vlan = value;
  }
  public resetVlan() {
    this._vlan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanInput() {
    return this._vlan;
  }
}

export class ObjectSwitchcontrollerManagedswitchDhcpSnoopingStaticClientList extends cdktf.ComplexList {
  public internalValue? : ObjectSwitchcontrollerManagedswitchDhcpSnoopingStaticClient[] | cdktf.IResolvable

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
  public get(index: number): ObjectSwitchcontrollerManagedswitchDhcpSnoopingStaticClientOutputReference {
    return new ObjectSwitchcontrollerManagedswitchDhcpSnoopingStaticClientOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObjectSwitchcontrollerManagedswitchPortsDhcpSnoopOption82Override {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_managedswitch#circuit_id ObjectSwitchcontrollerManagedswitch#circuit_id}
  */
  readonly circuitId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_managedswitch#remote_id ObjectSwitchcontrollerManagedswitch#remote_id}
  */
  readonly remoteId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_managedswitch#vlan_name ObjectSwitchcontrollerManagedswitch#vlan_name}
  */
  readonly vlanName?: string;
}

export function objectSwitchcontrollerManagedswitchPortsDhcpSnoopOption82OverrideToTerraform(struct?: ObjectSwitchcontrollerManagedswitchPortsDhcpSnoopOption82Override | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    circuit_id: cdktf.stringToTerraform(struct!.circuitId),
    remote_id: cdktf.stringToTerraform(struct!.remoteId),
    vlan_name: cdktf.stringToTerraform(struct!.vlanName),
  }
}


export function objectSwitchcontrollerManagedswitchPortsDhcpSnoopOption82OverrideToHclTerraform(struct?: ObjectSwitchcontrollerManagedswitchPortsDhcpSnoopOption82Override | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    circuit_id: {
      value: cdktf.stringToHclTerraform(struct!.circuitId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    remote_id: {
      value: cdktf.stringToHclTerraform(struct!.remoteId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vlan_name: {
      value: cdktf.stringToHclTerraform(struct!.vlanName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObjectSwitchcontrollerManagedswitchPortsDhcpSnoopOption82OverrideOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ObjectSwitchcontrollerManagedswitchPortsDhcpSnoopOption82Override | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._circuitId !== undefined) {
      hasAnyValues = true;
      internalValueResult.circuitId = this._circuitId;
    }
    if (this._remoteId !== undefined) {
      hasAnyValues = true;
      internalValueResult.remoteId = this._remoteId;
    }
    if (this._vlanName !== undefined) {
      hasAnyValues = true;
      internalValueResult.vlanName = this._vlanName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObjectSwitchcontrollerManagedswitchPortsDhcpSnoopOption82Override | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._circuitId = undefined;
      this._remoteId = undefined;
      this._vlanName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._circuitId = value.circuitId;
      this._remoteId = value.remoteId;
      this._vlanName = value.vlanName;
    }
  }

  // circuit_id - computed: false, optional: true, required: false
  private _circuitId?: string; 
  public get circuitId() {
    return this.getStringAttribute('circuit_id');
  }
  public set circuitId(value: string) {
    this._circuitId = value;
  }
  public resetCircuitId() {
    this._circuitId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get circuitIdInput() {
    return this._circuitId;
  }

  // remote_id - computed: false, optional: true, required: false
  private _remoteId?: string; 
  public get remoteId() {
    return this.getStringAttribute('remote_id');
  }
  public set remoteId(value: string) {
    this._remoteId = value;
  }
  public resetRemoteId() {
    this._remoteId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteIdInput() {
    return this._remoteId;
  }

  // vlan_name - computed: false, optional: true, required: false
  private _vlanName?: string; 
  public get vlanName() {
    return this.getStringAttribute('vlan_name');
  }
  public set vlanName(value: string) {
    this._vlanName = value;
  }
  public resetVlanName() {
    this._vlanName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanNameInput() {
    return this._vlanName;
  }
}

export class ObjectSwitchcontrollerManagedswitchPortsDhcpSnoopOption82OverrideList extends cdktf.ComplexList {
  public internalValue? : ObjectSwitchcontrollerManagedswitchPortsDhcpSnoopOption82Override[] | cdktf.IResolvable

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
  public get(index: number): ObjectSwitchcontrollerManagedswitchPortsDhcpSnoopOption82OverrideOutputReference {
    return new ObjectSwitchcontrollerManagedswitchPortsDhcpSnoopOption82OverrideOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObjectSwitchcontrollerManagedswitchPorts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_managedswitch#access_mode ObjectSwitchcontrollerManagedswitch#access_mode}
  */
  readonly accessMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_managedswitch#acl_group ObjectSwitchcontrollerManagedswitch#acl_group}
  */
  readonly aclGroup?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_managedswitch#aggregator_mode ObjectSwitchcontrollerManagedswitch#aggregator_mode}
  */
  readonly aggregatorMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_managedswitch#allowed_vlans ObjectSwitchcontrollerManagedswitch#allowed_vlans}
  */
  readonly allowedVlans?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_managedswitch#allowed_vlans_all ObjectSwitchcontrollerManagedswitch#allowed_vlans_all}
  */
  readonly allowedVlansAll?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_managedswitch#arp_inspection_trust ObjectSwitchcontrollerManagedswitch#arp_inspection_trust}
  */
  readonly arpInspectionTrust?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_managedswitch#authenticated_port ObjectSwitchcontrollerManagedswitch#authenticated_port}
  */
  readonly authenticatedPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_managedswitch#bundle ObjectSwitchcontrollerManagedswitch#bundle}
  */
  readonly bundle?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_managedswitch#description ObjectSwitchcontrollerManagedswitch#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_managedswitch#dhcp_snoop_option82_trust ObjectSwitchcontrollerManagedswitch#dhcp_snoop_option82_trust}
  */
  readonly dhcpSnoopOption82Trust?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_managedswitch#dhcp_snooping ObjectSwitchcontrollerManagedswitch#dhcp_snooping}
  */
  readonly dhcpSnooping?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_managedswitch#discard_mode ObjectSwitchcontrollerManagedswitch#discard_mode}
  */
  readonly discardMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_managedswitch#dsl_profile ObjectSwitchcontrollerManagedswitch#dsl_profile}
  */
  readonly dslProfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_managedswitch#edge_port ObjectSwitchcontrollerManagedswitch#edge_port}
  */
  readonly edgePort?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_managedswitch#encrypted_port ObjectSwitchcontrollerManagedswitch#encrypted_port}
  */
  readonly encryptedPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_managedswitch#fec_capable ObjectSwitchcontrollerManagedswitch#fec_capable}
  */
  readonly fecCapable?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_managedswitch#fec_state ObjectSwitchcontrollerManagedswitch#fec_state}
  */
  readonly fecState?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_managedswitch#flap_duration ObjectSwitchcontrollerManagedswitch#flap_duration}
  */
  readonly flapDuration?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_managedswitch#flap_rate ObjectSwitchcontrollerManagedswitch#flap_rate}
  */
  readonly flapRate?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_managedswitch#flap_timeout ObjectSwitchcontrollerManagedswitch#flap_timeout}
  */
  readonly flapTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_managedswitch#flapguard ObjectSwitchcontrollerManagedswitch#flapguard}
  */
  readonly flapguard?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_managedswitch#flow_control ObjectSwitchcontrollerManagedswitch#flow_control}
  */
  readonly flowControl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_managedswitch#fortiswitch_acls ObjectSwitchcontrollerManagedswitch#fortiswitch_acls}
  */
  readonly fortiswitchAcls?: number[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_managedswitch#igmp_snooping ObjectSwitchcontrollerManagedswitch#igmp_snooping}
  */
  readonly igmpSnooping?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_managedswitch#igmp_snooping_flood_reports ObjectSwitchcontrollerManagedswitch#igmp_snooping_flood_reports}
  */
  readonly igmpSnoopingFloodReports?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_managedswitch#igmps_flood_reports ObjectSwitchcontrollerManagedswitch#igmps_flood_reports}
  */
  readonly igmpsFloodReports?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_managedswitch#igmps_flood_traffic ObjectSwitchcontrollerManagedswitch#igmps_flood_traffic}
  */
  readonly igmpsFloodTraffic?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_managedswitch#interface_tags ObjectSwitchcontrollerManagedswitch#interface_tags}
  */
  readonly interfaceTags?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_managedswitch#ip_source_guard ObjectSwitchcontrollerManagedswitch#ip_source_guard}
  */
  readonly ipSourceGuard?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_managedswitch#isl_peer_device_sn ObjectSwitchcontrollerManagedswitch#isl_peer_device_sn}
  */
  readonly islPeerDeviceSn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_managedswitch#lacp_speed ObjectSwitchcontrollerManagedswitch#lacp_speed}
  */
  readonly lacpSpeed?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_managedswitch#learning_limit ObjectSwitchcontrollerManagedswitch#learning_limit}
  */
  readonly learningLimit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_managedswitch#link_status ObjectSwitchcontrollerManagedswitch#link_status}
  */
  readonly linkStatus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_managedswitch#lldp_profile ObjectSwitchcontrollerManagedswitch#lldp_profile}
  */
  readonly lldpProfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_managedswitch#lldp_status ObjectSwitchcontrollerManagedswitch#lldp_status}
  */
  readonly lldpStatus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_managedswitch#loop_guard ObjectSwitchcontrollerManagedswitch#loop_guard}
  */
  readonly loopGuard?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_managedswitch#loop_guard_timeout ObjectSwitchcontrollerManagedswitch#loop_guard_timeout}
  */
  readonly loopGuardTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_managedswitch#matched_dpp_intf_tags ObjectSwitchcontrollerManagedswitch#matched_dpp_intf_tags}
  */
  readonly matchedDppIntfTags?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_managedswitch#matched_dpp_policy ObjectSwitchcontrollerManagedswitch#matched_dpp_policy}
  */
  readonly matchedDppPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_managedswitch#max_bundle ObjectSwitchcontrollerManagedswitch#max_bundle}
  */
  readonly maxBundle?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_managedswitch#mcast_snooping_flood_traffic ObjectSwitchcontrollerManagedswitch#mcast_snooping_flood_traffic}
  */
  readonly mcastSnoopingFloodTraffic?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_managedswitch#mclag ObjectSwitchcontrollerManagedswitch#mclag}
  */
  readonly mclag?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_managedswitch#mclag_icl_port ObjectSwitchcontrollerManagedswitch#mclag_icl_port}
  */
  readonly mclagIclPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_managedswitch#media_type ObjectSwitchcontrollerManagedswitch#media_type}
  */
  readonly mediaType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_managedswitch#member_withdrawal_behavior ObjectSwitchcontrollerManagedswitch#member_withdrawal_behavior}
  */
  readonly memberWithdrawalBehavior?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_managedswitch#members ObjectSwitchcontrollerManagedswitch#members}
  */
  readonly members?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_managedswitch#min_bundle ObjectSwitchcontrollerManagedswitch#min_bundle}
  */
  readonly minBundle?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_managedswitch#mode ObjectSwitchcontrollerManagedswitch#mode}
  */
  readonly mode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_managedswitch#p2p_port ObjectSwitchcontrollerManagedswitch#p2p_port}
  */
  readonly p2PPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_managedswitch#packet_sample_rate ObjectSwitchcontrollerManagedswitch#packet_sample_rate}
  */
  readonly packetSampleRate?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_managedswitch#packet_sampler ObjectSwitchcontrollerManagedswitch#packet_sampler}
  */
  readonly packetSampler?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_managedswitch#pause_meter ObjectSwitchcontrollerManagedswitch#pause_meter}
  */
  readonly pauseMeter?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_managedswitch#pause_meter_resume ObjectSwitchcontrollerManagedswitch#pause_meter_resume}
  */
  readonly pauseMeterResume?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_managedswitch#poe_max_power ObjectSwitchcontrollerManagedswitch#poe_max_power}
  */
  readonly poeMaxPower?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_managedswitch#poe_mode_bt_cabable ObjectSwitchcontrollerManagedswitch#poe_mode_bt_cabable}
  */
  readonly poeModeBtCabable?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_managedswitch#poe_port_mode ObjectSwitchcontrollerManagedswitch#poe_port_mode}
  */
  readonly poePortMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_managedswitch#poe_port_power ObjectSwitchcontrollerManagedswitch#poe_port_power}
  */
  readonly poePortPower?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_managedswitch#poe_port_priority ObjectSwitchcontrollerManagedswitch#poe_port_priority}
  */
  readonly poePortPriority?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_managedswitch#poe_pre_standard_detection ObjectSwitchcontrollerManagedswitch#poe_pre_standard_detection}
  */
  readonly poePreStandardDetection?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_managedswitch#poe_standard ObjectSwitchcontrollerManagedswitch#poe_standard}
  */
  readonly poeStandard?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_managedswitch#poe_status ObjectSwitchcontrollerManagedswitch#poe_status}
  */
  readonly poeStatus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_managedswitch#port_name ObjectSwitchcontrollerManagedswitch#port_name}
  */
  readonly portName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_managedswitch#port_owner ObjectSwitchcontrollerManagedswitch#port_owner}
  */
  readonly portOwner?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_managedswitch#port_policy ObjectSwitchcontrollerManagedswitch#port_policy}
  */
  readonly portPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_managedswitch#port_security_policy ObjectSwitchcontrollerManagedswitch#port_security_policy}
  */
  readonly portSecurityPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_managedswitch#port_selection_criteria ObjectSwitchcontrollerManagedswitch#port_selection_criteria}
  */
  readonly portSelectionCriteria?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_managedswitch#ptp_status ObjectSwitchcontrollerManagedswitch#ptp_status}
  */
  readonly ptpStatus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_managedswitch#qos_policy ObjectSwitchcontrollerManagedswitch#qos_policy}
  */
  readonly qosPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_managedswitch#restricted_auth_port ObjectSwitchcontrollerManagedswitch#restricted_auth_port}
  */
  readonly restrictedAuthPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_managedswitch#rpvst_port ObjectSwitchcontrollerManagedswitch#rpvst_port}
  */
  readonly rpvstPort?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_managedswitch#sample_direction ObjectSwitchcontrollerManagedswitch#sample_direction}
  */
  readonly sampleDirection?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_managedswitch#sflow_counter_interval ObjectSwitchcontrollerManagedswitch#sflow_counter_interval}
  */
  readonly sflowCounterInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_managedswitch#sflow_sample_rate ObjectSwitchcontrollerManagedswitch#sflow_sample_rate}
  */
  readonly sflowSampleRate?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_managedswitch#sflow_sampler ObjectSwitchcontrollerManagedswitch#sflow_sampler}
  */
  readonly sflowSampler?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_managedswitch#status ObjectSwitchcontrollerManagedswitch#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_managedswitch#sticky_mac ObjectSwitchcontrollerManagedswitch#sticky_mac}
  */
  readonly stickyMac?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_managedswitch#stp_bpdu_guard ObjectSwitchcontrollerManagedswitch#stp_bpdu_guard}
  */
  readonly stpBpduGuard?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_managedswitch#stp_bpdu_guard_timeout ObjectSwitchcontrollerManagedswitch#stp_bpdu_guard_timeout}
  */
  readonly stpBpduGuardTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_managedswitch#stp_root_guard ObjectSwitchcontrollerManagedswitch#stp_root_guard}
  */
  readonly stpRootGuard?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_managedswitch#stp_state ObjectSwitchcontrollerManagedswitch#stp_state}
  */
  readonly stpState?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_managedswitch#trunk_member ObjectSwitchcontrollerManagedswitch#trunk_member}
  */
  readonly trunkMember?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_managedswitch#type ObjectSwitchcontrollerManagedswitch#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_managedswitch#untagged_vlans ObjectSwitchcontrollerManagedswitch#untagged_vlans}
  */
  readonly untaggedVlans?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_managedswitch#vlan ObjectSwitchcontrollerManagedswitch#vlan}
  */
  readonly vlan?: string;
  /**
  * dhcp_snoop_option82_override block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_managedswitch#dhcp_snoop_option82_override ObjectSwitchcontrollerManagedswitch#dhcp_snoop_option82_override}
  */
  readonly dhcpSnoopOption82Override?: ObjectSwitchcontrollerManagedswitchPortsDhcpSnoopOption82Override[] | cdktf.IResolvable;
}

export function objectSwitchcontrollerManagedswitchPortsToTerraform(struct?: ObjectSwitchcontrollerManagedswitchPorts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_mode: cdktf.stringToTerraform(struct!.accessMode),
    acl_group: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.aclGroup),
    aggregator_mode: cdktf.stringToTerraform(struct!.aggregatorMode),
    allowed_vlans: cdktf.stringToTerraform(struct!.allowedVlans),
    allowed_vlans_all: cdktf.stringToTerraform(struct!.allowedVlansAll),
    arp_inspection_trust: cdktf.stringToTerraform(struct!.arpInspectionTrust),
    authenticated_port: cdktf.numberToTerraform(struct!.authenticatedPort),
    bundle: cdktf.stringToTerraform(struct!.bundle),
    description: cdktf.stringToTerraform(struct!.description),
    dhcp_snoop_option82_trust: cdktf.stringToTerraform(struct!.dhcpSnoopOption82Trust),
    dhcp_snooping: cdktf.stringToTerraform(struct!.dhcpSnooping),
    discard_mode: cdktf.stringToTerraform(struct!.discardMode),
    dsl_profile: cdktf.stringToTerraform(struct!.dslProfile),
    edge_port: cdktf.stringToTerraform(struct!.edgePort),
    encrypted_port: cdktf.numberToTerraform(struct!.encryptedPort),
    fec_capable: cdktf.numberToTerraform(struct!.fecCapable),
    fec_state: cdktf.stringToTerraform(struct!.fecState),
    flap_duration: cdktf.numberToTerraform(struct!.flapDuration),
    flap_rate: cdktf.numberToTerraform(struct!.flapRate),
    flap_timeout: cdktf.numberToTerraform(struct!.flapTimeout),
    flapguard: cdktf.stringToTerraform(struct!.flapguard),
    flow_control: cdktf.stringToTerraform(struct!.flowControl),
    fortiswitch_acls: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.fortiswitchAcls),
    igmp_snooping: cdktf.stringToTerraform(struct!.igmpSnooping),
    igmp_snooping_flood_reports: cdktf.stringToTerraform(struct!.igmpSnoopingFloodReports),
    igmps_flood_reports: cdktf.stringToTerraform(struct!.igmpsFloodReports),
    igmps_flood_traffic: cdktf.stringToTerraform(struct!.igmpsFloodTraffic),
    interface_tags: cdktf.stringToTerraform(struct!.interfaceTags),
    ip_source_guard: cdktf.stringToTerraform(struct!.ipSourceGuard),
    isl_peer_device_sn: cdktf.stringToTerraform(struct!.islPeerDeviceSn),
    lacp_speed: cdktf.stringToTerraform(struct!.lacpSpeed),
    learning_limit: cdktf.numberToTerraform(struct!.learningLimit),
    link_status: cdktf.stringToTerraform(struct!.linkStatus),
    lldp_profile: cdktf.stringToTerraform(struct!.lldpProfile),
    lldp_status: cdktf.stringToTerraform(struct!.lldpStatus),
    loop_guard: cdktf.stringToTerraform(struct!.loopGuard),
    loop_guard_timeout: cdktf.numberToTerraform(struct!.loopGuardTimeout),
    matched_dpp_intf_tags: cdktf.stringToTerraform(struct!.matchedDppIntfTags),
    matched_dpp_policy: cdktf.stringToTerraform(struct!.matchedDppPolicy),
    max_bundle: cdktf.numberToTerraform(struct!.maxBundle),
    mcast_snooping_flood_traffic: cdktf.stringToTerraform(struct!.mcastSnoopingFloodTraffic),
    mclag: cdktf.stringToTerraform(struct!.mclag),
    mclag_icl_port: cdktf.numberToTerraform(struct!.mclagIclPort),
    media_type: cdktf.stringToTerraform(struct!.mediaType),
    member_withdrawal_behavior: cdktf.stringToTerraform(struct!.memberWithdrawalBehavior),
    members: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.members),
    min_bundle: cdktf.numberToTerraform(struct!.minBundle),
    mode: cdktf.stringToTerraform(struct!.mode),
    p2p_port: cdktf.numberToTerraform(struct!.p2PPort),
    packet_sample_rate: cdktf.numberToTerraform(struct!.packetSampleRate),
    packet_sampler: cdktf.stringToTerraform(struct!.packetSampler),
    pause_meter: cdktf.numberToTerraform(struct!.pauseMeter),
    pause_meter_resume: cdktf.stringToTerraform(struct!.pauseMeterResume),
    poe_max_power: cdktf.stringToTerraform(struct!.poeMaxPower),
    poe_mode_bt_cabable: cdktf.numberToTerraform(struct!.poeModeBtCabable),
    poe_port_mode: cdktf.stringToTerraform(struct!.poePortMode),
    poe_port_power: cdktf.stringToTerraform(struct!.poePortPower),
    poe_port_priority: cdktf.stringToTerraform(struct!.poePortPriority),
    poe_pre_standard_detection: cdktf.stringToTerraform(struct!.poePreStandardDetection),
    poe_standard: cdktf.stringToTerraform(struct!.poeStandard),
    poe_status: cdktf.stringToTerraform(struct!.poeStatus),
    port_name: cdktf.stringToTerraform(struct!.portName),
    port_owner: cdktf.stringToTerraform(struct!.portOwner),
    port_policy: cdktf.stringToTerraform(struct!.portPolicy),
    port_security_policy: cdktf.stringToTerraform(struct!.portSecurityPolicy),
    port_selection_criteria: cdktf.stringToTerraform(struct!.portSelectionCriteria),
    ptp_status: cdktf.stringToTerraform(struct!.ptpStatus),
    qos_policy: cdktf.stringToTerraform(struct!.qosPolicy),
    restricted_auth_port: cdktf.numberToTerraform(struct!.restrictedAuthPort),
    rpvst_port: cdktf.stringToTerraform(struct!.rpvstPort),
    sample_direction: cdktf.stringToTerraform(struct!.sampleDirection),
    sflow_counter_interval: cdktf.numberToTerraform(struct!.sflowCounterInterval),
    sflow_sample_rate: cdktf.numberToTerraform(struct!.sflowSampleRate),
    sflow_sampler: cdktf.stringToTerraform(struct!.sflowSampler),
    status: cdktf.stringToTerraform(struct!.status),
    sticky_mac: cdktf.stringToTerraform(struct!.stickyMac),
    stp_bpdu_guard: cdktf.stringToTerraform(struct!.stpBpduGuard),
    stp_bpdu_guard_timeout: cdktf.numberToTerraform(struct!.stpBpduGuardTimeout),
    stp_root_guard: cdktf.stringToTerraform(struct!.stpRootGuard),
    stp_state: cdktf.stringToTerraform(struct!.stpState),
    trunk_member: cdktf.numberToTerraform(struct!.trunkMember),
    type: cdktf.stringToTerraform(struct!.type),
    untagged_vlans: cdktf.stringToTerraform(struct!.untaggedVlans),
    vlan: cdktf.stringToTerraform(struct!.vlan),
    dhcp_snoop_option82_override: cdktf.listMapper(objectSwitchcontrollerManagedswitchPortsDhcpSnoopOption82OverrideToTerraform, true)(struct!.dhcpSnoopOption82Override),
  }
}


export function objectSwitchcontrollerManagedswitchPortsToHclTerraform(struct?: ObjectSwitchcontrollerManagedswitchPorts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_mode: {
      value: cdktf.stringToHclTerraform(struct!.accessMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    acl_group: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.aclGroup),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    aggregator_mode: {
      value: cdktf.stringToHclTerraform(struct!.aggregatorMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    allowed_vlans: {
      value: cdktf.stringToHclTerraform(struct!.allowedVlans),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    allowed_vlans_all: {
      value: cdktf.stringToHclTerraform(struct!.allowedVlansAll),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    arp_inspection_trust: {
      value: cdktf.stringToHclTerraform(struct!.arpInspectionTrust),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    authenticated_port: {
      value: cdktf.numberToHclTerraform(struct!.authenticatedPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    bundle: {
      value: cdktf.stringToHclTerraform(struct!.bundle),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dhcp_snoop_option82_trust: {
      value: cdktf.stringToHclTerraform(struct!.dhcpSnoopOption82Trust),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dhcp_snooping: {
      value: cdktf.stringToHclTerraform(struct!.dhcpSnooping),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    discard_mode: {
      value: cdktf.stringToHclTerraform(struct!.discardMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dsl_profile: {
      value: cdktf.stringToHclTerraform(struct!.dslProfile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    edge_port: {
      value: cdktf.stringToHclTerraform(struct!.edgePort),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    encrypted_port: {
      value: cdktf.numberToHclTerraform(struct!.encryptedPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fec_capable: {
      value: cdktf.numberToHclTerraform(struct!.fecCapable),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fec_state: {
      value: cdktf.stringToHclTerraform(struct!.fecState),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    flap_duration: {
      value: cdktf.numberToHclTerraform(struct!.flapDuration),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    flap_rate: {
      value: cdktf.numberToHclTerraform(struct!.flapRate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    flap_timeout: {
      value: cdktf.numberToHclTerraform(struct!.flapTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    flapguard: {
      value: cdktf.stringToHclTerraform(struct!.flapguard),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    flow_control: {
      value: cdktf.stringToHclTerraform(struct!.flowControl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fortiswitch_acls: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.fortiswitchAcls),
      isBlock: false,
      type: "set",
      storageClassType: "numberList",
    },
    igmp_snooping: {
      value: cdktf.stringToHclTerraform(struct!.igmpSnooping),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    igmp_snooping_flood_reports: {
      value: cdktf.stringToHclTerraform(struct!.igmpSnoopingFloodReports),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    igmps_flood_reports: {
      value: cdktf.stringToHclTerraform(struct!.igmpsFloodReports),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    igmps_flood_traffic: {
      value: cdktf.stringToHclTerraform(struct!.igmpsFloodTraffic),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    interface_tags: {
      value: cdktf.stringToHclTerraform(struct!.interfaceTags),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_source_guard: {
      value: cdktf.stringToHclTerraform(struct!.ipSourceGuard),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    isl_peer_device_sn: {
      value: cdktf.stringToHclTerraform(struct!.islPeerDeviceSn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    lacp_speed: {
      value: cdktf.stringToHclTerraform(struct!.lacpSpeed),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    learning_limit: {
      value: cdktf.numberToHclTerraform(struct!.learningLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    link_status: {
      value: cdktf.stringToHclTerraform(struct!.linkStatus),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    lldp_profile: {
      value: cdktf.stringToHclTerraform(struct!.lldpProfile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    lldp_status: {
      value: cdktf.stringToHclTerraform(struct!.lldpStatus),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    loop_guard: {
      value: cdktf.stringToHclTerraform(struct!.loopGuard),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    loop_guard_timeout: {
      value: cdktf.numberToHclTerraform(struct!.loopGuardTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    matched_dpp_intf_tags: {
      value: cdktf.stringToHclTerraform(struct!.matchedDppIntfTags),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    matched_dpp_policy: {
      value: cdktf.stringToHclTerraform(struct!.matchedDppPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_bundle: {
      value: cdktf.numberToHclTerraform(struct!.maxBundle),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mcast_snooping_flood_traffic: {
      value: cdktf.stringToHclTerraform(struct!.mcastSnoopingFloodTraffic),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mclag: {
      value: cdktf.stringToHclTerraform(struct!.mclag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mclag_icl_port: {
      value: cdktf.numberToHclTerraform(struct!.mclagIclPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    media_type: {
      value: cdktf.stringToHclTerraform(struct!.mediaType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    member_withdrawal_behavior: {
      value: cdktf.stringToHclTerraform(struct!.memberWithdrawalBehavior),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    members: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.members),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    min_bundle: {
      value: cdktf.numberToHclTerraform(struct!.minBundle),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mode: {
      value: cdktf.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    p2p_port: {
      value: cdktf.numberToHclTerraform(struct!.p2PPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    packet_sample_rate: {
      value: cdktf.numberToHclTerraform(struct!.packetSampleRate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    packet_sampler: {
      value: cdktf.stringToHclTerraform(struct!.packetSampler),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pause_meter: {
      value: cdktf.numberToHclTerraform(struct!.pauseMeter),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pause_meter_resume: {
      value: cdktf.stringToHclTerraform(struct!.pauseMeterResume),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    poe_max_power: {
      value: cdktf.stringToHclTerraform(struct!.poeMaxPower),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    poe_mode_bt_cabable: {
      value: cdktf.numberToHclTerraform(struct!.poeModeBtCabable),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    poe_port_mode: {
      value: cdktf.stringToHclTerraform(struct!.poePortMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    poe_port_power: {
      value: cdktf.stringToHclTerraform(struct!.poePortPower),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    poe_port_priority: {
      value: cdktf.stringToHclTerraform(struct!.poePortPriority),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    poe_pre_standard_detection: {
      value: cdktf.stringToHclTerraform(struct!.poePreStandardDetection),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    poe_standard: {
      value: cdktf.stringToHclTerraform(struct!.poeStandard),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    poe_status: {
      value: cdktf.stringToHclTerraform(struct!.poeStatus),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port_name: {
      value: cdktf.stringToHclTerraform(struct!.portName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port_owner: {
      value: cdktf.stringToHclTerraform(struct!.portOwner),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port_policy: {
      value: cdktf.stringToHclTerraform(struct!.portPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port_security_policy: {
      value: cdktf.stringToHclTerraform(struct!.portSecurityPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port_selection_criteria: {
      value: cdktf.stringToHclTerraform(struct!.portSelectionCriteria),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ptp_status: {
      value: cdktf.stringToHclTerraform(struct!.ptpStatus),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    qos_policy: {
      value: cdktf.stringToHclTerraform(struct!.qosPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    restricted_auth_port: {
      value: cdktf.numberToHclTerraform(struct!.restrictedAuthPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rpvst_port: {
      value: cdktf.stringToHclTerraform(struct!.rpvstPort),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sample_direction: {
      value: cdktf.stringToHclTerraform(struct!.sampleDirection),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sflow_counter_interval: {
      value: cdktf.numberToHclTerraform(struct!.sflowCounterInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sflow_sample_rate: {
      value: cdktf.numberToHclTerraform(struct!.sflowSampleRate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sflow_sampler: {
      value: cdktf.stringToHclTerraform(struct!.sflowSampler),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sticky_mac: {
      value: cdktf.stringToHclTerraform(struct!.stickyMac),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    stp_bpdu_guard: {
      value: cdktf.stringToHclTerraform(struct!.stpBpduGuard),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    stp_bpdu_guard_timeout: {
      value: cdktf.numberToHclTerraform(struct!.stpBpduGuardTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    stp_root_guard: {
      value: cdktf.stringToHclTerraform(struct!.stpRootGuard),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    stp_state: {
      value: cdktf.stringToHclTerraform(struct!.stpState),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    trunk_member: {
      value: cdktf.numberToHclTerraform(struct!.trunkMember),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    untagged_vlans: {
      value: cdktf.stringToHclTerraform(struct!.untaggedVlans),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vlan: {
      value: cdktf.stringToHclTerraform(struct!.vlan),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dhcp_snoop_option82_override: {
      value: cdktf.listMapperHcl(objectSwitchcontrollerManagedswitchPortsDhcpSnoopOption82OverrideToHclTerraform, true)(struct!.dhcpSnoopOption82Override),
      isBlock: true,
      type: "list",
      storageClassType: "ObjectSwitchcontrollerManagedswitchPortsDhcpSnoopOption82OverrideList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObjectSwitchcontrollerManagedswitchPortsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ObjectSwitchcontrollerManagedswitchPorts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessMode = this._accessMode;
    }
    if (this._aclGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.aclGroup = this._aclGroup;
    }
    if (this._aggregatorMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.aggregatorMode = this._aggregatorMode;
    }
    if (this._allowedVlans !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedVlans = this._allowedVlans;
    }
    if (this._allowedVlansAll !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedVlansAll = this._allowedVlansAll;
    }
    if (this._arpInspectionTrust !== undefined) {
      hasAnyValues = true;
      internalValueResult.arpInspectionTrust = this._arpInspectionTrust;
    }
    if (this._authenticatedPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.authenticatedPort = this._authenticatedPort;
    }
    if (this._bundle !== undefined) {
      hasAnyValues = true;
      internalValueResult.bundle = this._bundle;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._dhcpSnoopOption82Trust !== undefined) {
      hasAnyValues = true;
      internalValueResult.dhcpSnoopOption82Trust = this._dhcpSnoopOption82Trust;
    }
    if (this._dhcpSnooping !== undefined) {
      hasAnyValues = true;
      internalValueResult.dhcpSnooping = this._dhcpSnooping;
    }
    if (this._discardMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.discardMode = this._discardMode;
    }
    if (this._dslProfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.dslProfile = this._dslProfile;
    }
    if (this._edgePort !== undefined) {
      hasAnyValues = true;
      internalValueResult.edgePort = this._edgePort;
    }
    if (this._encryptedPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryptedPort = this._encryptedPort;
    }
    if (this._fecCapable !== undefined) {
      hasAnyValues = true;
      internalValueResult.fecCapable = this._fecCapable;
    }
    if (this._fecState !== undefined) {
      hasAnyValues = true;
      internalValueResult.fecState = this._fecState;
    }
    if (this._flapDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.flapDuration = this._flapDuration;
    }
    if (this._flapRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.flapRate = this._flapRate;
    }
    if (this._flapTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.flapTimeout = this._flapTimeout;
    }
    if (this._flapguard !== undefined) {
      hasAnyValues = true;
      internalValueResult.flapguard = this._flapguard;
    }
    if (this._flowControl !== undefined) {
      hasAnyValues = true;
      internalValueResult.flowControl = this._flowControl;
    }
    if (this._fortiswitchAcls !== undefined) {
      hasAnyValues = true;
      internalValueResult.fortiswitchAcls = this._fortiswitchAcls;
    }
    if (this._igmpSnooping !== undefined) {
      hasAnyValues = true;
      internalValueResult.igmpSnooping = this._igmpSnooping;
    }
    if (this._igmpSnoopingFloodReports !== undefined) {
      hasAnyValues = true;
      internalValueResult.igmpSnoopingFloodReports = this._igmpSnoopingFloodReports;
    }
    if (this._igmpsFloodReports !== undefined) {
      hasAnyValues = true;
      internalValueResult.igmpsFloodReports = this._igmpsFloodReports;
    }
    if (this._igmpsFloodTraffic !== undefined) {
      hasAnyValues = true;
      internalValueResult.igmpsFloodTraffic = this._igmpsFloodTraffic;
    }
    if (this._interfaceTags !== undefined) {
      hasAnyValues = true;
      internalValueResult.interfaceTags = this._interfaceTags;
    }
    if (this._ipSourceGuard !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipSourceGuard = this._ipSourceGuard;
    }
    if (this._islPeerDeviceSn !== undefined) {
      hasAnyValues = true;
      internalValueResult.islPeerDeviceSn = this._islPeerDeviceSn;
    }
    if (this._lacpSpeed !== undefined) {
      hasAnyValues = true;
      internalValueResult.lacpSpeed = this._lacpSpeed;
    }
    if (this._learningLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.learningLimit = this._learningLimit;
    }
    if (this._linkStatus !== undefined) {
      hasAnyValues = true;
      internalValueResult.linkStatus = this._linkStatus;
    }
    if (this._lldpProfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.lldpProfile = this._lldpProfile;
    }
    if (this._lldpStatus !== undefined) {
      hasAnyValues = true;
      internalValueResult.lldpStatus = this._lldpStatus;
    }
    if (this._loopGuard !== undefined) {
      hasAnyValues = true;
      internalValueResult.loopGuard = this._loopGuard;
    }
    if (this._loopGuardTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.loopGuardTimeout = this._loopGuardTimeout;
    }
    if (this._matchedDppIntfTags !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchedDppIntfTags = this._matchedDppIntfTags;
    }
    if (this._matchedDppPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchedDppPolicy = this._matchedDppPolicy;
    }
    if (this._maxBundle !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxBundle = this._maxBundle;
    }
    if (this._mcastSnoopingFloodTraffic !== undefined) {
      hasAnyValues = true;
      internalValueResult.mcastSnoopingFloodTraffic = this._mcastSnoopingFloodTraffic;
    }
    if (this._mclag !== undefined) {
      hasAnyValues = true;
      internalValueResult.mclag = this._mclag;
    }
    if (this._mclagIclPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.mclagIclPort = this._mclagIclPort;
    }
    if (this._mediaType !== undefined) {
      hasAnyValues = true;
      internalValueResult.mediaType = this._mediaType;
    }
    if (this._memberWithdrawalBehavior !== undefined) {
      hasAnyValues = true;
      internalValueResult.memberWithdrawalBehavior = this._memberWithdrawalBehavior;
    }
    if (this._members !== undefined) {
      hasAnyValues = true;
      internalValueResult.members = this._members;
    }
    if (this._minBundle !== undefined) {
      hasAnyValues = true;
      internalValueResult.minBundle = this._minBundle;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._p2PPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.p2PPort = this._p2PPort;
    }
    if (this._packetSampleRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.packetSampleRate = this._packetSampleRate;
    }
    if (this._packetSampler !== undefined) {
      hasAnyValues = true;
      internalValueResult.packetSampler = this._packetSampler;
    }
    if (this._pauseMeter !== undefined) {
      hasAnyValues = true;
      internalValueResult.pauseMeter = this._pauseMeter;
    }
    if (this._pauseMeterResume !== undefined) {
      hasAnyValues = true;
      internalValueResult.pauseMeterResume = this._pauseMeterResume;
    }
    if (this._poeMaxPower !== undefined) {
      hasAnyValues = true;
      internalValueResult.poeMaxPower = this._poeMaxPower;
    }
    if (this._poeModeBtCabable !== undefined) {
      hasAnyValues = true;
      internalValueResult.poeModeBtCabable = this._poeModeBtCabable;
    }
    if (this._poePortMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.poePortMode = this._poePortMode;
    }
    if (this._poePortPower !== undefined) {
      hasAnyValues = true;
      internalValueResult.poePortPower = this._poePortPower;
    }
    if (this._poePortPriority !== undefined) {
      hasAnyValues = true;
      internalValueResult.poePortPriority = this._poePortPriority;
    }
    if (this._poePreStandardDetection !== undefined) {
      hasAnyValues = true;
      internalValueResult.poePreStandardDetection = this._poePreStandardDetection;
    }
    if (this._poeStandard !== undefined) {
      hasAnyValues = true;
      internalValueResult.poeStandard = this._poeStandard;
    }
    if (this._poeStatus !== undefined) {
      hasAnyValues = true;
      internalValueResult.poeStatus = this._poeStatus;
    }
    if (this._portName !== undefined) {
      hasAnyValues = true;
      internalValueResult.portName = this._portName;
    }
    if (this._portOwner !== undefined) {
      hasAnyValues = true;
      internalValueResult.portOwner = this._portOwner;
    }
    if (this._portPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.portPolicy = this._portPolicy;
    }
    if (this._portSecurityPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.portSecurityPolicy = this._portSecurityPolicy;
    }
    if (this._portSelectionCriteria !== undefined) {
      hasAnyValues = true;
      internalValueResult.portSelectionCriteria = this._portSelectionCriteria;
    }
    if (this._ptpStatus !== undefined) {
      hasAnyValues = true;
      internalValueResult.ptpStatus = this._ptpStatus;
    }
    if (this._qosPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.qosPolicy = this._qosPolicy;
    }
    if (this._restrictedAuthPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.restrictedAuthPort = this._restrictedAuthPort;
    }
    if (this._rpvstPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.rpvstPort = this._rpvstPort;
    }
    if (this._sampleDirection !== undefined) {
      hasAnyValues = true;
      internalValueResult.sampleDirection = this._sampleDirection;
    }
    if (this._sflowCounterInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.sflowCounterInterval = this._sflowCounterInterval;
    }
    if (this._sflowSampleRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.sflowSampleRate = this._sflowSampleRate;
    }
    if (this._sflowSampler !== undefined) {
      hasAnyValues = true;
      internalValueResult.sflowSampler = this._sflowSampler;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    if (this._stickyMac !== undefined) {
      hasAnyValues = true;
      internalValueResult.stickyMac = this._stickyMac;
    }
    if (this._stpBpduGuard !== undefined) {
      hasAnyValues = true;
      internalValueResult.stpBpduGuard = this._stpBpduGuard;
    }
    if (this._stpBpduGuardTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.stpBpduGuardTimeout = this._stpBpduGuardTimeout;
    }
    if (this._stpRootGuard !== undefined) {
      hasAnyValues = true;
      internalValueResult.stpRootGuard = this._stpRootGuard;
    }
    if (this._stpState !== undefined) {
      hasAnyValues = true;
      internalValueResult.stpState = this._stpState;
    }
    if (this._trunkMember !== undefined) {
      hasAnyValues = true;
      internalValueResult.trunkMember = this._trunkMember;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._untaggedVlans !== undefined) {
      hasAnyValues = true;
      internalValueResult.untaggedVlans = this._untaggedVlans;
    }
    if (this._vlan !== undefined) {
      hasAnyValues = true;
      internalValueResult.vlan = this._vlan;
    }
    if (this._dhcpSnoopOption82Override?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dhcpSnoopOption82Override = this._dhcpSnoopOption82Override?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObjectSwitchcontrollerManagedswitchPorts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accessMode = undefined;
      this._aclGroup = undefined;
      this._aggregatorMode = undefined;
      this._allowedVlans = undefined;
      this._allowedVlansAll = undefined;
      this._arpInspectionTrust = undefined;
      this._authenticatedPort = undefined;
      this._bundle = undefined;
      this._description = undefined;
      this._dhcpSnoopOption82Trust = undefined;
      this._dhcpSnooping = undefined;
      this._discardMode = undefined;
      this._dslProfile = undefined;
      this._edgePort = undefined;
      this._encryptedPort = undefined;
      this._fecCapable = undefined;
      this._fecState = undefined;
      this._flapDuration = undefined;
      this._flapRate = undefined;
      this._flapTimeout = undefined;
      this._flapguard = undefined;
      this._flowControl = undefined;
      this._fortiswitchAcls = undefined;
      this._igmpSnooping = undefined;
      this._igmpSnoopingFloodReports = undefined;
      this._igmpsFloodReports = undefined;
      this._igmpsFloodTraffic = undefined;
      this._interfaceTags = undefined;
      this._ipSourceGuard = undefined;
      this._islPeerDeviceSn = undefined;
      this._lacpSpeed = undefined;
      this._learningLimit = undefined;
      this._linkStatus = undefined;
      this._lldpProfile = undefined;
      this._lldpStatus = undefined;
      this._loopGuard = undefined;
      this._loopGuardTimeout = undefined;
      this._matchedDppIntfTags = undefined;
      this._matchedDppPolicy = undefined;
      this._maxBundle = undefined;
      this._mcastSnoopingFloodTraffic = undefined;
      this._mclag = undefined;
      this._mclagIclPort = undefined;
      this._mediaType = undefined;
      this._memberWithdrawalBehavior = undefined;
      this._members = undefined;
      this._minBundle = undefined;
      this._mode = undefined;
      this._p2PPort = undefined;
      this._packetSampleRate = undefined;
      this._packetSampler = undefined;
      this._pauseMeter = undefined;
      this._pauseMeterResume = undefined;
      this._poeMaxPower = undefined;
      this._poeModeBtCabable = undefined;
      this._poePortMode = undefined;
      this._poePortPower = undefined;
      this._poePortPriority = undefined;
      this._poePreStandardDetection = undefined;
      this._poeStandard = undefined;
      this._poeStatus = undefined;
      this._portName = undefined;
      this._portOwner = undefined;
      this._portPolicy = undefined;
      this._portSecurityPolicy = undefined;
      this._portSelectionCriteria = undefined;
      this._ptpStatus = undefined;
      this._qosPolicy = undefined;
      this._restrictedAuthPort = undefined;
      this._rpvstPort = undefined;
      this._sampleDirection = undefined;
      this._sflowCounterInterval = undefined;
      this._sflowSampleRate = undefined;
      this._sflowSampler = undefined;
      this._status = undefined;
      this._stickyMac = undefined;
      this._stpBpduGuard = undefined;
      this._stpBpduGuardTimeout = undefined;
      this._stpRootGuard = undefined;
      this._stpState = undefined;
      this._trunkMember = undefined;
      this._type = undefined;
      this._untaggedVlans = undefined;
      this._vlan = undefined;
      this._dhcpSnoopOption82Override.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accessMode = value.accessMode;
      this._aclGroup = value.aclGroup;
      this._aggregatorMode = value.aggregatorMode;
      this._allowedVlans = value.allowedVlans;
      this._allowedVlansAll = value.allowedVlansAll;
      this._arpInspectionTrust = value.arpInspectionTrust;
      this._authenticatedPort = value.authenticatedPort;
      this._bundle = value.bundle;
      this._description = value.description;
      this._dhcpSnoopOption82Trust = value.dhcpSnoopOption82Trust;
      this._dhcpSnooping = value.dhcpSnooping;
      this._discardMode = value.discardMode;
      this._dslProfile = value.dslProfile;
      this._edgePort = value.edgePort;
      this._encryptedPort = value.encryptedPort;
      this._fecCapable = value.fecCapable;
      this._fecState = value.fecState;
      this._flapDuration = value.flapDuration;
      this._flapRate = value.flapRate;
      this._flapTimeout = value.flapTimeout;
      this._flapguard = value.flapguard;
      this._flowControl = value.flowControl;
      this._fortiswitchAcls = value.fortiswitchAcls;
      this._igmpSnooping = value.igmpSnooping;
      this._igmpSnoopingFloodReports = value.igmpSnoopingFloodReports;
      this._igmpsFloodReports = value.igmpsFloodReports;
      this._igmpsFloodTraffic = value.igmpsFloodTraffic;
      this._interfaceTags = value.interfaceTags;
      this._ipSourceGuard = value.ipSourceGuard;
      this._islPeerDeviceSn = value.islPeerDeviceSn;
      this._lacpSpeed = value.lacpSpeed;
      this._learningLimit = value.learningLimit;
      this._linkStatus = value.linkStatus;
      this._lldpProfile = value.lldpProfile;
      this._lldpStatus = value.lldpStatus;
      this._loopGuard = value.loopGuard;
      this._loopGuardTimeout = value.loopGuardTimeout;
      this._matchedDppIntfTags = value.matchedDppIntfTags;
      this._matchedDppPolicy = value.matchedDppPolicy;
      this._maxBundle = value.maxBundle;
      this._mcastSnoopingFloodTraffic = value.mcastSnoopingFloodTraffic;
      this._mclag = value.mclag;
      this._mclagIclPort = value.mclagIclPort;
      this._mediaType = value.mediaType;
      this._memberWithdrawalBehavior = value.memberWithdrawalBehavior;
      this._members = value.members;
      this._minBundle = value.minBundle;
      this._mode = value.mode;
      this._p2PPort = value.p2PPort;
      this._packetSampleRate = value.packetSampleRate;
      this._packetSampler = value.packetSampler;
      this._pauseMeter = value.pauseMeter;
      this._pauseMeterResume = value.pauseMeterResume;
      this._poeMaxPower = value.poeMaxPower;
      this._poeModeBtCabable = value.poeModeBtCabable;
      this._poePortMode = value.poePortMode;
      this._poePortPower = value.poePortPower;
      this._poePortPriority = value.poePortPriority;
      this._poePreStandardDetection = value.poePreStandardDetection;
      this._poeStandard = value.poeStandard;
      this._poeStatus = value.poeStatus;
      this._portName = value.portName;
      this._portOwner = value.portOwner;
      this._portPolicy = value.portPolicy;
      this._portSecurityPolicy = value.portSecurityPolicy;
      this._portSelectionCriteria = value.portSelectionCriteria;
      this._ptpStatus = value.ptpStatus;
      this._qosPolicy = value.qosPolicy;
      this._restrictedAuthPort = value.restrictedAuthPort;
      this._rpvstPort = value.rpvstPort;
      this._sampleDirection = value.sampleDirection;
      this._sflowCounterInterval = value.sflowCounterInterval;
      this._sflowSampleRate = value.sflowSampleRate;
      this._sflowSampler = value.sflowSampler;
      this._status = value.status;
      this._stickyMac = value.stickyMac;
      this._stpBpduGuard = value.stpBpduGuard;
      this._stpBpduGuardTimeout = value.stpBpduGuardTimeout;
      this._stpRootGuard = value.stpRootGuard;
      this._stpState = value.stpState;
      this._trunkMember = value.trunkMember;
      this._type = value.type;
      this._untaggedVlans = value.untaggedVlans;
      this._vlan = value.vlan;
      this._dhcpSnoopOption82Override.internalValue = value.dhcpSnoopOption82Override;
    }
  }

  // access_mode - computed: true, optional: true, required: false
  private _accessMode?: string; 
  public get accessMode() {
    return this.getStringAttribute('access_mode');
  }
  public set accessMode(value: string) {
    this._accessMode = value;
  }
  public resetAccessMode() {
    this._accessMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessModeInput() {
    return this._accessMode;
  }

  // acl_group - computed: true, optional: true, required: false
  private _aclGroup?: string[]; 
  public get aclGroup() {
    return cdktf.Fn.tolist(this.getListAttribute('acl_group'));
  }
  public set aclGroup(value: string[]) {
    this._aclGroup = value;
  }
  public resetAclGroup() {
    this._aclGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aclGroupInput() {
    return this._aclGroup;
  }

  // aggregator_mode - computed: false, optional: true, required: false
  private _aggregatorMode?: string; 
  public get aggregatorMode() {
    return this.getStringAttribute('aggregator_mode');
  }
  public set aggregatorMode(value: string) {
    this._aggregatorMode = value;
  }
  public resetAggregatorMode() {
    this._aggregatorMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aggregatorModeInput() {
    return this._aggregatorMode;
  }

  // allowed_vlans - computed: false, optional: true, required: false
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

  // allowed_vlans_all - computed: true, optional: true, required: false
  private _allowedVlansAll?: string; 
  public get allowedVlansAll() {
    return this.getStringAttribute('allowed_vlans_all');
  }
  public set allowedVlansAll(value: string) {
    this._allowedVlansAll = value;
  }
  public resetAllowedVlansAll() {
    this._allowedVlansAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedVlansAllInput() {
    return this._allowedVlansAll;
  }

  // arp_inspection_trust - computed: true, optional: true, required: false
  private _arpInspectionTrust?: string; 
  public get arpInspectionTrust() {
    return this.getStringAttribute('arp_inspection_trust');
  }
  public set arpInspectionTrust(value: string) {
    this._arpInspectionTrust = value;
  }
  public resetArpInspectionTrust() {
    this._arpInspectionTrust = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get arpInspectionTrustInput() {
    return this._arpInspectionTrust;
  }

  // authenticated_port - computed: false, optional: true, required: false
  private _authenticatedPort?: number; 
  public get authenticatedPort() {
    return this.getNumberAttribute('authenticated_port');
  }
  public set authenticatedPort(value: number) {
    this._authenticatedPort = value;
  }
  public resetAuthenticatedPort() {
    this._authenticatedPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticatedPortInput() {
    return this._authenticatedPort;
  }

  // bundle - computed: false, optional: true, required: false
  private _bundle?: string; 
  public get bundle() {
    return this.getStringAttribute('bundle');
  }
  public set bundle(value: string) {
    this._bundle = value;
  }
  public resetBundle() {
    this._bundle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bundleInput() {
    return this._bundle;
  }

  // description - computed: false, optional: true, required: false
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

  // dhcp_snoop_option82_trust - computed: true, optional: true, required: false
  private _dhcpSnoopOption82Trust?: string; 
  public get dhcpSnoopOption82Trust() {
    return this.getStringAttribute('dhcp_snoop_option82_trust');
  }
  public set dhcpSnoopOption82Trust(value: string) {
    this._dhcpSnoopOption82Trust = value;
  }
  public resetDhcpSnoopOption82Trust() {
    this._dhcpSnoopOption82Trust = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpSnoopOption82TrustInput() {
    return this._dhcpSnoopOption82Trust;
  }

  // dhcp_snooping - computed: true, optional: true, required: false
  private _dhcpSnooping?: string; 
  public get dhcpSnooping() {
    return this.getStringAttribute('dhcp_snooping');
  }
  public set dhcpSnooping(value: string) {
    this._dhcpSnooping = value;
  }
  public resetDhcpSnooping() {
    this._dhcpSnooping = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpSnoopingInput() {
    return this._dhcpSnooping;
  }

  // discard_mode - computed: true, optional: true, required: false
  private _discardMode?: string; 
  public get discardMode() {
    return this.getStringAttribute('discard_mode');
  }
  public set discardMode(value: string) {
    this._discardMode = value;
  }
  public resetDiscardMode() {
    this._discardMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get discardModeInput() {
    return this._discardMode;
  }

  // dsl_profile - computed: true, optional: true, required: false
  private _dslProfile?: string; 
  public get dslProfile() {
    return this.getStringAttribute('dsl_profile');
  }
  public set dslProfile(value: string) {
    this._dslProfile = value;
  }
  public resetDslProfile() {
    this._dslProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dslProfileInput() {
    return this._dslProfile;
  }

  // edge_port - computed: true, optional: true, required: false
  private _edgePort?: string; 
  public get edgePort() {
    return this.getStringAttribute('edge_port');
  }
  public set edgePort(value: string) {
    this._edgePort = value;
  }
  public resetEdgePort() {
    this._edgePort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get edgePortInput() {
    return this._edgePort;
  }

  // encrypted_port - computed: false, optional: true, required: false
  private _encryptedPort?: number; 
  public get encryptedPort() {
    return this.getNumberAttribute('encrypted_port');
  }
  public set encryptedPort(value: number) {
    this._encryptedPort = value;
  }
  public resetEncryptedPort() {
    this._encryptedPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptedPortInput() {
    return this._encryptedPort;
  }

  // fec_capable - computed: false, optional: true, required: false
  private _fecCapable?: number; 
  public get fecCapable() {
    return this.getNumberAttribute('fec_capable');
  }
  public set fecCapable(value: number) {
    this._fecCapable = value;
  }
  public resetFecCapable() {
    this._fecCapable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fecCapableInput() {
    return this._fecCapable;
  }

  // fec_state - computed: true, optional: true, required: false
  private _fecState?: string; 
  public get fecState() {
    return this.getStringAttribute('fec_state');
  }
  public set fecState(value: string) {
    this._fecState = value;
  }
  public resetFecState() {
    this._fecState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fecStateInput() {
    return this._fecState;
  }

  // flap_duration - computed: true, optional: true, required: false
  private _flapDuration?: number; 
  public get flapDuration() {
    return this.getNumberAttribute('flap_duration');
  }
  public set flapDuration(value: number) {
    this._flapDuration = value;
  }
  public resetFlapDuration() {
    this._flapDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flapDurationInput() {
    return this._flapDuration;
  }

  // flap_rate - computed: true, optional: true, required: false
  private _flapRate?: number; 
  public get flapRate() {
    return this.getNumberAttribute('flap_rate');
  }
  public set flapRate(value: number) {
    this._flapRate = value;
  }
  public resetFlapRate() {
    this._flapRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flapRateInput() {
    return this._flapRate;
  }

  // flap_timeout - computed: false, optional: true, required: false
  private _flapTimeout?: number; 
  public get flapTimeout() {
    return this.getNumberAttribute('flap_timeout');
  }
  public set flapTimeout(value: number) {
    this._flapTimeout = value;
  }
  public resetFlapTimeout() {
    this._flapTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flapTimeoutInput() {
    return this._flapTimeout;
  }

  // flapguard - computed: true, optional: true, required: false
  private _flapguard?: string; 
  public get flapguard() {
    return this.getStringAttribute('flapguard');
  }
  public set flapguard(value: string) {
    this._flapguard = value;
  }
  public resetFlapguard() {
    this._flapguard = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flapguardInput() {
    return this._flapguard;
  }

  // flow_control - computed: true, optional: true, required: false
  private _flowControl?: string; 
  public get flowControl() {
    return this.getStringAttribute('flow_control');
  }
  public set flowControl(value: string) {
    this._flowControl = value;
  }
  public resetFlowControl() {
    this._flowControl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flowControlInput() {
    return this._flowControl;
  }

  // fortiswitch_acls - computed: true, optional: true, required: false
  private _fortiswitchAcls?: number[]; 
  public get fortiswitchAcls() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('fortiswitch_acls')));
  }
  public set fortiswitchAcls(value: number[]) {
    this._fortiswitchAcls = value;
  }
  public resetFortiswitchAcls() {
    this._fortiswitchAcls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fortiswitchAclsInput() {
    return this._fortiswitchAcls;
  }

  // igmp_snooping - computed: false, optional: true, required: false
  private _igmpSnooping?: string; 
  public get igmpSnooping() {
    return this.getStringAttribute('igmp_snooping');
  }
  public set igmpSnooping(value: string) {
    this._igmpSnooping = value;
  }
  public resetIgmpSnooping() {
    this._igmpSnooping = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get igmpSnoopingInput() {
    return this._igmpSnooping;
  }

  // igmp_snooping_flood_reports - computed: true, optional: true, required: false
  private _igmpSnoopingFloodReports?: string; 
  public get igmpSnoopingFloodReports() {
    return this.getStringAttribute('igmp_snooping_flood_reports');
  }
  public set igmpSnoopingFloodReports(value: string) {
    this._igmpSnoopingFloodReports = value;
  }
  public resetIgmpSnoopingFloodReports() {
    this._igmpSnoopingFloodReports = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get igmpSnoopingFloodReportsInput() {
    return this._igmpSnoopingFloodReports;
  }

  // igmps_flood_reports - computed: true, optional: true, required: false
  private _igmpsFloodReports?: string; 
  public get igmpsFloodReports() {
    return this.getStringAttribute('igmps_flood_reports');
  }
  public set igmpsFloodReports(value: string) {
    this._igmpsFloodReports = value;
  }
  public resetIgmpsFloodReports() {
    this._igmpsFloodReports = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get igmpsFloodReportsInput() {
    return this._igmpsFloodReports;
  }

  // igmps_flood_traffic - computed: true, optional: true, required: false
  private _igmpsFloodTraffic?: string; 
  public get igmpsFloodTraffic() {
    return this.getStringAttribute('igmps_flood_traffic');
  }
  public set igmpsFloodTraffic(value: string) {
    this._igmpsFloodTraffic = value;
  }
  public resetIgmpsFloodTraffic() {
    this._igmpsFloodTraffic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get igmpsFloodTrafficInput() {
    return this._igmpsFloodTraffic;
  }

  // interface_tags - computed: false, optional: true, required: false
  private _interfaceTags?: string; 
  public get interfaceTags() {
    return this.getStringAttribute('interface_tags');
  }
  public set interfaceTags(value: string) {
    this._interfaceTags = value;
  }
  public resetInterfaceTags() {
    this._interfaceTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceTagsInput() {
    return this._interfaceTags;
  }

  // ip_source_guard - computed: true, optional: true, required: false
  private _ipSourceGuard?: string; 
  public get ipSourceGuard() {
    return this.getStringAttribute('ip_source_guard');
  }
  public set ipSourceGuard(value: string) {
    this._ipSourceGuard = value;
  }
  public resetIpSourceGuard() {
    this._ipSourceGuard = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipSourceGuardInput() {
    return this._ipSourceGuard;
  }

  // isl_peer_device_sn - computed: false, optional: true, required: false
  private _islPeerDeviceSn?: string; 
  public get islPeerDeviceSn() {
    return this.getStringAttribute('isl_peer_device_sn');
  }
  public set islPeerDeviceSn(value: string) {
    this._islPeerDeviceSn = value;
  }
  public resetIslPeerDeviceSn() {
    this._islPeerDeviceSn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get islPeerDeviceSnInput() {
    return this._islPeerDeviceSn;
  }

  // lacp_speed - computed: true, optional: true, required: false
  private _lacpSpeed?: string; 
  public get lacpSpeed() {
    return this.getStringAttribute('lacp_speed');
  }
  public set lacpSpeed(value: string) {
    this._lacpSpeed = value;
  }
  public resetLacpSpeed() {
    this._lacpSpeed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lacpSpeedInput() {
    return this._lacpSpeed;
  }

  // learning_limit - computed: false, optional: true, required: false
  private _learningLimit?: number; 
  public get learningLimit() {
    return this.getNumberAttribute('learning_limit');
  }
  public set learningLimit(value: number) {
    this._learningLimit = value;
  }
  public resetLearningLimit() {
    this._learningLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get learningLimitInput() {
    return this._learningLimit;
  }

  // link_status - computed: true, optional: true, required: false
  private _linkStatus?: string; 
  public get linkStatus() {
    return this.getStringAttribute('link_status');
  }
  public set linkStatus(value: string) {
    this._linkStatus = value;
  }
  public resetLinkStatus() {
    this._linkStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linkStatusInput() {
    return this._linkStatus;
  }

  // lldp_profile - computed: true, optional: true, required: false
  private _lldpProfile?: string; 
  public get lldpProfile() {
    return this.getStringAttribute('lldp_profile');
  }
  public set lldpProfile(value: string) {
    this._lldpProfile = value;
  }
  public resetLldpProfile() {
    this._lldpProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lldpProfileInput() {
    return this._lldpProfile;
  }

  // lldp_status - computed: true, optional: true, required: false
  private _lldpStatus?: string; 
  public get lldpStatus() {
    return this.getStringAttribute('lldp_status');
  }
  public set lldpStatus(value: string) {
    this._lldpStatus = value;
  }
  public resetLldpStatus() {
    this._lldpStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lldpStatusInput() {
    return this._lldpStatus;
  }

  // loop_guard - computed: true, optional: true, required: false
  private _loopGuard?: string; 
  public get loopGuard() {
    return this.getStringAttribute('loop_guard');
  }
  public set loopGuard(value: string) {
    this._loopGuard = value;
  }
  public resetLoopGuard() {
    this._loopGuard = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loopGuardInput() {
    return this._loopGuard;
  }

  // loop_guard_timeout - computed: true, optional: true, required: false
  private _loopGuardTimeout?: number; 
  public get loopGuardTimeout() {
    return this.getNumberAttribute('loop_guard_timeout');
  }
  public set loopGuardTimeout(value: number) {
    this._loopGuardTimeout = value;
  }
  public resetLoopGuardTimeout() {
    this._loopGuardTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loopGuardTimeoutInput() {
    return this._loopGuardTimeout;
  }

  // matched_dpp_intf_tags - computed: false, optional: true, required: false
  private _matchedDppIntfTags?: string; 
  public get matchedDppIntfTags() {
    return this.getStringAttribute('matched_dpp_intf_tags');
  }
  public set matchedDppIntfTags(value: string) {
    this._matchedDppIntfTags = value;
  }
  public resetMatchedDppIntfTags() {
    this._matchedDppIntfTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchedDppIntfTagsInput() {
    return this._matchedDppIntfTags;
  }

  // matched_dpp_policy - computed: false, optional: true, required: false
  private _matchedDppPolicy?: string; 
  public get matchedDppPolicy() {
    return this.getStringAttribute('matched_dpp_policy');
  }
  public set matchedDppPolicy(value: string) {
    this._matchedDppPolicy = value;
  }
  public resetMatchedDppPolicy() {
    this._matchedDppPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchedDppPolicyInput() {
    return this._matchedDppPolicy;
  }

  // max_bundle - computed: false, optional: true, required: false
  private _maxBundle?: number; 
  public get maxBundle() {
    return this.getNumberAttribute('max_bundle');
  }
  public set maxBundle(value: number) {
    this._maxBundle = value;
  }
  public resetMaxBundle() {
    this._maxBundle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxBundleInput() {
    return this._maxBundle;
  }

  // mcast_snooping_flood_traffic - computed: true, optional: true, required: false
  private _mcastSnoopingFloodTraffic?: string; 
  public get mcastSnoopingFloodTraffic() {
    return this.getStringAttribute('mcast_snooping_flood_traffic');
  }
  public set mcastSnoopingFloodTraffic(value: string) {
    this._mcastSnoopingFloodTraffic = value;
  }
  public resetMcastSnoopingFloodTraffic() {
    this._mcastSnoopingFloodTraffic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mcastSnoopingFloodTrafficInput() {
    return this._mcastSnoopingFloodTraffic;
  }

  // mclag - computed: false, optional: true, required: false
  private _mclag?: string; 
  public get mclag() {
    return this.getStringAttribute('mclag');
  }
  public set mclag(value: string) {
    this._mclag = value;
  }
  public resetMclag() {
    this._mclag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mclagInput() {
    return this._mclag;
  }

  // mclag_icl_port - computed: false, optional: true, required: false
  private _mclagIclPort?: number; 
  public get mclagIclPort() {
    return this.getNumberAttribute('mclag_icl_port');
  }
  public set mclagIclPort(value: number) {
    this._mclagIclPort = value;
  }
  public resetMclagIclPort() {
    this._mclagIclPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mclagIclPortInput() {
    return this._mclagIclPort;
  }

  // media_type - computed: false, optional: true, required: false
  private _mediaType?: string; 
  public get mediaType() {
    return this.getStringAttribute('media_type');
  }
  public set mediaType(value: string) {
    this._mediaType = value;
  }
  public resetMediaType() {
    this._mediaType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mediaTypeInput() {
    return this._mediaType;
  }

  // member_withdrawal_behavior - computed: true, optional: true, required: false
  private _memberWithdrawalBehavior?: string; 
  public get memberWithdrawalBehavior() {
    return this.getStringAttribute('member_withdrawal_behavior');
  }
  public set memberWithdrawalBehavior(value: string) {
    this._memberWithdrawalBehavior = value;
  }
  public resetMemberWithdrawalBehavior() {
    this._memberWithdrawalBehavior = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memberWithdrawalBehaviorInput() {
    return this._memberWithdrawalBehavior;
  }

  // members - computed: true, optional: true, required: false
  private _members?: string[]; 
  public get members() {
    return cdktf.Fn.tolist(this.getListAttribute('members'));
  }
  public set members(value: string[]) {
    this._members = value;
  }
  public resetMembers() {
    this._members = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get membersInput() {
    return this._members;
  }

  // min_bundle - computed: false, optional: true, required: false
  private _minBundle?: number; 
  public get minBundle() {
    return this.getNumberAttribute('min_bundle');
  }
  public set minBundle(value: number) {
    this._minBundle = value;
  }
  public resetMinBundle() {
    this._minBundle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minBundleInput() {
    return this._minBundle;
  }

  // mode - computed: false, optional: true, required: false
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

  // p2p_port - computed: false, optional: true, required: false
  private _p2PPort?: number; 
  public get p2PPort() {
    return this.getNumberAttribute('p2p_port');
  }
  public set p2PPort(value: number) {
    this._p2PPort = value;
  }
  public resetP2PPort() {
    this._p2PPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get p2PPortInput() {
    return this._p2PPort;
  }

  // packet_sample_rate - computed: false, optional: true, required: false
  private _packetSampleRate?: number; 
  public get packetSampleRate() {
    return this.getNumberAttribute('packet_sample_rate');
  }
  public set packetSampleRate(value: number) {
    this._packetSampleRate = value;
  }
  public resetPacketSampleRate() {
    this._packetSampleRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packetSampleRateInput() {
    return this._packetSampleRate;
  }

  // packet_sampler - computed: true, optional: true, required: false
  private _packetSampler?: string; 
  public get packetSampler() {
    return this.getStringAttribute('packet_sampler');
  }
  public set packetSampler(value: string) {
    this._packetSampler = value;
  }
  public resetPacketSampler() {
    this._packetSampler = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packetSamplerInput() {
    return this._packetSampler;
  }

  // pause_meter - computed: false, optional: true, required: false
  private _pauseMeter?: number; 
  public get pauseMeter() {
    return this.getNumberAttribute('pause_meter');
  }
  public set pauseMeter(value: number) {
    this._pauseMeter = value;
  }
  public resetPauseMeter() {
    this._pauseMeter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pauseMeterInput() {
    return this._pauseMeter;
  }

  // pause_meter_resume - computed: false, optional: true, required: false
  private _pauseMeterResume?: string; 
  public get pauseMeterResume() {
    return this.getStringAttribute('pause_meter_resume');
  }
  public set pauseMeterResume(value: string) {
    this._pauseMeterResume = value;
  }
  public resetPauseMeterResume() {
    this._pauseMeterResume = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pauseMeterResumeInput() {
    return this._pauseMeterResume;
  }

  // poe_max_power - computed: false, optional: true, required: false
  private _poeMaxPower?: string; 
  public get poeMaxPower() {
    return this.getStringAttribute('poe_max_power');
  }
  public set poeMaxPower(value: string) {
    this._poeMaxPower = value;
  }
  public resetPoeMaxPower() {
    this._poeMaxPower = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get poeMaxPowerInput() {
    return this._poeMaxPower;
  }

  // poe_mode_bt_cabable - computed: false, optional: true, required: false
  private _poeModeBtCabable?: number; 
  public get poeModeBtCabable() {
    return this.getNumberAttribute('poe_mode_bt_cabable');
  }
  public set poeModeBtCabable(value: number) {
    this._poeModeBtCabable = value;
  }
  public resetPoeModeBtCabable() {
    this._poeModeBtCabable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get poeModeBtCabableInput() {
    return this._poeModeBtCabable;
  }

  // poe_port_mode - computed: true, optional: true, required: false
  private _poePortMode?: string; 
  public get poePortMode() {
    return this.getStringAttribute('poe_port_mode');
  }
  public set poePortMode(value: string) {
    this._poePortMode = value;
  }
  public resetPoePortMode() {
    this._poePortMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get poePortModeInput() {
    return this._poePortMode;
  }

  // poe_port_power - computed: true, optional: true, required: false
  private _poePortPower?: string; 
  public get poePortPower() {
    return this.getStringAttribute('poe_port_power');
  }
  public set poePortPower(value: string) {
    this._poePortPower = value;
  }
  public resetPoePortPower() {
    this._poePortPower = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get poePortPowerInput() {
    return this._poePortPower;
  }

  // poe_port_priority - computed: true, optional: true, required: false
  private _poePortPriority?: string; 
  public get poePortPriority() {
    return this.getStringAttribute('poe_port_priority');
  }
  public set poePortPriority(value: string) {
    this._poePortPriority = value;
  }
  public resetPoePortPriority() {
    this._poePortPriority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get poePortPriorityInput() {
    return this._poePortPriority;
  }

  // poe_pre_standard_detection - computed: false, optional: true, required: false
  private _poePreStandardDetection?: string; 
  public get poePreStandardDetection() {
    return this.getStringAttribute('poe_pre_standard_detection');
  }
  public set poePreStandardDetection(value: string) {
    this._poePreStandardDetection = value;
  }
  public resetPoePreStandardDetection() {
    this._poePreStandardDetection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get poePreStandardDetectionInput() {
    return this._poePreStandardDetection;
  }

  // poe_standard - computed: false, optional: true, required: false
  private _poeStandard?: string; 
  public get poeStandard() {
    return this.getStringAttribute('poe_standard');
  }
  public set poeStandard(value: string) {
    this._poeStandard = value;
  }
  public resetPoeStandard() {
    this._poeStandard = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get poeStandardInput() {
    return this._poeStandard;
  }

  // poe_status - computed: false, optional: true, required: false
  private _poeStatus?: string; 
  public get poeStatus() {
    return this.getStringAttribute('poe_status');
  }
  public set poeStatus(value: string) {
    this._poeStatus = value;
  }
  public resetPoeStatus() {
    this._poeStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get poeStatusInput() {
    return this._poeStatus;
  }

  // port_name - computed: false, optional: true, required: false
  private _portName?: string; 
  public get portName() {
    return this.getStringAttribute('port_name');
  }
  public set portName(value: string) {
    this._portName = value;
  }
  public resetPortName() {
    this._portName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portNameInput() {
    return this._portName;
  }

  // port_owner - computed: false, optional: true, required: false
  private _portOwner?: string; 
  public get portOwner() {
    return this.getStringAttribute('port_owner');
  }
  public set portOwner(value: string) {
    this._portOwner = value;
  }
  public resetPortOwner() {
    this._portOwner = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portOwnerInput() {
    return this._portOwner;
  }

  // port_policy - computed: false, optional: true, required: false
  private _portPolicy?: string; 
  public get portPolicy() {
    return this.getStringAttribute('port_policy');
  }
  public set portPolicy(value: string) {
    this._portPolicy = value;
  }
  public resetPortPolicy() {
    this._portPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portPolicyInput() {
    return this._portPolicy;
  }

  // port_security_policy - computed: false, optional: true, required: false
  private _portSecurityPolicy?: string; 
  public get portSecurityPolicy() {
    return this.getStringAttribute('port_security_policy');
  }
  public set portSecurityPolicy(value: string) {
    this._portSecurityPolicy = value;
  }
  public resetPortSecurityPolicy() {
    this._portSecurityPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portSecurityPolicyInput() {
    return this._portSecurityPolicy;
  }

  // port_selection_criteria - computed: false, optional: true, required: false
  private _portSelectionCriteria?: string; 
  public get portSelectionCriteria() {
    return this.getStringAttribute('port_selection_criteria');
  }
  public set portSelectionCriteria(value: string) {
    this._portSelectionCriteria = value;
  }
  public resetPortSelectionCriteria() {
    this._portSelectionCriteria = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portSelectionCriteriaInput() {
    return this._portSelectionCriteria;
  }

  // ptp_status - computed: true, optional: true, required: false
  private _ptpStatus?: string; 
  public get ptpStatus() {
    return this.getStringAttribute('ptp_status');
  }
  public set ptpStatus(value: string) {
    this._ptpStatus = value;
  }
  public resetPtpStatus() {
    this._ptpStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ptpStatusInput() {
    return this._ptpStatus;
  }

  // qos_policy - computed: true, optional: true, required: false
  private _qosPolicy?: string; 
  public get qosPolicy() {
    return this.getStringAttribute('qos_policy');
  }
  public set qosPolicy(value: string) {
    this._qosPolicy = value;
  }
  public resetQosPolicy() {
    this._qosPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get qosPolicyInput() {
    return this._qosPolicy;
  }

  // restricted_auth_port - computed: false, optional: true, required: false
  private _restrictedAuthPort?: number; 
  public get restrictedAuthPort() {
    return this.getNumberAttribute('restricted_auth_port');
  }
  public set restrictedAuthPort(value: number) {
    this._restrictedAuthPort = value;
  }
  public resetRestrictedAuthPort() {
    this._restrictedAuthPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restrictedAuthPortInput() {
    return this._restrictedAuthPort;
  }

  // rpvst_port - computed: true, optional: true, required: false
  private _rpvstPort?: string; 
  public get rpvstPort() {
    return this.getStringAttribute('rpvst_port');
  }
  public set rpvstPort(value: string) {
    this._rpvstPort = value;
  }
  public resetRpvstPort() {
    this._rpvstPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rpvstPortInput() {
    return this._rpvstPort;
  }

  // sample_direction - computed: false, optional: true, required: false
  private _sampleDirection?: string; 
  public get sampleDirection() {
    return this.getStringAttribute('sample_direction');
  }
  public set sampleDirection(value: string) {
    this._sampleDirection = value;
  }
  public resetSampleDirection() {
    this._sampleDirection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sampleDirectionInput() {
    return this._sampleDirection;
  }

  // sflow_counter_interval - computed: false, optional: true, required: false
  private _sflowCounterInterval?: number; 
  public get sflowCounterInterval() {
    return this.getNumberAttribute('sflow_counter_interval');
  }
  public set sflowCounterInterval(value: number) {
    this._sflowCounterInterval = value;
  }
  public resetSflowCounterInterval() {
    this._sflowCounterInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sflowCounterIntervalInput() {
    return this._sflowCounterInterval;
  }

  // sflow_sample_rate - computed: false, optional: true, required: false
  private _sflowSampleRate?: number; 
  public get sflowSampleRate() {
    return this.getNumberAttribute('sflow_sample_rate');
  }
  public set sflowSampleRate(value: number) {
    this._sflowSampleRate = value;
  }
  public resetSflowSampleRate() {
    this._sflowSampleRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sflowSampleRateInput() {
    return this._sflowSampleRate;
  }

  // sflow_sampler - computed: false, optional: true, required: false
  private _sflowSampler?: string; 
  public get sflowSampler() {
    return this.getStringAttribute('sflow_sampler');
  }
  public set sflowSampler(value: string) {
    this._sflowSampler = value;
  }
  public resetSflowSampler() {
    this._sflowSampler = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sflowSamplerInput() {
    return this._sflowSampler;
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

  // sticky_mac - computed: true, optional: true, required: false
  private _stickyMac?: string; 
  public get stickyMac() {
    return this.getStringAttribute('sticky_mac');
  }
  public set stickyMac(value: string) {
    this._stickyMac = value;
  }
  public resetStickyMac() {
    this._stickyMac = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stickyMacInput() {
    return this._stickyMac;
  }

  // stp_bpdu_guard - computed: true, optional: true, required: false
  private _stpBpduGuard?: string; 
  public get stpBpduGuard() {
    return this.getStringAttribute('stp_bpdu_guard');
  }
  public set stpBpduGuard(value: string) {
    this._stpBpduGuard = value;
  }
  public resetStpBpduGuard() {
    this._stpBpduGuard = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stpBpduGuardInput() {
    return this._stpBpduGuard;
  }

  // stp_bpdu_guard_timeout - computed: false, optional: true, required: false
  private _stpBpduGuardTimeout?: number; 
  public get stpBpduGuardTimeout() {
    return this.getNumberAttribute('stp_bpdu_guard_timeout');
  }
  public set stpBpduGuardTimeout(value: number) {
    this._stpBpduGuardTimeout = value;
  }
  public resetStpBpduGuardTimeout() {
    this._stpBpduGuardTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stpBpduGuardTimeoutInput() {
    return this._stpBpduGuardTimeout;
  }

  // stp_root_guard - computed: true, optional: true, required: false
  private _stpRootGuard?: string; 
  public get stpRootGuard() {
    return this.getStringAttribute('stp_root_guard');
  }
  public set stpRootGuard(value: string) {
    this._stpRootGuard = value;
  }
  public resetStpRootGuard() {
    this._stpRootGuard = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stpRootGuardInput() {
    return this._stpRootGuard;
  }

  // stp_state - computed: true, optional: true, required: false
  private _stpState?: string; 
  public get stpState() {
    return this.getStringAttribute('stp_state');
  }
  public set stpState(value: string) {
    this._stpState = value;
  }
  public resetStpState() {
    this._stpState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stpStateInput() {
    return this._stpState;
  }

  // trunk_member - computed: false, optional: true, required: false
  private _trunkMember?: number; 
  public get trunkMember() {
    return this.getNumberAttribute('trunk_member');
  }
  public set trunkMember(value: number) {
    this._trunkMember = value;
  }
  public resetTrunkMember() {
    this._trunkMember = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trunkMemberInput() {
    return this._trunkMember;
  }

  // type - computed: true, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // untagged_vlans - computed: false, optional: true, required: false
  private _untaggedVlans?: string; 
  public get untaggedVlans() {
    return this.getStringAttribute('untagged_vlans');
  }
  public set untaggedVlans(value: string) {
    this._untaggedVlans = value;
  }
  public resetUntaggedVlans() {
    this._untaggedVlans = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get untaggedVlansInput() {
    return this._untaggedVlans;
  }

  // vlan - computed: false, optional: true, required: false
  private _vlan?: string; 
  public get vlan() {
    return this.getStringAttribute('vlan');
  }
  public set vlan(value: string) {
    this._vlan = value;
  }
  public resetVlan() {
    this._vlan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanInput() {
    return this._vlan;
  }

  // dhcp_snoop_option82_override - computed: false, optional: true, required: false
  private _dhcpSnoopOption82Override = new ObjectSwitchcontrollerManagedswitchPortsDhcpSnoopOption82OverrideList(this, "dhcp_snoop_option82_override", false);
  public get dhcpSnoopOption82Override() {
    return this._dhcpSnoopOption82Override;
  }
  public putDhcpSnoopOption82Override(value: ObjectSwitchcontrollerManagedswitchPortsDhcpSnoopOption82Override[] | cdktf.IResolvable) {
    this._dhcpSnoopOption82Override.internalValue = value;
  }
  public resetDhcpSnoopOption82Override() {
    this._dhcpSnoopOption82Override.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpSnoopOption82OverrideInput() {
    return this._dhcpSnoopOption82Override.internalValue;
  }
}

export class ObjectSwitchcontrollerManagedswitchPortsList extends cdktf.ComplexList {
  public internalValue? : ObjectSwitchcontrollerManagedswitchPorts[] | cdktf.IResolvable

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
  public get(index: number): ObjectSwitchcontrollerManagedswitchPortsOutputReference {
    return new ObjectSwitchcontrollerManagedswitchPortsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObjectSwitchcontrollerManagedswitchRouteOffloadRouter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_managedswitch#router_ip ObjectSwitchcontrollerManagedswitch#router_ip}
  */
  readonly routerIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_managedswitch#vlan_name ObjectSwitchcontrollerManagedswitch#vlan_name}
  */
  readonly vlanName?: string;
}

export function objectSwitchcontrollerManagedswitchRouteOffloadRouterToTerraform(struct?: ObjectSwitchcontrollerManagedswitchRouteOffloadRouter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    router_ip: cdktf.stringToTerraform(struct!.routerIp),
    vlan_name: cdktf.stringToTerraform(struct!.vlanName),
  }
}


export function objectSwitchcontrollerManagedswitchRouteOffloadRouterToHclTerraform(struct?: ObjectSwitchcontrollerManagedswitchRouteOffloadRouter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    router_ip: {
      value: cdktf.stringToHclTerraform(struct!.routerIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vlan_name: {
      value: cdktf.stringToHclTerraform(struct!.vlanName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObjectSwitchcontrollerManagedswitchRouteOffloadRouterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ObjectSwitchcontrollerManagedswitchRouteOffloadRouter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._routerIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.routerIp = this._routerIp;
    }
    if (this._vlanName !== undefined) {
      hasAnyValues = true;
      internalValueResult.vlanName = this._vlanName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObjectSwitchcontrollerManagedswitchRouteOffloadRouter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._routerIp = undefined;
      this._vlanName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._routerIp = value.routerIp;
      this._vlanName = value.vlanName;
    }
  }

  // router_ip - computed: false, optional: true, required: false
  private _routerIp?: string; 
  public get routerIp() {
    return this.getStringAttribute('router_ip');
  }
  public set routerIp(value: string) {
    this._routerIp = value;
  }
  public resetRouterIp() {
    this._routerIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routerIpInput() {
    return this._routerIp;
  }

  // vlan_name - computed: false, optional: true, required: false
  private _vlanName?: string; 
  public get vlanName() {
    return this.getStringAttribute('vlan_name');
  }
  public set vlanName(value: string) {
    this._vlanName = value;
  }
  public resetVlanName() {
    this._vlanName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanNameInput() {
    return this._vlanName;
  }
}

export class ObjectSwitchcontrollerManagedswitchRouteOffloadRouterList extends cdktf.ComplexList {
  public internalValue? : ObjectSwitchcontrollerManagedswitchRouteOffloadRouter[] | cdktf.IResolvable

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
  public get(index: number): ObjectSwitchcontrollerManagedswitchRouteOffloadRouterOutputReference {
    return new ObjectSwitchcontrollerManagedswitchRouteOffloadRouterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObjectSwitchcontrollerManagedswitchVlan {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_managedswitch#assignment_priority ObjectSwitchcontrollerManagedswitch#assignment_priority}
  */
  readonly assignmentPriority?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_managedswitch#vlan_name ObjectSwitchcontrollerManagedswitch#vlan_name}
  */
  readonly vlanName?: string;
}

export function objectSwitchcontrollerManagedswitchVlanToTerraform(struct?: ObjectSwitchcontrollerManagedswitchVlan | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    assignment_priority: cdktf.numberToTerraform(struct!.assignmentPriority),
    vlan_name: cdktf.stringToTerraform(struct!.vlanName),
  }
}


export function objectSwitchcontrollerManagedswitchVlanToHclTerraform(struct?: ObjectSwitchcontrollerManagedswitchVlan | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    assignment_priority: {
      value: cdktf.numberToHclTerraform(struct!.assignmentPriority),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    vlan_name: {
      value: cdktf.stringToHclTerraform(struct!.vlanName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObjectSwitchcontrollerManagedswitchVlanOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ObjectSwitchcontrollerManagedswitchVlan | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._assignmentPriority !== undefined) {
      hasAnyValues = true;
      internalValueResult.assignmentPriority = this._assignmentPriority;
    }
    if (this._vlanName !== undefined) {
      hasAnyValues = true;
      internalValueResult.vlanName = this._vlanName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObjectSwitchcontrollerManagedswitchVlan | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._assignmentPriority = undefined;
      this._vlanName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._assignmentPriority = value.assignmentPriority;
      this._vlanName = value.vlanName;
    }
  }

  // assignment_priority - computed: false, optional: true, required: false
  private _assignmentPriority?: number; 
  public get assignmentPriority() {
    return this.getNumberAttribute('assignment_priority');
  }
  public set assignmentPriority(value: number) {
    this._assignmentPriority = value;
  }
  public resetAssignmentPriority() {
    this._assignmentPriority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assignmentPriorityInput() {
    return this._assignmentPriority;
  }

  // vlan_name - computed: false, optional: true, required: false
  private _vlanName?: string; 
  public get vlanName() {
    return this.getStringAttribute('vlan_name');
  }
  public set vlanName(value: string) {
    this._vlanName = value;
  }
  public resetVlanName() {
    this._vlanName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanNameInput() {
    return this._vlanName;
  }
}

export class ObjectSwitchcontrollerManagedswitchVlanList extends cdktf.ComplexList {
  public internalValue? : ObjectSwitchcontrollerManagedswitchVlan[] | cdktf.IResolvable

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
  public get(index: number): ObjectSwitchcontrollerManagedswitchVlanOutputReference {
    return new ObjectSwitchcontrollerManagedswitchVlanOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_managedswitch fortimanager_object_switchcontroller_managedswitch}
*/
export class ObjectSwitchcontrollerManagedswitch extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortimanager_object_switchcontroller_managedswitch";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ObjectSwitchcontrollerManagedswitch resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ObjectSwitchcontrollerManagedswitch to import
  * @param importFromId The id of the existing ObjectSwitchcontrollerManagedswitch that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_managedswitch#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ObjectSwitchcontrollerManagedswitch to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortimanager_object_switchcontroller_managedswitch", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_managedswitch fortimanager_object_switchcontroller_managedswitch} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ObjectSwitchcontrollerManagedswitchConfig = {}
  */
  public constructor(scope: Construct, id: string, config: ObjectSwitchcontrollerManagedswitchConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortimanager_object_switchcontroller_managedswitch',
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
    this._platform = config.platform;
    this._adom = config.adom;
    this._description = config.description;
    this._dhcpServerAccessList = config.dhcpServerAccessList;
    this._dynamicSortSubtable = config.dynamicSortSubtable;
    this._firmwareProvision = config.firmwareProvision;
    this._firmwareProvisionLatest = config.firmwareProvisionLatest;
    this._firmwareProvisionVersion = config.firmwareProvisionVersion;
    this._id = config.id;
    this._l3Discovered = config.l3Discovered;
    this._mclagIgmpSnoopingAware = config.mclagIgmpSnoopingAware;
    this._mgmtMode = config.mgmtMode;
    this._name = config.name;
    this._overrideSnmpCommunity = config.overrideSnmpCommunity;
    this._overrideSnmpSysinfo = config.overrideSnmpSysinfo;
    this._overrideSnmpTrapThreshold = config.overrideSnmpTrapThreshold;
    this._overrideSnmpUser = config.overrideSnmpUser;
    this._poeDetectionType = config.poeDetectionType;
    this._ptpProfile = config.ptpProfile;
    this._ptpStatus = config.ptpStatus;
    this._purdueLevel = config.purdueLevel;
    this._qosDropPolicy = config.qosDropPolicy;
    this._qosRedProbability = config.qosRedProbability;
    this._radiusNasIp = config.radiusNasIp;
    this._radiusNasIpOverride = config.radiusNasIpOverride;
    this._routeOffload = config.routeOffload;
    this._routeOffloadMclag = config.routeOffloadMclag;
    this._scopetype = config.scopetype;
    this._switchDhcpOpt43Key = config.switchDhcpOpt43Key;
    this._switchId = config.switchId;
    this._tdrSupported = config.tdrSupported;
    this._tunnelDiscovered = config.tunnelDiscovered;
    this._customCommand.internalValue = config.customCommand;
    this._dhcpSnoopingStaticClient.internalValue = config.dhcpSnoopingStaticClient;
    this._ports.internalValue = config.ports;
    this._routeOffloadRouter.internalValue = config.routeOffloadRouter;
    this._vlan.internalValue = config.vlan;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // _platform - computed: false, optional: true, required: false
  private _platform?: string; 
  public get platform() {
    return this.getStringAttribute('_platform');
  }
  public set platform(value: string) {
    this._platform = value;
  }
  public resetPlatform() {
    this._platform = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get platformInput() {
    return this._platform;
  }

  // adom - computed: false, optional: true, required: false
  private _adom?: string; 
  public get adom() {
    return this.getStringAttribute('adom');
  }
  public set adom(value: string) {
    this._adom = value;
  }
  public resetAdom() {
    this._adom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adomInput() {
    return this._adom;
  }

  // description - computed: false, optional: true, required: false
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

  // dhcp_server_access_list - computed: true, optional: true, required: false
  private _dhcpServerAccessList?: string; 
  public get dhcpServerAccessList() {
    return this.getStringAttribute('dhcp_server_access_list');
  }
  public set dhcpServerAccessList(value: string) {
    this._dhcpServerAccessList = value;
  }
  public resetDhcpServerAccessList() {
    this._dhcpServerAccessList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpServerAccessListInput() {
    return this._dhcpServerAccessList;
  }

  // dynamic_sort_subtable - computed: false, optional: true, required: false
  private _dynamicSortSubtable?: string; 
  public get dynamicSortSubtable() {
    return this.getStringAttribute('dynamic_sort_subtable');
  }
  public set dynamicSortSubtable(value: string) {
    this._dynamicSortSubtable = value;
  }
  public resetDynamicSortSubtable() {
    this._dynamicSortSubtable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicSortSubtableInput() {
    return this._dynamicSortSubtable;
  }

  // firmware_provision - computed: true, optional: true, required: false
  private _firmwareProvision?: string; 
  public get firmwareProvision() {
    return this.getStringAttribute('firmware_provision');
  }
  public set firmwareProvision(value: string) {
    this._firmwareProvision = value;
  }
  public resetFirmwareProvision() {
    this._firmwareProvision = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get firmwareProvisionInput() {
    return this._firmwareProvision;
  }

  // firmware_provision_latest - computed: true, optional: true, required: false
  private _firmwareProvisionLatest?: string; 
  public get firmwareProvisionLatest() {
    return this.getStringAttribute('firmware_provision_latest');
  }
  public set firmwareProvisionLatest(value: string) {
    this._firmwareProvisionLatest = value;
  }
  public resetFirmwareProvisionLatest() {
    this._firmwareProvisionLatest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get firmwareProvisionLatestInput() {
    return this._firmwareProvisionLatest;
  }

  // firmware_provision_version - computed: false, optional: true, required: false
  private _firmwareProvisionVersion?: string; 
  public get firmwareProvisionVersion() {
    return this.getStringAttribute('firmware_provision_version');
  }
  public set firmwareProvisionVersion(value: string) {
    this._firmwareProvisionVersion = value;
  }
  public resetFirmwareProvisionVersion() {
    this._firmwareProvisionVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get firmwareProvisionVersionInput() {
    return this._firmwareProvisionVersion;
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

  // l3_discovered - computed: false, optional: true, required: false
  private _l3Discovered?: number; 
  public get l3Discovered() {
    return this.getNumberAttribute('l3_discovered');
  }
  public set l3Discovered(value: number) {
    this._l3Discovered = value;
  }
  public resetL3Discovered() {
    this._l3Discovered = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l3DiscoveredInput() {
    return this._l3Discovered;
  }

  // mclag_igmp_snooping_aware - computed: true, optional: true, required: false
  private _mclagIgmpSnoopingAware?: string; 
  public get mclagIgmpSnoopingAware() {
    return this.getStringAttribute('mclag_igmp_snooping_aware');
  }
  public set mclagIgmpSnoopingAware(value: string) {
    this._mclagIgmpSnoopingAware = value;
  }
  public resetMclagIgmpSnoopingAware() {
    this._mclagIgmpSnoopingAware = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mclagIgmpSnoopingAwareInput() {
    return this._mclagIgmpSnoopingAware;
  }

  // mgmt_mode - computed: false, optional: true, required: false
  private _mgmtMode?: number; 
  public get mgmtMode() {
    return this.getNumberAttribute('mgmt_mode');
  }
  public set mgmtMode(value: number) {
    this._mgmtMode = value;
  }
  public resetMgmtMode() {
    this._mgmtMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mgmtModeInput() {
    return this._mgmtMode;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // override_snmp_community - computed: true, optional: true, required: false
  private _overrideSnmpCommunity?: string; 
  public get overrideSnmpCommunity() {
    return this.getStringAttribute('override_snmp_community');
  }
  public set overrideSnmpCommunity(value: string) {
    this._overrideSnmpCommunity = value;
  }
  public resetOverrideSnmpCommunity() {
    this._overrideSnmpCommunity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overrideSnmpCommunityInput() {
    return this._overrideSnmpCommunity;
  }

  // override_snmp_sysinfo - computed: true, optional: true, required: false
  private _overrideSnmpSysinfo?: string; 
  public get overrideSnmpSysinfo() {
    return this.getStringAttribute('override_snmp_sysinfo');
  }
  public set overrideSnmpSysinfo(value: string) {
    this._overrideSnmpSysinfo = value;
  }
  public resetOverrideSnmpSysinfo() {
    this._overrideSnmpSysinfo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overrideSnmpSysinfoInput() {
    return this._overrideSnmpSysinfo;
  }

  // override_snmp_trap_threshold - computed: true, optional: true, required: false
  private _overrideSnmpTrapThreshold?: string; 
  public get overrideSnmpTrapThreshold() {
    return this.getStringAttribute('override_snmp_trap_threshold');
  }
  public set overrideSnmpTrapThreshold(value: string) {
    this._overrideSnmpTrapThreshold = value;
  }
  public resetOverrideSnmpTrapThreshold() {
    this._overrideSnmpTrapThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overrideSnmpTrapThresholdInput() {
    return this._overrideSnmpTrapThreshold;
  }

  // override_snmp_user - computed: true, optional: true, required: false
  private _overrideSnmpUser?: string; 
  public get overrideSnmpUser() {
    return this.getStringAttribute('override_snmp_user');
  }
  public set overrideSnmpUser(value: string) {
    this._overrideSnmpUser = value;
  }
  public resetOverrideSnmpUser() {
    this._overrideSnmpUser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overrideSnmpUserInput() {
    return this._overrideSnmpUser;
  }

  // poe_detection_type - computed: false, optional: true, required: false
  private _poeDetectionType?: number; 
  public get poeDetectionType() {
    return this.getNumberAttribute('poe_detection_type');
  }
  public set poeDetectionType(value: number) {
    this._poeDetectionType = value;
  }
  public resetPoeDetectionType() {
    this._poeDetectionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get poeDetectionTypeInput() {
    return this._poeDetectionType;
  }

  // ptp_profile - computed: true, optional: true, required: false
  private _ptpProfile?: string; 
  public get ptpProfile() {
    return this.getStringAttribute('ptp_profile');
  }
  public set ptpProfile(value: string) {
    this._ptpProfile = value;
  }
  public resetPtpProfile() {
    this._ptpProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ptpProfileInput() {
    return this._ptpProfile;
  }

  // ptp_status - computed: true, optional: true, required: false
  private _ptpStatus?: string; 
  public get ptpStatus() {
    return this.getStringAttribute('ptp_status');
  }
  public set ptpStatus(value: string) {
    this._ptpStatus = value;
  }
  public resetPtpStatus() {
    this._ptpStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ptpStatusInput() {
    return this._ptpStatus;
  }

  // purdue_level - computed: true, optional: true, required: false
  private _purdueLevel?: string; 
  public get purdueLevel() {
    return this.getStringAttribute('purdue_level');
  }
  public set purdueLevel(value: string) {
    this._purdueLevel = value;
  }
  public resetPurdueLevel() {
    this._purdueLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get purdueLevelInput() {
    return this._purdueLevel;
  }

  // qos_drop_policy - computed: true, optional: true, required: false
  private _qosDropPolicy?: string; 
  public get qosDropPolicy() {
    return this.getStringAttribute('qos_drop_policy');
  }
  public set qosDropPolicy(value: string) {
    this._qosDropPolicy = value;
  }
  public resetQosDropPolicy() {
    this._qosDropPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get qosDropPolicyInput() {
    return this._qosDropPolicy;
  }

  // qos_red_probability - computed: true, optional: true, required: false
  private _qosRedProbability?: number; 
  public get qosRedProbability() {
    return this.getNumberAttribute('qos_red_probability');
  }
  public set qosRedProbability(value: number) {
    this._qosRedProbability = value;
  }
  public resetQosRedProbability() {
    this._qosRedProbability = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get qosRedProbabilityInput() {
    return this._qosRedProbability;
  }

  // radius_nas_ip - computed: true, optional: true, required: false
  private _radiusNasIp?: string; 
  public get radiusNasIp() {
    return this.getStringAttribute('radius_nas_ip');
  }
  public set radiusNasIp(value: string) {
    this._radiusNasIp = value;
  }
  public resetRadiusNasIp() {
    this._radiusNasIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get radiusNasIpInput() {
    return this._radiusNasIp;
  }

  // radius_nas_ip_override - computed: true, optional: true, required: false
  private _radiusNasIpOverride?: string; 
  public get radiusNasIpOverride() {
    return this.getStringAttribute('radius_nas_ip_override');
  }
  public set radiusNasIpOverride(value: string) {
    this._radiusNasIpOverride = value;
  }
  public resetRadiusNasIpOverride() {
    this._radiusNasIpOverride = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get radiusNasIpOverrideInput() {
    return this._radiusNasIpOverride;
  }

  // route_offload - computed: true, optional: true, required: false
  private _routeOffload?: string; 
  public get routeOffload() {
    return this.getStringAttribute('route_offload');
  }
  public set routeOffload(value: string) {
    this._routeOffload = value;
  }
  public resetRouteOffload() {
    this._routeOffload = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeOffloadInput() {
    return this._routeOffload;
  }

  // route_offload_mclag - computed: true, optional: true, required: false
  private _routeOffloadMclag?: string; 
  public get routeOffloadMclag() {
    return this.getStringAttribute('route_offload_mclag');
  }
  public set routeOffloadMclag(value: string) {
    this._routeOffloadMclag = value;
  }
  public resetRouteOffloadMclag() {
    this._routeOffloadMclag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeOffloadMclagInput() {
    return this._routeOffloadMclag;
  }

  // scopetype - computed: false, optional: true, required: false
  private _scopetype?: string; 
  public get scopetype() {
    return this.getStringAttribute('scopetype');
  }
  public set scopetype(value: string) {
    this._scopetype = value;
  }
  public resetScopetype() {
    this._scopetype = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopetypeInput() {
    return this._scopetype;
  }

  // switch_dhcp_opt43_key - computed: false, optional: true, required: false
  private _switchDhcpOpt43Key?: string; 
  public get switchDhcpOpt43Key() {
    return this.getStringAttribute('switch_dhcp_opt43_key');
  }
  public set switchDhcpOpt43Key(value: string) {
    this._switchDhcpOpt43Key = value;
  }
  public resetSwitchDhcpOpt43Key() {
    this._switchDhcpOpt43Key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get switchDhcpOpt43KeyInput() {
    return this._switchDhcpOpt43Key;
  }

  // switch_id - computed: false, optional: true, required: false
  private _switchId?: string; 
  public get switchId() {
    return this.getStringAttribute('switch_id');
  }
  public set switchId(value: string) {
    this._switchId = value;
  }
  public resetSwitchId() {
    this._switchId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get switchIdInput() {
    return this._switchId;
  }

  // tdr_supported - computed: false, optional: true, required: false
  private _tdrSupported?: string; 
  public get tdrSupported() {
    return this.getStringAttribute('tdr_supported');
  }
  public set tdrSupported(value: string) {
    this._tdrSupported = value;
  }
  public resetTdrSupported() {
    this._tdrSupported = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tdrSupportedInput() {
    return this._tdrSupported;
  }

  // tunnel_discovered - computed: false, optional: true, required: false
  private _tunnelDiscovered?: number; 
  public get tunnelDiscovered() {
    return this.getNumberAttribute('tunnel_discovered');
  }
  public set tunnelDiscovered(value: number) {
    this._tunnelDiscovered = value;
  }
  public resetTunnelDiscovered() {
    this._tunnelDiscovered = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelDiscoveredInput() {
    return this._tunnelDiscovered;
  }

  // custom_command - computed: false, optional: true, required: false
  private _customCommand = new ObjectSwitchcontrollerManagedswitchCustomCommandList(this, "custom_command", false);
  public get customCommand() {
    return this._customCommand;
  }
  public putCustomCommand(value: ObjectSwitchcontrollerManagedswitchCustomCommand[] | cdktf.IResolvable) {
    this._customCommand.internalValue = value;
  }
  public resetCustomCommand() {
    this._customCommand.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customCommandInput() {
    return this._customCommand.internalValue;
  }

  // dhcp_snooping_static_client - computed: false, optional: true, required: false
  private _dhcpSnoopingStaticClient = new ObjectSwitchcontrollerManagedswitchDhcpSnoopingStaticClientList(this, "dhcp_snooping_static_client", false);
  public get dhcpSnoopingStaticClient() {
    return this._dhcpSnoopingStaticClient;
  }
  public putDhcpSnoopingStaticClient(value: ObjectSwitchcontrollerManagedswitchDhcpSnoopingStaticClient[] | cdktf.IResolvable) {
    this._dhcpSnoopingStaticClient.internalValue = value;
  }
  public resetDhcpSnoopingStaticClient() {
    this._dhcpSnoopingStaticClient.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpSnoopingStaticClientInput() {
    return this._dhcpSnoopingStaticClient.internalValue;
  }

  // ports - computed: false, optional: true, required: false
  private _ports = new ObjectSwitchcontrollerManagedswitchPortsList(this, "ports", false);
  public get ports() {
    return this._ports;
  }
  public putPorts(value: ObjectSwitchcontrollerManagedswitchPorts[] | cdktf.IResolvable) {
    this._ports.internalValue = value;
  }
  public resetPorts() {
    this._ports.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portsInput() {
    return this._ports.internalValue;
  }

  // route_offload_router - computed: false, optional: true, required: false
  private _routeOffloadRouter = new ObjectSwitchcontrollerManagedswitchRouteOffloadRouterList(this, "route_offload_router", false);
  public get routeOffloadRouter() {
    return this._routeOffloadRouter;
  }
  public putRouteOffloadRouter(value: ObjectSwitchcontrollerManagedswitchRouteOffloadRouter[] | cdktf.IResolvable) {
    this._routeOffloadRouter.internalValue = value;
  }
  public resetRouteOffloadRouter() {
    this._routeOffloadRouter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeOffloadRouterInput() {
    return this._routeOffloadRouter.internalValue;
  }

  // vlan - computed: false, optional: true, required: false
  private _vlan = new ObjectSwitchcontrollerManagedswitchVlanList(this, "vlan", false);
  public get vlan() {
    return this._vlan;
  }
  public putVlan(value: ObjectSwitchcontrollerManagedswitchVlan[] | cdktf.IResolvable) {
    this._vlan.internalValue = value;
  }
  public resetVlan() {
    this._vlan.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanInput() {
    return this._vlan.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      _platform: cdktf.stringToTerraform(this._platform),
      adom: cdktf.stringToTerraform(this._adom),
      description: cdktf.stringToTerraform(this._description),
      dhcp_server_access_list: cdktf.stringToTerraform(this._dhcpServerAccessList),
      dynamic_sort_subtable: cdktf.stringToTerraform(this._dynamicSortSubtable),
      firmware_provision: cdktf.stringToTerraform(this._firmwareProvision),
      firmware_provision_latest: cdktf.stringToTerraform(this._firmwareProvisionLatest),
      firmware_provision_version: cdktf.stringToTerraform(this._firmwareProvisionVersion),
      id: cdktf.stringToTerraform(this._id),
      l3_discovered: cdktf.numberToTerraform(this._l3Discovered),
      mclag_igmp_snooping_aware: cdktf.stringToTerraform(this._mclagIgmpSnoopingAware),
      mgmt_mode: cdktf.numberToTerraform(this._mgmtMode),
      name: cdktf.stringToTerraform(this._name),
      override_snmp_community: cdktf.stringToTerraform(this._overrideSnmpCommunity),
      override_snmp_sysinfo: cdktf.stringToTerraform(this._overrideSnmpSysinfo),
      override_snmp_trap_threshold: cdktf.stringToTerraform(this._overrideSnmpTrapThreshold),
      override_snmp_user: cdktf.stringToTerraform(this._overrideSnmpUser),
      poe_detection_type: cdktf.numberToTerraform(this._poeDetectionType),
      ptp_profile: cdktf.stringToTerraform(this._ptpProfile),
      ptp_status: cdktf.stringToTerraform(this._ptpStatus),
      purdue_level: cdktf.stringToTerraform(this._purdueLevel),
      qos_drop_policy: cdktf.stringToTerraform(this._qosDropPolicy),
      qos_red_probability: cdktf.numberToTerraform(this._qosRedProbability),
      radius_nas_ip: cdktf.stringToTerraform(this._radiusNasIp),
      radius_nas_ip_override: cdktf.stringToTerraform(this._radiusNasIpOverride),
      route_offload: cdktf.stringToTerraform(this._routeOffload),
      route_offload_mclag: cdktf.stringToTerraform(this._routeOffloadMclag),
      scopetype: cdktf.stringToTerraform(this._scopetype),
      switch_dhcp_opt43_key: cdktf.stringToTerraform(this._switchDhcpOpt43Key),
      switch_id: cdktf.stringToTerraform(this._switchId),
      tdr_supported: cdktf.stringToTerraform(this._tdrSupported),
      tunnel_discovered: cdktf.numberToTerraform(this._tunnelDiscovered),
      custom_command: cdktf.listMapper(objectSwitchcontrollerManagedswitchCustomCommandToTerraform, true)(this._customCommand.internalValue),
      dhcp_snooping_static_client: cdktf.listMapper(objectSwitchcontrollerManagedswitchDhcpSnoopingStaticClientToTerraform, true)(this._dhcpSnoopingStaticClient.internalValue),
      ports: cdktf.listMapper(objectSwitchcontrollerManagedswitchPortsToTerraform, true)(this._ports.internalValue),
      route_offload_router: cdktf.listMapper(objectSwitchcontrollerManagedswitchRouteOffloadRouterToTerraform, true)(this._routeOffloadRouter.internalValue),
      vlan: cdktf.listMapper(objectSwitchcontrollerManagedswitchVlanToTerraform, true)(this._vlan.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      _platform: {
        value: cdktf.stringToHclTerraform(this._platform),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      adom: {
        value: cdktf.stringToHclTerraform(this._adom),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dhcp_server_access_list: {
        value: cdktf.stringToHclTerraform(this._dhcpServerAccessList),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dynamic_sort_subtable: {
        value: cdktf.stringToHclTerraform(this._dynamicSortSubtable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      firmware_provision: {
        value: cdktf.stringToHclTerraform(this._firmwareProvision),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      firmware_provision_latest: {
        value: cdktf.stringToHclTerraform(this._firmwareProvisionLatest),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      firmware_provision_version: {
        value: cdktf.stringToHclTerraform(this._firmwareProvisionVersion),
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
      l3_discovered: {
        value: cdktf.numberToHclTerraform(this._l3Discovered),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      mclag_igmp_snooping_aware: {
        value: cdktf.stringToHclTerraform(this._mclagIgmpSnoopingAware),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mgmt_mode: {
        value: cdktf.numberToHclTerraform(this._mgmtMode),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      override_snmp_community: {
        value: cdktf.stringToHclTerraform(this._overrideSnmpCommunity),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      override_snmp_sysinfo: {
        value: cdktf.stringToHclTerraform(this._overrideSnmpSysinfo),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      override_snmp_trap_threshold: {
        value: cdktf.stringToHclTerraform(this._overrideSnmpTrapThreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      override_snmp_user: {
        value: cdktf.stringToHclTerraform(this._overrideSnmpUser),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      poe_detection_type: {
        value: cdktf.numberToHclTerraform(this._poeDetectionType),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ptp_profile: {
        value: cdktf.stringToHclTerraform(this._ptpProfile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ptp_status: {
        value: cdktf.stringToHclTerraform(this._ptpStatus),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      purdue_level: {
        value: cdktf.stringToHclTerraform(this._purdueLevel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      qos_drop_policy: {
        value: cdktf.stringToHclTerraform(this._qosDropPolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      qos_red_probability: {
        value: cdktf.numberToHclTerraform(this._qosRedProbability),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      radius_nas_ip: {
        value: cdktf.stringToHclTerraform(this._radiusNasIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      radius_nas_ip_override: {
        value: cdktf.stringToHclTerraform(this._radiusNasIpOverride),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      route_offload: {
        value: cdktf.stringToHclTerraform(this._routeOffload),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      route_offload_mclag: {
        value: cdktf.stringToHclTerraform(this._routeOffloadMclag),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scopetype: {
        value: cdktf.stringToHclTerraform(this._scopetype),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      switch_dhcp_opt43_key: {
        value: cdktf.stringToHclTerraform(this._switchDhcpOpt43Key),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      switch_id: {
        value: cdktf.stringToHclTerraform(this._switchId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tdr_supported: {
        value: cdktf.stringToHclTerraform(this._tdrSupported),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tunnel_discovered: {
        value: cdktf.numberToHclTerraform(this._tunnelDiscovered),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      custom_command: {
        value: cdktf.listMapperHcl(objectSwitchcontrollerManagedswitchCustomCommandToHclTerraform, true)(this._customCommand.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ObjectSwitchcontrollerManagedswitchCustomCommandList",
      },
      dhcp_snooping_static_client: {
        value: cdktf.listMapperHcl(objectSwitchcontrollerManagedswitchDhcpSnoopingStaticClientToHclTerraform, true)(this._dhcpSnoopingStaticClient.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ObjectSwitchcontrollerManagedswitchDhcpSnoopingStaticClientList",
      },
      ports: {
        value: cdktf.listMapperHcl(objectSwitchcontrollerManagedswitchPortsToHclTerraform, true)(this._ports.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ObjectSwitchcontrollerManagedswitchPortsList",
      },
      route_offload_router: {
        value: cdktf.listMapperHcl(objectSwitchcontrollerManagedswitchRouteOffloadRouterToHclTerraform, true)(this._routeOffloadRouter.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ObjectSwitchcontrollerManagedswitchRouteOffloadRouterList",
      },
      vlan: {
        value: cdktf.listMapperHcl(objectSwitchcontrollerManagedswitchVlanToHclTerraform, true)(this._vlan.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ObjectSwitchcontrollerManagedswitchVlanList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
