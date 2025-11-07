// https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/data-sources/alb_backend_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataYandexAlbBackendGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Backend Group ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/data-sources/alb_backend_group#backend_group_id DataYandexAlbBackendGroup#backend_group_id}
  */
  readonly backendGroupId?: string;
  /**
  * The resource description.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/data-sources/alb_backend_group#description DataYandexAlbBackendGroup#description}
  */
  readonly description?: string;
  /**
  * The folder identifier that resource belongs to. If it is not provided, the default provider `folder-id` is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/data-sources/alb_backend_group#folder_id DataYandexAlbBackendGroup#folder_id}
  */
  readonly folderId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/data-sources/alb_backend_group#id DataYandexAlbBackendGroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * A set of key/value label pairs which assigned to resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/data-sources/alb_backend_group#labels DataYandexAlbBackendGroup#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * The resource name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/data-sources/alb_backend_group#name DataYandexAlbBackendGroup#name}
  */
  readonly name?: string;
  /**
  * grpc_backend block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/data-sources/alb_backend_group#grpc_backend DataYandexAlbBackendGroup#grpc_backend}
  */
  readonly grpcBackend?: DataYandexAlbBackendGroupGrpcBackend[] | cdktf.IResolvable;
  /**
  * http_backend block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/data-sources/alb_backend_group#http_backend DataYandexAlbBackendGroup#http_backend}
  */
  readonly httpBackend?: DataYandexAlbBackendGroupHttpBackend[] | cdktf.IResolvable;
  /**
  * session_affinity block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/data-sources/alb_backend_group#session_affinity DataYandexAlbBackendGroup#session_affinity}
  */
  readonly sessionAffinity?: DataYandexAlbBackendGroupSessionAffinity;
  /**
  * stream_backend block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/data-sources/alb_backend_group#stream_backend DataYandexAlbBackendGroup#stream_backend}
  */
  readonly streamBackend?: DataYandexAlbBackendGroupStreamBackend[] | cdktf.IResolvable;
}
export interface DataYandexAlbBackendGroupGrpcBackendHealthcheckGrpcHealthcheck {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/data-sources/alb_backend_group#service_name DataYandexAlbBackendGroup#service_name}
  */
  readonly serviceName?: string;
}

export function dataYandexAlbBackendGroupGrpcBackendHealthcheckGrpcHealthcheckToTerraform(struct?: DataYandexAlbBackendGroupGrpcBackendHealthcheckGrpcHealthcheckOutputReference | DataYandexAlbBackendGroupGrpcBackendHealthcheckGrpcHealthcheck): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    service_name: cdktf.stringToTerraform(struct!.serviceName),
  }
}


export function dataYandexAlbBackendGroupGrpcBackendHealthcheckGrpcHealthcheckToHclTerraform(struct?: DataYandexAlbBackendGroupGrpcBackendHealthcheckGrpcHealthcheckOutputReference | DataYandexAlbBackendGroupGrpcBackendHealthcheckGrpcHealthcheck): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    service_name: {
      value: cdktf.stringToHclTerraform(struct!.serviceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataYandexAlbBackendGroupGrpcBackendHealthcheckGrpcHealthcheckOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataYandexAlbBackendGroupGrpcBackendHealthcheckGrpcHealthcheck | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._serviceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceName = this._serviceName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexAlbBackendGroupGrpcBackendHealthcheckGrpcHealthcheck | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._serviceName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._serviceName = value.serviceName;
    }
  }

  // service_name - computed: true, optional: true, required: false
  private _serviceName?: string; 
  public get serviceName() {
    return this.getStringAttribute('service_name');
  }
  public set serviceName(value: string) {
    this._serviceName = value;
  }
  public resetServiceName() {
    this._serviceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceNameInput() {
    return this._serviceName;
  }
}
export interface DataYandexAlbBackendGroupGrpcBackendHealthcheckHttpHealthcheck {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/data-sources/alb_backend_group#host DataYandexAlbBackendGroup#host}
  */
  readonly host?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/data-sources/alb_backend_group#http2 DataYandexAlbBackendGroup#http2}
  */
  readonly http2?: boolean | cdktf.IResolvable;
}

export function dataYandexAlbBackendGroupGrpcBackendHealthcheckHttpHealthcheckToTerraform(struct?: DataYandexAlbBackendGroupGrpcBackendHealthcheckHttpHealthcheckOutputReference | DataYandexAlbBackendGroupGrpcBackendHealthcheckHttpHealthcheck): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host: cdktf.stringToTerraform(struct!.host),
    http2: cdktf.booleanToTerraform(struct!.http2),
  }
}


export function dataYandexAlbBackendGroupGrpcBackendHealthcheckHttpHealthcheckToHclTerraform(struct?: DataYandexAlbBackendGroupGrpcBackendHealthcheckHttpHealthcheckOutputReference | DataYandexAlbBackendGroupGrpcBackendHealthcheckHttpHealthcheck): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    host: {
      value: cdktf.stringToHclTerraform(struct!.host),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    http2: {
      value: cdktf.booleanToHclTerraform(struct!.http2),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataYandexAlbBackendGroupGrpcBackendHealthcheckHttpHealthcheckOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataYandexAlbBackendGroupGrpcBackendHealthcheckHttpHealthcheck | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._http2 !== undefined) {
      hasAnyValues = true;
      internalValueResult.http2 = this._http2;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexAlbBackendGroupGrpcBackendHealthcheckHttpHealthcheck | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._host = undefined;
      this._http2 = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._host = value.host;
      this._http2 = value.http2;
    }
  }

  // expected_statuses - computed: true, optional: false, required: false
  public get expectedStatuses() {
    return this.getNumberListAttribute('expected_statuses');
  }

  // host - computed: true, optional: true, required: false
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

  // http2 - computed: true, optional: true, required: false
  private _http2?: boolean | cdktf.IResolvable; 
  public get http2() {
    return this.getBooleanAttribute('http2');
  }
  public set http2(value: boolean | cdktf.IResolvable) {
    this._http2 = value;
  }
  public resetHttp2() {
    this._http2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get http2Input() {
    return this._http2;
  }

  // path - computed: true, optional: false, required: false
  public get path() {
    return this.getStringAttribute('path');
  }
}
export interface DataYandexAlbBackendGroupGrpcBackendHealthcheckStreamHealthcheck {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/data-sources/alb_backend_group#receive DataYandexAlbBackendGroup#receive}
  */
  readonly receive?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/data-sources/alb_backend_group#send DataYandexAlbBackendGroup#send}
  */
  readonly send?: string;
}

export function dataYandexAlbBackendGroupGrpcBackendHealthcheckStreamHealthcheckToTerraform(struct?: DataYandexAlbBackendGroupGrpcBackendHealthcheckStreamHealthcheckOutputReference | DataYandexAlbBackendGroupGrpcBackendHealthcheckStreamHealthcheck): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    receive: cdktf.stringToTerraform(struct!.receive),
    send: cdktf.stringToTerraform(struct!.send),
  }
}


export function dataYandexAlbBackendGroupGrpcBackendHealthcheckStreamHealthcheckToHclTerraform(struct?: DataYandexAlbBackendGroupGrpcBackendHealthcheckStreamHealthcheckOutputReference | DataYandexAlbBackendGroupGrpcBackendHealthcheckStreamHealthcheck): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    receive: {
      value: cdktf.stringToHclTerraform(struct!.receive),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    send: {
      value: cdktf.stringToHclTerraform(struct!.send),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataYandexAlbBackendGroupGrpcBackendHealthcheckStreamHealthcheckOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataYandexAlbBackendGroupGrpcBackendHealthcheckStreamHealthcheck | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._receive !== undefined) {
      hasAnyValues = true;
      internalValueResult.receive = this._receive;
    }
    if (this._send !== undefined) {
      hasAnyValues = true;
      internalValueResult.send = this._send;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexAlbBackendGroupGrpcBackendHealthcheckStreamHealthcheck | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._receive = undefined;
      this._send = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._receive = value.receive;
      this._send = value.send;
    }
  }

  // receive - computed: true, optional: true, required: false
  private _receive?: string; 
  public get receive() {
    return this.getStringAttribute('receive');
  }
  public set receive(value: string) {
    this._receive = value;
  }
  public resetReceive() {
    this._receive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get receiveInput() {
    return this._receive;
  }

  // send - computed: true, optional: true, required: false
  private _send?: string; 
  public get send() {
    return this.getStringAttribute('send');
  }
  public set send(value: string) {
    this._send = value;
  }
  public resetSend() {
    this._send = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendInput() {
    return this._send;
  }
}
export interface DataYandexAlbBackendGroupGrpcBackendHealthcheck {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/data-sources/alb_backend_group#healthcheck_port DataYandexAlbBackendGroup#healthcheck_port}
  */
  readonly healthcheckPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/data-sources/alb_backend_group#healthy_threshold DataYandexAlbBackendGroup#healthy_threshold}
  */
  readonly healthyThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/data-sources/alb_backend_group#interval_jitter_percent DataYandexAlbBackendGroup#interval_jitter_percent}
  */
  readonly intervalJitterPercent?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/data-sources/alb_backend_group#unhealthy_threshold DataYandexAlbBackendGroup#unhealthy_threshold}
  */
  readonly unhealthyThreshold?: number;
  /**
  * grpc_healthcheck block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/data-sources/alb_backend_group#grpc_healthcheck DataYandexAlbBackendGroup#grpc_healthcheck}
  */
  readonly grpcHealthcheck?: DataYandexAlbBackendGroupGrpcBackendHealthcheckGrpcHealthcheck;
  /**
  * http_healthcheck block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/data-sources/alb_backend_group#http_healthcheck DataYandexAlbBackendGroup#http_healthcheck}
  */
  readonly httpHealthcheck?: DataYandexAlbBackendGroupGrpcBackendHealthcheckHttpHealthcheck;
  /**
  * stream_healthcheck block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/data-sources/alb_backend_group#stream_healthcheck DataYandexAlbBackendGroup#stream_healthcheck}
  */
  readonly streamHealthcheck?: DataYandexAlbBackendGroupGrpcBackendHealthcheckStreamHealthcheck;
}

export function dataYandexAlbBackendGroupGrpcBackendHealthcheckToTerraform(struct?: DataYandexAlbBackendGroupGrpcBackendHealthcheckOutputReference | DataYandexAlbBackendGroupGrpcBackendHealthcheck): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    healthcheck_port: cdktf.numberToTerraform(struct!.healthcheckPort),
    healthy_threshold: cdktf.numberToTerraform(struct!.healthyThreshold),
    interval_jitter_percent: cdktf.numberToTerraform(struct!.intervalJitterPercent),
    unhealthy_threshold: cdktf.numberToTerraform(struct!.unhealthyThreshold),
    grpc_healthcheck: dataYandexAlbBackendGroupGrpcBackendHealthcheckGrpcHealthcheckToTerraform(struct!.grpcHealthcheck),
    http_healthcheck: dataYandexAlbBackendGroupGrpcBackendHealthcheckHttpHealthcheckToTerraform(struct!.httpHealthcheck),
    stream_healthcheck: dataYandexAlbBackendGroupGrpcBackendHealthcheckStreamHealthcheckToTerraform(struct!.streamHealthcheck),
  }
}


export function dataYandexAlbBackendGroupGrpcBackendHealthcheckToHclTerraform(struct?: DataYandexAlbBackendGroupGrpcBackendHealthcheckOutputReference | DataYandexAlbBackendGroupGrpcBackendHealthcheck): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    healthcheck_port: {
      value: cdktf.numberToHclTerraform(struct!.healthcheckPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    healthy_threshold: {
      value: cdktf.numberToHclTerraform(struct!.healthyThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    interval_jitter_percent: {
      value: cdktf.numberToHclTerraform(struct!.intervalJitterPercent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    unhealthy_threshold: {
      value: cdktf.numberToHclTerraform(struct!.unhealthyThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    grpc_healthcheck: {
      value: dataYandexAlbBackendGroupGrpcBackendHealthcheckGrpcHealthcheckToHclTerraform(struct!.grpcHealthcheck),
      isBlock: true,
      type: "list",
      storageClassType: "DataYandexAlbBackendGroupGrpcBackendHealthcheckGrpcHealthcheckList",
    },
    http_healthcheck: {
      value: dataYandexAlbBackendGroupGrpcBackendHealthcheckHttpHealthcheckToHclTerraform(struct!.httpHealthcheck),
      isBlock: true,
      type: "list",
      storageClassType: "DataYandexAlbBackendGroupGrpcBackendHealthcheckHttpHealthcheckList",
    },
    stream_healthcheck: {
      value: dataYandexAlbBackendGroupGrpcBackendHealthcheckStreamHealthcheckToHclTerraform(struct!.streamHealthcheck),
      isBlock: true,
      type: "list",
      storageClassType: "DataYandexAlbBackendGroupGrpcBackendHealthcheckStreamHealthcheckList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataYandexAlbBackendGroupGrpcBackendHealthcheckOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataYandexAlbBackendGroupGrpcBackendHealthcheck | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._healthcheckPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.healthcheckPort = this._healthcheckPort;
    }
    if (this._healthyThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.healthyThreshold = this._healthyThreshold;
    }
    if (this._intervalJitterPercent !== undefined) {
      hasAnyValues = true;
      internalValueResult.intervalJitterPercent = this._intervalJitterPercent;
    }
    if (this._unhealthyThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.unhealthyThreshold = this._unhealthyThreshold;
    }
    if (this._grpcHealthcheck?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.grpcHealthcheck = this._grpcHealthcheck?.internalValue;
    }
    if (this._httpHealthcheck?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpHealthcheck = this._httpHealthcheck?.internalValue;
    }
    if (this._streamHealthcheck?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.streamHealthcheck = this._streamHealthcheck?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexAlbBackendGroupGrpcBackendHealthcheck | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._healthcheckPort = undefined;
      this._healthyThreshold = undefined;
      this._intervalJitterPercent = undefined;
      this._unhealthyThreshold = undefined;
      this._grpcHealthcheck.internalValue = undefined;
      this._httpHealthcheck.internalValue = undefined;
      this._streamHealthcheck.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._healthcheckPort = value.healthcheckPort;
      this._healthyThreshold = value.healthyThreshold;
      this._intervalJitterPercent = value.intervalJitterPercent;
      this._unhealthyThreshold = value.unhealthyThreshold;
      this._grpcHealthcheck.internalValue = value.grpcHealthcheck;
      this._httpHealthcheck.internalValue = value.httpHealthcheck;
      this._streamHealthcheck.internalValue = value.streamHealthcheck;
    }
  }

  // healthcheck_port - computed: true, optional: true, required: false
  private _healthcheckPort?: number; 
  public get healthcheckPort() {
    return this.getNumberAttribute('healthcheck_port');
  }
  public set healthcheckPort(value: number) {
    this._healthcheckPort = value;
  }
  public resetHealthcheckPort() {
    this._healthcheckPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthcheckPortInput() {
    return this._healthcheckPort;
  }

  // healthy_threshold - computed: true, optional: true, required: false
  private _healthyThreshold?: number; 
  public get healthyThreshold() {
    return this.getNumberAttribute('healthy_threshold');
  }
  public set healthyThreshold(value: number) {
    this._healthyThreshold = value;
  }
  public resetHealthyThreshold() {
    this._healthyThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthyThresholdInput() {
    return this._healthyThreshold;
  }

  // interval - computed: true, optional: false, required: false
  public get interval() {
    return this.getStringAttribute('interval');
  }

  // interval_jitter_percent - computed: true, optional: true, required: false
  private _intervalJitterPercent?: number; 
  public get intervalJitterPercent() {
    return this.getNumberAttribute('interval_jitter_percent');
  }
  public set intervalJitterPercent(value: number) {
    this._intervalJitterPercent = value;
  }
  public resetIntervalJitterPercent() {
    this._intervalJitterPercent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalJitterPercentInput() {
    return this._intervalJitterPercent;
  }

  // timeout - computed: true, optional: false, required: false
  public get timeout() {
    return this.getStringAttribute('timeout');
  }

  // unhealthy_threshold - computed: true, optional: true, required: false
  private _unhealthyThreshold?: number; 
  public get unhealthyThreshold() {
    return this.getNumberAttribute('unhealthy_threshold');
  }
  public set unhealthyThreshold(value: number) {
    this._unhealthyThreshold = value;
  }
  public resetUnhealthyThreshold() {
    this._unhealthyThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unhealthyThresholdInput() {
    return this._unhealthyThreshold;
  }

  // grpc_healthcheck - computed: false, optional: true, required: false
  private _grpcHealthcheck = new DataYandexAlbBackendGroupGrpcBackendHealthcheckGrpcHealthcheckOutputReference(this, "grpc_healthcheck");
  public get grpcHealthcheck() {
    return this._grpcHealthcheck;
  }
  public putGrpcHealthcheck(value: DataYandexAlbBackendGroupGrpcBackendHealthcheckGrpcHealthcheck) {
    this._grpcHealthcheck.internalValue = value;
  }
  public resetGrpcHealthcheck() {
    this._grpcHealthcheck.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get grpcHealthcheckInput() {
    return this._grpcHealthcheck.internalValue;
  }

  // http_healthcheck - computed: false, optional: true, required: false
  private _httpHealthcheck = new DataYandexAlbBackendGroupGrpcBackendHealthcheckHttpHealthcheckOutputReference(this, "http_healthcheck");
  public get httpHealthcheck() {
    return this._httpHealthcheck;
  }
  public putHttpHealthcheck(value: DataYandexAlbBackendGroupGrpcBackendHealthcheckHttpHealthcheck) {
    this._httpHealthcheck.internalValue = value;
  }
  public resetHttpHealthcheck() {
    this._httpHealthcheck.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpHealthcheckInput() {
    return this._httpHealthcheck.internalValue;
  }

  // stream_healthcheck - computed: false, optional: true, required: false
  private _streamHealthcheck = new DataYandexAlbBackendGroupGrpcBackendHealthcheckStreamHealthcheckOutputReference(this, "stream_healthcheck");
  public get streamHealthcheck() {
    return this._streamHealthcheck;
  }
  public putStreamHealthcheck(value: DataYandexAlbBackendGroupGrpcBackendHealthcheckStreamHealthcheck) {
    this._streamHealthcheck.internalValue = value;
  }
  public resetStreamHealthcheck() {
    this._streamHealthcheck.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get streamHealthcheckInput() {
    return this._streamHealthcheck.internalValue;
  }
}
export interface DataYandexAlbBackendGroupGrpcBackendLoadBalancingConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/data-sources/alb_backend_group#locality_aware_routing_percent DataYandexAlbBackendGroup#locality_aware_routing_percent}
  */
  readonly localityAwareRoutingPercent?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/data-sources/alb_backend_group#mode DataYandexAlbBackendGroup#mode}
  */
  readonly mode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/data-sources/alb_backend_group#panic_threshold DataYandexAlbBackendGroup#panic_threshold}
  */
  readonly panicThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/data-sources/alb_backend_group#strict_locality DataYandexAlbBackendGroup#strict_locality}
  */
  readonly strictLocality?: boolean | cdktf.IResolvable;
}

export function dataYandexAlbBackendGroupGrpcBackendLoadBalancingConfigToTerraform(struct?: DataYandexAlbBackendGroupGrpcBackendLoadBalancingConfigOutputReference | DataYandexAlbBackendGroupGrpcBackendLoadBalancingConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    locality_aware_routing_percent: cdktf.numberToTerraform(struct!.localityAwareRoutingPercent),
    mode: cdktf.stringToTerraform(struct!.mode),
    panic_threshold: cdktf.numberToTerraform(struct!.panicThreshold),
    strict_locality: cdktf.booleanToTerraform(struct!.strictLocality),
  }
}


export function dataYandexAlbBackendGroupGrpcBackendLoadBalancingConfigToHclTerraform(struct?: DataYandexAlbBackendGroupGrpcBackendLoadBalancingConfigOutputReference | DataYandexAlbBackendGroupGrpcBackendLoadBalancingConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    locality_aware_routing_percent: {
      value: cdktf.numberToHclTerraform(struct!.localityAwareRoutingPercent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mode: {
      value: cdktf.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    panic_threshold: {
      value: cdktf.numberToHclTerraform(struct!.panicThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    strict_locality: {
      value: cdktf.booleanToHclTerraform(struct!.strictLocality),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataYandexAlbBackendGroupGrpcBackendLoadBalancingConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataYandexAlbBackendGroupGrpcBackendLoadBalancingConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._localityAwareRoutingPercent !== undefined) {
      hasAnyValues = true;
      internalValueResult.localityAwareRoutingPercent = this._localityAwareRoutingPercent;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._panicThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.panicThreshold = this._panicThreshold;
    }
    if (this._strictLocality !== undefined) {
      hasAnyValues = true;
      internalValueResult.strictLocality = this._strictLocality;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexAlbBackendGroupGrpcBackendLoadBalancingConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._localityAwareRoutingPercent = undefined;
      this._mode = undefined;
      this._panicThreshold = undefined;
      this._strictLocality = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._localityAwareRoutingPercent = value.localityAwareRoutingPercent;
      this._mode = value.mode;
      this._panicThreshold = value.panicThreshold;
      this._strictLocality = value.strictLocality;
    }
  }

  // locality_aware_routing_percent - computed: true, optional: true, required: false
  private _localityAwareRoutingPercent?: number; 
  public get localityAwareRoutingPercent() {
    return this.getNumberAttribute('locality_aware_routing_percent');
  }
  public set localityAwareRoutingPercent(value: number) {
    this._localityAwareRoutingPercent = value;
  }
  public resetLocalityAwareRoutingPercent() {
    this._localityAwareRoutingPercent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localityAwareRoutingPercentInput() {
    return this._localityAwareRoutingPercent;
  }

  // mode - computed: true, optional: true, required: false
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }

  // panic_threshold - computed: true, optional: true, required: false
  private _panicThreshold?: number; 
  public get panicThreshold() {
    return this.getNumberAttribute('panic_threshold');
  }
  public set panicThreshold(value: number) {
    this._panicThreshold = value;
  }
  public resetPanicThreshold() {
    this._panicThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get panicThresholdInput() {
    return this._panicThreshold;
  }

  // strict_locality - computed: true, optional: true, required: false
  private _strictLocality?: boolean | cdktf.IResolvable; 
  public get strictLocality() {
    return this.getBooleanAttribute('strict_locality');
  }
  public set strictLocality(value: boolean | cdktf.IResolvable) {
    this._strictLocality = value;
  }
  public resetStrictLocality() {
    this._strictLocality = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get strictLocalityInput() {
    return this._strictLocality;
  }
}
export interface DataYandexAlbBackendGroupGrpcBackendTlsValidationContext {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/data-sources/alb_backend_group#trusted_ca_bytes DataYandexAlbBackendGroup#trusted_ca_bytes}
  */
  readonly trustedCaBytes?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/data-sources/alb_backend_group#trusted_ca_id DataYandexAlbBackendGroup#trusted_ca_id}
  */
  readonly trustedCaId?: string;
}

export function dataYandexAlbBackendGroupGrpcBackendTlsValidationContextToTerraform(struct?: DataYandexAlbBackendGroupGrpcBackendTlsValidationContextOutputReference | DataYandexAlbBackendGroupGrpcBackendTlsValidationContext): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    trusted_ca_bytes: cdktf.stringToTerraform(struct!.trustedCaBytes),
    trusted_ca_id: cdktf.stringToTerraform(struct!.trustedCaId),
  }
}


export function dataYandexAlbBackendGroupGrpcBackendTlsValidationContextToHclTerraform(struct?: DataYandexAlbBackendGroupGrpcBackendTlsValidationContextOutputReference | DataYandexAlbBackendGroupGrpcBackendTlsValidationContext): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    trusted_ca_bytes: {
      value: cdktf.stringToHclTerraform(struct!.trustedCaBytes),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    trusted_ca_id: {
      value: cdktf.stringToHclTerraform(struct!.trustedCaId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataYandexAlbBackendGroupGrpcBackendTlsValidationContextOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataYandexAlbBackendGroupGrpcBackendTlsValidationContext | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._trustedCaBytes !== undefined) {
      hasAnyValues = true;
      internalValueResult.trustedCaBytes = this._trustedCaBytes;
    }
    if (this._trustedCaId !== undefined) {
      hasAnyValues = true;
      internalValueResult.trustedCaId = this._trustedCaId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexAlbBackendGroupGrpcBackendTlsValidationContext | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._trustedCaBytes = undefined;
      this._trustedCaId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._trustedCaBytes = value.trustedCaBytes;
      this._trustedCaId = value.trustedCaId;
    }
  }

  // trusted_ca_bytes - computed: true, optional: true, required: false
  private _trustedCaBytes?: string; 
  public get trustedCaBytes() {
    return this.getStringAttribute('trusted_ca_bytes');
  }
  public set trustedCaBytes(value: string) {
    this._trustedCaBytes = value;
  }
  public resetTrustedCaBytes() {
    this._trustedCaBytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trustedCaBytesInput() {
    return this._trustedCaBytes;
  }

  // trusted_ca_id - computed: true, optional: true, required: false
  private _trustedCaId?: string; 
  public get trustedCaId() {
    return this.getStringAttribute('trusted_ca_id');
  }
  public set trustedCaId(value: string) {
    this._trustedCaId = value;
  }
  public resetTrustedCaId() {
    this._trustedCaId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trustedCaIdInput() {
    return this._trustedCaId;
  }
}
export interface DataYandexAlbBackendGroupGrpcBackendTls {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/data-sources/alb_backend_group#sni DataYandexAlbBackendGroup#sni}
  */
  readonly sni?: string;
  /**
  * validation_context block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/data-sources/alb_backend_group#validation_context DataYandexAlbBackendGroup#validation_context}
  */
  readonly validationContext?: DataYandexAlbBackendGroupGrpcBackendTlsValidationContext;
}

export function dataYandexAlbBackendGroupGrpcBackendTlsToTerraform(struct?: DataYandexAlbBackendGroupGrpcBackendTlsOutputReference | DataYandexAlbBackendGroupGrpcBackendTls): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    sni: cdktf.stringToTerraform(struct!.sni),
    validation_context: dataYandexAlbBackendGroupGrpcBackendTlsValidationContextToTerraform(struct!.validationContext),
  }
}


export function dataYandexAlbBackendGroupGrpcBackendTlsToHclTerraform(struct?: DataYandexAlbBackendGroupGrpcBackendTlsOutputReference | DataYandexAlbBackendGroupGrpcBackendTls): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    sni: {
      value: cdktf.stringToHclTerraform(struct!.sni),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    validation_context: {
      value: dataYandexAlbBackendGroupGrpcBackendTlsValidationContextToHclTerraform(struct!.validationContext),
      isBlock: true,
      type: "list",
      storageClassType: "DataYandexAlbBackendGroupGrpcBackendTlsValidationContextList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataYandexAlbBackendGroupGrpcBackendTlsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataYandexAlbBackendGroupGrpcBackendTls | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sni !== undefined) {
      hasAnyValues = true;
      internalValueResult.sni = this._sni;
    }
    if (this._validationContext?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.validationContext = this._validationContext?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexAlbBackendGroupGrpcBackendTls | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._sni = undefined;
      this._validationContext.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._sni = value.sni;
      this._validationContext.internalValue = value.validationContext;
    }
  }

  // sni - computed: true, optional: true, required: false
  private _sni?: string; 
  public get sni() {
    return this.getStringAttribute('sni');
  }
  public set sni(value: string) {
    this._sni = value;
  }
  public resetSni() {
    this._sni = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sniInput() {
    return this._sni;
  }

  // validation_context - computed: false, optional: true, required: false
  private _validationContext = new DataYandexAlbBackendGroupGrpcBackendTlsValidationContextOutputReference(this, "validation_context");
  public get validationContext() {
    return this._validationContext;
  }
  public putValidationContext(value: DataYandexAlbBackendGroupGrpcBackendTlsValidationContext) {
    this._validationContext.internalValue = value;
  }
  public resetValidationContext() {
    this._validationContext.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validationContextInput() {
    return this._validationContext.internalValue;
  }
}
export interface DataYandexAlbBackendGroupGrpcBackend {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/data-sources/alb_backend_group#port DataYandexAlbBackendGroup#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/data-sources/alb_backend_group#weight DataYandexAlbBackendGroup#weight}
  */
  readonly weight?: number;
  /**
  * healthcheck block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/data-sources/alb_backend_group#healthcheck DataYandexAlbBackendGroup#healthcheck}
  */
  readonly healthcheck?: DataYandexAlbBackendGroupGrpcBackendHealthcheck;
  /**
  * load_balancing_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/data-sources/alb_backend_group#load_balancing_config DataYandexAlbBackendGroup#load_balancing_config}
  */
  readonly loadBalancingConfig?: DataYandexAlbBackendGroupGrpcBackendLoadBalancingConfig;
  /**
  * tls block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/data-sources/alb_backend_group#tls DataYandexAlbBackendGroup#tls}
  */
  readonly tls?: DataYandexAlbBackendGroupGrpcBackendTls;
}

export function dataYandexAlbBackendGroupGrpcBackendToTerraform(struct?: DataYandexAlbBackendGroupGrpcBackend | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    port: cdktf.numberToTerraform(struct!.port),
    weight: cdktf.numberToTerraform(struct!.weight),
    healthcheck: dataYandexAlbBackendGroupGrpcBackendHealthcheckToTerraform(struct!.healthcheck),
    load_balancing_config: dataYandexAlbBackendGroupGrpcBackendLoadBalancingConfigToTerraform(struct!.loadBalancingConfig),
    tls: dataYandexAlbBackendGroupGrpcBackendTlsToTerraform(struct!.tls),
  }
}


export function dataYandexAlbBackendGroupGrpcBackendToHclTerraform(struct?: DataYandexAlbBackendGroupGrpcBackend | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    weight: {
      value: cdktf.numberToHclTerraform(struct!.weight),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    healthcheck: {
      value: dataYandexAlbBackendGroupGrpcBackendHealthcheckToHclTerraform(struct!.healthcheck),
      isBlock: true,
      type: "list",
      storageClassType: "DataYandexAlbBackendGroupGrpcBackendHealthcheckList",
    },
    load_balancing_config: {
      value: dataYandexAlbBackendGroupGrpcBackendLoadBalancingConfigToHclTerraform(struct!.loadBalancingConfig),
      isBlock: true,
      type: "list",
      storageClassType: "DataYandexAlbBackendGroupGrpcBackendLoadBalancingConfigList",
    },
    tls: {
      value: dataYandexAlbBackendGroupGrpcBackendTlsToHclTerraform(struct!.tls),
      isBlock: true,
      type: "list",
      storageClassType: "DataYandexAlbBackendGroupGrpcBackendTlsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataYandexAlbBackendGroupGrpcBackendOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataYandexAlbBackendGroupGrpcBackend | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._weight !== undefined) {
      hasAnyValues = true;
      internalValueResult.weight = this._weight;
    }
    if (this._healthcheck?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.healthcheck = this._healthcheck?.internalValue;
    }
    if (this._loadBalancingConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.loadBalancingConfig = this._loadBalancingConfig?.internalValue;
    }
    if (this._tls?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tls = this._tls?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexAlbBackendGroupGrpcBackend | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._port = undefined;
      this._weight = undefined;
      this._healthcheck.internalValue = undefined;
      this._loadBalancingConfig.internalValue = undefined;
      this._tls.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._port = value.port;
      this._weight = value.weight;
      this._healthcheck.internalValue = value.healthcheck;
      this._loadBalancingConfig.internalValue = value.loadBalancingConfig;
      this._tls.internalValue = value.tls;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // port - computed: true, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // target_group_ids - computed: true, optional: false, required: false
  public get targetGroupIds() {
    return this.getListAttribute('target_group_ids');
  }

  // weight - computed: true, optional: true, required: false
  private _weight?: number; 
  public get weight() {
    return this.getNumberAttribute('weight');
  }
  public set weight(value: number) {
    this._weight = value;
  }
  public resetWeight() {
    this._weight = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weightInput() {
    return this._weight;
  }

  // healthcheck - computed: false, optional: true, required: false
  private _healthcheck = new DataYandexAlbBackendGroupGrpcBackendHealthcheckOutputReference(this, "healthcheck");
  public get healthcheck() {
    return this._healthcheck;
  }
  public putHealthcheck(value: DataYandexAlbBackendGroupGrpcBackendHealthcheck) {
    this._healthcheck.internalValue = value;
  }
  public resetHealthcheck() {
    this._healthcheck.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthcheckInput() {
    return this._healthcheck.internalValue;
  }

  // load_balancing_config - computed: false, optional: true, required: false
  private _loadBalancingConfig = new DataYandexAlbBackendGroupGrpcBackendLoadBalancingConfigOutputReference(this, "load_balancing_config");
  public get loadBalancingConfig() {
    return this._loadBalancingConfig;
  }
  public putLoadBalancingConfig(value: DataYandexAlbBackendGroupGrpcBackendLoadBalancingConfig) {
    this._loadBalancingConfig.internalValue = value;
  }
  public resetLoadBalancingConfig() {
    this._loadBalancingConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loadBalancingConfigInput() {
    return this._loadBalancingConfig.internalValue;
  }

  // tls - computed: false, optional: true, required: false
  private _tls = new DataYandexAlbBackendGroupGrpcBackendTlsOutputReference(this, "tls");
  public get tls() {
    return this._tls;
  }
  public putTls(value: DataYandexAlbBackendGroupGrpcBackendTls) {
    this._tls.internalValue = value;
  }
  public resetTls() {
    this._tls.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsInput() {
    return this._tls.internalValue;
  }
}

export class DataYandexAlbBackendGroupGrpcBackendList extends cdktf.ComplexList {
  public internalValue? : DataYandexAlbBackendGroupGrpcBackend[] | cdktf.IResolvable

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
  public get(index: number): DataYandexAlbBackendGroupGrpcBackendOutputReference {
    return new DataYandexAlbBackendGroupGrpcBackendOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexAlbBackendGroupHttpBackendHealthcheckGrpcHealthcheck {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/data-sources/alb_backend_group#service_name DataYandexAlbBackendGroup#service_name}
  */
  readonly serviceName?: string;
}

export function dataYandexAlbBackendGroupHttpBackendHealthcheckGrpcHealthcheckToTerraform(struct?: DataYandexAlbBackendGroupHttpBackendHealthcheckGrpcHealthcheckOutputReference | DataYandexAlbBackendGroupHttpBackendHealthcheckGrpcHealthcheck): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    service_name: cdktf.stringToTerraform(struct!.serviceName),
  }
}


export function dataYandexAlbBackendGroupHttpBackendHealthcheckGrpcHealthcheckToHclTerraform(struct?: DataYandexAlbBackendGroupHttpBackendHealthcheckGrpcHealthcheckOutputReference | DataYandexAlbBackendGroupHttpBackendHealthcheckGrpcHealthcheck): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    service_name: {
      value: cdktf.stringToHclTerraform(struct!.serviceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataYandexAlbBackendGroupHttpBackendHealthcheckGrpcHealthcheckOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataYandexAlbBackendGroupHttpBackendHealthcheckGrpcHealthcheck | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._serviceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceName = this._serviceName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexAlbBackendGroupHttpBackendHealthcheckGrpcHealthcheck | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._serviceName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._serviceName = value.serviceName;
    }
  }

  // service_name - computed: true, optional: true, required: false
  private _serviceName?: string; 
  public get serviceName() {
    return this.getStringAttribute('service_name');
  }
  public set serviceName(value: string) {
    this._serviceName = value;
  }
  public resetServiceName() {
    this._serviceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceNameInput() {
    return this._serviceName;
  }
}
export interface DataYandexAlbBackendGroupHttpBackendHealthcheckHttpHealthcheck {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/data-sources/alb_backend_group#host DataYandexAlbBackendGroup#host}
  */
  readonly host?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/data-sources/alb_backend_group#http2 DataYandexAlbBackendGroup#http2}
  */
  readonly http2?: boolean | cdktf.IResolvable;
}

export function dataYandexAlbBackendGroupHttpBackendHealthcheckHttpHealthcheckToTerraform(struct?: DataYandexAlbBackendGroupHttpBackendHealthcheckHttpHealthcheckOutputReference | DataYandexAlbBackendGroupHttpBackendHealthcheckHttpHealthcheck): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host: cdktf.stringToTerraform(struct!.host),
    http2: cdktf.booleanToTerraform(struct!.http2),
  }
}


export function dataYandexAlbBackendGroupHttpBackendHealthcheckHttpHealthcheckToHclTerraform(struct?: DataYandexAlbBackendGroupHttpBackendHealthcheckHttpHealthcheckOutputReference | DataYandexAlbBackendGroupHttpBackendHealthcheckHttpHealthcheck): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    host: {
      value: cdktf.stringToHclTerraform(struct!.host),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    http2: {
      value: cdktf.booleanToHclTerraform(struct!.http2),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataYandexAlbBackendGroupHttpBackendHealthcheckHttpHealthcheckOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataYandexAlbBackendGroupHttpBackendHealthcheckHttpHealthcheck | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._http2 !== undefined) {
      hasAnyValues = true;
      internalValueResult.http2 = this._http2;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexAlbBackendGroupHttpBackendHealthcheckHttpHealthcheck | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._host = undefined;
      this._http2 = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._host = value.host;
      this._http2 = value.http2;
    }
  }

  // expected_statuses - computed: true, optional: false, required: false
  public get expectedStatuses() {
    return this.getNumberListAttribute('expected_statuses');
  }

  // host - computed: true, optional: true, required: false
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

  // http2 - computed: true, optional: true, required: false
  private _http2?: boolean | cdktf.IResolvable; 
  public get http2() {
    return this.getBooleanAttribute('http2');
  }
  public set http2(value: boolean | cdktf.IResolvable) {
    this._http2 = value;
  }
  public resetHttp2() {
    this._http2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get http2Input() {
    return this._http2;
  }

  // path - computed: true, optional: false, required: false
  public get path() {
    return this.getStringAttribute('path');
  }
}
export interface DataYandexAlbBackendGroupHttpBackendHealthcheckStreamHealthcheck {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/data-sources/alb_backend_group#receive DataYandexAlbBackendGroup#receive}
  */
  readonly receive?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/data-sources/alb_backend_group#send DataYandexAlbBackendGroup#send}
  */
  readonly send?: string;
}

export function dataYandexAlbBackendGroupHttpBackendHealthcheckStreamHealthcheckToTerraform(struct?: DataYandexAlbBackendGroupHttpBackendHealthcheckStreamHealthcheckOutputReference | DataYandexAlbBackendGroupHttpBackendHealthcheckStreamHealthcheck): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    receive: cdktf.stringToTerraform(struct!.receive),
    send: cdktf.stringToTerraform(struct!.send),
  }
}


export function dataYandexAlbBackendGroupHttpBackendHealthcheckStreamHealthcheckToHclTerraform(struct?: DataYandexAlbBackendGroupHttpBackendHealthcheckStreamHealthcheckOutputReference | DataYandexAlbBackendGroupHttpBackendHealthcheckStreamHealthcheck): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    receive: {
      value: cdktf.stringToHclTerraform(struct!.receive),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    send: {
      value: cdktf.stringToHclTerraform(struct!.send),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataYandexAlbBackendGroupHttpBackendHealthcheckStreamHealthcheckOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataYandexAlbBackendGroupHttpBackendHealthcheckStreamHealthcheck | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._receive !== undefined) {
      hasAnyValues = true;
      internalValueResult.receive = this._receive;
    }
    if (this._send !== undefined) {
      hasAnyValues = true;
      internalValueResult.send = this._send;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexAlbBackendGroupHttpBackendHealthcheckStreamHealthcheck | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._receive = undefined;
      this._send = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._receive = value.receive;
      this._send = value.send;
    }
  }

  // receive - computed: true, optional: true, required: false
  private _receive?: string; 
  public get receive() {
    return this.getStringAttribute('receive');
  }
  public set receive(value: string) {
    this._receive = value;
  }
  public resetReceive() {
    this._receive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get receiveInput() {
    return this._receive;
  }

  // send - computed: true, optional: true, required: false
  private _send?: string; 
  public get send() {
    return this.getStringAttribute('send');
  }
  public set send(value: string) {
    this._send = value;
  }
  public resetSend() {
    this._send = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendInput() {
    return this._send;
  }
}
export interface DataYandexAlbBackendGroupHttpBackendHealthcheck {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/data-sources/alb_backend_group#healthcheck_port DataYandexAlbBackendGroup#healthcheck_port}
  */
  readonly healthcheckPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/data-sources/alb_backend_group#healthy_threshold DataYandexAlbBackendGroup#healthy_threshold}
  */
  readonly healthyThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/data-sources/alb_backend_group#interval_jitter_percent DataYandexAlbBackendGroup#interval_jitter_percent}
  */
  readonly intervalJitterPercent?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/data-sources/alb_backend_group#unhealthy_threshold DataYandexAlbBackendGroup#unhealthy_threshold}
  */
  readonly unhealthyThreshold?: number;
  /**
  * grpc_healthcheck block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/data-sources/alb_backend_group#grpc_healthcheck DataYandexAlbBackendGroup#grpc_healthcheck}
  */
  readonly grpcHealthcheck?: DataYandexAlbBackendGroupHttpBackendHealthcheckGrpcHealthcheck;
  /**
  * http_healthcheck block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/data-sources/alb_backend_group#http_healthcheck DataYandexAlbBackendGroup#http_healthcheck}
  */
  readonly httpHealthcheck?: DataYandexAlbBackendGroupHttpBackendHealthcheckHttpHealthcheck;
  /**
  * stream_healthcheck block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/data-sources/alb_backend_group#stream_healthcheck DataYandexAlbBackendGroup#stream_healthcheck}
  */
  readonly streamHealthcheck?: DataYandexAlbBackendGroupHttpBackendHealthcheckStreamHealthcheck;
}

export function dataYandexAlbBackendGroupHttpBackendHealthcheckToTerraform(struct?: DataYandexAlbBackendGroupHttpBackendHealthcheckOutputReference | DataYandexAlbBackendGroupHttpBackendHealthcheck): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    healthcheck_port: cdktf.numberToTerraform(struct!.healthcheckPort),
    healthy_threshold: cdktf.numberToTerraform(struct!.healthyThreshold),
    interval_jitter_percent: cdktf.numberToTerraform(struct!.intervalJitterPercent),
    unhealthy_threshold: cdktf.numberToTerraform(struct!.unhealthyThreshold),
    grpc_healthcheck: dataYandexAlbBackendGroupHttpBackendHealthcheckGrpcHealthcheckToTerraform(struct!.grpcHealthcheck),
    http_healthcheck: dataYandexAlbBackendGroupHttpBackendHealthcheckHttpHealthcheckToTerraform(struct!.httpHealthcheck),
    stream_healthcheck: dataYandexAlbBackendGroupHttpBackendHealthcheckStreamHealthcheckToTerraform(struct!.streamHealthcheck),
  }
}


export function dataYandexAlbBackendGroupHttpBackendHealthcheckToHclTerraform(struct?: DataYandexAlbBackendGroupHttpBackendHealthcheckOutputReference | DataYandexAlbBackendGroupHttpBackendHealthcheck): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    healthcheck_port: {
      value: cdktf.numberToHclTerraform(struct!.healthcheckPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    healthy_threshold: {
      value: cdktf.numberToHclTerraform(struct!.healthyThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    interval_jitter_percent: {
      value: cdktf.numberToHclTerraform(struct!.intervalJitterPercent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    unhealthy_threshold: {
      value: cdktf.numberToHclTerraform(struct!.unhealthyThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    grpc_healthcheck: {
      value: dataYandexAlbBackendGroupHttpBackendHealthcheckGrpcHealthcheckToHclTerraform(struct!.grpcHealthcheck),
      isBlock: true,
      type: "list",
      storageClassType: "DataYandexAlbBackendGroupHttpBackendHealthcheckGrpcHealthcheckList",
    },
    http_healthcheck: {
      value: dataYandexAlbBackendGroupHttpBackendHealthcheckHttpHealthcheckToHclTerraform(struct!.httpHealthcheck),
      isBlock: true,
      type: "list",
      storageClassType: "DataYandexAlbBackendGroupHttpBackendHealthcheckHttpHealthcheckList",
    },
    stream_healthcheck: {
      value: dataYandexAlbBackendGroupHttpBackendHealthcheckStreamHealthcheckToHclTerraform(struct!.streamHealthcheck),
      isBlock: true,
      type: "list",
      storageClassType: "DataYandexAlbBackendGroupHttpBackendHealthcheckStreamHealthcheckList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataYandexAlbBackendGroupHttpBackendHealthcheckOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataYandexAlbBackendGroupHttpBackendHealthcheck | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._healthcheckPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.healthcheckPort = this._healthcheckPort;
    }
    if (this._healthyThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.healthyThreshold = this._healthyThreshold;
    }
    if (this._intervalJitterPercent !== undefined) {
      hasAnyValues = true;
      internalValueResult.intervalJitterPercent = this._intervalJitterPercent;
    }
    if (this._unhealthyThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.unhealthyThreshold = this._unhealthyThreshold;
    }
    if (this._grpcHealthcheck?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.grpcHealthcheck = this._grpcHealthcheck?.internalValue;
    }
    if (this._httpHealthcheck?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpHealthcheck = this._httpHealthcheck?.internalValue;
    }
    if (this._streamHealthcheck?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.streamHealthcheck = this._streamHealthcheck?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexAlbBackendGroupHttpBackendHealthcheck | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._healthcheckPort = undefined;
      this._healthyThreshold = undefined;
      this._intervalJitterPercent = undefined;
      this._unhealthyThreshold = undefined;
      this._grpcHealthcheck.internalValue = undefined;
      this._httpHealthcheck.internalValue = undefined;
      this._streamHealthcheck.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._healthcheckPort = value.healthcheckPort;
      this._healthyThreshold = value.healthyThreshold;
      this._intervalJitterPercent = value.intervalJitterPercent;
      this._unhealthyThreshold = value.unhealthyThreshold;
      this._grpcHealthcheck.internalValue = value.grpcHealthcheck;
      this._httpHealthcheck.internalValue = value.httpHealthcheck;
      this._streamHealthcheck.internalValue = value.streamHealthcheck;
    }
  }

  // healthcheck_port - computed: true, optional: true, required: false
  private _healthcheckPort?: number; 
  public get healthcheckPort() {
    return this.getNumberAttribute('healthcheck_port');
  }
  public set healthcheckPort(value: number) {
    this._healthcheckPort = value;
  }
  public resetHealthcheckPort() {
    this._healthcheckPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthcheckPortInput() {
    return this._healthcheckPort;
  }

  // healthy_threshold - computed: true, optional: true, required: false
  private _healthyThreshold?: number; 
  public get healthyThreshold() {
    return this.getNumberAttribute('healthy_threshold');
  }
  public set healthyThreshold(value: number) {
    this._healthyThreshold = value;
  }
  public resetHealthyThreshold() {
    this._healthyThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthyThresholdInput() {
    return this._healthyThreshold;
  }

  // interval - computed: true, optional: false, required: false
  public get interval() {
    return this.getStringAttribute('interval');
  }

  // interval_jitter_percent - computed: true, optional: true, required: false
  private _intervalJitterPercent?: number; 
  public get intervalJitterPercent() {
    return this.getNumberAttribute('interval_jitter_percent');
  }
  public set intervalJitterPercent(value: number) {
    this._intervalJitterPercent = value;
  }
  public resetIntervalJitterPercent() {
    this._intervalJitterPercent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalJitterPercentInput() {
    return this._intervalJitterPercent;
  }

  // timeout - computed: true, optional: false, required: false
  public get timeout() {
    return this.getStringAttribute('timeout');
  }

  // unhealthy_threshold - computed: true, optional: true, required: false
  private _unhealthyThreshold?: number; 
  public get unhealthyThreshold() {
    return this.getNumberAttribute('unhealthy_threshold');
  }
  public set unhealthyThreshold(value: number) {
    this._unhealthyThreshold = value;
  }
  public resetUnhealthyThreshold() {
    this._unhealthyThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unhealthyThresholdInput() {
    return this._unhealthyThreshold;
  }

  // grpc_healthcheck - computed: false, optional: true, required: false
  private _grpcHealthcheck = new DataYandexAlbBackendGroupHttpBackendHealthcheckGrpcHealthcheckOutputReference(this, "grpc_healthcheck");
  public get grpcHealthcheck() {
    return this._grpcHealthcheck;
  }
  public putGrpcHealthcheck(value: DataYandexAlbBackendGroupHttpBackendHealthcheckGrpcHealthcheck) {
    this._grpcHealthcheck.internalValue = value;
  }
  public resetGrpcHealthcheck() {
    this._grpcHealthcheck.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get grpcHealthcheckInput() {
    return this._grpcHealthcheck.internalValue;
  }

  // http_healthcheck - computed: false, optional: true, required: false
  private _httpHealthcheck = new DataYandexAlbBackendGroupHttpBackendHealthcheckHttpHealthcheckOutputReference(this, "http_healthcheck");
  public get httpHealthcheck() {
    return this._httpHealthcheck;
  }
  public putHttpHealthcheck(value: DataYandexAlbBackendGroupHttpBackendHealthcheckHttpHealthcheck) {
    this._httpHealthcheck.internalValue = value;
  }
  public resetHttpHealthcheck() {
    this._httpHealthcheck.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpHealthcheckInput() {
    return this._httpHealthcheck.internalValue;
  }

  // stream_healthcheck - computed: false, optional: true, required: false
  private _streamHealthcheck = new DataYandexAlbBackendGroupHttpBackendHealthcheckStreamHealthcheckOutputReference(this, "stream_healthcheck");
  public get streamHealthcheck() {
    return this._streamHealthcheck;
  }
  public putStreamHealthcheck(value: DataYandexAlbBackendGroupHttpBackendHealthcheckStreamHealthcheck) {
    this._streamHealthcheck.internalValue = value;
  }
  public resetStreamHealthcheck() {
    this._streamHealthcheck.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get streamHealthcheckInput() {
    return this._streamHealthcheck.internalValue;
  }
}
export interface DataYandexAlbBackendGroupHttpBackendLoadBalancingConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/data-sources/alb_backend_group#locality_aware_routing_percent DataYandexAlbBackendGroup#locality_aware_routing_percent}
  */
  readonly localityAwareRoutingPercent?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/data-sources/alb_backend_group#mode DataYandexAlbBackendGroup#mode}
  */
  readonly mode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/data-sources/alb_backend_group#panic_threshold DataYandexAlbBackendGroup#panic_threshold}
  */
  readonly panicThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/data-sources/alb_backend_group#strict_locality DataYandexAlbBackendGroup#strict_locality}
  */
  readonly strictLocality?: boolean | cdktf.IResolvable;
}

export function dataYandexAlbBackendGroupHttpBackendLoadBalancingConfigToTerraform(struct?: DataYandexAlbBackendGroupHttpBackendLoadBalancingConfigOutputReference | DataYandexAlbBackendGroupHttpBackendLoadBalancingConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    locality_aware_routing_percent: cdktf.numberToTerraform(struct!.localityAwareRoutingPercent),
    mode: cdktf.stringToTerraform(struct!.mode),
    panic_threshold: cdktf.numberToTerraform(struct!.panicThreshold),
    strict_locality: cdktf.booleanToTerraform(struct!.strictLocality),
  }
}


export function dataYandexAlbBackendGroupHttpBackendLoadBalancingConfigToHclTerraform(struct?: DataYandexAlbBackendGroupHttpBackendLoadBalancingConfigOutputReference | DataYandexAlbBackendGroupHttpBackendLoadBalancingConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    locality_aware_routing_percent: {
      value: cdktf.numberToHclTerraform(struct!.localityAwareRoutingPercent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mode: {
      value: cdktf.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    panic_threshold: {
      value: cdktf.numberToHclTerraform(struct!.panicThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    strict_locality: {
      value: cdktf.booleanToHclTerraform(struct!.strictLocality),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataYandexAlbBackendGroupHttpBackendLoadBalancingConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataYandexAlbBackendGroupHttpBackendLoadBalancingConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._localityAwareRoutingPercent !== undefined) {
      hasAnyValues = true;
      internalValueResult.localityAwareRoutingPercent = this._localityAwareRoutingPercent;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._panicThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.panicThreshold = this._panicThreshold;
    }
    if (this._strictLocality !== undefined) {
      hasAnyValues = true;
      internalValueResult.strictLocality = this._strictLocality;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexAlbBackendGroupHttpBackendLoadBalancingConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._localityAwareRoutingPercent = undefined;
      this._mode = undefined;
      this._panicThreshold = undefined;
      this._strictLocality = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._localityAwareRoutingPercent = value.localityAwareRoutingPercent;
      this._mode = value.mode;
      this._panicThreshold = value.panicThreshold;
      this._strictLocality = value.strictLocality;
    }
  }

  // locality_aware_routing_percent - computed: true, optional: true, required: false
  private _localityAwareRoutingPercent?: number; 
  public get localityAwareRoutingPercent() {
    return this.getNumberAttribute('locality_aware_routing_percent');
  }
  public set localityAwareRoutingPercent(value: number) {
    this._localityAwareRoutingPercent = value;
  }
  public resetLocalityAwareRoutingPercent() {
    this._localityAwareRoutingPercent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localityAwareRoutingPercentInput() {
    return this._localityAwareRoutingPercent;
  }

  // mode - computed: true, optional: true, required: false
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }

  // panic_threshold - computed: true, optional: true, required: false
  private _panicThreshold?: number; 
  public get panicThreshold() {
    return this.getNumberAttribute('panic_threshold');
  }
  public set panicThreshold(value: number) {
    this._panicThreshold = value;
  }
  public resetPanicThreshold() {
    this._panicThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get panicThresholdInput() {
    return this._panicThreshold;
  }

  // strict_locality - computed: true, optional: true, required: false
  private _strictLocality?: boolean | cdktf.IResolvable; 
  public get strictLocality() {
    return this.getBooleanAttribute('strict_locality');
  }
  public set strictLocality(value: boolean | cdktf.IResolvable) {
    this._strictLocality = value;
  }
  public resetStrictLocality() {
    this._strictLocality = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get strictLocalityInput() {
    return this._strictLocality;
  }
}
export interface DataYandexAlbBackendGroupHttpBackendTlsValidationContext {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/data-sources/alb_backend_group#trusted_ca_bytes DataYandexAlbBackendGroup#trusted_ca_bytes}
  */
  readonly trustedCaBytes?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/data-sources/alb_backend_group#trusted_ca_id DataYandexAlbBackendGroup#trusted_ca_id}
  */
  readonly trustedCaId?: string;
}

export function dataYandexAlbBackendGroupHttpBackendTlsValidationContextToTerraform(struct?: DataYandexAlbBackendGroupHttpBackendTlsValidationContextOutputReference | DataYandexAlbBackendGroupHttpBackendTlsValidationContext): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    trusted_ca_bytes: cdktf.stringToTerraform(struct!.trustedCaBytes),
    trusted_ca_id: cdktf.stringToTerraform(struct!.trustedCaId),
  }
}


export function dataYandexAlbBackendGroupHttpBackendTlsValidationContextToHclTerraform(struct?: DataYandexAlbBackendGroupHttpBackendTlsValidationContextOutputReference | DataYandexAlbBackendGroupHttpBackendTlsValidationContext): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    trusted_ca_bytes: {
      value: cdktf.stringToHclTerraform(struct!.trustedCaBytes),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    trusted_ca_id: {
      value: cdktf.stringToHclTerraform(struct!.trustedCaId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataYandexAlbBackendGroupHttpBackendTlsValidationContextOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataYandexAlbBackendGroupHttpBackendTlsValidationContext | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._trustedCaBytes !== undefined) {
      hasAnyValues = true;
      internalValueResult.trustedCaBytes = this._trustedCaBytes;
    }
    if (this._trustedCaId !== undefined) {
      hasAnyValues = true;
      internalValueResult.trustedCaId = this._trustedCaId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexAlbBackendGroupHttpBackendTlsValidationContext | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._trustedCaBytes = undefined;
      this._trustedCaId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._trustedCaBytes = value.trustedCaBytes;
      this._trustedCaId = value.trustedCaId;
    }
  }

  // trusted_ca_bytes - computed: true, optional: true, required: false
  private _trustedCaBytes?: string; 
  public get trustedCaBytes() {
    return this.getStringAttribute('trusted_ca_bytes');
  }
  public set trustedCaBytes(value: string) {
    this._trustedCaBytes = value;
  }
  public resetTrustedCaBytes() {
    this._trustedCaBytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trustedCaBytesInput() {
    return this._trustedCaBytes;
  }

  // trusted_ca_id - computed: true, optional: true, required: false
  private _trustedCaId?: string; 
  public get trustedCaId() {
    return this.getStringAttribute('trusted_ca_id');
  }
  public set trustedCaId(value: string) {
    this._trustedCaId = value;
  }
  public resetTrustedCaId() {
    this._trustedCaId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trustedCaIdInput() {
    return this._trustedCaId;
  }
}
export interface DataYandexAlbBackendGroupHttpBackendTls {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/data-sources/alb_backend_group#sni DataYandexAlbBackendGroup#sni}
  */
  readonly sni?: string;
  /**
  * validation_context block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/data-sources/alb_backend_group#validation_context DataYandexAlbBackendGroup#validation_context}
  */
  readonly validationContext?: DataYandexAlbBackendGroupHttpBackendTlsValidationContext;
}

export function dataYandexAlbBackendGroupHttpBackendTlsToTerraform(struct?: DataYandexAlbBackendGroupHttpBackendTlsOutputReference | DataYandexAlbBackendGroupHttpBackendTls): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    sni: cdktf.stringToTerraform(struct!.sni),
    validation_context: dataYandexAlbBackendGroupHttpBackendTlsValidationContextToTerraform(struct!.validationContext),
  }
}


export function dataYandexAlbBackendGroupHttpBackendTlsToHclTerraform(struct?: DataYandexAlbBackendGroupHttpBackendTlsOutputReference | DataYandexAlbBackendGroupHttpBackendTls): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    sni: {
      value: cdktf.stringToHclTerraform(struct!.sni),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    validation_context: {
      value: dataYandexAlbBackendGroupHttpBackendTlsValidationContextToHclTerraform(struct!.validationContext),
      isBlock: true,
      type: "list",
      storageClassType: "DataYandexAlbBackendGroupHttpBackendTlsValidationContextList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataYandexAlbBackendGroupHttpBackendTlsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataYandexAlbBackendGroupHttpBackendTls | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sni !== undefined) {
      hasAnyValues = true;
      internalValueResult.sni = this._sni;
    }
    if (this._validationContext?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.validationContext = this._validationContext?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexAlbBackendGroupHttpBackendTls | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._sni = undefined;
      this._validationContext.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._sni = value.sni;
      this._validationContext.internalValue = value.validationContext;
    }
  }

  // sni - computed: true, optional: true, required: false
  private _sni?: string; 
  public get sni() {
    return this.getStringAttribute('sni');
  }
  public set sni(value: string) {
    this._sni = value;
  }
  public resetSni() {
    this._sni = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sniInput() {
    return this._sni;
  }

  // validation_context - computed: false, optional: true, required: false
  private _validationContext = new DataYandexAlbBackendGroupHttpBackendTlsValidationContextOutputReference(this, "validation_context");
  public get validationContext() {
    return this._validationContext;
  }
  public putValidationContext(value: DataYandexAlbBackendGroupHttpBackendTlsValidationContext) {
    this._validationContext.internalValue = value;
  }
  public resetValidationContext() {
    this._validationContext.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validationContextInput() {
    return this._validationContext.internalValue;
  }
}
export interface DataYandexAlbBackendGroupHttpBackend {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/data-sources/alb_backend_group#http2 DataYandexAlbBackendGroup#http2}
  */
  readonly http2?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/data-sources/alb_backend_group#port DataYandexAlbBackendGroup#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/data-sources/alb_backend_group#storage_bucket DataYandexAlbBackendGroup#storage_bucket}
  */
  readonly storageBucket?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/data-sources/alb_backend_group#target_group_ids DataYandexAlbBackendGroup#target_group_ids}
  */
  readonly targetGroupIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/data-sources/alb_backend_group#weight DataYandexAlbBackendGroup#weight}
  */
  readonly weight?: number;
  /**
  * healthcheck block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/data-sources/alb_backend_group#healthcheck DataYandexAlbBackendGroup#healthcheck}
  */
  readonly healthcheck?: DataYandexAlbBackendGroupHttpBackendHealthcheck;
  /**
  * load_balancing_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/data-sources/alb_backend_group#load_balancing_config DataYandexAlbBackendGroup#load_balancing_config}
  */
  readonly loadBalancingConfig?: DataYandexAlbBackendGroupHttpBackendLoadBalancingConfig;
  /**
  * tls block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/data-sources/alb_backend_group#tls DataYandexAlbBackendGroup#tls}
  */
  readonly tls?: DataYandexAlbBackendGroupHttpBackendTls;
}

export function dataYandexAlbBackendGroupHttpBackendToTerraform(struct?: DataYandexAlbBackendGroupHttpBackend | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    http2: cdktf.booleanToTerraform(struct!.http2),
    port: cdktf.numberToTerraform(struct!.port),
    storage_bucket: cdktf.stringToTerraform(struct!.storageBucket),
    target_group_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.targetGroupIds),
    weight: cdktf.numberToTerraform(struct!.weight),
    healthcheck: dataYandexAlbBackendGroupHttpBackendHealthcheckToTerraform(struct!.healthcheck),
    load_balancing_config: dataYandexAlbBackendGroupHttpBackendLoadBalancingConfigToTerraform(struct!.loadBalancingConfig),
    tls: dataYandexAlbBackendGroupHttpBackendTlsToTerraform(struct!.tls),
  }
}


export function dataYandexAlbBackendGroupHttpBackendToHclTerraform(struct?: DataYandexAlbBackendGroupHttpBackend | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    http2: {
      value: cdktf.booleanToHclTerraform(struct!.http2),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    storage_bucket: {
      value: cdktf.stringToHclTerraform(struct!.storageBucket),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target_group_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.targetGroupIds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    weight: {
      value: cdktf.numberToHclTerraform(struct!.weight),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    healthcheck: {
      value: dataYandexAlbBackendGroupHttpBackendHealthcheckToHclTerraform(struct!.healthcheck),
      isBlock: true,
      type: "list",
      storageClassType: "DataYandexAlbBackendGroupHttpBackendHealthcheckList",
    },
    load_balancing_config: {
      value: dataYandexAlbBackendGroupHttpBackendLoadBalancingConfigToHclTerraform(struct!.loadBalancingConfig),
      isBlock: true,
      type: "list",
      storageClassType: "DataYandexAlbBackendGroupHttpBackendLoadBalancingConfigList",
    },
    tls: {
      value: dataYandexAlbBackendGroupHttpBackendTlsToHclTerraform(struct!.tls),
      isBlock: true,
      type: "list",
      storageClassType: "DataYandexAlbBackendGroupHttpBackendTlsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataYandexAlbBackendGroupHttpBackendOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataYandexAlbBackendGroupHttpBackend | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._http2 !== undefined) {
      hasAnyValues = true;
      internalValueResult.http2 = this._http2;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._storageBucket !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageBucket = this._storageBucket;
    }
    if (this._targetGroupIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetGroupIds = this._targetGroupIds;
    }
    if (this._weight !== undefined) {
      hasAnyValues = true;
      internalValueResult.weight = this._weight;
    }
    if (this._healthcheck?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.healthcheck = this._healthcheck?.internalValue;
    }
    if (this._loadBalancingConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.loadBalancingConfig = this._loadBalancingConfig?.internalValue;
    }
    if (this._tls?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tls = this._tls?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexAlbBackendGroupHttpBackend | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._http2 = undefined;
      this._port = undefined;
      this._storageBucket = undefined;
      this._targetGroupIds = undefined;
      this._weight = undefined;
      this._healthcheck.internalValue = undefined;
      this._loadBalancingConfig.internalValue = undefined;
      this._tls.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._http2 = value.http2;
      this._port = value.port;
      this._storageBucket = value.storageBucket;
      this._targetGroupIds = value.targetGroupIds;
      this._weight = value.weight;
      this._healthcheck.internalValue = value.healthcheck;
      this._loadBalancingConfig.internalValue = value.loadBalancingConfig;
      this._tls.internalValue = value.tls;
    }
  }

  // http2 - computed: true, optional: true, required: false
  private _http2?: boolean | cdktf.IResolvable; 
  public get http2() {
    return this.getBooleanAttribute('http2');
  }
  public set http2(value: boolean | cdktf.IResolvable) {
    this._http2 = value;
  }
  public resetHttp2() {
    this._http2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get http2Input() {
    return this._http2;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // port - computed: true, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // storage_bucket - computed: true, optional: true, required: false
  private _storageBucket?: string; 
  public get storageBucket() {
    return this.getStringAttribute('storage_bucket');
  }
  public set storageBucket(value: string) {
    this._storageBucket = value;
  }
  public resetStorageBucket() {
    this._storageBucket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageBucketInput() {
    return this._storageBucket;
  }

  // target_group_ids - computed: true, optional: true, required: false
  private _targetGroupIds?: string[]; 
  public get targetGroupIds() {
    return this.getListAttribute('target_group_ids');
  }
  public set targetGroupIds(value: string[]) {
    this._targetGroupIds = value;
  }
  public resetTargetGroupIds() {
    this._targetGroupIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetGroupIdsInput() {
    return this._targetGroupIds;
  }

  // weight - computed: true, optional: true, required: false
  private _weight?: number; 
  public get weight() {
    return this.getNumberAttribute('weight');
  }
  public set weight(value: number) {
    this._weight = value;
  }
  public resetWeight() {
    this._weight = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weightInput() {
    return this._weight;
  }

  // healthcheck - computed: false, optional: true, required: false
  private _healthcheck = new DataYandexAlbBackendGroupHttpBackendHealthcheckOutputReference(this, "healthcheck");
  public get healthcheck() {
    return this._healthcheck;
  }
  public putHealthcheck(value: DataYandexAlbBackendGroupHttpBackendHealthcheck) {
    this._healthcheck.internalValue = value;
  }
  public resetHealthcheck() {
    this._healthcheck.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthcheckInput() {
    return this._healthcheck.internalValue;
  }

  // load_balancing_config - computed: false, optional: true, required: false
  private _loadBalancingConfig = new DataYandexAlbBackendGroupHttpBackendLoadBalancingConfigOutputReference(this, "load_balancing_config");
  public get loadBalancingConfig() {
    return this._loadBalancingConfig;
  }
  public putLoadBalancingConfig(value: DataYandexAlbBackendGroupHttpBackendLoadBalancingConfig) {
    this._loadBalancingConfig.internalValue = value;
  }
  public resetLoadBalancingConfig() {
    this._loadBalancingConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loadBalancingConfigInput() {
    return this._loadBalancingConfig.internalValue;
  }

  // tls - computed: false, optional: true, required: false
  private _tls = new DataYandexAlbBackendGroupHttpBackendTlsOutputReference(this, "tls");
  public get tls() {
    return this._tls;
  }
  public putTls(value: DataYandexAlbBackendGroupHttpBackendTls) {
    this._tls.internalValue = value;
  }
  public resetTls() {
    this._tls.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsInput() {
    return this._tls.internalValue;
  }
}

export class DataYandexAlbBackendGroupHttpBackendList extends cdktf.ComplexList {
  public internalValue? : DataYandexAlbBackendGroupHttpBackend[] | cdktf.IResolvable

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
  public get(index: number): DataYandexAlbBackendGroupHttpBackendOutputReference {
    return new DataYandexAlbBackendGroupHttpBackendOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexAlbBackendGroupSessionAffinityConnection {
  /**
  * Use source IP address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/data-sources/alb_backend_group#source_ip DataYandexAlbBackendGroup#source_ip}
  */
  readonly sourceIp?: boolean | cdktf.IResolvable;
}

export function dataYandexAlbBackendGroupSessionAffinityConnectionToTerraform(struct?: DataYandexAlbBackendGroupSessionAffinityConnectionOutputReference | DataYandexAlbBackendGroupSessionAffinityConnection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    source_ip: cdktf.booleanToTerraform(struct!.sourceIp),
  }
}


export function dataYandexAlbBackendGroupSessionAffinityConnectionToHclTerraform(struct?: DataYandexAlbBackendGroupSessionAffinityConnectionOutputReference | DataYandexAlbBackendGroupSessionAffinityConnection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    source_ip: {
      value: cdktf.booleanToHclTerraform(struct!.sourceIp),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataYandexAlbBackendGroupSessionAffinityConnectionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataYandexAlbBackendGroupSessionAffinityConnection | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sourceIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceIp = this._sourceIp;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexAlbBackendGroupSessionAffinityConnection | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._sourceIp = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._sourceIp = value.sourceIp;
    }
  }

  // source_ip - computed: true, optional: true, required: false
  private _sourceIp?: boolean | cdktf.IResolvable; 
  public get sourceIp() {
    return this.getBooleanAttribute('source_ip');
  }
  public set sourceIp(value: boolean | cdktf.IResolvable) {
    this._sourceIp = value;
  }
  public resetSourceIp() {
    this._sourceIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceIpInput() {
    return this._sourceIp;
  }
}
export interface DataYandexAlbBackendGroupSessionAffinityCookie {
  /**
  * TTL for the cookie (if not set, session cookie will be used)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/data-sources/alb_backend_group#ttl DataYandexAlbBackendGroup#ttl}
  */
  readonly ttl?: string;
}

export function dataYandexAlbBackendGroupSessionAffinityCookieToTerraform(struct?: DataYandexAlbBackendGroupSessionAffinityCookieOutputReference | DataYandexAlbBackendGroupSessionAffinityCookie): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ttl: cdktf.stringToTerraform(struct!.ttl),
  }
}


export function dataYandexAlbBackendGroupSessionAffinityCookieToHclTerraform(struct?: DataYandexAlbBackendGroupSessionAffinityCookieOutputReference | DataYandexAlbBackendGroupSessionAffinityCookie): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ttl: {
      value: cdktf.stringToHclTerraform(struct!.ttl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataYandexAlbBackendGroupSessionAffinityCookieOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataYandexAlbBackendGroupSessionAffinityCookie | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ttl !== undefined) {
      hasAnyValues = true;
      internalValueResult.ttl = this._ttl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexAlbBackendGroupSessionAffinityCookie | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ttl = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ttl = value.ttl;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // ttl - computed: true, optional: true, required: false
  private _ttl?: string; 
  public get ttl() {
    return this.getStringAttribute('ttl');
  }
  public set ttl(value: string) {
    this._ttl = value;
  }
  public resetTtl() {
    this._ttl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ttlInput() {
    return this._ttl;
  }
}
export interface DataYandexAlbBackendGroupSessionAffinityHeader {
  /**
  * The name of the request header that will be used
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/data-sources/alb_backend_group#header_name DataYandexAlbBackendGroup#header_name}
  */
  readonly headerName?: string;
}

export function dataYandexAlbBackendGroupSessionAffinityHeaderToTerraform(struct?: DataYandexAlbBackendGroupSessionAffinityHeaderOutputReference | DataYandexAlbBackendGroupSessionAffinityHeader): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    header_name: cdktf.stringToTerraform(struct!.headerName),
  }
}


export function dataYandexAlbBackendGroupSessionAffinityHeaderToHclTerraform(struct?: DataYandexAlbBackendGroupSessionAffinityHeaderOutputReference | DataYandexAlbBackendGroupSessionAffinityHeader): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    header_name: {
      value: cdktf.stringToHclTerraform(struct!.headerName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataYandexAlbBackendGroupSessionAffinityHeaderOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataYandexAlbBackendGroupSessionAffinityHeader | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._headerName !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerName = this._headerName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexAlbBackendGroupSessionAffinityHeader | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._headerName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._headerName = value.headerName;
    }
  }

  // header_name - computed: true, optional: true, required: false
  private _headerName?: string; 
  public get headerName() {
    return this.getStringAttribute('header_name');
  }
  public set headerName(value: string) {
    this._headerName = value;
  }
  public resetHeaderName() {
    this._headerName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerNameInput() {
    return this._headerName;
  }
}
export interface DataYandexAlbBackendGroupSessionAffinity {
  /**
  * connection block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/data-sources/alb_backend_group#connection DataYandexAlbBackendGroup#connection}
  */
  readonly connection?: DataYandexAlbBackendGroupSessionAffinityConnection;
  /**
  * cookie block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/data-sources/alb_backend_group#cookie DataYandexAlbBackendGroup#cookie}
  */
  readonly cookie?: DataYandexAlbBackendGroupSessionAffinityCookie;
  /**
  * header block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/data-sources/alb_backend_group#header DataYandexAlbBackendGroup#header}
  */
  readonly header?: DataYandexAlbBackendGroupSessionAffinityHeader;
}

export function dataYandexAlbBackendGroupSessionAffinityToTerraform(struct?: DataYandexAlbBackendGroupSessionAffinityOutputReference | DataYandexAlbBackendGroupSessionAffinity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    connection: dataYandexAlbBackendGroupSessionAffinityConnectionToTerraform(struct!.connection),
    cookie: dataYandexAlbBackendGroupSessionAffinityCookieToTerraform(struct!.cookie),
    header: dataYandexAlbBackendGroupSessionAffinityHeaderToTerraform(struct!.header),
  }
}


export function dataYandexAlbBackendGroupSessionAffinityToHclTerraform(struct?: DataYandexAlbBackendGroupSessionAffinityOutputReference | DataYandexAlbBackendGroupSessionAffinity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    connection: {
      value: dataYandexAlbBackendGroupSessionAffinityConnectionToHclTerraform(struct!.connection),
      isBlock: true,
      type: "list",
      storageClassType: "DataYandexAlbBackendGroupSessionAffinityConnectionList",
    },
    cookie: {
      value: dataYandexAlbBackendGroupSessionAffinityCookieToHclTerraform(struct!.cookie),
      isBlock: true,
      type: "list",
      storageClassType: "DataYandexAlbBackendGroupSessionAffinityCookieList",
    },
    header: {
      value: dataYandexAlbBackendGroupSessionAffinityHeaderToHclTerraform(struct!.header),
      isBlock: true,
      type: "list",
      storageClassType: "DataYandexAlbBackendGroupSessionAffinityHeaderList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataYandexAlbBackendGroupSessionAffinityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataYandexAlbBackendGroupSessionAffinity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._connection?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.connection = this._connection?.internalValue;
    }
    if (this._cookie?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cookie = this._cookie?.internalValue;
    }
    if (this._header?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.header = this._header?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexAlbBackendGroupSessionAffinity | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._connection.internalValue = undefined;
      this._cookie.internalValue = undefined;
      this._header.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._connection.internalValue = value.connection;
      this._cookie.internalValue = value.cookie;
      this._header.internalValue = value.header;
    }
  }

  // connection - computed: false, optional: true, required: false
  private _connection = new DataYandexAlbBackendGroupSessionAffinityConnectionOutputReference(this, "connection");
  public get connection() {
    return this._connection;
  }
  public putConnection(value: DataYandexAlbBackendGroupSessionAffinityConnection) {
    this._connection.internalValue = value;
  }
  public resetConnection() {
    this._connection.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionInput() {
    return this._connection.internalValue;
  }

  // cookie - computed: false, optional: true, required: false
  private _cookie = new DataYandexAlbBackendGroupSessionAffinityCookieOutputReference(this, "cookie");
  public get cookie() {
    return this._cookie;
  }
  public putCookie(value: DataYandexAlbBackendGroupSessionAffinityCookie) {
    this._cookie.internalValue = value;
  }
  public resetCookie() {
    this._cookie.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cookieInput() {
    return this._cookie.internalValue;
  }

  // header - computed: false, optional: true, required: false
  private _header = new DataYandexAlbBackendGroupSessionAffinityHeaderOutputReference(this, "header");
  public get header() {
    return this._header;
  }
  public putHeader(value: DataYandexAlbBackendGroupSessionAffinityHeader) {
    this._header.internalValue = value;
  }
  public resetHeader() {
    this._header.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerInput() {
    return this._header.internalValue;
  }
}
export interface DataYandexAlbBackendGroupStreamBackendHealthcheckGrpcHealthcheck {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/data-sources/alb_backend_group#service_name DataYandexAlbBackendGroup#service_name}
  */
  readonly serviceName?: string;
}

export function dataYandexAlbBackendGroupStreamBackendHealthcheckGrpcHealthcheckToTerraform(struct?: DataYandexAlbBackendGroupStreamBackendHealthcheckGrpcHealthcheckOutputReference | DataYandexAlbBackendGroupStreamBackendHealthcheckGrpcHealthcheck): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    service_name: cdktf.stringToTerraform(struct!.serviceName),
  }
}


export function dataYandexAlbBackendGroupStreamBackendHealthcheckGrpcHealthcheckToHclTerraform(struct?: DataYandexAlbBackendGroupStreamBackendHealthcheckGrpcHealthcheckOutputReference | DataYandexAlbBackendGroupStreamBackendHealthcheckGrpcHealthcheck): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    service_name: {
      value: cdktf.stringToHclTerraform(struct!.serviceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataYandexAlbBackendGroupStreamBackendHealthcheckGrpcHealthcheckOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataYandexAlbBackendGroupStreamBackendHealthcheckGrpcHealthcheck | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._serviceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceName = this._serviceName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexAlbBackendGroupStreamBackendHealthcheckGrpcHealthcheck | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._serviceName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._serviceName = value.serviceName;
    }
  }

  // service_name - computed: true, optional: true, required: false
  private _serviceName?: string; 
  public get serviceName() {
    return this.getStringAttribute('service_name');
  }
  public set serviceName(value: string) {
    this._serviceName = value;
  }
  public resetServiceName() {
    this._serviceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceNameInput() {
    return this._serviceName;
  }
}
export interface DataYandexAlbBackendGroupStreamBackendHealthcheckHttpHealthcheck {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/data-sources/alb_backend_group#host DataYandexAlbBackendGroup#host}
  */
  readonly host?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/data-sources/alb_backend_group#http2 DataYandexAlbBackendGroup#http2}
  */
  readonly http2?: boolean | cdktf.IResolvable;
}

export function dataYandexAlbBackendGroupStreamBackendHealthcheckHttpHealthcheckToTerraform(struct?: DataYandexAlbBackendGroupStreamBackendHealthcheckHttpHealthcheckOutputReference | DataYandexAlbBackendGroupStreamBackendHealthcheckHttpHealthcheck): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host: cdktf.stringToTerraform(struct!.host),
    http2: cdktf.booleanToTerraform(struct!.http2),
  }
}


export function dataYandexAlbBackendGroupStreamBackendHealthcheckHttpHealthcheckToHclTerraform(struct?: DataYandexAlbBackendGroupStreamBackendHealthcheckHttpHealthcheckOutputReference | DataYandexAlbBackendGroupStreamBackendHealthcheckHttpHealthcheck): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    host: {
      value: cdktf.stringToHclTerraform(struct!.host),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    http2: {
      value: cdktf.booleanToHclTerraform(struct!.http2),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataYandexAlbBackendGroupStreamBackendHealthcheckHttpHealthcheckOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataYandexAlbBackendGroupStreamBackendHealthcheckHttpHealthcheck | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._http2 !== undefined) {
      hasAnyValues = true;
      internalValueResult.http2 = this._http2;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexAlbBackendGroupStreamBackendHealthcheckHttpHealthcheck | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._host = undefined;
      this._http2 = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._host = value.host;
      this._http2 = value.http2;
    }
  }

  // expected_statuses - computed: true, optional: false, required: false
  public get expectedStatuses() {
    return this.getNumberListAttribute('expected_statuses');
  }

  // host - computed: true, optional: true, required: false
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

  // http2 - computed: true, optional: true, required: false
  private _http2?: boolean | cdktf.IResolvable; 
  public get http2() {
    return this.getBooleanAttribute('http2');
  }
  public set http2(value: boolean | cdktf.IResolvable) {
    this._http2 = value;
  }
  public resetHttp2() {
    this._http2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get http2Input() {
    return this._http2;
  }

  // path - computed: true, optional: false, required: false
  public get path() {
    return this.getStringAttribute('path');
  }
}
export interface DataYandexAlbBackendGroupStreamBackendHealthcheckStreamHealthcheck {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/data-sources/alb_backend_group#receive DataYandexAlbBackendGroup#receive}
  */
  readonly receive?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/data-sources/alb_backend_group#send DataYandexAlbBackendGroup#send}
  */
  readonly send?: string;
}

export function dataYandexAlbBackendGroupStreamBackendHealthcheckStreamHealthcheckToTerraform(struct?: DataYandexAlbBackendGroupStreamBackendHealthcheckStreamHealthcheckOutputReference | DataYandexAlbBackendGroupStreamBackendHealthcheckStreamHealthcheck): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    receive: cdktf.stringToTerraform(struct!.receive),
    send: cdktf.stringToTerraform(struct!.send),
  }
}


export function dataYandexAlbBackendGroupStreamBackendHealthcheckStreamHealthcheckToHclTerraform(struct?: DataYandexAlbBackendGroupStreamBackendHealthcheckStreamHealthcheckOutputReference | DataYandexAlbBackendGroupStreamBackendHealthcheckStreamHealthcheck): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    receive: {
      value: cdktf.stringToHclTerraform(struct!.receive),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    send: {
      value: cdktf.stringToHclTerraform(struct!.send),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataYandexAlbBackendGroupStreamBackendHealthcheckStreamHealthcheckOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataYandexAlbBackendGroupStreamBackendHealthcheckStreamHealthcheck | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._receive !== undefined) {
      hasAnyValues = true;
      internalValueResult.receive = this._receive;
    }
    if (this._send !== undefined) {
      hasAnyValues = true;
      internalValueResult.send = this._send;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexAlbBackendGroupStreamBackendHealthcheckStreamHealthcheck | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._receive = undefined;
      this._send = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._receive = value.receive;
      this._send = value.send;
    }
  }

  // receive - computed: true, optional: true, required: false
  private _receive?: string; 
  public get receive() {
    return this.getStringAttribute('receive');
  }
  public set receive(value: string) {
    this._receive = value;
  }
  public resetReceive() {
    this._receive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get receiveInput() {
    return this._receive;
  }

  // send - computed: true, optional: true, required: false
  private _send?: string; 
  public get send() {
    return this.getStringAttribute('send');
  }
  public set send(value: string) {
    this._send = value;
  }
  public resetSend() {
    this._send = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendInput() {
    return this._send;
  }
}
export interface DataYandexAlbBackendGroupStreamBackendHealthcheck {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/data-sources/alb_backend_group#healthcheck_port DataYandexAlbBackendGroup#healthcheck_port}
  */
  readonly healthcheckPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/data-sources/alb_backend_group#healthy_threshold DataYandexAlbBackendGroup#healthy_threshold}
  */
  readonly healthyThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/data-sources/alb_backend_group#interval_jitter_percent DataYandexAlbBackendGroup#interval_jitter_percent}
  */
  readonly intervalJitterPercent?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/data-sources/alb_backend_group#unhealthy_threshold DataYandexAlbBackendGroup#unhealthy_threshold}
  */
  readonly unhealthyThreshold?: number;
  /**
  * grpc_healthcheck block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/data-sources/alb_backend_group#grpc_healthcheck DataYandexAlbBackendGroup#grpc_healthcheck}
  */
  readonly grpcHealthcheck?: DataYandexAlbBackendGroupStreamBackendHealthcheckGrpcHealthcheck;
  /**
  * http_healthcheck block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/data-sources/alb_backend_group#http_healthcheck DataYandexAlbBackendGroup#http_healthcheck}
  */
  readonly httpHealthcheck?: DataYandexAlbBackendGroupStreamBackendHealthcheckHttpHealthcheck;
  /**
  * stream_healthcheck block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/data-sources/alb_backend_group#stream_healthcheck DataYandexAlbBackendGroup#stream_healthcheck}
  */
  readonly streamHealthcheck?: DataYandexAlbBackendGroupStreamBackendHealthcheckStreamHealthcheck;
}

export function dataYandexAlbBackendGroupStreamBackendHealthcheckToTerraform(struct?: DataYandexAlbBackendGroupStreamBackendHealthcheckOutputReference | DataYandexAlbBackendGroupStreamBackendHealthcheck): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    healthcheck_port: cdktf.numberToTerraform(struct!.healthcheckPort),
    healthy_threshold: cdktf.numberToTerraform(struct!.healthyThreshold),
    interval_jitter_percent: cdktf.numberToTerraform(struct!.intervalJitterPercent),
    unhealthy_threshold: cdktf.numberToTerraform(struct!.unhealthyThreshold),
    grpc_healthcheck: dataYandexAlbBackendGroupStreamBackendHealthcheckGrpcHealthcheckToTerraform(struct!.grpcHealthcheck),
    http_healthcheck: dataYandexAlbBackendGroupStreamBackendHealthcheckHttpHealthcheckToTerraform(struct!.httpHealthcheck),
    stream_healthcheck: dataYandexAlbBackendGroupStreamBackendHealthcheckStreamHealthcheckToTerraform(struct!.streamHealthcheck),
  }
}


export function dataYandexAlbBackendGroupStreamBackendHealthcheckToHclTerraform(struct?: DataYandexAlbBackendGroupStreamBackendHealthcheckOutputReference | DataYandexAlbBackendGroupStreamBackendHealthcheck): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    healthcheck_port: {
      value: cdktf.numberToHclTerraform(struct!.healthcheckPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    healthy_threshold: {
      value: cdktf.numberToHclTerraform(struct!.healthyThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    interval_jitter_percent: {
      value: cdktf.numberToHclTerraform(struct!.intervalJitterPercent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    unhealthy_threshold: {
      value: cdktf.numberToHclTerraform(struct!.unhealthyThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    grpc_healthcheck: {
      value: dataYandexAlbBackendGroupStreamBackendHealthcheckGrpcHealthcheckToHclTerraform(struct!.grpcHealthcheck),
      isBlock: true,
      type: "list",
      storageClassType: "DataYandexAlbBackendGroupStreamBackendHealthcheckGrpcHealthcheckList",
    },
    http_healthcheck: {
      value: dataYandexAlbBackendGroupStreamBackendHealthcheckHttpHealthcheckToHclTerraform(struct!.httpHealthcheck),
      isBlock: true,
      type: "list",
      storageClassType: "DataYandexAlbBackendGroupStreamBackendHealthcheckHttpHealthcheckList",
    },
    stream_healthcheck: {
      value: dataYandexAlbBackendGroupStreamBackendHealthcheckStreamHealthcheckToHclTerraform(struct!.streamHealthcheck),
      isBlock: true,
      type: "list",
      storageClassType: "DataYandexAlbBackendGroupStreamBackendHealthcheckStreamHealthcheckList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataYandexAlbBackendGroupStreamBackendHealthcheckOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataYandexAlbBackendGroupStreamBackendHealthcheck | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._healthcheckPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.healthcheckPort = this._healthcheckPort;
    }
    if (this._healthyThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.healthyThreshold = this._healthyThreshold;
    }
    if (this._intervalJitterPercent !== undefined) {
      hasAnyValues = true;
      internalValueResult.intervalJitterPercent = this._intervalJitterPercent;
    }
    if (this._unhealthyThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.unhealthyThreshold = this._unhealthyThreshold;
    }
    if (this._grpcHealthcheck?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.grpcHealthcheck = this._grpcHealthcheck?.internalValue;
    }
    if (this._httpHealthcheck?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpHealthcheck = this._httpHealthcheck?.internalValue;
    }
    if (this._streamHealthcheck?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.streamHealthcheck = this._streamHealthcheck?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexAlbBackendGroupStreamBackendHealthcheck | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._healthcheckPort = undefined;
      this._healthyThreshold = undefined;
      this._intervalJitterPercent = undefined;
      this._unhealthyThreshold = undefined;
      this._grpcHealthcheck.internalValue = undefined;
      this._httpHealthcheck.internalValue = undefined;
      this._streamHealthcheck.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._healthcheckPort = value.healthcheckPort;
      this._healthyThreshold = value.healthyThreshold;
      this._intervalJitterPercent = value.intervalJitterPercent;
      this._unhealthyThreshold = value.unhealthyThreshold;
      this._grpcHealthcheck.internalValue = value.grpcHealthcheck;
      this._httpHealthcheck.internalValue = value.httpHealthcheck;
      this._streamHealthcheck.internalValue = value.streamHealthcheck;
    }
  }

  // healthcheck_port - computed: true, optional: true, required: false
  private _healthcheckPort?: number; 
  public get healthcheckPort() {
    return this.getNumberAttribute('healthcheck_port');
  }
  public set healthcheckPort(value: number) {
    this._healthcheckPort = value;
  }
  public resetHealthcheckPort() {
    this._healthcheckPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthcheckPortInput() {
    return this._healthcheckPort;
  }

  // healthy_threshold - computed: true, optional: true, required: false
  private _healthyThreshold?: number; 
  public get healthyThreshold() {
    return this.getNumberAttribute('healthy_threshold');
  }
  public set healthyThreshold(value: number) {
    this._healthyThreshold = value;
  }
  public resetHealthyThreshold() {
    this._healthyThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthyThresholdInput() {
    return this._healthyThreshold;
  }

  // interval - computed: true, optional: false, required: false
  public get interval() {
    return this.getStringAttribute('interval');
  }

  // interval_jitter_percent - computed: true, optional: true, required: false
  private _intervalJitterPercent?: number; 
  public get intervalJitterPercent() {
    return this.getNumberAttribute('interval_jitter_percent');
  }
  public set intervalJitterPercent(value: number) {
    this._intervalJitterPercent = value;
  }
  public resetIntervalJitterPercent() {
    this._intervalJitterPercent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalJitterPercentInput() {
    return this._intervalJitterPercent;
  }

  // timeout - computed: true, optional: false, required: false
  public get timeout() {
    return this.getStringAttribute('timeout');
  }

  // unhealthy_threshold - computed: true, optional: true, required: false
  private _unhealthyThreshold?: number; 
  public get unhealthyThreshold() {
    return this.getNumberAttribute('unhealthy_threshold');
  }
  public set unhealthyThreshold(value: number) {
    this._unhealthyThreshold = value;
  }
  public resetUnhealthyThreshold() {
    this._unhealthyThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unhealthyThresholdInput() {
    return this._unhealthyThreshold;
  }

  // grpc_healthcheck - computed: false, optional: true, required: false
  private _grpcHealthcheck = new DataYandexAlbBackendGroupStreamBackendHealthcheckGrpcHealthcheckOutputReference(this, "grpc_healthcheck");
  public get grpcHealthcheck() {
    return this._grpcHealthcheck;
  }
  public putGrpcHealthcheck(value: DataYandexAlbBackendGroupStreamBackendHealthcheckGrpcHealthcheck) {
    this._grpcHealthcheck.internalValue = value;
  }
  public resetGrpcHealthcheck() {
    this._grpcHealthcheck.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get grpcHealthcheckInput() {
    return this._grpcHealthcheck.internalValue;
  }

  // http_healthcheck - computed: false, optional: true, required: false
  private _httpHealthcheck = new DataYandexAlbBackendGroupStreamBackendHealthcheckHttpHealthcheckOutputReference(this, "http_healthcheck");
  public get httpHealthcheck() {
    return this._httpHealthcheck;
  }
  public putHttpHealthcheck(value: DataYandexAlbBackendGroupStreamBackendHealthcheckHttpHealthcheck) {
    this._httpHealthcheck.internalValue = value;
  }
  public resetHttpHealthcheck() {
    this._httpHealthcheck.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpHealthcheckInput() {
    return this._httpHealthcheck.internalValue;
  }

  // stream_healthcheck - computed: false, optional: true, required: false
  private _streamHealthcheck = new DataYandexAlbBackendGroupStreamBackendHealthcheckStreamHealthcheckOutputReference(this, "stream_healthcheck");
  public get streamHealthcheck() {
    return this._streamHealthcheck;
  }
  public putStreamHealthcheck(value: DataYandexAlbBackendGroupStreamBackendHealthcheckStreamHealthcheck) {
    this._streamHealthcheck.internalValue = value;
  }
  public resetStreamHealthcheck() {
    this._streamHealthcheck.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get streamHealthcheckInput() {
    return this._streamHealthcheck.internalValue;
  }
}
export interface DataYandexAlbBackendGroupStreamBackendLoadBalancingConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/data-sources/alb_backend_group#locality_aware_routing_percent DataYandexAlbBackendGroup#locality_aware_routing_percent}
  */
  readonly localityAwareRoutingPercent?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/data-sources/alb_backend_group#mode DataYandexAlbBackendGroup#mode}
  */
  readonly mode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/data-sources/alb_backend_group#panic_threshold DataYandexAlbBackendGroup#panic_threshold}
  */
  readonly panicThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/data-sources/alb_backend_group#strict_locality DataYandexAlbBackendGroup#strict_locality}
  */
  readonly strictLocality?: boolean | cdktf.IResolvable;
}

export function dataYandexAlbBackendGroupStreamBackendLoadBalancingConfigToTerraform(struct?: DataYandexAlbBackendGroupStreamBackendLoadBalancingConfigOutputReference | DataYandexAlbBackendGroupStreamBackendLoadBalancingConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    locality_aware_routing_percent: cdktf.numberToTerraform(struct!.localityAwareRoutingPercent),
    mode: cdktf.stringToTerraform(struct!.mode),
    panic_threshold: cdktf.numberToTerraform(struct!.panicThreshold),
    strict_locality: cdktf.booleanToTerraform(struct!.strictLocality),
  }
}


export function dataYandexAlbBackendGroupStreamBackendLoadBalancingConfigToHclTerraform(struct?: DataYandexAlbBackendGroupStreamBackendLoadBalancingConfigOutputReference | DataYandexAlbBackendGroupStreamBackendLoadBalancingConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    locality_aware_routing_percent: {
      value: cdktf.numberToHclTerraform(struct!.localityAwareRoutingPercent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mode: {
      value: cdktf.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    panic_threshold: {
      value: cdktf.numberToHclTerraform(struct!.panicThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    strict_locality: {
      value: cdktf.booleanToHclTerraform(struct!.strictLocality),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataYandexAlbBackendGroupStreamBackendLoadBalancingConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataYandexAlbBackendGroupStreamBackendLoadBalancingConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._localityAwareRoutingPercent !== undefined) {
      hasAnyValues = true;
      internalValueResult.localityAwareRoutingPercent = this._localityAwareRoutingPercent;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._panicThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.panicThreshold = this._panicThreshold;
    }
    if (this._strictLocality !== undefined) {
      hasAnyValues = true;
      internalValueResult.strictLocality = this._strictLocality;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexAlbBackendGroupStreamBackendLoadBalancingConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._localityAwareRoutingPercent = undefined;
      this._mode = undefined;
      this._panicThreshold = undefined;
      this._strictLocality = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._localityAwareRoutingPercent = value.localityAwareRoutingPercent;
      this._mode = value.mode;
      this._panicThreshold = value.panicThreshold;
      this._strictLocality = value.strictLocality;
    }
  }

  // locality_aware_routing_percent - computed: true, optional: true, required: false
  private _localityAwareRoutingPercent?: number; 
  public get localityAwareRoutingPercent() {
    return this.getNumberAttribute('locality_aware_routing_percent');
  }
  public set localityAwareRoutingPercent(value: number) {
    this._localityAwareRoutingPercent = value;
  }
  public resetLocalityAwareRoutingPercent() {
    this._localityAwareRoutingPercent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localityAwareRoutingPercentInput() {
    return this._localityAwareRoutingPercent;
  }

  // mode - computed: true, optional: true, required: false
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }

  // panic_threshold - computed: true, optional: true, required: false
  private _panicThreshold?: number; 
  public get panicThreshold() {
    return this.getNumberAttribute('panic_threshold');
  }
  public set panicThreshold(value: number) {
    this._panicThreshold = value;
  }
  public resetPanicThreshold() {
    this._panicThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get panicThresholdInput() {
    return this._panicThreshold;
  }

  // strict_locality - computed: true, optional: true, required: false
  private _strictLocality?: boolean | cdktf.IResolvable; 
  public get strictLocality() {
    return this.getBooleanAttribute('strict_locality');
  }
  public set strictLocality(value: boolean | cdktf.IResolvable) {
    this._strictLocality = value;
  }
  public resetStrictLocality() {
    this._strictLocality = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get strictLocalityInput() {
    return this._strictLocality;
  }
}
export interface DataYandexAlbBackendGroupStreamBackendTlsValidationContext {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/data-sources/alb_backend_group#trusted_ca_bytes DataYandexAlbBackendGroup#trusted_ca_bytes}
  */
  readonly trustedCaBytes?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/data-sources/alb_backend_group#trusted_ca_id DataYandexAlbBackendGroup#trusted_ca_id}
  */
  readonly trustedCaId?: string;
}

export function dataYandexAlbBackendGroupStreamBackendTlsValidationContextToTerraform(struct?: DataYandexAlbBackendGroupStreamBackendTlsValidationContextOutputReference | DataYandexAlbBackendGroupStreamBackendTlsValidationContext): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    trusted_ca_bytes: cdktf.stringToTerraform(struct!.trustedCaBytes),
    trusted_ca_id: cdktf.stringToTerraform(struct!.trustedCaId),
  }
}


export function dataYandexAlbBackendGroupStreamBackendTlsValidationContextToHclTerraform(struct?: DataYandexAlbBackendGroupStreamBackendTlsValidationContextOutputReference | DataYandexAlbBackendGroupStreamBackendTlsValidationContext): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    trusted_ca_bytes: {
      value: cdktf.stringToHclTerraform(struct!.trustedCaBytes),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    trusted_ca_id: {
      value: cdktf.stringToHclTerraform(struct!.trustedCaId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataYandexAlbBackendGroupStreamBackendTlsValidationContextOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataYandexAlbBackendGroupStreamBackendTlsValidationContext | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._trustedCaBytes !== undefined) {
      hasAnyValues = true;
      internalValueResult.trustedCaBytes = this._trustedCaBytes;
    }
    if (this._trustedCaId !== undefined) {
      hasAnyValues = true;
      internalValueResult.trustedCaId = this._trustedCaId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexAlbBackendGroupStreamBackendTlsValidationContext | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._trustedCaBytes = undefined;
      this._trustedCaId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._trustedCaBytes = value.trustedCaBytes;
      this._trustedCaId = value.trustedCaId;
    }
  }

  // trusted_ca_bytes - computed: true, optional: true, required: false
  private _trustedCaBytes?: string; 
  public get trustedCaBytes() {
    return this.getStringAttribute('trusted_ca_bytes');
  }
  public set trustedCaBytes(value: string) {
    this._trustedCaBytes = value;
  }
  public resetTrustedCaBytes() {
    this._trustedCaBytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trustedCaBytesInput() {
    return this._trustedCaBytes;
  }

  // trusted_ca_id - computed: true, optional: true, required: false
  private _trustedCaId?: string; 
  public get trustedCaId() {
    return this.getStringAttribute('trusted_ca_id');
  }
  public set trustedCaId(value: string) {
    this._trustedCaId = value;
  }
  public resetTrustedCaId() {
    this._trustedCaId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trustedCaIdInput() {
    return this._trustedCaId;
  }
}
export interface DataYandexAlbBackendGroupStreamBackendTls {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/data-sources/alb_backend_group#sni DataYandexAlbBackendGroup#sni}
  */
  readonly sni?: string;
  /**
  * validation_context block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/data-sources/alb_backend_group#validation_context DataYandexAlbBackendGroup#validation_context}
  */
  readonly validationContext?: DataYandexAlbBackendGroupStreamBackendTlsValidationContext;
}

export function dataYandexAlbBackendGroupStreamBackendTlsToTerraform(struct?: DataYandexAlbBackendGroupStreamBackendTlsOutputReference | DataYandexAlbBackendGroupStreamBackendTls): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    sni: cdktf.stringToTerraform(struct!.sni),
    validation_context: dataYandexAlbBackendGroupStreamBackendTlsValidationContextToTerraform(struct!.validationContext),
  }
}


export function dataYandexAlbBackendGroupStreamBackendTlsToHclTerraform(struct?: DataYandexAlbBackendGroupStreamBackendTlsOutputReference | DataYandexAlbBackendGroupStreamBackendTls): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    sni: {
      value: cdktf.stringToHclTerraform(struct!.sni),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    validation_context: {
      value: dataYandexAlbBackendGroupStreamBackendTlsValidationContextToHclTerraform(struct!.validationContext),
      isBlock: true,
      type: "list",
      storageClassType: "DataYandexAlbBackendGroupStreamBackendTlsValidationContextList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataYandexAlbBackendGroupStreamBackendTlsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataYandexAlbBackendGroupStreamBackendTls | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sni !== undefined) {
      hasAnyValues = true;
      internalValueResult.sni = this._sni;
    }
    if (this._validationContext?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.validationContext = this._validationContext?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexAlbBackendGroupStreamBackendTls | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._sni = undefined;
      this._validationContext.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._sni = value.sni;
      this._validationContext.internalValue = value.validationContext;
    }
  }

  // sni - computed: true, optional: true, required: false
  private _sni?: string; 
  public get sni() {
    return this.getStringAttribute('sni');
  }
  public set sni(value: string) {
    this._sni = value;
  }
  public resetSni() {
    this._sni = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sniInput() {
    return this._sni;
  }

  // validation_context - computed: false, optional: true, required: false
  private _validationContext = new DataYandexAlbBackendGroupStreamBackendTlsValidationContextOutputReference(this, "validation_context");
  public get validationContext() {
    return this._validationContext;
  }
  public putValidationContext(value: DataYandexAlbBackendGroupStreamBackendTlsValidationContext) {
    this._validationContext.internalValue = value;
  }
  public resetValidationContext() {
    this._validationContext.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validationContextInput() {
    return this._validationContext.internalValue;
  }
}
export interface DataYandexAlbBackendGroupStreamBackend {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/data-sources/alb_backend_group#enable_proxy_protocol DataYandexAlbBackendGroup#enable_proxy_protocol}
  */
  readonly enableProxyProtocol?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/data-sources/alb_backend_group#keep_connections_on_host_health_failure DataYandexAlbBackendGroup#keep_connections_on_host_health_failure}
  */
  readonly keepConnectionsOnHostHealthFailure?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/data-sources/alb_backend_group#port DataYandexAlbBackendGroup#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/data-sources/alb_backend_group#weight DataYandexAlbBackendGroup#weight}
  */
  readonly weight?: number;
  /**
  * healthcheck block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/data-sources/alb_backend_group#healthcheck DataYandexAlbBackendGroup#healthcheck}
  */
  readonly healthcheck?: DataYandexAlbBackendGroupStreamBackendHealthcheck;
  /**
  * load_balancing_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/data-sources/alb_backend_group#load_balancing_config DataYandexAlbBackendGroup#load_balancing_config}
  */
  readonly loadBalancingConfig?: DataYandexAlbBackendGroupStreamBackendLoadBalancingConfig;
  /**
  * tls block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/data-sources/alb_backend_group#tls DataYandexAlbBackendGroup#tls}
  */
  readonly tls?: DataYandexAlbBackendGroupStreamBackendTls;
}

export function dataYandexAlbBackendGroupStreamBackendToTerraform(struct?: DataYandexAlbBackendGroupStreamBackend | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable_proxy_protocol: cdktf.booleanToTerraform(struct!.enableProxyProtocol),
    keep_connections_on_host_health_failure: cdktf.booleanToTerraform(struct!.keepConnectionsOnHostHealthFailure),
    port: cdktf.numberToTerraform(struct!.port),
    weight: cdktf.numberToTerraform(struct!.weight),
    healthcheck: dataYandexAlbBackendGroupStreamBackendHealthcheckToTerraform(struct!.healthcheck),
    load_balancing_config: dataYandexAlbBackendGroupStreamBackendLoadBalancingConfigToTerraform(struct!.loadBalancingConfig),
    tls: dataYandexAlbBackendGroupStreamBackendTlsToTerraform(struct!.tls),
  }
}


export function dataYandexAlbBackendGroupStreamBackendToHclTerraform(struct?: DataYandexAlbBackendGroupStreamBackend | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable_proxy_protocol: {
      value: cdktf.booleanToHclTerraform(struct!.enableProxyProtocol),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    keep_connections_on_host_health_failure: {
      value: cdktf.booleanToHclTerraform(struct!.keepConnectionsOnHostHealthFailure),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    weight: {
      value: cdktf.numberToHclTerraform(struct!.weight),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    healthcheck: {
      value: dataYandexAlbBackendGroupStreamBackendHealthcheckToHclTerraform(struct!.healthcheck),
      isBlock: true,
      type: "list",
      storageClassType: "DataYandexAlbBackendGroupStreamBackendHealthcheckList",
    },
    load_balancing_config: {
      value: dataYandexAlbBackendGroupStreamBackendLoadBalancingConfigToHclTerraform(struct!.loadBalancingConfig),
      isBlock: true,
      type: "list",
      storageClassType: "DataYandexAlbBackendGroupStreamBackendLoadBalancingConfigList",
    },
    tls: {
      value: dataYandexAlbBackendGroupStreamBackendTlsToHclTerraform(struct!.tls),
      isBlock: true,
      type: "list",
      storageClassType: "DataYandexAlbBackendGroupStreamBackendTlsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataYandexAlbBackendGroupStreamBackendOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataYandexAlbBackendGroupStreamBackend | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enableProxyProtocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableProxyProtocol = this._enableProxyProtocol;
    }
    if (this._keepConnectionsOnHostHealthFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.keepConnectionsOnHostHealthFailure = this._keepConnectionsOnHostHealthFailure;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._weight !== undefined) {
      hasAnyValues = true;
      internalValueResult.weight = this._weight;
    }
    if (this._healthcheck?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.healthcheck = this._healthcheck?.internalValue;
    }
    if (this._loadBalancingConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.loadBalancingConfig = this._loadBalancingConfig?.internalValue;
    }
    if (this._tls?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tls = this._tls?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexAlbBackendGroupStreamBackend | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enableProxyProtocol = undefined;
      this._keepConnectionsOnHostHealthFailure = undefined;
      this._port = undefined;
      this._weight = undefined;
      this._healthcheck.internalValue = undefined;
      this._loadBalancingConfig.internalValue = undefined;
      this._tls.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enableProxyProtocol = value.enableProxyProtocol;
      this._keepConnectionsOnHostHealthFailure = value.keepConnectionsOnHostHealthFailure;
      this._port = value.port;
      this._weight = value.weight;
      this._healthcheck.internalValue = value.healthcheck;
      this._loadBalancingConfig.internalValue = value.loadBalancingConfig;
      this._tls.internalValue = value.tls;
    }
  }

  // enable_proxy_protocol - computed: true, optional: true, required: false
  private _enableProxyProtocol?: boolean | cdktf.IResolvable; 
  public get enableProxyProtocol() {
    return this.getBooleanAttribute('enable_proxy_protocol');
  }
  public set enableProxyProtocol(value: boolean | cdktf.IResolvable) {
    this._enableProxyProtocol = value;
  }
  public resetEnableProxyProtocol() {
    this._enableProxyProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableProxyProtocolInput() {
    return this._enableProxyProtocol;
  }

  // keep_connections_on_host_health_failure - computed: false, optional: true, required: false
  private _keepConnectionsOnHostHealthFailure?: boolean | cdktf.IResolvable; 
  public get keepConnectionsOnHostHealthFailure() {
    return this.getBooleanAttribute('keep_connections_on_host_health_failure');
  }
  public set keepConnectionsOnHostHealthFailure(value: boolean | cdktf.IResolvable) {
    this._keepConnectionsOnHostHealthFailure = value;
  }
  public resetKeepConnectionsOnHostHealthFailure() {
    this._keepConnectionsOnHostHealthFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keepConnectionsOnHostHealthFailureInput() {
    return this._keepConnectionsOnHostHealthFailure;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // port - computed: true, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // target_group_ids - computed: true, optional: false, required: false
  public get targetGroupIds() {
    return this.getListAttribute('target_group_ids');
  }

  // weight - computed: true, optional: true, required: false
  private _weight?: number; 
  public get weight() {
    return this.getNumberAttribute('weight');
  }
  public set weight(value: number) {
    this._weight = value;
  }
  public resetWeight() {
    this._weight = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weightInput() {
    return this._weight;
  }

  // healthcheck - computed: false, optional: true, required: false
  private _healthcheck = new DataYandexAlbBackendGroupStreamBackendHealthcheckOutputReference(this, "healthcheck");
  public get healthcheck() {
    return this._healthcheck;
  }
  public putHealthcheck(value: DataYandexAlbBackendGroupStreamBackendHealthcheck) {
    this._healthcheck.internalValue = value;
  }
  public resetHealthcheck() {
    this._healthcheck.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthcheckInput() {
    return this._healthcheck.internalValue;
  }

  // load_balancing_config - computed: false, optional: true, required: false
  private _loadBalancingConfig = new DataYandexAlbBackendGroupStreamBackendLoadBalancingConfigOutputReference(this, "load_balancing_config");
  public get loadBalancingConfig() {
    return this._loadBalancingConfig;
  }
  public putLoadBalancingConfig(value: DataYandexAlbBackendGroupStreamBackendLoadBalancingConfig) {
    this._loadBalancingConfig.internalValue = value;
  }
  public resetLoadBalancingConfig() {
    this._loadBalancingConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loadBalancingConfigInput() {
    return this._loadBalancingConfig.internalValue;
  }

  // tls - computed: false, optional: true, required: false
  private _tls = new DataYandexAlbBackendGroupStreamBackendTlsOutputReference(this, "tls");
  public get tls() {
    return this._tls;
  }
  public putTls(value: DataYandexAlbBackendGroupStreamBackendTls) {
    this._tls.internalValue = value;
  }
  public resetTls() {
    this._tls.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsInput() {
    return this._tls.internalValue;
  }
}

export class DataYandexAlbBackendGroupStreamBackendList extends cdktf.ComplexList {
  public internalValue? : DataYandexAlbBackendGroupStreamBackend[] | cdktf.IResolvable

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
  public get(index: number): DataYandexAlbBackendGroupStreamBackendOutputReference {
    return new DataYandexAlbBackendGroupStreamBackendOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/data-sources/alb_backend_group yandex_alb_backend_group}
*/
export class DataYandexAlbBackendGroup extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "yandex_alb_backend_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataYandexAlbBackendGroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataYandexAlbBackendGroup to import
  * @param importFromId The id of the existing DataYandexAlbBackendGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/data-sources/alb_backend_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataYandexAlbBackendGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "yandex_alb_backend_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/data-sources/alb_backend_group yandex_alb_backend_group} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataYandexAlbBackendGroupConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataYandexAlbBackendGroupConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'yandex_alb_backend_group',
      terraformGeneratorMetadata: {
        providerName: 'yandex',
        providerVersion: '0.169.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._backendGroupId = config.backendGroupId;
    this._description = config.description;
    this._folderId = config.folderId;
    this._id = config.id;
    this._labels = config.labels;
    this._name = config.name;
    this._grpcBackend.internalValue = config.grpcBackend;
    this._httpBackend.internalValue = config.httpBackend;
    this._sessionAffinity.internalValue = config.sessionAffinity;
    this._streamBackend.internalValue = config.streamBackend;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // backend_group_id - computed: true, optional: true, required: false
  private _backendGroupId?: string; 
  public get backendGroupId() {
    return this.getStringAttribute('backend_group_id');
  }
  public set backendGroupId(value: string) {
    this._backendGroupId = value;
  }
  public resetBackendGroupId() {
    this._backendGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backendGroupIdInput() {
    return this._backendGroupId;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

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

  // folder_id - computed: true, optional: true, required: false
  private _folderId?: string; 
  public get folderId() {
    return this.getStringAttribute('folder_id');
  }
  public set folderId(value: string) {
    this._folderId = value;
  }
  public resetFolderId() {
    this._folderId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get folderIdInput() {
    return this._folderId;
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

  // labels - computed: true, optional: true, required: false
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

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // grpc_backend - computed: false, optional: true, required: false
  private _grpcBackend = new DataYandexAlbBackendGroupGrpcBackendList(this, "grpc_backend", false);
  public get grpcBackend() {
    return this._grpcBackend;
  }
  public putGrpcBackend(value: DataYandexAlbBackendGroupGrpcBackend[] | cdktf.IResolvable) {
    this._grpcBackend.internalValue = value;
  }
  public resetGrpcBackend() {
    this._grpcBackend.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get grpcBackendInput() {
    return this._grpcBackend.internalValue;
  }

  // http_backend - computed: false, optional: true, required: false
  private _httpBackend = new DataYandexAlbBackendGroupHttpBackendList(this, "http_backend", false);
  public get httpBackend() {
    return this._httpBackend;
  }
  public putHttpBackend(value: DataYandexAlbBackendGroupHttpBackend[] | cdktf.IResolvable) {
    this._httpBackend.internalValue = value;
  }
  public resetHttpBackend() {
    this._httpBackend.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpBackendInput() {
    return this._httpBackend.internalValue;
  }

  // session_affinity - computed: false, optional: true, required: false
  private _sessionAffinity = new DataYandexAlbBackendGroupSessionAffinityOutputReference(this, "session_affinity");
  public get sessionAffinity() {
    return this._sessionAffinity;
  }
  public putSessionAffinity(value: DataYandexAlbBackendGroupSessionAffinity) {
    this._sessionAffinity.internalValue = value;
  }
  public resetSessionAffinity() {
    this._sessionAffinity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionAffinityInput() {
    return this._sessionAffinity.internalValue;
  }

  // stream_backend - computed: false, optional: true, required: false
  private _streamBackend = new DataYandexAlbBackendGroupStreamBackendList(this, "stream_backend", false);
  public get streamBackend() {
    return this._streamBackend;
  }
  public putStreamBackend(value: DataYandexAlbBackendGroupStreamBackend[] | cdktf.IResolvable) {
    this._streamBackend.internalValue = value;
  }
  public resetStreamBackend() {
    this._streamBackend.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get streamBackendInput() {
    return this._streamBackend.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      backend_group_id: cdktf.stringToTerraform(this._backendGroupId),
      description: cdktf.stringToTerraform(this._description),
      folder_id: cdktf.stringToTerraform(this._folderId),
      id: cdktf.stringToTerraform(this._id),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      name: cdktf.stringToTerraform(this._name),
      grpc_backend: cdktf.listMapper(dataYandexAlbBackendGroupGrpcBackendToTerraform, true)(this._grpcBackend.internalValue),
      http_backend: cdktf.listMapper(dataYandexAlbBackendGroupHttpBackendToTerraform, true)(this._httpBackend.internalValue),
      session_affinity: dataYandexAlbBackendGroupSessionAffinityToTerraform(this._sessionAffinity.internalValue),
      stream_backend: cdktf.listMapper(dataYandexAlbBackendGroupStreamBackendToTerraform, true)(this._streamBackend.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      backend_group_id: {
        value: cdktf.stringToHclTerraform(this._backendGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      folder_id: {
        value: cdktf.stringToHclTerraform(this._folderId),
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
      grpc_backend: {
        value: cdktf.listMapperHcl(dataYandexAlbBackendGroupGrpcBackendToHclTerraform, true)(this._grpcBackend.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataYandexAlbBackendGroupGrpcBackendList",
      },
      http_backend: {
        value: cdktf.listMapperHcl(dataYandexAlbBackendGroupHttpBackendToHclTerraform, true)(this._httpBackend.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataYandexAlbBackendGroupHttpBackendList",
      },
      session_affinity: {
        value: dataYandexAlbBackendGroupSessionAffinityToHclTerraform(this._sessionAffinity.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataYandexAlbBackendGroupSessionAffinityList",
      },
      stream_backend: {
        value: cdktf.listMapperHcl(dataYandexAlbBackendGroupStreamBackendToHclTerraform, true)(this._streamBackend.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataYandexAlbBackendGroupStreamBackendList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
