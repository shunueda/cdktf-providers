// https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/lb_http_application_profile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LbHttpApplicationProfileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Description of this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/lb_http_application_profile#description LbHttpApplicationProfile#description}
  */
  readonly description?: string;
  /**
  * The display name of this resource. Defaults to ID if not set
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/lb_http_application_profile#display_name LbHttpApplicationProfile#display_name}
  */
  readonly displayName?: string;
  /**
  * A URL that incoming requests for that virtual server can be temporarily redirected to, If a website is temporarily down or has moved
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/lb_http_application_profile#http_redirect_to LbHttpApplicationProfile#http_redirect_to}
  */
  readonly httpRedirectTo?: string;
  /**
  * A boolean flag which reflects whether the client will automatically be redirected to use SSL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/lb_http_application_profile#http_redirect_to_https LbHttpApplicationProfile#http_redirect_to_https}
  */
  readonly httpRedirectToHttps?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/lb_http_application_profile#id LbHttpApplicationProfile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Timeout in seconds to specify how long an HTTP application can remain idle
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/lb_http_application_profile#idle_timeout LbHttpApplicationProfile#idle_timeout}
  */
  readonly idleTimeout?: number;
  /**
  * A boolean flag which reflects whether NTLM challenge/response methodology will be used over HTTP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/lb_http_application_profile#ntlm LbHttpApplicationProfile#ntlm}
  */
  readonly ntlm?: boolean | cdktf.IResolvable;
  /**
  * Maximum request body size in bytes (Unlimited if not specified)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/lb_http_application_profile#request_body_size LbHttpApplicationProfile#request_body_size}
  */
  readonly requestBodySize?: number;
  /**
  * Maximum request header size in bytes. Requests with larger header size will be processed as best effort whereas a request with header below this specified size is guaranteed to be processed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/lb_http_application_profile#request_header_size LbHttpApplicationProfile#request_header_size}
  */
  readonly requestHeaderSize?: number;
  /**
  * Number of seconds waiting for the server response before the connection is closed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/lb_http_application_profile#response_timeout LbHttpApplicationProfile#response_timeout}
  */
  readonly responseTimeout?: number;
  /**
  * When this value is set, the x_forwarded_for header in the incoming request will be inserted or replaced
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/lb_http_application_profile#x_forwarded_for LbHttpApplicationProfile#x_forwarded_for}
  */
  readonly xForwardedFor?: string;
  /**
  * tag block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/lb_http_application_profile#tag LbHttpApplicationProfile#tag}
  */
  readonly tag?: LbHttpApplicationProfileTag[] | cdktf.IResolvable;
}
export interface LbHttpApplicationProfileTag {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/lb_http_application_profile#scope LbHttpApplicationProfile#scope}
  */
  readonly scope?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/lb_http_application_profile#tag LbHttpApplicationProfile#tag}
  */
  readonly tag?: string;
}

export function lbHttpApplicationProfileTagToTerraform(struct?: LbHttpApplicationProfileTag | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    scope: cdktf.stringToTerraform(struct!.scope),
    tag: cdktf.stringToTerraform(struct!.tag),
  }
}


export function lbHttpApplicationProfileTagToHclTerraform(struct?: LbHttpApplicationProfileTag | cdktf.IResolvable): any {
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

export class LbHttpApplicationProfileTagOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LbHttpApplicationProfileTag | cdktf.IResolvable | undefined {
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

  public set internalValue(value: LbHttpApplicationProfileTag | cdktf.IResolvable | undefined) {
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

export class LbHttpApplicationProfileTagList extends cdktf.ComplexList {
  public internalValue? : LbHttpApplicationProfileTag[] | cdktf.IResolvable

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
  public get(index: number): LbHttpApplicationProfileTagOutputReference {
    return new LbHttpApplicationProfileTagOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/lb_http_application_profile nsxt_lb_http_application_profile}
*/
export class LbHttpApplicationProfile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nsxt_lb_http_application_profile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a LbHttpApplicationProfile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LbHttpApplicationProfile to import
  * @param importFromId The id of the existing LbHttpApplicationProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/lb_http_application_profile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LbHttpApplicationProfile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nsxt_lb_http_application_profile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/lb_http_application_profile nsxt_lb_http_application_profile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LbHttpApplicationProfileConfig = {}
  */
  public constructor(scope: Construct, id: string, config: LbHttpApplicationProfileConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'nsxt_lb_http_application_profile',
      terraformGeneratorMetadata: {
        providerName: 'nsxt',
        providerVersion: '3.10.0',
        providerVersionConstraint: '3.10.0'
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
    this._httpRedirectTo = config.httpRedirectTo;
    this._httpRedirectToHttps = config.httpRedirectToHttps;
    this._id = config.id;
    this._idleTimeout = config.idleTimeout;
    this._ntlm = config.ntlm;
    this._requestBodySize = config.requestBodySize;
    this._requestHeaderSize = config.requestHeaderSize;
    this._responseTimeout = config.responseTimeout;
    this._xForwardedFor = config.xForwardedFor;
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

  // display_name - computed: true, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // http_redirect_to - computed: false, optional: true, required: false
  private _httpRedirectTo?: string; 
  public get httpRedirectTo() {
    return this.getStringAttribute('http_redirect_to');
  }
  public set httpRedirectTo(value: string) {
    this._httpRedirectTo = value;
  }
  public resetHttpRedirectTo() {
    this._httpRedirectTo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpRedirectToInput() {
    return this._httpRedirectTo;
  }

  // http_redirect_to_https - computed: false, optional: true, required: false
  private _httpRedirectToHttps?: boolean | cdktf.IResolvable; 
  public get httpRedirectToHttps() {
    return this.getBooleanAttribute('http_redirect_to_https');
  }
  public set httpRedirectToHttps(value: boolean | cdktf.IResolvable) {
    this._httpRedirectToHttps = value;
  }
  public resetHttpRedirectToHttps() {
    this._httpRedirectToHttps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpRedirectToHttpsInput() {
    return this._httpRedirectToHttps;
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

  // idle_timeout - computed: false, optional: true, required: false
  private _idleTimeout?: number; 
  public get idleTimeout() {
    return this.getNumberAttribute('idle_timeout');
  }
  public set idleTimeout(value: number) {
    this._idleTimeout = value;
  }
  public resetIdleTimeout() {
    this._idleTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idleTimeoutInput() {
    return this._idleTimeout;
  }

  // ntlm - computed: false, optional: true, required: false
  private _ntlm?: boolean | cdktf.IResolvable; 
  public get ntlm() {
    return this.getBooleanAttribute('ntlm');
  }
  public set ntlm(value: boolean | cdktf.IResolvable) {
    this._ntlm = value;
  }
  public resetNtlm() {
    this._ntlm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ntlmInput() {
    return this._ntlm;
  }

  // request_body_size - computed: false, optional: true, required: false
  private _requestBodySize?: number; 
  public get requestBodySize() {
    return this.getNumberAttribute('request_body_size');
  }
  public set requestBodySize(value: number) {
    this._requestBodySize = value;
  }
  public resetRequestBodySize() {
    this._requestBodySize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestBodySizeInput() {
    return this._requestBodySize;
  }

  // request_header_size - computed: false, optional: true, required: false
  private _requestHeaderSize?: number; 
  public get requestHeaderSize() {
    return this.getNumberAttribute('request_header_size');
  }
  public set requestHeaderSize(value: number) {
    this._requestHeaderSize = value;
  }
  public resetRequestHeaderSize() {
    this._requestHeaderSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestHeaderSizeInput() {
    return this._requestHeaderSize;
  }

  // response_timeout - computed: false, optional: true, required: false
  private _responseTimeout?: number; 
  public get responseTimeout() {
    return this.getNumberAttribute('response_timeout');
  }
  public set responseTimeout(value: number) {
    this._responseTimeout = value;
  }
  public resetResponseTimeout() {
    this._responseTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseTimeoutInput() {
    return this._responseTimeout;
  }

  // revision - computed: true, optional: false, required: false
  public get revision() {
    return this.getNumberAttribute('revision');
  }

  // x_forwarded_for - computed: false, optional: true, required: false
  private _xForwardedFor?: string; 
  public get xForwardedFor() {
    return this.getStringAttribute('x_forwarded_for');
  }
  public set xForwardedFor(value: string) {
    this._xForwardedFor = value;
  }
  public resetXForwardedFor() {
    this._xForwardedFor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xForwardedForInput() {
    return this._xForwardedFor;
  }

  // tag - computed: false, optional: true, required: false
  private _tag = new LbHttpApplicationProfileTagList(this, "tag", true);
  public get tag() {
    return this._tag;
  }
  public putTag(value: LbHttpApplicationProfileTag[] | cdktf.IResolvable) {
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
      http_redirect_to: cdktf.stringToTerraform(this._httpRedirectTo),
      http_redirect_to_https: cdktf.booleanToTerraform(this._httpRedirectToHttps),
      id: cdktf.stringToTerraform(this._id),
      idle_timeout: cdktf.numberToTerraform(this._idleTimeout),
      ntlm: cdktf.booleanToTerraform(this._ntlm),
      request_body_size: cdktf.numberToTerraform(this._requestBodySize),
      request_header_size: cdktf.numberToTerraform(this._requestHeaderSize),
      response_timeout: cdktf.numberToTerraform(this._responseTimeout),
      x_forwarded_for: cdktf.stringToTerraform(this._xForwardedFor),
      tag: cdktf.listMapper(lbHttpApplicationProfileTagToTerraform, true)(this._tag.internalValue),
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
      http_redirect_to: {
        value: cdktf.stringToHclTerraform(this._httpRedirectTo),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      http_redirect_to_https: {
        value: cdktf.booleanToHclTerraform(this._httpRedirectToHttps),
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
      idle_timeout: {
        value: cdktf.numberToHclTerraform(this._idleTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ntlm: {
        value: cdktf.booleanToHclTerraform(this._ntlm),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      request_body_size: {
        value: cdktf.numberToHclTerraform(this._requestBodySize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      request_header_size: {
        value: cdktf.numberToHclTerraform(this._requestHeaderSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      response_timeout: {
        value: cdktf.numberToHclTerraform(this._responseTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      x_forwarded_for: {
        value: cdktf.stringToHclTerraform(this._xForwardedFor),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tag: {
        value: cdktf.listMapperHcl(lbHttpApplicationProfileTagToHclTerraform, true)(this._tag.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "LbHttpApplicationProfileTagList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
