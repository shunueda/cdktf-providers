// https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/data-sources/wireless_ssids
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataMerakiWirelessSsidsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Network ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/data-sources/wireless_ssids#network_id DataMerakiWirelessSsids#network_id}
  */
  readonly networkId: string;
}
export interface DataMerakiWirelessSsidsItemsRadiusAccountingServers {
}

export function dataMerakiWirelessSsidsItemsRadiusAccountingServersToTerraform(struct?: DataMerakiWirelessSsidsItemsRadiusAccountingServers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMerakiWirelessSsidsItemsRadiusAccountingServersToHclTerraform(struct?: DataMerakiWirelessSsidsItemsRadiusAccountingServers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMerakiWirelessSsidsItemsRadiusAccountingServersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataMerakiWirelessSsidsItemsRadiusAccountingServers | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMerakiWirelessSsidsItemsRadiusAccountingServers | undefined) {
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
}

export class DataMerakiWirelessSsidsItemsRadiusAccountingServersList extends cdktf.ComplexList {

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
  public get(index: number): DataMerakiWirelessSsidsItemsRadiusAccountingServersOutputReference {
    return new DataMerakiWirelessSsidsItemsRadiusAccountingServersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataMerakiWirelessSsidsItemsRadiusServers {
}

export function dataMerakiWirelessSsidsItemsRadiusServersToTerraform(struct?: DataMerakiWirelessSsidsItemsRadiusServers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMerakiWirelessSsidsItemsRadiusServersToHclTerraform(struct?: DataMerakiWirelessSsidsItemsRadiusServers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMerakiWirelessSsidsItemsRadiusServersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataMerakiWirelessSsidsItemsRadiusServers | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMerakiWirelessSsidsItemsRadiusServers | undefined) {
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
}

export class DataMerakiWirelessSsidsItemsRadiusServersList extends cdktf.ComplexList {

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
  public get(index: number): DataMerakiWirelessSsidsItemsRadiusServersOutputReference {
    return new DataMerakiWirelessSsidsItemsRadiusServersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataMerakiWirelessSsidsItems {
}

export function dataMerakiWirelessSsidsItemsToTerraform(struct?: DataMerakiWirelessSsidsItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMerakiWirelessSsidsItemsToHclTerraform(struct?: DataMerakiWirelessSsidsItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMerakiWirelessSsidsItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataMerakiWirelessSsidsItems | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMerakiWirelessSsidsItems | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // admin_splash_url - computed: true, optional: false, required: false
  public get adminSplashUrl() {
    return this.getStringAttribute('admin_splash_url');
  }

  // auth_mode - computed: true, optional: false, required: false
  public get authMode() {
    return this.getStringAttribute('auth_mode');
  }

  // availability_tags - computed: true, optional: false, required: false
  public get availabilityTags() {
    return this.getListAttribute('availability_tags');
  }

  // available_on_all_aps - computed: true, optional: false, required: false
  public get availableOnAllAps() {
    return this.getBooleanAttribute('available_on_all_aps');
  }

  // band_selection - computed: true, optional: false, required: false
  public get bandSelection() {
    return this.getStringAttribute('band_selection');
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // encryption_mode - computed: true, optional: false, required: false
  public get encryptionMode() {
    return this.getStringAttribute('encryption_mode');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ip_assignment_mode - computed: true, optional: false, required: false
  public get ipAssignmentMode() {
    return this.getStringAttribute('ip_assignment_mode');
  }

  // local_auth - computed: true, optional: false, required: false
  public get localAuth() {
    return this.getBooleanAttribute('local_auth');
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

  // number - computed: true, optional: false, required: false
  public get number() {
    return this.getNumberAttribute('number');
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

  // radius_accounting_enabled - computed: true, optional: false, required: false
  public get radiusAccountingEnabled() {
    return this.getBooleanAttribute('radius_accounting_enabled');
  }

  // radius_accounting_servers - computed: true, optional: false, required: false
  private _radiusAccountingServers = new DataMerakiWirelessSsidsItemsRadiusAccountingServersList(this, "radius_accounting_servers", false);
  public get radiusAccountingServers() {
    return this._radiusAccountingServers;
  }

  // radius_attribute_for_group_policies - computed: true, optional: false, required: false
  public get radiusAttributeForGroupPolicies() {
    return this.getStringAttribute('radius_attribute_for_group_policies');
  }

  // radius_enabled - computed: true, optional: false, required: false
  public get radiusEnabled() {
    return this.getBooleanAttribute('radius_enabled');
  }

  // radius_failover_policy - computed: true, optional: false, required: false
  public get radiusFailoverPolicy() {
    return this.getStringAttribute('radius_failover_policy');
  }

  // radius_load_balancing_policy - computed: true, optional: false, required: false
  public get radiusLoadBalancingPolicy() {
    return this.getStringAttribute('radius_load_balancing_policy');
  }

  // radius_servers - computed: true, optional: false, required: false
  private _radiusServers = new DataMerakiWirelessSsidsItemsRadiusServersList(this, "radius_servers", false);
  public get radiusServers() {
    return this._radiusServers;
  }

  // splash_page - computed: true, optional: false, required: false
  public get splashPage() {
    return this.getStringAttribute('splash_page');
  }

  // splash_timeout - computed: true, optional: false, required: false
  public get splashTimeout() {
    return this.getStringAttribute('splash_timeout');
  }

  // ssid_admin_accessible - computed: true, optional: false, required: false
  public get ssidAdminAccessible() {
    return this.getBooleanAttribute('ssid_admin_accessible');
  }

  // visible - computed: true, optional: false, required: false
  public get visible() {
    return this.getBooleanAttribute('visible');
  }

  // walled_garden_enabled - computed: true, optional: false, required: false
  public get walledGardenEnabled() {
    return this.getBooleanAttribute('walled_garden_enabled');
  }

  // walled_garden_ranges - computed: true, optional: false, required: false
  public get walledGardenRanges() {
    return this.getListAttribute('walled_garden_ranges');
  }

  // wpa_encryption_mode - computed: true, optional: false, required: false
  public get wpaEncryptionMode() {
    return this.getStringAttribute('wpa_encryption_mode');
  }
}

export class DataMerakiWirelessSsidsItemsList extends cdktf.ComplexList {

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
  public get(index: number): DataMerakiWirelessSsidsItemsOutputReference {
    return new DataMerakiWirelessSsidsItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/data-sources/wireless_ssids meraki_wireless_ssids}
*/
export class DataMerakiWirelessSsids extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "meraki_wireless_ssids";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataMerakiWirelessSsids resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataMerakiWirelessSsids to import
  * @param importFromId The id of the existing DataMerakiWirelessSsids that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/data-sources/wireless_ssids#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataMerakiWirelessSsids to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "meraki_wireless_ssids", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/data-sources/wireless_ssids meraki_wireless_ssids} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataMerakiWirelessSsidsConfig
  */
  public constructor(scope: Construct, id: string, config: DataMerakiWirelessSsidsConfig) {
    super(scope, id, {
      terraformResourceType: 'meraki_wireless_ssids',
      terraformGeneratorMetadata: {
        providerName: 'meraki',
        providerVersion: '1.7.1',
        providerVersionConstraint: '1.7.1'
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
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // items - computed: true, optional: false, required: false
  private _items = new DataMerakiWirelessSsidsItemsList(this, "items", true);
  public get items() {
    return this._items;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      network_id: cdktf.stringToTerraform(this._networkId),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
