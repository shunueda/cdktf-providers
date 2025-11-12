// https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/bridge_domain
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BridgeDomainConfig extends cdktf.TerraformMetaArguments {
  /**
  * List of Community VLANs for private vlan bridge domain.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/bridge_domain#community_vlans BridgeDomain#community_vlans}
  */
  readonly communityVlans?: string[];
  /**
  * Text description of bridge domain.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/bridge_domain#description BridgeDomain#description}
  */
  readonly description?: string;
  /**
  * Domain-id for auto derived Route Target.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/bridge_domain#domain_id BridgeDomain#domain_id}
  */
  readonly domainId?: number;
  /**
  * Forwarding instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/bridge_domain#domain_type_bridge BridgeDomain#domain_type_bridge}
  */
  readonly domainTypeBridge?: boolean | cdktf.IResolvable;
  /**
  * Interface for this bridge domain.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/bridge_domain#interface BridgeDomain#interface}
  */
  readonly interface?: string[];
  /**
  * Isolated VLAN ID for private vlan bridge domain.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/bridge_domain#isolated_vlan BridgeDomain#isolated_vlan}
  */
  readonly isolatedVlan?: number;
  /**
  * Bridge domain name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/bridge_domain#name BridgeDomain#name}
  */
  readonly name: string;
  /**
  * Routing instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/bridge_domain#routing_instance BridgeDomain#routing_instance}
  */
  readonly routingInstance?: string;
  /**
  * Routing interface name for this bridge-domain.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/bridge_domain#routing_interface BridgeDomain#routing_interface}
  */
  readonly routingInterface?: string;
  /**
  * Service id required if bridge-domain is of type MC-AE andvlan-id all or vlan-id none or vlan-tags.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/bridge_domain#service_id BridgeDomain#service_id}
  */
  readonly serviceId?: number;
  /**
  * IEEE 802.1q VLAN identifier for bridging domain.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/bridge_domain#vlan_id BridgeDomain#vlan_id}
  */
  readonly vlanId?: number;
  /**
  * Create bridge-domain for each of the vlan-id specified in the vlan-id-list.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/bridge_domain#vlan_id_list BridgeDomain#vlan_id_list}
  */
  readonly vlanIdList?: string[];
  /**
  * vxlan block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/bridge_domain#vxlan BridgeDomain#vxlan}
  */
  readonly vxlan?: BridgeDomainVxlan;
}
export interface BridgeDomainVxlan {
  /**
  * Accept VXLAN packets with inner VLAN.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/bridge_domain#decapsulate_accept_inner_vlan BridgeDomain#decapsulate_accept_inner_vlan}
  */
  readonly decapsulateAcceptInnerVlan?: boolean | cdktf.IResolvable;
  /**
  * Retain inner VLAN in the packet.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/bridge_domain#encapsulate_inner_vlan BridgeDomain#encapsulate_inner_vlan}
  */
  readonly encapsulateInnerVlan?: boolean | cdktf.IResolvable;
  /**
  * Enable ingress node replication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/bridge_domain#ingress_node_replication BridgeDomain#ingress_node_replication}
  */
  readonly ingressNodeReplication?: boolean | cdktf.IResolvable;
  /**
  * CIDR for Multicast group registered for VXLAN segment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/bridge_domain#multicast_group BridgeDomain#multicast_group}
  */
  readonly multicastGroup?: string;
  /**
  * Bridge-domain is managed remotely via VXLAN OVSDB Controller.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/bridge_domain#ovsdb_managed BridgeDomain#ovsdb_managed}
  */
  readonly ovsdbManaged?: boolean | cdktf.IResolvable;
  /**
  * Configure bridge domain specific static remote VXLAN tunnel endpoints.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/bridge_domain#static_remote_vtep_list BridgeDomain#static_remote_vtep_list}
  */
  readonly staticRemoteVtepList?: string[];
  /**
  * Unreachable VXLAN tunnel endpoint removal timer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/bridge_domain#unreachable_vtep_aging_timer BridgeDomain#unreachable_vtep_aging_timer}
  */
  readonly unreachableVtepAgingTimer?: number;
  /**
  * VXLAN identifier (0..16777214).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/bridge_domain#vni BridgeDomain#vni}
  */
  readonly vni?: number;
  /**
  * Extend VNI to EVPN.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/bridge_domain#vni_extend_evpn BridgeDomain#vni_extend_evpn}
  */
  readonly vniExtendEvpn?: boolean | cdktf.IResolvable;
}

export function bridgeDomainVxlanToTerraform(struct?: BridgeDomainVxlan | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    decapsulate_accept_inner_vlan: cdktf.booleanToTerraform(struct!.decapsulateAcceptInnerVlan),
    encapsulate_inner_vlan: cdktf.booleanToTerraform(struct!.encapsulateInnerVlan),
    ingress_node_replication: cdktf.booleanToTerraform(struct!.ingressNodeReplication),
    multicast_group: cdktf.stringToTerraform(struct!.multicastGroup),
    ovsdb_managed: cdktf.booleanToTerraform(struct!.ovsdbManaged),
    static_remote_vtep_list: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.staticRemoteVtepList),
    unreachable_vtep_aging_timer: cdktf.numberToTerraform(struct!.unreachableVtepAgingTimer),
    vni: cdktf.numberToTerraform(struct!.vni),
    vni_extend_evpn: cdktf.booleanToTerraform(struct!.vniExtendEvpn),
  }
}


export function bridgeDomainVxlanToHclTerraform(struct?: BridgeDomainVxlan | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    decapsulate_accept_inner_vlan: {
      value: cdktf.booleanToHclTerraform(struct!.decapsulateAcceptInnerVlan),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    encapsulate_inner_vlan: {
      value: cdktf.booleanToHclTerraform(struct!.encapsulateInnerVlan),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ingress_node_replication: {
      value: cdktf.booleanToHclTerraform(struct!.ingressNodeReplication),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    multicast_group: {
      value: cdktf.stringToHclTerraform(struct!.multicastGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ovsdb_managed: {
      value: cdktf.booleanToHclTerraform(struct!.ovsdbManaged),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    static_remote_vtep_list: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.staticRemoteVtepList),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    unreachable_vtep_aging_timer: {
      value: cdktf.numberToHclTerraform(struct!.unreachableVtepAgingTimer),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    vni: {
      value: cdktf.numberToHclTerraform(struct!.vni),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    vni_extend_evpn: {
      value: cdktf.booleanToHclTerraform(struct!.vniExtendEvpn),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BridgeDomainVxlanOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BridgeDomainVxlan | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._decapsulateAcceptInnerVlan !== undefined) {
      hasAnyValues = true;
      internalValueResult.decapsulateAcceptInnerVlan = this._decapsulateAcceptInnerVlan;
    }
    if (this._encapsulateInnerVlan !== undefined) {
      hasAnyValues = true;
      internalValueResult.encapsulateInnerVlan = this._encapsulateInnerVlan;
    }
    if (this._ingressNodeReplication !== undefined) {
      hasAnyValues = true;
      internalValueResult.ingressNodeReplication = this._ingressNodeReplication;
    }
    if (this._multicastGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.multicastGroup = this._multicastGroup;
    }
    if (this._ovsdbManaged !== undefined) {
      hasAnyValues = true;
      internalValueResult.ovsdbManaged = this._ovsdbManaged;
    }
    if (this._staticRemoteVtepList !== undefined) {
      hasAnyValues = true;
      internalValueResult.staticRemoteVtepList = this._staticRemoteVtepList;
    }
    if (this._unreachableVtepAgingTimer !== undefined) {
      hasAnyValues = true;
      internalValueResult.unreachableVtepAgingTimer = this._unreachableVtepAgingTimer;
    }
    if (this._vni !== undefined) {
      hasAnyValues = true;
      internalValueResult.vni = this._vni;
    }
    if (this._vniExtendEvpn !== undefined) {
      hasAnyValues = true;
      internalValueResult.vniExtendEvpn = this._vniExtendEvpn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BridgeDomainVxlan | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._decapsulateAcceptInnerVlan = undefined;
      this._encapsulateInnerVlan = undefined;
      this._ingressNodeReplication = undefined;
      this._multicastGroup = undefined;
      this._ovsdbManaged = undefined;
      this._staticRemoteVtepList = undefined;
      this._unreachableVtepAgingTimer = undefined;
      this._vni = undefined;
      this._vniExtendEvpn = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._decapsulateAcceptInnerVlan = value.decapsulateAcceptInnerVlan;
      this._encapsulateInnerVlan = value.encapsulateInnerVlan;
      this._ingressNodeReplication = value.ingressNodeReplication;
      this._multicastGroup = value.multicastGroup;
      this._ovsdbManaged = value.ovsdbManaged;
      this._staticRemoteVtepList = value.staticRemoteVtepList;
      this._unreachableVtepAgingTimer = value.unreachableVtepAgingTimer;
      this._vni = value.vni;
      this._vniExtendEvpn = value.vniExtendEvpn;
    }
  }

  // decapsulate_accept_inner_vlan - computed: false, optional: true, required: false
  private _decapsulateAcceptInnerVlan?: boolean | cdktf.IResolvable; 
  public get decapsulateAcceptInnerVlan() {
    return this.getBooleanAttribute('decapsulate_accept_inner_vlan');
  }
  public set decapsulateAcceptInnerVlan(value: boolean | cdktf.IResolvable) {
    this._decapsulateAcceptInnerVlan = value;
  }
  public resetDecapsulateAcceptInnerVlan() {
    this._decapsulateAcceptInnerVlan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get decapsulateAcceptInnerVlanInput() {
    return this._decapsulateAcceptInnerVlan;
  }

  // encapsulate_inner_vlan - computed: false, optional: true, required: false
  private _encapsulateInnerVlan?: boolean | cdktf.IResolvable; 
  public get encapsulateInnerVlan() {
    return this.getBooleanAttribute('encapsulate_inner_vlan');
  }
  public set encapsulateInnerVlan(value: boolean | cdktf.IResolvable) {
    this._encapsulateInnerVlan = value;
  }
  public resetEncapsulateInnerVlan() {
    this._encapsulateInnerVlan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encapsulateInnerVlanInput() {
    return this._encapsulateInnerVlan;
  }

  // ingress_node_replication - computed: false, optional: true, required: false
  private _ingressNodeReplication?: boolean | cdktf.IResolvable; 
  public get ingressNodeReplication() {
    return this.getBooleanAttribute('ingress_node_replication');
  }
  public set ingressNodeReplication(value: boolean | cdktf.IResolvable) {
    this._ingressNodeReplication = value;
  }
  public resetIngressNodeReplication() {
    this._ingressNodeReplication = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ingressNodeReplicationInput() {
    return this._ingressNodeReplication;
  }

  // multicast_group - computed: false, optional: true, required: false
  private _multicastGroup?: string; 
  public get multicastGroup() {
    return this.getStringAttribute('multicast_group');
  }
  public set multicastGroup(value: string) {
    this._multicastGroup = value;
  }
  public resetMulticastGroup() {
    this._multicastGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multicastGroupInput() {
    return this._multicastGroup;
  }

  // ovsdb_managed - computed: false, optional: true, required: false
  private _ovsdbManaged?: boolean | cdktf.IResolvable; 
  public get ovsdbManaged() {
    return this.getBooleanAttribute('ovsdb_managed');
  }
  public set ovsdbManaged(value: boolean | cdktf.IResolvable) {
    this._ovsdbManaged = value;
  }
  public resetOvsdbManaged() {
    this._ovsdbManaged = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ovsdbManagedInput() {
    return this._ovsdbManaged;
  }

  // static_remote_vtep_list - computed: false, optional: true, required: false
  private _staticRemoteVtepList?: string[]; 
  public get staticRemoteVtepList() {
    return cdktf.Fn.tolist(this.getListAttribute('static_remote_vtep_list'));
  }
  public set staticRemoteVtepList(value: string[]) {
    this._staticRemoteVtepList = value;
  }
  public resetStaticRemoteVtepList() {
    this._staticRemoteVtepList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticRemoteVtepListInput() {
    return this._staticRemoteVtepList;
  }

  // unreachable_vtep_aging_timer - computed: false, optional: true, required: false
  private _unreachableVtepAgingTimer?: number; 
  public get unreachableVtepAgingTimer() {
    return this.getNumberAttribute('unreachable_vtep_aging_timer');
  }
  public set unreachableVtepAgingTimer(value: number) {
    this._unreachableVtepAgingTimer = value;
  }
  public resetUnreachableVtepAgingTimer() {
    this._unreachableVtepAgingTimer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unreachableVtepAgingTimerInput() {
    return this._unreachableVtepAgingTimer;
  }

  // vni - computed: false, optional: true, required: false
  private _vni?: number; 
  public get vni() {
    return this.getNumberAttribute('vni');
  }
  public set vni(value: number) {
    this._vni = value;
  }
  public resetVni() {
    this._vni = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vniInput() {
    return this._vni;
  }

  // vni_extend_evpn - computed: false, optional: true, required: false
  private _vniExtendEvpn?: boolean | cdktf.IResolvable; 
  public get vniExtendEvpn() {
    return this.getBooleanAttribute('vni_extend_evpn');
  }
  public set vniExtendEvpn(value: boolean | cdktf.IResolvable) {
    this._vniExtendEvpn = value;
  }
  public resetVniExtendEvpn() {
    this._vniExtendEvpn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vniExtendEvpnInput() {
    return this._vniExtendEvpn;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/bridge_domain junos_bridge_domain}
*/
export class BridgeDomain extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "junos_bridge_domain";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a BridgeDomain resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the BridgeDomain to import
  * @param importFromId The id of the existing BridgeDomain that should be imported. Refer to the {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/bridge_domain#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the BridgeDomain to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "junos_bridge_domain", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/bridge_domain junos_bridge_domain} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BridgeDomainConfig
  */
  public constructor(scope: Construct, id: string, config: BridgeDomainConfig) {
    super(scope, id, {
      terraformResourceType: 'junos_bridge_domain',
      terraformGeneratorMetadata: {
        providerName: 'junos',
        providerVersion: '2.15.0',
        providerVersionConstraint: '2.15.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._communityVlans = config.communityVlans;
    this._description = config.description;
    this._domainId = config.domainId;
    this._domainTypeBridge = config.domainTypeBridge;
    this._interface = config.interface;
    this._isolatedVlan = config.isolatedVlan;
    this._name = config.name;
    this._routingInstance = config.routingInstance;
    this._routingInterface = config.routingInterface;
    this._serviceId = config.serviceId;
    this._vlanId = config.vlanId;
    this._vlanIdList = config.vlanIdList;
    this._vxlan.internalValue = config.vxlan;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // community_vlans - computed: false, optional: true, required: false
  private _communityVlans?: string[]; 
  public get communityVlans() {
    return cdktf.Fn.tolist(this.getListAttribute('community_vlans'));
  }
  public set communityVlans(value: string[]) {
    this._communityVlans = value;
  }
  public resetCommunityVlans() {
    this._communityVlans = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get communityVlansInput() {
    return this._communityVlans;
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

  // domain_id - computed: false, optional: true, required: false
  private _domainId?: number; 
  public get domainId() {
    return this.getNumberAttribute('domain_id');
  }
  public set domainId(value: number) {
    this._domainId = value;
  }
  public resetDomainId() {
    this._domainId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainIdInput() {
    return this._domainId;
  }

  // domain_type_bridge - computed: false, optional: true, required: false
  private _domainTypeBridge?: boolean | cdktf.IResolvable; 
  public get domainTypeBridge() {
    return this.getBooleanAttribute('domain_type_bridge');
  }
  public set domainTypeBridge(value: boolean | cdktf.IResolvable) {
    this._domainTypeBridge = value;
  }
  public resetDomainTypeBridge() {
    this._domainTypeBridge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainTypeBridgeInput() {
    return this._domainTypeBridge;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // interface - computed: false, optional: true, required: false
  private _interface?: string[]; 
  public get interface() {
    return cdktf.Fn.tolist(this.getListAttribute('interface'));
  }
  public set interface(value: string[]) {
    this._interface = value;
  }
  public resetInterface() {
    this._interface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceInput() {
    return this._interface;
  }

  // isolated_vlan - computed: false, optional: true, required: false
  private _isolatedVlan?: number; 
  public get isolatedVlan() {
    return this.getNumberAttribute('isolated_vlan');
  }
  public set isolatedVlan(value: number) {
    this._isolatedVlan = value;
  }
  public resetIsolatedVlan() {
    this._isolatedVlan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isolatedVlanInput() {
    return this._isolatedVlan;
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

  // routing_interface - computed: false, optional: true, required: false
  private _routingInterface?: string; 
  public get routingInterface() {
    return this.getStringAttribute('routing_interface');
  }
  public set routingInterface(value: string) {
    this._routingInterface = value;
  }
  public resetRoutingInterface() {
    this._routingInterface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routingInterfaceInput() {
    return this._routingInterface;
  }

  // service_id - computed: false, optional: true, required: false
  private _serviceId?: number; 
  public get serviceId() {
    return this.getNumberAttribute('service_id');
  }
  public set serviceId(value: number) {
    this._serviceId = value;
  }
  public resetServiceId() {
    this._serviceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceIdInput() {
    return this._serviceId;
  }

  // vlan_id - computed: false, optional: true, required: false
  private _vlanId?: number; 
  public get vlanId() {
    return this.getNumberAttribute('vlan_id');
  }
  public set vlanId(value: number) {
    this._vlanId = value;
  }
  public resetVlanId() {
    this._vlanId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanIdInput() {
    return this._vlanId;
  }

  // vlan_id_list - computed: false, optional: true, required: false
  private _vlanIdList?: string[]; 
  public get vlanIdList() {
    return cdktf.Fn.tolist(this.getListAttribute('vlan_id_list'));
  }
  public set vlanIdList(value: string[]) {
    this._vlanIdList = value;
  }
  public resetVlanIdList() {
    this._vlanIdList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanIdListInput() {
    return this._vlanIdList;
  }

  // vxlan - computed: false, optional: true, required: false
  private _vxlan = new BridgeDomainVxlanOutputReference(this, "vxlan");
  public get vxlan() {
    return this._vxlan;
  }
  public putVxlan(value: BridgeDomainVxlan) {
    this._vxlan.internalValue = value;
  }
  public resetVxlan() {
    this._vxlan.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vxlanInput() {
    return this._vxlan.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      community_vlans: cdktf.listMapper(cdktf.stringToTerraform, false)(this._communityVlans),
      description: cdktf.stringToTerraform(this._description),
      domain_id: cdktf.numberToTerraform(this._domainId),
      domain_type_bridge: cdktf.booleanToTerraform(this._domainTypeBridge),
      interface: cdktf.listMapper(cdktf.stringToTerraform, false)(this._interface),
      isolated_vlan: cdktf.numberToTerraform(this._isolatedVlan),
      name: cdktf.stringToTerraform(this._name),
      routing_instance: cdktf.stringToTerraform(this._routingInstance),
      routing_interface: cdktf.stringToTerraform(this._routingInterface),
      service_id: cdktf.numberToTerraform(this._serviceId),
      vlan_id: cdktf.numberToTerraform(this._vlanId),
      vlan_id_list: cdktf.listMapper(cdktf.stringToTerraform, false)(this._vlanIdList),
      vxlan: bridgeDomainVxlanToTerraform(this._vxlan.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      community_vlans: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._communityVlans),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      domain_id: {
        value: cdktf.numberToHclTerraform(this._domainId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      domain_type_bridge: {
        value: cdktf.booleanToHclTerraform(this._domainTypeBridge),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      interface: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._interface),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      isolated_vlan: {
        value: cdktf.numberToHclTerraform(this._isolatedVlan),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      routing_instance: {
        value: cdktf.stringToHclTerraform(this._routingInstance),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      routing_interface: {
        value: cdktf.stringToHclTerraform(this._routingInterface),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_id: {
        value: cdktf.numberToHclTerraform(this._serviceId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      vlan_id: {
        value: cdktf.numberToHclTerraform(this._vlanId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      vlan_id_list: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._vlanIdList),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      vxlan: {
        value: bridgeDomainVxlanToHclTerraform(this._vxlan.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "BridgeDomainVxlan",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
