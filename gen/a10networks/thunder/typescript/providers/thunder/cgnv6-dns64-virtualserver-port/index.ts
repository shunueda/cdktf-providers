// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_dns64_virtualserver_port
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface Cgnv6Dns64VirtualserverPortConfig extends cdktf.TerraformMetaArguments {
  /**
  * 'enable': Enable; 'disable': Disable;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_dns64_virtualserver_port#action Cgnv6Dns64VirtualserverPort#action}
  */
  readonly action?: string;
  /**
  * Configure auto NAT for the vport
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_dns64_virtualserver_port#auto Cgnv6Dns64VirtualserverPort#auto}
  */
  readonly auto?: number;
  /**
  * Dns64_virtualserver_name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_dns64_virtualserver_port#dns64_virtualserver_name Cgnv6Dns64VirtualserverPort#dns64_virtualserver_name}
  */
  readonly dns64VirtualserverName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_dns64_virtualserver_port#id Cgnv6Dns64VirtualserverPort#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of the packet capture template to be bind with this object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_dns64_virtualserver_port#packet_capture_template Cgnv6Dns64VirtualserverPort#packet_capture_template}
  */
  readonly packetCaptureTemplate?: string;
  /**
  * Specify NAT pool or pool group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_dns64_virtualserver_port#pool Cgnv6Dns64VirtualserverPort#pool}
  */
  readonly pool?: string;
  /**
  * Port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_dns64_virtualserver_port#port_number Cgnv6Dns64VirtualserverPort#port_number}
  */
  readonly portNumber: number;
  /**
  * Set auto NAT pool as higher precedence for source NAT
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_dns64_virtualserver_port#precedence Cgnv6Dns64VirtualserverPort#precedence}
  */
  readonly precedence?: number;
  /**
  * 'dns-udp': DNS service over UDP;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_dns64_virtualserver_port#protocol Cgnv6Dns64VirtualserverPort#protocol}
  */
  readonly protocol: string;
  /**
  * Bind a Service Group to this Virtual Server (Service Group Name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_dns64_virtualserver_port#service_group Cgnv6Dns64VirtualserverPort#service_group}
  */
  readonly serviceGroup?: string;
  /**
  * DNS template (DNS template name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_dns64_virtualserver_port#template_dns Cgnv6Dns64VirtualserverPort#template_dns}
  */
  readonly templateDns?: string;
  /**
  * Policy Template (Policy template name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_dns64_virtualserver_port#template_policy Cgnv6Dns64VirtualserverPort#template_policy}
  */
  readonly templatePolicy?: string;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_dns64_virtualserver_port#user_tag Cgnv6Dns64VirtualserverPort#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_dns64_virtualserver_port#uuid Cgnv6Dns64VirtualserverPort#uuid}
  */
  readonly uuid?: string;
  /**
  * acl_id_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_dns64_virtualserver_port#acl_id_list Cgnv6Dns64VirtualserverPort#acl_id_list}
  */
  readonly aclIdList?: Cgnv6Dns64VirtualserverPortAclIdListStruct[] | cdktf.IResolvable;
  /**
  * acl_name_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_dns64_virtualserver_port#acl_name_list Cgnv6Dns64VirtualserverPort#acl_name_list}
  */
  readonly aclNameList?: Cgnv6Dns64VirtualserverPortAclNameListStruct[] | cdktf.IResolvable;
  /**
  * sampling_enable block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_dns64_virtualserver_port#sampling_enable Cgnv6Dns64VirtualserverPort#sampling_enable}
  */
  readonly samplingEnable?: Cgnv6Dns64VirtualserverPortSamplingEnable[] | cdktf.IResolvable;
}
export interface Cgnv6Dns64VirtualserverPortAclIdListStruct {
  /**
  * ACL id VPORT
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_dns64_virtualserver_port#acl_id Cgnv6Dns64VirtualserverPort#acl_id}
  */
  readonly aclId?: number;
  /**
  * Specify ACL precedence (sequence-number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_dns64_virtualserver_port#acl_id_seq_num Cgnv6Dns64VirtualserverPort#acl_id_seq_num}
  */
  readonly aclIdSeqNum?: number;
  /**
  * Policy based Source NAT (NAT Pool or Pool Group)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_dns64_virtualserver_port#acl_id_src_nat_pool Cgnv6Dns64VirtualserverPort#acl_id_src_nat_pool}
  */
  readonly aclIdSrcNatPool?: string;
}

export function cgnv6Dns64VirtualserverPortAclIdListStructToTerraform(struct?: Cgnv6Dns64VirtualserverPortAclIdListStruct | cdktf.IResolvable): any {
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


export function cgnv6Dns64VirtualserverPortAclIdListStructToHclTerraform(struct?: Cgnv6Dns64VirtualserverPortAclIdListStruct | cdktf.IResolvable): any {
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

export class Cgnv6Dns64VirtualserverPortAclIdListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Cgnv6Dns64VirtualserverPortAclIdListStruct | cdktf.IResolvable | undefined {
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

  public set internalValue(value: Cgnv6Dns64VirtualserverPortAclIdListStruct | cdktf.IResolvable | undefined) {
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

export class Cgnv6Dns64VirtualserverPortAclIdListStructList extends cdktf.ComplexList {
  public internalValue? : Cgnv6Dns64VirtualserverPortAclIdListStruct[] | cdktf.IResolvable

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
  public get(index: number): Cgnv6Dns64VirtualserverPortAclIdListStructOutputReference {
    return new Cgnv6Dns64VirtualserverPortAclIdListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Cgnv6Dns64VirtualserverPortAclNameListStruct {
  /**
  * Apply an access list name (Named Access List)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_dns64_virtualserver_port#acl_name Cgnv6Dns64VirtualserverPort#acl_name}
  */
  readonly aclName?: string;
  /**
  * Specify ACL precedence (sequence-number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_dns64_virtualserver_port#acl_name_seq_num Cgnv6Dns64VirtualserverPort#acl_name_seq_num}
  */
  readonly aclNameSeqNum?: number;
  /**
  * Policy based Source NAT (NAT Pool or Pool Group)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_dns64_virtualserver_port#acl_name_src_nat_pool Cgnv6Dns64VirtualserverPort#acl_name_src_nat_pool}
  */
  readonly aclNameSrcNatPool?: string;
}

export function cgnv6Dns64VirtualserverPortAclNameListStructToTerraform(struct?: Cgnv6Dns64VirtualserverPortAclNameListStruct | cdktf.IResolvable): any {
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


export function cgnv6Dns64VirtualserverPortAclNameListStructToHclTerraform(struct?: Cgnv6Dns64VirtualserverPortAclNameListStruct | cdktf.IResolvable): any {
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

export class Cgnv6Dns64VirtualserverPortAclNameListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Cgnv6Dns64VirtualserverPortAclNameListStruct | cdktf.IResolvable | undefined {
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

  public set internalValue(value: Cgnv6Dns64VirtualserverPortAclNameListStruct | cdktf.IResolvable | undefined) {
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

export class Cgnv6Dns64VirtualserverPortAclNameListStructList extends cdktf.ComplexList {
  public internalValue? : Cgnv6Dns64VirtualserverPortAclNameListStruct[] | cdktf.IResolvable

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
  public get(index: number): Cgnv6Dns64VirtualserverPortAclNameListStructOutputReference {
    return new Cgnv6Dns64VirtualserverPortAclNameListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Cgnv6Dns64VirtualserverPortSamplingEnable {
  /**
  * 'all': all; 'curr_conn': Current connection; 'total_l4_conn': Total L4 connections; 'total_l7_conn': Total L7 connections; 'toatal_tcp_conn': Total TCP connections; 'total_conn': Total connections; 'total_fwd_bytes': Total forward bytes; 'total_fwd_pkts': Total forward packets; 'total_rev_bytes': Total reverse bytes; 'total_rev_pkts': Total reverse packets; 'total_dns_pkts': Total DNS packets; 'total_mf_dns_pkts': Total MF DNS packets; 'es_total_failure_actions': Total failure actions; 'compression_bytes_before': Data into compression engine; 'compression_bytes_after': Data out of compression engine; 'compression_hit': Number of requests compressed; 'compression_miss': Number of requests NOT compressed; 'compression_miss_no_client': Compression miss no client; 'compression_miss_template_exclusion': Compression miss template exclusion; 'curr_req': Current requests; 'total_req': Total requests; 'total_req_succ': Total successful requests; 'peak_conn': Peak connections; 'curr_conn_rate': Current connection rate; 'last_rsp_time': Last response time; 'fastest_rsp_time': Fastest response time; 'slowest_rsp_time': Slowest response time;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_dns64_virtualserver_port#counters1 Cgnv6Dns64VirtualserverPort#counters1}
  */
  readonly counters1?: string;
}

export function cgnv6Dns64VirtualserverPortSamplingEnableToTerraform(struct?: Cgnv6Dns64VirtualserverPortSamplingEnable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    counters1: cdktf.stringToTerraform(struct!.counters1),
  }
}


export function cgnv6Dns64VirtualserverPortSamplingEnableToHclTerraform(struct?: Cgnv6Dns64VirtualserverPortSamplingEnable | cdktf.IResolvable): any {
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

export class Cgnv6Dns64VirtualserverPortSamplingEnableOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Cgnv6Dns64VirtualserverPortSamplingEnable | cdktf.IResolvable | undefined {
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

  public set internalValue(value: Cgnv6Dns64VirtualserverPortSamplingEnable | cdktf.IResolvable | undefined) {
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

export class Cgnv6Dns64VirtualserverPortSamplingEnableList extends cdktf.ComplexList {
  public internalValue? : Cgnv6Dns64VirtualserverPortSamplingEnable[] | cdktf.IResolvable

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
  public get(index: number): Cgnv6Dns64VirtualserverPortSamplingEnableOutputReference {
    return new Cgnv6Dns64VirtualserverPortSamplingEnableOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_dns64_virtualserver_port thunder_cgnv6_dns64_virtualserver_port}
*/
export class Cgnv6Dns64VirtualserverPort extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_cgnv6_dns64_virtualserver_port";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Cgnv6Dns64VirtualserverPort resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Cgnv6Dns64VirtualserverPort to import
  * @param importFromId The id of the existing Cgnv6Dns64VirtualserverPort that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_dns64_virtualserver_port#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Cgnv6Dns64VirtualserverPort to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_cgnv6_dns64_virtualserver_port", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_dns64_virtualserver_port thunder_cgnv6_dns64_virtualserver_port} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options Cgnv6Dns64VirtualserverPortConfig
  */
  public constructor(scope: Construct, id: string, config: Cgnv6Dns64VirtualserverPortConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_cgnv6_dns64_virtualserver_port',
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
    this._action = config.action;
    this._auto = config.auto;
    this._dns64VirtualserverName = config.dns64VirtualserverName;
    this._id = config.id;
    this._packetCaptureTemplate = config.packetCaptureTemplate;
    this._pool = config.pool;
    this._portNumber = config.portNumber;
    this._precedence = config.precedence;
    this._protocol = config.protocol;
    this._serviceGroup = config.serviceGroup;
    this._templateDns = config.templateDns;
    this._templatePolicy = config.templatePolicy;
    this._userTag = config.userTag;
    this._uuid = config.uuid;
    this._aclIdList.internalValue = config.aclIdList;
    this._aclNameList.internalValue = config.aclNameList;
    this._samplingEnable.internalValue = config.samplingEnable;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // dns64_virtualserver_name - computed: false, optional: false, required: true
  private _dns64VirtualserverName?: string; 
  public get dns64VirtualserverName() {
    return this.getStringAttribute('dns64_virtualserver_name');
  }
  public set dns64VirtualserverName(value: string) {
    this._dns64VirtualserverName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dns64VirtualserverNameInput() {
    return this._dns64VirtualserverName;
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
  private _aclIdList = new Cgnv6Dns64VirtualserverPortAclIdListStructList(this, "acl_id_list", false);
  public get aclIdList() {
    return this._aclIdList;
  }
  public putAclIdList(value: Cgnv6Dns64VirtualserverPortAclIdListStruct[] | cdktf.IResolvable) {
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
  private _aclNameList = new Cgnv6Dns64VirtualserverPortAclNameListStructList(this, "acl_name_list", false);
  public get aclNameList() {
    return this._aclNameList;
  }
  public putAclNameList(value: Cgnv6Dns64VirtualserverPortAclNameListStruct[] | cdktf.IResolvable) {
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
  private _samplingEnable = new Cgnv6Dns64VirtualserverPortSamplingEnableList(this, "sampling_enable", false);
  public get samplingEnable() {
    return this._samplingEnable;
  }
  public putSamplingEnable(value: Cgnv6Dns64VirtualserverPortSamplingEnable[] | cdktf.IResolvable) {
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
      action: cdktf.stringToTerraform(this._action),
      auto: cdktf.numberToTerraform(this._auto),
      dns64_virtualserver_name: cdktf.stringToTerraform(this._dns64VirtualserverName),
      id: cdktf.stringToTerraform(this._id),
      packet_capture_template: cdktf.stringToTerraform(this._packetCaptureTemplate),
      pool: cdktf.stringToTerraform(this._pool),
      port_number: cdktf.numberToTerraform(this._portNumber),
      precedence: cdktf.numberToTerraform(this._precedence),
      protocol: cdktf.stringToTerraform(this._protocol),
      service_group: cdktf.stringToTerraform(this._serviceGroup),
      template_dns: cdktf.stringToTerraform(this._templateDns),
      template_policy: cdktf.stringToTerraform(this._templatePolicy),
      user_tag: cdktf.stringToTerraform(this._userTag),
      uuid: cdktf.stringToTerraform(this._uuid),
      acl_id_list: cdktf.listMapper(cgnv6Dns64VirtualserverPortAclIdListStructToTerraform, true)(this._aclIdList.internalValue),
      acl_name_list: cdktf.listMapper(cgnv6Dns64VirtualserverPortAclNameListStructToTerraform, true)(this._aclNameList.internalValue),
      sampling_enable: cdktf.listMapper(cgnv6Dns64VirtualserverPortSamplingEnableToTerraform, true)(this._samplingEnable.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      action: {
        value: cdktf.stringToHclTerraform(this._action),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auto: {
        value: cdktf.numberToHclTerraform(this._auto),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      dns64_virtualserver_name: {
        value: cdktf.stringToHclTerraform(this._dns64VirtualserverName),
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
      packet_capture_template: {
        value: cdktf.stringToHclTerraform(this._packetCaptureTemplate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pool: {
        value: cdktf.stringToHclTerraform(this._pool),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      port_number: {
        value: cdktf.numberToHclTerraform(this._portNumber),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      precedence: {
        value: cdktf.numberToHclTerraform(this._precedence),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      protocol: {
        value: cdktf.stringToHclTerraform(this._protocol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_group: {
        value: cdktf.stringToHclTerraform(this._serviceGroup),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      template_dns: {
        value: cdktf.stringToHclTerraform(this._templateDns),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      template_policy: {
        value: cdktf.stringToHclTerraform(this._templatePolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
      acl_id_list: {
        value: cdktf.listMapperHcl(cgnv6Dns64VirtualserverPortAclIdListStructToHclTerraform, true)(this._aclIdList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "Cgnv6Dns64VirtualserverPortAclIdListStructList",
      },
      acl_name_list: {
        value: cdktf.listMapperHcl(cgnv6Dns64VirtualserverPortAclNameListStructToHclTerraform, true)(this._aclNameList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "Cgnv6Dns64VirtualserverPortAclNameListStructList",
      },
      sampling_enable: {
        value: cdktf.listMapperHcl(cgnv6Dns64VirtualserverPortSamplingEnableToHclTerraform, true)(this._samplingEnable.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "Cgnv6Dns64VirtualserverPortSamplingEnableList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
