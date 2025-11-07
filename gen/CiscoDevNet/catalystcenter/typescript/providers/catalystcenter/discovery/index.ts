// https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.2/docs/resources/discovery
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DiscoveryConfig extends cdktf.TerraformMetaArguments {
  /**
  * CDP level is the number of hops across neighbor devices.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.2/docs/resources/discovery#cdp_level Discovery#cdp_level}
  */
  readonly cdpLevel?: number;
  /**
  * Type of Discovery.
  *   - Choices: `Single`, `Range`, `Multi Range`, `CDP`, `LLDP`, `CIDR`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.2/docs/resources/discovery#discovery_type Discovery#discovery_type}
  */
  readonly discoveryType: string;
  /**
  * Enable passwords of the devices to be discovered.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.2/docs/resources/discovery#enable_password_list Discovery#enable_password_list}
  */
  readonly enablePasswordList?: string[];
  /**
  * A list of IDs, which must include SNMP credential and CLI credential.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.2/docs/resources/discovery#global_credential_id_list Discovery#global_credential_id_list}
  */
  readonly globalCredentialIdList?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.2/docs/resources/discovery#http_read_credential Discovery#http_read_credential}
  */
  readonly httpReadCredential?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.2/docs/resources/discovery#http_write_credential Discovery#http_write_credential}
  */
  readonly httpWriteCredential?: string;
  /**
  * A string of IP address ranges to discover.  E.g.: '172.30.0.1' for discovery_type Single, CDP and LLDP; '172.30.0.1-172.30.0.4' for Range; '72.30.0.1-172.30.0.4,172.31.0.1-172.31.0.4' for Multi Range; '172.30.0.1/20' for CIDR.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.2/docs/resources/discovery#ip_address_list Discovery#ip_address_list}
  */
  readonly ipAddressList?: string;
  /**
  * A list of IP address ranges to exclude from the discovery.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.2/docs/resources/discovery#ip_filter_list Discovery#ip_filter_list}
  */
  readonly ipFilterList?: string[];
  /**
  * LLDP level to which neighbor devices to be discovered.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.2/docs/resources/discovery#lldp_level Discovery#lldp_level}
  */
  readonly lldpLevel?: number;
  /**
  * A name of the discovery.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.2/docs/resources/discovery#name Discovery#name}
  */
  readonly name: string;
  /**
  * Port number for netconf as a string. It requires SSH protocol to work.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.2/docs/resources/discovery#netconf_port Discovery#netconf_port}
  */
  readonly netconfPort?: string;
  /**
  * Passwords of the devices to be discovered.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.2/docs/resources/discovery#password_list Discovery#password_list}
  */
  readonly passwordList?: string[];
  /**
  * Preferred method for selecting management IP address.
  *   - Choices: `None`, `UseLoopBack`
  *   - Default value: `None`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.2/docs/resources/discovery#preferred_mgmt_ip_method Discovery#preferred_mgmt_ip_method}
  */
  readonly preferredMgmtIpMethod?: string;
  /**
  * A string of comma-separated protocols (SSH/Telnet), in the same order in which the connections to each device are attempted. E.g.: 'Telnet': only telnet; 'SSH,Telnet': ssh first, with telnet fallback.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.2/docs/resources/discovery#protocol_order Discovery#protocol_order}
  */
  readonly protocolOrder: string;
  /**
  * Number of times to try establishing SSH/Telnet connection to a device.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.2/docs/resources/discovery#retry Discovery#retry}
  */
  readonly retry?: number;
  /**
  * Auth passphrase for SNMP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.2/docs/resources/discovery#snmp_auth_passphrase Discovery#snmp_auth_passphrase}
  */
  readonly snmpAuthPassphrase?: string;
  /**
  * SNMP auth protocol.
  *   - Choices: `SHA`, `MD5`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.2/docs/resources/discovery#snmp_auth_protocol Discovery#snmp_auth_protocol}
  */
  readonly snmpAuthProtocol?: string;
  /**
  * Mode of SNMP. The `snmp_auth_protocol` and `snmp_auth_passphrase` are required for "AuthNoPriv" mode. Additionally, `snmp_priv_protocol` and `snmp_priv_passphrase` are required for "AuthPriv" mode.
  *   - Choices: `AuthPriv`, `AuthNoPriv`, `NoAuthNoPriv`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.2/docs/resources/discovery#snmp_mode Discovery#snmp_mode}
  */
  readonly snmpMode?: string;
  /**
  * Passphrase for SNMP privacy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.2/docs/resources/discovery#snmp_priv_passphrase Discovery#snmp_priv_passphrase}
  */
  readonly snmpPrivPassphrase?: string;
  /**
  * SNMP privacy protocol.
  *   - Choices: `DES`, `AES128`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.2/docs/resources/discovery#snmp_priv_protocol Discovery#snmp_priv_protocol}
  */
  readonly snmpPrivProtocol?: string;
  /**
  * SNMP RO community of the devices to be discovered.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.2/docs/resources/discovery#snmp_ro_community Discovery#snmp_ro_community}
  */
  readonly snmpRoCommunity?: string;
  /**
  * Description for snmp_ro_community.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.2/docs/resources/discovery#snmp_ro_community_desc Discovery#snmp_ro_community_desc}
  */
  readonly snmpRoCommunityDesc?: string;
  /**
  * SNMP RW community of the devices to be discovered.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.2/docs/resources/discovery#snmp_rw_community Discovery#snmp_rw_community}
  */
  readonly snmpRwCommunity?: string;
  /**
  * Description for snmp_rw_community
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.2/docs/resources/discovery#snmp_rw_community_desc Discovery#snmp_rw_community_desc}
  */
  readonly snmpRwCommunityDesc?: string;
  /**
  * SNMP username of the devices to be discovered.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.2/docs/resources/discovery#snmp_user_name Discovery#snmp_user_name}
  */
  readonly snmpUserName?: string;
  /**
  * SNMP version
  *   - Choices: `v2`, `v3`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.2/docs/resources/discovery#snmp_version Discovery#snmp_version}
  */
  readonly snmpVersion?: string;
  /**
  * Number of seconds to wait for each SSH/Telnet connection to a device.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.2/docs/resources/discovery#timeout_seconds Discovery#timeout_seconds}
  */
  readonly timeoutSeconds?: number;
  /**
  * Usernames for the devices to be discovered.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.2/docs/resources/discovery#user_name_list Discovery#user_name_list}
  */
  readonly userNameList?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.2/docs/resources/discovery catalystcenter_discovery}
*/
export class Discovery extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "catalystcenter_discovery";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Discovery resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Discovery to import
  * @param importFromId The id of the existing Discovery that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.2/docs/resources/discovery#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Discovery to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "catalystcenter_discovery", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/catalystcenter/0.4.2/docs/resources/discovery catalystcenter_discovery} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DiscoveryConfig
  */
  public constructor(scope: Construct, id: string, config: DiscoveryConfig) {
    super(scope, id, {
      terraformResourceType: 'catalystcenter_discovery',
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
    this._cdpLevel = config.cdpLevel;
    this._discoveryType = config.discoveryType;
    this._enablePasswordList = config.enablePasswordList;
    this._globalCredentialIdList = config.globalCredentialIdList;
    this._httpReadCredential = config.httpReadCredential;
    this._httpWriteCredential = config.httpWriteCredential;
    this._ipAddressList = config.ipAddressList;
    this._ipFilterList = config.ipFilterList;
    this._lldpLevel = config.lldpLevel;
    this._name = config.name;
    this._netconfPort = config.netconfPort;
    this._passwordList = config.passwordList;
    this._preferredMgmtIpMethod = config.preferredMgmtIpMethod;
    this._protocolOrder = config.protocolOrder;
    this._retry = config.retry;
    this._snmpAuthPassphrase = config.snmpAuthPassphrase;
    this._snmpAuthProtocol = config.snmpAuthProtocol;
    this._snmpMode = config.snmpMode;
    this._snmpPrivPassphrase = config.snmpPrivPassphrase;
    this._snmpPrivProtocol = config.snmpPrivProtocol;
    this._snmpRoCommunity = config.snmpRoCommunity;
    this._snmpRoCommunityDesc = config.snmpRoCommunityDesc;
    this._snmpRwCommunity = config.snmpRwCommunity;
    this._snmpRwCommunityDesc = config.snmpRwCommunityDesc;
    this._snmpUserName = config.snmpUserName;
    this._snmpVersion = config.snmpVersion;
    this._timeoutSeconds = config.timeoutSeconds;
    this._userNameList = config.userNameList;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cdp_level - computed: false, optional: true, required: false
  private _cdpLevel?: number; 
  public get cdpLevel() {
    return this.getNumberAttribute('cdp_level');
  }
  public set cdpLevel(value: number) {
    this._cdpLevel = value;
  }
  public resetCdpLevel() {
    this._cdpLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cdpLevelInput() {
    return this._cdpLevel;
  }

  // discovery_type - computed: false, optional: false, required: true
  private _discoveryType?: string; 
  public get discoveryType() {
    return this.getStringAttribute('discovery_type');
  }
  public set discoveryType(value: string) {
    this._discoveryType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get discoveryTypeInput() {
    return this._discoveryType;
  }

  // enable_password_list - computed: false, optional: true, required: false
  private _enablePasswordList?: string[]; 
  public get enablePasswordList() {
    return cdktf.Fn.tolist(this.getListAttribute('enable_password_list'));
  }
  public set enablePasswordList(value: string[]) {
    this._enablePasswordList = value;
  }
  public resetEnablePasswordList() {
    this._enablePasswordList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enablePasswordListInput() {
    return this._enablePasswordList;
  }

  // global_credential_id_list - computed: false, optional: true, required: false
  private _globalCredentialIdList?: string[]; 
  public get globalCredentialIdList() {
    return cdktf.Fn.tolist(this.getListAttribute('global_credential_id_list'));
  }
  public set globalCredentialIdList(value: string[]) {
    this._globalCredentialIdList = value;
  }
  public resetGlobalCredentialIdList() {
    this._globalCredentialIdList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get globalCredentialIdListInput() {
    return this._globalCredentialIdList;
  }

  // http_read_credential - computed: false, optional: true, required: false
  private _httpReadCredential?: string; 
  public get httpReadCredential() {
    return this.getStringAttribute('http_read_credential');
  }
  public set httpReadCredential(value: string) {
    this._httpReadCredential = value;
  }
  public resetHttpReadCredential() {
    this._httpReadCredential = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpReadCredentialInput() {
    return this._httpReadCredential;
  }

  // http_write_credential - computed: false, optional: true, required: false
  private _httpWriteCredential?: string; 
  public get httpWriteCredential() {
    return this.getStringAttribute('http_write_credential');
  }
  public set httpWriteCredential(value: string) {
    this._httpWriteCredential = value;
  }
  public resetHttpWriteCredential() {
    this._httpWriteCredential = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpWriteCredentialInput() {
    return this._httpWriteCredential;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ip_address_list - computed: false, optional: true, required: false
  private _ipAddressList?: string; 
  public get ipAddressList() {
    return this.getStringAttribute('ip_address_list');
  }
  public set ipAddressList(value: string) {
    this._ipAddressList = value;
  }
  public resetIpAddressList() {
    this._ipAddressList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressListInput() {
    return this._ipAddressList;
  }

  // ip_filter_list - computed: false, optional: true, required: false
  private _ipFilterList?: string[]; 
  public get ipFilterList() {
    return cdktf.Fn.tolist(this.getListAttribute('ip_filter_list'));
  }
  public set ipFilterList(value: string[]) {
    this._ipFilterList = value;
  }
  public resetIpFilterList() {
    this._ipFilterList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipFilterListInput() {
    return this._ipFilterList;
  }

  // lldp_level - computed: false, optional: true, required: false
  private _lldpLevel?: number; 
  public get lldpLevel() {
    return this.getNumberAttribute('lldp_level');
  }
  public set lldpLevel(value: number) {
    this._lldpLevel = value;
  }
  public resetLldpLevel() {
    this._lldpLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lldpLevelInput() {
    return this._lldpLevel;
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

  // password_list - computed: false, optional: true, required: false
  private _passwordList?: string[]; 
  public get passwordList() {
    return cdktf.Fn.tolist(this.getListAttribute('password_list'));
  }
  public set passwordList(value: string[]) {
    this._passwordList = value;
  }
  public resetPasswordList() {
    this._passwordList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordListInput() {
    return this._passwordList;
  }

  // preferred_mgmt_ip_method - computed: true, optional: true, required: false
  private _preferredMgmtIpMethod?: string; 
  public get preferredMgmtIpMethod() {
    return this.getStringAttribute('preferred_mgmt_ip_method');
  }
  public set preferredMgmtIpMethod(value: string) {
    this._preferredMgmtIpMethod = value;
  }
  public resetPreferredMgmtIpMethod() {
    this._preferredMgmtIpMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferredMgmtIpMethodInput() {
    return this._preferredMgmtIpMethod;
  }

  // protocol_order - computed: false, optional: false, required: true
  private _protocolOrder?: string; 
  public get protocolOrder() {
    return this.getStringAttribute('protocol_order');
  }
  public set protocolOrder(value: string) {
    this._protocolOrder = value;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolOrderInput() {
    return this._protocolOrder;
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

  // snmp_ro_community_desc - computed: false, optional: true, required: false
  private _snmpRoCommunityDesc?: string; 
  public get snmpRoCommunityDesc() {
    return this.getStringAttribute('snmp_ro_community_desc');
  }
  public set snmpRoCommunityDesc(value: string) {
    this._snmpRoCommunityDesc = value;
  }
  public resetSnmpRoCommunityDesc() {
    this._snmpRoCommunityDesc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snmpRoCommunityDescInput() {
    return this._snmpRoCommunityDesc;
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

  // snmp_rw_community_desc - computed: false, optional: true, required: false
  private _snmpRwCommunityDesc?: string; 
  public get snmpRwCommunityDesc() {
    return this.getStringAttribute('snmp_rw_community_desc');
  }
  public set snmpRwCommunityDesc(value: string) {
    this._snmpRwCommunityDesc = value;
  }
  public resetSnmpRwCommunityDesc() {
    this._snmpRwCommunityDesc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snmpRwCommunityDescInput() {
    return this._snmpRwCommunityDesc;
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

  // timeout_seconds - computed: false, optional: true, required: false
  private _timeoutSeconds?: number; 
  public get timeoutSeconds() {
    return this.getNumberAttribute('timeout_seconds');
  }
  public set timeoutSeconds(value: number) {
    this._timeoutSeconds = value;
  }
  public resetTimeoutSeconds() {
    this._timeoutSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutSecondsInput() {
    return this._timeoutSeconds;
  }

  // user_name_list - computed: false, optional: true, required: false
  private _userNameList?: string[]; 
  public get userNameList() {
    return cdktf.Fn.tolist(this.getListAttribute('user_name_list'));
  }
  public set userNameList(value: string[]) {
    this._userNameList = value;
  }
  public resetUserNameList() {
    this._userNameList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userNameListInput() {
    return this._userNameList;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cdp_level: cdktf.numberToTerraform(this._cdpLevel),
      discovery_type: cdktf.stringToTerraform(this._discoveryType),
      enable_password_list: cdktf.listMapper(cdktf.stringToTerraform, false)(this._enablePasswordList),
      global_credential_id_list: cdktf.listMapper(cdktf.stringToTerraform, false)(this._globalCredentialIdList),
      http_read_credential: cdktf.stringToTerraform(this._httpReadCredential),
      http_write_credential: cdktf.stringToTerraform(this._httpWriteCredential),
      ip_address_list: cdktf.stringToTerraform(this._ipAddressList),
      ip_filter_list: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ipFilterList),
      lldp_level: cdktf.numberToTerraform(this._lldpLevel),
      name: cdktf.stringToTerraform(this._name),
      netconf_port: cdktf.stringToTerraform(this._netconfPort),
      password_list: cdktf.listMapper(cdktf.stringToTerraform, false)(this._passwordList),
      preferred_mgmt_ip_method: cdktf.stringToTerraform(this._preferredMgmtIpMethod),
      protocol_order: cdktf.stringToTerraform(this._protocolOrder),
      retry: cdktf.numberToTerraform(this._retry),
      snmp_auth_passphrase: cdktf.stringToTerraform(this._snmpAuthPassphrase),
      snmp_auth_protocol: cdktf.stringToTerraform(this._snmpAuthProtocol),
      snmp_mode: cdktf.stringToTerraform(this._snmpMode),
      snmp_priv_passphrase: cdktf.stringToTerraform(this._snmpPrivPassphrase),
      snmp_priv_protocol: cdktf.stringToTerraform(this._snmpPrivProtocol),
      snmp_ro_community: cdktf.stringToTerraform(this._snmpRoCommunity),
      snmp_ro_community_desc: cdktf.stringToTerraform(this._snmpRoCommunityDesc),
      snmp_rw_community: cdktf.stringToTerraform(this._snmpRwCommunity),
      snmp_rw_community_desc: cdktf.stringToTerraform(this._snmpRwCommunityDesc),
      snmp_user_name: cdktf.stringToTerraform(this._snmpUserName),
      snmp_version: cdktf.stringToTerraform(this._snmpVersion),
      timeout_seconds: cdktf.numberToTerraform(this._timeoutSeconds),
      user_name_list: cdktf.listMapper(cdktf.stringToTerraform, false)(this._userNameList),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cdp_level: {
        value: cdktf.numberToHclTerraform(this._cdpLevel),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      discovery_type: {
        value: cdktf.stringToHclTerraform(this._discoveryType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enable_password_list: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._enablePasswordList),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      global_credential_id_list: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._globalCredentialIdList),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      http_read_credential: {
        value: cdktf.stringToHclTerraform(this._httpReadCredential),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      http_write_credential: {
        value: cdktf.stringToHclTerraform(this._httpWriteCredential),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ip_address_list: {
        value: cdktf.stringToHclTerraform(this._ipAddressList),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ip_filter_list: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ipFilterList),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      lldp_level: {
        value: cdktf.numberToHclTerraform(this._lldpLevel),
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
      netconf_port: {
        value: cdktf.stringToHclTerraform(this._netconfPort),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      password_list: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._passwordList),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      preferred_mgmt_ip_method: {
        value: cdktf.stringToHclTerraform(this._preferredMgmtIpMethod),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      protocol_order: {
        value: cdktf.stringToHclTerraform(this._protocolOrder),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      retry: {
        value: cdktf.numberToHclTerraform(this._retry),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
      snmp_ro_community: {
        value: cdktf.stringToHclTerraform(this._snmpRoCommunity),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      snmp_ro_community_desc: {
        value: cdktf.stringToHclTerraform(this._snmpRoCommunityDesc),
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
      snmp_rw_community_desc: {
        value: cdktf.stringToHclTerraform(this._snmpRwCommunityDesc),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
      timeout_seconds: {
        value: cdktf.numberToHclTerraform(this._timeoutSeconds),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      user_name_list: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._userNameList),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
