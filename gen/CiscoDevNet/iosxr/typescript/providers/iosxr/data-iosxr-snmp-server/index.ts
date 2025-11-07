// https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/data-sources/snmp_server
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataIosxrSnmpServerConfig extends cdktf.TerraformMetaArguments {
  /**
  * A device name from the provider configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/data-sources/snmp_server#device DataIosxrSnmpServer#device}
  */
  readonly device?: string;
}
export interface DataIosxrSnmpServerCommunities {
}

export function dataIosxrSnmpServerCommunitiesToTerraform(struct?: DataIosxrSnmpServerCommunities): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIosxrSnmpServerCommunitiesToHclTerraform(struct?: DataIosxrSnmpServerCommunities): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIosxrSnmpServerCommunitiesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIosxrSnmpServerCommunities | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIosxrSnmpServerCommunities | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // community - computed: true, optional: false, required: false
  public get community() {
    return this.getStringAttribute('community');
  }

  // ipv4 - computed: true, optional: false, required: false
  public get ipv4() {
    return this.getStringAttribute('ipv4');
  }

  // ipv6 - computed: true, optional: false, required: false
  public get ipv6() {
    return this.getStringAttribute('ipv6');
  }

  // ro - computed: true, optional: false, required: false
  public get ro() {
    return this.getBooleanAttribute('ro');
  }

  // rw - computed: true, optional: false, required: false
  public get rw() {
    return this.getBooleanAttribute('rw');
  }

  // sdrowner - computed: true, optional: false, required: false
  public get sdrowner() {
    return this.getBooleanAttribute('sdrowner');
  }

  // systemowner - computed: true, optional: false, required: false
  public get systemowner() {
    return this.getBooleanAttribute('systemowner');
  }

  // view - computed: true, optional: false, required: false
  public get view() {
    return this.getStringAttribute('view');
  }
}

export class DataIosxrSnmpServerCommunitiesList extends cdktf.ComplexList {

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
  public get(index: number): DataIosxrSnmpServerCommunitiesOutputReference {
    return new DataIosxrSnmpServerCommunitiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIosxrSnmpServerGroups {
}

export function dataIosxrSnmpServerGroupsToTerraform(struct?: DataIosxrSnmpServerGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIosxrSnmpServerGroupsToHclTerraform(struct?: DataIosxrSnmpServerGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIosxrSnmpServerGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIosxrSnmpServerGroups | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIosxrSnmpServerGroups | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // group_name - computed: true, optional: false, required: false
  public get groupName() {
    return this.getStringAttribute('group_name');
  }

  // v3_context - computed: true, optional: false, required: false
  public get v3Context() {
    return this.getStringAttribute('v3_context');
  }

  // v3_ipv4 - computed: true, optional: false, required: false
  public get v3Ipv4() {
    return this.getStringAttribute('v3_ipv4');
  }

  // v3_ipv6 - computed: true, optional: false, required: false
  public get v3Ipv6() {
    return this.getStringAttribute('v3_ipv6');
  }

  // v3_notify - computed: true, optional: false, required: false
  public get v3Notify() {
    return this.getStringAttribute('v3_notify');
  }

  // v3_priv - computed: true, optional: false, required: false
  public get v3Priv() {
    return this.getBooleanAttribute('v3_priv');
  }

  // v3_read - computed: true, optional: false, required: false
  public get v3Read() {
    return this.getStringAttribute('v3_read');
  }

  // v3_write - computed: true, optional: false, required: false
  public get v3Write() {
    return this.getStringAttribute('v3_write');
  }
}

export class DataIosxrSnmpServerGroupsList extends cdktf.ComplexList {

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
  public get(index: number): DataIosxrSnmpServerGroupsOutputReference {
    return new DataIosxrSnmpServerGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIosxrSnmpServerUsers {
}

export function dataIosxrSnmpServerUsersToTerraform(struct?: DataIosxrSnmpServerUsers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIosxrSnmpServerUsersToHclTerraform(struct?: DataIosxrSnmpServerUsers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIosxrSnmpServerUsersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataIosxrSnmpServerUsers | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIosxrSnmpServerUsers | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // group_name - computed: true, optional: false, required: false
  public get groupName() {
    return this.getStringAttribute('group_name');
  }

  // user_name - computed: true, optional: false, required: false
  public get userName() {
    return this.getStringAttribute('user_name');
  }

  // v3_auth_md5_encryption_aes - computed: true, optional: false, required: false
  public get v3AuthMd5EncryptionAes() {
    return this.getStringAttribute('v3_auth_md5_encryption_aes');
  }

  // v3_auth_md5_encryption_default - computed: true, optional: false, required: false
  public get v3AuthMd5EncryptionDefault() {
    return this.getStringAttribute('v3_auth_md5_encryption_default');
  }

  // v3_auth_sha_encryption_aes - computed: true, optional: false, required: false
  public get v3AuthShaEncryptionAes() {
    return this.getStringAttribute('v3_auth_sha_encryption_aes');
  }

  // v3_auth_sha_encryption_default - computed: true, optional: false, required: false
  public get v3AuthShaEncryptionDefault() {
    return this.getStringAttribute('v3_auth_sha_encryption_default');
  }

  // v3_ipv4 - computed: true, optional: false, required: false
  public get v3Ipv4() {
    return this.getStringAttribute('v3_ipv4');
  }

  // v3_priv_aes_aes_128_encryption_aes - computed: true, optional: false, required: false
  public get v3PrivAesAes128EncryptionAes() {
    return this.getStringAttribute('v3_priv_aes_aes_128_encryption_aes');
  }

  // v3_priv_aes_aes_128_encryption_default - computed: true, optional: false, required: false
  public get v3PrivAesAes128EncryptionDefault() {
    return this.getStringAttribute('v3_priv_aes_aes_128_encryption_default');
  }

  // v3_systemowner - computed: true, optional: false, required: false
  public get v3Systemowner() {
    return this.getBooleanAttribute('v3_systemowner');
  }
}

export class DataIosxrSnmpServerUsersList extends cdktf.ComplexList {

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
  public get(index: number): DataIosxrSnmpServerUsersOutputReference {
    return new DataIosxrSnmpServerUsersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/data-sources/snmp_server iosxr_snmp_server}
*/
export class DataIosxrSnmpServer extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "iosxr_snmp_server";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataIosxrSnmpServer resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataIosxrSnmpServer to import
  * @param importFromId The id of the existing DataIosxrSnmpServer that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/data-sources/snmp_server#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataIosxrSnmpServer to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "iosxr_snmp_server", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/data-sources/snmp_server iosxr_snmp_server} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataIosxrSnmpServerConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataIosxrSnmpServerConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'iosxr_snmp_server',
      terraformGeneratorMetadata: {
        providerName: 'iosxr',
        providerVersion: '0.6.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._device = config.device;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // communities - computed: true, optional: false, required: false
  private _communities = new DataIosxrSnmpServerCommunitiesList(this, "communities", false);
  public get communities() {
    return this._communities;
  }

  // contact - computed: true, optional: false, required: false
  public get contact() {
    return this.getStringAttribute('contact');
  }

  // device - computed: false, optional: true, required: false
  private _device?: string; 
  public get device() {
    return this.getStringAttribute('device');
  }
  public set device(value: string) {
    this._device = value;
  }
  public resetDevice() {
    this._device = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceInput() {
    return this._device;
  }

  // groups - computed: true, optional: false, required: false
  private _groups = new DataIosxrSnmpServerGroupsList(this, "groups", false);
  public get groups() {
    return this._groups;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // location - computed: true, optional: false, required: false
  public get location() {
    return this.getStringAttribute('location');
  }

  // trap_source - computed: true, optional: false, required: false
  public get trapSource() {
    return this.getStringAttribute('trap_source');
  }

  // traps_bfd - computed: true, optional: false, required: false
  public get trapsBfd() {
    return this.getBooleanAttribute('traps_bfd');
  }

  // traps_bgp_cbgp_two_enable - computed: true, optional: false, required: false
  public get trapsBgpCbgpTwoEnable() {
    return this.getBooleanAttribute('traps_bgp_cbgp_two_enable');
  }

  // traps_bgp_cbgp_two_updown - computed: true, optional: false, required: false
  public get trapsBgpCbgpTwoUpdown() {
    return this.getBooleanAttribute('traps_bgp_cbgp_two_updown');
  }

  // traps_bgp_enable_cisco_bgp4_mib - computed: true, optional: false, required: false
  public get trapsBgpEnableCiscoBgp4Mib() {
    return this.getBooleanAttribute('traps_bgp_enable_cisco_bgp4_mib');
  }

  // traps_bgp_enable_updown - computed: true, optional: false, required: false
  public get trapsBgpEnableUpdown() {
    return this.getBooleanAttribute('traps_bgp_enable_updown');
  }

  // traps_bridgemib - computed: true, optional: false, required: false
  public get trapsBridgemib() {
    return this.getBooleanAttribute('traps_bridgemib');
  }

  // traps_config - computed: true, optional: false, required: false
  public get trapsConfig() {
    return this.getBooleanAttribute('traps_config');
  }

  // traps_copy_complete - computed: true, optional: false, required: false
  public get trapsCopyComplete() {
    return this.getBooleanAttribute('traps_copy_complete');
  }

  // traps_entity - computed: true, optional: false, required: false
  public get trapsEntity() {
    return this.getBooleanAttribute('traps_entity');
  }

  // traps_entity_redundancy_all - computed: true, optional: false, required: false
  public get trapsEntityRedundancyAll() {
    return this.getBooleanAttribute('traps_entity_redundancy_all');
  }

  // traps_entity_state_operstatus - computed: true, optional: false, required: false
  public get trapsEntityStateOperstatus() {
    return this.getBooleanAttribute('traps_entity_state_operstatus');
  }

  // traps_ethernet_oam_events - computed: true, optional: false, required: false
  public get trapsEthernetOamEvents() {
    return this.getBooleanAttribute('traps_ethernet_oam_events');
  }

  // traps_fru_ctrl - computed: true, optional: false, required: false
  public get trapsFruCtrl() {
    return this.getBooleanAttribute('traps_fru_ctrl');
  }

  // traps_isis_adjacency_change - computed: true, optional: false, required: false
  public get trapsIsisAdjacencyChange() {
    return this.getBooleanAttribute('traps_isis_adjacency_change');
  }

  // traps_isis_all - computed: true, optional: false, required: false
  public get trapsIsisAll() {
    return this.getBooleanAttribute('traps_isis_all');
  }

  // traps_isis_area_mismatch - computed: true, optional: false, required: false
  public get trapsIsisAreaMismatch() {
    return this.getBooleanAttribute('traps_isis_area_mismatch');
  }

  // traps_isis_attempt_to_exceed_max_sequence - computed: true, optional: false, required: false
  public get trapsIsisAttemptToExceedMaxSequence() {
    return this.getBooleanAttribute('traps_isis_attempt_to_exceed_max_sequence');
  }

  // traps_isis_authentication_failure - computed: true, optional: false, required: false
  public get trapsIsisAuthenticationFailure() {
    return this.getBooleanAttribute('traps_isis_authentication_failure');
  }

  // traps_isis_authentication_type_failure - computed: true, optional: false, required: false
  public get trapsIsisAuthenticationTypeFailure() {
    return this.getBooleanAttribute('traps_isis_authentication_type_failure');
  }

  // traps_isis_corrupted_lsp_detected - computed: true, optional: false, required: false
  public get trapsIsisCorruptedLspDetected() {
    return this.getBooleanAttribute('traps_isis_corrupted_lsp_detected');
  }

  // traps_isis_database_overload - computed: true, optional: false, required: false
  public get trapsIsisDatabaseOverload() {
    return this.getBooleanAttribute('traps_isis_database_overload');
  }

  // traps_isis_id_len_mismatch - computed: true, optional: false, required: false
  public get trapsIsisIdLenMismatch() {
    return this.getBooleanAttribute('traps_isis_id_len_mismatch');
  }

  // traps_isis_lsp_error_detected - computed: true, optional: false, required: false
  public get trapsIsisLspErrorDetected() {
    return this.getBooleanAttribute('traps_isis_lsp_error_detected');
  }

  // traps_isis_lsp_too_large_to_propagate - computed: true, optional: false, required: false
  public get trapsIsisLspTooLargeToPropagate() {
    return this.getBooleanAttribute('traps_isis_lsp_too_large_to_propagate');
  }

  // traps_isis_manual_address_drops - computed: true, optional: false, required: false
  public get trapsIsisManualAddressDrops() {
    return this.getBooleanAttribute('traps_isis_manual_address_drops');
  }

  // traps_isis_max_area_addresses_mismatch - computed: true, optional: false, required: false
  public get trapsIsisMaxAreaAddressesMismatch() {
    return this.getBooleanAttribute('traps_isis_max_area_addresses_mismatch');
  }

  // traps_isis_orig_lsp_buff_size_mismatch - computed: true, optional: false, required: false
  public get trapsIsisOrigLspBuffSizeMismatch() {
    return this.getBooleanAttribute('traps_isis_orig_lsp_buff_size_mismatch');
  }

  // traps_isis_own_lsp_purge - computed: true, optional: false, required: false
  public get trapsIsisOwnLspPurge() {
    return this.getBooleanAttribute('traps_isis_own_lsp_purge');
  }

  // traps_isis_protocols_supported_mismatch - computed: true, optional: false, required: false
  public get trapsIsisProtocolsSupportedMismatch() {
    return this.getBooleanAttribute('traps_isis_protocols_supported_mismatch');
  }

  // traps_isis_rejected_adjacency - computed: true, optional: false, required: false
  public get trapsIsisRejectedAdjacency() {
    return this.getBooleanAttribute('traps_isis_rejected_adjacency');
  }

  // traps_isis_sequence_number_skip - computed: true, optional: false, required: false
  public get trapsIsisSequenceNumberSkip() {
    return this.getBooleanAttribute('traps_isis_sequence_number_skip');
  }

  // traps_isis_version_skew - computed: true, optional: false, required: false
  public get trapsIsisVersionSkew() {
    return this.getBooleanAttribute('traps_isis_version_skew');
  }

  // traps_l2vpn_all - computed: true, optional: false, required: false
  public get trapsL2VpnAll() {
    return this.getBooleanAttribute('traps_l2vpn_all');
  }

  // traps_l2vpn_vc_down - computed: true, optional: false, required: false
  public get trapsL2VpnVcDown() {
    return this.getBooleanAttribute('traps_l2vpn_vc_down');
  }

  // traps_l2vpn_vc_up - computed: true, optional: false, required: false
  public get trapsL2VpnVcUp() {
    return this.getBooleanAttribute('traps_l2vpn_vc_up');
  }

  // traps_ntp - computed: true, optional: false, required: false
  public get trapsNtp() {
    return this.getBooleanAttribute('traps_ntp');
  }

  // traps_power - computed: true, optional: false, required: false
  public get trapsPower() {
    return this.getBooleanAttribute('traps_power');
  }

  // traps_rf - computed: true, optional: false, required: false
  public get trapsRf() {
    return this.getBooleanAttribute('traps_rf');
  }

  // traps_sensor - computed: true, optional: false, required: false
  public get trapsSensor() {
    return this.getBooleanAttribute('traps_sensor');
  }

  // traps_snmp_linkdown - computed: true, optional: false, required: false
  public get trapsSnmpLinkdown() {
    return this.getBooleanAttribute('traps_snmp_linkdown');
  }

  // traps_snmp_linkup - computed: true, optional: false, required: false
  public get trapsSnmpLinkup() {
    return this.getBooleanAttribute('traps_snmp_linkup');
  }

  // traps_system - computed: true, optional: false, required: false
  public get trapsSystem() {
    return this.getBooleanAttribute('traps_system');
  }

  // users - computed: true, optional: false, required: false
  private _users = new DataIosxrSnmpServerUsersList(this, "users", false);
  public get users() {
    return this._users;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      device: cdktf.stringToTerraform(this._device),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      device: {
        value: cdktf.stringToHclTerraform(this._device),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
