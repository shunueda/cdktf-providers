// https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/igmp_snooping_vlan
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IgmpSnoopingVlanConfig extends cdktf.TerraformMetaArguments {
  /**
  * Enable immediate group leave on interfaces.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/igmp_snooping_vlan#immediate_leave IgmpSnoopingVlan#immediate_leave}
  */
  readonly immediateLeave?: boolean | cdktf.IResolvable;
  /**
  * Enable L2 querier mode with source address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/igmp_snooping_vlan#l2_querier_source_address IgmpSnoopingVlan#l2_querier_source_address}
  */
  readonly l2QuerierSourceAddress?: string;
  /**
  * VLAN name or `all`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/igmp_snooping_vlan#name IgmpSnoopingVlan#name}
  */
  readonly name: string;
  /**
  * Enable proxy mode.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/igmp_snooping_vlan#proxy IgmpSnoopingVlan#proxy}
  */
  readonly proxy?: boolean | cdktf.IResolvable;
  /**
  * Source IP address to use for proxy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/igmp_snooping_vlan#proxy_source_address IgmpSnoopingVlan#proxy_source_address}
  */
  readonly proxySourceAddress?: string;
  /**
  * When to send host query messages (seconds).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/igmp_snooping_vlan#query_interval IgmpSnoopingVlan#query_interval}
  */
  readonly queryInterval?: number;
  /**
  * When to send group query messages (seconds).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/igmp_snooping_vlan#query_last_member_interval IgmpSnoopingVlan#query_last_member_interval}
  */
  readonly queryLastMemberInterval?: string;
  /**
  * How long to wait for a host query response (seconds).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/igmp_snooping_vlan#query_response_interval IgmpSnoopingVlan#query_response_interval}
  */
  readonly queryResponseInterval?: string;
  /**
  * Expected packet loss on a subnet.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/igmp_snooping_vlan#robust_count IgmpSnoopingVlan#robust_count}
  */
  readonly robustCount?: number;
  /**
  * Routing instance for igmp-snooping protocol if not root level.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/igmp_snooping_vlan#routing_instance IgmpSnoopingVlan#routing_instance}
  */
  readonly routingInstance?: string;
  /**
  * interface block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/igmp_snooping_vlan#interface IgmpSnoopingVlan#interface}
  */
  readonly interface?: IgmpSnoopingVlanInterface[] | cdktf.IResolvable;
}
export interface IgmpSnoopingVlanInterfaceStaticGroup {
  /**
  * IP multicast group address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/igmp_snooping_vlan#address IgmpSnoopingVlan#address}
  */
  readonly address: string;
  /**
  * IP multicast source address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/igmp_snooping_vlan#source IgmpSnoopingVlan#source}
  */
  readonly source?: string;
}

export function igmpSnoopingVlanInterfaceStaticGroupToTerraform(struct?: IgmpSnoopingVlanInterfaceStaticGroup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
    source: cdktf.stringToTerraform(struct!.source),
  }
}


export function igmpSnoopingVlanInterfaceStaticGroupToHclTerraform(struct?: IgmpSnoopingVlanInterfaceStaticGroup | cdktf.IResolvable): any {
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
    source: {
      value: cdktf.stringToHclTerraform(struct!.source),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IgmpSnoopingVlanInterfaceStaticGroupOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IgmpSnoopingVlanInterfaceStaticGroup | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._address !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address;
    }
    if (this._source !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IgmpSnoopingVlanInterfaceStaticGroup | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._address = undefined;
      this._source = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._address = value.address;
      this._source = value.source;
    }
  }

  // address - computed: false, optional: false, required: true
  private _address?: string; 
  public get address() {
    return this.getStringAttribute('address');
  }
  public set address(value: string) {
    this._address = value;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address;
  }

  // source - computed: false, optional: true, required: false
  private _source?: string; 
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string) {
    this._source = value;
  }
  public resetSource() {
    this._source = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
  }
}

export class IgmpSnoopingVlanInterfaceStaticGroupList extends cdktf.ComplexList {
  public internalValue? : IgmpSnoopingVlanInterfaceStaticGroup[] | cdktf.IResolvable

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
  public get(index: number): IgmpSnoopingVlanInterfaceStaticGroupOutputReference {
    return new IgmpSnoopingVlanInterfaceStaticGroupOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IgmpSnoopingVlanInterface {
  /**
  * Maximum number of groups an interface can join.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/igmp_snooping_vlan#group_limit IgmpSnoopingVlan#group_limit}
  */
  readonly groupLimit?: number;
  /**
  * Enable interface to be treated as host-side interface.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/igmp_snooping_vlan#host_only_interface IgmpSnoopingVlan#host_only_interface}
  */
  readonly hostOnlyInterface?: boolean | cdktf.IResolvable;
  /**
  * Enable immediate group leave on interface.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/igmp_snooping_vlan#immediate_leave IgmpSnoopingVlan#immediate_leave}
  */
  readonly immediateLeave?: boolean | cdktf.IResolvable;
  /**
  * Enabling multicast-router-interface on the interface.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/igmp_snooping_vlan#multicast_router_interface IgmpSnoopingVlan#multicast_router_interface}
  */
  readonly multicastRouterInterface?: boolean | cdktf.IResolvable;
  /**
  * Interface name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/igmp_snooping_vlan#name IgmpSnoopingVlan#name}
  */
  readonly name: string;
  /**
  * static_group block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/igmp_snooping_vlan#static_group IgmpSnoopingVlan#static_group}
  */
  readonly staticGroup?: IgmpSnoopingVlanInterfaceStaticGroup[] | cdktf.IResolvable;
}

export function igmpSnoopingVlanInterfaceToTerraform(struct?: IgmpSnoopingVlanInterface | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    group_limit: cdktf.numberToTerraform(struct!.groupLimit),
    host_only_interface: cdktf.booleanToTerraform(struct!.hostOnlyInterface),
    immediate_leave: cdktf.booleanToTerraform(struct!.immediateLeave),
    multicast_router_interface: cdktf.booleanToTerraform(struct!.multicastRouterInterface),
    name: cdktf.stringToTerraform(struct!.name),
    static_group: cdktf.listMapper(igmpSnoopingVlanInterfaceStaticGroupToTerraform, true)(struct!.staticGroup),
  }
}


export function igmpSnoopingVlanInterfaceToHclTerraform(struct?: IgmpSnoopingVlanInterface | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    group_limit: {
      value: cdktf.numberToHclTerraform(struct!.groupLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    host_only_interface: {
      value: cdktf.booleanToHclTerraform(struct!.hostOnlyInterface),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    immediate_leave: {
      value: cdktf.booleanToHclTerraform(struct!.immediateLeave),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    multicast_router_interface: {
      value: cdktf.booleanToHclTerraform(struct!.multicastRouterInterface),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    static_group: {
      value: cdktf.listMapperHcl(igmpSnoopingVlanInterfaceStaticGroupToHclTerraform, true)(struct!.staticGroup),
      isBlock: true,
      type: "set",
      storageClassType: "IgmpSnoopingVlanInterfaceStaticGroupList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IgmpSnoopingVlanInterfaceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IgmpSnoopingVlanInterface | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._groupLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupLimit = this._groupLimit;
    }
    if (this._hostOnlyInterface !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostOnlyInterface = this._hostOnlyInterface;
    }
    if (this._immediateLeave !== undefined) {
      hasAnyValues = true;
      internalValueResult.immediateLeave = this._immediateLeave;
    }
    if (this._multicastRouterInterface !== undefined) {
      hasAnyValues = true;
      internalValueResult.multicastRouterInterface = this._multicastRouterInterface;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._staticGroup?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.staticGroup = this._staticGroup?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IgmpSnoopingVlanInterface | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._groupLimit = undefined;
      this._hostOnlyInterface = undefined;
      this._immediateLeave = undefined;
      this._multicastRouterInterface = undefined;
      this._name = undefined;
      this._staticGroup.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._groupLimit = value.groupLimit;
      this._hostOnlyInterface = value.hostOnlyInterface;
      this._immediateLeave = value.immediateLeave;
      this._multicastRouterInterface = value.multicastRouterInterface;
      this._name = value.name;
      this._staticGroup.internalValue = value.staticGroup;
    }
  }

  // group_limit - computed: false, optional: true, required: false
  private _groupLimit?: number; 
  public get groupLimit() {
    return this.getNumberAttribute('group_limit');
  }
  public set groupLimit(value: number) {
    this._groupLimit = value;
  }
  public resetGroupLimit() {
    this._groupLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupLimitInput() {
    return this._groupLimit;
  }

  // host_only_interface - computed: false, optional: true, required: false
  private _hostOnlyInterface?: boolean | cdktf.IResolvable; 
  public get hostOnlyInterface() {
    return this.getBooleanAttribute('host_only_interface');
  }
  public set hostOnlyInterface(value: boolean | cdktf.IResolvable) {
    this._hostOnlyInterface = value;
  }
  public resetHostOnlyInterface() {
    this._hostOnlyInterface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostOnlyInterfaceInput() {
    return this._hostOnlyInterface;
  }

  // immediate_leave - computed: false, optional: true, required: false
  private _immediateLeave?: boolean | cdktf.IResolvable; 
  public get immediateLeave() {
    return this.getBooleanAttribute('immediate_leave');
  }
  public set immediateLeave(value: boolean | cdktf.IResolvable) {
    this._immediateLeave = value;
  }
  public resetImmediateLeave() {
    this._immediateLeave = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get immediateLeaveInput() {
    return this._immediateLeave;
  }

  // multicast_router_interface - computed: false, optional: true, required: false
  private _multicastRouterInterface?: boolean | cdktf.IResolvable; 
  public get multicastRouterInterface() {
    return this.getBooleanAttribute('multicast_router_interface');
  }
  public set multicastRouterInterface(value: boolean | cdktf.IResolvable) {
    this._multicastRouterInterface = value;
  }
  public resetMulticastRouterInterface() {
    this._multicastRouterInterface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multicastRouterInterfaceInput() {
    return this._multicastRouterInterface;
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

  // static_group - computed: false, optional: true, required: false
  private _staticGroup = new IgmpSnoopingVlanInterfaceStaticGroupList(this, "static_group", true);
  public get staticGroup() {
    return this._staticGroup;
  }
  public putStaticGroup(value: IgmpSnoopingVlanInterfaceStaticGroup[] | cdktf.IResolvable) {
    this._staticGroup.internalValue = value;
  }
  public resetStaticGroup() {
    this._staticGroup.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticGroupInput() {
    return this._staticGroup.internalValue;
  }
}

export class IgmpSnoopingVlanInterfaceList extends cdktf.ComplexList {
  public internalValue? : IgmpSnoopingVlanInterface[] | cdktf.IResolvable

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
  public get(index: number): IgmpSnoopingVlanInterfaceOutputReference {
    return new IgmpSnoopingVlanInterfaceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/igmp_snooping_vlan junos_igmp_snooping_vlan}
*/
export class IgmpSnoopingVlan extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "junos_igmp_snooping_vlan";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IgmpSnoopingVlan resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IgmpSnoopingVlan to import
  * @param importFromId The id of the existing IgmpSnoopingVlan that should be imported. Refer to the {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/igmp_snooping_vlan#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IgmpSnoopingVlan to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "junos_igmp_snooping_vlan", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/igmp_snooping_vlan junos_igmp_snooping_vlan} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IgmpSnoopingVlanConfig
  */
  public constructor(scope: Construct, id: string, config: IgmpSnoopingVlanConfig) {
    super(scope, id, {
      terraformResourceType: 'junos_igmp_snooping_vlan',
      terraformGeneratorMetadata: {
        providerName: 'junos',
        providerVersion: '2.15.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._immediateLeave = config.immediateLeave;
    this._l2QuerierSourceAddress = config.l2QuerierSourceAddress;
    this._name = config.name;
    this._proxy = config.proxy;
    this._proxySourceAddress = config.proxySourceAddress;
    this._queryInterval = config.queryInterval;
    this._queryLastMemberInterval = config.queryLastMemberInterval;
    this._queryResponseInterval = config.queryResponseInterval;
    this._robustCount = config.robustCount;
    this._routingInstance = config.routingInstance;
    this._interface.internalValue = config.interface;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // immediate_leave - computed: false, optional: true, required: false
  private _immediateLeave?: boolean | cdktf.IResolvable; 
  public get immediateLeave() {
    return this.getBooleanAttribute('immediate_leave');
  }
  public set immediateLeave(value: boolean | cdktf.IResolvable) {
    this._immediateLeave = value;
  }
  public resetImmediateLeave() {
    this._immediateLeave = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get immediateLeaveInput() {
    return this._immediateLeave;
  }

  // l2_querier_source_address - computed: false, optional: true, required: false
  private _l2QuerierSourceAddress?: string; 
  public get l2QuerierSourceAddress() {
    return this.getStringAttribute('l2_querier_source_address');
  }
  public set l2QuerierSourceAddress(value: string) {
    this._l2QuerierSourceAddress = value;
  }
  public resetL2QuerierSourceAddress() {
    this._l2QuerierSourceAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l2QuerierSourceAddressInput() {
    return this._l2QuerierSourceAddress;
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

  // proxy - computed: false, optional: true, required: false
  private _proxy?: boolean | cdktf.IResolvable; 
  public get proxy() {
    return this.getBooleanAttribute('proxy');
  }
  public set proxy(value: boolean | cdktf.IResolvable) {
    this._proxy = value;
  }
  public resetProxy() {
    this._proxy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyInput() {
    return this._proxy;
  }

  // proxy_source_address - computed: false, optional: true, required: false
  private _proxySourceAddress?: string; 
  public get proxySourceAddress() {
    return this.getStringAttribute('proxy_source_address');
  }
  public set proxySourceAddress(value: string) {
    this._proxySourceAddress = value;
  }
  public resetProxySourceAddress() {
    this._proxySourceAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxySourceAddressInput() {
    return this._proxySourceAddress;
  }

  // query_interval - computed: false, optional: true, required: false
  private _queryInterval?: number; 
  public get queryInterval() {
    return this.getNumberAttribute('query_interval');
  }
  public set queryInterval(value: number) {
    this._queryInterval = value;
  }
  public resetQueryInterval() {
    this._queryInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryIntervalInput() {
    return this._queryInterval;
  }

  // query_last_member_interval - computed: false, optional: true, required: false
  private _queryLastMemberInterval?: string; 
  public get queryLastMemberInterval() {
    return this.getStringAttribute('query_last_member_interval');
  }
  public set queryLastMemberInterval(value: string) {
    this._queryLastMemberInterval = value;
  }
  public resetQueryLastMemberInterval() {
    this._queryLastMemberInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryLastMemberIntervalInput() {
    return this._queryLastMemberInterval;
  }

  // query_response_interval - computed: false, optional: true, required: false
  private _queryResponseInterval?: string; 
  public get queryResponseInterval() {
    return this.getStringAttribute('query_response_interval');
  }
  public set queryResponseInterval(value: string) {
    this._queryResponseInterval = value;
  }
  public resetQueryResponseInterval() {
    this._queryResponseInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryResponseIntervalInput() {
    return this._queryResponseInterval;
  }

  // robust_count - computed: false, optional: true, required: false
  private _robustCount?: number; 
  public get robustCount() {
    return this.getNumberAttribute('robust_count');
  }
  public set robustCount(value: number) {
    this._robustCount = value;
  }
  public resetRobustCount() {
    this._robustCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get robustCountInput() {
    return this._robustCount;
  }

  // routing_instance - computed: true, optional: true, required: false
  private _routingInstance?: string; 
  public get routingInstance() {
    return this.getStringAttribute('routing_instance');
  }
  public set routingInstance(value: string) {
    this._routingInstance = value;
  }
  public resetRoutingInstance() {
    this._routingInstance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routingInstanceInput() {
    return this._routingInstance;
  }

  // interface - computed: false, optional: true, required: false
  private _interface = new IgmpSnoopingVlanInterfaceList(this, "interface", false);
  public get interface() {
    return this._interface;
  }
  public putInterface(value: IgmpSnoopingVlanInterface[] | cdktf.IResolvable) {
    this._interface.internalValue = value;
  }
  public resetInterface() {
    this._interface.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceInput() {
    return this._interface.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      immediate_leave: cdktf.booleanToTerraform(this._immediateLeave),
      l2_querier_source_address: cdktf.stringToTerraform(this._l2QuerierSourceAddress),
      name: cdktf.stringToTerraform(this._name),
      proxy: cdktf.booleanToTerraform(this._proxy),
      proxy_source_address: cdktf.stringToTerraform(this._proxySourceAddress),
      query_interval: cdktf.numberToTerraform(this._queryInterval),
      query_last_member_interval: cdktf.stringToTerraform(this._queryLastMemberInterval),
      query_response_interval: cdktf.stringToTerraform(this._queryResponseInterval),
      robust_count: cdktf.numberToTerraform(this._robustCount),
      routing_instance: cdktf.stringToTerraform(this._routingInstance),
      interface: cdktf.listMapper(igmpSnoopingVlanInterfaceToTerraform, true)(this._interface.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      immediate_leave: {
        value: cdktf.booleanToHclTerraform(this._immediateLeave),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      l2_querier_source_address: {
        value: cdktf.stringToHclTerraform(this._l2QuerierSourceAddress),
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
      proxy: {
        value: cdktf.booleanToHclTerraform(this._proxy),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      proxy_source_address: {
        value: cdktf.stringToHclTerraform(this._proxySourceAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      query_interval: {
        value: cdktf.numberToHclTerraform(this._queryInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      query_last_member_interval: {
        value: cdktf.stringToHclTerraform(this._queryLastMemberInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      query_response_interval: {
        value: cdktf.stringToHclTerraform(this._queryResponseInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      robust_count: {
        value: cdktf.numberToHclTerraform(this._robustCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      routing_instance: {
        value: cdktf.stringToHclTerraform(this._routingInstance),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      interface: {
        value: cdktf.listMapperHcl(igmpSnoopingVlanInterfaceToHclTerraform, true)(this._interface.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "IgmpSnoopingVlanInterfaceList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
