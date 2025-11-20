// https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/healthcheck
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface HealthcheckConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/healthcheck#annotations Healthcheck#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/healthcheck#description Healthcheck#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/healthcheck#disable Healthcheck#disable}
  */
  readonly disable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/healthcheck#dns_proxy_icmp_health_check Healthcheck#dns_proxy_icmp_health_check}
  */
  readonly dnsProxyIcmpHealthCheck?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/healthcheck#healthy_threshold Healthcheck#healthy_threshold}
  */
  readonly healthyThreshold: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/healthcheck#id Healthcheck#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/healthcheck#interval Healthcheck#interval}
  */
  readonly interval: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/healthcheck#jitter_percent Healthcheck#jitter_percent}
  */
  readonly jitterPercent?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/healthcheck#labels Healthcheck#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/healthcheck#name Healthcheck#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/healthcheck#namespace Healthcheck#namespace}
  */
  readonly namespace: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/healthcheck#timeout Healthcheck#timeout}
  */
  readonly timeout: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/healthcheck#udp_icmp_health_check Healthcheck#udp_icmp_health_check}
  */
  readonly udpIcmpHealthCheck?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/healthcheck#unhealthy_threshold Healthcheck#unhealthy_threshold}
  */
  readonly unhealthyThreshold: number;
  /**
  * dns_health_check block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/healthcheck#dns_health_check Healthcheck#dns_health_check}
  */
  readonly dnsHealthCheck?: HealthcheckDnsHealthCheck;
  /**
  * dns_proxy_tcp_health_check block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/healthcheck#dns_proxy_tcp_health_check Healthcheck#dns_proxy_tcp_health_check}
  */
  readonly dnsProxyTcpHealthCheck?: HealthcheckDnsProxyTcpHealthCheck;
  /**
  * dns_proxy_udp_health_check block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/healthcheck#dns_proxy_udp_health_check Healthcheck#dns_proxy_udp_health_check}
  */
  readonly dnsProxyUdpHealthCheck?: HealthcheckDnsProxyUdpHealthCheck;
  /**
  * http_health_check block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/healthcheck#http_health_check Healthcheck#http_health_check}
  */
  readonly httpHealthCheck?: HealthcheckHttpHealthCheck;
  /**
  * tcp_health_check block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/healthcheck#tcp_health_check Healthcheck#tcp_health_check}
  */
  readonly tcpHealthCheck?: HealthcheckTcpHealthCheck;
}
export interface HealthcheckDnsHealthCheck {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/healthcheck#expected_rcode Healthcheck#expected_rcode}
  */
  readonly expectedRcode: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/healthcheck#expected_record_type Healthcheck#expected_record_type}
  */
  readonly expectedRecordType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/healthcheck#expected_response Healthcheck#expected_response}
  */
  readonly expectedResponse: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/healthcheck#query_name Healthcheck#query_name}
  */
  readonly queryName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/healthcheck#query_type Healthcheck#query_type}
  */
  readonly queryType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/healthcheck#reverse Healthcheck#reverse}
  */
  readonly reverse?: boolean | cdktf.IResolvable;
}

export function healthcheckDnsHealthCheckToTerraform(struct?: HealthcheckDnsHealthCheckOutputReference | HealthcheckDnsHealthCheck): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    expected_rcode: cdktf.stringToTerraform(struct!.expectedRcode),
    expected_record_type: cdktf.stringToTerraform(struct!.expectedRecordType),
    expected_response: cdktf.stringToTerraform(struct!.expectedResponse),
    query_name: cdktf.stringToTerraform(struct!.queryName),
    query_type: cdktf.stringToTerraform(struct!.queryType),
    reverse: cdktf.booleanToTerraform(struct!.reverse),
  }
}


export function healthcheckDnsHealthCheckToHclTerraform(struct?: HealthcheckDnsHealthCheckOutputReference | HealthcheckDnsHealthCheck): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    expected_rcode: {
      value: cdktf.stringToHclTerraform(struct!.expectedRcode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    expected_record_type: {
      value: cdktf.stringToHclTerraform(struct!.expectedRecordType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    expected_response: {
      value: cdktf.stringToHclTerraform(struct!.expectedResponse),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    query_name: {
      value: cdktf.stringToHclTerraform(struct!.queryName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    query_type: {
      value: cdktf.stringToHclTerraform(struct!.queryType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    reverse: {
      value: cdktf.booleanToHclTerraform(struct!.reverse),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HealthcheckDnsHealthCheckOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HealthcheckDnsHealthCheck | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._expectedRcode !== undefined) {
      hasAnyValues = true;
      internalValueResult.expectedRcode = this._expectedRcode;
    }
    if (this._expectedRecordType !== undefined) {
      hasAnyValues = true;
      internalValueResult.expectedRecordType = this._expectedRecordType;
    }
    if (this._expectedResponse !== undefined) {
      hasAnyValues = true;
      internalValueResult.expectedResponse = this._expectedResponse;
    }
    if (this._queryName !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryName = this._queryName;
    }
    if (this._queryType !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryType = this._queryType;
    }
    if (this._reverse !== undefined) {
      hasAnyValues = true;
      internalValueResult.reverse = this._reverse;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HealthcheckDnsHealthCheck | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._expectedRcode = undefined;
      this._expectedRecordType = undefined;
      this._expectedResponse = undefined;
      this._queryName = undefined;
      this._queryType = undefined;
      this._reverse = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._expectedRcode = value.expectedRcode;
      this._expectedRecordType = value.expectedRecordType;
      this._expectedResponse = value.expectedResponse;
      this._queryName = value.queryName;
      this._queryType = value.queryType;
      this._reverse = value.reverse;
    }
  }

  // expected_rcode - computed: false, optional: false, required: true
  private _expectedRcode?: string; 
  public get expectedRcode() {
    return this.getStringAttribute('expected_rcode');
  }
  public set expectedRcode(value: string) {
    this._expectedRcode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get expectedRcodeInput() {
    return this._expectedRcode;
  }

  // expected_record_type - computed: false, optional: false, required: true
  private _expectedRecordType?: string; 
  public get expectedRecordType() {
    return this.getStringAttribute('expected_record_type');
  }
  public set expectedRecordType(value: string) {
    this._expectedRecordType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get expectedRecordTypeInput() {
    return this._expectedRecordType;
  }

  // expected_response - computed: false, optional: false, required: true
  private _expectedResponse?: string; 
  public get expectedResponse() {
    return this.getStringAttribute('expected_response');
  }
  public set expectedResponse(value: string) {
    this._expectedResponse = value;
  }
  // Temporarily expose input value. Use with caution.
  public get expectedResponseInput() {
    return this._expectedResponse;
  }

  // query_name - computed: false, optional: false, required: true
  private _queryName?: string; 
  public get queryName() {
    return this.getStringAttribute('query_name');
  }
  public set queryName(value: string) {
    this._queryName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get queryNameInput() {
    return this._queryName;
  }

  // query_type - computed: false, optional: false, required: true
  private _queryType?: string; 
  public get queryType() {
    return this.getStringAttribute('query_type');
  }
  public set queryType(value: string) {
    this._queryType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get queryTypeInput() {
    return this._queryType;
  }

  // reverse - computed: false, optional: true, required: false
  private _reverse?: boolean | cdktf.IResolvable; 
  public get reverse() {
    return this.getBooleanAttribute('reverse');
  }
  public set reverse(value: boolean | cdktf.IResolvable) {
    this._reverse = value;
  }
  public resetReverse() {
    this._reverse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reverseInput() {
    return this._reverse;
  }
}
export interface HealthcheckDnsProxyTcpHealthCheck {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/healthcheck#expected_response Healthcheck#expected_response}
  */
  readonly expectedResponse: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/healthcheck#send_payload Healthcheck#send_payload}
  */
  readonly sendPayload: string;
}

export function healthcheckDnsProxyTcpHealthCheckToTerraform(struct?: HealthcheckDnsProxyTcpHealthCheckOutputReference | HealthcheckDnsProxyTcpHealthCheck): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    expected_response: cdktf.stringToTerraform(struct!.expectedResponse),
    send_payload: cdktf.stringToTerraform(struct!.sendPayload),
  }
}


export function healthcheckDnsProxyTcpHealthCheckToHclTerraform(struct?: HealthcheckDnsProxyTcpHealthCheckOutputReference | HealthcheckDnsProxyTcpHealthCheck): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    expected_response: {
      value: cdktf.stringToHclTerraform(struct!.expectedResponse),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    send_payload: {
      value: cdktf.stringToHclTerraform(struct!.sendPayload),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HealthcheckDnsProxyTcpHealthCheckOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HealthcheckDnsProxyTcpHealthCheck | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._expectedResponse !== undefined) {
      hasAnyValues = true;
      internalValueResult.expectedResponse = this._expectedResponse;
    }
    if (this._sendPayload !== undefined) {
      hasAnyValues = true;
      internalValueResult.sendPayload = this._sendPayload;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HealthcheckDnsProxyTcpHealthCheck | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._expectedResponse = undefined;
      this._sendPayload = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._expectedResponse = value.expectedResponse;
      this._sendPayload = value.sendPayload;
    }
  }

  // expected_response - computed: false, optional: false, required: true
  private _expectedResponse?: string; 
  public get expectedResponse() {
    return this.getStringAttribute('expected_response');
  }
  public set expectedResponse(value: string) {
    this._expectedResponse = value;
  }
  // Temporarily expose input value. Use with caution.
  public get expectedResponseInput() {
    return this._expectedResponse;
  }

  // send_payload - computed: false, optional: false, required: true
  private _sendPayload?: string; 
  public get sendPayload() {
    return this.getStringAttribute('send_payload');
  }
  public set sendPayload(value: string) {
    this._sendPayload = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sendPayloadInput() {
    return this._sendPayload;
  }
}
export interface HealthcheckDnsProxyUdpHealthCheck {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/healthcheck#expected_response Healthcheck#expected_response}
  */
  readonly expectedResponse: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/healthcheck#send_payload Healthcheck#send_payload}
  */
  readonly sendPayload: string;
}

export function healthcheckDnsProxyUdpHealthCheckToTerraform(struct?: HealthcheckDnsProxyUdpHealthCheckOutputReference | HealthcheckDnsProxyUdpHealthCheck): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    expected_response: cdktf.stringToTerraform(struct!.expectedResponse),
    send_payload: cdktf.stringToTerraform(struct!.sendPayload),
  }
}


export function healthcheckDnsProxyUdpHealthCheckToHclTerraform(struct?: HealthcheckDnsProxyUdpHealthCheckOutputReference | HealthcheckDnsProxyUdpHealthCheck): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    expected_response: {
      value: cdktf.stringToHclTerraform(struct!.expectedResponse),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    send_payload: {
      value: cdktf.stringToHclTerraform(struct!.sendPayload),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HealthcheckDnsProxyUdpHealthCheckOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HealthcheckDnsProxyUdpHealthCheck | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._expectedResponse !== undefined) {
      hasAnyValues = true;
      internalValueResult.expectedResponse = this._expectedResponse;
    }
    if (this._sendPayload !== undefined) {
      hasAnyValues = true;
      internalValueResult.sendPayload = this._sendPayload;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HealthcheckDnsProxyUdpHealthCheck | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._expectedResponse = undefined;
      this._sendPayload = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._expectedResponse = value.expectedResponse;
      this._sendPayload = value.sendPayload;
    }
  }

  // expected_response - computed: false, optional: false, required: true
  private _expectedResponse?: string; 
  public get expectedResponse() {
    return this.getStringAttribute('expected_response');
  }
  public set expectedResponse(value: string) {
    this._expectedResponse = value;
  }
  // Temporarily expose input value. Use with caution.
  public get expectedResponseInput() {
    return this._expectedResponse;
  }

  // send_payload - computed: false, optional: false, required: true
  private _sendPayload?: string; 
  public get sendPayload() {
    return this.getStringAttribute('send_payload');
  }
  public set sendPayload(value: string) {
    this._sendPayload = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sendPayloadInput() {
    return this._sendPayload;
  }
}
export interface HealthcheckHttpHealthCheck {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/healthcheck#expected_status_codes Healthcheck#expected_status_codes}
  */
  readonly expectedStatusCodes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/healthcheck#headers Healthcheck#headers}
  */
  readonly headers?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/healthcheck#host_header Healthcheck#host_header}
  */
  readonly hostHeader?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/healthcheck#path Healthcheck#path}
  */
  readonly path: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/healthcheck#request_headers_to_remove Healthcheck#request_headers_to_remove}
  */
  readonly requestHeadersToRemove?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/healthcheck#use_http2 Healthcheck#use_http2}
  */
  readonly useHttp2?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/healthcheck#use_origin_server_name Healthcheck#use_origin_server_name}
  */
  readonly useOriginServerName?: boolean | cdktf.IResolvable;
}

export function healthcheckHttpHealthCheckToTerraform(struct?: HealthcheckHttpHealthCheckOutputReference | HealthcheckHttpHealthCheck): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    expected_status_codes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.expectedStatusCodes),
    headers: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.headers),
    host_header: cdktf.stringToTerraform(struct!.hostHeader),
    path: cdktf.stringToTerraform(struct!.path),
    request_headers_to_remove: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.requestHeadersToRemove),
    use_http2: cdktf.booleanToTerraform(struct!.useHttp2),
    use_origin_server_name: cdktf.booleanToTerraform(struct!.useOriginServerName),
  }
}


export function healthcheckHttpHealthCheckToHclTerraform(struct?: HealthcheckHttpHealthCheckOutputReference | HealthcheckHttpHealthCheck): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    expected_status_codes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.expectedStatusCodes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    headers: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.headers),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    host_header: {
      value: cdktf.stringToHclTerraform(struct!.hostHeader),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    request_headers_to_remove: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.requestHeadersToRemove),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    use_http2: {
      value: cdktf.booleanToHclTerraform(struct!.useHttp2),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    use_origin_server_name: {
      value: cdktf.booleanToHclTerraform(struct!.useOriginServerName),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HealthcheckHttpHealthCheckOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HealthcheckHttpHealthCheck | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._expectedStatusCodes !== undefined) {
      hasAnyValues = true;
      internalValueResult.expectedStatusCodes = this._expectedStatusCodes;
    }
    if (this._headers !== undefined) {
      hasAnyValues = true;
      internalValueResult.headers = this._headers;
    }
    if (this._hostHeader !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostHeader = this._hostHeader;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._requestHeadersToRemove !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestHeadersToRemove = this._requestHeadersToRemove;
    }
    if (this._useHttp2 !== undefined) {
      hasAnyValues = true;
      internalValueResult.useHttp2 = this._useHttp2;
    }
    if (this._useOriginServerName !== undefined) {
      hasAnyValues = true;
      internalValueResult.useOriginServerName = this._useOriginServerName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HealthcheckHttpHealthCheck | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._expectedStatusCodes = undefined;
      this._headers = undefined;
      this._hostHeader = undefined;
      this._path = undefined;
      this._requestHeadersToRemove = undefined;
      this._useHttp2 = undefined;
      this._useOriginServerName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._expectedStatusCodes = value.expectedStatusCodes;
      this._headers = value.headers;
      this._hostHeader = value.hostHeader;
      this._path = value.path;
      this._requestHeadersToRemove = value.requestHeadersToRemove;
      this._useHttp2 = value.useHttp2;
      this._useOriginServerName = value.useOriginServerName;
    }
  }

  // expected_status_codes - computed: false, optional: true, required: false
  private _expectedStatusCodes?: string[]; 
  public get expectedStatusCodes() {
    return this.getListAttribute('expected_status_codes');
  }
  public set expectedStatusCodes(value: string[]) {
    this._expectedStatusCodes = value;
  }
  public resetExpectedStatusCodes() {
    this._expectedStatusCodes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expectedStatusCodesInput() {
    return this._expectedStatusCodes;
  }

  // headers - computed: false, optional: true, required: false
  private _headers?: { [key: string]: string }; 
  public get headers() {
    return this.getStringMapAttribute('headers');
  }
  public set headers(value: { [key: string]: string }) {
    this._headers = value;
  }
  public resetHeaders() {
    this._headers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headersInput() {
    return this._headers;
  }

  // host_header - computed: false, optional: true, required: false
  private _hostHeader?: string; 
  public get hostHeader() {
    return this.getStringAttribute('host_header');
  }
  public set hostHeader(value: string) {
    this._hostHeader = value;
  }
  public resetHostHeader() {
    this._hostHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostHeaderInput() {
    return this._hostHeader;
  }

  // path - computed: false, optional: false, required: true
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // request_headers_to_remove - computed: false, optional: true, required: false
  private _requestHeadersToRemove?: string[]; 
  public get requestHeadersToRemove() {
    return this.getListAttribute('request_headers_to_remove');
  }
  public set requestHeadersToRemove(value: string[]) {
    this._requestHeadersToRemove = value;
  }
  public resetRequestHeadersToRemove() {
    this._requestHeadersToRemove = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestHeadersToRemoveInput() {
    return this._requestHeadersToRemove;
  }

  // use_http2 - computed: false, optional: true, required: false
  private _useHttp2?: boolean | cdktf.IResolvable; 
  public get useHttp2() {
    return this.getBooleanAttribute('use_http2');
  }
  public set useHttp2(value: boolean | cdktf.IResolvable) {
    this._useHttp2 = value;
  }
  public resetUseHttp2() {
    this._useHttp2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useHttp2Input() {
    return this._useHttp2;
  }

  // use_origin_server_name - computed: false, optional: true, required: false
  private _useOriginServerName?: boolean | cdktf.IResolvable; 
  public get useOriginServerName() {
    return this.getBooleanAttribute('use_origin_server_name');
  }
  public set useOriginServerName(value: boolean | cdktf.IResolvable) {
    this._useOriginServerName = value;
  }
  public resetUseOriginServerName() {
    this._useOriginServerName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useOriginServerNameInput() {
    return this._useOriginServerName;
  }
}
export interface HealthcheckTcpHealthCheck {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/healthcheck#expected_response Healthcheck#expected_response}
  */
  readonly expectedResponse?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/healthcheck#send_payload Healthcheck#send_payload}
  */
  readonly sendPayload?: string;
}

export function healthcheckTcpHealthCheckToTerraform(struct?: HealthcheckTcpHealthCheckOutputReference | HealthcheckTcpHealthCheck): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    expected_response: cdktf.stringToTerraform(struct!.expectedResponse),
    send_payload: cdktf.stringToTerraform(struct!.sendPayload),
  }
}


export function healthcheckTcpHealthCheckToHclTerraform(struct?: HealthcheckTcpHealthCheckOutputReference | HealthcheckTcpHealthCheck): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    expected_response: {
      value: cdktf.stringToHclTerraform(struct!.expectedResponse),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    send_payload: {
      value: cdktf.stringToHclTerraform(struct!.sendPayload),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HealthcheckTcpHealthCheckOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HealthcheckTcpHealthCheck | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._expectedResponse !== undefined) {
      hasAnyValues = true;
      internalValueResult.expectedResponse = this._expectedResponse;
    }
    if (this._sendPayload !== undefined) {
      hasAnyValues = true;
      internalValueResult.sendPayload = this._sendPayload;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HealthcheckTcpHealthCheck | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._expectedResponse = undefined;
      this._sendPayload = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._expectedResponse = value.expectedResponse;
      this._sendPayload = value.sendPayload;
    }
  }

  // expected_response - computed: false, optional: true, required: false
  private _expectedResponse?: string; 
  public get expectedResponse() {
    return this.getStringAttribute('expected_response');
  }
  public set expectedResponse(value: string) {
    this._expectedResponse = value;
  }
  public resetExpectedResponse() {
    this._expectedResponse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expectedResponseInput() {
    return this._expectedResponse;
  }

  // send_payload - computed: false, optional: true, required: false
  private _sendPayload?: string; 
  public get sendPayload() {
    return this.getStringAttribute('send_payload');
  }
  public set sendPayload(value: string) {
    this._sendPayload = value;
  }
  public resetSendPayload() {
    this._sendPayload = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendPayloadInput() {
    return this._sendPayload;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/healthcheck volterra_healthcheck}
*/
export class Healthcheck extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "volterra_healthcheck";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Healthcheck resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Healthcheck to import
  * @param importFromId The id of the existing Healthcheck that should be imported. Refer to the {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/healthcheck#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Healthcheck to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "volterra_healthcheck", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/healthcheck volterra_healthcheck} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options HealthcheckConfig
  */
  public constructor(scope: Construct, id: string, config: HealthcheckConfig) {
    super(scope, id, {
      terraformResourceType: 'volterra_healthcheck',
      terraformGeneratorMetadata: {
        providerName: 'volterra',
        providerVersion: '0.11.45',
        providerVersionConstraint: '0.11.45'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._annotations = config.annotations;
    this._description = config.description;
    this._disable = config.disable;
    this._dnsProxyIcmpHealthCheck = config.dnsProxyIcmpHealthCheck;
    this._healthyThreshold = config.healthyThreshold;
    this._id = config.id;
    this._interval = config.interval;
    this._jitterPercent = config.jitterPercent;
    this._labels = config.labels;
    this._name = config.name;
    this._namespace = config.namespace;
    this._timeout = config.timeout;
    this._udpIcmpHealthCheck = config.udpIcmpHealthCheck;
    this._unhealthyThreshold = config.unhealthyThreshold;
    this._dnsHealthCheck.internalValue = config.dnsHealthCheck;
    this._dnsProxyTcpHealthCheck.internalValue = config.dnsProxyTcpHealthCheck;
    this._dnsProxyUdpHealthCheck.internalValue = config.dnsProxyUdpHealthCheck;
    this._httpHealthCheck.internalValue = config.httpHealthCheck;
    this._tcpHealthCheck.internalValue = config.tcpHealthCheck;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // annotations - computed: false, optional: true, required: false
  private _annotations?: { [key: string]: string }; 
  public get annotations() {
    return this.getStringMapAttribute('annotations');
  }
  public set annotations(value: { [key: string]: string }) {
    this._annotations = value;
  }
  public resetAnnotations() {
    this._annotations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationsInput() {
    return this._annotations;
  }

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

  // disable - computed: false, optional: true, required: false
  private _disable?: boolean | cdktf.IResolvable; 
  public get disable() {
    return this.getBooleanAttribute('disable');
  }
  public set disable(value: boolean | cdktf.IResolvable) {
    this._disable = value;
  }
  public resetDisable() {
    this._disable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableInput() {
    return this._disable;
  }

  // dns_proxy_icmp_health_check - computed: false, optional: true, required: false
  private _dnsProxyIcmpHealthCheck?: boolean | cdktf.IResolvable; 
  public get dnsProxyIcmpHealthCheck() {
    return this.getBooleanAttribute('dns_proxy_icmp_health_check');
  }
  public set dnsProxyIcmpHealthCheck(value: boolean | cdktf.IResolvable) {
    this._dnsProxyIcmpHealthCheck = value;
  }
  public resetDnsProxyIcmpHealthCheck() {
    this._dnsProxyIcmpHealthCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsProxyIcmpHealthCheckInput() {
    return this._dnsProxyIcmpHealthCheck;
  }

  // healthy_threshold - computed: false, optional: false, required: true
  private _healthyThreshold?: number; 
  public get healthyThreshold() {
    return this.getNumberAttribute('healthy_threshold');
  }
  public set healthyThreshold(value: number) {
    this._healthyThreshold = value;
  }
  // Temporarily expose input value. Use with caution.
  public get healthyThresholdInput() {
    return this._healthyThreshold;
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

  // interval - computed: false, optional: false, required: true
  private _interval?: number; 
  public get interval() {
    return this.getNumberAttribute('interval');
  }
  public set interval(value: number) {
    this._interval = value;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInput() {
    return this._interval;
  }

  // jitter_percent - computed: false, optional: true, required: false
  private _jitterPercent?: number; 
  public get jitterPercent() {
    return this.getNumberAttribute('jitter_percent');
  }
  public set jitterPercent(value: number) {
    this._jitterPercent = value;
  }
  public resetJitterPercent() {
    this._jitterPercent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jitterPercentInput() {
    return this._jitterPercent;
  }

  // labels - computed: false, optional: true, required: false
  private _labels?: { [key: string]: string }; 
  public get labels() {
    return this.getStringMapAttribute('labels');
  }
  public set labels(value: { [key: string]: string }) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
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

  // namespace - computed: false, optional: false, required: true
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // timeout - computed: false, optional: false, required: true
  private _timeout?: number; 
  public get timeout() {
    return this.getNumberAttribute('timeout');
  }
  public set timeout(value: number) {
    this._timeout = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
  }

  // udp_icmp_health_check - computed: false, optional: true, required: false
  private _udpIcmpHealthCheck?: boolean | cdktf.IResolvable; 
  public get udpIcmpHealthCheck() {
    return this.getBooleanAttribute('udp_icmp_health_check');
  }
  public set udpIcmpHealthCheck(value: boolean | cdktf.IResolvable) {
    this._udpIcmpHealthCheck = value;
  }
  public resetUdpIcmpHealthCheck() {
    this._udpIcmpHealthCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpIcmpHealthCheckInput() {
    return this._udpIcmpHealthCheck;
  }

  // unhealthy_threshold - computed: false, optional: false, required: true
  private _unhealthyThreshold?: number; 
  public get unhealthyThreshold() {
    return this.getNumberAttribute('unhealthy_threshold');
  }
  public set unhealthyThreshold(value: number) {
    this._unhealthyThreshold = value;
  }
  // Temporarily expose input value. Use with caution.
  public get unhealthyThresholdInput() {
    return this._unhealthyThreshold;
  }

  // dns_health_check - computed: false, optional: true, required: false
  private _dnsHealthCheck = new HealthcheckDnsHealthCheckOutputReference(this, "dns_health_check");
  public get dnsHealthCheck() {
    return this._dnsHealthCheck;
  }
  public putDnsHealthCheck(value: HealthcheckDnsHealthCheck) {
    this._dnsHealthCheck.internalValue = value;
  }
  public resetDnsHealthCheck() {
    this._dnsHealthCheck.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsHealthCheckInput() {
    return this._dnsHealthCheck.internalValue;
  }

  // dns_proxy_tcp_health_check - computed: false, optional: true, required: false
  private _dnsProxyTcpHealthCheck = new HealthcheckDnsProxyTcpHealthCheckOutputReference(this, "dns_proxy_tcp_health_check");
  public get dnsProxyTcpHealthCheck() {
    return this._dnsProxyTcpHealthCheck;
  }
  public putDnsProxyTcpHealthCheck(value: HealthcheckDnsProxyTcpHealthCheck) {
    this._dnsProxyTcpHealthCheck.internalValue = value;
  }
  public resetDnsProxyTcpHealthCheck() {
    this._dnsProxyTcpHealthCheck.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsProxyTcpHealthCheckInput() {
    return this._dnsProxyTcpHealthCheck.internalValue;
  }

  // dns_proxy_udp_health_check - computed: false, optional: true, required: false
  private _dnsProxyUdpHealthCheck = new HealthcheckDnsProxyUdpHealthCheckOutputReference(this, "dns_proxy_udp_health_check");
  public get dnsProxyUdpHealthCheck() {
    return this._dnsProxyUdpHealthCheck;
  }
  public putDnsProxyUdpHealthCheck(value: HealthcheckDnsProxyUdpHealthCheck) {
    this._dnsProxyUdpHealthCheck.internalValue = value;
  }
  public resetDnsProxyUdpHealthCheck() {
    this._dnsProxyUdpHealthCheck.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsProxyUdpHealthCheckInput() {
    return this._dnsProxyUdpHealthCheck.internalValue;
  }

  // http_health_check - computed: false, optional: true, required: false
  private _httpHealthCheck = new HealthcheckHttpHealthCheckOutputReference(this, "http_health_check");
  public get httpHealthCheck() {
    return this._httpHealthCheck;
  }
  public putHttpHealthCheck(value: HealthcheckHttpHealthCheck) {
    this._httpHealthCheck.internalValue = value;
  }
  public resetHttpHealthCheck() {
    this._httpHealthCheck.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpHealthCheckInput() {
    return this._httpHealthCheck.internalValue;
  }

  // tcp_health_check - computed: false, optional: true, required: false
  private _tcpHealthCheck = new HealthcheckTcpHealthCheckOutputReference(this, "tcp_health_check");
  public get tcpHealthCheck() {
    return this._tcpHealthCheck;
  }
  public putTcpHealthCheck(value: HealthcheckTcpHealthCheck) {
    this._tcpHealthCheck.internalValue = value;
  }
  public resetTcpHealthCheck() {
    this._tcpHealthCheck.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpHealthCheckInput() {
    return this._tcpHealthCheck.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      annotations: cdktf.hashMapper(cdktf.stringToTerraform)(this._annotations),
      description: cdktf.stringToTerraform(this._description),
      disable: cdktf.booleanToTerraform(this._disable),
      dns_proxy_icmp_health_check: cdktf.booleanToTerraform(this._dnsProxyIcmpHealthCheck),
      healthy_threshold: cdktf.numberToTerraform(this._healthyThreshold),
      id: cdktf.stringToTerraform(this._id),
      interval: cdktf.numberToTerraform(this._interval),
      jitter_percent: cdktf.numberToTerraform(this._jitterPercent),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      name: cdktf.stringToTerraform(this._name),
      namespace: cdktf.stringToTerraform(this._namespace),
      timeout: cdktf.numberToTerraform(this._timeout),
      udp_icmp_health_check: cdktf.booleanToTerraform(this._udpIcmpHealthCheck),
      unhealthy_threshold: cdktf.numberToTerraform(this._unhealthyThreshold),
      dns_health_check: healthcheckDnsHealthCheckToTerraform(this._dnsHealthCheck.internalValue),
      dns_proxy_tcp_health_check: healthcheckDnsProxyTcpHealthCheckToTerraform(this._dnsProxyTcpHealthCheck.internalValue),
      dns_proxy_udp_health_check: healthcheckDnsProxyUdpHealthCheckToTerraform(this._dnsProxyUdpHealthCheck.internalValue),
      http_health_check: healthcheckHttpHealthCheckToTerraform(this._httpHealthCheck.internalValue),
      tcp_health_check: healthcheckTcpHealthCheckToTerraform(this._tcpHealthCheck.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      annotations: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._annotations),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      disable: {
        value: cdktf.booleanToHclTerraform(this._disable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      dns_proxy_icmp_health_check: {
        value: cdktf.booleanToHclTerraform(this._dnsProxyIcmpHealthCheck),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      healthy_threshold: {
        value: cdktf.numberToHclTerraform(this._healthyThreshold),
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
      jitter_percent: {
        value: cdktf.numberToHclTerraform(this._jitterPercent),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      labels: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._labels),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      namespace: {
        value: cdktf.stringToHclTerraform(this._namespace),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeout: {
        value: cdktf.numberToHclTerraform(this._timeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      udp_icmp_health_check: {
        value: cdktf.booleanToHclTerraform(this._udpIcmpHealthCheck),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      unhealthy_threshold: {
        value: cdktf.numberToHclTerraform(this._unhealthyThreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      dns_health_check: {
        value: healthcheckDnsHealthCheckToHclTerraform(this._dnsHealthCheck.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "HealthcheckDnsHealthCheckList",
      },
      dns_proxy_tcp_health_check: {
        value: healthcheckDnsProxyTcpHealthCheckToHclTerraform(this._dnsProxyTcpHealthCheck.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "HealthcheckDnsProxyTcpHealthCheckList",
      },
      dns_proxy_udp_health_check: {
        value: healthcheckDnsProxyUdpHealthCheckToHclTerraform(this._dnsProxyUdpHealthCheck.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "HealthcheckDnsProxyUdpHealthCheckList",
      },
      http_health_check: {
        value: healthcheckHttpHealthCheckToHclTerraform(this._httpHealthCheck.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "HealthcheckHttpHealthCheckList",
      },
      tcp_health_check: {
        value: healthcheckTcpHealthCheckToHclTerraform(this._tcpHealthCheck.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "HealthcheckTcpHealthCheckList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
