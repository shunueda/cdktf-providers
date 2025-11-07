// https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/data-sources/wireless_ssid
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataMerakiWirelessSsidConfig extends cdktf.TerraformMetaArguments {
  /**
  * Network ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/data-sources/wireless_ssid#network_id DataMerakiWirelessSsid#network_id}
  */
  readonly networkId: string;
  /**
  * Wireless SSID number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/data-sources/wireless_ssid#number DataMerakiWirelessSsid#number}
  */
  readonly number: string;
}
export interface DataMerakiWirelessSsidActiveDirectoryServers {
}

export function dataMerakiWirelessSsidActiveDirectoryServersToTerraform(struct?: DataMerakiWirelessSsidActiveDirectoryServers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMerakiWirelessSsidActiveDirectoryServersToHclTerraform(struct?: DataMerakiWirelessSsidActiveDirectoryServers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMerakiWirelessSsidActiveDirectoryServersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataMerakiWirelessSsidActiveDirectoryServers | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMerakiWirelessSsidActiveDirectoryServers | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // host - computed: true, optional: false, required: false
  public get host() {
    return this.getStringAttribute('host');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }
}

export class DataMerakiWirelessSsidActiveDirectoryServersList extends cdktf.ComplexList {

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
  public get(index: number): DataMerakiWirelessSsidActiveDirectoryServersOutputReference {
    return new DataMerakiWirelessSsidActiveDirectoryServersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataMerakiWirelessSsidApTagsAndVlanIds {
}

export function dataMerakiWirelessSsidApTagsAndVlanIdsToTerraform(struct?: DataMerakiWirelessSsidApTagsAndVlanIds): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMerakiWirelessSsidApTagsAndVlanIdsToHclTerraform(struct?: DataMerakiWirelessSsidApTagsAndVlanIds): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMerakiWirelessSsidApTagsAndVlanIdsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataMerakiWirelessSsidApTagsAndVlanIds | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMerakiWirelessSsidApTagsAndVlanIds | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // tags - computed: true, optional: false, required: false
  public get tags() {
    return cdktf.Fn.tolist(this.getListAttribute('tags'));
  }

  // vlan_id - computed: true, optional: false, required: false
  public get vlanId() {
    return this.getNumberAttribute('vlan_id');
  }
}

export class DataMerakiWirelessSsidApTagsAndVlanIdsList extends cdktf.ComplexList {

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
  public get(index: number): DataMerakiWirelessSsidApTagsAndVlanIdsOutputReference {
    return new DataMerakiWirelessSsidApTagsAndVlanIdsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataMerakiWirelessSsidLdapServers {
}

export function dataMerakiWirelessSsidLdapServersToTerraform(struct?: DataMerakiWirelessSsidLdapServers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMerakiWirelessSsidLdapServersToHclTerraform(struct?: DataMerakiWirelessSsidLdapServers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMerakiWirelessSsidLdapServersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataMerakiWirelessSsidLdapServers | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMerakiWirelessSsidLdapServers | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // host - computed: true, optional: false, required: false
  public get host() {
    return this.getStringAttribute('host');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }
}

export class DataMerakiWirelessSsidLdapServersList extends cdktf.ComplexList {

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
  public get(index: number): DataMerakiWirelessSsidLdapServersOutputReference {
    return new DataMerakiWirelessSsidLdapServersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataMerakiWirelessSsidNamedVlansTaggingByApTags {
}

export function dataMerakiWirelessSsidNamedVlansTaggingByApTagsToTerraform(struct?: DataMerakiWirelessSsidNamedVlansTaggingByApTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMerakiWirelessSsidNamedVlansTaggingByApTagsToHclTerraform(struct?: DataMerakiWirelessSsidNamedVlansTaggingByApTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMerakiWirelessSsidNamedVlansTaggingByApTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataMerakiWirelessSsidNamedVlansTaggingByApTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMerakiWirelessSsidNamedVlansTaggingByApTags | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // tags - computed: true, optional: false, required: false
  public get tags() {
    return cdktf.Fn.tolist(this.getListAttribute('tags'));
  }

  // vlan_name - computed: true, optional: false, required: false
  public get vlanName() {
    return this.getStringAttribute('vlan_name');
  }
}

export class DataMerakiWirelessSsidNamedVlansTaggingByApTagsList extends cdktf.ComplexList {

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
  public get(index: number): DataMerakiWirelessSsidNamedVlansTaggingByApTagsOutputReference {
    return new DataMerakiWirelessSsidNamedVlansTaggingByApTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataMerakiWirelessSsidRadiusAccountingServers {
}

export function dataMerakiWirelessSsidRadiusAccountingServersToTerraform(struct?: DataMerakiWirelessSsidRadiusAccountingServers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMerakiWirelessSsidRadiusAccountingServersToHclTerraform(struct?: DataMerakiWirelessSsidRadiusAccountingServers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMerakiWirelessSsidRadiusAccountingServersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataMerakiWirelessSsidRadiusAccountingServers | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMerakiWirelessSsidRadiusAccountingServers | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ca_certificate - computed: true, optional: false, required: false
  public get caCertificate() {
    return this.getStringAttribute('ca_certificate');
  }

  // host - computed: true, optional: false, required: false
  public get host() {
    return this.getStringAttribute('host');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }

  // radsec_enabled - computed: true, optional: false, required: false
  public get radsecEnabled() {
    return this.getBooleanAttribute('radsec_enabled');
  }

  // secret - computed: true, optional: false, required: false
  public get secret() {
    return this.getStringAttribute('secret');
  }
}

export class DataMerakiWirelessSsidRadiusAccountingServersList extends cdktf.ComplexList {

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
  public get(index: number): DataMerakiWirelessSsidRadiusAccountingServersOutputReference {
    return new DataMerakiWirelessSsidRadiusAccountingServersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataMerakiWirelessSsidRadiusServers {
}

export function dataMerakiWirelessSsidRadiusServersToTerraform(struct?: DataMerakiWirelessSsidRadiusServers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMerakiWirelessSsidRadiusServersToHclTerraform(struct?: DataMerakiWirelessSsidRadiusServers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMerakiWirelessSsidRadiusServersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataMerakiWirelessSsidRadiusServers | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMerakiWirelessSsidRadiusServers | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ca_certificate - computed: true, optional: false, required: false
  public get caCertificate() {
    return this.getStringAttribute('ca_certificate');
  }

  // host - computed: true, optional: false, required: false
  public get host() {
    return this.getStringAttribute('host');
  }

  // open_roaming_certificate_id - computed: true, optional: false, required: false
  public get openRoamingCertificateId() {
    return this.getNumberAttribute('open_roaming_certificate_id');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }

  // radsec_enabled - computed: true, optional: false, required: false
  public get radsecEnabled() {
    return this.getBooleanAttribute('radsec_enabled');
  }

  // secret - computed: true, optional: false, required: false
  public get secret() {
    return this.getStringAttribute('secret');
  }
}

export class DataMerakiWirelessSsidRadiusServersList extends cdktf.ComplexList {

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
  public get(index: number): DataMerakiWirelessSsidRadiusServersOutputReference {
    return new DataMerakiWirelessSsidRadiusServersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/data-sources/wireless_ssid meraki_wireless_ssid}
*/
export class DataMerakiWirelessSsid extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "meraki_wireless_ssid";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataMerakiWirelessSsid resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataMerakiWirelessSsid to import
  * @param importFromId The id of the existing DataMerakiWirelessSsid that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/data-sources/wireless_ssid#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataMerakiWirelessSsid to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "meraki_wireless_ssid", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/data-sources/wireless_ssid meraki_wireless_ssid} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataMerakiWirelessSsidConfig
  */
  public constructor(scope: Construct, id: string, config: DataMerakiWirelessSsidConfig) {
    super(scope, id, {
      terraformResourceType: 'meraki_wireless_ssid',
      terraformGeneratorMetadata: {
        providerName: 'meraki',
        providerVersion: '1.7.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._networkId = config.networkId;
    this._number = config.number;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // active_directory_credentials_logon_name - computed: true, optional: false, required: false
  public get activeDirectoryCredentialsLogonName() {
    return this.getStringAttribute('active_directory_credentials_logon_name');
  }

  // active_directory_credentials_password - computed: true, optional: false, required: false
  public get activeDirectoryCredentialsPassword() {
    return this.getStringAttribute('active_directory_credentials_password');
  }

  // active_directory_servers - computed: true, optional: false, required: false
  private _activeDirectoryServers = new DataMerakiWirelessSsidActiveDirectoryServersList(this, "active_directory_servers", false);
  public get activeDirectoryServers() {
    return this._activeDirectoryServers;
  }

  // adaptive_policy_group_id - computed: true, optional: false, required: false
  public get adaptivePolicyGroupId() {
    return this.getStringAttribute('adaptive_policy_group_id');
  }

  // adult_content_filtering_enabled - computed: true, optional: false, required: false
  public get adultContentFilteringEnabled() {
    return this.getBooleanAttribute('adult_content_filtering_enabled');
  }

  // ap_tags_and_vlan_ids - computed: true, optional: false, required: false
  private _apTagsAndVlanIds = new DataMerakiWirelessSsidApTagsAndVlanIdsList(this, "ap_tags_and_vlan_ids", false);
  public get apTagsAndVlanIds() {
    return this._apTagsAndVlanIds;
  }

  // auth_mode - computed: true, optional: false, required: false
  public get authMode() {
    return this.getStringAttribute('auth_mode');
  }

  // availability_tags - computed: true, optional: false, required: false
  public get availabilityTags() {
    return cdktf.Fn.tolist(this.getListAttribute('availability_tags'));
  }

  // available_on_all_aps - computed: true, optional: false, required: false
  public get availableOnAllAps() {
    return this.getBooleanAttribute('available_on_all_aps');
  }

  // band_selection - computed: true, optional: false, required: false
  public get bandSelection() {
    return this.getStringAttribute('band_selection');
  }

  // concentrator_network_id - computed: true, optional: false, required: false
  public get concentratorNetworkId() {
    return this.getStringAttribute('concentrator_network_id');
  }

  // default_vlan_id - computed: true, optional: false, required: false
  public get defaultVlanId() {
    return this.getNumberAttribute('default_vlan_id');
  }

  // disassociate_clients_on_vpn_failover - computed: true, optional: false, required: false
  public get disassociateClientsOnVpnFailover() {
    return this.getBooleanAttribute('disassociate_clients_on_vpn_failover');
  }

  // dns_rewrite_dns_custom_nameservers - computed: true, optional: false, required: false
  public get dnsRewriteDnsCustomNameservers() {
    return this.getListAttribute('dns_rewrite_dns_custom_nameservers');
  }

  // dns_rewrite_enabled - computed: true, optional: false, required: false
  public get dnsRewriteEnabled() {
    return this.getBooleanAttribute('dns_rewrite_enabled');
  }

  // dot11r_adaptive - computed: true, optional: false, required: false
  public get dot11RAdaptive() {
    return this.getBooleanAttribute('dot11r_adaptive');
  }

  // dot11r_enabled - computed: true, optional: false, required: false
  public get dot11REnabled() {
    return this.getBooleanAttribute('dot11r_enabled');
  }

  // dot11w_enabled - computed: true, optional: false, required: false
  public get dot11WEnabled() {
    return this.getBooleanAttribute('dot11w_enabled');
  }

  // dot11w_required - computed: true, optional: false, required: false
  public get dot11WRequired() {
    return this.getBooleanAttribute('dot11w_required');
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // encryption_mode - computed: true, optional: false, required: false
  public get encryptionMode() {
    return this.getStringAttribute('encryption_mode');
  }

  // enterprise_admin_access - computed: true, optional: false, required: false
  public get enterpriseAdminAccess() {
    return this.getStringAttribute('enterprise_admin_access');
  }

  // gre_concentrator_host - computed: true, optional: false, required: false
  public get greConcentratorHost() {
    return this.getStringAttribute('gre_concentrator_host');
  }

  // gre_key - computed: true, optional: false, required: false
  public get greKey() {
    return this.getNumberAttribute('gre_key');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ip_assignment_mode - computed: true, optional: false, required: false
  public get ipAssignmentMode() {
    return this.getStringAttribute('ip_assignment_mode');
  }

  // lan_isolation_enabled - computed: true, optional: false, required: false
  public get lanIsolationEnabled() {
    return this.getBooleanAttribute('lan_isolation_enabled');
  }

  // ldap_base_distinguished_name - computed: true, optional: false, required: false
  public get ldapBaseDistinguishedName() {
    return this.getStringAttribute('ldap_base_distinguished_name');
  }

  // ldap_credentials_distinguished_name - computed: true, optional: false, required: false
  public get ldapCredentialsDistinguishedName() {
    return this.getStringAttribute('ldap_credentials_distinguished_name');
  }

  // ldap_credentials_password - computed: true, optional: false, required: false
  public get ldapCredentialsPassword() {
    return this.getStringAttribute('ldap_credentials_password');
  }

  // ldap_server_ca_certificate_contents - computed: true, optional: false, required: false
  public get ldapServerCaCertificateContents() {
    return this.getStringAttribute('ldap_server_ca_certificate_contents');
  }

  // ldap_servers - computed: true, optional: false, required: false
  private _ldapServers = new DataMerakiWirelessSsidLdapServersList(this, "ldap_servers", false);
  public get ldapServers() {
    return this._ldapServers;
  }

  // local_auth_fallback_cache_timeout - computed: true, optional: false, required: false
  public get localAuthFallbackCacheTimeout() {
    return this.getNumberAttribute('local_auth_fallback_cache_timeout');
  }

  // local_auth_fallback_enabled - computed: true, optional: false, required: false
  public get localAuthFallbackEnabled() {
    return this.getBooleanAttribute('local_auth_fallback_enabled');
  }

  // local_auth_fallback_server_ca_certificate_contents - computed: true, optional: false, required: false
  public get localAuthFallbackServerCaCertificateContents() {
    return this.getStringAttribute('local_auth_fallback_server_ca_certificate_contents');
  }

  // local_radius_cache_timeout - computed: true, optional: false, required: false
  public get localRadiusCacheTimeout() {
    return this.getNumberAttribute('local_radius_cache_timeout');
  }

  // local_radius_certificate_authentication_client_root_ca_certificate_contents - computed: true, optional: false, required: false
  public get localRadiusCertificateAuthenticationClientRootCaCertificateContents() {
    return this.getStringAttribute('local_radius_certificate_authentication_client_root_ca_certificate_contents');
  }

  // local_radius_certificate_authentication_enabled - computed: true, optional: false, required: false
  public get localRadiusCertificateAuthenticationEnabled() {
    return this.getBooleanAttribute('local_radius_certificate_authentication_enabled');
  }

  // local_radius_certificate_authentication_ocsp_responder_url - computed: true, optional: false, required: false
  public get localRadiusCertificateAuthenticationOcspResponderUrl() {
    return this.getStringAttribute('local_radius_certificate_authentication_ocsp_responder_url');
  }

  // local_radius_certificate_authentication_use_ldap - computed: true, optional: false, required: false
  public get localRadiusCertificateAuthenticationUseLdap() {
    return this.getBooleanAttribute('local_radius_certificate_authentication_use_ldap');
  }

  // local_radius_certificate_authentication_use_ocsp - computed: true, optional: false, required: false
  public get localRadiusCertificateAuthenticationUseOcsp() {
    return this.getBooleanAttribute('local_radius_certificate_authentication_use_ocsp');
  }

  // local_radius_password_authentication_enabled - computed: true, optional: false, required: false
  public get localRadiusPasswordAuthenticationEnabled() {
    return this.getBooleanAttribute('local_radius_password_authentication_enabled');
  }

  // mandatory_dhcp_enabled - computed: true, optional: false, required: false
  public get mandatoryDhcpEnabled() {
    return this.getBooleanAttribute('mandatory_dhcp_enabled');
  }

  // min_bitrate - computed: true, optional: false, required: false
  public get minBitrate() {
    return this.getNumberAttribute('min_bitrate');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // named_vlans_radius_guest_vlan_enabled - computed: true, optional: false, required: false
  public get namedVlansRadiusGuestVlanEnabled() {
    return this.getBooleanAttribute('named_vlans_radius_guest_vlan_enabled');
  }

  // named_vlans_radius_guest_vlan_name - computed: true, optional: false, required: false
  public get namedVlansRadiusGuestVlanName() {
    return this.getStringAttribute('named_vlans_radius_guest_vlan_name');
  }

  // named_vlans_tagging_by_ap_tags - computed: true, optional: false, required: false
  private _namedVlansTaggingByApTags = new DataMerakiWirelessSsidNamedVlansTaggingByApTagsList(this, "named_vlans_tagging_by_ap_tags", false);
  public get namedVlansTaggingByApTags() {
    return this._namedVlansTaggingByApTags;
  }

  // named_vlans_tagging_default_vlan_name - computed: true, optional: false, required: false
  public get namedVlansTaggingDefaultVlanName() {
    return this.getStringAttribute('named_vlans_tagging_default_vlan_name');
  }

  // named_vlans_tagging_enabled - computed: true, optional: false, required: false
  public get namedVlansTaggingEnabled() {
    return this.getBooleanAttribute('named_vlans_tagging_enabled');
  }

  // network_id - computed: false, optional: false, required: true
  private _networkId?: string; 
  public get networkId() {
    return this.getStringAttribute('network_id');
  }
  public set networkId(value: string) {
    this._networkId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkIdInput() {
    return this._networkId;
  }

  // number - computed: false, optional: false, required: true
  private _number?: string; 
  public get number() {
    return this.getStringAttribute('number');
  }
  public set number(value: string) {
    this._number = value;
  }
  // Temporarily expose input value. Use with caution.
  public get numberInput() {
    return this._number;
  }

  // oauth_allowed_domains - computed: true, optional: false, required: false
  public get oauthAllowedDomains() {
    return cdktf.Fn.tolist(this.getListAttribute('oauth_allowed_domains'));
  }

  // per_client_bandwidth_limit_down - computed: true, optional: false, required: false
  public get perClientBandwidthLimitDown() {
    return this.getNumberAttribute('per_client_bandwidth_limit_down');
  }

  // per_client_bandwidth_limit_up - computed: true, optional: false, required: false
  public get perClientBandwidthLimitUp() {
    return this.getNumberAttribute('per_client_bandwidth_limit_up');
  }

  // per_ssid_bandwidth_limit_down - computed: true, optional: false, required: false
  public get perSsidBandwidthLimitDown() {
    return this.getNumberAttribute('per_ssid_bandwidth_limit_down');
  }

  // per_ssid_bandwidth_limit_up - computed: true, optional: false, required: false
  public get perSsidBandwidthLimitUp() {
    return this.getNumberAttribute('per_ssid_bandwidth_limit_up');
  }

  // psk - computed: true, optional: false, required: false
  public get psk() {
    return this.getStringAttribute('psk');
  }

  // radius_accounting_enabled - computed: true, optional: false, required: false
  public get radiusAccountingEnabled() {
    return this.getBooleanAttribute('radius_accounting_enabled');
  }

  // radius_accounting_interim_interval - computed: true, optional: false, required: false
  public get radiusAccountingInterimInterval() {
    return this.getNumberAttribute('radius_accounting_interim_interval');
  }

  // radius_accounting_servers - computed: true, optional: false, required: false
  private _radiusAccountingServers = new DataMerakiWirelessSsidRadiusAccountingServersList(this, "radius_accounting_servers", false);
  public get radiusAccountingServers() {
    return this._radiusAccountingServers;
  }

  // radius_attribute_for_group_policies - computed: true, optional: false, required: false
  public get radiusAttributeForGroupPolicies() {
    return this.getStringAttribute('radius_attribute_for_group_policies');
  }

  // radius_authentication_nas_id - computed: true, optional: false, required: false
  public get radiusAuthenticationNasId() {
    return this.getStringAttribute('radius_authentication_nas_id');
  }

  // radius_called_station_id - computed: true, optional: false, required: false
  public get radiusCalledStationId() {
    return this.getStringAttribute('radius_called_station_id');
  }

  // radius_coa_enabled - computed: true, optional: false, required: false
  public get radiusCoaEnabled() {
    return this.getBooleanAttribute('radius_coa_enabled');
  }

  // radius_das_clients_ips - computed: true, optional: false, required: false
  public get radiusDasClientsIps() {
    return cdktf.Fn.tolist(this.getListAttribute('radius_das_clients_ips'));
  }

  // radius_das_clients_shared_secret - computed: true, optional: false, required: false
  public get radiusDasClientsSharedSecret() {
    return this.getStringAttribute('radius_das_clients_shared_secret');
  }

  // radius_failover_policy - computed: true, optional: false, required: false
  public get radiusFailoverPolicy() {
    return this.getStringAttribute('radius_failover_policy');
  }

  // radius_fallback_enabled - computed: true, optional: false, required: false
  public get radiusFallbackEnabled() {
    return this.getBooleanAttribute('radius_fallback_enabled');
  }

  // radius_guest_vlan_enabled - computed: true, optional: false, required: false
  public get radiusGuestVlanEnabled() {
    return this.getBooleanAttribute('radius_guest_vlan_enabled');
  }

  // radius_guest_vlan_id - computed: true, optional: false, required: false
  public get radiusGuestVlanId() {
    return this.getNumberAttribute('radius_guest_vlan_id');
  }

  // radius_load_balancing_policy - computed: true, optional: false, required: false
  public get radiusLoadBalancingPolicy() {
    return this.getStringAttribute('radius_load_balancing_policy');
  }

  // radius_override - computed: true, optional: false, required: false
  public get radiusOverride() {
    return this.getBooleanAttribute('radius_override');
  }

  // radius_proxy_enabled - computed: true, optional: false, required: false
  public get radiusProxyEnabled() {
    return this.getBooleanAttribute('radius_proxy_enabled');
  }

  // radius_radsec_tls_tunnel_timeout - computed: true, optional: false, required: false
  public get radiusRadsecTlsTunnelTimeout() {
    return this.getNumberAttribute('radius_radsec_tls_tunnel_timeout');
  }

  // radius_server_attempts_limit - computed: true, optional: false, required: false
  public get radiusServerAttemptsLimit() {
    return this.getNumberAttribute('radius_server_attempts_limit');
  }

  // radius_server_timeout - computed: true, optional: false, required: false
  public get radiusServerTimeout() {
    return this.getNumberAttribute('radius_server_timeout');
  }

  // radius_servers - computed: true, optional: false, required: false
  private _radiusServers = new DataMerakiWirelessSsidRadiusServersList(this, "radius_servers", false);
  public get radiusServers() {
    return this._radiusServers;
  }

  // radius_testing_enabled - computed: true, optional: false, required: false
  public get radiusTestingEnabled() {
    return this.getBooleanAttribute('radius_testing_enabled');
  }

  // secondary_concentrator_network_id - computed: true, optional: false, required: false
  public get secondaryConcentratorNetworkId() {
    return this.getStringAttribute('secondary_concentrator_network_id');
  }

  // speed_burst_enabled - computed: true, optional: false, required: false
  public get speedBurstEnabled() {
    return this.getBooleanAttribute('speed_burst_enabled');
  }

  // splash_guest_sponsor_domains - computed: true, optional: false, required: false
  public get splashGuestSponsorDomains() {
    return cdktf.Fn.tolist(this.getListAttribute('splash_guest_sponsor_domains'));
  }

  // splash_page - computed: true, optional: false, required: false
  public get splashPage() {
    return this.getStringAttribute('splash_page');
  }

  // use_vlan_tagging - computed: true, optional: false, required: false
  public get useVlanTagging() {
    return this.getBooleanAttribute('use_vlan_tagging');
  }

  // visible - computed: true, optional: false, required: false
  public get visible() {
    return this.getBooleanAttribute('visible');
  }

  // vlan_id - computed: true, optional: false, required: false
  public get vlanId() {
    return this.getNumberAttribute('vlan_id');
  }

  // walled_garden_enabled - computed: true, optional: false, required: false
  public get walledGardenEnabled() {
    return this.getBooleanAttribute('walled_garden_enabled');
  }

  // walled_garden_ranges - computed: true, optional: false, required: false
  public get walledGardenRanges() {
    return cdktf.Fn.tolist(this.getListAttribute('walled_garden_ranges'));
  }

  // wpa_encryption_mode - computed: true, optional: false, required: false
  public get wpaEncryptionMode() {
    return this.getStringAttribute('wpa_encryption_mode');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      network_id: cdktf.stringToTerraform(this._networkId),
      number: cdktf.stringToTerraform(this._number),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      network_id: {
        value: cdktf.stringToHclTerraform(this._networkId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      number: {
        value: cdktf.stringToHclTerraform(this._number),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
