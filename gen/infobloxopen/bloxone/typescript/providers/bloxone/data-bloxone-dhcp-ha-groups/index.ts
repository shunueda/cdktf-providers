// https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/dhcp_ha_groups
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataBloxoneDhcpHaGroupsConfig extends cdktf.TerraformMetaArguments {
  /**
  * collect_stats gets the HA group stats(state, status, heartbeat) if set to true. Defaults to false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/dhcp_ha_groups#collect_stats DataBloxoneDhcpHaGroups#collect_stats}
  */
  readonly collectStats?: boolean | cdktf.IResolvable;
  /**
  * Filter are used to return a more specific list of results. Filters can be used to match resources by specific attributes, e.g. name. If you specify multiple filters, the results returned will have only resources that match all the specified filters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/dhcp_ha_groups#filters DataBloxoneDhcpHaGroups#filters}
  */
  readonly filters?: { [key: string]: string };
  /**
  * Tag Filters are used to return a more specific list of results filtered by tags. If you specify multiple filters, the results returned will have only resources that match all the specified filters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/dhcp_ha_groups#tag_filters DataBloxoneDhcpHaGroups#tag_filters}
  */
  readonly tagFilters?: { [key: string]: string };
}
export interface DataBloxoneDhcpHaGroupsResultsHostsHeartbeats {
}

export function dataBloxoneDhcpHaGroupsResultsHostsHeartbeatsToTerraform(struct?: DataBloxoneDhcpHaGroupsResultsHostsHeartbeats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataBloxoneDhcpHaGroupsResultsHostsHeartbeatsToHclTerraform(struct?: DataBloxoneDhcpHaGroupsResultsHostsHeartbeats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataBloxoneDhcpHaGroupsResultsHostsHeartbeatsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataBloxoneDhcpHaGroupsResultsHostsHeartbeats | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataBloxoneDhcpHaGroupsResultsHostsHeartbeats | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // peer - computed: true, optional: false, required: false
  public get peer() {
    return this.getStringAttribute('peer');
  }

  // successful_heartbeat - computed: true, optional: false, required: false
  public get successfulHeartbeat() {
    return this.getStringAttribute('successful_heartbeat');
  }

  // successful_heartbeat_v6 - computed: true, optional: false, required: false
  public get successfulHeartbeatV6() {
    return this.getStringAttribute('successful_heartbeat_v6');
  }
}

export class DataBloxoneDhcpHaGroupsResultsHostsHeartbeatsList extends cdktf.ComplexList {

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
  public get(index: number): DataBloxoneDhcpHaGroupsResultsHostsHeartbeatsOutputReference {
    return new DataBloxoneDhcpHaGroupsResultsHostsHeartbeatsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataBloxoneDhcpHaGroupsResultsHosts {
  /**
  * The address on which this host listens.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/dhcp_ha_groups#address DataBloxoneDhcpHaGroups#address}
  */
  readonly address?: string;
  /**
  * The resource identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/dhcp_ha_groups#host DataBloxoneDhcpHaGroups#host}
  */
  readonly host: string;
  /**
  * The role of this host in the HA relationship: _active_ or _passive_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/dhcp_ha_groups#role DataBloxoneDhcpHaGroups#role}
  */
  readonly role: string;
}

export function dataBloxoneDhcpHaGroupsResultsHostsToTerraform(struct?: DataBloxoneDhcpHaGroupsResultsHosts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
    host: cdktf.stringToTerraform(struct!.host),
    role: cdktf.stringToTerraform(struct!.role),
  }
}


export function dataBloxoneDhcpHaGroupsResultsHostsToHclTerraform(struct?: DataBloxoneDhcpHaGroupsResultsHosts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    address: {
      value: cdktf.stringToHclTerraform(struct!.address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    host: {
      value: cdktf.stringToHclTerraform(struct!.host),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role: {
      value: cdktf.stringToHclTerraform(struct!.role),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataBloxoneDhcpHaGroupsResultsHostsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataBloxoneDhcpHaGroupsResultsHosts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._address !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address;
    }
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._role !== undefined) {
      hasAnyValues = true;
      internalValueResult.role = this._role;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataBloxoneDhcpHaGroupsResultsHosts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._address = undefined;
      this._host = undefined;
      this._role = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._address = value.address;
      this._host = value.host;
      this._role = value.role;
    }
  }

  // address - computed: true, optional: true, required: false
  private _address?: string; 
  public get address() {
    return this.getStringAttribute('address');
  }
  public set address(value: string) {
    this._address = value;
  }
  public resetAddress() {
    this._address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address;
  }

  // heartbeats - computed: true, optional: false, required: false
  private _heartbeats = new DataBloxoneDhcpHaGroupsResultsHostsHeartbeatsList(this, "heartbeats", false);
  public get heartbeats() {
    return this._heartbeats;
  }

  // host - computed: true, optional: false, required: true
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }

  // port_v6 - computed: true, optional: false, required: false
  public get portV6() {
    return this.getNumberAttribute('port_v6');
  }

  // role - computed: true, optional: false, required: true
  private _role?: string; 
  public get role() {
    return this.getStringAttribute('role');
  }
  public set role(value: string) {
    this._role = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleInput() {
    return this._role;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // state_v6 - computed: true, optional: false, required: false
  public get stateV6() {
    return this.getStringAttribute('state_v6');
  }
}

export class DataBloxoneDhcpHaGroupsResultsHostsList extends cdktf.ComplexList {
  public internalValue? : DataBloxoneDhcpHaGroupsResultsHosts[] | cdktf.IResolvable

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
  public get(index: number): DataBloxoneDhcpHaGroupsResultsHostsOutputReference {
    return new DataBloxoneDhcpHaGroupsResultsHostsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataBloxoneDhcpHaGroupsResults {
  /**
  * The resource identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/dhcp_ha_groups#anycast_config_id DataBloxoneDhcpHaGroups#anycast_config_id}
  */
  readonly anycastConfigId?: string;
  /**
  * collect_stats gets the HA group stats(state, status, heartbeat) if set to true. Defaults to false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/dhcp_ha_groups#collect_stats DataBloxoneDhcpHaGroups#collect_stats}
  */
  readonly collectStats?: boolean | cdktf.IResolvable;
  /**
  * The description for the HA group. May contain 0 to 1024 characters. Can include UTF-8.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/dhcp_ha_groups#comment DataBloxoneDhcpHaGroups#comment}
  */
  readonly comment?: string;
  /**
  * The list of hosts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/dhcp_ha_groups#hosts DataBloxoneDhcpHaGroups#hosts}
  */
  readonly hosts: DataBloxoneDhcpHaGroupsResultsHosts[] | cdktf.IResolvable;
  /**
  * The mode of the HA group. Valid values are:
  *   * _active-active_: Both on-prem hosts remain active.
  *   * _active-passive_: One on-prem host remains active and one remains passive. When the active on-prem host is down, the passive on-prem host takes over.
  *   * _advanced-active-passive_: One on-prem host may be part of multiple HA groups. When the active on-prem host is down, the passive on-prem host takes over.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/dhcp_ha_groups#mode DataBloxoneDhcpHaGroups#mode}
  */
  readonly mode: string;
  /**
  * The name of the HA group. Must contain 1 to 256 characters. Can include UTF-8.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/dhcp_ha_groups#name DataBloxoneDhcpHaGroups#name}
  */
  readonly name: string;
  /**
  * The tags for the HA group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/dhcp_ha_groups#tags DataBloxoneDhcpHaGroups#tags}
  */
  readonly tags?: { [key: string]: string };
}

export function dataBloxoneDhcpHaGroupsResultsToTerraform(struct?: DataBloxoneDhcpHaGroupsResults): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    anycast_config_id: cdktf.stringToTerraform(struct!.anycastConfigId),
    collect_stats: cdktf.booleanToTerraform(struct!.collectStats),
    comment: cdktf.stringToTerraform(struct!.comment),
    hosts: cdktf.listMapper(dataBloxoneDhcpHaGroupsResultsHostsToTerraform, false)(struct!.hosts),
    mode: cdktf.stringToTerraform(struct!.mode),
    name: cdktf.stringToTerraform(struct!.name),
    tags: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.tags),
  }
}


export function dataBloxoneDhcpHaGroupsResultsToHclTerraform(struct?: DataBloxoneDhcpHaGroupsResults): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    anycast_config_id: {
      value: cdktf.stringToHclTerraform(struct!.anycastConfigId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    collect_stats: {
      value: cdktf.booleanToHclTerraform(struct!.collectStats),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    comment: {
      value: cdktf.stringToHclTerraform(struct!.comment),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hosts: {
      value: cdktf.listMapperHcl(dataBloxoneDhcpHaGroupsResultsHostsToHclTerraform, false)(struct!.hosts),
      isBlock: true,
      type: "list",
      storageClassType: "DataBloxoneDhcpHaGroupsResultsHostsList",
    },
    mode: {
      value: cdktf.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
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

export class DataBloxoneDhcpHaGroupsResultsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataBloxoneDhcpHaGroupsResults | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._anycastConfigId !== undefined) {
      hasAnyValues = true;
      internalValueResult.anycastConfigId = this._anycastConfigId;
    }
    if (this._collectStats !== undefined) {
      hasAnyValues = true;
      internalValueResult.collectStats = this._collectStats;
    }
    if (this._comment !== undefined) {
      hasAnyValues = true;
      internalValueResult.comment = this._comment;
    }
    if (this._hosts?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hosts = this._hosts?.internalValue;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataBloxoneDhcpHaGroupsResults | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._anycastConfigId = undefined;
      this._collectStats = undefined;
      this._comment = undefined;
      this._hosts.internalValue = undefined;
      this._mode = undefined;
      this._name = undefined;
      this._tags = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._anycastConfigId = value.anycastConfigId;
      this._collectStats = value.collectStats;
      this._comment = value.comment;
      this._hosts.internalValue = value.hosts;
      this._mode = value.mode;
      this._name = value.name;
      this._tags = value.tags;
    }
  }

  // anycast_config_id - computed: true, optional: true, required: false
  private _anycastConfigId?: string; 
  public get anycastConfigId() {
    return this.getStringAttribute('anycast_config_id');
  }
  public set anycastConfigId(value: string) {
    this._anycastConfigId = value;
  }
  public resetAnycastConfigId() {
    this._anycastConfigId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get anycastConfigIdInput() {
    return this._anycastConfigId;
  }

  // collect_stats - computed: true, optional: true, required: false
  private _collectStats?: boolean | cdktf.IResolvable; 
  public get collectStats() {
    return this.getBooleanAttribute('collect_stats');
  }
  public set collectStats(value: boolean | cdktf.IResolvable) {
    this._collectStats = value;
  }
  public resetCollectStats() {
    this._collectStats = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get collectStatsInput() {
    return this._collectStats;
  }

  // comment - computed: true, optional: true, required: false
  private _comment?: string; 
  public get comment() {
    return this.getStringAttribute('comment');
  }
  public set comment(value: string) {
    this._comment = value;
  }
  public resetComment() {
    this._comment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentInput() {
    return this._comment;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // hosts - computed: true, optional: false, required: true
  private _hosts = new DataBloxoneDhcpHaGroupsResultsHostsList(this, "hosts", false);
  public get hosts() {
    return this._hosts;
  }
  public putHosts(value: DataBloxoneDhcpHaGroupsResultsHosts[] | cdktf.IResolvable) {
    this._hosts.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostsInput() {
    return this._hosts.internalValue;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ip_space - computed: true, optional: false, required: false
  public get ipSpace() {
    return this.getStringAttribute('ip_space');
  }

  // mode - computed: true, optional: false, required: true
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }

  // name - computed: true, optional: false, required: true
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

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // status_v6 - computed: true, optional: false, required: false
  public get statusV6() {
    return this.getStringAttribute('status_v6');
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

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }
}

export class DataBloxoneDhcpHaGroupsResultsList extends cdktf.ComplexList {
  public internalValue? : DataBloxoneDhcpHaGroupsResults[] | cdktf.IResolvable

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
  public get(index: number): DataBloxoneDhcpHaGroupsResultsOutputReference {
    return new DataBloxoneDhcpHaGroupsResultsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/dhcp_ha_groups bloxone_dhcp_ha_groups}
*/
export class DataBloxoneDhcpHaGroups extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "bloxone_dhcp_ha_groups";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataBloxoneDhcpHaGroups resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataBloxoneDhcpHaGroups to import
  * @param importFromId The id of the existing DataBloxoneDhcpHaGroups that should be imported. Refer to the {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/dhcp_ha_groups#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataBloxoneDhcpHaGroups to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "bloxone_dhcp_ha_groups", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/data-sources/dhcp_ha_groups bloxone_dhcp_ha_groups} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataBloxoneDhcpHaGroupsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataBloxoneDhcpHaGroupsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'bloxone_dhcp_ha_groups',
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
    this._collectStats = config.collectStats;
    this._filters = config.filters;
    this._tagFilters = config.tagFilters;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // collect_stats - computed: false, optional: true, required: false
  private _collectStats?: boolean | cdktf.IResolvable; 
  public get collectStats() {
    return this.getBooleanAttribute('collect_stats');
  }
  public set collectStats(value: boolean | cdktf.IResolvable) {
    this._collectStats = value;
  }
  public resetCollectStats() {
    this._collectStats = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get collectStatsInput() {
    return this._collectStats;
  }

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
  private _results = new DataBloxoneDhcpHaGroupsResultsList(this, "results", false);
  public get results() {
    return this._results;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      collect_stats: cdktf.booleanToTerraform(this._collectStats),
      filters: cdktf.hashMapper(cdktf.stringToTerraform)(this._filters),
      tag_filters: cdktf.hashMapper(cdktf.stringToTerraform)(this._tagFilters),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      collect_stats: {
        value: cdktf.booleanToHclTerraform(this._collectStats),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      filters: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._filters),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      tag_filters: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tagFilters),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
