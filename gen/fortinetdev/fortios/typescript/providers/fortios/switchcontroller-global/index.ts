// https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_global
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SwitchcontrollerGlobalConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_global#allow_multiple_interfaces SwitchcontrollerGlobal#allow_multiple_interfaces}
  */
  readonly allowMultipleInterfaces?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_global#bounce_quarantined_link SwitchcontrollerGlobal#bounce_quarantined_link}
  */
  readonly bounceQuarantinedLink?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_global#default_virtual_switch_vlan SwitchcontrollerGlobal#default_virtual_switch_vlan}
  */
  readonly defaultVirtualSwitchVlan?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_global#dhcp_option82_circuit_id SwitchcontrollerGlobal#dhcp_option82_circuit_id}
  */
  readonly dhcpOption82CircuitId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_global#dhcp_option82_format SwitchcontrollerGlobal#dhcp_option82_format}
  */
  readonly dhcpOption82Format?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_global#dhcp_option82_remote_id SwitchcontrollerGlobal#dhcp_option82_remote_id}
  */
  readonly dhcpOption82RemoteId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_global#dhcp_server_access_list SwitchcontrollerGlobal#dhcp_server_access_list}
  */
  readonly dhcpServerAccessList?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_global#dhcp_snoop_client_db_exp SwitchcontrollerGlobal#dhcp_snoop_client_db_exp}
  */
  readonly dhcpSnoopClientDbExp?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_global#dhcp_snoop_client_req SwitchcontrollerGlobal#dhcp_snoop_client_req}
  */
  readonly dhcpSnoopClientReq?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_global#dhcp_snoop_db_per_port_learn_limit SwitchcontrollerGlobal#dhcp_snoop_db_per_port_learn_limit}
  */
  readonly dhcpSnoopDbPerPortLearnLimit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_global#dynamic_sort_subtable SwitchcontrollerGlobal#dynamic_sort_subtable}
  */
  readonly dynamicSortSubtable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_global#fips_enforce SwitchcontrollerGlobal#fips_enforce}
  */
  readonly fipsEnforce?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_global#firewall_auth_user_hold_period SwitchcontrollerGlobal#firewall_auth_user_hold_period}
  */
  readonly firewallAuthUserHoldPeriod?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_global#firmware_provision_on_authorization SwitchcontrollerGlobal#firmware_provision_on_authorization}
  */
  readonly firmwareProvisionOnAuthorization?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_global#get_all_tables SwitchcontrollerGlobal#get_all_tables}
  */
  readonly fetchAllTables?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_global#https_image_push SwitchcontrollerGlobal#https_image_push}
  */
  readonly httpsImagePush?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_global#id SwitchcontrollerGlobal#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_global#log_mac_limit_violations SwitchcontrollerGlobal#log_mac_limit_violations}
  */
  readonly logMacLimitViolations?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_global#mac_aging_interval SwitchcontrollerGlobal#mac_aging_interval}
  */
  readonly macAgingInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_global#mac_event_logging SwitchcontrollerGlobal#mac_event_logging}
  */
  readonly macEventLogging?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_global#mac_retention_period SwitchcontrollerGlobal#mac_retention_period}
  */
  readonly macRetentionPeriod?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_global#mac_violation_timer SwitchcontrollerGlobal#mac_violation_timer}
  */
  readonly macViolationTimer?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_global#quarantine_mode SwitchcontrollerGlobal#quarantine_mode}
  */
  readonly quarantineMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_global#sn_dns_resolution SwitchcontrollerGlobal#sn_dns_resolution}
  */
  readonly snDnsResolution?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_global#switch_on_deauth SwitchcontrollerGlobal#switch_on_deauth}
  */
  readonly switchOnDeauth?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_global#update_user_device SwitchcontrollerGlobal#update_user_device}
  */
  readonly updateUserDevice?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_global#vdomparam SwitchcontrollerGlobal#vdomparam}
  */
  readonly vdomparam?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_global#vlan_all_mode SwitchcontrollerGlobal#vlan_all_mode}
  */
  readonly vlanAllMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_global#vlan_identity SwitchcontrollerGlobal#vlan_identity}
  */
  readonly vlanIdentity?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_global#vlan_optimization SwitchcontrollerGlobal#vlan_optimization}
  */
  readonly vlanOptimization?: string;
  /**
  * custom_command block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_global#custom_command SwitchcontrollerGlobal#custom_command}
  */
  readonly customCommand?: SwitchcontrollerGlobalCustomCommand[] | cdktf.IResolvable;
  /**
  * disable_discovery block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_global#disable_discovery SwitchcontrollerGlobal#disable_discovery}
  */
  readonly disableDiscovery?: SwitchcontrollerGlobalDisableDiscovery[] | cdktf.IResolvable;
}
export interface SwitchcontrollerGlobalCustomCommand {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_global#command_entry SwitchcontrollerGlobal#command_entry}
  */
  readonly commandEntry?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_global#command_name SwitchcontrollerGlobal#command_name}
  */
  readonly commandName?: string;
}

export function switchcontrollerGlobalCustomCommandToTerraform(struct?: SwitchcontrollerGlobalCustomCommand | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    command_entry: cdktf.stringToTerraform(struct!.commandEntry),
    command_name: cdktf.stringToTerraform(struct!.commandName),
  }
}


export function switchcontrollerGlobalCustomCommandToHclTerraform(struct?: SwitchcontrollerGlobalCustomCommand | cdktf.IResolvable): any {
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

export class SwitchcontrollerGlobalCustomCommandOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SwitchcontrollerGlobalCustomCommand | cdktf.IResolvable | undefined {
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

  public set internalValue(value: SwitchcontrollerGlobalCustomCommand | cdktf.IResolvable | undefined) {
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

export class SwitchcontrollerGlobalCustomCommandList extends cdktf.ComplexList {
  public internalValue? : SwitchcontrollerGlobalCustomCommand[] | cdktf.IResolvable

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
  public get(index: number): SwitchcontrollerGlobalCustomCommandOutputReference {
    return new SwitchcontrollerGlobalCustomCommandOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SwitchcontrollerGlobalDisableDiscovery {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_global#name SwitchcontrollerGlobal#name}
  */
  readonly name?: string;
}

export function switchcontrollerGlobalDisableDiscoveryToTerraform(struct?: SwitchcontrollerGlobalDisableDiscovery | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function switchcontrollerGlobalDisableDiscoveryToHclTerraform(struct?: SwitchcontrollerGlobalDisableDiscovery | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SwitchcontrollerGlobalDisableDiscoveryOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SwitchcontrollerGlobalDisableDiscovery | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SwitchcontrollerGlobalDisableDiscovery | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
    }
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
}

export class SwitchcontrollerGlobalDisableDiscoveryList extends cdktf.ComplexList {
  public internalValue? : SwitchcontrollerGlobalDisableDiscovery[] | cdktf.IResolvable

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
  public get(index: number): SwitchcontrollerGlobalDisableDiscoveryOutputReference {
    return new SwitchcontrollerGlobalDisableDiscoveryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_global fortios_switchcontroller_global}
*/
export class SwitchcontrollerGlobal extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortios_switchcontroller_global";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SwitchcontrollerGlobal resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SwitchcontrollerGlobal to import
  * @param importFromId The id of the existing SwitchcontrollerGlobal that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_global#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SwitchcontrollerGlobal to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortios_switchcontroller_global", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_global fortios_switchcontroller_global} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SwitchcontrollerGlobalConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SwitchcontrollerGlobalConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortios_switchcontroller_global',
      terraformGeneratorMetadata: {
        providerName: 'fortios',
        providerVersion: '1.23.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._allowMultipleInterfaces = config.allowMultipleInterfaces;
    this._bounceQuarantinedLink = config.bounceQuarantinedLink;
    this._defaultVirtualSwitchVlan = config.defaultVirtualSwitchVlan;
    this._dhcpOption82CircuitId = config.dhcpOption82CircuitId;
    this._dhcpOption82Format = config.dhcpOption82Format;
    this._dhcpOption82RemoteId = config.dhcpOption82RemoteId;
    this._dhcpServerAccessList = config.dhcpServerAccessList;
    this._dhcpSnoopClientDbExp = config.dhcpSnoopClientDbExp;
    this._dhcpSnoopClientReq = config.dhcpSnoopClientReq;
    this._dhcpSnoopDbPerPortLearnLimit = config.dhcpSnoopDbPerPortLearnLimit;
    this._dynamicSortSubtable = config.dynamicSortSubtable;
    this._fipsEnforce = config.fipsEnforce;
    this._firewallAuthUserHoldPeriod = config.firewallAuthUserHoldPeriod;
    this._firmwareProvisionOnAuthorization = config.firmwareProvisionOnAuthorization;
    this._getAllTables = config.fetchAllTables;
    this._httpsImagePush = config.httpsImagePush;
    this._id = config.id;
    this._logMacLimitViolations = config.logMacLimitViolations;
    this._macAgingInterval = config.macAgingInterval;
    this._macEventLogging = config.macEventLogging;
    this._macRetentionPeriod = config.macRetentionPeriod;
    this._macViolationTimer = config.macViolationTimer;
    this._quarantineMode = config.quarantineMode;
    this._snDnsResolution = config.snDnsResolution;
    this._switchOnDeauth = config.switchOnDeauth;
    this._updateUserDevice = config.updateUserDevice;
    this._vdomparam = config.vdomparam;
    this._vlanAllMode = config.vlanAllMode;
    this._vlanIdentity = config.vlanIdentity;
    this._vlanOptimization = config.vlanOptimization;
    this._customCommand.internalValue = config.customCommand;
    this._disableDiscovery.internalValue = config.disableDiscovery;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allow_multiple_interfaces - computed: false, optional: true, required: false
  private _allowMultipleInterfaces?: string; 
  public get allowMultipleInterfaces() {
    return this.getStringAttribute('allow_multiple_interfaces');
  }
  public set allowMultipleInterfaces(value: string) {
    this._allowMultipleInterfaces = value;
  }
  public resetAllowMultipleInterfaces() {
    this._allowMultipleInterfaces = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowMultipleInterfacesInput() {
    return this._allowMultipleInterfaces;
  }

  // bounce_quarantined_link - computed: true, optional: true, required: false
  private _bounceQuarantinedLink?: string; 
  public get bounceQuarantinedLink() {
    return this.getStringAttribute('bounce_quarantined_link');
  }
  public set bounceQuarantinedLink(value: string) {
    this._bounceQuarantinedLink = value;
  }
  public resetBounceQuarantinedLink() {
    this._bounceQuarantinedLink = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bounceQuarantinedLinkInput() {
    return this._bounceQuarantinedLink;
  }

  // default_virtual_switch_vlan - computed: false, optional: true, required: false
  private _defaultVirtualSwitchVlan?: string; 
  public get defaultVirtualSwitchVlan() {
    return this.getStringAttribute('default_virtual_switch_vlan');
  }
  public set defaultVirtualSwitchVlan(value: string) {
    this._defaultVirtualSwitchVlan = value;
  }
  public resetDefaultVirtualSwitchVlan() {
    this._defaultVirtualSwitchVlan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultVirtualSwitchVlanInput() {
    return this._defaultVirtualSwitchVlan;
  }

  // dhcp_option82_circuit_id - computed: true, optional: true, required: false
  private _dhcpOption82CircuitId?: string; 
  public get dhcpOption82CircuitId() {
    return this.getStringAttribute('dhcp_option82_circuit_id');
  }
  public set dhcpOption82CircuitId(value: string) {
    this._dhcpOption82CircuitId = value;
  }
  public resetDhcpOption82CircuitId() {
    this._dhcpOption82CircuitId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpOption82CircuitIdInput() {
    return this._dhcpOption82CircuitId;
  }

  // dhcp_option82_format - computed: true, optional: true, required: false
  private _dhcpOption82Format?: string; 
  public get dhcpOption82Format() {
    return this.getStringAttribute('dhcp_option82_format');
  }
  public set dhcpOption82Format(value: string) {
    this._dhcpOption82Format = value;
  }
  public resetDhcpOption82Format() {
    this._dhcpOption82Format = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpOption82FormatInput() {
    return this._dhcpOption82Format;
  }

  // dhcp_option82_remote_id - computed: true, optional: true, required: false
  private _dhcpOption82RemoteId?: string; 
  public get dhcpOption82RemoteId() {
    return this.getStringAttribute('dhcp_option82_remote_id');
  }
  public set dhcpOption82RemoteId(value: string) {
    this._dhcpOption82RemoteId = value;
  }
  public resetDhcpOption82RemoteId() {
    this._dhcpOption82RemoteId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpOption82RemoteIdInput() {
    return this._dhcpOption82RemoteId;
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

  // dhcp_snoop_client_db_exp - computed: true, optional: true, required: false
  private _dhcpSnoopClientDbExp?: number; 
  public get dhcpSnoopClientDbExp() {
    return this.getNumberAttribute('dhcp_snoop_client_db_exp');
  }
  public set dhcpSnoopClientDbExp(value: number) {
    this._dhcpSnoopClientDbExp = value;
  }
  public resetDhcpSnoopClientDbExp() {
    this._dhcpSnoopClientDbExp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpSnoopClientDbExpInput() {
    return this._dhcpSnoopClientDbExp;
  }

  // dhcp_snoop_client_req - computed: true, optional: true, required: false
  private _dhcpSnoopClientReq?: string; 
  public get dhcpSnoopClientReq() {
    return this.getStringAttribute('dhcp_snoop_client_req');
  }
  public set dhcpSnoopClientReq(value: string) {
    this._dhcpSnoopClientReq = value;
  }
  public resetDhcpSnoopClientReq() {
    this._dhcpSnoopClientReq = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpSnoopClientReqInput() {
    return this._dhcpSnoopClientReq;
  }

  // dhcp_snoop_db_per_port_learn_limit - computed: true, optional: true, required: false
  private _dhcpSnoopDbPerPortLearnLimit?: number; 
  public get dhcpSnoopDbPerPortLearnLimit() {
    return this.getNumberAttribute('dhcp_snoop_db_per_port_learn_limit');
  }
  public set dhcpSnoopDbPerPortLearnLimit(value: number) {
    this._dhcpSnoopDbPerPortLearnLimit = value;
  }
  public resetDhcpSnoopDbPerPortLearnLimit() {
    this._dhcpSnoopDbPerPortLearnLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpSnoopDbPerPortLearnLimitInput() {
    return this._dhcpSnoopDbPerPortLearnLimit;
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

  // fips_enforce - computed: true, optional: true, required: false
  private _fipsEnforce?: string; 
  public get fipsEnforce() {
    return this.getStringAttribute('fips_enforce');
  }
  public set fipsEnforce(value: string) {
    this._fipsEnforce = value;
  }
  public resetFipsEnforce() {
    this._fipsEnforce = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fipsEnforceInput() {
    return this._fipsEnforce;
  }

  // firewall_auth_user_hold_period - computed: true, optional: true, required: false
  private _firewallAuthUserHoldPeriod?: number; 
  public get firewallAuthUserHoldPeriod() {
    return this.getNumberAttribute('firewall_auth_user_hold_period');
  }
  public set firewallAuthUserHoldPeriod(value: number) {
    this._firewallAuthUserHoldPeriod = value;
  }
  public resetFirewallAuthUserHoldPeriod() {
    this._firewallAuthUserHoldPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get firewallAuthUserHoldPeriodInput() {
    return this._firewallAuthUserHoldPeriod;
  }

  // firmware_provision_on_authorization - computed: true, optional: true, required: false
  private _firmwareProvisionOnAuthorization?: string; 
  public get firmwareProvisionOnAuthorization() {
    return this.getStringAttribute('firmware_provision_on_authorization');
  }
  public set firmwareProvisionOnAuthorization(value: string) {
    this._firmwareProvisionOnAuthorization = value;
  }
  public resetFirmwareProvisionOnAuthorization() {
    this._firmwareProvisionOnAuthorization = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get firmwareProvisionOnAuthorizationInput() {
    return this._firmwareProvisionOnAuthorization;
  }

  // get_all_tables - computed: false, optional: true, required: false
  private _getAllTables?: string; 
  public get fetchAllTables() {
    return this.getStringAttribute('get_all_tables');
  }
  public set fetchAllTables(value: string) {
    this._getAllTables = value;
  }
  public resetFetchAllTables() {
    this._getAllTables = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fetchAllTablesInput() {
    return this._getAllTables;
  }

  // https_image_push - computed: true, optional: true, required: false
  private _httpsImagePush?: string; 
  public get httpsImagePush() {
    return this.getStringAttribute('https_image_push');
  }
  public set httpsImagePush(value: string) {
    this._httpsImagePush = value;
  }
  public resetHttpsImagePush() {
    this._httpsImagePush = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpsImagePushInput() {
    return this._httpsImagePush;
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

  // log_mac_limit_violations - computed: true, optional: true, required: false
  private _logMacLimitViolations?: string; 
  public get logMacLimitViolations() {
    return this.getStringAttribute('log_mac_limit_violations');
  }
  public set logMacLimitViolations(value: string) {
    this._logMacLimitViolations = value;
  }
  public resetLogMacLimitViolations() {
    this._logMacLimitViolations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logMacLimitViolationsInput() {
    return this._logMacLimitViolations;
  }

  // mac_aging_interval - computed: true, optional: true, required: false
  private _macAgingInterval?: number; 
  public get macAgingInterval() {
    return this.getNumberAttribute('mac_aging_interval');
  }
  public set macAgingInterval(value: number) {
    this._macAgingInterval = value;
  }
  public resetMacAgingInterval() {
    this._macAgingInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macAgingIntervalInput() {
    return this._macAgingInterval;
  }

  // mac_event_logging - computed: true, optional: true, required: false
  private _macEventLogging?: string; 
  public get macEventLogging() {
    return this.getStringAttribute('mac_event_logging');
  }
  public set macEventLogging(value: string) {
    this._macEventLogging = value;
  }
  public resetMacEventLogging() {
    this._macEventLogging = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macEventLoggingInput() {
    return this._macEventLogging;
  }

  // mac_retention_period - computed: true, optional: true, required: false
  private _macRetentionPeriod?: number; 
  public get macRetentionPeriod() {
    return this.getNumberAttribute('mac_retention_period');
  }
  public set macRetentionPeriod(value: number) {
    this._macRetentionPeriod = value;
  }
  public resetMacRetentionPeriod() {
    this._macRetentionPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macRetentionPeriodInput() {
    return this._macRetentionPeriod;
  }

  // mac_violation_timer - computed: false, optional: true, required: false
  private _macViolationTimer?: number; 
  public get macViolationTimer() {
    return this.getNumberAttribute('mac_violation_timer');
  }
  public set macViolationTimer(value: number) {
    this._macViolationTimer = value;
  }
  public resetMacViolationTimer() {
    this._macViolationTimer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macViolationTimerInput() {
    return this._macViolationTimer;
  }

  // quarantine_mode - computed: true, optional: true, required: false
  private _quarantineMode?: string; 
  public get quarantineMode() {
    return this.getStringAttribute('quarantine_mode');
  }
  public set quarantineMode(value: string) {
    this._quarantineMode = value;
  }
  public resetQuarantineMode() {
    this._quarantineMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get quarantineModeInput() {
    return this._quarantineMode;
  }

  // sn_dns_resolution - computed: true, optional: true, required: false
  private _snDnsResolution?: string; 
  public get snDnsResolution() {
    return this.getStringAttribute('sn_dns_resolution');
  }
  public set snDnsResolution(value: string) {
    this._snDnsResolution = value;
  }
  public resetSnDnsResolution() {
    this._snDnsResolution = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snDnsResolutionInput() {
    return this._snDnsResolution;
  }

  // switch_on_deauth - computed: true, optional: true, required: false
  private _switchOnDeauth?: string; 
  public get switchOnDeauth() {
    return this.getStringAttribute('switch_on_deauth');
  }
  public set switchOnDeauth(value: string) {
    this._switchOnDeauth = value;
  }
  public resetSwitchOnDeauth() {
    this._switchOnDeauth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get switchOnDeauthInput() {
    return this._switchOnDeauth;
  }

  // update_user_device - computed: true, optional: true, required: false
  private _updateUserDevice?: string; 
  public get updateUserDevice() {
    return this.getStringAttribute('update_user_device');
  }
  public set updateUserDevice(value: string) {
    this._updateUserDevice = value;
  }
  public resetUpdateUserDevice() {
    this._updateUserDevice = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateUserDeviceInput() {
    return this._updateUserDevice;
  }

  // vdomparam - computed: true, optional: true, required: false
  private _vdomparam?: string; 
  public get vdomparam() {
    return this.getStringAttribute('vdomparam');
  }
  public set vdomparam(value: string) {
    this._vdomparam = value;
  }
  public resetVdomparam() {
    this._vdomparam = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vdomparamInput() {
    return this._vdomparam;
  }

  // vlan_all_mode - computed: true, optional: true, required: false
  private _vlanAllMode?: string; 
  public get vlanAllMode() {
    return this.getStringAttribute('vlan_all_mode');
  }
  public set vlanAllMode(value: string) {
    this._vlanAllMode = value;
  }
  public resetVlanAllMode() {
    this._vlanAllMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanAllModeInput() {
    return this._vlanAllMode;
  }

  // vlan_identity - computed: true, optional: true, required: false
  private _vlanIdentity?: string; 
  public get vlanIdentity() {
    return this.getStringAttribute('vlan_identity');
  }
  public set vlanIdentity(value: string) {
    this._vlanIdentity = value;
  }
  public resetVlanIdentity() {
    this._vlanIdentity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanIdentityInput() {
    return this._vlanIdentity;
  }

  // vlan_optimization - computed: true, optional: true, required: false
  private _vlanOptimization?: string; 
  public get vlanOptimization() {
    return this.getStringAttribute('vlan_optimization');
  }
  public set vlanOptimization(value: string) {
    this._vlanOptimization = value;
  }
  public resetVlanOptimization() {
    this._vlanOptimization = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanOptimizationInput() {
    return this._vlanOptimization;
  }

  // custom_command - computed: false, optional: true, required: false
  private _customCommand = new SwitchcontrollerGlobalCustomCommandList(this, "custom_command", false);
  public get customCommand() {
    return this._customCommand;
  }
  public putCustomCommand(value: SwitchcontrollerGlobalCustomCommand[] | cdktf.IResolvable) {
    this._customCommand.internalValue = value;
  }
  public resetCustomCommand() {
    this._customCommand.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customCommandInput() {
    return this._customCommand.internalValue;
  }

  // disable_discovery - computed: false, optional: true, required: false
  private _disableDiscovery = new SwitchcontrollerGlobalDisableDiscoveryList(this, "disable_discovery", true);
  public get disableDiscovery() {
    return this._disableDiscovery;
  }
  public putDisableDiscovery(value: SwitchcontrollerGlobalDisableDiscovery[] | cdktf.IResolvable) {
    this._disableDiscovery.internalValue = value;
  }
  public resetDisableDiscovery() {
    this._disableDiscovery.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableDiscoveryInput() {
    return this._disableDiscovery.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      allow_multiple_interfaces: cdktf.stringToTerraform(this._allowMultipleInterfaces),
      bounce_quarantined_link: cdktf.stringToTerraform(this._bounceQuarantinedLink),
      default_virtual_switch_vlan: cdktf.stringToTerraform(this._defaultVirtualSwitchVlan),
      dhcp_option82_circuit_id: cdktf.stringToTerraform(this._dhcpOption82CircuitId),
      dhcp_option82_format: cdktf.stringToTerraform(this._dhcpOption82Format),
      dhcp_option82_remote_id: cdktf.stringToTerraform(this._dhcpOption82RemoteId),
      dhcp_server_access_list: cdktf.stringToTerraform(this._dhcpServerAccessList),
      dhcp_snoop_client_db_exp: cdktf.numberToTerraform(this._dhcpSnoopClientDbExp),
      dhcp_snoop_client_req: cdktf.stringToTerraform(this._dhcpSnoopClientReq),
      dhcp_snoop_db_per_port_learn_limit: cdktf.numberToTerraform(this._dhcpSnoopDbPerPortLearnLimit),
      dynamic_sort_subtable: cdktf.stringToTerraform(this._dynamicSortSubtable),
      fips_enforce: cdktf.stringToTerraform(this._fipsEnforce),
      firewall_auth_user_hold_period: cdktf.numberToTerraform(this._firewallAuthUserHoldPeriod),
      firmware_provision_on_authorization: cdktf.stringToTerraform(this._firmwareProvisionOnAuthorization),
      get_all_tables: cdktf.stringToTerraform(this._getAllTables),
      https_image_push: cdktf.stringToTerraform(this._httpsImagePush),
      id: cdktf.stringToTerraform(this._id),
      log_mac_limit_violations: cdktf.stringToTerraform(this._logMacLimitViolations),
      mac_aging_interval: cdktf.numberToTerraform(this._macAgingInterval),
      mac_event_logging: cdktf.stringToTerraform(this._macEventLogging),
      mac_retention_period: cdktf.numberToTerraform(this._macRetentionPeriod),
      mac_violation_timer: cdktf.numberToTerraform(this._macViolationTimer),
      quarantine_mode: cdktf.stringToTerraform(this._quarantineMode),
      sn_dns_resolution: cdktf.stringToTerraform(this._snDnsResolution),
      switch_on_deauth: cdktf.stringToTerraform(this._switchOnDeauth),
      update_user_device: cdktf.stringToTerraform(this._updateUserDevice),
      vdomparam: cdktf.stringToTerraform(this._vdomparam),
      vlan_all_mode: cdktf.stringToTerraform(this._vlanAllMode),
      vlan_identity: cdktf.stringToTerraform(this._vlanIdentity),
      vlan_optimization: cdktf.stringToTerraform(this._vlanOptimization),
      custom_command: cdktf.listMapper(switchcontrollerGlobalCustomCommandToTerraform, true)(this._customCommand.internalValue),
      disable_discovery: cdktf.listMapper(switchcontrollerGlobalDisableDiscoveryToTerraform, true)(this._disableDiscovery.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allow_multiple_interfaces: {
        value: cdktf.stringToHclTerraform(this._allowMultipleInterfaces),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bounce_quarantined_link: {
        value: cdktf.stringToHclTerraform(this._bounceQuarantinedLink),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default_virtual_switch_vlan: {
        value: cdktf.stringToHclTerraform(this._defaultVirtualSwitchVlan),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dhcp_option82_circuit_id: {
        value: cdktf.stringToHclTerraform(this._dhcpOption82CircuitId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dhcp_option82_format: {
        value: cdktf.stringToHclTerraform(this._dhcpOption82Format),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dhcp_option82_remote_id: {
        value: cdktf.stringToHclTerraform(this._dhcpOption82RemoteId),
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
      dhcp_snoop_client_db_exp: {
        value: cdktf.numberToHclTerraform(this._dhcpSnoopClientDbExp),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      dhcp_snoop_client_req: {
        value: cdktf.stringToHclTerraform(this._dhcpSnoopClientReq),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dhcp_snoop_db_per_port_learn_limit: {
        value: cdktf.numberToHclTerraform(this._dhcpSnoopDbPerPortLearnLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      dynamic_sort_subtable: {
        value: cdktf.stringToHclTerraform(this._dynamicSortSubtable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fips_enforce: {
        value: cdktf.stringToHclTerraform(this._fipsEnforce),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      firewall_auth_user_hold_period: {
        value: cdktf.numberToHclTerraform(this._firewallAuthUserHoldPeriod),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      firmware_provision_on_authorization: {
        value: cdktf.stringToHclTerraform(this._firmwareProvisionOnAuthorization),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      get_all_tables: {
        value: cdktf.stringToHclTerraform(this._getAllTables),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      https_image_push: {
        value: cdktf.stringToHclTerraform(this._httpsImagePush),
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
      log_mac_limit_violations: {
        value: cdktf.stringToHclTerraform(this._logMacLimitViolations),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mac_aging_interval: {
        value: cdktf.numberToHclTerraform(this._macAgingInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      mac_event_logging: {
        value: cdktf.stringToHclTerraform(this._macEventLogging),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mac_retention_period: {
        value: cdktf.numberToHclTerraform(this._macRetentionPeriod),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      mac_violation_timer: {
        value: cdktf.numberToHclTerraform(this._macViolationTimer),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      quarantine_mode: {
        value: cdktf.stringToHclTerraform(this._quarantineMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sn_dns_resolution: {
        value: cdktf.stringToHclTerraform(this._snDnsResolution),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      switch_on_deauth: {
        value: cdktf.stringToHclTerraform(this._switchOnDeauth),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      update_user_device: {
        value: cdktf.stringToHclTerraform(this._updateUserDevice),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vdomparam: {
        value: cdktf.stringToHclTerraform(this._vdomparam),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vlan_all_mode: {
        value: cdktf.stringToHclTerraform(this._vlanAllMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vlan_identity: {
        value: cdktf.stringToHclTerraform(this._vlanIdentity),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vlan_optimization: {
        value: cdktf.stringToHclTerraform(this._vlanOptimization),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_command: {
        value: cdktf.listMapperHcl(switchcontrollerGlobalCustomCommandToHclTerraform, true)(this._customCommand.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SwitchcontrollerGlobalCustomCommandList",
      },
      disable_discovery: {
        value: cdktf.listMapperHcl(switchcontrollerGlobalDisableDiscoveryToHclTerraform, true)(this._disableDiscovery.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "SwitchcontrollerGlobalDisableDiscoveryList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
