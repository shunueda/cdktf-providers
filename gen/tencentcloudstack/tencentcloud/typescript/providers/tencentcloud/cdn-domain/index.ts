// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/cdn_domain
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CdnDomainConfig extends cdktf.TerraformMetaArguments {
  /**
  * Domain name acceleration region. `mainland`: acceleration inside mainland China, `overseas`: acceleration outside mainland China, `global`: global acceleration. Overseas acceleration service must be enabled to use overseas acceleration and global acceleration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/cdn_domain#area CdnDomain#area}
  */
  readonly area?: string;
  /**
  * Name of the acceleration domain.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/cdn_domain#domain CdnDomain#domain}
  */
  readonly domain: string;
  /**
  * Used for validate only by store arguments to request json string as expected, WARNING: if set to `true`, NO Cloud Api will be invoked but store as local data, do not use this argument unless you really know what you are doing.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/cdn_domain#explicit_using_dry_run CdnDomain#explicit_using_dry_run}
  */
  readonly explicitUsingDryRun?: boolean | cdktf.IResolvable;
  /**
  * 301/302 redirect following switch, available values: `on`, `off` (default).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/cdn_domain#follow_redirect_switch CdnDomain#follow_redirect_switch}
  */
  readonly followRedirectSwitch?: string;
  /**
  * Whether to enable full-path cache. Default value is `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/cdn_domain#full_url_cache CdnDomain#full_url_cache}
  */
  readonly fullUrlCache?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/cdn_domain#id CdnDomain#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * ipv6 access configuration switch. Only available when area set to `mainland`. Valid values are `on` and `off`. Default value is `off`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/cdn_domain#ipv6_access_switch CdnDomain#ipv6_access_switch}
  */
  readonly ipv6AccessSwitch?: string;
  /**
  * Offline cache switch, available values: `on`, `off` (default).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/cdn_domain#offline_cache_switch CdnDomain#offline_cache_switch}
  */
  readonly offlineCacheSwitch?: string;
  /**
  * The project CDN belongs to, default to 0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/cdn_domain#project_id CdnDomain#project_id}
  */
  readonly projectId?: number;
  /**
  * QUIC switch, available values: `on`, `off` (default).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/cdn_domain#quic_switch CdnDomain#quic_switch}
  */
  readonly quicSwitch?: string;
  /**
  * Sharding back to source configuration switch. Valid values are `on` and `off`. Default value is `on`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/cdn_domain#range_origin_switch CdnDomain#range_origin_switch}
  */
  readonly rangeOriginSwitch?: string;
  /**
  * Response header cache switch, available values: `on`, `off` (default).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/cdn_domain#response_header_cache_switch CdnDomain#response_header_cache_switch}
  */
  readonly responseHeaderCacheSwitch?: string;
  /**
  * SEO switch, available values: `on`, `off` (default).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/cdn_domain#seo_switch CdnDomain#seo_switch}
  */
  readonly seoSwitch?: string;
  /**
  * Acceleration domain name service type. `web`: static acceleration, `download`: download acceleration, `media`: streaming media VOD acceleration, `hybrid`: hybrid acceleration, `dynamic`: dynamic acceleration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/cdn_domain#service_type CdnDomain#service_type}
  */
  readonly serviceType: string;
  /**
  * Specific configuration for mainland, NOTE: Both specifying full schema or using it is superfluous, please use cloud api parameters json passthroughs, check the [Data Types](https://www.tencentcloud.com/document/api/228/31739#MainlandConfig) for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/cdn_domain#specific_config_mainland CdnDomain#specific_config_mainland}
  */
  readonly specificConfigMainland?: string;
  /**
  * Specific configuration for oversea, NOTE: Both specifying full schema or using it is superfluous, please use cloud api parameters json passthroughs, check the [Data Types](https://www.tencentcloud.com/document/api/228/31739#OverseaConfig) for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/cdn_domain#specific_config_overseas CdnDomain#specific_config_overseas}
  */
  readonly specificConfigOverseas?: string;
  /**
  * Tags of cdn domain.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/cdn_domain#tags CdnDomain#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Video seek switch, available values: `on`, `off` (default).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/cdn_domain#video_seek_switch CdnDomain#video_seek_switch}
  */
  readonly videoSeekSwitch?: string;
  /**
  * authentication block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/cdn_domain#authentication CdnDomain#authentication}
  */
  readonly authentication?: CdnDomainAuthentication;
  /**
  * aws_private_access block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/cdn_domain#aws_private_access CdnDomain#aws_private_access}
  */
  readonly awsPrivateAccess?: CdnDomainAwsPrivateAccess;
  /**
  * band_width_alert block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/cdn_domain#band_width_alert CdnDomain#band_width_alert}
  */
  readonly bandWidthAlert?: CdnDomainBandWidthAlert;
  /**
  * cache_key block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/cdn_domain#cache_key CdnDomain#cache_key}
  */
  readonly cacheKey?: CdnDomainCacheKey;
  /**
  * compression block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/cdn_domain#compression CdnDomain#compression}
  */
  readonly compression?: CdnDomainCompression;
  /**
  * downstream_capping block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/cdn_domain#downstream_capping CdnDomain#downstream_capping}
  */
  readonly downstreamCapping?: CdnDomainDownstreamCapping;
  /**
  * error_page block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/cdn_domain#error_page CdnDomain#error_page}
  */
  readonly errorPage?: CdnDomainErrorPage;
  /**
  * https_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/cdn_domain#https_config CdnDomain#https_config}
  */
  readonly httpsConfig?: CdnDomainHttpsConfig;
  /**
  * hw_private_access block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/cdn_domain#hw_private_access CdnDomain#hw_private_access}
  */
  readonly hwPrivateAccess?: CdnDomainHwPrivateAccess;
  /**
  * ip_filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/cdn_domain#ip_filter CdnDomain#ip_filter}
  */
  readonly ipFilter?: CdnDomainIpFilter;
  /**
  * ip_freq_limit block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/cdn_domain#ip_freq_limit CdnDomain#ip_freq_limit}
  */
  readonly ipFreqLimit?: CdnDomainIpFreqLimit;
  /**
  * max_age block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/cdn_domain#max_age CdnDomain#max_age}
  */
  readonly maxAge?: CdnDomainMaxAge;
  /**
  * origin block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/cdn_domain#origin CdnDomain#origin}
  */
  readonly origin: CdnDomainOrigin;
  /**
  * origin_pull_optimization block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/cdn_domain#origin_pull_optimization CdnDomain#origin_pull_optimization}
  */
  readonly originPullOptimization?: CdnDomainOriginPullOptimization;
  /**
  * origin_pull_timeout block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/cdn_domain#origin_pull_timeout CdnDomain#origin_pull_timeout}
  */
  readonly originPullTimeout?: CdnDomainOriginPullTimeout;
  /**
  * oss_private_access block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/cdn_domain#oss_private_access CdnDomain#oss_private_access}
  */
  readonly ossPrivateAccess?: CdnDomainOssPrivateAccess;
  /**
  * others_private_access block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/cdn_domain#others_private_access CdnDomain#others_private_access}
  */
  readonly othersPrivateAccess?: CdnDomainOthersPrivateAccess;
  /**
  * post_max_size block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/cdn_domain#post_max_size CdnDomain#post_max_size}
  */
  readonly postMaxSize?: CdnDomainPostMaxSize[] | cdktf.IResolvable;
  /**
  * qn_private_access block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/cdn_domain#qn_private_access CdnDomain#qn_private_access}
  */
  readonly qnPrivateAccess?: CdnDomainQnPrivateAccess;
  /**
  * referer block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/cdn_domain#referer CdnDomain#referer}
  */
  readonly referer?: CdnDomainReferer;
  /**
  * request_header block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/cdn_domain#request_header CdnDomain#request_header}
  */
  readonly requestHeader?: CdnDomainRequestHeader;
  /**
  * response_header block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/cdn_domain#response_header CdnDomain#response_header}
  */
  readonly responseHeader?: CdnDomainResponseHeader;
  /**
  * rule_cache block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/cdn_domain#rule_cache CdnDomain#rule_cache}
  */
  readonly ruleCache?: CdnDomainRuleCache[] | cdktf.IResolvable;
  /**
  * status_code_cache block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/cdn_domain#status_code_cache CdnDomain#status_code_cache}
  */
  readonly statusCodeCache?: CdnDomainStatusCodeCache;
}
export interface CdnDomainAuthenticationTypeA {
  /**
  * Used for calculate a signature. 6-32 characters. Only digits and letters are allowed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/cdn_domain#backup_secret_key CdnDomain#backup_secret_key}
  */
  readonly backupSecretKey?: string;
  /**
  * Signature expiration time in second. The maximum value is 630720000.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/cdn_domain#expire_time CdnDomain#expire_time}
  */
  readonly expireTime: number;
  /**
  * File extension list settings determining if authentication should be performed. NOTE: If it contains an asterisk (*), this indicates all files.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/cdn_domain#file_extensions CdnDomain#file_extensions}
  */
  readonly fileExtensions: string[];
  /**
  * Available values: `whitelist` - all types apart from `file_extensions` are authenticated, `blacklist`: - only the types in the `file_extensions` are authenticated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/cdn_domain#filter_type CdnDomain#filter_type}
  */
  readonly filterType: string;
  /**
  * The key for signature calculation. Only digits, upper and lower-case letters are allowed. Length limit: 6-32 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/cdn_domain#secret_key CdnDomain#secret_key}
  */
  readonly secretKey: string;
  /**
  * Signature parameter name. Only upper and lower-case letters, digits, and underscores (_) are allowed. It cannot start with a digit. Length limit: 1-100 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/cdn_domain#sign_param CdnDomain#sign_param}
  */
  readonly signParam: string;
}

export function cdnDomainAuthenticationTypeAToTerraform(struct?: CdnDomainAuthenticationTypeAOutputReference | CdnDomainAuthenticationTypeA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    backup_secret_key: cdktf.stringToTerraform(struct!.backupSecretKey),
    expire_time: cdktf.numberToTerraform(struct!.expireTime),
    file_extensions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.fileExtensions),
    filter_type: cdktf.stringToTerraform(struct!.filterType),
    secret_key: cdktf.stringToTerraform(struct!.secretKey),
    sign_param: cdktf.stringToTerraform(struct!.signParam),
  }
}


export function cdnDomainAuthenticationTypeAToHclTerraform(struct?: CdnDomainAuthenticationTypeAOutputReference | CdnDomainAuthenticationTypeA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    backup_secret_key: {
      value: cdktf.stringToHclTerraform(struct!.backupSecretKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    expire_time: {
      value: cdktf.numberToHclTerraform(struct!.expireTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    file_extensions: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.fileExtensions),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    filter_type: {
      value: cdktf.stringToHclTerraform(struct!.filterType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_key: {
      value: cdktf.stringToHclTerraform(struct!.secretKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sign_param: {
      value: cdktf.stringToHclTerraform(struct!.signParam),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnDomainAuthenticationTypeAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnDomainAuthenticationTypeA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._backupSecretKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.backupSecretKey = this._backupSecretKey;
    }
    if (this._expireTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.expireTime = this._expireTime;
    }
    if (this._fileExtensions !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileExtensions = this._fileExtensions;
    }
    if (this._filterType !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterType = this._filterType;
    }
    if (this._secretKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretKey = this._secretKey;
    }
    if (this._signParam !== undefined) {
      hasAnyValues = true;
      internalValueResult.signParam = this._signParam;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnDomainAuthenticationTypeA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._backupSecretKey = undefined;
      this._expireTime = undefined;
      this._fileExtensions = undefined;
      this._filterType = undefined;
      this._secretKey = undefined;
      this._signParam = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._backupSecretKey = value.backupSecretKey;
      this._expireTime = value.expireTime;
      this._fileExtensions = value.fileExtensions;
      this._filterType = value.filterType;
      this._secretKey = value.secretKey;
      this._signParam = value.signParam;
    }
  }

  // backup_secret_key - computed: false, optional: true, required: false
  private _backupSecretKey?: string; 
  public get backupSecretKey() {
    return this.getStringAttribute('backup_secret_key');
  }
  public set backupSecretKey(value: string) {
    this._backupSecretKey = value;
  }
  public resetBackupSecretKey() {
    this._backupSecretKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupSecretKeyInput() {
    return this._backupSecretKey;
  }

  // expire_time - computed: false, optional: false, required: true
  private _expireTime?: number; 
  public get expireTime() {
    return this.getNumberAttribute('expire_time');
  }
  public set expireTime(value: number) {
    this._expireTime = value;
  }
  // Temporarily expose input value. Use with caution.
  public get expireTimeInput() {
    return this._expireTime;
  }

  // file_extensions - computed: false, optional: false, required: true
  private _fileExtensions?: string[]; 
  public get fileExtensions() {
    return this.getListAttribute('file_extensions');
  }
  public set fileExtensions(value: string[]) {
    this._fileExtensions = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fileExtensionsInput() {
    return this._fileExtensions;
  }

  // filter_type - computed: false, optional: false, required: true
  private _filterType?: string; 
  public get filterType() {
    return this.getStringAttribute('filter_type');
  }
  public set filterType(value: string) {
    this._filterType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get filterTypeInput() {
    return this._filterType;
  }

  // secret_key - computed: false, optional: false, required: true
  private _secretKey?: string; 
  public get secretKey() {
    return this.getStringAttribute('secret_key');
  }
  public set secretKey(value: string) {
    this._secretKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretKeyInput() {
    return this._secretKey;
  }

  // sign_param - computed: false, optional: false, required: true
  private _signParam?: string; 
  public get signParam() {
    return this.getStringAttribute('sign_param');
  }
  public set signParam(value: string) {
    this._signParam = value;
  }
  // Temporarily expose input value. Use with caution.
  public get signParamInput() {
    return this._signParam;
  }
}
export interface CdnDomainAuthenticationTypeB {
  /**
  * Used for calculate a signature. 6-32 characters. Only digits and letters are allowed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/cdn_domain#backup_secret_key CdnDomain#backup_secret_key}
  */
  readonly backupSecretKey?: string;
  /**
  * Signature expiration time in second. The maximum value is 630720000.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/cdn_domain#expire_time CdnDomain#expire_time}
  */
  readonly expireTime: number;
  /**
  * File extension list settings determining if authentication should be performed. NOTE: If it contains an asterisk (*), this indicates all files.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/cdn_domain#file_extensions CdnDomain#file_extensions}
  */
  readonly fileExtensions: string[];
  /**
  * Available values: `whitelist` - all types apart from `file_extensions` are authenticated, `blacklist`: - only the types in the `file_extensions` are authenticated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/cdn_domain#filter_type CdnDomain#filter_type}
  */
  readonly filterType: string;
  /**
  * The key for signature calculation. Only digits, upper and lower-case letters are allowed. Length limit: 6-32 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/cdn_domain#secret_key CdnDomain#secret_key}
  */
  readonly secretKey: string;
}

export function cdnDomainAuthenticationTypeBToTerraform(struct?: CdnDomainAuthenticationTypeBOutputReference | CdnDomainAuthenticationTypeB): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    backup_secret_key: cdktf.stringToTerraform(struct!.backupSecretKey),
    expire_time: cdktf.numberToTerraform(struct!.expireTime),
    file_extensions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.fileExtensions),
    filter_type: cdktf.stringToTerraform(struct!.filterType),
    secret_key: cdktf.stringToTerraform(struct!.secretKey),
  }
}


export function cdnDomainAuthenticationTypeBToHclTerraform(struct?: CdnDomainAuthenticationTypeBOutputReference | CdnDomainAuthenticationTypeB): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    backup_secret_key: {
      value: cdktf.stringToHclTerraform(struct!.backupSecretKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    expire_time: {
      value: cdktf.numberToHclTerraform(struct!.expireTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    file_extensions: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.fileExtensions),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    filter_type: {
      value: cdktf.stringToHclTerraform(struct!.filterType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_key: {
      value: cdktf.stringToHclTerraform(struct!.secretKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnDomainAuthenticationTypeBOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnDomainAuthenticationTypeB | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._backupSecretKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.backupSecretKey = this._backupSecretKey;
    }
    if (this._expireTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.expireTime = this._expireTime;
    }
    if (this._fileExtensions !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileExtensions = this._fileExtensions;
    }
    if (this._filterType !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterType = this._filterType;
    }
    if (this._secretKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretKey = this._secretKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnDomainAuthenticationTypeB | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._backupSecretKey = undefined;
      this._expireTime = undefined;
      this._fileExtensions = undefined;
      this._filterType = undefined;
      this._secretKey = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._backupSecretKey = value.backupSecretKey;
      this._expireTime = value.expireTime;
      this._fileExtensions = value.fileExtensions;
      this._filterType = value.filterType;
      this._secretKey = value.secretKey;
    }
  }

  // backup_secret_key - computed: false, optional: true, required: false
  private _backupSecretKey?: string; 
  public get backupSecretKey() {
    return this.getStringAttribute('backup_secret_key');
  }
  public set backupSecretKey(value: string) {
    this._backupSecretKey = value;
  }
  public resetBackupSecretKey() {
    this._backupSecretKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupSecretKeyInput() {
    return this._backupSecretKey;
  }

  // expire_time - computed: false, optional: false, required: true
  private _expireTime?: number; 
  public get expireTime() {
    return this.getNumberAttribute('expire_time');
  }
  public set expireTime(value: number) {
    this._expireTime = value;
  }
  // Temporarily expose input value. Use with caution.
  public get expireTimeInput() {
    return this._expireTime;
  }

  // file_extensions - computed: false, optional: false, required: true
  private _fileExtensions?: string[]; 
  public get fileExtensions() {
    return this.getListAttribute('file_extensions');
  }
  public set fileExtensions(value: string[]) {
    this._fileExtensions = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fileExtensionsInput() {
    return this._fileExtensions;
  }

  // filter_type - computed: false, optional: false, required: true
  private _filterType?: string; 
  public get filterType() {
    return this.getStringAttribute('filter_type');
  }
  public set filterType(value: string) {
    this._filterType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get filterTypeInput() {
    return this._filterType;
  }

  // secret_key - computed: false, optional: false, required: true
  private _secretKey?: string; 
  public get secretKey() {
    return this.getStringAttribute('secret_key');
  }
  public set secretKey(value: string) {
    this._secretKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretKeyInput() {
    return this._secretKey;
  }
}
export interface CdnDomainAuthenticationTypeC {
  /**
  * Used for calculate a signature. 6-32 characters. Only digits and letters are allowed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/cdn_domain#backup_secret_key CdnDomain#backup_secret_key}
  */
  readonly backupSecretKey?: string;
  /**
  * Signature expiration time in second. The maximum value is 630720000.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/cdn_domain#expire_time CdnDomain#expire_time}
  */
  readonly expireTime: number;
  /**
  * File extension list settings determining if authentication should be performed. NOTE: If it contains an asterisk (*), this indicates all files.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/cdn_domain#file_extensions CdnDomain#file_extensions}
  */
  readonly fileExtensions: string[];
  /**
  * Available values: `whitelist` - all types apart from `file_extensions` are authenticated, `blacklist`: - only the types in the `file_extensions` are authenticated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/cdn_domain#filter_type CdnDomain#filter_type}
  */
  readonly filterType: string;
  /**
  * The key for signature calculation. Only digits, upper and lower-case letters are allowed. Length limit: 6-32 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/cdn_domain#secret_key CdnDomain#secret_key}
  */
  readonly secretKey: string;
  /**
  * Timestamp formation, available values: `dec`, `hex`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/cdn_domain#time_format CdnDomain#time_format}
  */
  readonly timeFormat?: string;
}

export function cdnDomainAuthenticationTypeCToTerraform(struct?: CdnDomainAuthenticationTypeCOutputReference | CdnDomainAuthenticationTypeC): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    backup_secret_key: cdktf.stringToTerraform(struct!.backupSecretKey),
    expire_time: cdktf.numberToTerraform(struct!.expireTime),
    file_extensions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.fileExtensions),
    filter_type: cdktf.stringToTerraform(struct!.filterType),
    secret_key: cdktf.stringToTerraform(struct!.secretKey),
    time_format: cdktf.stringToTerraform(struct!.timeFormat),
  }
}


export function cdnDomainAuthenticationTypeCToHclTerraform(struct?: CdnDomainAuthenticationTypeCOutputReference | CdnDomainAuthenticationTypeC): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    backup_secret_key: {
      value: cdktf.stringToHclTerraform(struct!.backupSecretKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    expire_time: {
      value: cdktf.numberToHclTerraform(struct!.expireTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    file_extensions: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.fileExtensions),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    filter_type: {
      value: cdktf.stringToHclTerraform(struct!.filterType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_key: {
      value: cdktf.stringToHclTerraform(struct!.secretKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    time_format: {
      value: cdktf.stringToHclTerraform(struct!.timeFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnDomainAuthenticationTypeCOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnDomainAuthenticationTypeC | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._backupSecretKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.backupSecretKey = this._backupSecretKey;
    }
    if (this._expireTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.expireTime = this._expireTime;
    }
    if (this._fileExtensions !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileExtensions = this._fileExtensions;
    }
    if (this._filterType !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterType = this._filterType;
    }
    if (this._secretKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretKey = this._secretKey;
    }
    if (this._timeFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeFormat = this._timeFormat;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnDomainAuthenticationTypeC | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._backupSecretKey = undefined;
      this._expireTime = undefined;
      this._fileExtensions = undefined;
      this._filterType = undefined;
      this._secretKey = undefined;
      this._timeFormat = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._backupSecretKey = value.backupSecretKey;
      this._expireTime = value.expireTime;
      this._fileExtensions = value.fileExtensions;
      this._filterType = value.filterType;
      this._secretKey = value.secretKey;
      this._timeFormat = value.timeFormat;
    }
  }

  // backup_secret_key - computed: false, optional: true, required: false
  private _backupSecretKey?: string; 
  public get backupSecretKey() {
    return this.getStringAttribute('backup_secret_key');
  }
  public set backupSecretKey(value: string) {
    this._backupSecretKey = value;
  }
  public resetBackupSecretKey() {
    this._backupSecretKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupSecretKeyInput() {
    return this._backupSecretKey;
  }

  // expire_time - computed: false, optional: false, required: true
  private _expireTime?: number; 
  public get expireTime() {
    return this.getNumberAttribute('expire_time');
  }
  public set expireTime(value: number) {
    this._expireTime = value;
  }
  // Temporarily expose input value. Use with caution.
  public get expireTimeInput() {
    return this._expireTime;
  }

  // file_extensions - computed: false, optional: false, required: true
  private _fileExtensions?: string[]; 
  public get fileExtensions() {
    return this.getListAttribute('file_extensions');
  }
  public set fileExtensions(value: string[]) {
    this._fileExtensions = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fileExtensionsInput() {
    return this._fileExtensions;
  }

  // filter_type - computed: false, optional: false, required: true
  private _filterType?: string; 
  public get filterType() {
    return this.getStringAttribute('filter_type');
  }
  public set filterType(value: string) {
    this._filterType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get filterTypeInput() {
    return this._filterType;
  }

  // secret_key - computed: false, optional: false, required: true
  private _secretKey?: string; 
  public get secretKey() {
    return this.getStringAttribute('secret_key');
  }
  public set secretKey(value: string) {
    this._secretKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretKeyInput() {
    return this._secretKey;
  }

  // time_format - computed: false, optional: true, required: false
  private _timeFormat?: string; 
  public get timeFormat() {
    return this.getStringAttribute('time_format');
  }
  public set timeFormat(value: string) {
    this._timeFormat = value;
  }
  public resetTimeFormat() {
    this._timeFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeFormatInput() {
    return this._timeFormat;
  }
}
export interface CdnDomainAuthenticationTypeD {
  /**
  * Used for calculate a signature. 6-32 characters. Only digits and letters are allowed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/cdn_domain#backup_secret_key CdnDomain#backup_secret_key}
  */
  readonly backupSecretKey?: string;
  /**
  * Signature expiration time in second. The maximum value is 630720000.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/cdn_domain#expire_time CdnDomain#expire_time}
  */
  readonly expireTime: number;
  /**
  * File extension list settings determining if authentication should be performed. NOTE: If it contains an asterisk (*), this indicates all files.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/cdn_domain#file_extensions CdnDomain#file_extensions}
  */
  readonly fileExtensions: string[];
  /**
  * Available values: `whitelist` - all types apart from `file_extensions` are authenticated, `blacklist`: - only the types in the `file_extensions` are authenticated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/cdn_domain#filter_type CdnDomain#filter_type}
  */
  readonly filterType: string;
  /**
  * The key for signature calculation. Only digits, upper and lower-case letters are allowed. Length limit: 6-32 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/cdn_domain#secret_key CdnDomain#secret_key}
  */
  readonly secretKey: string;
  /**
  * Timestamp formation, available values: `dec`, `hex`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/cdn_domain#time_format CdnDomain#time_format}
  */
  readonly timeFormat?: string;
  /**
  * Timestamp parameter name. Only upper and lower-case letters, digits, and underscores (_) are allowed. It cannot start with a digit. Length limit: 1-100 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/cdn_domain#time_param CdnDomain#time_param}
  */
  readonly timeParam?: string;
}

export function cdnDomainAuthenticationTypeDToTerraform(struct?: CdnDomainAuthenticationTypeDOutputReference | CdnDomainAuthenticationTypeD): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    backup_secret_key: cdktf.stringToTerraform(struct!.backupSecretKey),
    expire_time: cdktf.numberToTerraform(struct!.expireTime),
    file_extensions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.fileExtensions),
    filter_type: cdktf.stringToTerraform(struct!.filterType),
    secret_key: cdktf.stringToTerraform(struct!.secretKey),
    time_format: cdktf.stringToTerraform(struct!.timeFormat),
    time_param: cdktf.stringToTerraform(struct!.timeParam),
  }
}


export function cdnDomainAuthenticationTypeDToHclTerraform(struct?: CdnDomainAuthenticationTypeDOutputReference | CdnDomainAuthenticationTypeD): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    backup_secret_key: {
      value: cdktf.stringToHclTerraform(struct!.backupSecretKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    expire_time: {
      value: cdktf.numberToHclTerraform(struct!.expireTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    file_extensions: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.fileExtensions),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    filter_type: {
      value: cdktf.stringToHclTerraform(struct!.filterType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_key: {
      value: cdktf.stringToHclTerraform(struct!.secretKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    time_format: {
      value: cdktf.stringToHclTerraform(struct!.timeFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    time_param: {
      value: cdktf.stringToHclTerraform(struct!.timeParam),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnDomainAuthenticationTypeDOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnDomainAuthenticationTypeD | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._backupSecretKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.backupSecretKey = this._backupSecretKey;
    }
    if (this._expireTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.expireTime = this._expireTime;
    }
    if (this._fileExtensions !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileExtensions = this._fileExtensions;
    }
    if (this._filterType !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterType = this._filterType;
    }
    if (this._secretKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretKey = this._secretKey;
    }
    if (this._timeFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeFormat = this._timeFormat;
    }
    if (this._timeParam !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeParam = this._timeParam;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnDomainAuthenticationTypeD | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._backupSecretKey = undefined;
      this._expireTime = undefined;
      this._fileExtensions = undefined;
      this._filterType = undefined;
      this._secretKey = undefined;
      this._timeFormat = undefined;
      this._timeParam = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._backupSecretKey = value.backupSecretKey;
      this._expireTime = value.expireTime;
      this._fileExtensions = value.fileExtensions;
      this._filterType = value.filterType;
      this._secretKey = value.secretKey;
      this._timeFormat = value.timeFormat;
      this._timeParam = value.timeParam;
    }
  }

  // backup_secret_key - computed: false, optional: true, required: false
  private _backupSecretKey?: string; 
  public get backupSecretKey() {
    return this.getStringAttribute('backup_secret_key');
  }
  public set backupSecretKey(value: string) {
    this._backupSecretKey = value;
  }
  public resetBackupSecretKey() {
    this._backupSecretKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupSecretKeyInput() {
    return this._backupSecretKey;
  }

  // expire_time - computed: false, optional: false, required: true
  private _expireTime?: number; 
  public get expireTime() {
    return this.getNumberAttribute('expire_time');
  }
  public set expireTime(value: number) {
    this._expireTime = value;
  }
  // Temporarily expose input value. Use with caution.
  public get expireTimeInput() {
    return this._expireTime;
  }

  // file_extensions - computed: false, optional: false, required: true
  private _fileExtensions?: string[]; 
  public get fileExtensions() {
    return this.getListAttribute('file_extensions');
  }
  public set fileExtensions(value: string[]) {
    this._fileExtensions = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fileExtensionsInput() {
    return this._fileExtensions;
  }

  // filter_type - computed: false, optional: false, required: true
  private _filterType?: string; 
  public get filterType() {
    return this.getStringAttribute('filter_type');
  }
  public set filterType(value: string) {
    this._filterType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get filterTypeInput() {
    return this._filterType;
  }

  // secret_key - computed: false, optional: false, required: true
  private _secretKey?: string; 
  public get secretKey() {
    return this.getStringAttribute('secret_key');
  }
  public set secretKey(value: string) {
    this._secretKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretKeyInput() {
    return this._secretKey;
  }

  // time_format - computed: false, optional: true, required: false
  private _timeFormat?: string; 
  public get timeFormat() {
    return this.getStringAttribute('time_format');
  }
  public set timeFormat(value: string) {
    this._timeFormat = value;
  }
  public resetTimeFormat() {
    this._timeFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeFormatInput() {
    return this._timeFormat;
  }

  // time_param - computed: false, optional: true, required: false
  private _timeParam?: string; 
  public get timeParam() {
    return this.getStringAttribute('time_param');
  }
  public set timeParam(value: string) {
    this._timeParam = value;
  }
  public resetTimeParam() {
    this._timeParam = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeParamInput() {
    return this._timeParam;
  }
}
export interface CdnDomainAuthentication {
  /**
  * Authentication switching, available values: `on`, `off`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/cdn_domain#switch CdnDomain#switch}
  */
  readonly switch?: string;
  /**
  * type_a block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/cdn_domain#type_a CdnDomain#type_a}
  */
  readonly typeA?: CdnDomainAuthenticationTypeA;
  /**
  * type_b block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/cdn_domain#type_b CdnDomain#type_b}
  */
  readonly typeB?: CdnDomainAuthenticationTypeB;
  /**
  * type_c block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/cdn_domain#type_c CdnDomain#type_c}
  */
  readonly typeC?: CdnDomainAuthenticationTypeC;
  /**
  * type_d block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/cdn_domain#type_d CdnDomain#type_d}
  */
  readonly typeD?: CdnDomainAuthenticationTypeD;
}

export function cdnDomainAuthenticationToTerraform(struct?: CdnDomainAuthenticationOutputReference | CdnDomainAuthentication): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    switch: cdktf.stringToTerraform(struct!.switch),
    type_a: cdnDomainAuthenticationTypeAToTerraform(struct!.typeA),
    type_b: cdnDomainAuthenticationTypeBToTerraform(struct!.typeB),
    type_c: cdnDomainAuthenticationTypeCToTerraform(struct!.typeC),
    type_d: cdnDomainAuthenticationTypeDToTerraform(struct!.typeD),
  }
}


export function cdnDomainAuthenticationToHclTerraform(struct?: CdnDomainAuthenticationOutputReference | CdnDomainAuthentication): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    switch: {
      value: cdktf.stringToHclTerraform(struct!.switch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type_a: {
      value: cdnDomainAuthenticationTypeAToHclTerraform(struct!.typeA),
      isBlock: true,
      type: "list",
      storageClassType: "CdnDomainAuthenticationTypeAList",
    },
    type_b: {
      value: cdnDomainAuthenticationTypeBToHclTerraform(struct!.typeB),
      isBlock: true,
      type: "list",
      storageClassType: "CdnDomainAuthenticationTypeBList",
    },
    type_c: {
      value: cdnDomainAuthenticationTypeCToHclTerraform(struct!.typeC),
      isBlock: true,
      type: "list",
      storageClassType: "CdnDomainAuthenticationTypeCList",
    },
    type_d: {
      value: cdnDomainAuthenticationTypeDToHclTerraform(struct!.typeD),
      isBlock: true,
      type: "list",
      storageClassType: "CdnDomainAuthenticationTypeDList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnDomainAuthenticationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnDomainAuthentication | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._switch !== undefined) {
      hasAnyValues = true;
      internalValueResult.switch = this._switch;
    }
    if (this._typeA?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.typeA = this._typeA?.internalValue;
    }
    if (this._typeB?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.typeB = this._typeB?.internalValue;
    }
    if (this._typeC?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.typeC = this._typeC?.internalValue;
    }
    if (this._typeD?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.typeD = this._typeD?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnDomainAuthentication | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._switch = undefined;
      this._typeA.internalValue = undefined;
      this._typeB.internalValue = undefined;
      this._typeC.internalValue = undefined;
      this._typeD.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._switch = value.switch;
      this._typeA.internalValue = value.typeA;
      this._typeB.internalValue = value.typeB;
      this._typeC.internalValue = value.typeC;
      this._typeD.internalValue = value.typeD;
    }
  }

  // switch - computed: false, optional: true, required: false
  private _switch?: string; 
  public get switch() {
    return this.getStringAttribute('switch');
  }
  public set switch(value: string) {
    this._switch = value;
  }
  public resetSwitch() {
    this._switch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get switchInput() {
    return this._switch;
  }

  // type_a - computed: false, optional: true, required: false
  private _typeA = new CdnDomainAuthenticationTypeAOutputReference(this, "type_a");
  public get typeA() {
    return this._typeA;
  }
  public putTypeA(value: CdnDomainAuthenticationTypeA) {
    this._typeA.internalValue = value;
  }
  public resetTypeA() {
    this._typeA.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeAInput() {
    return this._typeA.internalValue;
  }

  // type_b - computed: false, optional: true, required: false
  private _typeB = new CdnDomainAuthenticationTypeBOutputReference(this, "type_b");
  public get typeB() {
    return this._typeB;
  }
  public putTypeB(value: CdnDomainAuthenticationTypeB) {
    this._typeB.internalValue = value;
  }
  public resetTypeB() {
    this._typeB.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeBInput() {
    return this._typeB.internalValue;
  }

  // type_c - computed: false, optional: true, required: false
  private _typeC = new CdnDomainAuthenticationTypeCOutputReference(this, "type_c");
  public get typeC() {
    return this._typeC;
  }
  public putTypeC(value: CdnDomainAuthenticationTypeC) {
    this._typeC.internalValue = value;
  }
  public resetTypeC() {
    this._typeC.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeCInput() {
    return this._typeC.internalValue;
  }

  // type_d - computed: false, optional: true, required: false
  private _typeD = new CdnDomainAuthenticationTypeDOutputReference(this, "type_d");
  public get typeD() {
    return this._typeD;
  }
  public putTypeD(value: CdnDomainAuthenticationTypeD) {
    this._typeD.internalValue = value;
  }
  public resetTypeD() {
    this._typeD.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeDInput() {
    return this._typeD.internalValue;
  }
}
export interface CdnDomainAwsPrivateAccess {
  /**
  * Access ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/cdn_domain#access_key CdnDomain#access_key}
  */
  readonly accessKey?: string;
  /**
  * Bucket.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/cdn_domain#bucket CdnDomain#bucket}
  */
  readonly bucket?: string;
  /**
  * Region.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/cdn_domain#region CdnDomain#region}
  */
  readonly region?: string;
  /**
  * Key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/cdn_domain#secret_key CdnDomain#secret_key}
  */
  readonly secretKey?: string;
  /**
  * Configuration switch, available values: `on`, `off` (default).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/cdn_domain#switch CdnDomain#switch}
  */
  readonly switch: string;
}

export function cdnDomainAwsPrivateAccessToTerraform(struct?: CdnDomainAwsPrivateAccessOutputReference | CdnDomainAwsPrivateAccess): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_key: cdktf.stringToTerraform(struct!.accessKey),
    bucket: cdktf.stringToTerraform(struct!.bucket),
    region: cdktf.stringToTerraform(struct!.region),
    secret_key: cdktf.stringToTerraform(struct!.secretKey),
    switch: cdktf.stringToTerraform(struct!.switch),
  }
}


export function cdnDomainAwsPrivateAccessToHclTerraform(struct?: CdnDomainAwsPrivateAccessOutputReference | CdnDomainAwsPrivateAccess): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_key: {
      value: cdktf.stringToHclTerraform(struct!.accessKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bucket: {
      value: cdktf.stringToHclTerraform(struct!.bucket),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    region: {
      value: cdktf.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_key: {
      value: cdktf.stringToHclTerraform(struct!.secretKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    switch: {
      value: cdktf.stringToHclTerraform(struct!.switch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnDomainAwsPrivateAccessOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnDomainAwsPrivateAccess | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessKey = this._accessKey;
    }
    if (this._bucket !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucket = this._bucket;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    if (this._secretKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretKey = this._secretKey;
    }
    if (this._switch !== undefined) {
      hasAnyValues = true;
      internalValueResult.switch = this._switch;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnDomainAwsPrivateAccess | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._accessKey = undefined;
      this._bucket = undefined;
      this._region = undefined;
      this._secretKey = undefined;
      this._switch = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._accessKey = value.accessKey;
      this._bucket = value.bucket;
      this._region = value.region;
      this._secretKey = value.secretKey;
      this._switch = value.switch;
    }
  }

  // access_key - computed: false, optional: true, required: false
  private _accessKey?: string; 
  public get accessKey() {
    return this.getStringAttribute('access_key');
  }
  public set accessKey(value: string) {
    this._accessKey = value;
  }
  public resetAccessKey() {
    this._accessKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessKeyInput() {
    return this._accessKey;
  }

  // bucket - computed: false, optional: true, required: false
  private _bucket?: string; 
  public get bucket() {
    return this.getStringAttribute('bucket');
  }
  public set bucket(value: string) {
    this._bucket = value;
  }
  public resetBucket() {
    this._bucket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketInput() {
    return this._bucket;
  }

  // region - computed: false, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // secret_key - computed: false, optional: true, required: false
  private _secretKey?: string; 
  public get secretKey() {
    return this.getStringAttribute('secret_key');
  }
  public set secretKey(value: string) {
    this._secretKey = value;
  }
  public resetSecretKey() {
    this._secretKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretKeyInput() {
    return this._secretKey;
  }

  // switch - computed: false, optional: false, required: true
  private _switch?: string; 
  public get switch() {
    return this.getStringAttribute('switch');
  }
  public set switch(value: string) {
    this._switch = value;
  }
  // Temporarily expose input value. Use with caution.
  public get switchInput() {
    return this._switch;
  }
}
export interface CdnDomainBandWidthAlertStatisticItem {
  /**
  * Alert percentage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/cdn_domain#alert_percentage CdnDomain#alert_percentage}
  */
  readonly alertPercentage?: number;
  /**
  * Switch alert.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/cdn_domain#alert_switch CdnDomain#alert_switch}
  */
  readonly alertSwitch?: string;
  /**
  * threshold of bps.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/cdn_domain#bps_threshold CdnDomain#bps_threshold}
  */
  readonly bpsThreshold?: number;
  /**
  * Counter measure, values: `RETURN_404`, `RESOLVE_DNS_TO_ORIGIN`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/cdn_domain#counter_measure CdnDomain#counter_measure}
  */
  readonly counterMeasure?: string;
  /**
  * Cycle of checking in minutes, values `60`, `1440`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/cdn_domain#cycle CdnDomain#cycle}
  */
  readonly cycle?: number;
  /**
  * Metric.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/cdn_domain#metric CdnDomain#metric}
  */
  readonly metric?: string;
  /**
  * Configuration switch, available values: `on`, `off` (default).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/cdn_domain#switch CdnDomain#switch}
  */
  readonly switch: string;
  /**
  * Type of statistic item.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/cdn_domain#type CdnDomain#type}
  */
  readonly type?: string;
  /**
  * Time of auto unblock.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/cdn_domain#unblock_time CdnDomain#unblock_time}
  */
  readonly unblockTime?: number;
}

export function cdnDomainBandWidthAlertStatisticItemToTerraform(struct?: CdnDomainBandWidthAlertStatisticItemOutputReference | CdnDomainBandWidthAlertStatisticItem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    alert_percentage: cdktf.numberToTerraform(struct!.alertPercentage),
    alert_switch: cdktf.stringToTerraform(struct!.alertSwitch),
    bps_threshold: cdktf.numberToTerraform(struct!.bpsThreshold),
    counter_measure: cdktf.stringToTerraform(struct!.counterMeasure),
    cycle: cdktf.numberToTerraform(struct!.cycle),
    metric: cdktf.stringToTerraform(struct!.metric),
    switch: cdktf.stringToTerraform(struct!.switch),
    type: cdktf.stringToTerraform(struct!.type),
    unblock_time: cdktf.numberToTerraform(struct!.unblockTime),
  }
}


export function cdnDomainBandWidthAlertStatisticItemToHclTerraform(struct?: CdnDomainBandWidthAlertStatisticItemOutputReference | CdnDomainBandWidthAlertStatisticItem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    alert_percentage: {
      value: cdktf.numberToHclTerraform(struct!.alertPercentage),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    alert_switch: {
      value: cdktf.stringToHclTerraform(struct!.alertSwitch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bps_threshold: {
      value: cdktf.numberToHclTerraform(struct!.bpsThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    counter_measure: {
      value: cdktf.stringToHclTerraform(struct!.counterMeasure),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cycle: {
      value: cdktf.numberToHclTerraform(struct!.cycle),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    metric: {
      value: cdktf.stringToHclTerraform(struct!.metric),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    switch: {
      value: cdktf.stringToHclTerraform(struct!.switch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unblock_time: {
      value: cdktf.numberToHclTerraform(struct!.unblockTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnDomainBandWidthAlertStatisticItemOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnDomainBandWidthAlertStatisticItem | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alertPercentage !== undefined) {
      hasAnyValues = true;
      internalValueResult.alertPercentage = this._alertPercentage;
    }
    if (this._alertSwitch !== undefined) {
      hasAnyValues = true;
      internalValueResult.alertSwitch = this._alertSwitch;
    }
    if (this._bpsThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.bpsThreshold = this._bpsThreshold;
    }
    if (this._counterMeasure !== undefined) {
      hasAnyValues = true;
      internalValueResult.counterMeasure = this._counterMeasure;
    }
    if (this._cycle !== undefined) {
      hasAnyValues = true;
      internalValueResult.cycle = this._cycle;
    }
    if (this._metric !== undefined) {
      hasAnyValues = true;
      internalValueResult.metric = this._metric;
    }
    if (this._switch !== undefined) {
      hasAnyValues = true;
      internalValueResult.switch = this._switch;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._unblockTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.unblockTime = this._unblockTime;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnDomainBandWidthAlertStatisticItem | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._alertPercentage = undefined;
      this._alertSwitch = undefined;
      this._bpsThreshold = undefined;
      this._counterMeasure = undefined;
      this._cycle = undefined;
      this._metric = undefined;
      this._switch = undefined;
      this._type = undefined;
      this._unblockTime = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._alertPercentage = value.alertPercentage;
      this._alertSwitch = value.alertSwitch;
      this._bpsThreshold = value.bpsThreshold;
      this._counterMeasure = value.counterMeasure;
      this._cycle = value.cycle;
      this._metric = value.metric;
      this._switch = value.switch;
      this._type = value.type;
      this._unblockTime = value.unblockTime;
    }
  }

  // alert_percentage - computed: false, optional: true, required: false
  private _alertPercentage?: number; 
  public get alertPercentage() {
    return this.getNumberAttribute('alert_percentage');
  }
  public set alertPercentage(value: number) {
    this._alertPercentage = value;
  }
  public resetAlertPercentage() {
    this._alertPercentage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alertPercentageInput() {
    return this._alertPercentage;
  }

  // alert_switch - computed: false, optional: true, required: false
  private _alertSwitch?: string; 
  public get alertSwitch() {
    return this.getStringAttribute('alert_switch');
  }
  public set alertSwitch(value: string) {
    this._alertSwitch = value;
  }
  public resetAlertSwitch() {
    this._alertSwitch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alertSwitchInput() {
    return this._alertSwitch;
  }

  // bps_threshold - computed: false, optional: true, required: false
  private _bpsThreshold?: number; 
  public get bpsThreshold() {
    return this.getNumberAttribute('bps_threshold');
  }
  public set bpsThreshold(value: number) {
    this._bpsThreshold = value;
  }
  public resetBpsThreshold() {
    this._bpsThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bpsThresholdInput() {
    return this._bpsThreshold;
  }

  // counter_measure - computed: false, optional: true, required: false
  private _counterMeasure?: string; 
  public get counterMeasure() {
    return this.getStringAttribute('counter_measure');
  }
  public set counterMeasure(value: string) {
    this._counterMeasure = value;
  }
  public resetCounterMeasure() {
    this._counterMeasure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get counterMeasureInput() {
    return this._counterMeasure;
  }

  // cycle - computed: false, optional: true, required: false
  private _cycle?: number; 
  public get cycle() {
    return this.getNumberAttribute('cycle');
  }
  public set cycle(value: number) {
    this._cycle = value;
  }
  public resetCycle() {
    this._cycle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cycleInput() {
    return this._cycle;
  }

  // metric - computed: false, optional: true, required: false
  private _metric?: string; 
  public get metric() {
    return this.getStringAttribute('metric');
  }
  public set metric(value: string) {
    this._metric = value;
  }
  public resetMetric() {
    this._metric = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricInput() {
    return this._metric;
  }

  // switch - computed: false, optional: false, required: true
  private _switch?: string; 
  public get switch() {
    return this.getStringAttribute('switch');
  }
  public set switch(value: string) {
    this._switch = value;
  }
  // Temporarily expose input value. Use with caution.
  public get switchInput() {
    return this._switch;
  }

  // type - computed: false, optional: true, required: false
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

  // unblock_time - computed: false, optional: true, required: false
  private _unblockTime?: number; 
  public get unblockTime() {
    return this.getNumberAttribute('unblock_time');
  }
  public set unblockTime(value: number) {
    this._unblockTime = value;
  }
  public resetUnblockTime() {
    this._unblockTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unblockTimeInput() {
    return this._unblockTime;
  }
}
export interface CdnDomainBandWidthAlert {
  /**
  * Alert percentage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/cdn_domain#alert_percentage CdnDomain#alert_percentage}
  */
  readonly alertPercentage?: number;
  /**
  * Switch alert.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/cdn_domain#alert_switch CdnDomain#alert_switch}
  */
  readonly alertSwitch?: string;
  /**
  * threshold of bps.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/cdn_domain#bps_threshold CdnDomain#bps_threshold}
  */
  readonly bpsThreshold?: number;
  /**
  * Counter measure.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/cdn_domain#counter_measure CdnDomain#counter_measure}
  */
  readonly counterMeasure?: string;
  /**
  * Metric.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/cdn_domain#metric CdnDomain#metric}
  */
  readonly metric?: string;
  /**
  * Configuration switch, available values: `on`, `off` (default).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/cdn_domain#switch CdnDomain#switch}
  */
  readonly switch: string;
  /**
  * statistic_item block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/cdn_domain#statistic_item CdnDomain#statistic_item}
  */
  readonly statisticItem?: CdnDomainBandWidthAlertStatisticItem;
}

export function cdnDomainBandWidthAlertToTerraform(struct?: CdnDomainBandWidthAlertOutputReference | CdnDomainBandWidthAlert): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    alert_percentage: cdktf.numberToTerraform(struct!.alertPercentage),
    alert_switch: cdktf.stringToTerraform(struct!.alertSwitch),
    bps_threshold: cdktf.numberToTerraform(struct!.bpsThreshold),
    counter_measure: cdktf.stringToTerraform(struct!.counterMeasure),
    metric: cdktf.stringToTerraform(struct!.metric),
    switch: cdktf.stringToTerraform(struct!.switch),
    statistic_item: cdnDomainBandWidthAlertStatisticItemToTerraform(struct!.statisticItem),
  }
}


export function cdnDomainBandWidthAlertToHclTerraform(struct?: CdnDomainBandWidthAlertOutputReference | CdnDomainBandWidthAlert): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    alert_percentage: {
      value: cdktf.numberToHclTerraform(struct!.alertPercentage),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    alert_switch: {
      value: cdktf.stringToHclTerraform(struct!.alertSwitch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bps_threshold: {
      value: cdktf.numberToHclTerraform(struct!.bpsThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    counter_measure: {
      value: cdktf.stringToHclTerraform(struct!.counterMeasure),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metric: {
      value: cdktf.stringToHclTerraform(struct!.metric),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    switch: {
      value: cdktf.stringToHclTerraform(struct!.switch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    statistic_item: {
      value: cdnDomainBandWidthAlertStatisticItemToHclTerraform(struct!.statisticItem),
      isBlock: true,
      type: "list",
      storageClassType: "CdnDomainBandWidthAlertStatisticItemList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnDomainBandWidthAlertOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnDomainBandWidthAlert | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alertPercentage !== undefined) {
      hasAnyValues = true;
      internalValueResult.alertPercentage = this._alertPercentage;
    }
    if (this._alertSwitch !== undefined) {
      hasAnyValues = true;
      internalValueResult.alertSwitch = this._alertSwitch;
    }
    if (this._bpsThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.bpsThreshold = this._bpsThreshold;
    }
    if (this._counterMeasure !== undefined) {
      hasAnyValues = true;
      internalValueResult.counterMeasure = this._counterMeasure;
    }
    if (this._metric !== undefined) {
      hasAnyValues = true;
      internalValueResult.metric = this._metric;
    }
    if (this._switch !== undefined) {
      hasAnyValues = true;
      internalValueResult.switch = this._switch;
    }
    if (this._statisticItem?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.statisticItem = this._statisticItem?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnDomainBandWidthAlert | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._alertPercentage = undefined;
      this._alertSwitch = undefined;
      this._bpsThreshold = undefined;
      this._counterMeasure = undefined;
      this._metric = undefined;
      this._switch = undefined;
      this._statisticItem.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._alertPercentage = value.alertPercentage;
      this._alertSwitch = value.alertSwitch;
      this._bpsThreshold = value.bpsThreshold;
      this._counterMeasure = value.counterMeasure;
      this._metric = value.metric;
      this._switch = value.switch;
      this._statisticItem.internalValue = value.statisticItem;
    }
  }

  // alert_percentage - computed: false, optional: true, required: false
  private _alertPercentage?: number; 
  public get alertPercentage() {
    return this.getNumberAttribute('alert_percentage');
  }
  public set alertPercentage(value: number) {
    this._alertPercentage = value;
  }
  public resetAlertPercentage() {
    this._alertPercentage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alertPercentageInput() {
    return this._alertPercentage;
  }

  // alert_switch - computed: false, optional: true, required: false
  private _alertSwitch?: string; 
  public get alertSwitch() {
    return this.getStringAttribute('alert_switch');
  }
  public set alertSwitch(value: string) {
    this._alertSwitch = value;
  }
  public resetAlertSwitch() {
    this._alertSwitch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alertSwitchInput() {
    return this._alertSwitch;
  }

  // bps_threshold - computed: false, optional: true, required: false
  private _bpsThreshold?: number; 
  public get bpsThreshold() {
    return this.getNumberAttribute('bps_threshold');
  }
  public set bpsThreshold(value: number) {
    this._bpsThreshold = value;
  }
  public resetBpsThreshold() {
    this._bpsThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bpsThresholdInput() {
    return this._bpsThreshold;
  }

  // counter_measure - computed: false, optional: true, required: false
  private _counterMeasure?: string; 
  public get counterMeasure() {
    return this.getStringAttribute('counter_measure');
  }
  public set counterMeasure(value: string) {
    this._counterMeasure = value;
  }
  public resetCounterMeasure() {
    this._counterMeasure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get counterMeasureInput() {
    return this._counterMeasure;
  }

  // last_trigger_time - computed: true, optional: false, required: false
  public get lastTriggerTime() {
    return this.getStringAttribute('last_trigger_time');
  }

  // last_trigger_time_overseas - computed: true, optional: false, required: false
  public get lastTriggerTimeOverseas() {
    return this.getStringAttribute('last_trigger_time_overseas');
  }

  // metric - computed: false, optional: true, required: false
  private _metric?: string; 
  public get metric() {
    return this.getStringAttribute('metric');
  }
  public set metric(value: string) {
    this._metric = value;
  }
  public resetMetric() {
    this._metric = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricInput() {
    return this._metric;
  }

  // switch - computed: false, optional: false, required: true
  private _switch?: string; 
  public get switch() {
    return this.getStringAttribute('switch');
  }
  public set switch(value: string) {
    this._switch = value;
  }
  // Temporarily expose input value. Use with caution.
  public get switchInput() {
    return this._switch;
  }

  // statistic_item - computed: false, optional: true, required: false
  private _statisticItem = new CdnDomainBandWidthAlertStatisticItemOutputReference(this, "statistic_item");
  public get statisticItem() {
    return this._statisticItem;
  }
  public putStatisticItem(value: CdnDomainBandWidthAlertStatisticItem) {
    this._statisticItem.internalValue = value;
  }
  public resetStatisticItem() {
    this._statisticItem.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statisticItemInput() {
    return this._statisticItem.internalValue;
  }
}
export interface CdnDomainCacheKeyKeyRulesQueryString {
  /**
  * Specify key rule QS action, values: `includeCustom`, `excludeCustom`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/cdn_domain#action CdnDomain#action}
  */
  readonly action?: string;
  /**
  * Whether to use QueryString as part of CacheKey, values `on`, `off` (Default).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/cdn_domain#switch CdnDomain#switch}
  */
  readonly switch?: string;
  /**
  * Array of included/excluded query strings (separated by `;`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/cdn_domain#value CdnDomain#value}
  */
  readonly value?: string;
}

export function cdnDomainCacheKeyKeyRulesQueryStringToTerraform(struct?: CdnDomainCacheKeyKeyRulesQueryStringOutputReference | CdnDomainCacheKeyKeyRulesQueryString): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    switch: cdktf.stringToTerraform(struct!.switch),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function cdnDomainCacheKeyKeyRulesQueryStringToHclTerraform(struct?: CdnDomainCacheKeyKeyRulesQueryStringOutputReference | CdnDomainCacheKeyKeyRulesQueryString): any {
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
    switch: {
      value: cdktf.stringToHclTerraform(struct!.switch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnDomainCacheKeyKeyRulesQueryStringOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnDomainCacheKeyKeyRulesQueryString | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._switch !== undefined) {
      hasAnyValues = true;
      internalValueResult.switch = this._switch;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnDomainCacheKeyKeyRulesQueryString | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._action = undefined;
      this._switch = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._action = value.action;
      this._switch = value.switch;
      this._value = value.value;
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

  // switch - computed: false, optional: true, required: false
  private _switch?: string; 
  public get switch() {
    return this.getStringAttribute('switch');
  }
  public set switch(value: string) {
    this._switch = value;
  }
  public resetSwitch() {
    this._switch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get switchInput() {
    return this._switch;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface CdnDomainCacheKeyKeyRules {
  /**
  * Whether to enable full-path cache, values `on` (DEFAULT ON), `off`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/cdn_domain#full_url_cache CdnDomain#full_url_cache}
  */
  readonly fullUrlCache?: string;
  /**
  * Whether caches are case insensitive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/cdn_domain#ignore_case CdnDomain#ignore_case}
  */
  readonly ignoreCase?: string;
  /**
  * List of rule paths for each `key_rules`: `/` for `index`, file ext like `jpg` for `file`, `/dir/like/` for `directory` and `/path/index.html` for `path`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/cdn_domain#rule_paths CdnDomain#rule_paths}
  */
  readonly rulePaths: string[];
  /**
  * Specify rule tag, default value is `user`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/cdn_domain#rule_tag CdnDomain#rule_tag}
  */
  readonly ruleTag?: string;
  /**
  * Rule type, available: `file`, `directory`, `path`, `index`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/cdn_domain#rule_type CdnDomain#rule_type}
  */
  readonly ruleType: string;
  /**
  * query_string block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/cdn_domain#query_string CdnDomain#query_string}
  */
  readonly queryString: CdnDomainCacheKeyKeyRulesQueryString;
}

export function cdnDomainCacheKeyKeyRulesToTerraform(struct?: CdnDomainCacheKeyKeyRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    full_url_cache: cdktf.stringToTerraform(struct!.fullUrlCache),
    ignore_case: cdktf.stringToTerraform(struct!.ignoreCase),
    rule_paths: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.rulePaths),
    rule_tag: cdktf.stringToTerraform(struct!.ruleTag),
    rule_type: cdktf.stringToTerraform(struct!.ruleType),
    query_string: cdnDomainCacheKeyKeyRulesQueryStringToTerraform(struct!.queryString),
  }
}


export function cdnDomainCacheKeyKeyRulesToHclTerraform(struct?: CdnDomainCacheKeyKeyRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    full_url_cache: {
      value: cdktf.stringToHclTerraform(struct!.fullUrlCache),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ignore_case: {
      value: cdktf.stringToHclTerraform(struct!.ignoreCase),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rule_paths: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.rulePaths),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    rule_tag: {
      value: cdktf.stringToHclTerraform(struct!.ruleTag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rule_type: {
      value: cdktf.stringToHclTerraform(struct!.ruleType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    query_string: {
      value: cdnDomainCacheKeyKeyRulesQueryStringToHclTerraform(struct!.queryString),
      isBlock: true,
      type: "list",
      storageClassType: "CdnDomainCacheKeyKeyRulesQueryStringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnDomainCacheKeyKeyRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CdnDomainCacheKeyKeyRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fullUrlCache !== undefined) {
      hasAnyValues = true;
      internalValueResult.fullUrlCache = this._fullUrlCache;
    }
    if (this._ignoreCase !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreCase = this._ignoreCase;
    }
    if (this._rulePaths !== undefined) {
      hasAnyValues = true;
      internalValueResult.rulePaths = this._rulePaths;
    }
    if (this._ruleTag !== undefined) {
      hasAnyValues = true;
      internalValueResult.ruleTag = this._ruleTag;
    }
    if (this._ruleType !== undefined) {
      hasAnyValues = true;
      internalValueResult.ruleType = this._ruleType;
    }
    if (this._queryString?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryString = this._queryString?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnDomainCacheKeyKeyRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fullUrlCache = undefined;
      this._ignoreCase = undefined;
      this._rulePaths = undefined;
      this._ruleTag = undefined;
      this._ruleType = undefined;
      this._queryString.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fullUrlCache = value.fullUrlCache;
      this._ignoreCase = value.ignoreCase;
      this._rulePaths = value.rulePaths;
      this._ruleTag = value.ruleTag;
      this._ruleType = value.ruleType;
      this._queryString.internalValue = value.queryString;
    }
  }

  // full_url_cache - computed: false, optional: true, required: false
  private _fullUrlCache?: string; 
  public get fullUrlCache() {
    return this.getStringAttribute('full_url_cache');
  }
  public set fullUrlCache(value: string) {
    this._fullUrlCache = value;
  }
  public resetFullUrlCache() {
    this._fullUrlCache = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fullUrlCacheInput() {
    return this._fullUrlCache;
  }

  // ignore_case - computed: false, optional: true, required: false
  private _ignoreCase?: string; 
  public get ignoreCase() {
    return this.getStringAttribute('ignore_case');
  }
  public set ignoreCase(value: string) {
    this._ignoreCase = value;
  }
  public resetIgnoreCase() {
    this._ignoreCase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreCaseInput() {
    return this._ignoreCase;
  }

  // rule_paths - computed: false, optional: false, required: true
  private _rulePaths?: string[]; 
  public get rulePaths() {
    return this.getListAttribute('rule_paths');
  }
  public set rulePaths(value: string[]) {
    this._rulePaths = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rulePathsInput() {
    return this._rulePaths;
  }

  // rule_tag - computed: false, optional: true, required: false
  private _ruleTag?: string; 
  public get ruleTag() {
    return this.getStringAttribute('rule_tag');
  }
  public set ruleTag(value: string) {
    this._ruleTag = value;
  }
  public resetRuleTag() {
    this._ruleTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleTagInput() {
    return this._ruleTag;
  }

  // rule_type - computed: false, optional: false, required: true
  private _ruleType?: string; 
  public get ruleType() {
    return this.getStringAttribute('rule_type');
  }
  public set ruleType(value: string) {
    this._ruleType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleTypeInput() {
    return this._ruleType;
  }

  // query_string - computed: false, optional: false, required: true
  private _queryString = new CdnDomainCacheKeyKeyRulesQueryStringOutputReference(this, "query_string");
  public get queryString() {
    return this._queryString;
  }
  public putQueryString(value: CdnDomainCacheKeyKeyRulesQueryString) {
    this._queryString.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get queryStringInput() {
    return this._queryString.internalValue;
  }
}

export class CdnDomainCacheKeyKeyRulesList extends cdktf.ComplexList {
  public internalValue? : CdnDomainCacheKeyKeyRules[] | cdktf.IResolvable

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
  public get(index: number): CdnDomainCacheKeyKeyRulesOutputReference {
    return new CdnDomainCacheKeyKeyRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CdnDomainCacheKeyQueryString {
  /**
  * Include/exclude query parameters. Values: `includeAll` (Default), `excludeAll`, `includeCustom`, `excludeCustom`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/cdn_domain#action CdnDomain#action}
  */
  readonly action?: string;
  /**
  * Whether to sort again, values `on`, `off` (Default).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/cdn_domain#reorder CdnDomain#reorder}
  */
  readonly reorder?: string;
  /**
  * Whether to use QueryString as part of CacheKey, values `on`, `off` (Default).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/cdn_domain#switch CdnDomain#switch}
  */
  readonly switch?: string;
  /**
  * Array of included/excluded query strings (separated by `;`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/cdn_domain#value CdnDomain#value}
  */
  readonly value?: string;
}

export function cdnDomainCacheKeyQueryStringToTerraform(struct?: CdnDomainCacheKeyQueryStringOutputReference | CdnDomainCacheKeyQueryString): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    reorder: cdktf.stringToTerraform(struct!.reorder),
    switch: cdktf.stringToTerraform(struct!.switch),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function cdnDomainCacheKeyQueryStringToHclTerraform(struct?: CdnDomainCacheKeyQueryStringOutputReference | CdnDomainCacheKeyQueryString): any {
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
    reorder: {
      value: cdktf.stringToHclTerraform(struct!.reorder),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    switch: {
      value: cdktf.stringToHclTerraform(struct!.switch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnDomainCacheKeyQueryStringOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnDomainCacheKeyQueryString | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._reorder !== undefined) {
      hasAnyValues = true;
      internalValueResult.reorder = this._reorder;
    }
    if (this._switch !== undefined) {
      hasAnyValues = true;
      internalValueResult.switch = this._switch;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnDomainCacheKeyQueryString | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._action = undefined;
      this._reorder = undefined;
      this._switch = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._action = value.action;
      this._reorder = value.reorder;
      this._switch = value.switch;
      this._value = value.value;
    }
  }

  // action - computed: true, optional: true, required: false
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

  // reorder - computed: false, optional: true, required: false
  private _reorder?: string; 
  public get reorder() {
    return this.getStringAttribute('reorder');
  }
  public set reorder(value: string) {
    this._reorder = value;
  }
  public resetReorder() {
    this._reorder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reorderInput() {
    return this._reorder;
  }

  // switch - computed: false, optional: true, required: false
  private _switch?: string; 
  public get switch() {
    return this.getStringAttribute('switch');
  }
  public set switch(value: string) {
    this._switch = value;
  }
  public resetSwitch() {
    this._switch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get switchInput() {
    return this._switch;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface CdnDomainCacheKey {
  /**
  * Whether to enable full-path cache, values `on` (DEFAULT ON), `off`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/cdn_domain#full_url_cache CdnDomain#full_url_cache}
  */
  readonly fullUrlCache?: string;
  /**
  * Specifies whether the cache key is case sensitive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/cdn_domain#ignore_case CdnDomain#ignore_case}
  */
  readonly ignoreCase?: string;
  /**
  * key_rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/cdn_domain#key_rules CdnDomain#key_rules}
  */
  readonly keyRules?: CdnDomainCacheKeyKeyRules[] | cdktf.IResolvable;
  /**
  * query_string block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/cdn_domain#query_string CdnDomain#query_string}
  */
  readonly queryString?: CdnDomainCacheKeyQueryString;
}

export function cdnDomainCacheKeyToTerraform(struct?: CdnDomainCacheKeyOutputReference | CdnDomainCacheKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    full_url_cache: cdktf.stringToTerraform(struct!.fullUrlCache),
    ignore_case: cdktf.stringToTerraform(struct!.ignoreCase),
    key_rules: cdktf.listMapper(cdnDomainCacheKeyKeyRulesToTerraform, true)(struct!.keyRules),
    query_string: cdnDomainCacheKeyQueryStringToTerraform(struct!.queryString),
  }
}


export function cdnDomainCacheKeyToHclTerraform(struct?: CdnDomainCacheKeyOutputReference | CdnDomainCacheKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    full_url_cache: {
      value: cdktf.stringToHclTerraform(struct!.fullUrlCache),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ignore_case: {
      value: cdktf.stringToHclTerraform(struct!.ignoreCase),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_rules: {
      value: cdktf.listMapperHcl(cdnDomainCacheKeyKeyRulesToHclTerraform, true)(struct!.keyRules),
      isBlock: true,
      type: "list",
      storageClassType: "CdnDomainCacheKeyKeyRulesList",
    },
    query_string: {
      value: cdnDomainCacheKeyQueryStringToHclTerraform(struct!.queryString),
      isBlock: true,
      type: "list",
      storageClassType: "CdnDomainCacheKeyQueryStringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnDomainCacheKeyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnDomainCacheKey | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fullUrlCache !== undefined) {
      hasAnyValues = true;
      internalValueResult.fullUrlCache = this._fullUrlCache;
    }
    if (this._ignoreCase !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreCase = this._ignoreCase;
    }
    if (this._keyRules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyRules = this._keyRules?.internalValue;
    }
    if (this._queryString?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryString = this._queryString?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnDomainCacheKey | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._fullUrlCache = undefined;
      this._ignoreCase = undefined;
      this._keyRules.internalValue = undefined;
      this._queryString.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._fullUrlCache = value.fullUrlCache;
      this._ignoreCase = value.ignoreCase;
      this._keyRules.internalValue = value.keyRules;
      this._queryString.internalValue = value.queryString;
    }
  }

  // full_url_cache - computed: false, optional: true, required: false
  private _fullUrlCache?: string; 
  public get fullUrlCache() {
    return this.getStringAttribute('full_url_cache');
  }
  public set fullUrlCache(value: string) {
    this._fullUrlCache = value;
  }
  public resetFullUrlCache() {
    this._fullUrlCache = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fullUrlCacheInput() {
    return this._fullUrlCache;
  }

  // ignore_case - computed: false, optional: true, required: false
  private _ignoreCase?: string; 
  public get ignoreCase() {
    return this.getStringAttribute('ignore_case');
  }
  public set ignoreCase(value: string) {
    this._ignoreCase = value;
  }
  public resetIgnoreCase() {
    this._ignoreCase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreCaseInput() {
    return this._ignoreCase;
  }

  // key_rules - computed: false, optional: true, required: false
  private _keyRules = new CdnDomainCacheKeyKeyRulesList(this, "key_rules", false);
  public get keyRules() {
    return this._keyRules;
  }
  public putKeyRules(value: CdnDomainCacheKeyKeyRules[] | cdktf.IResolvable) {
    this._keyRules.internalValue = value;
  }
  public resetKeyRules() {
    this._keyRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyRulesInput() {
    return this._keyRules.internalValue;
  }

  // query_string - computed: false, optional: true, required: false
  private _queryString = new CdnDomainCacheKeyQueryStringOutputReference(this, "query_string");
  public get queryString() {
    return this._queryString;
  }
  public putQueryString(value: CdnDomainCacheKeyQueryString) {
    this._queryString.internalValue = value;
  }
  public resetQueryString() {
    this._queryString.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryStringInput() {
    return this._queryString.internalValue;
  }
}
export interface CdnDomainCompressionCompressionRules {
  /**
  * List of algorithms, available: `gzip` and `brotli`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/cdn_domain#algorithms CdnDomain#algorithms}
  */
  readonly algorithms: string[];
  /**
  * Must be set as true, enables compression.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/cdn_domain#compress CdnDomain#compress}
  */
  readonly compress: boolean | cdktf.IResolvable;
  /**
  * List of file extensions like `jpg`, `txt`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/cdn_domain#file_extensions CdnDomain#file_extensions}
  */
  readonly fileExtensions?: string[];
  /**
  * The maximum file size to trigger compression (in bytes).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/cdn_domain#max_length CdnDomain#max_length}
  */
  readonly maxLength: number;
  /**
  * The minimum file size to trigger compression (in bytes).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/cdn_domain#min_length CdnDomain#min_length}
  */
  readonly minLength: number;
  /**
  * List of rule paths for each `rule_type`: `*` for `all`, file ext like `jpg` for `file`, `/dir/like/` for `directory` and `/path/index.html` for `path`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/cdn_domain#rule_paths CdnDomain#rule_paths}
  */
  readonly rulePaths?: string[];
  /**
  * Rule type, available: `all`, `file`, `directory`, `path`, `contentType`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/cdn_domain#rule_type CdnDomain#rule_type}
  */
  readonly ruleType?: string;
}

export function cdnDomainCompressionCompressionRulesToTerraform(struct?: CdnDomainCompressionCompressionRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    algorithms: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.algorithms),
    compress: cdktf.booleanToTerraform(struct!.compress),
    file_extensions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.fileExtensions),
    max_length: cdktf.numberToTerraform(struct!.maxLength),
    min_length: cdktf.numberToTerraform(struct!.minLength),
    rule_paths: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.rulePaths),
    rule_type: cdktf.stringToTerraform(struct!.ruleType),
  }
}


export function cdnDomainCompressionCompressionRulesToHclTerraform(struct?: CdnDomainCompressionCompressionRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    algorithms: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.algorithms),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    compress: {
      value: cdktf.booleanToHclTerraform(struct!.compress),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    file_extensions: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.fileExtensions),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    max_length: {
      value: cdktf.numberToHclTerraform(struct!.maxLength),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_length: {
      value: cdktf.numberToHclTerraform(struct!.minLength),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rule_paths: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.rulePaths),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    rule_type: {
      value: cdktf.stringToHclTerraform(struct!.ruleType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnDomainCompressionCompressionRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CdnDomainCompressionCompressionRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._algorithms !== undefined) {
      hasAnyValues = true;
      internalValueResult.algorithms = this._algorithms;
    }
    if (this._compress !== undefined) {
      hasAnyValues = true;
      internalValueResult.compress = this._compress;
    }
    if (this._fileExtensions !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileExtensions = this._fileExtensions;
    }
    if (this._maxLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxLength = this._maxLength;
    }
    if (this._minLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.minLength = this._minLength;
    }
    if (this._rulePaths !== undefined) {
      hasAnyValues = true;
      internalValueResult.rulePaths = this._rulePaths;
    }
    if (this._ruleType !== undefined) {
      hasAnyValues = true;
      internalValueResult.ruleType = this._ruleType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnDomainCompressionCompressionRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._algorithms = undefined;
      this._compress = undefined;
      this._fileExtensions = undefined;
      this._maxLength = undefined;
      this._minLength = undefined;
      this._rulePaths = undefined;
      this._ruleType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._algorithms = value.algorithms;
      this._compress = value.compress;
      this._fileExtensions = value.fileExtensions;
      this._maxLength = value.maxLength;
      this._minLength = value.minLength;
      this._rulePaths = value.rulePaths;
      this._ruleType = value.ruleType;
    }
  }

  // algorithms - computed: false, optional: false, required: true
  private _algorithms?: string[]; 
  public get algorithms() {
    return this.getListAttribute('algorithms');
  }
  public set algorithms(value: string[]) {
    this._algorithms = value;
  }
  // Temporarily expose input value. Use with caution.
  public get algorithmsInput() {
    return this._algorithms;
  }

  // compress - computed: false, optional: false, required: true
  private _compress?: boolean | cdktf.IResolvable; 
  public get compress() {
    return this.getBooleanAttribute('compress');
  }
  public set compress(value: boolean | cdktf.IResolvable) {
    this._compress = value;
  }
  // Temporarily expose input value. Use with caution.
  public get compressInput() {
    return this._compress;
  }

  // file_extensions - computed: false, optional: true, required: false
  private _fileExtensions?: string[]; 
  public get fileExtensions() {
    return this.getListAttribute('file_extensions');
  }
  public set fileExtensions(value: string[]) {
    this._fileExtensions = value;
  }
  public resetFileExtensions() {
    this._fileExtensions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileExtensionsInput() {
    return this._fileExtensions;
  }

  // max_length - computed: false, optional: false, required: true
  private _maxLength?: number; 
  public get maxLength() {
    return this.getNumberAttribute('max_length');
  }
  public set maxLength(value: number) {
    this._maxLength = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxLengthInput() {
    return this._maxLength;
  }

  // min_length - computed: false, optional: false, required: true
  private _minLength?: number; 
  public get minLength() {
    return this.getNumberAttribute('min_length');
  }
  public set minLength(value: number) {
    this._minLength = value;
  }
  // Temporarily expose input value. Use with caution.
  public get minLengthInput() {
    return this._minLength;
  }

  // rule_paths - computed: false, optional: true, required: false
  private _rulePaths?: string[]; 
  public get rulePaths() {
    return this.getListAttribute('rule_paths');
  }
  public set rulePaths(value: string[]) {
    this._rulePaths = value;
  }
  public resetRulePaths() {
    this._rulePaths = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rulePathsInput() {
    return this._rulePaths;
  }

  // rule_type - computed: false, optional: true, required: false
  private _ruleType?: string; 
  public get ruleType() {
    return this.getStringAttribute('rule_type');
  }
  public set ruleType(value: string) {
    this._ruleType = value;
  }
  public resetRuleType() {
    this._ruleType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleTypeInput() {
    return this._ruleType;
  }
}

export class CdnDomainCompressionCompressionRulesList extends cdktf.ComplexList {
  public internalValue? : CdnDomainCompressionCompressionRules[] | cdktf.IResolvable

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
  public get(index: number): CdnDomainCompressionCompressionRulesOutputReference {
    return new CdnDomainCompressionCompressionRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CdnDomainCompression {
  /**
  * Configuration switch, available values: `on`, `off` (default).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/cdn_domain#switch CdnDomain#switch}
  */
  readonly switch: string;
  /**
  * compression_rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/cdn_domain#compression_rules CdnDomain#compression_rules}
  */
  readonly compressionRules?: CdnDomainCompressionCompressionRules[] | cdktf.IResolvable;
}

export function cdnDomainCompressionToTerraform(struct?: CdnDomainCompressionOutputReference | CdnDomainCompression): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    switch: cdktf.stringToTerraform(struct!.switch),
    compression_rules: cdktf.listMapper(cdnDomainCompressionCompressionRulesToTerraform, true)(struct!.compressionRules),
  }
}


export function cdnDomainCompressionToHclTerraform(struct?: CdnDomainCompressionOutputReference | CdnDomainCompression): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    switch: {
      value: cdktf.stringToHclTerraform(struct!.switch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    compression_rules: {
      value: cdktf.listMapperHcl(cdnDomainCompressionCompressionRulesToHclTerraform, true)(struct!.compressionRules),
      isBlock: true,
      type: "list",
      storageClassType: "CdnDomainCompressionCompressionRulesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnDomainCompressionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnDomainCompression | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._switch !== undefined) {
      hasAnyValues = true;
      internalValueResult.switch = this._switch;
    }
    if (this._compressionRules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.compressionRules = this._compressionRules?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnDomainCompression | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._switch = undefined;
      this._compressionRules.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._switch = value.switch;
      this._compressionRules.internalValue = value.compressionRules;
    }
  }

  // switch - computed: false, optional: false, required: true
  private _switch?: string; 
  public get switch() {
    return this.getStringAttribute('switch');
  }
  public set switch(value: string) {
    this._switch = value;
  }
  // Temporarily expose input value. Use with caution.
  public get switchInput() {
    return this._switch;
  }

  // compression_rules - computed: false, optional: true, required: false
  private _compressionRules = new CdnDomainCompressionCompressionRulesList(this, "compression_rules", false);
  public get compressionRules() {
    return this._compressionRules;
  }
  public putCompressionRules(value: CdnDomainCompressionCompressionRules[] | cdktf.IResolvable) {
    this._compressionRules.internalValue = value;
  }
  public resetCompressionRules() {
    this._compressionRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compressionRulesInput() {
    return this._compressionRules.internalValue;
  }
}
export interface CdnDomainDownstreamCappingCappingRules {
  /**
  * Capping rule kbps threshold.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/cdn_domain#kbps_threshold CdnDomain#kbps_threshold}
  */
  readonly kbpsThreshold: number;
  /**
  * List of capping rule path.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/cdn_domain#rule_paths CdnDomain#rule_paths}
  */
  readonly rulePaths: string[];
  /**
  * Capping rule type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/cdn_domain#rule_type CdnDomain#rule_type}
  */
  readonly ruleType: string;
}

export function cdnDomainDownstreamCappingCappingRulesToTerraform(struct?: CdnDomainDownstreamCappingCappingRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    kbps_threshold: cdktf.numberToTerraform(struct!.kbpsThreshold),
    rule_paths: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.rulePaths),
    rule_type: cdktf.stringToTerraform(struct!.ruleType),
  }
}


export function cdnDomainDownstreamCappingCappingRulesToHclTerraform(struct?: CdnDomainDownstreamCappingCappingRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    kbps_threshold: {
      value: cdktf.numberToHclTerraform(struct!.kbpsThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rule_paths: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.rulePaths),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    rule_type: {
      value: cdktf.stringToHclTerraform(struct!.ruleType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnDomainDownstreamCappingCappingRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CdnDomainDownstreamCappingCappingRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kbpsThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.kbpsThreshold = this._kbpsThreshold;
    }
    if (this._rulePaths !== undefined) {
      hasAnyValues = true;
      internalValueResult.rulePaths = this._rulePaths;
    }
    if (this._ruleType !== undefined) {
      hasAnyValues = true;
      internalValueResult.ruleType = this._ruleType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnDomainDownstreamCappingCappingRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._kbpsThreshold = undefined;
      this._rulePaths = undefined;
      this._ruleType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._kbpsThreshold = value.kbpsThreshold;
      this._rulePaths = value.rulePaths;
      this._ruleType = value.ruleType;
    }
  }

  // kbps_threshold - computed: false, optional: false, required: true
  private _kbpsThreshold?: number; 
  public get kbpsThreshold() {
    return this.getNumberAttribute('kbps_threshold');
  }
  public set kbpsThreshold(value: number) {
    this._kbpsThreshold = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kbpsThresholdInput() {
    return this._kbpsThreshold;
  }

  // rule_paths - computed: false, optional: false, required: true
  private _rulePaths?: string[]; 
  public get rulePaths() {
    return this.getListAttribute('rule_paths');
  }
  public set rulePaths(value: string[]) {
    this._rulePaths = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rulePathsInput() {
    return this._rulePaths;
  }

  // rule_type - computed: false, optional: false, required: true
  private _ruleType?: string; 
  public get ruleType() {
    return this.getStringAttribute('rule_type');
  }
  public set ruleType(value: string) {
    this._ruleType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleTypeInput() {
    return this._ruleType;
  }
}

export class CdnDomainDownstreamCappingCappingRulesList extends cdktf.ComplexList {
  public internalValue? : CdnDomainDownstreamCappingCappingRules[] | cdktf.IResolvable

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
  public get(index: number): CdnDomainDownstreamCappingCappingRulesOutputReference {
    return new CdnDomainDownstreamCappingCappingRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CdnDomainDownstreamCapping {
  /**
  * Configuration switch, available values: `on`, `off` (default).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/cdn_domain#switch CdnDomain#switch}
  */
  readonly switch: string;
  /**
  * capping_rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/cdn_domain#capping_rules CdnDomain#capping_rules}
  */
  readonly cappingRules?: CdnDomainDownstreamCappingCappingRules[] | cdktf.IResolvable;
}

export function cdnDomainDownstreamCappingToTerraform(struct?: CdnDomainDownstreamCappingOutputReference | CdnDomainDownstreamCapping): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    switch: cdktf.stringToTerraform(struct!.switch),
    capping_rules: cdktf.listMapper(cdnDomainDownstreamCappingCappingRulesToTerraform, true)(struct!.cappingRules),
  }
}


export function cdnDomainDownstreamCappingToHclTerraform(struct?: CdnDomainDownstreamCappingOutputReference | CdnDomainDownstreamCapping): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    switch: {
      value: cdktf.stringToHclTerraform(struct!.switch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    capping_rules: {
      value: cdktf.listMapperHcl(cdnDomainDownstreamCappingCappingRulesToHclTerraform, true)(struct!.cappingRules),
      isBlock: true,
      type: "list",
      storageClassType: "CdnDomainDownstreamCappingCappingRulesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnDomainDownstreamCappingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnDomainDownstreamCapping | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._switch !== undefined) {
      hasAnyValues = true;
      internalValueResult.switch = this._switch;
    }
    if (this._cappingRules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cappingRules = this._cappingRules?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnDomainDownstreamCapping | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._switch = undefined;
      this._cappingRules.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._switch = value.switch;
      this._cappingRules.internalValue = value.cappingRules;
    }
  }

  // switch - computed: false, optional: false, required: true
  private _switch?: string; 
  public get switch() {
    return this.getStringAttribute('switch');
  }
  public set switch(value: string) {
    this._switch = value;
  }
  // Temporarily expose input value. Use with caution.
  public get switchInput() {
    return this._switch;
  }

  // capping_rules - computed: false, optional: true, required: false
  private _cappingRules = new CdnDomainDownstreamCappingCappingRulesList(this, "capping_rules", false);
  public get cappingRules() {
    return this._cappingRules;
  }
  public putCappingRules(value: CdnDomainDownstreamCappingCappingRules[] | cdktf.IResolvable) {
    this._cappingRules.internalValue = value;
  }
  public resetCappingRules() {
    this._cappingRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cappingRulesInput() {
    return this._cappingRules.internalValue;
  }
}
export interface CdnDomainErrorPagePageRules {
  /**
  * Redirect code of error page rules.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/cdn_domain#redirect_code CdnDomain#redirect_code}
  */
  readonly redirectCode: number;
  /**
  * Redirect url of error page rules.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/cdn_domain#redirect_url CdnDomain#redirect_url}
  */
  readonly redirectUrl: string;
  /**
  * Status code of error page rules.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/cdn_domain#status_code CdnDomain#status_code}
  */
  readonly statusCode: number;
}

export function cdnDomainErrorPagePageRulesToTerraform(struct?: CdnDomainErrorPagePageRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    redirect_code: cdktf.numberToTerraform(struct!.redirectCode),
    redirect_url: cdktf.stringToTerraform(struct!.redirectUrl),
    status_code: cdktf.numberToTerraform(struct!.statusCode),
  }
}


export function cdnDomainErrorPagePageRulesToHclTerraform(struct?: CdnDomainErrorPagePageRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    redirect_code: {
      value: cdktf.numberToHclTerraform(struct!.redirectCode),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    redirect_url: {
      value: cdktf.stringToHclTerraform(struct!.redirectUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    status_code: {
      value: cdktf.numberToHclTerraform(struct!.statusCode),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnDomainErrorPagePageRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CdnDomainErrorPagePageRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._redirectCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.redirectCode = this._redirectCode;
    }
    if (this._redirectUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.redirectUrl = this._redirectUrl;
    }
    if (this._statusCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.statusCode = this._statusCode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnDomainErrorPagePageRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._redirectCode = undefined;
      this._redirectUrl = undefined;
      this._statusCode = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._redirectCode = value.redirectCode;
      this._redirectUrl = value.redirectUrl;
      this._statusCode = value.statusCode;
    }
  }

  // redirect_code - computed: false, optional: false, required: true
  private _redirectCode?: number; 
  public get redirectCode() {
    return this.getNumberAttribute('redirect_code');
  }
  public set redirectCode(value: number) {
    this._redirectCode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get redirectCodeInput() {
    return this._redirectCode;
  }

  // redirect_url - computed: false, optional: false, required: true
  private _redirectUrl?: string; 
  public get redirectUrl() {
    return this.getStringAttribute('redirect_url');
  }
  public set redirectUrl(value: string) {
    this._redirectUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get redirectUrlInput() {
    return this._redirectUrl;
  }

  // status_code - computed: false, optional: false, required: true
  private _statusCode?: number; 
  public get statusCode() {
    return this.getNumberAttribute('status_code');
  }
  public set statusCode(value: number) {
    this._statusCode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get statusCodeInput() {
    return this._statusCode;
  }
}

export class CdnDomainErrorPagePageRulesList extends cdktf.ComplexList {
  public internalValue? : CdnDomainErrorPagePageRules[] | cdktf.IResolvable

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
  public get(index: number): CdnDomainErrorPagePageRulesOutputReference {
    return new CdnDomainErrorPagePageRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CdnDomainErrorPage {
  /**
  * Configuration switch, available values: `on`, `off` (default).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/cdn_domain#switch CdnDomain#switch}
  */
  readonly switch: string;
  /**
  * page_rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/cdn_domain#page_rules CdnDomain#page_rules}
  */
  readonly pageRules?: CdnDomainErrorPagePageRules[] | cdktf.IResolvable;
}

export function cdnDomainErrorPageToTerraform(struct?: CdnDomainErrorPageOutputReference | CdnDomainErrorPage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    switch: cdktf.stringToTerraform(struct!.switch),
    page_rules: cdktf.listMapper(cdnDomainErrorPagePageRulesToTerraform, true)(struct!.pageRules),
  }
}


export function cdnDomainErrorPageToHclTerraform(struct?: CdnDomainErrorPageOutputReference | CdnDomainErrorPage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    switch: {
      value: cdktf.stringToHclTerraform(struct!.switch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    page_rules: {
      value: cdktf.listMapperHcl(cdnDomainErrorPagePageRulesToHclTerraform, true)(struct!.pageRules),
      isBlock: true,
      type: "list",
      storageClassType: "CdnDomainErrorPagePageRulesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnDomainErrorPageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnDomainErrorPage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._switch !== undefined) {
      hasAnyValues = true;
      internalValueResult.switch = this._switch;
    }
    if (this._pageRules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pageRules = this._pageRules?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnDomainErrorPage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._switch = undefined;
      this._pageRules.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._switch = value.switch;
      this._pageRules.internalValue = value.pageRules;
    }
  }

  // switch - computed: false, optional: false, required: true
  private _switch?: string; 
  public get switch() {
    return this.getStringAttribute('switch');
  }
  public set switch(value: string) {
    this._switch = value;
  }
  // Temporarily expose input value. Use with caution.
  public get switchInput() {
    return this._switch;
  }

  // page_rules - computed: false, optional: true, required: false
  private _pageRules = new CdnDomainErrorPagePageRulesList(this, "page_rules", false);
  public get pageRules() {
    return this._pageRules;
  }
  public putPageRules(value: CdnDomainErrorPagePageRules[] | cdktf.IResolvable) {
    this._pageRules.internalValue = value;
  }
  public resetPageRules() {
    this._pageRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pageRulesInput() {
    return this._pageRules.internalValue;
  }
}
export interface CdnDomainHttpsConfigClientCertificateConfig {
  /**
  * Client Certificate PEM format, requires Base64 encoding.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/cdn_domain#certificate_content CdnDomain#certificate_content}
  */
  readonly certificateContent: string;
}

export function cdnDomainHttpsConfigClientCertificateConfigToTerraform(struct?: CdnDomainHttpsConfigClientCertificateConfigOutputReference | CdnDomainHttpsConfigClientCertificateConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    certificate_content: cdktf.stringToTerraform(struct!.certificateContent),
  }
}


export function cdnDomainHttpsConfigClientCertificateConfigToHclTerraform(struct?: CdnDomainHttpsConfigClientCertificateConfigOutputReference | CdnDomainHttpsConfigClientCertificateConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    certificate_content: {
      value: cdktf.stringToHclTerraform(struct!.certificateContent),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnDomainHttpsConfigClientCertificateConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnDomainHttpsConfigClientCertificateConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._certificateContent !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificateContent = this._certificateContent;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnDomainHttpsConfigClientCertificateConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._certificateContent = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._certificateContent = value.certificateContent;
    }
  }

  // certificate_content - computed: false, optional: false, required: true
  private _certificateContent?: string; 
  public get certificateContent() {
    return this.getStringAttribute('certificate_content');
  }
  public set certificateContent(value: string) {
    this._certificateContent = value;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateContentInput() {
    return this._certificateContent;
  }

  // certificate_name - computed: true, optional: false, required: false
  public get certificateName() {
    return this.getStringAttribute('certificate_name');
  }

  // deploy_time - computed: true, optional: false, required: false
  public get deployTime() {
    return this.getStringAttribute('deploy_time');
  }

  // expire_time - computed: true, optional: false, required: false
  public get expireTime() {
    return this.getStringAttribute('expire_time');
  }
}
export interface CdnDomainHttpsConfigForceRedirect {
  /**
  * Whether to return the newly added header during force redirection. Values: `on`, `off`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/cdn_domain#carry_headers CdnDomain#carry_headers}
  */
  readonly carryHeaders?: string;
  /**
  * Forced redirect status code. Valid values are `301` and `302`. When `switch` setting `off`, this property does not need to be set or set to `302`. Default value is `302`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/cdn_domain#redirect_status_code CdnDomain#redirect_status_code}
  */
  readonly redirectStatusCode?: number;
  /**
  * Forced redirect type. Valid values are `http` and `https`. `http` means a forced redirect from HTTPS to HTTP, `https` means a forced redirect from HTTP to HTTPS. When `switch` setting `off`, this property does not need to be set or set to `http`. Default value is `http`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/cdn_domain#redirect_type CdnDomain#redirect_type}
  */
  readonly redirectType?: string;
  /**
  * Forced redirect configuration switch. Valid values are `on` and `off`. Default value is `off`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/cdn_domain#switch CdnDomain#switch}
  */
  readonly switch?: string;
}

export function cdnDomainHttpsConfigForceRedirectToTerraform(struct?: CdnDomainHttpsConfigForceRedirectOutputReference | CdnDomainHttpsConfigForceRedirect): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    carry_headers: cdktf.stringToTerraform(struct!.carryHeaders),
    redirect_status_code: cdktf.numberToTerraform(struct!.redirectStatusCode),
    redirect_type: cdktf.stringToTerraform(struct!.redirectType),
    switch: cdktf.stringToTerraform(struct!.switch),
  }
}


export function cdnDomainHttpsConfigForceRedirectToHclTerraform(struct?: CdnDomainHttpsConfigForceRedirectOutputReference | CdnDomainHttpsConfigForceRedirect): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    carry_headers: {
      value: cdktf.stringToHclTerraform(struct!.carryHeaders),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    redirect_status_code: {
      value: cdktf.numberToHclTerraform(struct!.redirectStatusCode),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    redirect_type: {
      value: cdktf.stringToHclTerraform(struct!.redirectType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    switch: {
      value: cdktf.stringToHclTerraform(struct!.switch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnDomainHttpsConfigForceRedirectOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnDomainHttpsConfigForceRedirect | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._carryHeaders !== undefined) {
      hasAnyValues = true;
      internalValueResult.carryHeaders = this._carryHeaders;
    }
    if (this._redirectStatusCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.redirectStatusCode = this._redirectStatusCode;
    }
    if (this._redirectType !== undefined) {
      hasAnyValues = true;
      internalValueResult.redirectType = this._redirectType;
    }
    if (this._switch !== undefined) {
      hasAnyValues = true;
      internalValueResult.switch = this._switch;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnDomainHttpsConfigForceRedirect | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._carryHeaders = undefined;
      this._redirectStatusCode = undefined;
      this._redirectType = undefined;
      this._switch = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._carryHeaders = value.carryHeaders;
      this._redirectStatusCode = value.redirectStatusCode;
      this._redirectType = value.redirectType;
      this._switch = value.switch;
    }
  }

  // carry_headers - computed: false, optional: true, required: false
  private _carryHeaders?: string; 
  public get carryHeaders() {
    return this.getStringAttribute('carry_headers');
  }
  public set carryHeaders(value: string) {
    this._carryHeaders = value;
  }
  public resetCarryHeaders() {
    this._carryHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get carryHeadersInput() {
    return this._carryHeaders;
  }

  // redirect_status_code - computed: false, optional: true, required: false
  private _redirectStatusCode?: number; 
  public get redirectStatusCode() {
    return this.getNumberAttribute('redirect_status_code');
  }
  public set redirectStatusCode(value: number) {
    this._redirectStatusCode = value;
  }
  public resetRedirectStatusCode() {
    this._redirectStatusCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redirectStatusCodeInput() {
    return this._redirectStatusCode;
  }

  // redirect_type - computed: false, optional: true, required: false
  private _redirectType?: string; 
  public get redirectType() {
    return this.getStringAttribute('redirect_type');
  }
  public set redirectType(value: string) {
    this._redirectType = value;
  }
  public resetRedirectType() {
    this._redirectType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redirectTypeInput() {
    return this._redirectType;
  }

  // switch - computed: false, optional: true, required: false
  private _switch?: string; 
  public get switch() {
    return this.getStringAttribute('switch');
  }
  public set switch(value: string) {
    this._switch = value;
  }
  public resetSwitch() {
    this._switch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get switchInput() {
    return this._switch;
  }
}
export interface CdnDomainHttpsConfigServerCertificateConfig {
  /**
  * Server certificate information. This is required when uploading an external certificate, which should contain the complete certificate chain.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/cdn_domain#certificate_content CdnDomain#certificate_content}
  */
  readonly certificateContent?: string;
  /**
  * Server certificate ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/cdn_domain#certificate_id CdnDomain#certificate_id}
  */
  readonly certificateId?: string;
  /**
  * Certificate remarks.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/cdn_domain#message CdnDomain#message}
  */
  readonly message?: string;
  /**
  * Server key information. This is required when uploading an external certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/cdn_domain#private_key CdnDomain#private_key}
  */
  readonly privateKey?: string;
}

export function cdnDomainHttpsConfigServerCertificateConfigToTerraform(struct?: CdnDomainHttpsConfigServerCertificateConfigOutputReference | CdnDomainHttpsConfigServerCertificateConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    certificate_content: cdktf.stringToTerraform(struct!.certificateContent),
    certificate_id: cdktf.stringToTerraform(struct!.certificateId),
    message: cdktf.stringToTerraform(struct!.message),
    private_key: cdktf.stringToTerraform(struct!.privateKey),
  }
}


export function cdnDomainHttpsConfigServerCertificateConfigToHclTerraform(struct?: CdnDomainHttpsConfigServerCertificateConfigOutputReference | CdnDomainHttpsConfigServerCertificateConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    certificate_content: {
      value: cdktf.stringToHclTerraform(struct!.certificateContent),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    certificate_id: {
      value: cdktf.stringToHclTerraform(struct!.certificateId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    message: {
      value: cdktf.stringToHclTerraform(struct!.message),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    private_key: {
      value: cdktf.stringToHclTerraform(struct!.privateKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnDomainHttpsConfigServerCertificateConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnDomainHttpsConfigServerCertificateConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._certificateContent !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificateContent = this._certificateContent;
    }
    if (this._certificateId !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificateId = this._certificateId;
    }
    if (this._message !== undefined) {
      hasAnyValues = true;
      internalValueResult.message = this._message;
    }
    if (this._privateKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateKey = this._privateKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnDomainHttpsConfigServerCertificateConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._certificateContent = undefined;
      this._certificateId = undefined;
      this._message = undefined;
      this._privateKey = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._certificateContent = value.certificateContent;
      this._certificateId = value.certificateId;
      this._message = value.message;
      this._privateKey = value.privateKey;
    }
  }

  // certificate_content - computed: false, optional: true, required: false
  private _certificateContent?: string; 
  public get certificateContent() {
    return this.getStringAttribute('certificate_content');
  }
  public set certificateContent(value: string) {
    this._certificateContent = value;
  }
  public resetCertificateContent() {
    this._certificateContent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateContentInput() {
    return this._certificateContent;
  }

  // certificate_id - computed: false, optional: true, required: false
  private _certificateId?: string; 
  public get certificateId() {
    return this.getStringAttribute('certificate_id');
  }
  public set certificateId(value: string) {
    this._certificateId = value;
  }
  public resetCertificateId() {
    this._certificateId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateIdInput() {
    return this._certificateId;
  }

  // certificate_name - computed: true, optional: false, required: false
  public get certificateName() {
    return this.getStringAttribute('certificate_name');
  }

  // deploy_time - computed: true, optional: false, required: false
  public get deployTime() {
    return this.getStringAttribute('deploy_time');
  }

  // expire_time - computed: true, optional: false, required: false
  public get expireTime() {
    return this.getStringAttribute('expire_time');
  }

  // message - computed: true, optional: true, required: false
  private _message?: string; 
  public get message() {
    return this.getStringAttribute('message');
  }
  public set message(value: string) {
    this._message = value;
  }
  public resetMessage() {
    this._message = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageInput() {
    return this._message;
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
}
export interface CdnDomainHttpsConfig {
  /**
  * HTTP2 configuration switch. Valid values are `on` and `off`. and default value is `off`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/cdn_domain#http2_switch CdnDomain#http2_switch}
  */
  readonly http2Switch?: string;
  /**
  * HTTPS configuration switch. Valid values are `on` and `off`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/cdn_domain#https_switch CdnDomain#https_switch}
  */
  readonly httpsSwitch: string;
  /**
  * OCSP configuration switch. Valid values are `on` and `off`. and default value is `off`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/cdn_domain#ocsp_stapling_switch CdnDomain#ocsp_stapling_switch}
  */
  readonly ocspStaplingSwitch?: string;
  /**
  * Spdy configuration switch. Valid values are `on` and `off`. and default value is `off`. This parameter is for white-list customer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/cdn_domain#spdy_switch CdnDomain#spdy_switch}
  */
  readonly spdySwitch?: string;
  /**
  * Tls version settings, only support some Advanced domain names, support settings TLSv1, TLSV1.1, TLSV1.2, TLSv1.3, when modifying must open consecutive versions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/cdn_domain#tls_versions CdnDomain#tls_versions}
  */
  readonly tlsVersions?: string[];
  /**
  * Client certificate authentication feature. Valid values are `on` and `off`. and default value is `off`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/cdn_domain#verify_client CdnDomain#verify_client}
  */
  readonly verifyClient?: string;
  /**
  * client_certificate_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/cdn_domain#client_certificate_config CdnDomain#client_certificate_config}
  */
  readonly clientCertificateConfig?: CdnDomainHttpsConfigClientCertificateConfig;
  /**
  * force_redirect block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/cdn_domain#force_redirect CdnDomain#force_redirect}
  */
  readonly forceRedirect?: CdnDomainHttpsConfigForceRedirect;
  /**
  * server_certificate_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/cdn_domain#server_certificate_config CdnDomain#server_certificate_config}
  */
  readonly serverCertificateConfig?: CdnDomainHttpsConfigServerCertificateConfig;
}

export function cdnDomainHttpsConfigToTerraform(struct?: CdnDomainHttpsConfigOutputReference | CdnDomainHttpsConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    http2_switch: cdktf.stringToTerraform(struct!.http2Switch),
    https_switch: cdktf.stringToTerraform(struct!.httpsSwitch),
    ocsp_stapling_switch: cdktf.stringToTerraform(struct!.ocspStaplingSwitch),
    spdy_switch: cdktf.stringToTerraform(struct!.spdySwitch),
    tls_versions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.tlsVersions),
    verify_client: cdktf.stringToTerraform(struct!.verifyClient),
    client_certificate_config: cdnDomainHttpsConfigClientCertificateConfigToTerraform(struct!.clientCertificateConfig),
    force_redirect: cdnDomainHttpsConfigForceRedirectToTerraform(struct!.forceRedirect),
    server_certificate_config: cdnDomainHttpsConfigServerCertificateConfigToTerraform(struct!.serverCertificateConfig),
  }
}


export function cdnDomainHttpsConfigToHclTerraform(struct?: CdnDomainHttpsConfigOutputReference | CdnDomainHttpsConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    http2_switch: {
      value: cdktf.stringToHclTerraform(struct!.http2Switch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    https_switch: {
      value: cdktf.stringToHclTerraform(struct!.httpsSwitch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ocsp_stapling_switch: {
      value: cdktf.stringToHclTerraform(struct!.ocspStaplingSwitch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    spdy_switch: {
      value: cdktf.stringToHclTerraform(struct!.spdySwitch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tls_versions: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.tlsVersions),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    verify_client: {
      value: cdktf.stringToHclTerraform(struct!.verifyClient),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_certificate_config: {
      value: cdnDomainHttpsConfigClientCertificateConfigToHclTerraform(struct!.clientCertificateConfig),
      isBlock: true,
      type: "list",
      storageClassType: "CdnDomainHttpsConfigClientCertificateConfigList",
    },
    force_redirect: {
      value: cdnDomainHttpsConfigForceRedirectToHclTerraform(struct!.forceRedirect),
      isBlock: true,
      type: "list",
      storageClassType: "CdnDomainHttpsConfigForceRedirectList",
    },
    server_certificate_config: {
      value: cdnDomainHttpsConfigServerCertificateConfigToHclTerraform(struct!.serverCertificateConfig),
      isBlock: true,
      type: "list",
      storageClassType: "CdnDomainHttpsConfigServerCertificateConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnDomainHttpsConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnDomainHttpsConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._http2Switch !== undefined) {
      hasAnyValues = true;
      internalValueResult.http2Switch = this._http2Switch;
    }
    if (this._httpsSwitch !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpsSwitch = this._httpsSwitch;
    }
    if (this._ocspStaplingSwitch !== undefined) {
      hasAnyValues = true;
      internalValueResult.ocspStaplingSwitch = this._ocspStaplingSwitch;
    }
    if (this._spdySwitch !== undefined) {
      hasAnyValues = true;
      internalValueResult.spdySwitch = this._spdySwitch;
    }
    if (this._tlsVersions !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsVersions = this._tlsVersions;
    }
    if (this._verifyClient !== undefined) {
      hasAnyValues = true;
      internalValueResult.verifyClient = this._verifyClient;
    }
    if (this._clientCertificateConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientCertificateConfig = this._clientCertificateConfig?.internalValue;
    }
    if (this._forceRedirect?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.forceRedirect = this._forceRedirect?.internalValue;
    }
    if (this._serverCertificateConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverCertificateConfig = this._serverCertificateConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnDomainHttpsConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._http2Switch = undefined;
      this._httpsSwitch = undefined;
      this._ocspStaplingSwitch = undefined;
      this._spdySwitch = undefined;
      this._tlsVersions = undefined;
      this._verifyClient = undefined;
      this._clientCertificateConfig.internalValue = undefined;
      this._forceRedirect.internalValue = undefined;
      this._serverCertificateConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._http2Switch = value.http2Switch;
      this._httpsSwitch = value.httpsSwitch;
      this._ocspStaplingSwitch = value.ocspStaplingSwitch;
      this._spdySwitch = value.spdySwitch;
      this._tlsVersions = value.tlsVersions;
      this._verifyClient = value.verifyClient;
      this._clientCertificateConfig.internalValue = value.clientCertificateConfig;
      this._forceRedirect.internalValue = value.forceRedirect;
      this._serverCertificateConfig.internalValue = value.serverCertificateConfig;
    }
  }

  // http2_switch - computed: false, optional: true, required: false
  private _http2Switch?: string; 
  public get http2Switch() {
    return this.getStringAttribute('http2_switch');
  }
  public set http2Switch(value: string) {
    this._http2Switch = value;
  }
  public resetHttp2Switch() {
    this._http2Switch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get http2SwitchInput() {
    return this._http2Switch;
  }

  // https_switch - computed: false, optional: false, required: true
  private _httpsSwitch?: string; 
  public get httpsSwitch() {
    return this.getStringAttribute('https_switch');
  }
  public set httpsSwitch(value: string) {
    this._httpsSwitch = value;
  }
  // Temporarily expose input value. Use with caution.
  public get httpsSwitchInput() {
    return this._httpsSwitch;
  }

  // ocsp_stapling_switch - computed: false, optional: true, required: false
  private _ocspStaplingSwitch?: string; 
  public get ocspStaplingSwitch() {
    return this.getStringAttribute('ocsp_stapling_switch');
  }
  public set ocspStaplingSwitch(value: string) {
    this._ocspStaplingSwitch = value;
  }
  public resetOcspStaplingSwitch() {
    this._ocspStaplingSwitch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ocspStaplingSwitchInput() {
    return this._ocspStaplingSwitch;
  }

  // spdy_switch - computed: false, optional: true, required: false
  private _spdySwitch?: string; 
  public get spdySwitch() {
    return this.getStringAttribute('spdy_switch');
  }
  public set spdySwitch(value: string) {
    this._spdySwitch = value;
  }
  public resetSpdySwitch() {
    this._spdySwitch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spdySwitchInput() {
    return this._spdySwitch;
  }

  // tls_versions - computed: true, optional: true, required: false
  private _tlsVersions?: string[]; 
  public get tlsVersions() {
    return this.getListAttribute('tls_versions');
  }
  public set tlsVersions(value: string[]) {
    this._tlsVersions = value;
  }
  public resetTlsVersions() {
    this._tlsVersions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsVersionsInput() {
    return this._tlsVersions;
  }

  // verify_client - computed: false, optional: true, required: false
  private _verifyClient?: string; 
  public get verifyClient() {
    return this.getStringAttribute('verify_client');
  }
  public set verifyClient(value: string) {
    this._verifyClient = value;
  }
  public resetVerifyClient() {
    this._verifyClient = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verifyClientInput() {
    return this._verifyClient;
  }

  // client_certificate_config - computed: false, optional: true, required: false
  private _clientCertificateConfig = new CdnDomainHttpsConfigClientCertificateConfigOutputReference(this, "client_certificate_config");
  public get clientCertificateConfig() {
    return this._clientCertificateConfig;
  }
  public putClientCertificateConfig(value: CdnDomainHttpsConfigClientCertificateConfig) {
    this._clientCertificateConfig.internalValue = value;
  }
  public resetClientCertificateConfig() {
    this._clientCertificateConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientCertificateConfigInput() {
    return this._clientCertificateConfig.internalValue;
  }

  // force_redirect - computed: false, optional: true, required: false
  private _forceRedirect = new CdnDomainHttpsConfigForceRedirectOutputReference(this, "force_redirect");
  public get forceRedirect() {
    return this._forceRedirect;
  }
  public putForceRedirect(value: CdnDomainHttpsConfigForceRedirect) {
    this._forceRedirect.internalValue = value;
  }
  public resetForceRedirect() {
    this._forceRedirect.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceRedirectInput() {
    return this._forceRedirect.internalValue;
  }

  // server_certificate_config - computed: false, optional: true, required: false
  private _serverCertificateConfig = new CdnDomainHttpsConfigServerCertificateConfigOutputReference(this, "server_certificate_config");
  public get serverCertificateConfig() {
    return this._serverCertificateConfig;
  }
  public putServerCertificateConfig(value: CdnDomainHttpsConfigServerCertificateConfig) {
    this._serverCertificateConfig.internalValue = value;
  }
  public resetServerCertificateConfig() {
    this._serverCertificateConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverCertificateConfigInput() {
    return this._serverCertificateConfig.internalValue;
  }
}
export interface CdnDomainHwPrivateAccess {
  /**
  * Access ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/cdn_domain#access_key CdnDomain#access_key}
  */
  readonly accessKey?: string;
  /**
  * Bucket.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/cdn_domain#bucket CdnDomain#bucket}
  */
  readonly bucket?: string;
  /**
  * Key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/cdn_domain#secret_key CdnDomain#secret_key}
  */
  readonly secretKey?: string;
  /**
  * Configuration switch, available values: `on`, `off` (default).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/cdn_domain#switch CdnDomain#switch}
  */
  readonly switch: string;
}

export function cdnDomainHwPrivateAccessToTerraform(struct?: CdnDomainHwPrivateAccessOutputReference | CdnDomainHwPrivateAccess): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_key: cdktf.stringToTerraform(struct!.accessKey),
    bucket: cdktf.stringToTerraform(struct!.bucket),
    secret_key: cdktf.stringToTerraform(struct!.secretKey),
    switch: cdktf.stringToTerraform(struct!.switch),
  }
}


export function cdnDomainHwPrivateAccessToHclTerraform(struct?: CdnDomainHwPrivateAccessOutputReference | CdnDomainHwPrivateAccess): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_key: {
      value: cdktf.stringToHclTerraform(struct!.accessKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bucket: {
      value: cdktf.stringToHclTerraform(struct!.bucket),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_key: {
      value: cdktf.stringToHclTerraform(struct!.secretKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    switch: {
      value: cdktf.stringToHclTerraform(struct!.switch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnDomainHwPrivateAccessOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnDomainHwPrivateAccess | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessKey = this._accessKey;
    }
    if (this._bucket !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucket = this._bucket;
    }
    if (this._secretKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretKey = this._secretKey;
    }
    if (this._switch !== undefined) {
      hasAnyValues = true;
      internalValueResult.switch = this._switch;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnDomainHwPrivateAccess | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._accessKey = undefined;
      this._bucket = undefined;
      this._secretKey = undefined;
      this._switch = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._accessKey = value.accessKey;
      this._bucket = value.bucket;
      this._secretKey = value.secretKey;
      this._switch = value.switch;
    }
  }

  // access_key - computed: false, optional: true, required: false
  private _accessKey?: string; 
  public get accessKey() {
    return this.getStringAttribute('access_key');
  }
  public set accessKey(value: string) {
    this._accessKey = value;
  }
  public resetAccessKey() {
    this._accessKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessKeyInput() {
    return this._accessKey;
  }

  // bucket - computed: false, optional: true, required: false
  private _bucket?: string; 
  public get bucket() {
    return this.getStringAttribute('bucket');
  }
  public set bucket(value: string) {
    this._bucket = value;
  }
  public resetBucket() {
    this._bucket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketInput() {
    return this._bucket;
  }

  // secret_key - computed: false, optional: true, required: false
  private _secretKey?: string; 
  public get secretKey() {
    return this.getStringAttribute('secret_key');
  }
  public set secretKey(value: string) {
    this._secretKey = value;
  }
  public resetSecretKey() {
    this._secretKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretKeyInput() {
    return this._secretKey;
  }

  // switch - computed: false, optional: false, required: true
  private _switch?: string; 
  public get switch() {
    return this.getStringAttribute('switch');
  }
  public set switch(value: string) {
    this._switch = value;
  }
  // Temporarily expose input value. Use with caution.
  public get switchInput() {
    return this._switch;
  }
}
export interface CdnDomainIpFilterFilterRules {
  /**
  * Ip filter `blacklist`/`whitelist` type of filter rules.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/cdn_domain#filter_type CdnDomain#filter_type}
  */
  readonly filterType: string;
  /**
  * Ip filter rule list, supports IPs in X.X.X.X format, or /8, /16, /24 format IP ranges. Up to 50 allowlists or blocklists can be entered.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/cdn_domain#filters CdnDomain#filters}
  */
  readonly filters: string[];
  /**
  * Content list for each `rule_type`: `*` for `all`, file ext like `jpg` for `file`, `/dir/like/` for `directory` and `/path/index.html` for `path`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/cdn_domain#rule_paths CdnDomain#rule_paths}
  */
  readonly rulePaths: string[];
  /**
  * Ip filter rule type of filter rules, available: `all`, `file`, `directory`, `path`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/cdn_domain#rule_type CdnDomain#rule_type}
  */
  readonly ruleType: string;
}

export function cdnDomainIpFilterFilterRulesToTerraform(struct?: CdnDomainIpFilterFilterRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    filter_type: cdktf.stringToTerraform(struct!.filterType),
    filters: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.filters),
    rule_paths: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.rulePaths),
    rule_type: cdktf.stringToTerraform(struct!.ruleType),
  }
}


export function cdnDomainIpFilterFilterRulesToHclTerraform(struct?: CdnDomainIpFilterFilterRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    filter_type: {
      value: cdktf.stringToHclTerraform(struct!.filterType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    filters: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.filters),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    rule_paths: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.rulePaths),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    rule_type: {
      value: cdktf.stringToHclTerraform(struct!.ruleType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnDomainIpFilterFilterRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CdnDomainIpFilterFilterRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._filterType !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterType = this._filterType;
    }
    if (this._filters !== undefined) {
      hasAnyValues = true;
      internalValueResult.filters = this._filters;
    }
    if (this._rulePaths !== undefined) {
      hasAnyValues = true;
      internalValueResult.rulePaths = this._rulePaths;
    }
    if (this._ruleType !== undefined) {
      hasAnyValues = true;
      internalValueResult.ruleType = this._ruleType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnDomainIpFilterFilterRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._filterType = undefined;
      this._filters = undefined;
      this._rulePaths = undefined;
      this._ruleType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._filterType = value.filterType;
      this._filters = value.filters;
      this._rulePaths = value.rulePaths;
      this._ruleType = value.ruleType;
    }
  }

  // filter_type - computed: false, optional: false, required: true
  private _filterType?: string; 
  public get filterType() {
    return this.getStringAttribute('filter_type');
  }
  public set filterType(value: string) {
    this._filterType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get filterTypeInput() {
    return this._filterType;
  }

  // filters - computed: false, optional: false, required: true
  private _filters?: string[]; 
  public get filters() {
    return this.getListAttribute('filters');
  }
  public set filters(value: string[]) {
    this._filters = value;
  }
  // Temporarily expose input value. Use with caution.
  public get filtersInput() {
    return this._filters;
  }

  // rule_paths - computed: false, optional: false, required: true
  private _rulePaths?: string[]; 
  public get rulePaths() {
    return this.getListAttribute('rule_paths');
  }
  public set rulePaths(value: string[]) {
    this._rulePaths = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rulePathsInput() {
    return this._rulePaths;
  }

  // rule_type - computed: false, optional: false, required: true
  private _ruleType?: string; 
  public get ruleType() {
    return this.getStringAttribute('rule_type');
  }
  public set ruleType(value: string) {
    this._ruleType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleTypeInput() {
    return this._ruleType;
  }
}

export class CdnDomainIpFilterFilterRulesList extends cdktf.ComplexList {
  public internalValue? : CdnDomainIpFilterFilterRules[] | cdktf.IResolvable

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
  public get(index: number): CdnDomainIpFilterFilterRulesOutputReference {
    return new CdnDomainIpFilterFilterRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CdnDomainIpFilter {
  /**
  * IP `blacklist`/`whitelist` type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/cdn_domain#filter_type CdnDomain#filter_type}
  */
  readonly filterType?: string;
  /**
  * Ip filter list, Supports IPs in X.X.X.X format, or /8, /16, /24 format IP ranges. Up to 50 allowlists or blocklists can be entered.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/cdn_domain#filters CdnDomain#filters}
  */
  readonly filters?: string[];
  /**
  * Return code, available values: 400-499.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/cdn_domain#return_code CdnDomain#return_code}
  */
  readonly returnCode?: number;
  /**
  * Configuration switch, available values: `on`, `off` (default).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/cdn_domain#switch CdnDomain#switch}
  */
  readonly switch: string;
  /**
  * filter_rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/cdn_domain#filter_rules CdnDomain#filter_rules}
  */
  readonly filterRules?: CdnDomainIpFilterFilterRules[] | cdktf.IResolvable;
}

export function cdnDomainIpFilterToTerraform(struct?: CdnDomainIpFilterOutputReference | CdnDomainIpFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    filter_type: cdktf.stringToTerraform(struct!.filterType),
    filters: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.filters),
    return_code: cdktf.numberToTerraform(struct!.returnCode),
    switch: cdktf.stringToTerraform(struct!.switch),
    filter_rules: cdktf.listMapper(cdnDomainIpFilterFilterRulesToTerraform, true)(struct!.filterRules),
  }
}


export function cdnDomainIpFilterToHclTerraform(struct?: CdnDomainIpFilterOutputReference | CdnDomainIpFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    filter_type: {
      value: cdktf.stringToHclTerraform(struct!.filterType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    filters: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.filters),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    return_code: {
      value: cdktf.numberToHclTerraform(struct!.returnCode),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    switch: {
      value: cdktf.stringToHclTerraform(struct!.switch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    filter_rules: {
      value: cdktf.listMapperHcl(cdnDomainIpFilterFilterRulesToHclTerraform, true)(struct!.filterRules),
      isBlock: true,
      type: "list",
      storageClassType: "CdnDomainIpFilterFilterRulesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnDomainIpFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnDomainIpFilter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._filterType !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterType = this._filterType;
    }
    if (this._filters !== undefined) {
      hasAnyValues = true;
      internalValueResult.filters = this._filters;
    }
    if (this._returnCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.returnCode = this._returnCode;
    }
    if (this._switch !== undefined) {
      hasAnyValues = true;
      internalValueResult.switch = this._switch;
    }
    if (this._filterRules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterRules = this._filterRules?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnDomainIpFilter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._filterType = undefined;
      this._filters = undefined;
      this._returnCode = undefined;
      this._switch = undefined;
      this._filterRules.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._filterType = value.filterType;
      this._filters = value.filters;
      this._returnCode = value.returnCode;
      this._switch = value.switch;
      this._filterRules.internalValue = value.filterRules;
    }
  }

  // filter_type - computed: false, optional: true, required: false
  private _filterType?: string; 
  public get filterType() {
    return this.getStringAttribute('filter_type');
  }
  public set filterType(value: string) {
    this._filterType = value;
  }
  public resetFilterType() {
    this._filterType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterTypeInput() {
    return this._filterType;
  }

  // filters - computed: false, optional: true, required: false
  private _filters?: string[]; 
  public get filters() {
    return this.getListAttribute('filters');
  }
  public set filters(value: string[]) {
    this._filters = value;
  }
  public resetFilters() {
    this._filters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filtersInput() {
    return this._filters;
  }

  // return_code - computed: false, optional: true, required: false
  private _returnCode?: number; 
  public get returnCode() {
    return this.getNumberAttribute('return_code');
  }
  public set returnCode(value: number) {
    this._returnCode = value;
  }
  public resetReturnCode() {
    this._returnCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get returnCodeInput() {
    return this._returnCode;
  }

  // switch - computed: false, optional: false, required: true
  private _switch?: string; 
  public get switch() {
    return this.getStringAttribute('switch');
  }
  public set switch(value: string) {
    this._switch = value;
  }
  // Temporarily expose input value. Use with caution.
  public get switchInput() {
    return this._switch;
  }

  // filter_rules - computed: false, optional: true, required: false
  private _filterRules = new CdnDomainIpFilterFilterRulesList(this, "filter_rules", false);
  public get filterRules() {
    return this._filterRules;
  }
  public putFilterRules(value: CdnDomainIpFilterFilterRules[] | cdktf.IResolvable) {
    this._filterRules.internalValue = value;
  }
  public resetFilterRules() {
    this._filterRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterRulesInput() {
    return this._filterRules.internalValue;
  }
}
export interface CdnDomainIpFreqLimit {
  /**
  * Sets the limited number of requests per second, 514 will be returned for requests that exceed the limit.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/cdn_domain#qps CdnDomain#qps}
  */
  readonly qps?: number;
  /**
  * Configuration switch, available values: `on`, `off` (default).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/cdn_domain#switch CdnDomain#switch}
  */
  readonly switch: string;
}

export function cdnDomainIpFreqLimitToTerraform(struct?: CdnDomainIpFreqLimitOutputReference | CdnDomainIpFreqLimit): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    qps: cdktf.numberToTerraform(struct!.qps),
    switch: cdktf.stringToTerraform(struct!.switch),
  }
}


export function cdnDomainIpFreqLimitToHclTerraform(struct?: CdnDomainIpFreqLimitOutputReference | CdnDomainIpFreqLimit): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    qps: {
      value: cdktf.numberToHclTerraform(struct!.qps),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    switch: {
      value: cdktf.stringToHclTerraform(struct!.switch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnDomainIpFreqLimitOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnDomainIpFreqLimit | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._qps !== undefined) {
      hasAnyValues = true;
      internalValueResult.qps = this._qps;
    }
    if (this._switch !== undefined) {
      hasAnyValues = true;
      internalValueResult.switch = this._switch;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnDomainIpFreqLimit | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._qps = undefined;
      this._switch = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._qps = value.qps;
      this._switch = value.switch;
    }
  }

  // qps - computed: false, optional: true, required: false
  private _qps?: number; 
  public get qps() {
    return this.getNumberAttribute('qps');
  }
  public set qps(value: number) {
    this._qps = value;
  }
  public resetQps() {
    this._qps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get qpsInput() {
    return this._qps;
  }

  // switch - computed: false, optional: false, required: true
  private _switch?: string; 
  public get switch() {
    return this.getStringAttribute('switch');
  }
  public set switch(value: string) {
    this._switch = value;
  }
  // Temporarily expose input value. Use with caution.
  public get switchInput() {
    return this._switch;
  }
}
export interface CdnDomainMaxAgeMaxAgeRules {
  /**
  * Whether to follow origin, values: `on`/`off`, if set to `on`, the `max_age_time` will be ignored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/cdn_domain#follow_origin CdnDomain#follow_origin}
  */
  readonly followOrigin?: string;
  /**
  * List of rule paths for each `max_age_type`: `*` for `all`, file ext like `jpg` for `file`, `/dir/like/` for `directory` and `/path/index.html` for `path`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/cdn_domain#max_age_contents CdnDomain#max_age_contents}
  */
  readonly maxAgeContents: string[];
  /**
  * Max Age time in seconds, this can set to `0` that stands for no cache.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/cdn_domain#max_age_time CdnDomain#max_age_time}
  */
  readonly maxAgeTime: number;
  /**
  * The following types are supported: `all`: all documents take effect, `file`: the specified file suffix takes effect, `directory`: the specified path takes effect, `path`: specify the absolute path to take effect, `index`: home page.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/cdn_domain#max_age_type CdnDomain#max_age_type}
  */
  readonly maxAgeType: string;
}

export function cdnDomainMaxAgeMaxAgeRulesToTerraform(struct?: CdnDomainMaxAgeMaxAgeRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    follow_origin: cdktf.stringToTerraform(struct!.followOrigin),
    max_age_contents: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.maxAgeContents),
    max_age_time: cdktf.numberToTerraform(struct!.maxAgeTime),
    max_age_type: cdktf.stringToTerraform(struct!.maxAgeType),
  }
}


export function cdnDomainMaxAgeMaxAgeRulesToHclTerraform(struct?: CdnDomainMaxAgeMaxAgeRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    follow_origin: {
      value: cdktf.stringToHclTerraform(struct!.followOrigin),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_age_contents: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.maxAgeContents),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    max_age_time: {
      value: cdktf.numberToHclTerraform(struct!.maxAgeTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_age_type: {
      value: cdktf.stringToHclTerraform(struct!.maxAgeType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnDomainMaxAgeMaxAgeRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CdnDomainMaxAgeMaxAgeRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._followOrigin !== undefined) {
      hasAnyValues = true;
      internalValueResult.followOrigin = this._followOrigin;
    }
    if (this._maxAgeContents !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxAgeContents = this._maxAgeContents;
    }
    if (this._maxAgeTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxAgeTime = this._maxAgeTime;
    }
    if (this._maxAgeType !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxAgeType = this._maxAgeType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnDomainMaxAgeMaxAgeRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._followOrigin = undefined;
      this._maxAgeContents = undefined;
      this._maxAgeTime = undefined;
      this._maxAgeType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._followOrigin = value.followOrigin;
      this._maxAgeContents = value.maxAgeContents;
      this._maxAgeTime = value.maxAgeTime;
      this._maxAgeType = value.maxAgeType;
    }
  }

  // follow_origin - computed: false, optional: true, required: false
  private _followOrigin?: string; 
  public get followOrigin() {
    return this.getStringAttribute('follow_origin');
  }
  public set followOrigin(value: string) {
    this._followOrigin = value;
  }
  public resetFollowOrigin() {
    this._followOrigin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get followOriginInput() {
    return this._followOrigin;
  }

  // max_age_contents - computed: false, optional: false, required: true
  private _maxAgeContents?: string[]; 
  public get maxAgeContents() {
    return this.getListAttribute('max_age_contents');
  }
  public set maxAgeContents(value: string[]) {
    this._maxAgeContents = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxAgeContentsInput() {
    return this._maxAgeContents;
  }

  // max_age_time - computed: false, optional: false, required: true
  private _maxAgeTime?: number; 
  public get maxAgeTime() {
    return this.getNumberAttribute('max_age_time');
  }
  public set maxAgeTime(value: number) {
    this._maxAgeTime = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxAgeTimeInput() {
    return this._maxAgeTime;
  }

  // max_age_type - computed: false, optional: false, required: true
  private _maxAgeType?: string; 
  public get maxAgeType() {
    return this.getStringAttribute('max_age_type');
  }
  public set maxAgeType(value: string) {
    this._maxAgeType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxAgeTypeInput() {
    return this._maxAgeType;
  }
}

export class CdnDomainMaxAgeMaxAgeRulesList extends cdktf.ComplexList {
  public internalValue? : CdnDomainMaxAgeMaxAgeRules[] | cdktf.IResolvable

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
  public get(index: number): CdnDomainMaxAgeMaxAgeRulesOutputReference {
    return new CdnDomainMaxAgeMaxAgeRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CdnDomainMaxAge {
  /**
  * Configuration switch, available values: `on`, `off` (default).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/cdn_domain#switch CdnDomain#switch}
  */
  readonly switch: string;
  /**
  * max_age_rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/cdn_domain#max_age_rules CdnDomain#max_age_rules}
  */
  readonly maxAgeRules?: CdnDomainMaxAgeMaxAgeRules[] | cdktf.IResolvable;
}

export function cdnDomainMaxAgeToTerraform(struct?: CdnDomainMaxAgeOutputReference | CdnDomainMaxAge): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    switch: cdktf.stringToTerraform(struct!.switch),
    max_age_rules: cdktf.listMapper(cdnDomainMaxAgeMaxAgeRulesToTerraform, true)(struct!.maxAgeRules),
  }
}


export function cdnDomainMaxAgeToHclTerraform(struct?: CdnDomainMaxAgeOutputReference | CdnDomainMaxAge): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    switch: {
      value: cdktf.stringToHclTerraform(struct!.switch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_age_rules: {
      value: cdktf.listMapperHcl(cdnDomainMaxAgeMaxAgeRulesToHclTerraform, true)(struct!.maxAgeRules),
      isBlock: true,
      type: "list",
      storageClassType: "CdnDomainMaxAgeMaxAgeRulesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnDomainMaxAgeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnDomainMaxAge | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._switch !== undefined) {
      hasAnyValues = true;
      internalValueResult.switch = this._switch;
    }
    if (this._maxAgeRules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxAgeRules = this._maxAgeRules?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnDomainMaxAge | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._switch = undefined;
      this._maxAgeRules.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._switch = value.switch;
      this._maxAgeRules.internalValue = value.maxAgeRules;
    }
  }

  // switch - computed: false, optional: false, required: true
  private _switch?: string; 
  public get switch() {
    return this.getStringAttribute('switch');
  }
  public set switch(value: string) {
    this._switch = value;
  }
  // Temporarily expose input value. Use with caution.
  public get switchInput() {
    return this._switch;
  }

  // max_age_rules - computed: false, optional: true, required: false
  private _maxAgeRules = new CdnDomainMaxAgeMaxAgeRulesList(this, "max_age_rules", false);
  public get maxAgeRules() {
    return this._maxAgeRules;
  }
  public putMaxAgeRules(value: CdnDomainMaxAgeMaxAgeRules[] | cdktf.IResolvable) {
    this._maxAgeRules.internalValue = value;
  }
  public resetMaxAgeRules() {
    this._maxAgeRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxAgeRulesInput() {
    return this._maxAgeRules.internalValue;
  }
}
export interface CdnDomainOrigin {
  /**
  * Backup origin server list. Valid values can be ip or domain name. When modifying the backup origin server, you need to enter the corresponding `backup_origin_type`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/cdn_domain#backup_origin_list CdnDomain#backup_origin_list}
  */
  readonly backupOriginList?: string[];
  /**
  * Backup origin server type, which supports the following types: `domain`: domain name type, `ip`: IP list used as origin server, `ipv6_domain`: Multiple IPv6 addresses and one domain name, `ip_ipv6`: Multiple IPv4 addresses and one IPv6 address, `ip_ipv6_domain`: Multiple IPv4 and IPv6 addresses and one domain name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/cdn_domain#backup_origin_type CdnDomain#backup_origin_type}
  */
  readonly backupOriginType?: string;
  /**
  * Host header used when accessing the backup origin server. If left empty, the ServerName of master origin server will be used by default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/cdn_domain#backup_server_name CdnDomain#backup_server_name}
  */
  readonly backupServerName?: string;
  /**
  * When OriginType is COS, you can specify if access to private buckets is allowed. Valid values are `on` and `off`. and default value is `off`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/cdn_domain#cos_private_access CdnDomain#cos_private_access}
  */
  readonly cosPrivateAccess?: string;
  /**
  * Object storage back to the source vendor. Required when the source station type is a third-party storage source station (third_party). Optional values include the following: `aws_s3`: AWS S3; `ali_oss`: Alibaba Cloud OSS; `hw_obs`: Huawei OBS; `qiniu_kodo`: Qiniu Cloud kodo; `others`: other vendors' object storage, only supports object storage compatible with AWS signature algorithm, such as Tencent Cloud Financial Zone COS. Example value: `hw_obs`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/cdn_domain#origin_company CdnDomain#origin_company}
  */
  readonly originCompany?: string;
  /**
  * Master origin server list. Valid values can be ip or domain name. When modifying the origin server, you need to enter the corresponding `origin_type`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/cdn_domain#origin_list CdnDomain#origin_list}
  */
  readonly originList: string[];
  /**
  * Origin-pull protocol configuration. `http`: forced HTTP origin-pull, `follow`: protocol follow origin-pull, `https`: forced HTTPS origin-pull. This only supports origin server port 443 for origin-pull.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/cdn_domain#origin_pull_protocol CdnDomain#origin_pull_protocol}
  */
  readonly originPullProtocol?: string;
  /**
  * Master origin server type. The following types are supported: `domain`: Domain name, `domainv6`: IPv6 domain name, `cos`: COS bucket address, `third_party`: Third-party object storage origin, `igtm`: IGTM origin, `ip`: IP address, `ipv6`: One IPv6 address, `ip_ipv6`: Multiple IPv4 addresses and one IPv6 address, `ip_domain`: IP addresses and domain names (only available to beta users), `ip_domainv6`: Multiple IPv4 addresses and one IPv6 domain name, `ipv6_domain`: Multiple IPv6 addresses and one domain name, `ipv6_domainv6`: Multiple IPv6 addresses and one IPv6 domain name, `domain_domainv6`: Multiple IPv4 domain names and one IPv6 domain name, `ip_ipv6_domain`: Multiple IPv4 and IPv6 addresses and one domain name, `ip_ipv6_domainv6`: Multiple IPv4 and IPv6 addresses and one IPv6 domain name, `ip_domain_domainv6`: Multiple IPv4 addresses and IPv4 domain names and one IPv6 domain name, `ipv6_domain_domainv6`: Multiple IPv4 domain names and IPv6 addresses and one IPv6 domain name, `ip_ipv6_domain_domainv6`: Multiple IPv4 and IPv6 addresses and IPv4 domain names and one IPv6 domain name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/cdn_domain#origin_type CdnDomain#origin_type}
  */
  readonly originType: string;
  /**
  * Host header used when accessing the master origin server. If left empty, the acceleration domain name will be used by default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/cdn_domain#server_name CdnDomain#server_name}
  */
  readonly serverName?: string;
}

export function cdnDomainOriginToTerraform(struct?: CdnDomainOriginOutputReference | CdnDomainOrigin): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    backup_origin_list: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.backupOriginList),
    backup_origin_type: cdktf.stringToTerraform(struct!.backupOriginType),
    backup_server_name: cdktf.stringToTerraform(struct!.backupServerName),
    cos_private_access: cdktf.stringToTerraform(struct!.cosPrivateAccess),
    origin_company: cdktf.stringToTerraform(struct!.originCompany),
    origin_list: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.originList),
    origin_pull_protocol: cdktf.stringToTerraform(struct!.originPullProtocol),
    origin_type: cdktf.stringToTerraform(struct!.originType),
    server_name: cdktf.stringToTerraform(struct!.serverName),
  }
}


export function cdnDomainOriginToHclTerraform(struct?: CdnDomainOriginOutputReference | CdnDomainOrigin): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    backup_origin_list: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.backupOriginList),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    backup_origin_type: {
      value: cdktf.stringToHclTerraform(struct!.backupOriginType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    backup_server_name: {
      value: cdktf.stringToHclTerraform(struct!.backupServerName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cos_private_access: {
      value: cdktf.stringToHclTerraform(struct!.cosPrivateAccess),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    origin_company: {
      value: cdktf.stringToHclTerraform(struct!.originCompany),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    origin_list: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.originList),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    origin_pull_protocol: {
      value: cdktf.stringToHclTerraform(struct!.originPullProtocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    origin_type: {
      value: cdktf.stringToHclTerraform(struct!.originType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    server_name: {
      value: cdktf.stringToHclTerraform(struct!.serverName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnDomainOriginOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnDomainOrigin | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._backupOriginList !== undefined) {
      hasAnyValues = true;
      internalValueResult.backupOriginList = this._backupOriginList;
    }
    if (this._backupOriginType !== undefined) {
      hasAnyValues = true;
      internalValueResult.backupOriginType = this._backupOriginType;
    }
    if (this._backupServerName !== undefined) {
      hasAnyValues = true;
      internalValueResult.backupServerName = this._backupServerName;
    }
    if (this._cosPrivateAccess !== undefined) {
      hasAnyValues = true;
      internalValueResult.cosPrivateAccess = this._cosPrivateAccess;
    }
    if (this._originCompany !== undefined) {
      hasAnyValues = true;
      internalValueResult.originCompany = this._originCompany;
    }
    if (this._originList !== undefined) {
      hasAnyValues = true;
      internalValueResult.originList = this._originList;
    }
    if (this._originPullProtocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.originPullProtocol = this._originPullProtocol;
    }
    if (this._originType !== undefined) {
      hasAnyValues = true;
      internalValueResult.originType = this._originType;
    }
    if (this._serverName !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverName = this._serverName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnDomainOrigin | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._backupOriginList = undefined;
      this._backupOriginType = undefined;
      this._backupServerName = undefined;
      this._cosPrivateAccess = undefined;
      this._originCompany = undefined;
      this._originList = undefined;
      this._originPullProtocol = undefined;
      this._originType = undefined;
      this._serverName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._backupOriginList = value.backupOriginList;
      this._backupOriginType = value.backupOriginType;
      this._backupServerName = value.backupServerName;
      this._cosPrivateAccess = value.cosPrivateAccess;
      this._originCompany = value.originCompany;
      this._originList = value.originList;
      this._originPullProtocol = value.originPullProtocol;
      this._originType = value.originType;
      this._serverName = value.serverName;
    }
  }

  // backup_origin_list - computed: false, optional: true, required: false
  private _backupOriginList?: string[]; 
  public get backupOriginList() {
    return this.getListAttribute('backup_origin_list');
  }
  public set backupOriginList(value: string[]) {
    this._backupOriginList = value;
  }
  public resetBackupOriginList() {
    this._backupOriginList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupOriginListInput() {
    return this._backupOriginList;
  }

  // backup_origin_type - computed: false, optional: true, required: false
  private _backupOriginType?: string; 
  public get backupOriginType() {
    return this.getStringAttribute('backup_origin_type');
  }
  public set backupOriginType(value: string) {
    this._backupOriginType = value;
  }
  public resetBackupOriginType() {
    this._backupOriginType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupOriginTypeInput() {
    return this._backupOriginType;
  }

  // backup_server_name - computed: false, optional: true, required: false
  private _backupServerName?: string; 
  public get backupServerName() {
    return this.getStringAttribute('backup_server_name');
  }
  public set backupServerName(value: string) {
    this._backupServerName = value;
  }
  public resetBackupServerName() {
    this._backupServerName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupServerNameInput() {
    return this._backupServerName;
  }

  // cos_private_access - computed: false, optional: true, required: false
  private _cosPrivateAccess?: string; 
  public get cosPrivateAccess() {
    return this.getStringAttribute('cos_private_access');
  }
  public set cosPrivateAccess(value: string) {
    this._cosPrivateAccess = value;
  }
  public resetCosPrivateAccess() {
    this._cosPrivateAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cosPrivateAccessInput() {
    return this._cosPrivateAccess;
  }

  // origin_company - computed: false, optional: true, required: false
  private _originCompany?: string; 
  public get originCompany() {
    return this.getStringAttribute('origin_company');
  }
  public set originCompany(value: string) {
    this._originCompany = value;
  }
  public resetOriginCompany() {
    this._originCompany = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get originCompanyInput() {
    return this._originCompany;
  }

  // origin_list - computed: false, optional: false, required: true
  private _originList?: string[]; 
  public get originList() {
    return this.getListAttribute('origin_list');
  }
  public set originList(value: string[]) {
    this._originList = value;
  }
  // Temporarily expose input value. Use with caution.
  public get originListInput() {
    return this._originList;
  }

  // origin_pull_protocol - computed: false, optional: true, required: false
  private _originPullProtocol?: string; 
  public get originPullProtocol() {
    return this.getStringAttribute('origin_pull_protocol');
  }
  public set originPullProtocol(value: string) {
    this._originPullProtocol = value;
  }
  public resetOriginPullProtocol() {
    this._originPullProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get originPullProtocolInput() {
    return this._originPullProtocol;
  }

  // origin_type - computed: false, optional: false, required: true
  private _originType?: string; 
  public get originType() {
    return this.getStringAttribute('origin_type');
  }
  public set originType(value: string) {
    this._originType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get originTypeInput() {
    return this._originType;
  }

  // server_name - computed: true, optional: true, required: false
  private _serverName?: string; 
  public get serverName() {
    return this.getStringAttribute('server_name');
  }
  public set serverName(value: string) {
    this._serverName = value;
  }
  public resetServerName() {
    this._serverName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverNameInput() {
    return this._serverName;
  }
}
export interface CdnDomainOriginPullOptimization {
  /**
  * Optimization type, values: `OVToCN` - Overseas to CN, `CNToOV` CN to Overseas.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/cdn_domain#optimization_type CdnDomain#optimization_type}
  */
  readonly optimizationType?: string;
  /**
  * Configuration switch, available values: `on`, `off` (default).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/cdn_domain#switch CdnDomain#switch}
  */
  readonly switch: string;
}

export function cdnDomainOriginPullOptimizationToTerraform(struct?: CdnDomainOriginPullOptimizationOutputReference | CdnDomainOriginPullOptimization): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    optimization_type: cdktf.stringToTerraform(struct!.optimizationType),
    switch: cdktf.stringToTerraform(struct!.switch),
  }
}


export function cdnDomainOriginPullOptimizationToHclTerraform(struct?: CdnDomainOriginPullOptimizationOutputReference | CdnDomainOriginPullOptimization): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    optimization_type: {
      value: cdktf.stringToHclTerraform(struct!.optimizationType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    switch: {
      value: cdktf.stringToHclTerraform(struct!.switch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnDomainOriginPullOptimizationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnDomainOriginPullOptimization | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._optimizationType !== undefined) {
      hasAnyValues = true;
      internalValueResult.optimizationType = this._optimizationType;
    }
    if (this._switch !== undefined) {
      hasAnyValues = true;
      internalValueResult.switch = this._switch;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnDomainOriginPullOptimization | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._optimizationType = undefined;
      this._switch = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._optimizationType = value.optimizationType;
      this._switch = value.switch;
    }
  }

  // optimization_type - computed: false, optional: true, required: false
  private _optimizationType?: string; 
  public get optimizationType() {
    return this.getStringAttribute('optimization_type');
  }
  public set optimizationType(value: string) {
    this._optimizationType = value;
  }
  public resetOptimizationType() {
    this._optimizationType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optimizationTypeInput() {
    return this._optimizationType;
  }

  // switch - computed: false, optional: false, required: true
  private _switch?: string; 
  public get switch() {
    return this.getStringAttribute('switch');
  }
  public set switch(value: string) {
    this._switch = value;
  }
  // Temporarily expose input value. Use with caution.
  public get switchInput() {
    return this._switch;
  }
}
export interface CdnDomainOriginPullTimeout {
  /**
  * The origin-pull connection timeout (in seconds). Valid range: 5-60.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/cdn_domain#connect_timeout CdnDomain#connect_timeout}
  */
  readonly connectTimeout: number;
  /**
  * The origin-pull receipt timeout (in seconds). Valid range: 10-60.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/cdn_domain#receive_timeout CdnDomain#receive_timeout}
  */
  readonly receiveTimeout: number;
}

export function cdnDomainOriginPullTimeoutToTerraform(struct?: CdnDomainOriginPullTimeoutOutputReference | CdnDomainOriginPullTimeout): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    connect_timeout: cdktf.numberToTerraform(struct!.connectTimeout),
    receive_timeout: cdktf.numberToTerraform(struct!.receiveTimeout),
  }
}


export function cdnDomainOriginPullTimeoutToHclTerraform(struct?: CdnDomainOriginPullTimeoutOutputReference | CdnDomainOriginPullTimeout): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    connect_timeout: {
      value: cdktf.numberToHclTerraform(struct!.connectTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    receive_timeout: {
      value: cdktf.numberToHclTerraform(struct!.receiveTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnDomainOriginPullTimeoutOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnDomainOriginPullTimeout | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._connectTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectTimeout = this._connectTimeout;
    }
    if (this._receiveTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.receiveTimeout = this._receiveTimeout;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnDomainOriginPullTimeout | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._connectTimeout = undefined;
      this._receiveTimeout = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._connectTimeout = value.connectTimeout;
      this._receiveTimeout = value.receiveTimeout;
    }
  }

  // connect_timeout - computed: false, optional: false, required: true
  private _connectTimeout?: number; 
  public get connectTimeout() {
    return this.getNumberAttribute('connect_timeout');
  }
  public set connectTimeout(value: number) {
    this._connectTimeout = value;
  }
  // Temporarily expose input value. Use with caution.
  public get connectTimeoutInput() {
    return this._connectTimeout;
  }

  // receive_timeout - computed: false, optional: false, required: true
  private _receiveTimeout?: number; 
  public get receiveTimeout() {
    return this.getNumberAttribute('receive_timeout');
  }
  public set receiveTimeout(value: number) {
    this._receiveTimeout = value;
  }
  // Temporarily expose input value. Use with caution.
  public get receiveTimeoutInput() {
    return this._receiveTimeout;
  }
}
export interface CdnDomainOssPrivateAccess {
  /**
  * Access ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/cdn_domain#access_key CdnDomain#access_key}
  */
  readonly accessKey?: string;
  /**
  * Bucket.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/cdn_domain#bucket CdnDomain#bucket}
  */
  readonly bucket?: string;
  /**
  * Region.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/cdn_domain#region CdnDomain#region}
  */
  readonly region?: string;
  /**
  * Key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/cdn_domain#secret_key CdnDomain#secret_key}
  */
  readonly secretKey?: string;
  /**
  * Configuration switch, available values: `on`, `off` (default).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/cdn_domain#switch CdnDomain#switch}
  */
  readonly switch: string;
}

export function cdnDomainOssPrivateAccessToTerraform(struct?: CdnDomainOssPrivateAccessOutputReference | CdnDomainOssPrivateAccess): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_key: cdktf.stringToTerraform(struct!.accessKey),
    bucket: cdktf.stringToTerraform(struct!.bucket),
    region: cdktf.stringToTerraform(struct!.region),
    secret_key: cdktf.stringToTerraform(struct!.secretKey),
    switch: cdktf.stringToTerraform(struct!.switch),
  }
}


export function cdnDomainOssPrivateAccessToHclTerraform(struct?: CdnDomainOssPrivateAccessOutputReference | CdnDomainOssPrivateAccess): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_key: {
      value: cdktf.stringToHclTerraform(struct!.accessKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bucket: {
      value: cdktf.stringToHclTerraform(struct!.bucket),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    region: {
      value: cdktf.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_key: {
      value: cdktf.stringToHclTerraform(struct!.secretKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    switch: {
      value: cdktf.stringToHclTerraform(struct!.switch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnDomainOssPrivateAccessOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnDomainOssPrivateAccess | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessKey = this._accessKey;
    }
    if (this._bucket !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucket = this._bucket;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    if (this._secretKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretKey = this._secretKey;
    }
    if (this._switch !== undefined) {
      hasAnyValues = true;
      internalValueResult.switch = this._switch;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnDomainOssPrivateAccess | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._accessKey = undefined;
      this._bucket = undefined;
      this._region = undefined;
      this._secretKey = undefined;
      this._switch = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._accessKey = value.accessKey;
      this._bucket = value.bucket;
      this._region = value.region;
      this._secretKey = value.secretKey;
      this._switch = value.switch;
    }
  }

  // access_key - computed: false, optional: true, required: false
  private _accessKey?: string; 
  public get accessKey() {
    return this.getStringAttribute('access_key');
  }
  public set accessKey(value: string) {
    this._accessKey = value;
  }
  public resetAccessKey() {
    this._accessKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessKeyInput() {
    return this._accessKey;
  }

  // bucket - computed: false, optional: true, required: false
  private _bucket?: string; 
  public get bucket() {
    return this.getStringAttribute('bucket');
  }
  public set bucket(value: string) {
    this._bucket = value;
  }
  public resetBucket() {
    this._bucket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketInput() {
    return this._bucket;
  }

  // region - computed: false, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // secret_key - computed: false, optional: true, required: false
  private _secretKey?: string; 
  public get secretKey() {
    return this.getStringAttribute('secret_key');
  }
  public set secretKey(value: string) {
    this._secretKey = value;
  }
  public resetSecretKey() {
    this._secretKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretKeyInput() {
    return this._secretKey;
  }

  // switch - computed: false, optional: false, required: true
  private _switch?: string; 
  public get switch() {
    return this.getStringAttribute('switch');
  }
  public set switch(value: string) {
    this._switch = value;
  }
  // Temporarily expose input value. Use with caution.
  public get switchInput() {
    return this._switch;
  }
}
export interface CdnDomainOthersPrivateAccess {
  /**
  * Access ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/cdn_domain#access_key CdnDomain#access_key}
  */
  readonly accessKey?: string;
  /**
  * Bucket.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/cdn_domain#bucket CdnDomain#bucket}
  */
  readonly bucket?: string;
  /**
  * Region.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/cdn_domain#region CdnDomain#region}
  */
  readonly region?: string;
  /**
  * Key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/cdn_domain#secret_key CdnDomain#secret_key}
  */
  readonly secretKey?: string;
  /**
  * Configuration switch, available values: `on`, `off` (default).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/cdn_domain#switch CdnDomain#switch}
  */
  readonly switch: string;
}

export function cdnDomainOthersPrivateAccessToTerraform(struct?: CdnDomainOthersPrivateAccessOutputReference | CdnDomainOthersPrivateAccess): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_key: cdktf.stringToTerraform(struct!.accessKey),
    bucket: cdktf.stringToTerraform(struct!.bucket),
    region: cdktf.stringToTerraform(struct!.region),
    secret_key: cdktf.stringToTerraform(struct!.secretKey),
    switch: cdktf.stringToTerraform(struct!.switch),
  }
}


export function cdnDomainOthersPrivateAccessToHclTerraform(struct?: CdnDomainOthersPrivateAccessOutputReference | CdnDomainOthersPrivateAccess): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_key: {
      value: cdktf.stringToHclTerraform(struct!.accessKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bucket: {
      value: cdktf.stringToHclTerraform(struct!.bucket),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    region: {
      value: cdktf.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_key: {
      value: cdktf.stringToHclTerraform(struct!.secretKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    switch: {
      value: cdktf.stringToHclTerraform(struct!.switch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnDomainOthersPrivateAccessOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnDomainOthersPrivateAccess | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessKey = this._accessKey;
    }
    if (this._bucket !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucket = this._bucket;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    if (this._secretKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretKey = this._secretKey;
    }
    if (this._switch !== undefined) {
      hasAnyValues = true;
      internalValueResult.switch = this._switch;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnDomainOthersPrivateAccess | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._accessKey = undefined;
      this._bucket = undefined;
      this._region = undefined;
      this._secretKey = undefined;
      this._switch = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._accessKey = value.accessKey;
      this._bucket = value.bucket;
      this._region = value.region;
      this._secretKey = value.secretKey;
      this._switch = value.switch;
    }
  }

  // access_key - computed: false, optional: true, required: false
  private _accessKey?: string; 
  public get accessKey() {
    return this.getStringAttribute('access_key');
  }
  public set accessKey(value: string) {
    this._accessKey = value;
  }
  public resetAccessKey() {
    this._accessKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessKeyInput() {
    return this._accessKey;
  }

  // bucket - computed: false, optional: true, required: false
  private _bucket?: string; 
  public get bucket() {
    return this.getStringAttribute('bucket');
  }
  public set bucket(value: string) {
    this._bucket = value;
  }
  public resetBucket() {
    this._bucket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketInput() {
    return this._bucket;
  }

  // region - computed: false, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // secret_key - computed: false, optional: true, required: false
  private _secretKey?: string; 
  public get secretKey() {
    return this.getStringAttribute('secret_key');
  }
  public set secretKey(value: string) {
    this._secretKey = value;
  }
  public resetSecretKey() {
    this._secretKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretKeyInput() {
    return this._secretKey;
  }

  // switch - computed: false, optional: false, required: true
  private _switch?: string; 
  public get switch() {
    return this.getStringAttribute('switch');
  }
  public set switch(value: string) {
    this._switch = value;
  }
  // Temporarily expose input value. Use with caution.
  public get switchInput() {
    return this._switch;
  }
}
export interface CdnDomainPostMaxSize {
  /**
  * Maximum size in MB, value range is `[1, 200]`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/cdn_domain#max_size CdnDomain#max_size}
  */
  readonly maxSize?: number;
  /**
  * Configuration switch, available values: `on`, `off` (default).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/cdn_domain#switch CdnDomain#switch}
  */
  readonly switch: string;
}

export function cdnDomainPostMaxSizeToTerraform(struct?: CdnDomainPostMaxSize | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_size: cdktf.numberToTerraform(struct!.maxSize),
    switch: cdktf.stringToTerraform(struct!.switch),
  }
}


export function cdnDomainPostMaxSizeToHclTerraform(struct?: CdnDomainPostMaxSize | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_size: {
      value: cdktf.numberToHclTerraform(struct!.maxSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    switch: {
      value: cdktf.stringToHclTerraform(struct!.switch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnDomainPostMaxSizeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CdnDomainPostMaxSize | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxSize = this._maxSize;
    }
    if (this._switch !== undefined) {
      hasAnyValues = true;
      internalValueResult.switch = this._switch;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnDomainPostMaxSize | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maxSize = undefined;
      this._switch = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maxSize = value.maxSize;
      this._switch = value.switch;
    }
  }

  // max_size - computed: false, optional: true, required: false
  private _maxSize?: number; 
  public get maxSize() {
    return this.getNumberAttribute('max_size');
  }
  public set maxSize(value: number) {
    this._maxSize = value;
  }
  public resetMaxSize() {
    this._maxSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxSizeInput() {
    return this._maxSize;
  }

  // switch - computed: false, optional: false, required: true
  private _switch?: string; 
  public get switch() {
    return this.getStringAttribute('switch');
  }
  public set switch(value: string) {
    this._switch = value;
  }
  // Temporarily expose input value. Use with caution.
  public get switchInput() {
    return this._switch;
  }
}

export class CdnDomainPostMaxSizeList extends cdktf.ComplexList {
  public internalValue? : CdnDomainPostMaxSize[] | cdktf.IResolvable

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
  public get(index: number): CdnDomainPostMaxSizeOutputReference {
    return new CdnDomainPostMaxSizeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CdnDomainQnPrivateAccess {
  /**
  * Access ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/cdn_domain#access_key CdnDomain#access_key}
  */
  readonly accessKey?: string;
  /**
  * Key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/cdn_domain#secret_key CdnDomain#secret_key}
  */
  readonly secretKey?: string;
  /**
  * Configuration switch, available values: `on`, `off` (default).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/cdn_domain#switch CdnDomain#switch}
  */
  readonly switch: string;
}

export function cdnDomainQnPrivateAccessToTerraform(struct?: CdnDomainQnPrivateAccessOutputReference | CdnDomainQnPrivateAccess): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_key: cdktf.stringToTerraform(struct!.accessKey),
    secret_key: cdktf.stringToTerraform(struct!.secretKey),
    switch: cdktf.stringToTerraform(struct!.switch),
  }
}


export function cdnDomainQnPrivateAccessToHclTerraform(struct?: CdnDomainQnPrivateAccessOutputReference | CdnDomainQnPrivateAccess): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_key: {
      value: cdktf.stringToHclTerraform(struct!.accessKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_key: {
      value: cdktf.stringToHclTerraform(struct!.secretKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    switch: {
      value: cdktf.stringToHclTerraform(struct!.switch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnDomainQnPrivateAccessOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnDomainQnPrivateAccess | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessKey = this._accessKey;
    }
    if (this._secretKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretKey = this._secretKey;
    }
    if (this._switch !== undefined) {
      hasAnyValues = true;
      internalValueResult.switch = this._switch;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnDomainQnPrivateAccess | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._accessKey = undefined;
      this._secretKey = undefined;
      this._switch = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._accessKey = value.accessKey;
      this._secretKey = value.secretKey;
      this._switch = value.switch;
    }
  }

  // access_key - computed: false, optional: true, required: false
  private _accessKey?: string; 
  public get accessKey() {
    return this.getStringAttribute('access_key');
  }
  public set accessKey(value: string) {
    this._accessKey = value;
  }
  public resetAccessKey() {
    this._accessKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessKeyInput() {
    return this._accessKey;
  }

  // secret_key - computed: false, optional: true, required: false
  private _secretKey?: string; 
  public get secretKey() {
    return this.getStringAttribute('secret_key');
  }
  public set secretKey(value: string) {
    this._secretKey = value;
  }
  public resetSecretKey() {
    this._secretKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretKeyInput() {
    return this._secretKey;
  }

  // switch - computed: false, optional: false, required: true
  private _switch?: string; 
  public get switch() {
    return this.getStringAttribute('switch');
  }
  public set switch(value: string) {
    this._switch = value;
  }
  // Temporarily expose input value. Use with caution.
  public get switchInput() {
    return this._switch;
  }
}
export interface CdnDomainRefererRefererRules {
  /**
  * Whether to allow emptpy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/cdn_domain#allow_empty CdnDomain#allow_empty}
  */
  readonly allowEmpty: boolean | cdktf.IResolvable;
  /**
  * Referer type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/cdn_domain#referer_type CdnDomain#referer_type}
  */
  readonly refererType: string;
  /**
  * Referer list.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/cdn_domain#referers CdnDomain#referers}
  */
  readonly referers: string[];
  /**
  * Referer rule path list.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/cdn_domain#rule_paths CdnDomain#rule_paths}
  */
  readonly rulePaths: string[];
  /**
  * Referer rule type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/cdn_domain#rule_type CdnDomain#rule_type}
  */
  readonly ruleType: string;
}

export function cdnDomainRefererRefererRulesToTerraform(struct?: CdnDomainRefererRefererRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_empty: cdktf.booleanToTerraform(struct!.allowEmpty),
    referer_type: cdktf.stringToTerraform(struct!.refererType),
    referers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.referers),
    rule_paths: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.rulePaths),
    rule_type: cdktf.stringToTerraform(struct!.ruleType),
  }
}


export function cdnDomainRefererRefererRulesToHclTerraform(struct?: CdnDomainRefererRefererRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_empty: {
      value: cdktf.booleanToHclTerraform(struct!.allowEmpty),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    referer_type: {
      value: cdktf.stringToHclTerraform(struct!.refererType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    referers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.referers),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    rule_paths: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.rulePaths),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    rule_type: {
      value: cdktf.stringToHclTerraform(struct!.ruleType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnDomainRefererRefererRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CdnDomainRefererRefererRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowEmpty !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowEmpty = this._allowEmpty;
    }
    if (this._refererType !== undefined) {
      hasAnyValues = true;
      internalValueResult.refererType = this._refererType;
    }
    if (this._referers !== undefined) {
      hasAnyValues = true;
      internalValueResult.referers = this._referers;
    }
    if (this._rulePaths !== undefined) {
      hasAnyValues = true;
      internalValueResult.rulePaths = this._rulePaths;
    }
    if (this._ruleType !== undefined) {
      hasAnyValues = true;
      internalValueResult.ruleType = this._ruleType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnDomainRefererRefererRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowEmpty = undefined;
      this._refererType = undefined;
      this._referers = undefined;
      this._rulePaths = undefined;
      this._ruleType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowEmpty = value.allowEmpty;
      this._refererType = value.refererType;
      this._referers = value.referers;
      this._rulePaths = value.rulePaths;
      this._ruleType = value.ruleType;
    }
  }

  // allow_empty - computed: false, optional: false, required: true
  private _allowEmpty?: boolean | cdktf.IResolvable; 
  public get allowEmpty() {
    return this.getBooleanAttribute('allow_empty');
  }
  public set allowEmpty(value: boolean | cdktf.IResolvable) {
    this._allowEmpty = value;
  }
  // Temporarily expose input value. Use with caution.
  public get allowEmptyInput() {
    return this._allowEmpty;
  }

  // referer_type - computed: false, optional: false, required: true
  private _refererType?: string; 
  public get refererType() {
    return this.getStringAttribute('referer_type');
  }
  public set refererType(value: string) {
    this._refererType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get refererTypeInput() {
    return this._refererType;
  }

  // referers - computed: false, optional: false, required: true
  private _referers?: string[]; 
  public get referers() {
    return this.getListAttribute('referers');
  }
  public set referers(value: string[]) {
    this._referers = value;
  }
  // Temporarily expose input value. Use with caution.
  public get referersInput() {
    return this._referers;
  }

  // rule_paths - computed: false, optional: false, required: true
  private _rulePaths?: string[]; 
  public get rulePaths() {
    return this.getListAttribute('rule_paths');
  }
  public set rulePaths(value: string[]) {
    this._rulePaths = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rulePathsInput() {
    return this._rulePaths;
  }

  // rule_type - computed: false, optional: false, required: true
  private _ruleType?: string; 
  public get ruleType() {
    return this.getStringAttribute('rule_type');
  }
  public set ruleType(value: string) {
    this._ruleType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleTypeInput() {
    return this._ruleType;
  }
}

export class CdnDomainRefererRefererRulesList extends cdktf.ComplexList {
  public internalValue? : CdnDomainRefererRefererRules[] | cdktf.IResolvable

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
  public get(index: number): CdnDomainRefererRefererRulesOutputReference {
    return new CdnDomainRefererRefererRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CdnDomainReferer {
  /**
  * Configuration switch, available values: `on`, `off` (default).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/cdn_domain#switch CdnDomain#switch}
  */
  readonly switch: string;
  /**
  * referer_rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/cdn_domain#referer_rules CdnDomain#referer_rules}
  */
  readonly refererRules?: CdnDomainRefererRefererRules[] | cdktf.IResolvable;
}

export function cdnDomainRefererToTerraform(struct?: CdnDomainRefererOutputReference | CdnDomainReferer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    switch: cdktf.stringToTerraform(struct!.switch),
    referer_rules: cdktf.listMapper(cdnDomainRefererRefererRulesToTerraform, true)(struct!.refererRules),
  }
}


export function cdnDomainRefererToHclTerraform(struct?: CdnDomainRefererOutputReference | CdnDomainReferer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    switch: {
      value: cdktf.stringToHclTerraform(struct!.switch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    referer_rules: {
      value: cdktf.listMapperHcl(cdnDomainRefererRefererRulesToHclTerraform, true)(struct!.refererRules),
      isBlock: true,
      type: "list",
      storageClassType: "CdnDomainRefererRefererRulesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnDomainRefererOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnDomainReferer | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._switch !== undefined) {
      hasAnyValues = true;
      internalValueResult.switch = this._switch;
    }
    if (this._refererRules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.refererRules = this._refererRules?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnDomainReferer | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._switch = undefined;
      this._refererRules.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._switch = value.switch;
      this._refererRules.internalValue = value.refererRules;
    }
  }

  // switch - computed: false, optional: false, required: true
  private _switch?: string; 
  public get switch() {
    return this.getStringAttribute('switch');
  }
  public set switch(value: string) {
    this._switch = value;
  }
  // Temporarily expose input value. Use with caution.
  public get switchInput() {
    return this._switch;
  }

  // referer_rules - computed: false, optional: true, required: false
  private _refererRules = new CdnDomainRefererRefererRulesList(this, "referer_rules", false);
  public get refererRules() {
    return this._refererRules;
  }
  public putRefererRules(value: CdnDomainRefererRefererRules[] | cdktf.IResolvable) {
    this._refererRules.internalValue = value;
  }
  public resetRefererRules() {
    this._refererRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refererRulesInput() {
    return this._refererRules.internalValue;
  }
}
export interface CdnDomainRequestHeaderHeaderRules {
  /**
  * Http header setting method. The following types are supported: `set`: sets a value for an existing header parameter, a new header parameter, or multiple header parameters. Multiple header parameters will be merged into one; `del`: deletes a header parameter; `add`: adds a header parameter. By default, you can repeat the same action to add the same header parameter, which may affect browser response. Please consider the set operation first.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/cdn_domain#header_mode CdnDomain#header_mode}
  */
  readonly headerMode: string;
  /**
  * Http header name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/cdn_domain#header_name CdnDomain#header_name}
  */
  readonly headerName: string;
  /**
  * Http header value, optional when Mode is `del`, Required when Mode is `add`/`set`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/cdn_domain#header_value CdnDomain#header_value}
  */
  readonly headerValue: string;
  /**
  * Matching content under the corresponding type of CacheType: `all`: fill *, `file`: fill in the suffix name, such as jpg, txt, `directory`: fill in the path, such as /xxx/test, `path`: fill in the absolute path, such as /xxx/test.html.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/cdn_domain#rule_paths CdnDomain#rule_paths}
  */
  readonly rulePaths: string[];
  /**
  * Rule type. The following types are supported: `all`: all documents take effect, `file`: the specified file suffix takes effect, `directory`: the specified path takes effect, `path`: specify the absolute path to take effect.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/cdn_domain#rule_type CdnDomain#rule_type}
  */
  readonly ruleType: string;
}

export function cdnDomainRequestHeaderHeaderRulesToTerraform(struct?: CdnDomainRequestHeaderHeaderRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    header_mode: cdktf.stringToTerraform(struct!.headerMode),
    header_name: cdktf.stringToTerraform(struct!.headerName),
    header_value: cdktf.stringToTerraform(struct!.headerValue),
    rule_paths: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.rulePaths),
    rule_type: cdktf.stringToTerraform(struct!.ruleType),
  }
}


export function cdnDomainRequestHeaderHeaderRulesToHclTerraform(struct?: CdnDomainRequestHeaderHeaderRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    header_mode: {
      value: cdktf.stringToHclTerraform(struct!.headerMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    header_name: {
      value: cdktf.stringToHclTerraform(struct!.headerName),
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
    rule_paths: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.rulePaths),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    rule_type: {
      value: cdktf.stringToHclTerraform(struct!.ruleType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnDomainRequestHeaderHeaderRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CdnDomainRequestHeaderHeaderRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._headerMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerMode = this._headerMode;
    }
    if (this._headerName !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerName = this._headerName;
    }
    if (this._headerValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerValue = this._headerValue;
    }
    if (this._rulePaths !== undefined) {
      hasAnyValues = true;
      internalValueResult.rulePaths = this._rulePaths;
    }
    if (this._ruleType !== undefined) {
      hasAnyValues = true;
      internalValueResult.ruleType = this._ruleType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnDomainRequestHeaderHeaderRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._headerMode = undefined;
      this._headerName = undefined;
      this._headerValue = undefined;
      this._rulePaths = undefined;
      this._ruleType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._headerMode = value.headerMode;
      this._headerName = value.headerName;
      this._headerValue = value.headerValue;
      this._rulePaths = value.rulePaths;
      this._ruleType = value.ruleType;
    }
  }

  // header_mode - computed: false, optional: false, required: true
  private _headerMode?: string; 
  public get headerMode() {
    return this.getStringAttribute('header_mode');
  }
  public set headerMode(value: string) {
    this._headerMode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get headerModeInput() {
    return this._headerMode;
  }

  // header_name - computed: false, optional: false, required: true
  private _headerName?: string; 
  public get headerName() {
    return this.getStringAttribute('header_name');
  }
  public set headerName(value: string) {
    this._headerName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get headerNameInput() {
    return this._headerName;
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

  // rule_paths - computed: false, optional: false, required: true
  private _rulePaths?: string[]; 
  public get rulePaths() {
    return this.getListAttribute('rule_paths');
  }
  public set rulePaths(value: string[]) {
    this._rulePaths = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rulePathsInput() {
    return this._rulePaths;
  }

  // rule_type - computed: false, optional: false, required: true
  private _ruleType?: string; 
  public get ruleType() {
    return this.getStringAttribute('rule_type');
  }
  public set ruleType(value: string) {
    this._ruleType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleTypeInput() {
    return this._ruleType;
  }
}

export class CdnDomainRequestHeaderHeaderRulesList extends cdktf.ComplexList {
  public internalValue? : CdnDomainRequestHeaderHeaderRules[] | cdktf.IResolvable

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
  public get(index: number): CdnDomainRequestHeaderHeaderRulesOutputReference {
    return new CdnDomainRequestHeaderHeaderRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CdnDomainRequestHeader {
  /**
  * Custom request header configuration switch. Valid values are `on` and `off`. and default value is `off`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/cdn_domain#switch CdnDomain#switch}
  */
  readonly switch?: string;
  /**
  * header_rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/cdn_domain#header_rules CdnDomain#header_rules}
  */
  readonly headerRules?: CdnDomainRequestHeaderHeaderRules[] | cdktf.IResolvable;
}

export function cdnDomainRequestHeaderToTerraform(struct?: CdnDomainRequestHeaderOutputReference | CdnDomainRequestHeader): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    switch: cdktf.stringToTerraform(struct!.switch),
    header_rules: cdktf.listMapper(cdnDomainRequestHeaderHeaderRulesToTerraform, true)(struct!.headerRules),
  }
}


export function cdnDomainRequestHeaderToHclTerraform(struct?: CdnDomainRequestHeaderOutputReference | CdnDomainRequestHeader): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    switch: {
      value: cdktf.stringToHclTerraform(struct!.switch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    header_rules: {
      value: cdktf.listMapperHcl(cdnDomainRequestHeaderHeaderRulesToHclTerraform, true)(struct!.headerRules),
      isBlock: true,
      type: "list",
      storageClassType: "CdnDomainRequestHeaderHeaderRulesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnDomainRequestHeaderOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnDomainRequestHeader | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._switch !== undefined) {
      hasAnyValues = true;
      internalValueResult.switch = this._switch;
    }
    if (this._headerRules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerRules = this._headerRules?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnDomainRequestHeader | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._switch = undefined;
      this._headerRules.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._switch = value.switch;
      this._headerRules.internalValue = value.headerRules;
    }
  }

  // switch - computed: false, optional: true, required: false
  private _switch?: string; 
  public get switch() {
    return this.getStringAttribute('switch');
  }
  public set switch(value: string) {
    this._switch = value;
  }
  public resetSwitch() {
    this._switch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get switchInput() {
    return this._switch;
  }

  // header_rules - computed: false, optional: true, required: false
  private _headerRules = new CdnDomainRequestHeaderHeaderRulesList(this, "header_rules", false);
  public get headerRules() {
    return this._headerRules;
  }
  public putHeaderRules(value: CdnDomainRequestHeaderHeaderRules[] | cdktf.IResolvable) {
    this._headerRules.internalValue = value;
  }
  public resetHeaderRules() {
    this._headerRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerRulesInput() {
    return this._headerRules.internalValue;
  }
}
export interface CdnDomainResponseHeaderHeaderRules {
  /**
  * Response header mode.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/cdn_domain#header_mode CdnDomain#header_mode}
  */
  readonly headerMode: string;
  /**
  * response header name of rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/cdn_domain#header_name CdnDomain#header_name}
  */
  readonly headerName: string;
  /**
  * response header value of rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/cdn_domain#header_value CdnDomain#header_value}
  */
  readonly headerValue: string;
  /**
  * response rule paths of rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/cdn_domain#rule_paths CdnDomain#rule_paths}
  */
  readonly rulePaths: string[];
  /**
  * response rule type of rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/cdn_domain#rule_type CdnDomain#rule_type}
  */
  readonly ruleType: string;
}

export function cdnDomainResponseHeaderHeaderRulesToTerraform(struct?: CdnDomainResponseHeaderHeaderRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    header_mode: cdktf.stringToTerraform(struct!.headerMode),
    header_name: cdktf.stringToTerraform(struct!.headerName),
    header_value: cdktf.stringToTerraform(struct!.headerValue),
    rule_paths: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.rulePaths),
    rule_type: cdktf.stringToTerraform(struct!.ruleType),
  }
}


export function cdnDomainResponseHeaderHeaderRulesToHclTerraform(struct?: CdnDomainResponseHeaderHeaderRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    header_mode: {
      value: cdktf.stringToHclTerraform(struct!.headerMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    header_name: {
      value: cdktf.stringToHclTerraform(struct!.headerName),
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
    rule_paths: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.rulePaths),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    rule_type: {
      value: cdktf.stringToHclTerraform(struct!.ruleType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnDomainResponseHeaderHeaderRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CdnDomainResponseHeaderHeaderRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._headerMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerMode = this._headerMode;
    }
    if (this._headerName !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerName = this._headerName;
    }
    if (this._headerValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerValue = this._headerValue;
    }
    if (this._rulePaths !== undefined) {
      hasAnyValues = true;
      internalValueResult.rulePaths = this._rulePaths;
    }
    if (this._ruleType !== undefined) {
      hasAnyValues = true;
      internalValueResult.ruleType = this._ruleType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnDomainResponseHeaderHeaderRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._headerMode = undefined;
      this._headerName = undefined;
      this._headerValue = undefined;
      this._rulePaths = undefined;
      this._ruleType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._headerMode = value.headerMode;
      this._headerName = value.headerName;
      this._headerValue = value.headerValue;
      this._rulePaths = value.rulePaths;
      this._ruleType = value.ruleType;
    }
  }

  // header_mode - computed: false, optional: false, required: true
  private _headerMode?: string; 
  public get headerMode() {
    return this.getStringAttribute('header_mode');
  }
  public set headerMode(value: string) {
    this._headerMode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get headerModeInput() {
    return this._headerMode;
  }

  // header_name - computed: false, optional: false, required: true
  private _headerName?: string; 
  public get headerName() {
    return this.getStringAttribute('header_name');
  }
  public set headerName(value: string) {
    this._headerName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get headerNameInput() {
    return this._headerName;
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

  // rule_paths - computed: false, optional: false, required: true
  private _rulePaths?: string[]; 
  public get rulePaths() {
    return this.getListAttribute('rule_paths');
  }
  public set rulePaths(value: string[]) {
    this._rulePaths = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rulePathsInput() {
    return this._rulePaths;
  }

  // rule_type - computed: false, optional: false, required: true
  private _ruleType?: string; 
  public get ruleType() {
    return this.getStringAttribute('rule_type');
  }
  public set ruleType(value: string) {
    this._ruleType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleTypeInput() {
    return this._ruleType;
  }
}

export class CdnDomainResponseHeaderHeaderRulesList extends cdktf.ComplexList {
  public internalValue? : CdnDomainResponseHeaderHeaderRules[] | cdktf.IResolvable

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
  public get(index: number): CdnDomainResponseHeaderHeaderRulesOutputReference {
    return new CdnDomainResponseHeaderHeaderRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CdnDomainResponseHeader {
  /**
  * Configuration switch, available values: `on`, `off` (default).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/cdn_domain#switch CdnDomain#switch}
  */
  readonly switch: string;
  /**
  * header_rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/cdn_domain#header_rules CdnDomain#header_rules}
  */
  readonly headerRules?: CdnDomainResponseHeaderHeaderRules[] | cdktf.IResolvable;
}

export function cdnDomainResponseHeaderToTerraform(struct?: CdnDomainResponseHeaderOutputReference | CdnDomainResponseHeader): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    switch: cdktf.stringToTerraform(struct!.switch),
    header_rules: cdktf.listMapper(cdnDomainResponseHeaderHeaderRulesToTerraform, true)(struct!.headerRules),
  }
}


export function cdnDomainResponseHeaderToHclTerraform(struct?: CdnDomainResponseHeaderOutputReference | CdnDomainResponseHeader): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    switch: {
      value: cdktf.stringToHclTerraform(struct!.switch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    header_rules: {
      value: cdktf.listMapperHcl(cdnDomainResponseHeaderHeaderRulesToHclTerraform, true)(struct!.headerRules),
      isBlock: true,
      type: "list",
      storageClassType: "CdnDomainResponseHeaderHeaderRulesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnDomainResponseHeaderOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnDomainResponseHeader | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._switch !== undefined) {
      hasAnyValues = true;
      internalValueResult.switch = this._switch;
    }
    if (this._headerRules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerRules = this._headerRules?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnDomainResponseHeader | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._switch = undefined;
      this._headerRules.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._switch = value.switch;
      this._headerRules.internalValue = value.headerRules;
    }
  }

  // switch - computed: false, optional: false, required: true
  private _switch?: string; 
  public get switch() {
    return this.getStringAttribute('switch');
  }
  public set switch(value: string) {
    this._switch = value;
  }
  // Temporarily expose input value. Use with caution.
  public get switchInput() {
    return this._switch;
  }

  // header_rules - computed: false, optional: true, required: false
  private _headerRules = new CdnDomainResponseHeaderHeaderRulesList(this, "header_rules", false);
  public get headerRules() {
    return this._headerRules;
  }
  public putHeaderRules(value: CdnDomainResponseHeaderHeaderRules[] | cdktf.IResolvable) {
    this._headerRules.internalValue = value;
  }
  public resetHeaderRules() {
    this._headerRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerRulesInput() {
    return this._headerRules.internalValue;
  }
}
export interface CdnDomainRuleCache {
  /**
  * Cache expiration time setting, the unit is second, the maximum can be set to 365 days.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/cdn_domain#cache_time CdnDomain#cache_time}
  */
  readonly cacheTime: number;
  /**
  * Advanced cache expiration configuration. When it is turned on, it will compare the max-age value returned by the origin site with the cache expiration time set in CacheRules, and take the minimum value to cache at the node. Valid values are `on` and `off`. Default value is `off`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/cdn_domain#compare_max_age CdnDomain#compare_max_age}
  */
  readonly compareMaxAge?: string;
  /**
  * Follow the source station configuration switch. Valid values are `on` and `off`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/cdn_domain#follow_origin_switch CdnDomain#follow_origin_switch}
  */
  readonly followOriginSwitch?: string;
  /**
  * Specify whether to enable heuristic cache, only available while `follow_origin_switch` enabled, values: `on`, `off` (Default).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/cdn_domain#heuristic_cache_switch CdnDomain#heuristic_cache_switch}
  */
  readonly heuristicCacheSwitch?: string;
  /**
  * Specify heuristic cache time in second, only available while `follow_origin_switch` and `heuristic_cache_switch` enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/cdn_domain#heuristic_cache_time CdnDomain#heuristic_cache_time}
  */
  readonly heuristicCacheTime?: number;
  /**
  * Force caching. After opening, the no-store and no-cache resources returned by the origin site will also be cached in accordance with the CacheRules rules. Valid values are `on` and `off`. Default value is `off`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/cdn_domain#ignore_cache_control CdnDomain#ignore_cache_control}
  */
  readonly ignoreCacheControl?: string;
  /**
  * Ignore the Set-Cookie header of the origin site. Valid values are `on` and `off`. Default value is `off`. This parameter is for white-list customer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/cdn_domain#ignore_set_cookie CdnDomain#ignore_set_cookie}
  */
  readonly ignoreSetCookie?: string;
  /**
  * Cache configuration switch. Valid values are `on` and `off`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/cdn_domain#no_cache_switch CdnDomain#no_cache_switch}
  */
  readonly noCacheSwitch?: string;
  /**
  * Always check back to origin. Valid values are `on` and `off`. Default value is `off`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/cdn_domain#re_validate CdnDomain#re_validate}
  */
  readonly reValidate?: string;
  /**
  * Matching content under the corresponding type of CacheType: `all`: fill *, `file`: fill in the suffix name, such as jpg, txt, `directory`: fill in the path, such as /xxx/test, `path`: fill in the absolute path, such as /xxx/test.html, `index`: fill /.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/cdn_domain#rule_paths CdnDomain#rule_paths}
  */
  readonly rulePaths?: string[];
  /**
  * Rule type. The following types are supported: `all`: all documents take effect, `file`: the specified file suffix takes effect, `directory`: the specified path takes effect, `path`: specify the absolute path to take effect, `index`: home page.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/cdn_domain#rule_type CdnDomain#rule_type}
  */
  readonly ruleType?: string;
  /**
  * Cache configuration switch. Valid values are `on` and `off`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/cdn_domain#switch CdnDomain#switch}
  */
  readonly switch?: string;
}

export function cdnDomainRuleCacheToTerraform(struct?: CdnDomainRuleCache | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cache_time: cdktf.numberToTerraform(struct!.cacheTime),
    compare_max_age: cdktf.stringToTerraform(struct!.compareMaxAge),
    follow_origin_switch: cdktf.stringToTerraform(struct!.followOriginSwitch),
    heuristic_cache_switch: cdktf.stringToTerraform(struct!.heuristicCacheSwitch),
    heuristic_cache_time: cdktf.numberToTerraform(struct!.heuristicCacheTime),
    ignore_cache_control: cdktf.stringToTerraform(struct!.ignoreCacheControl),
    ignore_set_cookie: cdktf.stringToTerraform(struct!.ignoreSetCookie),
    no_cache_switch: cdktf.stringToTerraform(struct!.noCacheSwitch),
    re_validate: cdktf.stringToTerraform(struct!.reValidate),
    rule_paths: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.rulePaths),
    rule_type: cdktf.stringToTerraform(struct!.ruleType),
    switch: cdktf.stringToTerraform(struct!.switch),
  }
}


export function cdnDomainRuleCacheToHclTerraform(struct?: CdnDomainRuleCache | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cache_time: {
      value: cdktf.numberToHclTerraform(struct!.cacheTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    compare_max_age: {
      value: cdktf.stringToHclTerraform(struct!.compareMaxAge),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    follow_origin_switch: {
      value: cdktf.stringToHclTerraform(struct!.followOriginSwitch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    heuristic_cache_switch: {
      value: cdktf.stringToHclTerraform(struct!.heuristicCacheSwitch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    heuristic_cache_time: {
      value: cdktf.numberToHclTerraform(struct!.heuristicCacheTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ignore_cache_control: {
      value: cdktf.stringToHclTerraform(struct!.ignoreCacheControl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ignore_set_cookie: {
      value: cdktf.stringToHclTerraform(struct!.ignoreSetCookie),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    no_cache_switch: {
      value: cdktf.stringToHclTerraform(struct!.noCacheSwitch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    re_validate: {
      value: cdktf.stringToHclTerraform(struct!.reValidate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rule_paths: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.rulePaths),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    rule_type: {
      value: cdktf.stringToHclTerraform(struct!.ruleType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    switch: {
      value: cdktf.stringToHclTerraform(struct!.switch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnDomainRuleCacheOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CdnDomainRuleCache | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cacheTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.cacheTime = this._cacheTime;
    }
    if (this._compareMaxAge !== undefined) {
      hasAnyValues = true;
      internalValueResult.compareMaxAge = this._compareMaxAge;
    }
    if (this._followOriginSwitch !== undefined) {
      hasAnyValues = true;
      internalValueResult.followOriginSwitch = this._followOriginSwitch;
    }
    if (this._heuristicCacheSwitch !== undefined) {
      hasAnyValues = true;
      internalValueResult.heuristicCacheSwitch = this._heuristicCacheSwitch;
    }
    if (this._heuristicCacheTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.heuristicCacheTime = this._heuristicCacheTime;
    }
    if (this._ignoreCacheControl !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreCacheControl = this._ignoreCacheControl;
    }
    if (this._ignoreSetCookie !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreSetCookie = this._ignoreSetCookie;
    }
    if (this._noCacheSwitch !== undefined) {
      hasAnyValues = true;
      internalValueResult.noCacheSwitch = this._noCacheSwitch;
    }
    if (this._reValidate !== undefined) {
      hasAnyValues = true;
      internalValueResult.reValidate = this._reValidate;
    }
    if (this._rulePaths !== undefined) {
      hasAnyValues = true;
      internalValueResult.rulePaths = this._rulePaths;
    }
    if (this._ruleType !== undefined) {
      hasAnyValues = true;
      internalValueResult.ruleType = this._ruleType;
    }
    if (this._switch !== undefined) {
      hasAnyValues = true;
      internalValueResult.switch = this._switch;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnDomainRuleCache | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cacheTime = undefined;
      this._compareMaxAge = undefined;
      this._followOriginSwitch = undefined;
      this._heuristicCacheSwitch = undefined;
      this._heuristicCacheTime = undefined;
      this._ignoreCacheControl = undefined;
      this._ignoreSetCookie = undefined;
      this._noCacheSwitch = undefined;
      this._reValidate = undefined;
      this._rulePaths = undefined;
      this._ruleType = undefined;
      this._switch = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cacheTime = value.cacheTime;
      this._compareMaxAge = value.compareMaxAge;
      this._followOriginSwitch = value.followOriginSwitch;
      this._heuristicCacheSwitch = value.heuristicCacheSwitch;
      this._heuristicCacheTime = value.heuristicCacheTime;
      this._ignoreCacheControl = value.ignoreCacheControl;
      this._ignoreSetCookie = value.ignoreSetCookie;
      this._noCacheSwitch = value.noCacheSwitch;
      this._reValidate = value.reValidate;
      this._rulePaths = value.rulePaths;
      this._ruleType = value.ruleType;
      this._switch = value.switch;
    }
  }

  // cache_time - computed: false, optional: false, required: true
  private _cacheTime?: number; 
  public get cacheTime() {
    return this.getNumberAttribute('cache_time');
  }
  public set cacheTime(value: number) {
    this._cacheTime = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheTimeInput() {
    return this._cacheTime;
  }

  // compare_max_age - computed: false, optional: true, required: false
  private _compareMaxAge?: string; 
  public get compareMaxAge() {
    return this.getStringAttribute('compare_max_age');
  }
  public set compareMaxAge(value: string) {
    this._compareMaxAge = value;
  }
  public resetCompareMaxAge() {
    this._compareMaxAge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compareMaxAgeInput() {
    return this._compareMaxAge;
  }

  // follow_origin_switch - computed: false, optional: true, required: false
  private _followOriginSwitch?: string; 
  public get followOriginSwitch() {
    return this.getStringAttribute('follow_origin_switch');
  }
  public set followOriginSwitch(value: string) {
    this._followOriginSwitch = value;
  }
  public resetFollowOriginSwitch() {
    this._followOriginSwitch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get followOriginSwitchInput() {
    return this._followOriginSwitch;
  }

  // heuristic_cache_switch - computed: false, optional: true, required: false
  private _heuristicCacheSwitch?: string; 
  public get heuristicCacheSwitch() {
    return this.getStringAttribute('heuristic_cache_switch');
  }
  public set heuristicCacheSwitch(value: string) {
    this._heuristicCacheSwitch = value;
  }
  public resetHeuristicCacheSwitch() {
    this._heuristicCacheSwitch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get heuristicCacheSwitchInput() {
    return this._heuristicCacheSwitch;
  }

  // heuristic_cache_time - computed: false, optional: true, required: false
  private _heuristicCacheTime?: number; 
  public get heuristicCacheTime() {
    return this.getNumberAttribute('heuristic_cache_time');
  }
  public set heuristicCacheTime(value: number) {
    this._heuristicCacheTime = value;
  }
  public resetHeuristicCacheTime() {
    this._heuristicCacheTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get heuristicCacheTimeInput() {
    return this._heuristicCacheTime;
  }

  // ignore_cache_control - computed: false, optional: true, required: false
  private _ignoreCacheControl?: string; 
  public get ignoreCacheControl() {
    return this.getStringAttribute('ignore_cache_control');
  }
  public set ignoreCacheControl(value: string) {
    this._ignoreCacheControl = value;
  }
  public resetIgnoreCacheControl() {
    this._ignoreCacheControl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreCacheControlInput() {
    return this._ignoreCacheControl;
  }

  // ignore_set_cookie - computed: false, optional: true, required: false
  private _ignoreSetCookie?: string; 
  public get ignoreSetCookie() {
    return this.getStringAttribute('ignore_set_cookie');
  }
  public set ignoreSetCookie(value: string) {
    this._ignoreSetCookie = value;
  }
  public resetIgnoreSetCookie() {
    this._ignoreSetCookie = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreSetCookieInput() {
    return this._ignoreSetCookie;
  }

  // no_cache_switch - computed: false, optional: true, required: false
  private _noCacheSwitch?: string; 
  public get noCacheSwitch() {
    return this.getStringAttribute('no_cache_switch');
  }
  public set noCacheSwitch(value: string) {
    this._noCacheSwitch = value;
  }
  public resetNoCacheSwitch() {
    this._noCacheSwitch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noCacheSwitchInput() {
    return this._noCacheSwitch;
  }

  // re_validate - computed: false, optional: true, required: false
  private _reValidate?: string; 
  public get reValidate() {
    return this.getStringAttribute('re_validate');
  }
  public set reValidate(value: string) {
    this._reValidate = value;
  }
  public resetReValidate() {
    this._reValidate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reValidateInput() {
    return this._reValidate;
  }

  // rule_paths - computed: true, optional: true, required: false
  private _rulePaths?: string[]; 
  public get rulePaths() {
    return this.getListAttribute('rule_paths');
  }
  public set rulePaths(value: string[]) {
    this._rulePaths = value;
  }
  public resetRulePaths() {
    this._rulePaths = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rulePathsInput() {
    return this._rulePaths;
  }

  // rule_type - computed: false, optional: true, required: false
  private _ruleType?: string; 
  public get ruleType() {
    return this.getStringAttribute('rule_type');
  }
  public set ruleType(value: string) {
    this._ruleType = value;
  }
  public resetRuleType() {
    this._ruleType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleTypeInput() {
    return this._ruleType;
  }

  // switch - computed: false, optional: true, required: false
  private _switch?: string; 
  public get switch() {
    return this.getStringAttribute('switch');
  }
  public set switch(value: string) {
    this._switch = value;
  }
  public resetSwitch() {
    this._switch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get switchInput() {
    return this._switch;
  }
}

export class CdnDomainRuleCacheList extends cdktf.ComplexList {
  public internalValue? : CdnDomainRuleCache[] | cdktf.IResolvable

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
  public get(index: number): CdnDomainRuleCacheOutputReference {
    return new CdnDomainRuleCacheOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CdnDomainStatusCodeCacheCacheRules {
  /**
  * Status code cache expiration time (in seconds).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/cdn_domain#cache_time CdnDomain#cache_time}
  */
  readonly cacheTime: number;
  /**
  * Code of status cache. available values: `403`, `404`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/cdn_domain#status_code CdnDomain#status_code}
  */
  readonly statusCode: string;
}

export function cdnDomainStatusCodeCacheCacheRulesToTerraform(struct?: CdnDomainStatusCodeCacheCacheRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cache_time: cdktf.numberToTerraform(struct!.cacheTime),
    status_code: cdktf.stringToTerraform(struct!.statusCode),
  }
}


export function cdnDomainStatusCodeCacheCacheRulesToHclTerraform(struct?: CdnDomainStatusCodeCacheCacheRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cache_time: {
      value: cdktf.numberToHclTerraform(struct!.cacheTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    status_code: {
      value: cdktf.stringToHclTerraform(struct!.statusCode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnDomainStatusCodeCacheCacheRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CdnDomainStatusCodeCacheCacheRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cacheTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.cacheTime = this._cacheTime;
    }
    if (this._statusCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.statusCode = this._statusCode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnDomainStatusCodeCacheCacheRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cacheTime = undefined;
      this._statusCode = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cacheTime = value.cacheTime;
      this._statusCode = value.statusCode;
    }
  }

  // cache_time - computed: false, optional: false, required: true
  private _cacheTime?: number; 
  public get cacheTime() {
    return this.getNumberAttribute('cache_time');
  }
  public set cacheTime(value: number) {
    this._cacheTime = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheTimeInput() {
    return this._cacheTime;
  }

  // status_code - computed: false, optional: false, required: true
  private _statusCode?: string; 
  public get statusCode() {
    return this.getStringAttribute('status_code');
  }
  public set statusCode(value: string) {
    this._statusCode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get statusCodeInput() {
    return this._statusCode;
  }
}

export class CdnDomainStatusCodeCacheCacheRulesList extends cdktf.ComplexList {
  public internalValue? : CdnDomainStatusCodeCacheCacheRules[] | cdktf.IResolvable

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
  public get(index: number): CdnDomainStatusCodeCacheCacheRulesOutputReference {
    return new CdnDomainStatusCodeCacheCacheRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CdnDomainStatusCodeCache {
  /**
  * Configuration switch, available values: `on`, `off` (default).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/cdn_domain#switch CdnDomain#switch}
  */
  readonly switch: string;
  /**
  * cache_rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/cdn_domain#cache_rules CdnDomain#cache_rules}
  */
  readonly cacheRules?: CdnDomainStatusCodeCacheCacheRules[] | cdktf.IResolvable;
}

export function cdnDomainStatusCodeCacheToTerraform(struct?: CdnDomainStatusCodeCacheOutputReference | CdnDomainStatusCodeCache): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    switch: cdktf.stringToTerraform(struct!.switch),
    cache_rules: cdktf.listMapper(cdnDomainStatusCodeCacheCacheRulesToTerraform, true)(struct!.cacheRules),
  }
}


export function cdnDomainStatusCodeCacheToHclTerraform(struct?: CdnDomainStatusCodeCacheOutputReference | CdnDomainStatusCodeCache): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    switch: {
      value: cdktf.stringToHclTerraform(struct!.switch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cache_rules: {
      value: cdktf.listMapperHcl(cdnDomainStatusCodeCacheCacheRulesToHclTerraform, true)(struct!.cacheRules),
      isBlock: true,
      type: "list",
      storageClassType: "CdnDomainStatusCodeCacheCacheRulesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnDomainStatusCodeCacheOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnDomainStatusCodeCache | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._switch !== undefined) {
      hasAnyValues = true;
      internalValueResult.switch = this._switch;
    }
    if (this._cacheRules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cacheRules = this._cacheRules?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnDomainStatusCodeCache | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._switch = undefined;
      this._cacheRules.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._switch = value.switch;
      this._cacheRules.internalValue = value.cacheRules;
    }
  }

  // switch - computed: false, optional: false, required: true
  private _switch?: string; 
  public get switch() {
    return this.getStringAttribute('switch');
  }
  public set switch(value: string) {
    this._switch = value;
  }
  // Temporarily expose input value. Use with caution.
  public get switchInput() {
    return this._switch;
  }

  // cache_rules - computed: false, optional: true, required: false
  private _cacheRules = new CdnDomainStatusCodeCacheCacheRulesList(this, "cache_rules", false);
  public get cacheRules() {
    return this._cacheRules;
  }
  public putCacheRules(value: CdnDomainStatusCodeCacheCacheRules[] | cdktf.IResolvable) {
    this._cacheRules.internalValue = value;
  }
  public resetCacheRules() {
    this._cacheRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheRulesInput() {
    return this._cacheRules.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/cdn_domain tencentcloud_cdn_domain}
*/
export class CdnDomain extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_cdn_domain";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CdnDomain resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CdnDomain to import
  * @param importFromId The id of the existing CdnDomain that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/cdn_domain#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CdnDomain to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_cdn_domain", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/cdn_domain tencentcloud_cdn_domain} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CdnDomainConfig
  */
  public constructor(scope: Construct, id: string, config: CdnDomainConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_cdn_domain',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.45',
        providerVersionConstraint: '1.82.45'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._area = config.area;
    this._domain = config.domain;
    this._explicitUsingDryRun = config.explicitUsingDryRun;
    this._followRedirectSwitch = config.followRedirectSwitch;
    this._fullUrlCache = config.fullUrlCache;
    this._id = config.id;
    this._ipv6AccessSwitch = config.ipv6AccessSwitch;
    this._offlineCacheSwitch = config.offlineCacheSwitch;
    this._projectId = config.projectId;
    this._quicSwitch = config.quicSwitch;
    this._rangeOriginSwitch = config.rangeOriginSwitch;
    this._responseHeaderCacheSwitch = config.responseHeaderCacheSwitch;
    this._seoSwitch = config.seoSwitch;
    this._serviceType = config.serviceType;
    this._specificConfigMainland = config.specificConfigMainland;
    this._specificConfigOverseas = config.specificConfigOverseas;
    this._tags = config.tags;
    this._videoSeekSwitch = config.videoSeekSwitch;
    this._authentication.internalValue = config.authentication;
    this._awsPrivateAccess.internalValue = config.awsPrivateAccess;
    this._bandWidthAlert.internalValue = config.bandWidthAlert;
    this._cacheKey.internalValue = config.cacheKey;
    this._compression.internalValue = config.compression;
    this._downstreamCapping.internalValue = config.downstreamCapping;
    this._errorPage.internalValue = config.errorPage;
    this._httpsConfig.internalValue = config.httpsConfig;
    this._hwPrivateAccess.internalValue = config.hwPrivateAccess;
    this._ipFilter.internalValue = config.ipFilter;
    this._ipFreqLimit.internalValue = config.ipFreqLimit;
    this._maxAge.internalValue = config.maxAge;
    this._origin.internalValue = config.origin;
    this._originPullOptimization.internalValue = config.originPullOptimization;
    this._originPullTimeout.internalValue = config.originPullTimeout;
    this._ossPrivateAccess.internalValue = config.ossPrivateAccess;
    this._othersPrivateAccess.internalValue = config.othersPrivateAccess;
    this._postMaxSize.internalValue = config.postMaxSize;
    this._qnPrivateAccess.internalValue = config.qnPrivateAccess;
    this._referer.internalValue = config.referer;
    this._requestHeader.internalValue = config.requestHeader;
    this._responseHeader.internalValue = config.responseHeader;
    this._ruleCache.internalValue = config.ruleCache;
    this._statusCodeCache.internalValue = config.statusCodeCache;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // area - computed: false, optional: true, required: false
  private _area?: string; 
  public get area() {
    return this.getStringAttribute('area');
  }
  public set area(value: string) {
    this._area = value;
  }
  public resetArea() {
    this._area = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get areaInput() {
    return this._area;
  }

  // cname - computed: true, optional: false, required: false
  public get cname() {
    return this.getStringAttribute('cname');
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // domain - computed: false, optional: false, required: true
  private _domain?: string; 
  public get domain() {
    return this.getStringAttribute('domain');
  }
  public set domain(value: string) {
    this._domain = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain;
  }

  // dry_run_create_result - computed: true, optional: false, required: false
  public get dryRunCreateResult() {
    return this.getStringAttribute('dry_run_create_result');
  }

  // dry_run_update_result - computed: true, optional: false, required: false
  public get dryRunUpdateResult() {
    return this.getStringAttribute('dry_run_update_result');
  }

  // explicit_using_dry_run - computed: false, optional: true, required: false
  private _explicitUsingDryRun?: boolean | cdktf.IResolvable; 
  public get explicitUsingDryRun() {
    return this.getBooleanAttribute('explicit_using_dry_run');
  }
  public set explicitUsingDryRun(value: boolean | cdktf.IResolvable) {
    this._explicitUsingDryRun = value;
  }
  public resetExplicitUsingDryRun() {
    this._explicitUsingDryRun = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get explicitUsingDryRunInput() {
    return this._explicitUsingDryRun;
  }

  // follow_redirect_switch - computed: false, optional: true, required: false
  private _followRedirectSwitch?: string; 
  public get followRedirectSwitch() {
    return this.getStringAttribute('follow_redirect_switch');
  }
  public set followRedirectSwitch(value: string) {
    this._followRedirectSwitch = value;
  }
  public resetFollowRedirectSwitch() {
    this._followRedirectSwitch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get followRedirectSwitchInput() {
    return this._followRedirectSwitch;
  }

  // full_url_cache - computed: false, optional: true, required: false
  private _fullUrlCache?: boolean | cdktf.IResolvable; 
  public get fullUrlCache() {
    return this.getBooleanAttribute('full_url_cache');
  }
  public set fullUrlCache(value: boolean | cdktf.IResolvable) {
    this._fullUrlCache = value;
  }
  public resetFullUrlCache() {
    this._fullUrlCache = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fullUrlCacheInput() {
    return this._fullUrlCache;
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

  // ipv6_access_switch - computed: false, optional: true, required: false
  private _ipv6AccessSwitch?: string; 
  public get ipv6AccessSwitch() {
    return this.getStringAttribute('ipv6_access_switch');
  }
  public set ipv6AccessSwitch(value: string) {
    this._ipv6AccessSwitch = value;
  }
  public resetIpv6AccessSwitch() {
    this._ipv6AccessSwitch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6AccessSwitchInput() {
    return this._ipv6AccessSwitch;
  }

  // offline_cache_switch - computed: false, optional: true, required: false
  private _offlineCacheSwitch?: string; 
  public get offlineCacheSwitch() {
    return this.getStringAttribute('offline_cache_switch');
  }
  public set offlineCacheSwitch(value: string) {
    this._offlineCacheSwitch = value;
  }
  public resetOfflineCacheSwitch() {
    this._offlineCacheSwitch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get offlineCacheSwitchInput() {
    return this._offlineCacheSwitch;
  }

  // project_id - computed: false, optional: true, required: false
  private _projectId?: number; 
  public get projectId() {
    return this.getNumberAttribute('project_id');
  }
  public set projectId(value: number) {
    this._projectId = value;
  }
  public resetProjectId() {
    this._projectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // quic_switch - computed: false, optional: true, required: false
  private _quicSwitch?: string; 
  public get quicSwitch() {
    return this.getStringAttribute('quic_switch');
  }
  public set quicSwitch(value: string) {
    this._quicSwitch = value;
  }
  public resetQuicSwitch() {
    this._quicSwitch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get quicSwitchInput() {
    return this._quicSwitch;
  }

  // range_origin_switch - computed: false, optional: true, required: false
  private _rangeOriginSwitch?: string; 
  public get rangeOriginSwitch() {
    return this.getStringAttribute('range_origin_switch');
  }
  public set rangeOriginSwitch(value: string) {
    this._rangeOriginSwitch = value;
  }
  public resetRangeOriginSwitch() {
    this._rangeOriginSwitch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rangeOriginSwitchInput() {
    return this._rangeOriginSwitch;
  }

  // response_header_cache_switch - computed: false, optional: true, required: false
  private _responseHeaderCacheSwitch?: string; 
  public get responseHeaderCacheSwitch() {
    return this.getStringAttribute('response_header_cache_switch');
  }
  public set responseHeaderCacheSwitch(value: string) {
    this._responseHeaderCacheSwitch = value;
  }
  public resetResponseHeaderCacheSwitch() {
    this._responseHeaderCacheSwitch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseHeaderCacheSwitchInput() {
    return this._responseHeaderCacheSwitch;
  }

  // seo_switch - computed: false, optional: true, required: false
  private _seoSwitch?: string; 
  public get seoSwitch() {
    return this.getStringAttribute('seo_switch');
  }
  public set seoSwitch(value: string) {
    this._seoSwitch = value;
  }
  public resetSeoSwitch() {
    this._seoSwitch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seoSwitchInput() {
    return this._seoSwitch;
  }

  // service_type - computed: false, optional: false, required: true
  private _serviceType?: string; 
  public get serviceType() {
    return this.getStringAttribute('service_type');
  }
  public set serviceType(value: string) {
    this._serviceType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceTypeInput() {
    return this._serviceType;
  }

  // specific_config_mainland - computed: false, optional: true, required: false
  private _specificConfigMainland?: string; 
  public get specificConfigMainland() {
    return this.getStringAttribute('specific_config_mainland');
  }
  public set specificConfigMainland(value: string) {
    this._specificConfigMainland = value;
  }
  public resetSpecificConfigMainland() {
    this._specificConfigMainland = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get specificConfigMainlandInput() {
    return this._specificConfigMainland;
  }

  // specific_config_overseas - computed: false, optional: true, required: false
  private _specificConfigOverseas?: string; 
  public get specificConfigOverseas() {
    return this.getStringAttribute('specific_config_overseas');
  }
  public set specificConfigOverseas(value: string) {
    this._specificConfigOverseas = value;
  }
  public resetSpecificConfigOverseas() {
    this._specificConfigOverseas = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get specificConfigOverseasInput() {
    return this._specificConfigOverseas;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // video_seek_switch - computed: false, optional: true, required: false
  private _videoSeekSwitch?: string; 
  public get videoSeekSwitch() {
    return this.getStringAttribute('video_seek_switch');
  }
  public set videoSeekSwitch(value: string) {
    this._videoSeekSwitch = value;
  }
  public resetVideoSeekSwitch() {
    this._videoSeekSwitch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get videoSeekSwitchInput() {
    return this._videoSeekSwitch;
  }

  // authentication - computed: false, optional: true, required: false
  private _authentication = new CdnDomainAuthenticationOutputReference(this, "authentication");
  public get authentication() {
    return this._authentication;
  }
  public putAuthentication(value: CdnDomainAuthentication) {
    this._authentication.internalValue = value;
  }
  public resetAuthentication() {
    this._authentication.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationInput() {
    return this._authentication.internalValue;
  }

  // aws_private_access - computed: false, optional: true, required: false
  private _awsPrivateAccess = new CdnDomainAwsPrivateAccessOutputReference(this, "aws_private_access");
  public get awsPrivateAccess() {
    return this._awsPrivateAccess;
  }
  public putAwsPrivateAccess(value: CdnDomainAwsPrivateAccess) {
    this._awsPrivateAccess.internalValue = value;
  }
  public resetAwsPrivateAccess() {
    this._awsPrivateAccess.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsPrivateAccessInput() {
    return this._awsPrivateAccess.internalValue;
  }

  // band_width_alert - computed: false, optional: true, required: false
  private _bandWidthAlert = new CdnDomainBandWidthAlertOutputReference(this, "band_width_alert");
  public get bandWidthAlert() {
    return this._bandWidthAlert;
  }
  public putBandWidthAlert(value: CdnDomainBandWidthAlert) {
    this._bandWidthAlert.internalValue = value;
  }
  public resetBandWidthAlert() {
    this._bandWidthAlert.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bandWidthAlertInput() {
    return this._bandWidthAlert.internalValue;
  }

  // cache_key - computed: false, optional: true, required: false
  private _cacheKey = new CdnDomainCacheKeyOutputReference(this, "cache_key");
  public get cacheKey() {
    return this._cacheKey;
  }
  public putCacheKey(value: CdnDomainCacheKey) {
    this._cacheKey.internalValue = value;
  }
  public resetCacheKey() {
    this._cacheKey.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheKeyInput() {
    return this._cacheKey.internalValue;
  }

  // compression - computed: false, optional: true, required: false
  private _compression = new CdnDomainCompressionOutputReference(this, "compression");
  public get compression() {
    return this._compression;
  }
  public putCompression(value: CdnDomainCompression) {
    this._compression.internalValue = value;
  }
  public resetCompression() {
    this._compression.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compressionInput() {
    return this._compression.internalValue;
  }

  // downstream_capping - computed: false, optional: true, required: false
  private _downstreamCapping = new CdnDomainDownstreamCappingOutputReference(this, "downstream_capping");
  public get downstreamCapping() {
    return this._downstreamCapping;
  }
  public putDownstreamCapping(value: CdnDomainDownstreamCapping) {
    this._downstreamCapping.internalValue = value;
  }
  public resetDownstreamCapping() {
    this._downstreamCapping.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get downstreamCappingInput() {
    return this._downstreamCapping.internalValue;
  }

  // error_page - computed: false, optional: true, required: false
  private _errorPage = new CdnDomainErrorPageOutputReference(this, "error_page");
  public get errorPage() {
    return this._errorPage;
  }
  public putErrorPage(value: CdnDomainErrorPage) {
    this._errorPage.internalValue = value;
  }
  public resetErrorPage() {
    this._errorPage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorPageInput() {
    return this._errorPage.internalValue;
  }

  // https_config - computed: false, optional: true, required: false
  private _httpsConfig = new CdnDomainHttpsConfigOutputReference(this, "https_config");
  public get httpsConfig() {
    return this._httpsConfig;
  }
  public putHttpsConfig(value: CdnDomainHttpsConfig) {
    this._httpsConfig.internalValue = value;
  }
  public resetHttpsConfig() {
    this._httpsConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpsConfigInput() {
    return this._httpsConfig.internalValue;
  }

  // hw_private_access - computed: false, optional: true, required: false
  private _hwPrivateAccess = new CdnDomainHwPrivateAccessOutputReference(this, "hw_private_access");
  public get hwPrivateAccess() {
    return this._hwPrivateAccess;
  }
  public putHwPrivateAccess(value: CdnDomainHwPrivateAccess) {
    this._hwPrivateAccess.internalValue = value;
  }
  public resetHwPrivateAccess() {
    this._hwPrivateAccess.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hwPrivateAccessInput() {
    return this._hwPrivateAccess.internalValue;
  }

  // ip_filter - computed: false, optional: true, required: false
  private _ipFilter = new CdnDomainIpFilterOutputReference(this, "ip_filter");
  public get ipFilter() {
    return this._ipFilter;
  }
  public putIpFilter(value: CdnDomainIpFilter) {
    this._ipFilter.internalValue = value;
  }
  public resetIpFilter() {
    this._ipFilter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipFilterInput() {
    return this._ipFilter.internalValue;
  }

  // ip_freq_limit - computed: false, optional: true, required: false
  private _ipFreqLimit = new CdnDomainIpFreqLimitOutputReference(this, "ip_freq_limit");
  public get ipFreqLimit() {
    return this._ipFreqLimit;
  }
  public putIpFreqLimit(value: CdnDomainIpFreqLimit) {
    this._ipFreqLimit.internalValue = value;
  }
  public resetIpFreqLimit() {
    this._ipFreqLimit.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipFreqLimitInput() {
    return this._ipFreqLimit.internalValue;
  }

  // max_age - computed: false, optional: true, required: false
  private _maxAge = new CdnDomainMaxAgeOutputReference(this, "max_age");
  public get maxAge() {
    return this._maxAge;
  }
  public putMaxAge(value: CdnDomainMaxAge) {
    this._maxAge.internalValue = value;
  }
  public resetMaxAge() {
    this._maxAge.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxAgeInput() {
    return this._maxAge.internalValue;
  }

  // origin - computed: false, optional: false, required: true
  private _origin = new CdnDomainOriginOutputReference(this, "origin");
  public get origin() {
    return this._origin;
  }
  public putOrigin(value: CdnDomainOrigin) {
    this._origin.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get originInput() {
    return this._origin.internalValue;
  }

  // origin_pull_optimization - computed: false, optional: true, required: false
  private _originPullOptimization = new CdnDomainOriginPullOptimizationOutputReference(this, "origin_pull_optimization");
  public get originPullOptimization() {
    return this._originPullOptimization;
  }
  public putOriginPullOptimization(value: CdnDomainOriginPullOptimization) {
    this._originPullOptimization.internalValue = value;
  }
  public resetOriginPullOptimization() {
    this._originPullOptimization.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get originPullOptimizationInput() {
    return this._originPullOptimization.internalValue;
  }

  // origin_pull_timeout - computed: false, optional: true, required: false
  private _originPullTimeout = new CdnDomainOriginPullTimeoutOutputReference(this, "origin_pull_timeout");
  public get originPullTimeout() {
    return this._originPullTimeout;
  }
  public putOriginPullTimeout(value: CdnDomainOriginPullTimeout) {
    this._originPullTimeout.internalValue = value;
  }
  public resetOriginPullTimeout() {
    this._originPullTimeout.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get originPullTimeoutInput() {
    return this._originPullTimeout.internalValue;
  }

  // oss_private_access - computed: false, optional: true, required: false
  private _ossPrivateAccess = new CdnDomainOssPrivateAccessOutputReference(this, "oss_private_access");
  public get ossPrivateAccess() {
    return this._ossPrivateAccess;
  }
  public putOssPrivateAccess(value: CdnDomainOssPrivateAccess) {
    this._ossPrivateAccess.internalValue = value;
  }
  public resetOssPrivateAccess() {
    this._ossPrivateAccess.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ossPrivateAccessInput() {
    return this._ossPrivateAccess.internalValue;
  }

  // others_private_access - computed: false, optional: true, required: false
  private _othersPrivateAccess = new CdnDomainOthersPrivateAccessOutputReference(this, "others_private_access");
  public get othersPrivateAccess() {
    return this._othersPrivateAccess;
  }
  public putOthersPrivateAccess(value: CdnDomainOthersPrivateAccess) {
    this._othersPrivateAccess.internalValue = value;
  }
  public resetOthersPrivateAccess() {
    this._othersPrivateAccess.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get othersPrivateAccessInput() {
    return this._othersPrivateAccess.internalValue;
  }

  // post_max_size - computed: false, optional: true, required: false
  private _postMaxSize = new CdnDomainPostMaxSizeList(this, "post_max_size", false);
  public get postMaxSize() {
    return this._postMaxSize;
  }
  public putPostMaxSize(value: CdnDomainPostMaxSize[] | cdktf.IResolvable) {
    this._postMaxSize.internalValue = value;
  }
  public resetPostMaxSize() {
    this._postMaxSize.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get postMaxSizeInput() {
    return this._postMaxSize.internalValue;
  }

  // qn_private_access - computed: false, optional: true, required: false
  private _qnPrivateAccess = new CdnDomainQnPrivateAccessOutputReference(this, "qn_private_access");
  public get qnPrivateAccess() {
    return this._qnPrivateAccess;
  }
  public putQnPrivateAccess(value: CdnDomainQnPrivateAccess) {
    this._qnPrivateAccess.internalValue = value;
  }
  public resetQnPrivateAccess() {
    this._qnPrivateAccess.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get qnPrivateAccessInput() {
    return this._qnPrivateAccess.internalValue;
  }

  // referer - computed: false, optional: true, required: false
  private _referer = new CdnDomainRefererOutputReference(this, "referer");
  public get referer() {
    return this._referer;
  }
  public putReferer(value: CdnDomainReferer) {
    this._referer.internalValue = value;
  }
  public resetReferer() {
    this._referer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refererInput() {
    return this._referer.internalValue;
  }

  // request_header - computed: false, optional: true, required: false
  private _requestHeader = new CdnDomainRequestHeaderOutputReference(this, "request_header");
  public get requestHeader() {
    return this._requestHeader;
  }
  public putRequestHeader(value: CdnDomainRequestHeader) {
    this._requestHeader.internalValue = value;
  }
  public resetRequestHeader() {
    this._requestHeader.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestHeaderInput() {
    return this._requestHeader.internalValue;
  }

  // response_header - computed: false, optional: true, required: false
  private _responseHeader = new CdnDomainResponseHeaderOutputReference(this, "response_header");
  public get responseHeader() {
    return this._responseHeader;
  }
  public putResponseHeader(value: CdnDomainResponseHeader) {
    this._responseHeader.internalValue = value;
  }
  public resetResponseHeader() {
    this._responseHeader.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseHeaderInput() {
    return this._responseHeader.internalValue;
  }

  // rule_cache - computed: false, optional: true, required: false
  private _ruleCache = new CdnDomainRuleCacheList(this, "rule_cache", false);
  public get ruleCache() {
    return this._ruleCache;
  }
  public putRuleCache(value: CdnDomainRuleCache[] | cdktf.IResolvable) {
    this._ruleCache.internalValue = value;
  }
  public resetRuleCache() {
    this._ruleCache.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleCacheInput() {
    return this._ruleCache.internalValue;
  }

  // status_code_cache - computed: false, optional: true, required: false
  private _statusCodeCache = new CdnDomainStatusCodeCacheOutputReference(this, "status_code_cache");
  public get statusCodeCache() {
    return this._statusCodeCache;
  }
  public putStatusCodeCache(value: CdnDomainStatusCodeCache) {
    this._statusCodeCache.internalValue = value;
  }
  public resetStatusCodeCache() {
    this._statusCodeCache.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusCodeCacheInput() {
    return this._statusCodeCache.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      area: cdktf.stringToTerraform(this._area),
      domain: cdktf.stringToTerraform(this._domain),
      explicit_using_dry_run: cdktf.booleanToTerraform(this._explicitUsingDryRun),
      follow_redirect_switch: cdktf.stringToTerraform(this._followRedirectSwitch),
      full_url_cache: cdktf.booleanToTerraform(this._fullUrlCache),
      id: cdktf.stringToTerraform(this._id),
      ipv6_access_switch: cdktf.stringToTerraform(this._ipv6AccessSwitch),
      offline_cache_switch: cdktf.stringToTerraform(this._offlineCacheSwitch),
      project_id: cdktf.numberToTerraform(this._projectId),
      quic_switch: cdktf.stringToTerraform(this._quicSwitch),
      range_origin_switch: cdktf.stringToTerraform(this._rangeOriginSwitch),
      response_header_cache_switch: cdktf.stringToTerraform(this._responseHeaderCacheSwitch),
      seo_switch: cdktf.stringToTerraform(this._seoSwitch),
      service_type: cdktf.stringToTerraform(this._serviceType),
      specific_config_mainland: cdktf.stringToTerraform(this._specificConfigMainland),
      specific_config_overseas: cdktf.stringToTerraform(this._specificConfigOverseas),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      video_seek_switch: cdktf.stringToTerraform(this._videoSeekSwitch),
      authentication: cdnDomainAuthenticationToTerraform(this._authentication.internalValue),
      aws_private_access: cdnDomainAwsPrivateAccessToTerraform(this._awsPrivateAccess.internalValue),
      band_width_alert: cdnDomainBandWidthAlertToTerraform(this._bandWidthAlert.internalValue),
      cache_key: cdnDomainCacheKeyToTerraform(this._cacheKey.internalValue),
      compression: cdnDomainCompressionToTerraform(this._compression.internalValue),
      downstream_capping: cdnDomainDownstreamCappingToTerraform(this._downstreamCapping.internalValue),
      error_page: cdnDomainErrorPageToTerraform(this._errorPage.internalValue),
      https_config: cdnDomainHttpsConfigToTerraform(this._httpsConfig.internalValue),
      hw_private_access: cdnDomainHwPrivateAccessToTerraform(this._hwPrivateAccess.internalValue),
      ip_filter: cdnDomainIpFilterToTerraform(this._ipFilter.internalValue),
      ip_freq_limit: cdnDomainIpFreqLimitToTerraform(this._ipFreqLimit.internalValue),
      max_age: cdnDomainMaxAgeToTerraform(this._maxAge.internalValue),
      origin: cdnDomainOriginToTerraform(this._origin.internalValue),
      origin_pull_optimization: cdnDomainOriginPullOptimizationToTerraform(this._originPullOptimization.internalValue),
      origin_pull_timeout: cdnDomainOriginPullTimeoutToTerraform(this._originPullTimeout.internalValue),
      oss_private_access: cdnDomainOssPrivateAccessToTerraform(this._ossPrivateAccess.internalValue),
      others_private_access: cdnDomainOthersPrivateAccessToTerraform(this._othersPrivateAccess.internalValue),
      post_max_size: cdktf.listMapper(cdnDomainPostMaxSizeToTerraform, true)(this._postMaxSize.internalValue),
      qn_private_access: cdnDomainQnPrivateAccessToTerraform(this._qnPrivateAccess.internalValue),
      referer: cdnDomainRefererToTerraform(this._referer.internalValue),
      request_header: cdnDomainRequestHeaderToTerraform(this._requestHeader.internalValue),
      response_header: cdnDomainResponseHeaderToTerraform(this._responseHeader.internalValue),
      rule_cache: cdktf.listMapper(cdnDomainRuleCacheToTerraform, true)(this._ruleCache.internalValue),
      status_code_cache: cdnDomainStatusCodeCacheToTerraform(this._statusCodeCache.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      area: {
        value: cdktf.stringToHclTerraform(this._area),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      domain: {
        value: cdktf.stringToHclTerraform(this._domain),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      explicit_using_dry_run: {
        value: cdktf.booleanToHclTerraform(this._explicitUsingDryRun),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      follow_redirect_switch: {
        value: cdktf.stringToHclTerraform(this._followRedirectSwitch),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      full_url_cache: {
        value: cdktf.booleanToHclTerraform(this._fullUrlCache),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv6_access_switch: {
        value: cdktf.stringToHclTerraform(this._ipv6AccessSwitch),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      offline_cache_switch: {
        value: cdktf.stringToHclTerraform(this._offlineCacheSwitch),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project_id: {
        value: cdktf.numberToHclTerraform(this._projectId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      quic_switch: {
        value: cdktf.stringToHclTerraform(this._quicSwitch),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      range_origin_switch: {
        value: cdktf.stringToHclTerraform(this._rangeOriginSwitch),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      response_header_cache_switch: {
        value: cdktf.stringToHclTerraform(this._responseHeaderCacheSwitch),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      seo_switch: {
        value: cdktf.stringToHclTerraform(this._seoSwitch),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_type: {
        value: cdktf.stringToHclTerraform(this._serviceType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      specific_config_mainland: {
        value: cdktf.stringToHclTerraform(this._specificConfigMainland),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      specific_config_overseas: {
        value: cdktf.stringToHclTerraform(this._specificConfigOverseas),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      video_seek_switch: {
        value: cdktf.stringToHclTerraform(this._videoSeekSwitch),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      authentication: {
        value: cdnDomainAuthenticationToHclTerraform(this._authentication.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CdnDomainAuthenticationList",
      },
      aws_private_access: {
        value: cdnDomainAwsPrivateAccessToHclTerraform(this._awsPrivateAccess.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CdnDomainAwsPrivateAccessList",
      },
      band_width_alert: {
        value: cdnDomainBandWidthAlertToHclTerraform(this._bandWidthAlert.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CdnDomainBandWidthAlertList",
      },
      cache_key: {
        value: cdnDomainCacheKeyToHclTerraform(this._cacheKey.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CdnDomainCacheKeyList",
      },
      compression: {
        value: cdnDomainCompressionToHclTerraform(this._compression.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CdnDomainCompressionList",
      },
      downstream_capping: {
        value: cdnDomainDownstreamCappingToHclTerraform(this._downstreamCapping.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CdnDomainDownstreamCappingList",
      },
      error_page: {
        value: cdnDomainErrorPageToHclTerraform(this._errorPage.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CdnDomainErrorPageList",
      },
      https_config: {
        value: cdnDomainHttpsConfigToHclTerraform(this._httpsConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CdnDomainHttpsConfigList",
      },
      hw_private_access: {
        value: cdnDomainHwPrivateAccessToHclTerraform(this._hwPrivateAccess.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CdnDomainHwPrivateAccessList",
      },
      ip_filter: {
        value: cdnDomainIpFilterToHclTerraform(this._ipFilter.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CdnDomainIpFilterList",
      },
      ip_freq_limit: {
        value: cdnDomainIpFreqLimitToHclTerraform(this._ipFreqLimit.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CdnDomainIpFreqLimitList",
      },
      max_age: {
        value: cdnDomainMaxAgeToHclTerraform(this._maxAge.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CdnDomainMaxAgeList",
      },
      origin: {
        value: cdnDomainOriginToHclTerraform(this._origin.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CdnDomainOriginList",
      },
      origin_pull_optimization: {
        value: cdnDomainOriginPullOptimizationToHclTerraform(this._originPullOptimization.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CdnDomainOriginPullOptimizationList",
      },
      origin_pull_timeout: {
        value: cdnDomainOriginPullTimeoutToHclTerraform(this._originPullTimeout.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CdnDomainOriginPullTimeoutList",
      },
      oss_private_access: {
        value: cdnDomainOssPrivateAccessToHclTerraform(this._ossPrivateAccess.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CdnDomainOssPrivateAccessList",
      },
      others_private_access: {
        value: cdnDomainOthersPrivateAccessToHclTerraform(this._othersPrivateAccess.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CdnDomainOthersPrivateAccessList",
      },
      post_max_size: {
        value: cdktf.listMapperHcl(cdnDomainPostMaxSizeToHclTerraform, true)(this._postMaxSize.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CdnDomainPostMaxSizeList",
      },
      qn_private_access: {
        value: cdnDomainQnPrivateAccessToHclTerraform(this._qnPrivateAccess.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CdnDomainQnPrivateAccessList",
      },
      referer: {
        value: cdnDomainRefererToHclTerraform(this._referer.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CdnDomainRefererList",
      },
      request_header: {
        value: cdnDomainRequestHeaderToHclTerraform(this._requestHeader.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CdnDomainRequestHeaderList",
      },
      response_header: {
        value: cdnDomainResponseHeaderToHclTerraform(this._responseHeader.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CdnDomainResponseHeaderList",
      },
      rule_cache: {
        value: cdktf.listMapperHcl(cdnDomainRuleCacheToHclTerraform, true)(this._ruleCache.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CdnDomainRuleCacheList",
      },
      status_code_cache: {
        value: cdnDomainStatusCodeCacheToHclTerraform(this._statusCodeCache.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CdnDomainStatusCodeCacheList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
