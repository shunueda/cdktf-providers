// https://registry.terraform.io/providers/ciscodevnet/ise/0.2.12/docs/data-sources/network_device
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataIseNetworkDeviceConfig extends cdktf.TerraformMetaArguments {
  /**
  * The id of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.12/docs/data-sources/network_device#id DataIseNetworkDevice#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the network device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.12/docs/data-sources/network_device#name DataIseNetworkDevice#name}
  */
  readonly name?: string;
}
export interface DataIseNetworkDeviceIps {
}

export function dataIseNetworkDeviceIpsToTerraform(struct?: DataIseNetworkDeviceIps): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIseNetworkDeviceIpsToHclTerraform(struct?: DataIseNetworkDeviceIps): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIseNetworkDeviceIpsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataIseNetworkDeviceIps | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIseNetworkDeviceIps | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ipaddress - computed: true, optional: false, required: false
  public get ipaddress() {
    return this.getStringAttribute('ipaddress');
  }

  // ipaddress_exclude - computed: true, optional: false, required: false
  public get ipaddressExclude() {
    return this.getStringAttribute('ipaddress_exclude');
  }

  // mask - computed: true, optional: false, required: false
  public get mask() {
    return this.getStringAttribute('mask');
  }
}

export class DataIseNetworkDeviceIpsList extends cdktf.ComplexList {

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
  public get(index: number): DataIseNetworkDeviceIpsOutputReference {
    return new DataIseNetworkDeviceIpsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.12/docs/data-sources/network_device ise_network_device}
*/
export class DataIseNetworkDevice extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ise_network_device";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataIseNetworkDevice resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataIseNetworkDevice to import
  * @param importFromId The id of the existing DataIseNetworkDevice that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.12/docs/data-sources/network_device#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataIseNetworkDevice to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ise_network_device", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.12/docs/data-sources/network_device ise_network_device} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataIseNetworkDeviceConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataIseNetworkDeviceConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'ise_network_device',
      terraformGeneratorMetadata: {
        providerName: 'ise',
        providerVersion: '0.2.12'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // authentication_dtls_required - computed: true, optional: false, required: false
  public get authenticationDtlsRequired() {
    return this.getBooleanAttribute('authentication_dtls_required');
  }

  // authentication_enable_key_wrap - computed: true, optional: false, required: false
  public get authenticationEnableKeyWrap() {
    return this.getBooleanAttribute('authentication_enable_key_wrap');
  }

  // authentication_enable_multi_secret - computed: true, optional: false, required: false
  public get authenticationEnableMultiSecret() {
    return this.getBooleanAttribute('authentication_enable_multi_secret');
  }

  // authentication_encryption_key - computed: true, optional: false, required: false
  public get authenticationEncryptionKey() {
    return this.getStringAttribute('authentication_encryption_key');
  }

  // authentication_encryption_key_format - computed: true, optional: false, required: false
  public get authenticationEncryptionKeyFormat() {
    return this.getStringAttribute('authentication_encryption_key_format');
  }

  // authentication_message_authenticator_code_key - computed: true, optional: false, required: false
  public get authenticationMessageAuthenticatorCodeKey() {
    return this.getStringAttribute('authentication_message_authenticator_code_key');
  }

  // authentication_network_protocol - computed: true, optional: false, required: false
  public get authenticationNetworkProtocol() {
    return this.getStringAttribute('authentication_network_protocol');
  }

  // authentication_radius_shared_secret - computed: true, optional: false, required: false
  public get authenticationRadiusSharedSecret() {
    return this.getStringAttribute('authentication_radius_shared_secret');
  }

  // authentication_second_radius_shared_secret - computed: true, optional: false, required: false
  public get authenticationSecondRadiusSharedSecret() {
    return this.getStringAttribute('authentication_second_radius_shared_secret');
  }

  // coa_port - computed: true, optional: false, required: false
  public get coaPort() {
    return this.getNumberAttribute('coa_port');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // dtls_dns_name - computed: true, optional: false, required: false
  public get dtlsDnsName() {
    return this.getStringAttribute('dtls_dns_name');
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

  // ips - computed: true, optional: false, required: false
  private _ips = new DataIseNetworkDeviceIpsList(this, "ips", false);
  public get ips() {
    return this._ips;
  }

  // model_name - computed: true, optional: false, required: false
  public get modelName() {
    return this.getStringAttribute('model_name');
  }

  // name - computed: true, optional: true, required: false
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

  // network_device_groups - computed: true, optional: false, required: false
  public get networkDeviceGroups() {
    return cdktf.Fn.tolist(this.getListAttribute('network_device_groups'));
  }

  // profile_name - computed: true, optional: false, required: false
  public get profileName() {
    return this.getStringAttribute('profile_name');
  }

  // snmp_link_trap_query - computed: true, optional: false, required: false
  public get snmpLinkTrapQuery() {
    return this.getBooleanAttribute('snmp_link_trap_query');
  }

  // snmp_mac_trap_query - computed: true, optional: false, required: false
  public get snmpMacTrapQuery() {
    return this.getBooleanAttribute('snmp_mac_trap_query');
  }

  // snmp_originating_policy_service_node - computed: true, optional: false, required: false
  public get snmpOriginatingPolicyServiceNode() {
    return this.getStringAttribute('snmp_originating_policy_service_node');
  }

  // snmp_polling_interval - computed: true, optional: false, required: false
  public get snmpPollingInterval() {
    return this.getNumberAttribute('snmp_polling_interval');
  }

  // snmp_ro_community - computed: true, optional: false, required: false
  public get snmpRoCommunity() {
    return this.getStringAttribute('snmp_ro_community');
  }

  // snmp_version - computed: true, optional: false, required: false
  public get snmpVersion() {
    return this.getStringAttribute('snmp_version');
  }

  // software_version - computed: true, optional: false, required: false
  public get softwareVersion() {
    return this.getStringAttribute('software_version');
  }

  // tacacs_connect_mode_options - computed: true, optional: false, required: false
  public get tacacsConnectModeOptions() {
    return this.getStringAttribute('tacacs_connect_mode_options');
  }

  // tacacs_shared_secret - computed: true, optional: false, required: false
  public get tacacsSharedSecret() {
    return this.getStringAttribute('tacacs_shared_secret');
  }

  // trustsec_coa_source_host - computed: true, optional: false, required: false
  public get trustsecCoaSourceHost() {
    return this.getStringAttribute('trustsec_coa_source_host');
  }

  // trustsec_device_id - computed: true, optional: false, required: false
  public get trustsecDeviceId() {
    return this.getStringAttribute('trustsec_device_id');
  }

  // trustsec_device_password - computed: true, optional: false, required: false
  public get trustsecDevicePassword() {
    return this.getStringAttribute('trustsec_device_password');
  }

  // trustsec_download_environment_data_every_x_seconds - computed: true, optional: false, required: false
  public get trustsecDownloadEnvironmentDataEveryXSeconds() {
    return this.getNumberAttribute('trustsec_download_environment_data_every_x_seconds');
  }

  // trustsec_download_peer_authorization_policy_every_x_seconds - computed: true, optional: false, required: false
  public get trustsecDownloadPeerAuthorizationPolicyEveryXSeconds() {
    return this.getNumberAttribute('trustsec_download_peer_authorization_policy_every_x_seconds');
  }

  // trustsec_download_sgacl_lists_every_x_seconds - computed: true, optional: false, required: false
  public get trustsecDownloadSgaclListsEveryXSeconds() {
    return this.getNumberAttribute('trustsec_download_sgacl_lists_every_x_seconds');
  }

  // trustsec_enable_mode_password - computed: true, optional: false, required: false
  public get trustsecEnableModePassword() {
    return this.getStringAttribute('trustsec_enable_mode_password');
  }

  // trustsec_exec_mode_password - computed: true, optional: false, required: false
  public get trustsecExecModePassword() {
    return this.getStringAttribute('trustsec_exec_mode_password');
  }

  // trustsec_exec_mode_username - computed: true, optional: false, required: false
  public get trustsecExecModeUsername() {
    return this.getStringAttribute('trustsec_exec_mode_username');
  }

  // trustsec_include_when_deploying_sgt_updates - computed: true, optional: false, required: false
  public get trustsecIncludeWhenDeployingSgtUpdates() {
    return this.getBooleanAttribute('trustsec_include_when_deploying_sgt_updates');
  }

  // trustsec_other_sga_devices_to_trust_this_device - computed: true, optional: false, required: false
  public get trustsecOtherSgaDevicesToTrustThisDevice() {
    return this.getBooleanAttribute('trustsec_other_sga_devices_to_trust_this_device');
  }

  // trustsec_re_authentication_every_x_seconds - computed: true, optional: false, required: false
  public get trustsecReAuthenticationEveryXSeconds() {
    return this.getNumberAttribute('trustsec_re_authentication_every_x_seconds');
  }

  // trustsec_rest_api_password - computed: true, optional: false, required: false
  public get trustsecRestApiPassword() {
    return this.getStringAttribute('trustsec_rest_api_password');
  }

  // trustsec_rest_api_username - computed: true, optional: false, required: false
  public get trustsecRestApiUsername() {
    return this.getStringAttribute('trustsec_rest_api_username');
  }

  // trustsec_send_configuration_to_device - computed: true, optional: false, required: false
  public get trustsecSendConfigurationToDevice() {
    return this.getBooleanAttribute('trustsec_send_configuration_to_device');
  }

  // trustsec_send_configuration_to_device_using - computed: true, optional: false, required: false
  public get trustsecSendConfigurationToDeviceUsing() {
    return this.getStringAttribute('trustsec_send_configuration_to_device_using');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
