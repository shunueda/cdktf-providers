// https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.2/docs/resources/device
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DeviceConfig extends cdktf.TerraformMetaArguments {
  /**
  * CLI transport
  *   - Choices: `telnet`, `ssh`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.2/docs/resources/device#cli_transport Device#cli_transport}
  */
  readonly cliTransport?: string;
  /**
  * Compute device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.2/docs/resources/device#compute_device Device#compute_device}
  */
  readonly computeDevice?: boolean | cdktf.IResolvable;
  /**
  * CLI enable password of the device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.2/docs/resources/device#enable_password Device#enable_password}
  */
  readonly enablePassword?: string;
  /**
  * This field holds that info as whether to add device with canned data or not.
  *   - Choices: `DISCOVER_WITH_CANNED_DATA`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.2/docs/resources/device#extended_discovery_info Device#extended_discovery_info}
  */
  readonly extendedDiscoveryInfo?: string;
  /**
  * HTTP password of the device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.2/docs/resources/device#http_password Device#http_password}
  */
  readonly httpPassword?: string;
  /**
  * HTTP port of the device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.2/docs/resources/device#http_port Device#http_port}
  */
  readonly httpPort?: string;
  /**
  * Enable HTTPS
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.2/docs/resources/device#http_secure Device#http_secure}
  */
  readonly httpSecure?: boolean | cdktf.IResolvable;
  /**
  * HTTP username of the device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.2/docs/resources/device#http_user_name Device#http_user_name}
  */
  readonly httpUserName?: string;
  /**
  * IP address of the device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.2/docs/resources/device#ip_address Device#ip_address}
  */
  readonly ipAddress: string;
  /**
  * Selected Meraki organizations for which the devices needs to be imported
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.2/docs/resources/device#meraki_org_ids Device#meraki_org_ids}
  */
  readonly merakiOrgIds?: string[];
  /**
  * NETCONF port of the device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.2/docs/resources/device#netconf_port Device#netconf_port}
  */
  readonly netconfPort?: string;
  /**
  * CLI password of the device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.2/docs/resources/device#password Device#password}
  */
  readonly password?: string;
  /**
  * Serial number of the device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.2/docs/resources/device#serial_number Device#serial_number}
  */
  readonly serialNumber?: string;
  /**
  * SNMPv3 authentication passphrase of the device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.2/docs/resources/device#snmp_auth_passphrase Device#snmp_auth_passphrase}
  */
  readonly snmpAuthPassphrase?: string;
  /**
  * SNMPv3 authentication protocol of the device
  *   - Choices: `sha`, `md5`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.2/docs/resources/device#snmp_auth_protocol Device#snmp_auth_protocol}
  */
  readonly snmpAuthProtocol?: string;
  /**
  * SNMPv3 mode of the device
  *   - Choices: `noAuthnoPriv`, `authNoPriv`, `authPriv`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.2/docs/resources/device#snmp_mode Device#snmp_mode}
  */
  readonly snmpMode?: string;
  /**
  * SNMPv3 privacy passphrase of the device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.2/docs/resources/device#snmp_priv_passphrase Device#snmp_priv_passphrase}
  */
  readonly snmpPrivPassphrase?: string;
  /**
  * SNMPv3 privacy protocol of the device
  *   - Choices: `AES128`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.2/docs/resources/device#snmp_priv_protocol Device#snmp_priv_protocol}
  */
  readonly snmpPrivProtocol?: string;
  /**
  * SNMP retry count
  *   - Range: `0`-`3`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.2/docs/resources/device#snmp_retry Device#snmp_retry}
  */
  readonly snmpRetry?: number;
  /**
  * SNMPv2 read-only community of the device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.2/docs/resources/device#snmp_ro_community Device#snmp_ro_community}
  */
  readonly snmpRoCommunity?: string;
  /**
  * SNMPv2 read-write community of the device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.2/docs/resources/device#snmp_rw_community Device#snmp_rw_community}
  */
  readonly snmpRwCommunity?: string;
  /**
  * SNMP timeout in seconds
  *   - Range: `0`-`300`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.2/docs/resources/device#snmp_timeout Device#snmp_timeout}
  */
  readonly snmpTimeout?: number;
  /**
  * SNMPv3 username of the device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.2/docs/resources/device#snmp_user_name Device#snmp_user_name}
  */
  readonly snmpUserName?: string;
  /**
  * SNMP version of the device
  *   - Choices: `v2`, `v3`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.2/docs/resources/device#snmp_version Device#snmp_version}
  */
  readonly snmpVersion?: string;
  /**
  * Device type
  *   - Choices: `COMPUTE_DEVICE`, `MERAKI_DASHBOARD`, `NETWORK_DEVICE`, `THIRD PARTY DEVICE`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.2/docs/resources/device#type Device#type}
  */
  readonly type?: string;
  /**
  * IP address of the device to be mapped to New IP address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.2/docs/resources/device#update_mgmt_ip_addresses Device#update_mgmt_ip_addresses}
  */
  readonly updateMgmtIpAddresses?: DeviceUpdateMgmtIpAddresses[] | cdktf.IResolvable;
  /**
  * CLI username of the device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.2/docs/resources/device#user_name Device#user_name}
  */
  readonly userName?: string;
}
export interface DeviceUpdateMgmtIpAddresses {
  /**
  * Existing IP address of the device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.2/docs/resources/device#exist_mgmt_ip_address Device#exist_mgmt_ip_address}
  */
  readonly existMgmtIpAddress?: string;
  /**
  * New IP address of the device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.2/docs/resources/device#new_mgmt_ip_address Device#new_mgmt_ip_address}
  */
  readonly newMgmtIpAddress?: string;
}

export function deviceUpdateMgmtIpAddressesToTerraform(struct?: DeviceUpdateMgmtIpAddresses | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exist_mgmt_ip_address: cdktf.stringToTerraform(struct!.existMgmtIpAddress),
    new_mgmt_ip_address: cdktf.stringToTerraform(struct!.newMgmtIpAddress),
  }
}


export function deviceUpdateMgmtIpAddressesToHclTerraform(struct?: DeviceUpdateMgmtIpAddresses | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exist_mgmt_ip_address: {
      value: cdktf.stringToHclTerraform(struct!.existMgmtIpAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    new_mgmt_ip_address: {
      value: cdktf.stringToHclTerraform(struct!.newMgmtIpAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DeviceUpdateMgmtIpAddressesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DeviceUpdateMgmtIpAddresses | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._existMgmtIpAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.existMgmtIpAddress = this._existMgmtIpAddress;
    }
    if (this._newMgmtIpAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.newMgmtIpAddress = this._newMgmtIpAddress;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DeviceUpdateMgmtIpAddresses | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._existMgmtIpAddress = undefined;
      this._newMgmtIpAddress = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._existMgmtIpAddress = value.existMgmtIpAddress;
      this._newMgmtIpAddress = value.newMgmtIpAddress;
    }
  }

  // exist_mgmt_ip_address - computed: false, optional: true, required: false
  private _existMgmtIpAddress?: string; 
  public get existMgmtIpAddress() {
    return this.getStringAttribute('exist_mgmt_ip_address');
  }
  public set existMgmtIpAddress(value: string) {
    this._existMgmtIpAddress = value;
  }
  public resetExistMgmtIpAddress() {
    this._existMgmtIpAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get existMgmtIpAddressInput() {
    return this._existMgmtIpAddress;
  }

  // new_mgmt_ip_address - computed: false, optional: true, required: false
  private _newMgmtIpAddress?: string; 
  public get newMgmtIpAddress() {
    return this.getStringAttribute('new_mgmt_ip_address');
  }
  public set newMgmtIpAddress(value: string) {
    this._newMgmtIpAddress = value;
  }
  public resetNewMgmtIpAddress() {
    this._newMgmtIpAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get newMgmtIpAddressInput() {
    return this._newMgmtIpAddress;
  }
}

export class DeviceUpdateMgmtIpAddressesList extends cdktf.ComplexList {
  public internalValue? : DeviceUpdateMgmtIpAddresses[] | cdktf.IResolvable

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
  public get(index: number): DeviceUpdateMgmtIpAddressesOutputReference {
    return new DeviceUpdateMgmtIpAddressesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.2/docs/resources/device catalystcenter_device}
*/
export class Device extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "catalystcenter_device";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Device resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Device to import
  * @param importFromId The id of the existing Device that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.2/docs/resources/device#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Device to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "catalystcenter_device", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.2/docs/resources/device catalystcenter_device} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DeviceConfig
  */
  public constructor(scope: Construct, id: string, config: DeviceConfig) {
    super(scope, id, {
      terraformResourceType: 'catalystcenter_device',
      terraformGeneratorMetadata: {
        providerName: 'catalystcenter',
        providerVersion: '0.4.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._cliTransport = config.cliTransport;
    this._computeDevice = config.computeDevice;
    this._enablePassword = config.enablePassword;
    this._extendedDiscoveryInfo = config.extendedDiscoveryInfo;
    this._httpPassword = config.httpPassword;
    this._httpPort = config.httpPort;
    this._httpSecure = config.httpSecure;
    this._httpUserName = config.httpUserName;
    this._ipAddress = config.ipAddress;
    this._merakiOrgIds = config.merakiOrgIds;
    this._netconfPort = config.netconfPort;
    this._password = config.password;
    this._serialNumber = config.serialNumber;
    this._snmpAuthPassphrase = config.snmpAuthPassphrase;
    this._snmpAuthProtocol = config.snmpAuthProtocol;
    this._snmpMode = config.snmpMode;
    this._snmpPrivPassphrase = config.snmpPrivPassphrase;
    this._snmpPrivProtocol = config.snmpPrivProtocol;
    this._snmpRetry = config.snmpRetry;
    this._snmpRoCommunity = config.snmpRoCommunity;
    this._snmpRwCommunity = config.snmpRwCommunity;
    this._snmpTimeout = config.snmpTimeout;
    this._snmpUserName = config.snmpUserName;
    this._snmpVersion = config.snmpVersion;
    this._type = config.type;
    this._updateMgmtIpAddresses.internalValue = config.updateMgmtIpAddresses;
    this._userName = config.userName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cli_transport - computed: false, optional: true, required: false
  private _cliTransport?: string; 
  public get cliTransport() {
    return this.getStringAttribute('cli_transport');
  }
  public set cliTransport(value: string) {
    this._cliTransport = value;
  }
  public resetCliTransport() {
    this._cliTransport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cliTransportInput() {
    return this._cliTransport;
  }

  // compute_device - computed: false, optional: true, required: false
  private _computeDevice?: boolean | cdktf.IResolvable; 
  public get computeDevice() {
    return this.getBooleanAttribute('compute_device');
  }
  public set computeDevice(value: boolean | cdktf.IResolvable) {
    this._computeDevice = value;
  }
  public resetComputeDevice() {
    this._computeDevice = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get computeDeviceInput() {
    return this._computeDevice;
  }

  // enable_password - computed: false, optional: true, required: false
  private _enablePassword?: string; 
  public get enablePassword() {
    return this.getStringAttribute('enable_password');
  }
  public set enablePassword(value: string) {
    this._enablePassword = value;
  }
  public resetEnablePassword() {
    this._enablePassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enablePasswordInput() {
    return this._enablePassword;
  }

  // extended_discovery_info - computed: false, optional: true, required: false
  private _extendedDiscoveryInfo?: string; 
  public get extendedDiscoveryInfo() {
    return this.getStringAttribute('extended_discovery_info');
  }
  public set extendedDiscoveryInfo(value: string) {
    this._extendedDiscoveryInfo = value;
  }
  public resetExtendedDiscoveryInfo() {
    this._extendedDiscoveryInfo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extendedDiscoveryInfoInput() {
    return this._extendedDiscoveryInfo;
  }

  // http_password - computed: false, optional: true, required: false
  private _httpPassword?: string; 
  public get httpPassword() {
    return this.getStringAttribute('http_password');
  }
  public set httpPassword(value: string) {
    this._httpPassword = value;
  }
  public resetHttpPassword() {
    this._httpPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpPasswordInput() {
    return this._httpPassword;
  }

  // http_port - computed: false, optional: true, required: false
  private _httpPort?: string; 
  public get httpPort() {
    return this.getStringAttribute('http_port');
  }
  public set httpPort(value: string) {
    this._httpPort = value;
  }
  public resetHttpPort() {
    this._httpPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpPortInput() {
    return this._httpPort;
  }

  // http_secure - computed: false, optional: true, required: false
  private _httpSecure?: boolean | cdktf.IResolvable; 
  public get httpSecure() {
    return this.getBooleanAttribute('http_secure');
  }
  public set httpSecure(value: boolean | cdktf.IResolvable) {
    this._httpSecure = value;
  }
  public resetHttpSecure() {
    this._httpSecure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpSecureInput() {
    return this._httpSecure;
  }

  // http_user_name - computed: false, optional: true, required: false
  private _httpUserName?: string; 
  public get httpUserName() {
    return this.getStringAttribute('http_user_name');
  }
  public set httpUserName(value: string) {
    this._httpUserName = value;
  }
  public resetHttpUserName() {
    this._httpUserName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpUserNameInput() {
    return this._httpUserName;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ip_address - computed: false, optional: false, required: true
  private _ipAddress?: string; 
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }
  public set ipAddress(value: string) {
    this._ipAddress = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressInput() {
    return this._ipAddress;
  }

  // meraki_org_ids - computed: false, optional: true, required: false
  private _merakiOrgIds?: string[]; 
  public get merakiOrgIds() {
    return cdktf.Fn.tolist(this.getListAttribute('meraki_org_ids'));
  }
  public set merakiOrgIds(value: string[]) {
    this._merakiOrgIds = value;
  }
  public resetMerakiOrgIds() {
    this._merakiOrgIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get merakiOrgIdsInput() {
    return this._merakiOrgIds;
  }

  // netconf_port - computed: false, optional: true, required: false
  private _netconfPort?: string; 
  public get netconfPort() {
    return this.getStringAttribute('netconf_port');
  }
  public set netconfPort(value: string) {
    this._netconfPort = value;
  }
  public resetNetconfPort() {
    this._netconfPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netconfPortInput() {
    return this._netconfPort;
  }

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // serial_number - computed: false, optional: true, required: false
  private _serialNumber?: string; 
  public get serialNumber() {
    return this.getStringAttribute('serial_number');
  }
  public set serialNumber(value: string) {
    this._serialNumber = value;
  }
  public resetSerialNumber() {
    this._serialNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serialNumberInput() {
    return this._serialNumber;
  }

  // snmp_auth_passphrase - computed: false, optional: true, required: false
  private _snmpAuthPassphrase?: string; 
  public get snmpAuthPassphrase() {
    return this.getStringAttribute('snmp_auth_passphrase');
  }
  public set snmpAuthPassphrase(value: string) {
    this._snmpAuthPassphrase = value;
  }
  public resetSnmpAuthPassphrase() {
    this._snmpAuthPassphrase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snmpAuthPassphraseInput() {
    return this._snmpAuthPassphrase;
  }

  // snmp_auth_protocol - computed: false, optional: true, required: false
  private _snmpAuthProtocol?: string; 
  public get snmpAuthProtocol() {
    return this.getStringAttribute('snmp_auth_protocol');
  }
  public set snmpAuthProtocol(value: string) {
    this._snmpAuthProtocol = value;
  }
  public resetSnmpAuthProtocol() {
    this._snmpAuthProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snmpAuthProtocolInput() {
    return this._snmpAuthProtocol;
  }

  // snmp_mode - computed: false, optional: true, required: false
  private _snmpMode?: string; 
  public get snmpMode() {
    return this.getStringAttribute('snmp_mode');
  }
  public set snmpMode(value: string) {
    this._snmpMode = value;
  }
  public resetSnmpMode() {
    this._snmpMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snmpModeInput() {
    return this._snmpMode;
  }

  // snmp_priv_passphrase - computed: false, optional: true, required: false
  private _snmpPrivPassphrase?: string; 
  public get snmpPrivPassphrase() {
    return this.getStringAttribute('snmp_priv_passphrase');
  }
  public set snmpPrivPassphrase(value: string) {
    this._snmpPrivPassphrase = value;
  }
  public resetSnmpPrivPassphrase() {
    this._snmpPrivPassphrase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snmpPrivPassphraseInput() {
    return this._snmpPrivPassphrase;
  }

  // snmp_priv_protocol - computed: false, optional: true, required: false
  private _snmpPrivProtocol?: string; 
  public get snmpPrivProtocol() {
    return this.getStringAttribute('snmp_priv_protocol');
  }
  public set snmpPrivProtocol(value: string) {
    this._snmpPrivProtocol = value;
  }
  public resetSnmpPrivProtocol() {
    this._snmpPrivProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snmpPrivProtocolInput() {
    return this._snmpPrivProtocol;
  }

  // snmp_retry - computed: false, optional: true, required: false
  private _snmpRetry?: number; 
  public get snmpRetry() {
    return this.getNumberAttribute('snmp_retry');
  }
  public set snmpRetry(value: number) {
    this._snmpRetry = value;
  }
  public resetSnmpRetry() {
    this._snmpRetry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snmpRetryInput() {
    return this._snmpRetry;
  }

  // snmp_ro_community - computed: false, optional: true, required: false
  private _snmpRoCommunity?: string; 
  public get snmpRoCommunity() {
    return this.getStringAttribute('snmp_ro_community');
  }
  public set snmpRoCommunity(value: string) {
    this._snmpRoCommunity = value;
  }
  public resetSnmpRoCommunity() {
    this._snmpRoCommunity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snmpRoCommunityInput() {
    return this._snmpRoCommunity;
  }

  // snmp_rw_community - computed: false, optional: true, required: false
  private _snmpRwCommunity?: string; 
  public get snmpRwCommunity() {
    return this.getStringAttribute('snmp_rw_community');
  }
  public set snmpRwCommunity(value: string) {
    this._snmpRwCommunity = value;
  }
  public resetSnmpRwCommunity() {
    this._snmpRwCommunity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snmpRwCommunityInput() {
    return this._snmpRwCommunity;
  }

  // snmp_timeout - computed: false, optional: true, required: false
  private _snmpTimeout?: number; 
  public get snmpTimeout() {
    return this.getNumberAttribute('snmp_timeout');
  }
  public set snmpTimeout(value: number) {
    this._snmpTimeout = value;
  }
  public resetSnmpTimeout() {
    this._snmpTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snmpTimeoutInput() {
    return this._snmpTimeout;
  }

  // snmp_user_name - computed: false, optional: true, required: false
  private _snmpUserName?: string; 
  public get snmpUserName() {
    return this.getStringAttribute('snmp_user_name');
  }
  public set snmpUserName(value: string) {
    this._snmpUserName = value;
  }
  public resetSnmpUserName() {
    this._snmpUserName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snmpUserNameInput() {
    return this._snmpUserName;
  }

  // snmp_version - computed: false, optional: true, required: false
  private _snmpVersion?: string; 
  public get snmpVersion() {
    return this.getStringAttribute('snmp_version');
  }
  public set snmpVersion(value: string) {
    this._snmpVersion = value;
  }
  public resetSnmpVersion() {
    this._snmpVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snmpVersionInput() {
    return this._snmpVersion;
  }

  // type - computed: false, optional: true, required: false
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

  // update_mgmt_ip_addresses - computed: false, optional: true, required: false
  private _updateMgmtIpAddresses = new DeviceUpdateMgmtIpAddressesList(this, "update_mgmt_ip_addresses", false);
  public get updateMgmtIpAddresses() {
    return this._updateMgmtIpAddresses;
  }
  public putUpdateMgmtIpAddresses(value: DeviceUpdateMgmtIpAddresses[] | cdktf.IResolvable) {
    this._updateMgmtIpAddresses.internalValue = value;
  }
  public resetUpdateMgmtIpAddresses() {
    this._updateMgmtIpAddresses.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateMgmtIpAddressesInput() {
    return this._updateMgmtIpAddresses.internalValue;
  }

  // user_name - computed: false, optional: true, required: false
  private _userName?: string; 
  public get userName() {
    return this.getStringAttribute('user_name');
  }
  public set userName(value: string) {
    this._userName = value;
  }
  public resetUserName() {
    this._userName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userNameInput() {
    return this._userName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cli_transport: cdktf.stringToTerraform(this._cliTransport),
      compute_device: cdktf.booleanToTerraform(this._computeDevice),
      enable_password: cdktf.stringToTerraform(this._enablePassword),
      extended_discovery_info: cdktf.stringToTerraform(this._extendedDiscoveryInfo),
      http_password: cdktf.stringToTerraform(this._httpPassword),
      http_port: cdktf.stringToTerraform(this._httpPort),
      http_secure: cdktf.booleanToTerraform(this._httpSecure),
      http_user_name: cdktf.stringToTerraform(this._httpUserName),
      ip_address: cdktf.stringToTerraform(this._ipAddress),
      meraki_org_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._merakiOrgIds),
      netconf_port: cdktf.stringToTerraform(this._netconfPort),
      password: cdktf.stringToTerraform(this._password),
      serial_number: cdktf.stringToTerraform(this._serialNumber),
      snmp_auth_passphrase: cdktf.stringToTerraform(this._snmpAuthPassphrase),
      snmp_auth_protocol: cdktf.stringToTerraform(this._snmpAuthProtocol),
      snmp_mode: cdktf.stringToTerraform(this._snmpMode),
      snmp_priv_passphrase: cdktf.stringToTerraform(this._snmpPrivPassphrase),
      snmp_priv_protocol: cdktf.stringToTerraform(this._snmpPrivProtocol),
      snmp_retry: cdktf.numberToTerraform(this._snmpRetry),
      snmp_ro_community: cdktf.stringToTerraform(this._snmpRoCommunity),
      snmp_rw_community: cdktf.stringToTerraform(this._snmpRwCommunity),
      snmp_timeout: cdktf.numberToTerraform(this._snmpTimeout),
      snmp_user_name: cdktf.stringToTerraform(this._snmpUserName),
      snmp_version: cdktf.stringToTerraform(this._snmpVersion),
      type: cdktf.stringToTerraform(this._type),
      update_mgmt_ip_addresses: cdktf.listMapper(deviceUpdateMgmtIpAddressesToTerraform, false)(this._updateMgmtIpAddresses.internalValue),
      user_name: cdktf.stringToTerraform(this._userName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cli_transport: {
        value: cdktf.stringToHclTerraform(this._cliTransport),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      compute_device: {
        value: cdktf.booleanToHclTerraform(this._computeDevice),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_password: {
        value: cdktf.stringToHclTerraform(this._enablePassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      extended_discovery_info: {
        value: cdktf.stringToHclTerraform(this._extendedDiscoveryInfo),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      http_password: {
        value: cdktf.stringToHclTerraform(this._httpPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      http_port: {
        value: cdktf.stringToHclTerraform(this._httpPort),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      http_secure: {
        value: cdktf.booleanToHclTerraform(this._httpSecure),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      http_user_name: {
        value: cdktf.stringToHclTerraform(this._httpUserName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ip_address: {
        value: cdktf.stringToHclTerraform(this._ipAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      meraki_org_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._merakiOrgIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      netconf_port: {
        value: cdktf.stringToHclTerraform(this._netconfPort),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      password: {
        value: cdktf.stringToHclTerraform(this._password),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      serial_number: {
        value: cdktf.stringToHclTerraform(this._serialNumber),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      snmp_auth_passphrase: {
        value: cdktf.stringToHclTerraform(this._snmpAuthPassphrase),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      snmp_auth_protocol: {
        value: cdktf.stringToHclTerraform(this._snmpAuthProtocol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      snmp_mode: {
        value: cdktf.stringToHclTerraform(this._snmpMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      snmp_priv_passphrase: {
        value: cdktf.stringToHclTerraform(this._snmpPrivPassphrase),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      snmp_priv_protocol: {
        value: cdktf.stringToHclTerraform(this._snmpPrivProtocol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      snmp_retry: {
        value: cdktf.numberToHclTerraform(this._snmpRetry),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      snmp_ro_community: {
        value: cdktf.stringToHclTerraform(this._snmpRoCommunity),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      snmp_rw_community: {
        value: cdktf.stringToHclTerraform(this._snmpRwCommunity),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      snmp_timeout: {
        value: cdktf.numberToHclTerraform(this._snmpTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      snmp_user_name: {
        value: cdktf.stringToHclTerraform(this._snmpUserName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      snmp_version: {
        value: cdktf.stringToHclTerraform(this._snmpVersion),
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
      update_mgmt_ip_addresses: {
        value: cdktf.listMapperHcl(deviceUpdateMgmtIpAddressesToHclTerraform, false)(this._updateMgmtIpAddresses.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DeviceUpdateMgmtIpAddressesList",
      },
      user_name: {
        value: cdktf.stringToHclTerraform(this._userName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
