// https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_lb_http_monitor_profile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PolicyLbHttpMonitorProfileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Description for this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_lb_http_monitor_profile#description PolicyLbHttpMonitorProfile#description}
  */
  readonly description?: string;
  /**
  * Display name for this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_lb_http_monitor_profile#display_name PolicyLbHttpMonitorProfile#display_name}
  */
  readonly displayName: string;
  /**
  * Number of consecutive checks that must fail before marking it down
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_lb_http_monitor_profile#fall_count PolicyLbHttpMonitorProfile#fall_count}
  */
  readonly fallCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_lb_http_monitor_profile#id PolicyLbHttpMonitorProfile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The frequency at which the system issues the monitor check (in seconds)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_lb_http_monitor_profile#interval PolicyLbHttpMonitorProfile#interval}
  */
  readonly interval?: number;
  /**
  * If the monitor port is specified, it would override pool member port setting for healthcheck. A port range is not supported
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_lb_http_monitor_profile#monitor_port PolicyLbHttpMonitorProfile#monitor_port}
  */
  readonly monitorPort?: number;
  /**
  * NSX ID for this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_lb_http_monitor_profile#nsx_id PolicyLbHttpMonitorProfile#nsx_id}
  */
  readonly nsxId?: string;
  /**
  * String to send as HTTP health check request body. Valid only for certain HTTP methods like POST
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_lb_http_monitor_profile#request_body PolicyLbHttpMonitorProfile#request_body}
  */
  readonly requestBody?: string;
  /**
  * Health check method for HTTP monitor type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_lb_http_monitor_profile#request_method PolicyLbHttpMonitorProfile#request_method}
  */
  readonly requestMethod?: string;
  /**
  * URL used for HTTP monitor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_lb_http_monitor_profile#request_url PolicyLbHttpMonitorProfile#request_url}
  */
  readonly requestUrl?: string;
  /**
  * HTTP request version
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_lb_http_monitor_profile#request_version PolicyLbHttpMonitorProfile#request_version}
  */
  readonly requestVersion?: string;
  /**
  * If HTTP specified, healthcheck HTTP response body is matched against the specified string (regular expressions not supported), and succeeds only if there is a match
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_lb_http_monitor_profile#response_body PolicyLbHttpMonitorProfile#response_body}
  */
  readonly responseBody?: string;
  /**
  * The HTTP response status code should be a valid HTTP status code
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_lb_http_monitor_profile#response_status_codes PolicyLbHttpMonitorProfile#response_status_codes}
  */
  readonly responseStatusCodes?: number[];
  /**
  * Number of consecutive checks that must pass before marking it up
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_lb_http_monitor_profile#rise_count PolicyLbHttpMonitorProfile#rise_count}
  */
  readonly riseCount?: number;
  /**
  * Number of seconds the target has to respond to the monitor request
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_lb_http_monitor_profile#timeout PolicyLbHttpMonitorProfile#timeout}
  */
  readonly timeout?: number;
  /**
  * request_header block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_lb_http_monitor_profile#request_header PolicyLbHttpMonitorProfile#request_header}
  */
  readonly requestHeader?: PolicyLbHttpMonitorProfileRequestHeader[] | cdktf.IResolvable;
  /**
  * tag block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_lb_http_monitor_profile#tag PolicyLbHttpMonitorProfile#tag}
  */
  readonly tag?: PolicyLbHttpMonitorProfileTag[] | cdktf.IResolvable;
}
export interface PolicyLbHttpMonitorProfileRequestHeader {
  /**
  * Header name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_lb_http_monitor_profile#name PolicyLbHttpMonitorProfile#name}
  */
  readonly name: string;
  /**
  * Header value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_lb_http_monitor_profile#value PolicyLbHttpMonitorProfile#value}
  */
  readonly value: string;
}

export function policyLbHttpMonitorProfileRequestHeaderToTerraform(struct?: PolicyLbHttpMonitorProfileRequestHeader | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function policyLbHttpMonitorProfileRequestHeaderToHclTerraform(struct?: PolicyLbHttpMonitorProfileRequestHeader | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
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

export class PolicyLbHttpMonitorProfileRequestHeaderOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PolicyLbHttpMonitorProfileRequestHeader | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicyLbHttpMonitorProfileRequestHeader | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value = value.value;
    }
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

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class PolicyLbHttpMonitorProfileRequestHeaderList extends cdktf.ComplexList {
  public internalValue? : PolicyLbHttpMonitorProfileRequestHeader[] | cdktf.IResolvable

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
  public get(index: number): PolicyLbHttpMonitorProfileRequestHeaderOutputReference {
    return new PolicyLbHttpMonitorProfileRequestHeaderOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PolicyLbHttpMonitorProfileTag {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_lb_http_monitor_profile#scope PolicyLbHttpMonitorProfile#scope}
  */
  readonly scope?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_lb_http_monitor_profile#tag PolicyLbHttpMonitorProfile#tag}
  */
  readonly tag?: string;
}

export function policyLbHttpMonitorProfileTagToTerraform(struct?: PolicyLbHttpMonitorProfileTag | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    scope: cdktf.stringToTerraform(struct!.scope),
    tag: cdktf.stringToTerraform(struct!.tag),
  }
}


export function policyLbHttpMonitorProfileTagToHclTerraform(struct?: PolicyLbHttpMonitorProfileTag | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    scope: {
      value: cdktf.stringToHclTerraform(struct!.scope),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tag: {
      value: cdktf.stringToHclTerraform(struct!.tag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PolicyLbHttpMonitorProfileTagOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PolicyLbHttpMonitorProfileTag | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._scope !== undefined) {
      hasAnyValues = true;
      internalValueResult.scope = this._scope;
    }
    if (this._tag !== undefined) {
      hasAnyValues = true;
      internalValueResult.tag = this._tag;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicyLbHttpMonitorProfileTag | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._scope = undefined;
      this._tag = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._scope = value.scope;
      this._tag = value.tag;
    }
  }

  // scope - computed: false, optional: true, required: false
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

  // tag - computed: false, optional: true, required: false
  private _tag?: string; 
  public get tag() {
    return this.getStringAttribute('tag');
  }
  public set tag(value: string) {
    this._tag = value;
  }
  public resetTag() {
    this._tag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag;
  }
}

export class PolicyLbHttpMonitorProfileTagList extends cdktf.ComplexList {
  public internalValue? : PolicyLbHttpMonitorProfileTag[] | cdktf.IResolvable

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
  public get(index: number): PolicyLbHttpMonitorProfileTagOutputReference {
    return new PolicyLbHttpMonitorProfileTagOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_lb_http_monitor_profile nsxt_policy_lb_http_monitor_profile}
*/
export class PolicyLbHttpMonitorProfile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nsxt_policy_lb_http_monitor_profile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PolicyLbHttpMonitorProfile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PolicyLbHttpMonitorProfile to import
  * @param importFromId The id of the existing PolicyLbHttpMonitorProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_lb_http_monitor_profile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PolicyLbHttpMonitorProfile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nsxt_policy_lb_http_monitor_profile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_lb_http_monitor_profile nsxt_policy_lb_http_monitor_profile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PolicyLbHttpMonitorProfileConfig
  */
  public constructor(scope: Construct, id: string, config: PolicyLbHttpMonitorProfileConfig) {
    super(scope, id, {
      terraformResourceType: 'nsxt_policy_lb_http_monitor_profile',
      terraformGeneratorMetadata: {
        providerName: 'nsxt',
        providerVersion: '3.10.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._description = config.description;
    this._displayName = config.displayName;
    this._fallCount = config.fallCount;
    this._id = config.id;
    this._interval = config.interval;
    this._monitorPort = config.monitorPort;
    this._nsxId = config.nsxId;
    this._requestBody = config.requestBody;
    this._requestMethod = config.requestMethod;
    this._requestUrl = config.requestUrl;
    this._requestVersion = config.requestVersion;
    this._responseBody = config.responseBody;
    this._responseStatusCodes = config.responseStatusCodes;
    this._riseCount = config.riseCount;
    this._timeout = config.timeout;
    this._requestHeader.internalValue = config.requestHeader;
    this._tag.internalValue = config.tag;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // display_name - computed: false, optional: false, required: true
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // fall_count - computed: false, optional: true, required: false
  private _fallCount?: number; 
  public get fallCount() {
    return this.getNumberAttribute('fall_count');
  }
  public set fallCount(value: number) {
    this._fallCount = value;
  }
  public resetFallCount() {
    this._fallCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fallCountInput() {
    return this._fallCount;
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

  // interval - computed: false, optional: true, required: false
  private _interval?: number; 
  public get interval() {
    return this.getNumberAttribute('interval');
  }
  public set interval(value: number) {
    this._interval = value;
  }
  public resetInterval() {
    this._interval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInput() {
    return this._interval;
  }

  // monitor_port - computed: false, optional: true, required: false
  private _monitorPort?: number; 
  public get monitorPort() {
    return this.getNumberAttribute('monitor_port');
  }
  public set monitorPort(value: number) {
    this._monitorPort = value;
  }
  public resetMonitorPort() {
    this._monitorPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitorPortInput() {
    return this._monitorPort;
  }

  // nsx_id - computed: true, optional: true, required: false
  private _nsxId?: string; 
  public get nsxId() {
    return this.getStringAttribute('nsx_id');
  }
  public set nsxId(value: string) {
    this._nsxId = value;
  }
  public resetNsxId() {
    this._nsxId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nsxIdInput() {
    return this._nsxId;
  }

  // path - computed: true, optional: false, required: false
  public get path() {
    return this.getStringAttribute('path');
  }

  // request_body - computed: false, optional: true, required: false
  private _requestBody?: string; 
  public get requestBody() {
    return this.getStringAttribute('request_body');
  }
  public set requestBody(value: string) {
    this._requestBody = value;
  }
  public resetRequestBody() {
    this._requestBody = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestBodyInput() {
    return this._requestBody;
  }

  // request_method - computed: false, optional: true, required: false
  private _requestMethod?: string; 
  public get requestMethod() {
    return this.getStringAttribute('request_method');
  }
  public set requestMethod(value: string) {
    this._requestMethod = value;
  }
  public resetRequestMethod() {
    this._requestMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestMethodInput() {
    return this._requestMethod;
  }

  // request_url - computed: false, optional: true, required: false
  private _requestUrl?: string; 
  public get requestUrl() {
    return this.getStringAttribute('request_url');
  }
  public set requestUrl(value: string) {
    this._requestUrl = value;
  }
  public resetRequestUrl() {
    this._requestUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestUrlInput() {
    return this._requestUrl;
  }

  // request_version - computed: false, optional: true, required: false
  private _requestVersion?: string; 
  public get requestVersion() {
    return this.getStringAttribute('request_version');
  }
  public set requestVersion(value: string) {
    this._requestVersion = value;
  }
  public resetRequestVersion() {
    this._requestVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestVersionInput() {
    return this._requestVersion;
  }

  // response_body - computed: false, optional: true, required: false
  private _responseBody?: string; 
  public get responseBody() {
    return this.getStringAttribute('response_body');
  }
  public set responseBody(value: string) {
    this._responseBody = value;
  }
  public resetResponseBody() {
    this._responseBody = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseBodyInput() {
    return this._responseBody;
  }

  // response_status_codes - computed: true, optional: true, required: false
  private _responseStatusCodes?: number[]; 
  public get responseStatusCodes() {
    return this.getNumberListAttribute('response_status_codes');
  }
  public set responseStatusCodes(value: number[]) {
    this._responseStatusCodes = value;
  }
  public resetResponseStatusCodes() {
    this._responseStatusCodes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseStatusCodesInput() {
    return this._responseStatusCodes;
  }

  // revision - computed: true, optional: false, required: false
  public get revision() {
    return this.getNumberAttribute('revision');
  }

  // rise_count - computed: false, optional: true, required: false
  private _riseCount?: number; 
  public get riseCount() {
    return this.getNumberAttribute('rise_count');
  }
  public set riseCount(value: number) {
    this._riseCount = value;
  }
  public resetRiseCount() {
    this._riseCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get riseCountInput() {
    return this._riseCount;
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

  // request_header - computed: false, optional: true, required: false
  private _requestHeader = new PolicyLbHttpMonitorProfileRequestHeaderList(this, "request_header", true);
  public get requestHeader() {
    return this._requestHeader;
  }
  public putRequestHeader(value: PolicyLbHttpMonitorProfileRequestHeader[] | cdktf.IResolvable) {
    this._requestHeader.internalValue = value;
  }
  public resetRequestHeader() {
    this._requestHeader.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestHeaderInput() {
    return this._requestHeader.internalValue;
  }

  // tag - computed: false, optional: true, required: false
  private _tag = new PolicyLbHttpMonitorProfileTagList(this, "tag", true);
  public get tag() {
    return this._tag;
  }
  public putTag(value: PolicyLbHttpMonitorProfileTag[] | cdktf.IResolvable) {
    this._tag.internalValue = value;
  }
  public resetTag() {
    this._tag.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      display_name: cdktf.stringToTerraform(this._displayName),
      fall_count: cdktf.numberToTerraform(this._fallCount),
      id: cdktf.stringToTerraform(this._id),
      interval: cdktf.numberToTerraform(this._interval),
      monitor_port: cdktf.numberToTerraform(this._monitorPort),
      nsx_id: cdktf.stringToTerraform(this._nsxId),
      request_body: cdktf.stringToTerraform(this._requestBody),
      request_method: cdktf.stringToTerraform(this._requestMethod),
      request_url: cdktf.stringToTerraform(this._requestUrl),
      request_version: cdktf.stringToTerraform(this._requestVersion),
      response_body: cdktf.stringToTerraform(this._responseBody),
      response_status_codes: cdktf.listMapper(cdktf.numberToTerraform, false)(this._responseStatusCodes),
      rise_count: cdktf.numberToTerraform(this._riseCount),
      timeout: cdktf.numberToTerraform(this._timeout),
      request_header: cdktf.listMapper(policyLbHttpMonitorProfileRequestHeaderToTerraform, true)(this._requestHeader.internalValue),
      tag: cdktf.listMapper(policyLbHttpMonitorProfileTagToTerraform, true)(this._tag.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fall_count: {
        value: cdktf.numberToHclTerraform(this._fallCount),
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
      interval: {
        value: cdktf.numberToHclTerraform(this._interval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      monitor_port: {
        value: cdktf.numberToHclTerraform(this._monitorPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      nsx_id: {
        value: cdktf.stringToHclTerraform(this._nsxId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      request_body: {
        value: cdktf.stringToHclTerraform(this._requestBody),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      request_method: {
        value: cdktf.stringToHclTerraform(this._requestMethod),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      request_url: {
        value: cdktf.stringToHclTerraform(this._requestUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      request_version: {
        value: cdktf.stringToHclTerraform(this._requestVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      response_body: {
        value: cdktf.stringToHclTerraform(this._responseBody),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      response_status_codes: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._responseStatusCodes),
        isBlock: false,
        type: "list",
        storageClassType: "numberList",
      },
      rise_count: {
        value: cdktf.numberToHclTerraform(this._riseCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      timeout: {
        value: cdktf.numberToHclTerraform(this._timeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      request_header: {
        value: cdktf.listMapperHcl(policyLbHttpMonitorProfileRequestHeaderToHclTerraform, true)(this._requestHeader.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "PolicyLbHttpMonitorProfileRequestHeaderList",
      },
      tag: {
        value: cdktf.listMapperHcl(policyLbHttpMonitorProfileTagToHclTerraform, true)(this._tag.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "PolicyLbHttpMonitorProfileTagList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
