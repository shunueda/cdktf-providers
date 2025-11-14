// https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_ippool_dynamic_mapping
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ObjectFirewallIppoolDynamicMappingAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_ippool_dynamic_mapping#add_nat64_route ObjectFirewallIppoolDynamicMappingA#add_nat64_route}
  */
  readonly addNat64Route?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_ippool_dynamic_mapping#adom ObjectFirewallIppoolDynamicMappingA#adom}
  */
  readonly adom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_ippool_dynamic_mapping#arp_intf ObjectFirewallIppoolDynamicMappingA#arp_intf}
  */
  readonly arpIntf?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_ippool_dynamic_mapping#arp_reply ObjectFirewallIppoolDynamicMappingA#arp_reply}
  */
  readonly arpReply?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_ippool_dynamic_mapping#associated_interface ObjectFirewallIppoolDynamicMappingA#associated_interface}
  */
  readonly associatedInterface?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_ippool_dynamic_mapping#block_size ObjectFirewallIppoolDynamicMappingA#block_size}
  */
  readonly blockSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_ippool_dynamic_mapping#cgn_block_size ObjectFirewallIppoolDynamicMappingA#cgn_block_size}
  */
  readonly cgnBlockSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_ippool_dynamic_mapping#cgn_client_endip ObjectFirewallIppoolDynamicMappingA#cgn_client_endip}
  */
  readonly cgnClientEndip?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_ippool_dynamic_mapping#cgn_client_ipv6shift ObjectFirewallIppoolDynamicMappingA#cgn_client_ipv6shift}
  */
  readonly cgnClientIpv6Shift?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_ippool_dynamic_mapping#cgn_client_startip ObjectFirewallIppoolDynamicMappingA#cgn_client_startip}
  */
  readonly cgnClientStartip?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_ippool_dynamic_mapping#cgn_fixedalloc ObjectFirewallIppoolDynamicMappingA#cgn_fixedalloc}
  */
  readonly cgnFixedalloc?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_ippool_dynamic_mapping#cgn_overload ObjectFirewallIppoolDynamicMappingA#cgn_overload}
  */
  readonly cgnOverload?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_ippool_dynamic_mapping#cgn_port_end ObjectFirewallIppoolDynamicMappingA#cgn_port_end}
  */
  readonly cgnPortEnd?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_ippool_dynamic_mapping#cgn_port_start ObjectFirewallIppoolDynamicMappingA#cgn_port_start}
  */
  readonly cgnPortStart?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_ippool_dynamic_mapping#cgn_spa ObjectFirewallIppoolDynamicMappingA#cgn_spa}
  */
  readonly cgnSpa?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_ippool_dynamic_mapping#client_prefix_length ObjectFirewallIppoolDynamicMappingA#client_prefix_length}
  */
  readonly clientPrefixLength?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_ippool_dynamic_mapping#comments ObjectFirewallIppoolDynamicMappingA#comments}
  */
  readonly comments?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_ippool_dynamic_mapping#dynamic_sort_subtable ObjectFirewallIppoolDynamicMappingA#dynamic_sort_subtable}
  */
  readonly dynamicSortSubtable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_ippool_dynamic_mapping#endip ObjectFirewallIppoolDynamicMappingA#endip}
  */
  readonly endip?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_ippool_dynamic_mapping#endport ObjectFirewallIppoolDynamicMappingA#endport}
  */
  readonly endport?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_ippool_dynamic_mapping#exclude_ip ObjectFirewallIppoolDynamicMappingA#exclude_ip}
  */
  readonly excludeIp?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_ippool_dynamic_mapping#icmp_session_quota ObjectFirewallIppoolDynamicMappingA#icmp_session_quota}
  */
  readonly icmpSessionQuota?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_ippool_dynamic_mapping#id ObjectFirewallIppoolDynamicMappingA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_ippool_dynamic_mapping#ippool ObjectFirewallIppoolDynamicMappingA#ippool}
  */
  readonly ippool: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_ippool_dynamic_mapping#nat64 ObjectFirewallIppoolDynamicMappingA#nat64}
  */
  readonly nat64?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_ippool_dynamic_mapping#num_blocks_per_user ObjectFirewallIppoolDynamicMappingA#num_blocks_per_user}
  */
  readonly numBlocksPerUser?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_ippool_dynamic_mapping#pba_interim_log ObjectFirewallIppoolDynamicMappingA#pba_interim_log}
  */
  readonly pbaInterimLog?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_ippool_dynamic_mapping#pba_timeout ObjectFirewallIppoolDynamicMappingA#pba_timeout}
  */
  readonly pbaTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_ippool_dynamic_mapping#permit_any_host ObjectFirewallIppoolDynamicMappingA#permit_any_host}
  */
  readonly permitAnyHost?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_ippool_dynamic_mapping#port_per_user ObjectFirewallIppoolDynamicMappingA#port_per_user}
  */
  readonly portPerUser?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_ippool_dynamic_mapping#privileged_port_use_pba ObjectFirewallIppoolDynamicMappingA#privileged_port_use_pba}
  */
  readonly privilegedPortUsePba?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_ippool_dynamic_mapping#scopetype ObjectFirewallIppoolDynamicMappingA#scopetype}
  */
  readonly scopetype?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_ippool_dynamic_mapping#source_endip ObjectFirewallIppoolDynamicMappingA#source_endip}
  */
  readonly sourceEndip?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_ippool_dynamic_mapping#source_prefix6 ObjectFirewallIppoolDynamicMappingA#source_prefix6}
  */
  readonly sourcePrefix6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_ippool_dynamic_mapping#source_startip ObjectFirewallIppoolDynamicMappingA#source_startip}
  */
  readonly sourceStartip?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_ippool_dynamic_mapping#startip ObjectFirewallIppoolDynamicMappingA#startip}
  */
  readonly startip?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_ippool_dynamic_mapping#startport ObjectFirewallIppoolDynamicMappingA#startport}
  */
  readonly startport?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_ippool_dynamic_mapping#subnet_broadcast_in_ippool ObjectFirewallIppoolDynamicMappingA#subnet_broadcast_in_ippool}
  */
  readonly subnetBroadcastInIppool?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_ippool_dynamic_mapping#tcp_session_quota ObjectFirewallIppoolDynamicMappingA#tcp_session_quota}
  */
  readonly tcpSessionQuota?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_ippool_dynamic_mapping#type ObjectFirewallIppoolDynamicMappingA#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_ippool_dynamic_mapping#udp_session_quota ObjectFirewallIppoolDynamicMappingA#udp_session_quota}
  */
  readonly udpSessionQuota?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_ippool_dynamic_mapping#utilization_alarm_clear ObjectFirewallIppoolDynamicMappingA#utilization_alarm_clear}
  */
  readonly utilizationAlarmClear?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_ippool_dynamic_mapping#utilization_alarm_raise ObjectFirewallIppoolDynamicMappingA#utilization_alarm_raise}
  */
  readonly utilizationAlarmRaise?: number;
  /**
  * _scope block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_ippool_dynamic_mapping#_scope ObjectFirewallIppoolDynamicMappingA#_scope}
  */
  readonly scope?: ObjectFirewallIppoolDynamicMappingScopeA[] | cdktf.IResolvable;
}
export interface ObjectFirewallIppoolDynamicMappingScopeA {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_ippool_dynamic_mapping#name ObjectFirewallIppoolDynamicMappingA#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_ippool_dynamic_mapping#vdom ObjectFirewallIppoolDynamicMappingA#vdom}
  */
  readonly vdom?: string;
}

export function objectFirewallIppoolDynamicMappingScopeAToTerraform(struct?: ObjectFirewallIppoolDynamicMappingScopeA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    vdom: cdktf.stringToTerraform(struct!.vdom),
  }
}


export function objectFirewallIppoolDynamicMappingScopeAToHclTerraform(struct?: ObjectFirewallIppoolDynamicMappingScopeA | cdktf.IResolvable): any {
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
    vdom: {
      value: cdktf.stringToHclTerraform(struct!.vdom),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObjectFirewallIppoolDynamicMappingScopeAOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ObjectFirewallIppoolDynamicMappingScopeA | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._vdom !== undefined) {
      hasAnyValues = true;
      internalValueResult.vdom = this._vdom;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObjectFirewallIppoolDynamicMappingScopeA | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._vdom = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._vdom = value.vdom;
    }
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

  // vdom - computed: false, optional: true, required: false
  private _vdom?: string; 
  public get vdom() {
    return this.getStringAttribute('vdom');
  }
  public set vdom(value: string) {
    this._vdom = value;
  }
  public resetVdom() {
    this._vdom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vdomInput() {
    return this._vdom;
  }
}

export class ObjectFirewallIppoolDynamicMappingScopeAList extends cdktf.ComplexList {
  public internalValue? : ObjectFirewallIppoolDynamicMappingScopeA[] | cdktf.IResolvable

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
  public get(index: number): ObjectFirewallIppoolDynamicMappingScopeAOutputReference {
    return new ObjectFirewallIppoolDynamicMappingScopeAOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_ippool_dynamic_mapping fortimanager_object_firewall_ippool_dynamic_mapping}
*/
export class ObjectFirewallIppoolDynamicMappingA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortimanager_object_firewall_ippool_dynamic_mapping";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ObjectFirewallIppoolDynamicMappingA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ObjectFirewallIppoolDynamicMappingA to import
  * @param importFromId The id of the existing ObjectFirewallIppoolDynamicMappingA that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_ippool_dynamic_mapping#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ObjectFirewallIppoolDynamicMappingA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortimanager_object_firewall_ippool_dynamic_mapping", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_ippool_dynamic_mapping fortimanager_object_firewall_ippool_dynamic_mapping} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ObjectFirewallIppoolDynamicMappingAConfig
  */
  public constructor(scope: Construct, id: string, config: ObjectFirewallIppoolDynamicMappingAConfig) {
    super(scope, id, {
      terraformResourceType: 'fortimanager_object_firewall_ippool_dynamic_mapping',
      terraformGeneratorMetadata: {
        providerName: 'fortimanager',
        providerVersion: '1.15.0',
        providerVersionConstraint: '1.15.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._addNat64Route = config.addNat64Route;
    this._adom = config.adom;
    this._arpIntf = config.arpIntf;
    this._arpReply = config.arpReply;
    this._associatedInterface = config.associatedInterface;
    this._blockSize = config.blockSize;
    this._cgnBlockSize = config.cgnBlockSize;
    this._cgnClientEndip = config.cgnClientEndip;
    this._cgnClientIpv6Shift = config.cgnClientIpv6Shift;
    this._cgnClientStartip = config.cgnClientStartip;
    this._cgnFixedalloc = config.cgnFixedalloc;
    this._cgnOverload = config.cgnOverload;
    this._cgnPortEnd = config.cgnPortEnd;
    this._cgnPortStart = config.cgnPortStart;
    this._cgnSpa = config.cgnSpa;
    this._clientPrefixLength = config.clientPrefixLength;
    this._comments = config.comments;
    this._dynamicSortSubtable = config.dynamicSortSubtable;
    this._endip = config.endip;
    this._endport = config.endport;
    this._excludeIp = config.excludeIp;
    this._icmpSessionQuota = config.icmpSessionQuota;
    this._id = config.id;
    this._ippool = config.ippool;
    this._nat64 = config.nat64;
    this._numBlocksPerUser = config.numBlocksPerUser;
    this._pbaInterimLog = config.pbaInterimLog;
    this._pbaTimeout = config.pbaTimeout;
    this._permitAnyHost = config.permitAnyHost;
    this._portPerUser = config.portPerUser;
    this._privilegedPortUsePba = config.privilegedPortUsePba;
    this._scopetype = config.scopetype;
    this._sourceEndip = config.sourceEndip;
    this._sourcePrefix6 = config.sourcePrefix6;
    this._sourceStartip = config.sourceStartip;
    this._startip = config.startip;
    this._startport = config.startport;
    this._subnetBroadcastInIppool = config.subnetBroadcastInIppool;
    this._tcpSessionQuota = config.tcpSessionQuota;
    this._type = config.type;
    this._udpSessionQuota = config.udpSessionQuota;
    this._utilizationAlarmClear = config.utilizationAlarmClear;
    this._utilizationAlarmRaise = config.utilizationAlarmRaise;
    this._scope.internalValue = config.scope;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // add_nat64_route - computed: true, optional: true, required: false
  private _addNat64Route?: string; 
  public get addNat64Route() {
    return this.getStringAttribute('add_nat64_route');
  }
  public set addNat64Route(value: string) {
    this._addNat64Route = value;
  }
  public resetAddNat64Route() {
    this._addNat64Route = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addNat64RouteInput() {
    return this._addNat64Route;
  }

  // adom - computed: false, optional: true, required: false
  private _adom?: string; 
  public get adom() {
    return this.getStringAttribute('adom');
  }
  public set adom(value: string) {
    this._adom = value;
  }
  public resetAdom() {
    this._adom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adomInput() {
    return this._adom;
  }

  // arp_intf - computed: false, optional: true, required: false
  private _arpIntf?: string; 
  public get arpIntf() {
    return this.getStringAttribute('arp_intf');
  }
  public set arpIntf(value: string) {
    this._arpIntf = value;
  }
  public resetArpIntf() {
    this._arpIntf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get arpIntfInput() {
    return this._arpIntf;
  }

  // arp_reply - computed: true, optional: true, required: false
  private _arpReply?: string; 
  public get arpReply() {
    return this.getStringAttribute('arp_reply');
  }
  public set arpReply(value: string) {
    this._arpReply = value;
  }
  public resetArpReply() {
    this._arpReply = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get arpReplyInput() {
    return this._arpReply;
  }

  // associated_interface - computed: false, optional: true, required: false
  private _associatedInterface?: string; 
  public get associatedInterface() {
    return this.getStringAttribute('associated_interface');
  }
  public set associatedInterface(value: string) {
    this._associatedInterface = value;
  }
  public resetAssociatedInterface() {
    this._associatedInterface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get associatedInterfaceInput() {
    return this._associatedInterface;
  }

  // block_size - computed: false, optional: true, required: false
  private _blockSize?: number; 
  public get blockSize() {
    return this.getNumberAttribute('block_size');
  }
  public set blockSize(value: number) {
    this._blockSize = value;
  }
  public resetBlockSize() {
    this._blockSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockSizeInput() {
    return this._blockSize;
  }

  // cgn_block_size - computed: true, optional: true, required: false
  private _cgnBlockSize?: number; 
  public get cgnBlockSize() {
    return this.getNumberAttribute('cgn_block_size');
  }
  public set cgnBlockSize(value: number) {
    this._cgnBlockSize = value;
  }
  public resetCgnBlockSize() {
    this._cgnBlockSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cgnBlockSizeInput() {
    return this._cgnBlockSize;
  }

  // cgn_client_endip - computed: false, optional: true, required: false
  private _cgnClientEndip?: string; 
  public get cgnClientEndip() {
    return this.getStringAttribute('cgn_client_endip');
  }
  public set cgnClientEndip(value: string) {
    this._cgnClientEndip = value;
  }
  public resetCgnClientEndip() {
    this._cgnClientEndip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cgnClientEndipInput() {
    return this._cgnClientEndip;
  }

  // cgn_client_ipv6shift - computed: false, optional: true, required: false
  private _cgnClientIpv6Shift?: number; 
  public get cgnClientIpv6Shift() {
    return this.getNumberAttribute('cgn_client_ipv6shift');
  }
  public set cgnClientIpv6Shift(value: number) {
    this._cgnClientIpv6Shift = value;
  }
  public resetCgnClientIpv6Shift() {
    this._cgnClientIpv6Shift = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cgnClientIpv6ShiftInput() {
    return this._cgnClientIpv6Shift;
  }

  // cgn_client_startip - computed: false, optional: true, required: false
  private _cgnClientStartip?: string; 
  public get cgnClientStartip() {
    return this.getStringAttribute('cgn_client_startip');
  }
  public set cgnClientStartip(value: string) {
    this._cgnClientStartip = value;
  }
  public resetCgnClientStartip() {
    this._cgnClientStartip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cgnClientStartipInput() {
    return this._cgnClientStartip;
  }

  // cgn_fixedalloc - computed: true, optional: true, required: false
  private _cgnFixedalloc?: string; 
  public get cgnFixedalloc() {
    return this.getStringAttribute('cgn_fixedalloc');
  }
  public set cgnFixedalloc(value: string) {
    this._cgnFixedalloc = value;
  }
  public resetCgnFixedalloc() {
    this._cgnFixedalloc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cgnFixedallocInput() {
    return this._cgnFixedalloc;
  }

  // cgn_overload - computed: true, optional: true, required: false
  private _cgnOverload?: string; 
  public get cgnOverload() {
    return this.getStringAttribute('cgn_overload');
  }
  public set cgnOverload(value: string) {
    this._cgnOverload = value;
  }
  public resetCgnOverload() {
    this._cgnOverload = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cgnOverloadInput() {
    return this._cgnOverload;
  }

  // cgn_port_end - computed: true, optional: true, required: false
  private _cgnPortEnd?: number; 
  public get cgnPortEnd() {
    return this.getNumberAttribute('cgn_port_end');
  }
  public set cgnPortEnd(value: number) {
    this._cgnPortEnd = value;
  }
  public resetCgnPortEnd() {
    this._cgnPortEnd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cgnPortEndInput() {
    return this._cgnPortEnd;
  }

  // cgn_port_start - computed: true, optional: true, required: false
  private _cgnPortStart?: number; 
  public get cgnPortStart() {
    return this.getNumberAttribute('cgn_port_start');
  }
  public set cgnPortStart(value: number) {
    this._cgnPortStart = value;
  }
  public resetCgnPortStart() {
    this._cgnPortStart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cgnPortStartInput() {
    return this._cgnPortStart;
  }

  // cgn_spa - computed: true, optional: true, required: false
  private _cgnSpa?: string; 
  public get cgnSpa() {
    return this.getStringAttribute('cgn_spa');
  }
  public set cgnSpa(value: string) {
    this._cgnSpa = value;
  }
  public resetCgnSpa() {
    this._cgnSpa = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cgnSpaInput() {
    return this._cgnSpa;
  }

  // client_prefix_length - computed: false, optional: true, required: false
  private _clientPrefixLength?: number; 
  public get clientPrefixLength() {
    return this.getNumberAttribute('client_prefix_length');
  }
  public set clientPrefixLength(value: number) {
    this._clientPrefixLength = value;
  }
  public resetClientPrefixLength() {
    this._clientPrefixLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientPrefixLengthInput() {
    return this._clientPrefixLength;
  }

  // comments - computed: false, optional: true, required: false
  private _comments?: string; 
  public get comments() {
    return this.getStringAttribute('comments');
  }
  public set comments(value: string) {
    this._comments = value;
  }
  public resetComments() {
    this._comments = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentsInput() {
    return this._comments;
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

  // endip - computed: false, optional: true, required: false
  private _endip?: string; 
  public get endip() {
    return this.getStringAttribute('endip');
  }
  public set endip(value: string) {
    this._endip = value;
  }
  public resetEndip() {
    this._endip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endipInput() {
    return this._endip;
  }

  // endport - computed: true, optional: true, required: false
  private _endport?: number; 
  public get endport() {
    return this.getNumberAttribute('endport');
  }
  public set endport(value: number) {
    this._endport = value;
  }
  public resetEndport() {
    this._endport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endportInput() {
    return this._endport;
  }

  // exclude_ip - computed: true, optional: true, required: false
  private _excludeIp?: string[]; 
  public get excludeIp() {
    return cdktf.Fn.tolist(this.getListAttribute('exclude_ip'));
  }
  public set excludeIp(value: string[]) {
    this._excludeIp = value;
  }
  public resetExcludeIp() {
    this._excludeIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeIpInput() {
    return this._excludeIp;
  }

  // icmp_session_quota - computed: false, optional: true, required: false
  private _icmpSessionQuota?: number; 
  public get icmpSessionQuota() {
    return this.getNumberAttribute('icmp_session_quota');
  }
  public set icmpSessionQuota(value: number) {
    this._icmpSessionQuota = value;
  }
  public resetIcmpSessionQuota() {
    this._icmpSessionQuota = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpSessionQuotaInput() {
    return this._icmpSessionQuota;
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

  // ippool - computed: false, optional: false, required: true
  private _ippool?: string; 
  public get ippool() {
    return this.getStringAttribute('ippool');
  }
  public set ippool(value: string) {
    this._ippool = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ippoolInput() {
    return this._ippool;
  }

  // nat64 - computed: true, optional: true, required: false
  private _nat64?: string; 
  public get nat64() {
    return this.getStringAttribute('nat64');
  }
  public set nat64(value: string) {
    this._nat64 = value;
  }
  public resetNat64() {
    this._nat64 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nat64Input() {
    return this._nat64;
  }

  // num_blocks_per_user - computed: false, optional: true, required: false
  private _numBlocksPerUser?: number; 
  public get numBlocksPerUser() {
    return this.getNumberAttribute('num_blocks_per_user');
  }
  public set numBlocksPerUser(value: number) {
    this._numBlocksPerUser = value;
  }
  public resetNumBlocksPerUser() {
    this._numBlocksPerUser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numBlocksPerUserInput() {
    return this._numBlocksPerUser;
  }

  // pba_interim_log - computed: false, optional: true, required: false
  private _pbaInterimLog?: number; 
  public get pbaInterimLog() {
    return this.getNumberAttribute('pba_interim_log');
  }
  public set pbaInterimLog(value: number) {
    this._pbaInterimLog = value;
  }
  public resetPbaInterimLog() {
    this._pbaInterimLog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pbaInterimLogInput() {
    return this._pbaInterimLog;
  }

  // pba_timeout - computed: false, optional: true, required: false
  private _pbaTimeout?: number; 
  public get pbaTimeout() {
    return this.getNumberAttribute('pba_timeout');
  }
  public set pbaTimeout(value: number) {
    this._pbaTimeout = value;
  }
  public resetPbaTimeout() {
    this._pbaTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pbaTimeoutInput() {
    return this._pbaTimeout;
  }

  // permit_any_host - computed: false, optional: true, required: false
  private _permitAnyHost?: string; 
  public get permitAnyHost() {
    return this.getStringAttribute('permit_any_host');
  }
  public set permitAnyHost(value: string) {
    this._permitAnyHost = value;
  }
  public resetPermitAnyHost() {
    this._permitAnyHost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permitAnyHostInput() {
    return this._permitAnyHost;
  }

  // port_per_user - computed: false, optional: true, required: false
  private _portPerUser?: number; 
  public get portPerUser() {
    return this.getNumberAttribute('port_per_user');
  }
  public set portPerUser(value: number) {
    this._portPerUser = value;
  }
  public resetPortPerUser() {
    this._portPerUser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portPerUserInput() {
    return this._portPerUser;
  }

  // privileged_port_use_pba - computed: true, optional: true, required: false
  private _privilegedPortUsePba?: string; 
  public get privilegedPortUsePba() {
    return this.getStringAttribute('privileged_port_use_pba');
  }
  public set privilegedPortUsePba(value: string) {
    this._privilegedPortUsePba = value;
  }
  public resetPrivilegedPortUsePba() {
    this._privilegedPortUsePba = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privilegedPortUsePbaInput() {
    return this._privilegedPortUsePba;
  }

  // scopetype - computed: false, optional: true, required: false
  private _scopetype?: string; 
  public get scopetype() {
    return this.getStringAttribute('scopetype');
  }
  public set scopetype(value: string) {
    this._scopetype = value;
  }
  public resetScopetype() {
    this._scopetype = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopetypeInput() {
    return this._scopetype;
  }

  // source_endip - computed: false, optional: true, required: false
  private _sourceEndip?: string; 
  public get sourceEndip() {
    return this.getStringAttribute('source_endip');
  }
  public set sourceEndip(value: string) {
    this._sourceEndip = value;
  }
  public resetSourceEndip() {
    this._sourceEndip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceEndipInput() {
    return this._sourceEndip;
  }

  // source_prefix6 - computed: false, optional: true, required: false
  private _sourcePrefix6?: string; 
  public get sourcePrefix6() {
    return this.getStringAttribute('source_prefix6');
  }
  public set sourcePrefix6(value: string) {
    this._sourcePrefix6 = value;
  }
  public resetSourcePrefix6() {
    this._sourcePrefix6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourcePrefix6Input() {
    return this._sourcePrefix6;
  }

  // source_startip - computed: false, optional: true, required: false
  private _sourceStartip?: string; 
  public get sourceStartip() {
    return this.getStringAttribute('source_startip');
  }
  public set sourceStartip(value: string) {
    this._sourceStartip = value;
  }
  public resetSourceStartip() {
    this._sourceStartip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceStartipInput() {
    return this._sourceStartip;
  }

  // startip - computed: false, optional: true, required: false
  private _startip?: string; 
  public get startip() {
    return this.getStringAttribute('startip');
  }
  public set startip(value: string) {
    this._startip = value;
  }
  public resetStartip() {
    this._startip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startipInput() {
    return this._startip;
  }

  // startport - computed: true, optional: true, required: false
  private _startport?: number; 
  public get startport() {
    return this.getNumberAttribute('startport');
  }
  public set startport(value: number) {
    this._startport = value;
  }
  public resetStartport() {
    this._startport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startportInput() {
    return this._startport;
  }

  // subnet_broadcast_in_ippool - computed: true, optional: true, required: false
  private _subnetBroadcastInIppool?: string; 
  public get subnetBroadcastInIppool() {
    return this.getStringAttribute('subnet_broadcast_in_ippool');
  }
  public set subnetBroadcastInIppool(value: string) {
    this._subnetBroadcastInIppool = value;
  }
  public resetSubnetBroadcastInIppool() {
    this._subnetBroadcastInIppool = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetBroadcastInIppoolInput() {
    return this._subnetBroadcastInIppool;
  }

  // tcp_session_quota - computed: false, optional: true, required: false
  private _tcpSessionQuota?: number; 
  public get tcpSessionQuota() {
    return this.getNumberAttribute('tcp_session_quota');
  }
  public set tcpSessionQuota(value: number) {
    this._tcpSessionQuota = value;
  }
  public resetTcpSessionQuota() {
    this._tcpSessionQuota = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpSessionQuotaInput() {
    return this._tcpSessionQuota;
  }

  // type - computed: true, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // udp_session_quota - computed: false, optional: true, required: false
  private _udpSessionQuota?: number; 
  public get udpSessionQuota() {
    return this.getNumberAttribute('udp_session_quota');
  }
  public set udpSessionQuota(value: number) {
    this._udpSessionQuota = value;
  }
  public resetUdpSessionQuota() {
    this._udpSessionQuota = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpSessionQuotaInput() {
    return this._udpSessionQuota;
  }

  // utilization_alarm_clear - computed: true, optional: true, required: false
  private _utilizationAlarmClear?: number; 
  public get utilizationAlarmClear() {
    return this.getNumberAttribute('utilization_alarm_clear');
  }
  public set utilizationAlarmClear(value: number) {
    this._utilizationAlarmClear = value;
  }
  public resetUtilizationAlarmClear() {
    this._utilizationAlarmClear = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get utilizationAlarmClearInput() {
    return this._utilizationAlarmClear;
  }

  // utilization_alarm_raise - computed: true, optional: true, required: false
  private _utilizationAlarmRaise?: number; 
  public get utilizationAlarmRaise() {
    return this.getNumberAttribute('utilization_alarm_raise');
  }
  public set utilizationAlarmRaise(value: number) {
    this._utilizationAlarmRaise = value;
  }
  public resetUtilizationAlarmRaise() {
    this._utilizationAlarmRaise = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get utilizationAlarmRaiseInput() {
    return this._utilizationAlarmRaise;
  }

  // _scope - computed: false, optional: true, required: false
  private _scope = new ObjectFirewallIppoolDynamicMappingScopeAList(this, "_scope", false);
  public get scope() {
    return this._scope;
  }
  public putScope(value: ObjectFirewallIppoolDynamicMappingScopeA[] | cdktf.IResolvable) {
    this._scope.internalValue = value;
  }
  public resetScope() {
    this._scope.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      add_nat64_route: cdktf.stringToTerraform(this._addNat64Route),
      adom: cdktf.stringToTerraform(this._adom),
      arp_intf: cdktf.stringToTerraform(this._arpIntf),
      arp_reply: cdktf.stringToTerraform(this._arpReply),
      associated_interface: cdktf.stringToTerraform(this._associatedInterface),
      block_size: cdktf.numberToTerraform(this._blockSize),
      cgn_block_size: cdktf.numberToTerraform(this._cgnBlockSize),
      cgn_client_endip: cdktf.stringToTerraform(this._cgnClientEndip),
      cgn_client_ipv6shift: cdktf.numberToTerraform(this._cgnClientIpv6Shift),
      cgn_client_startip: cdktf.stringToTerraform(this._cgnClientStartip),
      cgn_fixedalloc: cdktf.stringToTerraform(this._cgnFixedalloc),
      cgn_overload: cdktf.stringToTerraform(this._cgnOverload),
      cgn_port_end: cdktf.numberToTerraform(this._cgnPortEnd),
      cgn_port_start: cdktf.numberToTerraform(this._cgnPortStart),
      cgn_spa: cdktf.stringToTerraform(this._cgnSpa),
      client_prefix_length: cdktf.numberToTerraform(this._clientPrefixLength),
      comments: cdktf.stringToTerraform(this._comments),
      dynamic_sort_subtable: cdktf.stringToTerraform(this._dynamicSortSubtable),
      endip: cdktf.stringToTerraform(this._endip),
      endport: cdktf.numberToTerraform(this._endport),
      exclude_ip: cdktf.listMapper(cdktf.stringToTerraform, false)(this._excludeIp),
      icmp_session_quota: cdktf.numberToTerraform(this._icmpSessionQuota),
      id: cdktf.stringToTerraform(this._id),
      ippool: cdktf.stringToTerraform(this._ippool),
      nat64: cdktf.stringToTerraform(this._nat64),
      num_blocks_per_user: cdktf.numberToTerraform(this._numBlocksPerUser),
      pba_interim_log: cdktf.numberToTerraform(this._pbaInterimLog),
      pba_timeout: cdktf.numberToTerraform(this._pbaTimeout),
      permit_any_host: cdktf.stringToTerraform(this._permitAnyHost),
      port_per_user: cdktf.numberToTerraform(this._portPerUser),
      privileged_port_use_pba: cdktf.stringToTerraform(this._privilegedPortUsePba),
      scopetype: cdktf.stringToTerraform(this._scopetype),
      source_endip: cdktf.stringToTerraform(this._sourceEndip),
      source_prefix6: cdktf.stringToTerraform(this._sourcePrefix6),
      source_startip: cdktf.stringToTerraform(this._sourceStartip),
      startip: cdktf.stringToTerraform(this._startip),
      startport: cdktf.numberToTerraform(this._startport),
      subnet_broadcast_in_ippool: cdktf.stringToTerraform(this._subnetBroadcastInIppool),
      tcp_session_quota: cdktf.numberToTerraform(this._tcpSessionQuota),
      type: cdktf.stringToTerraform(this._type),
      udp_session_quota: cdktf.numberToTerraform(this._udpSessionQuota),
      utilization_alarm_clear: cdktf.numberToTerraform(this._utilizationAlarmClear),
      utilization_alarm_raise: cdktf.numberToTerraform(this._utilizationAlarmRaise),
      _scope: cdktf.listMapper(objectFirewallIppoolDynamicMappingScopeAToTerraform, true)(this._scope.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      add_nat64_route: {
        value: cdktf.stringToHclTerraform(this._addNat64Route),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      adom: {
        value: cdktf.stringToHclTerraform(this._adom),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      arp_intf: {
        value: cdktf.stringToHclTerraform(this._arpIntf),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      arp_reply: {
        value: cdktf.stringToHclTerraform(this._arpReply),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      associated_interface: {
        value: cdktf.stringToHclTerraform(this._associatedInterface),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      block_size: {
        value: cdktf.numberToHclTerraform(this._blockSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      cgn_block_size: {
        value: cdktf.numberToHclTerraform(this._cgnBlockSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      cgn_client_endip: {
        value: cdktf.stringToHclTerraform(this._cgnClientEndip),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cgn_client_ipv6shift: {
        value: cdktf.numberToHclTerraform(this._cgnClientIpv6Shift),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      cgn_client_startip: {
        value: cdktf.stringToHclTerraform(this._cgnClientStartip),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cgn_fixedalloc: {
        value: cdktf.stringToHclTerraform(this._cgnFixedalloc),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cgn_overload: {
        value: cdktf.stringToHclTerraform(this._cgnOverload),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cgn_port_end: {
        value: cdktf.numberToHclTerraform(this._cgnPortEnd),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      cgn_port_start: {
        value: cdktf.numberToHclTerraform(this._cgnPortStart),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      cgn_spa: {
        value: cdktf.stringToHclTerraform(this._cgnSpa),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      client_prefix_length: {
        value: cdktf.numberToHclTerraform(this._clientPrefixLength),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      comments: {
        value: cdktf.stringToHclTerraform(this._comments),
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
      endip: {
        value: cdktf.stringToHclTerraform(this._endip),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      endport: {
        value: cdktf.numberToHclTerraform(this._endport),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      exclude_ip: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._excludeIp),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      icmp_session_quota: {
        value: cdktf.numberToHclTerraform(this._icmpSessionQuota),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ippool: {
        value: cdktf.stringToHclTerraform(this._ippool),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      nat64: {
        value: cdktf.stringToHclTerraform(this._nat64),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      num_blocks_per_user: {
        value: cdktf.numberToHclTerraform(this._numBlocksPerUser),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      pba_interim_log: {
        value: cdktf.numberToHclTerraform(this._pbaInterimLog),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      pba_timeout: {
        value: cdktf.numberToHclTerraform(this._pbaTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      permit_any_host: {
        value: cdktf.stringToHclTerraform(this._permitAnyHost),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      port_per_user: {
        value: cdktf.numberToHclTerraform(this._portPerUser),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      privileged_port_use_pba: {
        value: cdktf.stringToHclTerraform(this._privilegedPortUsePba),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scopetype: {
        value: cdktf.stringToHclTerraform(this._scopetype),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_endip: {
        value: cdktf.stringToHclTerraform(this._sourceEndip),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_prefix6: {
        value: cdktf.stringToHclTerraform(this._sourcePrefix6),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_startip: {
        value: cdktf.stringToHclTerraform(this._sourceStartip),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      startip: {
        value: cdktf.stringToHclTerraform(this._startip),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      startport: {
        value: cdktf.numberToHclTerraform(this._startport),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      subnet_broadcast_in_ippool: {
        value: cdktf.stringToHclTerraform(this._subnetBroadcastInIppool),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tcp_session_quota: {
        value: cdktf.numberToHclTerraform(this._tcpSessionQuota),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      udp_session_quota: {
        value: cdktf.numberToHclTerraform(this._udpSessionQuota),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      utilization_alarm_clear: {
        value: cdktf.numberToHclTerraform(this._utilizationAlarmClear),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      utilization_alarm_raise: {
        value: cdktf.numberToHclTerraform(this._utilizationAlarmRaise),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      _scope: {
        value: cdktf.listMapperHcl(objectFirewallIppoolDynamicMappingScopeAToHclTerraform, true)(this._scope.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ObjectFirewallIppoolDynamicMappingScopeAList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
