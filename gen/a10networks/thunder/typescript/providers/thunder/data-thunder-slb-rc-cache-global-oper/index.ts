// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_rc_cache_global_oper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderSlbRcCacheGlobalOperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_rc_cache_global_oper#id DataThunderSlbRcCacheGlobalOper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_rc_cache_global_oper#oper DataThunderSlbRcCacheGlobalOper#oper}
  */
  readonly oper?: DataThunderSlbRcCacheGlobalOperOper;
}
export interface DataThunderSlbRcCacheGlobalOperOperEntryListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_rc_cache_global_oper#age DataThunderSlbRcCacheGlobalOper#age}
  */
  readonly age?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_rc_cache_global_oper#bytes DataThunderSlbRcCacheGlobalOper#bytes}
  */
  readonly bytes?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_rc_cache_global_oper#bytes1 DataThunderSlbRcCacheGlobalOper#bytes1}
  */
  readonly bytes1?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_rc_cache_global_oper#cache_control DataThunderSlbRcCacheGlobalOper#cache_control}
  */
  readonly cacheControl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_rc_cache_global_oper#concurrent_readers DataThunderSlbRcCacheGlobalOper#concurrent_readers}
  */
  readonly concurrentReaders?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_rc_cache_global_oper#content_encoding DataThunderSlbRcCacheGlobalOper#content_encoding}
  */
  readonly contentEncoding?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_rc_cache_global_oper#date DataThunderSlbRcCacheGlobalOper#date}
  */
  readonly date?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_rc_cache_global_oper#etag DataThunderSlbRcCacheGlobalOper#etag}
  */
  readonly etag?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_rc_cache_global_oper#expires DataThunderSlbRcCacheGlobalOper#expires}
  */
  readonly expires?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_rc_cache_global_oper#expires1 DataThunderSlbRcCacheGlobalOper#expires1}
  */
  readonly expires1?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_rc_cache_global_oper#full_response_cache DataThunderSlbRcCacheGlobalOper#full_response_cache}
  */
  readonly fullResponseCache?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_rc_cache_global_oper#hits DataThunderSlbRcCacheGlobalOper#hits}
  */
  readonly hits?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_rc_cache_global_oper#host DataThunderSlbRcCacheGlobalOper#host}
  */
  readonly host?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_rc_cache_global_oper#host1 DataThunderSlbRcCacheGlobalOper#host1}
  */
  readonly host1?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_rc_cache_global_oper#http_request_method DataThunderSlbRcCacheGlobalOper#http_request_method}
  */
  readonly httpRequestMethod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_rc_cache_global_oper#http_version DataThunderSlbRcCacheGlobalOper#http_version}
  */
  readonly httpVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_rc_cache_global_oper#last_modified DataThunderSlbRcCacheGlobalOper#last_modified}
  */
  readonly lastModified?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_rc_cache_global_oper#memory_configured DataThunderSlbRcCacheGlobalOper#memory_configured}
  */
  readonly memoryConfigured?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_rc_cache_global_oper#memory_used DataThunderSlbRcCacheGlobalOper#memory_used}
  */
  readonly memoryUsed?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_rc_cache_global_oper#memory_used_locally DataThunderSlbRcCacheGlobalOper#memory_used_locally}
  */
  readonly memoryUsedLocally?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_rc_cache_global_oper#misses DataThunderSlbRcCacheGlobalOper#misses}
  */
  readonly misses?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_rc_cache_global_oper#partition DataThunderSlbRcCacheGlobalOper#partition}
  */
  readonly partition?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_rc_cache_global_oper#percent_used DataThunderSlbRcCacheGlobalOper#percent_used}
  */
  readonly percentUsed?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_rc_cache_global_oper#response_chunked_encoding DataThunderSlbRcCacheGlobalOper#response_chunked_encoding}
  */
  readonly responseChunkedEncoding?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_rc_cache_global_oper#response_hdr_len DataThunderSlbRcCacheGlobalOper#response_hdr_len}
  */
  readonly responseHdrLen?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_rc_cache_global_oper#status DataThunderSlbRcCacheGlobalOper#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_rc_cache_global_oper#status_code DataThunderSlbRcCacheGlobalOper#status_code}
  */
  readonly statusCode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_rc_cache_global_oper#time_elapsed DataThunderSlbRcCacheGlobalOper#time_elapsed}
  */
  readonly timeElapsed?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_rc_cache_global_oper#type DataThunderSlbRcCacheGlobalOper#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_rc_cache_global_oper#url DataThunderSlbRcCacheGlobalOper#url}
  */
  readonly url?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_rc_cache_global_oper#url1 DataThunderSlbRcCacheGlobalOper#url1}
  */
  readonly url1?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_rc_cache_global_oper#vport DataThunderSlbRcCacheGlobalOper#vport}
  */
  readonly vport?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_rc_cache_global_oper#vserver_name DataThunderSlbRcCacheGlobalOper#vserver_name}
  */
  readonly vserverName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_rc_cache_global_oper#weak_etag DataThunderSlbRcCacheGlobalOper#weak_etag}
  */
  readonly weakEtag?: string;
}

export function dataThunderSlbRcCacheGlobalOperOperEntryListStructToTerraform(struct?: DataThunderSlbRcCacheGlobalOperOperEntryListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    age: cdktf.stringToTerraform(struct!.age),
    bytes: cdktf.numberToTerraform(struct!.bytes),
    bytes1: cdktf.stringToTerraform(struct!.bytes1),
    cache_control: cdktf.stringToTerraform(struct!.cacheControl),
    concurrent_readers: cdktf.stringToTerraform(struct!.concurrentReaders),
    content_encoding: cdktf.stringToTerraform(struct!.contentEncoding),
    date: cdktf.stringToTerraform(struct!.date),
    etag: cdktf.stringToTerraform(struct!.etag),
    expires: cdktf.stringToTerraform(struct!.expires),
    expires1: cdktf.stringToTerraform(struct!.expires1),
    full_response_cache: cdktf.stringToTerraform(struct!.fullResponseCache),
    hits: cdktf.stringToTerraform(struct!.hits),
    host: cdktf.stringToTerraform(struct!.host),
    host1: cdktf.stringToTerraform(struct!.host1),
    http_request_method: cdktf.stringToTerraform(struct!.httpRequestMethod),
    http_version: cdktf.stringToTerraform(struct!.httpVersion),
    last_modified: cdktf.stringToTerraform(struct!.lastModified),
    memory_configured: cdktf.stringToTerraform(struct!.memoryConfigured),
    memory_used: cdktf.stringToTerraform(struct!.memoryUsed),
    memory_used_locally: cdktf.stringToTerraform(struct!.memoryUsedLocally),
    misses: cdktf.stringToTerraform(struct!.misses),
    partition: cdktf.stringToTerraform(struct!.partition),
    percent_used: cdktf.stringToTerraform(struct!.percentUsed),
    response_chunked_encoding: cdktf.stringToTerraform(struct!.responseChunkedEncoding),
    response_hdr_len: cdktf.stringToTerraform(struct!.responseHdrLen),
    status: cdktf.stringToTerraform(struct!.status),
    status_code: cdktf.stringToTerraform(struct!.statusCode),
    time_elapsed: cdktf.stringToTerraform(struct!.timeElapsed),
    type: cdktf.stringToTerraform(struct!.type),
    url: cdktf.stringToTerraform(struct!.url),
    url1: cdktf.stringToTerraform(struct!.url1),
    vport: cdktf.stringToTerraform(struct!.vport),
    vserver_name: cdktf.stringToTerraform(struct!.vserverName),
    weak_etag: cdktf.stringToTerraform(struct!.weakEtag),
  }
}


export function dataThunderSlbRcCacheGlobalOperOperEntryListStructToHclTerraform(struct?: DataThunderSlbRcCacheGlobalOperOperEntryListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    age: {
      value: cdktf.stringToHclTerraform(struct!.age),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bytes: {
      value: cdktf.numberToHclTerraform(struct!.bytes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    bytes1: {
      value: cdktf.stringToHclTerraform(struct!.bytes1),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cache_control: {
      value: cdktf.stringToHclTerraform(struct!.cacheControl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    concurrent_readers: {
      value: cdktf.stringToHclTerraform(struct!.concurrentReaders),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    content_encoding: {
      value: cdktf.stringToHclTerraform(struct!.contentEncoding),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    date: {
      value: cdktf.stringToHclTerraform(struct!.date),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    etag: {
      value: cdktf.stringToHclTerraform(struct!.etag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    expires: {
      value: cdktf.stringToHclTerraform(struct!.expires),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    expires1: {
      value: cdktf.stringToHclTerraform(struct!.expires1),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    full_response_cache: {
      value: cdktf.stringToHclTerraform(struct!.fullResponseCache),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hits: {
      value: cdktf.stringToHclTerraform(struct!.hits),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    host: {
      value: cdktf.stringToHclTerraform(struct!.host),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    host1: {
      value: cdktf.stringToHclTerraform(struct!.host1),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    http_request_method: {
      value: cdktf.stringToHclTerraform(struct!.httpRequestMethod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    http_version: {
      value: cdktf.stringToHclTerraform(struct!.httpVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    last_modified: {
      value: cdktf.stringToHclTerraform(struct!.lastModified),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    memory_configured: {
      value: cdktf.stringToHclTerraform(struct!.memoryConfigured),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    memory_used: {
      value: cdktf.stringToHclTerraform(struct!.memoryUsed),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    memory_used_locally: {
      value: cdktf.stringToHclTerraform(struct!.memoryUsedLocally),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    misses: {
      value: cdktf.stringToHclTerraform(struct!.misses),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    partition: {
      value: cdktf.stringToHclTerraform(struct!.partition),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    percent_used: {
      value: cdktf.stringToHclTerraform(struct!.percentUsed),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    response_chunked_encoding: {
      value: cdktf.stringToHclTerraform(struct!.responseChunkedEncoding),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    response_hdr_len: {
      value: cdktf.stringToHclTerraform(struct!.responseHdrLen),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    status_code: {
      value: cdktf.stringToHclTerraform(struct!.statusCode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    time_elapsed: {
      value: cdktf.stringToHclTerraform(struct!.timeElapsed),
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
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    url1: {
      value: cdktf.stringToHclTerraform(struct!.url1),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vport: {
      value: cdktf.stringToHclTerraform(struct!.vport),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vserver_name: {
      value: cdktf.stringToHclTerraform(struct!.vserverName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    weak_etag: {
      value: cdktf.stringToHclTerraform(struct!.weakEtag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderSlbRcCacheGlobalOperOperEntryListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderSlbRcCacheGlobalOperOperEntryListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._age !== undefined) {
      hasAnyValues = true;
      internalValueResult.age = this._age;
    }
    if (this._bytes !== undefined) {
      hasAnyValues = true;
      internalValueResult.bytes = this._bytes;
    }
    if (this._bytes1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.bytes1 = this._bytes1;
    }
    if (this._cacheControl !== undefined) {
      hasAnyValues = true;
      internalValueResult.cacheControl = this._cacheControl;
    }
    if (this._concurrentReaders !== undefined) {
      hasAnyValues = true;
      internalValueResult.concurrentReaders = this._concurrentReaders;
    }
    if (this._contentEncoding !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentEncoding = this._contentEncoding;
    }
    if (this._date !== undefined) {
      hasAnyValues = true;
      internalValueResult.date = this._date;
    }
    if (this._etag !== undefined) {
      hasAnyValues = true;
      internalValueResult.etag = this._etag;
    }
    if (this._expires !== undefined) {
      hasAnyValues = true;
      internalValueResult.expires = this._expires;
    }
    if (this._expires1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.expires1 = this._expires1;
    }
    if (this._fullResponseCache !== undefined) {
      hasAnyValues = true;
      internalValueResult.fullResponseCache = this._fullResponseCache;
    }
    if (this._hits !== undefined) {
      hasAnyValues = true;
      internalValueResult.hits = this._hits;
    }
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._host1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.host1 = this._host1;
    }
    if (this._httpRequestMethod !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpRequestMethod = this._httpRequestMethod;
    }
    if (this._httpVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpVersion = this._httpVersion;
    }
    if (this._lastModified !== undefined) {
      hasAnyValues = true;
      internalValueResult.lastModified = this._lastModified;
    }
    if (this._memoryConfigured !== undefined) {
      hasAnyValues = true;
      internalValueResult.memoryConfigured = this._memoryConfigured;
    }
    if (this._memoryUsed !== undefined) {
      hasAnyValues = true;
      internalValueResult.memoryUsed = this._memoryUsed;
    }
    if (this._memoryUsedLocally !== undefined) {
      hasAnyValues = true;
      internalValueResult.memoryUsedLocally = this._memoryUsedLocally;
    }
    if (this._misses !== undefined) {
      hasAnyValues = true;
      internalValueResult.misses = this._misses;
    }
    if (this._partition !== undefined) {
      hasAnyValues = true;
      internalValueResult.partition = this._partition;
    }
    if (this._percentUsed !== undefined) {
      hasAnyValues = true;
      internalValueResult.percentUsed = this._percentUsed;
    }
    if (this._responseChunkedEncoding !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseChunkedEncoding = this._responseChunkedEncoding;
    }
    if (this._responseHdrLen !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseHdrLen = this._responseHdrLen;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    if (this._statusCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.statusCode = this._statusCode;
    }
    if (this._timeElapsed !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeElapsed = this._timeElapsed;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    if (this._url1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.url1 = this._url1;
    }
    if (this._vport !== undefined) {
      hasAnyValues = true;
      internalValueResult.vport = this._vport;
    }
    if (this._vserverName !== undefined) {
      hasAnyValues = true;
      internalValueResult.vserverName = this._vserverName;
    }
    if (this._weakEtag !== undefined) {
      hasAnyValues = true;
      internalValueResult.weakEtag = this._weakEtag;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderSlbRcCacheGlobalOperOperEntryListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._age = undefined;
      this._bytes = undefined;
      this._bytes1 = undefined;
      this._cacheControl = undefined;
      this._concurrentReaders = undefined;
      this._contentEncoding = undefined;
      this._date = undefined;
      this._etag = undefined;
      this._expires = undefined;
      this._expires1 = undefined;
      this._fullResponseCache = undefined;
      this._hits = undefined;
      this._host = undefined;
      this._host1 = undefined;
      this._httpRequestMethod = undefined;
      this._httpVersion = undefined;
      this._lastModified = undefined;
      this._memoryConfigured = undefined;
      this._memoryUsed = undefined;
      this._memoryUsedLocally = undefined;
      this._misses = undefined;
      this._partition = undefined;
      this._percentUsed = undefined;
      this._responseChunkedEncoding = undefined;
      this._responseHdrLen = undefined;
      this._status = undefined;
      this._statusCode = undefined;
      this._timeElapsed = undefined;
      this._type = undefined;
      this._url = undefined;
      this._url1 = undefined;
      this._vport = undefined;
      this._vserverName = undefined;
      this._weakEtag = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._age = value.age;
      this._bytes = value.bytes;
      this._bytes1 = value.bytes1;
      this._cacheControl = value.cacheControl;
      this._concurrentReaders = value.concurrentReaders;
      this._contentEncoding = value.contentEncoding;
      this._date = value.date;
      this._etag = value.etag;
      this._expires = value.expires;
      this._expires1 = value.expires1;
      this._fullResponseCache = value.fullResponseCache;
      this._hits = value.hits;
      this._host = value.host;
      this._host1 = value.host1;
      this._httpRequestMethod = value.httpRequestMethod;
      this._httpVersion = value.httpVersion;
      this._lastModified = value.lastModified;
      this._memoryConfigured = value.memoryConfigured;
      this._memoryUsed = value.memoryUsed;
      this._memoryUsedLocally = value.memoryUsedLocally;
      this._misses = value.misses;
      this._partition = value.partition;
      this._percentUsed = value.percentUsed;
      this._responseChunkedEncoding = value.responseChunkedEncoding;
      this._responseHdrLen = value.responseHdrLen;
      this._status = value.status;
      this._statusCode = value.statusCode;
      this._timeElapsed = value.timeElapsed;
      this._type = value.type;
      this._url = value.url;
      this._url1 = value.url1;
      this._vport = value.vport;
      this._vserverName = value.vserverName;
      this._weakEtag = value.weakEtag;
    }
  }

  // age - computed: false, optional: true, required: false
  private _age?: string; 
  public get age() {
    return this.getStringAttribute('age');
  }
  public set age(value: string) {
    this._age = value;
  }
  public resetAge() {
    this._age = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ageInput() {
    return this._age;
  }

  // bytes - computed: false, optional: true, required: false
  private _bytes?: number; 
  public get bytes() {
    return this.getNumberAttribute('bytes');
  }
  public set bytes(value: number) {
    this._bytes = value;
  }
  public resetBytes() {
    this._bytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bytesInput() {
    return this._bytes;
  }

  // bytes1 - computed: false, optional: true, required: false
  private _bytes1?: string; 
  public get bytes1() {
    return this.getStringAttribute('bytes1');
  }
  public set bytes1(value: string) {
    this._bytes1 = value;
  }
  public resetBytes1() {
    this._bytes1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bytes1Input() {
    return this._bytes1;
  }

  // cache_control - computed: false, optional: true, required: false
  private _cacheControl?: string; 
  public get cacheControl() {
    return this.getStringAttribute('cache_control');
  }
  public set cacheControl(value: string) {
    this._cacheControl = value;
  }
  public resetCacheControl() {
    this._cacheControl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheControlInput() {
    return this._cacheControl;
  }

  // concurrent_readers - computed: false, optional: true, required: false
  private _concurrentReaders?: string; 
  public get concurrentReaders() {
    return this.getStringAttribute('concurrent_readers');
  }
  public set concurrentReaders(value: string) {
    this._concurrentReaders = value;
  }
  public resetConcurrentReaders() {
    this._concurrentReaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get concurrentReadersInput() {
    return this._concurrentReaders;
  }

  // content_encoding - computed: false, optional: true, required: false
  private _contentEncoding?: string; 
  public get contentEncoding() {
    return this.getStringAttribute('content_encoding');
  }
  public set contentEncoding(value: string) {
    this._contentEncoding = value;
  }
  public resetContentEncoding() {
    this._contentEncoding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentEncodingInput() {
    return this._contentEncoding;
  }

  // date - computed: false, optional: true, required: false
  private _date?: string; 
  public get date() {
    return this.getStringAttribute('date');
  }
  public set date(value: string) {
    this._date = value;
  }
  public resetDate() {
    this._date = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dateInput() {
    return this._date;
  }

  // etag - computed: false, optional: true, required: false
  private _etag?: string; 
  public get etag() {
    return this.getStringAttribute('etag');
  }
  public set etag(value: string) {
    this._etag = value;
  }
  public resetEtag() {
    this._etag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get etagInput() {
    return this._etag;
  }

  // expires - computed: false, optional: true, required: false
  private _expires?: string; 
  public get expires() {
    return this.getStringAttribute('expires');
  }
  public set expires(value: string) {
    this._expires = value;
  }
  public resetExpires() {
    this._expires = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expiresInput() {
    return this._expires;
  }

  // expires1 - computed: false, optional: true, required: false
  private _expires1?: string; 
  public get expires1() {
    return this.getStringAttribute('expires1');
  }
  public set expires1(value: string) {
    this._expires1 = value;
  }
  public resetExpires1() {
    this._expires1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expires1Input() {
    return this._expires1;
  }

  // full_response_cache - computed: false, optional: true, required: false
  private _fullResponseCache?: string; 
  public get fullResponseCache() {
    return this.getStringAttribute('full_response_cache');
  }
  public set fullResponseCache(value: string) {
    this._fullResponseCache = value;
  }
  public resetFullResponseCache() {
    this._fullResponseCache = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fullResponseCacheInput() {
    return this._fullResponseCache;
  }

  // hits - computed: false, optional: true, required: false
  private _hits?: string; 
  public get hits() {
    return this.getStringAttribute('hits');
  }
  public set hits(value: string) {
    this._hits = value;
  }
  public resetHits() {
    this._hits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hitsInput() {
    return this._hits;
  }

  // host - computed: false, optional: true, required: false
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  public resetHost() {
    this._host = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // host1 - computed: false, optional: true, required: false
  private _host1?: string; 
  public get host1() {
    return this.getStringAttribute('host1');
  }
  public set host1(value: string) {
    this._host1 = value;
  }
  public resetHost1() {
    this._host1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get host1Input() {
    return this._host1;
  }

  // http_request_method - computed: false, optional: true, required: false
  private _httpRequestMethod?: string; 
  public get httpRequestMethod() {
    return this.getStringAttribute('http_request_method');
  }
  public set httpRequestMethod(value: string) {
    this._httpRequestMethod = value;
  }
  public resetHttpRequestMethod() {
    this._httpRequestMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpRequestMethodInput() {
    return this._httpRequestMethod;
  }

  // http_version - computed: false, optional: true, required: false
  private _httpVersion?: string; 
  public get httpVersion() {
    return this.getStringAttribute('http_version');
  }
  public set httpVersion(value: string) {
    this._httpVersion = value;
  }
  public resetHttpVersion() {
    this._httpVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpVersionInput() {
    return this._httpVersion;
  }

  // last_modified - computed: false, optional: true, required: false
  private _lastModified?: string; 
  public get lastModified() {
    return this.getStringAttribute('last_modified');
  }
  public set lastModified(value: string) {
    this._lastModified = value;
  }
  public resetLastModified() {
    this._lastModified = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastModifiedInput() {
    return this._lastModified;
  }

  // memory_configured - computed: false, optional: true, required: false
  private _memoryConfigured?: string; 
  public get memoryConfigured() {
    return this.getStringAttribute('memory_configured');
  }
  public set memoryConfigured(value: string) {
    this._memoryConfigured = value;
  }
  public resetMemoryConfigured() {
    this._memoryConfigured = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryConfiguredInput() {
    return this._memoryConfigured;
  }

  // memory_used - computed: false, optional: true, required: false
  private _memoryUsed?: string; 
  public get memoryUsed() {
    return this.getStringAttribute('memory_used');
  }
  public set memoryUsed(value: string) {
    this._memoryUsed = value;
  }
  public resetMemoryUsed() {
    this._memoryUsed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryUsedInput() {
    return this._memoryUsed;
  }

  // memory_used_locally - computed: false, optional: true, required: false
  private _memoryUsedLocally?: string; 
  public get memoryUsedLocally() {
    return this.getStringAttribute('memory_used_locally');
  }
  public set memoryUsedLocally(value: string) {
    this._memoryUsedLocally = value;
  }
  public resetMemoryUsedLocally() {
    this._memoryUsedLocally = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryUsedLocallyInput() {
    return this._memoryUsedLocally;
  }

  // misses - computed: false, optional: true, required: false
  private _misses?: string; 
  public get misses() {
    return this.getStringAttribute('misses');
  }
  public set misses(value: string) {
    this._misses = value;
  }
  public resetMisses() {
    this._misses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get missesInput() {
    return this._misses;
  }

  // partition - computed: false, optional: true, required: false
  private _partition?: string; 
  public get partition() {
    return this.getStringAttribute('partition');
  }
  public set partition(value: string) {
    this._partition = value;
  }
  public resetPartition() {
    this._partition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get partitionInput() {
    return this._partition;
  }

  // percent_used - computed: false, optional: true, required: false
  private _percentUsed?: string; 
  public get percentUsed() {
    return this.getStringAttribute('percent_used');
  }
  public set percentUsed(value: string) {
    this._percentUsed = value;
  }
  public resetPercentUsed() {
    this._percentUsed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get percentUsedInput() {
    return this._percentUsed;
  }

  // response_chunked_encoding - computed: false, optional: true, required: false
  private _responseChunkedEncoding?: string; 
  public get responseChunkedEncoding() {
    return this.getStringAttribute('response_chunked_encoding');
  }
  public set responseChunkedEncoding(value: string) {
    this._responseChunkedEncoding = value;
  }
  public resetResponseChunkedEncoding() {
    this._responseChunkedEncoding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseChunkedEncodingInput() {
    return this._responseChunkedEncoding;
  }

  // response_hdr_len - computed: false, optional: true, required: false
  private _responseHdrLen?: string; 
  public get responseHdrLen() {
    return this.getStringAttribute('response_hdr_len');
  }
  public set responseHdrLen(value: string) {
    this._responseHdrLen = value;
  }
  public resetResponseHdrLen() {
    this._responseHdrLen = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseHdrLenInput() {
    return this._responseHdrLen;
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

  // status_code - computed: false, optional: true, required: false
  private _statusCode?: string; 
  public get statusCode() {
    return this.getStringAttribute('status_code');
  }
  public set statusCode(value: string) {
    this._statusCode = value;
  }
  public resetStatusCode() {
    this._statusCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusCodeInput() {
    return this._statusCode;
  }

  // time_elapsed - computed: false, optional: true, required: false
  private _timeElapsed?: string; 
  public get timeElapsed() {
    return this.getStringAttribute('time_elapsed');
  }
  public set timeElapsed(value: string) {
    this._timeElapsed = value;
  }
  public resetTimeElapsed() {
    this._timeElapsed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeElapsedInput() {
    return this._timeElapsed;
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

  // url - computed: false, optional: true, required: false
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  public resetUrl() {
    this._url = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }

  // url1 - computed: false, optional: true, required: false
  private _url1?: string; 
  public get url1() {
    return this.getStringAttribute('url1');
  }
  public set url1(value: string) {
    this._url1 = value;
  }
  public resetUrl1() {
    this._url1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get url1Input() {
    return this._url1;
  }

  // vport - computed: false, optional: true, required: false
  private _vport?: string; 
  public get vport() {
    return this.getStringAttribute('vport');
  }
  public set vport(value: string) {
    this._vport = value;
  }
  public resetVport() {
    this._vport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vportInput() {
    return this._vport;
  }

  // vserver_name - computed: false, optional: true, required: false
  private _vserverName?: string; 
  public get vserverName() {
    return this.getStringAttribute('vserver_name');
  }
  public set vserverName(value: string) {
    this._vserverName = value;
  }
  public resetVserverName() {
    this._vserverName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vserverNameInput() {
    return this._vserverName;
  }

  // weak_etag - computed: false, optional: true, required: false
  private _weakEtag?: string; 
  public get weakEtag() {
    return this.getStringAttribute('weak_etag');
  }
  public set weakEtag(value: string) {
    this._weakEtag = value;
  }
  public resetWeakEtag() {
    this._weakEtag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weakEtagInput() {
    return this._weakEtag;
  }
}

export class DataThunderSlbRcCacheGlobalOperOperEntryListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderSlbRcCacheGlobalOperOperEntryListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderSlbRcCacheGlobalOperOperEntryListStructOutputReference {
    return new DataThunderSlbRcCacheGlobalOperOperEntryListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderSlbRcCacheGlobalOperOperReplacementListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_rc_cache_global_oper#eight DataThunderSlbRcCacheGlobalOper#eight}
  */
  readonly eight?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_rc_cache_global_oper#four DataThunderSlbRcCacheGlobalOper#four}
  */
  readonly four?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_rc_cache_global_oper#one DataThunderSlbRcCacheGlobalOper#one}
  */
  readonly one?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_rc_cache_global_oper#one_128th DataThunderSlbRcCacheGlobalOper#one_128th}
  */
  readonly one128Th?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_rc_cache_global_oper#one_16th DataThunderSlbRcCacheGlobalOper#one_16th}
  */
  readonly one16Th?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_rc_cache_global_oper#one_256th DataThunderSlbRcCacheGlobalOper#one_256th}
  */
  readonly one256Th?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_rc_cache_global_oper#one_2th DataThunderSlbRcCacheGlobalOper#one_2th}
  */
  readonly one2Th?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_rc_cache_global_oper#one_32th DataThunderSlbRcCacheGlobalOper#one_32th}
  */
  readonly one32Th?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_rc_cache_global_oper#one_4th DataThunderSlbRcCacheGlobalOper#one_4th}
  */
  readonly one4Th?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_rc_cache_global_oper#one_64th DataThunderSlbRcCacheGlobalOper#one_64th}
  */
  readonly one64Th?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_rc_cache_global_oper#one_8th DataThunderSlbRcCacheGlobalOper#one_8th}
  */
  readonly one8Th?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_rc_cache_global_oper#one_twenty_eight DataThunderSlbRcCacheGlobalOper#one_twenty_eight}
  */
  readonly oneTwentyEight?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_rc_cache_global_oper#sixteen DataThunderSlbRcCacheGlobalOper#sixteen}
  */
  readonly sixteen?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_rc_cache_global_oper#sixty_four DataThunderSlbRcCacheGlobalOper#sixty_four}
  */
  readonly sixtyFour?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_rc_cache_global_oper#thirty_two DataThunderSlbRcCacheGlobalOper#thirty_two}
  */
  readonly thirtyTwo?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_rc_cache_global_oper#two DataThunderSlbRcCacheGlobalOper#two}
  */
  readonly two?: number;
}

export function dataThunderSlbRcCacheGlobalOperOperReplacementListStructToTerraform(struct?: DataThunderSlbRcCacheGlobalOperOperReplacementListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    eight: cdktf.numberToTerraform(struct!.eight),
    four: cdktf.numberToTerraform(struct!.four),
    one: cdktf.numberToTerraform(struct!.one),
    one_128th: cdktf.numberToTerraform(struct!.one128Th),
    one_16th: cdktf.numberToTerraform(struct!.one16Th),
    one_256th: cdktf.numberToTerraform(struct!.one256Th),
    one_2th: cdktf.numberToTerraform(struct!.one2Th),
    one_32th: cdktf.numberToTerraform(struct!.one32Th),
    one_4th: cdktf.numberToTerraform(struct!.one4Th),
    one_64th: cdktf.numberToTerraform(struct!.one64Th),
    one_8th: cdktf.numberToTerraform(struct!.one8Th),
    one_twenty_eight: cdktf.numberToTerraform(struct!.oneTwentyEight),
    sixteen: cdktf.numberToTerraform(struct!.sixteen),
    sixty_four: cdktf.numberToTerraform(struct!.sixtyFour),
    thirty_two: cdktf.numberToTerraform(struct!.thirtyTwo),
    two: cdktf.numberToTerraform(struct!.two),
  }
}


export function dataThunderSlbRcCacheGlobalOperOperReplacementListStructToHclTerraform(struct?: DataThunderSlbRcCacheGlobalOperOperReplacementListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    eight: {
      value: cdktf.numberToHclTerraform(struct!.eight),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    four: {
      value: cdktf.numberToHclTerraform(struct!.four),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    one: {
      value: cdktf.numberToHclTerraform(struct!.one),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    one_128th: {
      value: cdktf.numberToHclTerraform(struct!.one128Th),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    one_16th: {
      value: cdktf.numberToHclTerraform(struct!.one16Th),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    one_256th: {
      value: cdktf.numberToHclTerraform(struct!.one256Th),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    one_2th: {
      value: cdktf.numberToHclTerraform(struct!.one2Th),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    one_32th: {
      value: cdktf.numberToHclTerraform(struct!.one32Th),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    one_4th: {
      value: cdktf.numberToHclTerraform(struct!.one4Th),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    one_64th: {
      value: cdktf.numberToHclTerraform(struct!.one64Th),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    one_8th: {
      value: cdktf.numberToHclTerraform(struct!.one8Th),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    one_twenty_eight: {
      value: cdktf.numberToHclTerraform(struct!.oneTwentyEight),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sixteen: {
      value: cdktf.numberToHclTerraform(struct!.sixteen),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sixty_four: {
      value: cdktf.numberToHclTerraform(struct!.sixtyFour),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    thirty_two: {
      value: cdktf.numberToHclTerraform(struct!.thirtyTwo),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    two: {
      value: cdktf.numberToHclTerraform(struct!.two),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderSlbRcCacheGlobalOperOperReplacementListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderSlbRcCacheGlobalOperOperReplacementListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._eight !== undefined) {
      hasAnyValues = true;
      internalValueResult.eight = this._eight;
    }
    if (this._four !== undefined) {
      hasAnyValues = true;
      internalValueResult.four = this._four;
    }
    if (this._one !== undefined) {
      hasAnyValues = true;
      internalValueResult.one = this._one;
    }
    if (this._one128Th !== undefined) {
      hasAnyValues = true;
      internalValueResult.one128Th = this._one128Th;
    }
    if (this._one16Th !== undefined) {
      hasAnyValues = true;
      internalValueResult.one16Th = this._one16Th;
    }
    if (this._one256Th !== undefined) {
      hasAnyValues = true;
      internalValueResult.one256Th = this._one256Th;
    }
    if (this._one2Th !== undefined) {
      hasAnyValues = true;
      internalValueResult.one2Th = this._one2Th;
    }
    if (this._one32Th !== undefined) {
      hasAnyValues = true;
      internalValueResult.one32Th = this._one32Th;
    }
    if (this._one4Th !== undefined) {
      hasAnyValues = true;
      internalValueResult.one4Th = this._one4Th;
    }
    if (this._one64Th !== undefined) {
      hasAnyValues = true;
      internalValueResult.one64Th = this._one64Th;
    }
    if (this._one8Th !== undefined) {
      hasAnyValues = true;
      internalValueResult.one8Th = this._one8Th;
    }
    if (this._oneTwentyEight !== undefined) {
      hasAnyValues = true;
      internalValueResult.oneTwentyEight = this._oneTwentyEight;
    }
    if (this._sixteen !== undefined) {
      hasAnyValues = true;
      internalValueResult.sixteen = this._sixteen;
    }
    if (this._sixtyFour !== undefined) {
      hasAnyValues = true;
      internalValueResult.sixtyFour = this._sixtyFour;
    }
    if (this._thirtyTwo !== undefined) {
      hasAnyValues = true;
      internalValueResult.thirtyTwo = this._thirtyTwo;
    }
    if (this._two !== undefined) {
      hasAnyValues = true;
      internalValueResult.two = this._two;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderSlbRcCacheGlobalOperOperReplacementListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._eight = undefined;
      this._four = undefined;
      this._one = undefined;
      this._one128Th = undefined;
      this._one16Th = undefined;
      this._one256Th = undefined;
      this._one2Th = undefined;
      this._one32Th = undefined;
      this._one4Th = undefined;
      this._one64Th = undefined;
      this._one8Th = undefined;
      this._oneTwentyEight = undefined;
      this._sixteen = undefined;
      this._sixtyFour = undefined;
      this._thirtyTwo = undefined;
      this._two = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._eight = value.eight;
      this._four = value.four;
      this._one = value.one;
      this._one128Th = value.one128Th;
      this._one16Th = value.one16Th;
      this._one256Th = value.one256Th;
      this._one2Th = value.one2Th;
      this._one32Th = value.one32Th;
      this._one4Th = value.one4Th;
      this._one64Th = value.one64Th;
      this._one8Th = value.one8Th;
      this._oneTwentyEight = value.oneTwentyEight;
      this._sixteen = value.sixteen;
      this._sixtyFour = value.sixtyFour;
      this._thirtyTwo = value.thirtyTwo;
      this._two = value.two;
    }
  }

  // eight - computed: false, optional: true, required: false
  private _eight?: number; 
  public get eight() {
    return this.getNumberAttribute('eight');
  }
  public set eight(value: number) {
    this._eight = value;
  }
  public resetEight() {
    this._eight = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eightInput() {
    return this._eight;
  }

  // four - computed: false, optional: true, required: false
  private _four?: number; 
  public get four() {
    return this.getNumberAttribute('four');
  }
  public set four(value: number) {
    this._four = value;
  }
  public resetFour() {
    this._four = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fourInput() {
    return this._four;
  }

  // one - computed: false, optional: true, required: false
  private _one?: number; 
  public get one() {
    return this.getNumberAttribute('one');
  }
  public set one(value: number) {
    this._one = value;
  }
  public resetOne() {
    this._one = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oneInput() {
    return this._one;
  }

  // one_128th - computed: false, optional: true, required: false
  private _one128Th?: number; 
  public get one128Th() {
    return this.getNumberAttribute('one_128th');
  }
  public set one128Th(value: number) {
    this._one128Th = value;
  }
  public resetOne128Th() {
    this._one128Th = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get one128ThInput() {
    return this._one128Th;
  }

  // one_16th - computed: false, optional: true, required: false
  private _one16Th?: number; 
  public get one16Th() {
    return this.getNumberAttribute('one_16th');
  }
  public set one16Th(value: number) {
    this._one16Th = value;
  }
  public resetOne16Th() {
    this._one16Th = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get one16ThInput() {
    return this._one16Th;
  }

  // one_256th - computed: false, optional: true, required: false
  private _one256Th?: number; 
  public get one256Th() {
    return this.getNumberAttribute('one_256th');
  }
  public set one256Th(value: number) {
    this._one256Th = value;
  }
  public resetOne256Th() {
    this._one256Th = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get one256ThInput() {
    return this._one256Th;
  }

  // one_2th - computed: false, optional: true, required: false
  private _one2Th?: number; 
  public get one2Th() {
    return this.getNumberAttribute('one_2th');
  }
  public set one2Th(value: number) {
    this._one2Th = value;
  }
  public resetOne2Th() {
    this._one2Th = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get one2ThInput() {
    return this._one2Th;
  }

  // one_32th - computed: false, optional: true, required: false
  private _one32Th?: number; 
  public get one32Th() {
    return this.getNumberAttribute('one_32th');
  }
  public set one32Th(value: number) {
    this._one32Th = value;
  }
  public resetOne32Th() {
    this._one32Th = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get one32ThInput() {
    return this._one32Th;
  }

  // one_4th - computed: false, optional: true, required: false
  private _one4Th?: number; 
  public get one4Th() {
    return this.getNumberAttribute('one_4th');
  }
  public set one4Th(value: number) {
    this._one4Th = value;
  }
  public resetOne4Th() {
    this._one4Th = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get one4ThInput() {
    return this._one4Th;
  }

  // one_64th - computed: false, optional: true, required: false
  private _one64Th?: number; 
  public get one64Th() {
    return this.getNumberAttribute('one_64th');
  }
  public set one64Th(value: number) {
    this._one64Th = value;
  }
  public resetOne64Th() {
    this._one64Th = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get one64ThInput() {
    return this._one64Th;
  }

  // one_8th - computed: false, optional: true, required: false
  private _one8Th?: number; 
  public get one8Th() {
    return this.getNumberAttribute('one_8th');
  }
  public set one8Th(value: number) {
    this._one8Th = value;
  }
  public resetOne8Th() {
    this._one8Th = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get one8ThInput() {
    return this._one8Th;
  }

  // one_twenty_eight - computed: false, optional: true, required: false
  private _oneTwentyEight?: number; 
  public get oneTwentyEight() {
    return this.getNumberAttribute('one_twenty_eight');
  }
  public set oneTwentyEight(value: number) {
    this._oneTwentyEight = value;
  }
  public resetOneTwentyEight() {
    this._oneTwentyEight = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oneTwentyEightInput() {
    return this._oneTwentyEight;
  }

  // sixteen - computed: false, optional: true, required: false
  private _sixteen?: number; 
  public get sixteen() {
    return this.getNumberAttribute('sixteen');
  }
  public set sixteen(value: number) {
    this._sixteen = value;
  }
  public resetSixteen() {
    this._sixteen = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sixteenInput() {
    return this._sixteen;
  }

  // sixty_four - computed: false, optional: true, required: false
  private _sixtyFour?: number; 
  public get sixtyFour() {
    return this.getNumberAttribute('sixty_four');
  }
  public set sixtyFour(value: number) {
    this._sixtyFour = value;
  }
  public resetSixtyFour() {
    this._sixtyFour = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sixtyFourInput() {
    return this._sixtyFour;
  }

  // thirty_two - computed: false, optional: true, required: false
  private _thirtyTwo?: number; 
  public get thirtyTwo() {
    return this.getNumberAttribute('thirty_two');
  }
  public set thirtyTwo(value: number) {
    this._thirtyTwo = value;
  }
  public resetThirtyTwo() {
    this._thirtyTwo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thirtyTwoInput() {
    return this._thirtyTwo;
  }

  // two - computed: false, optional: true, required: false
  private _two?: number; 
  public get two() {
    return this.getNumberAttribute('two');
  }
  public set two(value: number) {
    this._two = value;
  }
  public resetTwo() {
    this._two = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get twoInput() {
    return this._two;
  }
}

export class DataThunderSlbRcCacheGlobalOperOperReplacementListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderSlbRcCacheGlobalOperOperReplacementListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderSlbRcCacheGlobalOperOperReplacementListStructOutputReference {
    return new DataThunderSlbRcCacheGlobalOperOperReplacementListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderSlbRcCacheGlobalOperOper {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_rc_cache_global_oper#bytes_served DataThunderSlbRcCacheGlobalOper#bytes_served}
  */
  readonly bytesServed?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_rc_cache_global_oper#cache_hits DataThunderSlbRcCacheGlobalOper#cache_hits}
  */
  readonly cacheHits?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_rc_cache_global_oper#cache_miss DataThunderSlbRcCacheGlobalOper#cache_miss}
  */
  readonly cacheMiss?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_rc_cache_global_oper#cacheable_requests DataThunderSlbRcCacheGlobalOper#cacheable_requests}
  */
  readonly cacheableRequests?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_rc_cache_global_oper#display_detail DataThunderSlbRcCacheGlobalOper#display_detail}
  */
  readonly displayDetail?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_rc_cache_global_oper#entries_aged DataThunderSlbRcCacheGlobalOper#entries_aged}
  */
  readonly entriesAged?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_rc_cache_global_oper#entries_cached DataThunderSlbRcCacheGlobalOper#entries_cached}
  */
  readonly entriesCached?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_rc_cache_global_oper#entries_cleaned DataThunderSlbRcCacheGlobalOper#entries_cleaned}
  */
  readonly entriesCleaned?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_rc_cache_global_oper#entries_create_fail DataThunderSlbRcCacheGlobalOper#entries_create_fail}
  */
  readonly entriesCreateFail?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_rc_cache_global_oper#entries_replaced DataThunderSlbRcCacheGlobalOper#entries_replaced}
  */
  readonly entriesReplaced?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_rc_cache_global_oper#hit_ratio DataThunderSlbRcCacheGlobalOper#hit_ratio}
  */
  readonly hitRatio?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_rc_cache_global_oper#ims_requests DataThunderSlbRcCacheGlobalOper#ims_requests}
  */
  readonly imsRequests?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_rc_cache_global_oper#memory_used DataThunderSlbRcCacheGlobalOper#memory_used}
  */
  readonly memoryUsed?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_rc_cache_global_oper#no_cache_requests DataThunderSlbRcCacheGlobalOper#no_cache_requests}
  */
  readonly noCacheRequests?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_rc_cache_global_oper#polic_uri_invalidate DataThunderSlbRcCacheGlobalOper#polic_uri_invalidate}
  */
  readonly policUriInvalidate?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_rc_cache_global_oper#policy_content_big DataThunderSlbRcCacheGlobalOper#policy_content_big}
  */
  readonly policyContentBig?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_rc_cache_global_oper#policy_content_small DataThunderSlbRcCacheGlobalOper#policy_content_small}
  */
  readonly policyContentSmall?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_rc_cache_global_oper#policy_uri_cache DataThunderSlbRcCacheGlobalOper#policy_uri_cache}
  */
  readonly policyUriCache?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_rc_cache_global_oper#policy_uri_nocache DataThunderSlbRcCacheGlobalOper#policy_uri_nocache}
  */
  readonly policyUriNocache?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_rc_cache_global_oper#ratio304_ DataThunderSlbRcCacheGlobalOper#ratio304_}
  */
  readonly ratio304?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_rc_cache_global_oper#resp_cache_200_ok_deflate DataThunderSlbRcCacheGlobalOper#resp_cache_200_ok_deflate}
  */
  readonly respCache200OkDeflate?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_rc_cache_global_oper#resp_cache_200_ok_gzip DataThunderSlbRcCacheGlobalOper#resp_cache_200_ok_gzip}
  */
  readonly respCache200OkGzip?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_rc_cache_global_oper#resp_cache_200_ok_no_comp DataThunderSlbRcCacheGlobalOper#resp_cache_200_ok_no_comp}
  */
  readonly respCache200OkNoComp?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_rc_cache_global_oper#resp_cache_304_not_modified DataThunderSlbRcCacheGlobalOper#resp_cache_304_not_modified}
  */
  readonly respCache304NotModified?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_rc_cache_global_oper#resp_cache_other DataThunderSlbRcCacheGlobalOper#resp_cache_other}
  */
  readonly respCacheOther?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_rc_cache_global_oper#resp_server_200_ok_chunk DataThunderSlbRcCacheGlobalOper#resp_server_200_ok_chunk}
  */
  readonly respServer200OkChunk?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_rc_cache_global_oper#resp_server_200_ok_cont DataThunderSlbRcCacheGlobalOper#resp_server_200_ok_cont}
  */
  readonly respServer200OkCont?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_rc_cache_global_oper#resp_server_304_not_modified DataThunderSlbRcCacheGlobalOper#resp_server_304_not_modified}
  */
  readonly respServer304NotModified?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_rc_cache_global_oper#resp_server_no_cache_response DataThunderSlbRcCacheGlobalOper#resp_server_no_cache_response}
  */
  readonly respServerNoCacheResponse?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_rc_cache_global_oper#resp_server_other DataThunderSlbRcCacheGlobalOper#resp_server_other}
  */
  readonly respServerOther?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_rc_cache_global_oper#revalidation_failure DataThunderSlbRcCacheGlobalOper#revalidation_failure}
  */
  readonly revalidationFailure?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_rc_cache_global_oper#revalidation_success DataThunderSlbRcCacheGlobalOper#revalidation_success}
  */
  readonly revalidationSuccess?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_rc_cache_global_oper#total_request DataThunderSlbRcCacheGlobalOper#total_request}
  */
  readonly totalRequest?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_rc_cache_global_oper#uri_name DataThunderSlbRcCacheGlobalOper#uri_name}
  */
  readonly uriName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_rc_cache_global_oper#virtual_port DataThunderSlbRcCacheGlobalOper#virtual_port}
  */
  readonly virtualPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_rc_cache_global_oper#virtual_server DataThunderSlbRcCacheGlobalOper#virtual_server}
  */
  readonly virtualServer?: string;
  /**
  * entry_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_rc_cache_global_oper#entry_list DataThunderSlbRcCacheGlobalOper#entry_list}
  */
  readonly entryList?: DataThunderSlbRcCacheGlobalOperOperEntryListStruct[] | cdktf.IResolvable;
  /**
  * replacement_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_rc_cache_global_oper#replacement_list DataThunderSlbRcCacheGlobalOper#replacement_list}
  */
  readonly replacementList?: DataThunderSlbRcCacheGlobalOperOperReplacementListStruct[] | cdktf.IResolvable;
}

export function dataThunderSlbRcCacheGlobalOperOperToTerraform(struct?: DataThunderSlbRcCacheGlobalOperOperOutputReference | DataThunderSlbRcCacheGlobalOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bytes_served: cdktf.stringToTerraform(struct!.bytesServed),
    cache_hits: cdktf.numberToTerraform(struct!.cacheHits),
    cache_miss: cdktf.numberToTerraform(struct!.cacheMiss),
    cacheable_requests: cdktf.numberToTerraform(struct!.cacheableRequests),
    display_detail: cdktf.numberToTerraform(struct!.displayDetail),
    entries_aged: cdktf.numberToTerraform(struct!.entriesAged),
    entries_cached: cdktf.numberToTerraform(struct!.entriesCached),
    entries_cleaned: cdktf.numberToTerraform(struct!.entriesCleaned),
    entries_create_fail: cdktf.numberToTerraform(struct!.entriesCreateFail),
    entries_replaced: cdktf.numberToTerraform(struct!.entriesReplaced),
    hit_ratio: cdktf.stringToTerraform(struct!.hitRatio),
    ims_requests: cdktf.numberToTerraform(struct!.imsRequests),
    memory_used: cdktf.stringToTerraform(struct!.memoryUsed),
    no_cache_requests: cdktf.numberToTerraform(struct!.noCacheRequests),
    polic_uri_invalidate: cdktf.numberToTerraform(struct!.policUriInvalidate),
    policy_content_big: cdktf.numberToTerraform(struct!.policyContentBig),
    policy_content_small: cdktf.numberToTerraform(struct!.policyContentSmall),
    policy_uri_cache: cdktf.numberToTerraform(struct!.policyUriCache),
    policy_uri_nocache: cdktf.numberToTerraform(struct!.policyUriNocache),
    ratio304_: cdktf.stringToTerraform(struct!.ratio304),
    resp_cache_200_ok_deflate: cdktf.numberToTerraform(struct!.respCache200OkDeflate),
    resp_cache_200_ok_gzip: cdktf.numberToTerraform(struct!.respCache200OkGzip),
    resp_cache_200_ok_no_comp: cdktf.numberToTerraform(struct!.respCache200OkNoComp),
    resp_cache_304_not_modified: cdktf.numberToTerraform(struct!.respCache304NotModified),
    resp_cache_other: cdktf.numberToTerraform(struct!.respCacheOther),
    resp_server_200_ok_chunk: cdktf.numberToTerraform(struct!.respServer200OkChunk),
    resp_server_200_ok_cont: cdktf.numberToTerraform(struct!.respServer200OkCont),
    resp_server_304_not_modified: cdktf.numberToTerraform(struct!.respServer304NotModified),
    resp_server_no_cache_response: cdktf.numberToTerraform(struct!.respServerNoCacheResponse),
    resp_server_other: cdktf.numberToTerraform(struct!.respServerOther),
    revalidation_failure: cdktf.numberToTerraform(struct!.revalidationFailure),
    revalidation_success: cdktf.numberToTerraform(struct!.revalidationSuccess),
    total_request: cdktf.numberToTerraform(struct!.totalRequest),
    uri_name: cdktf.stringToTerraform(struct!.uriName),
    virtual_port: cdktf.numberToTerraform(struct!.virtualPort),
    virtual_server: cdktf.stringToTerraform(struct!.virtualServer),
    entry_list: cdktf.listMapper(dataThunderSlbRcCacheGlobalOperOperEntryListStructToTerraform, true)(struct!.entryList),
    replacement_list: cdktf.listMapper(dataThunderSlbRcCacheGlobalOperOperReplacementListStructToTerraform, true)(struct!.replacementList),
  }
}


export function dataThunderSlbRcCacheGlobalOperOperToHclTerraform(struct?: DataThunderSlbRcCacheGlobalOperOperOutputReference | DataThunderSlbRcCacheGlobalOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bytes_served: {
      value: cdktf.stringToHclTerraform(struct!.bytesServed),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cache_hits: {
      value: cdktf.numberToHclTerraform(struct!.cacheHits),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cache_miss: {
      value: cdktf.numberToHclTerraform(struct!.cacheMiss),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cacheable_requests: {
      value: cdktf.numberToHclTerraform(struct!.cacheableRequests),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    display_detail: {
      value: cdktf.numberToHclTerraform(struct!.displayDetail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    entries_aged: {
      value: cdktf.numberToHclTerraform(struct!.entriesAged),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    entries_cached: {
      value: cdktf.numberToHclTerraform(struct!.entriesCached),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    entries_cleaned: {
      value: cdktf.numberToHclTerraform(struct!.entriesCleaned),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    entries_create_fail: {
      value: cdktf.numberToHclTerraform(struct!.entriesCreateFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    entries_replaced: {
      value: cdktf.numberToHclTerraform(struct!.entriesReplaced),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    hit_ratio: {
      value: cdktf.stringToHclTerraform(struct!.hitRatio),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ims_requests: {
      value: cdktf.numberToHclTerraform(struct!.imsRequests),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    memory_used: {
      value: cdktf.stringToHclTerraform(struct!.memoryUsed),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    no_cache_requests: {
      value: cdktf.numberToHclTerraform(struct!.noCacheRequests),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    polic_uri_invalidate: {
      value: cdktf.numberToHclTerraform(struct!.policUriInvalidate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    policy_content_big: {
      value: cdktf.numberToHclTerraform(struct!.policyContentBig),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    policy_content_small: {
      value: cdktf.numberToHclTerraform(struct!.policyContentSmall),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    policy_uri_cache: {
      value: cdktf.numberToHclTerraform(struct!.policyUriCache),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    policy_uri_nocache: {
      value: cdktf.numberToHclTerraform(struct!.policyUriNocache),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ratio304_: {
      value: cdktf.stringToHclTerraform(struct!.ratio304),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resp_cache_200_ok_deflate: {
      value: cdktf.numberToHclTerraform(struct!.respCache200OkDeflate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    resp_cache_200_ok_gzip: {
      value: cdktf.numberToHclTerraform(struct!.respCache200OkGzip),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    resp_cache_200_ok_no_comp: {
      value: cdktf.numberToHclTerraform(struct!.respCache200OkNoComp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    resp_cache_304_not_modified: {
      value: cdktf.numberToHclTerraform(struct!.respCache304NotModified),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    resp_cache_other: {
      value: cdktf.numberToHclTerraform(struct!.respCacheOther),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    resp_server_200_ok_chunk: {
      value: cdktf.numberToHclTerraform(struct!.respServer200OkChunk),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    resp_server_200_ok_cont: {
      value: cdktf.numberToHclTerraform(struct!.respServer200OkCont),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    resp_server_304_not_modified: {
      value: cdktf.numberToHclTerraform(struct!.respServer304NotModified),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    resp_server_no_cache_response: {
      value: cdktf.numberToHclTerraform(struct!.respServerNoCacheResponse),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    resp_server_other: {
      value: cdktf.numberToHclTerraform(struct!.respServerOther),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    revalidation_failure: {
      value: cdktf.numberToHclTerraform(struct!.revalidationFailure),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    revalidation_success: {
      value: cdktf.numberToHclTerraform(struct!.revalidationSuccess),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    total_request: {
      value: cdktf.numberToHclTerraform(struct!.totalRequest),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    uri_name: {
      value: cdktf.stringToHclTerraform(struct!.uriName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    virtual_port: {
      value: cdktf.numberToHclTerraform(struct!.virtualPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    virtual_server: {
      value: cdktf.stringToHclTerraform(struct!.virtualServer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    entry_list: {
      value: cdktf.listMapperHcl(dataThunderSlbRcCacheGlobalOperOperEntryListStructToHclTerraform, true)(struct!.entryList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderSlbRcCacheGlobalOperOperEntryListStructList",
    },
    replacement_list: {
      value: cdktf.listMapperHcl(dataThunderSlbRcCacheGlobalOperOperReplacementListStructToHclTerraform, true)(struct!.replacementList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderSlbRcCacheGlobalOperOperReplacementListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderSlbRcCacheGlobalOperOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderSlbRcCacheGlobalOperOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bytesServed !== undefined) {
      hasAnyValues = true;
      internalValueResult.bytesServed = this._bytesServed;
    }
    if (this._cacheHits !== undefined) {
      hasAnyValues = true;
      internalValueResult.cacheHits = this._cacheHits;
    }
    if (this._cacheMiss !== undefined) {
      hasAnyValues = true;
      internalValueResult.cacheMiss = this._cacheMiss;
    }
    if (this._cacheableRequests !== undefined) {
      hasAnyValues = true;
      internalValueResult.cacheableRequests = this._cacheableRequests;
    }
    if (this._displayDetail !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayDetail = this._displayDetail;
    }
    if (this._entriesAged !== undefined) {
      hasAnyValues = true;
      internalValueResult.entriesAged = this._entriesAged;
    }
    if (this._entriesCached !== undefined) {
      hasAnyValues = true;
      internalValueResult.entriesCached = this._entriesCached;
    }
    if (this._entriesCleaned !== undefined) {
      hasAnyValues = true;
      internalValueResult.entriesCleaned = this._entriesCleaned;
    }
    if (this._entriesCreateFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.entriesCreateFail = this._entriesCreateFail;
    }
    if (this._entriesReplaced !== undefined) {
      hasAnyValues = true;
      internalValueResult.entriesReplaced = this._entriesReplaced;
    }
    if (this._hitRatio !== undefined) {
      hasAnyValues = true;
      internalValueResult.hitRatio = this._hitRatio;
    }
    if (this._imsRequests !== undefined) {
      hasAnyValues = true;
      internalValueResult.imsRequests = this._imsRequests;
    }
    if (this._memoryUsed !== undefined) {
      hasAnyValues = true;
      internalValueResult.memoryUsed = this._memoryUsed;
    }
    if (this._noCacheRequests !== undefined) {
      hasAnyValues = true;
      internalValueResult.noCacheRequests = this._noCacheRequests;
    }
    if (this._policUriInvalidate !== undefined) {
      hasAnyValues = true;
      internalValueResult.policUriInvalidate = this._policUriInvalidate;
    }
    if (this._policyContentBig !== undefined) {
      hasAnyValues = true;
      internalValueResult.policyContentBig = this._policyContentBig;
    }
    if (this._policyContentSmall !== undefined) {
      hasAnyValues = true;
      internalValueResult.policyContentSmall = this._policyContentSmall;
    }
    if (this._policyUriCache !== undefined) {
      hasAnyValues = true;
      internalValueResult.policyUriCache = this._policyUriCache;
    }
    if (this._policyUriNocache !== undefined) {
      hasAnyValues = true;
      internalValueResult.policyUriNocache = this._policyUriNocache;
    }
    if (this._ratio304 !== undefined) {
      hasAnyValues = true;
      internalValueResult.ratio304 = this._ratio304;
    }
    if (this._respCache200OkDeflate !== undefined) {
      hasAnyValues = true;
      internalValueResult.respCache200OkDeflate = this._respCache200OkDeflate;
    }
    if (this._respCache200OkGzip !== undefined) {
      hasAnyValues = true;
      internalValueResult.respCache200OkGzip = this._respCache200OkGzip;
    }
    if (this._respCache200OkNoComp !== undefined) {
      hasAnyValues = true;
      internalValueResult.respCache200OkNoComp = this._respCache200OkNoComp;
    }
    if (this._respCache304NotModified !== undefined) {
      hasAnyValues = true;
      internalValueResult.respCache304NotModified = this._respCache304NotModified;
    }
    if (this._respCacheOther !== undefined) {
      hasAnyValues = true;
      internalValueResult.respCacheOther = this._respCacheOther;
    }
    if (this._respServer200OkChunk !== undefined) {
      hasAnyValues = true;
      internalValueResult.respServer200OkChunk = this._respServer200OkChunk;
    }
    if (this._respServer200OkCont !== undefined) {
      hasAnyValues = true;
      internalValueResult.respServer200OkCont = this._respServer200OkCont;
    }
    if (this._respServer304NotModified !== undefined) {
      hasAnyValues = true;
      internalValueResult.respServer304NotModified = this._respServer304NotModified;
    }
    if (this._respServerNoCacheResponse !== undefined) {
      hasAnyValues = true;
      internalValueResult.respServerNoCacheResponse = this._respServerNoCacheResponse;
    }
    if (this._respServerOther !== undefined) {
      hasAnyValues = true;
      internalValueResult.respServerOther = this._respServerOther;
    }
    if (this._revalidationFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.revalidationFailure = this._revalidationFailure;
    }
    if (this._revalidationSuccess !== undefined) {
      hasAnyValues = true;
      internalValueResult.revalidationSuccess = this._revalidationSuccess;
    }
    if (this._totalRequest !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalRequest = this._totalRequest;
    }
    if (this._uriName !== undefined) {
      hasAnyValues = true;
      internalValueResult.uriName = this._uriName;
    }
    if (this._virtualPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.virtualPort = this._virtualPort;
    }
    if (this._virtualServer !== undefined) {
      hasAnyValues = true;
      internalValueResult.virtualServer = this._virtualServer;
    }
    if (this._entryList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.entryList = this._entryList?.internalValue;
    }
    if (this._replacementList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.replacementList = this._replacementList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderSlbRcCacheGlobalOperOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bytesServed = undefined;
      this._cacheHits = undefined;
      this._cacheMiss = undefined;
      this._cacheableRequests = undefined;
      this._displayDetail = undefined;
      this._entriesAged = undefined;
      this._entriesCached = undefined;
      this._entriesCleaned = undefined;
      this._entriesCreateFail = undefined;
      this._entriesReplaced = undefined;
      this._hitRatio = undefined;
      this._imsRequests = undefined;
      this._memoryUsed = undefined;
      this._noCacheRequests = undefined;
      this._policUriInvalidate = undefined;
      this._policyContentBig = undefined;
      this._policyContentSmall = undefined;
      this._policyUriCache = undefined;
      this._policyUriNocache = undefined;
      this._ratio304 = undefined;
      this._respCache200OkDeflate = undefined;
      this._respCache200OkGzip = undefined;
      this._respCache200OkNoComp = undefined;
      this._respCache304NotModified = undefined;
      this._respCacheOther = undefined;
      this._respServer200OkChunk = undefined;
      this._respServer200OkCont = undefined;
      this._respServer304NotModified = undefined;
      this._respServerNoCacheResponse = undefined;
      this._respServerOther = undefined;
      this._revalidationFailure = undefined;
      this._revalidationSuccess = undefined;
      this._totalRequest = undefined;
      this._uriName = undefined;
      this._virtualPort = undefined;
      this._virtualServer = undefined;
      this._entryList.internalValue = undefined;
      this._replacementList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bytesServed = value.bytesServed;
      this._cacheHits = value.cacheHits;
      this._cacheMiss = value.cacheMiss;
      this._cacheableRequests = value.cacheableRequests;
      this._displayDetail = value.displayDetail;
      this._entriesAged = value.entriesAged;
      this._entriesCached = value.entriesCached;
      this._entriesCleaned = value.entriesCleaned;
      this._entriesCreateFail = value.entriesCreateFail;
      this._entriesReplaced = value.entriesReplaced;
      this._hitRatio = value.hitRatio;
      this._imsRequests = value.imsRequests;
      this._memoryUsed = value.memoryUsed;
      this._noCacheRequests = value.noCacheRequests;
      this._policUriInvalidate = value.policUriInvalidate;
      this._policyContentBig = value.policyContentBig;
      this._policyContentSmall = value.policyContentSmall;
      this._policyUriCache = value.policyUriCache;
      this._policyUriNocache = value.policyUriNocache;
      this._ratio304 = value.ratio304;
      this._respCache200OkDeflate = value.respCache200OkDeflate;
      this._respCache200OkGzip = value.respCache200OkGzip;
      this._respCache200OkNoComp = value.respCache200OkNoComp;
      this._respCache304NotModified = value.respCache304NotModified;
      this._respCacheOther = value.respCacheOther;
      this._respServer200OkChunk = value.respServer200OkChunk;
      this._respServer200OkCont = value.respServer200OkCont;
      this._respServer304NotModified = value.respServer304NotModified;
      this._respServerNoCacheResponse = value.respServerNoCacheResponse;
      this._respServerOther = value.respServerOther;
      this._revalidationFailure = value.revalidationFailure;
      this._revalidationSuccess = value.revalidationSuccess;
      this._totalRequest = value.totalRequest;
      this._uriName = value.uriName;
      this._virtualPort = value.virtualPort;
      this._virtualServer = value.virtualServer;
      this._entryList.internalValue = value.entryList;
      this._replacementList.internalValue = value.replacementList;
    }
  }

  // bytes_served - computed: false, optional: true, required: false
  private _bytesServed?: string; 
  public get bytesServed() {
    return this.getStringAttribute('bytes_served');
  }
  public set bytesServed(value: string) {
    this._bytesServed = value;
  }
  public resetBytesServed() {
    this._bytesServed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bytesServedInput() {
    return this._bytesServed;
  }

  // cache_hits - computed: false, optional: true, required: false
  private _cacheHits?: number; 
  public get cacheHits() {
    return this.getNumberAttribute('cache_hits');
  }
  public set cacheHits(value: number) {
    this._cacheHits = value;
  }
  public resetCacheHits() {
    this._cacheHits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheHitsInput() {
    return this._cacheHits;
  }

  // cache_miss - computed: false, optional: true, required: false
  private _cacheMiss?: number; 
  public get cacheMiss() {
    return this.getNumberAttribute('cache_miss');
  }
  public set cacheMiss(value: number) {
    this._cacheMiss = value;
  }
  public resetCacheMiss() {
    this._cacheMiss = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheMissInput() {
    return this._cacheMiss;
  }

  // cacheable_requests - computed: false, optional: true, required: false
  private _cacheableRequests?: number; 
  public get cacheableRequests() {
    return this.getNumberAttribute('cacheable_requests');
  }
  public set cacheableRequests(value: number) {
    this._cacheableRequests = value;
  }
  public resetCacheableRequests() {
    this._cacheableRequests = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheableRequestsInput() {
    return this._cacheableRequests;
  }

  // display_detail - computed: false, optional: true, required: false
  private _displayDetail?: number; 
  public get displayDetail() {
    return this.getNumberAttribute('display_detail');
  }
  public set displayDetail(value: number) {
    this._displayDetail = value;
  }
  public resetDisplayDetail() {
    this._displayDetail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayDetailInput() {
    return this._displayDetail;
  }

  // entries_aged - computed: false, optional: true, required: false
  private _entriesAged?: number; 
  public get entriesAged() {
    return this.getNumberAttribute('entries_aged');
  }
  public set entriesAged(value: number) {
    this._entriesAged = value;
  }
  public resetEntriesAged() {
    this._entriesAged = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entriesAgedInput() {
    return this._entriesAged;
  }

  // entries_cached - computed: false, optional: true, required: false
  private _entriesCached?: number; 
  public get entriesCached() {
    return this.getNumberAttribute('entries_cached');
  }
  public set entriesCached(value: number) {
    this._entriesCached = value;
  }
  public resetEntriesCached() {
    this._entriesCached = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entriesCachedInput() {
    return this._entriesCached;
  }

  // entries_cleaned - computed: false, optional: true, required: false
  private _entriesCleaned?: number; 
  public get entriesCleaned() {
    return this.getNumberAttribute('entries_cleaned');
  }
  public set entriesCleaned(value: number) {
    this._entriesCleaned = value;
  }
  public resetEntriesCleaned() {
    this._entriesCleaned = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entriesCleanedInput() {
    return this._entriesCleaned;
  }

  // entries_create_fail - computed: false, optional: true, required: false
  private _entriesCreateFail?: number; 
  public get entriesCreateFail() {
    return this.getNumberAttribute('entries_create_fail');
  }
  public set entriesCreateFail(value: number) {
    this._entriesCreateFail = value;
  }
  public resetEntriesCreateFail() {
    this._entriesCreateFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entriesCreateFailInput() {
    return this._entriesCreateFail;
  }

  // entries_replaced - computed: false, optional: true, required: false
  private _entriesReplaced?: number; 
  public get entriesReplaced() {
    return this.getNumberAttribute('entries_replaced');
  }
  public set entriesReplaced(value: number) {
    this._entriesReplaced = value;
  }
  public resetEntriesReplaced() {
    this._entriesReplaced = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entriesReplacedInput() {
    return this._entriesReplaced;
  }

  // hit_ratio - computed: false, optional: true, required: false
  private _hitRatio?: string; 
  public get hitRatio() {
    return this.getStringAttribute('hit_ratio');
  }
  public set hitRatio(value: string) {
    this._hitRatio = value;
  }
  public resetHitRatio() {
    this._hitRatio = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hitRatioInput() {
    return this._hitRatio;
  }

  // ims_requests - computed: false, optional: true, required: false
  private _imsRequests?: number; 
  public get imsRequests() {
    return this.getNumberAttribute('ims_requests');
  }
  public set imsRequests(value: number) {
    this._imsRequests = value;
  }
  public resetImsRequests() {
    this._imsRequests = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imsRequestsInput() {
    return this._imsRequests;
  }

  // memory_used - computed: false, optional: true, required: false
  private _memoryUsed?: string; 
  public get memoryUsed() {
    return this.getStringAttribute('memory_used');
  }
  public set memoryUsed(value: string) {
    this._memoryUsed = value;
  }
  public resetMemoryUsed() {
    this._memoryUsed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryUsedInput() {
    return this._memoryUsed;
  }

  // no_cache_requests - computed: false, optional: true, required: false
  private _noCacheRequests?: number; 
  public get noCacheRequests() {
    return this.getNumberAttribute('no_cache_requests');
  }
  public set noCacheRequests(value: number) {
    this._noCacheRequests = value;
  }
  public resetNoCacheRequests() {
    this._noCacheRequests = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noCacheRequestsInput() {
    return this._noCacheRequests;
  }

  // polic_uri_invalidate - computed: false, optional: true, required: false
  private _policUriInvalidate?: number; 
  public get policUriInvalidate() {
    return this.getNumberAttribute('polic_uri_invalidate');
  }
  public set policUriInvalidate(value: number) {
    this._policUriInvalidate = value;
  }
  public resetPolicUriInvalidate() {
    this._policUriInvalidate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policUriInvalidateInput() {
    return this._policUriInvalidate;
  }

  // policy_content_big - computed: false, optional: true, required: false
  private _policyContentBig?: number; 
  public get policyContentBig() {
    return this.getNumberAttribute('policy_content_big');
  }
  public set policyContentBig(value: number) {
    this._policyContentBig = value;
  }
  public resetPolicyContentBig() {
    this._policyContentBig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyContentBigInput() {
    return this._policyContentBig;
  }

  // policy_content_small - computed: false, optional: true, required: false
  private _policyContentSmall?: number; 
  public get policyContentSmall() {
    return this.getNumberAttribute('policy_content_small');
  }
  public set policyContentSmall(value: number) {
    this._policyContentSmall = value;
  }
  public resetPolicyContentSmall() {
    this._policyContentSmall = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyContentSmallInput() {
    return this._policyContentSmall;
  }

  // policy_uri_cache - computed: false, optional: true, required: false
  private _policyUriCache?: number; 
  public get policyUriCache() {
    return this.getNumberAttribute('policy_uri_cache');
  }
  public set policyUriCache(value: number) {
    this._policyUriCache = value;
  }
  public resetPolicyUriCache() {
    this._policyUriCache = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyUriCacheInput() {
    return this._policyUriCache;
  }

  // policy_uri_nocache - computed: false, optional: true, required: false
  private _policyUriNocache?: number; 
  public get policyUriNocache() {
    return this.getNumberAttribute('policy_uri_nocache');
  }
  public set policyUriNocache(value: number) {
    this._policyUriNocache = value;
  }
  public resetPolicyUriNocache() {
    this._policyUriNocache = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyUriNocacheInput() {
    return this._policyUriNocache;
  }

  // ratio304_ - computed: false, optional: true, required: false
  private _ratio304?: string; 
  public get ratio304() {
    return this.getStringAttribute('ratio304_');
  }
  public set ratio304(value: string) {
    this._ratio304 = value;
  }
  public resetRatio304() {
    this._ratio304 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ratio304Input() {
    return this._ratio304;
  }

  // resp_cache_200_ok_deflate - computed: false, optional: true, required: false
  private _respCache200OkDeflate?: number; 
  public get respCache200OkDeflate() {
    return this.getNumberAttribute('resp_cache_200_ok_deflate');
  }
  public set respCache200OkDeflate(value: number) {
    this._respCache200OkDeflate = value;
  }
  public resetRespCache200OkDeflate() {
    this._respCache200OkDeflate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get respCache200OkDeflateInput() {
    return this._respCache200OkDeflate;
  }

  // resp_cache_200_ok_gzip - computed: false, optional: true, required: false
  private _respCache200OkGzip?: number; 
  public get respCache200OkGzip() {
    return this.getNumberAttribute('resp_cache_200_ok_gzip');
  }
  public set respCache200OkGzip(value: number) {
    this._respCache200OkGzip = value;
  }
  public resetRespCache200OkGzip() {
    this._respCache200OkGzip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get respCache200OkGzipInput() {
    return this._respCache200OkGzip;
  }

  // resp_cache_200_ok_no_comp - computed: false, optional: true, required: false
  private _respCache200OkNoComp?: number; 
  public get respCache200OkNoComp() {
    return this.getNumberAttribute('resp_cache_200_ok_no_comp');
  }
  public set respCache200OkNoComp(value: number) {
    this._respCache200OkNoComp = value;
  }
  public resetRespCache200OkNoComp() {
    this._respCache200OkNoComp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get respCache200OkNoCompInput() {
    return this._respCache200OkNoComp;
  }

  // resp_cache_304_not_modified - computed: false, optional: true, required: false
  private _respCache304NotModified?: number; 
  public get respCache304NotModified() {
    return this.getNumberAttribute('resp_cache_304_not_modified');
  }
  public set respCache304NotModified(value: number) {
    this._respCache304NotModified = value;
  }
  public resetRespCache304NotModified() {
    this._respCache304NotModified = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get respCache304NotModifiedInput() {
    return this._respCache304NotModified;
  }

  // resp_cache_other - computed: false, optional: true, required: false
  private _respCacheOther?: number; 
  public get respCacheOther() {
    return this.getNumberAttribute('resp_cache_other');
  }
  public set respCacheOther(value: number) {
    this._respCacheOther = value;
  }
  public resetRespCacheOther() {
    this._respCacheOther = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get respCacheOtherInput() {
    return this._respCacheOther;
  }

  // resp_server_200_ok_chunk - computed: false, optional: true, required: false
  private _respServer200OkChunk?: number; 
  public get respServer200OkChunk() {
    return this.getNumberAttribute('resp_server_200_ok_chunk');
  }
  public set respServer200OkChunk(value: number) {
    this._respServer200OkChunk = value;
  }
  public resetRespServer200OkChunk() {
    this._respServer200OkChunk = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get respServer200OkChunkInput() {
    return this._respServer200OkChunk;
  }

  // resp_server_200_ok_cont - computed: false, optional: true, required: false
  private _respServer200OkCont?: number; 
  public get respServer200OkCont() {
    return this.getNumberAttribute('resp_server_200_ok_cont');
  }
  public set respServer200OkCont(value: number) {
    this._respServer200OkCont = value;
  }
  public resetRespServer200OkCont() {
    this._respServer200OkCont = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get respServer200OkContInput() {
    return this._respServer200OkCont;
  }

  // resp_server_304_not_modified - computed: false, optional: true, required: false
  private _respServer304NotModified?: number; 
  public get respServer304NotModified() {
    return this.getNumberAttribute('resp_server_304_not_modified');
  }
  public set respServer304NotModified(value: number) {
    this._respServer304NotModified = value;
  }
  public resetRespServer304NotModified() {
    this._respServer304NotModified = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get respServer304NotModifiedInput() {
    return this._respServer304NotModified;
  }

  // resp_server_no_cache_response - computed: false, optional: true, required: false
  private _respServerNoCacheResponse?: number; 
  public get respServerNoCacheResponse() {
    return this.getNumberAttribute('resp_server_no_cache_response');
  }
  public set respServerNoCacheResponse(value: number) {
    this._respServerNoCacheResponse = value;
  }
  public resetRespServerNoCacheResponse() {
    this._respServerNoCacheResponse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get respServerNoCacheResponseInput() {
    return this._respServerNoCacheResponse;
  }

  // resp_server_other - computed: false, optional: true, required: false
  private _respServerOther?: number; 
  public get respServerOther() {
    return this.getNumberAttribute('resp_server_other');
  }
  public set respServerOther(value: number) {
    this._respServerOther = value;
  }
  public resetRespServerOther() {
    this._respServerOther = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get respServerOtherInput() {
    return this._respServerOther;
  }

  // revalidation_failure - computed: false, optional: true, required: false
  private _revalidationFailure?: number; 
  public get revalidationFailure() {
    return this.getNumberAttribute('revalidation_failure');
  }
  public set revalidationFailure(value: number) {
    this._revalidationFailure = value;
  }
  public resetRevalidationFailure() {
    this._revalidationFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get revalidationFailureInput() {
    return this._revalidationFailure;
  }

  // revalidation_success - computed: false, optional: true, required: false
  private _revalidationSuccess?: number; 
  public get revalidationSuccess() {
    return this.getNumberAttribute('revalidation_success');
  }
  public set revalidationSuccess(value: number) {
    this._revalidationSuccess = value;
  }
  public resetRevalidationSuccess() {
    this._revalidationSuccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get revalidationSuccessInput() {
    return this._revalidationSuccess;
  }

  // total_request - computed: false, optional: true, required: false
  private _totalRequest?: number; 
  public get totalRequest() {
    return this.getNumberAttribute('total_request');
  }
  public set totalRequest(value: number) {
    this._totalRequest = value;
  }
  public resetTotalRequest() {
    this._totalRequest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalRequestInput() {
    return this._totalRequest;
  }

  // uri_name - computed: false, optional: true, required: false
  private _uriName?: string; 
  public get uriName() {
    return this.getStringAttribute('uri_name');
  }
  public set uriName(value: string) {
    this._uriName = value;
  }
  public resetUriName() {
    this._uriName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uriNameInput() {
    return this._uriName;
  }

  // virtual_port - computed: false, optional: true, required: false
  private _virtualPort?: number; 
  public get virtualPort() {
    return this.getNumberAttribute('virtual_port');
  }
  public set virtualPort(value: number) {
    this._virtualPort = value;
  }
  public resetVirtualPort() {
    this._virtualPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualPortInput() {
    return this._virtualPort;
  }

  // virtual_server - computed: false, optional: true, required: false
  private _virtualServer?: string; 
  public get virtualServer() {
    return this.getStringAttribute('virtual_server');
  }
  public set virtualServer(value: string) {
    this._virtualServer = value;
  }
  public resetVirtualServer() {
    this._virtualServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualServerInput() {
    return this._virtualServer;
  }

  // entry_list - computed: false, optional: true, required: false
  private _entryList = new DataThunderSlbRcCacheGlobalOperOperEntryListStructList(this, "entry_list", false);
  public get entryList() {
    return this._entryList;
  }
  public putEntryList(value: DataThunderSlbRcCacheGlobalOperOperEntryListStruct[] | cdktf.IResolvable) {
    this._entryList.internalValue = value;
  }
  public resetEntryList() {
    this._entryList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entryListInput() {
    return this._entryList.internalValue;
  }

  // replacement_list - computed: false, optional: true, required: false
  private _replacementList = new DataThunderSlbRcCacheGlobalOperOperReplacementListStructList(this, "replacement_list", false);
  public get replacementList() {
    return this._replacementList;
  }
  public putReplacementList(value: DataThunderSlbRcCacheGlobalOperOperReplacementListStruct[] | cdktf.IResolvable) {
    this._replacementList.internalValue = value;
  }
  public resetReplacementList() {
    this._replacementList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replacementListInput() {
    return this._replacementList.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_rc_cache_global_oper thunder_slb_rc_cache_global_oper}
*/
export class DataThunderSlbRcCacheGlobalOper extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_slb_rc_cache_global_oper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderSlbRcCacheGlobalOper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderSlbRcCacheGlobalOper to import
  * @param importFromId The id of the existing DataThunderSlbRcCacheGlobalOper that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_rc_cache_global_oper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderSlbRcCacheGlobalOper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_slb_rc_cache_global_oper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_rc_cache_global_oper thunder_slb_rc_cache_global_oper} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderSlbRcCacheGlobalOperConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderSlbRcCacheGlobalOperConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_slb_rc_cache_global_oper',
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
    this._id = config.id;
    this._oper.internalValue = config.oper;
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

  // oper - computed: false, optional: true, required: false
  private _oper = new DataThunderSlbRcCacheGlobalOperOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderSlbRcCacheGlobalOperOper) {
    this._oper.internalValue = value;
  }
  public resetOper() {
    this._oper.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operInput() {
    return this._oper.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      oper: dataThunderSlbRcCacheGlobalOperOperToTerraform(this._oper.internalValue),
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
      oper: {
        value: dataThunderSlbRcCacheGlobalOperOperToHclTerraform(this._oper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderSlbRcCacheGlobalOperOperList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
