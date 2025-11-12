// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_cache
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SlbTemplateCacheConfig extends cdktf.TerraformMetaArguments {
  /**
  * Accept reload requests via cache-control directives in HTTP headers
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_cache#accept_reload_req SlbTemplateCache#accept_reload_req}
  */
  readonly acceptReloadReq?: number;
  /**
  * Specify duration in seconds cached content valid, default is 3600 seconds (seconds that the cached content is valid (default 3600 seconds))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_cache#age SlbTemplateCache#age}
  */
  readonly age?: number;
  /**
  * Specify default policy to be to not cache
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_cache#default_policy_nocache SlbTemplateCache#default_policy_nocache}
  */
  readonly defaultPolicyNocache?: number;
  /**
  * Disable insertion of age header in response served from RAM cache
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_cache#disable_insert_age SlbTemplateCache#disable_insert_age}
  */
  readonly disableInsertAge?: number;
  /**
  * Disable insertion of via header in response served from RAM cache
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_cache#disable_insert_via SlbTemplateCache#disable_insert_via}
  */
  readonly disableInsertVia?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_cache#id SlbTemplateCache#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Specify logging template (Logging Config name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_cache#logging SlbTemplateCache#logging}
  */
  readonly logging?: string;
  /**
  * Specify maximum cache size in megabytes, default is 80MB (RAM cache size in megabytes (default 80MB))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_cache#max_cache_size SlbTemplateCache#max_cache_size}
  */
  readonly maxCacheSize?: number;
  /**
  * Maximum size (bytes) of response that can be cached - default 81920 (80KB)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_cache#max_content_size SlbTemplateCache#max_content_size}
  */
  readonly maxContentSize?: number;
  /**
  * Minimum size (bytes) of response that can be cached - default 512
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_cache#min_content_size SlbTemplateCache#min_content_size}
  */
  readonly minContentSize?: number;
  /**
  * Specify cache template name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_cache#name SlbTemplateCache#name}
  */
  readonly name: string;
  /**
  * Name of the packet capture template to be bind with this object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_cache#packet_capture_template SlbTemplateCache#packet_capture_template}
  */
  readonly packetCaptureTemplate?: string;
  /**
  * Remove cookies in response and cache
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_cache#remove_cookies SlbTemplateCache#remove_cookies}
  */
  readonly removeCookies?: number;
  /**
  * 'LFU': LFU;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_cache#replacement_policy SlbTemplateCache#replacement_policy}
  */
  readonly replacementPolicy?: string;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_cache#user_tag SlbTemplateCache#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_cache#uuid SlbTemplateCache#uuid}
  */
  readonly uuid?: string;
  /**
  * Verify request using host before sending response from RAM cache
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_cache#verify_host SlbTemplateCache#verify_host}
  */
  readonly verifyHost?: number;
  /**
  * local_uri_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_cache#local_uri_policy SlbTemplateCache#local_uri_policy}
  */
  readonly localUriPolicy?: SlbTemplateCacheLocalUriPolicy[] | cdktf.IResolvable;
  /**
  * sampling_enable block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_cache#sampling_enable SlbTemplateCache#sampling_enable}
  */
  readonly samplingEnable?: SlbTemplateCacheSamplingEnable[] | cdktf.IResolvable;
  /**
  * uri_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_cache#uri_policy SlbTemplateCache#uri_policy}
  */
  readonly uriPolicy?: SlbTemplateCacheUriPolicy[] | cdktf.IResolvable;
}
export interface SlbTemplateCacheLocalUriPolicy {
  /**
  * Specify Local URI for caching (Specify URI pattern that the policy should be applied to, maximum 63 charaters)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_cache#local_uri SlbTemplateCache#local_uri}
  */
  readonly localUri?: string;
}

export function slbTemplateCacheLocalUriPolicyToTerraform(struct?: SlbTemplateCacheLocalUriPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    local_uri: cdktf.stringToTerraform(struct!.localUri),
  }
}


export function slbTemplateCacheLocalUriPolicyToHclTerraform(struct?: SlbTemplateCacheLocalUriPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    local_uri: {
      value: cdktf.stringToHclTerraform(struct!.localUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SlbTemplateCacheLocalUriPolicyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SlbTemplateCacheLocalUriPolicy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._localUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.localUri = this._localUri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SlbTemplateCacheLocalUriPolicy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._localUri = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._localUri = value.localUri;
    }
  }

  // local_uri - computed: false, optional: true, required: false
  private _localUri?: string; 
  public get localUri() {
    return this.getStringAttribute('local_uri');
  }
  public set localUri(value: string) {
    this._localUri = value;
  }
  public resetLocalUri() {
    this._localUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localUriInput() {
    return this._localUri;
  }
}

export class SlbTemplateCacheLocalUriPolicyList extends cdktf.ComplexList {
  public internalValue? : SlbTemplateCacheLocalUriPolicy[] | cdktf.IResolvable

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
  public get(index: number): SlbTemplateCacheLocalUriPolicyOutputReference {
    return new SlbTemplateCacheLocalUriPolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SlbTemplateCacheSamplingEnable {
  /**
  * 'all': all; 'hits': Cache hits; 'miss': Cache misses; 'bytes_served': Bytes served from cache; 'total_req': Total requests received; 'caching_req': Total requests to cache; 'nc_req_header': slbTemplateCacheNcReqHeader, help nc_req_header; 'nc_res_header': slbTemplateCacheNcResHeader, help nc_res_header; 'rv_success': rv_success; 'rv_failure': slbTemplateCacheRvFailure, help rv_failure; 'ims_request': ims_request; 'nm_response': nm_response; 'rsp_type_CL': rsp_type_CL; 'rsp_type_CE': rsp_type_CE; 'rsp_type_304': rsp_type_304; 'rsp_type_other': rsp_type_other; 'rsp_no_compress': rsp_no_compress; 'rsp_gzip': rsp_gzip; 'rsp_deflate': rsp_deflate; 'rsp_other': rsp_other; 'nocache_match': nocache_match; 'match': match; 'invalidate_match': invalidate_match; 'content_toobig': slbTemplateCacheContentToobig, help content_toobig; 'content_toosmall': slbTemplateCacheContentToosmall, help content_toosmall; 'entry_create_failures': slbTemplateCacheEntryCreateFailures, help entry_create_failures; 'mem_size': mem_size; 'entry_num': entry_num; 'replaced_entry': replaced_entry; 'aging_entry': aging_entry; 'cleaned_entry': cleaned_entry; 'rsp_type_stream': rsp_type_stream; 'header_save_error': header_save_error; 'rsp_br': rsp_br;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_cache#counters1 SlbTemplateCache#counters1}
  */
  readonly counters1?: string;
}

export function slbTemplateCacheSamplingEnableToTerraform(struct?: SlbTemplateCacheSamplingEnable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    counters1: cdktf.stringToTerraform(struct!.counters1),
  }
}


export function slbTemplateCacheSamplingEnableToHclTerraform(struct?: SlbTemplateCacheSamplingEnable | cdktf.IResolvable): any {
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

export class SlbTemplateCacheSamplingEnableOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SlbTemplateCacheSamplingEnable | cdktf.IResolvable | undefined {
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

  public set internalValue(value: SlbTemplateCacheSamplingEnable | cdktf.IResolvable | undefined) {
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

export class SlbTemplateCacheSamplingEnableList extends cdktf.ComplexList {
  public internalValue? : SlbTemplateCacheSamplingEnable[] | cdktf.IResolvable

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
  public get(index: number): SlbTemplateCacheSamplingEnableOutputReference {
    return new SlbTemplateCacheSamplingEnableOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SlbTemplateCacheUriPolicy {
  /**
  * 'cache': Specify if certain URIs should be cached; 'nocache': Specify if certain URIs should not be cached;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_cache#cache_action SlbTemplateCache#cache_action}
  */
  readonly cacheAction?: string;
  /**
  * Specify seconds that content should be cached, default is age specified in cache template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_cache#cache_value SlbTemplateCache#cache_value}
  */
  readonly cacheValue?: number;
  /**
  * Specify if URI should invalidate cache entries matching pattern (pattern that would match entries to be invalidated (64 chars max))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_cache#invalidate SlbTemplateCache#invalidate}
  */
  readonly invalidate?: string;
  /**
  * Specify URI for cache policy (Specify URI pattern that the policy should be applied to, maximum 63 charaters)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_cache#uri SlbTemplateCache#uri}
  */
  readonly uri?: string;
}

export function slbTemplateCacheUriPolicyToTerraform(struct?: SlbTemplateCacheUriPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cache_action: cdktf.stringToTerraform(struct!.cacheAction),
    cache_value: cdktf.numberToTerraform(struct!.cacheValue),
    invalidate: cdktf.stringToTerraform(struct!.invalidate),
    uri: cdktf.stringToTerraform(struct!.uri),
  }
}


export function slbTemplateCacheUriPolicyToHclTerraform(struct?: SlbTemplateCacheUriPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cache_action: {
      value: cdktf.stringToHclTerraform(struct!.cacheAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cache_value: {
      value: cdktf.numberToHclTerraform(struct!.cacheValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    invalidate: {
      value: cdktf.stringToHclTerraform(struct!.invalidate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uri: {
      value: cdktf.stringToHclTerraform(struct!.uri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SlbTemplateCacheUriPolicyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SlbTemplateCacheUriPolicy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cacheAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.cacheAction = this._cacheAction;
    }
    if (this._cacheValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cacheValue = this._cacheValue;
    }
    if (this._invalidate !== undefined) {
      hasAnyValues = true;
      internalValueResult.invalidate = this._invalidate;
    }
    if (this._uri !== undefined) {
      hasAnyValues = true;
      internalValueResult.uri = this._uri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SlbTemplateCacheUriPolicy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cacheAction = undefined;
      this._cacheValue = undefined;
      this._invalidate = undefined;
      this._uri = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cacheAction = value.cacheAction;
      this._cacheValue = value.cacheValue;
      this._invalidate = value.invalidate;
      this._uri = value.uri;
    }
  }

  // cache_action - computed: false, optional: true, required: false
  private _cacheAction?: string; 
  public get cacheAction() {
    return this.getStringAttribute('cache_action');
  }
  public set cacheAction(value: string) {
    this._cacheAction = value;
  }
  public resetCacheAction() {
    this._cacheAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheActionInput() {
    return this._cacheAction;
  }

  // cache_value - computed: false, optional: true, required: false
  private _cacheValue?: number; 
  public get cacheValue() {
    return this.getNumberAttribute('cache_value');
  }
  public set cacheValue(value: number) {
    this._cacheValue = value;
  }
  public resetCacheValue() {
    this._cacheValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheValueInput() {
    return this._cacheValue;
  }

  // invalidate - computed: false, optional: true, required: false
  private _invalidate?: string; 
  public get invalidate() {
    return this.getStringAttribute('invalidate');
  }
  public set invalidate(value: string) {
    this._invalidate = value;
  }
  public resetInvalidate() {
    this._invalidate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get invalidateInput() {
    return this._invalidate;
  }

  // uri - computed: false, optional: true, required: false
  private _uri?: string; 
  public get uri() {
    return this.getStringAttribute('uri');
  }
  public set uri(value: string) {
    this._uri = value;
  }
  public resetUri() {
    this._uri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uriInput() {
    return this._uri;
  }
}

export class SlbTemplateCacheUriPolicyList extends cdktf.ComplexList {
  public internalValue? : SlbTemplateCacheUriPolicy[] | cdktf.IResolvable

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
  public get(index: number): SlbTemplateCacheUriPolicyOutputReference {
    return new SlbTemplateCacheUriPolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_cache thunder_slb_template_cache}
*/
export class SlbTemplateCache extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_slb_template_cache";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SlbTemplateCache resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SlbTemplateCache to import
  * @param importFromId The id of the existing SlbTemplateCache that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_cache#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SlbTemplateCache to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_slb_template_cache", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/slb_template_cache thunder_slb_template_cache} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SlbTemplateCacheConfig
  */
  public constructor(scope: Construct, id: string, config: SlbTemplateCacheConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_slb_template_cache',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.4.2',
        providerVersionConstraint: '1.4.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._acceptReloadReq = config.acceptReloadReq;
    this._age = config.age;
    this._defaultPolicyNocache = config.defaultPolicyNocache;
    this._disableInsertAge = config.disableInsertAge;
    this._disableInsertVia = config.disableInsertVia;
    this._id = config.id;
    this._logging = config.logging;
    this._maxCacheSize = config.maxCacheSize;
    this._maxContentSize = config.maxContentSize;
    this._minContentSize = config.minContentSize;
    this._name = config.name;
    this._packetCaptureTemplate = config.packetCaptureTemplate;
    this._removeCookies = config.removeCookies;
    this._replacementPolicy = config.replacementPolicy;
    this._userTag = config.userTag;
    this._uuid = config.uuid;
    this._verifyHost = config.verifyHost;
    this._localUriPolicy.internalValue = config.localUriPolicy;
    this._samplingEnable.internalValue = config.samplingEnable;
    this._uriPolicy.internalValue = config.uriPolicy;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // accept_reload_req - computed: false, optional: true, required: false
  private _acceptReloadReq?: number; 
  public get acceptReloadReq() {
    return this.getNumberAttribute('accept_reload_req');
  }
  public set acceptReloadReq(value: number) {
    this._acceptReloadReq = value;
  }
  public resetAcceptReloadReq() {
    this._acceptReloadReq = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acceptReloadReqInput() {
    return this._acceptReloadReq;
  }

  // age - computed: false, optional: true, required: false
  private _age?: number; 
  public get age() {
    return this.getNumberAttribute('age');
  }
  public set age(value: number) {
    this._age = value;
  }
  public resetAge() {
    this._age = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ageInput() {
    return this._age;
  }

  // default_policy_nocache - computed: false, optional: true, required: false
  private _defaultPolicyNocache?: number; 
  public get defaultPolicyNocache() {
    return this.getNumberAttribute('default_policy_nocache');
  }
  public set defaultPolicyNocache(value: number) {
    this._defaultPolicyNocache = value;
  }
  public resetDefaultPolicyNocache() {
    this._defaultPolicyNocache = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultPolicyNocacheInput() {
    return this._defaultPolicyNocache;
  }

  // disable_insert_age - computed: false, optional: true, required: false
  private _disableInsertAge?: number; 
  public get disableInsertAge() {
    return this.getNumberAttribute('disable_insert_age');
  }
  public set disableInsertAge(value: number) {
    this._disableInsertAge = value;
  }
  public resetDisableInsertAge() {
    this._disableInsertAge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableInsertAgeInput() {
    return this._disableInsertAge;
  }

  // disable_insert_via - computed: false, optional: true, required: false
  private _disableInsertVia?: number; 
  public get disableInsertVia() {
    return this.getNumberAttribute('disable_insert_via');
  }
  public set disableInsertVia(value: number) {
    this._disableInsertVia = value;
  }
  public resetDisableInsertVia() {
    this._disableInsertVia = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableInsertViaInput() {
    return this._disableInsertVia;
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

  // logging - computed: false, optional: true, required: false
  private _logging?: string; 
  public get logging() {
    return this.getStringAttribute('logging');
  }
  public set logging(value: string) {
    this._logging = value;
  }
  public resetLogging() {
    this._logging = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loggingInput() {
    return this._logging;
  }

  // max_cache_size - computed: false, optional: true, required: false
  private _maxCacheSize?: number; 
  public get maxCacheSize() {
    return this.getNumberAttribute('max_cache_size');
  }
  public set maxCacheSize(value: number) {
    this._maxCacheSize = value;
  }
  public resetMaxCacheSize() {
    this._maxCacheSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxCacheSizeInput() {
    return this._maxCacheSize;
  }

  // max_content_size - computed: false, optional: true, required: false
  private _maxContentSize?: number; 
  public get maxContentSize() {
    return this.getNumberAttribute('max_content_size');
  }
  public set maxContentSize(value: number) {
    this._maxContentSize = value;
  }
  public resetMaxContentSize() {
    this._maxContentSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxContentSizeInput() {
    return this._maxContentSize;
  }

  // min_content_size - computed: false, optional: true, required: false
  private _minContentSize?: number; 
  public get minContentSize() {
    return this.getNumberAttribute('min_content_size');
  }
  public set minContentSize(value: number) {
    this._minContentSize = value;
  }
  public resetMinContentSize() {
    this._minContentSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minContentSizeInput() {
    return this._minContentSize;
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

  // remove_cookies - computed: false, optional: true, required: false
  private _removeCookies?: number; 
  public get removeCookies() {
    return this.getNumberAttribute('remove_cookies');
  }
  public set removeCookies(value: number) {
    this._removeCookies = value;
  }
  public resetRemoveCookies() {
    this._removeCookies = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get removeCookiesInput() {
    return this._removeCookies;
  }

  // replacement_policy - computed: false, optional: true, required: false
  private _replacementPolicy?: string; 
  public get replacementPolicy() {
    return this.getStringAttribute('replacement_policy');
  }
  public set replacementPolicy(value: string) {
    this._replacementPolicy = value;
  }
  public resetReplacementPolicy() {
    this._replacementPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replacementPolicyInput() {
    return this._replacementPolicy;
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

  // verify_host - computed: false, optional: true, required: false
  private _verifyHost?: number; 
  public get verifyHost() {
    return this.getNumberAttribute('verify_host');
  }
  public set verifyHost(value: number) {
    this._verifyHost = value;
  }
  public resetVerifyHost() {
    this._verifyHost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verifyHostInput() {
    return this._verifyHost;
  }

  // local_uri_policy - computed: false, optional: true, required: false
  private _localUriPolicy = new SlbTemplateCacheLocalUriPolicyList(this, "local_uri_policy", false);
  public get localUriPolicy() {
    return this._localUriPolicy;
  }
  public putLocalUriPolicy(value: SlbTemplateCacheLocalUriPolicy[] | cdktf.IResolvable) {
    this._localUriPolicy.internalValue = value;
  }
  public resetLocalUriPolicy() {
    this._localUriPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localUriPolicyInput() {
    return this._localUriPolicy.internalValue;
  }

  // sampling_enable - computed: false, optional: true, required: false
  private _samplingEnable = new SlbTemplateCacheSamplingEnableList(this, "sampling_enable", false);
  public get samplingEnable() {
    return this._samplingEnable;
  }
  public putSamplingEnable(value: SlbTemplateCacheSamplingEnable[] | cdktf.IResolvable) {
    this._samplingEnable.internalValue = value;
  }
  public resetSamplingEnable() {
    this._samplingEnable.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samplingEnableInput() {
    return this._samplingEnable.internalValue;
  }

  // uri_policy - computed: false, optional: true, required: false
  private _uriPolicy = new SlbTemplateCacheUriPolicyList(this, "uri_policy", false);
  public get uriPolicy() {
    return this._uriPolicy;
  }
  public putUriPolicy(value: SlbTemplateCacheUriPolicy[] | cdktf.IResolvable) {
    this._uriPolicy.internalValue = value;
  }
  public resetUriPolicy() {
    this._uriPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uriPolicyInput() {
    return this._uriPolicy.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      accept_reload_req: cdktf.numberToTerraform(this._acceptReloadReq),
      age: cdktf.numberToTerraform(this._age),
      default_policy_nocache: cdktf.numberToTerraform(this._defaultPolicyNocache),
      disable_insert_age: cdktf.numberToTerraform(this._disableInsertAge),
      disable_insert_via: cdktf.numberToTerraform(this._disableInsertVia),
      id: cdktf.stringToTerraform(this._id),
      logging: cdktf.stringToTerraform(this._logging),
      max_cache_size: cdktf.numberToTerraform(this._maxCacheSize),
      max_content_size: cdktf.numberToTerraform(this._maxContentSize),
      min_content_size: cdktf.numberToTerraform(this._minContentSize),
      name: cdktf.stringToTerraform(this._name),
      packet_capture_template: cdktf.stringToTerraform(this._packetCaptureTemplate),
      remove_cookies: cdktf.numberToTerraform(this._removeCookies),
      replacement_policy: cdktf.stringToTerraform(this._replacementPolicy),
      user_tag: cdktf.stringToTerraform(this._userTag),
      uuid: cdktf.stringToTerraform(this._uuid),
      verify_host: cdktf.numberToTerraform(this._verifyHost),
      local_uri_policy: cdktf.listMapper(slbTemplateCacheLocalUriPolicyToTerraform, true)(this._localUriPolicy.internalValue),
      sampling_enable: cdktf.listMapper(slbTemplateCacheSamplingEnableToTerraform, true)(this._samplingEnable.internalValue),
      uri_policy: cdktf.listMapper(slbTemplateCacheUriPolicyToTerraform, true)(this._uriPolicy.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      accept_reload_req: {
        value: cdktf.numberToHclTerraform(this._acceptReloadReq),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      age: {
        value: cdktf.numberToHclTerraform(this._age),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      default_policy_nocache: {
        value: cdktf.numberToHclTerraform(this._defaultPolicyNocache),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      disable_insert_age: {
        value: cdktf.numberToHclTerraform(this._disableInsertAge),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      disable_insert_via: {
        value: cdktf.numberToHclTerraform(this._disableInsertVia),
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
      logging: {
        value: cdktf.stringToHclTerraform(this._logging),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_cache_size: {
        value: cdktf.numberToHclTerraform(this._maxCacheSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      max_content_size: {
        value: cdktf.numberToHclTerraform(this._maxContentSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      min_content_size: {
        value: cdktf.numberToHclTerraform(this._minContentSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
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
      remove_cookies: {
        value: cdktf.numberToHclTerraform(this._removeCookies),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      replacement_policy: {
        value: cdktf.stringToHclTerraform(this._replacementPolicy),
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
      verify_host: {
        value: cdktf.numberToHclTerraform(this._verifyHost),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      local_uri_policy: {
        value: cdktf.listMapperHcl(slbTemplateCacheLocalUriPolicyToHclTerraform, true)(this._localUriPolicy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SlbTemplateCacheLocalUriPolicyList",
      },
      sampling_enable: {
        value: cdktf.listMapperHcl(slbTemplateCacheSamplingEnableToHclTerraform, true)(this._samplingEnable.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SlbTemplateCacheSamplingEnableList",
      },
      uri_policy: {
        value: cdktf.listMapperHcl(slbTemplateCacheUriPolicyToHclTerraform, true)(this._uriPolicy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SlbTemplateCacheUriPolicyList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
