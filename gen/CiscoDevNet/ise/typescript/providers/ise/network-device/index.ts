// https://registry.terraform.io/providers/ciscodevnet/ise/0.2.12/docs/resources/network_device
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NetworkDeviceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Enforce use of DTLS
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.12/docs/resources/network_device#authentication_dtls_required NetworkDevice#authentication_dtls_required}
  */
  readonly authenticationDtlsRequired?: boolean | cdktf.IResolvable;
  /**
  * Enable key wrap
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.12/docs/resources/network_device#authentication_enable_key_wrap NetworkDevice#authentication_enable_key_wrap}
  */
  readonly authenticationEnableKeyWrap?: boolean | cdktf.IResolvable;
  /**
  * Enable multiple RADIUS shared secrets
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.12/docs/resources/network_device#authentication_enable_multi_secret NetworkDevice#authentication_enable_multi_secret}
  */
  readonly authenticationEnableMultiSecret?: boolean | cdktf.IResolvable;
  /**
  * Encryption key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.12/docs/resources/network_device#authentication_encryption_key NetworkDevice#authentication_encryption_key}
  */
  readonly authenticationEncryptionKey?: string;
  /**
  * Key input format
  *   - Choices: `ASCII`, `HEXADECIMAL`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.12/docs/resources/network_device#authentication_encryption_key_format NetworkDevice#authentication_encryption_key_format}
  */
  readonly authenticationEncryptionKeyFormat?: string;
  /**
  * Message authenticator code key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.12/docs/resources/network_device#authentication_message_authenticator_code_key NetworkDevice#authentication_message_authenticator_code_key}
  */
  readonly authenticationMessageAuthenticatorCodeKey?: string;
  /**
  * Network protocol
  *   - Choices: `RADIUS`, `TACACS_PLUS`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.12/docs/resources/network_device#authentication_network_protocol NetworkDevice#authentication_network_protocol}
  */
  readonly authenticationNetworkProtocol?: string;
  /**
  * RADIUS shared secret
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.12/docs/resources/network_device#authentication_radius_shared_secret NetworkDevice#authentication_radius_shared_secret}
  */
  readonly authenticationRadiusSharedSecret?: string;
  /**
  * Second RADIUS shared secret
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.12/docs/resources/network_device#authentication_second_radius_shared_secret NetworkDevice#authentication_second_radius_shared_secret}
  */
  readonly authenticationSecondRadiusSharedSecret?: string;
  /**
  * CoA port
  *   - Default value: `1700`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.12/docs/resources/network_device#coa_port NetworkDevice#coa_port}
  */
  readonly coaPort?: number;
  /**
  * Description
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.12/docs/resources/network_device#description NetworkDevice#description}
  */
  readonly description?: string;
  /**
  * This value is used to verify the client identity contained in the X.509 RADIUS/DTLS client certificate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.12/docs/resources/network_device#dtls_dns_name NetworkDevice#dtls_dns_name}
  */
  readonly dtlsDnsName?: string;
  /**
  * List of IP subnets
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.12/docs/resources/network_device#ips NetworkDevice#ips}
  */
  readonly ips: NetworkDeviceIps[] | cdktf.IResolvable;
  /**
  * Model name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.12/docs/resources/network_device#model_name NetworkDevice#model_name}
  */
  readonly modelName?: string;
  /**
  * The name of the network device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.12/docs/resources/network_device#name NetworkDevice#name}
  */
  readonly name: string;
  /**
  * List of network device groups, e.g. `Device Type#All Device Types#ACCESS`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.12/docs/resources/network_device#network_device_groups NetworkDevice#network_device_groups}
  */
  readonly networkDeviceGroups?: string[];
  /**
  * Profile name
  *   - Default value: `Cisco`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.12/docs/resources/network_device#profile_name NetworkDevice#profile_name}
  */
  readonly profileName?: string;
  /**
  * SNMP link Trap Query
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.12/docs/resources/network_device#snmp_link_trap_query NetworkDevice#snmp_link_trap_query}
  */
  readonly snmpLinkTrapQuery?: boolean | cdktf.IResolvable;
  /**
  * SNMP MAC Trap Query
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.12/docs/resources/network_device#snmp_mac_trap_query NetworkDevice#snmp_mac_trap_query}
  */
  readonly snmpMacTrapQuery?: boolean | cdktf.IResolvable;
  /**
  * Originating Policy Services Node
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.12/docs/resources/network_device#snmp_originating_policy_service_node NetworkDevice#snmp_originating_policy_service_node}
  */
  readonly snmpOriginatingPolicyServiceNode?: string;
  /**
  * SNMP Polling Interval in seconds
  *   - Range: `600`-`86400`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.12/docs/resources/network_device#snmp_polling_interval NetworkDevice#snmp_polling_interval}
  */
  readonly snmpPollingInterval?: number;
  /**
  * SNMP RO Community
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.12/docs/resources/network_device#snmp_ro_community NetworkDevice#snmp_ro_community}
  */
  readonly snmpRoCommunity?: string;
  /**
  * SNMP version
  *   - Choices: `ONE`, `TWO_C`, `THREE`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.12/docs/resources/network_device#snmp_version NetworkDevice#snmp_version}
  */
  readonly snmpVersion?: string;
  /**
  * Software version
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.12/docs/resources/network_device#software_version NetworkDevice#software_version}
  */
  readonly softwareVersion?: string;
  /**
  * Connect mode options
  *   - Choices: `OFF`, `ON_LEGACY`, `ON_DRAFT_COMPLIANT`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.12/docs/resources/network_device#tacacs_connect_mode_options NetworkDevice#tacacs_connect_mode_options}
  */
  readonly tacacsConnectModeOptions?: string;
  /**
  * Shared secret
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.12/docs/resources/network_device#tacacs_shared_secret NetworkDevice#tacacs_shared_secret}
  */
  readonly tacacsSharedSecret?: string;
  /**
  * CoA source host
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.12/docs/resources/network_device#trustsec_coa_source_host NetworkDevice#trustsec_coa_source_host}
  */
  readonly trustsecCoaSourceHost?: string;
  /**
  * TrustSec device ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.12/docs/resources/network_device#trustsec_device_id NetworkDevice#trustsec_device_id}
  */
  readonly trustsecDeviceId?: string;
  /**
  * TrustSec device password
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.12/docs/resources/network_device#trustsec_device_password NetworkDevice#trustsec_device_password}
  */
  readonly trustsecDevicePassword?: string;
  /**
  * Download environment data every X seconds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.12/docs/resources/network_device#trustsec_download_environment_data_every_x_seconds NetworkDevice#trustsec_download_environment_data_every_x_seconds}
  */
  readonly trustsecDownloadEnvironmentDataEveryXSeconds?: number;
  /**
  * Download peer authorization policy every X seconds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.12/docs/resources/network_device#trustsec_download_peer_authorization_policy_every_x_seconds NetworkDevice#trustsec_download_peer_authorization_policy_every_x_seconds}
  */
  readonly trustsecDownloadPeerAuthorizationPolicyEveryXSeconds?: number;
  /**
  * Download SGACL lists every X seconds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.12/docs/resources/network_device#trustsec_download_sgacl_lists_every_x_seconds NetworkDevice#trustsec_download_sgacl_lists_every_x_seconds}
  */
  readonly trustsecDownloadSgaclListsEveryXSeconds?: number;
  /**
  * Enable mode password
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.12/docs/resources/network_device#trustsec_enable_mode_password NetworkDevice#trustsec_enable_mode_password}
  */
  readonly trustsecEnableModePassword?: string;
  /**
  * EXEC mode password
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.12/docs/resources/network_device#trustsec_exec_mode_password NetworkDevice#trustsec_exec_mode_password}
  */
  readonly trustsecExecModePassword?: string;
  /**
  * EXEC mode username
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.12/docs/resources/network_device#trustsec_exec_mode_username NetworkDevice#trustsec_exec_mode_username}
  */
  readonly trustsecExecModeUsername?: string;
  /**
  * Include this device when deploying Security Group Tag Mapping Updates
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.12/docs/resources/network_device#trustsec_include_when_deploying_sgt_updates NetworkDevice#trustsec_include_when_deploying_sgt_updates}
  */
  readonly trustsecIncludeWhenDeployingSgtUpdates?: boolean | cdktf.IResolvable;
  /**
  * Other TrustSec devices to trust this device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.12/docs/resources/network_device#trustsec_other_sga_devices_to_trust_this_device NetworkDevice#trustsec_other_sga_devices_to_trust_this_device}
  */
  readonly trustsecOtherSgaDevicesToTrustThisDevice?: boolean | cdktf.IResolvable;
  /**
  * Re-authenticate every X seconds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.12/docs/resources/network_device#trustsec_re_authentication_every_x_seconds NetworkDevice#trustsec_re_authentication_every_x_seconds}
  */
  readonly trustsecReAuthenticationEveryXSeconds?: number;
  /**
  * REST API password
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.12/docs/resources/network_device#trustsec_rest_api_password NetworkDevice#trustsec_rest_api_password}
  */
  readonly trustsecRestApiPassword?: string;
  /**
  * REST API username
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.12/docs/resources/network_device#trustsec_rest_api_username NetworkDevice#trustsec_rest_api_username}
  */
  readonly trustsecRestApiUsername?: string;
  /**
  * Send configuration to device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.12/docs/resources/network_device#trustsec_send_configuration_to_device NetworkDevice#trustsec_send_configuration_to_device}
  */
  readonly trustsecSendConfigurationToDevice?: boolean | cdktf.IResolvable;
  /**
  * Send configuration to device using
  *   - Choices: `DISABLE_ALL`, `ENABLE_USING_CLI`, `ENABLE_USING_COA`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.12/docs/resources/network_device#trustsec_send_configuration_to_device_using NetworkDevice#trustsec_send_configuration_to_device_using}
  */
  readonly trustsecSendConfigurationToDeviceUsing?: string;
}
export interface NetworkDeviceIps {
  /**
  * It can be either single ip address or ip range address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.12/docs/resources/network_device#ipaddress NetworkDevice#ipaddress}
  */
  readonly ipaddress: string;
  /**
  * It can be either single ip address or ip range address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.12/docs/resources/network_device#ipaddress_exclude NetworkDevice#ipaddress_exclude}
  */
  readonly ipaddressExclude?: string;
  /**
  * Subnet mask length
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.12/docs/resources/network_device#mask NetworkDevice#mask}
  */
  readonly mask?: string;
}

export function networkDeviceIpsToTerraform(struct?: NetworkDeviceIps | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipaddress: cdktf.stringToTerraform(struct!.ipaddress),
    ipaddress_exclude: cdktf.stringToTerraform(struct!.ipaddressExclude),
    mask: cdktf.stringToTerraform(struct!.mask),
  }
}


export function networkDeviceIpsToHclTerraform(struct?: NetworkDeviceIps | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ipaddress: {
      value: cdktf.stringToHclTerraform(struct!.ipaddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipaddress_exclude: {
      value: cdktf.stringToHclTerraform(struct!.ipaddressExclude),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mask: {
      value: cdktf.stringToHclTerraform(struct!.mask),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkDeviceIpsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NetworkDeviceIps | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipaddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipaddress = this._ipaddress;
    }
    if (this._ipaddressExclude !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipaddressExclude = this._ipaddressExclude;
    }
    if (this._mask !== undefined) {
      hasAnyValues = true;
      internalValueResult.mask = this._mask;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkDeviceIps | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipaddress = undefined;
      this._ipaddressExclude = undefined;
      this._mask = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipaddress = value.ipaddress;
      this._ipaddressExclude = value.ipaddressExclude;
      this._mask = value.mask;
    }
  }

  // ipaddress - computed: false, optional: false, required: true
  private _ipaddress?: string; 
  public get ipaddress() {
    return this.getStringAttribute('ipaddress');
  }
  public set ipaddress(value: string) {
    this._ipaddress = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipaddressInput() {
    return this._ipaddress;
  }

  // ipaddress_exclude - computed: false, optional: true, required: false
  private _ipaddressExclude?: string; 
  public get ipaddressExclude() {
    return this.getStringAttribute('ipaddress_exclude');
  }
  public set ipaddressExclude(value: string) {
    this._ipaddressExclude = value;
  }
  public resetIpaddressExclude() {
    this._ipaddressExclude = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipaddressExcludeInput() {
    return this._ipaddressExclude;
  }

  // mask - computed: false, optional: true, required: false
  private _mask?: string; 
  public get mask() {
    return this.getStringAttribute('mask');
  }
  public set mask(value: string) {
    this._mask = value;
  }
  public resetMask() {
    this._mask = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maskInput() {
    return this._mask;
  }
}

export class NetworkDeviceIpsList extends cdktf.ComplexList {
  public internalValue? : NetworkDeviceIps[] | cdktf.IResolvable

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
  public get(index: number): NetworkDeviceIpsOutputReference {
    return new NetworkDeviceIpsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.12/docs/resources/network_device ise_network_device}
*/
export class NetworkDevice extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ise_network_device";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a NetworkDevice resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NetworkDevice to import
  * @param importFromId The id of the existing NetworkDevice that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.12/docs/resources/network_device#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NetworkDevice to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ise_network_device", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.12/docs/resources/network_device ise_network_device} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NetworkDeviceConfig
  */
  public constructor(scope: Construct, id: string, config: NetworkDeviceConfig) {
    super(scope, id, {
      terraformResourceType: 'ise_network_device',
      terraformGeneratorMetadata: {
        providerName: 'ise',
        providerVersion: '0.2.12',
        providerVersionConstraint: '0.2.12'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._authenticationDtlsRequired = config.authenticationDtlsRequired;
    this._authenticationEnableKeyWrap = config.authenticationEnableKeyWrap;
    this._authenticationEnableMultiSecret = config.authenticationEnableMultiSecret;
    this._authenticationEncryptionKey = config.authenticationEncryptionKey;
    this._authenticationEncryptionKeyFormat = config.authenticationEncryptionKeyFormat;
    this._authenticationMessageAuthenticatorCodeKey = config.authenticationMessageAuthenticatorCodeKey;
    this._authenticationNetworkProtocol = config.authenticationNetworkProtocol;
    this._authenticationRadiusSharedSecret = config.authenticationRadiusSharedSecret;
    this._authenticationSecondRadiusSharedSecret = config.authenticationSecondRadiusSharedSecret;
    this._coaPort = config.coaPort;
    this._description = config.description;
    this._dtlsDnsName = config.dtlsDnsName;
    this._ips.internalValue = config.ips;
    this._modelName = config.modelName;
    this._name = config.name;
    this._networkDeviceGroups = config.networkDeviceGroups;
    this._profileName = config.profileName;
    this._snmpLinkTrapQuery = config.snmpLinkTrapQuery;
    this._snmpMacTrapQuery = config.snmpMacTrapQuery;
    this._snmpOriginatingPolicyServiceNode = config.snmpOriginatingPolicyServiceNode;
    this._snmpPollingInterval = config.snmpPollingInterval;
    this._snmpRoCommunity = config.snmpRoCommunity;
    this._snmpVersion = config.snmpVersion;
    this._softwareVersion = config.softwareVersion;
    this._tacacsConnectModeOptions = config.tacacsConnectModeOptions;
    this._tacacsSharedSecret = config.tacacsSharedSecret;
    this._trustsecCoaSourceHost = config.trustsecCoaSourceHost;
    this._trustsecDeviceId = config.trustsecDeviceId;
    this._trustsecDevicePassword = config.trustsecDevicePassword;
    this._trustsecDownloadEnvironmentDataEveryXSeconds = config.trustsecDownloadEnvironmentDataEveryXSeconds;
    this._trustsecDownloadPeerAuthorizationPolicyEveryXSeconds = config.trustsecDownloadPeerAuthorizationPolicyEveryXSeconds;
    this._trustsecDownloadSgaclListsEveryXSeconds = config.trustsecDownloadSgaclListsEveryXSeconds;
    this._trustsecEnableModePassword = config.trustsecEnableModePassword;
    this._trustsecExecModePassword = config.trustsecExecModePassword;
    this._trustsecExecModeUsername = config.trustsecExecModeUsername;
    this._trustsecIncludeWhenDeployingSgtUpdates = config.trustsecIncludeWhenDeployingSgtUpdates;
    this._trustsecOtherSgaDevicesToTrustThisDevice = config.trustsecOtherSgaDevicesToTrustThisDevice;
    this._trustsecReAuthenticationEveryXSeconds = config.trustsecReAuthenticationEveryXSeconds;
    this._trustsecRestApiPassword = config.trustsecRestApiPassword;
    this._trustsecRestApiUsername = config.trustsecRestApiUsername;
    this._trustsecSendConfigurationToDevice = config.trustsecSendConfigurationToDevice;
    this._trustsecSendConfigurationToDeviceUsing = config.trustsecSendConfigurationToDeviceUsing;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // authentication_dtls_required - computed: false, optional: true, required: false
  private _authenticationDtlsRequired?: boolean | cdktf.IResolvable; 
  public get authenticationDtlsRequired() {
    return this.getBooleanAttribute('authentication_dtls_required');
  }
  public set authenticationDtlsRequired(value: boolean | cdktf.IResolvable) {
    this._authenticationDtlsRequired = value;
  }
  public resetAuthenticationDtlsRequired() {
    this._authenticationDtlsRequired = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationDtlsRequiredInput() {
    return this._authenticationDtlsRequired;
  }

  // authentication_enable_key_wrap - computed: false, optional: true, required: false
  private _authenticationEnableKeyWrap?: boolean | cdktf.IResolvable; 
  public get authenticationEnableKeyWrap() {
    return this.getBooleanAttribute('authentication_enable_key_wrap');
  }
  public set authenticationEnableKeyWrap(value: boolean | cdktf.IResolvable) {
    this._authenticationEnableKeyWrap = value;
  }
  public resetAuthenticationEnableKeyWrap() {
    this._authenticationEnableKeyWrap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationEnableKeyWrapInput() {
    return this._authenticationEnableKeyWrap;
  }

  // authentication_enable_multi_secret - computed: false, optional: true, required: false
  private _authenticationEnableMultiSecret?: boolean | cdktf.IResolvable; 
  public get authenticationEnableMultiSecret() {
    return this.getBooleanAttribute('authentication_enable_multi_secret');
  }
  public set authenticationEnableMultiSecret(value: boolean | cdktf.IResolvable) {
    this._authenticationEnableMultiSecret = value;
  }
  public resetAuthenticationEnableMultiSecret() {
    this._authenticationEnableMultiSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationEnableMultiSecretInput() {
    return this._authenticationEnableMultiSecret;
  }

  // authentication_encryption_key - computed: false, optional: true, required: false
  private _authenticationEncryptionKey?: string; 
  public get authenticationEncryptionKey() {
    return this.getStringAttribute('authentication_encryption_key');
  }
  public set authenticationEncryptionKey(value: string) {
    this._authenticationEncryptionKey = value;
  }
  public resetAuthenticationEncryptionKey() {
    this._authenticationEncryptionKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationEncryptionKeyInput() {
    return this._authenticationEncryptionKey;
  }

  // authentication_encryption_key_format - computed: false, optional: true, required: false
  private _authenticationEncryptionKeyFormat?: string; 
  public get authenticationEncryptionKeyFormat() {
    return this.getStringAttribute('authentication_encryption_key_format');
  }
  public set authenticationEncryptionKeyFormat(value: string) {
    this._authenticationEncryptionKeyFormat = value;
  }
  public resetAuthenticationEncryptionKeyFormat() {
    this._authenticationEncryptionKeyFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationEncryptionKeyFormatInput() {
    return this._authenticationEncryptionKeyFormat;
  }

  // authentication_message_authenticator_code_key - computed: false, optional: true, required: false
  private _authenticationMessageAuthenticatorCodeKey?: string; 
  public get authenticationMessageAuthenticatorCodeKey() {
    return this.getStringAttribute('authentication_message_authenticator_code_key');
  }
  public set authenticationMessageAuthenticatorCodeKey(value: string) {
    this._authenticationMessageAuthenticatorCodeKey = value;
  }
  public resetAuthenticationMessageAuthenticatorCodeKey() {
    this._authenticationMessageAuthenticatorCodeKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationMessageAuthenticatorCodeKeyInput() {
    return this._authenticationMessageAuthenticatorCodeKey;
  }

  // authentication_network_protocol - computed: false, optional: true, required: false
  private _authenticationNetworkProtocol?: string; 
  public get authenticationNetworkProtocol() {
    return this.getStringAttribute('authentication_network_protocol');
  }
  public set authenticationNetworkProtocol(value: string) {
    this._authenticationNetworkProtocol = value;
  }
  public resetAuthenticationNetworkProtocol() {
    this._authenticationNetworkProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationNetworkProtocolInput() {
    return this._authenticationNetworkProtocol;
  }

  // authentication_radius_shared_secret - computed: false, optional: true, required: false
  private _authenticationRadiusSharedSecret?: string; 
  public get authenticationRadiusSharedSecret() {
    return this.getStringAttribute('authentication_radius_shared_secret');
  }
  public set authenticationRadiusSharedSecret(value: string) {
    this._authenticationRadiusSharedSecret = value;
  }
  public resetAuthenticationRadiusSharedSecret() {
    this._authenticationRadiusSharedSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationRadiusSharedSecretInput() {
    return this._authenticationRadiusSharedSecret;
  }

  // authentication_second_radius_shared_secret - computed: false, optional: true, required: false
  private _authenticationSecondRadiusSharedSecret?: string; 
  public get authenticationSecondRadiusSharedSecret() {
    return this.getStringAttribute('authentication_second_radius_shared_secret');
  }
  public set authenticationSecondRadiusSharedSecret(value: string) {
    this._authenticationSecondRadiusSharedSecret = value;
  }
  public resetAuthenticationSecondRadiusSharedSecret() {
    this._authenticationSecondRadiusSharedSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationSecondRadiusSharedSecretInput() {
    return this._authenticationSecondRadiusSharedSecret;
  }

  // coa_port - computed: true, optional: true, required: false
  private _coaPort?: number; 
  public get coaPort() {
    return this.getNumberAttribute('coa_port');
  }
  public set coaPort(value: number) {
    this._coaPort = value;
  }
  public resetCoaPort() {
    this._coaPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get coaPortInput() {
    return this._coaPort;
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

  // dtls_dns_name - computed: false, optional: true, required: false
  private _dtlsDnsName?: string; 
  public get dtlsDnsName() {
    return this.getStringAttribute('dtls_dns_name');
  }
  public set dtlsDnsName(value: string) {
    this._dtlsDnsName = value;
  }
  public resetDtlsDnsName() {
    this._dtlsDnsName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dtlsDnsNameInput() {
    return this._dtlsDnsName;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ips - computed: false, optional: false, required: true
  private _ips = new NetworkDeviceIpsList(this, "ips", false);
  public get ips() {
    return this._ips;
  }
  public putIps(value: NetworkDeviceIps[] | cdktf.IResolvable) {
    this._ips.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsInput() {
    return this._ips.internalValue;
  }

  // model_name - computed: false, optional: true, required: false
  private _modelName?: string; 
  public get modelName() {
    return this.getStringAttribute('model_name');
  }
  public set modelName(value: string) {
    this._modelName = value;
  }
  public resetModelName() {
    this._modelName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modelNameInput() {
    return this._modelName;
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

  // network_device_groups - computed: false, optional: true, required: false
  private _networkDeviceGroups?: string[]; 
  public get networkDeviceGroups() {
    return cdktf.Fn.tolist(this.getListAttribute('network_device_groups'));
  }
  public set networkDeviceGroups(value: string[]) {
    this._networkDeviceGroups = value;
  }
  public resetNetworkDeviceGroups() {
    this._networkDeviceGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkDeviceGroupsInput() {
    return this._networkDeviceGroups;
  }

  // profile_name - computed: true, optional: true, required: false
  private _profileName?: string; 
  public get profileName() {
    return this.getStringAttribute('profile_name');
  }
  public set profileName(value: string) {
    this._profileName = value;
  }
  public resetProfileName() {
    this._profileName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get profileNameInput() {
    return this._profileName;
  }

  // snmp_link_trap_query - computed: false, optional: true, required: false
  private _snmpLinkTrapQuery?: boolean | cdktf.IResolvable; 
  public get snmpLinkTrapQuery() {
    return this.getBooleanAttribute('snmp_link_trap_query');
  }
  public set snmpLinkTrapQuery(value: boolean | cdktf.IResolvable) {
    this._snmpLinkTrapQuery = value;
  }
  public resetSnmpLinkTrapQuery() {
    this._snmpLinkTrapQuery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snmpLinkTrapQueryInput() {
    return this._snmpLinkTrapQuery;
  }

  // snmp_mac_trap_query - computed: false, optional: true, required: false
  private _snmpMacTrapQuery?: boolean | cdktf.IResolvable; 
  public get snmpMacTrapQuery() {
    return this.getBooleanAttribute('snmp_mac_trap_query');
  }
  public set snmpMacTrapQuery(value: boolean | cdktf.IResolvable) {
    this._snmpMacTrapQuery = value;
  }
  public resetSnmpMacTrapQuery() {
    this._snmpMacTrapQuery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snmpMacTrapQueryInput() {
    return this._snmpMacTrapQuery;
  }

  // snmp_originating_policy_service_node - computed: false, optional: true, required: false
  private _snmpOriginatingPolicyServiceNode?: string; 
  public get snmpOriginatingPolicyServiceNode() {
    return this.getStringAttribute('snmp_originating_policy_service_node');
  }
  public set snmpOriginatingPolicyServiceNode(value: string) {
    this._snmpOriginatingPolicyServiceNode = value;
  }
  public resetSnmpOriginatingPolicyServiceNode() {
    this._snmpOriginatingPolicyServiceNode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snmpOriginatingPolicyServiceNodeInput() {
    return this._snmpOriginatingPolicyServiceNode;
  }

  // snmp_polling_interval - computed: false, optional: true, required: false
  private _snmpPollingInterval?: number; 
  public get snmpPollingInterval() {
    return this.getNumberAttribute('snmp_polling_interval');
  }
  public set snmpPollingInterval(value: number) {
    this._snmpPollingInterval = value;
  }
  public resetSnmpPollingInterval() {
    this._snmpPollingInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snmpPollingIntervalInput() {
    return this._snmpPollingInterval;
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

  // software_version - computed: false, optional: true, required: false
  private _softwareVersion?: string; 
  public get softwareVersion() {
    return this.getStringAttribute('software_version');
  }
  public set softwareVersion(value: string) {
    this._softwareVersion = value;
  }
  public resetSoftwareVersion() {
    this._softwareVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get softwareVersionInput() {
    return this._softwareVersion;
  }

  // tacacs_connect_mode_options - computed: false, optional: true, required: false
  private _tacacsConnectModeOptions?: string; 
  public get tacacsConnectModeOptions() {
    return this.getStringAttribute('tacacs_connect_mode_options');
  }
  public set tacacsConnectModeOptions(value: string) {
    this._tacacsConnectModeOptions = value;
  }
  public resetTacacsConnectModeOptions() {
    this._tacacsConnectModeOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tacacsConnectModeOptionsInput() {
    return this._tacacsConnectModeOptions;
  }

  // tacacs_shared_secret - computed: false, optional: true, required: false
  private _tacacsSharedSecret?: string; 
  public get tacacsSharedSecret() {
    return this.getStringAttribute('tacacs_shared_secret');
  }
  public set tacacsSharedSecret(value: string) {
    this._tacacsSharedSecret = value;
  }
  public resetTacacsSharedSecret() {
    this._tacacsSharedSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tacacsSharedSecretInput() {
    return this._tacacsSharedSecret;
  }

  // trustsec_coa_source_host - computed: false, optional: true, required: false
  private _trustsecCoaSourceHost?: string; 
  public get trustsecCoaSourceHost() {
    return this.getStringAttribute('trustsec_coa_source_host');
  }
  public set trustsecCoaSourceHost(value: string) {
    this._trustsecCoaSourceHost = value;
  }
  public resetTrustsecCoaSourceHost() {
    this._trustsecCoaSourceHost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trustsecCoaSourceHostInput() {
    return this._trustsecCoaSourceHost;
  }

  // trustsec_device_id - computed: false, optional: true, required: false
  private _trustsecDeviceId?: string; 
  public get trustsecDeviceId() {
    return this.getStringAttribute('trustsec_device_id');
  }
  public set trustsecDeviceId(value: string) {
    this._trustsecDeviceId = value;
  }
  public resetTrustsecDeviceId() {
    this._trustsecDeviceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trustsecDeviceIdInput() {
    return this._trustsecDeviceId;
  }

  // trustsec_device_password - computed: false, optional: true, required: false
  private _trustsecDevicePassword?: string; 
  public get trustsecDevicePassword() {
    return this.getStringAttribute('trustsec_device_password');
  }
  public set trustsecDevicePassword(value: string) {
    this._trustsecDevicePassword = value;
  }
  public resetTrustsecDevicePassword() {
    this._trustsecDevicePassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trustsecDevicePasswordInput() {
    return this._trustsecDevicePassword;
  }

  // trustsec_download_environment_data_every_x_seconds - computed: false, optional: true, required: false
  private _trustsecDownloadEnvironmentDataEveryXSeconds?: number; 
  public get trustsecDownloadEnvironmentDataEveryXSeconds() {
    return this.getNumberAttribute('trustsec_download_environment_data_every_x_seconds');
  }
  public set trustsecDownloadEnvironmentDataEveryXSeconds(value: number) {
    this._trustsecDownloadEnvironmentDataEveryXSeconds = value;
  }
  public resetTrustsecDownloadEnvironmentDataEveryXSeconds() {
    this._trustsecDownloadEnvironmentDataEveryXSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trustsecDownloadEnvironmentDataEveryXSecondsInput() {
    return this._trustsecDownloadEnvironmentDataEveryXSeconds;
  }

  // trustsec_download_peer_authorization_policy_every_x_seconds - computed: false, optional: true, required: false
  private _trustsecDownloadPeerAuthorizationPolicyEveryXSeconds?: number; 
  public get trustsecDownloadPeerAuthorizationPolicyEveryXSeconds() {
    return this.getNumberAttribute('trustsec_download_peer_authorization_policy_every_x_seconds');
  }
  public set trustsecDownloadPeerAuthorizationPolicyEveryXSeconds(value: number) {
    this._trustsecDownloadPeerAuthorizationPolicyEveryXSeconds = value;
  }
  public resetTrustsecDownloadPeerAuthorizationPolicyEveryXSeconds() {
    this._trustsecDownloadPeerAuthorizationPolicyEveryXSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trustsecDownloadPeerAuthorizationPolicyEveryXSecondsInput() {
    return this._trustsecDownloadPeerAuthorizationPolicyEveryXSeconds;
  }

  // trustsec_download_sgacl_lists_every_x_seconds - computed: false, optional: true, required: false
  private _trustsecDownloadSgaclListsEveryXSeconds?: number; 
  public get trustsecDownloadSgaclListsEveryXSeconds() {
    return this.getNumberAttribute('trustsec_download_sgacl_lists_every_x_seconds');
  }
  public set trustsecDownloadSgaclListsEveryXSeconds(value: number) {
    this._trustsecDownloadSgaclListsEveryXSeconds = value;
  }
  public resetTrustsecDownloadSgaclListsEveryXSeconds() {
    this._trustsecDownloadSgaclListsEveryXSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trustsecDownloadSgaclListsEveryXSecondsInput() {
    return this._trustsecDownloadSgaclListsEveryXSeconds;
  }

  // trustsec_enable_mode_password - computed: false, optional: true, required: false
  private _trustsecEnableModePassword?: string; 
  public get trustsecEnableModePassword() {
    return this.getStringAttribute('trustsec_enable_mode_password');
  }
  public set trustsecEnableModePassword(value: string) {
    this._trustsecEnableModePassword = value;
  }
  public resetTrustsecEnableModePassword() {
    this._trustsecEnableModePassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trustsecEnableModePasswordInput() {
    return this._trustsecEnableModePassword;
  }

  // trustsec_exec_mode_password - computed: false, optional: true, required: false
  private _trustsecExecModePassword?: string; 
  public get trustsecExecModePassword() {
    return this.getStringAttribute('trustsec_exec_mode_password');
  }
  public set trustsecExecModePassword(value: string) {
    this._trustsecExecModePassword = value;
  }
  public resetTrustsecExecModePassword() {
    this._trustsecExecModePassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trustsecExecModePasswordInput() {
    return this._trustsecExecModePassword;
  }

  // trustsec_exec_mode_username - computed: false, optional: true, required: false
  private _trustsecExecModeUsername?: string; 
  public get trustsecExecModeUsername() {
    return this.getStringAttribute('trustsec_exec_mode_username');
  }
  public set trustsecExecModeUsername(value: string) {
    this._trustsecExecModeUsername = value;
  }
  public resetTrustsecExecModeUsername() {
    this._trustsecExecModeUsername = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trustsecExecModeUsernameInput() {
    return this._trustsecExecModeUsername;
  }

  // trustsec_include_when_deploying_sgt_updates - computed: false, optional: true, required: false
  private _trustsecIncludeWhenDeployingSgtUpdates?: boolean | cdktf.IResolvable; 
  public get trustsecIncludeWhenDeployingSgtUpdates() {
    return this.getBooleanAttribute('trustsec_include_when_deploying_sgt_updates');
  }
  public set trustsecIncludeWhenDeployingSgtUpdates(value: boolean | cdktf.IResolvable) {
    this._trustsecIncludeWhenDeployingSgtUpdates = value;
  }
  public resetTrustsecIncludeWhenDeployingSgtUpdates() {
    this._trustsecIncludeWhenDeployingSgtUpdates = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trustsecIncludeWhenDeployingSgtUpdatesInput() {
    return this._trustsecIncludeWhenDeployingSgtUpdates;
  }

  // trustsec_other_sga_devices_to_trust_this_device - computed: false, optional: true, required: false
  private _trustsecOtherSgaDevicesToTrustThisDevice?: boolean | cdktf.IResolvable; 
  public get trustsecOtherSgaDevicesToTrustThisDevice() {
    return this.getBooleanAttribute('trustsec_other_sga_devices_to_trust_this_device');
  }
  public set trustsecOtherSgaDevicesToTrustThisDevice(value: boolean | cdktf.IResolvable) {
    this._trustsecOtherSgaDevicesToTrustThisDevice = value;
  }
  public resetTrustsecOtherSgaDevicesToTrustThisDevice() {
    this._trustsecOtherSgaDevicesToTrustThisDevice = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trustsecOtherSgaDevicesToTrustThisDeviceInput() {
    return this._trustsecOtherSgaDevicesToTrustThisDevice;
  }

  // trustsec_re_authentication_every_x_seconds - computed: false, optional: true, required: false
  private _trustsecReAuthenticationEveryXSeconds?: number; 
  public get trustsecReAuthenticationEveryXSeconds() {
    return this.getNumberAttribute('trustsec_re_authentication_every_x_seconds');
  }
  public set trustsecReAuthenticationEveryXSeconds(value: number) {
    this._trustsecReAuthenticationEveryXSeconds = value;
  }
  public resetTrustsecReAuthenticationEveryXSeconds() {
    this._trustsecReAuthenticationEveryXSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trustsecReAuthenticationEveryXSecondsInput() {
    return this._trustsecReAuthenticationEveryXSeconds;
  }

  // trustsec_rest_api_password - computed: false, optional: true, required: false
  private _trustsecRestApiPassword?: string; 
  public get trustsecRestApiPassword() {
    return this.getStringAttribute('trustsec_rest_api_password');
  }
  public set trustsecRestApiPassword(value: string) {
    this._trustsecRestApiPassword = value;
  }
  public resetTrustsecRestApiPassword() {
    this._trustsecRestApiPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trustsecRestApiPasswordInput() {
    return this._trustsecRestApiPassword;
  }

  // trustsec_rest_api_username - computed: false, optional: true, required: false
  private _trustsecRestApiUsername?: string; 
  public get trustsecRestApiUsername() {
    return this.getStringAttribute('trustsec_rest_api_username');
  }
  public set trustsecRestApiUsername(value: string) {
    this._trustsecRestApiUsername = value;
  }
  public resetTrustsecRestApiUsername() {
    this._trustsecRestApiUsername = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trustsecRestApiUsernameInput() {
    return this._trustsecRestApiUsername;
  }

  // trustsec_send_configuration_to_device - computed: false, optional: true, required: false
  private _trustsecSendConfigurationToDevice?: boolean | cdktf.IResolvable; 
  public get trustsecSendConfigurationToDevice() {
    return this.getBooleanAttribute('trustsec_send_configuration_to_device');
  }
  public set trustsecSendConfigurationToDevice(value: boolean | cdktf.IResolvable) {
    this._trustsecSendConfigurationToDevice = value;
  }
  public resetTrustsecSendConfigurationToDevice() {
    this._trustsecSendConfigurationToDevice = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trustsecSendConfigurationToDeviceInput() {
    return this._trustsecSendConfigurationToDevice;
  }

  // trustsec_send_configuration_to_device_using - computed: false, optional: true, required: false
  private _trustsecSendConfigurationToDeviceUsing?: string; 
  public get trustsecSendConfigurationToDeviceUsing() {
    return this.getStringAttribute('trustsec_send_configuration_to_device_using');
  }
  public set trustsecSendConfigurationToDeviceUsing(value: string) {
    this._trustsecSendConfigurationToDeviceUsing = value;
  }
  public resetTrustsecSendConfigurationToDeviceUsing() {
    this._trustsecSendConfigurationToDeviceUsing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trustsecSendConfigurationToDeviceUsingInput() {
    return this._trustsecSendConfigurationToDeviceUsing;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      authentication_dtls_required: cdktf.booleanToTerraform(this._authenticationDtlsRequired),
      authentication_enable_key_wrap: cdktf.booleanToTerraform(this._authenticationEnableKeyWrap),
      authentication_enable_multi_secret: cdktf.booleanToTerraform(this._authenticationEnableMultiSecret),
      authentication_encryption_key: cdktf.stringToTerraform(this._authenticationEncryptionKey),
      authentication_encryption_key_format: cdktf.stringToTerraform(this._authenticationEncryptionKeyFormat),
      authentication_message_authenticator_code_key: cdktf.stringToTerraform(this._authenticationMessageAuthenticatorCodeKey),
      authentication_network_protocol: cdktf.stringToTerraform(this._authenticationNetworkProtocol),
      authentication_radius_shared_secret: cdktf.stringToTerraform(this._authenticationRadiusSharedSecret),
      authentication_second_radius_shared_secret: cdktf.stringToTerraform(this._authenticationSecondRadiusSharedSecret),
      coa_port: cdktf.numberToTerraform(this._coaPort),
      description: cdktf.stringToTerraform(this._description),
      dtls_dns_name: cdktf.stringToTerraform(this._dtlsDnsName),
      ips: cdktf.listMapper(networkDeviceIpsToTerraform, false)(this._ips.internalValue),
      model_name: cdktf.stringToTerraform(this._modelName),
      name: cdktf.stringToTerraform(this._name),
      network_device_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(this._networkDeviceGroups),
      profile_name: cdktf.stringToTerraform(this._profileName),
      snmp_link_trap_query: cdktf.booleanToTerraform(this._snmpLinkTrapQuery),
      snmp_mac_trap_query: cdktf.booleanToTerraform(this._snmpMacTrapQuery),
      snmp_originating_policy_service_node: cdktf.stringToTerraform(this._snmpOriginatingPolicyServiceNode),
      snmp_polling_interval: cdktf.numberToTerraform(this._snmpPollingInterval),
      snmp_ro_community: cdktf.stringToTerraform(this._snmpRoCommunity),
      snmp_version: cdktf.stringToTerraform(this._snmpVersion),
      software_version: cdktf.stringToTerraform(this._softwareVersion),
      tacacs_connect_mode_options: cdktf.stringToTerraform(this._tacacsConnectModeOptions),
      tacacs_shared_secret: cdktf.stringToTerraform(this._tacacsSharedSecret),
      trustsec_coa_source_host: cdktf.stringToTerraform(this._trustsecCoaSourceHost),
      trustsec_device_id: cdktf.stringToTerraform(this._trustsecDeviceId),
      trustsec_device_password: cdktf.stringToTerraform(this._trustsecDevicePassword),
      trustsec_download_environment_data_every_x_seconds: cdktf.numberToTerraform(this._trustsecDownloadEnvironmentDataEveryXSeconds),
      trustsec_download_peer_authorization_policy_every_x_seconds: cdktf.numberToTerraform(this._trustsecDownloadPeerAuthorizationPolicyEveryXSeconds),
      trustsec_download_sgacl_lists_every_x_seconds: cdktf.numberToTerraform(this._trustsecDownloadSgaclListsEveryXSeconds),
      trustsec_enable_mode_password: cdktf.stringToTerraform(this._trustsecEnableModePassword),
      trustsec_exec_mode_password: cdktf.stringToTerraform(this._trustsecExecModePassword),
      trustsec_exec_mode_username: cdktf.stringToTerraform(this._trustsecExecModeUsername),
      trustsec_include_when_deploying_sgt_updates: cdktf.booleanToTerraform(this._trustsecIncludeWhenDeployingSgtUpdates),
      trustsec_other_sga_devices_to_trust_this_device: cdktf.booleanToTerraform(this._trustsecOtherSgaDevicesToTrustThisDevice),
      trustsec_re_authentication_every_x_seconds: cdktf.numberToTerraform(this._trustsecReAuthenticationEveryXSeconds),
      trustsec_rest_api_password: cdktf.stringToTerraform(this._trustsecRestApiPassword),
      trustsec_rest_api_username: cdktf.stringToTerraform(this._trustsecRestApiUsername),
      trustsec_send_configuration_to_device: cdktf.booleanToTerraform(this._trustsecSendConfigurationToDevice),
      trustsec_send_configuration_to_device_using: cdktf.stringToTerraform(this._trustsecSendConfigurationToDeviceUsing),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      authentication_dtls_required: {
        value: cdktf.booleanToHclTerraform(this._authenticationDtlsRequired),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      authentication_enable_key_wrap: {
        value: cdktf.booleanToHclTerraform(this._authenticationEnableKeyWrap),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      authentication_enable_multi_secret: {
        value: cdktf.booleanToHclTerraform(this._authenticationEnableMultiSecret),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      authentication_encryption_key: {
        value: cdktf.stringToHclTerraform(this._authenticationEncryptionKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      authentication_encryption_key_format: {
        value: cdktf.stringToHclTerraform(this._authenticationEncryptionKeyFormat),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      authentication_message_authenticator_code_key: {
        value: cdktf.stringToHclTerraform(this._authenticationMessageAuthenticatorCodeKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      authentication_network_protocol: {
        value: cdktf.stringToHclTerraform(this._authenticationNetworkProtocol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      authentication_radius_shared_secret: {
        value: cdktf.stringToHclTerraform(this._authenticationRadiusSharedSecret),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      authentication_second_radius_shared_secret: {
        value: cdktf.stringToHclTerraform(this._authenticationSecondRadiusSharedSecret),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      coa_port: {
        value: cdktf.numberToHclTerraform(this._coaPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dtls_dns_name: {
        value: cdktf.stringToHclTerraform(this._dtlsDnsName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ips: {
        value: cdktf.listMapperHcl(networkDeviceIpsToHclTerraform, false)(this._ips.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "NetworkDeviceIpsList",
      },
      model_name: {
        value: cdktf.stringToHclTerraform(this._modelName),
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
      network_device_groups: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._networkDeviceGroups),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      profile_name: {
        value: cdktf.stringToHclTerraform(this._profileName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      snmp_link_trap_query: {
        value: cdktf.booleanToHclTerraform(this._snmpLinkTrapQuery),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      snmp_mac_trap_query: {
        value: cdktf.booleanToHclTerraform(this._snmpMacTrapQuery),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      snmp_originating_policy_service_node: {
        value: cdktf.stringToHclTerraform(this._snmpOriginatingPolicyServiceNode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      snmp_polling_interval: {
        value: cdktf.numberToHclTerraform(this._snmpPollingInterval),
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
      snmp_version: {
        value: cdktf.stringToHclTerraform(this._snmpVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      software_version: {
        value: cdktf.stringToHclTerraform(this._softwareVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tacacs_connect_mode_options: {
        value: cdktf.stringToHclTerraform(this._tacacsConnectModeOptions),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tacacs_shared_secret: {
        value: cdktf.stringToHclTerraform(this._tacacsSharedSecret),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      trustsec_coa_source_host: {
        value: cdktf.stringToHclTerraform(this._trustsecCoaSourceHost),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      trustsec_device_id: {
        value: cdktf.stringToHclTerraform(this._trustsecDeviceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      trustsec_device_password: {
        value: cdktf.stringToHclTerraform(this._trustsecDevicePassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      trustsec_download_environment_data_every_x_seconds: {
        value: cdktf.numberToHclTerraform(this._trustsecDownloadEnvironmentDataEveryXSeconds),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      trustsec_download_peer_authorization_policy_every_x_seconds: {
        value: cdktf.numberToHclTerraform(this._trustsecDownloadPeerAuthorizationPolicyEveryXSeconds),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      trustsec_download_sgacl_lists_every_x_seconds: {
        value: cdktf.numberToHclTerraform(this._trustsecDownloadSgaclListsEveryXSeconds),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      trustsec_enable_mode_password: {
        value: cdktf.stringToHclTerraform(this._trustsecEnableModePassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      trustsec_exec_mode_password: {
        value: cdktf.stringToHclTerraform(this._trustsecExecModePassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      trustsec_exec_mode_username: {
        value: cdktf.stringToHclTerraform(this._trustsecExecModeUsername),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      trustsec_include_when_deploying_sgt_updates: {
        value: cdktf.booleanToHclTerraform(this._trustsecIncludeWhenDeployingSgtUpdates),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      trustsec_other_sga_devices_to_trust_this_device: {
        value: cdktf.booleanToHclTerraform(this._trustsecOtherSgaDevicesToTrustThisDevice),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      trustsec_re_authentication_every_x_seconds: {
        value: cdktf.numberToHclTerraform(this._trustsecReAuthenticationEveryXSeconds),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      trustsec_rest_api_password: {
        value: cdktf.stringToHclTerraform(this._trustsecRestApiPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      trustsec_rest_api_username: {
        value: cdktf.stringToHclTerraform(this._trustsecRestApiUsername),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      trustsec_send_configuration_to_device: {
        value: cdktf.booleanToHclTerraform(this._trustsecSendConfigurationToDevice),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      trustsec_send_configuration_to_device_using: {
        value: cdktf.stringToHclTerraform(this._trustsecSendConfigurationToDeviceUsing),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
