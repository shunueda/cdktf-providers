import * as cdktf from 'cdktf';
export interface DataAviApplicationprofileConfigpbAttributes {
}

export function dataAviApplicationprofileConfigpbAttributesToTerraform(struct?: DataAviApplicationprofileConfigpbAttributes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviApplicationprofileConfigpbAttributesToHclTerraform(struct?: DataAviApplicationprofileConfigpbAttributes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviApplicationprofileConfigpbAttributesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviApplicationprofileConfigpbAttributes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviApplicationprofileConfigpbAttributes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }
}

export class DataAviApplicationprofileConfigpbAttributesList extends cdktf.ComplexList {

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
  public get(index: number): DataAviApplicationprofileConfigpbAttributesOutputReference {
    return new DataAviApplicationprofileConfigpbAttributesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviApplicationprofileDnsServiceProfileDnsZones {
}

export function dataAviApplicationprofileDnsServiceProfileDnsZonesToTerraform(struct?: DataAviApplicationprofileDnsServiceProfileDnsZones): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviApplicationprofileDnsServiceProfileDnsZonesToHclTerraform(struct?: DataAviApplicationprofileDnsServiceProfileDnsZones): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviApplicationprofileDnsServiceProfileDnsZonesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviApplicationprofileDnsServiceProfileDnsZones | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviApplicationprofileDnsServiceProfileDnsZones | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // admin_email - computed: true, optional: false, required: false
  public get adminEmail() {
    return this.getStringAttribute('admin_email');
  }

  // domain_name - computed: true, optional: false, required: false
  public get domainName() {
    return this.getStringAttribute('domain_name');
  }

  // name_server - computed: true, optional: false, required: false
  public get nameServer() {
    return this.getStringAttribute('name_server');
  }
}

export class DataAviApplicationprofileDnsServiceProfileDnsZonesList extends cdktf.ComplexList {

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
  public get(index: number): DataAviApplicationprofileDnsServiceProfileDnsZonesOutputReference {
    return new DataAviApplicationprofileDnsServiceProfileDnsZonesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviApplicationprofileDnsServiceProfile {
}

export function dataAviApplicationprofileDnsServiceProfileToTerraform(struct?: DataAviApplicationprofileDnsServiceProfile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviApplicationprofileDnsServiceProfileToHclTerraform(struct?: DataAviApplicationprofileDnsServiceProfile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviApplicationprofileDnsServiceProfileOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviApplicationprofileDnsServiceProfile | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviApplicationprofileDnsServiceProfile | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // aaaa_empty_response - computed: true, optional: false, required: false
  public get aaaaEmptyResponse() {
    return this.getStringAttribute('aaaa_empty_response');
  }

  // admin_email - computed: true, optional: false, required: false
  public get adminEmail() {
    return this.getStringAttribute('admin_email');
  }

  // client_dns_tcp_request_timeout - computed: true, optional: false, required: false
  public get clientDnsTcpRequestTimeout() {
    return this.getStringAttribute('client_dns_tcp_request_timeout');
  }

  // close_tcp_connection_post_response - computed: true, optional: false, required: false
  public get closeTcpConnectionPostResponse() {
    return this.getStringAttribute('close_tcp_connection_post_response');
  }

  // dns_over_tcp_enabled - computed: true, optional: false, required: false
  public get dnsOverTcpEnabled() {
    return this.getStringAttribute('dns_over_tcp_enabled');
  }

  // dns_zones - computed: true, optional: false, required: false
  private _dnsZones = new DataAviApplicationprofileDnsServiceProfileDnsZonesList(this, "dns_zones", false);
  public get dnsZones() {
    return this._dnsZones;
  }

  // domain_names - computed: true, optional: false, required: false
  public get domainNames() {
    return this.getListAttribute('domain_names');
  }

  // ecs_stripping_enabled - computed: true, optional: false, required: false
  public get ecsStrippingEnabled() {
    return this.getStringAttribute('ecs_stripping_enabled');
  }

  // edns - computed: true, optional: false, required: false
  public get edns() {
    return this.getStringAttribute('edns');
  }

  // edns_client_subnet_prefix_len - computed: true, optional: false, required: false
  public get ednsClientSubnetPrefixLen() {
    return this.getStringAttribute('edns_client_subnet_prefix_len');
  }

  // error_response - computed: true, optional: false, required: false
  public get errorResponse() {
    return this.getStringAttribute('error_response');
  }

  // name_server - computed: true, optional: false, required: false
  public get nameServer() {
    return this.getStringAttribute('name_server');
  }

  // negative_caching_ttl - computed: true, optional: false, required: false
  public get negativeCachingTtl() {
    return this.getStringAttribute('negative_caching_ttl');
  }

  // num_dns_ip - computed: true, optional: false, required: false
  public get numDnsIp() {
    return this.getStringAttribute('num_dns_ip');
  }

  // ttl - computed: true, optional: false, required: false
  public get ttl() {
    return this.getStringAttribute('ttl');
  }
}

export class DataAviApplicationprofileDnsServiceProfileList extends cdktf.ComplexList {

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
  public get(index: number): DataAviApplicationprofileDnsServiceProfileOutputReference {
    return new DataAviApplicationprofileDnsServiceProfileOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviApplicationprofileDosRlProfileDosProfileThreshInfo {
}

export function dataAviApplicationprofileDosRlProfileDosProfileThreshInfoToTerraform(struct?: DataAviApplicationprofileDosRlProfileDosProfileThreshInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviApplicationprofileDosRlProfileDosProfileThreshInfoToHclTerraform(struct?: DataAviApplicationprofileDosRlProfileDosProfileThreshInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviApplicationprofileDosRlProfileDosProfileThreshInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviApplicationprofileDosRlProfileDosProfileThreshInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviApplicationprofileDosRlProfileDosProfileThreshInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // attack - computed: true, optional: false, required: false
  public get attack() {
    return this.getStringAttribute('attack');
  }

  // max_value - computed: true, optional: false, required: false
  public get maxValue() {
    return this.getStringAttribute('max_value');
  }

  // min_value - computed: true, optional: false, required: false
  public get minValue() {
    return this.getStringAttribute('min_value');
  }
}

export class DataAviApplicationprofileDosRlProfileDosProfileThreshInfoList extends cdktf.ComplexList {

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
  public get(index: number): DataAviApplicationprofileDosRlProfileDosProfileThreshInfoOutputReference {
    return new DataAviApplicationprofileDosRlProfileDosProfileThreshInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviApplicationprofileDosRlProfileDosProfile {
}

export function dataAviApplicationprofileDosRlProfileDosProfileToTerraform(struct?: DataAviApplicationprofileDosRlProfileDosProfile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviApplicationprofileDosRlProfileDosProfileToHclTerraform(struct?: DataAviApplicationprofileDosRlProfileDosProfile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviApplicationprofileDosRlProfileDosProfileOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviApplicationprofileDosRlProfileDosProfile | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviApplicationprofileDosRlProfileDosProfile | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // thresh_info - computed: true, optional: false, required: false
  private _threshInfo = new DataAviApplicationprofileDosRlProfileDosProfileThreshInfoList(this, "thresh_info", false);
  public get threshInfo() {
    return this._threshInfo;
  }

  // thresh_period - computed: true, optional: false, required: false
  public get threshPeriod() {
    return this.getStringAttribute('thresh_period');
  }
}

export class DataAviApplicationprofileDosRlProfileDosProfileList extends cdktf.ComplexList {

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
  public get(index: number): DataAviApplicationprofileDosRlProfileDosProfileOutputReference {
    return new DataAviApplicationprofileDosRlProfileDosProfileOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviApplicationprofileDosRlProfileRlProfileClientIpConnectionsRateLimitActionFile {
}

export function dataAviApplicationprofileDosRlProfileRlProfileClientIpConnectionsRateLimitActionFileToTerraform(struct?: DataAviApplicationprofileDosRlProfileRlProfileClientIpConnectionsRateLimitActionFile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviApplicationprofileDosRlProfileRlProfileClientIpConnectionsRateLimitActionFileToHclTerraform(struct?: DataAviApplicationprofileDosRlProfileRlProfileClientIpConnectionsRateLimitActionFile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviApplicationprofileDosRlProfileRlProfileClientIpConnectionsRateLimitActionFileOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviApplicationprofileDosRlProfileRlProfileClientIpConnectionsRateLimitActionFile | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviApplicationprofileDosRlProfileRlProfileClientIpConnectionsRateLimitActionFile | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // content_type - computed: true, optional: false, required: false
  public get contentType() {
    return this.getStringAttribute('content_type');
  }

  // file_content - computed: true, optional: false, required: false
  public get fileContent() {
    return this.getStringAttribute('file_content');
  }

  // file_length - computed: true, optional: false, required: false
  public get fileLength() {
    return this.getStringAttribute('file_length');
  }
}

export class DataAviApplicationprofileDosRlProfileRlProfileClientIpConnectionsRateLimitActionFileList extends cdktf.ComplexList {

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
  public get(index: number): DataAviApplicationprofileDosRlProfileRlProfileClientIpConnectionsRateLimitActionFileOutputReference {
    return new DataAviApplicationprofileDosRlProfileRlProfileClientIpConnectionsRateLimitActionFileOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviApplicationprofileDosRlProfileRlProfileClientIpConnectionsRateLimitActionRedirectHostTokens {
}

export function dataAviApplicationprofileDosRlProfileRlProfileClientIpConnectionsRateLimitActionRedirectHostTokensToTerraform(struct?: DataAviApplicationprofileDosRlProfileRlProfileClientIpConnectionsRateLimitActionRedirectHostTokens): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviApplicationprofileDosRlProfileRlProfileClientIpConnectionsRateLimitActionRedirectHostTokensToHclTerraform(struct?: DataAviApplicationprofileDosRlProfileRlProfileClientIpConnectionsRateLimitActionRedirectHostTokens): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviApplicationprofileDosRlProfileRlProfileClientIpConnectionsRateLimitActionRedirectHostTokensOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviApplicationprofileDosRlProfileRlProfileClientIpConnectionsRateLimitActionRedirectHostTokens | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviApplicationprofileDosRlProfileRlProfileClientIpConnectionsRateLimitActionRedirectHostTokens | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // end_index - computed: true, optional: false, required: false
  public get endIndex() {
    return this.getStringAttribute('end_index');
  }

  // start_index - computed: true, optional: false, required: false
  public get startIndex() {
    return this.getStringAttribute('start_index');
  }

  // str_value - computed: true, optional: false, required: false
  public get strValue() {
    return this.getStringAttribute('str_value');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataAviApplicationprofileDosRlProfileRlProfileClientIpConnectionsRateLimitActionRedirectHostTokensList extends cdktf.ComplexList {

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
  public get(index: number): DataAviApplicationprofileDosRlProfileRlProfileClientIpConnectionsRateLimitActionRedirectHostTokensOutputReference {
    return new DataAviApplicationprofileDosRlProfileRlProfileClientIpConnectionsRateLimitActionRedirectHostTokensOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviApplicationprofileDosRlProfileRlProfileClientIpConnectionsRateLimitActionRedirectHost {
}

export function dataAviApplicationprofileDosRlProfileRlProfileClientIpConnectionsRateLimitActionRedirectHostToTerraform(struct?: DataAviApplicationprofileDosRlProfileRlProfileClientIpConnectionsRateLimitActionRedirectHost): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviApplicationprofileDosRlProfileRlProfileClientIpConnectionsRateLimitActionRedirectHostToHclTerraform(struct?: DataAviApplicationprofileDosRlProfileRlProfileClientIpConnectionsRateLimitActionRedirectHost): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviApplicationprofileDosRlProfileRlProfileClientIpConnectionsRateLimitActionRedirectHostOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviApplicationprofileDosRlProfileRlProfileClientIpConnectionsRateLimitActionRedirectHost | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviApplicationprofileDosRlProfileRlProfileClientIpConnectionsRateLimitActionRedirectHost | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // tokens - computed: true, optional: false, required: false
  private _tokens = new DataAviApplicationprofileDosRlProfileRlProfileClientIpConnectionsRateLimitActionRedirectHostTokensList(this, "tokens", false);
  public get tokens() {
    return this._tokens;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataAviApplicationprofileDosRlProfileRlProfileClientIpConnectionsRateLimitActionRedirectHostList extends cdktf.ComplexList {

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
  public get(index: number): DataAviApplicationprofileDosRlProfileRlProfileClientIpConnectionsRateLimitActionRedirectHostOutputReference {
    return new DataAviApplicationprofileDosRlProfileRlProfileClientIpConnectionsRateLimitActionRedirectHostOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviApplicationprofileDosRlProfileRlProfileClientIpConnectionsRateLimitActionRedirectPathTokens {
}

export function dataAviApplicationprofileDosRlProfileRlProfileClientIpConnectionsRateLimitActionRedirectPathTokensToTerraform(struct?: DataAviApplicationprofileDosRlProfileRlProfileClientIpConnectionsRateLimitActionRedirectPathTokens): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviApplicationprofileDosRlProfileRlProfileClientIpConnectionsRateLimitActionRedirectPathTokensToHclTerraform(struct?: DataAviApplicationprofileDosRlProfileRlProfileClientIpConnectionsRateLimitActionRedirectPathTokens): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviApplicationprofileDosRlProfileRlProfileClientIpConnectionsRateLimitActionRedirectPathTokensOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviApplicationprofileDosRlProfileRlProfileClientIpConnectionsRateLimitActionRedirectPathTokens | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviApplicationprofileDosRlProfileRlProfileClientIpConnectionsRateLimitActionRedirectPathTokens | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // end_index - computed: true, optional: false, required: false
  public get endIndex() {
    return this.getStringAttribute('end_index');
  }

  // start_index - computed: true, optional: false, required: false
  public get startIndex() {
    return this.getStringAttribute('start_index');
  }

  // str_value - computed: true, optional: false, required: false
  public get strValue() {
    return this.getStringAttribute('str_value');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataAviApplicationprofileDosRlProfileRlProfileClientIpConnectionsRateLimitActionRedirectPathTokensList extends cdktf.ComplexList {

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
  public get(index: number): DataAviApplicationprofileDosRlProfileRlProfileClientIpConnectionsRateLimitActionRedirectPathTokensOutputReference {
    return new DataAviApplicationprofileDosRlProfileRlProfileClientIpConnectionsRateLimitActionRedirectPathTokensOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviApplicationprofileDosRlProfileRlProfileClientIpConnectionsRateLimitActionRedirectPath {
}

export function dataAviApplicationprofileDosRlProfileRlProfileClientIpConnectionsRateLimitActionRedirectPathToTerraform(struct?: DataAviApplicationprofileDosRlProfileRlProfileClientIpConnectionsRateLimitActionRedirectPath): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviApplicationprofileDosRlProfileRlProfileClientIpConnectionsRateLimitActionRedirectPathToHclTerraform(struct?: DataAviApplicationprofileDosRlProfileRlProfileClientIpConnectionsRateLimitActionRedirectPath): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviApplicationprofileDosRlProfileRlProfileClientIpConnectionsRateLimitActionRedirectPathOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviApplicationprofileDosRlProfileRlProfileClientIpConnectionsRateLimitActionRedirectPath | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviApplicationprofileDosRlProfileRlProfileClientIpConnectionsRateLimitActionRedirectPath | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // tokens - computed: true, optional: false, required: false
  private _tokens = new DataAviApplicationprofileDosRlProfileRlProfileClientIpConnectionsRateLimitActionRedirectPathTokensList(this, "tokens", false);
  public get tokens() {
    return this._tokens;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataAviApplicationprofileDosRlProfileRlProfileClientIpConnectionsRateLimitActionRedirectPathList extends cdktf.ComplexList {

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
  public get(index: number): DataAviApplicationprofileDosRlProfileRlProfileClientIpConnectionsRateLimitActionRedirectPathOutputReference {
    return new DataAviApplicationprofileDosRlProfileRlProfileClientIpConnectionsRateLimitActionRedirectPathOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviApplicationprofileDosRlProfileRlProfileClientIpConnectionsRateLimitActionRedirect {
}

export function dataAviApplicationprofileDosRlProfileRlProfileClientIpConnectionsRateLimitActionRedirectToTerraform(struct?: DataAviApplicationprofileDosRlProfileRlProfileClientIpConnectionsRateLimitActionRedirect): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviApplicationprofileDosRlProfileRlProfileClientIpConnectionsRateLimitActionRedirectToHclTerraform(struct?: DataAviApplicationprofileDosRlProfileRlProfileClientIpConnectionsRateLimitActionRedirect): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviApplicationprofileDosRlProfileRlProfileClientIpConnectionsRateLimitActionRedirectOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviApplicationprofileDosRlProfileRlProfileClientIpConnectionsRateLimitActionRedirect | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviApplicationprofileDosRlProfileRlProfileClientIpConnectionsRateLimitActionRedirect | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // add_string - computed: true, optional: false, required: false
  public get addString() {
    return this.getStringAttribute('add_string');
  }

  // host - computed: true, optional: false, required: false
  private _host = new DataAviApplicationprofileDosRlProfileRlProfileClientIpConnectionsRateLimitActionRedirectHostList(this, "host", true);
  public get host() {
    return this._host;
  }

  // keep_query - computed: true, optional: false, required: false
  public get keepQuery() {
    return this.getStringAttribute('keep_query');
  }

  // path - computed: true, optional: false, required: false
  private _path = new DataAviApplicationprofileDosRlProfileRlProfileClientIpConnectionsRateLimitActionRedirectPathList(this, "path", true);
  public get path() {
    return this._path;
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getStringAttribute('port');
  }

  // protocol - computed: true, optional: false, required: false
  public get protocol() {
    return this.getStringAttribute('protocol');
  }

  // status_code - computed: true, optional: false, required: false
  public get statusCode() {
    return this.getStringAttribute('status_code');
  }
}

export class DataAviApplicationprofileDosRlProfileRlProfileClientIpConnectionsRateLimitActionRedirectList extends cdktf.ComplexList {

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
  public get(index: number): DataAviApplicationprofileDosRlProfileRlProfileClientIpConnectionsRateLimitActionRedirectOutputReference {
    return new DataAviApplicationprofileDosRlProfileRlProfileClientIpConnectionsRateLimitActionRedirectOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviApplicationprofileDosRlProfileRlProfileClientIpConnectionsRateLimitAction {
}

export function dataAviApplicationprofileDosRlProfileRlProfileClientIpConnectionsRateLimitActionToTerraform(struct?: DataAviApplicationprofileDosRlProfileRlProfileClientIpConnectionsRateLimitAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviApplicationprofileDosRlProfileRlProfileClientIpConnectionsRateLimitActionToHclTerraform(struct?: DataAviApplicationprofileDosRlProfileRlProfileClientIpConnectionsRateLimitAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviApplicationprofileDosRlProfileRlProfileClientIpConnectionsRateLimitActionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviApplicationprofileDosRlProfileRlProfileClientIpConnectionsRateLimitAction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviApplicationprofileDosRlProfileRlProfileClientIpConnectionsRateLimitAction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // file - computed: true, optional: false, required: false
  private _file = new DataAviApplicationprofileDosRlProfileRlProfileClientIpConnectionsRateLimitActionFileList(this, "file", true);
  public get file() {
    return this._file;
  }

  // redirect - computed: true, optional: false, required: false
  private _redirect = new DataAviApplicationprofileDosRlProfileRlProfileClientIpConnectionsRateLimitActionRedirectList(this, "redirect", true);
  public get redirect() {
    return this._redirect;
  }

  // status_code - computed: true, optional: false, required: false
  public get statusCode() {
    return this.getStringAttribute('status_code');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataAviApplicationprofileDosRlProfileRlProfileClientIpConnectionsRateLimitActionList extends cdktf.ComplexList {

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
  public get(index: number): DataAviApplicationprofileDosRlProfileRlProfileClientIpConnectionsRateLimitActionOutputReference {
    return new DataAviApplicationprofileDosRlProfileRlProfileClientIpConnectionsRateLimitActionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviApplicationprofileDosRlProfileRlProfileClientIpConnectionsRateLimitRateLimiter {
}

export function dataAviApplicationprofileDosRlProfileRlProfileClientIpConnectionsRateLimitRateLimiterToTerraform(struct?: DataAviApplicationprofileDosRlProfileRlProfileClientIpConnectionsRateLimitRateLimiter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviApplicationprofileDosRlProfileRlProfileClientIpConnectionsRateLimitRateLimiterToHclTerraform(struct?: DataAviApplicationprofileDosRlProfileRlProfileClientIpConnectionsRateLimitRateLimiter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviApplicationprofileDosRlProfileRlProfileClientIpConnectionsRateLimitRateLimiterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviApplicationprofileDosRlProfileRlProfileClientIpConnectionsRateLimitRateLimiter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviApplicationprofileDosRlProfileRlProfileClientIpConnectionsRateLimitRateLimiter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // burst_sz - computed: true, optional: false, required: false
  public get burstSz() {
    return this.getStringAttribute('burst_sz');
  }

  // count - computed: true, optional: false, required: false
  public get count() {
    return this.getStringAttribute('count');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // period - computed: true, optional: false, required: false
  public get period() {
    return this.getStringAttribute('period');
  }
}

export class DataAviApplicationprofileDosRlProfileRlProfileClientIpConnectionsRateLimitRateLimiterList extends cdktf.ComplexList {

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
  public get(index: number): DataAviApplicationprofileDosRlProfileRlProfileClientIpConnectionsRateLimitRateLimiterOutputReference {
    return new DataAviApplicationprofileDosRlProfileRlProfileClientIpConnectionsRateLimitRateLimiterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviApplicationprofileDosRlProfileRlProfileClientIpConnectionsRateLimit {
}

export function dataAviApplicationprofileDosRlProfileRlProfileClientIpConnectionsRateLimitToTerraform(struct?: DataAviApplicationprofileDosRlProfileRlProfileClientIpConnectionsRateLimit): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviApplicationprofileDosRlProfileRlProfileClientIpConnectionsRateLimitToHclTerraform(struct?: DataAviApplicationprofileDosRlProfileRlProfileClientIpConnectionsRateLimit): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviApplicationprofileDosRlProfileRlProfileClientIpConnectionsRateLimitOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviApplicationprofileDosRlProfileRlProfileClientIpConnectionsRateLimit | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviApplicationprofileDosRlProfileRlProfileClientIpConnectionsRateLimit | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // action - computed: true, optional: false, required: false
  private _action = new DataAviApplicationprofileDosRlProfileRlProfileClientIpConnectionsRateLimitActionList(this, "action", true);
  public get action() {
    return this._action;
  }

  // explicit_tracking - computed: true, optional: false, required: false
  public get explicitTracking() {
    return this.getStringAttribute('explicit_tracking');
  }

  // fine_grain - computed: true, optional: false, required: false
  public get fineGrain() {
    return this.getStringAttribute('fine_grain');
  }

  // http_cookie - computed: true, optional: false, required: false
  public get httpCookie() {
    return this.getStringAttribute('http_cookie');
  }

  // http_header - computed: true, optional: false, required: false
  public get httpHeader() {
    return this.getStringAttribute('http_header');
  }

  // rate_limiter - computed: true, optional: false, required: false
  private _rateLimiter = new DataAviApplicationprofileDosRlProfileRlProfileClientIpConnectionsRateLimitRateLimiterList(this, "rate_limiter", true);
  public get rateLimiter() {
    return this._rateLimiter;
  }
}

export class DataAviApplicationprofileDosRlProfileRlProfileClientIpConnectionsRateLimitList extends cdktf.ComplexList {

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
  public get(index: number): DataAviApplicationprofileDosRlProfileRlProfileClientIpConnectionsRateLimitOutputReference {
    return new DataAviApplicationprofileDosRlProfileRlProfileClientIpConnectionsRateLimitOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviApplicationprofileDosRlProfileRlProfileClientIpFailedRequestsRateLimitActionFile {
}

export function dataAviApplicationprofileDosRlProfileRlProfileClientIpFailedRequestsRateLimitActionFileToTerraform(struct?: DataAviApplicationprofileDosRlProfileRlProfileClientIpFailedRequestsRateLimitActionFile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviApplicationprofileDosRlProfileRlProfileClientIpFailedRequestsRateLimitActionFileToHclTerraform(struct?: DataAviApplicationprofileDosRlProfileRlProfileClientIpFailedRequestsRateLimitActionFile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviApplicationprofileDosRlProfileRlProfileClientIpFailedRequestsRateLimitActionFileOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviApplicationprofileDosRlProfileRlProfileClientIpFailedRequestsRateLimitActionFile | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviApplicationprofileDosRlProfileRlProfileClientIpFailedRequestsRateLimitActionFile | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // content_type - computed: true, optional: false, required: false
  public get contentType() {
    return this.getStringAttribute('content_type');
  }

  // file_content - computed: true, optional: false, required: false
  public get fileContent() {
    return this.getStringAttribute('file_content');
  }

  // file_length - computed: true, optional: false, required: false
  public get fileLength() {
    return this.getStringAttribute('file_length');
  }
}

export class DataAviApplicationprofileDosRlProfileRlProfileClientIpFailedRequestsRateLimitActionFileList extends cdktf.ComplexList {

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
  public get(index: number): DataAviApplicationprofileDosRlProfileRlProfileClientIpFailedRequestsRateLimitActionFileOutputReference {
    return new DataAviApplicationprofileDosRlProfileRlProfileClientIpFailedRequestsRateLimitActionFileOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviApplicationprofileDosRlProfileRlProfileClientIpFailedRequestsRateLimitActionRedirectHostTokens {
}

export function dataAviApplicationprofileDosRlProfileRlProfileClientIpFailedRequestsRateLimitActionRedirectHostTokensToTerraform(struct?: DataAviApplicationprofileDosRlProfileRlProfileClientIpFailedRequestsRateLimitActionRedirectHostTokens): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviApplicationprofileDosRlProfileRlProfileClientIpFailedRequestsRateLimitActionRedirectHostTokensToHclTerraform(struct?: DataAviApplicationprofileDosRlProfileRlProfileClientIpFailedRequestsRateLimitActionRedirectHostTokens): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviApplicationprofileDosRlProfileRlProfileClientIpFailedRequestsRateLimitActionRedirectHostTokensOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviApplicationprofileDosRlProfileRlProfileClientIpFailedRequestsRateLimitActionRedirectHostTokens | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviApplicationprofileDosRlProfileRlProfileClientIpFailedRequestsRateLimitActionRedirectHostTokens | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // end_index - computed: true, optional: false, required: false
  public get endIndex() {
    return this.getStringAttribute('end_index');
  }

  // start_index - computed: true, optional: false, required: false
  public get startIndex() {
    return this.getStringAttribute('start_index');
  }

  // str_value - computed: true, optional: false, required: false
  public get strValue() {
    return this.getStringAttribute('str_value');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataAviApplicationprofileDosRlProfileRlProfileClientIpFailedRequestsRateLimitActionRedirectHostTokensList extends cdktf.ComplexList {

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
  public get(index: number): DataAviApplicationprofileDosRlProfileRlProfileClientIpFailedRequestsRateLimitActionRedirectHostTokensOutputReference {
    return new DataAviApplicationprofileDosRlProfileRlProfileClientIpFailedRequestsRateLimitActionRedirectHostTokensOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviApplicationprofileDosRlProfileRlProfileClientIpFailedRequestsRateLimitActionRedirectHost {
}

export function dataAviApplicationprofileDosRlProfileRlProfileClientIpFailedRequestsRateLimitActionRedirectHostToTerraform(struct?: DataAviApplicationprofileDosRlProfileRlProfileClientIpFailedRequestsRateLimitActionRedirectHost): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviApplicationprofileDosRlProfileRlProfileClientIpFailedRequestsRateLimitActionRedirectHostToHclTerraform(struct?: DataAviApplicationprofileDosRlProfileRlProfileClientIpFailedRequestsRateLimitActionRedirectHost): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviApplicationprofileDosRlProfileRlProfileClientIpFailedRequestsRateLimitActionRedirectHostOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviApplicationprofileDosRlProfileRlProfileClientIpFailedRequestsRateLimitActionRedirectHost | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviApplicationprofileDosRlProfileRlProfileClientIpFailedRequestsRateLimitActionRedirectHost | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // tokens - computed: true, optional: false, required: false
  private _tokens = new DataAviApplicationprofileDosRlProfileRlProfileClientIpFailedRequestsRateLimitActionRedirectHostTokensList(this, "tokens", false);
  public get tokens() {
    return this._tokens;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataAviApplicationprofileDosRlProfileRlProfileClientIpFailedRequestsRateLimitActionRedirectHostList extends cdktf.ComplexList {

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
  public get(index: number): DataAviApplicationprofileDosRlProfileRlProfileClientIpFailedRequestsRateLimitActionRedirectHostOutputReference {
    return new DataAviApplicationprofileDosRlProfileRlProfileClientIpFailedRequestsRateLimitActionRedirectHostOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviApplicationprofileDosRlProfileRlProfileClientIpFailedRequestsRateLimitActionRedirectPathTokens {
}

export function dataAviApplicationprofileDosRlProfileRlProfileClientIpFailedRequestsRateLimitActionRedirectPathTokensToTerraform(struct?: DataAviApplicationprofileDosRlProfileRlProfileClientIpFailedRequestsRateLimitActionRedirectPathTokens): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviApplicationprofileDosRlProfileRlProfileClientIpFailedRequestsRateLimitActionRedirectPathTokensToHclTerraform(struct?: DataAviApplicationprofileDosRlProfileRlProfileClientIpFailedRequestsRateLimitActionRedirectPathTokens): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviApplicationprofileDosRlProfileRlProfileClientIpFailedRequestsRateLimitActionRedirectPathTokensOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviApplicationprofileDosRlProfileRlProfileClientIpFailedRequestsRateLimitActionRedirectPathTokens | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviApplicationprofileDosRlProfileRlProfileClientIpFailedRequestsRateLimitActionRedirectPathTokens | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // end_index - computed: true, optional: false, required: false
  public get endIndex() {
    return this.getStringAttribute('end_index');
  }

  // start_index - computed: true, optional: false, required: false
  public get startIndex() {
    return this.getStringAttribute('start_index');
  }

  // str_value - computed: true, optional: false, required: false
  public get strValue() {
    return this.getStringAttribute('str_value');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataAviApplicationprofileDosRlProfileRlProfileClientIpFailedRequestsRateLimitActionRedirectPathTokensList extends cdktf.ComplexList {

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
  public get(index: number): DataAviApplicationprofileDosRlProfileRlProfileClientIpFailedRequestsRateLimitActionRedirectPathTokensOutputReference {
    return new DataAviApplicationprofileDosRlProfileRlProfileClientIpFailedRequestsRateLimitActionRedirectPathTokensOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviApplicationprofileDosRlProfileRlProfileClientIpFailedRequestsRateLimitActionRedirectPath {
}

export function dataAviApplicationprofileDosRlProfileRlProfileClientIpFailedRequestsRateLimitActionRedirectPathToTerraform(struct?: DataAviApplicationprofileDosRlProfileRlProfileClientIpFailedRequestsRateLimitActionRedirectPath): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviApplicationprofileDosRlProfileRlProfileClientIpFailedRequestsRateLimitActionRedirectPathToHclTerraform(struct?: DataAviApplicationprofileDosRlProfileRlProfileClientIpFailedRequestsRateLimitActionRedirectPath): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviApplicationprofileDosRlProfileRlProfileClientIpFailedRequestsRateLimitActionRedirectPathOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviApplicationprofileDosRlProfileRlProfileClientIpFailedRequestsRateLimitActionRedirectPath | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviApplicationprofileDosRlProfileRlProfileClientIpFailedRequestsRateLimitActionRedirectPath | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // tokens - computed: true, optional: false, required: false
  private _tokens = new DataAviApplicationprofileDosRlProfileRlProfileClientIpFailedRequestsRateLimitActionRedirectPathTokensList(this, "tokens", false);
  public get tokens() {
    return this._tokens;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataAviApplicationprofileDosRlProfileRlProfileClientIpFailedRequestsRateLimitActionRedirectPathList extends cdktf.ComplexList {

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
  public get(index: number): DataAviApplicationprofileDosRlProfileRlProfileClientIpFailedRequestsRateLimitActionRedirectPathOutputReference {
    return new DataAviApplicationprofileDosRlProfileRlProfileClientIpFailedRequestsRateLimitActionRedirectPathOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviApplicationprofileDosRlProfileRlProfileClientIpFailedRequestsRateLimitActionRedirect {
}

export function dataAviApplicationprofileDosRlProfileRlProfileClientIpFailedRequestsRateLimitActionRedirectToTerraform(struct?: DataAviApplicationprofileDosRlProfileRlProfileClientIpFailedRequestsRateLimitActionRedirect): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviApplicationprofileDosRlProfileRlProfileClientIpFailedRequestsRateLimitActionRedirectToHclTerraform(struct?: DataAviApplicationprofileDosRlProfileRlProfileClientIpFailedRequestsRateLimitActionRedirect): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviApplicationprofileDosRlProfileRlProfileClientIpFailedRequestsRateLimitActionRedirectOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviApplicationprofileDosRlProfileRlProfileClientIpFailedRequestsRateLimitActionRedirect | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviApplicationprofileDosRlProfileRlProfileClientIpFailedRequestsRateLimitActionRedirect | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // add_string - computed: true, optional: false, required: false
  public get addString() {
    return this.getStringAttribute('add_string');
  }

  // host - computed: true, optional: false, required: false
  private _host = new DataAviApplicationprofileDosRlProfileRlProfileClientIpFailedRequestsRateLimitActionRedirectHostList(this, "host", true);
  public get host() {
    return this._host;
  }

  // keep_query - computed: true, optional: false, required: false
  public get keepQuery() {
    return this.getStringAttribute('keep_query');
  }

  // path - computed: true, optional: false, required: false
  private _path = new DataAviApplicationprofileDosRlProfileRlProfileClientIpFailedRequestsRateLimitActionRedirectPathList(this, "path", true);
  public get path() {
    return this._path;
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getStringAttribute('port');
  }

  // protocol - computed: true, optional: false, required: false
  public get protocol() {
    return this.getStringAttribute('protocol');
  }

  // status_code - computed: true, optional: false, required: false
  public get statusCode() {
    return this.getStringAttribute('status_code');
  }
}

export class DataAviApplicationprofileDosRlProfileRlProfileClientIpFailedRequestsRateLimitActionRedirectList extends cdktf.ComplexList {

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
  public get(index: number): DataAviApplicationprofileDosRlProfileRlProfileClientIpFailedRequestsRateLimitActionRedirectOutputReference {
    return new DataAviApplicationprofileDosRlProfileRlProfileClientIpFailedRequestsRateLimitActionRedirectOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviApplicationprofileDosRlProfileRlProfileClientIpFailedRequestsRateLimitAction {
}

export function dataAviApplicationprofileDosRlProfileRlProfileClientIpFailedRequestsRateLimitActionToTerraform(struct?: DataAviApplicationprofileDosRlProfileRlProfileClientIpFailedRequestsRateLimitAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviApplicationprofileDosRlProfileRlProfileClientIpFailedRequestsRateLimitActionToHclTerraform(struct?: DataAviApplicationprofileDosRlProfileRlProfileClientIpFailedRequestsRateLimitAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviApplicationprofileDosRlProfileRlProfileClientIpFailedRequestsRateLimitActionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviApplicationprofileDosRlProfileRlProfileClientIpFailedRequestsRateLimitAction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviApplicationprofileDosRlProfileRlProfileClientIpFailedRequestsRateLimitAction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // file - computed: true, optional: false, required: false
  private _file = new DataAviApplicationprofileDosRlProfileRlProfileClientIpFailedRequestsRateLimitActionFileList(this, "file", true);
  public get file() {
    return this._file;
  }

  // redirect - computed: true, optional: false, required: false
  private _redirect = new DataAviApplicationprofileDosRlProfileRlProfileClientIpFailedRequestsRateLimitActionRedirectList(this, "redirect", true);
  public get redirect() {
    return this._redirect;
  }

  // status_code - computed: true, optional: false, required: false
  public get statusCode() {
    return this.getStringAttribute('status_code');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataAviApplicationprofileDosRlProfileRlProfileClientIpFailedRequestsRateLimitActionList extends cdktf.ComplexList {

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
  public get(index: number): DataAviApplicationprofileDosRlProfileRlProfileClientIpFailedRequestsRateLimitActionOutputReference {
    return new DataAviApplicationprofileDosRlProfileRlProfileClientIpFailedRequestsRateLimitActionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviApplicationprofileDosRlProfileRlProfileClientIpFailedRequestsRateLimitRateLimiter {
}

export function dataAviApplicationprofileDosRlProfileRlProfileClientIpFailedRequestsRateLimitRateLimiterToTerraform(struct?: DataAviApplicationprofileDosRlProfileRlProfileClientIpFailedRequestsRateLimitRateLimiter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviApplicationprofileDosRlProfileRlProfileClientIpFailedRequestsRateLimitRateLimiterToHclTerraform(struct?: DataAviApplicationprofileDosRlProfileRlProfileClientIpFailedRequestsRateLimitRateLimiter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviApplicationprofileDosRlProfileRlProfileClientIpFailedRequestsRateLimitRateLimiterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviApplicationprofileDosRlProfileRlProfileClientIpFailedRequestsRateLimitRateLimiter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviApplicationprofileDosRlProfileRlProfileClientIpFailedRequestsRateLimitRateLimiter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // burst_sz - computed: true, optional: false, required: false
  public get burstSz() {
    return this.getStringAttribute('burst_sz');
  }

  // count - computed: true, optional: false, required: false
  public get count() {
    return this.getStringAttribute('count');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // period - computed: true, optional: false, required: false
  public get period() {
    return this.getStringAttribute('period');
  }
}

export class DataAviApplicationprofileDosRlProfileRlProfileClientIpFailedRequestsRateLimitRateLimiterList extends cdktf.ComplexList {

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
  public get(index: number): DataAviApplicationprofileDosRlProfileRlProfileClientIpFailedRequestsRateLimitRateLimiterOutputReference {
    return new DataAviApplicationprofileDosRlProfileRlProfileClientIpFailedRequestsRateLimitRateLimiterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviApplicationprofileDosRlProfileRlProfileClientIpFailedRequestsRateLimit {
}

export function dataAviApplicationprofileDosRlProfileRlProfileClientIpFailedRequestsRateLimitToTerraform(struct?: DataAviApplicationprofileDosRlProfileRlProfileClientIpFailedRequestsRateLimit): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviApplicationprofileDosRlProfileRlProfileClientIpFailedRequestsRateLimitToHclTerraform(struct?: DataAviApplicationprofileDosRlProfileRlProfileClientIpFailedRequestsRateLimit): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviApplicationprofileDosRlProfileRlProfileClientIpFailedRequestsRateLimitOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviApplicationprofileDosRlProfileRlProfileClientIpFailedRequestsRateLimit | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviApplicationprofileDosRlProfileRlProfileClientIpFailedRequestsRateLimit | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // action - computed: true, optional: false, required: false
  private _action = new DataAviApplicationprofileDosRlProfileRlProfileClientIpFailedRequestsRateLimitActionList(this, "action", true);
  public get action() {
    return this._action;
  }

  // explicit_tracking - computed: true, optional: false, required: false
  public get explicitTracking() {
    return this.getStringAttribute('explicit_tracking');
  }

  // fine_grain - computed: true, optional: false, required: false
  public get fineGrain() {
    return this.getStringAttribute('fine_grain');
  }

  // http_cookie - computed: true, optional: false, required: false
  public get httpCookie() {
    return this.getStringAttribute('http_cookie');
  }

  // http_header - computed: true, optional: false, required: false
  public get httpHeader() {
    return this.getStringAttribute('http_header');
  }

  // rate_limiter - computed: true, optional: false, required: false
  private _rateLimiter = new DataAviApplicationprofileDosRlProfileRlProfileClientIpFailedRequestsRateLimitRateLimiterList(this, "rate_limiter", true);
  public get rateLimiter() {
    return this._rateLimiter;
  }
}

export class DataAviApplicationprofileDosRlProfileRlProfileClientIpFailedRequestsRateLimitList extends cdktf.ComplexList {

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
  public get(index: number): DataAviApplicationprofileDosRlProfileRlProfileClientIpFailedRequestsRateLimitOutputReference {
    return new DataAviApplicationprofileDosRlProfileRlProfileClientIpFailedRequestsRateLimitOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviApplicationprofileDosRlProfileRlProfileClientIpRequestsRateLimitActionFile {
}

export function dataAviApplicationprofileDosRlProfileRlProfileClientIpRequestsRateLimitActionFileToTerraform(struct?: DataAviApplicationprofileDosRlProfileRlProfileClientIpRequestsRateLimitActionFile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviApplicationprofileDosRlProfileRlProfileClientIpRequestsRateLimitActionFileToHclTerraform(struct?: DataAviApplicationprofileDosRlProfileRlProfileClientIpRequestsRateLimitActionFile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviApplicationprofileDosRlProfileRlProfileClientIpRequestsRateLimitActionFileOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviApplicationprofileDosRlProfileRlProfileClientIpRequestsRateLimitActionFile | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviApplicationprofileDosRlProfileRlProfileClientIpRequestsRateLimitActionFile | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // content_type - computed: true, optional: false, required: false
  public get contentType() {
    return this.getStringAttribute('content_type');
  }

  // file_content - computed: true, optional: false, required: false
  public get fileContent() {
    return this.getStringAttribute('file_content');
  }

  // file_length - computed: true, optional: false, required: false
  public get fileLength() {
    return this.getStringAttribute('file_length');
  }
}

export class DataAviApplicationprofileDosRlProfileRlProfileClientIpRequestsRateLimitActionFileList extends cdktf.ComplexList {

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
  public get(index: number): DataAviApplicationprofileDosRlProfileRlProfileClientIpRequestsRateLimitActionFileOutputReference {
    return new DataAviApplicationprofileDosRlProfileRlProfileClientIpRequestsRateLimitActionFileOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviApplicationprofileDosRlProfileRlProfileClientIpRequestsRateLimitActionRedirectHostTokens {
}

export function dataAviApplicationprofileDosRlProfileRlProfileClientIpRequestsRateLimitActionRedirectHostTokensToTerraform(struct?: DataAviApplicationprofileDosRlProfileRlProfileClientIpRequestsRateLimitActionRedirectHostTokens): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviApplicationprofileDosRlProfileRlProfileClientIpRequestsRateLimitActionRedirectHostTokensToHclTerraform(struct?: DataAviApplicationprofileDosRlProfileRlProfileClientIpRequestsRateLimitActionRedirectHostTokens): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviApplicationprofileDosRlProfileRlProfileClientIpRequestsRateLimitActionRedirectHostTokensOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviApplicationprofileDosRlProfileRlProfileClientIpRequestsRateLimitActionRedirectHostTokens | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviApplicationprofileDosRlProfileRlProfileClientIpRequestsRateLimitActionRedirectHostTokens | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // end_index - computed: true, optional: false, required: false
  public get endIndex() {
    return this.getStringAttribute('end_index');
  }

  // start_index - computed: true, optional: false, required: false
  public get startIndex() {
    return this.getStringAttribute('start_index');
  }

  // str_value - computed: true, optional: false, required: false
  public get strValue() {
    return this.getStringAttribute('str_value');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataAviApplicationprofileDosRlProfileRlProfileClientIpRequestsRateLimitActionRedirectHostTokensList extends cdktf.ComplexList {

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
  public get(index: number): DataAviApplicationprofileDosRlProfileRlProfileClientIpRequestsRateLimitActionRedirectHostTokensOutputReference {
    return new DataAviApplicationprofileDosRlProfileRlProfileClientIpRequestsRateLimitActionRedirectHostTokensOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviApplicationprofileDosRlProfileRlProfileClientIpRequestsRateLimitActionRedirectHost {
}

export function dataAviApplicationprofileDosRlProfileRlProfileClientIpRequestsRateLimitActionRedirectHostToTerraform(struct?: DataAviApplicationprofileDosRlProfileRlProfileClientIpRequestsRateLimitActionRedirectHost): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviApplicationprofileDosRlProfileRlProfileClientIpRequestsRateLimitActionRedirectHostToHclTerraform(struct?: DataAviApplicationprofileDosRlProfileRlProfileClientIpRequestsRateLimitActionRedirectHost): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviApplicationprofileDosRlProfileRlProfileClientIpRequestsRateLimitActionRedirectHostOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviApplicationprofileDosRlProfileRlProfileClientIpRequestsRateLimitActionRedirectHost | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviApplicationprofileDosRlProfileRlProfileClientIpRequestsRateLimitActionRedirectHost | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // tokens - computed: true, optional: false, required: false
  private _tokens = new DataAviApplicationprofileDosRlProfileRlProfileClientIpRequestsRateLimitActionRedirectHostTokensList(this, "tokens", false);
  public get tokens() {
    return this._tokens;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataAviApplicationprofileDosRlProfileRlProfileClientIpRequestsRateLimitActionRedirectHostList extends cdktf.ComplexList {

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
  public get(index: number): DataAviApplicationprofileDosRlProfileRlProfileClientIpRequestsRateLimitActionRedirectHostOutputReference {
    return new DataAviApplicationprofileDosRlProfileRlProfileClientIpRequestsRateLimitActionRedirectHostOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviApplicationprofileDosRlProfileRlProfileClientIpRequestsRateLimitActionRedirectPathTokens {
}

export function dataAviApplicationprofileDosRlProfileRlProfileClientIpRequestsRateLimitActionRedirectPathTokensToTerraform(struct?: DataAviApplicationprofileDosRlProfileRlProfileClientIpRequestsRateLimitActionRedirectPathTokens): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviApplicationprofileDosRlProfileRlProfileClientIpRequestsRateLimitActionRedirectPathTokensToHclTerraform(struct?: DataAviApplicationprofileDosRlProfileRlProfileClientIpRequestsRateLimitActionRedirectPathTokens): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviApplicationprofileDosRlProfileRlProfileClientIpRequestsRateLimitActionRedirectPathTokensOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviApplicationprofileDosRlProfileRlProfileClientIpRequestsRateLimitActionRedirectPathTokens | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviApplicationprofileDosRlProfileRlProfileClientIpRequestsRateLimitActionRedirectPathTokens | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // end_index - computed: true, optional: false, required: false
  public get endIndex() {
    return this.getStringAttribute('end_index');
  }

  // start_index - computed: true, optional: false, required: false
  public get startIndex() {
    return this.getStringAttribute('start_index');
  }

  // str_value - computed: true, optional: false, required: false
  public get strValue() {
    return this.getStringAttribute('str_value');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataAviApplicationprofileDosRlProfileRlProfileClientIpRequestsRateLimitActionRedirectPathTokensList extends cdktf.ComplexList {

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
  public get(index: number): DataAviApplicationprofileDosRlProfileRlProfileClientIpRequestsRateLimitActionRedirectPathTokensOutputReference {
    return new DataAviApplicationprofileDosRlProfileRlProfileClientIpRequestsRateLimitActionRedirectPathTokensOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviApplicationprofileDosRlProfileRlProfileClientIpRequestsRateLimitActionRedirectPath {
}

export function dataAviApplicationprofileDosRlProfileRlProfileClientIpRequestsRateLimitActionRedirectPathToTerraform(struct?: DataAviApplicationprofileDosRlProfileRlProfileClientIpRequestsRateLimitActionRedirectPath): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviApplicationprofileDosRlProfileRlProfileClientIpRequestsRateLimitActionRedirectPathToHclTerraform(struct?: DataAviApplicationprofileDosRlProfileRlProfileClientIpRequestsRateLimitActionRedirectPath): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviApplicationprofileDosRlProfileRlProfileClientIpRequestsRateLimitActionRedirectPathOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviApplicationprofileDosRlProfileRlProfileClientIpRequestsRateLimitActionRedirectPath | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviApplicationprofileDosRlProfileRlProfileClientIpRequestsRateLimitActionRedirectPath | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // tokens - computed: true, optional: false, required: false
  private _tokens = new DataAviApplicationprofileDosRlProfileRlProfileClientIpRequestsRateLimitActionRedirectPathTokensList(this, "tokens", false);
  public get tokens() {
    return this._tokens;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataAviApplicationprofileDosRlProfileRlProfileClientIpRequestsRateLimitActionRedirectPathList extends cdktf.ComplexList {

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
  public get(index: number): DataAviApplicationprofileDosRlProfileRlProfileClientIpRequestsRateLimitActionRedirectPathOutputReference {
    return new DataAviApplicationprofileDosRlProfileRlProfileClientIpRequestsRateLimitActionRedirectPathOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviApplicationprofileDosRlProfileRlProfileClientIpRequestsRateLimitActionRedirect {
}

export function dataAviApplicationprofileDosRlProfileRlProfileClientIpRequestsRateLimitActionRedirectToTerraform(struct?: DataAviApplicationprofileDosRlProfileRlProfileClientIpRequestsRateLimitActionRedirect): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviApplicationprofileDosRlProfileRlProfileClientIpRequestsRateLimitActionRedirectToHclTerraform(struct?: DataAviApplicationprofileDosRlProfileRlProfileClientIpRequestsRateLimitActionRedirect): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviApplicationprofileDosRlProfileRlProfileClientIpRequestsRateLimitActionRedirectOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviApplicationprofileDosRlProfileRlProfileClientIpRequestsRateLimitActionRedirect | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviApplicationprofileDosRlProfileRlProfileClientIpRequestsRateLimitActionRedirect | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // add_string - computed: true, optional: false, required: false
  public get addString() {
    return this.getStringAttribute('add_string');
  }

  // host - computed: true, optional: false, required: false
  private _host = new DataAviApplicationprofileDosRlProfileRlProfileClientIpRequestsRateLimitActionRedirectHostList(this, "host", true);
  public get host() {
    return this._host;
  }

  // keep_query - computed: true, optional: false, required: false
  public get keepQuery() {
    return this.getStringAttribute('keep_query');
  }

  // path - computed: true, optional: false, required: false
  private _path = new DataAviApplicationprofileDosRlProfileRlProfileClientIpRequestsRateLimitActionRedirectPathList(this, "path", true);
  public get path() {
    return this._path;
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getStringAttribute('port');
  }

  // protocol - computed: true, optional: false, required: false
  public get protocol() {
    return this.getStringAttribute('protocol');
  }

  // status_code - computed: true, optional: false, required: false
  public get statusCode() {
    return this.getStringAttribute('status_code');
  }
}

export class DataAviApplicationprofileDosRlProfileRlProfileClientIpRequestsRateLimitActionRedirectList extends cdktf.ComplexList {

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
  public get(index: number): DataAviApplicationprofileDosRlProfileRlProfileClientIpRequestsRateLimitActionRedirectOutputReference {
    return new DataAviApplicationprofileDosRlProfileRlProfileClientIpRequestsRateLimitActionRedirectOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviApplicationprofileDosRlProfileRlProfileClientIpRequestsRateLimitAction {
}

export function dataAviApplicationprofileDosRlProfileRlProfileClientIpRequestsRateLimitActionToTerraform(struct?: DataAviApplicationprofileDosRlProfileRlProfileClientIpRequestsRateLimitAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviApplicationprofileDosRlProfileRlProfileClientIpRequestsRateLimitActionToHclTerraform(struct?: DataAviApplicationprofileDosRlProfileRlProfileClientIpRequestsRateLimitAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviApplicationprofileDosRlProfileRlProfileClientIpRequestsRateLimitActionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviApplicationprofileDosRlProfileRlProfileClientIpRequestsRateLimitAction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviApplicationprofileDosRlProfileRlProfileClientIpRequestsRateLimitAction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // file - computed: true, optional: false, required: false
  private _file = new DataAviApplicationprofileDosRlProfileRlProfileClientIpRequestsRateLimitActionFileList(this, "file", true);
  public get file() {
    return this._file;
  }

  // redirect - computed: true, optional: false, required: false
  private _redirect = new DataAviApplicationprofileDosRlProfileRlProfileClientIpRequestsRateLimitActionRedirectList(this, "redirect", true);
  public get redirect() {
    return this._redirect;
  }

  // status_code - computed: true, optional: false, required: false
  public get statusCode() {
    return this.getStringAttribute('status_code');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataAviApplicationprofileDosRlProfileRlProfileClientIpRequestsRateLimitActionList extends cdktf.ComplexList {

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
  public get(index: number): DataAviApplicationprofileDosRlProfileRlProfileClientIpRequestsRateLimitActionOutputReference {
    return new DataAviApplicationprofileDosRlProfileRlProfileClientIpRequestsRateLimitActionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviApplicationprofileDosRlProfileRlProfileClientIpRequestsRateLimitRateLimiter {
}

export function dataAviApplicationprofileDosRlProfileRlProfileClientIpRequestsRateLimitRateLimiterToTerraform(struct?: DataAviApplicationprofileDosRlProfileRlProfileClientIpRequestsRateLimitRateLimiter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviApplicationprofileDosRlProfileRlProfileClientIpRequestsRateLimitRateLimiterToHclTerraform(struct?: DataAviApplicationprofileDosRlProfileRlProfileClientIpRequestsRateLimitRateLimiter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviApplicationprofileDosRlProfileRlProfileClientIpRequestsRateLimitRateLimiterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviApplicationprofileDosRlProfileRlProfileClientIpRequestsRateLimitRateLimiter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviApplicationprofileDosRlProfileRlProfileClientIpRequestsRateLimitRateLimiter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // burst_sz - computed: true, optional: false, required: false
  public get burstSz() {
    return this.getStringAttribute('burst_sz');
  }

  // count - computed: true, optional: false, required: false
  public get count() {
    return this.getStringAttribute('count');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // period - computed: true, optional: false, required: false
  public get period() {
    return this.getStringAttribute('period');
  }
}

export class DataAviApplicationprofileDosRlProfileRlProfileClientIpRequestsRateLimitRateLimiterList extends cdktf.ComplexList {

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
  public get(index: number): DataAviApplicationprofileDosRlProfileRlProfileClientIpRequestsRateLimitRateLimiterOutputReference {
    return new DataAviApplicationprofileDosRlProfileRlProfileClientIpRequestsRateLimitRateLimiterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviApplicationprofileDosRlProfileRlProfileClientIpRequestsRateLimit {
}

export function dataAviApplicationprofileDosRlProfileRlProfileClientIpRequestsRateLimitToTerraform(struct?: DataAviApplicationprofileDosRlProfileRlProfileClientIpRequestsRateLimit): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviApplicationprofileDosRlProfileRlProfileClientIpRequestsRateLimitToHclTerraform(struct?: DataAviApplicationprofileDosRlProfileRlProfileClientIpRequestsRateLimit): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviApplicationprofileDosRlProfileRlProfileClientIpRequestsRateLimitOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviApplicationprofileDosRlProfileRlProfileClientIpRequestsRateLimit | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviApplicationprofileDosRlProfileRlProfileClientIpRequestsRateLimit | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // action - computed: true, optional: false, required: false
  private _action = new DataAviApplicationprofileDosRlProfileRlProfileClientIpRequestsRateLimitActionList(this, "action", true);
  public get action() {
    return this._action;
  }

  // explicit_tracking - computed: true, optional: false, required: false
  public get explicitTracking() {
    return this.getStringAttribute('explicit_tracking');
  }

  // fine_grain - computed: true, optional: false, required: false
  public get fineGrain() {
    return this.getStringAttribute('fine_grain');
  }

  // http_cookie - computed: true, optional: false, required: false
  public get httpCookie() {
    return this.getStringAttribute('http_cookie');
  }

  // http_header - computed: true, optional: false, required: false
  public get httpHeader() {
    return this.getStringAttribute('http_header');
  }

  // rate_limiter - computed: true, optional: false, required: false
  private _rateLimiter = new DataAviApplicationprofileDosRlProfileRlProfileClientIpRequestsRateLimitRateLimiterList(this, "rate_limiter", true);
  public get rateLimiter() {
    return this._rateLimiter;
  }
}

export class DataAviApplicationprofileDosRlProfileRlProfileClientIpRequestsRateLimitList extends cdktf.ComplexList {

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
  public get(index: number): DataAviApplicationprofileDosRlProfileRlProfileClientIpRequestsRateLimitOutputReference {
    return new DataAviApplicationprofileDosRlProfileRlProfileClientIpRequestsRateLimitOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviApplicationprofileDosRlProfileRlProfileClientIpScannersRequestsRateLimitActionFile {
}

export function dataAviApplicationprofileDosRlProfileRlProfileClientIpScannersRequestsRateLimitActionFileToTerraform(struct?: DataAviApplicationprofileDosRlProfileRlProfileClientIpScannersRequestsRateLimitActionFile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviApplicationprofileDosRlProfileRlProfileClientIpScannersRequestsRateLimitActionFileToHclTerraform(struct?: DataAviApplicationprofileDosRlProfileRlProfileClientIpScannersRequestsRateLimitActionFile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviApplicationprofileDosRlProfileRlProfileClientIpScannersRequestsRateLimitActionFileOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviApplicationprofileDosRlProfileRlProfileClientIpScannersRequestsRateLimitActionFile | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviApplicationprofileDosRlProfileRlProfileClientIpScannersRequestsRateLimitActionFile | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // content_type - computed: true, optional: false, required: false
  public get contentType() {
    return this.getStringAttribute('content_type');
  }

  // file_content - computed: true, optional: false, required: false
  public get fileContent() {
    return this.getStringAttribute('file_content');
  }

  // file_length - computed: true, optional: false, required: false
  public get fileLength() {
    return this.getStringAttribute('file_length');
  }
}

export class DataAviApplicationprofileDosRlProfileRlProfileClientIpScannersRequestsRateLimitActionFileList extends cdktf.ComplexList {

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
  public get(index: number): DataAviApplicationprofileDosRlProfileRlProfileClientIpScannersRequestsRateLimitActionFileOutputReference {
    return new DataAviApplicationprofileDosRlProfileRlProfileClientIpScannersRequestsRateLimitActionFileOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviApplicationprofileDosRlProfileRlProfileClientIpScannersRequestsRateLimitActionRedirectHostTokens {
}

export function dataAviApplicationprofileDosRlProfileRlProfileClientIpScannersRequestsRateLimitActionRedirectHostTokensToTerraform(struct?: DataAviApplicationprofileDosRlProfileRlProfileClientIpScannersRequestsRateLimitActionRedirectHostTokens): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviApplicationprofileDosRlProfileRlProfileClientIpScannersRequestsRateLimitActionRedirectHostTokensToHclTerraform(struct?: DataAviApplicationprofileDosRlProfileRlProfileClientIpScannersRequestsRateLimitActionRedirectHostTokens): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviApplicationprofileDosRlProfileRlProfileClientIpScannersRequestsRateLimitActionRedirectHostTokensOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviApplicationprofileDosRlProfileRlProfileClientIpScannersRequestsRateLimitActionRedirectHostTokens | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviApplicationprofileDosRlProfileRlProfileClientIpScannersRequestsRateLimitActionRedirectHostTokens | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // end_index - computed: true, optional: false, required: false
  public get endIndex() {
    return this.getStringAttribute('end_index');
  }

  // start_index - computed: true, optional: false, required: false
  public get startIndex() {
    return this.getStringAttribute('start_index');
  }

  // str_value - computed: true, optional: false, required: false
  public get strValue() {
    return this.getStringAttribute('str_value');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataAviApplicationprofileDosRlProfileRlProfileClientIpScannersRequestsRateLimitActionRedirectHostTokensList extends cdktf.ComplexList {

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
  public get(index: number): DataAviApplicationprofileDosRlProfileRlProfileClientIpScannersRequestsRateLimitActionRedirectHostTokensOutputReference {
    return new DataAviApplicationprofileDosRlProfileRlProfileClientIpScannersRequestsRateLimitActionRedirectHostTokensOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviApplicationprofileDosRlProfileRlProfileClientIpScannersRequestsRateLimitActionRedirectHost {
}

export function dataAviApplicationprofileDosRlProfileRlProfileClientIpScannersRequestsRateLimitActionRedirectHostToTerraform(struct?: DataAviApplicationprofileDosRlProfileRlProfileClientIpScannersRequestsRateLimitActionRedirectHost): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviApplicationprofileDosRlProfileRlProfileClientIpScannersRequestsRateLimitActionRedirectHostToHclTerraform(struct?: DataAviApplicationprofileDosRlProfileRlProfileClientIpScannersRequestsRateLimitActionRedirectHost): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviApplicationprofileDosRlProfileRlProfileClientIpScannersRequestsRateLimitActionRedirectHostOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviApplicationprofileDosRlProfileRlProfileClientIpScannersRequestsRateLimitActionRedirectHost | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviApplicationprofileDosRlProfileRlProfileClientIpScannersRequestsRateLimitActionRedirectHost | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // tokens - computed: true, optional: false, required: false
  private _tokens = new DataAviApplicationprofileDosRlProfileRlProfileClientIpScannersRequestsRateLimitActionRedirectHostTokensList(this, "tokens", false);
  public get tokens() {
    return this._tokens;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataAviApplicationprofileDosRlProfileRlProfileClientIpScannersRequestsRateLimitActionRedirectHostList extends cdktf.ComplexList {

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
  public get(index: number): DataAviApplicationprofileDosRlProfileRlProfileClientIpScannersRequestsRateLimitActionRedirectHostOutputReference {
    return new DataAviApplicationprofileDosRlProfileRlProfileClientIpScannersRequestsRateLimitActionRedirectHostOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviApplicationprofileDosRlProfileRlProfileClientIpScannersRequestsRateLimitActionRedirectPathTokens {
}

export function dataAviApplicationprofileDosRlProfileRlProfileClientIpScannersRequestsRateLimitActionRedirectPathTokensToTerraform(struct?: DataAviApplicationprofileDosRlProfileRlProfileClientIpScannersRequestsRateLimitActionRedirectPathTokens): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviApplicationprofileDosRlProfileRlProfileClientIpScannersRequestsRateLimitActionRedirectPathTokensToHclTerraform(struct?: DataAviApplicationprofileDosRlProfileRlProfileClientIpScannersRequestsRateLimitActionRedirectPathTokens): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviApplicationprofileDosRlProfileRlProfileClientIpScannersRequestsRateLimitActionRedirectPathTokensOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviApplicationprofileDosRlProfileRlProfileClientIpScannersRequestsRateLimitActionRedirectPathTokens | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviApplicationprofileDosRlProfileRlProfileClientIpScannersRequestsRateLimitActionRedirectPathTokens | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // end_index - computed: true, optional: false, required: false
  public get endIndex() {
    return this.getStringAttribute('end_index');
  }

  // start_index - computed: true, optional: false, required: false
  public get startIndex() {
    return this.getStringAttribute('start_index');
  }

  // str_value - computed: true, optional: false, required: false
  public get strValue() {
    return this.getStringAttribute('str_value');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataAviApplicationprofileDosRlProfileRlProfileClientIpScannersRequestsRateLimitActionRedirectPathTokensList extends cdktf.ComplexList {

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
  public get(index: number): DataAviApplicationprofileDosRlProfileRlProfileClientIpScannersRequestsRateLimitActionRedirectPathTokensOutputReference {
    return new DataAviApplicationprofileDosRlProfileRlProfileClientIpScannersRequestsRateLimitActionRedirectPathTokensOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviApplicationprofileDosRlProfileRlProfileClientIpScannersRequestsRateLimitActionRedirectPath {
}

export function dataAviApplicationprofileDosRlProfileRlProfileClientIpScannersRequestsRateLimitActionRedirectPathToTerraform(struct?: DataAviApplicationprofileDosRlProfileRlProfileClientIpScannersRequestsRateLimitActionRedirectPath): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviApplicationprofileDosRlProfileRlProfileClientIpScannersRequestsRateLimitActionRedirectPathToHclTerraform(struct?: DataAviApplicationprofileDosRlProfileRlProfileClientIpScannersRequestsRateLimitActionRedirectPath): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviApplicationprofileDosRlProfileRlProfileClientIpScannersRequestsRateLimitActionRedirectPathOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviApplicationprofileDosRlProfileRlProfileClientIpScannersRequestsRateLimitActionRedirectPath | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviApplicationprofileDosRlProfileRlProfileClientIpScannersRequestsRateLimitActionRedirectPath | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // tokens - computed: true, optional: false, required: false
  private _tokens = new DataAviApplicationprofileDosRlProfileRlProfileClientIpScannersRequestsRateLimitActionRedirectPathTokensList(this, "tokens", false);
  public get tokens() {
    return this._tokens;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataAviApplicationprofileDosRlProfileRlProfileClientIpScannersRequestsRateLimitActionRedirectPathList extends cdktf.ComplexList {

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
  public get(index: number): DataAviApplicationprofileDosRlProfileRlProfileClientIpScannersRequestsRateLimitActionRedirectPathOutputReference {
    return new DataAviApplicationprofileDosRlProfileRlProfileClientIpScannersRequestsRateLimitActionRedirectPathOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviApplicationprofileDosRlProfileRlProfileClientIpScannersRequestsRateLimitActionRedirect {
}

export function dataAviApplicationprofileDosRlProfileRlProfileClientIpScannersRequestsRateLimitActionRedirectToTerraform(struct?: DataAviApplicationprofileDosRlProfileRlProfileClientIpScannersRequestsRateLimitActionRedirect): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviApplicationprofileDosRlProfileRlProfileClientIpScannersRequestsRateLimitActionRedirectToHclTerraform(struct?: DataAviApplicationprofileDosRlProfileRlProfileClientIpScannersRequestsRateLimitActionRedirect): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviApplicationprofileDosRlProfileRlProfileClientIpScannersRequestsRateLimitActionRedirectOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviApplicationprofileDosRlProfileRlProfileClientIpScannersRequestsRateLimitActionRedirect | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviApplicationprofileDosRlProfileRlProfileClientIpScannersRequestsRateLimitActionRedirect | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // add_string - computed: true, optional: false, required: false
  public get addString() {
    return this.getStringAttribute('add_string');
  }

  // host - computed: true, optional: false, required: false
  private _host = new DataAviApplicationprofileDosRlProfileRlProfileClientIpScannersRequestsRateLimitActionRedirectHostList(this, "host", true);
  public get host() {
    return this._host;
  }

  // keep_query - computed: true, optional: false, required: false
  public get keepQuery() {
    return this.getStringAttribute('keep_query');
  }

  // path - computed: true, optional: false, required: false
  private _path = new DataAviApplicationprofileDosRlProfileRlProfileClientIpScannersRequestsRateLimitActionRedirectPathList(this, "path", true);
  public get path() {
    return this._path;
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getStringAttribute('port');
  }

  // protocol - computed: true, optional: false, required: false
  public get protocol() {
    return this.getStringAttribute('protocol');
  }

  // status_code - computed: true, optional: false, required: false
  public get statusCode() {
    return this.getStringAttribute('status_code');
  }
}

export class DataAviApplicationprofileDosRlProfileRlProfileClientIpScannersRequestsRateLimitActionRedirectList extends cdktf.ComplexList {

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
  public get(index: number): DataAviApplicationprofileDosRlProfileRlProfileClientIpScannersRequestsRateLimitActionRedirectOutputReference {
    return new DataAviApplicationprofileDosRlProfileRlProfileClientIpScannersRequestsRateLimitActionRedirectOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviApplicationprofileDosRlProfileRlProfileClientIpScannersRequestsRateLimitAction {
}

export function dataAviApplicationprofileDosRlProfileRlProfileClientIpScannersRequestsRateLimitActionToTerraform(struct?: DataAviApplicationprofileDosRlProfileRlProfileClientIpScannersRequestsRateLimitAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviApplicationprofileDosRlProfileRlProfileClientIpScannersRequestsRateLimitActionToHclTerraform(struct?: DataAviApplicationprofileDosRlProfileRlProfileClientIpScannersRequestsRateLimitAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviApplicationprofileDosRlProfileRlProfileClientIpScannersRequestsRateLimitActionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviApplicationprofileDosRlProfileRlProfileClientIpScannersRequestsRateLimitAction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviApplicationprofileDosRlProfileRlProfileClientIpScannersRequestsRateLimitAction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // file - computed: true, optional: false, required: false
  private _file = new DataAviApplicationprofileDosRlProfileRlProfileClientIpScannersRequestsRateLimitActionFileList(this, "file", true);
  public get file() {
    return this._file;
  }

  // redirect - computed: true, optional: false, required: false
  private _redirect = new DataAviApplicationprofileDosRlProfileRlProfileClientIpScannersRequestsRateLimitActionRedirectList(this, "redirect", true);
  public get redirect() {
    return this._redirect;
  }

  // status_code - computed: true, optional: false, required: false
  public get statusCode() {
    return this.getStringAttribute('status_code');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataAviApplicationprofileDosRlProfileRlProfileClientIpScannersRequestsRateLimitActionList extends cdktf.ComplexList {

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
  public get(index: number): DataAviApplicationprofileDosRlProfileRlProfileClientIpScannersRequestsRateLimitActionOutputReference {
    return new DataAviApplicationprofileDosRlProfileRlProfileClientIpScannersRequestsRateLimitActionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviApplicationprofileDosRlProfileRlProfileClientIpScannersRequestsRateLimitRateLimiter {
}

export function dataAviApplicationprofileDosRlProfileRlProfileClientIpScannersRequestsRateLimitRateLimiterToTerraform(struct?: DataAviApplicationprofileDosRlProfileRlProfileClientIpScannersRequestsRateLimitRateLimiter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviApplicationprofileDosRlProfileRlProfileClientIpScannersRequestsRateLimitRateLimiterToHclTerraform(struct?: DataAviApplicationprofileDosRlProfileRlProfileClientIpScannersRequestsRateLimitRateLimiter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviApplicationprofileDosRlProfileRlProfileClientIpScannersRequestsRateLimitRateLimiterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviApplicationprofileDosRlProfileRlProfileClientIpScannersRequestsRateLimitRateLimiter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviApplicationprofileDosRlProfileRlProfileClientIpScannersRequestsRateLimitRateLimiter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // burst_sz - computed: true, optional: false, required: false
  public get burstSz() {
    return this.getStringAttribute('burst_sz');
  }

  // count - computed: true, optional: false, required: false
  public get count() {
    return this.getStringAttribute('count');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // period - computed: true, optional: false, required: false
  public get period() {
    return this.getStringAttribute('period');
  }
}

export class DataAviApplicationprofileDosRlProfileRlProfileClientIpScannersRequestsRateLimitRateLimiterList extends cdktf.ComplexList {

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
  public get(index: number): DataAviApplicationprofileDosRlProfileRlProfileClientIpScannersRequestsRateLimitRateLimiterOutputReference {
    return new DataAviApplicationprofileDosRlProfileRlProfileClientIpScannersRequestsRateLimitRateLimiterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviApplicationprofileDosRlProfileRlProfileClientIpScannersRequestsRateLimit {
}

export function dataAviApplicationprofileDosRlProfileRlProfileClientIpScannersRequestsRateLimitToTerraform(struct?: DataAviApplicationprofileDosRlProfileRlProfileClientIpScannersRequestsRateLimit): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviApplicationprofileDosRlProfileRlProfileClientIpScannersRequestsRateLimitToHclTerraform(struct?: DataAviApplicationprofileDosRlProfileRlProfileClientIpScannersRequestsRateLimit): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviApplicationprofileDosRlProfileRlProfileClientIpScannersRequestsRateLimitOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviApplicationprofileDosRlProfileRlProfileClientIpScannersRequestsRateLimit | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviApplicationprofileDosRlProfileRlProfileClientIpScannersRequestsRateLimit | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // action - computed: true, optional: false, required: false
  private _action = new DataAviApplicationprofileDosRlProfileRlProfileClientIpScannersRequestsRateLimitActionList(this, "action", true);
  public get action() {
    return this._action;
  }

  // explicit_tracking - computed: true, optional: false, required: false
  public get explicitTracking() {
    return this.getStringAttribute('explicit_tracking');
  }

  // fine_grain - computed: true, optional: false, required: false
  public get fineGrain() {
    return this.getStringAttribute('fine_grain');
  }

  // http_cookie - computed: true, optional: false, required: false
  public get httpCookie() {
    return this.getStringAttribute('http_cookie');
  }

  // http_header - computed: true, optional: false, required: false
  public get httpHeader() {
    return this.getStringAttribute('http_header');
  }

  // rate_limiter - computed: true, optional: false, required: false
  private _rateLimiter = new DataAviApplicationprofileDosRlProfileRlProfileClientIpScannersRequestsRateLimitRateLimiterList(this, "rate_limiter", true);
  public get rateLimiter() {
    return this._rateLimiter;
  }
}

export class DataAviApplicationprofileDosRlProfileRlProfileClientIpScannersRequestsRateLimitList extends cdktf.ComplexList {

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
  public get(index: number): DataAviApplicationprofileDosRlProfileRlProfileClientIpScannersRequestsRateLimitOutputReference {
    return new DataAviApplicationprofileDosRlProfileRlProfileClientIpScannersRequestsRateLimitOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviApplicationprofileDosRlProfileRlProfileClientIpToUriFailedRequestsRateLimitActionFile {
}

export function dataAviApplicationprofileDosRlProfileRlProfileClientIpToUriFailedRequestsRateLimitActionFileToTerraform(struct?: DataAviApplicationprofileDosRlProfileRlProfileClientIpToUriFailedRequestsRateLimitActionFile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviApplicationprofileDosRlProfileRlProfileClientIpToUriFailedRequestsRateLimitActionFileToHclTerraform(struct?: DataAviApplicationprofileDosRlProfileRlProfileClientIpToUriFailedRequestsRateLimitActionFile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviApplicationprofileDosRlProfileRlProfileClientIpToUriFailedRequestsRateLimitActionFileOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviApplicationprofileDosRlProfileRlProfileClientIpToUriFailedRequestsRateLimitActionFile | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviApplicationprofileDosRlProfileRlProfileClientIpToUriFailedRequestsRateLimitActionFile | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // content_type - computed: true, optional: false, required: false
  public get contentType() {
    return this.getStringAttribute('content_type');
  }

  // file_content - computed: true, optional: false, required: false
  public get fileContent() {
    return this.getStringAttribute('file_content');
  }

  // file_length - computed: true, optional: false, required: false
  public get fileLength() {
    return this.getStringAttribute('file_length');
  }
}

export class DataAviApplicationprofileDosRlProfileRlProfileClientIpToUriFailedRequestsRateLimitActionFileList extends cdktf.ComplexList {

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
  public get(index: number): DataAviApplicationprofileDosRlProfileRlProfileClientIpToUriFailedRequestsRateLimitActionFileOutputReference {
    return new DataAviApplicationprofileDosRlProfileRlProfileClientIpToUriFailedRequestsRateLimitActionFileOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviApplicationprofileDosRlProfileRlProfileClientIpToUriFailedRequestsRateLimitActionRedirectHostTokens {
}

export function dataAviApplicationprofileDosRlProfileRlProfileClientIpToUriFailedRequestsRateLimitActionRedirectHostTokensToTerraform(struct?: DataAviApplicationprofileDosRlProfileRlProfileClientIpToUriFailedRequestsRateLimitActionRedirectHostTokens): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviApplicationprofileDosRlProfileRlProfileClientIpToUriFailedRequestsRateLimitActionRedirectHostTokensToHclTerraform(struct?: DataAviApplicationprofileDosRlProfileRlProfileClientIpToUriFailedRequestsRateLimitActionRedirectHostTokens): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviApplicationprofileDosRlProfileRlProfileClientIpToUriFailedRequestsRateLimitActionRedirectHostTokensOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviApplicationprofileDosRlProfileRlProfileClientIpToUriFailedRequestsRateLimitActionRedirectHostTokens | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviApplicationprofileDosRlProfileRlProfileClientIpToUriFailedRequestsRateLimitActionRedirectHostTokens | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // end_index - computed: true, optional: false, required: false
  public get endIndex() {
    return this.getStringAttribute('end_index');
  }

  // start_index - computed: true, optional: false, required: false
  public get startIndex() {
    return this.getStringAttribute('start_index');
  }

  // str_value - computed: true, optional: false, required: false
  public get strValue() {
    return this.getStringAttribute('str_value');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataAviApplicationprofileDosRlProfileRlProfileClientIpToUriFailedRequestsRateLimitActionRedirectHostTokensList extends cdktf.ComplexList {

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
  public get(index: number): DataAviApplicationprofileDosRlProfileRlProfileClientIpToUriFailedRequestsRateLimitActionRedirectHostTokensOutputReference {
    return new DataAviApplicationprofileDosRlProfileRlProfileClientIpToUriFailedRequestsRateLimitActionRedirectHostTokensOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviApplicationprofileDosRlProfileRlProfileClientIpToUriFailedRequestsRateLimitActionRedirectHost {
}

export function dataAviApplicationprofileDosRlProfileRlProfileClientIpToUriFailedRequestsRateLimitActionRedirectHostToTerraform(struct?: DataAviApplicationprofileDosRlProfileRlProfileClientIpToUriFailedRequestsRateLimitActionRedirectHost): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviApplicationprofileDosRlProfileRlProfileClientIpToUriFailedRequestsRateLimitActionRedirectHostToHclTerraform(struct?: DataAviApplicationprofileDosRlProfileRlProfileClientIpToUriFailedRequestsRateLimitActionRedirectHost): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviApplicationprofileDosRlProfileRlProfileClientIpToUriFailedRequestsRateLimitActionRedirectHostOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviApplicationprofileDosRlProfileRlProfileClientIpToUriFailedRequestsRateLimitActionRedirectHost | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviApplicationprofileDosRlProfileRlProfileClientIpToUriFailedRequestsRateLimitActionRedirectHost | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // tokens - computed: true, optional: false, required: false
  private _tokens = new DataAviApplicationprofileDosRlProfileRlProfileClientIpToUriFailedRequestsRateLimitActionRedirectHostTokensList(this, "tokens", false);
  public get tokens() {
    return this._tokens;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataAviApplicationprofileDosRlProfileRlProfileClientIpToUriFailedRequestsRateLimitActionRedirectHostList extends cdktf.ComplexList {

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
  public get(index: number): DataAviApplicationprofileDosRlProfileRlProfileClientIpToUriFailedRequestsRateLimitActionRedirectHostOutputReference {
    return new DataAviApplicationprofileDosRlProfileRlProfileClientIpToUriFailedRequestsRateLimitActionRedirectHostOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviApplicationprofileDosRlProfileRlProfileClientIpToUriFailedRequestsRateLimitActionRedirectPathTokens {
}

export function dataAviApplicationprofileDosRlProfileRlProfileClientIpToUriFailedRequestsRateLimitActionRedirectPathTokensToTerraform(struct?: DataAviApplicationprofileDosRlProfileRlProfileClientIpToUriFailedRequestsRateLimitActionRedirectPathTokens): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviApplicationprofileDosRlProfileRlProfileClientIpToUriFailedRequestsRateLimitActionRedirectPathTokensToHclTerraform(struct?: DataAviApplicationprofileDosRlProfileRlProfileClientIpToUriFailedRequestsRateLimitActionRedirectPathTokens): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviApplicationprofileDosRlProfileRlProfileClientIpToUriFailedRequestsRateLimitActionRedirectPathTokensOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviApplicationprofileDosRlProfileRlProfileClientIpToUriFailedRequestsRateLimitActionRedirectPathTokens | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviApplicationprofileDosRlProfileRlProfileClientIpToUriFailedRequestsRateLimitActionRedirectPathTokens | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // end_index - computed: true, optional: false, required: false
  public get endIndex() {
    return this.getStringAttribute('end_index');
  }

  // start_index - computed: true, optional: false, required: false
  public get startIndex() {
    return this.getStringAttribute('start_index');
  }

  // str_value - computed: true, optional: false, required: false
  public get strValue() {
    return this.getStringAttribute('str_value');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataAviApplicationprofileDosRlProfileRlProfileClientIpToUriFailedRequestsRateLimitActionRedirectPathTokensList extends cdktf.ComplexList {

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
  public get(index: number): DataAviApplicationprofileDosRlProfileRlProfileClientIpToUriFailedRequestsRateLimitActionRedirectPathTokensOutputReference {
    return new DataAviApplicationprofileDosRlProfileRlProfileClientIpToUriFailedRequestsRateLimitActionRedirectPathTokensOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviApplicationprofileDosRlProfileRlProfileClientIpToUriFailedRequestsRateLimitActionRedirectPath {
}

export function dataAviApplicationprofileDosRlProfileRlProfileClientIpToUriFailedRequestsRateLimitActionRedirectPathToTerraform(struct?: DataAviApplicationprofileDosRlProfileRlProfileClientIpToUriFailedRequestsRateLimitActionRedirectPath): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviApplicationprofileDosRlProfileRlProfileClientIpToUriFailedRequestsRateLimitActionRedirectPathToHclTerraform(struct?: DataAviApplicationprofileDosRlProfileRlProfileClientIpToUriFailedRequestsRateLimitActionRedirectPath): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviApplicationprofileDosRlProfileRlProfileClientIpToUriFailedRequestsRateLimitActionRedirectPathOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviApplicationprofileDosRlProfileRlProfileClientIpToUriFailedRequestsRateLimitActionRedirectPath | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviApplicationprofileDosRlProfileRlProfileClientIpToUriFailedRequestsRateLimitActionRedirectPath | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // tokens - computed: true, optional: false, required: false
  private _tokens = new DataAviApplicationprofileDosRlProfileRlProfileClientIpToUriFailedRequestsRateLimitActionRedirectPathTokensList(this, "tokens", false);
  public get tokens() {
    return this._tokens;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataAviApplicationprofileDosRlProfileRlProfileClientIpToUriFailedRequestsRateLimitActionRedirectPathList extends cdktf.ComplexList {

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
  public get(index: number): DataAviApplicationprofileDosRlProfileRlProfileClientIpToUriFailedRequestsRateLimitActionRedirectPathOutputReference {
    return new DataAviApplicationprofileDosRlProfileRlProfileClientIpToUriFailedRequestsRateLimitActionRedirectPathOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviApplicationprofileDosRlProfileRlProfileClientIpToUriFailedRequestsRateLimitActionRedirect {
}

export function dataAviApplicationprofileDosRlProfileRlProfileClientIpToUriFailedRequestsRateLimitActionRedirectToTerraform(struct?: DataAviApplicationprofileDosRlProfileRlProfileClientIpToUriFailedRequestsRateLimitActionRedirect): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviApplicationprofileDosRlProfileRlProfileClientIpToUriFailedRequestsRateLimitActionRedirectToHclTerraform(struct?: DataAviApplicationprofileDosRlProfileRlProfileClientIpToUriFailedRequestsRateLimitActionRedirect): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviApplicationprofileDosRlProfileRlProfileClientIpToUriFailedRequestsRateLimitActionRedirectOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviApplicationprofileDosRlProfileRlProfileClientIpToUriFailedRequestsRateLimitActionRedirect | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviApplicationprofileDosRlProfileRlProfileClientIpToUriFailedRequestsRateLimitActionRedirect | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // add_string - computed: true, optional: false, required: false
  public get addString() {
    return this.getStringAttribute('add_string');
  }

  // host - computed: true, optional: false, required: false
  private _host = new DataAviApplicationprofileDosRlProfileRlProfileClientIpToUriFailedRequestsRateLimitActionRedirectHostList(this, "host", true);
  public get host() {
    return this._host;
  }

  // keep_query - computed: true, optional: false, required: false
  public get keepQuery() {
    return this.getStringAttribute('keep_query');
  }

  // path - computed: true, optional: false, required: false
  private _path = new DataAviApplicationprofileDosRlProfileRlProfileClientIpToUriFailedRequestsRateLimitActionRedirectPathList(this, "path", true);
  public get path() {
    return this._path;
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getStringAttribute('port');
  }

  // protocol - computed: true, optional: false, required: false
  public get protocol() {
    return this.getStringAttribute('protocol');
  }

  // status_code - computed: true, optional: false, required: false
  public get statusCode() {
    return this.getStringAttribute('status_code');
  }
}

export class DataAviApplicationprofileDosRlProfileRlProfileClientIpToUriFailedRequestsRateLimitActionRedirectList extends cdktf.ComplexList {

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
  public get(index: number): DataAviApplicationprofileDosRlProfileRlProfileClientIpToUriFailedRequestsRateLimitActionRedirectOutputReference {
    return new DataAviApplicationprofileDosRlProfileRlProfileClientIpToUriFailedRequestsRateLimitActionRedirectOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviApplicationprofileDosRlProfileRlProfileClientIpToUriFailedRequestsRateLimitAction {
}

export function dataAviApplicationprofileDosRlProfileRlProfileClientIpToUriFailedRequestsRateLimitActionToTerraform(struct?: DataAviApplicationprofileDosRlProfileRlProfileClientIpToUriFailedRequestsRateLimitAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviApplicationprofileDosRlProfileRlProfileClientIpToUriFailedRequestsRateLimitActionToHclTerraform(struct?: DataAviApplicationprofileDosRlProfileRlProfileClientIpToUriFailedRequestsRateLimitAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviApplicationprofileDosRlProfileRlProfileClientIpToUriFailedRequestsRateLimitActionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviApplicationprofileDosRlProfileRlProfileClientIpToUriFailedRequestsRateLimitAction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviApplicationprofileDosRlProfileRlProfileClientIpToUriFailedRequestsRateLimitAction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // file - computed: true, optional: false, required: false
  private _file = new DataAviApplicationprofileDosRlProfileRlProfileClientIpToUriFailedRequestsRateLimitActionFileList(this, "file", true);
  public get file() {
    return this._file;
  }

  // redirect - computed: true, optional: false, required: false
  private _redirect = new DataAviApplicationprofileDosRlProfileRlProfileClientIpToUriFailedRequestsRateLimitActionRedirectList(this, "redirect", true);
  public get redirect() {
    return this._redirect;
  }

  // status_code - computed: true, optional: false, required: false
  public get statusCode() {
    return this.getStringAttribute('status_code');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataAviApplicationprofileDosRlProfileRlProfileClientIpToUriFailedRequestsRateLimitActionList extends cdktf.ComplexList {

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
  public get(index: number): DataAviApplicationprofileDosRlProfileRlProfileClientIpToUriFailedRequestsRateLimitActionOutputReference {
    return new DataAviApplicationprofileDosRlProfileRlProfileClientIpToUriFailedRequestsRateLimitActionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviApplicationprofileDosRlProfileRlProfileClientIpToUriFailedRequestsRateLimitRateLimiter {
}

export function dataAviApplicationprofileDosRlProfileRlProfileClientIpToUriFailedRequestsRateLimitRateLimiterToTerraform(struct?: DataAviApplicationprofileDosRlProfileRlProfileClientIpToUriFailedRequestsRateLimitRateLimiter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviApplicationprofileDosRlProfileRlProfileClientIpToUriFailedRequestsRateLimitRateLimiterToHclTerraform(struct?: DataAviApplicationprofileDosRlProfileRlProfileClientIpToUriFailedRequestsRateLimitRateLimiter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviApplicationprofileDosRlProfileRlProfileClientIpToUriFailedRequestsRateLimitRateLimiterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviApplicationprofileDosRlProfileRlProfileClientIpToUriFailedRequestsRateLimitRateLimiter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviApplicationprofileDosRlProfileRlProfileClientIpToUriFailedRequestsRateLimitRateLimiter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // burst_sz - computed: true, optional: false, required: false
  public get burstSz() {
    return this.getStringAttribute('burst_sz');
  }

  // count - computed: true, optional: false, required: false
  public get count() {
    return this.getStringAttribute('count');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // period - computed: true, optional: false, required: false
  public get period() {
    return this.getStringAttribute('period');
  }
}

export class DataAviApplicationprofileDosRlProfileRlProfileClientIpToUriFailedRequestsRateLimitRateLimiterList extends cdktf.ComplexList {

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
  public get(index: number): DataAviApplicationprofileDosRlProfileRlProfileClientIpToUriFailedRequestsRateLimitRateLimiterOutputReference {
    return new DataAviApplicationprofileDosRlProfileRlProfileClientIpToUriFailedRequestsRateLimitRateLimiterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviApplicationprofileDosRlProfileRlProfileClientIpToUriFailedRequestsRateLimit {
}

export function dataAviApplicationprofileDosRlProfileRlProfileClientIpToUriFailedRequestsRateLimitToTerraform(struct?: DataAviApplicationprofileDosRlProfileRlProfileClientIpToUriFailedRequestsRateLimit): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviApplicationprofileDosRlProfileRlProfileClientIpToUriFailedRequestsRateLimitToHclTerraform(struct?: DataAviApplicationprofileDosRlProfileRlProfileClientIpToUriFailedRequestsRateLimit): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviApplicationprofileDosRlProfileRlProfileClientIpToUriFailedRequestsRateLimitOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviApplicationprofileDosRlProfileRlProfileClientIpToUriFailedRequestsRateLimit | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviApplicationprofileDosRlProfileRlProfileClientIpToUriFailedRequestsRateLimit | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // action - computed: true, optional: false, required: false
  private _action = new DataAviApplicationprofileDosRlProfileRlProfileClientIpToUriFailedRequestsRateLimitActionList(this, "action", true);
  public get action() {
    return this._action;
  }

  // explicit_tracking - computed: true, optional: false, required: false
  public get explicitTracking() {
    return this.getStringAttribute('explicit_tracking');
  }

  // fine_grain - computed: true, optional: false, required: false
  public get fineGrain() {
    return this.getStringAttribute('fine_grain');
  }

  // http_cookie - computed: true, optional: false, required: false
  public get httpCookie() {
    return this.getStringAttribute('http_cookie');
  }

  // http_header - computed: true, optional: false, required: false
  public get httpHeader() {
    return this.getStringAttribute('http_header');
  }

  // rate_limiter - computed: true, optional: false, required: false
  private _rateLimiter = new DataAviApplicationprofileDosRlProfileRlProfileClientIpToUriFailedRequestsRateLimitRateLimiterList(this, "rate_limiter", true);
  public get rateLimiter() {
    return this._rateLimiter;
  }
}

export class DataAviApplicationprofileDosRlProfileRlProfileClientIpToUriFailedRequestsRateLimitList extends cdktf.ComplexList {

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
  public get(index: number): DataAviApplicationprofileDosRlProfileRlProfileClientIpToUriFailedRequestsRateLimitOutputReference {
    return new DataAviApplicationprofileDosRlProfileRlProfileClientIpToUriFailedRequestsRateLimitOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviApplicationprofileDosRlProfileRlProfileClientIpToUriRequestsRateLimitActionFile {
}

export function dataAviApplicationprofileDosRlProfileRlProfileClientIpToUriRequestsRateLimitActionFileToTerraform(struct?: DataAviApplicationprofileDosRlProfileRlProfileClientIpToUriRequestsRateLimitActionFile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviApplicationprofileDosRlProfileRlProfileClientIpToUriRequestsRateLimitActionFileToHclTerraform(struct?: DataAviApplicationprofileDosRlProfileRlProfileClientIpToUriRequestsRateLimitActionFile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviApplicationprofileDosRlProfileRlProfileClientIpToUriRequestsRateLimitActionFileOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviApplicationprofileDosRlProfileRlProfileClientIpToUriRequestsRateLimitActionFile | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviApplicationprofileDosRlProfileRlProfileClientIpToUriRequestsRateLimitActionFile | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // content_type - computed: true, optional: false, required: false
  public get contentType() {
    return this.getStringAttribute('content_type');
  }

  // file_content - computed: true, optional: false, required: false
  public get fileContent() {
    return this.getStringAttribute('file_content');
  }

  // file_length - computed: true, optional: false, required: false
  public get fileLength() {
    return this.getStringAttribute('file_length');
  }
}

export class DataAviApplicationprofileDosRlProfileRlProfileClientIpToUriRequestsRateLimitActionFileList extends cdktf.ComplexList {

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
  public get(index: number): DataAviApplicationprofileDosRlProfileRlProfileClientIpToUriRequestsRateLimitActionFileOutputReference {
    return new DataAviApplicationprofileDosRlProfileRlProfileClientIpToUriRequestsRateLimitActionFileOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviApplicationprofileDosRlProfileRlProfileClientIpToUriRequestsRateLimitActionRedirectHostTokens {
}

export function dataAviApplicationprofileDosRlProfileRlProfileClientIpToUriRequestsRateLimitActionRedirectHostTokensToTerraform(struct?: DataAviApplicationprofileDosRlProfileRlProfileClientIpToUriRequestsRateLimitActionRedirectHostTokens): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviApplicationprofileDosRlProfileRlProfileClientIpToUriRequestsRateLimitActionRedirectHostTokensToHclTerraform(struct?: DataAviApplicationprofileDosRlProfileRlProfileClientIpToUriRequestsRateLimitActionRedirectHostTokens): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviApplicationprofileDosRlProfileRlProfileClientIpToUriRequestsRateLimitActionRedirectHostTokensOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviApplicationprofileDosRlProfileRlProfileClientIpToUriRequestsRateLimitActionRedirectHostTokens | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviApplicationprofileDosRlProfileRlProfileClientIpToUriRequestsRateLimitActionRedirectHostTokens | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // end_index - computed: true, optional: false, required: false
  public get endIndex() {
    return this.getStringAttribute('end_index');
  }

  // start_index - computed: true, optional: false, required: false
  public get startIndex() {
    return this.getStringAttribute('start_index');
  }

  // str_value - computed: true, optional: false, required: false
  public get strValue() {
    return this.getStringAttribute('str_value');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataAviApplicationprofileDosRlProfileRlProfileClientIpToUriRequestsRateLimitActionRedirectHostTokensList extends cdktf.ComplexList {

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
  public get(index: number): DataAviApplicationprofileDosRlProfileRlProfileClientIpToUriRequestsRateLimitActionRedirectHostTokensOutputReference {
    return new DataAviApplicationprofileDosRlProfileRlProfileClientIpToUriRequestsRateLimitActionRedirectHostTokensOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviApplicationprofileDosRlProfileRlProfileClientIpToUriRequestsRateLimitActionRedirectHost {
}

export function dataAviApplicationprofileDosRlProfileRlProfileClientIpToUriRequestsRateLimitActionRedirectHostToTerraform(struct?: DataAviApplicationprofileDosRlProfileRlProfileClientIpToUriRequestsRateLimitActionRedirectHost): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviApplicationprofileDosRlProfileRlProfileClientIpToUriRequestsRateLimitActionRedirectHostToHclTerraform(struct?: DataAviApplicationprofileDosRlProfileRlProfileClientIpToUriRequestsRateLimitActionRedirectHost): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviApplicationprofileDosRlProfileRlProfileClientIpToUriRequestsRateLimitActionRedirectHostOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviApplicationprofileDosRlProfileRlProfileClientIpToUriRequestsRateLimitActionRedirectHost | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviApplicationprofileDosRlProfileRlProfileClientIpToUriRequestsRateLimitActionRedirectHost | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // tokens - computed: true, optional: false, required: false
  private _tokens = new DataAviApplicationprofileDosRlProfileRlProfileClientIpToUriRequestsRateLimitActionRedirectHostTokensList(this, "tokens", false);
  public get tokens() {
    return this._tokens;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataAviApplicationprofileDosRlProfileRlProfileClientIpToUriRequestsRateLimitActionRedirectHostList extends cdktf.ComplexList {

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
  public get(index: number): DataAviApplicationprofileDosRlProfileRlProfileClientIpToUriRequestsRateLimitActionRedirectHostOutputReference {
    return new DataAviApplicationprofileDosRlProfileRlProfileClientIpToUriRequestsRateLimitActionRedirectHostOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviApplicationprofileDosRlProfileRlProfileClientIpToUriRequestsRateLimitActionRedirectPathTokens {
}

export function dataAviApplicationprofileDosRlProfileRlProfileClientIpToUriRequestsRateLimitActionRedirectPathTokensToTerraform(struct?: DataAviApplicationprofileDosRlProfileRlProfileClientIpToUriRequestsRateLimitActionRedirectPathTokens): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviApplicationprofileDosRlProfileRlProfileClientIpToUriRequestsRateLimitActionRedirectPathTokensToHclTerraform(struct?: DataAviApplicationprofileDosRlProfileRlProfileClientIpToUriRequestsRateLimitActionRedirectPathTokens): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviApplicationprofileDosRlProfileRlProfileClientIpToUriRequestsRateLimitActionRedirectPathTokensOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviApplicationprofileDosRlProfileRlProfileClientIpToUriRequestsRateLimitActionRedirectPathTokens | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviApplicationprofileDosRlProfileRlProfileClientIpToUriRequestsRateLimitActionRedirectPathTokens | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // end_index - computed: true, optional: false, required: false
  public get endIndex() {
    return this.getStringAttribute('end_index');
  }

  // start_index - computed: true, optional: false, required: false
  public get startIndex() {
    return this.getStringAttribute('start_index');
  }

  // str_value - computed: true, optional: false, required: false
  public get strValue() {
    return this.getStringAttribute('str_value');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataAviApplicationprofileDosRlProfileRlProfileClientIpToUriRequestsRateLimitActionRedirectPathTokensList extends cdktf.ComplexList {

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
  public get(index: number): DataAviApplicationprofileDosRlProfileRlProfileClientIpToUriRequestsRateLimitActionRedirectPathTokensOutputReference {
    return new DataAviApplicationprofileDosRlProfileRlProfileClientIpToUriRequestsRateLimitActionRedirectPathTokensOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviApplicationprofileDosRlProfileRlProfileClientIpToUriRequestsRateLimitActionRedirectPath {
}

export function dataAviApplicationprofileDosRlProfileRlProfileClientIpToUriRequestsRateLimitActionRedirectPathToTerraform(struct?: DataAviApplicationprofileDosRlProfileRlProfileClientIpToUriRequestsRateLimitActionRedirectPath): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviApplicationprofileDosRlProfileRlProfileClientIpToUriRequestsRateLimitActionRedirectPathToHclTerraform(struct?: DataAviApplicationprofileDosRlProfileRlProfileClientIpToUriRequestsRateLimitActionRedirectPath): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviApplicationprofileDosRlProfileRlProfileClientIpToUriRequestsRateLimitActionRedirectPathOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviApplicationprofileDosRlProfileRlProfileClientIpToUriRequestsRateLimitActionRedirectPath | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviApplicationprofileDosRlProfileRlProfileClientIpToUriRequestsRateLimitActionRedirectPath | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // tokens - computed: true, optional: false, required: false
  private _tokens = new DataAviApplicationprofileDosRlProfileRlProfileClientIpToUriRequestsRateLimitActionRedirectPathTokensList(this, "tokens", false);
  public get tokens() {
    return this._tokens;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataAviApplicationprofileDosRlProfileRlProfileClientIpToUriRequestsRateLimitActionRedirectPathList extends cdktf.ComplexList {

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
  public get(index: number): DataAviApplicationprofileDosRlProfileRlProfileClientIpToUriRequestsRateLimitActionRedirectPathOutputReference {
    return new DataAviApplicationprofileDosRlProfileRlProfileClientIpToUriRequestsRateLimitActionRedirectPathOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviApplicationprofileDosRlProfileRlProfileClientIpToUriRequestsRateLimitActionRedirect {
}

export function dataAviApplicationprofileDosRlProfileRlProfileClientIpToUriRequestsRateLimitActionRedirectToTerraform(struct?: DataAviApplicationprofileDosRlProfileRlProfileClientIpToUriRequestsRateLimitActionRedirect): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviApplicationprofileDosRlProfileRlProfileClientIpToUriRequestsRateLimitActionRedirectToHclTerraform(struct?: DataAviApplicationprofileDosRlProfileRlProfileClientIpToUriRequestsRateLimitActionRedirect): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviApplicationprofileDosRlProfileRlProfileClientIpToUriRequestsRateLimitActionRedirectOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviApplicationprofileDosRlProfileRlProfileClientIpToUriRequestsRateLimitActionRedirect | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviApplicationprofileDosRlProfileRlProfileClientIpToUriRequestsRateLimitActionRedirect | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // add_string - computed: true, optional: false, required: false
  public get addString() {
    return this.getStringAttribute('add_string');
  }

  // host - computed: true, optional: false, required: false
  private _host = new DataAviApplicationprofileDosRlProfileRlProfileClientIpToUriRequestsRateLimitActionRedirectHostList(this, "host", true);
  public get host() {
    return this._host;
  }

  // keep_query - computed: true, optional: false, required: false
  public get keepQuery() {
    return this.getStringAttribute('keep_query');
  }

  // path - computed: true, optional: false, required: false
  private _path = new DataAviApplicationprofileDosRlProfileRlProfileClientIpToUriRequestsRateLimitActionRedirectPathList(this, "path", true);
  public get path() {
    return this._path;
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getStringAttribute('port');
  }

  // protocol - computed: true, optional: false, required: false
  public get protocol() {
    return this.getStringAttribute('protocol');
  }

  // status_code - computed: true, optional: false, required: false
  public get statusCode() {
    return this.getStringAttribute('status_code');
  }
}

export class DataAviApplicationprofileDosRlProfileRlProfileClientIpToUriRequestsRateLimitActionRedirectList extends cdktf.ComplexList {

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
  public get(index: number): DataAviApplicationprofileDosRlProfileRlProfileClientIpToUriRequestsRateLimitActionRedirectOutputReference {
    return new DataAviApplicationprofileDosRlProfileRlProfileClientIpToUriRequestsRateLimitActionRedirectOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviApplicationprofileDosRlProfileRlProfileClientIpToUriRequestsRateLimitAction {
}

export function dataAviApplicationprofileDosRlProfileRlProfileClientIpToUriRequestsRateLimitActionToTerraform(struct?: DataAviApplicationprofileDosRlProfileRlProfileClientIpToUriRequestsRateLimitAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviApplicationprofileDosRlProfileRlProfileClientIpToUriRequestsRateLimitActionToHclTerraform(struct?: DataAviApplicationprofileDosRlProfileRlProfileClientIpToUriRequestsRateLimitAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviApplicationprofileDosRlProfileRlProfileClientIpToUriRequestsRateLimitActionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviApplicationprofileDosRlProfileRlProfileClientIpToUriRequestsRateLimitAction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviApplicationprofileDosRlProfileRlProfileClientIpToUriRequestsRateLimitAction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // file - computed: true, optional: false, required: false
  private _file = new DataAviApplicationprofileDosRlProfileRlProfileClientIpToUriRequestsRateLimitActionFileList(this, "file", true);
  public get file() {
    return this._file;
  }

  // redirect - computed: true, optional: false, required: false
  private _redirect = new DataAviApplicationprofileDosRlProfileRlProfileClientIpToUriRequestsRateLimitActionRedirectList(this, "redirect", true);
  public get redirect() {
    return this._redirect;
  }

  // status_code - computed: true, optional: false, required: false
  public get statusCode() {
    return this.getStringAttribute('status_code');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataAviApplicationprofileDosRlProfileRlProfileClientIpToUriRequestsRateLimitActionList extends cdktf.ComplexList {

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
  public get(index: number): DataAviApplicationprofileDosRlProfileRlProfileClientIpToUriRequestsRateLimitActionOutputReference {
    return new DataAviApplicationprofileDosRlProfileRlProfileClientIpToUriRequestsRateLimitActionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviApplicationprofileDosRlProfileRlProfileClientIpToUriRequestsRateLimitRateLimiter {
}

export function dataAviApplicationprofileDosRlProfileRlProfileClientIpToUriRequestsRateLimitRateLimiterToTerraform(struct?: DataAviApplicationprofileDosRlProfileRlProfileClientIpToUriRequestsRateLimitRateLimiter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviApplicationprofileDosRlProfileRlProfileClientIpToUriRequestsRateLimitRateLimiterToHclTerraform(struct?: DataAviApplicationprofileDosRlProfileRlProfileClientIpToUriRequestsRateLimitRateLimiter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviApplicationprofileDosRlProfileRlProfileClientIpToUriRequestsRateLimitRateLimiterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviApplicationprofileDosRlProfileRlProfileClientIpToUriRequestsRateLimitRateLimiter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviApplicationprofileDosRlProfileRlProfileClientIpToUriRequestsRateLimitRateLimiter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // burst_sz - computed: true, optional: false, required: false
  public get burstSz() {
    return this.getStringAttribute('burst_sz');
  }

  // count - computed: true, optional: false, required: false
  public get count() {
    return this.getStringAttribute('count');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // period - computed: true, optional: false, required: false
  public get period() {
    return this.getStringAttribute('period');
  }
}

export class DataAviApplicationprofileDosRlProfileRlProfileClientIpToUriRequestsRateLimitRateLimiterList extends cdktf.ComplexList {

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
  public get(index: number): DataAviApplicationprofileDosRlProfileRlProfileClientIpToUriRequestsRateLimitRateLimiterOutputReference {
    return new DataAviApplicationprofileDosRlProfileRlProfileClientIpToUriRequestsRateLimitRateLimiterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviApplicationprofileDosRlProfileRlProfileClientIpToUriRequestsRateLimit {
}

export function dataAviApplicationprofileDosRlProfileRlProfileClientIpToUriRequestsRateLimitToTerraform(struct?: DataAviApplicationprofileDosRlProfileRlProfileClientIpToUriRequestsRateLimit): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviApplicationprofileDosRlProfileRlProfileClientIpToUriRequestsRateLimitToHclTerraform(struct?: DataAviApplicationprofileDosRlProfileRlProfileClientIpToUriRequestsRateLimit): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviApplicationprofileDosRlProfileRlProfileClientIpToUriRequestsRateLimitOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviApplicationprofileDosRlProfileRlProfileClientIpToUriRequestsRateLimit | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviApplicationprofileDosRlProfileRlProfileClientIpToUriRequestsRateLimit | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // action - computed: true, optional: false, required: false
  private _action = new DataAviApplicationprofileDosRlProfileRlProfileClientIpToUriRequestsRateLimitActionList(this, "action", true);
  public get action() {
    return this._action;
  }

  // explicit_tracking - computed: true, optional: false, required: false
  public get explicitTracking() {
    return this.getStringAttribute('explicit_tracking');
  }

  // fine_grain - computed: true, optional: false, required: false
  public get fineGrain() {
    return this.getStringAttribute('fine_grain');
  }

  // http_cookie - computed: true, optional: false, required: false
  public get httpCookie() {
    return this.getStringAttribute('http_cookie');
  }

  // http_header - computed: true, optional: false, required: false
  public get httpHeader() {
    return this.getStringAttribute('http_header');
  }

  // rate_limiter - computed: true, optional: false, required: false
  private _rateLimiter = new DataAviApplicationprofileDosRlProfileRlProfileClientIpToUriRequestsRateLimitRateLimiterList(this, "rate_limiter", true);
  public get rateLimiter() {
    return this._rateLimiter;
  }
}

export class DataAviApplicationprofileDosRlProfileRlProfileClientIpToUriRequestsRateLimitList extends cdktf.ComplexList {

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
  public get(index: number): DataAviApplicationprofileDosRlProfileRlProfileClientIpToUriRequestsRateLimitOutputReference {
    return new DataAviApplicationprofileDosRlProfileRlProfileClientIpToUriRequestsRateLimitOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviApplicationprofileDosRlProfileRlProfileCustomRequestsRateLimitActionFile {
}

export function dataAviApplicationprofileDosRlProfileRlProfileCustomRequestsRateLimitActionFileToTerraform(struct?: DataAviApplicationprofileDosRlProfileRlProfileCustomRequestsRateLimitActionFile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviApplicationprofileDosRlProfileRlProfileCustomRequestsRateLimitActionFileToHclTerraform(struct?: DataAviApplicationprofileDosRlProfileRlProfileCustomRequestsRateLimitActionFile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviApplicationprofileDosRlProfileRlProfileCustomRequestsRateLimitActionFileOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviApplicationprofileDosRlProfileRlProfileCustomRequestsRateLimitActionFile | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviApplicationprofileDosRlProfileRlProfileCustomRequestsRateLimitActionFile | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // content_type - computed: true, optional: false, required: false
  public get contentType() {
    return this.getStringAttribute('content_type');
  }

  // file_content - computed: true, optional: false, required: false
  public get fileContent() {
    return this.getStringAttribute('file_content');
  }

  // file_length - computed: true, optional: false, required: false
  public get fileLength() {
    return this.getStringAttribute('file_length');
  }
}

export class DataAviApplicationprofileDosRlProfileRlProfileCustomRequestsRateLimitActionFileList extends cdktf.ComplexList {

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
  public get(index: number): DataAviApplicationprofileDosRlProfileRlProfileCustomRequestsRateLimitActionFileOutputReference {
    return new DataAviApplicationprofileDosRlProfileRlProfileCustomRequestsRateLimitActionFileOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviApplicationprofileDosRlProfileRlProfileCustomRequestsRateLimitActionRedirectHostTokens {
}

export function dataAviApplicationprofileDosRlProfileRlProfileCustomRequestsRateLimitActionRedirectHostTokensToTerraform(struct?: DataAviApplicationprofileDosRlProfileRlProfileCustomRequestsRateLimitActionRedirectHostTokens): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviApplicationprofileDosRlProfileRlProfileCustomRequestsRateLimitActionRedirectHostTokensToHclTerraform(struct?: DataAviApplicationprofileDosRlProfileRlProfileCustomRequestsRateLimitActionRedirectHostTokens): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviApplicationprofileDosRlProfileRlProfileCustomRequestsRateLimitActionRedirectHostTokensOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviApplicationprofileDosRlProfileRlProfileCustomRequestsRateLimitActionRedirectHostTokens | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviApplicationprofileDosRlProfileRlProfileCustomRequestsRateLimitActionRedirectHostTokens | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // end_index - computed: true, optional: false, required: false
  public get endIndex() {
    return this.getStringAttribute('end_index');
  }

  // start_index - computed: true, optional: false, required: false
  public get startIndex() {
    return this.getStringAttribute('start_index');
  }

  // str_value - computed: true, optional: false, required: false
  public get strValue() {
    return this.getStringAttribute('str_value');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataAviApplicationprofileDosRlProfileRlProfileCustomRequestsRateLimitActionRedirectHostTokensList extends cdktf.ComplexList {

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
  public get(index: number): DataAviApplicationprofileDosRlProfileRlProfileCustomRequestsRateLimitActionRedirectHostTokensOutputReference {
    return new DataAviApplicationprofileDosRlProfileRlProfileCustomRequestsRateLimitActionRedirectHostTokensOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviApplicationprofileDosRlProfileRlProfileCustomRequestsRateLimitActionRedirectHost {
}

export function dataAviApplicationprofileDosRlProfileRlProfileCustomRequestsRateLimitActionRedirectHostToTerraform(struct?: DataAviApplicationprofileDosRlProfileRlProfileCustomRequestsRateLimitActionRedirectHost): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviApplicationprofileDosRlProfileRlProfileCustomRequestsRateLimitActionRedirectHostToHclTerraform(struct?: DataAviApplicationprofileDosRlProfileRlProfileCustomRequestsRateLimitActionRedirectHost): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviApplicationprofileDosRlProfileRlProfileCustomRequestsRateLimitActionRedirectHostOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviApplicationprofileDosRlProfileRlProfileCustomRequestsRateLimitActionRedirectHost | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviApplicationprofileDosRlProfileRlProfileCustomRequestsRateLimitActionRedirectHost | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // tokens - computed: true, optional: false, required: false
  private _tokens = new DataAviApplicationprofileDosRlProfileRlProfileCustomRequestsRateLimitActionRedirectHostTokensList(this, "tokens", false);
  public get tokens() {
    return this._tokens;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataAviApplicationprofileDosRlProfileRlProfileCustomRequestsRateLimitActionRedirectHostList extends cdktf.ComplexList {

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
  public get(index: number): DataAviApplicationprofileDosRlProfileRlProfileCustomRequestsRateLimitActionRedirectHostOutputReference {
    return new DataAviApplicationprofileDosRlProfileRlProfileCustomRequestsRateLimitActionRedirectHostOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviApplicationprofileDosRlProfileRlProfileCustomRequestsRateLimitActionRedirectPathTokens {
}

export function dataAviApplicationprofileDosRlProfileRlProfileCustomRequestsRateLimitActionRedirectPathTokensToTerraform(struct?: DataAviApplicationprofileDosRlProfileRlProfileCustomRequestsRateLimitActionRedirectPathTokens): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviApplicationprofileDosRlProfileRlProfileCustomRequestsRateLimitActionRedirectPathTokensToHclTerraform(struct?: DataAviApplicationprofileDosRlProfileRlProfileCustomRequestsRateLimitActionRedirectPathTokens): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviApplicationprofileDosRlProfileRlProfileCustomRequestsRateLimitActionRedirectPathTokensOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviApplicationprofileDosRlProfileRlProfileCustomRequestsRateLimitActionRedirectPathTokens | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviApplicationprofileDosRlProfileRlProfileCustomRequestsRateLimitActionRedirectPathTokens | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // end_index - computed: true, optional: false, required: false
  public get endIndex() {
    return this.getStringAttribute('end_index');
  }

  // start_index - computed: true, optional: false, required: false
  public get startIndex() {
    return this.getStringAttribute('start_index');
  }

  // str_value - computed: true, optional: false, required: false
  public get strValue() {
    return this.getStringAttribute('str_value');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataAviApplicationprofileDosRlProfileRlProfileCustomRequestsRateLimitActionRedirectPathTokensList extends cdktf.ComplexList {

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
  public get(index: number): DataAviApplicationprofileDosRlProfileRlProfileCustomRequestsRateLimitActionRedirectPathTokensOutputReference {
    return new DataAviApplicationprofileDosRlProfileRlProfileCustomRequestsRateLimitActionRedirectPathTokensOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviApplicationprofileDosRlProfileRlProfileCustomRequestsRateLimitActionRedirectPath {
}

export function dataAviApplicationprofileDosRlProfileRlProfileCustomRequestsRateLimitActionRedirectPathToTerraform(struct?: DataAviApplicationprofileDosRlProfileRlProfileCustomRequestsRateLimitActionRedirectPath): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviApplicationprofileDosRlProfileRlProfileCustomRequestsRateLimitActionRedirectPathToHclTerraform(struct?: DataAviApplicationprofileDosRlProfileRlProfileCustomRequestsRateLimitActionRedirectPath): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviApplicationprofileDosRlProfileRlProfileCustomRequestsRateLimitActionRedirectPathOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviApplicationprofileDosRlProfileRlProfileCustomRequestsRateLimitActionRedirectPath | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviApplicationprofileDosRlProfileRlProfileCustomRequestsRateLimitActionRedirectPath | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // tokens - computed: true, optional: false, required: false
  private _tokens = new DataAviApplicationprofileDosRlProfileRlProfileCustomRequestsRateLimitActionRedirectPathTokensList(this, "tokens", false);
  public get tokens() {
    return this._tokens;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataAviApplicationprofileDosRlProfileRlProfileCustomRequestsRateLimitActionRedirectPathList extends cdktf.ComplexList {

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
  public get(index: number): DataAviApplicationprofileDosRlProfileRlProfileCustomRequestsRateLimitActionRedirectPathOutputReference {
    return new DataAviApplicationprofileDosRlProfileRlProfileCustomRequestsRateLimitActionRedirectPathOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviApplicationprofileDosRlProfileRlProfileCustomRequestsRateLimitActionRedirect {
}

export function dataAviApplicationprofileDosRlProfileRlProfileCustomRequestsRateLimitActionRedirectToTerraform(struct?: DataAviApplicationprofileDosRlProfileRlProfileCustomRequestsRateLimitActionRedirect): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviApplicationprofileDosRlProfileRlProfileCustomRequestsRateLimitActionRedirectToHclTerraform(struct?: DataAviApplicationprofileDosRlProfileRlProfileCustomRequestsRateLimitActionRedirect): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviApplicationprofileDosRlProfileRlProfileCustomRequestsRateLimitActionRedirectOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviApplicationprofileDosRlProfileRlProfileCustomRequestsRateLimitActionRedirect | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviApplicationprofileDosRlProfileRlProfileCustomRequestsRateLimitActionRedirect | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // add_string - computed: true, optional: false, required: false
  public get addString() {
    return this.getStringAttribute('add_string');
  }

  // host - computed: true, optional: false, required: false
  private _host = new DataAviApplicationprofileDosRlProfileRlProfileCustomRequestsRateLimitActionRedirectHostList(this, "host", true);
  public get host() {
    return this._host;
  }

  // keep_query - computed: true, optional: false, required: false
  public get keepQuery() {
    return this.getStringAttribute('keep_query');
  }

  // path - computed: true, optional: false, required: false
  private _path = new DataAviApplicationprofileDosRlProfileRlProfileCustomRequestsRateLimitActionRedirectPathList(this, "path", true);
  public get path() {
    return this._path;
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getStringAttribute('port');
  }

  // protocol - computed: true, optional: false, required: false
  public get protocol() {
    return this.getStringAttribute('protocol');
  }

  // status_code - computed: true, optional: false, required: false
  public get statusCode() {
    return this.getStringAttribute('status_code');
  }
}

export class DataAviApplicationprofileDosRlProfileRlProfileCustomRequestsRateLimitActionRedirectList extends cdktf.ComplexList {

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
  public get(index: number): DataAviApplicationprofileDosRlProfileRlProfileCustomRequestsRateLimitActionRedirectOutputReference {
    return new DataAviApplicationprofileDosRlProfileRlProfileCustomRequestsRateLimitActionRedirectOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviApplicationprofileDosRlProfileRlProfileCustomRequestsRateLimitAction {
}

export function dataAviApplicationprofileDosRlProfileRlProfileCustomRequestsRateLimitActionToTerraform(struct?: DataAviApplicationprofileDosRlProfileRlProfileCustomRequestsRateLimitAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviApplicationprofileDosRlProfileRlProfileCustomRequestsRateLimitActionToHclTerraform(struct?: DataAviApplicationprofileDosRlProfileRlProfileCustomRequestsRateLimitAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviApplicationprofileDosRlProfileRlProfileCustomRequestsRateLimitActionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviApplicationprofileDosRlProfileRlProfileCustomRequestsRateLimitAction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviApplicationprofileDosRlProfileRlProfileCustomRequestsRateLimitAction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // file - computed: true, optional: false, required: false
  private _file = new DataAviApplicationprofileDosRlProfileRlProfileCustomRequestsRateLimitActionFileList(this, "file", true);
  public get file() {
    return this._file;
  }

  // redirect - computed: true, optional: false, required: false
  private _redirect = new DataAviApplicationprofileDosRlProfileRlProfileCustomRequestsRateLimitActionRedirectList(this, "redirect", true);
  public get redirect() {
    return this._redirect;
  }

  // status_code - computed: true, optional: false, required: false
  public get statusCode() {
    return this.getStringAttribute('status_code');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataAviApplicationprofileDosRlProfileRlProfileCustomRequestsRateLimitActionList extends cdktf.ComplexList {

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
  public get(index: number): DataAviApplicationprofileDosRlProfileRlProfileCustomRequestsRateLimitActionOutputReference {
    return new DataAviApplicationprofileDosRlProfileRlProfileCustomRequestsRateLimitActionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviApplicationprofileDosRlProfileRlProfileCustomRequestsRateLimitRateLimiter {
}

export function dataAviApplicationprofileDosRlProfileRlProfileCustomRequestsRateLimitRateLimiterToTerraform(struct?: DataAviApplicationprofileDosRlProfileRlProfileCustomRequestsRateLimitRateLimiter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviApplicationprofileDosRlProfileRlProfileCustomRequestsRateLimitRateLimiterToHclTerraform(struct?: DataAviApplicationprofileDosRlProfileRlProfileCustomRequestsRateLimitRateLimiter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviApplicationprofileDosRlProfileRlProfileCustomRequestsRateLimitRateLimiterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviApplicationprofileDosRlProfileRlProfileCustomRequestsRateLimitRateLimiter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviApplicationprofileDosRlProfileRlProfileCustomRequestsRateLimitRateLimiter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // burst_sz - computed: true, optional: false, required: false
  public get burstSz() {
    return this.getStringAttribute('burst_sz');
  }

  // count - computed: true, optional: false, required: false
  public get count() {
    return this.getStringAttribute('count');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // period - computed: true, optional: false, required: false
  public get period() {
    return this.getStringAttribute('period');
  }
}

export class DataAviApplicationprofileDosRlProfileRlProfileCustomRequestsRateLimitRateLimiterList extends cdktf.ComplexList {

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
  public get(index: number): DataAviApplicationprofileDosRlProfileRlProfileCustomRequestsRateLimitRateLimiterOutputReference {
    return new DataAviApplicationprofileDosRlProfileRlProfileCustomRequestsRateLimitRateLimiterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviApplicationprofileDosRlProfileRlProfileCustomRequestsRateLimit {
}

export function dataAviApplicationprofileDosRlProfileRlProfileCustomRequestsRateLimitToTerraform(struct?: DataAviApplicationprofileDosRlProfileRlProfileCustomRequestsRateLimit): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviApplicationprofileDosRlProfileRlProfileCustomRequestsRateLimitToHclTerraform(struct?: DataAviApplicationprofileDosRlProfileRlProfileCustomRequestsRateLimit): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviApplicationprofileDosRlProfileRlProfileCustomRequestsRateLimitOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviApplicationprofileDosRlProfileRlProfileCustomRequestsRateLimit | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviApplicationprofileDosRlProfileRlProfileCustomRequestsRateLimit | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // action - computed: true, optional: false, required: false
  private _action = new DataAviApplicationprofileDosRlProfileRlProfileCustomRequestsRateLimitActionList(this, "action", true);
  public get action() {
    return this._action;
  }

  // explicit_tracking - computed: true, optional: false, required: false
  public get explicitTracking() {
    return this.getStringAttribute('explicit_tracking');
  }

  // fine_grain - computed: true, optional: false, required: false
  public get fineGrain() {
    return this.getStringAttribute('fine_grain');
  }

  // http_cookie - computed: true, optional: false, required: false
  public get httpCookie() {
    return this.getStringAttribute('http_cookie');
  }

  // http_header - computed: true, optional: false, required: false
  public get httpHeader() {
    return this.getStringAttribute('http_header');
  }

  // rate_limiter - computed: true, optional: false, required: false
  private _rateLimiter = new DataAviApplicationprofileDosRlProfileRlProfileCustomRequestsRateLimitRateLimiterList(this, "rate_limiter", true);
  public get rateLimiter() {
    return this._rateLimiter;
  }
}

export class DataAviApplicationprofileDosRlProfileRlProfileCustomRequestsRateLimitList extends cdktf.ComplexList {

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
  public get(index: number): DataAviApplicationprofileDosRlProfileRlProfileCustomRequestsRateLimitOutputReference {
    return new DataAviApplicationprofileDosRlProfileRlProfileCustomRequestsRateLimitOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviApplicationprofileDosRlProfileRlProfileHttpHeaderRateLimitsActionFile {
}

export function dataAviApplicationprofileDosRlProfileRlProfileHttpHeaderRateLimitsActionFileToTerraform(struct?: DataAviApplicationprofileDosRlProfileRlProfileHttpHeaderRateLimitsActionFile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviApplicationprofileDosRlProfileRlProfileHttpHeaderRateLimitsActionFileToHclTerraform(struct?: DataAviApplicationprofileDosRlProfileRlProfileHttpHeaderRateLimitsActionFile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviApplicationprofileDosRlProfileRlProfileHttpHeaderRateLimitsActionFileOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviApplicationprofileDosRlProfileRlProfileHttpHeaderRateLimitsActionFile | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviApplicationprofileDosRlProfileRlProfileHttpHeaderRateLimitsActionFile | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // content_type - computed: true, optional: false, required: false
  public get contentType() {
    return this.getStringAttribute('content_type');
  }

  // file_content - computed: true, optional: false, required: false
  public get fileContent() {
    return this.getStringAttribute('file_content');
  }

  // file_length - computed: true, optional: false, required: false
  public get fileLength() {
    return this.getStringAttribute('file_length');
  }
}

export class DataAviApplicationprofileDosRlProfileRlProfileHttpHeaderRateLimitsActionFileList extends cdktf.ComplexList {

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
  public get(index: number): DataAviApplicationprofileDosRlProfileRlProfileHttpHeaderRateLimitsActionFileOutputReference {
    return new DataAviApplicationprofileDosRlProfileRlProfileHttpHeaderRateLimitsActionFileOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviApplicationprofileDosRlProfileRlProfileHttpHeaderRateLimitsActionRedirectHostTokens {
}

export function dataAviApplicationprofileDosRlProfileRlProfileHttpHeaderRateLimitsActionRedirectHostTokensToTerraform(struct?: DataAviApplicationprofileDosRlProfileRlProfileHttpHeaderRateLimitsActionRedirectHostTokens): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviApplicationprofileDosRlProfileRlProfileHttpHeaderRateLimitsActionRedirectHostTokensToHclTerraform(struct?: DataAviApplicationprofileDosRlProfileRlProfileHttpHeaderRateLimitsActionRedirectHostTokens): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviApplicationprofileDosRlProfileRlProfileHttpHeaderRateLimitsActionRedirectHostTokensOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviApplicationprofileDosRlProfileRlProfileHttpHeaderRateLimitsActionRedirectHostTokens | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviApplicationprofileDosRlProfileRlProfileHttpHeaderRateLimitsActionRedirectHostTokens | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // end_index - computed: true, optional: false, required: false
  public get endIndex() {
    return this.getStringAttribute('end_index');
  }

  // start_index - computed: true, optional: false, required: false
  public get startIndex() {
    return this.getStringAttribute('start_index');
  }

  // str_value - computed: true, optional: false, required: false
  public get strValue() {
    return this.getStringAttribute('str_value');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataAviApplicationprofileDosRlProfileRlProfileHttpHeaderRateLimitsActionRedirectHostTokensList extends cdktf.ComplexList {

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
  public get(index: number): DataAviApplicationprofileDosRlProfileRlProfileHttpHeaderRateLimitsActionRedirectHostTokensOutputReference {
    return new DataAviApplicationprofileDosRlProfileRlProfileHttpHeaderRateLimitsActionRedirectHostTokensOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviApplicationprofileDosRlProfileRlProfileHttpHeaderRateLimitsActionRedirectHost {
}

export function dataAviApplicationprofileDosRlProfileRlProfileHttpHeaderRateLimitsActionRedirectHostToTerraform(struct?: DataAviApplicationprofileDosRlProfileRlProfileHttpHeaderRateLimitsActionRedirectHost): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviApplicationprofileDosRlProfileRlProfileHttpHeaderRateLimitsActionRedirectHostToHclTerraform(struct?: DataAviApplicationprofileDosRlProfileRlProfileHttpHeaderRateLimitsActionRedirectHost): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviApplicationprofileDosRlProfileRlProfileHttpHeaderRateLimitsActionRedirectHostOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviApplicationprofileDosRlProfileRlProfileHttpHeaderRateLimitsActionRedirectHost | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviApplicationprofileDosRlProfileRlProfileHttpHeaderRateLimitsActionRedirectHost | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // tokens - computed: true, optional: false, required: false
  private _tokens = new DataAviApplicationprofileDosRlProfileRlProfileHttpHeaderRateLimitsActionRedirectHostTokensList(this, "tokens", false);
  public get tokens() {
    return this._tokens;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataAviApplicationprofileDosRlProfileRlProfileHttpHeaderRateLimitsActionRedirectHostList extends cdktf.ComplexList {

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
  public get(index: number): DataAviApplicationprofileDosRlProfileRlProfileHttpHeaderRateLimitsActionRedirectHostOutputReference {
    return new DataAviApplicationprofileDosRlProfileRlProfileHttpHeaderRateLimitsActionRedirectHostOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviApplicationprofileDosRlProfileRlProfileHttpHeaderRateLimitsActionRedirectPathTokens {
}

export function dataAviApplicationprofileDosRlProfileRlProfileHttpHeaderRateLimitsActionRedirectPathTokensToTerraform(struct?: DataAviApplicationprofileDosRlProfileRlProfileHttpHeaderRateLimitsActionRedirectPathTokens): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviApplicationprofileDosRlProfileRlProfileHttpHeaderRateLimitsActionRedirectPathTokensToHclTerraform(struct?: DataAviApplicationprofileDosRlProfileRlProfileHttpHeaderRateLimitsActionRedirectPathTokens): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviApplicationprofileDosRlProfileRlProfileHttpHeaderRateLimitsActionRedirectPathTokensOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviApplicationprofileDosRlProfileRlProfileHttpHeaderRateLimitsActionRedirectPathTokens | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviApplicationprofileDosRlProfileRlProfileHttpHeaderRateLimitsActionRedirectPathTokens | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // end_index - computed: true, optional: false, required: false
  public get endIndex() {
    return this.getStringAttribute('end_index');
  }

  // start_index - computed: true, optional: false, required: false
  public get startIndex() {
    return this.getStringAttribute('start_index');
  }

  // str_value - computed: true, optional: false, required: false
  public get strValue() {
    return this.getStringAttribute('str_value');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataAviApplicationprofileDosRlProfileRlProfileHttpHeaderRateLimitsActionRedirectPathTokensList extends cdktf.ComplexList {

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
  public get(index: number): DataAviApplicationprofileDosRlProfileRlProfileHttpHeaderRateLimitsActionRedirectPathTokensOutputReference {
    return new DataAviApplicationprofileDosRlProfileRlProfileHttpHeaderRateLimitsActionRedirectPathTokensOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviApplicationprofileDosRlProfileRlProfileHttpHeaderRateLimitsActionRedirectPath {
}

export function dataAviApplicationprofileDosRlProfileRlProfileHttpHeaderRateLimitsActionRedirectPathToTerraform(struct?: DataAviApplicationprofileDosRlProfileRlProfileHttpHeaderRateLimitsActionRedirectPath): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviApplicationprofileDosRlProfileRlProfileHttpHeaderRateLimitsActionRedirectPathToHclTerraform(struct?: DataAviApplicationprofileDosRlProfileRlProfileHttpHeaderRateLimitsActionRedirectPath): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviApplicationprofileDosRlProfileRlProfileHttpHeaderRateLimitsActionRedirectPathOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviApplicationprofileDosRlProfileRlProfileHttpHeaderRateLimitsActionRedirectPath | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviApplicationprofileDosRlProfileRlProfileHttpHeaderRateLimitsActionRedirectPath | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // tokens - computed: true, optional: false, required: false
  private _tokens = new DataAviApplicationprofileDosRlProfileRlProfileHttpHeaderRateLimitsActionRedirectPathTokensList(this, "tokens", false);
  public get tokens() {
    return this._tokens;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataAviApplicationprofileDosRlProfileRlProfileHttpHeaderRateLimitsActionRedirectPathList extends cdktf.ComplexList {

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
  public get(index: number): DataAviApplicationprofileDosRlProfileRlProfileHttpHeaderRateLimitsActionRedirectPathOutputReference {
    return new DataAviApplicationprofileDosRlProfileRlProfileHttpHeaderRateLimitsActionRedirectPathOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviApplicationprofileDosRlProfileRlProfileHttpHeaderRateLimitsActionRedirect {
}

export function dataAviApplicationprofileDosRlProfileRlProfileHttpHeaderRateLimitsActionRedirectToTerraform(struct?: DataAviApplicationprofileDosRlProfileRlProfileHttpHeaderRateLimitsActionRedirect): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviApplicationprofileDosRlProfileRlProfileHttpHeaderRateLimitsActionRedirectToHclTerraform(struct?: DataAviApplicationprofileDosRlProfileRlProfileHttpHeaderRateLimitsActionRedirect): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviApplicationprofileDosRlProfileRlProfileHttpHeaderRateLimitsActionRedirectOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviApplicationprofileDosRlProfileRlProfileHttpHeaderRateLimitsActionRedirect | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviApplicationprofileDosRlProfileRlProfileHttpHeaderRateLimitsActionRedirect | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // add_string - computed: true, optional: false, required: false
  public get addString() {
    return this.getStringAttribute('add_string');
  }

  // host - computed: true, optional: false, required: false
  private _host = new DataAviApplicationprofileDosRlProfileRlProfileHttpHeaderRateLimitsActionRedirectHostList(this, "host", true);
  public get host() {
    return this._host;
  }

  // keep_query - computed: true, optional: false, required: false
  public get keepQuery() {
    return this.getStringAttribute('keep_query');
  }

  // path - computed: true, optional: false, required: false
  private _path = new DataAviApplicationprofileDosRlProfileRlProfileHttpHeaderRateLimitsActionRedirectPathList(this, "path", true);
  public get path() {
    return this._path;
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getStringAttribute('port');
  }

  // protocol - computed: true, optional: false, required: false
  public get protocol() {
    return this.getStringAttribute('protocol');
  }

  // status_code - computed: true, optional: false, required: false
  public get statusCode() {
    return this.getStringAttribute('status_code');
  }
}

export class DataAviApplicationprofileDosRlProfileRlProfileHttpHeaderRateLimitsActionRedirectList extends cdktf.ComplexList {

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
  public get(index: number): DataAviApplicationprofileDosRlProfileRlProfileHttpHeaderRateLimitsActionRedirectOutputReference {
    return new DataAviApplicationprofileDosRlProfileRlProfileHttpHeaderRateLimitsActionRedirectOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviApplicationprofileDosRlProfileRlProfileHttpHeaderRateLimitsAction {
}

export function dataAviApplicationprofileDosRlProfileRlProfileHttpHeaderRateLimitsActionToTerraform(struct?: DataAviApplicationprofileDosRlProfileRlProfileHttpHeaderRateLimitsAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviApplicationprofileDosRlProfileRlProfileHttpHeaderRateLimitsActionToHclTerraform(struct?: DataAviApplicationprofileDosRlProfileRlProfileHttpHeaderRateLimitsAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviApplicationprofileDosRlProfileRlProfileHttpHeaderRateLimitsActionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviApplicationprofileDosRlProfileRlProfileHttpHeaderRateLimitsAction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviApplicationprofileDosRlProfileRlProfileHttpHeaderRateLimitsAction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // file - computed: true, optional: false, required: false
  private _file = new DataAviApplicationprofileDosRlProfileRlProfileHttpHeaderRateLimitsActionFileList(this, "file", true);
  public get file() {
    return this._file;
  }

  // redirect - computed: true, optional: false, required: false
  private _redirect = new DataAviApplicationprofileDosRlProfileRlProfileHttpHeaderRateLimitsActionRedirectList(this, "redirect", true);
  public get redirect() {
    return this._redirect;
  }

  // status_code - computed: true, optional: false, required: false
  public get statusCode() {
    return this.getStringAttribute('status_code');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataAviApplicationprofileDosRlProfileRlProfileHttpHeaderRateLimitsActionList extends cdktf.ComplexList {

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
  public get(index: number): DataAviApplicationprofileDosRlProfileRlProfileHttpHeaderRateLimitsActionOutputReference {
    return new DataAviApplicationprofileDosRlProfileRlProfileHttpHeaderRateLimitsActionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviApplicationprofileDosRlProfileRlProfileHttpHeaderRateLimitsRateLimiter {
}

export function dataAviApplicationprofileDosRlProfileRlProfileHttpHeaderRateLimitsRateLimiterToTerraform(struct?: DataAviApplicationprofileDosRlProfileRlProfileHttpHeaderRateLimitsRateLimiter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviApplicationprofileDosRlProfileRlProfileHttpHeaderRateLimitsRateLimiterToHclTerraform(struct?: DataAviApplicationprofileDosRlProfileRlProfileHttpHeaderRateLimitsRateLimiter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviApplicationprofileDosRlProfileRlProfileHttpHeaderRateLimitsRateLimiterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviApplicationprofileDosRlProfileRlProfileHttpHeaderRateLimitsRateLimiter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviApplicationprofileDosRlProfileRlProfileHttpHeaderRateLimitsRateLimiter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // burst_sz - computed: true, optional: false, required: false
  public get burstSz() {
    return this.getStringAttribute('burst_sz');
  }

  // count - computed: true, optional: false, required: false
  public get count() {
    return this.getStringAttribute('count');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // period - computed: true, optional: false, required: false
  public get period() {
    return this.getStringAttribute('period');
  }
}

export class DataAviApplicationprofileDosRlProfileRlProfileHttpHeaderRateLimitsRateLimiterList extends cdktf.ComplexList {

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
  public get(index: number): DataAviApplicationprofileDosRlProfileRlProfileHttpHeaderRateLimitsRateLimiterOutputReference {
    return new DataAviApplicationprofileDosRlProfileRlProfileHttpHeaderRateLimitsRateLimiterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviApplicationprofileDosRlProfileRlProfileHttpHeaderRateLimits {
}

export function dataAviApplicationprofileDosRlProfileRlProfileHttpHeaderRateLimitsToTerraform(struct?: DataAviApplicationprofileDosRlProfileRlProfileHttpHeaderRateLimits): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviApplicationprofileDosRlProfileRlProfileHttpHeaderRateLimitsToHclTerraform(struct?: DataAviApplicationprofileDosRlProfileRlProfileHttpHeaderRateLimits): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviApplicationprofileDosRlProfileRlProfileHttpHeaderRateLimitsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviApplicationprofileDosRlProfileRlProfileHttpHeaderRateLimits | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviApplicationprofileDosRlProfileRlProfileHttpHeaderRateLimits | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // action - computed: true, optional: false, required: false
  private _action = new DataAviApplicationprofileDosRlProfileRlProfileHttpHeaderRateLimitsActionList(this, "action", true);
  public get action() {
    return this._action;
  }

  // explicit_tracking - computed: true, optional: false, required: false
  public get explicitTracking() {
    return this.getStringAttribute('explicit_tracking');
  }

  // fine_grain - computed: true, optional: false, required: false
  public get fineGrain() {
    return this.getStringAttribute('fine_grain');
  }

  // http_cookie - computed: true, optional: false, required: false
  public get httpCookie() {
    return this.getStringAttribute('http_cookie');
  }

  // http_header - computed: true, optional: false, required: false
  public get httpHeader() {
    return this.getStringAttribute('http_header');
  }

  // rate_limiter - computed: true, optional: false, required: false
  private _rateLimiter = new DataAviApplicationprofileDosRlProfileRlProfileHttpHeaderRateLimitsRateLimiterList(this, "rate_limiter", true);
  public get rateLimiter() {
    return this._rateLimiter;
  }
}

export class DataAviApplicationprofileDosRlProfileRlProfileHttpHeaderRateLimitsList extends cdktf.ComplexList {

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
  public get(index: number): DataAviApplicationprofileDosRlProfileRlProfileHttpHeaderRateLimitsOutputReference {
    return new DataAviApplicationprofileDosRlProfileRlProfileHttpHeaderRateLimitsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviApplicationprofileDosRlProfileRlProfileUriFailedRequestsRateLimitActionFile {
}

export function dataAviApplicationprofileDosRlProfileRlProfileUriFailedRequestsRateLimitActionFileToTerraform(struct?: DataAviApplicationprofileDosRlProfileRlProfileUriFailedRequestsRateLimitActionFile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviApplicationprofileDosRlProfileRlProfileUriFailedRequestsRateLimitActionFileToHclTerraform(struct?: DataAviApplicationprofileDosRlProfileRlProfileUriFailedRequestsRateLimitActionFile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviApplicationprofileDosRlProfileRlProfileUriFailedRequestsRateLimitActionFileOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviApplicationprofileDosRlProfileRlProfileUriFailedRequestsRateLimitActionFile | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviApplicationprofileDosRlProfileRlProfileUriFailedRequestsRateLimitActionFile | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // content_type - computed: true, optional: false, required: false
  public get contentType() {
    return this.getStringAttribute('content_type');
  }

  // file_content - computed: true, optional: false, required: false
  public get fileContent() {
    return this.getStringAttribute('file_content');
  }

  // file_length - computed: true, optional: false, required: false
  public get fileLength() {
    return this.getStringAttribute('file_length');
  }
}

export class DataAviApplicationprofileDosRlProfileRlProfileUriFailedRequestsRateLimitActionFileList extends cdktf.ComplexList {

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
  public get(index: number): DataAviApplicationprofileDosRlProfileRlProfileUriFailedRequestsRateLimitActionFileOutputReference {
    return new DataAviApplicationprofileDosRlProfileRlProfileUriFailedRequestsRateLimitActionFileOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviApplicationprofileDosRlProfileRlProfileUriFailedRequestsRateLimitActionRedirectHostTokens {
}

export function dataAviApplicationprofileDosRlProfileRlProfileUriFailedRequestsRateLimitActionRedirectHostTokensToTerraform(struct?: DataAviApplicationprofileDosRlProfileRlProfileUriFailedRequestsRateLimitActionRedirectHostTokens): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviApplicationprofileDosRlProfileRlProfileUriFailedRequestsRateLimitActionRedirectHostTokensToHclTerraform(struct?: DataAviApplicationprofileDosRlProfileRlProfileUriFailedRequestsRateLimitActionRedirectHostTokens): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviApplicationprofileDosRlProfileRlProfileUriFailedRequestsRateLimitActionRedirectHostTokensOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviApplicationprofileDosRlProfileRlProfileUriFailedRequestsRateLimitActionRedirectHostTokens | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviApplicationprofileDosRlProfileRlProfileUriFailedRequestsRateLimitActionRedirectHostTokens | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // end_index - computed: true, optional: false, required: false
  public get endIndex() {
    return this.getStringAttribute('end_index');
  }

  // start_index - computed: true, optional: false, required: false
  public get startIndex() {
    return this.getStringAttribute('start_index');
  }

  // str_value - computed: true, optional: false, required: false
  public get strValue() {
    return this.getStringAttribute('str_value');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataAviApplicationprofileDosRlProfileRlProfileUriFailedRequestsRateLimitActionRedirectHostTokensList extends cdktf.ComplexList {

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
  public get(index: number): DataAviApplicationprofileDosRlProfileRlProfileUriFailedRequestsRateLimitActionRedirectHostTokensOutputReference {
    return new DataAviApplicationprofileDosRlProfileRlProfileUriFailedRequestsRateLimitActionRedirectHostTokensOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviApplicationprofileDosRlProfileRlProfileUriFailedRequestsRateLimitActionRedirectHost {
}

export function dataAviApplicationprofileDosRlProfileRlProfileUriFailedRequestsRateLimitActionRedirectHostToTerraform(struct?: DataAviApplicationprofileDosRlProfileRlProfileUriFailedRequestsRateLimitActionRedirectHost): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviApplicationprofileDosRlProfileRlProfileUriFailedRequestsRateLimitActionRedirectHostToHclTerraform(struct?: DataAviApplicationprofileDosRlProfileRlProfileUriFailedRequestsRateLimitActionRedirectHost): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviApplicationprofileDosRlProfileRlProfileUriFailedRequestsRateLimitActionRedirectHostOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviApplicationprofileDosRlProfileRlProfileUriFailedRequestsRateLimitActionRedirectHost | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviApplicationprofileDosRlProfileRlProfileUriFailedRequestsRateLimitActionRedirectHost | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // tokens - computed: true, optional: false, required: false
  private _tokens = new DataAviApplicationprofileDosRlProfileRlProfileUriFailedRequestsRateLimitActionRedirectHostTokensList(this, "tokens", false);
  public get tokens() {
    return this._tokens;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataAviApplicationprofileDosRlProfileRlProfileUriFailedRequestsRateLimitActionRedirectHostList extends cdktf.ComplexList {

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
  public get(index: number): DataAviApplicationprofileDosRlProfileRlProfileUriFailedRequestsRateLimitActionRedirectHostOutputReference {
    return new DataAviApplicationprofileDosRlProfileRlProfileUriFailedRequestsRateLimitActionRedirectHostOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviApplicationprofileDosRlProfileRlProfileUriFailedRequestsRateLimitActionRedirectPathTokens {
}

export function dataAviApplicationprofileDosRlProfileRlProfileUriFailedRequestsRateLimitActionRedirectPathTokensToTerraform(struct?: DataAviApplicationprofileDosRlProfileRlProfileUriFailedRequestsRateLimitActionRedirectPathTokens): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviApplicationprofileDosRlProfileRlProfileUriFailedRequestsRateLimitActionRedirectPathTokensToHclTerraform(struct?: DataAviApplicationprofileDosRlProfileRlProfileUriFailedRequestsRateLimitActionRedirectPathTokens): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviApplicationprofileDosRlProfileRlProfileUriFailedRequestsRateLimitActionRedirectPathTokensOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviApplicationprofileDosRlProfileRlProfileUriFailedRequestsRateLimitActionRedirectPathTokens | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviApplicationprofileDosRlProfileRlProfileUriFailedRequestsRateLimitActionRedirectPathTokens | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // end_index - computed: true, optional: false, required: false
  public get endIndex() {
    return this.getStringAttribute('end_index');
  }

  // start_index - computed: true, optional: false, required: false
  public get startIndex() {
    return this.getStringAttribute('start_index');
  }

  // str_value - computed: true, optional: false, required: false
  public get strValue() {
    return this.getStringAttribute('str_value');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataAviApplicationprofileDosRlProfileRlProfileUriFailedRequestsRateLimitActionRedirectPathTokensList extends cdktf.ComplexList {

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
  public get(index: number): DataAviApplicationprofileDosRlProfileRlProfileUriFailedRequestsRateLimitActionRedirectPathTokensOutputReference {
    return new DataAviApplicationprofileDosRlProfileRlProfileUriFailedRequestsRateLimitActionRedirectPathTokensOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviApplicationprofileDosRlProfileRlProfileUriFailedRequestsRateLimitActionRedirectPath {
}

export function dataAviApplicationprofileDosRlProfileRlProfileUriFailedRequestsRateLimitActionRedirectPathToTerraform(struct?: DataAviApplicationprofileDosRlProfileRlProfileUriFailedRequestsRateLimitActionRedirectPath): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviApplicationprofileDosRlProfileRlProfileUriFailedRequestsRateLimitActionRedirectPathToHclTerraform(struct?: DataAviApplicationprofileDosRlProfileRlProfileUriFailedRequestsRateLimitActionRedirectPath): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviApplicationprofileDosRlProfileRlProfileUriFailedRequestsRateLimitActionRedirectPathOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviApplicationprofileDosRlProfileRlProfileUriFailedRequestsRateLimitActionRedirectPath | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviApplicationprofileDosRlProfileRlProfileUriFailedRequestsRateLimitActionRedirectPath | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // tokens - computed: true, optional: false, required: false
  private _tokens = new DataAviApplicationprofileDosRlProfileRlProfileUriFailedRequestsRateLimitActionRedirectPathTokensList(this, "tokens", false);
  public get tokens() {
    return this._tokens;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataAviApplicationprofileDosRlProfileRlProfileUriFailedRequestsRateLimitActionRedirectPathList extends cdktf.ComplexList {

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
  public get(index: number): DataAviApplicationprofileDosRlProfileRlProfileUriFailedRequestsRateLimitActionRedirectPathOutputReference {
    return new DataAviApplicationprofileDosRlProfileRlProfileUriFailedRequestsRateLimitActionRedirectPathOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviApplicationprofileDosRlProfileRlProfileUriFailedRequestsRateLimitActionRedirect {
}

export function dataAviApplicationprofileDosRlProfileRlProfileUriFailedRequestsRateLimitActionRedirectToTerraform(struct?: DataAviApplicationprofileDosRlProfileRlProfileUriFailedRequestsRateLimitActionRedirect): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviApplicationprofileDosRlProfileRlProfileUriFailedRequestsRateLimitActionRedirectToHclTerraform(struct?: DataAviApplicationprofileDosRlProfileRlProfileUriFailedRequestsRateLimitActionRedirect): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviApplicationprofileDosRlProfileRlProfileUriFailedRequestsRateLimitActionRedirectOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviApplicationprofileDosRlProfileRlProfileUriFailedRequestsRateLimitActionRedirect | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviApplicationprofileDosRlProfileRlProfileUriFailedRequestsRateLimitActionRedirect | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // add_string - computed: true, optional: false, required: false
  public get addString() {
    return this.getStringAttribute('add_string');
  }

  // host - computed: true, optional: false, required: false
  private _host = new DataAviApplicationprofileDosRlProfileRlProfileUriFailedRequestsRateLimitActionRedirectHostList(this, "host", true);
  public get host() {
    return this._host;
  }

  // keep_query - computed: true, optional: false, required: false
  public get keepQuery() {
    return this.getStringAttribute('keep_query');
  }

  // path - computed: true, optional: false, required: false
  private _path = new DataAviApplicationprofileDosRlProfileRlProfileUriFailedRequestsRateLimitActionRedirectPathList(this, "path", true);
  public get path() {
    return this._path;
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getStringAttribute('port');
  }

  // protocol - computed: true, optional: false, required: false
  public get protocol() {
    return this.getStringAttribute('protocol');
  }

  // status_code - computed: true, optional: false, required: false
  public get statusCode() {
    return this.getStringAttribute('status_code');
  }
}

export class DataAviApplicationprofileDosRlProfileRlProfileUriFailedRequestsRateLimitActionRedirectList extends cdktf.ComplexList {

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
  public get(index: number): DataAviApplicationprofileDosRlProfileRlProfileUriFailedRequestsRateLimitActionRedirectOutputReference {
    return new DataAviApplicationprofileDosRlProfileRlProfileUriFailedRequestsRateLimitActionRedirectOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviApplicationprofileDosRlProfileRlProfileUriFailedRequestsRateLimitAction {
}

export function dataAviApplicationprofileDosRlProfileRlProfileUriFailedRequestsRateLimitActionToTerraform(struct?: DataAviApplicationprofileDosRlProfileRlProfileUriFailedRequestsRateLimitAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviApplicationprofileDosRlProfileRlProfileUriFailedRequestsRateLimitActionToHclTerraform(struct?: DataAviApplicationprofileDosRlProfileRlProfileUriFailedRequestsRateLimitAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviApplicationprofileDosRlProfileRlProfileUriFailedRequestsRateLimitActionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviApplicationprofileDosRlProfileRlProfileUriFailedRequestsRateLimitAction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviApplicationprofileDosRlProfileRlProfileUriFailedRequestsRateLimitAction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // file - computed: true, optional: false, required: false
  private _file = new DataAviApplicationprofileDosRlProfileRlProfileUriFailedRequestsRateLimitActionFileList(this, "file", true);
  public get file() {
    return this._file;
  }

  // redirect - computed: true, optional: false, required: false
  private _redirect = new DataAviApplicationprofileDosRlProfileRlProfileUriFailedRequestsRateLimitActionRedirectList(this, "redirect", true);
  public get redirect() {
    return this._redirect;
  }

  // status_code - computed: true, optional: false, required: false
  public get statusCode() {
    return this.getStringAttribute('status_code');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataAviApplicationprofileDosRlProfileRlProfileUriFailedRequestsRateLimitActionList extends cdktf.ComplexList {

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
  public get(index: number): DataAviApplicationprofileDosRlProfileRlProfileUriFailedRequestsRateLimitActionOutputReference {
    return new DataAviApplicationprofileDosRlProfileRlProfileUriFailedRequestsRateLimitActionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviApplicationprofileDosRlProfileRlProfileUriFailedRequestsRateLimitRateLimiter {
}

export function dataAviApplicationprofileDosRlProfileRlProfileUriFailedRequestsRateLimitRateLimiterToTerraform(struct?: DataAviApplicationprofileDosRlProfileRlProfileUriFailedRequestsRateLimitRateLimiter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviApplicationprofileDosRlProfileRlProfileUriFailedRequestsRateLimitRateLimiterToHclTerraform(struct?: DataAviApplicationprofileDosRlProfileRlProfileUriFailedRequestsRateLimitRateLimiter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviApplicationprofileDosRlProfileRlProfileUriFailedRequestsRateLimitRateLimiterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviApplicationprofileDosRlProfileRlProfileUriFailedRequestsRateLimitRateLimiter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviApplicationprofileDosRlProfileRlProfileUriFailedRequestsRateLimitRateLimiter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // burst_sz - computed: true, optional: false, required: false
  public get burstSz() {
    return this.getStringAttribute('burst_sz');
  }

  // count - computed: true, optional: false, required: false
  public get count() {
    return this.getStringAttribute('count');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // period - computed: true, optional: false, required: false
  public get period() {
    return this.getStringAttribute('period');
  }
}

export class DataAviApplicationprofileDosRlProfileRlProfileUriFailedRequestsRateLimitRateLimiterList extends cdktf.ComplexList {

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
  public get(index: number): DataAviApplicationprofileDosRlProfileRlProfileUriFailedRequestsRateLimitRateLimiterOutputReference {
    return new DataAviApplicationprofileDosRlProfileRlProfileUriFailedRequestsRateLimitRateLimiterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviApplicationprofileDosRlProfileRlProfileUriFailedRequestsRateLimit {
}

export function dataAviApplicationprofileDosRlProfileRlProfileUriFailedRequestsRateLimitToTerraform(struct?: DataAviApplicationprofileDosRlProfileRlProfileUriFailedRequestsRateLimit): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviApplicationprofileDosRlProfileRlProfileUriFailedRequestsRateLimitToHclTerraform(struct?: DataAviApplicationprofileDosRlProfileRlProfileUriFailedRequestsRateLimit): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviApplicationprofileDosRlProfileRlProfileUriFailedRequestsRateLimitOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviApplicationprofileDosRlProfileRlProfileUriFailedRequestsRateLimit | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviApplicationprofileDosRlProfileRlProfileUriFailedRequestsRateLimit | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // action - computed: true, optional: false, required: false
  private _action = new DataAviApplicationprofileDosRlProfileRlProfileUriFailedRequestsRateLimitActionList(this, "action", true);
  public get action() {
    return this._action;
  }

  // explicit_tracking - computed: true, optional: false, required: false
  public get explicitTracking() {
    return this.getStringAttribute('explicit_tracking');
  }

  // fine_grain - computed: true, optional: false, required: false
  public get fineGrain() {
    return this.getStringAttribute('fine_grain');
  }

  // http_cookie - computed: true, optional: false, required: false
  public get httpCookie() {
    return this.getStringAttribute('http_cookie');
  }

  // http_header - computed: true, optional: false, required: false
  public get httpHeader() {
    return this.getStringAttribute('http_header');
  }

  // rate_limiter - computed: true, optional: false, required: false
  private _rateLimiter = new DataAviApplicationprofileDosRlProfileRlProfileUriFailedRequestsRateLimitRateLimiterList(this, "rate_limiter", true);
  public get rateLimiter() {
    return this._rateLimiter;
  }
}

export class DataAviApplicationprofileDosRlProfileRlProfileUriFailedRequestsRateLimitList extends cdktf.ComplexList {

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
  public get(index: number): DataAviApplicationprofileDosRlProfileRlProfileUriFailedRequestsRateLimitOutputReference {
    return new DataAviApplicationprofileDosRlProfileRlProfileUriFailedRequestsRateLimitOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviApplicationprofileDosRlProfileRlProfileUriRequestsRateLimitActionFile {
}

export function dataAviApplicationprofileDosRlProfileRlProfileUriRequestsRateLimitActionFileToTerraform(struct?: DataAviApplicationprofileDosRlProfileRlProfileUriRequestsRateLimitActionFile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviApplicationprofileDosRlProfileRlProfileUriRequestsRateLimitActionFileToHclTerraform(struct?: DataAviApplicationprofileDosRlProfileRlProfileUriRequestsRateLimitActionFile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviApplicationprofileDosRlProfileRlProfileUriRequestsRateLimitActionFileOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviApplicationprofileDosRlProfileRlProfileUriRequestsRateLimitActionFile | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviApplicationprofileDosRlProfileRlProfileUriRequestsRateLimitActionFile | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // content_type - computed: true, optional: false, required: false
  public get contentType() {
    return this.getStringAttribute('content_type');
  }

  // file_content - computed: true, optional: false, required: false
  public get fileContent() {
    return this.getStringAttribute('file_content');
  }

  // file_length - computed: true, optional: false, required: false
  public get fileLength() {
    return this.getStringAttribute('file_length');
  }
}

export class DataAviApplicationprofileDosRlProfileRlProfileUriRequestsRateLimitActionFileList extends cdktf.ComplexList {

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
  public get(index: number): DataAviApplicationprofileDosRlProfileRlProfileUriRequestsRateLimitActionFileOutputReference {
    return new DataAviApplicationprofileDosRlProfileRlProfileUriRequestsRateLimitActionFileOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviApplicationprofileDosRlProfileRlProfileUriRequestsRateLimitActionRedirectHostTokens {
}

export function dataAviApplicationprofileDosRlProfileRlProfileUriRequestsRateLimitActionRedirectHostTokensToTerraform(struct?: DataAviApplicationprofileDosRlProfileRlProfileUriRequestsRateLimitActionRedirectHostTokens): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviApplicationprofileDosRlProfileRlProfileUriRequestsRateLimitActionRedirectHostTokensToHclTerraform(struct?: DataAviApplicationprofileDosRlProfileRlProfileUriRequestsRateLimitActionRedirectHostTokens): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviApplicationprofileDosRlProfileRlProfileUriRequestsRateLimitActionRedirectHostTokensOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviApplicationprofileDosRlProfileRlProfileUriRequestsRateLimitActionRedirectHostTokens | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviApplicationprofileDosRlProfileRlProfileUriRequestsRateLimitActionRedirectHostTokens | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // end_index - computed: true, optional: false, required: false
  public get endIndex() {
    return this.getStringAttribute('end_index');
  }

  // start_index - computed: true, optional: false, required: false
  public get startIndex() {
    return this.getStringAttribute('start_index');
  }

  // str_value - computed: true, optional: false, required: false
  public get strValue() {
    return this.getStringAttribute('str_value');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataAviApplicationprofileDosRlProfileRlProfileUriRequestsRateLimitActionRedirectHostTokensList extends cdktf.ComplexList {

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
  public get(index: number): DataAviApplicationprofileDosRlProfileRlProfileUriRequestsRateLimitActionRedirectHostTokensOutputReference {
    return new DataAviApplicationprofileDosRlProfileRlProfileUriRequestsRateLimitActionRedirectHostTokensOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviApplicationprofileDosRlProfileRlProfileUriRequestsRateLimitActionRedirectHost {
}

export function dataAviApplicationprofileDosRlProfileRlProfileUriRequestsRateLimitActionRedirectHostToTerraform(struct?: DataAviApplicationprofileDosRlProfileRlProfileUriRequestsRateLimitActionRedirectHost): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviApplicationprofileDosRlProfileRlProfileUriRequestsRateLimitActionRedirectHostToHclTerraform(struct?: DataAviApplicationprofileDosRlProfileRlProfileUriRequestsRateLimitActionRedirectHost): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviApplicationprofileDosRlProfileRlProfileUriRequestsRateLimitActionRedirectHostOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviApplicationprofileDosRlProfileRlProfileUriRequestsRateLimitActionRedirectHost | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviApplicationprofileDosRlProfileRlProfileUriRequestsRateLimitActionRedirectHost | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // tokens - computed: true, optional: false, required: false
  private _tokens = new DataAviApplicationprofileDosRlProfileRlProfileUriRequestsRateLimitActionRedirectHostTokensList(this, "tokens", false);
  public get tokens() {
    return this._tokens;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataAviApplicationprofileDosRlProfileRlProfileUriRequestsRateLimitActionRedirectHostList extends cdktf.ComplexList {

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
  public get(index: number): DataAviApplicationprofileDosRlProfileRlProfileUriRequestsRateLimitActionRedirectHostOutputReference {
    return new DataAviApplicationprofileDosRlProfileRlProfileUriRequestsRateLimitActionRedirectHostOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviApplicationprofileDosRlProfileRlProfileUriRequestsRateLimitActionRedirectPathTokens {
}

export function dataAviApplicationprofileDosRlProfileRlProfileUriRequestsRateLimitActionRedirectPathTokensToTerraform(struct?: DataAviApplicationprofileDosRlProfileRlProfileUriRequestsRateLimitActionRedirectPathTokens): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviApplicationprofileDosRlProfileRlProfileUriRequestsRateLimitActionRedirectPathTokensToHclTerraform(struct?: DataAviApplicationprofileDosRlProfileRlProfileUriRequestsRateLimitActionRedirectPathTokens): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviApplicationprofileDosRlProfileRlProfileUriRequestsRateLimitActionRedirectPathTokensOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviApplicationprofileDosRlProfileRlProfileUriRequestsRateLimitActionRedirectPathTokens | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviApplicationprofileDosRlProfileRlProfileUriRequestsRateLimitActionRedirectPathTokens | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // end_index - computed: true, optional: false, required: false
  public get endIndex() {
    return this.getStringAttribute('end_index');
  }

  // start_index - computed: true, optional: false, required: false
  public get startIndex() {
    return this.getStringAttribute('start_index');
  }

  // str_value - computed: true, optional: false, required: false
  public get strValue() {
    return this.getStringAttribute('str_value');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataAviApplicationprofileDosRlProfileRlProfileUriRequestsRateLimitActionRedirectPathTokensList extends cdktf.ComplexList {

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
  public get(index: number): DataAviApplicationprofileDosRlProfileRlProfileUriRequestsRateLimitActionRedirectPathTokensOutputReference {
    return new DataAviApplicationprofileDosRlProfileRlProfileUriRequestsRateLimitActionRedirectPathTokensOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviApplicationprofileDosRlProfileRlProfileUriRequestsRateLimitActionRedirectPath {
}

export function dataAviApplicationprofileDosRlProfileRlProfileUriRequestsRateLimitActionRedirectPathToTerraform(struct?: DataAviApplicationprofileDosRlProfileRlProfileUriRequestsRateLimitActionRedirectPath): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviApplicationprofileDosRlProfileRlProfileUriRequestsRateLimitActionRedirectPathToHclTerraform(struct?: DataAviApplicationprofileDosRlProfileRlProfileUriRequestsRateLimitActionRedirectPath): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviApplicationprofileDosRlProfileRlProfileUriRequestsRateLimitActionRedirectPathOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviApplicationprofileDosRlProfileRlProfileUriRequestsRateLimitActionRedirectPath | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviApplicationprofileDosRlProfileRlProfileUriRequestsRateLimitActionRedirectPath | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // tokens - computed: true, optional: false, required: false
  private _tokens = new DataAviApplicationprofileDosRlProfileRlProfileUriRequestsRateLimitActionRedirectPathTokensList(this, "tokens", false);
  public get tokens() {
    return this._tokens;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataAviApplicationprofileDosRlProfileRlProfileUriRequestsRateLimitActionRedirectPathList extends cdktf.ComplexList {

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
  public get(index: number): DataAviApplicationprofileDosRlProfileRlProfileUriRequestsRateLimitActionRedirectPathOutputReference {
    return new DataAviApplicationprofileDosRlProfileRlProfileUriRequestsRateLimitActionRedirectPathOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviApplicationprofileDosRlProfileRlProfileUriRequestsRateLimitActionRedirect {
}

export function dataAviApplicationprofileDosRlProfileRlProfileUriRequestsRateLimitActionRedirectToTerraform(struct?: DataAviApplicationprofileDosRlProfileRlProfileUriRequestsRateLimitActionRedirect): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviApplicationprofileDosRlProfileRlProfileUriRequestsRateLimitActionRedirectToHclTerraform(struct?: DataAviApplicationprofileDosRlProfileRlProfileUriRequestsRateLimitActionRedirect): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviApplicationprofileDosRlProfileRlProfileUriRequestsRateLimitActionRedirectOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviApplicationprofileDosRlProfileRlProfileUriRequestsRateLimitActionRedirect | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviApplicationprofileDosRlProfileRlProfileUriRequestsRateLimitActionRedirect | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // add_string - computed: true, optional: false, required: false
  public get addString() {
    return this.getStringAttribute('add_string');
  }

  // host - computed: true, optional: false, required: false
  private _host = new DataAviApplicationprofileDosRlProfileRlProfileUriRequestsRateLimitActionRedirectHostList(this, "host", true);
  public get host() {
    return this._host;
  }

  // keep_query - computed: true, optional: false, required: false
  public get keepQuery() {
    return this.getStringAttribute('keep_query');
  }

  // path - computed: true, optional: false, required: false
  private _path = new DataAviApplicationprofileDosRlProfileRlProfileUriRequestsRateLimitActionRedirectPathList(this, "path", true);
  public get path() {
    return this._path;
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getStringAttribute('port');
  }

  // protocol - computed: true, optional: false, required: false
  public get protocol() {
    return this.getStringAttribute('protocol');
  }

  // status_code - computed: true, optional: false, required: false
  public get statusCode() {
    return this.getStringAttribute('status_code');
  }
}

export class DataAviApplicationprofileDosRlProfileRlProfileUriRequestsRateLimitActionRedirectList extends cdktf.ComplexList {

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
  public get(index: number): DataAviApplicationprofileDosRlProfileRlProfileUriRequestsRateLimitActionRedirectOutputReference {
    return new DataAviApplicationprofileDosRlProfileRlProfileUriRequestsRateLimitActionRedirectOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviApplicationprofileDosRlProfileRlProfileUriRequestsRateLimitAction {
}

export function dataAviApplicationprofileDosRlProfileRlProfileUriRequestsRateLimitActionToTerraform(struct?: DataAviApplicationprofileDosRlProfileRlProfileUriRequestsRateLimitAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviApplicationprofileDosRlProfileRlProfileUriRequestsRateLimitActionToHclTerraform(struct?: DataAviApplicationprofileDosRlProfileRlProfileUriRequestsRateLimitAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviApplicationprofileDosRlProfileRlProfileUriRequestsRateLimitActionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviApplicationprofileDosRlProfileRlProfileUriRequestsRateLimitAction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviApplicationprofileDosRlProfileRlProfileUriRequestsRateLimitAction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // file - computed: true, optional: false, required: false
  private _file = new DataAviApplicationprofileDosRlProfileRlProfileUriRequestsRateLimitActionFileList(this, "file", true);
  public get file() {
    return this._file;
  }

  // redirect - computed: true, optional: false, required: false
  private _redirect = new DataAviApplicationprofileDosRlProfileRlProfileUriRequestsRateLimitActionRedirectList(this, "redirect", true);
  public get redirect() {
    return this._redirect;
  }

  // status_code - computed: true, optional: false, required: false
  public get statusCode() {
    return this.getStringAttribute('status_code');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataAviApplicationprofileDosRlProfileRlProfileUriRequestsRateLimitActionList extends cdktf.ComplexList {

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
  public get(index: number): DataAviApplicationprofileDosRlProfileRlProfileUriRequestsRateLimitActionOutputReference {
    return new DataAviApplicationprofileDosRlProfileRlProfileUriRequestsRateLimitActionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviApplicationprofileDosRlProfileRlProfileUriRequestsRateLimitRateLimiter {
}

export function dataAviApplicationprofileDosRlProfileRlProfileUriRequestsRateLimitRateLimiterToTerraform(struct?: DataAviApplicationprofileDosRlProfileRlProfileUriRequestsRateLimitRateLimiter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviApplicationprofileDosRlProfileRlProfileUriRequestsRateLimitRateLimiterToHclTerraform(struct?: DataAviApplicationprofileDosRlProfileRlProfileUriRequestsRateLimitRateLimiter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviApplicationprofileDosRlProfileRlProfileUriRequestsRateLimitRateLimiterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviApplicationprofileDosRlProfileRlProfileUriRequestsRateLimitRateLimiter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviApplicationprofileDosRlProfileRlProfileUriRequestsRateLimitRateLimiter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // burst_sz - computed: true, optional: false, required: false
  public get burstSz() {
    return this.getStringAttribute('burst_sz');
  }

  // count - computed: true, optional: false, required: false
  public get count() {
    return this.getStringAttribute('count');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // period - computed: true, optional: false, required: false
  public get period() {
    return this.getStringAttribute('period');
  }
}

export class DataAviApplicationprofileDosRlProfileRlProfileUriRequestsRateLimitRateLimiterList extends cdktf.ComplexList {

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
  public get(index: number): DataAviApplicationprofileDosRlProfileRlProfileUriRequestsRateLimitRateLimiterOutputReference {
    return new DataAviApplicationprofileDosRlProfileRlProfileUriRequestsRateLimitRateLimiterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviApplicationprofileDosRlProfileRlProfileUriRequestsRateLimit {
}

export function dataAviApplicationprofileDosRlProfileRlProfileUriRequestsRateLimitToTerraform(struct?: DataAviApplicationprofileDosRlProfileRlProfileUriRequestsRateLimit): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviApplicationprofileDosRlProfileRlProfileUriRequestsRateLimitToHclTerraform(struct?: DataAviApplicationprofileDosRlProfileRlProfileUriRequestsRateLimit): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviApplicationprofileDosRlProfileRlProfileUriRequestsRateLimitOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviApplicationprofileDosRlProfileRlProfileUriRequestsRateLimit | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviApplicationprofileDosRlProfileRlProfileUriRequestsRateLimit | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // action - computed: true, optional: false, required: false
  private _action = new DataAviApplicationprofileDosRlProfileRlProfileUriRequestsRateLimitActionList(this, "action", true);
  public get action() {
    return this._action;
  }

  // explicit_tracking - computed: true, optional: false, required: false
  public get explicitTracking() {
    return this.getStringAttribute('explicit_tracking');
  }

  // fine_grain - computed: true, optional: false, required: false
  public get fineGrain() {
    return this.getStringAttribute('fine_grain');
  }

  // http_cookie - computed: true, optional: false, required: false
  public get httpCookie() {
    return this.getStringAttribute('http_cookie');
  }

  // http_header - computed: true, optional: false, required: false
  public get httpHeader() {
    return this.getStringAttribute('http_header');
  }

  // rate_limiter - computed: true, optional: false, required: false
  private _rateLimiter = new DataAviApplicationprofileDosRlProfileRlProfileUriRequestsRateLimitRateLimiterList(this, "rate_limiter", true);
  public get rateLimiter() {
    return this._rateLimiter;
  }
}

export class DataAviApplicationprofileDosRlProfileRlProfileUriRequestsRateLimitList extends cdktf.ComplexList {

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
  public get(index: number): DataAviApplicationprofileDosRlProfileRlProfileUriRequestsRateLimitOutputReference {
    return new DataAviApplicationprofileDosRlProfileRlProfileUriRequestsRateLimitOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviApplicationprofileDosRlProfileRlProfileUriScannersRequestsRateLimitActionFile {
}

export function dataAviApplicationprofileDosRlProfileRlProfileUriScannersRequestsRateLimitActionFileToTerraform(struct?: DataAviApplicationprofileDosRlProfileRlProfileUriScannersRequestsRateLimitActionFile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviApplicationprofileDosRlProfileRlProfileUriScannersRequestsRateLimitActionFileToHclTerraform(struct?: DataAviApplicationprofileDosRlProfileRlProfileUriScannersRequestsRateLimitActionFile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviApplicationprofileDosRlProfileRlProfileUriScannersRequestsRateLimitActionFileOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviApplicationprofileDosRlProfileRlProfileUriScannersRequestsRateLimitActionFile | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviApplicationprofileDosRlProfileRlProfileUriScannersRequestsRateLimitActionFile | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // content_type - computed: true, optional: false, required: false
  public get contentType() {
    return this.getStringAttribute('content_type');
  }

  // file_content - computed: true, optional: false, required: false
  public get fileContent() {
    return this.getStringAttribute('file_content');
  }

  // file_length - computed: true, optional: false, required: false
  public get fileLength() {
    return this.getStringAttribute('file_length');
  }
}

export class DataAviApplicationprofileDosRlProfileRlProfileUriScannersRequestsRateLimitActionFileList extends cdktf.ComplexList {

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
  public get(index: number): DataAviApplicationprofileDosRlProfileRlProfileUriScannersRequestsRateLimitActionFileOutputReference {
    return new DataAviApplicationprofileDosRlProfileRlProfileUriScannersRequestsRateLimitActionFileOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviApplicationprofileDosRlProfileRlProfileUriScannersRequestsRateLimitActionRedirectHostTokens {
}

export function dataAviApplicationprofileDosRlProfileRlProfileUriScannersRequestsRateLimitActionRedirectHostTokensToTerraform(struct?: DataAviApplicationprofileDosRlProfileRlProfileUriScannersRequestsRateLimitActionRedirectHostTokens): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviApplicationprofileDosRlProfileRlProfileUriScannersRequestsRateLimitActionRedirectHostTokensToHclTerraform(struct?: DataAviApplicationprofileDosRlProfileRlProfileUriScannersRequestsRateLimitActionRedirectHostTokens): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviApplicationprofileDosRlProfileRlProfileUriScannersRequestsRateLimitActionRedirectHostTokensOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviApplicationprofileDosRlProfileRlProfileUriScannersRequestsRateLimitActionRedirectHostTokens | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviApplicationprofileDosRlProfileRlProfileUriScannersRequestsRateLimitActionRedirectHostTokens | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // end_index - computed: true, optional: false, required: false
  public get endIndex() {
    return this.getStringAttribute('end_index');
  }

  // start_index - computed: true, optional: false, required: false
  public get startIndex() {
    return this.getStringAttribute('start_index');
  }

  // str_value - computed: true, optional: false, required: false
  public get strValue() {
    return this.getStringAttribute('str_value');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataAviApplicationprofileDosRlProfileRlProfileUriScannersRequestsRateLimitActionRedirectHostTokensList extends cdktf.ComplexList {

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
  public get(index: number): DataAviApplicationprofileDosRlProfileRlProfileUriScannersRequestsRateLimitActionRedirectHostTokensOutputReference {
    return new DataAviApplicationprofileDosRlProfileRlProfileUriScannersRequestsRateLimitActionRedirectHostTokensOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviApplicationprofileDosRlProfileRlProfileUriScannersRequestsRateLimitActionRedirectHost {
}

export function dataAviApplicationprofileDosRlProfileRlProfileUriScannersRequestsRateLimitActionRedirectHostToTerraform(struct?: DataAviApplicationprofileDosRlProfileRlProfileUriScannersRequestsRateLimitActionRedirectHost): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviApplicationprofileDosRlProfileRlProfileUriScannersRequestsRateLimitActionRedirectHostToHclTerraform(struct?: DataAviApplicationprofileDosRlProfileRlProfileUriScannersRequestsRateLimitActionRedirectHost): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviApplicationprofileDosRlProfileRlProfileUriScannersRequestsRateLimitActionRedirectHostOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviApplicationprofileDosRlProfileRlProfileUriScannersRequestsRateLimitActionRedirectHost | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviApplicationprofileDosRlProfileRlProfileUriScannersRequestsRateLimitActionRedirectHost | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // tokens - computed: true, optional: false, required: false
  private _tokens = new DataAviApplicationprofileDosRlProfileRlProfileUriScannersRequestsRateLimitActionRedirectHostTokensList(this, "tokens", false);
  public get tokens() {
    return this._tokens;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataAviApplicationprofileDosRlProfileRlProfileUriScannersRequestsRateLimitActionRedirectHostList extends cdktf.ComplexList {

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
  public get(index: number): DataAviApplicationprofileDosRlProfileRlProfileUriScannersRequestsRateLimitActionRedirectHostOutputReference {
    return new DataAviApplicationprofileDosRlProfileRlProfileUriScannersRequestsRateLimitActionRedirectHostOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviApplicationprofileDosRlProfileRlProfileUriScannersRequestsRateLimitActionRedirectPathTokens {
}

export function dataAviApplicationprofileDosRlProfileRlProfileUriScannersRequestsRateLimitActionRedirectPathTokensToTerraform(struct?: DataAviApplicationprofileDosRlProfileRlProfileUriScannersRequestsRateLimitActionRedirectPathTokens): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviApplicationprofileDosRlProfileRlProfileUriScannersRequestsRateLimitActionRedirectPathTokensToHclTerraform(struct?: DataAviApplicationprofileDosRlProfileRlProfileUriScannersRequestsRateLimitActionRedirectPathTokens): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviApplicationprofileDosRlProfileRlProfileUriScannersRequestsRateLimitActionRedirectPathTokensOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviApplicationprofileDosRlProfileRlProfileUriScannersRequestsRateLimitActionRedirectPathTokens | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviApplicationprofileDosRlProfileRlProfileUriScannersRequestsRateLimitActionRedirectPathTokens | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // end_index - computed: true, optional: false, required: false
  public get endIndex() {
    return this.getStringAttribute('end_index');
  }

  // start_index - computed: true, optional: false, required: false
  public get startIndex() {
    return this.getStringAttribute('start_index');
  }

  // str_value - computed: true, optional: false, required: false
  public get strValue() {
    return this.getStringAttribute('str_value');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataAviApplicationprofileDosRlProfileRlProfileUriScannersRequestsRateLimitActionRedirectPathTokensList extends cdktf.ComplexList {

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
  public get(index: number): DataAviApplicationprofileDosRlProfileRlProfileUriScannersRequestsRateLimitActionRedirectPathTokensOutputReference {
    return new DataAviApplicationprofileDosRlProfileRlProfileUriScannersRequestsRateLimitActionRedirectPathTokensOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviApplicationprofileDosRlProfileRlProfileUriScannersRequestsRateLimitActionRedirectPath {
}

export function dataAviApplicationprofileDosRlProfileRlProfileUriScannersRequestsRateLimitActionRedirectPathToTerraform(struct?: DataAviApplicationprofileDosRlProfileRlProfileUriScannersRequestsRateLimitActionRedirectPath): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviApplicationprofileDosRlProfileRlProfileUriScannersRequestsRateLimitActionRedirectPathToHclTerraform(struct?: DataAviApplicationprofileDosRlProfileRlProfileUriScannersRequestsRateLimitActionRedirectPath): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviApplicationprofileDosRlProfileRlProfileUriScannersRequestsRateLimitActionRedirectPathOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviApplicationprofileDosRlProfileRlProfileUriScannersRequestsRateLimitActionRedirectPath | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviApplicationprofileDosRlProfileRlProfileUriScannersRequestsRateLimitActionRedirectPath | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // tokens - computed: true, optional: false, required: false
  private _tokens = new DataAviApplicationprofileDosRlProfileRlProfileUriScannersRequestsRateLimitActionRedirectPathTokensList(this, "tokens", false);
  public get tokens() {
    return this._tokens;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataAviApplicationprofileDosRlProfileRlProfileUriScannersRequestsRateLimitActionRedirectPathList extends cdktf.ComplexList {

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
  public get(index: number): DataAviApplicationprofileDosRlProfileRlProfileUriScannersRequestsRateLimitActionRedirectPathOutputReference {
    return new DataAviApplicationprofileDosRlProfileRlProfileUriScannersRequestsRateLimitActionRedirectPathOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
