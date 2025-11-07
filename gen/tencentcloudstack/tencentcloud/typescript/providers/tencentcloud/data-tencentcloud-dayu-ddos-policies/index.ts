// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/data-sources/dayu_ddos_policies
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataTencentcloudDayuDdosPoliciesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/data-sources/dayu_ddos_policies#id DataTencentcloudDayuDdosPolicies#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * ID of the DDoS policy to be query.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/data-sources/dayu_ddos_policies#policy_id DataTencentcloudDayuDdosPolicies#policy_id}
  */
  readonly policyId?: string;
  /**
  * Type of the resource that the DDoS policy works for, valid values are `bgpip`, `bgp`, `bgp-multip` and `net`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/data-sources/dayu_ddos_policies#resource_type DataTencentcloudDayuDdosPolicies#resource_type}
  */
  readonly resourceType: string;
  /**
  * Used to save results.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/data-sources/dayu_ddos_policies#result_output_file DataTencentcloudDayuDdosPolicies#result_output_file}
  */
  readonly resultOutputFile?: string;
}
export interface DataTencentcloudDayuDdosPoliciesListDropOptions {
}

export function dataTencentcloudDayuDdosPoliciesListDropOptionsToTerraform(struct?: DataTencentcloudDayuDdosPoliciesListDropOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudDayuDdosPoliciesListDropOptionsToHclTerraform(struct?: DataTencentcloudDayuDdosPoliciesListDropOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudDayuDdosPoliciesListDropOptionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudDayuDdosPoliciesListDropOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudDayuDdosPoliciesListDropOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // bad_conn_threshold - computed: true, optional: false, required: false
  public get badConnThreshold() {
    return this.getNumberAttribute('bad_conn_threshold');
  }

  // check_sync_conn - computed: true, optional: false, required: false
  public get checkSyncConn() {
    return this.getBooleanAttribute('check_sync_conn');
  }

  // conn_timeout - computed: true, optional: false, required: false
  public get connTimeout() {
    return this.getNumberAttribute('conn_timeout');
  }

  // d_conn_limit - computed: true, optional: false, required: false
  public get dConnLimit() {
    return this.getNumberAttribute('d_conn_limit');
  }

  // d_new_limit - computed: true, optional: false, required: false
  public get dNewLimit() {
    return this.getNumberAttribute('d_new_limit');
  }

  // drop_abroad - computed: true, optional: false, required: false
  public get dropAbroad() {
    return this.getBooleanAttribute('drop_abroad');
  }

  // drop_icmp - computed: true, optional: false, required: false
  public get dropIcmp() {
    return this.getBooleanAttribute('drop_icmp');
  }

  // drop_other - computed: true, optional: false, required: false
  public get dropOther() {
    return this.getBooleanAttribute('drop_other');
  }

  // drop_tcp - computed: true, optional: false, required: false
  public get dropTcp() {
    return this.getBooleanAttribute('drop_tcp');
  }

  // drop_udp - computed: true, optional: false, required: false
  public get dropUdp() {
    return this.getBooleanAttribute('drop_udp');
  }

  // icmp_mbps_limit - computed: true, optional: false, required: false
  public get icmpMbpsLimit() {
    return this.getNumberAttribute('icmp_mbps_limit');
  }

  // null_conn_enable - computed: true, optional: false, required: false
  public get nullConnEnable() {
    return this.getBooleanAttribute('null_conn_enable');
  }

  // other_mbps_limit - computed: true, optional: false, required: false
  public get otherMbpsLimit() {
    return this.getNumberAttribute('other_mbps_limit');
  }

  // s_conn_limit - computed: true, optional: false, required: false
  public get sConnLimit() {
    return this.getNumberAttribute('s_conn_limit');
  }

  // s_new_limit - computed: true, optional: false, required: false
  public get sNewLimit() {
    return this.getNumberAttribute('s_new_limit');
  }

  // syn_limit - computed: true, optional: false, required: false
  public get synLimit() {
    return this.getNumberAttribute('syn_limit');
  }

  // syn_rate - computed: true, optional: false, required: false
  public get synRate() {
    return this.getNumberAttribute('syn_rate');
  }

  // tcp_mbps_limit - computed: true, optional: false, required: false
  public get tcpMbpsLimit() {
    return this.getNumberAttribute('tcp_mbps_limit');
  }

  // udp_mbps_limit - computed: true, optional: false, required: false
  public get udpMbpsLimit() {
    return this.getNumberAttribute('udp_mbps_limit');
  }
}

export class DataTencentcloudDayuDdosPoliciesListDropOptionsList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudDayuDdosPoliciesListDropOptionsOutputReference {
    return new DataTencentcloudDayuDdosPoliciesListDropOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudDayuDdosPoliciesListPacketFilters {
}

export function dataTencentcloudDayuDdosPoliciesListPacketFiltersToTerraform(struct?: DataTencentcloudDayuDdosPoliciesListPacketFilters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudDayuDdosPoliciesListPacketFiltersToHclTerraform(struct?: DataTencentcloudDayuDdosPoliciesListPacketFilters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudDayuDdosPoliciesListPacketFiltersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudDayuDdosPoliciesListPacketFilters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudDayuDdosPoliciesListPacketFilters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // action - computed: true, optional: false, required: false
  public get action() {
    return this.getStringAttribute('action');
  }

  // d_end_port - computed: true, optional: false, required: false
  public get dEndPort() {
    return this.getNumberAttribute('d_end_port');
  }

  // d_start_port - computed: true, optional: false, required: false
  public get dStartPort() {
    return this.getNumberAttribute('d_start_port');
  }

  // depth - computed: true, optional: false, required: false
  public get depth() {
    return this.getNumberAttribute('depth');
  }

  // is_include - computed: true, optional: false, required: false
  public get isInclude() {
    return this.getBooleanAttribute('is_include');
  }

  // match_begin - computed: true, optional: false, required: false
  public get matchBegin() {
    return this.getStringAttribute('match_begin');
  }

  // match_str - computed: true, optional: false, required: false
  public get matchStr() {
    return this.getStringAttribute('match_str');
  }

  // match_type - computed: true, optional: false, required: false
  public get matchType() {
    return this.getStringAttribute('match_type');
  }

  // offset - computed: true, optional: false, required: false
  public get offset() {
    return this.getNumberAttribute('offset');
  }

  // pkt_length_max - computed: true, optional: false, required: false
  public get pktLengthMax() {
    return this.getNumberAttribute('pkt_length_max');
  }

  // pkt_length_min - computed: true, optional: false, required: false
  public get pktLengthMin() {
    return this.getNumberAttribute('pkt_length_min');
  }

  // protocol - computed: true, optional: false, required: false
  public get protocol() {
    return this.getStringAttribute('protocol');
  }

  // s_end_port - computed: true, optional: false, required: false
  public get sEndPort() {
    return this.getNumberAttribute('s_end_port');
  }

  // s_start_port - computed: true, optional: false, required: false
  public get sStartPort() {
    return this.getNumberAttribute('s_start_port');
  }
}

export class DataTencentcloudDayuDdosPoliciesListPacketFiltersList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudDayuDdosPoliciesListPacketFiltersOutputReference {
    return new DataTencentcloudDayuDdosPoliciesListPacketFiltersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudDayuDdosPoliciesListPortFilters {
}

export function dataTencentcloudDayuDdosPoliciesListPortFiltersToTerraform(struct?: DataTencentcloudDayuDdosPoliciesListPortFilters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudDayuDdosPoliciesListPortFiltersToHclTerraform(struct?: DataTencentcloudDayuDdosPoliciesListPortFilters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudDayuDdosPoliciesListPortFiltersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudDayuDdosPoliciesListPortFilters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudDayuDdosPoliciesListPortFilters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // action - computed: true, optional: false, required: false
  public get action() {
    return this.getStringAttribute('action');
  }

  // end_port - computed: true, optional: false, required: false
  public get endPort() {
    return this.getNumberAttribute('end_port');
  }

  // kind - computed: true, optional: false, required: false
  public get kind() {
    return this.getNumberAttribute('kind');
  }

  // protocol - computed: true, optional: false, required: false
  public get protocol() {
    return this.getStringAttribute('protocol');
  }

  // start_port - computed: true, optional: false, required: false
  public get startPort() {
    return this.getNumberAttribute('start_port');
  }
}

export class DataTencentcloudDayuDdosPoliciesListPortFiltersList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudDayuDdosPoliciesListPortFiltersOutputReference {
    return new DataTencentcloudDayuDdosPoliciesListPortFiltersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudDayuDdosPoliciesListWatermarkFilters {
}

export function dataTencentcloudDayuDdosPoliciesListWatermarkFiltersToTerraform(struct?: DataTencentcloudDayuDdosPoliciesListWatermarkFilters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudDayuDdosPoliciesListWatermarkFiltersToHclTerraform(struct?: DataTencentcloudDayuDdosPoliciesListWatermarkFilters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudDayuDdosPoliciesListWatermarkFiltersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudDayuDdosPoliciesListWatermarkFilters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudDayuDdosPoliciesListWatermarkFilters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // auto_remove - computed: true, optional: false, required: false
  public get autoRemove() {
    return this.getBooleanAttribute('auto_remove');
  }

  // offset - computed: true, optional: false, required: false
  public get offset() {
    return this.getNumberAttribute('offset');
  }

  // open_switch - computed: true, optional: false, required: false
  public get openSwitch() {
    return this.getBooleanAttribute('open_switch');
  }

  // tcp_port_list - computed: true, optional: false, required: false
  public get tcpPortList() {
    return this.getListAttribute('tcp_port_list');
  }

  // udp_port_list - computed: true, optional: false, required: false
  public get udpPortList() {
    return this.getListAttribute('udp_port_list');
  }
}

export class DataTencentcloudDayuDdosPoliciesListWatermarkFiltersList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudDayuDdosPoliciesListWatermarkFiltersOutputReference {
    return new DataTencentcloudDayuDdosPoliciesListWatermarkFiltersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudDayuDdosPoliciesListWatermarkKey {
}

export function dataTencentcloudDayuDdosPoliciesListWatermarkKeyToTerraform(struct?: DataTencentcloudDayuDdosPoliciesListWatermarkKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudDayuDdosPoliciesListWatermarkKeyToHclTerraform(struct?: DataTencentcloudDayuDdosPoliciesListWatermarkKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudDayuDdosPoliciesListWatermarkKeyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudDayuDdosPoliciesListWatermarkKey | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudDayuDdosPoliciesListWatermarkKey | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // content - computed: true, optional: false, required: false
  public get content() {
    return this.getStringAttribute('content');
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // open_switch - computed: true, optional: false, required: false
  public get openSwitch() {
    return this.getBooleanAttribute('open_switch');
  }
}

export class DataTencentcloudDayuDdosPoliciesListWatermarkKeyList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudDayuDdosPoliciesListWatermarkKeyOutputReference {
    return new DataTencentcloudDayuDdosPoliciesListWatermarkKeyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudDayuDdosPoliciesListStruct {
}

export function dataTencentcloudDayuDdosPoliciesListStructToTerraform(struct?: DataTencentcloudDayuDdosPoliciesListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudDayuDdosPoliciesListStructToHclTerraform(struct?: DataTencentcloudDayuDdosPoliciesListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudDayuDdosPoliciesListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudDayuDdosPoliciesListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudDayuDdosPoliciesListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // black_ips - computed: true, optional: false, required: false
  public get blackIps() {
    return cdktf.Fn.tolist(this.getListAttribute('black_ips'));
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // drop_options - computed: true, optional: false, required: false
  private _dropOptions = new DataTencentcloudDayuDdosPoliciesListDropOptionsList(this, "drop_options", false);
  public get dropOptions() {
    return this._dropOptions;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // packet_filters - computed: true, optional: false, required: false
  private _packetFilters = new DataTencentcloudDayuDdosPoliciesListPacketFiltersList(this, "packet_filters", false);
  public get packetFilters() {
    return this._packetFilters;
  }

  // policy_id - computed: true, optional: false, required: false
  public get policyId() {
    return this.getStringAttribute('policy_id');
  }

  // port_filters - computed: true, optional: false, required: false
  private _portFilters = new DataTencentcloudDayuDdosPoliciesListPortFiltersList(this, "port_filters", false);
  public get portFilters() {
    return this._portFilters;
  }

  // scene_id - computed: true, optional: false, required: false
  public get sceneId() {
    return this.getStringAttribute('scene_id');
  }

  // watermark_filters - computed: true, optional: false, required: false
  private _watermarkFilters = new DataTencentcloudDayuDdosPoliciesListWatermarkFiltersList(this, "watermark_filters", false);
  public get watermarkFilters() {
    return this._watermarkFilters;
  }

  // watermark_key - computed: true, optional: false, required: false
  private _watermarkKey = new DataTencentcloudDayuDdosPoliciesListWatermarkKeyList(this, "watermark_key", false);
  public get watermarkKey() {
    return this._watermarkKey;
  }

  // white_ips - computed: true, optional: false, required: false
  public get whiteIps() {
    return cdktf.Fn.tolist(this.getListAttribute('white_ips'));
  }
}

export class DataTencentcloudDayuDdosPoliciesListStructList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudDayuDdosPoliciesListStructOutputReference {
    return new DataTencentcloudDayuDdosPoliciesListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/data-sources/dayu_ddos_policies tencentcloud_dayu_ddos_policies}
*/
export class DataTencentcloudDayuDdosPolicies extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_dayu_ddos_policies";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataTencentcloudDayuDdosPolicies resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataTencentcloudDayuDdosPolicies to import
  * @param importFromId The id of the existing DataTencentcloudDayuDdosPolicies that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/data-sources/dayu_ddos_policies#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataTencentcloudDayuDdosPolicies to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_dayu_ddos_policies", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/data-sources/dayu_ddos_policies tencentcloud_dayu_ddos_policies} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataTencentcloudDayuDdosPoliciesConfig
  */
  public constructor(scope: Construct, id: string, config: DataTencentcloudDayuDdosPoliciesConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_dayu_ddos_policies',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.35'
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
    this._policyId = config.policyId;
    this._resourceType = config.resourceType;
    this._resultOutputFile = config.resultOutputFile;
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

  // list - computed: true, optional: false, required: false
  private _list = new DataTencentcloudDayuDdosPoliciesListStructList(this, "list", false);
  public get list() {
    return this._list;
  }

  // policy_id - computed: false, optional: true, required: false
  private _policyId?: string; 
  public get policyId() {
    return this.getStringAttribute('policy_id');
  }
  public set policyId(value: string) {
    this._policyId = value;
  }
  public resetPolicyId() {
    this._policyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyIdInput() {
    return this._policyId;
  }

  // resource_type - computed: false, optional: false, required: true
  private _resourceType?: string; 
  public get resourceType() {
    return this.getStringAttribute('resource_type');
  }
  public set resourceType(value: string) {
    this._resourceType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceTypeInput() {
    return this._resourceType;
  }

  // result_output_file - computed: false, optional: true, required: false
  private _resultOutputFile?: string; 
  public get resultOutputFile() {
    return this.getStringAttribute('result_output_file');
  }
  public set resultOutputFile(value: string) {
    this._resultOutputFile = value;
  }
  public resetResultOutputFile() {
    this._resultOutputFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resultOutputFileInput() {
    return this._resultOutputFile;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      policy_id: cdktf.stringToTerraform(this._policyId),
      resource_type: cdktf.stringToTerraform(this._resourceType),
      result_output_file: cdktf.stringToTerraform(this._resultOutputFile),
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
      policy_id: {
        value: cdktf.stringToHclTerraform(this._policyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resource_type: {
        value: cdktf.stringToHclTerraform(this._resourceType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      result_output_file: {
        value: cdktf.stringToHclTerraform(this._resultOutputFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
