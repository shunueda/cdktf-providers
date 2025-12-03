// https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/resources/dhcp_ha_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DhcpHaGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * The resource identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/resources/dhcp_ha_group#anycast_config_id DhcpHaGroup#anycast_config_id}
  */
  readonly anycastConfigId?: string;
  /**
  * collect_stats gets the HA group stats(state, status, heartbeat) if set to true. Defaults to false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/resources/dhcp_ha_group#collect_stats DhcpHaGroup#collect_stats}
  */
  readonly collectStats?: boolean | cdktf.IResolvable;
  /**
  * The description for the HA group. May contain 0 to 1024 characters. Can include UTF-8.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/resources/dhcp_ha_group#comment DhcpHaGroup#comment}
  */
  readonly comment?: string;
  /**
  * The list of hosts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/resources/dhcp_ha_group#hosts DhcpHaGroup#hosts}
  */
  readonly hosts: DhcpHaGroupHosts[] | cdktf.IResolvable;
  /**
  * The mode of the HA group. Valid values are:
  *   * _active-active_: Both on-prem hosts remain active.
  *   * _active-passive_: One on-prem host remains active and one remains passive. When the active on-prem host is down, the passive on-prem host takes over.
  *   * _advanced-active-passive_: One on-prem host may be part of multiple HA groups. When the active on-prem host is down, the passive on-prem host takes over.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/resources/dhcp_ha_group#mode DhcpHaGroup#mode}
  */
  readonly mode: string;
  /**
  * The name of the HA group. Must contain 1 to 256 characters. Can include UTF-8.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/resources/dhcp_ha_group#name DhcpHaGroup#name}
  */
  readonly name: string;
  /**
  * The tags for the HA group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/resources/dhcp_ha_group#tags DhcpHaGroup#tags}
  */
  readonly tags?: { [key: string]: string };
}
export interface DhcpHaGroupHostsHeartbeats {
}

export function dhcpHaGroupHostsHeartbeatsToTerraform(struct?: DhcpHaGroupHostsHeartbeats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dhcpHaGroupHostsHeartbeatsToHclTerraform(struct?: DhcpHaGroupHostsHeartbeats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DhcpHaGroupHostsHeartbeatsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DhcpHaGroupHostsHeartbeats | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DhcpHaGroupHostsHeartbeats | undefined) {
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

export class DhcpHaGroupHostsHeartbeatsList extends cdktf.ComplexList {

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
  public get(index: number): DhcpHaGroupHostsHeartbeatsOutputReference {
    return new DhcpHaGroupHostsHeartbeatsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DhcpHaGroupHosts {
  /**
  * The address on which this host listens.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/resources/dhcp_ha_group#address DhcpHaGroup#address}
  */
  readonly address?: string;
  /**
  * The resource identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/resources/dhcp_ha_group#host DhcpHaGroup#host}
  */
  readonly host: string;
  /**
  * The role of this host in the HA relationship: _active_ or _passive_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/resources/dhcp_ha_group#role DhcpHaGroup#role}
  */
  readonly role: string;
}

export function dhcpHaGroupHostsToTerraform(struct?: DhcpHaGroupHosts | cdktf.IResolvable): any {
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


export function dhcpHaGroupHostsToHclTerraform(struct?: DhcpHaGroupHosts | cdktf.IResolvable): any {
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

export class DhcpHaGroupHostsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DhcpHaGroupHosts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
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

  public set internalValue(value: DhcpHaGroupHosts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._address = undefined;
      this._host = undefined;
      this._role = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
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
  private _heartbeats = new DhcpHaGroupHostsHeartbeatsList(this, "heartbeats", false);
  public get heartbeats() {
    return this._heartbeats;
  }

  // host - computed: false, optional: false, required: true
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

  // role - computed: false, optional: false, required: true
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

export class DhcpHaGroupHostsList extends cdktf.ComplexList {
  public internalValue? : DhcpHaGroupHosts[] | cdktf.IResolvable

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
  public get(index: number): DhcpHaGroupHostsOutputReference {
    return new DhcpHaGroupHostsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/resources/dhcp_ha_group bloxone_dhcp_ha_group}
*/
export class DhcpHaGroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "bloxone_dhcp_ha_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DhcpHaGroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DhcpHaGroup to import
  * @param importFromId The id of the existing DhcpHaGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/resources/dhcp_ha_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DhcpHaGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "bloxone_dhcp_ha_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.4/docs/resources/dhcp_ha_group bloxone_dhcp_ha_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DhcpHaGroupConfig
  */
  public constructor(scope: Construct, id: string, config: DhcpHaGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'bloxone_dhcp_ha_group',
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
    this._anycastConfigId = config.anycastConfigId;
    this._collectStats = config.collectStats;
    this._comment = config.comment;
    this._hosts.internalValue = config.hosts;
    this._mode = config.mode;
    this._name = config.name;
    this._tags = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // anycast_config_id - computed: false, optional: true, required: false
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

  // hosts - computed: false, optional: false, required: true
  private _hosts = new DhcpHaGroupHostsList(this, "hosts", false);
  public get hosts() {
    return this._hosts;
  }
  public putHosts(value: DhcpHaGroupHosts[] | cdktf.IResolvable) {
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

  // mode - computed: false, optional: false, required: true
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      anycast_config_id: cdktf.stringToTerraform(this._anycastConfigId),
      collect_stats: cdktf.booleanToTerraform(this._collectStats),
      comment: cdktf.stringToTerraform(this._comment),
      hosts: cdktf.listMapper(dhcpHaGroupHostsToTerraform, false)(this._hosts.internalValue),
      mode: cdktf.stringToTerraform(this._mode),
      name: cdktf.stringToTerraform(this._name),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      anycast_config_id: {
        value: cdktf.stringToHclTerraform(this._anycastConfigId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      collect_stats: {
        value: cdktf.booleanToHclTerraform(this._collectStats),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      comment: {
        value: cdktf.stringToHclTerraform(this._comment),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hosts: {
        value: cdktf.listMapperHcl(dhcpHaGroupHostsToHclTerraform, false)(this._hosts.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DhcpHaGroupHostsList",
      },
      mode: {
        value: cdktf.stringToHclTerraform(this._mode),
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
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
