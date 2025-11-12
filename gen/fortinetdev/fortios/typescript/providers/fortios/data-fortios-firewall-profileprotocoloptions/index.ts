// https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/data-sources/firewall_profileprotocoloptions
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataFortiosFirewallProfileprotocoloptionsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/data-sources/firewall_profileprotocoloptions#id DataFortiosFirewallProfileprotocoloptions#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/data-sources/firewall_profileprotocoloptions#name DataFortiosFirewallProfileprotocoloptions#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/data-sources/firewall_profileprotocoloptions#vdomparam DataFortiosFirewallProfileprotocoloptions#vdomparam}
  */
  readonly vdomparam?: string;
}
export interface DataFortiosFirewallProfileprotocoloptionsCifsServerKeytab {
}

export function dataFortiosFirewallProfileprotocoloptionsCifsServerKeytabToTerraform(struct?: DataFortiosFirewallProfileprotocoloptionsCifsServerKeytab): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataFortiosFirewallProfileprotocoloptionsCifsServerKeytabToHclTerraform(struct?: DataFortiosFirewallProfileprotocoloptionsCifsServerKeytab): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataFortiosFirewallProfileprotocoloptionsCifsServerKeytabOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataFortiosFirewallProfileprotocoloptionsCifsServerKeytab | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFortiosFirewallProfileprotocoloptionsCifsServerKeytab | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // keytab - computed: true, optional: false, required: false
  public get keytab() {
    return this.getStringAttribute('keytab');
  }

  // principal - computed: true, optional: false, required: false
  public get principal() {
    return this.getStringAttribute('principal');
  }
}

export class DataFortiosFirewallProfileprotocoloptionsCifsServerKeytabList extends cdktf.ComplexList {

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
  public get(index: number): DataFortiosFirewallProfileprotocoloptionsCifsServerKeytabOutputReference {
    return new DataFortiosFirewallProfileprotocoloptionsCifsServerKeytabOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataFortiosFirewallProfileprotocoloptionsCifs {
}

export function dataFortiosFirewallProfileprotocoloptionsCifsToTerraform(struct?: DataFortiosFirewallProfileprotocoloptionsCifs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataFortiosFirewallProfileprotocoloptionsCifsToHclTerraform(struct?: DataFortiosFirewallProfileprotocoloptionsCifs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataFortiosFirewallProfileprotocoloptionsCifsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataFortiosFirewallProfileprotocoloptionsCifs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFortiosFirewallProfileprotocoloptionsCifs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // domain_controller - computed: true, optional: false, required: false
  public get domainController() {
    return this.getStringAttribute('domain_controller');
  }

  // options - computed: true, optional: false, required: false
  public get options() {
    return this.getStringAttribute('options');
  }

  // oversize_limit - computed: true, optional: false, required: false
  public get oversizeLimit() {
    return this.getNumberAttribute('oversize_limit');
  }

  // ports - computed: true, optional: false, required: false
  public get ports() {
    return this.getNumberAttribute('ports');
  }

  // scan_bzip2 - computed: true, optional: false, required: false
  public get scanBzip2() {
    return this.getStringAttribute('scan_bzip2');
  }

  // server_credential_type - computed: true, optional: false, required: false
  public get serverCredentialType() {
    return this.getStringAttribute('server_credential_type');
  }

  // server_keytab - computed: true, optional: false, required: false
  private _serverKeytab = new DataFortiosFirewallProfileprotocoloptionsCifsServerKeytabList(this, "server_keytab", false);
  public get serverKeytab() {
    return this._serverKeytab;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // tcp_window_maximum - computed: true, optional: false, required: false
  public get tcpWindowMaximum() {
    return this.getNumberAttribute('tcp_window_maximum');
  }

  // tcp_window_minimum - computed: true, optional: false, required: false
  public get tcpWindowMinimum() {
    return this.getNumberAttribute('tcp_window_minimum');
  }

  // tcp_window_size - computed: true, optional: false, required: false
  public get tcpWindowSize() {
    return this.getNumberAttribute('tcp_window_size');
  }

  // tcp_window_type - computed: true, optional: false, required: false
  public get tcpWindowType() {
    return this.getStringAttribute('tcp_window_type');
  }

  // uncompressed_nest_limit - computed: true, optional: false, required: false
  public get uncompressedNestLimit() {
    return this.getNumberAttribute('uncompressed_nest_limit');
  }

  // uncompressed_oversize_limit - computed: true, optional: false, required: false
  public get uncompressedOversizeLimit() {
    return this.getNumberAttribute('uncompressed_oversize_limit');
  }
}

export class DataFortiosFirewallProfileprotocoloptionsCifsList extends cdktf.ComplexList {

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
  public get(index: number): DataFortiosFirewallProfileprotocoloptionsCifsOutputReference {
    return new DataFortiosFirewallProfileprotocoloptionsCifsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataFortiosFirewallProfileprotocoloptionsDns {
}

export function dataFortiosFirewallProfileprotocoloptionsDnsToTerraform(struct?: DataFortiosFirewallProfileprotocoloptionsDns): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataFortiosFirewallProfileprotocoloptionsDnsToHclTerraform(struct?: DataFortiosFirewallProfileprotocoloptionsDns): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataFortiosFirewallProfileprotocoloptionsDnsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataFortiosFirewallProfileprotocoloptionsDns | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFortiosFirewallProfileprotocoloptionsDns | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ports - computed: true, optional: false, required: false
  public get ports() {
    return this.getNumberAttribute('ports');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }
}

export class DataFortiosFirewallProfileprotocoloptionsDnsList extends cdktf.ComplexList {

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
  public get(index: number): DataFortiosFirewallProfileprotocoloptionsDnsOutputReference {
    return new DataFortiosFirewallProfileprotocoloptionsDnsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataFortiosFirewallProfileprotocoloptionsFtp {
}

export function dataFortiosFirewallProfileprotocoloptionsFtpToTerraform(struct?: DataFortiosFirewallProfileprotocoloptionsFtp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataFortiosFirewallProfileprotocoloptionsFtpToHclTerraform(struct?: DataFortiosFirewallProfileprotocoloptionsFtp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataFortiosFirewallProfileprotocoloptionsFtpOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataFortiosFirewallProfileprotocoloptionsFtp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFortiosFirewallProfileprotocoloptionsFtp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // comfort_amount - computed: true, optional: false, required: false
  public get comfortAmount() {
    return this.getNumberAttribute('comfort_amount');
  }

  // comfort_interval - computed: true, optional: false, required: false
  public get comfortInterval() {
    return this.getNumberAttribute('comfort_interval');
  }

  // explicit_ftp_tls - computed: true, optional: false, required: false
  public get explicitFtpTls() {
    return this.getStringAttribute('explicit_ftp_tls');
  }

  // inspect_all - computed: true, optional: false, required: false
  public get inspectAll() {
    return this.getStringAttribute('inspect_all');
  }

  // options - computed: true, optional: false, required: false
  public get options() {
    return this.getStringAttribute('options');
  }

  // oversize_limit - computed: true, optional: false, required: false
  public get oversizeLimit() {
    return this.getNumberAttribute('oversize_limit');
  }

  // ports - computed: true, optional: false, required: false
  public get ports() {
    return this.getNumberAttribute('ports');
  }

  // scan_bzip2 - computed: true, optional: false, required: false
  public get scanBzip2() {
    return this.getStringAttribute('scan_bzip2');
  }

  // ssl_offloaded - computed: true, optional: false, required: false
  public get sslOffloaded() {
    return this.getStringAttribute('ssl_offloaded');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // stream_based_uncompressed_limit - computed: true, optional: false, required: false
  public get streamBasedUncompressedLimit() {
    return this.getNumberAttribute('stream_based_uncompressed_limit');
  }

  // tcp_window_maximum - computed: true, optional: false, required: false
  public get tcpWindowMaximum() {
    return this.getNumberAttribute('tcp_window_maximum');
  }

  // tcp_window_minimum - computed: true, optional: false, required: false
  public get tcpWindowMinimum() {
    return this.getNumberAttribute('tcp_window_minimum');
  }

  // tcp_window_size - computed: true, optional: false, required: false
  public get tcpWindowSize() {
    return this.getNumberAttribute('tcp_window_size');
  }

  // tcp_window_type - computed: true, optional: false, required: false
  public get tcpWindowType() {
    return this.getStringAttribute('tcp_window_type');
  }

  // uncompressed_nest_limit - computed: true, optional: false, required: false
  public get uncompressedNestLimit() {
    return this.getNumberAttribute('uncompressed_nest_limit');
  }

  // uncompressed_oversize_limit - computed: true, optional: false, required: false
  public get uncompressedOversizeLimit() {
    return this.getNumberAttribute('uncompressed_oversize_limit');
  }
}

export class DataFortiosFirewallProfileprotocoloptionsFtpList extends cdktf.ComplexList {

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
  public get(index: number): DataFortiosFirewallProfileprotocoloptionsFtpOutputReference {
    return new DataFortiosFirewallProfileprotocoloptionsFtpOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataFortiosFirewallProfileprotocoloptionsHttp {
}

export function dataFortiosFirewallProfileprotocoloptionsHttpToTerraform(struct?: DataFortiosFirewallProfileprotocoloptionsHttp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataFortiosFirewallProfileprotocoloptionsHttpToHclTerraform(struct?: DataFortiosFirewallProfileprotocoloptionsHttp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataFortiosFirewallProfileprotocoloptionsHttpOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataFortiosFirewallProfileprotocoloptionsHttp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFortiosFirewallProfileprotocoloptionsHttp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // address_ip_rating - computed: true, optional: false, required: false
  public get addressIpRating() {
    return this.getStringAttribute('address_ip_rating');
  }

  // block_page_status_code - computed: true, optional: false, required: false
  public get blockPageStatusCode() {
    return this.getNumberAttribute('block_page_status_code');
  }

  // comfort_amount - computed: true, optional: false, required: false
  public get comfortAmount() {
    return this.getNumberAttribute('comfort_amount');
  }

  // comfort_interval - computed: true, optional: false, required: false
  public get comfortInterval() {
    return this.getNumberAttribute('comfort_interval');
  }

  // domain_fronting - computed: true, optional: false, required: false
  public get domainFronting() {
    return this.getStringAttribute('domain_fronting');
  }

  // fortinet_bar - computed: true, optional: false, required: false
  public get fortinetBar() {
    return this.getStringAttribute('fortinet_bar');
  }

  // fortinet_bar_port - computed: true, optional: false, required: false
  public get fortinetBarPort() {
    return this.getNumberAttribute('fortinet_bar_port');
  }

  // h2c - computed: true, optional: false, required: false
  public get h2C() {
    return this.getStringAttribute('h2c');
  }

  // http_09 - computed: true, optional: false, required: false
  public get http09() {
    return this.getStringAttribute('http_09');
  }

  // http_policy - computed: true, optional: false, required: false
  public get httpPolicy() {
    return this.getStringAttribute('http_policy');
  }

  // inspect_all - computed: true, optional: false, required: false
  public get inspectAll() {
    return this.getStringAttribute('inspect_all');
  }

  // options - computed: true, optional: false, required: false
  public get options() {
    return this.getStringAttribute('options');
  }

  // oversize_limit - computed: true, optional: false, required: false
  public get oversizeLimit() {
    return this.getNumberAttribute('oversize_limit');
  }

  // ports - computed: true, optional: false, required: false
  public get ports() {
    return this.getNumberAttribute('ports');
  }

  // post_lang - computed: true, optional: false, required: false
  public get postLang() {
    return this.getStringAttribute('post_lang');
  }

  // proxy_after_tcp_handshake - computed: true, optional: false, required: false
  public get proxyAfterTcpHandshake() {
    return this.getStringAttribute('proxy_after_tcp_handshake');
  }

  // range_block - computed: true, optional: false, required: false
  public get rangeBlock() {
    return this.getStringAttribute('range_block');
  }

  // retry_count - computed: true, optional: false, required: false
  public get retryCount() {
    return this.getNumberAttribute('retry_count');
  }

  // scan_bzip2 - computed: true, optional: false, required: false
  public get scanBzip2() {
    return this.getStringAttribute('scan_bzip2');
  }

  // ssl_offloaded - computed: true, optional: false, required: false
  public get sslOffloaded() {
    return this.getStringAttribute('ssl_offloaded');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // stream_based_uncompressed_limit - computed: true, optional: false, required: false
  public get streamBasedUncompressedLimit() {
    return this.getNumberAttribute('stream_based_uncompressed_limit');
  }

  // streaming_content_bypass - computed: true, optional: false, required: false
  public get streamingContentBypass() {
    return this.getStringAttribute('streaming_content_bypass');
  }

  // strip_x_forwarded_for - computed: true, optional: false, required: false
  public get stripXForwardedFor() {
    return this.getStringAttribute('strip_x_forwarded_for');
  }

  // switching_protocols - computed: true, optional: false, required: false
  public get switchingProtocols() {
    return this.getStringAttribute('switching_protocols');
  }

  // tcp_window_maximum - computed: true, optional: false, required: false
  public get tcpWindowMaximum() {
    return this.getNumberAttribute('tcp_window_maximum');
  }

  // tcp_window_minimum - computed: true, optional: false, required: false
  public get tcpWindowMinimum() {
    return this.getNumberAttribute('tcp_window_minimum');
  }

  // tcp_window_size - computed: true, optional: false, required: false
  public get tcpWindowSize() {
    return this.getNumberAttribute('tcp_window_size');
  }

  // tcp_window_type - computed: true, optional: false, required: false
  public get tcpWindowType() {
    return this.getStringAttribute('tcp_window_type');
  }

  // tunnel_non_http - computed: true, optional: false, required: false
  public get tunnelNonHttp() {
    return this.getStringAttribute('tunnel_non_http');
  }

  // uncompressed_nest_limit - computed: true, optional: false, required: false
  public get uncompressedNestLimit() {
    return this.getNumberAttribute('uncompressed_nest_limit');
  }

  // uncompressed_oversize_limit - computed: true, optional: false, required: false
  public get uncompressedOversizeLimit() {
    return this.getNumberAttribute('uncompressed_oversize_limit');
  }

  // unknown_content_encoding - computed: true, optional: false, required: false
  public get unknownContentEncoding() {
    return this.getStringAttribute('unknown_content_encoding');
  }

  // unknown_http_version - computed: true, optional: false, required: false
  public get unknownHttpVersion() {
    return this.getStringAttribute('unknown_http_version');
  }

  // verify_dns_for_policy_matching - computed: true, optional: false, required: false
  public get verifyDnsForPolicyMatching() {
    return this.getStringAttribute('verify_dns_for_policy_matching');
  }
}

export class DataFortiosFirewallProfileprotocoloptionsHttpList extends cdktf.ComplexList {

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
  public get(index: number): DataFortiosFirewallProfileprotocoloptionsHttpOutputReference {
    return new DataFortiosFirewallProfileprotocoloptionsHttpOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataFortiosFirewallProfileprotocoloptionsImap {
}

export function dataFortiosFirewallProfileprotocoloptionsImapToTerraform(struct?: DataFortiosFirewallProfileprotocoloptionsImap): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataFortiosFirewallProfileprotocoloptionsImapToHclTerraform(struct?: DataFortiosFirewallProfileprotocoloptionsImap): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataFortiosFirewallProfileprotocoloptionsImapOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataFortiosFirewallProfileprotocoloptionsImap | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFortiosFirewallProfileprotocoloptionsImap | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // inspect_all - computed: true, optional: false, required: false
  public get inspectAll() {
    return this.getStringAttribute('inspect_all');
  }

  // options - computed: true, optional: false, required: false
  public get options() {
    return this.getStringAttribute('options');
  }

  // oversize_limit - computed: true, optional: false, required: false
  public get oversizeLimit() {
    return this.getNumberAttribute('oversize_limit');
  }

  // ports - computed: true, optional: false, required: false
  public get ports() {
    return this.getNumberAttribute('ports');
  }

  // proxy_after_tcp_handshake - computed: true, optional: false, required: false
  public get proxyAfterTcpHandshake() {
    return this.getStringAttribute('proxy_after_tcp_handshake');
  }

  // scan_bzip2 - computed: true, optional: false, required: false
  public get scanBzip2() {
    return this.getStringAttribute('scan_bzip2');
  }

  // ssl_offloaded - computed: true, optional: false, required: false
  public get sslOffloaded() {
    return this.getStringAttribute('ssl_offloaded');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // uncompressed_nest_limit - computed: true, optional: false, required: false
  public get uncompressedNestLimit() {
    return this.getNumberAttribute('uncompressed_nest_limit');
  }

  // uncompressed_oversize_limit - computed: true, optional: false, required: false
  public get uncompressedOversizeLimit() {
    return this.getNumberAttribute('uncompressed_oversize_limit');
  }
}

export class DataFortiosFirewallProfileprotocoloptionsImapList extends cdktf.ComplexList {

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
  public get(index: number): DataFortiosFirewallProfileprotocoloptionsImapOutputReference {
    return new DataFortiosFirewallProfileprotocoloptionsImapOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataFortiosFirewallProfileprotocoloptionsMailSignature {
}

export function dataFortiosFirewallProfileprotocoloptionsMailSignatureToTerraform(struct?: DataFortiosFirewallProfileprotocoloptionsMailSignature): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataFortiosFirewallProfileprotocoloptionsMailSignatureToHclTerraform(struct?: DataFortiosFirewallProfileprotocoloptionsMailSignature): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataFortiosFirewallProfileprotocoloptionsMailSignatureOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataFortiosFirewallProfileprotocoloptionsMailSignature | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFortiosFirewallProfileprotocoloptionsMailSignature | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // signature - computed: true, optional: false, required: false
  public get signature() {
    return this.getStringAttribute('signature');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }
}

export class DataFortiosFirewallProfileprotocoloptionsMailSignatureList extends cdktf.ComplexList {

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
  public get(index: number): DataFortiosFirewallProfileprotocoloptionsMailSignatureOutputReference {
    return new DataFortiosFirewallProfileprotocoloptionsMailSignatureOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataFortiosFirewallProfileprotocoloptionsMapi {
}

export function dataFortiosFirewallProfileprotocoloptionsMapiToTerraform(struct?: DataFortiosFirewallProfileprotocoloptionsMapi): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataFortiosFirewallProfileprotocoloptionsMapiToHclTerraform(struct?: DataFortiosFirewallProfileprotocoloptionsMapi): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataFortiosFirewallProfileprotocoloptionsMapiOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataFortiosFirewallProfileprotocoloptionsMapi | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFortiosFirewallProfileprotocoloptionsMapi | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // options - computed: true, optional: false, required: false
  public get options() {
    return this.getStringAttribute('options');
  }

  // oversize_limit - computed: true, optional: false, required: false
  public get oversizeLimit() {
    return this.getNumberAttribute('oversize_limit');
  }

  // ports - computed: true, optional: false, required: false
  public get ports() {
    return this.getNumberAttribute('ports');
  }

  // scan_bzip2 - computed: true, optional: false, required: false
  public get scanBzip2() {
    return this.getStringAttribute('scan_bzip2');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // uncompressed_nest_limit - computed: true, optional: false, required: false
  public get uncompressedNestLimit() {
    return this.getNumberAttribute('uncompressed_nest_limit');
  }

  // uncompressed_oversize_limit - computed: true, optional: false, required: false
  public get uncompressedOversizeLimit() {
    return this.getNumberAttribute('uncompressed_oversize_limit');
  }
}

export class DataFortiosFirewallProfileprotocoloptionsMapiList extends cdktf.ComplexList {

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
  public get(index: number): DataFortiosFirewallProfileprotocoloptionsMapiOutputReference {
    return new DataFortiosFirewallProfileprotocoloptionsMapiOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataFortiosFirewallProfileprotocoloptionsNntp {
}

export function dataFortiosFirewallProfileprotocoloptionsNntpToTerraform(struct?: DataFortiosFirewallProfileprotocoloptionsNntp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataFortiosFirewallProfileprotocoloptionsNntpToHclTerraform(struct?: DataFortiosFirewallProfileprotocoloptionsNntp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataFortiosFirewallProfileprotocoloptionsNntpOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataFortiosFirewallProfileprotocoloptionsNntp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFortiosFirewallProfileprotocoloptionsNntp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // inspect_all - computed: true, optional: false, required: false
  public get inspectAll() {
    return this.getStringAttribute('inspect_all');
  }

  // options - computed: true, optional: false, required: false
  public get options() {
    return this.getStringAttribute('options');
  }

  // oversize_limit - computed: true, optional: false, required: false
  public get oversizeLimit() {
    return this.getNumberAttribute('oversize_limit');
  }

  // ports - computed: true, optional: false, required: false
  public get ports() {
    return this.getNumberAttribute('ports');
  }

  // proxy_after_tcp_handshake - computed: true, optional: false, required: false
  public get proxyAfterTcpHandshake() {
    return this.getStringAttribute('proxy_after_tcp_handshake');
  }

  // scan_bzip2 - computed: true, optional: false, required: false
  public get scanBzip2() {
    return this.getStringAttribute('scan_bzip2');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // uncompressed_nest_limit - computed: true, optional: false, required: false
  public get uncompressedNestLimit() {
    return this.getNumberAttribute('uncompressed_nest_limit');
  }

  // uncompressed_oversize_limit - computed: true, optional: false, required: false
  public get uncompressedOversizeLimit() {
    return this.getNumberAttribute('uncompressed_oversize_limit');
  }
}

export class DataFortiosFirewallProfileprotocoloptionsNntpList extends cdktf.ComplexList {

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
  public get(index: number): DataFortiosFirewallProfileprotocoloptionsNntpOutputReference {
    return new DataFortiosFirewallProfileprotocoloptionsNntpOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataFortiosFirewallProfileprotocoloptionsPop3 {
}

export function dataFortiosFirewallProfileprotocoloptionsPop3ToTerraform(struct?: DataFortiosFirewallProfileprotocoloptionsPop3): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataFortiosFirewallProfileprotocoloptionsPop3ToHclTerraform(struct?: DataFortiosFirewallProfileprotocoloptionsPop3): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataFortiosFirewallProfileprotocoloptionsPop3OutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataFortiosFirewallProfileprotocoloptionsPop3 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFortiosFirewallProfileprotocoloptionsPop3 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // inspect_all - computed: true, optional: false, required: false
  public get inspectAll() {
    return this.getStringAttribute('inspect_all');
  }

  // options - computed: true, optional: false, required: false
  public get options() {
    return this.getStringAttribute('options');
  }

  // oversize_limit - computed: true, optional: false, required: false
  public get oversizeLimit() {
    return this.getNumberAttribute('oversize_limit');
  }

  // ports - computed: true, optional: false, required: false
  public get ports() {
    return this.getNumberAttribute('ports');
  }

  // proxy_after_tcp_handshake - computed: true, optional: false, required: false
  public get proxyAfterTcpHandshake() {
    return this.getStringAttribute('proxy_after_tcp_handshake');
  }

  // scan_bzip2 - computed: true, optional: false, required: false
  public get scanBzip2() {
    return this.getStringAttribute('scan_bzip2');
  }

  // ssl_offloaded - computed: true, optional: false, required: false
  public get sslOffloaded() {
    return this.getStringAttribute('ssl_offloaded');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // uncompressed_nest_limit - computed: true, optional: false, required: false
  public get uncompressedNestLimit() {
    return this.getNumberAttribute('uncompressed_nest_limit');
  }

  // uncompressed_oversize_limit - computed: true, optional: false, required: false
  public get uncompressedOversizeLimit() {
    return this.getNumberAttribute('uncompressed_oversize_limit');
  }
}

export class DataFortiosFirewallProfileprotocoloptionsPop3List extends cdktf.ComplexList {

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
  public get(index: number): DataFortiosFirewallProfileprotocoloptionsPop3OutputReference {
    return new DataFortiosFirewallProfileprotocoloptionsPop3OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataFortiosFirewallProfileprotocoloptionsSmtp {
}

export function dataFortiosFirewallProfileprotocoloptionsSmtpToTerraform(struct?: DataFortiosFirewallProfileprotocoloptionsSmtp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataFortiosFirewallProfileprotocoloptionsSmtpToHclTerraform(struct?: DataFortiosFirewallProfileprotocoloptionsSmtp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataFortiosFirewallProfileprotocoloptionsSmtpOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataFortiosFirewallProfileprotocoloptionsSmtp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFortiosFirewallProfileprotocoloptionsSmtp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // inspect_all - computed: true, optional: false, required: false
  public get inspectAll() {
    return this.getStringAttribute('inspect_all');
  }

  // options - computed: true, optional: false, required: false
  public get options() {
    return this.getStringAttribute('options');
  }

  // oversize_limit - computed: true, optional: false, required: false
  public get oversizeLimit() {
    return this.getNumberAttribute('oversize_limit');
  }

  // ports - computed: true, optional: false, required: false
  public get ports() {
    return this.getNumberAttribute('ports');
  }

  // proxy_after_tcp_handshake - computed: true, optional: false, required: false
  public get proxyAfterTcpHandshake() {
    return this.getStringAttribute('proxy_after_tcp_handshake');
  }

  // scan_bzip2 - computed: true, optional: false, required: false
  public get scanBzip2() {
    return this.getStringAttribute('scan_bzip2');
  }

  // server_busy - computed: true, optional: false, required: false
  public get serverBusy() {
    return this.getStringAttribute('server_busy');
  }

  // ssl_offloaded - computed: true, optional: false, required: false
  public get sslOffloaded() {
    return this.getStringAttribute('ssl_offloaded');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // uncompressed_nest_limit - computed: true, optional: false, required: false
  public get uncompressedNestLimit() {
    return this.getNumberAttribute('uncompressed_nest_limit');
  }

  // uncompressed_oversize_limit - computed: true, optional: false, required: false
  public get uncompressedOversizeLimit() {
    return this.getNumberAttribute('uncompressed_oversize_limit');
  }
}

export class DataFortiosFirewallProfileprotocoloptionsSmtpList extends cdktf.ComplexList {

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
  public get(index: number): DataFortiosFirewallProfileprotocoloptionsSmtpOutputReference {
    return new DataFortiosFirewallProfileprotocoloptionsSmtpOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataFortiosFirewallProfileprotocoloptionsSsh {
}

export function dataFortiosFirewallProfileprotocoloptionsSshToTerraform(struct?: DataFortiosFirewallProfileprotocoloptionsSsh): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataFortiosFirewallProfileprotocoloptionsSshToHclTerraform(struct?: DataFortiosFirewallProfileprotocoloptionsSsh): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataFortiosFirewallProfileprotocoloptionsSshOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataFortiosFirewallProfileprotocoloptionsSsh | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFortiosFirewallProfileprotocoloptionsSsh | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // comfort_amount - computed: true, optional: false, required: false
  public get comfortAmount() {
    return this.getNumberAttribute('comfort_amount');
  }

  // comfort_interval - computed: true, optional: false, required: false
  public get comfortInterval() {
    return this.getNumberAttribute('comfort_interval');
  }

  // options - computed: true, optional: false, required: false
  public get options() {
    return this.getStringAttribute('options');
  }

  // oversize_limit - computed: true, optional: false, required: false
  public get oversizeLimit() {
    return this.getNumberAttribute('oversize_limit');
  }

  // scan_bzip2 - computed: true, optional: false, required: false
  public get scanBzip2() {
    return this.getStringAttribute('scan_bzip2');
  }

  // ssl_offloaded - computed: true, optional: false, required: false
  public get sslOffloaded() {
    return this.getStringAttribute('ssl_offloaded');
  }

  // stream_based_uncompressed_limit - computed: true, optional: false, required: false
  public get streamBasedUncompressedLimit() {
    return this.getNumberAttribute('stream_based_uncompressed_limit');
  }

  // tcp_window_maximum - computed: true, optional: false, required: false
  public get tcpWindowMaximum() {
    return this.getNumberAttribute('tcp_window_maximum');
  }

  // tcp_window_minimum - computed: true, optional: false, required: false
  public get tcpWindowMinimum() {
    return this.getNumberAttribute('tcp_window_minimum');
  }

  // tcp_window_size - computed: true, optional: false, required: false
  public get tcpWindowSize() {
    return this.getNumberAttribute('tcp_window_size');
  }

  // tcp_window_type - computed: true, optional: false, required: false
  public get tcpWindowType() {
    return this.getStringAttribute('tcp_window_type');
  }

  // uncompressed_nest_limit - computed: true, optional: false, required: false
  public get uncompressedNestLimit() {
    return this.getNumberAttribute('uncompressed_nest_limit');
  }

  // uncompressed_oversize_limit - computed: true, optional: false, required: false
  public get uncompressedOversizeLimit() {
    return this.getNumberAttribute('uncompressed_oversize_limit');
  }
}

export class DataFortiosFirewallProfileprotocoloptionsSshList extends cdktf.ComplexList {

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
  public get(index: number): DataFortiosFirewallProfileprotocoloptionsSshOutputReference {
    return new DataFortiosFirewallProfileprotocoloptionsSshOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/data-sources/firewall_profileprotocoloptions fortios_firewall_profileprotocoloptions}
*/
export class DataFortiosFirewallProfileprotocoloptions extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortios_firewall_profileprotocoloptions";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataFortiosFirewallProfileprotocoloptions resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataFortiosFirewallProfileprotocoloptions to import
  * @param importFromId The id of the existing DataFortiosFirewallProfileprotocoloptions that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/data-sources/firewall_profileprotocoloptions#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataFortiosFirewallProfileprotocoloptions to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortios_firewall_profileprotocoloptions", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/data-sources/firewall_profileprotocoloptions fortios_firewall_profileprotocoloptions} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataFortiosFirewallProfileprotocoloptionsConfig
  */
  public constructor(scope: Construct, id: string, config: DataFortiosFirewallProfileprotocoloptionsConfig) {
    super(scope, id, {
      terraformResourceType: 'fortios_firewall_profileprotocoloptions',
      terraformGeneratorMetadata: {
        providerName: 'fortios',
        providerVersion: '1.23.0',
        providerVersionConstraint: '1.23.0'
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
    this._name = config.name;
    this._vdomparam = config.vdomparam;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cifs - computed: true, optional: false, required: false
  private _cifs = new DataFortiosFirewallProfileprotocoloptionsCifsList(this, "cifs", false);
  public get cifs() {
    return this._cifs;
  }

  // comment - computed: true, optional: false, required: false
  public get comment() {
    return this.getStringAttribute('comment');
  }

  // dns - computed: true, optional: false, required: false
  private _dns = new DataFortiosFirewallProfileprotocoloptionsDnsList(this, "dns", false);
  public get dns() {
    return this._dns;
  }

  // feature_set - computed: true, optional: false, required: false
  public get featureSet() {
    return this.getStringAttribute('feature_set');
  }

  // ftp - computed: true, optional: false, required: false
  private _ftp = new DataFortiosFirewallProfileprotocoloptionsFtpList(this, "ftp", false);
  public get ftp() {
    return this._ftp;
  }

  // http - computed: true, optional: false, required: false
  private _http = new DataFortiosFirewallProfileprotocoloptionsHttpList(this, "http", false);
  public get http() {
    return this._http;
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

  // imap - computed: true, optional: false, required: false
  private _imap = new DataFortiosFirewallProfileprotocoloptionsImapList(this, "imap", false);
  public get imap() {
    return this._imap;
  }

  // mail_signature - computed: true, optional: false, required: false
  private _mailSignature = new DataFortiosFirewallProfileprotocoloptionsMailSignatureList(this, "mail_signature", false);
  public get mailSignature() {
    return this._mailSignature;
  }

  // mapi - computed: true, optional: false, required: false
  private _mapi = new DataFortiosFirewallProfileprotocoloptionsMapiList(this, "mapi", false);
  public get mapi() {
    return this._mapi;
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

  // nntp - computed: true, optional: false, required: false
  private _nntp = new DataFortiosFirewallProfileprotocoloptionsNntpList(this, "nntp", false);
  public get nntp() {
    return this._nntp;
  }

  // oversize_log - computed: true, optional: false, required: false
  public get oversizeLog() {
    return this.getStringAttribute('oversize_log');
  }

  // pop3 - computed: true, optional: false, required: false
  private _pop3 = new DataFortiosFirewallProfileprotocoloptionsPop3List(this, "pop3", false);
  public get pop3() {
    return this._pop3;
  }

  // replacemsg_group - computed: true, optional: false, required: false
  public get replacemsgGroup() {
    return this.getStringAttribute('replacemsg_group');
  }

  // rpc_over_http - computed: true, optional: false, required: false
  public get rpcOverHttp() {
    return this.getStringAttribute('rpc_over_http');
  }

  // smtp - computed: true, optional: false, required: false
  private _smtp = new DataFortiosFirewallProfileprotocoloptionsSmtpList(this, "smtp", false);
  public get smtp() {
    return this._smtp;
  }

  // ssh - computed: true, optional: false, required: false
  private _ssh = new DataFortiosFirewallProfileprotocoloptionsSshList(this, "ssh", false);
  public get ssh() {
    return this._ssh;
  }

  // switching_protocols_log - computed: true, optional: false, required: false
  public get switchingProtocolsLog() {
    return this.getStringAttribute('switching_protocols_log');
  }

  // vdomparam - computed: false, optional: true, required: false
  private _vdomparam?: string; 
  public get vdomparam() {
    return this.getStringAttribute('vdomparam');
  }
  public set vdomparam(value: string) {
    this._vdomparam = value;
  }
  public resetVdomparam() {
    this._vdomparam = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vdomparamInput() {
    return this._vdomparam;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      vdomparam: cdktf.stringToTerraform(this._vdomparam),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vdomparam: {
        value: cdktf.stringToHclTerraform(this._vdomparam),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
