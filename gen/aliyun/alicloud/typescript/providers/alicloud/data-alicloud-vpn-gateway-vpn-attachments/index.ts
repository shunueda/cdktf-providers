// https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/data-sources/vpn_gateway_vpn_attachments
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAlicloudVpnGatewayVpnAttachmentsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/data-sources/vpn_gateway_vpn_attachments#id DataAlicloudVpnGatewayVpnAttachments#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/data-sources/vpn_gateway_vpn_attachments#ids DataAlicloudVpnGatewayVpnAttachments#ids}
  */
  readonly ids?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/data-sources/vpn_gateway_vpn_attachments#name_regex DataAlicloudVpnGatewayVpnAttachments#name_regex}
  */
  readonly nameRegex?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/data-sources/vpn_gateway_vpn_attachments#output_file DataAlicloudVpnGatewayVpnAttachments#output_file}
  */
  readonly outputFile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/data-sources/vpn_gateway_vpn_attachments#page_number DataAlicloudVpnGatewayVpnAttachments#page_number}
  */
  readonly pageNumber?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/data-sources/vpn_gateway_vpn_attachments#page_size DataAlicloudVpnGatewayVpnAttachments#page_size}
  */
  readonly pageSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/data-sources/vpn_gateway_vpn_attachments#status DataAlicloudVpnGatewayVpnAttachments#status}
  */
  readonly status?: string;
}
export interface DataAlicloudVpnGatewayVpnAttachmentsAttachmentsBgpConfig {
}

export function dataAlicloudVpnGatewayVpnAttachmentsAttachmentsBgpConfigToTerraform(struct?: DataAlicloudVpnGatewayVpnAttachmentsAttachmentsBgpConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAlicloudVpnGatewayVpnAttachmentsAttachmentsBgpConfigToHclTerraform(struct?: DataAlicloudVpnGatewayVpnAttachmentsAttachmentsBgpConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAlicloudVpnGatewayVpnAttachmentsAttachmentsBgpConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAlicloudVpnGatewayVpnAttachmentsAttachmentsBgpConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAlicloudVpnGatewayVpnAttachmentsAttachmentsBgpConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // local_asn - computed: true, optional: false, required: false
  public get localAsn() {
    return this.getNumberAttribute('local_asn');
  }

  // local_bgp_ip - computed: true, optional: false, required: false
  public get localBgpIp() {
    return this.getStringAttribute('local_bgp_ip');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // tunnel_cidr - computed: true, optional: false, required: false
  public get tunnelCidr() {
    return this.getStringAttribute('tunnel_cidr');
  }
}

export class DataAlicloudVpnGatewayVpnAttachmentsAttachmentsBgpConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataAlicloudVpnGatewayVpnAttachmentsAttachmentsBgpConfigOutputReference {
    return new DataAlicloudVpnGatewayVpnAttachmentsAttachmentsBgpConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAlicloudVpnGatewayVpnAttachmentsAttachmentsHealthCheckConfig {
}

export function dataAlicloudVpnGatewayVpnAttachmentsAttachmentsHealthCheckConfigToTerraform(struct?: DataAlicloudVpnGatewayVpnAttachmentsAttachmentsHealthCheckConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAlicloudVpnGatewayVpnAttachmentsAttachmentsHealthCheckConfigToHclTerraform(struct?: DataAlicloudVpnGatewayVpnAttachmentsAttachmentsHealthCheckConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAlicloudVpnGatewayVpnAttachmentsAttachmentsHealthCheckConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAlicloudVpnGatewayVpnAttachmentsAttachmentsHealthCheckConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAlicloudVpnGatewayVpnAttachmentsAttachmentsHealthCheckConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // dip - computed: true, optional: false, required: false
  public get dip() {
    return this.getStringAttribute('dip');
  }

  // enable - computed: true, optional: false, required: false
  public get enable() {
    return this.getBooleanAttribute('enable');
  }

  // interval - computed: true, optional: false, required: false
  public get interval() {
    return this.getNumberAttribute('interval');
  }

  // policy - computed: true, optional: false, required: false
  public get policy() {
    return this.getStringAttribute('policy');
  }

  // retry - computed: true, optional: false, required: false
  public get retry() {
    return this.getNumberAttribute('retry');
  }

  // sip - computed: true, optional: false, required: false
  public get sip() {
    return this.getStringAttribute('sip');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }
}

export class DataAlicloudVpnGatewayVpnAttachmentsAttachmentsHealthCheckConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataAlicloudVpnGatewayVpnAttachmentsAttachmentsHealthCheckConfigOutputReference {
    return new DataAlicloudVpnGatewayVpnAttachmentsAttachmentsHealthCheckConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAlicloudVpnGatewayVpnAttachmentsAttachmentsIkeConfig {
}

export function dataAlicloudVpnGatewayVpnAttachmentsAttachmentsIkeConfigToTerraform(struct?: DataAlicloudVpnGatewayVpnAttachmentsAttachmentsIkeConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAlicloudVpnGatewayVpnAttachmentsAttachmentsIkeConfigToHclTerraform(struct?: DataAlicloudVpnGatewayVpnAttachmentsAttachmentsIkeConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAlicloudVpnGatewayVpnAttachmentsAttachmentsIkeConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAlicloudVpnGatewayVpnAttachmentsAttachmentsIkeConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAlicloudVpnGatewayVpnAttachmentsAttachmentsIkeConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ike_auth_alg - computed: true, optional: false, required: false
  public get ikeAuthAlg() {
    return this.getStringAttribute('ike_auth_alg');
  }

  // ike_enc_alg - computed: true, optional: false, required: false
  public get ikeEncAlg() {
    return this.getStringAttribute('ike_enc_alg');
  }

  // ike_lifetime - computed: true, optional: false, required: false
  public get ikeLifetime() {
    return this.getNumberAttribute('ike_lifetime');
  }

  // ike_mode - computed: true, optional: false, required: false
  public get ikeMode() {
    return this.getStringAttribute('ike_mode');
  }

  // ike_pfs - computed: true, optional: false, required: false
  public get ikePfs() {
    return this.getStringAttribute('ike_pfs');
  }

  // ike_version - computed: true, optional: false, required: false
  public get ikeVersion() {
    return this.getStringAttribute('ike_version');
  }

  // local_id - computed: true, optional: false, required: false
  public get localId() {
    return this.getStringAttribute('local_id');
  }

  // psk - computed: true, optional: false, required: false
  public get psk() {
    return this.getStringAttribute('psk');
  }

  // remote_id - computed: true, optional: false, required: false
  public get remoteId() {
    return this.getStringAttribute('remote_id');
  }
}

export class DataAlicloudVpnGatewayVpnAttachmentsAttachmentsIkeConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataAlicloudVpnGatewayVpnAttachmentsAttachmentsIkeConfigOutputReference {
    return new DataAlicloudVpnGatewayVpnAttachmentsAttachmentsIkeConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAlicloudVpnGatewayVpnAttachmentsAttachmentsIpsecConfig {
}

export function dataAlicloudVpnGatewayVpnAttachmentsAttachmentsIpsecConfigToTerraform(struct?: DataAlicloudVpnGatewayVpnAttachmentsAttachmentsIpsecConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAlicloudVpnGatewayVpnAttachmentsAttachmentsIpsecConfigToHclTerraform(struct?: DataAlicloudVpnGatewayVpnAttachmentsAttachmentsIpsecConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAlicloudVpnGatewayVpnAttachmentsAttachmentsIpsecConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAlicloudVpnGatewayVpnAttachmentsAttachmentsIpsecConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAlicloudVpnGatewayVpnAttachmentsAttachmentsIpsecConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ipsec_auth_alg - computed: true, optional: false, required: false
  public get ipsecAuthAlg() {
    return this.getStringAttribute('ipsec_auth_alg');
  }

  // ipsec_enc_alg - computed: true, optional: false, required: false
  public get ipsecEncAlg() {
    return this.getStringAttribute('ipsec_enc_alg');
  }

  // ipsec_lifetime - computed: true, optional: false, required: false
  public get ipsecLifetime() {
    return this.getNumberAttribute('ipsec_lifetime');
  }

  // ipsec_pfs - computed: true, optional: false, required: false
  public get ipsecPfs() {
    return this.getStringAttribute('ipsec_pfs');
  }
}

export class DataAlicloudVpnGatewayVpnAttachmentsAttachmentsIpsecConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataAlicloudVpnGatewayVpnAttachmentsAttachmentsIpsecConfigOutputReference {
    return new DataAlicloudVpnGatewayVpnAttachmentsAttachmentsIpsecConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAlicloudVpnGatewayVpnAttachmentsAttachmentsTunnelOptionsSpecificationTunnelBgpConfig {
}

export function dataAlicloudVpnGatewayVpnAttachmentsAttachmentsTunnelOptionsSpecificationTunnelBgpConfigToTerraform(struct?: DataAlicloudVpnGatewayVpnAttachmentsAttachmentsTunnelOptionsSpecificationTunnelBgpConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAlicloudVpnGatewayVpnAttachmentsAttachmentsTunnelOptionsSpecificationTunnelBgpConfigToHclTerraform(struct?: DataAlicloudVpnGatewayVpnAttachmentsAttachmentsTunnelOptionsSpecificationTunnelBgpConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAlicloudVpnGatewayVpnAttachmentsAttachmentsTunnelOptionsSpecificationTunnelBgpConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAlicloudVpnGatewayVpnAttachmentsAttachmentsTunnelOptionsSpecificationTunnelBgpConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAlicloudVpnGatewayVpnAttachmentsAttachmentsTunnelOptionsSpecificationTunnelBgpConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // bgp_status - computed: true, optional: false, required: false
  public get bgpStatus() {
    return this.getStringAttribute('bgp_status');
  }

  // local_asn - computed: true, optional: false, required: false
  public get localAsn() {
    return this.getNumberAttribute('local_asn');
  }

  // local_bgp_ip - computed: true, optional: false, required: false
  public get localBgpIp() {
    return this.getStringAttribute('local_bgp_ip');
  }

  // peer_asn - computed: true, optional: false, required: false
  public get peerAsn() {
    return this.getStringAttribute('peer_asn');
  }

  // peer_bgp_ip - computed: true, optional: false, required: false
  public get peerBgpIp() {
    return this.getStringAttribute('peer_bgp_ip');
  }

  // tunnel_cidr - computed: true, optional: false, required: false
  public get tunnelCidr() {
    return this.getStringAttribute('tunnel_cidr');
  }
}

export class DataAlicloudVpnGatewayVpnAttachmentsAttachmentsTunnelOptionsSpecificationTunnelBgpConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataAlicloudVpnGatewayVpnAttachmentsAttachmentsTunnelOptionsSpecificationTunnelBgpConfigOutputReference {
    return new DataAlicloudVpnGatewayVpnAttachmentsAttachmentsTunnelOptionsSpecificationTunnelBgpConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAlicloudVpnGatewayVpnAttachmentsAttachmentsTunnelOptionsSpecificationTunnelIkeConfig {
}

export function dataAlicloudVpnGatewayVpnAttachmentsAttachmentsTunnelOptionsSpecificationTunnelIkeConfigToTerraform(struct?: DataAlicloudVpnGatewayVpnAttachmentsAttachmentsTunnelOptionsSpecificationTunnelIkeConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAlicloudVpnGatewayVpnAttachmentsAttachmentsTunnelOptionsSpecificationTunnelIkeConfigToHclTerraform(struct?: DataAlicloudVpnGatewayVpnAttachmentsAttachmentsTunnelOptionsSpecificationTunnelIkeConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAlicloudVpnGatewayVpnAttachmentsAttachmentsTunnelOptionsSpecificationTunnelIkeConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAlicloudVpnGatewayVpnAttachmentsAttachmentsTunnelOptionsSpecificationTunnelIkeConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAlicloudVpnGatewayVpnAttachmentsAttachmentsTunnelOptionsSpecificationTunnelIkeConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ike_auth_alg - computed: true, optional: false, required: false
  public get ikeAuthAlg() {
    return this.getStringAttribute('ike_auth_alg');
  }

  // ike_enc_alg - computed: true, optional: false, required: false
  public get ikeEncAlg() {
    return this.getStringAttribute('ike_enc_alg');
  }

  // ike_lifetime - computed: true, optional: false, required: false
  public get ikeLifetime() {
    return this.getNumberAttribute('ike_lifetime');
  }

  // ike_mode - computed: true, optional: false, required: false
  public get ikeMode() {
    return this.getStringAttribute('ike_mode');
  }

  // ike_pfs - computed: true, optional: false, required: false
  public get ikePfs() {
    return this.getStringAttribute('ike_pfs');
  }

  // ike_version - computed: true, optional: false, required: false
  public get ikeVersion() {
    return this.getStringAttribute('ike_version');
  }

  // local_id - computed: true, optional: false, required: false
  public get localId() {
    return this.getStringAttribute('local_id');
  }

  // psk - computed: true, optional: false, required: false
  public get psk() {
    return this.getStringAttribute('psk');
  }

  // remote_id - computed: true, optional: false, required: false
  public get remoteId() {
    return this.getStringAttribute('remote_id');
  }
}

export class DataAlicloudVpnGatewayVpnAttachmentsAttachmentsTunnelOptionsSpecificationTunnelIkeConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataAlicloudVpnGatewayVpnAttachmentsAttachmentsTunnelOptionsSpecificationTunnelIkeConfigOutputReference {
    return new DataAlicloudVpnGatewayVpnAttachmentsAttachmentsTunnelOptionsSpecificationTunnelIkeConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAlicloudVpnGatewayVpnAttachmentsAttachmentsTunnelOptionsSpecificationTunnelIpsecConfig {
}

export function dataAlicloudVpnGatewayVpnAttachmentsAttachmentsTunnelOptionsSpecificationTunnelIpsecConfigToTerraform(struct?: DataAlicloudVpnGatewayVpnAttachmentsAttachmentsTunnelOptionsSpecificationTunnelIpsecConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAlicloudVpnGatewayVpnAttachmentsAttachmentsTunnelOptionsSpecificationTunnelIpsecConfigToHclTerraform(struct?: DataAlicloudVpnGatewayVpnAttachmentsAttachmentsTunnelOptionsSpecificationTunnelIpsecConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAlicloudVpnGatewayVpnAttachmentsAttachmentsTunnelOptionsSpecificationTunnelIpsecConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAlicloudVpnGatewayVpnAttachmentsAttachmentsTunnelOptionsSpecificationTunnelIpsecConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAlicloudVpnGatewayVpnAttachmentsAttachmentsTunnelOptionsSpecificationTunnelIpsecConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ipsec_auth_alg - computed: true, optional: false, required: false
  public get ipsecAuthAlg() {
    return this.getStringAttribute('ipsec_auth_alg');
  }

  // ipsec_enc_alg - computed: true, optional: false, required: false
  public get ipsecEncAlg() {
    return this.getStringAttribute('ipsec_enc_alg');
  }

  // ipsec_lifetime - computed: true, optional: false, required: false
  public get ipsecLifetime() {
    return this.getNumberAttribute('ipsec_lifetime');
  }

  // ipsec_pfs - computed: true, optional: false, required: false
  public get ipsecPfs() {
    return this.getStringAttribute('ipsec_pfs');
  }
}

export class DataAlicloudVpnGatewayVpnAttachmentsAttachmentsTunnelOptionsSpecificationTunnelIpsecConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataAlicloudVpnGatewayVpnAttachmentsAttachmentsTunnelOptionsSpecificationTunnelIpsecConfigOutputReference {
    return new DataAlicloudVpnGatewayVpnAttachmentsAttachmentsTunnelOptionsSpecificationTunnelIpsecConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAlicloudVpnGatewayVpnAttachmentsAttachmentsTunnelOptionsSpecification {
}

export function dataAlicloudVpnGatewayVpnAttachmentsAttachmentsTunnelOptionsSpecificationToTerraform(struct?: DataAlicloudVpnGatewayVpnAttachmentsAttachmentsTunnelOptionsSpecification): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAlicloudVpnGatewayVpnAttachmentsAttachmentsTunnelOptionsSpecificationToHclTerraform(struct?: DataAlicloudVpnGatewayVpnAttachmentsAttachmentsTunnelOptionsSpecification): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAlicloudVpnGatewayVpnAttachmentsAttachmentsTunnelOptionsSpecificationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAlicloudVpnGatewayVpnAttachmentsAttachmentsTunnelOptionsSpecification | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAlicloudVpnGatewayVpnAttachmentsAttachmentsTunnelOptionsSpecification | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // customer_gateway_id - computed: true, optional: false, required: false
  public get customerGatewayId() {
    return this.getStringAttribute('customer_gateway_id');
  }

  // enable_dpd - computed: true, optional: false, required: false
  public get enableDpd() {
    return this.getBooleanAttribute('enable_dpd');
  }

  // enable_nat_traversal - computed: true, optional: false, required: false
  public get enableNatTraversal() {
    return this.getBooleanAttribute('enable_nat_traversal');
  }

  // internet_ip - computed: true, optional: false, required: false
  public get internetIp() {
    return this.getStringAttribute('internet_ip');
  }

  // role - computed: true, optional: false, required: false
  public get role() {
    return this.getStringAttribute('role');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // tunnel_bgp_config - computed: true, optional: false, required: false
  private _tunnelBgpConfig = new DataAlicloudVpnGatewayVpnAttachmentsAttachmentsTunnelOptionsSpecificationTunnelBgpConfigList(this, "tunnel_bgp_config", false);
  public get tunnelBgpConfig() {
    return this._tunnelBgpConfig;
  }

  // tunnel_id - computed: true, optional: false, required: false
  public get tunnelId() {
    return this.getStringAttribute('tunnel_id');
  }

  // tunnel_ike_config - computed: true, optional: false, required: false
  private _tunnelIkeConfig = new DataAlicloudVpnGatewayVpnAttachmentsAttachmentsTunnelOptionsSpecificationTunnelIkeConfigList(this, "tunnel_ike_config", true);
  public get tunnelIkeConfig() {
    return this._tunnelIkeConfig;
  }

  // tunnel_index - computed: true, optional: false, required: false
  public get tunnelIndex() {
    return this.getNumberAttribute('tunnel_index');
  }

  // tunnel_ipsec_config - computed: true, optional: false, required: false
  private _tunnelIpsecConfig = new DataAlicloudVpnGatewayVpnAttachmentsAttachmentsTunnelOptionsSpecificationTunnelIpsecConfigList(this, "tunnel_ipsec_config", false);
  public get tunnelIpsecConfig() {
    return this._tunnelIpsecConfig;
  }

  // zone_no - computed: true, optional: false, required: false
  public get zoneNo() {
    return this.getStringAttribute('zone_no');
  }
}

export class DataAlicloudVpnGatewayVpnAttachmentsAttachmentsTunnelOptionsSpecificationList extends cdktf.ComplexList {

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
  public get(index: number): DataAlicloudVpnGatewayVpnAttachmentsAttachmentsTunnelOptionsSpecificationOutputReference {
    return new DataAlicloudVpnGatewayVpnAttachmentsAttachmentsTunnelOptionsSpecificationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAlicloudVpnGatewayVpnAttachmentsAttachments {
}

export function dataAlicloudVpnGatewayVpnAttachmentsAttachmentsToTerraform(struct?: DataAlicloudVpnGatewayVpnAttachmentsAttachments): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAlicloudVpnGatewayVpnAttachmentsAttachmentsToHclTerraform(struct?: DataAlicloudVpnGatewayVpnAttachmentsAttachments): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAlicloudVpnGatewayVpnAttachmentsAttachmentsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAlicloudVpnGatewayVpnAttachmentsAttachments | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAlicloudVpnGatewayVpnAttachmentsAttachments | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // attach_type - computed: true, optional: false, required: false
  public get attachType() {
    return this.getStringAttribute('attach_type');
  }

  // bgp_config - computed: true, optional: false, required: false
  private _bgpConfig = new DataAlicloudVpnGatewayVpnAttachmentsAttachmentsBgpConfigList(this, "bgp_config", false);
  public get bgpConfig() {
    return this._bgpConfig;
  }

  // connection_status - computed: true, optional: false, required: false
  public get connectionStatus() {
    return this.getStringAttribute('connection_status');
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // customer_gateway_id - computed: true, optional: false, required: false
  public get customerGatewayId() {
    return this.getStringAttribute('customer_gateway_id');
  }

  // effect_immediately - computed: true, optional: false, required: false
  public get effectImmediately() {
    return this.getBooleanAttribute('effect_immediately');
  }

  // enable_dpd - computed: true, optional: false, required: false
  public get enableDpd() {
    return this.getBooleanAttribute('enable_dpd');
  }

  // enable_nat_traversal - computed: true, optional: false, required: false
  public get enableNatTraversal() {
    return this.getBooleanAttribute('enable_nat_traversal');
  }

  // enable_tunnels_bgp - computed: true, optional: false, required: false
  public get enableTunnelsBgp() {
    return this.getBooleanAttribute('enable_tunnels_bgp');
  }

  // health_check_config - computed: true, optional: false, required: false
  private _healthCheckConfig = new DataAlicloudVpnGatewayVpnAttachmentsAttachmentsHealthCheckConfigList(this, "health_check_config", false);
  public get healthCheckConfig() {
    return this._healthCheckConfig;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ike_config - computed: true, optional: false, required: false
  private _ikeConfig = new DataAlicloudVpnGatewayVpnAttachmentsAttachmentsIkeConfigList(this, "ike_config", false);
  public get ikeConfig() {
    return this._ikeConfig;
  }

  // internet_ip - computed: true, optional: false, required: false
  public get internetIp() {
    return this.getStringAttribute('internet_ip');
  }

  // ipsec_config - computed: true, optional: false, required: false
  private _ipsecConfig = new DataAlicloudVpnGatewayVpnAttachmentsAttachmentsIpsecConfigList(this, "ipsec_config", false);
  public get ipsecConfig() {
    return this._ipsecConfig;
  }

  // local_subnet - computed: true, optional: false, required: false
  public get localSubnet() {
    return this.getStringAttribute('local_subnet');
  }

  // network_type - computed: true, optional: false, required: false
  public get networkType() {
    return this.getStringAttribute('network_type');
  }

  // remote_subnet - computed: true, optional: false, required: false
  public get remoteSubnet() {
    return this.getStringAttribute('remote_subnet');
  }

  // resource_group_id - computed: true, optional: false, required: false
  public get resourceGroupId() {
    return this.getStringAttribute('resource_group_id');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new cdktf.StringMap(this, "tags");
  public get tags() {
    return this._tags;
  }

  // tunnel_options_specification - computed: true, optional: false, required: false
  private _tunnelOptionsSpecification = new DataAlicloudVpnGatewayVpnAttachmentsAttachmentsTunnelOptionsSpecificationList(this, "tunnel_options_specification", true);
  public get tunnelOptionsSpecification() {
    return this._tunnelOptionsSpecification;
  }

  // vpn_attachment_name - computed: true, optional: false, required: false
  public get vpnAttachmentName() {
    return this.getStringAttribute('vpn_attachment_name');
  }

  // vpn_connection_id - computed: true, optional: false, required: false
  public get vpnConnectionId() {
    return this.getStringAttribute('vpn_connection_id');
  }
}

export class DataAlicloudVpnGatewayVpnAttachmentsAttachmentsList extends cdktf.ComplexList {

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
  public get(index: number): DataAlicloudVpnGatewayVpnAttachmentsAttachmentsOutputReference {
    return new DataAlicloudVpnGatewayVpnAttachmentsAttachmentsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/data-sources/vpn_gateway_vpn_attachments alicloud_vpn_gateway_vpn_attachments}
*/
export class DataAlicloudVpnGatewayVpnAttachments extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_vpn_gateway_vpn_attachments";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAlicloudVpnGatewayVpnAttachments resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAlicloudVpnGatewayVpnAttachments to import
  * @param importFromId The id of the existing DataAlicloudVpnGatewayVpnAttachments that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/data-sources/vpn_gateway_vpn_attachments#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAlicloudVpnGatewayVpnAttachments to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_vpn_gateway_vpn_attachments", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/data-sources/vpn_gateway_vpn_attachments alicloud_vpn_gateway_vpn_attachments} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAlicloudVpnGatewayVpnAttachmentsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataAlicloudVpnGatewayVpnAttachmentsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'alicloud_vpn_gateway_vpn_attachments',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.266.0',
        providerVersionConstraint: '1.266.0'
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
    this._ids = config.ids;
    this._nameRegex = config.nameRegex;
    this._outputFile = config.outputFile;
    this._pageNumber = config.pageNumber;
    this._pageSize = config.pageSize;
    this._status = config.status;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // attachments - computed: true, optional: false, required: false
  private _attachments = new DataAlicloudVpnGatewayVpnAttachmentsAttachmentsList(this, "attachments", false);
  public get attachments() {
    return this._attachments;
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

  // ids - computed: true, optional: true, required: false
  private _ids?: string[]; 
  public get ids() {
    return this.getListAttribute('ids');
  }
  public set ids(value: string[]) {
    this._ids = value;
  }
  public resetIds() {
    this._ids = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idsInput() {
    return this._ids;
  }

  // name_regex - computed: false, optional: true, required: false
  private _nameRegex?: string; 
  public get nameRegex() {
    return this.getStringAttribute('name_regex');
  }
  public set nameRegex(value: string) {
    this._nameRegex = value;
  }
  public resetNameRegex() {
    this._nameRegex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameRegexInput() {
    return this._nameRegex;
  }

  // names - computed: true, optional: false, required: false
  public get names() {
    return this.getListAttribute('names');
  }

  // output_file - computed: false, optional: true, required: false
  private _outputFile?: string; 
  public get outputFile() {
    return this.getStringAttribute('output_file');
  }
  public set outputFile(value: string) {
    this._outputFile = value;
  }
  public resetOutputFile() {
    this._outputFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputFileInput() {
    return this._outputFile;
  }

  // page_number - computed: false, optional: true, required: false
  private _pageNumber?: number; 
  public get pageNumber() {
    return this.getNumberAttribute('page_number');
  }
  public set pageNumber(value: number) {
    this._pageNumber = value;
  }
  public resetPageNumber() {
    this._pageNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pageNumberInput() {
    return this._pageNumber;
  }

  // page_size - computed: false, optional: true, required: false
  private _pageSize?: number; 
  public get pageSize() {
    return this.getNumberAttribute('page_size');
  }
  public set pageSize(value: number) {
    this._pageSize = value;
  }
  public resetPageSize() {
    this._pageSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pageSizeInput() {
    return this._pageSize;
  }

  // status - computed: false, optional: true, required: false
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ids),
      name_regex: cdktf.stringToTerraform(this._nameRegex),
      output_file: cdktf.stringToTerraform(this._outputFile),
      page_number: cdktf.numberToTerraform(this._pageNumber),
      page_size: cdktf.numberToTerraform(this._pageSize),
      status: cdktf.stringToTerraform(this._status),
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
      ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ids),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      name_regex: {
        value: cdktf.stringToHclTerraform(this._nameRegex),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      output_file: {
        value: cdktf.stringToHclTerraform(this._outputFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      page_number: {
        value: cdktf.numberToHclTerraform(this._pageNumber),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      page_size: {
        value: cdktf.numberToHclTerraform(this._pageSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      status: {
        value: cdktf.stringToHclTerraform(this._status),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
