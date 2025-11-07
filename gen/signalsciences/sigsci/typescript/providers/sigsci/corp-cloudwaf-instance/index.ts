// https://registry.terraform.io/providers/signalsciences/sigsci/3.7.1/docs/resources/corp_cloudwaf_instance
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CorpCloudwafInstanceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Friendly description to identify a CloudWAF instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/signalsciences/sigsci/3.7.1/docs/resources/corp_cloudwaf_instance#description CorpCloudwafInstance#description}
  */
  readonly description: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/signalsciences/sigsci/3.7.1/docs/resources/corp_cloudwaf_instance#id CorpCloudwafInstance#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Friendly name to identify a CloudWAF instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/signalsciences/sigsci/3.7.1/docs/resources/corp_cloudwaf_instance#name CorpCloudwafInstance#name}
  */
  readonly name: string;
  /**
  * Region the CloudWAF Instance is being deployed to. (Supported region: "us-east-1", "us-west-1", "af-south-1", "ap-northeast-1", "ap-northeast-2", "ap-south-1", "ap-southeast-1", "ap-southeast-2", "ca-central-1", "eu-central-1", "eu-north-1", "eu-west-1", "eu-west-2", "eu-west-3", "sa-east-1", "us-east-2", "us-west-2").
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/signalsciences/sigsci/3.7.1/docs/resources/corp_cloudwaf_instance#region CorpCloudwafInstance#region}
  */
  readonly region: string;
  /**
  * TLS minimum version. Versions Available: "1.0", "1.2".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/signalsciences/sigsci/3.7.1/docs/resources/corp_cloudwaf_instance#tls_min_version CorpCloudwafInstance#tls_min_version}
  */
  readonly tlsMinVersion: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/signalsciences/sigsci/3.7.1/docs/resources/corp_cloudwaf_instance#use_uploaded_certificates CorpCloudwafInstance#use_uploaded_certificates}
  */
  readonly useUploadedCertificates: boolean | cdktf.IResolvable;
  /**
  * workspace_configs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/signalsciences/sigsci/3.7.1/docs/resources/corp_cloudwaf_instance#workspace_configs CorpCloudwafInstance#workspace_configs}
  */
  readonly workspaceConfigs: CorpCloudwafInstanceWorkspaceConfigs[] | cdktf.IResolvable;
}
export interface CorpCloudwafInstanceDeploymentEgressIps {
}

export function corpCloudwafInstanceDeploymentEgressIpsToTerraform(struct?: CorpCloudwafInstanceDeploymentEgressIps): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function corpCloudwafInstanceDeploymentEgressIpsToHclTerraform(struct?: CorpCloudwafInstanceDeploymentEgressIps): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class CorpCloudwafInstanceDeploymentEgressIpsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): CorpCloudwafInstanceDeploymentEgressIps | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CorpCloudwafInstanceDeploymentEgressIps | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ip - computed: true, optional: false, required: false
  public get ip() {
    return this.getStringAttribute('ip');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }
}

export class CorpCloudwafInstanceDeploymentEgressIpsList extends cdktf.ComplexList {

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
  public get(index: number): CorpCloudwafInstanceDeploymentEgressIpsOutputReference {
    return new CorpCloudwafInstanceDeploymentEgressIpsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CorpCloudwafInstanceDeployment {
}

export function corpCloudwafInstanceDeploymentToTerraform(struct?: CorpCloudwafInstanceDeployment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function corpCloudwafInstanceDeploymentToHclTerraform(struct?: CorpCloudwafInstanceDeployment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class CorpCloudwafInstanceDeploymentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): CorpCloudwafInstanceDeployment | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CorpCloudwafInstanceDeployment | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // dns_entry - computed: true, optional: false, required: false
  public get dnsEntry() {
    return this.getStringAttribute('dns_entry');
  }

  // egress_ips - computed: true, optional: false, required: false
  private _egressIps = new CorpCloudwafInstanceDeploymentEgressIpsList(this, "egress_ips", true);
  public get egressIps() {
    return this._egressIps;
  }

  // message - computed: true, optional: false, required: false
  public get message() {
    return this.getStringAttribute('message');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }
}

export class CorpCloudwafInstanceDeploymentList extends cdktf.ComplexList {

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
  public get(index: number): CorpCloudwafInstanceDeploymentOutputReference {
    return new CorpCloudwafInstanceDeploymentOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CorpCloudwafInstanceWorkspaceConfigsRoutes {
  /**
  * List of certificate IDs in string associated with request URI or domains. IDs will be available in certificate GET request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/signalsciences/sigsci/3.7.1/docs/resources/corp_cloudwaf_instance#certificate_ids CorpCloudwafInstance#certificate_ids}
  */
  readonly certificateIds?: string[];
  /**
  * If enabled, this will allow open TCP connections to be reused (default: true)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/signalsciences/sigsci/3.7.1/docs/resources/corp_cloudwaf_instance#connection_pooling CorpCloudwafInstance#connection_pooling}
  */
  readonly connectionPooling?: boolean | cdktf.IResolvable;
  /**
  * List of domain or request URIs, up to 100 entries.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/signalsciences/sigsci/3.7.1/docs/resources/corp_cloudwaf_instance#domains CorpCloudwafInstance#domains}
  */
  readonly domains: string[];
  /**
  * Origin server URI.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/signalsciences/sigsci/3.7.1/docs/resources/corp_cloudwaf_instance#origin CorpCloudwafInstance#origin}
  */
  readonly origin: string;
  /**
  * Pass the client supplied host header through to the upstream (including the upstream TLS handshake for use with SNI and certificate validation). If using Heroku or Server Name Indications (SNI), this must be disabled (default: false).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/signalsciences/sigsci/3.7.1/docs/resources/corp_cloudwaf_instance#pass_host_header CorpCloudwafInstance#pass_host_header}
  */
  readonly passHostHeader?: boolean | cdktf.IResolvable;
  /**
  * If true, will trust proxy headers coming into the agent. If false, will ignore and drop those headers (default: false)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/signalsciences/sigsci/3.7.1/docs/resources/corp_cloudwaf_instance#trust_proxy_headers CorpCloudwafInstance#trust_proxy_headers}
  */
  readonly trustProxyHeaders?: boolean | cdktf.IResolvable;
}

export function corpCloudwafInstanceWorkspaceConfigsRoutesToTerraform(struct?: CorpCloudwafInstanceWorkspaceConfigsRoutes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    certificate_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.certificateIds),
    connection_pooling: cdktf.booleanToTerraform(struct!.connectionPooling),
    domains: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.domains),
    origin: cdktf.stringToTerraform(struct!.origin),
    pass_host_header: cdktf.booleanToTerraform(struct!.passHostHeader),
    trust_proxy_headers: cdktf.booleanToTerraform(struct!.trustProxyHeaders),
  }
}


export function corpCloudwafInstanceWorkspaceConfigsRoutesToHclTerraform(struct?: CorpCloudwafInstanceWorkspaceConfigsRoutes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    certificate_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.certificateIds),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    connection_pooling: {
      value: cdktf.booleanToHclTerraform(struct!.connectionPooling),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    domains: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.domains),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    origin: {
      value: cdktf.stringToHclTerraform(struct!.origin),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pass_host_header: {
      value: cdktf.booleanToHclTerraform(struct!.passHostHeader),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    trust_proxy_headers: {
      value: cdktf.booleanToHclTerraform(struct!.trustProxyHeaders),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CorpCloudwafInstanceWorkspaceConfigsRoutesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CorpCloudwafInstanceWorkspaceConfigsRoutes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._certificateIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificateIds = this._certificateIds;
    }
    if (this._connectionPooling !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionPooling = this._connectionPooling;
    }
    if (this._domains !== undefined) {
      hasAnyValues = true;
      internalValueResult.domains = this._domains;
    }
    if (this._origin !== undefined) {
      hasAnyValues = true;
      internalValueResult.origin = this._origin;
    }
    if (this._passHostHeader !== undefined) {
      hasAnyValues = true;
      internalValueResult.passHostHeader = this._passHostHeader;
    }
    if (this._trustProxyHeaders !== undefined) {
      hasAnyValues = true;
      internalValueResult.trustProxyHeaders = this._trustProxyHeaders;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CorpCloudwafInstanceWorkspaceConfigsRoutes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._certificateIds = undefined;
      this._connectionPooling = undefined;
      this._domains = undefined;
      this._origin = undefined;
      this._passHostHeader = undefined;
      this._trustProxyHeaders = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._certificateIds = value.certificateIds;
      this._connectionPooling = value.connectionPooling;
      this._domains = value.domains;
      this._origin = value.origin;
      this._passHostHeader = value.passHostHeader;
      this._trustProxyHeaders = value.trustProxyHeaders;
    }
  }

  // certificate_ids - computed: false, optional: true, required: false
  private _certificateIds?: string[]; 
  public get certificateIds() {
    return cdktf.Fn.tolist(this.getListAttribute('certificate_ids'));
  }
  public set certificateIds(value: string[]) {
    this._certificateIds = value;
  }
  public resetCertificateIds() {
    this._certificateIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateIdsInput() {
    return this._certificateIds;
  }

  // connection_pooling - computed: false, optional: true, required: false
  private _connectionPooling?: boolean | cdktf.IResolvable; 
  public get connectionPooling() {
    return this.getBooleanAttribute('connection_pooling');
  }
  public set connectionPooling(value: boolean | cdktf.IResolvable) {
    this._connectionPooling = value;
  }
  public resetConnectionPooling() {
    this._connectionPooling = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionPoolingInput() {
    return this._connectionPooling;
  }

  // domains - computed: false, optional: false, required: true
  private _domains?: string[]; 
  public get domains() {
    return cdktf.Fn.tolist(this.getListAttribute('domains'));
  }
  public set domains(value: string[]) {
    this._domains = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainsInput() {
    return this._domains;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // origin - computed: false, optional: false, required: true
  private _origin?: string; 
  public get origin() {
    return this.getStringAttribute('origin');
  }
  public set origin(value: string) {
    this._origin = value;
  }
  // Temporarily expose input value. Use with caution.
  public get originInput() {
    return this._origin;
  }

  // pass_host_header - computed: false, optional: true, required: false
  private _passHostHeader?: boolean | cdktf.IResolvable; 
  public get passHostHeader() {
    return this.getBooleanAttribute('pass_host_header');
  }
  public set passHostHeader(value: boolean | cdktf.IResolvable) {
    this._passHostHeader = value;
  }
  public resetPassHostHeader() {
    this._passHostHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passHostHeaderInput() {
    return this._passHostHeader;
  }

  // trust_proxy_headers - computed: false, optional: true, required: false
  private _trustProxyHeaders?: boolean | cdktf.IResolvable; 
  public get trustProxyHeaders() {
    return this.getBooleanAttribute('trust_proxy_headers');
  }
  public set trustProxyHeaders(value: boolean | cdktf.IResolvable) {
    this._trustProxyHeaders = value;
  }
  public resetTrustProxyHeaders() {
    this._trustProxyHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trustProxyHeadersInput() {
    return this._trustProxyHeaders;
  }
}

export class CorpCloudwafInstanceWorkspaceConfigsRoutesList extends cdktf.ComplexList {
  public internalValue? : CorpCloudwafInstanceWorkspaceConfigsRoutes[] | cdktf.IResolvable

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
  public get(index: number): CorpCloudwafInstanceWorkspaceConfigsRoutesOutputReference {
    return new CorpCloudwafInstanceWorkspaceConfigsRoutesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CorpCloudwafInstanceWorkspaceConfigs {
  /**
  * Specify the request header containing the client IP address, available when InstanceLocation is set to "advanced". Default: "X-Forwarded-For".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/signalsciences/sigsci/3.7.1/docs/resources/corp_cloudwaf_instance#client_ip_header CorpCloudwafInstance#client_ip_header}
  */
  readonly clientIpHeader?: string;
  /**
  * Set instance location to "direct" or "advanced".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/signalsciences/sigsci/3.7.1/docs/resources/corp_cloudwaf_instance#instance_location CorpCloudwafInstance#instance_location}
  */
  readonly instanceLocation: string;
  /**
  * Specify the protocol or protocols required. ex. ["http", "https"], ["https"].
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/signalsciences/sigsci/3.7.1/docs/resources/corp_cloudwaf_instance#listener_protocols CorpCloudwafInstance#listener_protocols}
  */
  readonly listenerProtocols: string[];
  /**
  * Site name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/signalsciences/sigsci/3.7.1/docs/resources/corp_cloudwaf_instance#site_name CorpCloudwafInstance#site_name}
  */
  readonly siteName: string;
  /**
  * routes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/signalsciences/sigsci/3.7.1/docs/resources/corp_cloudwaf_instance#routes CorpCloudwafInstance#routes}
  */
  readonly routes: CorpCloudwafInstanceWorkspaceConfigsRoutes[] | cdktf.IResolvable;
}

export function corpCloudwafInstanceWorkspaceConfigsToTerraform(struct?: CorpCloudwafInstanceWorkspaceConfigs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_ip_header: cdktf.stringToTerraform(struct!.clientIpHeader),
    instance_location: cdktf.stringToTerraform(struct!.instanceLocation),
    listener_protocols: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.listenerProtocols),
    site_name: cdktf.stringToTerraform(struct!.siteName),
    routes: cdktf.listMapper(corpCloudwafInstanceWorkspaceConfigsRoutesToTerraform, true)(struct!.routes),
  }
}


export function corpCloudwafInstanceWorkspaceConfigsToHclTerraform(struct?: CorpCloudwafInstanceWorkspaceConfigs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    client_ip_header: {
      value: cdktf.stringToHclTerraform(struct!.clientIpHeader),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    instance_location: {
      value: cdktf.stringToHclTerraform(struct!.instanceLocation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    listener_protocols: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.listenerProtocols),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    site_name: {
      value: cdktf.stringToHclTerraform(struct!.siteName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    routes: {
      value: cdktf.listMapperHcl(corpCloudwafInstanceWorkspaceConfigsRoutesToHclTerraform, true)(struct!.routes),
      isBlock: true,
      type: "set",
      storageClassType: "CorpCloudwafInstanceWorkspaceConfigsRoutesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CorpCloudwafInstanceWorkspaceConfigsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CorpCloudwafInstanceWorkspaceConfigs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientIpHeader !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientIpHeader = this._clientIpHeader;
    }
    if (this._instanceLocation !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceLocation = this._instanceLocation;
    }
    if (this._listenerProtocols !== undefined) {
      hasAnyValues = true;
      internalValueResult.listenerProtocols = this._listenerProtocols;
    }
    if (this._siteName !== undefined) {
      hasAnyValues = true;
      internalValueResult.siteName = this._siteName;
    }
    if (this._routes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.routes = this._routes?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CorpCloudwafInstanceWorkspaceConfigs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clientIpHeader = undefined;
      this._instanceLocation = undefined;
      this._listenerProtocols = undefined;
      this._siteName = undefined;
      this._routes.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clientIpHeader = value.clientIpHeader;
      this._instanceLocation = value.instanceLocation;
      this._listenerProtocols = value.listenerProtocols;
      this._siteName = value.siteName;
      this._routes.internalValue = value.routes;
    }
  }

  // client_ip_header - computed: false, optional: true, required: false
  private _clientIpHeader?: string; 
  public get clientIpHeader() {
    return this.getStringAttribute('client_ip_header');
  }
  public set clientIpHeader(value: string) {
    this._clientIpHeader = value;
  }
  public resetClientIpHeader() {
    this._clientIpHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIpHeaderInput() {
    return this._clientIpHeader;
  }

  // instance_location - computed: false, optional: false, required: true
  private _instanceLocation?: string; 
  public get instanceLocation() {
    return this.getStringAttribute('instance_location');
  }
  public set instanceLocation(value: string) {
    this._instanceLocation = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceLocationInput() {
    return this._instanceLocation;
  }

  // listener_protocols - computed: false, optional: false, required: true
  private _listenerProtocols?: string[]; 
  public get listenerProtocols() {
    return cdktf.Fn.tolist(this.getListAttribute('listener_protocols'));
  }
  public set listenerProtocols(value: string[]) {
    this._listenerProtocols = value;
  }
  // Temporarily expose input value. Use with caution.
  public get listenerProtocolsInput() {
    return this._listenerProtocols;
  }

  // site_name - computed: false, optional: false, required: true
  private _siteName?: string; 
  public get siteName() {
    return this.getStringAttribute('site_name');
  }
  public set siteName(value: string) {
    this._siteName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get siteNameInput() {
    return this._siteName;
  }

  // routes - computed: false, optional: false, required: true
  private _routes = new CorpCloudwafInstanceWorkspaceConfigsRoutesList(this, "routes", true);
  public get routes() {
    return this._routes;
  }
  public putRoutes(value: CorpCloudwafInstanceWorkspaceConfigsRoutes[] | cdktf.IResolvable) {
    this._routes.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get routesInput() {
    return this._routes.internalValue;
  }
}

export class CorpCloudwafInstanceWorkspaceConfigsList extends cdktf.ComplexList {
  public internalValue? : CorpCloudwafInstanceWorkspaceConfigs[] | cdktf.IResolvable

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
  public get(index: number): CorpCloudwafInstanceWorkspaceConfigsOutputReference {
    return new CorpCloudwafInstanceWorkspaceConfigsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/signalsciences/sigsci/3.7.1/docs/resources/corp_cloudwaf_instance sigsci_corp_cloudwaf_instance}
*/
export class CorpCloudwafInstance extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sigsci_corp_cloudwaf_instance";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CorpCloudwafInstance resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CorpCloudwafInstance to import
  * @param importFromId The id of the existing CorpCloudwafInstance that should be imported. Refer to the {@link https://registry.terraform.io/providers/signalsciences/sigsci/3.7.1/docs/resources/corp_cloudwaf_instance#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CorpCloudwafInstance to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sigsci_corp_cloudwaf_instance", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/signalsciences/sigsci/3.7.1/docs/resources/corp_cloudwaf_instance sigsci_corp_cloudwaf_instance} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CorpCloudwafInstanceConfig
  */
  public constructor(scope: Construct, id: string, config: CorpCloudwafInstanceConfig) {
    super(scope, id, {
      terraformResourceType: 'sigsci_corp_cloudwaf_instance',
      terraformGeneratorMetadata: {
        providerName: 'sigsci',
        providerVersion: '3.7.1'
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
    this._region = config.region;
    this._tlsMinVersion = config.tlsMinVersion;
    this._useUploadedCertificates = config.useUploadedCertificates;
    this._workspaceConfigs.internalValue = config.workspaceConfigs;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // deployment - computed: true, optional: false, required: false
  private _deployment = new CorpCloudwafInstanceDeploymentList(this, "deployment", false);
  public get deployment() {
    return this._deployment;
  }

  // description - computed: false, optional: false, required: true
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
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

  // region - computed: false, optional: false, required: true
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // tls_min_version - computed: false, optional: false, required: true
  private _tlsMinVersion?: string; 
  public get tlsMinVersion() {
    return this.getStringAttribute('tls_min_version');
  }
  public set tlsMinVersion(value: string) {
    this._tlsMinVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsMinVersionInput() {
    return this._tlsMinVersion;
  }

  // use_uploaded_certificates - computed: false, optional: false, required: true
  private _useUploadedCertificates?: boolean | cdktf.IResolvable; 
  public get useUploadedCertificates() {
    return this.getBooleanAttribute('use_uploaded_certificates');
  }
  public set useUploadedCertificates(value: boolean | cdktf.IResolvable) {
    this._useUploadedCertificates = value;
  }
  // Temporarily expose input value. Use with caution.
  public get useUploadedCertificatesInput() {
    return this._useUploadedCertificates;
  }

  // workspace_configs - computed: false, optional: false, required: true
  private _workspaceConfigs = new CorpCloudwafInstanceWorkspaceConfigsList(this, "workspace_configs", true);
  public get workspaceConfigs() {
    return this._workspaceConfigs;
  }
  public putWorkspaceConfigs(value: CorpCloudwafInstanceWorkspaceConfigs[] | cdktf.IResolvable) {
    this._workspaceConfigs.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get workspaceConfigsInput() {
    return this._workspaceConfigs.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      region: cdktf.stringToTerraform(this._region),
      tls_min_version: cdktf.stringToTerraform(this._tlsMinVersion),
      use_uploaded_certificates: cdktf.booleanToTerraform(this._useUploadedCertificates),
      workspace_configs: cdktf.listMapper(corpCloudwafInstanceWorkspaceConfigsToTerraform, true)(this._workspaceConfigs.internalValue),
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
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tls_min_version: {
        value: cdktf.stringToHclTerraform(this._tlsMinVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      use_uploaded_certificates: {
        value: cdktf.booleanToHclTerraform(this._useUploadedCertificates),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      workspace_configs: {
        value: cdktf.listMapperHcl(corpCloudwafInstanceWorkspaceConfigsToHclTerraform, true)(this._workspaceConfigs.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "CorpCloudwafInstanceWorkspaceConfigsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
