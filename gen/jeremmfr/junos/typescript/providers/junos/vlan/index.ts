// https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/vlan
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VlanConfig extends cdktf.TerraformMetaArguments {
  /**
  * List of VLAN id or name of community vlans for primary vlan.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/vlan#community_vlans Vlan#community_vlans}
  */
  readonly communityVlans?: string[];
  /**
  * Text description of VLAN.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/vlan#description Vlan#description}
  */
  readonly description?: string;
  /**
  * Input filter to apply for forwarded packets.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/vlan#forward_filter_input Vlan#forward_filter_input}
  */
  readonly forwardFilterInput?: string;
  /**
  * Output filter to apply for forwarded packets.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/vlan#forward_filter_output Vlan#forward_filter_output}
  */
  readonly forwardFilterOutput?: string;
  /**
  * Input filter to apply for ethernet switching flood packets.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/vlan#forward_flood_input Vlan#forward_flood_input}
  */
  readonly forwardFloodInput?: string;
  /**
  * Interface name for this VLAN.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/vlan#interface Vlan#interface}
  */
  readonly interface?: string[];
  /**
  * VLAN id or name of isolated vlan for primary vlan.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/vlan#isolated_vlan Vlan#isolated_vlan}
  */
  readonly isolatedVlan?: string;
  /**
  * L3 interface name for this VLAN.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/vlan#l3_interface Vlan#l3_interface}
  */
  readonly l3Interface?: string;
  /**
  * The name of VLAN.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/vlan#name Vlan#name}
  */
  readonly name: string;
  /**
  * Turn off ARP suppression.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/vlan#no_arp_suppression Vlan#no_arp_suppression}
  */
  readonly noArpSuppression?: boolean | cdktf.IResolvable;
  /**
  * Type of secondary VLAN for private vlan.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/vlan#private_vlan Vlan#private_vlan}
  */
  readonly privateVlan?: string;
  /**
  * Routing instance for vlan if not root level.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/vlan#routing_instance Vlan#routing_instance}
  */
  readonly routingInstance?: string;
  /**
  * Service id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/vlan#service_id Vlan#service_id}
  */
  readonly serviceId?: number;
  /**
  * 802.1q VLAN id or `all` or `none`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/vlan#vlan_id Vlan#vlan_id}
  */
  readonly vlanId?: string;
  /**
  * List of 802.1q VLAN id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/vlan#vlan_id_list Vlan#vlan_id_list}
  */
  readonly vlanIdList?: string[];
  /**
  * vxlan block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/vlan#vxlan Vlan#vxlan}
  */
  readonly vxlan?: VlanVxlan;
}
export interface VlanVxlan {
  /**
  * Retain inner VLAN in the packet.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/vlan#encapsulate_inner_vlan Vlan#encapsulate_inner_vlan}
  */
  readonly encapsulateInnerVlan?: boolean | cdktf.IResolvable;
  /**
  * Enable ingress node replication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/vlan#ingress_node_replication Vlan#ingress_node_replication}
  */
  readonly ingressNodeReplication?: boolean | cdktf.IResolvable;
  /**
  * Multicast group registered for VXLAN segment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/vlan#multicast_group Vlan#multicast_group}
  */
  readonly multicastGroup?: string;
  /**
  * Bridge-domain is managed remotely via VXLAN OVSDB Controller.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/vlan#ovsdb_managed Vlan#ovsdb_managed}
  */
  readonly ovsdbManaged?: boolean | cdktf.IResolvable;
  /**
  * Configure vlan specific static remote VXLAN tunnel endpoints.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/vlan#static_remote_vtep_list Vlan#static_remote_vtep_list}
  */
  readonly staticRemoteVtepList?: string[];
  /**
  * Translated VXLAN identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/vlan#translation_vni Vlan#translation_vni}
  */
  readonly translationVni?: number;
  /**
  * Unreachable VXLAN tunnel endpoint removal timer (seconds).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/vlan#unreachable_vtep_aging_timer Vlan#unreachable_vtep_aging_timer}
  */
  readonly unreachableVtepAgingTimer?: number;
  /**
  * VXLAN identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/vlan#vni Vlan#vni}
  */
  readonly vni?: number;
  /**
  * Extend VNI to EVPN.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/vlan#vni_extend_evpn Vlan#vni_extend_evpn}
  */
  readonly vniExtendEvpn?: boolean | cdktf.IResolvable;
}

export function vlanVxlanToTerraform(struct?: VlanVxlan | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    encapsulate_inner_vlan: cdktf.booleanToTerraform(struct!.encapsulateInnerVlan),
    ingress_node_replication: cdktf.booleanToTerraform(struct!.ingressNodeReplication),
    multicast_group: cdktf.stringToTerraform(struct!.multicastGroup),
    ovsdb_managed: cdktf.booleanToTerraform(struct!.ovsdbManaged),
    static_remote_vtep_list: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.staticRemoteVtepList),
    translation_vni: cdktf.numberToTerraform(struct!.translationVni),
    unreachable_vtep_aging_timer: cdktf.numberToTerraform(struct!.unreachableVtepAgingTimer),
    vni: cdktf.numberToTerraform(struct!.vni),
    vni_extend_evpn: cdktf.booleanToTerraform(struct!.vniExtendEvpn),
  }
}


export function vlanVxlanToHclTerraform(struct?: VlanVxlan | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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
    translation_vni: {
      value: cdktf.numberToHclTerraform(struct!.translationVni),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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

export class VlanVxlanOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VlanVxlan | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
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
    if (this._translationVni !== undefined) {
      hasAnyValues = true;
      internalValueResult.translationVni = this._translationVni;
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

  public set internalValue(value: VlanVxlan | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._encapsulateInnerVlan = undefined;
      this._ingressNodeReplication = undefined;
      this._multicastGroup = undefined;
      this._ovsdbManaged = undefined;
      this._staticRemoteVtepList = undefined;
      this._translationVni = undefined;
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
      this._encapsulateInnerVlan = value.encapsulateInnerVlan;
      this._ingressNodeReplication = value.ingressNodeReplication;
      this._multicastGroup = value.multicastGroup;
      this._ovsdbManaged = value.ovsdbManaged;
      this._staticRemoteVtepList = value.staticRemoteVtepList;
      this._translationVni = value.translationVni;
      this._unreachableVtepAgingTimer = value.unreachableVtepAgingTimer;
      this._vni = value.vni;
      this._vniExtendEvpn = value.vniExtendEvpn;
    }
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

  // translation_vni - computed: false, optional: true, required: false
  private _translationVni?: number; 
  public get translationVni() {
    return this.getNumberAttribute('translation_vni');
  }
  public set translationVni(value: number) {
    this._translationVni = value;
  }
  public resetTranslationVni() {
    this._translationVni = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get translationVniInput() {
    return this._translationVni;
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
* Represents a {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/vlan junos_vlan}
*/
export class Vlan extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "junos_vlan";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Vlan resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Vlan to import
  * @param importFromId The id of the existing Vlan that should be imported. Refer to the {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/vlan#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Vlan to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "junos_vlan", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/vlan junos_vlan} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VlanConfig
  */
  public constructor(scope: Construct, id: string, config: VlanConfig) {
    super(scope, id, {
      terraformResourceType: 'junos_vlan',
      terraformGeneratorMetadata: {
        providerName: 'junos',
        providerVersion: '2.16.0',
        providerVersionConstraint: '2.16.0'
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
    this._forwardFilterInput = config.forwardFilterInput;
    this._forwardFilterOutput = config.forwardFilterOutput;
    this._forwardFloodInput = config.forwardFloodInput;
    this._interface = config.interface;
    this._isolatedVlan = config.isolatedVlan;
    this._l3Interface = config.l3Interface;
    this._name = config.name;
    this._noArpSuppression = config.noArpSuppression;
    this._privateVlan = config.privateVlan;
    this._routingInstance = config.routingInstance;
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

  // forward_filter_input - computed: false, optional: true, required: false
  private _forwardFilterInput?: string; 
  public get forwardFilterInput() {
    return this.getStringAttribute('forward_filter_input');
  }
  public set forwardFilterInput(value: string) {
    this._forwardFilterInput = value;
  }
  public resetForwardFilterInput() {
    this._forwardFilterInput = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardFilterInputInput() {
    return this._forwardFilterInput;
  }

  // forward_filter_output - computed: false, optional: true, required: false
  private _forwardFilterOutput?: string; 
  public get forwardFilterOutput() {
    return this.getStringAttribute('forward_filter_output');
  }
  public set forwardFilterOutput(value: string) {
    this._forwardFilterOutput = value;
  }
  public resetForwardFilterOutput() {
    this._forwardFilterOutput = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardFilterOutputInput() {
    return this._forwardFilterOutput;
  }

  // forward_flood_input - computed: false, optional: true, required: false
  private _forwardFloodInput?: string; 
  public get forwardFloodInput() {
    return this.getStringAttribute('forward_flood_input');
  }
  public set forwardFloodInput(value: string) {
    this._forwardFloodInput = value;
  }
  public resetForwardFloodInput() {
    this._forwardFloodInput = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardFloodInputInput() {
    return this._forwardFloodInput;
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
  private _isolatedVlan?: string; 
  public get isolatedVlan() {
    return this.getStringAttribute('isolated_vlan');
  }
  public set isolatedVlan(value: string) {
    this._isolatedVlan = value;
  }
  public resetIsolatedVlan() {
    this._isolatedVlan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isolatedVlanInput() {
    return this._isolatedVlan;
  }

  // l3_interface - computed: false, optional: true, required: false
  private _l3Interface?: string; 
  public get l3Interface() {
    return this.getStringAttribute('l3_interface');
  }
  public set l3Interface(value: string) {
    this._l3Interface = value;
  }
  public resetL3Interface() {
    this._l3Interface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l3InterfaceInput() {
    return this._l3Interface;
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

  // no_arp_suppression - computed: false, optional: true, required: false
  private _noArpSuppression?: boolean | cdktf.IResolvable; 
  public get noArpSuppression() {
    return this.getBooleanAttribute('no_arp_suppression');
  }
  public set noArpSuppression(value: boolean | cdktf.IResolvable) {
    this._noArpSuppression = value;
  }
  public resetNoArpSuppression() {
    this._noArpSuppression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noArpSuppressionInput() {
    return this._noArpSuppression;
  }

  // private_vlan - computed: false, optional: true, required: false
  private _privateVlan?: string; 
  public get privateVlan() {
    return this.getStringAttribute('private_vlan');
  }
  public set privateVlan(value: string) {
    this._privateVlan = value;
  }
  public resetPrivateVlan() {
    this._privateVlan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateVlanInput() {
    return this._privateVlan;
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
  private _vlanId?: string; 
  public get vlanId() {
    return this.getStringAttribute('vlan_id');
  }
  public set vlanId(value: string) {
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
  private _vxlan = new VlanVxlanOutputReference(this, "vxlan");
  public get vxlan() {
    return this._vxlan;
  }
  public putVxlan(value: VlanVxlan) {
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
      forward_filter_input: cdktf.stringToTerraform(this._forwardFilterInput),
      forward_filter_output: cdktf.stringToTerraform(this._forwardFilterOutput),
      forward_flood_input: cdktf.stringToTerraform(this._forwardFloodInput),
      interface: cdktf.listMapper(cdktf.stringToTerraform, false)(this._interface),
      isolated_vlan: cdktf.stringToTerraform(this._isolatedVlan),
      l3_interface: cdktf.stringToTerraform(this._l3Interface),
      name: cdktf.stringToTerraform(this._name),
      no_arp_suppression: cdktf.booleanToTerraform(this._noArpSuppression),
      private_vlan: cdktf.stringToTerraform(this._privateVlan),
      routing_instance: cdktf.stringToTerraform(this._routingInstance),
      service_id: cdktf.numberToTerraform(this._serviceId),
      vlan_id: cdktf.stringToTerraform(this._vlanId),
      vlan_id_list: cdktf.listMapper(cdktf.stringToTerraform, false)(this._vlanIdList),
      vxlan: vlanVxlanToTerraform(this._vxlan.internalValue),
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
      forward_filter_input: {
        value: cdktf.stringToHclTerraform(this._forwardFilterInput),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      forward_filter_output: {
        value: cdktf.stringToHclTerraform(this._forwardFilterOutput),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      forward_flood_input: {
        value: cdktf.stringToHclTerraform(this._forwardFloodInput),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      interface: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._interface),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      isolated_vlan: {
        value: cdktf.stringToHclTerraform(this._isolatedVlan),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      l3_interface: {
        value: cdktf.stringToHclTerraform(this._l3Interface),
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
      no_arp_suppression: {
        value: cdktf.booleanToHclTerraform(this._noArpSuppression),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      private_vlan: {
        value: cdktf.stringToHclTerraform(this._privateVlan),
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
      service_id: {
        value: cdktf.numberToHclTerraform(this._serviceId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      vlan_id: {
        value: cdktf.stringToHclTerraform(this._vlanId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vlan_id_list: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._vlanIdList),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      vxlan: {
        value: vlanVxlanToHclTerraform(this._vxlan.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "VlanVxlan",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
