// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/tem_gateway
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TemGatewayConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/tem_gateway#id TemGateway#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * ingress block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/tem_gateway#ingress TemGateway#ingress}
  */
  readonly ingress?: TemGatewayIngress;
}
export interface TemGatewayIngressRulesHttpPathsBackend {
  /**
  * backend name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/tem_gateway#service_name TemGateway#service_name}
  */
  readonly serviceName: string;
  /**
  * backend port.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/tem_gateway#service_port TemGateway#service_port}
  */
  readonly servicePort: number;
}

export function temGatewayIngressRulesHttpPathsBackendToTerraform(struct?: TemGatewayIngressRulesHttpPathsBackendOutputReference | TemGatewayIngressRulesHttpPathsBackend): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    service_name: cdktf.stringToTerraform(struct!.serviceName),
    service_port: cdktf.numberToTerraform(struct!.servicePort),
  }
}


export function temGatewayIngressRulesHttpPathsBackendToHclTerraform(struct?: TemGatewayIngressRulesHttpPathsBackendOutputReference | TemGatewayIngressRulesHttpPathsBackend): any {
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
    service_port: {
      value: cdktf.numberToHclTerraform(struct!.servicePort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TemGatewayIngressRulesHttpPathsBackendOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TemGatewayIngressRulesHttpPathsBackend | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._serviceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceName = this._serviceName;
    }
    if (this._servicePort !== undefined) {
      hasAnyValues = true;
      internalValueResult.servicePort = this._servicePort;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TemGatewayIngressRulesHttpPathsBackend | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._serviceName = undefined;
      this._servicePort = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._serviceName = value.serviceName;
      this._servicePort = value.servicePort;
    }
  }

  // service_name - computed: false, optional: false, required: true
  private _serviceName?: string; 
  public get serviceName() {
    return this.getStringAttribute('service_name');
  }
  public set serviceName(value: string) {
    this._serviceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceNameInput() {
    return this._serviceName;
  }

  // service_port - computed: false, optional: false, required: true
  private _servicePort?: number; 
  public get servicePort() {
    return this.getNumberAttribute('service_port');
  }
  public set servicePort(value: number) {
    this._servicePort = value;
  }
  // Temporarily expose input value. Use with caution.
  public get servicePortInput() {
    return this._servicePort;
  }
}
export interface TemGatewayIngressRulesHttpPaths {
  /**
  * path.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/tem_gateway#path TemGateway#path}
  */
  readonly path: string;
  /**
  * backend block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/tem_gateway#backend TemGateway#backend}
  */
  readonly backend: TemGatewayIngressRulesHttpPathsBackend;
}

export function temGatewayIngressRulesHttpPathsToTerraform(struct?: TemGatewayIngressRulesHttpPaths | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    path: cdktf.stringToTerraform(struct!.path),
    backend: temGatewayIngressRulesHttpPathsBackendToTerraform(struct!.backend),
  }
}


export function temGatewayIngressRulesHttpPathsToHclTerraform(struct?: TemGatewayIngressRulesHttpPaths | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    backend: {
      value: temGatewayIngressRulesHttpPathsBackendToHclTerraform(struct!.backend),
      isBlock: true,
      type: "list",
      storageClassType: "TemGatewayIngressRulesHttpPathsBackendList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TemGatewayIngressRulesHttpPathsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TemGatewayIngressRulesHttpPaths | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._backend?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.backend = this._backend?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TemGatewayIngressRulesHttpPaths | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._path = undefined;
      this._backend.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._path = value.path;
      this._backend.internalValue = value.backend;
    }
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

  // backend - computed: false, optional: false, required: true
  private _backend = new TemGatewayIngressRulesHttpPathsBackendOutputReference(this, "backend");
  public get backend() {
    return this._backend;
  }
  public putBackend(value: TemGatewayIngressRulesHttpPathsBackend) {
    this._backend.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get backendInput() {
    return this._backend.internalValue;
  }
}

export class TemGatewayIngressRulesHttpPathsList extends cdktf.ComplexList {
  public internalValue? : TemGatewayIngressRulesHttpPaths[] | cdktf.IResolvable

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
  public get(index: number): TemGatewayIngressRulesHttpPathsOutputReference {
    return new TemGatewayIngressRulesHttpPathsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TemGatewayIngressRulesHttp {
  /**
  * paths block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/tem_gateway#paths TemGateway#paths}
  */
  readonly paths: TemGatewayIngressRulesHttpPaths[] | cdktf.IResolvable;
}

export function temGatewayIngressRulesHttpToTerraform(struct?: TemGatewayIngressRulesHttpOutputReference | TemGatewayIngressRulesHttp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    paths: cdktf.listMapper(temGatewayIngressRulesHttpPathsToTerraform, true)(struct!.paths),
  }
}


export function temGatewayIngressRulesHttpToHclTerraform(struct?: TemGatewayIngressRulesHttpOutputReference | TemGatewayIngressRulesHttp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    paths: {
      value: cdktf.listMapperHcl(temGatewayIngressRulesHttpPathsToHclTerraform, true)(struct!.paths),
      isBlock: true,
      type: "list",
      storageClassType: "TemGatewayIngressRulesHttpPathsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TemGatewayIngressRulesHttpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TemGatewayIngressRulesHttp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._paths?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.paths = this._paths?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TemGatewayIngressRulesHttp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._paths.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._paths.internalValue = value.paths;
    }
  }

  // paths - computed: false, optional: false, required: true
  private _paths = new TemGatewayIngressRulesHttpPathsList(this, "paths", false);
  public get paths() {
    return this._paths;
  }
  public putPaths(value: TemGatewayIngressRulesHttpPaths[] | cdktf.IResolvable) {
    this._paths.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathsInput() {
    return this._paths.internalValue;
  }
}
export interface TemGatewayIngressRules {
  /**
  * host name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/tem_gateway#host TemGateway#host}
  */
  readonly host?: string;
  /**
  * protocol.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/tem_gateway#protocol TemGateway#protocol}
  */
  readonly protocol?: string;
  /**
  * http block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/tem_gateway#http TemGateway#http}
  */
  readonly http: TemGatewayIngressRulesHttp;
}

export function temGatewayIngressRulesToTerraform(struct?: TemGatewayIngressRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host: cdktf.stringToTerraform(struct!.host),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    http: temGatewayIngressRulesHttpToTerraform(struct!.http),
  }
}


export function temGatewayIngressRulesToHclTerraform(struct?: TemGatewayIngressRules | cdktf.IResolvable): any {
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
    protocol: {
      value: cdktf.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    http: {
      value: temGatewayIngressRulesHttpToHclTerraform(struct!.http),
      isBlock: true,
      type: "list",
      storageClassType: "TemGatewayIngressRulesHttpList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TemGatewayIngressRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TemGatewayIngressRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._http?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.http = this._http?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TemGatewayIngressRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._host = undefined;
      this._protocol = undefined;
      this._http.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._host = value.host;
      this._protocol = value.protocol;
      this._http.internalValue = value.http;
    }
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

  // protocol - computed: false, optional: true, required: false
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  public resetProtocol() {
    this._protocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // http - computed: false, optional: false, required: true
  private _http = new TemGatewayIngressRulesHttpOutputReference(this, "http");
  public get http() {
    return this._http;
  }
  public putHttp(value: TemGatewayIngressRulesHttp) {
    this._http.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get httpInput() {
    return this._http.internalValue;
  }
}

export class TemGatewayIngressRulesList extends cdktf.ComplexList {
  public internalValue? : TemGatewayIngressRules[] | cdktf.IResolvable

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
  public get(index: number): TemGatewayIngressRulesOutputReference {
    return new TemGatewayIngressRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TemGatewayIngressTls {
  /**
  * certificate ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/tem_gateway#certificate_id TemGateway#certificate_id}
  */
  readonly certificateId: string;
  /**
  * host names.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/tem_gateway#hosts TemGateway#hosts}
  */
  readonly hosts: string[];
  /**
  * secret name, if you use a certificate, you don't need to fill in this field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/tem_gateway#secret_name TemGateway#secret_name}
  */
  readonly secretName?: string;
}

export function temGatewayIngressTlsToTerraform(struct?: TemGatewayIngressTls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    certificate_id: cdktf.stringToTerraform(struct!.certificateId),
    hosts: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.hosts),
    secret_name: cdktf.stringToTerraform(struct!.secretName),
  }
}


export function temGatewayIngressTlsToHclTerraform(struct?: TemGatewayIngressTls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    certificate_id: {
      value: cdktf.stringToHclTerraform(struct!.certificateId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hosts: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.hosts),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    secret_name: {
      value: cdktf.stringToHclTerraform(struct!.secretName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TemGatewayIngressTlsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TemGatewayIngressTls | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._certificateId !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificateId = this._certificateId;
    }
    if (this._hosts !== undefined) {
      hasAnyValues = true;
      internalValueResult.hosts = this._hosts;
    }
    if (this._secretName !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretName = this._secretName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TemGatewayIngressTls | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._certificateId = undefined;
      this._hosts = undefined;
      this._secretName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._certificateId = value.certificateId;
      this._hosts = value.hosts;
      this._secretName = value.secretName;
    }
  }

  // certificate_id - computed: false, optional: false, required: true
  private _certificateId?: string; 
  public get certificateId() {
    return this.getStringAttribute('certificate_id');
  }
  public set certificateId(value: string) {
    this._certificateId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateIdInput() {
    return this._certificateId;
  }

  // hosts - computed: false, optional: false, required: true
  private _hosts?: string[]; 
  public get hosts() {
    return cdktf.Fn.tolist(this.getListAttribute('hosts'));
  }
  public set hosts(value: string[]) {
    this._hosts = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostsInput() {
    return this._hosts;
  }

  // secret_name - computed: true, optional: true, required: false
  private _secretName?: string; 
  public get secretName() {
    return this.getStringAttribute('secret_name');
  }
  public set secretName(value: string) {
    this._secretName = value;
  }
  public resetSecretName() {
    this._secretName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretNameInput() {
    return this._secretName;
  }
}

export class TemGatewayIngressTlsList extends cdktf.ComplexList {
  public internalValue? : TemGatewayIngressTls[] | cdktf.IResolvable

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
  public get(index: number): TemGatewayIngressTlsOutputReference {
    return new TemGatewayIngressTlsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TemGatewayIngress {
  /**
  * ip version, support IPV4.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/tem_gateway#address_ip_version TemGateway#address_ip_version}
  */
  readonly addressIpVersion: string;
  /**
  * related CLB ID, support binding existing clb, does not support modification.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/tem_gateway#clb_id TemGateway#clb_id}
  */
  readonly clbId?: string;
  /**
  * environment ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/tem_gateway#environment_id TemGateway#environment_id}
  */
  readonly environmentId: string;
  /**
  * gateway name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/tem_gateway#ingress_name TemGateway#ingress_name}
  */
  readonly ingressName: string;
  /**
  * mixing HTTP and HTTPS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/tem_gateway#mixed TemGateway#mixed}
  */
  readonly mixed: boolean | cdktf.IResolvable;
  /**
  * redirect mode, support AUTO and NONE.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/tem_gateway#rewrite_type TemGateway#rewrite_type}
  */
  readonly rewriteType?: string;
  /**
  * rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/tem_gateway#rules TemGateway#rules}
  */
  readonly rules: TemGatewayIngressRules[] | cdktf.IResolvable;
  /**
  * tls block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/tem_gateway#tls TemGateway#tls}
  */
  readonly tls?: TemGatewayIngressTls[] | cdktf.IResolvable;
}

export function temGatewayIngressToTerraform(struct?: TemGatewayIngressOutputReference | TemGatewayIngress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address_ip_version: cdktf.stringToTerraform(struct!.addressIpVersion),
    clb_id: cdktf.stringToTerraform(struct!.clbId),
    environment_id: cdktf.stringToTerraform(struct!.environmentId),
    ingress_name: cdktf.stringToTerraform(struct!.ingressName),
    mixed: cdktf.booleanToTerraform(struct!.mixed),
    rewrite_type: cdktf.stringToTerraform(struct!.rewriteType),
    rules: cdktf.listMapper(temGatewayIngressRulesToTerraform, true)(struct!.rules),
    tls: cdktf.listMapper(temGatewayIngressTlsToTerraform, true)(struct!.tls),
  }
}


export function temGatewayIngressToHclTerraform(struct?: TemGatewayIngressOutputReference | TemGatewayIngress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    address_ip_version: {
      value: cdktf.stringToHclTerraform(struct!.addressIpVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    clb_id: {
      value: cdktf.stringToHclTerraform(struct!.clbId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    environment_id: {
      value: cdktf.stringToHclTerraform(struct!.environmentId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ingress_name: {
      value: cdktf.stringToHclTerraform(struct!.ingressName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mixed: {
      value: cdktf.booleanToHclTerraform(struct!.mixed),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    rewrite_type: {
      value: cdktf.stringToHclTerraform(struct!.rewriteType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rules: {
      value: cdktf.listMapperHcl(temGatewayIngressRulesToHclTerraform, true)(struct!.rules),
      isBlock: true,
      type: "list",
      storageClassType: "TemGatewayIngressRulesList",
    },
    tls: {
      value: cdktf.listMapperHcl(temGatewayIngressTlsToHclTerraform, true)(struct!.tls),
      isBlock: true,
      type: "list",
      storageClassType: "TemGatewayIngressTlsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TemGatewayIngressOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TemGatewayIngress | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addressIpVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.addressIpVersion = this._addressIpVersion;
    }
    if (this._clbId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clbId = this._clbId;
    }
    if (this._environmentId !== undefined) {
      hasAnyValues = true;
      internalValueResult.environmentId = this._environmentId;
    }
    if (this._ingressName !== undefined) {
      hasAnyValues = true;
      internalValueResult.ingressName = this._ingressName;
    }
    if (this._mixed !== undefined) {
      hasAnyValues = true;
      internalValueResult.mixed = this._mixed;
    }
    if (this._rewriteType !== undefined) {
      hasAnyValues = true;
      internalValueResult.rewriteType = this._rewriteType;
    }
    if (this._rules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rules = this._rules?.internalValue;
    }
    if (this._tls?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tls = this._tls?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TemGatewayIngress | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._addressIpVersion = undefined;
      this._clbId = undefined;
      this._environmentId = undefined;
      this._ingressName = undefined;
      this._mixed = undefined;
      this._rewriteType = undefined;
      this._rules.internalValue = undefined;
      this._tls.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._addressIpVersion = value.addressIpVersion;
      this._clbId = value.clbId;
      this._environmentId = value.environmentId;
      this._ingressName = value.ingressName;
      this._mixed = value.mixed;
      this._rewriteType = value.rewriteType;
      this._rules.internalValue = value.rules;
      this._tls.internalValue = value.tls;
    }
  }

  // address_ip_version - computed: false, optional: false, required: true
  private _addressIpVersion?: string; 
  public get addressIpVersion() {
    return this.getStringAttribute('address_ip_version');
  }
  public set addressIpVersion(value: string) {
    this._addressIpVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get addressIpVersionInput() {
    return this._addressIpVersion;
  }

  // clb_id - computed: true, optional: true, required: false
  private _clbId?: string; 
  public get clbId() {
    return this.getStringAttribute('clb_id');
  }
  public set clbId(value: string) {
    this._clbId = value;
  }
  public resetClbId() {
    this._clbId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clbIdInput() {
    return this._clbId;
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // environment_id - computed: false, optional: false, required: true
  private _environmentId?: string; 
  public get environmentId() {
    return this.getStringAttribute('environment_id');
  }
  public set environmentId(value: string) {
    this._environmentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentIdInput() {
    return this._environmentId;
  }

  // ingress_name - computed: false, optional: false, required: true
  private _ingressName?: string; 
  public get ingressName() {
    return this.getStringAttribute('ingress_name');
  }
  public set ingressName(value: string) {
    this._ingressName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ingressNameInput() {
    return this._ingressName;
  }

  // mixed - computed: false, optional: false, required: true
  private _mixed?: boolean | cdktf.IResolvable; 
  public get mixed() {
    return this.getBooleanAttribute('mixed');
  }
  public set mixed(value: boolean | cdktf.IResolvable) {
    this._mixed = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mixedInput() {
    return this._mixed;
  }

  // rewrite_type - computed: false, optional: true, required: false
  private _rewriteType?: string; 
  public get rewriteType() {
    return this.getStringAttribute('rewrite_type');
  }
  public set rewriteType(value: string) {
    this._rewriteType = value;
  }
  public resetRewriteType() {
    this._rewriteType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rewriteTypeInput() {
    return this._rewriteType;
  }

  // vip - computed: true, optional: false, required: false
  public get vip() {
    return this.getStringAttribute('vip');
  }

  // rules - computed: false, optional: false, required: true
  private _rules = new TemGatewayIngressRulesList(this, "rules", false);
  public get rules() {
    return this._rules;
  }
  public putRules(value: TemGatewayIngressRules[] | cdktf.IResolvable) {
    this._rules.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesInput() {
    return this._rules.internalValue;
  }

  // tls - computed: false, optional: true, required: false
  private _tls = new TemGatewayIngressTlsList(this, "tls", false);
  public get tls() {
    return this._tls;
  }
  public putTls(value: TemGatewayIngressTls[] | cdktf.IResolvable) {
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

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/tem_gateway tencentcloud_tem_gateway}
*/
export class TemGateway extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_tem_gateway";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a TemGateway resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TemGateway to import
  * @param importFromId The id of the existing TemGateway that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/tem_gateway#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TemGateway to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_tem_gateway", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.39/docs/resources/tem_gateway tencentcloud_tem_gateway} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TemGatewayConfig = {}
  */
  public constructor(scope: Construct, id: string, config: TemGatewayConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_tem_gateway',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.39',
        providerVersionConstraint: '1.82.39'
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
    this._ingress.internalValue = config.ingress;
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

  // ingress - computed: false, optional: true, required: false
  private _ingress = new TemGatewayIngressOutputReference(this, "ingress");
  public get ingress() {
    return this._ingress;
  }
  public putIngress(value: TemGatewayIngress) {
    this._ingress.internalValue = value;
  }
  public resetIngress() {
    this._ingress.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ingressInput() {
    return this._ingress.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      ingress: temGatewayIngressToTerraform(this._ingress.internalValue),
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
      ingress: {
        value: temGatewayIngressToHclTerraform(this._ingress.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TemGatewayIngressList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
