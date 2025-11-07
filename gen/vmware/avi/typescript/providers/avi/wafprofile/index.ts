// https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafprofile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WafprofileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafprofile#description Wafprofile#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafprofile#id Wafprofile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafprofile#name Wafprofile#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafprofile#tenant_ref Wafprofile#tenant_ref}
  */
  readonly tenantRef?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafprofile#uuid Wafprofile#uuid}
  */
  readonly uuid?: string;
  /**
  * config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafprofile#config Wafprofile#config}
  */
  readonly config: WafprofileConfigA[] | cdktf.IResolvable;
  /**
  * configpb_attributes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafprofile#configpb_attributes Wafprofile#configpb_attributes}
  */
  readonly configpbAttributes?: WafprofileConfigpbAttributes[] | cdktf.IResolvable;
  /**
  * files block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafprofile#files Wafprofile#files}
  */
  readonly files?: WafprofileFiles[] | cdktf.IResolvable;
  /**
  * markers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafprofile#markers Wafprofile#markers}
  */
  readonly markers?: WafprofileMarkers[] | cdktf.IResolvable;
}
export interface WafprofileConfigContentTypeMappings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafprofile#content_type Wafprofile#content_type}
  */
  readonly contentType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafprofile#match_op Wafprofile#match_op}
  */
  readonly matchOp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafprofile#request_body_parser Wafprofile#request_body_parser}
  */
  readonly requestBodyParser: string;
}

export function wafprofileConfigContentTypeMappingsToTerraform(struct?: WafprofileConfigContentTypeMappings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    content_type: cdktf.stringToTerraform(struct!.contentType),
    match_op: cdktf.stringToTerraform(struct!.matchOp),
    request_body_parser: cdktf.stringToTerraform(struct!.requestBodyParser),
  }
}


export function wafprofileConfigContentTypeMappingsToHclTerraform(struct?: WafprofileConfigContentTypeMappings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    content_type: {
      value: cdktf.stringToHclTerraform(struct!.contentType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    match_op: {
      value: cdktf.stringToHclTerraform(struct!.matchOp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    request_body_parser: {
      value: cdktf.stringToHclTerraform(struct!.requestBodyParser),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WafprofileConfigContentTypeMappingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WafprofileConfigContentTypeMappings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._contentType !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentType = this._contentType;
    }
    if (this._matchOp !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchOp = this._matchOp;
    }
    if (this._requestBodyParser !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestBodyParser = this._requestBodyParser;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WafprofileConfigContentTypeMappings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._contentType = undefined;
      this._matchOp = undefined;
      this._requestBodyParser = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._contentType = value.contentType;
      this._matchOp = value.matchOp;
      this._requestBodyParser = value.requestBodyParser;
    }
  }

  // content_type - computed: false, optional: false, required: true
  private _contentType?: string; 
  public get contentType() {
    return this.getStringAttribute('content_type');
  }
  public set contentType(value: string) {
    this._contentType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contentTypeInput() {
    return this._contentType;
  }

  // match_op - computed: false, optional: true, required: false
  private _matchOp?: string; 
  public get matchOp() {
    return this.getStringAttribute('match_op');
  }
  public set matchOp(value: string) {
    this._matchOp = value;
  }
  public resetMatchOp() {
    this._matchOp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchOpInput() {
    return this._matchOp;
  }

  // request_body_parser - computed: false, optional: false, required: true
  private _requestBodyParser?: string; 
  public get requestBodyParser() {
    return this.getStringAttribute('request_body_parser');
  }
  public set requestBodyParser(value: string) {
    this._requestBodyParser = value;
  }
  // Temporarily expose input value. Use with caution.
  public get requestBodyParserInput() {
    return this._requestBodyParser;
  }
}

export class WafprofileConfigContentTypeMappingsList extends cdktf.ComplexList {
  public internalValue? : WafprofileConfigContentTypeMappings[] | cdktf.IResolvable

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
  public get(index: number): WafprofileConfigContentTypeMappingsOutputReference {
    return new WafprofileConfigContentTypeMappingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WafprofileConfigA {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafprofile#allowed_http_versions Wafprofile#allowed_http_versions}
  */
  readonly allowedHttpVersions?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafprofile#allowed_methods Wafprofile#allowed_methods}
  */
  readonly allowedMethods?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafprofile#allowed_request_content_type_charsets Wafprofile#allowed_request_content_type_charsets}
  */
  readonly allowedRequestContentTypeCharsets?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafprofile#argument_separator Wafprofile#argument_separator}
  */
  readonly argumentSeparator?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafprofile#client_request_max_body_size Wafprofile#client_request_max_body_size}
  */
  readonly clientRequestMaxBodySize?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafprofile#cookie_format_version Wafprofile#cookie_format_version}
  */
  readonly cookieFormatVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafprofile#ignore_incomplete_request_body_error Wafprofile#ignore_incomplete_request_body_error}
  */
  readonly ignoreIncompleteRequestBodyError?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafprofile#max_execution_time Wafprofile#max_execution_time}
  */
  readonly maxExecutionTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafprofile#regex_match_limit Wafprofile#regex_match_limit}
  */
  readonly regexMatchLimit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafprofile#regex_recursion_limit Wafprofile#regex_recursion_limit}
  */
  readonly regexRecursionLimit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafprofile#request_body_default_action Wafprofile#request_body_default_action}
  */
  readonly requestBodyDefaultAction?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafprofile#request_hdr_default_action Wafprofile#request_hdr_default_action}
  */
  readonly requestHdrDefaultAction?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafprofile#response_body_default_action Wafprofile#response_body_default_action}
  */
  readonly responseBodyDefaultAction?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafprofile#response_hdr_default_action Wafprofile#response_hdr_default_action}
  */
  readonly responseHdrDefaultAction?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafprofile#restricted_extensions Wafprofile#restricted_extensions}
  */
  readonly restrictedExtensions?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafprofile#restricted_headers Wafprofile#restricted_headers}
  */
  readonly restrictedHeaders?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafprofile#send_status_header Wafprofile#send_status_header}
  */
  readonly sendStatusHeader?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafprofile#server_response_max_body_size Wafprofile#server_response_max_body_size}
  */
  readonly serverResponseMaxBodySize?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafprofile#static_extensions Wafprofile#static_extensions}
  */
  readonly staticExtensions?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafprofile#status_code_for_rejected_requests Wafprofile#status_code_for_rejected_requests}
  */
  readonly statusCodeForRejectedRequests?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafprofile#status_header_name Wafprofile#status_header_name}
  */
  readonly statusHeaderName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafprofile#xml_xxe_protection Wafprofile#xml_xxe_protection}
  */
  readonly xmlXxeProtection?: string;
  /**
  * content_type_mappings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafprofile#content_type_mappings Wafprofile#content_type_mappings}
  */
  readonly contentTypeMappings?: WafprofileConfigContentTypeMappings[] | cdktf.IResolvable;
}

export function wafprofileConfigAToTerraform(struct?: WafprofileConfigA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed_http_versions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowedHttpVersions),
    allowed_methods: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowedMethods),
    allowed_request_content_type_charsets: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowedRequestContentTypeCharsets),
    argument_separator: cdktf.stringToTerraform(struct!.argumentSeparator),
    client_request_max_body_size: cdktf.stringToTerraform(struct!.clientRequestMaxBodySize),
    cookie_format_version: cdktf.stringToTerraform(struct!.cookieFormatVersion),
    ignore_incomplete_request_body_error: cdktf.stringToTerraform(struct!.ignoreIncompleteRequestBodyError),
    max_execution_time: cdktf.stringToTerraform(struct!.maxExecutionTime),
    regex_match_limit: cdktf.stringToTerraform(struct!.regexMatchLimit),
    regex_recursion_limit: cdktf.stringToTerraform(struct!.regexRecursionLimit),
    request_body_default_action: cdktf.stringToTerraform(struct!.requestBodyDefaultAction),
    request_hdr_default_action: cdktf.stringToTerraform(struct!.requestHdrDefaultAction),
    response_body_default_action: cdktf.stringToTerraform(struct!.responseBodyDefaultAction),
    response_hdr_default_action: cdktf.stringToTerraform(struct!.responseHdrDefaultAction),
    restricted_extensions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.restrictedExtensions),
    restricted_headers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.restrictedHeaders),
    send_status_header: cdktf.stringToTerraform(struct!.sendStatusHeader),
    server_response_max_body_size: cdktf.stringToTerraform(struct!.serverResponseMaxBodySize),
    static_extensions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.staticExtensions),
    status_code_for_rejected_requests: cdktf.stringToTerraform(struct!.statusCodeForRejectedRequests),
    status_header_name: cdktf.stringToTerraform(struct!.statusHeaderName),
    xml_xxe_protection: cdktf.stringToTerraform(struct!.xmlXxeProtection),
    content_type_mappings: cdktf.listMapper(wafprofileConfigContentTypeMappingsToTerraform, true)(struct!.contentTypeMappings),
  }
}


export function wafprofileConfigAToHclTerraform(struct?: WafprofileConfigA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allowed_http_versions: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowedHttpVersions),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    allowed_methods: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowedMethods),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    allowed_request_content_type_charsets: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowedRequestContentTypeCharsets),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    argument_separator: {
      value: cdktf.stringToHclTerraform(struct!.argumentSeparator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_request_max_body_size: {
      value: cdktf.stringToHclTerraform(struct!.clientRequestMaxBodySize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cookie_format_version: {
      value: cdktf.stringToHclTerraform(struct!.cookieFormatVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ignore_incomplete_request_body_error: {
      value: cdktf.stringToHclTerraform(struct!.ignoreIncompleteRequestBodyError),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_execution_time: {
      value: cdktf.stringToHclTerraform(struct!.maxExecutionTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    regex_match_limit: {
      value: cdktf.stringToHclTerraform(struct!.regexMatchLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    regex_recursion_limit: {
      value: cdktf.stringToHclTerraform(struct!.regexRecursionLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    request_body_default_action: {
      value: cdktf.stringToHclTerraform(struct!.requestBodyDefaultAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    request_hdr_default_action: {
      value: cdktf.stringToHclTerraform(struct!.requestHdrDefaultAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    response_body_default_action: {
      value: cdktf.stringToHclTerraform(struct!.responseBodyDefaultAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    response_hdr_default_action: {
      value: cdktf.stringToHclTerraform(struct!.responseHdrDefaultAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    restricted_extensions: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.restrictedExtensions),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    restricted_headers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.restrictedHeaders),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    send_status_header: {
      value: cdktf.stringToHclTerraform(struct!.sendStatusHeader),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    server_response_max_body_size: {
      value: cdktf.stringToHclTerraform(struct!.serverResponseMaxBodySize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    static_extensions: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.staticExtensions),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    status_code_for_rejected_requests: {
      value: cdktf.stringToHclTerraform(struct!.statusCodeForRejectedRequests),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    status_header_name: {
      value: cdktf.stringToHclTerraform(struct!.statusHeaderName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    xml_xxe_protection: {
      value: cdktf.stringToHclTerraform(struct!.xmlXxeProtection),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    content_type_mappings: {
      value: cdktf.listMapperHcl(wafprofileConfigContentTypeMappingsToHclTerraform, true)(struct!.contentTypeMappings),
      isBlock: true,
      type: "list",
      storageClassType: "WafprofileConfigContentTypeMappingsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WafprofileConfigAOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WafprofileConfigA | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedHttpVersions !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedHttpVersions = this._allowedHttpVersions;
    }
    if (this._allowedMethods !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedMethods = this._allowedMethods;
    }
    if (this._allowedRequestContentTypeCharsets !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedRequestContentTypeCharsets = this._allowedRequestContentTypeCharsets;
    }
    if (this._argumentSeparator !== undefined) {
      hasAnyValues = true;
      internalValueResult.argumentSeparator = this._argumentSeparator;
    }
    if (this._clientRequestMaxBodySize !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientRequestMaxBodySize = this._clientRequestMaxBodySize;
    }
    if (this._cookieFormatVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.cookieFormatVersion = this._cookieFormatVersion;
    }
    if (this._ignoreIncompleteRequestBodyError !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreIncompleteRequestBodyError = this._ignoreIncompleteRequestBodyError;
    }
    if (this._maxExecutionTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxExecutionTime = this._maxExecutionTime;
    }
    if (this._regexMatchLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.regexMatchLimit = this._regexMatchLimit;
    }
    if (this._regexRecursionLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.regexRecursionLimit = this._regexRecursionLimit;
    }
    if (this._requestBodyDefaultAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestBodyDefaultAction = this._requestBodyDefaultAction;
    }
    if (this._requestHdrDefaultAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestHdrDefaultAction = this._requestHdrDefaultAction;
    }
    if (this._responseBodyDefaultAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseBodyDefaultAction = this._responseBodyDefaultAction;
    }
    if (this._responseHdrDefaultAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseHdrDefaultAction = this._responseHdrDefaultAction;
    }
    if (this._restrictedExtensions !== undefined) {
      hasAnyValues = true;
      internalValueResult.restrictedExtensions = this._restrictedExtensions;
    }
    if (this._restrictedHeaders !== undefined) {
      hasAnyValues = true;
      internalValueResult.restrictedHeaders = this._restrictedHeaders;
    }
    if (this._sendStatusHeader !== undefined) {
      hasAnyValues = true;
      internalValueResult.sendStatusHeader = this._sendStatusHeader;
    }
    if (this._serverResponseMaxBodySize !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverResponseMaxBodySize = this._serverResponseMaxBodySize;
    }
    if (this._staticExtensions !== undefined) {
      hasAnyValues = true;
      internalValueResult.staticExtensions = this._staticExtensions;
    }
    if (this._statusCodeForRejectedRequests !== undefined) {
      hasAnyValues = true;
      internalValueResult.statusCodeForRejectedRequests = this._statusCodeForRejectedRequests;
    }
    if (this._statusHeaderName !== undefined) {
      hasAnyValues = true;
      internalValueResult.statusHeaderName = this._statusHeaderName;
    }
    if (this._xmlXxeProtection !== undefined) {
      hasAnyValues = true;
      internalValueResult.xmlXxeProtection = this._xmlXxeProtection;
    }
    if (this._contentTypeMappings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentTypeMappings = this._contentTypeMappings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WafprofileConfigA | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowedHttpVersions = undefined;
      this._allowedMethods = undefined;
      this._allowedRequestContentTypeCharsets = undefined;
      this._argumentSeparator = undefined;
      this._clientRequestMaxBodySize = undefined;
      this._cookieFormatVersion = undefined;
      this._ignoreIncompleteRequestBodyError = undefined;
      this._maxExecutionTime = undefined;
      this._regexMatchLimit = undefined;
      this._regexRecursionLimit = undefined;
      this._requestBodyDefaultAction = undefined;
      this._requestHdrDefaultAction = undefined;
      this._responseBodyDefaultAction = undefined;
      this._responseHdrDefaultAction = undefined;
      this._restrictedExtensions = undefined;
      this._restrictedHeaders = undefined;
      this._sendStatusHeader = undefined;
      this._serverResponseMaxBodySize = undefined;
      this._staticExtensions = undefined;
      this._statusCodeForRejectedRequests = undefined;
      this._statusHeaderName = undefined;
      this._xmlXxeProtection = undefined;
      this._contentTypeMappings.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowedHttpVersions = value.allowedHttpVersions;
      this._allowedMethods = value.allowedMethods;
      this._allowedRequestContentTypeCharsets = value.allowedRequestContentTypeCharsets;
      this._argumentSeparator = value.argumentSeparator;
      this._clientRequestMaxBodySize = value.clientRequestMaxBodySize;
      this._cookieFormatVersion = value.cookieFormatVersion;
      this._ignoreIncompleteRequestBodyError = value.ignoreIncompleteRequestBodyError;
      this._maxExecutionTime = value.maxExecutionTime;
      this._regexMatchLimit = value.regexMatchLimit;
      this._regexRecursionLimit = value.regexRecursionLimit;
      this._requestBodyDefaultAction = value.requestBodyDefaultAction;
      this._requestHdrDefaultAction = value.requestHdrDefaultAction;
      this._responseBodyDefaultAction = value.responseBodyDefaultAction;
      this._responseHdrDefaultAction = value.responseHdrDefaultAction;
      this._restrictedExtensions = value.restrictedExtensions;
      this._restrictedHeaders = value.restrictedHeaders;
      this._sendStatusHeader = value.sendStatusHeader;
      this._serverResponseMaxBodySize = value.serverResponseMaxBodySize;
      this._staticExtensions = value.staticExtensions;
      this._statusCodeForRejectedRequests = value.statusCodeForRejectedRequests;
      this._statusHeaderName = value.statusHeaderName;
      this._xmlXxeProtection = value.xmlXxeProtection;
      this._contentTypeMappings.internalValue = value.contentTypeMappings;
    }
  }

  // allowed_http_versions - computed: false, optional: true, required: false
  private _allowedHttpVersions?: string[]; 
  public get allowedHttpVersions() {
    return this.getListAttribute('allowed_http_versions');
  }
  public set allowedHttpVersions(value: string[]) {
    this._allowedHttpVersions = value;
  }
  public resetAllowedHttpVersions() {
    this._allowedHttpVersions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedHttpVersionsInput() {
    return this._allowedHttpVersions;
  }

  // allowed_methods - computed: false, optional: true, required: false
  private _allowedMethods?: string[]; 
  public get allowedMethods() {
    return this.getListAttribute('allowed_methods');
  }
  public set allowedMethods(value: string[]) {
    this._allowedMethods = value;
  }
  public resetAllowedMethods() {
    this._allowedMethods = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedMethodsInput() {
    return this._allowedMethods;
  }

  // allowed_request_content_type_charsets - computed: false, optional: true, required: false
  private _allowedRequestContentTypeCharsets?: string[]; 
  public get allowedRequestContentTypeCharsets() {
    return this.getListAttribute('allowed_request_content_type_charsets');
  }
  public set allowedRequestContentTypeCharsets(value: string[]) {
    this._allowedRequestContentTypeCharsets = value;
  }
  public resetAllowedRequestContentTypeCharsets() {
    this._allowedRequestContentTypeCharsets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedRequestContentTypeCharsetsInput() {
    return this._allowedRequestContentTypeCharsets;
  }

  // argument_separator - computed: false, optional: true, required: false
  private _argumentSeparator?: string; 
  public get argumentSeparator() {
    return this.getStringAttribute('argument_separator');
  }
  public set argumentSeparator(value: string) {
    this._argumentSeparator = value;
  }
  public resetArgumentSeparator() {
    this._argumentSeparator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get argumentSeparatorInput() {
    return this._argumentSeparator;
  }

  // client_request_max_body_size - computed: false, optional: true, required: false
  private _clientRequestMaxBodySize?: string; 
  public get clientRequestMaxBodySize() {
    return this.getStringAttribute('client_request_max_body_size');
  }
  public set clientRequestMaxBodySize(value: string) {
    this._clientRequestMaxBodySize = value;
  }
  public resetClientRequestMaxBodySize() {
    this._clientRequestMaxBodySize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientRequestMaxBodySizeInput() {
    return this._clientRequestMaxBodySize;
  }

  // cookie_format_version - computed: false, optional: true, required: false
  private _cookieFormatVersion?: string; 
  public get cookieFormatVersion() {
    return this.getStringAttribute('cookie_format_version');
  }
  public set cookieFormatVersion(value: string) {
    this._cookieFormatVersion = value;
  }
  public resetCookieFormatVersion() {
    this._cookieFormatVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cookieFormatVersionInput() {
    return this._cookieFormatVersion;
  }

  // ignore_incomplete_request_body_error - computed: false, optional: true, required: false
  private _ignoreIncompleteRequestBodyError?: string; 
  public get ignoreIncompleteRequestBodyError() {
    return this.getStringAttribute('ignore_incomplete_request_body_error');
  }
  public set ignoreIncompleteRequestBodyError(value: string) {
    this._ignoreIncompleteRequestBodyError = value;
  }
  public resetIgnoreIncompleteRequestBodyError() {
    this._ignoreIncompleteRequestBodyError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreIncompleteRequestBodyErrorInput() {
    return this._ignoreIncompleteRequestBodyError;
  }

  // max_execution_time - computed: false, optional: true, required: false
  private _maxExecutionTime?: string; 
  public get maxExecutionTime() {
    return this.getStringAttribute('max_execution_time');
  }
  public set maxExecutionTime(value: string) {
    this._maxExecutionTime = value;
  }
  public resetMaxExecutionTime() {
    this._maxExecutionTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxExecutionTimeInput() {
    return this._maxExecutionTime;
  }

  // regex_match_limit - computed: false, optional: true, required: false
  private _regexMatchLimit?: string; 
  public get regexMatchLimit() {
    return this.getStringAttribute('regex_match_limit');
  }
  public set regexMatchLimit(value: string) {
    this._regexMatchLimit = value;
  }
  public resetRegexMatchLimit() {
    this._regexMatchLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexMatchLimitInput() {
    return this._regexMatchLimit;
  }

  // regex_recursion_limit - computed: false, optional: true, required: false
  private _regexRecursionLimit?: string; 
  public get regexRecursionLimit() {
    return this.getStringAttribute('regex_recursion_limit');
  }
  public set regexRecursionLimit(value: string) {
    this._regexRecursionLimit = value;
  }
  public resetRegexRecursionLimit() {
    this._regexRecursionLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexRecursionLimitInput() {
    return this._regexRecursionLimit;
  }

  // request_body_default_action - computed: false, optional: true, required: false
  private _requestBodyDefaultAction?: string; 
  public get requestBodyDefaultAction() {
    return this.getStringAttribute('request_body_default_action');
  }
  public set requestBodyDefaultAction(value: string) {
    this._requestBodyDefaultAction = value;
  }
  public resetRequestBodyDefaultAction() {
    this._requestBodyDefaultAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestBodyDefaultActionInput() {
    return this._requestBodyDefaultAction;
  }

  // request_hdr_default_action - computed: false, optional: true, required: false
  private _requestHdrDefaultAction?: string; 
  public get requestHdrDefaultAction() {
    return this.getStringAttribute('request_hdr_default_action');
  }
  public set requestHdrDefaultAction(value: string) {
    this._requestHdrDefaultAction = value;
  }
  public resetRequestHdrDefaultAction() {
    this._requestHdrDefaultAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestHdrDefaultActionInput() {
    return this._requestHdrDefaultAction;
  }

  // response_body_default_action - computed: false, optional: true, required: false
  private _responseBodyDefaultAction?: string; 
  public get responseBodyDefaultAction() {
    return this.getStringAttribute('response_body_default_action');
  }
  public set responseBodyDefaultAction(value: string) {
    this._responseBodyDefaultAction = value;
  }
  public resetResponseBodyDefaultAction() {
    this._responseBodyDefaultAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseBodyDefaultActionInput() {
    return this._responseBodyDefaultAction;
  }

  // response_hdr_default_action - computed: false, optional: true, required: false
  private _responseHdrDefaultAction?: string; 
  public get responseHdrDefaultAction() {
    return this.getStringAttribute('response_hdr_default_action');
  }
  public set responseHdrDefaultAction(value: string) {
    this._responseHdrDefaultAction = value;
  }
  public resetResponseHdrDefaultAction() {
    this._responseHdrDefaultAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseHdrDefaultActionInput() {
    return this._responseHdrDefaultAction;
  }

  // restricted_extensions - computed: false, optional: true, required: false
  private _restrictedExtensions?: string[]; 
  public get restrictedExtensions() {
    return this.getListAttribute('restricted_extensions');
  }
  public set restrictedExtensions(value: string[]) {
    this._restrictedExtensions = value;
  }
  public resetRestrictedExtensions() {
    this._restrictedExtensions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restrictedExtensionsInput() {
    return this._restrictedExtensions;
  }

  // restricted_headers - computed: false, optional: true, required: false
  private _restrictedHeaders?: string[]; 
  public get restrictedHeaders() {
    return this.getListAttribute('restricted_headers');
  }
  public set restrictedHeaders(value: string[]) {
    this._restrictedHeaders = value;
  }
  public resetRestrictedHeaders() {
    this._restrictedHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restrictedHeadersInput() {
    return this._restrictedHeaders;
  }

  // send_status_header - computed: false, optional: true, required: false
  private _sendStatusHeader?: string; 
  public get sendStatusHeader() {
    return this.getStringAttribute('send_status_header');
  }
  public set sendStatusHeader(value: string) {
    this._sendStatusHeader = value;
  }
  public resetSendStatusHeader() {
    this._sendStatusHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendStatusHeaderInput() {
    return this._sendStatusHeader;
  }

  // server_response_max_body_size - computed: false, optional: true, required: false
  private _serverResponseMaxBodySize?: string; 
  public get serverResponseMaxBodySize() {
    return this.getStringAttribute('server_response_max_body_size');
  }
  public set serverResponseMaxBodySize(value: string) {
    this._serverResponseMaxBodySize = value;
  }
  public resetServerResponseMaxBodySize() {
    this._serverResponseMaxBodySize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverResponseMaxBodySizeInput() {
    return this._serverResponseMaxBodySize;
  }

  // static_extensions - computed: false, optional: true, required: false
  private _staticExtensions?: string[]; 
  public get staticExtensions() {
    return this.getListAttribute('static_extensions');
  }
  public set staticExtensions(value: string[]) {
    this._staticExtensions = value;
  }
  public resetStaticExtensions() {
    this._staticExtensions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticExtensionsInput() {
    return this._staticExtensions;
  }

  // status_code_for_rejected_requests - computed: false, optional: true, required: false
  private _statusCodeForRejectedRequests?: string; 
  public get statusCodeForRejectedRequests() {
    return this.getStringAttribute('status_code_for_rejected_requests');
  }
  public set statusCodeForRejectedRequests(value: string) {
    this._statusCodeForRejectedRequests = value;
  }
  public resetStatusCodeForRejectedRequests() {
    this._statusCodeForRejectedRequests = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusCodeForRejectedRequestsInput() {
    return this._statusCodeForRejectedRequests;
  }

  // status_header_name - computed: false, optional: true, required: false
  private _statusHeaderName?: string; 
  public get statusHeaderName() {
    return this.getStringAttribute('status_header_name');
  }
  public set statusHeaderName(value: string) {
    this._statusHeaderName = value;
  }
  public resetStatusHeaderName() {
    this._statusHeaderName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusHeaderNameInput() {
    return this._statusHeaderName;
  }

  // xml_xxe_protection - computed: false, optional: true, required: false
  private _xmlXxeProtection?: string; 
  public get xmlXxeProtection() {
    return this.getStringAttribute('xml_xxe_protection');
  }
  public set xmlXxeProtection(value: string) {
    this._xmlXxeProtection = value;
  }
  public resetXmlXxeProtection() {
    this._xmlXxeProtection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xmlXxeProtectionInput() {
    return this._xmlXxeProtection;
  }

  // content_type_mappings - computed: false, optional: true, required: false
  private _contentTypeMappings = new WafprofileConfigContentTypeMappingsList(this, "content_type_mappings", false);
  public get contentTypeMappings() {
    return this._contentTypeMappings;
  }
  public putContentTypeMappings(value: WafprofileConfigContentTypeMappings[] | cdktf.IResolvable) {
    this._contentTypeMappings.internalValue = value;
  }
  public resetContentTypeMappings() {
    this._contentTypeMappings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentTypeMappingsInput() {
    return this._contentTypeMappings.internalValue;
  }
}

export class WafprofileConfigAList extends cdktf.ComplexList {
  public internalValue? : WafprofileConfigA[] | cdktf.IResolvable

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
  public get(index: number): WafprofileConfigAOutputReference {
    return new WafprofileConfigAOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WafprofileConfigpbAttributes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafprofile#version Wafprofile#version}
  */
  readonly version?: string;
}

export function wafprofileConfigpbAttributesToTerraform(struct?: WafprofileConfigpbAttributes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function wafprofileConfigpbAttributesToHclTerraform(struct?: WafprofileConfigpbAttributes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    version: {
      value: cdktf.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WafprofileConfigpbAttributesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WafprofileConfigpbAttributes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WafprofileConfigpbAttributes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._version = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._version = value.version;
    }
  }

  // version - computed: true, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }
}

export class WafprofileConfigpbAttributesList extends cdktf.ComplexList {
  public internalValue? : WafprofileConfigpbAttributes[] | cdktf.IResolvable

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
  public get(index: number): WafprofileConfigpbAttributesOutputReference {
    return new WafprofileConfigpbAttributesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WafprofileFiles {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafprofile#data Wafprofile#data}
  */
  readonly data: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafprofile#name Wafprofile#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafprofile#type Wafprofile#type}
  */
  readonly type?: string;
}

export function wafprofileFilesToTerraform(struct?: WafprofileFiles | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    data: cdktf.stringToTerraform(struct!.data),
    name: cdktf.stringToTerraform(struct!.name),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function wafprofileFilesToHclTerraform(struct?: WafprofileFiles | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    data: {
      value: cdktf.stringToHclTerraform(struct!.data),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WafprofileFilesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WafprofileFiles | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._data !== undefined) {
      hasAnyValues = true;
      internalValueResult.data = this._data;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WafprofileFiles | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._data = undefined;
      this._name = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._data = value.data;
      this._name = value.name;
      this._type = value.type;
    }
  }

  // data - computed: false, optional: false, required: true
  private _data?: string; 
  public get data() {
    return this.getStringAttribute('data');
  }
  public set data(value: string) {
    this._data = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataInput() {
    return this._data;
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
}

export class WafprofileFilesList extends cdktf.ComplexList {
  public internalValue? : WafprofileFiles[] | cdktf.IResolvable

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
  public get(index: number): WafprofileFilesOutputReference {
    return new WafprofileFilesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WafprofileMarkers {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafprofile#key Wafprofile#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafprofile#values Wafprofile#values}
  */
  readonly values?: string[];
}

export function wafprofileMarkersToTerraform(struct?: WafprofileMarkers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function wafprofileMarkersToHclTerraform(struct?: WafprofileMarkers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WafprofileMarkersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WafprofileMarkers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WafprofileMarkers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._values = value.values;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class WafprofileMarkersList extends cdktf.ComplexList {
  public internalValue? : WafprofileMarkers[] | cdktf.IResolvable

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
  public get(index: number): WafprofileMarkersOutputReference {
    return new WafprofileMarkersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafprofile avi_wafprofile}
*/
export class Wafprofile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "avi_wafprofile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Wafprofile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Wafprofile to import
  * @param importFromId The id of the existing Wafprofile that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafprofile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Wafprofile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "avi_wafprofile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/avi/31.1.1/docs/resources/wafprofile avi_wafprofile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WafprofileConfig
  */
  public constructor(scope: Construct, id: string, config: WafprofileConfig) {
    super(scope, id, {
      terraformResourceType: 'avi_wafprofile',
      terraformGeneratorMetadata: {
        providerName: 'avi',
        providerVersion: '31.1.1'
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
    this._id = config.id;
    this._name = config.name;
    this._tenantRef = config.tenantRef;
    this._uuid = config.uuid;
    this._config.internalValue = config.config;
    this._configpbAttributes.internalValue = config.configpbAttributes;
    this._files.internalValue = config.files;
    this._markers.internalValue = config.markers;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: true, optional: true, required: false
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

  // tenant_ref - computed: true, optional: true, required: false
  private _tenantRef?: string; 
  public get tenantRef() {
    return this.getStringAttribute('tenant_ref');
  }
  public set tenantRef(value: string) {
    this._tenantRef = value;
  }
  public resetTenantRef() {
    this._tenantRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantRefInput() {
    return this._tenantRef;
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

  // config - computed: false, optional: false, required: true
  private _config = new WafprofileConfigAList(this, "config", true);
  public get config() {
    return this._config;
  }
  public putConfig(value: WafprofileConfigA[] | cdktf.IResolvable) {
    this._config.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config.internalValue;
  }

  // configpb_attributes - computed: false, optional: true, required: false
  private _configpbAttributes = new WafprofileConfigpbAttributesList(this, "configpb_attributes", true);
  public get configpbAttributes() {
    return this._configpbAttributes;
  }
  public putConfigpbAttributes(value: WafprofileConfigpbAttributes[] | cdktf.IResolvable) {
    this._configpbAttributes.internalValue = value;
  }
  public resetConfigpbAttributes() {
    this._configpbAttributes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configpbAttributesInput() {
    return this._configpbAttributes.internalValue;
  }

  // files - computed: false, optional: true, required: false
  private _files = new WafprofileFilesList(this, "files", false);
  public get files() {
    return this._files;
  }
  public putFiles(value: WafprofileFiles[] | cdktf.IResolvable) {
    this._files.internalValue = value;
  }
  public resetFiles() {
    this._files.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filesInput() {
    return this._files.internalValue;
  }

  // markers - computed: false, optional: true, required: false
  private _markers = new WafprofileMarkersList(this, "markers", false);
  public get markers() {
    return this._markers;
  }
  public putMarkers(value: WafprofileMarkers[] | cdktf.IResolvable) {
    this._markers.internalValue = value;
  }
  public resetMarkers() {
    this._markers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get markersInput() {
    return this._markers.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      tenant_ref: cdktf.stringToTerraform(this._tenantRef),
      uuid: cdktf.stringToTerraform(this._uuid),
      config: cdktf.listMapper(wafprofileConfigAToTerraform, true)(this._config.internalValue),
      configpb_attributes: cdktf.listMapper(wafprofileConfigpbAttributesToTerraform, true)(this._configpbAttributes.internalValue),
      files: cdktf.listMapper(wafprofileFilesToTerraform, true)(this._files.internalValue),
      markers: cdktf.listMapper(wafprofileMarkersToTerraform, true)(this._markers.internalValue),
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
      tenant_ref: {
        value: cdktf.stringToHclTerraform(this._tenantRef),
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
      config: {
        value: cdktf.listMapperHcl(wafprofileConfigAToHclTerraform, true)(this._config.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "WafprofileConfigAList",
      },
      configpb_attributes: {
        value: cdktf.listMapperHcl(wafprofileConfigpbAttributesToHclTerraform, true)(this._configpbAttributes.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "WafprofileConfigpbAttributesList",
      },
      files: {
        value: cdktf.listMapperHcl(wafprofileFilesToHclTerraform, true)(this._files.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "WafprofileFilesList",
      },
      markers: {
        value: cdktf.listMapperHcl(wafprofileMarkersToHclTerraform, true)(this._markers.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "WafprofileMarkersList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
