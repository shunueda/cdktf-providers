// https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_mirror
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SwitchMirrorConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_mirror#dst SwitchMirror#dst}
  */
  readonly dst?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_mirror#dynamic_sort_subtable SwitchMirror#dynamic_sort_subtable}
  */
  readonly dynamicSortSubtable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_mirror#encap_gre_protocol SwitchMirror#encap_gre_protocol}
  */
  readonly encapGreProtocol?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_mirror#encap_ipv4_src SwitchMirror#encap_ipv4_src}
  */
  readonly encapIpv4Src?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_mirror#encap_ipv4_tos SwitchMirror#encap_ipv4_tos}
  */
  readonly encapIpv4Tos?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_mirror#encap_ipv4_ttl SwitchMirror#encap_ipv4_ttl}
  */
  readonly encapIpv4Ttl?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_mirror#encap_mac_dst SwitchMirror#encap_mac_dst}
  */
  readonly encapMacDst?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_mirror#encap_mac_src SwitchMirror#encap_mac_src}
  */
  readonly encapMacSrc?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_mirror#encap_vlan SwitchMirror#encap_vlan}
  */
  readonly encapVlan?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_mirror#encap_vlan_cfi SwitchMirror#encap_vlan_cfi}
  */
  readonly encapVlanCfi?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_mirror#encap_vlan_id SwitchMirror#encap_vlan_id}
  */
  readonly encapVlanId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_mirror#encap_vlan_priority SwitchMirror#encap_vlan_priority}
  */
  readonly encapVlanPriority?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_mirror#encap_vlan_tpid SwitchMirror#encap_vlan_tpid}
  */
  readonly encapVlanTpid?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_mirror#erspan_collector_ip SwitchMirror#erspan_collector_ip}
  */
  readonly erspanCollectorIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_mirror#id SwitchMirror#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_mirror#mode SwitchMirror#mode}
  */
  readonly mode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_mirror#name SwitchMirror#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_mirror#rspan_ip SwitchMirror#rspan_ip}
  */
  readonly rspanIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_mirror#status SwitchMirror#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_mirror#strip_mirrored_traffic_tags SwitchMirror#strip_mirrored_traffic_tags}
  */
  readonly stripMirroredTrafficTags?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_mirror#switching_packet SwitchMirror#switching_packet}
  */
  readonly switchingPacket?: string;
  /**
  * src_egress block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_mirror#src_egress SwitchMirror#src_egress}
  */
  readonly srcEgress?: SwitchMirrorSrcEgress[] | cdktf.IResolvable;
  /**
  * src_ingress block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_mirror#src_ingress SwitchMirror#src_ingress}
  */
  readonly srcIngress?: SwitchMirrorSrcIngress[] | cdktf.IResolvable;
}
export interface SwitchMirrorSrcEgress {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_mirror#name SwitchMirror#name}
  */
  readonly name?: string;
}

export function switchMirrorSrcEgressToTerraform(struct?: SwitchMirrorSrcEgress | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function switchMirrorSrcEgressToHclTerraform(struct?: SwitchMirrorSrcEgress | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SwitchMirrorSrcEgressOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SwitchMirrorSrcEgress | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SwitchMirrorSrcEgress | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
    }
  }

  // name - computed: true, optional: true, required: false
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
}

export class SwitchMirrorSrcEgressList extends cdktf.ComplexList {
  public internalValue? : SwitchMirrorSrcEgress[] | cdktf.IResolvable

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
  public get(index: number): SwitchMirrorSrcEgressOutputReference {
    return new SwitchMirrorSrcEgressOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SwitchMirrorSrcIngress {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_mirror#name SwitchMirror#name}
  */
  readonly name?: string;
}

export function switchMirrorSrcIngressToTerraform(struct?: SwitchMirrorSrcIngress | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function switchMirrorSrcIngressToHclTerraform(struct?: SwitchMirrorSrcIngress | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SwitchMirrorSrcIngressOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SwitchMirrorSrcIngress | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SwitchMirrorSrcIngress | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
    }
  }

  // name - computed: true, optional: true, required: false
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
}

export class SwitchMirrorSrcIngressList extends cdktf.ComplexList {
  public internalValue? : SwitchMirrorSrcIngress[] | cdktf.IResolvable

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
  public get(index: number): SwitchMirrorSrcIngressOutputReference {
    return new SwitchMirrorSrcIngressOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_mirror fortiswitch_switch_mirror}
*/
export class SwitchMirror extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortiswitch_switch_mirror";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SwitchMirror resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SwitchMirror to import
  * @param importFromId The id of the existing SwitchMirror that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_mirror#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SwitchMirror to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortiswitch_switch_mirror", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_mirror fortiswitch_switch_mirror} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SwitchMirrorConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SwitchMirrorConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortiswitch_switch_mirror',
      terraformGeneratorMetadata: {
        providerName: 'fortiswitch',
        providerVersion: '1.1.6'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._dst = config.dst;
    this._dynamicSortSubtable = config.dynamicSortSubtable;
    this._encapGreProtocol = config.encapGreProtocol;
    this._encapIpv4Src = config.encapIpv4Src;
    this._encapIpv4Tos = config.encapIpv4Tos;
    this._encapIpv4Ttl = config.encapIpv4Ttl;
    this._encapMacDst = config.encapMacDst;
    this._encapMacSrc = config.encapMacSrc;
    this._encapVlan = config.encapVlan;
    this._encapVlanCfi = config.encapVlanCfi;
    this._encapVlanId = config.encapVlanId;
    this._encapVlanPriority = config.encapVlanPriority;
    this._encapVlanTpid = config.encapVlanTpid;
    this._erspanCollectorIp = config.erspanCollectorIp;
    this._id = config.id;
    this._mode = config.mode;
    this._name = config.name;
    this._rspanIp = config.rspanIp;
    this._status = config.status;
    this._stripMirroredTrafficTags = config.stripMirroredTrafficTags;
    this._switchingPacket = config.switchingPacket;
    this._srcEgress.internalValue = config.srcEgress;
    this._srcIngress.internalValue = config.srcIngress;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // dst - computed: true, optional: true, required: false
  private _dst?: string; 
  public get dst() {
    return this.getStringAttribute('dst');
  }
  public set dst(value: string) {
    this._dst = value;
  }
  public resetDst() {
    this._dst = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstInput() {
    return this._dst;
  }

  // dynamic_sort_subtable - computed: false, optional: true, required: false
  private _dynamicSortSubtable?: string; 
  public get dynamicSortSubtable() {
    return this.getStringAttribute('dynamic_sort_subtable');
  }
  public set dynamicSortSubtable(value: string) {
    this._dynamicSortSubtable = value;
  }
  public resetDynamicSortSubtable() {
    this._dynamicSortSubtable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicSortSubtableInput() {
    return this._dynamicSortSubtable;
  }

  // encap_gre_protocol - computed: true, optional: true, required: false
  private _encapGreProtocol?: number; 
  public get encapGreProtocol() {
    return this.getNumberAttribute('encap_gre_protocol');
  }
  public set encapGreProtocol(value: number) {
    this._encapGreProtocol = value;
  }
  public resetEncapGreProtocol() {
    this._encapGreProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encapGreProtocolInput() {
    return this._encapGreProtocol;
  }

  // encap_ipv4_src - computed: true, optional: true, required: false
  private _encapIpv4Src?: string; 
  public get encapIpv4Src() {
    return this.getStringAttribute('encap_ipv4_src');
  }
  public set encapIpv4Src(value: string) {
    this._encapIpv4Src = value;
  }
  public resetEncapIpv4Src() {
    this._encapIpv4Src = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encapIpv4SrcInput() {
    return this._encapIpv4Src;
  }

  // encap_ipv4_tos - computed: true, optional: true, required: false
  private _encapIpv4Tos?: number; 
  public get encapIpv4Tos() {
    return this.getNumberAttribute('encap_ipv4_tos');
  }
  public set encapIpv4Tos(value: number) {
    this._encapIpv4Tos = value;
  }
  public resetEncapIpv4Tos() {
    this._encapIpv4Tos = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encapIpv4TosInput() {
    return this._encapIpv4Tos;
  }

  // encap_ipv4_ttl - computed: true, optional: true, required: false
  private _encapIpv4Ttl?: number; 
  public get encapIpv4Ttl() {
    return this.getNumberAttribute('encap_ipv4_ttl');
  }
  public set encapIpv4Ttl(value: number) {
    this._encapIpv4Ttl = value;
  }
  public resetEncapIpv4Ttl() {
    this._encapIpv4Ttl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encapIpv4TtlInput() {
    return this._encapIpv4Ttl;
  }

  // encap_mac_dst - computed: true, optional: true, required: false
  private _encapMacDst?: string; 
  public get encapMacDst() {
    return this.getStringAttribute('encap_mac_dst');
  }
  public set encapMacDst(value: string) {
    this._encapMacDst = value;
  }
  public resetEncapMacDst() {
    this._encapMacDst = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encapMacDstInput() {
    return this._encapMacDst;
  }

  // encap_mac_src - computed: true, optional: true, required: false
  private _encapMacSrc?: string; 
  public get encapMacSrc() {
    return this.getStringAttribute('encap_mac_src');
  }
  public set encapMacSrc(value: string) {
    this._encapMacSrc = value;
  }
  public resetEncapMacSrc() {
    this._encapMacSrc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encapMacSrcInput() {
    return this._encapMacSrc;
  }

  // encap_vlan - computed: true, optional: true, required: false
  private _encapVlan?: string; 
  public get encapVlan() {
    return this.getStringAttribute('encap_vlan');
  }
  public set encapVlan(value: string) {
    this._encapVlan = value;
  }
  public resetEncapVlan() {
    this._encapVlan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encapVlanInput() {
    return this._encapVlan;
  }

  // encap_vlan_cfi - computed: true, optional: true, required: false
  private _encapVlanCfi?: number; 
  public get encapVlanCfi() {
    return this.getNumberAttribute('encap_vlan_cfi');
  }
  public set encapVlanCfi(value: number) {
    this._encapVlanCfi = value;
  }
  public resetEncapVlanCfi() {
    this._encapVlanCfi = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encapVlanCfiInput() {
    return this._encapVlanCfi;
  }

  // encap_vlan_id - computed: true, optional: true, required: false
  private _encapVlanId?: number; 
  public get encapVlanId() {
    return this.getNumberAttribute('encap_vlan_id');
  }
  public set encapVlanId(value: number) {
    this._encapVlanId = value;
  }
  public resetEncapVlanId() {
    this._encapVlanId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encapVlanIdInput() {
    return this._encapVlanId;
  }

  // encap_vlan_priority - computed: true, optional: true, required: false
  private _encapVlanPriority?: number; 
  public get encapVlanPriority() {
    return this.getNumberAttribute('encap_vlan_priority');
  }
  public set encapVlanPriority(value: number) {
    this._encapVlanPriority = value;
  }
  public resetEncapVlanPriority() {
    this._encapVlanPriority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encapVlanPriorityInput() {
    return this._encapVlanPriority;
  }

  // encap_vlan_tpid - computed: true, optional: true, required: false
  private _encapVlanTpid?: number; 
  public get encapVlanTpid() {
    return this.getNumberAttribute('encap_vlan_tpid');
  }
  public set encapVlanTpid(value: number) {
    this._encapVlanTpid = value;
  }
  public resetEncapVlanTpid() {
    this._encapVlanTpid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encapVlanTpidInput() {
    return this._encapVlanTpid;
  }

  // erspan_collector_ip - computed: true, optional: true, required: false
  private _erspanCollectorIp?: string; 
  public get erspanCollectorIp() {
    return this.getStringAttribute('erspan_collector_ip');
  }
  public set erspanCollectorIp(value: string) {
    this._erspanCollectorIp = value;
  }
  public resetErspanCollectorIp() {
    this._erspanCollectorIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get erspanCollectorIpInput() {
    return this._erspanCollectorIp;
  }

  // id - computed: true, optional: true, required: false
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

  // mode - computed: true, optional: true, required: false
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }

  // name - computed: true, optional: true, required: false
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

  // rspan_ip - computed: true, optional: true, required: false
  private _rspanIp?: string; 
  public get rspanIp() {
    return this.getStringAttribute('rspan_ip');
  }
  public set rspanIp(value: string) {
    this._rspanIp = value;
  }
  public resetRspanIp() {
    this._rspanIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rspanIpInput() {
    return this._rspanIp;
  }

  // status - computed: true, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // strip_mirrored_traffic_tags - computed: true, optional: true, required: false
  private _stripMirroredTrafficTags?: string; 
  public get stripMirroredTrafficTags() {
    return this.getStringAttribute('strip_mirrored_traffic_tags');
  }
  public set stripMirroredTrafficTags(value: string) {
    this._stripMirroredTrafficTags = value;
  }
  public resetStripMirroredTrafficTags() {
    this._stripMirroredTrafficTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stripMirroredTrafficTagsInput() {
    return this._stripMirroredTrafficTags;
  }

  // switching_packet - computed: true, optional: true, required: false
  private _switchingPacket?: string; 
  public get switchingPacket() {
    return this.getStringAttribute('switching_packet');
  }
  public set switchingPacket(value: string) {
    this._switchingPacket = value;
  }
  public resetSwitchingPacket() {
    this._switchingPacket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get switchingPacketInput() {
    return this._switchingPacket;
  }

  // src_egress - computed: false, optional: true, required: false
  private _srcEgress = new SwitchMirrorSrcEgressList(this, "src_egress", false);
  public get srcEgress() {
    return this._srcEgress;
  }
  public putSrcEgress(value: SwitchMirrorSrcEgress[] | cdktf.IResolvable) {
    this._srcEgress.internalValue = value;
  }
  public resetSrcEgress() {
    this._srcEgress.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcEgressInput() {
    return this._srcEgress.internalValue;
  }

  // src_ingress - computed: false, optional: true, required: false
  private _srcIngress = new SwitchMirrorSrcIngressList(this, "src_ingress", false);
  public get srcIngress() {
    return this._srcIngress;
  }
  public putSrcIngress(value: SwitchMirrorSrcIngress[] | cdktf.IResolvable) {
    this._srcIngress.internalValue = value;
  }
  public resetSrcIngress() {
    this._srcIngress.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcIngressInput() {
    return this._srcIngress.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      dst: cdktf.stringToTerraform(this._dst),
      dynamic_sort_subtable: cdktf.stringToTerraform(this._dynamicSortSubtable),
      encap_gre_protocol: cdktf.numberToTerraform(this._encapGreProtocol),
      encap_ipv4_src: cdktf.stringToTerraform(this._encapIpv4Src),
      encap_ipv4_tos: cdktf.numberToTerraform(this._encapIpv4Tos),
      encap_ipv4_ttl: cdktf.numberToTerraform(this._encapIpv4Ttl),
      encap_mac_dst: cdktf.stringToTerraform(this._encapMacDst),
      encap_mac_src: cdktf.stringToTerraform(this._encapMacSrc),
      encap_vlan: cdktf.stringToTerraform(this._encapVlan),
      encap_vlan_cfi: cdktf.numberToTerraform(this._encapVlanCfi),
      encap_vlan_id: cdktf.numberToTerraform(this._encapVlanId),
      encap_vlan_priority: cdktf.numberToTerraform(this._encapVlanPriority),
      encap_vlan_tpid: cdktf.numberToTerraform(this._encapVlanTpid),
      erspan_collector_ip: cdktf.stringToTerraform(this._erspanCollectorIp),
      id: cdktf.stringToTerraform(this._id),
      mode: cdktf.stringToTerraform(this._mode),
      name: cdktf.stringToTerraform(this._name),
      rspan_ip: cdktf.stringToTerraform(this._rspanIp),
      status: cdktf.stringToTerraform(this._status),
      strip_mirrored_traffic_tags: cdktf.stringToTerraform(this._stripMirroredTrafficTags),
      switching_packet: cdktf.stringToTerraform(this._switchingPacket),
      src_egress: cdktf.listMapper(switchMirrorSrcEgressToTerraform, true)(this._srcEgress.internalValue),
      src_ingress: cdktf.listMapper(switchMirrorSrcIngressToTerraform, true)(this._srcIngress.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      dst: {
        value: cdktf.stringToHclTerraform(this._dst),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dynamic_sort_subtable: {
        value: cdktf.stringToHclTerraform(this._dynamicSortSubtable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      encap_gre_protocol: {
        value: cdktf.numberToHclTerraform(this._encapGreProtocol),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      encap_ipv4_src: {
        value: cdktf.stringToHclTerraform(this._encapIpv4Src),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      encap_ipv4_tos: {
        value: cdktf.numberToHclTerraform(this._encapIpv4Tos),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      encap_ipv4_ttl: {
        value: cdktf.numberToHclTerraform(this._encapIpv4Ttl),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      encap_mac_dst: {
        value: cdktf.stringToHclTerraform(this._encapMacDst),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      encap_mac_src: {
        value: cdktf.stringToHclTerraform(this._encapMacSrc),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      encap_vlan: {
        value: cdktf.stringToHclTerraform(this._encapVlan),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      encap_vlan_cfi: {
        value: cdktf.numberToHclTerraform(this._encapVlanCfi),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      encap_vlan_id: {
        value: cdktf.numberToHclTerraform(this._encapVlanId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      encap_vlan_priority: {
        value: cdktf.numberToHclTerraform(this._encapVlanPriority),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      encap_vlan_tpid: {
        value: cdktf.numberToHclTerraform(this._encapVlanTpid),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      erspan_collector_ip: {
        value: cdktf.stringToHclTerraform(this._erspanCollectorIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
      rspan_ip: {
        value: cdktf.stringToHclTerraform(this._rspanIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      status: {
        value: cdktf.stringToHclTerraform(this._status),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      strip_mirrored_traffic_tags: {
        value: cdktf.stringToHclTerraform(this._stripMirroredTrafficTags),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      switching_packet: {
        value: cdktf.stringToHclTerraform(this._switchingPacket),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      src_egress: {
        value: cdktf.listMapperHcl(switchMirrorSrcEgressToHclTerraform, true)(this._srcEgress.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SwitchMirrorSrcEgressList",
      },
      src_ingress: {
        value: cdktf.listMapperHcl(switchMirrorSrcIngressToHclTerraform, true)(this._srcIngress.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SwitchMirrorSrcIngressList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
