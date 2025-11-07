// https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/cdn_domain
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CdnDomainConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/cdn_domain#block_ips CdnDomain#block_ips}
  */
  readonly blockIps?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/cdn_domain#cdn_type CdnDomain#cdn_type}
  */
  readonly cdnType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/cdn_domain#domain_name CdnDomain#domain_name}
  */
  readonly domainName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/cdn_domain#id CdnDomain#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/cdn_domain#optimize_enable CdnDomain#optimize_enable}
  */
  readonly optimizeEnable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/cdn_domain#page_compress_enable CdnDomain#page_compress_enable}
  */
  readonly pageCompressEnable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/cdn_domain#range_enable CdnDomain#range_enable}
  */
  readonly rangeEnable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/cdn_domain#scope CdnDomain#scope}
  */
  readonly scope?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/cdn_domain#source_port CdnDomain#source_port}
  */
  readonly sourcePort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/cdn_domain#source_type CdnDomain#source_type}
  */
  readonly sourceType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/cdn_domain#sources CdnDomain#sources}
  */
  readonly sources?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/cdn_domain#video_seek_enable CdnDomain#video_seek_enable}
  */
  readonly videoSeekEnable?: string;
  /**
  * auth_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/cdn_domain#auth_config CdnDomain#auth_config}
  */
  readonly authConfig?: CdnDomainAuthConfig;
  /**
  * cache_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/cdn_domain#cache_config CdnDomain#cache_config}
  */
  readonly cacheConfig?: CdnDomainCacheConfig[] | cdktf.IResolvable;
  /**
  * certificate_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/cdn_domain#certificate_config CdnDomain#certificate_config}
  */
  readonly certificateConfig?: CdnDomainCertificateConfig;
  /**
  * http_header_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/cdn_domain#http_header_config CdnDomain#http_header_config}
  */
  readonly httpHeaderConfig?: CdnDomainHttpHeaderConfig[] | cdktf.IResolvable;
  /**
  * page_404_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/cdn_domain#page_404_config CdnDomain#page_404_config}
  */
  readonly page404Config?: CdnDomainPage404Config;
  /**
  * parameter_filter_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/cdn_domain#parameter_filter_config CdnDomain#parameter_filter_config}
  */
  readonly parameterFilterConfig?: CdnDomainParameterFilterConfig;
  /**
  * refer_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/cdn_domain#refer_config CdnDomain#refer_config}
  */
  readonly referConfig?: CdnDomainReferConfig;
}
export interface CdnDomainAuthConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/cdn_domain#auth_type CdnDomain#auth_type}
  */
  readonly authType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/cdn_domain#master_key CdnDomain#master_key}
  */
  readonly masterKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/cdn_domain#slave_key CdnDomain#slave_key}
  */
  readonly slaveKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/cdn_domain#timeout CdnDomain#timeout}
  */
  readonly timeout?: number;
}

export function cdnDomainAuthConfigToTerraform(struct?: CdnDomainAuthConfigOutputReference | CdnDomainAuthConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auth_type: cdktf.stringToTerraform(struct!.authType),
    master_key: cdktf.stringToTerraform(struct!.masterKey),
    slave_key: cdktf.stringToTerraform(struct!.slaveKey),
    timeout: cdktf.numberToTerraform(struct!.timeout),
  }
}


export function cdnDomainAuthConfigToHclTerraform(struct?: CdnDomainAuthConfigOutputReference | CdnDomainAuthConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auth_type: {
      value: cdktf.stringToHclTerraform(struct!.authType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    master_key: {
      value: cdktf.stringToHclTerraform(struct!.masterKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    slave_key: {
      value: cdktf.stringToHclTerraform(struct!.slaveKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timeout: {
      value: cdktf.numberToHclTerraform(struct!.timeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnDomainAuthConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnDomainAuthConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authType !== undefined) {
      hasAnyValues = true;
      internalValueResult.authType = this._authType;
    }
    if (this._masterKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.masterKey = this._masterKey;
    }
    if (this._slaveKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.slaveKey = this._slaveKey;
    }
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnDomainAuthConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._authType = undefined;
      this._masterKey = undefined;
      this._slaveKey = undefined;
      this._timeout = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._authType = value.authType;
      this._masterKey = value.masterKey;
      this._slaveKey = value.slaveKey;
      this._timeout = value.timeout;
    }
  }

  // auth_type - computed: false, optional: true, required: false
  private _authType?: string; 
  public get authType() {
    return this.getStringAttribute('auth_type');
  }
  public set authType(value: string) {
    this._authType = value;
  }
  public resetAuthType() {
    this._authType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authTypeInput() {
    return this._authType;
  }

  // master_key - computed: true, optional: true, required: false
  private _masterKey?: string; 
  public get masterKey() {
    return this.getStringAttribute('master_key');
  }
  public set masterKey(value: string) {
    this._masterKey = value;
  }
  public resetMasterKey() {
    this._masterKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get masterKeyInput() {
    return this._masterKey;
  }

  // slave_key - computed: true, optional: true, required: false
  private _slaveKey?: string; 
  public get slaveKey() {
    return this.getStringAttribute('slave_key');
  }
  public set slaveKey(value: string) {
    this._slaveKey = value;
  }
  public resetSlaveKey() {
    this._slaveKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slaveKeyInput() {
    return this._slaveKey;
  }

  // timeout - computed: false, optional: true, required: false
  private _timeout?: number; 
  public get timeout() {
    return this.getNumberAttribute('timeout');
  }
  public set timeout(value: number) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
  }
}
export interface CdnDomainCacheConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/cdn_domain#cache_content CdnDomain#cache_content}
  */
  readonly cacheContent: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/cdn_domain#cache_type CdnDomain#cache_type}
  */
  readonly cacheType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/cdn_domain#ttl CdnDomain#ttl}
  */
  readonly ttl: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/cdn_domain#weight CdnDomain#weight}
  */
  readonly weight?: number;
}

export function cdnDomainCacheConfigToTerraform(struct?: CdnDomainCacheConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cache_content: cdktf.stringToTerraform(struct!.cacheContent),
    cache_type: cdktf.stringToTerraform(struct!.cacheType),
    ttl: cdktf.numberToTerraform(struct!.ttl),
    weight: cdktf.numberToTerraform(struct!.weight),
  }
}


export function cdnDomainCacheConfigToHclTerraform(struct?: CdnDomainCacheConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cache_content: {
      value: cdktf.stringToHclTerraform(struct!.cacheContent),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cache_type: {
      value: cdktf.stringToHclTerraform(struct!.cacheType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ttl: {
      value: cdktf.numberToHclTerraform(struct!.ttl),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    weight: {
      value: cdktf.numberToHclTerraform(struct!.weight),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnDomainCacheConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CdnDomainCacheConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cacheContent !== undefined) {
      hasAnyValues = true;
      internalValueResult.cacheContent = this._cacheContent;
    }
    if (this._cacheType !== undefined) {
      hasAnyValues = true;
      internalValueResult.cacheType = this._cacheType;
    }
    if (this._ttl !== undefined) {
      hasAnyValues = true;
      internalValueResult.ttl = this._ttl;
    }
    if (this._weight !== undefined) {
      hasAnyValues = true;
      internalValueResult.weight = this._weight;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnDomainCacheConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cacheContent = undefined;
      this._cacheType = undefined;
      this._ttl = undefined;
      this._weight = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cacheContent = value.cacheContent;
      this._cacheType = value.cacheType;
      this._ttl = value.ttl;
      this._weight = value.weight;
    }
  }

  // cache_content - computed: false, optional: false, required: true
  private _cacheContent?: string; 
  public get cacheContent() {
    return this.getStringAttribute('cache_content');
  }
  public set cacheContent(value: string) {
    this._cacheContent = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheContentInput() {
    return this._cacheContent;
  }

  // cache_id - computed: true, optional: false, required: false
  public get cacheId() {
    return this.getStringAttribute('cache_id');
  }

  // cache_type - computed: false, optional: false, required: true
  private _cacheType?: string; 
  public get cacheType() {
    return this.getStringAttribute('cache_type');
  }
  public set cacheType(value: string) {
    this._cacheType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheTypeInput() {
    return this._cacheType;
  }

  // ttl - computed: false, optional: false, required: true
  private _ttl?: number; 
  public get ttl() {
    return this.getNumberAttribute('ttl');
  }
  public set ttl(value: number) {
    this._ttl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ttlInput() {
    return this._ttl;
  }

  // weight - computed: false, optional: true, required: false
  private _weight?: number; 
  public get weight() {
    return this.getNumberAttribute('weight');
  }
  public set weight(value: number) {
    this._weight = value;
  }
  public resetWeight() {
    this._weight = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weightInput() {
    return this._weight;
  }
}

export class CdnDomainCacheConfigList extends cdktf.ComplexList {
  public internalValue? : CdnDomainCacheConfig[] | cdktf.IResolvable

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
  public get(index: number): CdnDomainCacheConfigOutputReference {
    return new CdnDomainCacheConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CdnDomainCertificateConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/cdn_domain#private_key CdnDomain#private_key}
  */
  readonly privateKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/cdn_domain#server_certificate CdnDomain#server_certificate}
  */
  readonly serverCertificate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/cdn_domain#server_certificate_status CdnDomain#server_certificate_status}
  */
  readonly serverCertificateStatus?: string;
}

export function cdnDomainCertificateConfigToTerraform(struct?: CdnDomainCertificateConfigOutputReference | CdnDomainCertificateConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    private_key: cdktf.stringToTerraform(struct!.privateKey),
    server_certificate: cdktf.stringToTerraform(struct!.serverCertificate),
    server_certificate_status: cdktf.stringToTerraform(struct!.serverCertificateStatus),
  }
}


export function cdnDomainCertificateConfigToHclTerraform(struct?: CdnDomainCertificateConfigOutputReference | CdnDomainCertificateConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    private_key: {
      value: cdktf.stringToHclTerraform(struct!.privateKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    server_certificate: {
      value: cdktf.stringToHclTerraform(struct!.serverCertificate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    server_certificate_status: {
      value: cdktf.stringToHclTerraform(struct!.serverCertificateStatus),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnDomainCertificateConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnDomainCertificateConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._privateKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateKey = this._privateKey;
    }
    if (this._serverCertificate !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverCertificate = this._serverCertificate;
    }
    if (this._serverCertificateStatus !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverCertificateStatus = this._serverCertificateStatus;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnDomainCertificateConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._privateKey = undefined;
      this._serverCertificate = undefined;
      this._serverCertificateStatus = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._privateKey = value.privateKey;
      this._serverCertificate = value.serverCertificate;
      this._serverCertificateStatus = value.serverCertificateStatus;
    }
  }

  // private_key - computed: false, optional: true, required: false
  private _privateKey?: string; 
  public get privateKey() {
    return this.getStringAttribute('private_key');
  }
  public set privateKey(value: string) {
    this._privateKey = value;
  }
  public resetPrivateKey() {
    this._privateKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateKeyInput() {
    return this._privateKey;
  }

  // server_certificate - computed: false, optional: true, required: false
  private _serverCertificate?: string; 
  public get serverCertificate() {
    return this.getStringAttribute('server_certificate');
  }
  public set serverCertificate(value: string) {
    this._serverCertificate = value;
  }
  public resetServerCertificate() {
    this._serverCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverCertificateInput() {
    return this._serverCertificate;
  }

  // server_certificate_status - computed: false, optional: true, required: false
  private _serverCertificateStatus?: string; 
  public get serverCertificateStatus() {
    return this.getStringAttribute('server_certificate_status');
  }
  public set serverCertificateStatus(value: string) {
    this._serverCertificateStatus = value;
  }
  public resetServerCertificateStatus() {
    this._serverCertificateStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverCertificateStatusInput() {
    return this._serverCertificateStatus;
  }
}
export interface CdnDomainHttpHeaderConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/cdn_domain#header_key CdnDomain#header_key}
  */
  readonly headerKey: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/cdn_domain#header_value CdnDomain#header_value}
  */
  readonly headerValue: string;
}

export function cdnDomainHttpHeaderConfigToTerraform(struct?: CdnDomainHttpHeaderConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    header_key: cdktf.stringToTerraform(struct!.headerKey),
    header_value: cdktf.stringToTerraform(struct!.headerValue),
  }
}


export function cdnDomainHttpHeaderConfigToHclTerraform(struct?: CdnDomainHttpHeaderConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    header_key: {
      value: cdktf.stringToHclTerraform(struct!.headerKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    header_value: {
      value: cdktf.stringToHclTerraform(struct!.headerValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnDomainHttpHeaderConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CdnDomainHttpHeaderConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._headerKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerKey = this._headerKey;
    }
    if (this._headerValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerValue = this._headerValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnDomainHttpHeaderConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._headerKey = undefined;
      this._headerValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._headerKey = value.headerKey;
      this._headerValue = value.headerValue;
    }
  }

  // header_id - computed: true, optional: false, required: false
  public get headerId() {
    return this.getStringAttribute('header_id');
  }

  // header_key - computed: false, optional: false, required: true
  private _headerKey?: string; 
  public get headerKey() {
    return this.getStringAttribute('header_key');
  }
  public set headerKey(value: string) {
    this._headerKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get headerKeyInput() {
    return this._headerKey;
  }

  // header_value - computed: false, optional: false, required: true
  private _headerValue?: string; 
  public get headerValue() {
    return this.getStringAttribute('header_value');
  }
  public set headerValue(value: string) {
    this._headerValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get headerValueInput() {
    return this._headerValue;
  }
}

export class CdnDomainHttpHeaderConfigList extends cdktf.ComplexList {
  public internalValue? : CdnDomainHttpHeaderConfig[] | cdktf.IResolvable

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
  public get(index: number): CdnDomainHttpHeaderConfigOutputReference {
    return new CdnDomainHttpHeaderConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CdnDomainPage404Config {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/cdn_domain#custom_page_url CdnDomain#custom_page_url}
  */
  readonly customPageUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/cdn_domain#page_type CdnDomain#page_type}
  */
  readonly pageType?: string;
}

export function cdnDomainPage404ConfigToTerraform(struct?: CdnDomainPage404ConfigOutputReference | CdnDomainPage404Config): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_page_url: cdktf.stringToTerraform(struct!.customPageUrl),
    page_type: cdktf.stringToTerraform(struct!.pageType),
  }
}


export function cdnDomainPage404ConfigToHclTerraform(struct?: CdnDomainPage404ConfigOutputReference | CdnDomainPage404Config): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    custom_page_url: {
      value: cdktf.stringToHclTerraform(struct!.customPageUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    page_type: {
      value: cdktf.stringToHclTerraform(struct!.pageType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnDomainPage404ConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnDomainPage404Config | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customPageUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.customPageUrl = this._customPageUrl;
    }
    if (this._pageType !== undefined) {
      hasAnyValues = true;
      internalValueResult.pageType = this._pageType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnDomainPage404Config | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._customPageUrl = undefined;
      this._pageType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._customPageUrl = value.customPageUrl;
      this._pageType = value.pageType;
    }
  }

  // custom_page_url - computed: false, optional: true, required: false
  private _customPageUrl?: string; 
  public get customPageUrl() {
    return this.getStringAttribute('custom_page_url');
  }
  public set customPageUrl(value: string) {
    this._customPageUrl = value;
  }
  public resetCustomPageUrl() {
    this._customPageUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customPageUrlInput() {
    return this._customPageUrl;
  }

  // error_code - computed: true, optional: false, required: false
  public get errorCode() {
    return this.getStringAttribute('error_code');
  }

  // page_type - computed: false, optional: true, required: false
  private _pageType?: string; 
  public get pageType() {
    return this.getStringAttribute('page_type');
  }
  public set pageType(value: string) {
    this._pageType = value;
  }
  public resetPageType() {
    this._pageType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pageTypeInput() {
    return this._pageType;
  }
}
export interface CdnDomainParameterFilterConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/cdn_domain#enable CdnDomain#enable}
  */
  readonly enable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/cdn_domain#hash_key_args CdnDomain#hash_key_args}
  */
  readonly hashKeyArgs?: string[];
}

export function cdnDomainParameterFilterConfigToTerraform(struct?: CdnDomainParameterFilterConfigOutputReference | CdnDomainParameterFilterConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable: cdktf.stringToTerraform(struct!.enable),
    hash_key_args: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.hashKeyArgs),
  }
}


export function cdnDomainParameterFilterConfigToHclTerraform(struct?: CdnDomainParameterFilterConfigOutputReference | CdnDomainParameterFilterConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable: {
      value: cdktf.stringToHclTerraform(struct!.enable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hash_key_args: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.hashKeyArgs),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnDomainParameterFilterConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnDomainParameterFilterConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    if (this._hashKeyArgs !== undefined) {
      hasAnyValues = true;
      internalValueResult.hashKeyArgs = this._hashKeyArgs;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnDomainParameterFilterConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enable = undefined;
      this._hashKeyArgs = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enable = value.enable;
      this._hashKeyArgs = value.hashKeyArgs;
    }
  }

  // enable - computed: false, optional: true, required: false
  private _enable?: string; 
  public get enable() {
    return this.getStringAttribute('enable');
  }
  public set enable(value: string) {
    this._enable = value;
  }
  public resetEnable() {
    this._enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
  }

  // hash_key_args - computed: true, optional: true, required: false
  private _hashKeyArgs?: string[]; 
  public get hashKeyArgs() {
    return this.getListAttribute('hash_key_args');
  }
  public set hashKeyArgs(value: string[]) {
    this._hashKeyArgs = value;
  }
  public resetHashKeyArgs() {
    this._hashKeyArgs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hashKeyArgsInput() {
    return this._hashKeyArgs;
  }
}
export interface CdnDomainReferConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/cdn_domain#allow_empty CdnDomain#allow_empty}
  */
  readonly allowEmpty?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/cdn_domain#refer_list CdnDomain#refer_list}
  */
  readonly referList: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/cdn_domain#refer_type CdnDomain#refer_type}
  */
  readonly referType?: string;
}

export function cdnDomainReferConfigToTerraform(struct?: CdnDomainReferConfigOutputReference | CdnDomainReferConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_empty: cdktf.stringToTerraform(struct!.allowEmpty),
    refer_list: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.referList),
    refer_type: cdktf.stringToTerraform(struct!.referType),
  }
}


export function cdnDomainReferConfigToHclTerraform(struct?: CdnDomainReferConfigOutputReference | CdnDomainReferConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_empty: {
      value: cdktf.stringToHclTerraform(struct!.allowEmpty),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    refer_list: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.referList),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    refer_type: {
      value: cdktf.stringToHclTerraform(struct!.referType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnDomainReferConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnDomainReferConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowEmpty !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowEmpty = this._allowEmpty;
    }
    if (this._referList !== undefined) {
      hasAnyValues = true;
      internalValueResult.referList = this._referList;
    }
    if (this._referType !== undefined) {
      hasAnyValues = true;
      internalValueResult.referType = this._referType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnDomainReferConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowEmpty = undefined;
      this._referList = undefined;
      this._referType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowEmpty = value.allowEmpty;
      this._referList = value.referList;
      this._referType = value.referType;
    }
  }

  // allow_empty - computed: false, optional: true, required: false
  private _allowEmpty?: string; 
  public get allowEmpty() {
    return this.getStringAttribute('allow_empty');
  }
  public set allowEmpty(value: string) {
    this._allowEmpty = value;
  }
  public resetAllowEmpty() {
    this._allowEmpty = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowEmptyInput() {
    return this._allowEmpty;
  }

  // refer_list - computed: false, optional: false, required: true
  private _referList?: string[]; 
  public get referList() {
    return this.getListAttribute('refer_list');
  }
  public set referList(value: string[]) {
    this._referList = value;
  }
  // Temporarily expose input value. Use with caution.
  public get referListInput() {
    return this._referList;
  }

  // refer_type - computed: false, optional: true, required: false
  private _referType?: string; 
  public get referType() {
    return this.getStringAttribute('refer_type');
  }
  public set referType(value: string) {
    this._referType = value;
  }
  public resetReferType() {
    this._referType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get referTypeInput() {
    return this._referType;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/cdn_domain alicloud_cdn_domain}
*/
export class CdnDomain extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_cdn_domain";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CdnDomain resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CdnDomain to import
  * @param importFromId The id of the existing CdnDomain that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/cdn_domain#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CdnDomain to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_cdn_domain", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/cdn_domain alicloud_cdn_domain} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CdnDomainConfig
  */
  public constructor(scope: Construct, id: string, config: CdnDomainConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_cdn_domain',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.262.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._blockIps = config.blockIps;
    this._cdnType = config.cdnType;
    this._domainName = config.domainName;
    this._id = config.id;
    this._optimizeEnable = config.optimizeEnable;
    this._pageCompressEnable = config.pageCompressEnable;
    this._rangeEnable = config.rangeEnable;
    this._scope = config.scope;
    this._sourcePort = config.sourcePort;
    this._sourceType = config.sourceType;
    this._sources = config.sources;
    this._videoSeekEnable = config.videoSeekEnable;
    this._authConfig.internalValue = config.authConfig;
    this._cacheConfig.internalValue = config.cacheConfig;
    this._certificateConfig.internalValue = config.certificateConfig;
    this._httpHeaderConfig.internalValue = config.httpHeaderConfig;
    this._page404Config.internalValue = config.page404Config;
    this._parameterFilterConfig.internalValue = config.parameterFilterConfig;
    this._referConfig.internalValue = config.referConfig;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // block_ips - computed: false, optional: true, required: false
  private _blockIps?: string[]; 
  public get blockIps() {
    return cdktf.Fn.tolist(this.getListAttribute('block_ips'));
  }
  public set blockIps(value: string[]) {
    this._blockIps = value;
  }
  public resetBlockIps() {
    this._blockIps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockIpsInput() {
    return this._blockIps;
  }

  // cdn_type - computed: false, optional: false, required: true
  private _cdnType?: string; 
  public get cdnType() {
    return this.getStringAttribute('cdn_type');
  }
  public set cdnType(value: string) {
    this._cdnType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cdnTypeInput() {
    return this._cdnType;
  }

  // domain_name - computed: false, optional: false, required: true
  private _domainName?: string; 
  public get domainName() {
    return this.getStringAttribute('domain_name');
  }
  public set domainName(value: string) {
    this._domainName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainNameInput() {
    return this._domainName;
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

  // optimize_enable - computed: false, optional: true, required: false
  private _optimizeEnable?: string; 
  public get optimizeEnable() {
    return this.getStringAttribute('optimize_enable');
  }
  public set optimizeEnable(value: string) {
    this._optimizeEnable = value;
  }
  public resetOptimizeEnable() {
    this._optimizeEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optimizeEnableInput() {
    return this._optimizeEnable;
  }

  // page_compress_enable - computed: false, optional: true, required: false
  private _pageCompressEnable?: string; 
  public get pageCompressEnable() {
    return this.getStringAttribute('page_compress_enable');
  }
  public set pageCompressEnable(value: string) {
    this._pageCompressEnable = value;
  }
  public resetPageCompressEnable() {
    this._pageCompressEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pageCompressEnableInput() {
    return this._pageCompressEnable;
  }

  // range_enable - computed: false, optional: true, required: false
  private _rangeEnable?: string; 
  public get rangeEnable() {
    return this.getStringAttribute('range_enable');
  }
  public set rangeEnable(value: string) {
    this._rangeEnable = value;
  }
  public resetRangeEnable() {
    this._rangeEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rangeEnableInput() {
    return this._rangeEnable;
  }

  // scope - computed: true, optional: true, required: false
  private _scope?: string; 
  public get scope() {
    return this.getStringAttribute('scope');
  }
  public set scope(value: string) {
    this._scope = value;
  }
  public resetScope() {
    this._scope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope;
  }

  // source_port - computed: false, optional: true, required: false
  private _sourcePort?: number; 
  public get sourcePort() {
    return this.getNumberAttribute('source_port');
  }
  public set sourcePort(value: number) {
    this._sourcePort = value;
  }
  public resetSourcePort() {
    this._sourcePort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourcePortInput() {
    return this._sourcePort;
  }

  // source_type - computed: false, optional: true, required: false
  private _sourceType?: string; 
  public get sourceType() {
    return this.getStringAttribute('source_type');
  }
  public set sourceType(value: string) {
    this._sourceType = value;
  }
  public resetSourceType() {
    this._sourceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceTypeInput() {
    return this._sourceType;
  }

  // sources - computed: false, optional: true, required: false
  private _sources?: string[]; 
  public get sources() {
    return cdktf.Fn.tolist(this.getListAttribute('sources'));
  }
  public set sources(value: string[]) {
    this._sources = value;
  }
  public resetSources() {
    this._sources = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourcesInput() {
    return this._sources;
  }

  // video_seek_enable - computed: false, optional: true, required: false
  private _videoSeekEnable?: string; 
  public get videoSeekEnable() {
    return this.getStringAttribute('video_seek_enable');
  }
  public set videoSeekEnable(value: string) {
    this._videoSeekEnable = value;
  }
  public resetVideoSeekEnable() {
    this._videoSeekEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get videoSeekEnableInput() {
    return this._videoSeekEnable;
  }

  // auth_config - computed: false, optional: true, required: false
  private _authConfig = new CdnDomainAuthConfigOutputReference(this, "auth_config");
  public get authConfig() {
    return this._authConfig;
  }
  public putAuthConfig(value: CdnDomainAuthConfig) {
    this._authConfig.internalValue = value;
  }
  public resetAuthConfig() {
    this._authConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authConfigInput() {
    return this._authConfig.internalValue;
  }

  // cache_config - computed: false, optional: true, required: false
  private _cacheConfig = new CdnDomainCacheConfigList(this, "cache_config", true);
  public get cacheConfig() {
    return this._cacheConfig;
  }
  public putCacheConfig(value: CdnDomainCacheConfig[] | cdktf.IResolvable) {
    this._cacheConfig.internalValue = value;
  }
  public resetCacheConfig() {
    this._cacheConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheConfigInput() {
    return this._cacheConfig.internalValue;
  }

  // certificate_config - computed: false, optional: true, required: false
  private _certificateConfig = new CdnDomainCertificateConfigOutputReference(this, "certificate_config");
  public get certificateConfig() {
    return this._certificateConfig;
  }
  public putCertificateConfig(value: CdnDomainCertificateConfig) {
    this._certificateConfig.internalValue = value;
  }
  public resetCertificateConfig() {
    this._certificateConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateConfigInput() {
    return this._certificateConfig.internalValue;
  }

  // http_header_config - computed: false, optional: true, required: false
  private _httpHeaderConfig = new CdnDomainHttpHeaderConfigList(this, "http_header_config", true);
  public get httpHeaderConfig() {
    return this._httpHeaderConfig;
  }
  public putHttpHeaderConfig(value: CdnDomainHttpHeaderConfig[] | cdktf.IResolvable) {
    this._httpHeaderConfig.internalValue = value;
  }
  public resetHttpHeaderConfig() {
    this._httpHeaderConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpHeaderConfigInput() {
    return this._httpHeaderConfig.internalValue;
  }

  // page_404_config - computed: false, optional: true, required: false
  private _page404Config = new CdnDomainPage404ConfigOutputReference(this, "page_404_config");
  public get page404Config() {
    return this._page404Config;
  }
  public putPage404Config(value: CdnDomainPage404Config) {
    this._page404Config.internalValue = value;
  }
  public resetPage404Config() {
    this._page404Config.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get page404ConfigInput() {
    return this._page404Config.internalValue;
  }

  // parameter_filter_config - computed: false, optional: true, required: false
  private _parameterFilterConfig = new CdnDomainParameterFilterConfigOutputReference(this, "parameter_filter_config");
  public get parameterFilterConfig() {
    return this._parameterFilterConfig;
  }
  public putParameterFilterConfig(value: CdnDomainParameterFilterConfig) {
    this._parameterFilterConfig.internalValue = value;
  }
  public resetParameterFilterConfig() {
    this._parameterFilterConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parameterFilterConfigInput() {
    return this._parameterFilterConfig.internalValue;
  }

  // refer_config - computed: false, optional: true, required: false
  private _referConfig = new CdnDomainReferConfigOutputReference(this, "refer_config");
  public get referConfig() {
    return this._referConfig;
  }
  public putReferConfig(value: CdnDomainReferConfig) {
    this._referConfig.internalValue = value;
  }
  public resetReferConfig() {
    this._referConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get referConfigInput() {
    return this._referConfig.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      block_ips: cdktf.listMapper(cdktf.stringToTerraform, false)(this._blockIps),
      cdn_type: cdktf.stringToTerraform(this._cdnType),
      domain_name: cdktf.stringToTerraform(this._domainName),
      id: cdktf.stringToTerraform(this._id),
      optimize_enable: cdktf.stringToTerraform(this._optimizeEnable),
      page_compress_enable: cdktf.stringToTerraform(this._pageCompressEnable),
      range_enable: cdktf.stringToTerraform(this._rangeEnable),
      scope: cdktf.stringToTerraform(this._scope),
      source_port: cdktf.numberToTerraform(this._sourcePort),
      source_type: cdktf.stringToTerraform(this._sourceType),
      sources: cdktf.listMapper(cdktf.stringToTerraform, false)(this._sources),
      video_seek_enable: cdktf.stringToTerraform(this._videoSeekEnable),
      auth_config: cdnDomainAuthConfigToTerraform(this._authConfig.internalValue),
      cache_config: cdktf.listMapper(cdnDomainCacheConfigToTerraform, true)(this._cacheConfig.internalValue),
      certificate_config: cdnDomainCertificateConfigToTerraform(this._certificateConfig.internalValue),
      http_header_config: cdktf.listMapper(cdnDomainHttpHeaderConfigToTerraform, true)(this._httpHeaderConfig.internalValue),
      page_404_config: cdnDomainPage404ConfigToTerraform(this._page404Config.internalValue),
      parameter_filter_config: cdnDomainParameterFilterConfigToTerraform(this._parameterFilterConfig.internalValue),
      refer_config: cdnDomainReferConfigToTerraform(this._referConfig.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      block_ips: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._blockIps),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      cdn_type: {
        value: cdktf.stringToHclTerraform(this._cdnType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      domain_name: {
        value: cdktf.stringToHclTerraform(this._domainName),
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
      optimize_enable: {
        value: cdktf.stringToHclTerraform(this._optimizeEnable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      page_compress_enable: {
        value: cdktf.stringToHclTerraform(this._pageCompressEnable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      range_enable: {
        value: cdktf.stringToHclTerraform(this._rangeEnable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scope: {
        value: cdktf.stringToHclTerraform(this._scope),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_port: {
        value: cdktf.numberToHclTerraform(this._sourcePort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      source_type: {
        value: cdktf.stringToHclTerraform(this._sourceType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sources: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._sources),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      video_seek_enable: {
        value: cdktf.stringToHclTerraform(this._videoSeekEnable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auth_config: {
        value: cdnDomainAuthConfigToHclTerraform(this._authConfig.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "CdnDomainAuthConfigList",
      },
      cache_config: {
        value: cdktf.listMapperHcl(cdnDomainCacheConfigToHclTerraform, true)(this._cacheConfig.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "CdnDomainCacheConfigList",
      },
      certificate_config: {
        value: cdnDomainCertificateConfigToHclTerraform(this._certificateConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CdnDomainCertificateConfigList",
      },
      http_header_config: {
        value: cdktf.listMapperHcl(cdnDomainHttpHeaderConfigToHclTerraform, true)(this._httpHeaderConfig.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "CdnDomainHttpHeaderConfigList",
      },
      page_404_config: {
        value: cdnDomainPage404ConfigToHclTerraform(this._page404Config.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "CdnDomainPage404ConfigList",
      },
      parameter_filter_config: {
        value: cdnDomainParameterFilterConfigToHclTerraform(this._parameterFilterConfig.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "CdnDomainParameterFilterConfigList",
      },
      refer_config: {
        value: cdnDomainReferConfigToHclTerraform(this._referConfig.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "CdnDomainReferConfigList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
