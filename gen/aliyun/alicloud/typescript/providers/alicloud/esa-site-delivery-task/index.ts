// https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/esa_site_delivery_task
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EsaSiteDeliveryTaskConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/esa_site_delivery_task#business_type EsaSiteDeliveryTask#business_type}
  */
  readonly businessType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/esa_site_delivery_task#data_center EsaSiteDeliveryTask#data_center}
  */
  readonly dataCenter: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/esa_site_delivery_task#delivery_type EsaSiteDeliveryTask#delivery_type}
  */
  readonly deliveryType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/esa_site_delivery_task#discard_rate EsaSiteDeliveryTask#discard_rate}
  */
  readonly discardRate?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/esa_site_delivery_task#field_name EsaSiteDeliveryTask#field_name}
  */
  readonly fieldName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/esa_site_delivery_task#id EsaSiteDeliveryTask#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/esa_site_delivery_task#site_id EsaSiteDeliveryTask#site_id}
  */
  readonly siteId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/esa_site_delivery_task#status EsaSiteDeliveryTask#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/esa_site_delivery_task#task_name EsaSiteDeliveryTask#task_name}
  */
  readonly taskName: string;
  /**
  * http_delivery block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/esa_site_delivery_task#http_delivery EsaSiteDeliveryTask#http_delivery}
  */
  readonly httpDelivery?: EsaSiteDeliveryTaskHttpDelivery;
  /**
  * kafka_delivery block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/esa_site_delivery_task#kafka_delivery EsaSiteDeliveryTask#kafka_delivery}
  */
  readonly kafkaDelivery?: EsaSiteDeliveryTaskKafkaDelivery;
  /**
  * oss_delivery block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/esa_site_delivery_task#oss_delivery EsaSiteDeliveryTask#oss_delivery}
  */
  readonly ossDelivery?: EsaSiteDeliveryTaskOssDelivery;
  /**
  * s3_delivery block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/esa_site_delivery_task#s3_delivery EsaSiteDeliveryTask#s3_delivery}
  */
  readonly s3Delivery?: EsaSiteDeliveryTaskS3Delivery;
  /**
  * sls_delivery block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/esa_site_delivery_task#sls_delivery EsaSiteDeliveryTask#sls_delivery}
  */
  readonly slsDelivery?: EsaSiteDeliveryTaskSlsDelivery;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/esa_site_delivery_task#timeouts EsaSiteDeliveryTask#timeouts}
  */
  readonly timeouts?: EsaSiteDeliveryTaskTimeouts;
}
export interface EsaSiteDeliveryTaskHttpDeliveryStandardAuthParam {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/esa_site_delivery_task#expired_time EsaSiteDeliveryTask#expired_time}
  */
  readonly expiredTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/esa_site_delivery_task#private_key EsaSiteDeliveryTask#private_key}
  */
  readonly privateKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/esa_site_delivery_task#url_path EsaSiteDeliveryTask#url_path}
  */
  readonly urlPath?: string;
}

export function esaSiteDeliveryTaskHttpDeliveryStandardAuthParamToTerraform(struct?: EsaSiteDeliveryTaskHttpDeliveryStandardAuthParamOutputReference | EsaSiteDeliveryTaskHttpDeliveryStandardAuthParam): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    expired_time: cdktf.numberToTerraform(struct!.expiredTime),
    private_key: cdktf.stringToTerraform(struct!.privateKey),
    url_path: cdktf.stringToTerraform(struct!.urlPath),
  }
}


export function esaSiteDeliveryTaskHttpDeliveryStandardAuthParamToHclTerraform(struct?: EsaSiteDeliveryTaskHttpDeliveryStandardAuthParamOutputReference | EsaSiteDeliveryTaskHttpDeliveryStandardAuthParam): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    expired_time: {
      value: cdktf.numberToHclTerraform(struct!.expiredTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    private_key: {
      value: cdktf.stringToHclTerraform(struct!.privateKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    url_path: {
      value: cdktf.stringToHclTerraform(struct!.urlPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EsaSiteDeliveryTaskHttpDeliveryStandardAuthParamOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EsaSiteDeliveryTaskHttpDeliveryStandardAuthParam | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._expiredTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.expiredTime = this._expiredTime;
    }
    if (this._privateKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateKey = this._privateKey;
    }
    if (this._urlPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.urlPath = this._urlPath;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EsaSiteDeliveryTaskHttpDeliveryStandardAuthParam | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._expiredTime = undefined;
      this._privateKey = undefined;
      this._urlPath = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._expiredTime = value.expiredTime;
      this._privateKey = value.privateKey;
      this._urlPath = value.urlPath;
    }
  }

  // expired_time - computed: false, optional: true, required: false
  private _expiredTime?: number; 
  public get expiredTime() {
    return this.getNumberAttribute('expired_time');
  }
  public set expiredTime(value: number) {
    this._expiredTime = value;
  }
  public resetExpiredTime() {
    this._expiredTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expiredTimeInput() {
    return this._expiredTime;
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

  // url_path - computed: false, optional: true, required: false
  private _urlPath?: string; 
  public get urlPath() {
    return this.getStringAttribute('url_path');
  }
  public set urlPath(value: string) {
    this._urlPath = value;
  }
  public resetUrlPath() {
    this._urlPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlPathInput() {
    return this._urlPath;
  }
}
export interface EsaSiteDeliveryTaskHttpDelivery {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/esa_site_delivery_task#compress EsaSiteDeliveryTask#compress}
  */
  readonly compress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/esa_site_delivery_task#dest_url EsaSiteDeliveryTask#dest_url}
  */
  readonly destUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/esa_site_delivery_task#header_param EsaSiteDeliveryTask#header_param}
  */
  readonly headerParam?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/esa_site_delivery_task#log_body_prefix EsaSiteDeliveryTask#log_body_prefix}
  */
  readonly logBodyPrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/esa_site_delivery_task#log_body_suffix EsaSiteDeliveryTask#log_body_suffix}
  */
  readonly logBodySuffix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/esa_site_delivery_task#max_batch_mb EsaSiteDeliveryTask#max_batch_mb}
  */
  readonly maxBatchMb?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/esa_site_delivery_task#max_batch_size EsaSiteDeliveryTask#max_batch_size}
  */
  readonly maxBatchSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/esa_site_delivery_task#max_retry EsaSiteDeliveryTask#max_retry}
  */
  readonly maxRetry?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/esa_site_delivery_task#query_param EsaSiteDeliveryTask#query_param}
  */
  readonly queryParam?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/esa_site_delivery_task#standard_auth_on EsaSiteDeliveryTask#standard_auth_on}
  */
  readonly standardAuthOn?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/esa_site_delivery_task#transform_timeout EsaSiteDeliveryTask#transform_timeout}
  */
  readonly transformTimeout?: number;
  /**
  * standard_auth_param block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/esa_site_delivery_task#standard_auth_param EsaSiteDeliveryTask#standard_auth_param}
  */
  readonly standardAuthParam?: EsaSiteDeliveryTaskHttpDeliveryStandardAuthParam;
}

export function esaSiteDeliveryTaskHttpDeliveryToTerraform(struct?: EsaSiteDeliveryTaskHttpDeliveryOutputReference | EsaSiteDeliveryTaskHttpDelivery): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    compress: cdktf.stringToTerraform(struct!.compress),
    dest_url: cdktf.stringToTerraform(struct!.destUrl),
    header_param: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.headerParam),
    log_body_prefix: cdktf.stringToTerraform(struct!.logBodyPrefix),
    log_body_suffix: cdktf.stringToTerraform(struct!.logBodySuffix),
    max_batch_mb: cdktf.numberToTerraform(struct!.maxBatchMb),
    max_batch_size: cdktf.numberToTerraform(struct!.maxBatchSize),
    max_retry: cdktf.numberToTerraform(struct!.maxRetry),
    query_param: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.queryParam),
    standard_auth_on: cdktf.booleanToTerraform(struct!.standardAuthOn),
    transform_timeout: cdktf.numberToTerraform(struct!.transformTimeout),
    standard_auth_param: esaSiteDeliveryTaskHttpDeliveryStandardAuthParamToTerraform(struct!.standardAuthParam),
  }
}


export function esaSiteDeliveryTaskHttpDeliveryToHclTerraform(struct?: EsaSiteDeliveryTaskHttpDeliveryOutputReference | EsaSiteDeliveryTaskHttpDelivery): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    compress: {
      value: cdktf.stringToHclTerraform(struct!.compress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dest_url: {
      value: cdktf.stringToHclTerraform(struct!.destUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    header_param: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.headerParam),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    log_body_prefix: {
      value: cdktf.stringToHclTerraform(struct!.logBodyPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    log_body_suffix: {
      value: cdktf.stringToHclTerraform(struct!.logBodySuffix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_batch_mb: {
      value: cdktf.numberToHclTerraform(struct!.maxBatchMb),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_batch_size: {
      value: cdktf.numberToHclTerraform(struct!.maxBatchSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_retry: {
      value: cdktf.numberToHclTerraform(struct!.maxRetry),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    query_param: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.queryParam),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    standard_auth_on: {
      value: cdktf.booleanToHclTerraform(struct!.standardAuthOn),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    transform_timeout: {
      value: cdktf.numberToHclTerraform(struct!.transformTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    standard_auth_param: {
      value: esaSiteDeliveryTaskHttpDeliveryStandardAuthParamToHclTerraform(struct!.standardAuthParam),
      isBlock: true,
      type: "list",
      storageClassType: "EsaSiteDeliveryTaskHttpDeliveryStandardAuthParamList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EsaSiteDeliveryTaskHttpDeliveryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EsaSiteDeliveryTaskHttpDelivery | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._compress !== undefined) {
      hasAnyValues = true;
      internalValueResult.compress = this._compress;
    }
    if (this._destUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.destUrl = this._destUrl;
    }
    if (this._headerParam !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerParam = this._headerParam;
    }
    if (this._logBodyPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.logBodyPrefix = this._logBodyPrefix;
    }
    if (this._logBodySuffix !== undefined) {
      hasAnyValues = true;
      internalValueResult.logBodySuffix = this._logBodySuffix;
    }
    if (this._maxBatchMb !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxBatchMb = this._maxBatchMb;
    }
    if (this._maxBatchSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxBatchSize = this._maxBatchSize;
    }
    if (this._maxRetry !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxRetry = this._maxRetry;
    }
    if (this._queryParam !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryParam = this._queryParam;
    }
    if (this._standardAuthOn !== undefined) {
      hasAnyValues = true;
      internalValueResult.standardAuthOn = this._standardAuthOn;
    }
    if (this._transformTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.transformTimeout = this._transformTimeout;
    }
    if (this._standardAuthParam?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.standardAuthParam = this._standardAuthParam?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EsaSiteDeliveryTaskHttpDelivery | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._compress = undefined;
      this._destUrl = undefined;
      this._headerParam = undefined;
      this._logBodyPrefix = undefined;
      this._logBodySuffix = undefined;
      this._maxBatchMb = undefined;
      this._maxBatchSize = undefined;
      this._maxRetry = undefined;
      this._queryParam = undefined;
      this._standardAuthOn = undefined;
      this._transformTimeout = undefined;
      this._standardAuthParam.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._compress = value.compress;
      this._destUrl = value.destUrl;
      this._headerParam = value.headerParam;
      this._logBodyPrefix = value.logBodyPrefix;
      this._logBodySuffix = value.logBodySuffix;
      this._maxBatchMb = value.maxBatchMb;
      this._maxBatchSize = value.maxBatchSize;
      this._maxRetry = value.maxRetry;
      this._queryParam = value.queryParam;
      this._standardAuthOn = value.standardAuthOn;
      this._transformTimeout = value.transformTimeout;
      this._standardAuthParam.internalValue = value.standardAuthParam;
    }
  }

  // compress - computed: false, optional: true, required: false
  private _compress?: string; 
  public get compress() {
    return this.getStringAttribute('compress');
  }
  public set compress(value: string) {
    this._compress = value;
  }
  public resetCompress() {
    this._compress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compressInput() {
    return this._compress;
  }

  // dest_url - computed: false, optional: true, required: false
  private _destUrl?: string; 
  public get destUrl() {
    return this.getStringAttribute('dest_url');
  }
  public set destUrl(value: string) {
    this._destUrl = value;
  }
  public resetDestUrl() {
    this._destUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destUrlInput() {
    return this._destUrl;
  }

  // header_param - computed: false, optional: true, required: false
  private _headerParam?: { [key: string]: string }; 
  public get headerParam() {
    return this.getStringMapAttribute('header_param');
  }
  public set headerParam(value: { [key: string]: string }) {
    this._headerParam = value;
  }
  public resetHeaderParam() {
    this._headerParam = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerParamInput() {
    return this._headerParam;
  }

  // log_body_prefix - computed: false, optional: true, required: false
  private _logBodyPrefix?: string; 
  public get logBodyPrefix() {
    return this.getStringAttribute('log_body_prefix');
  }
  public set logBodyPrefix(value: string) {
    this._logBodyPrefix = value;
  }
  public resetLogBodyPrefix() {
    this._logBodyPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logBodyPrefixInput() {
    return this._logBodyPrefix;
  }

  // log_body_suffix - computed: false, optional: true, required: false
  private _logBodySuffix?: string; 
  public get logBodySuffix() {
    return this.getStringAttribute('log_body_suffix');
  }
  public set logBodySuffix(value: string) {
    this._logBodySuffix = value;
  }
  public resetLogBodySuffix() {
    this._logBodySuffix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logBodySuffixInput() {
    return this._logBodySuffix;
  }

  // max_batch_mb - computed: false, optional: true, required: false
  private _maxBatchMb?: number; 
  public get maxBatchMb() {
    return this.getNumberAttribute('max_batch_mb');
  }
  public set maxBatchMb(value: number) {
    this._maxBatchMb = value;
  }
  public resetMaxBatchMb() {
    this._maxBatchMb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxBatchMbInput() {
    return this._maxBatchMb;
  }

  // max_batch_size - computed: false, optional: true, required: false
  private _maxBatchSize?: number; 
  public get maxBatchSize() {
    return this.getNumberAttribute('max_batch_size');
  }
  public set maxBatchSize(value: number) {
    this._maxBatchSize = value;
  }
  public resetMaxBatchSize() {
    this._maxBatchSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxBatchSizeInput() {
    return this._maxBatchSize;
  }

  // max_retry - computed: false, optional: true, required: false
  private _maxRetry?: number; 
  public get maxRetry() {
    return this.getNumberAttribute('max_retry');
  }
  public set maxRetry(value: number) {
    this._maxRetry = value;
  }
  public resetMaxRetry() {
    this._maxRetry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxRetryInput() {
    return this._maxRetry;
  }

  // query_param - computed: false, optional: true, required: false
  private _queryParam?: { [key: string]: string }; 
  public get queryParam() {
    return this.getStringMapAttribute('query_param');
  }
  public set queryParam(value: { [key: string]: string }) {
    this._queryParam = value;
  }
  public resetQueryParam() {
    this._queryParam = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryParamInput() {
    return this._queryParam;
  }

  // standard_auth_on - computed: false, optional: true, required: false
  private _standardAuthOn?: boolean | cdktf.IResolvable; 
  public get standardAuthOn() {
    return this.getBooleanAttribute('standard_auth_on');
  }
  public set standardAuthOn(value: boolean | cdktf.IResolvable) {
    this._standardAuthOn = value;
  }
  public resetStandardAuthOn() {
    this._standardAuthOn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get standardAuthOnInput() {
    return this._standardAuthOn;
  }

  // transform_timeout - computed: false, optional: true, required: false
  private _transformTimeout?: number; 
  public get transformTimeout() {
    return this.getNumberAttribute('transform_timeout');
  }
  public set transformTimeout(value: number) {
    this._transformTimeout = value;
  }
  public resetTransformTimeout() {
    this._transformTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transformTimeoutInput() {
    return this._transformTimeout;
  }

  // standard_auth_param - computed: false, optional: true, required: false
  private _standardAuthParam = new EsaSiteDeliveryTaskHttpDeliveryStandardAuthParamOutputReference(this, "standard_auth_param");
  public get standardAuthParam() {
    return this._standardAuthParam;
  }
  public putStandardAuthParam(value: EsaSiteDeliveryTaskHttpDeliveryStandardAuthParam) {
    this._standardAuthParam.internalValue = value;
  }
  public resetStandardAuthParam() {
    this._standardAuthParam.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get standardAuthParamInput() {
    return this._standardAuthParam.internalValue;
  }
}
export interface EsaSiteDeliveryTaskKafkaDelivery {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/esa_site_delivery_task#balancer EsaSiteDeliveryTask#balancer}
  */
  readonly balancer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/esa_site_delivery_task#brokers EsaSiteDeliveryTask#brokers}
  */
  readonly brokers?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/esa_site_delivery_task#compress EsaSiteDeliveryTask#compress}
  */
  readonly compress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/esa_site_delivery_task#machanism_type EsaSiteDeliveryTask#machanism_type}
  */
  readonly machanismType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/esa_site_delivery_task#password EsaSiteDeliveryTask#password}
  */
  readonly password?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/esa_site_delivery_task#topic EsaSiteDeliveryTask#topic}
  */
  readonly topic?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/esa_site_delivery_task#user_auth EsaSiteDeliveryTask#user_auth}
  */
  readonly userAuth?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/esa_site_delivery_task#user_name EsaSiteDeliveryTask#user_name}
  */
  readonly userName?: string;
}

export function esaSiteDeliveryTaskKafkaDeliveryToTerraform(struct?: EsaSiteDeliveryTaskKafkaDeliveryOutputReference | EsaSiteDeliveryTaskKafkaDelivery): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    balancer: cdktf.stringToTerraform(struct!.balancer),
    brokers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.brokers),
    compress: cdktf.stringToTerraform(struct!.compress),
    machanism_type: cdktf.stringToTerraform(struct!.machanismType),
    password: cdktf.stringToTerraform(struct!.password),
    topic: cdktf.stringToTerraform(struct!.topic),
    user_auth: cdktf.booleanToTerraform(struct!.userAuth),
    user_name: cdktf.stringToTerraform(struct!.userName),
  }
}


export function esaSiteDeliveryTaskKafkaDeliveryToHclTerraform(struct?: EsaSiteDeliveryTaskKafkaDeliveryOutputReference | EsaSiteDeliveryTaskKafkaDelivery): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    balancer: {
      value: cdktf.stringToHclTerraform(struct!.balancer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    brokers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.brokers),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    compress: {
      value: cdktf.stringToHclTerraform(struct!.compress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    machanism_type: {
      value: cdktf.stringToHclTerraform(struct!.machanismType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    topic: {
      value: cdktf.stringToHclTerraform(struct!.topic),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_auth: {
      value: cdktf.booleanToHclTerraform(struct!.userAuth),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    user_name: {
      value: cdktf.stringToHclTerraform(struct!.userName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EsaSiteDeliveryTaskKafkaDeliveryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EsaSiteDeliveryTaskKafkaDelivery | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._balancer !== undefined) {
      hasAnyValues = true;
      internalValueResult.balancer = this._balancer;
    }
    if (this._brokers !== undefined) {
      hasAnyValues = true;
      internalValueResult.brokers = this._brokers;
    }
    if (this._compress !== undefined) {
      hasAnyValues = true;
      internalValueResult.compress = this._compress;
    }
    if (this._machanismType !== undefined) {
      hasAnyValues = true;
      internalValueResult.machanismType = this._machanismType;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._topic !== undefined) {
      hasAnyValues = true;
      internalValueResult.topic = this._topic;
    }
    if (this._userAuth !== undefined) {
      hasAnyValues = true;
      internalValueResult.userAuth = this._userAuth;
    }
    if (this._userName !== undefined) {
      hasAnyValues = true;
      internalValueResult.userName = this._userName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EsaSiteDeliveryTaskKafkaDelivery | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._balancer = undefined;
      this._brokers = undefined;
      this._compress = undefined;
      this._machanismType = undefined;
      this._password = undefined;
      this._topic = undefined;
      this._userAuth = undefined;
      this._userName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._balancer = value.balancer;
      this._brokers = value.brokers;
      this._compress = value.compress;
      this._machanismType = value.machanismType;
      this._password = value.password;
      this._topic = value.topic;
      this._userAuth = value.userAuth;
      this._userName = value.userName;
    }
  }

  // balancer - computed: false, optional: true, required: false
  private _balancer?: string; 
  public get balancer() {
    return this.getStringAttribute('balancer');
  }
  public set balancer(value: string) {
    this._balancer = value;
  }
  public resetBalancer() {
    this._balancer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get balancerInput() {
    return this._balancer;
  }

  // brokers - computed: false, optional: true, required: false
  private _brokers?: string[]; 
  public get brokers() {
    return this.getListAttribute('brokers');
  }
  public set brokers(value: string[]) {
    this._brokers = value;
  }
  public resetBrokers() {
    this._brokers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get brokersInput() {
    return this._brokers;
  }

  // compress - computed: false, optional: true, required: false
  private _compress?: string; 
  public get compress() {
    return this.getStringAttribute('compress');
  }
  public set compress(value: string) {
    this._compress = value;
  }
  public resetCompress() {
    this._compress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compressInput() {
    return this._compress;
  }

  // machanism_type - computed: false, optional: true, required: false
  private _machanismType?: string; 
  public get machanismType() {
    return this.getStringAttribute('machanism_type');
  }
  public set machanismType(value: string) {
    this._machanismType = value;
  }
  public resetMachanismType() {
    this._machanismType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get machanismTypeInput() {
    return this._machanismType;
  }

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // topic - computed: false, optional: true, required: false
  private _topic?: string; 
  public get topic() {
    return this.getStringAttribute('topic');
  }
  public set topic(value: string) {
    this._topic = value;
  }
  public resetTopic() {
    this._topic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topicInput() {
    return this._topic;
  }

  // user_auth - computed: false, optional: true, required: false
  private _userAuth?: boolean | cdktf.IResolvable; 
  public get userAuth() {
    return this.getBooleanAttribute('user_auth');
  }
  public set userAuth(value: boolean | cdktf.IResolvable) {
    this._userAuth = value;
  }
  public resetUserAuth() {
    this._userAuth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userAuthInput() {
    return this._userAuth;
  }

  // user_name - computed: false, optional: true, required: false
  private _userName?: string; 
  public get userName() {
    return this.getStringAttribute('user_name');
  }
  public set userName(value: string) {
    this._userName = value;
  }
  public resetUserName() {
    this._userName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userNameInput() {
    return this._userName;
  }
}
export interface EsaSiteDeliveryTaskOssDelivery {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/esa_site_delivery_task#aliuid EsaSiteDeliveryTask#aliuid}
  */
  readonly aliuid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/esa_site_delivery_task#bucket_name EsaSiteDeliveryTask#bucket_name}
  */
  readonly bucketName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/esa_site_delivery_task#prefix_path EsaSiteDeliveryTask#prefix_path}
  */
  readonly prefixPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/esa_site_delivery_task#region EsaSiteDeliveryTask#region}
  */
  readonly region?: string;
}

export function esaSiteDeliveryTaskOssDeliveryToTerraform(struct?: EsaSiteDeliveryTaskOssDeliveryOutputReference | EsaSiteDeliveryTaskOssDelivery): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aliuid: cdktf.stringToTerraform(struct!.aliuid),
    bucket_name: cdktf.stringToTerraform(struct!.bucketName),
    prefix_path: cdktf.stringToTerraform(struct!.prefixPath),
    region: cdktf.stringToTerraform(struct!.region),
  }
}


export function esaSiteDeliveryTaskOssDeliveryToHclTerraform(struct?: EsaSiteDeliveryTaskOssDeliveryOutputReference | EsaSiteDeliveryTaskOssDelivery): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aliuid: {
      value: cdktf.stringToHclTerraform(struct!.aliuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bucket_name: {
      value: cdktf.stringToHclTerraform(struct!.bucketName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prefix_path: {
      value: cdktf.stringToHclTerraform(struct!.prefixPath),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EsaSiteDeliveryTaskOssDeliveryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EsaSiteDeliveryTaskOssDelivery | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aliuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.aliuid = this._aliuid;
    }
    if (this._bucketName !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucketName = this._bucketName;
    }
    if (this._prefixPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixPath = this._prefixPath;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EsaSiteDeliveryTaskOssDelivery | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._aliuid = undefined;
      this._bucketName = undefined;
      this._prefixPath = undefined;
      this._region = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._aliuid = value.aliuid;
      this._bucketName = value.bucketName;
      this._prefixPath = value.prefixPath;
      this._region = value.region;
    }
  }

  // aliuid - computed: false, optional: true, required: false
  private _aliuid?: string; 
  public get aliuid() {
    return this.getStringAttribute('aliuid');
  }
  public set aliuid(value: string) {
    this._aliuid = value;
  }
  public resetAliuid() {
    this._aliuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aliuidInput() {
    return this._aliuid;
  }

  // bucket_name - computed: false, optional: true, required: false
  private _bucketName?: string; 
  public get bucketName() {
    return this.getStringAttribute('bucket_name');
  }
  public set bucketName(value: string) {
    this._bucketName = value;
  }
  public resetBucketName() {
    this._bucketName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketNameInput() {
    return this._bucketName;
  }

  // prefix_path - computed: false, optional: true, required: false
  private _prefixPath?: string; 
  public get prefixPath() {
    return this.getStringAttribute('prefix_path');
  }
  public set prefixPath(value: string) {
    this._prefixPath = value;
  }
  public resetPrefixPath() {
    this._prefixPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixPathInput() {
    return this._prefixPath;
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
}
export interface EsaSiteDeliveryTaskS3Delivery {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/esa_site_delivery_task#access_key EsaSiteDeliveryTask#access_key}
  */
  readonly accessKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/esa_site_delivery_task#bucket_path EsaSiteDeliveryTask#bucket_path}
  */
  readonly bucketPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/esa_site_delivery_task#endpoint EsaSiteDeliveryTask#endpoint}
  */
  readonly endpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/esa_site_delivery_task#prefix_path EsaSiteDeliveryTask#prefix_path}
  */
  readonly prefixPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/esa_site_delivery_task#region EsaSiteDeliveryTask#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/esa_site_delivery_task#s3_cmpt EsaSiteDeliveryTask#s3_cmpt}
  */
  readonly s3Cmpt?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/esa_site_delivery_task#secret_key EsaSiteDeliveryTask#secret_key}
  */
  readonly secretKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/esa_site_delivery_task#server_side_encryption EsaSiteDeliveryTask#server_side_encryption}
  */
  readonly serverSideEncryption?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/esa_site_delivery_task#vertify_type EsaSiteDeliveryTask#vertify_type}
  */
  readonly vertifyType?: string;
}

export function esaSiteDeliveryTaskS3DeliveryToTerraform(struct?: EsaSiteDeliveryTaskS3DeliveryOutputReference | EsaSiteDeliveryTaskS3Delivery): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_key: cdktf.stringToTerraform(struct!.accessKey),
    bucket_path: cdktf.stringToTerraform(struct!.bucketPath),
    endpoint: cdktf.stringToTerraform(struct!.endpoint),
    prefix_path: cdktf.stringToTerraform(struct!.prefixPath),
    region: cdktf.stringToTerraform(struct!.region),
    s3_cmpt: cdktf.booleanToTerraform(struct!.s3Cmpt),
    secret_key: cdktf.stringToTerraform(struct!.secretKey),
    server_side_encryption: cdktf.booleanToTerraform(struct!.serverSideEncryption),
    vertify_type: cdktf.stringToTerraform(struct!.vertifyType),
  }
}


export function esaSiteDeliveryTaskS3DeliveryToHclTerraform(struct?: EsaSiteDeliveryTaskS3DeliveryOutputReference | EsaSiteDeliveryTaskS3Delivery): any {
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
    bucket_path: {
      value: cdktf.stringToHclTerraform(struct!.bucketPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    endpoint: {
      value: cdktf.stringToHclTerraform(struct!.endpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prefix_path: {
      value: cdktf.stringToHclTerraform(struct!.prefixPath),
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
    s3_cmpt: {
      value: cdktf.booleanToHclTerraform(struct!.s3Cmpt),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    secret_key: {
      value: cdktf.stringToHclTerraform(struct!.secretKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    server_side_encryption: {
      value: cdktf.booleanToHclTerraform(struct!.serverSideEncryption),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    vertify_type: {
      value: cdktf.stringToHclTerraform(struct!.vertifyType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EsaSiteDeliveryTaskS3DeliveryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EsaSiteDeliveryTaskS3Delivery | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessKey = this._accessKey;
    }
    if (this._bucketPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucketPath = this._bucketPath;
    }
    if (this._endpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpoint = this._endpoint;
    }
    if (this._prefixPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixPath = this._prefixPath;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    if (this._s3Cmpt !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3Cmpt = this._s3Cmpt;
    }
    if (this._secretKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretKey = this._secretKey;
    }
    if (this._serverSideEncryption !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverSideEncryption = this._serverSideEncryption;
    }
    if (this._vertifyType !== undefined) {
      hasAnyValues = true;
      internalValueResult.vertifyType = this._vertifyType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EsaSiteDeliveryTaskS3Delivery | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._accessKey = undefined;
      this._bucketPath = undefined;
      this._endpoint = undefined;
      this._prefixPath = undefined;
      this._region = undefined;
      this._s3Cmpt = undefined;
      this._secretKey = undefined;
      this._serverSideEncryption = undefined;
      this._vertifyType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._accessKey = value.accessKey;
      this._bucketPath = value.bucketPath;
      this._endpoint = value.endpoint;
      this._prefixPath = value.prefixPath;
      this._region = value.region;
      this._s3Cmpt = value.s3Cmpt;
      this._secretKey = value.secretKey;
      this._serverSideEncryption = value.serverSideEncryption;
      this._vertifyType = value.vertifyType;
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

  // bucket_path - computed: false, optional: true, required: false
  private _bucketPath?: string; 
  public get bucketPath() {
    return this.getStringAttribute('bucket_path');
  }
  public set bucketPath(value: string) {
    this._bucketPath = value;
  }
  public resetBucketPath() {
    this._bucketPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketPathInput() {
    return this._bucketPath;
  }

  // endpoint - computed: false, optional: true, required: false
  private _endpoint?: string; 
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }
  public set endpoint(value: string) {
    this._endpoint = value;
  }
  public resetEndpoint() {
    this._endpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointInput() {
    return this._endpoint;
  }

  // prefix_path - computed: false, optional: true, required: false
  private _prefixPath?: string; 
  public get prefixPath() {
    return this.getStringAttribute('prefix_path');
  }
  public set prefixPath(value: string) {
    this._prefixPath = value;
  }
  public resetPrefixPath() {
    this._prefixPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixPathInput() {
    return this._prefixPath;
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

  // s3_cmpt - computed: false, optional: true, required: false
  private _s3Cmpt?: boolean | cdktf.IResolvable; 
  public get s3Cmpt() {
    return this.getBooleanAttribute('s3_cmpt');
  }
  public set s3Cmpt(value: boolean | cdktf.IResolvable) {
    this._s3Cmpt = value;
  }
  public resetS3Cmpt() {
    this._s3Cmpt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3CmptInput() {
    return this._s3Cmpt;
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

  // server_side_encryption - computed: false, optional: true, required: false
  private _serverSideEncryption?: boolean | cdktf.IResolvable; 
  public get serverSideEncryption() {
    return this.getBooleanAttribute('server_side_encryption');
  }
  public set serverSideEncryption(value: boolean | cdktf.IResolvable) {
    this._serverSideEncryption = value;
  }
  public resetServerSideEncryption() {
    this._serverSideEncryption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverSideEncryptionInput() {
    return this._serverSideEncryption;
  }

  // vertify_type - computed: false, optional: true, required: false
  private _vertifyType?: string; 
  public get vertifyType() {
    return this.getStringAttribute('vertify_type');
  }
  public set vertifyType(value: string) {
    this._vertifyType = value;
  }
  public resetVertifyType() {
    this._vertifyType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vertifyTypeInput() {
    return this._vertifyType;
  }
}
export interface EsaSiteDeliveryTaskSlsDelivery {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/esa_site_delivery_task#sls_log_store EsaSiteDeliveryTask#sls_log_store}
  */
  readonly slsLogStore?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/esa_site_delivery_task#sls_project EsaSiteDeliveryTask#sls_project}
  */
  readonly slsProject?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/esa_site_delivery_task#sls_region EsaSiteDeliveryTask#sls_region}
  */
  readonly slsRegion?: string;
}

export function esaSiteDeliveryTaskSlsDeliveryToTerraform(struct?: EsaSiteDeliveryTaskSlsDeliveryOutputReference | EsaSiteDeliveryTaskSlsDelivery): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    sls_log_store: cdktf.stringToTerraform(struct!.slsLogStore),
    sls_project: cdktf.stringToTerraform(struct!.slsProject),
    sls_region: cdktf.stringToTerraform(struct!.slsRegion),
  }
}


export function esaSiteDeliveryTaskSlsDeliveryToHclTerraform(struct?: EsaSiteDeliveryTaskSlsDeliveryOutputReference | EsaSiteDeliveryTaskSlsDelivery): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    sls_log_store: {
      value: cdktf.stringToHclTerraform(struct!.slsLogStore),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sls_project: {
      value: cdktf.stringToHclTerraform(struct!.slsProject),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sls_region: {
      value: cdktf.stringToHclTerraform(struct!.slsRegion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EsaSiteDeliveryTaskSlsDeliveryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EsaSiteDeliveryTaskSlsDelivery | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._slsLogStore !== undefined) {
      hasAnyValues = true;
      internalValueResult.slsLogStore = this._slsLogStore;
    }
    if (this._slsProject !== undefined) {
      hasAnyValues = true;
      internalValueResult.slsProject = this._slsProject;
    }
    if (this._slsRegion !== undefined) {
      hasAnyValues = true;
      internalValueResult.slsRegion = this._slsRegion;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EsaSiteDeliveryTaskSlsDelivery | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._slsLogStore = undefined;
      this._slsProject = undefined;
      this._slsRegion = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._slsLogStore = value.slsLogStore;
      this._slsProject = value.slsProject;
      this._slsRegion = value.slsRegion;
    }
  }

  // sls_log_store - computed: false, optional: true, required: false
  private _slsLogStore?: string; 
  public get slsLogStore() {
    return this.getStringAttribute('sls_log_store');
  }
  public set slsLogStore(value: string) {
    this._slsLogStore = value;
  }
  public resetSlsLogStore() {
    this._slsLogStore = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slsLogStoreInput() {
    return this._slsLogStore;
  }

  // sls_project - computed: false, optional: true, required: false
  private _slsProject?: string; 
  public get slsProject() {
    return this.getStringAttribute('sls_project');
  }
  public set slsProject(value: string) {
    this._slsProject = value;
  }
  public resetSlsProject() {
    this._slsProject = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slsProjectInput() {
    return this._slsProject;
  }

  // sls_region - computed: false, optional: true, required: false
  private _slsRegion?: string; 
  public get slsRegion() {
    return this.getStringAttribute('sls_region');
  }
  public set slsRegion(value: string) {
    this._slsRegion = value;
  }
  public resetSlsRegion() {
    this._slsRegion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slsRegionInput() {
    return this._slsRegion;
  }
}
export interface EsaSiteDeliveryTaskTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/esa_site_delivery_task#create EsaSiteDeliveryTask#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/esa_site_delivery_task#delete EsaSiteDeliveryTask#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/esa_site_delivery_task#update EsaSiteDeliveryTask#update}
  */
  readonly update?: string;
}

export function esaSiteDeliveryTaskTimeoutsToTerraform(struct?: EsaSiteDeliveryTaskTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function esaSiteDeliveryTaskTimeoutsToHclTerraform(struct?: EsaSiteDeliveryTaskTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EsaSiteDeliveryTaskTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): EsaSiteDeliveryTaskTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EsaSiteDeliveryTaskTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/esa_site_delivery_task alicloud_esa_site_delivery_task}
*/
export class EsaSiteDeliveryTask extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_esa_site_delivery_task";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a EsaSiteDeliveryTask resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the EsaSiteDeliveryTask to import
  * @param importFromId The id of the existing EsaSiteDeliveryTask that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/esa_site_delivery_task#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the EsaSiteDeliveryTask to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_esa_site_delivery_task", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/esa_site_delivery_task alicloud_esa_site_delivery_task} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EsaSiteDeliveryTaskConfig
  */
  public constructor(scope: Construct, id: string, config: EsaSiteDeliveryTaskConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_esa_site_delivery_task',
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
    this._businessType = config.businessType;
    this._dataCenter = config.dataCenter;
    this._deliveryType = config.deliveryType;
    this._discardRate = config.discardRate;
    this._fieldName = config.fieldName;
    this._id = config.id;
    this._siteId = config.siteId;
    this._status = config.status;
    this._taskName = config.taskName;
    this._httpDelivery.internalValue = config.httpDelivery;
    this._kafkaDelivery.internalValue = config.kafkaDelivery;
    this._ossDelivery.internalValue = config.ossDelivery;
    this._s3Delivery.internalValue = config.s3Delivery;
    this._slsDelivery.internalValue = config.slsDelivery;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // business_type - computed: false, optional: false, required: true
  private _businessType?: string; 
  public get businessType() {
    return this.getStringAttribute('business_type');
  }
  public set businessType(value: string) {
    this._businessType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get businessTypeInput() {
    return this._businessType;
  }

  // data_center - computed: false, optional: false, required: true
  private _dataCenter?: string; 
  public get dataCenter() {
    return this.getStringAttribute('data_center');
  }
  public set dataCenter(value: string) {
    this._dataCenter = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataCenterInput() {
    return this._dataCenter;
  }

  // delivery_type - computed: false, optional: false, required: true
  private _deliveryType?: string; 
  public get deliveryType() {
    return this.getStringAttribute('delivery_type');
  }
  public set deliveryType(value: string) {
    this._deliveryType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deliveryTypeInput() {
    return this._deliveryType;
  }

  // discard_rate - computed: false, optional: true, required: false
  private _discardRate?: number; 
  public get discardRate() {
    return this.getNumberAttribute('discard_rate');
  }
  public set discardRate(value: number) {
    this._discardRate = value;
  }
  public resetDiscardRate() {
    this._discardRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get discardRateInput() {
    return this._discardRate;
  }

  // field_name - computed: false, optional: false, required: true
  private _fieldName?: string; 
  public get fieldName() {
    return this.getStringAttribute('field_name');
  }
  public set fieldName(value: string) {
    this._fieldName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldNameInput() {
    return this._fieldName;
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

  // site_id - computed: false, optional: false, required: true
  private _siteId?: string; 
  public get siteId() {
    return this.getStringAttribute('site_id');
  }
  public set siteId(value: string) {
    this._siteId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get siteIdInput() {
    return this._siteId;
  }

  // status - computed: true, optional: true, required: false
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

  // task_name - computed: false, optional: false, required: true
  private _taskName?: string; 
  public get taskName() {
    return this.getStringAttribute('task_name');
  }
  public set taskName(value: string) {
    this._taskName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get taskNameInput() {
    return this._taskName;
  }

  // http_delivery - computed: false, optional: true, required: false
  private _httpDelivery = new EsaSiteDeliveryTaskHttpDeliveryOutputReference(this, "http_delivery");
  public get httpDelivery() {
    return this._httpDelivery;
  }
  public putHttpDelivery(value: EsaSiteDeliveryTaskHttpDelivery) {
    this._httpDelivery.internalValue = value;
  }
  public resetHttpDelivery() {
    this._httpDelivery.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpDeliveryInput() {
    return this._httpDelivery.internalValue;
  }

  // kafka_delivery - computed: false, optional: true, required: false
  private _kafkaDelivery = new EsaSiteDeliveryTaskKafkaDeliveryOutputReference(this, "kafka_delivery");
  public get kafkaDelivery() {
    return this._kafkaDelivery;
  }
  public putKafkaDelivery(value: EsaSiteDeliveryTaskKafkaDelivery) {
    this._kafkaDelivery.internalValue = value;
  }
  public resetKafkaDelivery() {
    this._kafkaDelivery.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kafkaDeliveryInput() {
    return this._kafkaDelivery.internalValue;
  }

  // oss_delivery - computed: false, optional: true, required: false
  private _ossDelivery = new EsaSiteDeliveryTaskOssDeliveryOutputReference(this, "oss_delivery");
  public get ossDelivery() {
    return this._ossDelivery;
  }
  public putOssDelivery(value: EsaSiteDeliveryTaskOssDelivery) {
    this._ossDelivery.internalValue = value;
  }
  public resetOssDelivery() {
    this._ossDelivery.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ossDeliveryInput() {
    return this._ossDelivery.internalValue;
  }

  // s3_delivery - computed: false, optional: true, required: false
  private _s3Delivery = new EsaSiteDeliveryTaskS3DeliveryOutputReference(this, "s3_delivery");
  public get s3Delivery() {
    return this._s3Delivery;
  }
  public putS3Delivery(value: EsaSiteDeliveryTaskS3Delivery) {
    this._s3Delivery.internalValue = value;
  }
  public resetS3Delivery() {
    this._s3Delivery.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3DeliveryInput() {
    return this._s3Delivery.internalValue;
  }

  // sls_delivery - computed: false, optional: true, required: false
  private _slsDelivery = new EsaSiteDeliveryTaskSlsDeliveryOutputReference(this, "sls_delivery");
  public get slsDelivery() {
    return this._slsDelivery;
  }
  public putSlsDelivery(value: EsaSiteDeliveryTaskSlsDelivery) {
    this._slsDelivery.internalValue = value;
  }
  public resetSlsDelivery() {
    this._slsDelivery.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slsDeliveryInput() {
    return this._slsDelivery.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new EsaSiteDeliveryTaskTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: EsaSiteDeliveryTaskTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      business_type: cdktf.stringToTerraform(this._businessType),
      data_center: cdktf.stringToTerraform(this._dataCenter),
      delivery_type: cdktf.stringToTerraform(this._deliveryType),
      discard_rate: cdktf.numberToTerraform(this._discardRate),
      field_name: cdktf.stringToTerraform(this._fieldName),
      id: cdktf.stringToTerraform(this._id),
      site_id: cdktf.stringToTerraform(this._siteId),
      status: cdktf.stringToTerraform(this._status),
      task_name: cdktf.stringToTerraform(this._taskName),
      http_delivery: esaSiteDeliveryTaskHttpDeliveryToTerraform(this._httpDelivery.internalValue),
      kafka_delivery: esaSiteDeliveryTaskKafkaDeliveryToTerraform(this._kafkaDelivery.internalValue),
      oss_delivery: esaSiteDeliveryTaskOssDeliveryToTerraform(this._ossDelivery.internalValue),
      s3_delivery: esaSiteDeliveryTaskS3DeliveryToTerraform(this._s3Delivery.internalValue),
      sls_delivery: esaSiteDeliveryTaskSlsDeliveryToTerraform(this._slsDelivery.internalValue),
      timeouts: esaSiteDeliveryTaskTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      business_type: {
        value: cdktf.stringToHclTerraform(this._businessType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      data_center: {
        value: cdktf.stringToHclTerraform(this._dataCenter),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      delivery_type: {
        value: cdktf.stringToHclTerraform(this._deliveryType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      discard_rate: {
        value: cdktf.numberToHclTerraform(this._discardRate),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      field_name: {
        value: cdktf.stringToHclTerraform(this._fieldName),
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
      site_id: {
        value: cdktf.stringToHclTerraform(this._siteId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      status: {
        value: cdktf.stringToHclTerraform(this._status),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      task_name: {
        value: cdktf.stringToHclTerraform(this._taskName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      http_delivery: {
        value: esaSiteDeliveryTaskHttpDeliveryToHclTerraform(this._httpDelivery.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "EsaSiteDeliveryTaskHttpDeliveryList",
      },
      kafka_delivery: {
        value: esaSiteDeliveryTaskKafkaDeliveryToHclTerraform(this._kafkaDelivery.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "EsaSiteDeliveryTaskKafkaDeliveryList",
      },
      oss_delivery: {
        value: esaSiteDeliveryTaskOssDeliveryToHclTerraform(this._ossDelivery.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "EsaSiteDeliveryTaskOssDeliveryList",
      },
      s3_delivery: {
        value: esaSiteDeliveryTaskS3DeliveryToHclTerraform(this._s3Delivery.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "EsaSiteDeliveryTaskS3DeliveryList",
      },
      sls_delivery: {
        value: esaSiteDeliveryTaskSlsDeliveryToHclTerraform(this._slsDelivery.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "EsaSiteDeliveryTaskSlsDeliveryList",
      },
      timeouts: {
        value: esaSiteDeliveryTaskTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "EsaSiteDeliveryTaskTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
