import * as cdktf from 'cdktf';
import { DataK8SKuadrantIoAuthPolicyV1Beta2ManifestSpecRulesResponseUnauthorizedBody,
dataK8SKuadrantIoAuthPolicyV1Beta2ManifestSpecRulesResponseUnauthorizedBodyToTerraform,
dataK8SKuadrantIoAuthPolicyV1Beta2ManifestSpecRulesResponseUnauthorizedBodyToHclTerraform,
DataK8SKuadrantIoAuthPolicyV1Beta2ManifestSpecRulesResponseUnauthorizedBodyOutputReference,
DataK8SKuadrantIoAuthPolicyV1Beta2ManifestSpecRulesResponseUnauthorizedHeaders,
dataK8SKuadrantIoAuthPolicyV1Beta2ManifestSpecRulesResponseUnauthorizedHeadersToTerraform,
dataK8SKuadrantIoAuthPolicyV1Beta2ManifestSpecRulesResponseUnauthorizedHeadersToHclTerraform,
DataK8SKuadrantIoAuthPolicyV1Beta2ManifestSpecRulesResponseUnauthorizedHeadersOutputReference,
DataK8SKuadrantIoAuthPolicyV1Beta2ManifestSpecRulesResponseSuccess,
dataK8SKuadrantIoAuthPolicyV1Beta2ManifestSpecRulesResponseSuccessToTerraform,
dataK8SKuadrantIoAuthPolicyV1Beta2ManifestSpecRulesResponseSuccessToHclTerraform,
DataK8SKuadrantIoAuthPolicyV1Beta2ManifestSpecRulesResponseSuccessOutputReference,
DataK8SKuadrantIoAuthPolicyV1Beta2ManifestSpecRulesResponseUnauthenticated,
dataK8SKuadrantIoAuthPolicyV1Beta2ManifestSpecRulesResponseUnauthenticatedToTerraform,
dataK8SKuadrantIoAuthPolicyV1Beta2ManifestSpecRulesResponseUnauthenticatedToHclTerraform,
DataK8SKuadrantIoAuthPolicyV1Beta2ManifestSpecRulesResponseUnauthenticatedOutputReference,
DataK8SKuadrantIoAuthPolicyV1Beta2ManifestSpecRulesAuthentication,
dataK8SKuadrantIoAuthPolicyV1Beta2ManifestSpecRulesAuthenticationToTerraform,
dataK8SKuadrantIoAuthPolicyV1Beta2ManifestSpecRulesAuthenticationToHclTerraform,
DataK8SKuadrantIoAuthPolicyV1Beta2ManifestSpecRulesAuthenticationOutputReference,
DataK8SKuadrantIoAuthPolicyV1Beta2ManifestSpecRulesAuthorization,
dataK8SKuadrantIoAuthPolicyV1Beta2ManifestSpecRulesAuthorizationToTerraform,
dataK8SKuadrantIoAuthPolicyV1Beta2ManifestSpecRulesAuthorizationToHclTerraform,
DataK8SKuadrantIoAuthPolicyV1Beta2ManifestSpecRulesAuthorizationOutputReference,
DataK8SKuadrantIoAuthPolicyV1Beta2ManifestSpecRulesCallbacks,
dataK8SKuadrantIoAuthPolicyV1Beta2ManifestSpecRulesCallbacksToTerraform,
dataK8SKuadrantIoAuthPolicyV1Beta2ManifestSpecRulesCallbacksToHclTerraform,
DataK8SKuadrantIoAuthPolicyV1Beta2ManifestSpecRulesCallbacksOutputReference,
DataK8SKuadrantIoAuthPolicyV1Beta2ManifestSpecRulesMetadata,
dataK8SKuadrantIoAuthPolicyV1Beta2ManifestSpecRulesMetadataToTerraform,
dataK8SKuadrantIoAuthPolicyV1Beta2ManifestSpecRulesMetadataToHclTerraform,
DataK8SKuadrantIoAuthPolicyV1Beta2ManifestSpecRulesMetadataOutputReference,
DataK8SKuadrantIoAuthPolicyV1Beta2ManifestSpecOverrides,
dataK8SKuadrantIoAuthPolicyV1Beta2ManifestSpecOverridesToTerraform,
dataK8SKuadrantIoAuthPolicyV1Beta2ManifestSpecOverridesToHclTerraform,
DataK8SKuadrantIoAuthPolicyV1Beta2ManifestSpecOverridesOutputReference,
DataK8SKuadrantIoAuthPolicyV1Beta2ManifestSpecRouteSelectors,
dataK8SKuadrantIoAuthPolicyV1Beta2ManifestSpecRouteSelectorsToTerraform,
dataK8SKuadrantIoAuthPolicyV1Beta2ManifestSpecRouteSelectorsToHclTerraform,
DataK8SKuadrantIoAuthPolicyV1Beta2ManifestSpecRouteSelectorsList } from './structs800'
import { DataK8SKuadrantIoAuthPolicyV1Beta2ManifestSpecDefaults,
dataK8SKuadrantIoAuthPolicyV1Beta2ManifestSpecDefaultsToTerraform,
dataK8SKuadrantIoAuthPolicyV1Beta2ManifestSpecDefaultsToHclTerraform,
DataK8SKuadrantIoAuthPolicyV1Beta2ManifestSpecDefaultsOutputReference } from './structs400'
export interface DataK8SKuadrantIoAuthPolicyV1Beta2ManifestSpecRulesResponseUnauthorizedMessage {
  /**
  * Simple path selector to fetch content from the authorization JSON (e.g. 'request.method') or a string template with variables that resolve to patterns (e.g. 'Hello, {auth.identity.name}!'). Any pattern supported by https://pkg.go.dev/github.com/tidwall/gjson can be used. The following Authorino custom modifiers are supported: @extract:{sep:' ',pos:0}, @replace{old:'',new:''}, @case:upper|lower, @base64:encode|decode and @strip.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/kuadrant_io_auth_policy_v1beta2_manifest#selector DataK8SKuadrantIoAuthPolicyV1Beta2Manifest#selector}
  */
  readonly selector?: string;
  /**
  * Static value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/kuadrant_io_auth_policy_v1beta2_manifest#value DataK8SKuadrantIoAuthPolicyV1Beta2Manifest#value}
  */
  readonly value?: { [key: string]: string };
}

export function dataK8SKuadrantIoAuthPolicyV1Beta2ManifestSpecRulesResponseUnauthorizedMessageToTerraform(struct?: DataK8SKuadrantIoAuthPolicyV1Beta2ManifestSpecRulesResponseUnauthorizedMessage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    selector: cdktf.stringToTerraform(struct!.selector),
    value: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.value),
  }
}


export function dataK8SKuadrantIoAuthPolicyV1Beta2ManifestSpecRulesResponseUnauthorizedMessageToHclTerraform(struct?: DataK8SKuadrantIoAuthPolicyV1Beta2ManifestSpecRulesResponseUnauthorizedMessage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    selector: {
      value: cdktf.stringToHclTerraform(struct!.selector),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.value),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKuadrantIoAuthPolicyV1Beta2ManifestSpecRulesResponseUnauthorizedMessageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKuadrantIoAuthPolicyV1Beta2ManifestSpecRulesResponseUnauthorizedMessage | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._selector !== undefined) {
      hasAnyValues = true;
      internalValueResult.selector = this._selector;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKuadrantIoAuthPolicyV1Beta2ManifestSpecRulesResponseUnauthorizedMessage | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._selector = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._selector = value.selector;
      this._value = value.value;
    }
  }

  // selector - computed: false, optional: true, required: false
  private _selector?: string; 
  public get selector() {
    return this.getStringAttribute('selector');
  }
  public set selector(value: string) {
    this._selector = value;
  }
  public resetSelector() {
    this._selector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorInput() {
    return this._selector;
  }

  // value - computed: false, optional: true, required: false
  private _value?: { [key: string]: string }; 
  public get value() {
    return this.getStringMapAttribute('value');
  }
  public set value(value: { [key: string]: string }) {
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
export interface DataK8SKuadrantIoAuthPolicyV1Beta2ManifestSpecRulesResponseUnauthorized {
  /**
  * HTTP response body to override the default denial body.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/kuadrant_io_auth_policy_v1beta2_manifest#body DataK8SKuadrantIoAuthPolicyV1Beta2Manifest#body}
  */
  readonly body?: DataK8SKuadrantIoAuthPolicyV1Beta2ManifestSpecRulesResponseUnauthorizedBody;
  /**
  * HTTP status code to override the default denial status code.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/kuadrant_io_auth_policy_v1beta2_manifest#code DataK8SKuadrantIoAuthPolicyV1Beta2Manifest#code}
  */
  readonly code?: number;
  /**
  * HTTP response headers to override the default denial headers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/kuadrant_io_auth_policy_v1beta2_manifest#headers DataK8SKuadrantIoAuthPolicyV1Beta2Manifest#headers}
  */
  readonly headers?: DataK8SKuadrantIoAuthPolicyV1Beta2ManifestSpecRulesResponseUnauthorizedHeaders;
  /**
  * HTTP message to override the default denial message.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/kuadrant_io_auth_policy_v1beta2_manifest#message DataK8SKuadrantIoAuthPolicyV1Beta2Manifest#message}
  */
  readonly message?: DataK8SKuadrantIoAuthPolicyV1Beta2ManifestSpecRulesResponseUnauthorizedMessage;
}

export function dataK8SKuadrantIoAuthPolicyV1Beta2ManifestSpecRulesResponseUnauthorizedToTerraform(struct?: DataK8SKuadrantIoAuthPolicyV1Beta2ManifestSpecRulesResponseUnauthorized | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    body: dataK8SKuadrantIoAuthPolicyV1Beta2ManifestSpecRulesResponseUnauthorizedBodyToTerraform(struct!.body),
    code: cdktf.numberToTerraform(struct!.code),
    headers: dataK8SKuadrantIoAuthPolicyV1Beta2ManifestSpecRulesResponseUnauthorizedHeadersToTerraform(struct!.headers),
    message: dataK8SKuadrantIoAuthPolicyV1Beta2ManifestSpecRulesResponseUnauthorizedMessageToTerraform(struct!.message),
  }
}


export function dataK8SKuadrantIoAuthPolicyV1Beta2ManifestSpecRulesResponseUnauthorizedToHclTerraform(struct?: DataK8SKuadrantIoAuthPolicyV1Beta2ManifestSpecRulesResponseUnauthorized | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    body: {
      value: dataK8SKuadrantIoAuthPolicyV1Beta2ManifestSpecRulesResponseUnauthorizedBodyToHclTerraform(struct!.body),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKuadrantIoAuthPolicyV1Beta2ManifestSpecRulesResponseUnauthorizedBody",
    },
    code: {
      value: cdktf.numberToHclTerraform(struct!.code),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    headers: {
      value: dataK8SKuadrantIoAuthPolicyV1Beta2ManifestSpecRulesResponseUnauthorizedHeadersToHclTerraform(struct!.headers),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKuadrantIoAuthPolicyV1Beta2ManifestSpecRulesResponseUnauthorizedHeaders",
    },
    message: {
      value: dataK8SKuadrantIoAuthPolicyV1Beta2ManifestSpecRulesResponseUnauthorizedMessageToHclTerraform(struct!.message),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKuadrantIoAuthPolicyV1Beta2ManifestSpecRulesResponseUnauthorizedMessage",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKuadrantIoAuthPolicyV1Beta2ManifestSpecRulesResponseUnauthorizedOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKuadrantIoAuthPolicyV1Beta2ManifestSpecRulesResponseUnauthorized | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._body?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.body = this._body?.internalValue;
    }
    if (this._code !== undefined) {
      hasAnyValues = true;
      internalValueResult.code = this._code;
    }
    if (this._headers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.headers = this._headers?.internalValue;
    }
    if (this._message?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.message = this._message?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKuadrantIoAuthPolicyV1Beta2ManifestSpecRulesResponseUnauthorized | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._body.internalValue = undefined;
      this._code = undefined;
      this._headers.internalValue = undefined;
      this._message.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._body.internalValue = value.body;
      this._code = value.code;
      this._headers.internalValue = value.headers;
      this._message.internalValue = value.message;
    }
  }

  // body - computed: false, optional: true, required: false
  private _body = new DataK8SKuadrantIoAuthPolicyV1Beta2ManifestSpecRulesResponseUnauthorizedBodyOutputReference(this, "body");
  public get body() {
    return this._body;
  }
  public putBody(value: DataK8SKuadrantIoAuthPolicyV1Beta2ManifestSpecRulesResponseUnauthorizedBody) {
    this._body.internalValue = value;
  }
  public resetBody() {
    this._body.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bodyInput() {
    return this._body.internalValue;
  }

  // code - computed: false, optional: true, required: false
  private _code?: number; 
  public get code() {
    return this.getNumberAttribute('code');
  }
  public set code(value: number) {
    this._code = value;
  }
  public resetCode() {
    this._code = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get codeInput() {
    return this._code;
  }

  // headers - computed: false, optional: true, required: false
  private _headers = new DataK8SKuadrantIoAuthPolicyV1Beta2ManifestSpecRulesResponseUnauthorizedHeadersOutputReference(this, "headers");
  public get headers() {
    return this._headers;
  }
  public putHeaders(value: DataK8SKuadrantIoAuthPolicyV1Beta2ManifestSpecRulesResponseUnauthorizedHeaders) {
    this._headers.internalValue = value;
  }
  public resetHeaders() {
    this._headers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headersInput() {
    return this._headers.internalValue;
  }

  // message - computed: false, optional: true, required: false
  private _message = new DataK8SKuadrantIoAuthPolicyV1Beta2ManifestSpecRulesResponseUnauthorizedMessageOutputReference(this, "message");
  public get message() {
    return this._message;
  }
  public putMessage(value: DataK8SKuadrantIoAuthPolicyV1Beta2ManifestSpecRulesResponseUnauthorizedMessage) {
    this._message.internalValue = value;
  }
  public resetMessage() {
    this._message.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageInput() {
    return this._message.internalValue;
  }
}
export interface DataK8SKuadrantIoAuthPolicyV1Beta2ManifestSpecRulesResponse {
  /**
  * Response items to be included in the auth response when the request is authenticated and authorized. For integration of Authorino via proxy, the proxy must use these settings to propagate dynamic metadata and/or inject data in the request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/kuadrant_io_auth_policy_v1beta2_manifest#success DataK8SKuadrantIoAuthPolicyV1Beta2Manifest#success}
  */
  readonly success?: DataK8SKuadrantIoAuthPolicyV1Beta2ManifestSpecRulesResponseSuccess;
  /**
  * Customizations on the denial status attributes when the request is unauthenticated. For integration of Authorino via proxy, the proxy must honour the response status attributes specified in this config. Default: 401 Unauthorized
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/kuadrant_io_auth_policy_v1beta2_manifest#unauthenticated DataK8SKuadrantIoAuthPolicyV1Beta2Manifest#unauthenticated}
  */
  readonly unauthenticated?: DataK8SKuadrantIoAuthPolicyV1Beta2ManifestSpecRulesResponseUnauthenticated;
  /**
  * Customizations on the denial status attributes when the request is unauthorized. For integration of Authorino via proxy, the proxy must honour the response status attributes specified in this config. Default: 403 Forbidden
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/kuadrant_io_auth_policy_v1beta2_manifest#unauthorized DataK8SKuadrantIoAuthPolicyV1Beta2Manifest#unauthorized}
  */
  readonly unauthorized?: DataK8SKuadrantIoAuthPolicyV1Beta2ManifestSpecRulesResponseUnauthorized;
}

export function dataK8SKuadrantIoAuthPolicyV1Beta2ManifestSpecRulesResponseToTerraform(struct?: DataK8SKuadrantIoAuthPolicyV1Beta2ManifestSpecRulesResponse | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    success: dataK8SKuadrantIoAuthPolicyV1Beta2ManifestSpecRulesResponseSuccessToTerraform(struct!.success),
    unauthenticated: dataK8SKuadrantIoAuthPolicyV1Beta2ManifestSpecRulesResponseUnauthenticatedToTerraform(struct!.unauthenticated),
    unauthorized: dataK8SKuadrantIoAuthPolicyV1Beta2ManifestSpecRulesResponseUnauthorizedToTerraform(struct!.unauthorized),
  }
}


export function dataK8SKuadrantIoAuthPolicyV1Beta2ManifestSpecRulesResponseToHclTerraform(struct?: DataK8SKuadrantIoAuthPolicyV1Beta2ManifestSpecRulesResponse | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    success: {
      value: dataK8SKuadrantIoAuthPolicyV1Beta2ManifestSpecRulesResponseSuccessToHclTerraform(struct!.success),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKuadrantIoAuthPolicyV1Beta2ManifestSpecRulesResponseSuccess",
    },
    unauthenticated: {
      value: dataK8SKuadrantIoAuthPolicyV1Beta2ManifestSpecRulesResponseUnauthenticatedToHclTerraform(struct!.unauthenticated),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKuadrantIoAuthPolicyV1Beta2ManifestSpecRulesResponseUnauthenticated",
    },
    unauthorized: {
      value: dataK8SKuadrantIoAuthPolicyV1Beta2ManifestSpecRulesResponseUnauthorizedToHclTerraform(struct!.unauthorized),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKuadrantIoAuthPolicyV1Beta2ManifestSpecRulesResponseUnauthorized",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKuadrantIoAuthPolicyV1Beta2ManifestSpecRulesResponseOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKuadrantIoAuthPolicyV1Beta2ManifestSpecRulesResponse | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._success?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.success = this._success?.internalValue;
    }
    if (this._unauthenticated?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.unauthenticated = this._unauthenticated?.internalValue;
    }
    if (this._unauthorized?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.unauthorized = this._unauthorized?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKuadrantIoAuthPolicyV1Beta2ManifestSpecRulesResponse | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._success.internalValue = undefined;
      this._unauthenticated.internalValue = undefined;
      this._unauthorized.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._success.internalValue = value.success;
      this._unauthenticated.internalValue = value.unauthenticated;
      this._unauthorized.internalValue = value.unauthorized;
    }
  }

  // success - computed: false, optional: true, required: false
  private _success = new DataK8SKuadrantIoAuthPolicyV1Beta2ManifestSpecRulesResponseSuccessOutputReference(this, "success");
  public get success() {
    return this._success;
  }
  public putSuccess(value: DataK8SKuadrantIoAuthPolicyV1Beta2ManifestSpecRulesResponseSuccess) {
    this._success.internalValue = value;
  }
  public resetSuccess() {
    this._success.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get successInput() {
    return this._success.internalValue;
  }

  // unauthenticated - computed: false, optional: true, required: false
  private _unauthenticated = new DataK8SKuadrantIoAuthPolicyV1Beta2ManifestSpecRulesResponseUnauthenticatedOutputReference(this, "unauthenticated");
  public get unauthenticated() {
    return this._unauthenticated;
  }
  public putUnauthenticated(value: DataK8SKuadrantIoAuthPolicyV1Beta2ManifestSpecRulesResponseUnauthenticated) {
    this._unauthenticated.internalValue = value;
  }
  public resetUnauthenticated() {
    this._unauthenticated.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unauthenticatedInput() {
    return this._unauthenticated.internalValue;
  }

  // unauthorized - computed: false, optional: true, required: false
  private _unauthorized = new DataK8SKuadrantIoAuthPolicyV1Beta2ManifestSpecRulesResponseUnauthorizedOutputReference(this, "unauthorized");
  public get unauthorized() {
    return this._unauthorized;
  }
  public putUnauthorized(value: DataK8SKuadrantIoAuthPolicyV1Beta2ManifestSpecRulesResponseUnauthorized) {
    this._unauthorized.internalValue = value;
  }
  public resetUnauthorized() {
    this._unauthorized.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unauthorizedInput() {
    return this._unauthorized.internalValue;
  }
}
export interface DataK8SKuadrantIoAuthPolicyV1Beta2ManifestSpecRules {
  /**
  * Authentication configs. At least one config MUST evaluate to a valid identity object for the auth request to be successful.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/kuadrant_io_auth_policy_v1beta2_manifest#authentication DataK8SKuadrantIoAuthPolicyV1Beta2Manifest#authentication}
  */
  readonly authentication?: DataK8SKuadrantIoAuthPolicyV1Beta2ManifestSpecRulesAuthentication;
  /**
  * Authorization policies. All policies MUST evaluate to 'allowed = true' for the auth request be successful.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/kuadrant_io_auth_policy_v1beta2_manifest#authorization DataK8SKuadrantIoAuthPolicyV1Beta2Manifest#authorization}
  */
  readonly authorization?: DataK8SKuadrantIoAuthPolicyV1Beta2ManifestSpecRulesAuthorization;
  /**
  * Callback functions. Authorino sends callbacks at the end of the auth pipeline to the endpoints specified in this config.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/kuadrant_io_auth_policy_v1beta2_manifest#callbacks DataK8SKuadrantIoAuthPolicyV1Beta2Manifest#callbacks}
  */
  readonly callbacks?: DataK8SKuadrantIoAuthPolicyV1Beta2ManifestSpecRulesCallbacks;
  /**
  * Metadata sources. Authorino fetches auth metadata as JSON from sources specified in this config.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/kuadrant_io_auth_policy_v1beta2_manifest#metadata DataK8SKuadrantIoAuthPolicyV1Beta2Manifest#metadata}
  */
  readonly metadata?: DataK8SKuadrantIoAuthPolicyV1Beta2ManifestSpecRulesMetadata;
  /**
  * Response items. Authorino builds custom responses to the client of the auth request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/kuadrant_io_auth_policy_v1beta2_manifest#response DataK8SKuadrantIoAuthPolicyV1Beta2Manifest#response}
  */
  readonly response?: DataK8SKuadrantIoAuthPolicyV1Beta2ManifestSpecRulesResponse;
}

export function dataK8SKuadrantIoAuthPolicyV1Beta2ManifestSpecRulesToTerraform(struct?: DataK8SKuadrantIoAuthPolicyV1Beta2ManifestSpecRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authentication: dataK8SKuadrantIoAuthPolicyV1Beta2ManifestSpecRulesAuthenticationToTerraform(struct!.authentication),
    authorization: dataK8SKuadrantIoAuthPolicyV1Beta2ManifestSpecRulesAuthorizationToTerraform(struct!.authorization),
    callbacks: dataK8SKuadrantIoAuthPolicyV1Beta2ManifestSpecRulesCallbacksToTerraform(struct!.callbacks),
    metadata: dataK8SKuadrantIoAuthPolicyV1Beta2ManifestSpecRulesMetadataToTerraform(struct!.metadata),
    response: dataK8SKuadrantIoAuthPolicyV1Beta2ManifestSpecRulesResponseToTerraform(struct!.response),
  }
}


export function dataK8SKuadrantIoAuthPolicyV1Beta2ManifestSpecRulesToHclTerraform(struct?: DataK8SKuadrantIoAuthPolicyV1Beta2ManifestSpecRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    authentication: {
      value: dataK8SKuadrantIoAuthPolicyV1Beta2ManifestSpecRulesAuthenticationToHclTerraform(struct!.authentication),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKuadrantIoAuthPolicyV1Beta2ManifestSpecRulesAuthentication",
    },
    authorization: {
      value: dataK8SKuadrantIoAuthPolicyV1Beta2ManifestSpecRulesAuthorizationToHclTerraform(struct!.authorization),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKuadrantIoAuthPolicyV1Beta2ManifestSpecRulesAuthorization",
    },
    callbacks: {
      value: dataK8SKuadrantIoAuthPolicyV1Beta2ManifestSpecRulesCallbacksToHclTerraform(struct!.callbacks),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKuadrantIoAuthPolicyV1Beta2ManifestSpecRulesCallbacks",
    },
    metadata: {
      value: dataK8SKuadrantIoAuthPolicyV1Beta2ManifestSpecRulesMetadataToHclTerraform(struct!.metadata),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKuadrantIoAuthPolicyV1Beta2ManifestSpecRulesMetadata",
    },
    response: {
      value: dataK8SKuadrantIoAuthPolicyV1Beta2ManifestSpecRulesResponseToHclTerraform(struct!.response),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKuadrantIoAuthPolicyV1Beta2ManifestSpecRulesResponse",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKuadrantIoAuthPolicyV1Beta2ManifestSpecRulesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKuadrantIoAuthPolicyV1Beta2ManifestSpecRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authentication?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authentication = this._authentication?.internalValue;
    }
    if (this._authorization?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authorization = this._authorization?.internalValue;
    }
    if (this._callbacks?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.callbacks = this._callbacks?.internalValue;
    }
    if (this._metadata?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadata = this._metadata?.internalValue;
    }
    if (this._response?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.response = this._response?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKuadrantIoAuthPolicyV1Beta2ManifestSpecRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authentication.internalValue = undefined;
      this._authorization.internalValue = undefined;
      this._callbacks.internalValue = undefined;
      this._metadata.internalValue = undefined;
      this._response.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authentication.internalValue = value.authentication;
      this._authorization.internalValue = value.authorization;
      this._callbacks.internalValue = value.callbacks;
      this._metadata.internalValue = value.metadata;
      this._response.internalValue = value.response;
    }
  }

  // authentication - computed: false, optional: true, required: false
  private _authentication = new DataK8SKuadrantIoAuthPolicyV1Beta2ManifestSpecRulesAuthenticationOutputReference(this, "authentication");
  public get authentication() {
    return this._authentication;
  }
  public putAuthentication(value: DataK8SKuadrantIoAuthPolicyV1Beta2ManifestSpecRulesAuthentication) {
    this._authentication.internalValue = value;
  }
  public resetAuthentication() {
    this._authentication.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationInput() {
    return this._authentication.internalValue;
  }

  // authorization - computed: false, optional: true, required: false
  private _authorization = new DataK8SKuadrantIoAuthPolicyV1Beta2ManifestSpecRulesAuthorizationOutputReference(this, "authorization");
  public get authorization() {
    return this._authorization;
  }
  public putAuthorization(value: DataK8SKuadrantIoAuthPolicyV1Beta2ManifestSpecRulesAuthorization) {
    this._authorization.internalValue = value;
  }
  public resetAuthorization() {
    this._authorization.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizationInput() {
    return this._authorization.internalValue;
  }

  // callbacks - computed: false, optional: true, required: false
  private _callbacks = new DataK8SKuadrantIoAuthPolicyV1Beta2ManifestSpecRulesCallbacksOutputReference(this, "callbacks");
  public get callbacks() {
    return this._callbacks;
  }
  public putCallbacks(value: DataK8SKuadrantIoAuthPolicyV1Beta2ManifestSpecRulesCallbacks) {
    this._callbacks.internalValue = value;
  }
  public resetCallbacks() {
    this._callbacks.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get callbacksInput() {
    return this._callbacks.internalValue;
  }

  // metadata - computed: false, optional: true, required: false
  private _metadata = new DataK8SKuadrantIoAuthPolicyV1Beta2ManifestSpecRulesMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SKuadrantIoAuthPolicyV1Beta2ManifestSpecRulesMetadata) {
    this._metadata.internalValue = value;
  }
  public resetMetadata() {
    this._metadata.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // response - computed: false, optional: true, required: false
  private _response = new DataK8SKuadrantIoAuthPolicyV1Beta2ManifestSpecRulesResponseOutputReference(this, "response");
  public get response() {
    return this._response;
  }
  public putResponse(value: DataK8SKuadrantIoAuthPolicyV1Beta2ManifestSpecRulesResponse) {
    this._response.internalValue = value;
  }
  public resetResponse() {
    this._response.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseInput() {
    return this._response.internalValue;
  }
}
export interface DataK8SKuadrantIoAuthPolicyV1Beta2ManifestSpecTargetRef {
  /**
  * Group is the group of the target resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/kuadrant_io_auth_policy_v1beta2_manifest#group DataK8SKuadrantIoAuthPolicyV1Beta2Manifest#group}
  */
  readonly group: string;
  /**
  * Kind is kind of the target resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/kuadrant_io_auth_policy_v1beta2_manifest#kind DataK8SKuadrantIoAuthPolicyV1Beta2Manifest#kind}
  */
  readonly kind: string;
  /**
  * Name is the name of the target resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/kuadrant_io_auth_policy_v1beta2_manifest#name DataK8SKuadrantIoAuthPolicyV1Beta2Manifest#name}
  */
  readonly name: string;
}

export function dataK8SKuadrantIoAuthPolicyV1Beta2ManifestSpecTargetRefToTerraform(struct?: DataK8SKuadrantIoAuthPolicyV1Beta2ManifestSpecTargetRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    group: cdktf.stringToTerraform(struct!.group),
    kind: cdktf.stringToTerraform(struct!.kind),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SKuadrantIoAuthPolicyV1Beta2ManifestSpecTargetRefToHclTerraform(struct?: DataK8SKuadrantIoAuthPolicyV1Beta2ManifestSpecTargetRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    group: {
      value: cdktf.stringToHclTerraform(struct!.group),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kind: {
      value: cdktf.stringToHclTerraform(struct!.kind),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKuadrantIoAuthPolicyV1Beta2ManifestSpecTargetRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKuadrantIoAuthPolicyV1Beta2ManifestSpecTargetRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._group !== undefined) {
      hasAnyValues = true;
      internalValueResult.group = this._group;
    }
    if (this._kind !== undefined) {
      hasAnyValues = true;
      internalValueResult.kind = this._kind;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKuadrantIoAuthPolicyV1Beta2ManifestSpecTargetRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._group = undefined;
      this._kind = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._group = value.group;
      this._kind = value.kind;
      this._name = value.name;
    }
  }

  // group - computed: false, optional: false, required: true
  private _group?: string; 
  public get group() {
    return this.getStringAttribute('group');
  }
  public set group(value: string) {
    this._group = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupInput() {
    return this._group;
  }

  // kind - computed: false, optional: false, required: true
  private _kind?: string; 
  public get kind() {
    return this.getStringAttribute('kind');
  }
  public set kind(value: string) {
    this._kind = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kindInput() {
    return this._kind;
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
}
export interface DataK8SKuadrantIoAuthPolicyV1Beta2ManifestSpecWhen {
  /**
  * A list of pattern expressions to be evaluated as a logical AND.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/kuadrant_io_auth_policy_v1beta2_manifest#all DataK8SKuadrantIoAuthPolicyV1Beta2Manifest#all}
  */
  readonly all?: { [key: string]: string }[] | cdktf.IResolvable;
  /**
  * A list of pattern expressions to be evaluated as a logical OR.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/kuadrant_io_auth_policy_v1beta2_manifest#any DataK8SKuadrantIoAuthPolicyV1Beta2Manifest#any}
  */
  readonly any?: { [key: string]: string }[] | cdktf.IResolvable;
  /**
  * The binary operator to be applied to the content fetched from the authorization JSON, for comparison with 'value'. Possible values are: 'eq' (equal to), 'neq' (not equal to), 'incl' (includes; for arrays), 'excl' (excludes; for arrays), 'matches' (regex)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/kuadrant_io_auth_policy_v1beta2_manifest#operator DataK8SKuadrantIoAuthPolicyV1Beta2Manifest#operator}
  */
  readonly operator?: string;
  /**
  * Reference to a named set of pattern expressions
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/kuadrant_io_auth_policy_v1beta2_manifest#pattern_ref DataK8SKuadrantIoAuthPolicyV1Beta2Manifest#pattern_ref}
  */
  readonly patternRef?: string;
  /**
  * Path selector to fetch content from the authorization JSON (e.g. 'request.method'). Any pattern supported by https://pkg.go.dev/github.com/tidwall/gjson can be used. Authorino custom JSON path modifiers are also supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/kuadrant_io_auth_policy_v1beta2_manifest#selector DataK8SKuadrantIoAuthPolicyV1Beta2Manifest#selector}
  */
  readonly selector?: string;
  /**
  * The value of reference for the comparison with the content fetched from the authorization JSON. If used with the 'matches' operator, the value must compile to a valid Golang regex.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/kuadrant_io_auth_policy_v1beta2_manifest#value DataK8SKuadrantIoAuthPolicyV1Beta2Manifest#value}
  */
  readonly value?: string;
}

export function dataK8SKuadrantIoAuthPolicyV1Beta2ManifestSpecWhenToTerraform(struct?: DataK8SKuadrantIoAuthPolicyV1Beta2ManifestSpecWhen | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all: cdktf.listMapper(cdktf.hashMapper(cdktf.stringToTerraform), false)(struct!.all),
    any: cdktf.listMapper(cdktf.hashMapper(cdktf.stringToTerraform), false)(struct!.any),
    operator: cdktf.stringToTerraform(struct!.operator),
    pattern_ref: cdktf.stringToTerraform(struct!.patternRef),
    selector: cdktf.stringToTerraform(struct!.selector),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SKuadrantIoAuthPolicyV1Beta2ManifestSpecWhenToHclTerraform(struct?: DataK8SKuadrantIoAuthPolicyV1Beta2ManifestSpecWhen | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    all: {
      value: cdktf.listMapperHcl(cdktf.hashMapperHcl(cdktf.stringToHclTerraform), false)(struct!.all),
      isBlock: false,
      type: "list",
      storageClassType: "stringMapList",
    },
    any: {
      value: cdktf.listMapperHcl(cdktf.hashMapperHcl(cdktf.stringToHclTerraform), false)(struct!.any),
      isBlock: false,
      type: "list",
      storageClassType: "stringMapList",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pattern_ref: {
      value: cdktf.stringToHclTerraform(struct!.patternRef),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    selector: {
      value: cdktf.stringToHclTerraform(struct!.selector),
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

export class DataK8SKuadrantIoAuthPolicyV1Beta2ManifestSpecWhenOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKuadrantIoAuthPolicyV1Beta2ManifestSpecWhen | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._all !== undefined) {
      hasAnyValues = true;
      internalValueResult.all = this._all;
    }
    if (this._any !== undefined) {
      hasAnyValues = true;
      internalValueResult.any = this._any;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._patternRef !== undefined) {
      hasAnyValues = true;
      internalValueResult.patternRef = this._patternRef;
    }
    if (this._selector !== undefined) {
      hasAnyValues = true;
      internalValueResult.selector = this._selector;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKuadrantIoAuthPolicyV1Beta2ManifestSpecWhen | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._all = undefined;
      this._any = undefined;
      this._operator = undefined;
      this._patternRef = undefined;
      this._selector = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._all = value.all;
      this._any = value.any;
      this._operator = value.operator;
      this._patternRef = value.patternRef;
      this._selector = value.selector;
      this._value = value.value;
    }
  }

  // all - computed: false, optional: true, required: false
  private _all?: { [key: string]: string }[] | cdktf.IResolvable; 
  public get all() {
    return this.interpolationForAttribute('all');
  }
  public set all(value: { [key: string]: string }[] | cdktf.IResolvable) {
    this._all = value;
  }
  public resetAll() {
    this._all = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allInput() {
    return this._all;
  }

  // any - computed: false, optional: true, required: false
  private _any?: { [key: string]: string }[] | cdktf.IResolvable; 
  public get any() {
    return this.interpolationForAttribute('any');
  }
  public set any(value: { [key: string]: string }[] | cdktf.IResolvable) {
    this._any = value;
  }
  public resetAny() {
    this._any = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get anyInput() {
    return this._any;
  }

  // operator - computed: false, optional: true, required: false
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  public resetOperator() {
    this._operator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // pattern_ref - computed: false, optional: true, required: false
  private _patternRef?: string; 
  public get patternRef() {
    return this.getStringAttribute('pattern_ref');
  }
  public set patternRef(value: string) {
    this._patternRef = value;
  }
  public resetPatternRef() {
    this._patternRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get patternRefInput() {
    return this._patternRef;
  }

  // selector - computed: false, optional: true, required: false
  private _selector?: string; 
  public get selector() {
    return this.getStringAttribute('selector');
  }
  public set selector(value: string) {
    this._selector = value;
  }
  public resetSelector() {
    this._selector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorInput() {
    return this._selector;
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

export class DataK8SKuadrantIoAuthPolicyV1Beta2ManifestSpecWhenList extends cdktf.ComplexList {
  public internalValue? : DataK8SKuadrantIoAuthPolicyV1Beta2ManifestSpecWhen[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKuadrantIoAuthPolicyV1Beta2ManifestSpecWhenOutputReference {
    return new DataK8SKuadrantIoAuthPolicyV1Beta2ManifestSpecWhenOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKuadrantIoAuthPolicyV1Beta2ManifestSpec {
  /**
  * Defaults define explicit default values for this policy and for policies inheriting this policy. Defaults are mutually exclusive with implicit defaults defined by AuthPolicyCommonSpec.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/kuadrant_io_auth_policy_v1beta2_manifest#defaults DataK8SKuadrantIoAuthPolicyV1Beta2Manifest#defaults}
  */
  readonly defaults?: DataK8SKuadrantIoAuthPolicyV1Beta2ManifestSpecDefaults;
  /**
  * Overrides define explicit override values for this policy. Overrides are mutually exclusive with explicit and implicit defaults defined by AuthPolicyCommonSpec.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/kuadrant_io_auth_policy_v1beta2_manifest#overrides DataK8SKuadrantIoAuthPolicyV1Beta2Manifest#overrides}
  */
  readonly overrides?: DataK8SKuadrantIoAuthPolicyV1Beta2ManifestSpecOverrides;
  /**
  * Named sets of patterns that can be referred in 'when' conditions and in pattern-matching authorization policy rules.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/kuadrant_io_auth_policy_v1beta2_manifest#patterns DataK8SKuadrantIoAuthPolicyV1Beta2Manifest#patterns}
  */
  readonly patterns?: { [key: string]: string };
  /**
  * Top-level route selectors. If present, the elements will be used to select HTTPRoute rules that, when activated, trigger the external authorization service. At least one selected HTTPRoute rule must match to trigger the AuthPolicy. If no route selectors are specified, the AuthPolicy will be enforced at all requests to the protected routes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/kuadrant_io_auth_policy_v1beta2_manifest#route_selectors DataK8SKuadrantIoAuthPolicyV1Beta2Manifest#route_selectors}
  */
  readonly routeSelectors?: DataK8SKuadrantIoAuthPolicyV1Beta2ManifestSpecRouteSelectors[] | cdktf.IResolvable;
  /**
  * The auth rules of the policy. See Authorino's AuthConfig CRD for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/kuadrant_io_auth_policy_v1beta2_manifest#rules DataK8SKuadrantIoAuthPolicyV1Beta2Manifest#rules}
  */
  readonly rules?: DataK8SKuadrantIoAuthPolicyV1Beta2ManifestSpecRules;
  /**
  * TargetRef identifies an API object to apply policy to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/kuadrant_io_auth_policy_v1beta2_manifest#target_ref DataK8SKuadrantIoAuthPolicyV1Beta2Manifest#target_ref}
  */
  readonly targetRef: DataK8SKuadrantIoAuthPolicyV1Beta2ManifestSpecTargetRef;
  /**
  * Overall conditions for the AuthPolicy to be enforced. If omitted, the AuthPolicy will be enforced at all requests to the protected routes. If present, all conditions must match for the AuthPolicy to be enforced; otherwise, the authorization service skips the AuthPolicy and returns to the auth request with status OK.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/kuadrant_io_auth_policy_v1beta2_manifest#when DataK8SKuadrantIoAuthPolicyV1Beta2Manifest#when}
  */
  readonly when?: DataK8SKuadrantIoAuthPolicyV1Beta2ManifestSpecWhen[] | cdktf.IResolvable;
}

export function dataK8SKuadrantIoAuthPolicyV1Beta2ManifestSpecToTerraform(struct?: DataK8SKuadrantIoAuthPolicyV1Beta2ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    defaults: dataK8SKuadrantIoAuthPolicyV1Beta2ManifestSpecDefaultsToTerraform(struct!.defaults),
    overrides: dataK8SKuadrantIoAuthPolicyV1Beta2ManifestSpecOverridesToTerraform(struct!.overrides),
    patterns: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.patterns),
    route_selectors: cdktf.listMapper(dataK8SKuadrantIoAuthPolicyV1Beta2ManifestSpecRouteSelectorsToTerraform, false)(struct!.routeSelectors),
    rules: dataK8SKuadrantIoAuthPolicyV1Beta2ManifestSpecRulesToTerraform(struct!.rules),
    target_ref: dataK8SKuadrantIoAuthPolicyV1Beta2ManifestSpecTargetRefToTerraform(struct!.targetRef),
    when: cdktf.listMapper(dataK8SKuadrantIoAuthPolicyV1Beta2ManifestSpecWhenToTerraform, false)(struct!.when),
  }
}


export function dataK8SKuadrantIoAuthPolicyV1Beta2ManifestSpecToHclTerraform(struct?: DataK8SKuadrantIoAuthPolicyV1Beta2ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    defaults: {
      value: dataK8SKuadrantIoAuthPolicyV1Beta2ManifestSpecDefaultsToHclTerraform(struct!.defaults),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKuadrantIoAuthPolicyV1Beta2ManifestSpecDefaults",
    },
    overrides: {
      value: dataK8SKuadrantIoAuthPolicyV1Beta2ManifestSpecOverridesToHclTerraform(struct!.overrides),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKuadrantIoAuthPolicyV1Beta2ManifestSpecOverrides",
    },
    patterns: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.patterns),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    route_selectors: {
      value: cdktf.listMapperHcl(dataK8SKuadrantIoAuthPolicyV1Beta2ManifestSpecRouteSelectorsToHclTerraform, false)(struct!.routeSelectors),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKuadrantIoAuthPolicyV1Beta2ManifestSpecRouteSelectorsList",
    },
    rules: {
      value: dataK8SKuadrantIoAuthPolicyV1Beta2ManifestSpecRulesToHclTerraform(struct!.rules),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKuadrantIoAuthPolicyV1Beta2ManifestSpecRules",
    },
    target_ref: {
      value: dataK8SKuadrantIoAuthPolicyV1Beta2ManifestSpecTargetRefToHclTerraform(struct!.targetRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKuadrantIoAuthPolicyV1Beta2ManifestSpecTargetRef",
    },
    when: {
      value: cdktf.listMapperHcl(dataK8SKuadrantIoAuthPolicyV1Beta2ManifestSpecWhenToHclTerraform, false)(struct!.when),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKuadrantIoAuthPolicyV1Beta2ManifestSpecWhenList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKuadrantIoAuthPolicyV1Beta2ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKuadrantIoAuthPolicyV1Beta2ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaults?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaults = this._defaults?.internalValue;
    }
    if (this._overrides?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.overrides = this._overrides?.internalValue;
    }
    if (this._patterns !== undefined) {
      hasAnyValues = true;
      internalValueResult.patterns = this._patterns;
    }
    if (this._routeSelectors?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.routeSelectors = this._routeSelectors?.internalValue;
    }
    if (this._rules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rules = this._rules?.internalValue;
    }
    if (this._targetRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetRef = this._targetRef?.internalValue;
    }
    if (this._when?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.when = this._when?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKuadrantIoAuthPolicyV1Beta2ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._defaults.internalValue = undefined;
      this._overrides.internalValue = undefined;
      this._patterns = undefined;
      this._routeSelectors.internalValue = undefined;
      this._rules.internalValue = undefined;
      this._targetRef.internalValue = undefined;
      this._when.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._defaults.internalValue = value.defaults;
      this._overrides.internalValue = value.overrides;
      this._patterns = value.patterns;
      this._routeSelectors.internalValue = value.routeSelectors;
      this._rules.internalValue = value.rules;
      this._targetRef.internalValue = value.targetRef;
      this._when.internalValue = value.when;
    }
  }

  // defaults - computed: false, optional: true, required: false
  private _defaults = new DataK8SKuadrantIoAuthPolicyV1Beta2ManifestSpecDefaultsOutputReference(this, "defaults");
  public get defaults() {
    return this._defaults;
  }
  public putDefaults(value: DataK8SKuadrantIoAuthPolicyV1Beta2ManifestSpecDefaults) {
    this._defaults.internalValue = value;
  }
  public resetDefaults() {
    this._defaults.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultsInput() {
    return this._defaults.internalValue;
  }

  // overrides - computed: false, optional: true, required: false
  private _overrides = new DataK8SKuadrantIoAuthPolicyV1Beta2ManifestSpecOverridesOutputReference(this, "overrides");
  public get overrides() {
    return this._overrides;
  }
  public putOverrides(value: DataK8SKuadrantIoAuthPolicyV1Beta2ManifestSpecOverrides) {
    this._overrides.internalValue = value;
  }
  public resetOverrides() {
    this._overrides.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overridesInput() {
    return this._overrides.internalValue;
  }

  // patterns - computed: false, optional: true, required: false
  private _patterns?: { [key: string]: string }; 
  public get patterns() {
    return this.getStringMapAttribute('patterns');
  }
  public set patterns(value: { [key: string]: string }) {
    this._patterns = value;
  }
  public resetPatterns() {
    this._patterns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get patternsInput() {
    return this._patterns;
  }

  // route_selectors - computed: false, optional: true, required: false
  private _routeSelectors = new DataK8SKuadrantIoAuthPolicyV1Beta2ManifestSpecRouteSelectorsList(this, "route_selectors", false);
  public get routeSelectors() {
    return this._routeSelectors;
  }
  public putRouteSelectors(value: DataK8SKuadrantIoAuthPolicyV1Beta2ManifestSpecRouteSelectors[] | cdktf.IResolvable) {
    this._routeSelectors.internalValue = value;
  }
  public resetRouteSelectors() {
    this._routeSelectors.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeSelectorsInput() {
    return this._routeSelectors.internalValue;
  }

  // rules - computed: false, optional: true, required: false
  private _rules = new DataK8SKuadrantIoAuthPolicyV1Beta2ManifestSpecRulesOutputReference(this, "rules");
  public get rules() {
    return this._rules;
  }
  public putRules(value: DataK8SKuadrantIoAuthPolicyV1Beta2ManifestSpecRules) {
    this._rules.internalValue = value;
  }
  public resetRules() {
    this._rules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesInput() {
    return this._rules.internalValue;
  }

  // target_ref - computed: false, optional: false, required: true
  private _targetRef = new DataK8SKuadrantIoAuthPolicyV1Beta2ManifestSpecTargetRefOutputReference(this, "target_ref");
  public get targetRef() {
    return this._targetRef;
  }
  public putTargetRef(value: DataK8SKuadrantIoAuthPolicyV1Beta2ManifestSpecTargetRef) {
    this._targetRef.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetRefInput() {
    return this._targetRef.internalValue;
  }

  // when - computed: false, optional: true, required: false
  private _when = new DataK8SKuadrantIoAuthPolicyV1Beta2ManifestSpecWhenList(this, "when", false);
  public get when() {
    return this._when;
  }
  public putWhen(value: DataK8SKuadrantIoAuthPolicyV1Beta2ManifestSpecWhen[] | cdktf.IResolvable) {
    this._when.internalValue = value;
  }
  public resetWhen() {
    this._when.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get whenInput() {
    return this._when.internalValue;
  }
}
