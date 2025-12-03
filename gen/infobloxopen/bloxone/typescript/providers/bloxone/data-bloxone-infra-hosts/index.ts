// https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/infra_hosts
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataBloxoneInfraHostsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Filter are used to return a more specific list of results. Filters can be used to match resources by specific attributes, e.g. name. If you specify multiple filters, the results returned will have only resources that match all the specified filters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/infra_hosts#filters DataBloxoneInfraHosts#filters}
  */
  readonly filters?: { [key: string]: string };
  /**
  * If set to `true`, the data source will retry until a matching host is found, or until the Read Timeout expires.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/infra_hosts#retry_if_not_found DataBloxoneInfraHosts#retry_if_not_found}
  */
  readonly retryIfNotFound?: boolean | cdktf.IResolvable;
  /**
  * Tag Filters are used to return a more specific list of results filtered by tags. If you specify multiple filters, the results returned will have only resources that match all the specified filters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/infra_hosts#tag_filters DataBloxoneInfraHosts#tag_filters}
  */
  readonly tagFilters?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/infra_hosts#timeouts DataBloxoneInfraHosts#timeouts}
  */
  readonly timeouts?: DataBloxoneInfraHostsTimeouts;
}
export interface DataBloxoneInfraHostsResultsConfigs {
  /**
  * The current version of the Service deployed on the Host.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/infra_hosts#current_version DataBloxoneInfraHosts#current_version}
  */
  readonly currentVersion?: string;
  /**
  * The field to carry any extra data specific to this configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/infra_hosts#extra_data DataBloxoneInfraHosts#extra_data}
  */
  readonly extraData?: string;
  /**
  * The resource identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/infra_hosts#host_id DataBloxoneInfraHosts#host_id}
  */
  readonly hostId?: string;
  /**
  * The resource identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/infra_hosts#service_id DataBloxoneInfraHosts#service_id}
  */
  readonly serviceId?: string;
  /**
  * The type of the Service deployed on the Host (`dns`, `cdc`, etc.). The following is a list of the different Services and their string types (the string types are to be used with the APIs for the `service_type` field):
  * 
  *   | Service name | Service type | 
  *   | ------ | ------ | 
  *   | Access Authentication | authn | 
  *   | Anycast | anycast | 
  *   | Data Connector | cdc | 
  *   | DHCP | dhcp | 
  *   | DNS | dns | 
  *   | DNS Forwarding Proxy | dfp | 
  *   | NIOS Grid Connector | orpheus | 
  *   | MS AD Sync | msad | 
  *   | NTP | ntp | 
  *   | BGP | bgp | 
  *   | RIP | rip | 
  *   | OSPF | ospf | 
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/infra_hosts#service_type DataBloxoneInfraHosts#service_type}
  */
  readonly serviceType?: string;
  /**
  * The timestamp of the latest upgrade of the Host-specific Service configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/infra_hosts#upgraded_at DataBloxoneInfraHosts#upgraded_at}
  */
  readonly upgradedAt?: string;
}

export function dataBloxoneInfraHostsResultsConfigsToTerraform(struct?: DataBloxoneInfraHostsResultsConfigs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    current_version: cdktf.stringToTerraform(struct!.currentVersion),
    extra_data: cdktf.stringToTerraform(struct!.extraData),
    host_id: cdktf.stringToTerraform(struct!.hostId),
    service_id: cdktf.stringToTerraform(struct!.serviceId),
    service_type: cdktf.stringToTerraform(struct!.serviceType),
    upgraded_at: cdktf.stringToTerraform(struct!.upgradedAt),
  }
}


export function dataBloxoneInfraHostsResultsConfigsToHclTerraform(struct?: DataBloxoneInfraHostsResultsConfigs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    current_version: {
      value: cdktf.stringToHclTerraform(struct!.currentVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    extra_data: {
      value: cdktf.stringToHclTerraform(struct!.extraData),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    host_id: {
      value: cdktf.stringToHclTerraform(struct!.hostId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_id: {
      value: cdktf.stringToHclTerraform(struct!.serviceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_type: {
      value: cdktf.stringToHclTerraform(struct!.serviceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    upgraded_at: {
      value: cdktf.stringToHclTerraform(struct!.upgradedAt),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataBloxoneInfraHostsResultsConfigsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataBloxoneInfraHostsResultsConfigs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._currentVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.currentVersion = this._currentVersion;
    }
    if (this._extraData !== undefined) {
      hasAnyValues = true;
      internalValueResult.extraData = this._extraData;
    }
    if (this._hostId !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostId = this._hostId;
    }
    if (this._serviceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceId = this._serviceId;
    }
    if (this._serviceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceType = this._serviceType;
    }
    if (this._upgradedAt !== undefined) {
      hasAnyValues = true;
      internalValueResult.upgradedAt = this._upgradedAt;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataBloxoneInfraHostsResultsConfigs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._currentVersion = undefined;
      this._extraData = undefined;
      this._hostId = undefined;
      this._serviceId = undefined;
      this._serviceType = undefined;
      this._upgradedAt = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._currentVersion = value.currentVersion;
      this._extraData = value.extraData;
      this._hostId = value.hostId;
      this._serviceId = value.serviceId;
      this._serviceType = value.serviceType;
      this._upgradedAt = value.upgradedAt;
    }
  }

  // current_version - computed: true, optional: true, required: false
  private _currentVersion?: string; 
  public get currentVersion() {
    return this.getStringAttribute('current_version');
  }
  public set currentVersion(value: string) {
    this._currentVersion = value;
  }
  public resetCurrentVersion() {
    this._currentVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get currentVersionInput() {
    return this._currentVersion;
  }

  // extra_data - computed: true, optional: true, required: false
  private _extraData?: string; 
  public get extraData() {
    return this.getStringAttribute('extra_data');
  }
  public set extraData(value: string) {
    this._extraData = value;
  }
  public resetExtraData() {
    this._extraData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extraDataInput() {
    return this._extraData;
  }

  // host_id - computed: true, optional: true, required: false
  private _hostId?: string; 
  public get hostId() {
    return this.getStringAttribute('host_id');
  }
  public set hostId(value: string) {
    this._hostId = value;
  }
  public resetHostId() {
    this._hostId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostIdInput() {
    return this._hostId;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // service_id - computed: true, optional: true, required: false
  private _serviceId?: string; 
  public get serviceId() {
    return this.getStringAttribute('service_id');
  }
  public set serviceId(value: string) {
    this._serviceId = value;
  }
  public resetServiceId() {
    this._serviceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceIdInput() {
    return this._serviceId;
  }

  // service_type - computed: true, optional: true, required: false
  private _serviceType?: string; 
  public get serviceType() {
    return this.getStringAttribute('service_type');
  }
  public set serviceType(value: string) {
    this._serviceType = value;
  }
  public resetServiceType() {
    this._serviceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceTypeInput() {
    return this._serviceType;
  }

  // upgraded_at - computed: true, optional: true, required: false
  private _upgradedAt?: string; 
  public get upgradedAt() {
    return this.getStringAttribute('upgraded_at');
  }
  public set upgradedAt(value: string) {
    this._upgradedAt = value;
  }
  public resetUpgradedAt() {
    this._upgradedAt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get upgradedAtInput() {
    return this._upgradedAt;
  }
}

export class DataBloxoneInfraHostsResultsConfigsList extends cdktf.ComplexList {
  public internalValue? : DataBloxoneInfraHostsResultsConfigs[] | cdktf.IResolvable

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
  public get(index: number): DataBloxoneInfraHostsResultsConfigsOutputReference {
    return new DataBloxoneInfraHostsResultsConfigsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataBloxoneInfraHostsResults {
  /**
  * The description of the Host (optional).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/infra_hosts#description DataBloxoneInfraHosts#description}
  */
  readonly description?: string;
  /**
  * The name of the Host (unique).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/infra_hosts#display_name DataBloxoneInfraHosts#display_name}
  */
  readonly displayName: string;
  /**
  * The IP Space of the Host.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/infra_hosts#ip_space DataBloxoneInfraHosts#ip_space}
  */
  readonly ipSpace?: string;
  /**
  * The resource identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/infra_hosts#location_id DataBloxoneInfraHosts#location_id}
  */
  readonly locationId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/infra_hosts#maintenance_mode DataBloxoneInfraHosts#maintenance_mode}
  */
  readonly maintenanceMode?: string;
  /**
  * The resource identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/infra_hosts#pool_id DataBloxoneInfraHosts#pool_id}
  */
  readonly poolId?: string;
  /**
  * The unique serial number of the Host.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/infra_hosts#serial_number DataBloxoneInfraHosts#serial_number}
  */
  readonly serialNumber?: string;
  /**
  * Tags associated with this Host.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/infra_hosts#tags DataBloxoneInfraHosts#tags}
  */
  readonly tags?: { [key: string]: string };
}

export function dataBloxoneInfraHostsResultsToTerraform(struct?: DataBloxoneInfraHostsResults): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    display_name: cdktf.stringToTerraform(struct!.displayName),
    ip_space: cdktf.stringToTerraform(struct!.ipSpace),
    location_id: cdktf.stringToTerraform(struct!.locationId),
    maintenance_mode: cdktf.stringToTerraform(struct!.maintenanceMode),
    pool_id: cdktf.stringToTerraform(struct!.poolId),
    serial_number: cdktf.stringToTerraform(struct!.serialNumber),
    tags: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.tags),
  }
}


export function dataBloxoneInfraHostsResultsToHclTerraform(struct?: DataBloxoneInfraHostsResults): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    display_name: {
      value: cdktf.stringToHclTerraform(struct!.displayName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_space: {
      value: cdktf.stringToHclTerraform(struct!.ipSpace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    location_id: {
      value: cdktf.stringToHclTerraform(struct!.locationId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    maintenance_mode: {
      value: cdktf.stringToHclTerraform(struct!.maintenanceMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pool_id: {
      value: cdktf.stringToHclTerraform(struct!.poolId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    serial_number: {
      value: cdktf.stringToHclTerraform(struct!.serialNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tags: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.tags),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataBloxoneInfraHostsResultsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataBloxoneInfraHostsResults | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._displayName !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayName = this._displayName;
    }
    if (this._ipSpace !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipSpace = this._ipSpace;
    }
    if (this._locationId !== undefined) {
      hasAnyValues = true;
      internalValueResult.locationId = this._locationId;
    }
    if (this._maintenanceMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.maintenanceMode = this._maintenanceMode;
    }
    if (this._poolId !== undefined) {
      hasAnyValues = true;
      internalValueResult.poolId = this._poolId;
    }
    if (this._serialNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.serialNumber = this._serialNumber;
    }
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataBloxoneInfraHostsResults | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._description = undefined;
      this._displayName = undefined;
      this._ipSpace = undefined;
      this._locationId = undefined;
      this._maintenanceMode = undefined;
      this._poolId = undefined;
      this._serialNumber = undefined;
      this._tags = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._description = value.description;
      this._displayName = value.displayName;
      this._ipSpace = value.ipSpace;
      this._locationId = value.locationId;
      this._maintenanceMode = value.maintenanceMode;
      this._poolId = value.poolId;
      this._serialNumber = value.serialNumber;
      this._tags = value.tags;
    }
  }

  // configs - computed: true, optional: false, required: false
  private _configs = new DataBloxoneInfraHostsResultsConfigsList(this, "configs", false);
  public get configs() {
    return this._configs;
  }

  // connectivity_monitor - computed: true, optional: false, required: false
  private _connectivityMonitor = new cdktf.StringMap(this, "connectivity_monitor");
  public get connectivityMonitor() {
    return this._connectivityMonitor;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // created_by - computed: true, optional: false, required: false
  public get createdBy() {
    return this.getStringAttribute('created_by');
  }

  // description - computed: true, optional: true, required: false
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

  // display_name - computed: true, optional: false, required: true
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // host_subtype - computed: true, optional: false, required: false
  public get hostSubtype() {
    return this.getStringAttribute('host_subtype');
  }

  // host_type - computed: true, optional: false, required: false
  public get hostType() {
    return this.getStringAttribute('host_type');
  }

  // host_version - computed: true, optional: false, required: false
  public get hostVersion() {
    return this.getStringAttribute('host_version');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ip_address - computed: true, optional: false, required: false
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }

  // ip_space - computed: true, optional: true, required: false
  private _ipSpace?: string; 
  public get ipSpace() {
    return this.getStringAttribute('ip_space');
  }
  public set ipSpace(value: string) {
    this._ipSpace = value;
  }
  public resetIpSpace() {
    this._ipSpace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipSpaceInput() {
    return this._ipSpace;
  }

  // legacy_id - computed: true, optional: false, required: false
  public get legacyId() {
    return this.getStringAttribute('legacy_id');
  }

  // location_id - computed: true, optional: true, required: false
  private _locationId?: string; 
  public get locationId() {
    return this.getStringAttribute('location_id');
  }
  public set locationId(value: string) {
    this._locationId = value;
  }
  public resetLocationId() {
    this._locationId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationIdInput() {
    return this._locationId;
  }

  // mac_address - computed: true, optional: false, required: false
  public get macAddress() {
    return this.getStringAttribute('mac_address');
  }

  // maintenance_mode - computed: true, optional: true, required: false
  private _maintenanceMode?: string; 
  public get maintenanceMode() {
    return this.getStringAttribute('maintenance_mode');
  }
  public set maintenanceMode(value: string) {
    this._maintenanceMode = value;
  }
  public resetMaintenanceMode() {
    this._maintenanceMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maintenanceModeInput() {
    return this._maintenanceMode;
  }

  // nat_ip - computed: true, optional: false, required: false
  public get natIp() {
    return this.getStringAttribute('nat_ip');
  }

  // noa_cluster - computed: true, optional: false, required: false
  public get noaCluster() {
    return this.getStringAttribute('noa_cluster');
  }

  // ophid - computed: true, optional: false, required: false
  public get ophid() {
    return this.getStringAttribute('ophid');
  }

  // pool_id - computed: true, optional: true, required: false
  private _poolId?: string; 
  public get poolId() {
    return this.getStringAttribute('pool_id');
  }
  public set poolId(value: string) {
    this._poolId = value;
  }
  public resetPoolId() {
    this._poolId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get poolIdInput() {
    return this._poolId;
  }

  // serial_number - computed: true, optional: true, required: false
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

  // tags - computed: true, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // tags_all - computed: true, optional: false, required: false
  private _tagsAll = new cdktf.StringMap(this, "tags_all");
  public get tagsAll() {
    return this._tagsAll;
  }

  // timezone - computed: true, optional: false, required: false
  public get timezone() {
    return this.getStringAttribute('timezone');
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }
}

export class DataBloxoneInfraHostsResultsList extends cdktf.ComplexList {
  public internalValue? : DataBloxoneInfraHostsResults[] | cdktf.IResolvable

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
  public get(index: number): DataBloxoneInfraHostsResultsOutputReference {
    return new DataBloxoneInfraHostsResultsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataBloxoneInfraHostsTimeouts {
  /**
  * [Duration](https://pkg.go.dev/time#ParseDuration) to wait before being considered a timeout during read operations. Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Default is 20m.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/infra_hosts#read DataBloxoneInfraHosts#read}
  */
  readonly read?: string;
}

export function dataBloxoneInfraHostsTimeoutsToTerraform(struct?: DataBloxoneInfraHostsTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    read: cdktf.stringToTerraform(struct!.read),
  }
}


export function dataBloxoneInfraHostsTimeoutsToHclTerraform(struct?: DataBloxoneInfraHostsTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    read: {
      value: cdktf.stringToHclTerraform(struct!.read),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataBloxoneInfraHostsTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataBloxoneInfraHostsTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataBloxoneInfraHostsTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._read = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._read = value.read;
    }
  }

  // read - computed: false, optional: true, required: false
  private _read?: string; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/infra_hosts bloxone_infra_hosts}
*/
export class DataBloxoneInfraHosts extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "bloxone_infra_hosts";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataBloxoneInfraHosts resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataBloxoneInfraHosts to import
  * @param importFromId The id of the existing DataBloxoneInfraHosts that should be imported. Refer to the {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/infra_hosts#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataBloxoneInfraHosts to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "bloxone_infra_hosts", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/infra_hosts bloxone_infra_hosts} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataBloxoneInfraHostsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataBloxoneInfraHostsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'bloxone_infra_hosts',
      terraformGeneratorMetadata: {
        providerName: 'bloxone',
        providerVersion: '1.5.4',
        providerVersionConstraint: '1.5.4'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._filters = config.filters;
    this._retryIfNotFound = config.retryIfNotFound;
    this._tagFilters = config.tagFilters;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // filters - computed: false, optional: true, required: false
  private _filters?: { [key: string]: string }; 
  public get filters() {
    return this.getStringMapAttribute('filters');
  }
  public set filters(value: { [key: string]: string }) {
    this._filters = value;
  }
  public resetFilters() {
    this._filters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filtersInput() {
    return this._filters;
  }

  // results - computed: true, optional: false, required: false
  private _results = new DataBloxoneInfraHostsResultsList(this, "results", false);
  public get results() {
    return this._results;
  }

  // retry_if_not_found - computed: false, optional: true, required: false
  private _retryIfNotFound?: boolean | cdktf.IResolvable; 
  public get retryIfNotFound() {
    return this.getBooleanAttribute('retry_if_not_found');
  }
  public set retryIfNotFound(value: boolean | cdktf.IResolvable) {
    this._retryIfNotFound = value;
  }
  public resetRetryIfNotFound() {
    this._retryIfNotFound = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryIfNotFoundInput() {
    return this._retryIfNotFound;
  }

  // tag_filters - computed: false, optional: true, required: false
  private _tagFilters?: { [key: string]: string }; 
  public get tagFilters() {
    return this.getStringMapAttribute('tag_filters');
  }
  public set tagFilters(value: { [key: string]: string }) {
    this._tagFilters = value;
  }
  public resetTagFilters() {
    this._tagFilters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagFiltersInput() {
    return this._tagFilters;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DataBloxoneInfraHostsTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DataBloxoneInfraHostsTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      filters: cdktf.hashMapper(cdktf.stringToTerraform)(this._filters),
      retry_if_not_found: cdktf.booleanToTerraform(this._retryIfNotFound),
      tag_filters: cdktf.hashMapper(cdktf.stringToTerraform)(this._tagFilters),
      timeouts: dataBloxoneInfraHostsTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      filters: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._filters),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      retry_if_not_found: {
        value: cdktf.booleanToHclTerraform(this._retryIfNotFound),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      tag_filters: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tagFilters),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      timeouts: {
        value: dataBloxoneInfraHostsTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataBloxoneInfraHostsTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
