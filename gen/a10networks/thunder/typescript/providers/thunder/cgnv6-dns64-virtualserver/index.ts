// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_dns64_virtualserver
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface Cgnv6Dns64VirtualserverConfig extends cdktf.TerraformMetaArguments {
  /**
  * 'enable': Enable Virtual Server (default); 'disable': Disable Virtual Server;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_dns64_virtualserver#enable_disable_action Cgnv6Dns64Virtualserver#enable_disable_action}
  */
  readonly enableDisableAction?: string;
  /**
  * Ethernet interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_dns64_virtualserver#ethernet Cgnv6Dns64Virtualserver#ethernet}
  */
  readonly ethernet?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_dns64_virtualserver#id Cgnv6Dns64Virtualserver#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * IP Address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_dns64_virtualserver#ip_address Cgnv6Dns64Virtualserver#ip_address}
  */
  readonly ipAddress?: string;
  /**
  * IPV6 address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_dns64_virtualserver#ipv6_address Cgnv6Dns64Virtualserver#ipv6_address}
  */
  readonly ipv6Address?: string;
  /**
  * CGNV6 Virtual Server Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_dns64_virtualserver#name Cgnv6Dns64Virtualserver#name}
  */
  readonly name: string;
  /**
  * IP subnet mask
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_dns64_virtualserver#netmask Cgnv6Dns64Virtualserver#netmask}
  */
  readonly netmask?: string;
  /**
  * Policy template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_dns64_virtualserver#policy Cgnv6Dns64Virtualserver#policy}
  */
  readonly policy?: number;
  /**
  * Policy template name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_dns64_virtualserver#template_policy Cgnv6Dns64Virtualserver#template_policy}
  */
  readonly templatePolicy?: string;
  /**
  * Use Interface IP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_dns64_virtualserver#use_if_ip Cgnv6Dns64Virtualserver#use_if_ip}
  */
  readonly useIfIp?: number;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_dns64_virtualserver#user_tag Cgnv6Dns64Virtualserver#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_dns64_virtualserver#uuid Cgnv6Dns64Virtualserver#uuid}
  */
  readonly uuid?: string;
  /**
  * Join a vrrp group (Specify ha VRRP-A vrid)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_dns64_virtualserver#vrid Cgnv6Dns64Virtualserver#vrid}
  */
  readonly vrid?: number;
  /**
  * port_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_dns64_virtualserver#port_list Cgnv6Dns64Virtualserver#port_list}
  */
  readonly portList?: Cgnv6Dns64VirtualserverPortListStruct[] | cdktf.IResolvable;
}
export interface Cgnv6Dns64VirtualserverPortListAclIdListStruct {
  /**
  * ACL id VPORT
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_dns64_virtualserver#acl_id Cgnv6Dns64Virtualserver#acl_id}
  */
  readonly aclId?: number;
  /**
  * Specify ACL precedence (sequence-number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_dns64_virtualserver#acl_id_seq_num Cgnv6Dns64Virtualserver#acl_id_seq_num}
  */
  readonly aclIdSeqNum?: number;
  /**
  * Policy based Source NAT (NAT Pool or Pool Group)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_dns64_virtualserver#acl_id_src_nat_pool Cgnv6Dns64Virtualserver#acl_id_src_nat_pool}
  */
  readonly aclIdSrcNatPool?: string;
}

export function cgnv6Dns64VirtualserverPortListAclIdListStructToTerraform(struct?: Cgnv6Dns64VirtualserverPortListAclIdListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    acl_id: cdktf.numberToTerraform(struct!.aclId),
    acl_id_seq_num: cdktf.numberToTerraform(struct!.aclIdSeqNum),
    acl_id_src_nat_pool: cdktf.stringToTerraform(struct!.aclIdSrcNatPool),
  }
}


export function cgnv6Dns64VirtualserverPortListAclIdListStructToHclTerraform(struct?: Cgnv6Dns64VirtualserverPortListAclIdListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    acl_id: {
      value: cdktf.numberToHclTerraform(struct!.aclId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    acl_id_seq_num: {
      value: cdktf.numberToHclTerraform(struct!.aclIdSeqNum),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    acl_id_src_nat_pool: {
      value: cdktf.stringToHclTerraform(struct!.aclIdSrcNatPool),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Cgnv6Dns64VirtualserverPortListAclIdListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Cgnv6Dns64VirtualserverPortListAclIdListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aclId !== undefined) {
      hasAnyValues = true;
      internalValueResult.aclId = this._aclId;
    }
    if (this._aclIdSeqNum !== undefined) {
      hasAnyValues = true;
      internalValueResult.aclIdSeqNum = this._aclIdSeqNum;
    }
    if (this._aclIdSrcNatPool !== undefined) {
      hasAnyValues = true;
      internalValueResult.aclIdSrcNatPool = this._aclIdSrcNatPool;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Cgnv6Dns64VirtualserverPortListAclIdListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._aclId = undefined;
      this._aclIdSeqNum = undefined;
      this._aclIdSrcNatPool = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._aclId = value.aclId;
      this._aclIdSeqNum = value.aclIdSeqNum;
      this._aclIdSrcNatPool = value.aclIdSrcNatPool;
    }
  }

  // acl_id - computed: false, optional: true, required: false
  private _aclId?: number; 
  public get aclId() {
    return this.getNumberAttribute('acl_id');
  }
  public set aclId(value: number) {
    this._aclId = value;
  }
  public resetAclId() {
    this._aclId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aclIdInput() {
    return this._aclId;
  }

  // acl_id_seq_num - computed: false, optional: true, required: false
  private _aclIdSeqNum?: number; 
  public get aclIdSeqNum() {
    return this.getNumberAttribute('acl_id_seq_num');
  }
  public set aclIdSeqNum(value: number) {
    this._aclIdSeqNum = value;
  }
  public resetAclIdSeqNum() {
    this._aclIdSeqNum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aclIdSeqNumInput() {
    return this._aclIdSeqNum;
  }

  // acl_id_src_nat_pool - computed: false, optional: true, required: false
  private _aclIdSrcNatPool?: string; 
  public get aclIdSrcNatPool() {
    return this.getStringAttribute('acl_id_src_nat_pool');
  }
  public set aclIdSrcNatPool(value: string) {
    this._aclIdSrcNatPool = value;
  }
  public resetAclIdSrcNatPool() {
    this._aclIdSrcNatPool = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aclIdSrcNatPoolInput() {
    return this._aclIdSrcNatPool;
  }
}

export class Cgnv6Dns64VirtualserverPortListAclIdListStructList extends cdktf.ComplexList {
  public internalValue? : Cgnv6Dns64VirtualserverPortListAclIdListStruct[] | cdktf.IResolvable

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
  public get(index: number): Cgnv6Dns64VirtualserverPortListAclIdListStructOutputReference {
    return new Cgnv6Dns64VirtualserverPortListAclIdListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Cgnv6Dns64VirtualserverPortListAclNameListStruct {
  /**
  * Apply an access list name (Named Access List)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_dns64_virtualserver#acl_name Cgnv6Dns64Virtualserver#acl_name}
  */
  readonly aclName?: string;
  /**
  * Specify ACL precedence (sequence-number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_dns64_virtualserver#acl_name_seq_num Cgnv6Dns64Virtualserver#acl_name_seq_num}
  */
  readonly aclNameSeqNum?: number;
  /**
  * Policy based Source NAT (NAT Pool or Pool Group)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_dns64_virtualserver#acl_name_src_nat_pool Cgnv6Dns64Virtualserver#acl_name_src_nat_pool}
  */
  readonly aclNameSrcNatPool?: string;
}

export function cgnv6Dns64VirtualserverPortListAclNameListStructToTerraform(struct?: Cgnv6Dns64VirtualserverPortListAclNameListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    acl_name: cdktf.stringToTerraform(struct!.aclName),
    acl_name_seq_num: cdktf.numberToTerraform(struct!.aclNameSeqNum),
    acl_name_src_nat_pool: cdktf.stringToTerraform(struct!.aclNameSrcNatPool),
  }
}


export function cgnv6Dns64VirtualserverPortListAclNameListStructToHclTerraform(struct?: Cgnv6Dns64VirtualserverPortListAclNameListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    acl_name: {
      value: cdktf.stringToHclTerraform(struct!.aclName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    acl_name_seq_num: {
      value: cdktf.numberToHclTerraform(struct!.aclNameSeqNum),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    acl_name_src_nat_pool: {
      value: cdktf.stringToHclTerraform(struct!.aclNameSrcNatPool),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Cgnv6Dns64VirtualserverPortListAclNameListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Cgnv6Dns64VirtualserverPortListAclNameListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aclName !== undefined) {
      hasAnyValues = true;
      internalValueResult.aclName = this._aclName;
    }
    if (this._aclNameSeqNum !== undefined) {
      hasAnyValues = true;
      internalValueResult.aclNameSeqNum = this._aclNameSeqNum;
    }
    if (this._aclNameSrcNatPool !== undefined) {
      hasAnyValues = true;
      internalValueResult.aclNameSrcNatPool = this._aclNameSrcNatPool;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Cgnv6Dns64VirtualserverPortListAclNameListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._aclName = undefined;
      this._aclNameSeqNum = undefined;
      this._aclNameSrcNatPool = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._aclName = value.aclName;
      this._aclNameSeqNum = value.aclNameSeqNum;
      this._aclNameSrcNatPool = value.aclNameSrcNatPool;
    }
  }

  // acl_name - computed: false, optional: true, required: false
  private _aclName?: string; 
  public get aclName() {
    return this.getStringAttribute('acl_name');
  }
  public set aclName(value: string) {
    this._aclName = value;
  }
  public resetAclName() {
    this._aclName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aclNameInput() {
    return this._aclName;
  }

  // acl_name_seq_num - computed: false, optional: true, required: false
  private _aclNameSeqNum?: number; 
  public get aclNameSeqNum() {
    return this.getNumberAttribute('acl_name_seq_num');
  }
  public set aclNameSeqNum(value: number) {
    this._aclNameSeqNum = value;
  }
  public resetAclNameSeqNum() {
    this._aclNameSeqNum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aclNameSeqNumInput() {
    return this._aclNameSeqNum;
  }

  // acl_name_src_nat_pool - computed: false, optional: true, required: false
  private _aclNameSrcNatPool?: string; 
  public get aclNameSrcNatPool() {
    return this.getStringAttribute('acl_name_src_nat_pool');
  }
  public set aclNameSrcNatPool(value: string) {
    this._aclNameSrcNatPool = value;
  }
  public resetAclNameSrcNatPool() {
    this._aclNameSrcNatPool = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aclNameSrcNatPoolInput() {
    return this._aclNameSrcNatPool;
  }
}

export class Cgnv6Dns64VirtualserverPortListAclNameListStructList extends cdktf.ComplexList {
  public internalValue? : Cgnv6Dns64VirtualserverPortListAclNameListStruct[] | cdktf.IResolvable

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
  public get(index: number): Cgnv6Dns64VirtualserverPortListAclNameListStructOutputReference {
    return new Cgnv6Dns64VirtualserverPortListAclNameListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Cgnv6Dns64VirtualserverPortListSamplingEnable {
  /**
  * 'all': all; 'curr_conn': Current connection; 'total_l4_conn': Total L4 connections; 'total_l7_conn': Total L7 connections; 'toatal_tcp_conn': Total TCP connections; 'total_conn': Total connections; 'total_fwd_bytes': Total forward bytes; 'total_fwd_pkts': Total forward packets; 'total_rev_bytes': Total reverse bytes; 'total_rev_pkts': Total reverse packets; 'total_dns_pkts': Total DNS packets; 'total_mf_dns_pkts': Total MF DNS packets; 'es_total_failure_actions': Total failure actions; 'compression_bytes_before': Data into compression engine; 'compression_bytes_after': Data out of compression engine; 'compression_hit': Number of requests compressed; 'compression_miss': Number of requests NOT compressed; 'compression_miss_no_client': Compression miss no client; 'compression_miss_template_exclusion': Compression miss template exclusion; 'curr_req': Current requests; 'total_req': Total requests; 'total_req_succ': Total successful requests; 'peak_conn': Peak connections; 'curr_conn_rate': Current connection rate; 'last_rsp_time': Last response time; 'fastest_rsp_time': Fastest response time; 'slowest_rsp_time': Slowest response time;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_dns64_virtualserver#counters1 Cgnv6Dns64Virtualserver#counters1}
  */
  readonly counters1?: string;
}

export function cgnv6Dns64VirtualserverPortListSamplingEnableToTerraform(struct?: Cgnv6Dns64VirtualserverPortListSamplingEnable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    counters1: cdktf.stringToTerraform(struct!.counters1),
  }
}


export function cgnv6Dns64VirtualserverPortListSamplingEnableToHclTerraform(struct?: Cgnv6Dns64VirtualserverPortListSamplingEnable | cdktf.IResolvable): any {
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

export class Cgnv6Dns64VirtualserverPortListSamplingEnableOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Cgnv6Dns64VirtualserverPortListSamplingEnable | cdktf.IResolvable | undefined {
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

  public set internalValue(value: Cgnv6Dns64VirtualserverPortListSamplingEnable | cdktf.IResolvable | undefined) {
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

export class Cgnv6Dns64VirtualserverPortListSamplingEnableList extends cdktf.ComplexList {
  public internalValue? : Cgnv6Dns64VirtualserverPortListSamplingEnable[] | cdktf.IResolvable

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
  public get(index: number): Cgnv6Dns64VirtualserverPortListSamplingEnableOutputReference {
    return new Cgnv6Dns64VirtualserverPortListSamplingEnableOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Cgnv6Dns64VirtualserverPortListStruct {
  /**
  * 'enable': Enable; 'disable': Disable;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_dns64_virtualserver#action Cgnv6Dns64Virtualserver#action}
  */
  readonly action?: string;
  /**
  * Configure auto NAT for the vport
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_dns64_virtualserver#auto Cgnv6Dns64Virtualserver#auto}
  */
  readonly auto?: number;
  /**
  * Name of the packet capture template to be bind with this object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_dns64_virtualserver#packet_capture_template Cgnv6Dns64Virtualserver#packet_capture_template}
  */
  readonly packetCaptureTemplate?: string;
  /**
  * Specify NAT pool or pool group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_dns64_virtualserver#pool Cgnv6Dns64Virtualserver#pool}
  */
  readonly pool?: string;
  /**
  * Port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_dns64_virtualserver#port_number Cgnv6Dns64Virtualserver#port_number}
  */
  readonly portNumber: number;
  /**
  * Set auto NAT pool as higher precedence for source NAT
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_dns64_virtualserver#precedence Cgnv6Dns64Virtualserver#precedence}
  */
  readonly precedence?: number;
  /**
  * 'dns-udp': DNS service over UDP;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_dns64_virtualserver#protocol Cgnv6Dns64Virtualserver#protocol}
  */
  readonly protocol: string;
  /**
  * Bind a Service Group to this Virtual Server (Service Group Name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_dns64_virtualserver#service_group Cgnv6Dns64Virtualserver#service_group}
  */
  readonly serviceGroup?: string;
  /**
  * DNS template (DNS template name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_dns64_virtualserver#template_dns Cgnv6Dns64Virtualserver#template_dns}
  */
  readonly templateDns?: string;
  /**
  * Policy Template (Policy template name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_dns64_virtualserver#template_policy Cgnv6Dns64Virtualserver#template_policy}
  */
  readonly templatePolicy?: string;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_dns64_virtualserver#user_tag Cgnv6Dns64Virtualserver#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_dns64_virtualserver#uuid Cgnv6Dns64Virtualserver#uuid}
  */
  readonly uuid?: string;
  /**
  * acl_id_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_dns64_virtualserver#acl_id_list Cgnv6Dns64Virtualserver#acl_id_list}
  */
  readonly aclIdList?: Cgnv6Dns64VirtualserverPortListAclIdListStruct[] | cdktf.IResolvable;
  /**
  * acl_name_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_dns64_virtualserver#acl_name_list Cgnv6Dns64Virtualserver#acl_name_list}
  */
  readonly aclNameList?: Cgnv6Dns64VirtualserverPortListAclNameListStruct[] | cdktf.IResolvable;
  /**
  * sampling_enable block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_dns64_virtualserver#sampling_enable Cgnv6Dns64Virtualserver#sampling_enable}
  */
  readonly samplingEnable?: Cgnv6Dns64VirtualserverPortListSamplingEnable[] | cdktf.IResolvable;
}

export function cgnv6Dns64VirtualserverPortListStructToTerraform(struct?: Cgnv6Dns64VirtualserverPortListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    auto: cdktf.numberToTerraform(struct!.auto),
    packet_capture_template: cdktf.stringToTerraform(struct!.packetCaptureTemplate),
    pool: cdktf.stringToTerraform(struct!.pool),
    port_number: cdktf.numberToTerraform(struct!.portNumber),
    precedence: cdktf.numberToTerraform(struct!.precedence),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    service_group: cdktf.stringToTerraform(struct!.serviceGroup),
    template_dns: cdktf.stringToTerraform(struct!.templateDns),
    template_policy: cdktf.stringToTerraform(struct!.templatePolicy),
    user_tag: cdktf.stringToTerraform(struct!.userTag),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    acl_id_list: cdktf.listMapper(cgnv6Dns64VirtualserverPortListAclIdListStructToTerraform, true)(struct!.aclIdList),
    acl_name_list: cdktf.listMapper(cgnv6Dns64VirtualserverPortListAclNameListStructToTerraform, true)(struct!.aclNameList),
    sampling_enable: cdktf.listMapper(cgnv6Dns64VirtualserverPortListSamplingEnableToTerraform, true)(struct!.samplingEnable),
  }
}


export function cgnv6Dns64VirtualserverPortListStructToHclTerraform(struct?: Cgnv6Dns64VirtualserverPortListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    auto: {
      value: cdktf.numberToHclTerraform(struct!.auto),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    packet_capture_template: {
      value: cdktf.stringToHclTerraform(struct!.packetCaptureTemplate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pool: {
      value: cdktf.stringToHclTerraform(struct!.pool),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port_number: {
      value: cdktf.numberToHclTerraform(struct!.portNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    precedence: {
      value: cdktf.numberToHclTerraform(struct!.precedence),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    protocol: {
      value: cdktf.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_group: {
      value: cdktf.stringToHclTerraform(struct!.serviceGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    template_dns: {
      value: cdktf.stringToHclTerraform(struct!.templateDns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    template_policy: {
      value: cdktf.stringToHclTerraform(struct!.templatePolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_tag: {
      value: cdktf.stringToHclTerraform(struct!.userTag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    acl_id_list: {
      value: cdktf.listMapperHcl(cgnv6Dns64VirtualserverPortListAclIdListStructToHclTerraform, true)(struct!.aclIdList),
      isBlock: true,
      type: "list",
      storageClassType: "Cgnv6Dns64VirtualserverPortListAclIdListStructList",
    },
    acl_name_list: {
      value: cdktf.listMapperHcl(cgnv6Dns64VirtualserverPortListAclNameListStructToHclTerraform, true)(struct!.aclNameList),
      isBlock: true,
      type: "list",
      storageClassType: "Cgnv6Dns64VirtualserverPortListAclNameListStructList",
    },
    sampling_enable: {
      value: cdktf.listMapperHcl(cgnv6Dns64VirtualserverPortListSamplingEnableToHclTerraform, true)(struct!.samplingEnable),
      isBlock: true,
      type: "list",
      storageClassType: "Cgnv6Dns64VirtualserverPortListSamplingEnableList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Cgnv6Dns64VirtualserverPortListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Cgnv6Dns64VirtualserverPortListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._auto !== undefined) {
      hasAnyValues = true;
      internalValueResult.auto = this._auto;
    }
    if (this._packetCaptureTemplate !== undefined) {
      hasAnyValues = true;
      internalValueResult.packetCaptureTemplate = this._packetCaptureTemplate;
    }
    if (this._pool !== undefined) {
      hasAnyValues = true;
      internalValueResult.pool = this._pool;
    }
    if (this._portNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.portNumber = this._portNumber;
    }
    if (this._precedence !== undefined) {
      hasAnyValues = true;
      internalValueResult.precedence = this._precedence;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._serviceGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceGroup = this._serviceGroup;
    }
    if (this._templateDns !== undefined) {
      hasAnyValues = true;
      internalValueResult.templateDns = this._templateDns;
    }
    if (this._templatePolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.templatePolicy = this._templatePolicy;
    }
    if (this._userTag !== undefined) {
      hasAnyValues = true;
      internalValueResult.userTag = this._userTag;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._aclIdList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.aclIdList = this._aclIdList?.internalValue;
    }
    if (this._aclNameList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.aclNameList = this._aclNameList?.internalValue;
    }
    if (this._samplingEnable?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.samplingEnable = this._samplingEnable?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Cgnv6Dns64VirtualserverPortListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._auto = undefined;
      this._packetCaptureTemplate = undefined;
      this._pool = undefined;
      this._portNumber = undefined;
      this._precedence = undefined;
      this._protocol = undefined;
      this._serviceGroup = undefined;
      this._templateDns = undefined;
      this._templatePolicy = undefined;
      this._userTag = undefined;
      this._uuid = undefined;
      this._aclIdList.internalValue = undefined;
      this._aclNameList.internalValue = undefined;
      this._samplingEnable.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._auto = value.auto;
      this._packetCaptureTemplate = value.packetCaptureTemplate;
      this._pool = value.pool;
      this._portNumber = value.portNumber;
      this._precedence = value.precedence;
      this._protocol = value.protocol;
      this._serviceGroup = value.serviceGroup;
      this._templateDns = value.templateDns;
      this._templatePolicy = value.templatePolicy;
      this._userTag = value.userTag;
      this._uuid = value.uuid;
      this._aclIdList.internalValue = value.aclIdList;
      this._aclNameList.internalValue = value.aclNameList;
      this._samplingEnable.internalValue = value.samplingEnable;
    }
  }

  // action - computed: false, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // auto - computed: false, optional: true, required: false
  private _auto?: number; 
  public get auto() {
    return this.getNumberAttribute('auto');
  }
  public set auto(value: number) {
    this._auto = value;
  }
  public resetAuto() {
    this._auto = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoInput() {
    return this._auto;
  }

  // packet_capture_template - computed: false, optional: true, required: false
  private _packetCaptureTemplate?: string; 
  public get packetCaptureTemplate() {
    return this.getStringAttribute('packet_capture_template');
  }
  public set packetCaptureTemplate(value: string) {
    this._packetCaptureTemplate = value;
  }
  public resetPacketCaptureTemplate() {
    this._packetCaptureTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packetCaptureTemplateInput() {
    return this._packetCaptureTemplate;
  }

  // pool - computed: false, optional: true, required: false
  private _pool?: string; 
  public get pool() {
    return this.getStringAttribute('pool');
  }
  public set pool(value: string) {
    this._pool = value;
  }
  public resetPool() {
    this._pool = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get poolInput() {
    return this._pool;
  }

  // port_number - computed: false, optional: false, required: true
  private _portNumber?: number; 
  public get portNumber() {
    return this.getNumberAttribute('port_number');
  }
  public set portNumber(value: number) {
    this._portNumber = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portNumberInput() {
    return this._portNumber;
  }

  // precedence - computed: false, optional: true, required: false
  private _precedence?: number; 
  public get precedence() {
    return this.getNumberAttribute('precedence');
  }
  public set precedence(value: number) {
    this._precedence = value;
  }
  public resetPrecedence() {
    this._precedence = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get precedenceInput() {
    return this._precedence;
  }

  // protocol - computed: false, optional: false, required: true
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // service_group - computed: false, optional: true, required: false
  private _serviceGroup?: string; 
  public get serviceGroup() {
    return this.getStringAttribute('service_group');
  }
  public set serviceGroup(value: string) {
    this._serviceGroup = value;
  }
  public resetServiceGroup() {
    this._serviceGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceGroupInput() {
    return this._serviceGroup;
  }

  // template_dns - computed: false, optional: true, required: false
  private _templateDns?: string; 
  public get templateDns() {
    return this.getStringAttribute('template_dns');
  }
  public set templateDns(value: string) {
    this._templateDns = value;
  }
  public resetTemplateDns() {
    this._templateDns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateDnsInput() {
    return this._templateDns;
  }

  // template_policy - computed: false, optional: true, required: false
  private _templatePolicy?: string; 
  public get templatePolicy() {
    return this.getStringAttribute('template_policy');
  }
  public set templatePolicy(value: string) {
    this._templatePolicy = value;
  }
  public resetTemplatePolicy() {
    this._templatePolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templatePolicyInput() {
    return this._templatePolicy;
  }

  // user_tag - computed: false, optional: true, required: false
  private _userTag?: string; 
  public get userTag() {
    return this.getStringAttribute('user_tag');
  }
  public set userTag(value: string) {
    this._userTag = value;
  }
  public resetUserTag() {
    this._userTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userTagInput() {
    return this._userTag;
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

  // acl_id_list - computed: false, optional: true, required: false
  private _aclIdList = new Cgnv6Dns64VirtualserverPortListAclIdListStructList(this, "acl_id_list", false);
  public get aclIdList() {
    return this._aclIdList;
  }
  public putAclIdList(value: Cgnv6Dns64VirtualserverPortListAclIdListStruct[] | cdktf.IResolvable) {
    this._aclIdList.internalValue = value;
  }
  public resetAclIdList() {
    this._aclIdList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aclIdListInput() {
    return this._aclIdList.internalValue;
  }

  // acl_name_list - computed: false, optional: true, required: false
  private _aclNameList = new Cgnv6Dns64VirtualserverPortListAclNameListStructList(this, "acl_name_list", false);
  public get aclNameList() {
    return this._aclNameList;
  }
  public putAclNameList(value: Cgnv6Dns64VirtualserverPortListAclNameListStruct[] | cdktf.IResolvable) {
    this._aclNameList.internalValue = value;
  }
  public resetAclNameList() {
    this._aclNameList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aclNameListInput() {
    return this._aclNameList.internalValue;
  }

  // sampling_enable - computed: false, optional: true, required: false
  private _samplingEnable = new Cgnv6Dns64VirtualserverPortListSamplingEnableList(this, "sampling_enable", false);
  public get samplingEnable() {
    return this._samplingEnable;
  }
  public putSamplingEnable(value: Cgnv6Dns64VirtualserverPortListSamplingEnable[] | cdktf.IResolvable) {
    this._samplingEnable.internalValue = value;
  }
  public resetSamplingEnable() {
    this._samplingEnable.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samplingEnableInput() {
    return this._samplingEnable.internalValue;
  }
}

export class Cgnv6Dns64VirtualserverPortListStructList extends cdktf.ComplexList {
  public internalValue? : Cgnv6Dns64VirtualserverPortListStruct[] | cdktf.IResolvable

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
  public get(index: number): Cgnv6Dns64VirtualserverPortListStructOutputReference {
    return new Cgnv6Dns64VirtualserverPortListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_dns64_virtualserver thunder_cgnv6_dns64_virtualserver}
*/
export class Cgnv6Dns64Virtualserver extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_cgnv6_dns64_virtualserver";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Cgnv6Dns64Virtualserver resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Cgnv6Dns64Virtualserver to import
  * @param importFromId The id of the existing Cgnv6Dns64Virtualserver that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_dns64_virtualserver#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Cgnv6Dns64Virtualserver to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_cgnv6_dns64_virtualserver", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/cgnv6_dns64_virtualserver thunder_cgnv6_dns64_virtualserver} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options Cgnv6Dns64VirtualserverConfig
  */
  public constructor(scope: Construct, id: string, config: Cgnv6Dns64VirtualserverConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_cgnv6_dns64_virtualserver',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.4.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._enableDisableAction = config.enableDisableAction;
    this._ethernet = config.ethernet;
    this._id = config.id;
    this._ipAddress = config.ipAddress;
    this._ipv6Address = config.ipv6Address;
    this._name = config.name;
    this._netmask = config.netmask;
    this._policy = config.policy;
    this._templatePolicy = config.templatePolicy;
    this._useIfIp = config.useIfIp;
    this._userTag = config.userTag;
    this._uuid = config.uuid;
    this._vrid = config.vrid;
    this._portList.internalValue = config.portList;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // enable_disable_action - computed: false, optional: true, required: false
  private _enableDisableAction?: string; 
  public get enableDisableAction() {
    return this.getStringAttribute('enable_disable_action');
  }
  public set enableDisableAction(value: string) {
    this._enableDisableAction = value;
  }
  public resetEnableDisableAction() {
    this._enableDisableAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableDisableActionInput() {
    return this._enableDisableAction;
  }

  // ethernet - computed: false, optional: true, required: false
  private _ethernet?: number; 
  public get ethernet() {
    return this.getNumberAttribute('ethernet');
  }
  public set ethernet(value: number) {
    this._ethernet = value;
  }
  public resetEthernet() {
    this._ethernet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ethernetInput() {
    return this._ethernet;
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

  // ip_address - computed: false, optional: true, required: false
  private _ipAddress?: string; 
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }
  public set ipAddress(value: string) {
    this._ipAddress = value;
  }
  public resetIpAddress() {
    this._ipAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressInput() {
    return this._ipAddress;
  }

  // ipv6_address - computed: false, optional: true, required: false
  private _ipv6Address?: string; 
  public get ipv6Address() {
    return this.getStringAttribute('ipv6_address');
  }
  public set ipv6Address(value: string) {
    this._ipv6Address = value;
  }
  public resetIpv6Address() {
    this._ipv6Address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6AddressInput() {
    return this._ipv6Address;
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

  // netmask - computed: false, optional: true, required: false
  private _netmask?: string; 
  public get netmask() {
    return this.getStringAttribute('netmask');
  }
  public set netmask(value: string) {
    this._netmask = value;
  }
  public resetNetmask() {
    this._netmask = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netmaskInput() {
    return this._netmask;
  }

  // policy - computed: false, optional: true, required: false
  private _policy?: number; 
  public get policy() {
    return this.getNumberAttribute('policy');
  }
  public set policy(value: number) {
    this._policy = value;
  }
  public resetPolicy() {
    this._policy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyInput() {
    return this._policy;
  }

  // template_policy - computed: false, optional: true, required: false
  private _templatePolicy?: string; 
  public get templatePolicy() {
    return this.getStringAttribute('template_policy');
  }
  public set templatePolicy(value: string) {
    this._templatePolicy = value;
  }
  public resetTemplatePolicy() {
    this._templatePolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templatePolicyInput() {
    return this._templatePolicy;
  }

  // use_if_ip - computed: false, optional: true, required: false
  private _useIfIp?: number; 
  public get useIfIp() {
    return this.getNumberAttribute('use_if_ip');
  }
  public set useIfIp(value: number) {
    this._useIfIp = value;
  }
  public resetUseIfIp() {
    this._useIfIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useIfIpInput() {
    return this._useIfIp;
  }

  // user_tag - computed: false, optional: true, required: false
  private _userTag?: string; 
  public get userTag() {
    return this.getStringAttribute('user_tag');
  }
  public set userTag(value: string) {
    this._userTag = value;
  }
  public resetUserTag() {
    this._userTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userTagInput() {
    return this._userTag;
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

  // vrid - computed: false, optional: true, required: false
  private _vrid?: number; 
  public get vrid() {
    return this.getNumberAttribute('vrid');
  }
  public set vrid(value: number) {
    this._vrid = value;
  }
  public resetVrid() {
    this._vrid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vridInput() {
    return this._vrid;
  }

  // port_list - computed: false, optional: true, required: false
  private _portList = new Cgnv6Dns64VirtualserverPortListStructList(this, "port_list", false);
  public get portList() {
    return this._portList;
  }
  public putPortList(value: Cgnv6Dns64VirtualserverPortListStruct[] | cdktf.IResolvable) {
    this._portList.internalValue = value;
  }
  public resetPortList() {
    this._portList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portListInput() {
    return this._portList.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      enable_disable_action: cdktf.stringToTerraform(this._enableDisableAction),
      ethernet: cdktf.numberToTerraform(this._ethernet),
      id: cdktf.stringToTerraform(this._id),
      ip_address: cdktf.stringToTerraform(this._ipAddress),
      ipv6_address: cdktf.stringToTerraform(this._ipv6Address),
      name: cdktf.stringToTerraform(this._name),
      netmask: cdktf.stringToTerraform(this._netmask),
      policy: cdktf.numberToTerraform(this._policy),
      template_policy: cdktf.stringToTerraform(this._templatePolicy),
      use_if_ip: cdktf.numberToTerraform(this._useIfIp),
      user_tag: cdktf.stringToTerraform(this._userTag),
      uuid: cdktf.stringToTerraform(this._uuid),
      vrid: cdktf.numberToTerraform(this._vrid),
      port_list: cdktf.listMapper(cgnv6Dns64VirtualserverPortListStructToTerraform, true)(this._portList.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      enable_disable_action: {
        value: cdktf.stringToHclTerraform(this._enableDisableAction),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ethernet: {
        value: cdktf.numberToHclTerraform(this._ethernet),
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
      ip_address: {
        value: cdktf.stringToHclTerraform(this._ipAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv6_address: {
        value: cdktf.stringToHclTerraform(this._ipv6Address),
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
      netmask: {
        value: cdktf.stringToHclTerraform(this._netmask),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      policy: {
        value: cdktf.numberToHclTerraform(this._policy),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      template_policy: {
        value: cdktf.stringToHclTerraform(this._templatePolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      use_if_ip: {
        value: cdktf.numberToHclTerraform(this._useIfIp),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      user_tag: {
        value: cdktf.stringToHclTerraform(this._userTag),
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
      vrid: {
        value: cdktf.numberToHclTerraform(this._vrid),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      port_list: {
        value: cdktf.listMapperHcl(cgnv6Dns64VirtualserverPortListStructToHclTerraform, true)(this._portList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "Cgnv6Dns64VirtualserverPortListStructList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
