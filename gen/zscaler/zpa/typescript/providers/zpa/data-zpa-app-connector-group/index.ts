// https://registry.terraform.io/providers/zscaler/zpa/4.3.3/docs/data-sources/app_connector_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataZpaAppConnectorGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.3/docs/data-sources/app_connector_group#id DataZpaAppConnectorGroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.3/docs/data-sources/app_connector_group#microtenant_id DataZpaAppConnectorGroup#microtenant_id}
  */
  readonly microtenantId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.3/docs/data-sources/app_connector_group#microtenant_name DataZpaAppConnectorGroup#microtenant_name}
  */
  readonly microtenantName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.3/docs/data-sources/app_connector_group#name DataZpaAppConnectorGroup#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.3/docs/data-sources/app_connector_group#override_version_profile DataZpaAppConnectorGroup#override_version_profile}
  */
  readonly overrideVersionProfile?: boolean | cdktf.IResolvable;
}
export interface DataZpaAppConnectorGroupConnectors {
}

export function dataZpaAppConnectorGroupConnectorsToTerraform(struct?: DataZpaAppConnectorGroupConnectors): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataZpaAppConnectorGroupConnectorsToHclTerraform(struct?: DataZpaAppConnectorGroupConnectors): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataZpaAppConnectorGroupConnectorsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataZpaAppConnectorGroupConnectors | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZpaAppConnectorGroupConnectors | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // appconnector_group_id - computed: true, optional: false, required: false
  public get appconnectorGroupId() {
    return this.getStringAttribute('appconnector_group_id');
  }

  // appconnector_group_name - computed: true, optional: false, required: false
  public get appconnectorGroupName() {
    return this.getStringAttribute('appconnector_group_name');
  }

  // application_start_time - computed: true, optional: false, required: false
  public get applicationStartTime() {
    return this.getStringAttribute('application_start_time');
  }

  // control_channel_status - computed: true, optional: false, required: false
  public get controlChannelStatus() {
    return this.getStringAttribute('control_channel_status');
  }

  // creation_time - computed: true, optional: false, required: false
  public get creationTime() {
    return this.getStringAttribute('creation_time');
  }

  // ctrl_broker_name - computed: true, optional: false, required: false
  public get ctrlBrokerName() {
    return this.getStringAttribute('ctrl_broker_name');
  }

  // current_version - computed: true, optional: false, required: false
  public get currentVersion() {
    return this.getStringAttribute('current_version');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // enrollment_cert - computed: true, optional: false, required: false
  private _enrollmentCert = new cdktf.StringMap(this, "enrollment_cert");
  public get enrollmentCert() {
    return this._enrollmentCert;
  }

  // expected_upgrade_time - computed: true, optional: false, required: false
  public get expectedUpgradeTime() {
    return this.getStringAttribute('expected_upgrade_time');
  }

  // expected_version - computed: true, optional: false, required: false
  public get expectedVersion() {
    return this.getStringAttribute('expected_version');
  }

  // fingerprint - computed: true, optional: false, required: false
  public get fingerprint() {
    return this.getStringAttribute('fingerprint');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ipacl - computed: true, optional: false, required: false
  public get ipacl() {
    return this.getStringAttribute('ipacl');
  }

  // issued_cert_id - computed: true, optional: false, required: false
  public get issuedCertId() {
    return this.getStringAttribute('issued_cert_id');
  }

  // last_broker_connect_time - computed: true, optional: false, required: false
  public get lastBrokerConnectTime() {
    return this.getStringAttribute('last_broker_connect_time');
  }

  // last_broker_connect_time_duration - computed: true, optional: false, required: false
  public get lastBrokerConnectTimeDuration() {
    return this.getStringAttribute('last_broker_connect_time_duration');
  }

  // last_broker_disconnect_time - computed: true, optional: false, required: false
  public get lastBrokerDisconnectTime() {
    return this.getStringAttribute('last_broker_disconnect_time');
  }

  // last_broker_disconnect_time_duration - computed: true, optional: false, required: false
  public get lastBrokerDisconnectTimeDuration() {
    return this.getStringAttribute('last_broker_disconnect_time_duration');
  }

  // last_upgrade_time - computed: true, optional: false, required: false
  public get lastUpgradeTime() {
    return this.getStringAttribute('last_upgrade_time');
  }

  // latitude - computed: true, optional: false, required: false
  public get latitude() {
    return this.getStringAttribute('latitude');
  }

  // location - computed: true, optional: false, required: false
  public get location() {
    return this.getStringAttribute('location');
  }

  // longitude - computed: true, optional: false, required: false
  public get longitude() {
    return this.getStringAttribute('longitude');
  }

  // modified_time - computed: true, optional: false, required: false
  public get modifiedTime() {
    return this.getStringAttribute('modified_time');
  }

  // modifiedby - computed: true, optional: false, required: false
  public get modifiedby() {
    return this.getStringAttribute('modifiedby');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // platform - computed: true, optional: false, required: false
  public get platform() {
    return this.getStringAttribute('platform');
  }

  // previous_version - computed: true, optional: false, required: false
  public get previousVersion() {
    return this.getStringAttribute('previous_version');
  }

  // private_ip - computed: true, optional: false, required: false
  public get privateIp() {
    return this.getStringAttribute('private_ip');
  }

  // provisioning_key_id - computed: true, optional: false, required: false
  public get provisioningKeyId() {
    return this.getStringAttribute('provisioning_key_id');
  }

  // provisioning_key_name - computed: true, optional: false, required: false
  public get provisioningKeyName() {
    return this.getStringAttribute('provisioning_key_name');
  }

  // public_ip - computed: true, optional: false, required: false
  public get publicIp() {
    return this.getStringAttribute('public_ip');
  }

  // sarge_version - computed: true, optional: false, required: false
  public get sargeVersion() {
    return this.getStringAttribute('sarge_version');
  }

  // upgrade_attempt - computed: true, optional: false, required: false
  public get upgradeAttempt() {
    return this.getStringAttribute('upgrade_attempt');
  }

  // upgrade_status - computed: true, optional: false, required: false
  public get upgradeStatus() {
    return this.getStringAttribute('upgrade_status');
  }
}

export class DataZpaAppConnectorGroupConnectorsList extends cdktf.ComplexList {

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
  public get(index: number): DataZpaAppConnectorGroupConnectorsOutputReference {
    return new DataZpaAppConnectorGroupConnectorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataZpaAppConnectorGroupServerGroups {
}

export function dataZpaAppConnectorGroupServerGroupsToTerraform(struct?: DataZpaAppConnectorGroupServerGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataZpaAppConnectorGroupServerGroupsToHclTerraform(struct?: DataZpaAppConnectorGroupServerGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataZpaAppConnectorGroupServerGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataZpaAppConnectorGroupServerGroups | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZpaAppConnectorGroupServerGroups | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // config_space - computed: true, optional: false, required: false
  public get configSpace() {
    return this.getStringAttribute('config_space');
  }

  // creation_time - computed: true, optional: false, required: false
  public get creationTime() {
    return this.getStringAttribute('creation_time');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // dynamic_discovery - computed: true, optional: false, required: false
  public get dynamicDiscovery() {
    return this.getBooleanAttribute('dynamic_discovery');
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // modified_time - computed: true, optional: false, required: false
  public get modifiedTime() {
    return this.getStringAttribute('modified_time');
  }

  // modifiedby - computed: true, optional: false, required: false
  public get modifiedby() {
    return this.getStringAttribute('modifiedby');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class DataZpaAppConnectorGroupServerGroupsList extends cdktf.ComplexList {

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
  public get(index: number): DataZpaAppConnectorGroupServerGroupsOutputReference {
    return new DataZpaAppConnectorGroupServerGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.3/docs/data-sources/app_connector_group zpa_app_connector_group}
*/
export class DataZpaAppConnectorGroup extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "zpa_app_connector_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataZpaAppConnectorGroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataZpaAppConnectorGroup to import
  * @param importFromId The id of the existing DataZpaAppConnectorGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.3/docs/data-sources/app_connector_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataZpaAppConnectorGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "zpa_app_connector_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.3/docs/data-sources/app_connector_group zpa_app_connector_group} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataZpaAppConnectorGroupConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataZpaAppConnectorGroupConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'zpa_app_connector_group',
      terraformGeneratorMetadata: {
        providerName: 'zpa',
        providerVersion: '4.3.3',
        providerVersionConstraint: '4.3.3'
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
    this._microtenantId = config.microtenantId;
    this._microtenantName = config.microtenantName;
    this._name = config.name;
    this._overrideVersionProfile = config.overrideVersionProfile;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // city_country - computed: true, optional: false, required: false
  public get cityCountry() {
    return this.getStringAttribute('city_country');
  }

  // connectors - computed: true, optional: false, required: false
  private _connectors = new DataZpaAppConnectorGroupConnectorsList(this, "connectors", false);
  public get connectors() {
    return this._connectors;
  }

  // country_code - computed: true, optional: false, required: false
  public get countryCode() {
    return this.getStringAttribute('country_code');
  }

  // creation_time - computed: true, optional: false, required: false
  public get creationTime() {
    return this.getStringAttribute('creation_time');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // dns_query_type - computed: true, optional: false, required: false
  public get dnsQueryType() {
    return this.getStringAttribute('dns_query_type');
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // geo_location_id - computed: true, optional: false, required: false
  public get geoLocationId() {
    return this.getStringAttribute('geo_location_id');
  }

  // id - computed: false, optional: true, required: false
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

  // latitude - computed: true, optional: false, required: false
  public get latitude() {
    return this.getStringAttribute('latitude');
  }

  // location - computed: true, optional: false, required: false
  public get location() {
    return this.getStringAttribute('location');
  }

  // longitude - computed: true, optional: false, required: false
  public get longitude() {
    return this.getStringAttribute('longitude');
  }

  // lss_app_connector_group - computed: true, optional: false, required: false
  public get lssAppConnectorGroup() {
    return this.getBooleanAttribute('lss_app_connector_group');
  }

  // microtenant_id - computed: false, optional: true, required: false
  private _microtenantId?: string; 
  public get microtenantId() {
    return this.getStringAttribute('microtenant_id');
  }
  public set microtenantId(value: string) {
    this._microtenantId = value;
  }
  public resetMicrotenantId() {
    this._microtenantId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get microtenantIdInput() {
    return this._microtenantId;
  }

  // microtenant_name - computed: false, optional: true, required: false
  private _microtenantName?: string; 
  public get microtenantName() {
    return this.getStringAttribute('microtenant_name');
  }
  public set microtenantName(value: string) {
    this._microtenantName = value;
  }
  public resetMicrotenantName() {
    this._microtenantName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get microtenantNameInput() {
    return this._microtenantName;
  }

  // modified_time - computed: true, optional: false, required: false
  public get modifiedTime() {
    return this.getStringAttribute('modified_time');
  }

  // modifiedby - computed: true, optional: false, required: false
  public get modifiedby() {
    return this.getStringAttribute('modifiedby');
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

  // override_version_profile - computed: false, optional: true, required: false
  private _overrideVersionProfile?: boolean | cdktf.IResolvable; 
  public get overrideVersionProfile() {
    return this.getBooleanAttribute('override_version_profile');
  }
  public set overrideVersionProfile(value: boolean | cdktf.IResolvable) {
    this._overrideVersionProfile = value;
  }
  public resetOverrideVersionProfile() {
    this._overrideVersionProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overrideVersionProfileInput() {
    return this._overrideVersionProfile;
  }

  // server_groups - computed: true, optional: false, required: false
  private _serverGroups = new DataZpaAppConnectorGroupServerGroupsList(this, "server_groups", false);
  public get serverGroups() {
    return this._serverGroups;
  }

  // tcp_quick_ack_app - computed: true, optional: false, required: false
  public get tcpQuickAckApp() {
    return this.getBooleanAttribute('tcp_quick_ack_app');
  }

  // tcp_quick_ack_assistant - computed: true, optional: false, required: false
  public get tcpQuickAckAssistant() {
    return this.getBooleanAttribute('tcp_quick_ack_assistant');
  }

  // tcp_quick_ack_read_assistant - computed: true, optional: false, required: false
  public get tcpQuickAckReadAssistant() {
    return this.getBooleanAttribute('tcp_quick_ack_read_assistant');
  }

  // upgrade_day - computed: true, optional: false, required: false
  public get upgradeDay() {
    return this.getStringAttribute('upgrade_day');
  }

  // upgrade_time_in_secs - computed: true, optional: false, required: false
  public get upgradeTimeInSecs() {
    return this.getStringAttribute('upgrade_time_in_secs');
  }

  // use_in_dr_mode - computed: true, optional: false, required: false
  public get useInDrMode() {
    return this.getBooleanAttribute('use_in_dr_mode');
  }

  // version_profile_id - computed: true, optional: false, required: false
  public get versionProfileId() {
    return this.getStringAttribute('version_profile_id');
  }

  // version_profile_name - computed: true, optional: false, required: false
  public get versionProfileName() {
    return this.getStringAttribute('version_profile_name');
  }

  // version_profile_visibility_scope - computed: true, optional: false, required: false
  public get versionProfileVisibilityScope() {
    return this.getStringAttribute('version_profile_visibility_scope');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      microtenant_id: cdktf.stringToTerraform(this._microtenantId),
      microtenant_name: cdktf.stringToTerraform(this._microtenantName),
      name: cdktf.stringToTerraform(this._name),
      override_version_profile: cdktf.booleanToTerraform(this._overrideVersionProfile),
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
      microtenant_id: {
        value: cdktf.stringToHclTerraform(this._microtenantId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      microtenant_name: {
        value: cdktf.stringToHclTerraform(this._microtenantName),
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
      override_version_profile: {
        value: cdktf.booleanToHclTerraform(this._overrideVersionProfile),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
