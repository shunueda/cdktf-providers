// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_dns
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SystemDnsAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_dns#id SystemDnsA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_dns#uuid SystemDnsA#uuid}
  */
  readonly uuid?: string;
  /**
  * recursive_nameserver block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_dns#recursive_nameserver SystemDnsA#recursive_nameserver}
  */
  readonly recursiveNameserver?: SystemDnsRecursiveNameserverA;
  /**
  * sampling_enable block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_dns#sampling_enable SystemDnsA#sampling_enable}
  */
  readonly samplingEnable?: SystemDnsSamplingEnableA[] | cdktf.IResolvable;
}
export interface SystemDnsRecursiveNameserverServerListStructA {
  /**
  * Specify IPv4 server address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_dns#ipv4_addr SystemDnsA#ipv4_addr}
  */
  readonly ipv4Addr?: string;
  /**
  * Specify IPv6 server address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_dns#ipv6_addr SystemDnsA#ipv6_addr}
  */
  readonly ipv6Addr?: string;
  /**
  * Description for this ipv4 address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_dns#v4_desc SystemDnsA#v4_desc}
  */
  readonly v4Desc?: string;
  /**
  * Description for this ipv6 address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_dns#v6_desc SystemDnsA#v6_desc}
  */
  readonly v6Desc?: string;
}

export function systemDnsRecursiveNameserverServerListStructAToTerraform(struct?: SystemDnsRecursiveNameserverServerListStructA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipv4_addr: cdktf.stringToTerraform(struct!.ipv4Addr),
    ipv6_addr: cdktf.stringToTerraform(struct!.ipv6Addr),
    v4_desc: cdktf.stringToTerraform(struct!.v4Desc),
    v6_desc: cdktf.stringToTerraform(struct!.v6Desc),
  }
}


export function systemDnsRecursiveNameserverServerListStructAToHclTerraform(struct?: SystemDnsRecursiveNameserverServerListStructA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ipv4_addr: {
      value: cdktf.stringToHclTerraform(struct!.ipv4Addr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv6_addr: {
      value: cdktf.stringToHclTerraform(struct!.ipv6Addr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    v4_desc: {
      value: cdktf.stringToHclTerraform(struct!.v4Desc),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    v6_desc: {
      value: cdktf.stringToHclTerraform(struct!.v6Desc),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemDnsRecursiveNameserverServerListStructAOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemDnsRecursiveNameserverServerListStructA | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipv4Addr !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4Addr = this._ipv4Addr;
    }
    if (this._ipv6Addr !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6Addr = this._ipv6Addr;
    }
    if (this._v4Desc !== undefined) {
      hasAnyValues = true;
      internalValueResult.v4Desc = this._v4Desc;
    }
    if (this._v6Desc !== undefined) {
      hasAnyValues = true;
      internalValueResult.v6Desc = this._v6Desc;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemDnsRecursiveNameserverServerListStructA | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipv4Addr = undefined;
      this._ipv6Addr = undefined;
      this._v4Desc = undefined;
      this._v6Desc = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipv4Addr = value.ipv4Addr;
      this._ipv6Addr = value.ipv6Addr;
      this._v4Desc = value.v4Desc;
      this._v6Desc = value.v6Desc;
    }
  }

  // ipv4_addr - computed: false, optional: true, required: false
  private _ipv4Addr?: string; 
  public get ipv4Addr() {
    return this.getStringAttribute('ipv4_addr');
  }
  public set ipv4Addr(value: string) {
    this._ipv4Addr = value;
  }
  public resetIpv4Addr() {
    this._ipv4Addr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4AddrInput() {
    return this._ipv4Addr;
  }

  // ipv6_addr - computed: false, optional: true, required: false
  private _ipv6Addr?: string; 
  public get ipv6Addr() {
    return this.getStringAttribute('ipv6_addr');
  }
  public set ipv6Addr(value: string) {
    this._ipv6Addr = value;
  }
  public resetIpv6Addr() {
    this._ipv6Addr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6AddrInput() {
    return this._ipv6Addr;
  }

  // v4_desc - computed: false, optional: true, required: false
  private _v4Desc?: string; 
  public get v4Desc() {
    return this.getStringAttribute('v4_desc');
  }
  public set v4Desc(value: string) {
    this._v4Desc = value;
  }
  public resetV4Desc() {
    this._v4Desc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v4DescInput() {
    return this._v4Desc;
  }

  // v6_desc - computed: false, optional: true, required: false
  private _v6Desc?: string; 
  public get v6Desc() {
    return this.getStringAttribute('v6_desc');
  }
  public set v6Desc(value: string) {
    this._v6Desc = value;
  }
  public resetV6Desc() {
    this._v6Desc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v6DescInput() {
    return this._v6Desc;
  }
}

export class SystemDnsRecursiveNameserverServerListStructAList extends cdktf.ComplexList {
  public internalValue? : SystemDnsRecursiveNameserverServerListStructA[] | cdktf.IResolvable

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
  public get(index: number): SystemDnsRecursiveNameserverServerListStructAOutputReference {
    return new SystemDnsRecursiveNameserverServerListStructAOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SystemDnsRecursiveNameserverA {
  /**
  * Use the configured name servers of shared partition
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_dns#follow_shared SystemDnsA#follow_shared}
  */
  readonly followShared?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_dns#uuid SystemDnsA#uuid}
  */
  readonly uuid?: string;
  /**
  * server_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_dns#server_list SystemDnsA#server_list}
  */
  readonly serverList?: SystemDnsRecursiveNameserverServerListStructA[] | cdktf.IResolvable;
}

export function systemDnsRecursiveNameserverAToTerraform(struct?: SystemDnsRecursiveNameserverAOutputReference | SystemDnsRecursiveNameserverA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    follow_shared: cdktf.numberToTerraform(struct!.followShared),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    server_list: cdktf.listMapper(systemDnsRecursiveNameserverServerListStructAToTerraform, true)(struct!.serverList),
  }
}


export function systemDnsRecursiveNameserverAToHclTerraform(struct?: SystemDnsRecursiveNameserverAOutputReference | SystemDnsRecursiveNameserverA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    follow_shared: {
      value: cdktf.numberToHclTerraform(struct!.followShared),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    server_list: {
      value: cdktf.listMapperHcl(systemDnsRecursiveNameserverServerListStructAToHclTerraform, true)(struct!.serverList),
      isBlock: true,
      type: "list",
      storageClassType: "SystemDnsRecursiveNameserverServerListStructAList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemDnsRecursiveNameserverAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemDnsRecursiveNameserverA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._followShared !== undefined) {
      hasAnyValues = true;
      internalValueResult.followShared = this._followShared;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._serverList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverList = this._serverList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemDnsRecursiveNameserverA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._followShared = undefined;
      this._uuid = undefined;
      this._serverList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._followShared = value.followShared;
      this._uuid = value.uuid;
      this._serverList.internalValue = value.serverList;
    }
  }

  // follow_shared - computed: false, optional: true, required: false
  private _followShared?: number; 
  public get followShared() {
    return this.getNumberAttribute('follow_shared');
  }
  public set followShared(value: number) {
    this._followShared = value;
  }
  public resetFollowShared() {
    this._followShared = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get followSharedInput() {
    return this._followShared;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // server_list - computed: false, optional: true, required: false
  private _serverList = new SystemDnsRecursiveNameserverServerListStructAList(this, "server_list", false);
  public get serverList() {
    return this._serverList;
  }
  public putServerList(value: SystemDnsRecursiveNameserverServerListStructA[] | cdktf.IResolvable) {
    this._serverList.internalValue = value;
  }
  public resetServerList() {
    this._serverList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverListInput() {
    return this._serverList.internalValue;
  }
}
export interface SystemDnsSamplingEnableA {
  /**
  * 'all': all; 'slb_req': No. of requests; 'slb_resp': No. of responses; 'slb_no_resp': No. of requests with no response; 'slb_req_rexmit': No. of requests retransmit; 'slb_resp_no_match': No. of requests and responses with no match; 'slb_no_resource': No. of resource failures; 'nat_req': (NAT) No. of requests; 'nat_resp': (NAT) No. of responses; 'nat_no_resp': (NAT) No. of resource failures; 'nat_req_rexmit': (NAT) No. of request retransmits; 'nat_resp_no_match': (NAT) No. of requests with no response; 'nat_no_resource': (NAT) No. of resource failures; 'nat_xid_reused': (NAT) No. of requests reusing a transaction id; 'filter_type_drop': Total Query Type Drop; 'filter_class_drop': Total Query Class Drop; 'filter_type_any_drop': Total Query ANY Type Drop; 'slb_dns_client_ssl_succ': No. of client ssl success; 'slb_dns_server_ssl_succ': No. of server ssl success; 'slb_dns_udp_conn': No. of backend udp connections; 'slb_dns_udp_conn_succ': No. of backend udp conn established; 'slb_dns_padding_to_server_removed': slb_dns_padding_to_server_removed; 'slb_dns_padding_to_client_added': slb_dns_padding_to_client_added; 'slb_dns_edns_subnet_to_server_removed': slb_dns_edns_subnet_to_server_removed; 'slb_dns_udp_retransmit': slb_dns_udp_retransmit; 'slb_dns_udp_retransmit_fail': slb_dns_udp_retransmit_fail; 'rpz_action_drop': RPZ Action Drop; 'rpz_action_pass_thru': RPZ Action Pass Through; 'rpz_action_tcp_only': RPZ Action TCP Only; 'rpz_action_nxdomain': RPZ Action NXDOMAIN; 'rpz_action_nodata': RPZ Action NODATA; 'rpz_action_local_data': RPZ Action Local Data; 'slb_drop': DNS requests drop; 'nat_slb_drop': (NAT)DNS requests drop; 'invalid_q_len_to_udp': invalid query length to conver to UDP; 'slb_dns_edns_ecs_received': Number of ecs from client received; 'slb_dns_edns_ecs_inserted': Number of ecs inserted;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_dns#counters1 SystemDnsA#counters1}
  */
  readonly counters1?: string;
}

export function systemDnsSamplingEnableAToTerraform(struct?: SystemDnsSamplingEnableA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    counters1: cdktf.stringToTerraform(struct!.counters1),
  }
}


export function systemDnsSamplingEnableAToHclTerraform(struct?: SystemDnsSamplingEnableA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    counters1: {
      value: cdktf.stringToHclTerraform(struct!.counters1),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemDnsSamplingEnableAOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemDnsSamplingEnableA | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._counters1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.counters1 = this._counters1;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemDnsSamplingEnableA | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._counters1 = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._counters1 = value.counters1;
    }
  }

  // counters1 - computed: false, optional: true, required: false
  private _counters1?: string; 
  public get counters1() {
    return this.getStringAttribute('counters1');
  }
  public set counters1(value: string) {
    this._counters1 = value;
  }
  public resetCounters1() {
    this._counters1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get counters1Input() {
    return this._counters1;
  }
}

export class SystemDnsSamplingEnableAList extends cdktf.ComplexList {
  public internalValue? : SystemDnsSamplingEnableA[] | cdktf.IResolvable

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
  public get(index: number): SystemDnsSamplingEnableAOutputReference {
    return new SystemDnsSamplingEnableAOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_dns thunder_system_dns}
*/
export class SystemDnsA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_system_dns";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SystemDnsA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SystemDnsA to import
  * @param importFromId The id of the existing SystemDnsA that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_dns#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SystemDnsA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_system_dns", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_dns thunder_system_dns} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SystemDnsAConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SystemDnsAConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_system_dns',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.5.0',
        providerVersionConstraint: '1.5.0'
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
    this._uuid = config.uuid;
    this._recursiveNameserver.internalValue = config.recursiveNameserver;
    this._samplingEnable.internalValue = config.samplingEnable;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // recursive_nameserver - computed: false, optional: true, required: false
  private _recursiveNameserver = new SystemDnsRecursiveNameserverAOutputReference(this, "recursive_nameserver");
  public get recursiveNameserver() {
    return this._recursiveNameserver;
  }
  public putRecursiveNameserver(value: SystemDnsRecursiveNameserverA) {
    this._recursiveNameserver.internalValue = value;
  }
  public resetRecursiveNameserver() {
    this._recursiveNameserver.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recursiveNameserverInput() {
    return this._recursiveNameserver.internalValue;
  }

  // sampling_enable - computed: false, optional: true, required: false
  private _samplingEnable = new SystemDnsSamplingEnableAList(this, "sampling_enable", false);
  public get samplingEnable() {
    return this._samplingEnable;
  }
  public putSamplingEnable(value: SystemDnsSamplingEnableA[] | cdktf.IResolvable) {
    this._samplingEnable.internalValue = value;
  }
  public resetSamplingEnable() {
    this._samplingEnable.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samplingEnableInput() {
    return this._samplingEnable.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      uuid: cdktf.stringToTerraform(this._uuid),
      recursive_nameserver: systemDnsRecursiveNameserverAToTerraform(this._recursiveNameserver.internalValue),
      sampling_enable: cdktf.listMapper(systemDnsSamplingEnableAToTerraform, true)(this._samplingEnable.internalValue),
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
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      recursive_nameserver: {
        value: systemDnsRecursiveNameserverAToHclTerraform(this._recursiveNameserver.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SystemDnsRecursiveNameserverAList",
      },
      sampling_enable: {
        value: cdktf.listMapperHcl(systemDnsSamplingEnableAToHclTerraform, true)(this._samplingEnable.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SystemDnsSamplingEnableAList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
