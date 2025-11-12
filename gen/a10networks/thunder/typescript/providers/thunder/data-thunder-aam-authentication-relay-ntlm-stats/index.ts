// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_relay_ntlm_stats
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderAamAuthenticationRelayNtlmStatsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_relay_ntlm_stats#id DataThunderAamAuthenticationRelayNtlmStats#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Specify NTLM authentication relay name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_relay_ntlm_stats#name DataThunderAamAuthenticationRelayNtlmStats#name}
  */
  readonly name: string;
  /**
  * stats block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_relay_ntlm_stats#stats DataThunderAamAuthenticationRelayNtlmStats#stats}
  */
  readonly stats?: DataThunderAamAuthenticationRelayNtlmStatsStats;
}
export interface DataThunderAamAuthenticationRelayNtlmStatsStats {
  /**
  * Buffer Allocation Failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_relay_ntlm_stats#buffer_alloc_fail DataThunderAamAuthenticationRelayNtlmStats#buffer_alloc_fail}
  */
  readonly bufferAllocFail?: number;
  /**
  * Encoding Failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_relay_ntlm_stats#encoding_fail DataThunderAamAuthenticationRelayNtlmStats#encoding_fail}
  */
  readonly encodingFail?: number;
  /**
  * Failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_relay_ntlm_stats#failure DataThunderAamAuthenticationRelayNtlmStats#failure}
  */
  readonly failure?: number;
  /**
  * HEAD requests sent with AUTH header
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_relay_ntlm_stats#head_auth_request_sent DataThunderAamAuthenticationRelayNtlmStats#head_auth_request_sent}
  */
  readonly headAuthRequestSent?: number;
  /**
  * HEAD requests sent with NEGOTIATE header
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_relay_ntlm_stats#head_negotiate_request_sent DataThunderAamAuthenticationRelayNtlmStats#head_negotiate_request_sent}
  */
  readonly headNegotiateRequestSent?: number;
  /**
  * HTTP 200 OK
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_relay_ntlm_stats#http_code_200 DataThunderAamAuthenticationRelayNtlmStats#http_code_200}
  */
  readonly httpCode200?: number;
  /**
  * HTTP 400 Bad Request
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_relay_ntlm_stats#http_code_400 DataThunderAamAuthenticationRelayNtlmStats#http_code_400}
  */
  readonly httpCode400?: number;
  /**
  * HTTP 401 Unauthorized
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_relay_ntlm_stats#http_code_401 DataThunderAamAuthenticationRelayNtlmStats#http_code_401}
  */
  readonly httpCode401?: number;
  /**
  * HTTP 403 Forbidden
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_relay_ntlm_stats#http_code_403 DataThunderAamAuthenticationRelayNtlmStats#http_code_403}
  */
  readonly httpCode403?: number;
  /**
  * HTTP 404 Not Found
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_relay_ntlm_stats#http_code_404 DataThunderAamAuthenticationRelayNtlmStats#http_code_404}
  */
  readonly httpCode404?: number;
  /**
  * HTTP 500 Internal Server Error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_relay_ntlm_stats#http_code_500 DataThunderAamAuthenticationRelayNtlmStats#http_code_500}
  */
  readonly httpCode500?: number;
  /**
  * HTTP 503 Service Unavailable
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_relay_ntlm_stats#http_code_503 DataThunderAamAuthenticationRelayNtlmStats#http_code_503}
  */
  readonly httpCode503?: number;
  /**
  * Other HTTP Response
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_relay_ntlm_stats#http_code_other DataThunderAamAuthenticationRelayNtlmStats#http_code_other}
  */
  readonly httpCodeOther?: number;
  /**
  * Insert Header Failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_relay_ntlm_stats#insert_header_fail DataThunderAamAuthenticationRelayNtlmStats#insert_header_fail}
  */
  readonly insertHeaderFail?: number;
  /**
  * Internal Error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_relay_ntlm_stats#internal_error DataThunderAamAuthenticationRelayNtlmStats#internal_error}
  */
  readonly internalError?: number;
  /**
  * Large requests sent to server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_relay_ntlm_stats#large_request_flushed DataThunderAamAuthenticationRelayNtlmStats#large_request_flushed}
  */
  readonly largeRequestFlushed?: number;
  /**
  * Requests invoking large request processing
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_relay_ntlm_stats#large_request_processing DataThunderAamAuthenticationRelayNtlmStats#large_request_processing}
  */
  readonly largeRequestProcessing?: number;
  /**
  * Requests for which NTLM relay is skipped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_relay_ntlm_stats#ntlm_auth_skipped DataThunderAamAuthenticationRelayNtlmStats#ntlm_auth_skipped}
  */
  readonly ntlmAuthSkipped?: number;
  /**
  * Parse Header Failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_relay_ntlm_stats#parse_header_fail DataThunderAamAuthenticationRelayNtlmStats#parse_header_fail}
  */
  readonly parseHeaderFail?: number;
  /**
  * Request
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_relay_ntlm_stats#request DataThunderAamAuthenticationRelayNtlmStats#request}
  */
  readonly request?: number;
  /**
  * Response
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_relay_ntlm_stats#response DataThunderAamAuthenticationRelayNtlmStats#response}
  */
  readonly response?: number;
  /**
  * Success
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_relay_ntlm_stats#success DataThunderAamAuthenticationRelayNtlmStats#success}
  */
  readonly success?: number;
}

export function dataThunderAamAuthenticationRelayNtlmStatsStatsToTerraform(struct?: DataThunderAamAuthenticationRelayNtlmStatsStatsOutputReference | DataThunderAamAuthenticationRelayNtlmStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    buffer_alloc_fail: cdktf.numberToTerraform(struct!.bufferAllocFail),
    encoding_fail: cdktf.numberToTerraform(struct!.encodingFail),
    failure: cdktf.numberToTerraform(struct!.failure),
    head_auth_request_sent: cdktf.numberToTerraform(struct!.headAuthRequestSent),
    head_negotiate_request_sent: cdktf.numberToTerraform(struct!.headNegotiateRequestSent),
    http_code_200: cdktf.numberToTerraform(struct!.httpCode200),
    http_code_400: cdktf.numberToTerraform(struct!.httpCode400),
    http_code_401: cdktf.numberToTerraform(struct!.httpCode401),
    http_code_403: cdktf.numberToTerraform(struct!.httpCode403),
    http_code_404: cdktf.numberToTerraform(struct!.httpCode404),
    http_code_500: cdktf.numberToTerraform(struct!.httpCode500),
    http_code_503: cdktf.numberToTerraform(struct!.httpCode503),
    http_code_other: cdktf.numberToTerraform(struct!.httpCodeOther),
    insert_header_fail: cdktf.numberToTerraform(struct!.insertHeaderFail),
    internal_error: cdktf.numberToTerraform(struct!.internalError),
    large_request_flushed: cdktf.numberToTerraform(struct!.largeRequestFlushed),
    large_request_processing: cdktf.numberToTerraform(struct!.largeRequestProcessing),
    ntlm_auth_skipped: cdktf.numberToTerraform(struct!.ntlmAuthSkipped),
    parse_header_fail: cdktf.numberToTerraform(struct!.parseHeaderFail),
    request: cdktf.numberToTerraform(struct!.request),
    response: cdktf.numberToTerraform(struct!.response),
    success: cdktf.numberToTerraform(struct!.success),
  }
}


export function dataThunderAamAuthenticationRelayNtlmStatsStatsToHclTerraform(struct?: DataThunderAamAuthenticationRelayNtlmStatsStatsOutputReference | DataThunderAamAuthenticationRelayNtlmStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    buffer_alloc_fail: {
      value: cdktf.numberToHclTerraform(struct!.bufferAllocFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    encoding_fail: {
      value: cdktf.numberToHclTerraform(struct!.encodingFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    failure: {
      value: cdktf.numberToHclTerraform(struct!.failure),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    head_auth_request_sent: {
      value: cdktf.numberToHclTerraform(struct!.headAuthRequestSent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    head_negotiate_request_sent: {
      value: cdktf.numberToHclTerraform(struct!.headNegotiateRequestSent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    http_code_200: {
      value: cdktf.numberToHclTerraform(struct!.httpCode200),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    http_code_400: {
      value: cdktf.numberToHclTerraform(struct!.httpCode400),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    http_code_401: {
      value: cdktf.numberToHclTerraform(struct!.httpCode401),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    http_code_403: {
      value: cdktf.numberToHclTerraform(struct!.httpCode403),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    http_code_404: {
      value: cdktf.numberToHclTerraform(struct!.httpCode404),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    http_code_500: {
      value: cdktf.numberToHclTerraform(struct!.httpCode500),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    http_code_503: {
      value: cdktf.numberToHclTerraform(struct!.httpCode503),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    http_code_other: {
      value: cdktf.numberToHclTerraform(struct!.httpCodeOther),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    insert_header_fail: {
      value: cdktf.numberToHclTerraform(struct!.insertHeaderFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    internal_error: {
      value: cdktf.numberToHclTerraform(struct!.internalError),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    large_request_flushed: {
      value: cdktf.numberToHclTerraform(struct!.largeRequestFlushed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    large_request_processing: {
      value: cdktf.numberToHclTerraform(struct!.largeRequestProcessing),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ntlm_auth_skipped: {
      value: cdktf.numberToHclTerraform(struct!.ntlmAuthSkipped),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    parse_header_fail: {
      value: cdktf.numberToHclTerraform(struct!.parseHeaderFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    request: {
      value: cdktf.numberToHclTerraform(struct!.request),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    response: {
      value: cdktf.numberToHclTerraform(struct!.response),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    success: {
      value: cdktf.numberToHclTerraform(struct!.success),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderAamAuthenticationRelayNtlmStatsStatsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderAamAuthenticationRelayNtlmStatsStats | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bufferAllocFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.bufferAllocFail = this._bufferAllocFail;
    }
    if (this._encodingFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.encodingFail = this._encodingFail;
    }
    if (this._failure !== undefined) {
      hasAnyValues = true;
      internalValueResult.failure = this._failure;
    }
    if (this._headAuthRequestSent !== undefined) {
      hasAnyValues = true;
      internalValueResult.headAuthRequestSent = this._headAuthRequestSent;
    }
    if (this._headNegotiateRequestSent !== undefined) {
      hasAnyValues = true;
      internalValueResult.headNegotiateRequestSent = this._headNegotiateRequestSent;
    }
    if (this._httpCode200 !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpCode200 = this._httpCode200;
    }
    if (this._httpCode400 !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpCode400 = this._httpCode400;
    }
    if (this._httpCode401 !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpCode401 = this._httpCode401;
    }
    if (this._httpCode403 !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpCode403 = this._httpCode403;
    }
    if (this._httpCode404 !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpCode404 = this._httpCode404;
    }
    if (this._httpCode500 !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpCode500 = this._httpCode500;
    }
    if (this._httpCode503 !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpCode503 = this._httpCode503;
    }
    if (this._httpCodeOther !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpCodeOther = this._httpCodeOther;
    }
    if (this._insertHeaderFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.insertHeaderFail = this._insertHeaderFail;
    }
    if (this._internalError !== undefined) {
      hasAnyValues = true;
      internalValueResult.internalError = this._internalError;
    }
    if (this._largeRequestFlushed !== undefined) {
      hasAnyValues = true;
      internalValueResult.largeRequestFlushed = this._largeRequestFlushed;
    }
    if (this._largeRequestProcessing !== undefined) {
      hasAnyValues = true;
      internalValueResult.largeRequestProcessing = this._largeRequestProcessing;
    }
    if (this._ntlmAuthSkipped !== undefined) {
      hasAnyValues = true;
      internalValueResult.ntlmAuthSkipped = this._ntlmAuthSkipped;
    }
    if (this._parseHeaderFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.parseHeaderFail = this._parseHeaderFail;
    }
    if (this._request !== undefined) {
      hasAnyValues = true;
      internalValueResult.request = this._request;
    }
    if (this._response !== undefined) {
      hasAnyValues = true;
      internalValueResult.response = this._response;
    }
    if (this._success !== undefined) {
      hasAnyValues = true;
      internalValueResult.success = this._success;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderAamAuthenticationRelayNtlmStatsStats | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bufferAllocFail = undefined;
      this._encodingFail = undefined;
      this._failure = undefined;
      this._headAuthRequestSent = undefined;
      this._headNegotiateRequestSent = undefined;
      this._httpCode200 = undefined;
      this._httpCode400 = undefined;
      this._httpCode401 = undefined;
      this._httpCode403 = undefined;
      this._httpCode404 = undefined;
      this._httpCode500 = undefined;
      this._httpCode503 = undefined;
      this._httpCodeOther = undefined;
      this._insertHeaderFail = undefined;
      this._internalError = undefined;
      this._largeRequestFlushed = undefined;
      this._largeRequestProcessing = undefined;
      this._ntlmAuthSkipped = undefined;
      this._parseHeaderFail = undefined;
      this._request = undefined;
      this._response = undefined;
      this._success = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bufferAllocFail = value.bufferAllocFail;
      this._encodingFail = value.encodingFail;
      this._failure = value.failure;
      this._headAuthRequestSent = value.headAuthRequestSent;
      this._headNegotiateRequestSent = value.headNegotiateRequestSent;
      this._httpCode200 = value.httpCode200;
      this._httpCode400 = value.httpCode400;
      this._httpCode401 = value.httpCode401;
      this._httpCode403 = value.httpCode403;
      this._httpCode404 = value.httpCode404;
      this._httpCode500 = value.httpCode500;
      this._httpCode503 = value.httpCode503;
      this._httpCodeOther = value.httpCodeOther;
      this._insertHeaderFail = value.insertHeaderFail;
      this._internalError = value.internalError;
      this._largeRequestFlushed = value.largeRequestFlushed;
      this._largeRequestProcessing = value.largeRequestProcessing;
      this._ntlmAuthSkipped = value.ntlmAuthSkipped;
      this._parseHeaderFail = value.parseHeaderFail;
      this._request = value.request;
      this._response = value.response;
      this._success = value.success;
    }
  }

  // buffer_alloc_fail - computed: false, optional: true, required: false
  private _bufferAllocFail?: number; 
  public get bufferAllocFail() {
    return this.getNumberAttribute('buffer_alloc_fail');
  }
  public set bufferAllocFail(value: number) {
    this._bufferAllocFail = value;
  }
  public resetBufferAllocFail() {
    this._bufferAllocFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bufferAllocFailInput() {
    return this._bufferAllocFail;
  }

  // encoding_fail - computed: false, optional: true, required: false
  private _encodingFail?: number; 
  public get encodingFail() {
    return this.getNumberAttribute('encoding_fail');
  }
  public set encodingFail(value: number) {
    this._encodingFail = value;
  }
  public resetEncodingFail() {
    this._encodingFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encodingFailInput() {
    return this._encodingFail;
  }

  // failure - computed: false, optional: true, required: false
  private _failure?: number; 
  public get failure() {
    return this.getNumberAttribute('failure');
  }
  public set failure(value: number) {
    this._failure = value;
  }
  public resetFailure() {
    this._failure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failureInput() {
    return this._failure;
  }

  // head_auth_request_sent - computed: false, optional: true, required: false
  private _headAuthRequestSent?: number; 
  public get headAuthRequestSent() {
    return this.getNumberAttribute('head_auth_request_sent');
  }
  public set headAuthRequestSent(value: number) {
    this._headAuthRequestSent = value;
  }
  public resetHeadAuthRequestSent() {
    this._headAuthRequestSent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headAuthRequestSentInput() {
    return this._headAuthRequestSent;
  }

  // head_negotiate_request_sent - computed: false, optional: true, required: false
  private _headNegotiateRequestSent?: number; 
  public get headNegotiateRequestSent() {
    return this.getNumberAttribute('head_negotiate_request_sent');
  }
  public set headNegotiateRequestSent(value: number) {
    this._headNegotiateRequestSent = value;
  }
  public resetHeadNegotiateRequestSent() {
    this._headNegotiateRequestSent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headNegotiateRequestSentInput() {
    return this._headNegotiateRequestSent;
  }

  // http_code_200 - computed: false, optional: true, required: false
  private _httpCode200?: number; 
  public get httpCode200() {
    return this.getNumberAttribute('http_code_200');
  }
  public set httpCode200(value: number) {
    this._httpCode200 = value;
  }
  public resetHttpCode200() {
    this._httpCode200 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpCode200Input() {
    return this._httpCode200;
  }

  // http_code_400 - computed: false, optional: true, required: false
  private _httpCode400?: number; 
  public get httpCode400() {
    return this.getNumberAttribute('http_code_400');
  }
  public set httpCode400(value: number) {
    this._httpCode400 = value;
  }
  public resetHttpCode400() {
    this._httpCode400 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpCode400Input() {
    return this._httpCode400;
  }

  // http_code_401 - computed: false, optional: true, required: false
  private _httpCode401?: number; 
  public get httpCode401() {
    return this.getNumberAttribute('http_code_401');
  }
  public set httpCode401(value: number) {
    this._httpCode401 = value;
  }
  public resetHttpCode401() {
    this._httpCode401 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpCode401Input() {
    return this._httpCode401;
  }

  // http_code_403 - computed: false, optional: true, required: false
  private _httpCode403?: number; 
  public get httpCode403() {
    return this.getNumberAttribute('http_code_403');
  }
  public set httpCode403(value: number) {
    this._httpCode403 = value;
  }
  public resetHttpCode403() {
    this._httpCode403 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpCode403Input() {
    return this._httpCode403;
  }

  // http_code_404 - computed: false, optional: true, required: false
  private _httpCode404?: number; 
  public get httpCode404() {
    return this.getNumberAttribute('http_code_404');
  }
  public set httpCode404(value: number) {
    this._httpCode404 = value;
  }
  public resetHttpCode404() {
    this._httpCode404 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpCode404Input() {
    return this._httpCode404;
  }

  // http_code_500 - computed: false, optional: true, required: false
  private _httpCode500?: number; 
  public get httpCode500() {
    return this.getNumberAttribute('http_code_500');
  }
  public set httpCode500(value: number) {
    this._httpCode500 = value;
  }
  public resetHttpCode500() {
    this._httpCode500 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpCode500Input() {
    return this._httpCode500;
  }

  // http_code_503 - computed: false, optional: true, required: false
  private _httpCode503?: number; 
  public get httpCode503() {
    return this.getNumberAttribute('http_code_503');
  }
  public set httpCode503(value: number) {
    this._httpCode503 = value;
  }
  public resetHttpCode503() {
    this._httpCode503 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpCode503Input() {
    return this._httpCode503;
  }

  // http_code_other - computed: false, optional: true, required: false
  private _httpCodeOther?: number; 
  public get httpCodeOther() {
    return this.getNumberAttribute('http_code_other');
  }
  public set httpCodeOther(value: number) {
    this._httpCodeOther = value;
  }
  public resetHttpCodeOther() {
    this._httpCodeOther = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpCodeOtherInput() {
    return this._httpCodeOther;
  }

  // insert_header_fail - computed: false, optional: true, required: false
  private _insertHeaderFail?: number; 
  public get insertHeaderFail() {
    return this.getNumberAttribute('insert_header_fail');
  }
  public set insertHeaderFail(value: number) {
    this._insertHeaderFail = value;
  }
  public resetInsertHeaderFail() {
    this._insertHeaderFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insertHeaderFailInput() {
    return this._insertHeaderFail;
  }

  // internal_error - computed: false, optional: true, required: false
  private _internalError?: number; 
  public get internalError() {
    return this.getNumberAttribute('internal_error');
  }
  public set internalError(value: number) {
    this._internalError = value;
  }
  public resetInternalError() {
    this._internalError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internalErrorInput() {
    return this._internalError;
  }

  // large_request_flushed - computed: false, optional: true, required: false
  private _largeRequestFlushed?: number; 
  public get largeRequestFlushed() {
    return this.getNumberAttribute('large_request_flushed');
  }
  public set largeRequestFlushed(value: number) {
    this._largeRequestFlushed = value;
  }
  public resetLargeRequestFlushed() {
    this._largeRequestFlushed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get largeRequestFlushedInput() {
    return this._largeRequestFlushed;
  }

  // large_request_processing - computed: false, optional: true, required: false
  private _largeRequestProcessing?: number; 
  public get largeRequestProcessing() {
    return this.getNumberAttribute('large_request_processing');
  }
  public set largeRequestProcessing(value: number) {
    this._largeRequestProcessing = value;
  }
  public resetLargeRequestProcessing() {
    this._largeRequestProcessing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get largeRequestProcessingInput() {
    return this._largeRequestProcessing;
  }

  // ntlm_auth_skipped - computed: false, optional: true, required: false
  private _ntlmAuthSkipped?: number; 
  public get ntlmAuthSkipped() {
    return this.getNumberAttribute('ntlm_auth_skipped');
  }
  public set ntlmAuthSkipped(value: number) {
    this._ntlmAuthSkipped = value;
  }
  public resetNtlmAuthSkipped() {
    this._ntlmAuthSkipped = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ntlmAuthSkippedInput() {
    return this._ntlmAuthSkipped;
  }

  // parse_header_fail - computed: false, optional: true, required: false
  private _parseHeaderFail?: number; 
  public get parseHeaderFail() {
    return this.getNumberAttribute('parse_header_fail');
  }
  public set parseHeaderFail(value: number) {
    this._parseHeaderFail = value;
  }
  public resetParseHeaderFail() {
    this._parseHeaderFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parseHeaderFailInput() {
    return this._parseHeaderFail;
  }

  // request - computed: false, optional: true, required: false
  private _request?: number; 
  public get request() {
    return this.getNumberAttribute('request');
  }
  public set request(value: number) {
    this._request = value;
  }
  public resetRequest() {
    this._request = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestInput() {
    return this._request;
  }

  // response - computed: false, optional: true, required: false
  private _response?: number; 
  public get response() {
    return this.getNumberAttribute('response');
  }
  public set response(value: number) {
    this._response = value;
  }
  public resetResponse() {
    this._response = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseInput() {
    return this._response;
  }

  // success - computed: false, optional: true, required: false
  private _success?: number; 
  public get success() {
    return this.getNumberAttribute('success');
  }
  public set success(value: number) {
    this._success = value;
  }
  public resetSuccess() {
    this._success = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get successInput() {
    return this._success;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_relay_ntlm_stats thunder_aam_authentication_relay_ntlm_stats}
*/
export class DataThunderAamAuthenticationRelayNtlmStats extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_aam_authentication_relay_ntlm_stats";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderAamAuthenticationRelayNtlmStats resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderAamAuthenticationRelayNtlmStats to import
  * @param importFromId The id of the existing DataThunderAamAuthenticationRelayNtlmStats that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_relay_ntlm_stats#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderAamAuthenticationRelayNtlmStats to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_aam_authentication_relay_ntlm_stats", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_relay_ntlm_stats thunder_aam_authentication_relay_ntlm_stats} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderAamAuthenticationRelayNtlmStatsConfig
  */
  public constructor(scope: Construct, id: string, config: DataThunderAamAuthenticationRelayNtlmStatsConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_aam_authentication_relay_ntlm_stats',
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
    this._id = config.id;
    this._name = config.name;
    this._stats.internalValue = config.stats;
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

  // stats - computed: false, optional: true, required: false
  private _stats = new DataThunderAamAuthenticationRelayNtlmStatsStatsOutputReference(this, "stats");
  public get stats() {
    return this._stats;
  }
  public putStats(value: DataThunderAamAuthenticationRelayNtlmStatsStats) {
    this._stats.internalValue = value;
  }
  public resetStats() {
    this._stats.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statsInput() {
    return this._stats.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      stats: dataThunderAamAuthenticationRelayNtlmStatsStatsToTerraform(this._stats.internalValue),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      stats: {
        value: dataThunderAamAuthenticationRelayNtlmStatsStatsToHclTerraform(this._stats.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderAamAuthenticationRelayNtlmStatsStatsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
