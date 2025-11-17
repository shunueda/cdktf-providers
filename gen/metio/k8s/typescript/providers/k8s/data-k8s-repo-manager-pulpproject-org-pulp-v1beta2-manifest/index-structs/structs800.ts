import * as cdktf from 'cdktf';
import { DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWebLivenessProbeExec,
dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWebLivenessProbeExecToTerraform,
dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWebLivenessProbeExecToHclTerraform,
DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWebLivenessProbeExecOutputReference,
DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWebLivenessProbeGrpc,
dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWebLivenessProbeGrpcToTerraform,
dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWebLivenessProbeGrpcToHclTerraform,
DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWebLivenessProbeGrpcOutputReference,
DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWebEnvVars,
dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWebEnvVarsToTerraform,
dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWebEnvVarsToHclTerraform,
DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWebEnvVarsList,
DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecContent,
dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecContentToTerraform,
dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecContentToHclTerraform,
DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecContentOutputReference,
DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecDatabase,
dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecDatabaseToTerraform,
dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecDatabaseToHclTerraform,
DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecDatabaseOutputReference,
DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecLdap,
dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecLdapToTerraform,
dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecLdapToHclTerraform,
DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecLdapOutputReference,
DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecMigrationJob,
dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecMigrationJobToTerraform,
dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecMigrationJobToHclTerraform,
DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecMigrationJobOutputReference,
DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecSigningJob,
dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecSigningJobToTerraform,
dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecSigningJobToHclTerraform,
DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecSigningJobOutputReference,
DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecTelemetry,
dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecTelemetryToTerraform,
dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecTelemetryToHclTerraform,
DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecTelemetryOutputReference } from './structs400'
import { DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecAdminPasswordJob,
dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecAdminPasswordJobToTerraform,
dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecAdminPasswordJobToHclTerraform,
DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecAdminPasswordJobOutputReference,
DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecApi,
dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecApiToTerraform,
dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecApiToHclTerraform,
DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecApiOutputReference,
DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecCache,
dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecCacheToTerraform,
dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecCacheToHclTerraform,
DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecCacheOutputReference } from './structs0'
export interface DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWebLivenessProbeHttpGetHttpHeaders {
  /**
  * The header field name. This will be canonicalized upon output, so case-variant names will be understood as the same header.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/repo_manager_pulpproject_org_pulp_v1beta2_manifest#name DataK8SRepoManagerPulpprojectOrgPulpV1Beta2Manifest#name}
  */
  readonly name: string;
  /**
  * The header field value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/repo_manager_pulpproject_org_pulp_v1beta2_manifest#value DataK8SRepoManagerPulpprojectOrgPulpV1Beta2Manifest#value}
  */
  readonly value: string;
}

export function dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWebLivenessProbeHttpGetHttpHeadersToTerraform(struct?: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWebLivenessProbeHttpGetHttpHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWebLivenessProbeHttpGetHttpHeadersToHclTerraform(struct?: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWebLivenessProbeHttpGetHttpHeaders | cdktf.IResolvable): any {
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

export class DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWebLivenessProbeHttpGetHttpHeadersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWebLivenessProbeHttpGetHttpHeaders | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWebLivenessProbeHttpGetHttpHeaders | cdktf.IResolvable | undefined) {
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

export class DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWebLivenessProbeHttpGetHttpHeadersList extends cdktf.ComplexList {
  public internalValue? : DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWebLivenessProbeHttpGetHttpHeaders[] | cdktf.IResolvable

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
  public get(index: number): DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWebLivenessProbeHttpGetHttpHeadersOutputReference {
    return new DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWebLivenessProbeHttpGetHttpHeadersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWebLivenessProbeHttpGet {
  /**
  * Host name to connect to, defaults to the pod IP. You probably want to set 'Host' in httpHeaders instead.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/repo_manager_pulpproject_org_pulp_v1beta2_manifest#host DataK8SRepoManagerPulpprojectOrgPulpV1Beta2Manifest#host}
  */
  readonly host?: string;
  /**
  * Custom headers to set in the request. HTTP allows repeated headers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/repo_manager_pulpproject_org_pulp_v1beta2_manifest#http_headers DataK8SRepoManagerPulpprojectOrgPulpV1Beta2Manifest#http_headers}
  */
  readonly httpHeaders?: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWebLivenessProbeHttpGetHttpHeaders[] | cdktf.IResolvable;
  /**
  * Path to access on the HTTP server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/repo_manager_pulpproject_org_pulp_v1beta2_manifest#path DataK8SRepoManagerPulpprojectOrgPulpV1Beta2Manifest#path}
  */
  readonly path?: string;
  /**
  * Name or number of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/repo_manager_pulpproject_org_pulp_v1beta2_manifest#port DataK8SRepoManagerPulpprojectOrgPulpV1Beta2Manifest#port}
  */
  readonly port: string;
  /**
  * Scheme to use for connecting to the host. Defaults to HTTP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/repo_manager_pulpproject_org_pulp_v1beta2_manifest#scheme DataK8SRepoManagerPulpprojectOrgPulpV1Beta2Manifest#scheme}
  */
  readonly scheme?: string;
}

export function dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWebLivenessProbeHttpGetToTerraform(struct?: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWebLivenessProbeHttpGet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host: cdktf.stringToTerraform(struct!.host),
    http_headers: cdktf.listMapper(dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWebLivenessProbeHttpGetHttpHeadersToTerraform, false)(struct!.httpHeaders),
    path: cdktf.stringToTerraform(struct!.path),
    port: cdktf.stringToTerraform(struct!.port),
    scheme: cdktf.stringToTerraform(struct!.scheme),
  }
}


export function dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWebLivenessProbeHttpGetToHclTerraform(struct?: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWebLivenessProbeHttpGet | cdktf.IResolvable): any {
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
    http_headers: {
      value: cdktf.listMapperHcl(dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWebLivenessProbeHttpGetHttpHeadersToHclTerraform, false)(struct!.httpHeaders),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWebLivenessProbeHttpGetHttpHeadersList",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.stringToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scheme: {
      value: cdktf.stringToHclTerraform(struct!.scheme),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWebLivenessProbeHttpGetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWebLivenessProbeHttpGet | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._httpHeaders?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpHeaders = this._httpHeaders?.internalValue;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._scheme !== undefined) {
      hasAnyValues = true;
      internalValueResult.scheme = this._scheme;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWebLivenessProbeHttpGet | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._host = undefined;
      this._httpHeaders.internalValue = undefined;
      this._path = undefined;
      this._port = undefined;
      this._scheme = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._host = value.host;
      this._httpHeaders.internalValue = value.httpHeaders;
      this._path = value.path;
      this._port = value.port;
      this._scheme = value.scheme;
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

  // http_headers - computed: false, optional: true, required: false
  private _httpHeaders = new DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWebLivenessProbeHttpGetHttpHeadersList(this, "http_headers", false);
  public get httpHeaders() {
    return this._httpHeaders;
  }
  public putHttpHeaders(value: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWebLivenessProbeHttpGetHttpHeaders[] | cdktf.IResolvable) {
    this._httpHeaders.internalValue = value;
  }
  public resetHttpHeaders() {
    this._httpHeaders.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpHeadersInput() {
    return this._httpHeaders.internalValue;
  }

  // path - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // port - computed: false, optional: false, required: true
  private _port?: string; 
  public get port() {
    return this.getStringAttribute('port');
  }
  public set port(value: string) {
    this._port = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // scheme - computed: false, optional: true, required: false
  private _scheme?: string; 
  public get scheme() {
    return this.getStringAttribute('scheme');
  }
  public set scheme(value: string) {
    this._scheme = value;
  }
  public resetScheme() {
    this._scheme = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemeInput() {
    return this._scheme;
  }
}
export interface DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWebLivenessProbeTcpSocket {
  /**
  * Optional: Host name to connect to, defaults to the pod IP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/repo_manager_pulpproject_org_pulp_v1beta2_manifest#host DataK8SRepoManagerPulpprojectOrgPulpV1Beta2Manifest#host}
  */
  readonly host?: string;
  /**
  * Number or name of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/repo_manager_pulpproject_org_pulp_v1beta2_manifest#port DataK8SRepoManagerPulpprojectOrgPulpV1Beta2Manifest#port}
  */
  readonly port: string;
}

export function dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWebLivenessProbeTcpSocketToTerraform(struct?: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWebLivenessProbeTcpSocket | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host: cdktf.stringToTerraform(struct!.host),
    port: cdktf.stringToTerraform(struct!.port),
  }
}


export function dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWebLivenessProbeTcpSocketToHclTerraform(struct?: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWebLivenessProbeTcpSocket | cdktf.IResolvable): any {
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
    port: {
      value: cdktf.stringToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWebLivenessProbeTcpSocketOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWebLivenessProbeTcpSocket | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWebLivenessProbeTcpSocket | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._host = undefined;
      this._port = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._host = value.host;
      this._port = value.port;
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

  // port - computed: false, optional: false, required: true
  private _port?: string; 
  public get port() {
    return this.getStringAttribute('port');
  }
  public set port(value: string) {
    this._port = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }
}
export interface DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWebLivenessProbe {
  /**
  * Exec specifies the action to take.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/repo_manager_pulpproject_org_pulp_v1beta2_manifest#exec DataK8SRepoManagerPulpprojectOrgPulpV1Beta2Manifest#exec}
  */
  readonly exec?: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWebLivenessProbeExec;
  /**
  * Minimum consecutive failures for the probe to be considered failed after having succeeded. Defaults to 3. Minimum value is 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/repo_manager_pulpproject_org_pulp_v1beta2_manifest#failure_threshold DataK8SRepoManagerPulpprojectOrgPulpV1Beta2Manifest#failure_threshold}
  */
  readonly failureThreshold?: number;
  /**
  * GRPC specifies an action involving a GRPC port.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/repo_manager_pulpproject_org_pulp_v1beta2_manifest#grpc DataK8SRepoManagerPulpprojectOrgPulpV1Beta2Manifest#grpc}
  */
  readonly grpc?: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWebLivenessProbeGrpc;
  /**
  * HTTPGet specifies the http request to perform.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/repo_manager_pulpproject_org_pulp_v1beta2_manifest#http_get DataK8SRepoManagerPulpprojectOrgPulpV1Beta2Manifest#http_get}
  */
  readonly httpGet?: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWebLivenessProbeHttpGet;
  /**
  * Number of seconds after the container has started before liveness probes are initiated. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/repo_manager_pulpproject_org_pulp_v1beta2_manifest#initial_delay_seconds DataK8SRepoManagerPulpprojectOrgPulpV1Beta2Manifest#initial_delay_seconds}
  */
  readonly initialDelaySeconds?: number;
  /**
  * How often (in seconds) to perform the probe. Default to 10 seconds. Minimum value is 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/repo_manager_pulpproject_org_pulp_v1beta2_manifest#period_seconds DataK8SRepoManagerPulpprojectOrgPulpV1Beta2Manifest#period_seconds}
  */
  readonly periodSeconds?: number;
  /**
  * Minimum consecutive successes for the probe to be considered successful after having failed. Defaults to 1. Must be 1 for liveness and startup. Minimum value is 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/repo_manager_pulpproject_org_pulp_v1beta2_manifest#success_threshold DataK8SRepoManagerPulpprojectOrgPulpV1Beta2Manifest#success_threshold}
  */
  readonly successThreshold?: number;
  /**
  * TCPSocket specifies an action involving a TCP port.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/repo_manager_pulpproject_org_pulp_v1beta2_manifest#tcp_socket DataK8SRepoManagerPulpprojectOrgPulpV1Beta2Manifest#tcp_socket}
  */
  readonly tcpSocket?: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWebLivenessProbeTcpSocket;
  /**
  * Optional duration in seconds the pod needs to terminate gracefully upon probe failure. The grace period is the duration in seconds after the processes running in the pod are sent a termination signal and the time when the processes are forcibly halted with a kill signal. Set this value longer than the expected cleanup time for your process. If this value is nil, the pod's terminationGracePeriodSeconds will be used. Otherwise, this value overrides the value provided by the pod spec. Value must be non-negative integer. The value zero indicates stop immediately via the kill signal (no opportunity to shut down). This is a beta field and requires enabling ProbeTerminationGracePeriod feature gate. Minimum value is 1. spec.terminationGracePeriodSeconds is used if unset.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/repo_manager_pulpproject_org_pulp_v1beta2_manifest#termination_grace_period_seconds DataK8SRepoManagerPulpprojectOrgPulpV1Beta2Manifest#termination_grace_period_seconds}
  */
  readonly terminationGracePeriodSeconds?: number;
  /**
  * Number of seconds after which the probe times out. Defaults to 1 second. Minimum value is 1. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/repo_manager_pulpproject_org_pulp_v1beta2_manifest#timeout_seconds DataK8SRepoManagerPulpprojectOrgPulpV1Beta2Manifest#timeout_seconds}
  */
  readonly timeoutSeconds?: number;
}

export function dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWebLivenessProbeToTerraform(struct?: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWebLivenessProbe | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exec: dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWebLivenessProbeExecToTerraform(struct!.exec),
    failure_threshold: cdktf.numberToTerraform(struct!.failureThreshold),
    grpc: dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWebLivenessProbeGrpcToTerraform(struct!.grpc),
    http_get: dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWebLivenessProbeHttpGetToTerraform(struct!.httpGet),
    initial_delay_seconds: cdktf.numberToTerraform(struct!.initialDelaySeconds),
    period_seconds: cdktf.numberToTerraform(struct!.periodSeconds),
    success_threshold: cdktf.numberToTerraform(struct!.successThreshold),
    tcp_socket: dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWebLivenessProbeTcpSocketToTerraform(struct!.tcpSocket),
    termination_grace_period_seconds: cdktf.numberToTerraform(struct!.terminationGracePeriodSeconds),
    timeout_seconds: cdktf.numberToTerraform(struct!.timeoutSeconds),
  }
}


export function dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWebLivenessProbeToHclTerraform(struct?: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWebLivenessProbe | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exec: {
      value: dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWebLivenessProbeExecToHclTerraform(struct!.exec),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWebLivenessProbeExec",
    },
    failure_threshold: {
      value: cdktf.numberToHclTerraform(struct!.failureThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    grpc: {
      value: dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWebLivenessProbeGrpcToHclTerraform(struct!.grpc),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWebLivenessProbeGrpc",
    },
    http_get: {
      value: dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWebLivenessProbeHttpGetToHclTerraform(struct!.httpGet),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWebLivenessProbeHttpGet",
    },
    initial_delay_seconds: {
      value: cdktf.numberToHclTerraform(struct!.initialDelaySeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    period_seconds: {
      value: cdktf.numberToHclTerraform(struct!.periodSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    success_threshold: {
      value: cdktf.numberToHclTerraform(struct!.successThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_socket: {
      value: dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWebLivenessProbeTcpSocketToHclTerraform(struct!.tcpSocket),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWebLivenessProbeTcpSocket",
    },
    termination_grace_period_seconds: {
      value: cdktf.numberToHclTerraform(struct!.terminationGracePeriodSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    timeout_seconds: {
      value: cdktf.numberToHclTerraform(struct!.timeoutSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWebLivenessProbeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWebLivenessProbe | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exec?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.exec = this._exec?.internalValue;
    }
    if (this._failureThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.failureThreshold = this._failureThreshold;
    }
    if (this._grpc?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.grpc = this._grpc?.internalValue;
    }
    if (this._httpGet?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpGet = this._httpGet?.internalValue;
    }
    if (this._initialDelaySeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.initialDelaySeconds = this._initialDelaySeconds;
    }
    if (this._periodSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.periodSeconds = this._periodSeconds;
    }
    if (this._successThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.successThreshold = this._successThreshold;
    }
    if (this._tcpSocket?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpSocket = this._tcpSocket?.internalValue;
    }
    if (this._terminationGracePeriodSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.terminationGracePeriodSeconds = this._terminationGracePeriodSeconds;
    }
    if (this._timeoutSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeoutSeconds = this._timeoutSeconds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWebLivenessProbe | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._exec.internalValue = undefined;
      this._failureThreshold = undefined;
      this._grpc.internalValue = undefined;
      this._httpGet.internalValue = undefined;
      this._initialDelaySeconds = undefined;
      this._periodSeconds = undefined;
      this._successThreshold = undefined;
      this._tcpSocket.internalValue = undefined;
      this._terminationGracePeriodSeconds = undefined;
      this._timeoutSeconds = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._exec.internalValue = value.exec;
      this._failureThreshold = value.failureThreshold;
      this._grpc.internalValue = value.grpc;
      this._httpGet.internalValue = value.httpGet;
      this._initialDelaySeconds = value.initialDelaySeconds;
      this._periodSeconds = value.periodSeconds;
      this._successThreshold = value.successThreshold;
      this._tcpSocket.internalValue = value.tcpSocket;
      this._terminationGracePeriodSeconds = value.terminationGracePeriodSeconds;
      this._timeoutSeconds = value.timeoutSeconds;
    }
  }

  // exec - computed: false, optional: true, required: false
  private _exec = new DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWebLivenessProbeExecOutputReference(this, "exec");
  public get exec() {
    return this._exec;
  }
  public putExec(value: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWebLivenessProbeExec) {
    this._exec.internalValue = value;
  }
  public resetExec() {
    this._exec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get execInput() {
    return this._exec.internalValue;
  }

  // failure_threshold - computed: false, optional: true, required: false
  private _failureThreshold?: number; 
  public get failureThreshold() {
    return this.getNumberAttribute('failure_threshold');
  }
  public set failureThreshold(value: number) {
    this._failureThreshold = value;
  }
  public resetFailureThreshold() {
    this._failureThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failureThresholdInput() {
    return this._failureThreshold;
  }

  // grpc - computed: false, optional: true, required: false
  private _grpc = new DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWebLivenessProbeGrpcOutputReference(this, "grpc");
  public get grpc() {
    return this._grpc;
  }
  public putGrpc(value: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWebLivenessProbeGrpc) {
    this._grpc.internalValue = value;
  }
  public resetGrpc() {
    this._grpc.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get grpcInput() {
    return this._grpc.internalValue;
  }

  // http_get - computed: false, optional: true, required: false
  private _httpGet = new DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWebLivenessProbeHttpGetOutputReference(this, "http_get");
  public get httpGet() {
    return this._httpGet;
  }
  public putHttpGet(value: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWebLivenessProbeHttpGet) {
    this._httpGet.internalValue = value;
  }
  public resetHttpGet() {
    this._httpGet.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpGetInput() {
    return this._httpGet.internalValue;
  }

  // initial_delay_seconds - computed: false, optional: true, required: false
  private _initialDelaySeconds?: number; 
  public get initialDelaySeconds() {
    return this.getNumberAttribute('initial_delay_seconds');
  }
  public set initialDelaySeconds(value: number) {
    this._initialDelaySeconds = value;
  }
  public resetInitialDelaySeconds() {
    this._initialDelaySeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initialDelaySecondsInput() {
    return this._initialDelaySeconds;
  }

  // period_seconds - computed: false, optional: true, required: false
  private _periodSeconds?: number; 
  public get periodSeconds() {
    return this.getNumberAttribute('period_seconds');
  }
  public set periodSeconds(value: number) {
    this._periodSeconds = value;
  }
  public resetPeriodSeconds() {
    this._periodSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get periodSecondsInput() {
    return this._periodSeconds;
  }

  // success_threshold - computed: false, optional: true, required: false
  private _successThreshold?: number; 
  public get successThreshold() {
    return this.getNumberAttribute('success_threshold');
  }
  public set successThreshold(value: number) {
    this._successThreshold = value;
  }
  public resetSuccessThreshold() {
    this._successThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get successThresholdInput() {
    return this._successThreshold;
  }

  // tcp_socket - computed: false, optional: true, required: false
  private _tcpSocket = new DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWebLivenessProbeTcpSocketOutputReference(this, "tcp_socket");
  public get tcpSocket() {
    return this._tcpSocket;
  }
  public putTcpSocket(value: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWebLivenessProbeTcpSocket) {
    this._tcpSocket.internalValue = value;
  }
  public resetTcpSocket() {
    this._tcpSocket.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpSocketInput() {
    return this._tcpSocket.internalValue;
  }

  // termination_grace_period_seconds - computed: false, optional: true, required: false
  private _terminationGracePeriodSeconds?: number; 
  public get terminationGracePeriodSeconds() {
    return this.getNumberAttribute('termination_grace_period_seconds');
  }
  public set terminationGracePeriodSeconds(value: number) {
    this._terminationGracePeriodSeconds = value;
  }
  public resetTerminationGracePeriodSeconds() {
    this._terminationGracePeriodSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get terminationGracePeriodSecondsInput() {
    return this._terminationGracePeriodSeconds;
  }

  // timeout_seconds - computed: false, optional: true, required: false
  private _timeoutSeconds?: number; 
  public get timeoutSeconds() {
    return this.getNumberAttribute('timeout_seconds');
  }
  public set timeoutSeconds(value: number) {
    this._timeoutSeconds = value;
  }
  public resetTimeoutSeconds() {
    this._timeoutSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutSecondsInput() {
    return this._timeoutSeconds;
  }
}
export interface DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWebPdbSelectorMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/repo_manager_pulpproject_org_pulp_v1beta2_manifest#key DataK8SRepoManagerPulpprojectOrgPulpV1Beta2Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/repo_manager_pulpproject_org_pulp_v1beta2_manifest#operator DataK8SRepoManagerPulpprojectOrgPulpV1Beta2Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/repo_manager_pulpproject_org_pulp_v1beta2_manifest#values DataK8SRepoManagerPulpprojectOrgPulpV1Beta2Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWebPdbSelectorMatchExpressionsToTerraform(struct?: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWebPdbSelectorMatchExpressions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWebPdbSelectorMatchExpressionsToHclTerraform(struct?: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWebPdbSelectorMatchExpressions | cdktf.IResolvable): any {
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
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
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

export class DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWebPdbSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWebPdbSelectorMatchExpressions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWebPdbSelectorMatchExpressions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._operator = undefined;
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
      this._operator = value.operator;
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

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
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

export class DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWebPdbSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWebPdbSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWebPdbSelectorMatchExpressionsOutputReference {
    return new DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWebPdbSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWebPdbSelector {
  /**
  * matchExpressions is a list of label selector requirements. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/repo_manager_pulpproject_org_pulp_v1beta2_manifest#match_expressions DataK8SRepoManagerPulpprojectOrgPulpV1Beta2Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWebPdbSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/repo_manager_pulpproject_org_pulp_v1beta2_manifest#match_labels DataK8SRepoManagerPulpprojectOrgPulpV1Beta2Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWebPdbSelectorToTerraform(struct?: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWebPdbSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWebPdbSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWebPdbSelectorToHclTerraform(struct?: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWebPdbSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWebPdbSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWebPdbSelectorMatchExpressionsList",
    },
    match_labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.matchLabels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWebPdbSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWebPdbSelector | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchExpressions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchExpressions = this._matchExpressions?.internalValue;
    }
    if (this._matchLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchLabels = this._matchLabels;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWebPdbSelector | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchExpressions.internalValue = undefined;
      this._matchLabels = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matchExpressions.internalValue = value.matchExpressions;
      this._matchLabels = value.matchLabels;
    }
  }

  // match_expressions - computed: false, optional: true, required: false
  private _matchExpressions = new DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWebPdbSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWebPdbSelectorMatchExpressions[] | cdktf.IResolvable) {
    this._matchExpressions.internalValue = value;
  }
  public resetMatchExpressions() {
    this._matchExpressions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchExpressionsInput() {
    return this._matchExpressions.internalValue;
  }

  // match_labels - computed: false, optional: true, required: false
  private _matchLabels?: { [key: string]: string }; 
  public get matchLabels() {
    return this.getStringMapAttribute('match_labels');
  }
  public set matchLabels(value: { [key: string]: string }) {
    this._matchLabels = value;
  }
  public resetMatchLabels() {
    this._matchLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchLabelsInput() {
    return this._matchLabels;
  }
}
export interface DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWebPdb {
  /**
  * An eviction is allowed if at most 'maxUnavailable' pods selected by 'selector' are unavailable after the eviction, i.e. even in absence of the evicted pod. For example, one can prevent all voluntary evictions by specifying 0. This is a mutually exclusive setting with 'minAvailable'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/repo_manager_pulpproject_org_pulp_v1beta2_manifest#max_unavailable DataK8SRepoManagerPulpprojectOrgPulpV1Beta2Manifest#max_unavailable}
  */
  readonly maxUnavailable?: string;
  /**
  * An eviction is allowed if at least 'minAvailable' pods selected by 'selector' will still be available after the eviction, i.e. even in the absence of the evicted pod. So for example you can prevent all voluntary evictions by specifying '100%'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/repo_manager_pulpproject_org_pulp_v1beta2_manifest#min_available DataK8SRepoManagerPulpprojectOrgPulpV1Beta2Manifest#min_available}
  */
  readonly minAvailable?: string;
  /**
  * Label query over pods whose evictions are managed by the disruption budget. A null selector will match no pods, while an empty ({}) selector will select all pods within the namespace.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/repo_manager_pulpproject_org_pulp_v1beta2_manifest#selector DataK8SRepoManagerPulpprojectOrgPulpV1Beta2Manifest#selector}
  */
  readonly selector?: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWebPdbSelector;
  /**
  * UnhealthyPodEvictionPolicy defines the criteria for when unhealthy pods should be considered for eviction. Current implementation considers healthy pods, as pods that have status.conditions item with type='Ready',status='True'. Valid policies are IfHealthyBudget and AlwaysAllow. If no policy is specified, the default behavior will be used, which corresponds to the IfHealthyBudget policy. IfHealthyBudget policy means that running pods (status.phase='Running'), but not yet healthy can be evicted only if the guarded application is not disrupted (status.currentHealthy is at least equal to status.desiredHealthy). Healthy pods will be subject to the PDB for eviction. AlwaysAllow policy means that all running pods (status.phase='Running'), but not yet healthy are considered disrupted and can be evicted regardless of whether the criteria in a PDB is met. This means perspective running pods of a disrupted application might not get a chance to become healthy. Healthy pods will be subject to the PDB for eviction. Additional policies may be added in the future. Clients making eviction decisions should disallow eviction of unhealthy pods if they encounter an unrecognized policy in this field. This field is beta-level. The eviction API uses this field when the feature gate PDBUnhealthyPodEvictionPolicy is enabled (enabled by default).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/repo_manager_pulpproject_org_pulp_v1beta2_manifest#unhealthy_pod_eviction_policy DataK8SRepoManagerPulpprojectOrgPulpV1Beta2Manifest#unhealthy_pod_eviction_policy}
  */
  readonly unhealthyPodEvictionPolicy?: string;
}

export function dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWebPdbToTerraform(struct?: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWebPdb | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_unavailable: cdktf.stringToTerraform(struct!.maxUnavailable),
    min_available: cdktf.stringToTerraform(struct!.minAvailable),
    selector: dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWebPdbSelectorToTerraform(struct!.selector),
    unhealthy_pod_eviction_policy: cdktf.stringToTerraform(struct!.unhealthyPodEvictionPolicy),
  }
}


export function dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWebPdbToHclTerraform(struct?: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWebPdb | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_unavailable: {
      value: cdktf.stringToHclTerraform(struct!.maxUnavailable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    min_available: {
      value: cdktf.stringToHclTerraform(struct!.minAvailable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    selector: {
      value: dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWebPdbSelectorToHclTerraform(struct!.selector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWebPdbSelector",
    },
    unhealthy_pod_eviction_policy: {
      value: cdktf.stringToHclTerraform(struct!.unhealthyPodEvictionPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWebPdbOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWebPdb | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxUnavailable !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxUnavailable = this._maxUnavailable;
    }
    if (this._minAvailable !== undefined) {
      hasAnyValues = true;
      internalValueResult.minAvailable = this._minAvailable;
    }
    if (this._selector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.selector = this._selector?.internalValue;
    }
    if (this._unhealthyPodEvictionPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.unhealthyPodEvictionPolicy = this._unhealthyPodEvictionPolicy;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWebPdb | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maxUnavailable = undefined;
      this._minAvailable = undefined;
      this._selector.internalValue = undefined;
      this._unhealthyPodEvictionPolicy = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maxUnavailable = value.maxUnavailable;
      this._minAvailable = value.minAvailable;
      this._selector.internalValue = value.selector;
      this._unhealthyPodEvictionPolicy = value.unhealthyPodEvictionPolicy;
    }
  }

  // max_unavailable - computed: false, optional: true, required: false
  private _maxUnavailable?: string; 
  public get maxUnavailable() {
    return this.getStringAttribute('max_unavailable');
  }
  public set maxUnavailable(value: string) {
    this._maxUnavailable = value;
  }
  public resetMaxUnavailable() {
    this._maxUnavailable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxUnavailableInput() {
    return this._maxUnavailable;
  }

  // min_available - computed: false, optional: true, required: false
  private _minAvailable?: string; 
  public get minAvailable() {
    return this.getStringAttribute('min_available');
  }
  public set minAvailable(value: string) {
    this._minAvailable = value;
  }
  public resetMinAvailable() {
    this._minAvailable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minAvailableInput() {
    return this._minAvailable;
  }

  // selector - computed: false, optional: true, required: false
  private _selector = new DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWebPdbSelectorOutputReference(this, "selector");
  public get selector() {
    return this._selector;
  }
  public putSelector(value: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWebPdbSelector) {
    this._selector.internalValue = value;
  }
  public resetSelector() {
    this._selector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorInput() {
    return this._selector.internalValue;
  }

  // unhealthy_pod_eviction_policy - computed: false, optional: true, required: false
  private _unhealthyPodEvictionPolicy?: string; 
  public get unhealthyPodEvictionPolicy() {
    return this.getStringAttribute('unhealthy_pod_eviction_policy');
  }
  public set unhealthyPodEvictionPolicy(value: string) {
    this._unhealthyPodEvictionPolicy = value;
  }
  public resetUnhealthyPodEvictionPolicy() {
    this._unhealthyPodEvictionPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unhealthyPodEvictionPolicyInput() {
    return this._unhealthyPodEvictionPolicy;
  }
}
export interface DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWebReadinessProbeExec {
  /**
  * Command is the command line to execute inside the container, the working directory for the command is root ('/') in the container's filesystem. The command is simply exec'd, it is not run inside a shell, so traditional shell instructions ('|', etc) won't work. To use a shell, you need to explicitly call out to that shell. Exit status of 0 is treated as live/healthy and non-zero is unhealthy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/repo_manager_pulpproject_org_pulp_v1beta2_manifest#command DataK8SRepoManagerPulpprojectOrgPulpV1Beta2Manifest#command}
  */
  readonly command?: string[];
}

export function dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWebReadinessProbeExecToTerraform(struct?: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWebReadinessProbeExec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    command: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.command),
  }
}


export function dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWebReadinessProbeExecToHclTerraform(struct?: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWebReadinessProbeExec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    command: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.command),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWebReadinessProbeExecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWebReadinessProbeExec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._command !== undefined) {
      hasAnyValues = true;
      internalValueResult.command = this._command;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWebReadinessProbeExec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._command = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._command = value.command;
    }
  }

  // command - computed: false, optional: true, required: false
  private _command?: string[]; 
  public get command() {
    return this.getListAttribute('command');
  }
  public set command(value: string[]) {
    this._command = value;
  }
  public resetCommand() {
    this._command = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commandInput() {
    return this._command;
  }
}
export interface DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWebReadinessProbeGrpc {
  /**
  * Port number of the gRPC service. Number must be in the range 1 to 65535.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/repo_manager_pulpproject_org_pulp_v1beta2_manifest#port DataK8SRepoManagerPulpprojectOrgPulpV1Beta2Manifest#port}
  */
  readonly port: number;
  /**
  * Service is the name of the service to place in the gRPC HealthCheckRequest (see https://github.com/grpc/grpc/blob/master/doc/health-checking.md). If this is not specified, the default behavior is defined by gRPC.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/repo_manager_pulpproject_org_pulp_v1beta2_manifest#service DataK8SRepoManagerPulpprojectOrgPulpV1Beta2Manifest#service}
  */
  readonly service?: string;
}

export function dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWebReadinessProbeGrpcToTerraform(struct?: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWebReadinessProbeGrpc | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    port: cdktf.numberToTerraform(struct!.port),
    service: cdktf.stringToTerraform(struct!.service),
  }
}


export function dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWebReadinessProbeGrpcToHclTerraform(struct?: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWebReadinessProbeGrpc | cdktf.IResolvable): any {
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
    service: {
      value: cdktf.stringToHclTerraform(struct!.service),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWebReadinessProbeGrpcOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWebReadinessProbeGrpc | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._service !== undefined) {
      hasAnyValues = true;
      internalValueResult.service = this._service;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWebReadinessProbeGrpc | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._port = undefined;
      this._service = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._port = value.port;
      this._service = value.service;
    }
  }

  // port - computed: false, optional: false, required: true
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // service - computed: false, optional: true, required: false
  private _service?: string; 
  public get service() {
    return this.getStringAttribute('service');
  }
  public set service(value: string) {
    this._service = value;
  }
  public resetService() {
    this._service = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceInput() {
    return this._service;
  }
}
export interface DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWebReadinessProbeHttpGetHttpHeaders {
  /**
  * The header field name. This will be canonicalized upon output, so case-variant names will be understood as the same header.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/repo_manager_pulpproject_org_pulp_v1beta2_manifest#name DataK8SRepoManagerPulpprojectOrgPulpV1Beta2Manifest#name}
  */
  readonly name: string;
  /**
  * The header field value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/repo_manager_pulpproject_org_pulp_v1beta2_manifest#value DataK8SRepoManagerPulpprojectOrgPulpV1Beta2Manifest#value}
  */
  readonly value: string;
}

export function dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWebReadinessProbeHttpGetHttpHeadersToTerraform(struct?: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWebReadinessProbeHttpGetHttpHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWebReadinessProbeHttpGetHttpHeadersToHclTerraform(struct?: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWebReadinessProbeHttpGetHttpHeaders | cdktf.IResolvable): any {
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

export class DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWebReadinessProbeHttpGetHttpHeadersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWebReadinessProbeHttpGetHttpHeaders | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWebReadinessProbeHttpGetHttpHeaders | cdktf.IResolvable | undefined) {
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

export class DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWebReadinessProbeHttpGetHttpHeadersList extends cdktf.ComplexList {
  public internalValue? : DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWebReadinessProbeHttpGetHttpHeaders[] | cdktf.IResolvable

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
  public get(index: number): DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWebReadinessProbeHttpGetHttpHeadersOutputReference {
    return new DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWebReadinessProbeHttpGetHttpHeadersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWebReadinessProbeHttpGet {
  /**
  * Host name to connect to, defaults to the pod IP. You probably want to set 'Host' in httpHeaders instead.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/repo_manager_pulpproject_org_pulp_v1beta2_manifest#host DataK8SRepoManagerPulpprojectOrgPulpV1Beta2Manifest#host}
  */
  readonly host?: string;
  /**
  * Custom headers to set in the request. HTTP allows repeated headers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/repo_manager_pulpproject_org_pulp_v1beta2_manifest#http_headers DataK8SRepoManagerPulpprojectOrgPulpV1Beta2Manifest#http_headers}
  */
  readonly httpHeaders?: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWebReadinessProbeHttpGetHttpHeaders[] | cdktf.IResolvable;
  /**
  * Path to access on the HTTP server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/repo_manager_pulpproject_org_pulp_v1beta2_manifest#path DataK8SRepoManagerPulpprojectOrgPulpV1Beta2Manifest#path}
  */
  readonly path?: string;
  /**
  * Name or number of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/repo_manager_pulpproject_org_pulp_v1beta2_manifest#port DataK8SRepoManagerPulpprojectOrgPulpV1Beta2Manifest#port}
  */
  readonly port: string;
  /**
  * Scheme to use for connecting to the host. Defaults to HTTP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/repo_manager_pulpproject_org_pulp_v1beta2_manifest#scheme DataK8SRepoManagerPulpprojectOrgPulpV1Beta2Manifest#scheme}
  */
  readonly scheme?: string;
}

export function dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWebReadinessProbeHttpGetToTerraform(struct?: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWebReadinessProbeHttpGet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host: cdktf.stringToTerraform(struct!.host),
    http_headers: cdktf.listMapper(dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWebReadinessProbeHttpGetHttpHeadersToTerraform, false)(struct!.httpHeaders),
    path: cdktf.stringToTerraform(struct!.path),
    port: cdktf.stringToTerraform(struct!.port),
    scheme: cdktf.stringToTerraform(struct!.scheme),
  }
}


export function dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWebReadinessProbeHttpGetToHclTerraform(struct?: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWebReadinessProbeHttpGet | cdktf.IResolvable): any {
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
    http_headers: {
      value: cdktf.listMapperHcl(dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWebReadinessProbeHttpGetHttpHeadersToHclTerraform, false)(struct!.httpHeaders),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWebReadinessProbeHttpGetHttpHeadersList",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.stringToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scheme: {
      value: cdktf.stringToHclTerraform(struct!.scheme),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWebReadinessProbeHttpGetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWebReadinessProbeHttpGet | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._httpHeaders?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpHeaders = this._httpHeaders?.internalValue;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._scheme !== undefined) {
      hasAnyValues = true;
      internalValueResult.scheme = this._scheme;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWebReadinessProbeHttpGet | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._host = undefined;
      this._httpHeaders.internalValue = undefined;
      this._path = undefined;
      this._port = undefined;
      this._scheme = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._host = value.host;
      this._httpHeaders.internalValue = value.httpHeaders;
      this._path = value.path;
      this._port = value.port;
      this._scheme = value.scheme;
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

  // http_headers - computed: false, optional: true, required: false
  private _httpHeaders = new DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWebReadinessProbeHttpGetHttpHeadersList(this, "http_headers", false);
  public get httpHeaders() {
    return this._httpHeaders;
  }
  public putHttpHeaders(value: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWebReadinessProbeHttpGetHttpHeaders[] | cdktf.IResolvable) {
    this._httpHeaders.internalValue = value;
  }
  public resetHttpHeaders() {
    this._httpHeaders.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpHeadersInput() {
    return this._httpHeaders.internalValue;
  }

  // path - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // port - computed: false, optional: false, required: true
  private _port?: string; 
  public get port() {
    return this.getStringAttribute('port');
  }
  public set port(value: string) {
    this._port = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // scheme - computed: false, optional: true, required: false
  private _scheme?: string; 
  public get scheme() {
    return this.getStringAttribute('scheme');
  }
  public set scheme(value: string) {
    this._scheme = value;
  }
  public resetScheme() {
    this._scheme = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemeInput() {
    return this._scheme;
  }
}
export interface DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWebReadinessProbeTcpSocket {
  /**
  * Optional: Host name to connect to, defaults to the pod IP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/repo_manager_pulpproject_org_pulp_v1beta2_manifest#host DataK8SRepoManagerPulpprojectOrgPulpV1Beta2Manifest#host}
  */
  readonly host?: string;
  /**
  * Number or name of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/repo_manager_pulpproject_org_pulp_v1beta2_manifest#port DataK8SRepoManagerPulpprojectOrgPulpV1Beta2Manifest#port}
  */
  readonly port: string;
}

export function dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWebReadinessProbeTcpSocketToTerraform(struct?: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWebReadinessProbeTcpSocket | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host: cdktf.stringToTerraform(struct!.host),
    port: cdktf.stringToTerraform(struct!.port),
  }
}


export function dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWebReadinessProbeTcpSocketToHclTerraform(struct?: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWebReadinessProbeTcpSocket | cdktf.IResolvable): any {
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
    port: {
      value: cdktf.stringToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWebReadinessProbeTcpSocketOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWebReadinessProbeTcpSocket | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWebReadinessProbeTcpSocket | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._host = undefined;
      this._port = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._host = value.host;
      this._port = value.port;
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

  // port - computed: false, optional: false, required: true
  private _port?: string; 
  public get port() {
    return this.getStringAttribute('port');
  }
  public set port(value: string) {
    this._port = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }
}
export interface DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWebReadinessProbe {
  /**
  * Exec specifies the action to take.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/repo_manager_pulpproject_org_pulp_v1beta2_manifest#exec DataK8SRepoManagerPulpprojectOrgPulpV1Beta2Manifest#exec}
  */
  readonly exec?: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWebReadinessProbeExec;
  /**
  * Minimum consecutive failures for the probe to be considered failed after having succeeded. Defaults to 3. Minimum value is 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/repo_manager_pulpproject_org_pulp_v1beta2_manifest#failure_threshold DataK8SRepoManagerPulpprojectOrgPulpV1Beta2Manifest#failure_threshold}
  */
  readonly failureThreshold?: number;
  /**
  * GRPC specifies an action involving a GRPC port.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/repo_manager_pulpproject_org_pulp_v1beta2_manifest#grpc DataK8SRepoManagerPulpprojectOrgPulpV1Beta2Manifest#grpc}
  */
  readonly grpc?: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWebReadinessProbeGrpc;
  /**
  * HTTPGet specifies the http request to perform.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/repo_manager_pulpproject_org_pulp_v1beta2_manifest#http_get DataK8SRepoManagerPulpprojectOrgPulpV1Beta2Manifest#http_get}
  */
  readonly httpGet?: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWebReadinessProbeHttpGet;
  /**
  * Number of seconds after the container has started before liveness probes are initiated. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/repo_manager_pulpproject_org_pulp_v1beta2_manifest#initial_delay_seconds DataK8SRepoManagerPulpprojectOrgPulpV1Beta2Manifest#initial_delay_seconds}
  */
  readonly initialDelaySeconds?: number;
  /**
  * How often (in seconds) to perform the probe. Default to 10 seconds. Minimum value is 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/repo_manager_pulpproject_org_pulp_v1beta2_manifest#period_seconds DataK8SRepoManagerPulpprojectOrgPulpV1Beta2Manifest#period_seconds}
  */
  readonly periodSeconds?: number;
  /**
  * Minimum consecutive successes for the probe to be considered successful after having failed. Defaults to 1. Must be 1 for liveness and startup. Minimum value is 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/repo_manager_pulpproject_org_pulp_v1beta2_manifest#success_threshold DataK8SRepoManagerPulpprojectOrgPulpV1Beta2Manifest#success_threshold}
  */
  readonly successThreshold?: number;
  /**
  * TCPSocket specifies an action involving a TCP port.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/repo_manager_pulpproject_org_pulp_v1beta2_manifest#tcp_socket DataK8SRepoManagerPulpprojectOrgPulpV1Beta2Manifest#tcp_socket}
  */
  readonly tcpSocket?: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWebReadinessProbeTcpSocket;
  /**
  * Optional duration in seconds the pod needs to terminate gracefully upon probe failure. The grace period is the duration in seconds after the processes running in the pod are sent a termination signal and the time when the processes are forcibly halted with a kill signal. Set this value longer than the expected cleanup time for your process. If this value is nil, the pod's terminationGracePeriodSeconds will be used. Otherwise, this value overrides the value provided by the pod spec. Value must be non-negative integer. The value zero indicates stop immediately via the kill signal (no opportunity to shut down). This is a beta field and requires enabling ProbeTerminationGracePeriod feature gate. Minimum value is 1. spec.terminationGracePeriodSeconds is used if unset.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/repo_manager_pulpproject_org_pulp_v1beta2_manifest#termination_grace_period_seconds DataK8SRepoManagerPulpprojectOrgPulpV1Beta2Manifest#termination_grace_period_seconds}
  */
  readonly terminationGracePeriodSeconds?: number;
  /**
  * Number of seconds after which the probe times out. Defaults to 1 second. Minimum value is 1. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/repo_manager_pulpproject_org_pulp_v1beta2_manifest#timeout_seconds DataK8SRepoManagerPulpprojectOrgPulpV1Beta2Manifest#timeout_seconds}
  */
  readonly timeoutSeconds?: number;
}

export function dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWebReadinessProbeToTerraform(struct?: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWebReadinessProbe | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exec: dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWebReadinessProbeExecToTerraform(struct!.exec),
    failure_threshold: cdktf.numberToTerraform(struct!.failureThreshold),
    grpc: dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWebReadinessProbeGrpcToTerraform(struct!.grpc),
    http_get: dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWebReadinessProbeHttpGetToTerraform(struct!.httpGet),
    initial_delay_seconds: cdktf.numberToTerraform(struct!.initialDelaySeconds),
    period_seconds: cdktf.numberToTerraform(struct!.periodSeconds),
    success_threshold: cdktf.numberToTerraform(struct!.successThreshold),
    tcp_socket: dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWebReadinessProbeTcpSocketToTerraform(struct!.tcpSocket),
    termination_grace_period_seconds: cdktf.numberToTerraform(struct!.terminationGracePeriodSeconds),
    timeout_seconds: cdktf.numberToTerraform(struct!.timeoutSeconds),
  }
}


export function dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWebReadinessProbeToHclTerraform(struct?: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWebReadinessProbe | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exec: {
      value: dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWebReadinessProbeExecToHclTerraform(struct!.exec),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWebReadinessProbeExec",
    },
    failure_threshold: {
      value: cdktf.numberToHclTerraform(struct!.failureThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    grpc: {
      value: dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWebReadinessProbeGrpcToHclTerraform(struct!.grpc),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWebReadinessProbeGrpc",
    },
    http_get: {
      value: dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWebReadinessProbeHttpGetToHclTerraform(struct!.httpGet),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWebReadinessProbeHttpGet",
    },
    initial_delay_seconds: {
      value: cdktf.numberToHclTerraform(struct!.initialDelaySeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    period_seconds: {
      value: cdktf.numberToHclTerraform(struct!.periodSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    success_threshold: {
      value: cdktf.numberToHclTerraform(struct!.successThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_socket: {
      value: dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWebReadinessProbeTcpSocketToHclTerraform(struct!.tcpSocket),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWebReadinessProbeTcpSocket",
    },
    termination_grace_period_seconds: {
      value: cdktf.numberToHclTerraform(struct!.terminationGracePeriodSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    timeout_seconds: {
      value: cdktf.numberToHclTerraform(struct!.timeoutSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWebReadinessProbeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWebReadinessProbe | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exec?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.exec = this._exec?.internalValue;
    }
    if (this._failureThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.failureThreshold = this._failureThreshold;
    }
    if (this._grpc?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.grpc = this._grpc?.internalValue;
    }
    if (this._httpGet?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpGet = this._httpGet?.internalValue;
    }
    if (this._initialDelaySeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.initialDelaySeconds = this._initialDelaySeconds;
    }
    if (this._periodSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.periodSeconds = this._periodSeconds;
    }
    if (this._successThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.successThreshold = this._successThreshold;
    }
    if (this._tcpSocket?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpSocket = this._tcpSocket?.internalValue;
    }
    if (this._terminationGracePeriodSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.terminationGracePeriodSeconds = this._terminationGracePeriodSeconds;
    }
    if (this._timeoutSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeoutSeconds = this._timeoutSeconds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWebReadinessProbe | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._exec.internalValue = undefined;
      this._failureThreshold = undefined;
      this._grpc.internalValue = undefined;
      this._httpGet.internalValue = undefined;
      this._initialDelaySeconds = undefined;
      this._periodSeconds = undefined;
      this._successThreshold = undefined;
      this._tcpSocket.internalValue = undefined;
      this._terminationGracePeriodSeconds = undefined;
      this._timeoutSeconds = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._exec.internalValue = value.exec;
      this._failureThreshold = value.failureThreshold;
      this._grpc.internalValue = value.grpc;
      this._httpGet.internalValue = value.httpGet;
      this._initialDelaySeconds = value.initialDelaySeconds;
      this._periodSeconds = value.periodSeconds;
      this._successThreshold = value.successThreshold;
      this._tcpSocket.internalValue = value.tcpSocket;
      this._terminationGracePeriodSeconds = value.terminationGracePeriodSeconds;
      this._timeoutSeconds = value.timeoutSeconds;
    }
  }

  // exec - computed: false, optional: true, required: false
  private _exec = new DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWebReadinessProbeExecOutputReference(this, "exec");
  public get exec() {
    return this._exec;
  }
  public putExec(value: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWebReadinessProbeExec) {
    this._exec.internalValue = value;
  }
  public resetExec() {
    this._exec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get execInput() {
    return this._exec.internalValue;
  }

  // failure_threshold - computed: false, optional: true, required: false
  private _failureThreshold?: number; 
  public get failureThreshold() {
    return this.getNumberAttribute('failure_threshold');
  }
  public set failureThreshold(value: number) {
    this._failureThreshold = value;
  }
  public resetFailureThreshold() {
    this._failureThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failureThresholdInput() {
    return this._failureThreshold;
  }

  // grpc - computed: false, optional: true, required: false
  private _grpc = new DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWebReadinessProbeGrpcOutputReference(this, "grpc");
  public get grpc() {
    return this._grpc;
  }
  public putGrpc(value: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWebReadinessProbeGrpc) {
    this._grpc.internalValue = value;
  }
  public resetGrpc() {
    this._grpc.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get grpcInput() {
    return this._grpc.internalValue;
  }

  // http_get - computed: false, optional: true, required: false
  private _httpGet = new DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWebReadinessProbeHttpGetOutputReference(this, "http_get");
  public get httpGet() {
    return this._httpGet;
  }
  public putHttpGet(value: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWebReadinessProbeHttpGet) {
    this._httpGet.internalValue = value;
  }
  public resetHttpGet() {
    this._httpGet.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpGetInput() {
    return this._httpGet.internalValue;
  }

  // initial_delay_seconds - computed: false, optional: true, required: false
  private _initialDelaySeconds?: number; 
  public get initialDelaySeconds() {
    return this.getNumberAttribute('initial_delay_seconds');
  }
  public set initialDelaySeconds(value: number) {
    this._initialDelaySeconds = value;
  }
  public resetInitialDelaySeconds() {
    this._initialDelaySeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initialDelaySecondsInput() {
    return this._initialDelaySeconds;
  }

  // period_seconds - computed: false, optional: true, required: false
  private _periodSeconds?: number; 
  public get periodSeconds() {
    return this.getNumberAttribute('period_seconds');
  }
  public set periodSeconds(value: number) {
    this._periodSeconds = value;
  }
  public resetPeriodSeconds() {
    this._periodSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get periodSecondsInput() {
    return this._periodSeconds;
  }

  // success_threshold - computed: false, optional: true, required: false
  private _successThreshold?: number; 
  public get successThreshold() {
    return this.getNumberAttribute('success_threshold');
  }
  public set successThreshold(value: number) {
    this._successThreshold = value;
  }
  public resetSuccessThreshold() {
    this._successThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get successThresholdInput() {
    return this._successThreshold;
  }

  // tcp_socket - computed: false, optional: true, required: false
  private _tcpSocket = new DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWebReadinessProbeTcpSocketOutputReference(this, "tcp_socket");
  public get tcpSocket() {
    return this._tcpSocket;
  }
  public putTcpSocket(value: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWebReadinessProbeTcpSocket) {
    this._tcpSocket.internalValue = value;
  }
  public resetTcpSocket() {
    this._tcpSocket.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpSocketInput() {
    return this._tcpSocket.internalValue;
  }

  // termination_grace_period_seconds - computed: false, optional: true, required: false
  private _terminationGracePeriodSeconds?: number; 
  public get terminationGracePeriodSeconds() {
    return this.getNumberAttribute('termination_grace_period_seconds');
  }
  public set terminationGracePeriodSeconds(value: number) {
    this._terminationGracePeriodSeconds = value;
  }
  public resetTerminationGracePeriodSeconds() {
    this._terminationGracePeriodSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get terminationGracePeriodSecondsInput() {
    return this._terminationGracePeriodSeconds;
  }

  // timeout_seconds - computed: false, optional: true, required: false
  private _timeoutSeconds?: number; 
  public get timeoutSeconds() {
    return this.getNumberAttribute('timeout_seconds');
  }
  public set timeoutSeconds(value: number) {
    this._timeoutSeconds = value;
  }
  public resetTimeoutSeconds() {
    this._timeoutSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutSecondsInput() {
    return this._timeoutSeconds;
  }
}
export interface DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWebResourceRequirementsClaims {
  /**
  * Name must match the name of one entry in pod.spec.resourceClaims of the Pod where this field is used. It makes that resource available inside a container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/repo_manager_pulpproject_org_pulp_v1beta2_manifest#name DataK8SRepoManagerPulpprojectOrgPulpV1Beta2Manifest#name}
  */
  readonly name: string;
}

export function dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWebResourceRequirementsClaimsToTerraform(struct?: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWebResourceRequirementsClaims | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWebResourceRequirementsClaimsToHclTerraform(struct?: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWebResourceRequirementsClaims | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWebResourceRequirementsClaimsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWebResourceRequirementsClaims | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWebResourceRequirementsClaims | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
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
}

export class DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWebResourceRequirementsClaimsList extends cdktf.ComplexList {
  public internalValue? : DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWebResourceRequirementsClaims[] | cdktf.IResolvable

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
  public get(index: number): DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWebResourceRequirementsClaimsOutputReference {
    return new DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWebResourceRequirementsClaimsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWebResourceRequirements {
  /**
  * Claims lists the names of resources, defined in spec.resourceClaims, that are used by this container. This is an alpha field and requires enabling the DynamicResourceAllocation feature gate. This field is immutable. It can only be set for containers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/repo_manager_pulpproject_org_pulp_v1beta2_manifest#claims DataK8SRepoManagerPulpprojectOrgPulpV1Beta2Manifest#claims}
  */
  readonly claims?: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWebResourceRequirementsClaims[] | cdktf.IResolvable;
  /**
  * Limits describes the maximum amount of compute resources allowed. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/repo_manager_pulpproject_org_pulp_v1beta2_manifest#limits DataK8SRepoManagerPulpprojectOrgPulpV1Beta2Manifest#limits}
  */
  readonly limits?: { [key: string]: string };
  /**
  * Requests describes the minimum amount of compute resources required. If Requests is omitted for a container, it defaults to Limits if that is explicitly specified, otherwise to an implementation-defined value. Requests cannot exceed Limits. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/repo_manager_pulpproject_org_pulp_v1beta2_manifest#requests DataK8SRepoManagerPulpprojectOrgPulpV1Beta2Manifest#requests}
  */
  readonly requests?: { [key: string]: string };
}

export function dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWebResourceRequirementsToTerraform(struct?: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWebResourceRequirements | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    claims: cdktf.listMapper(dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWebResourceRequirementsClaimsToTerraform, false)(struct!.claims),
    limits: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.limits),
    requests: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.requests),
  }
}


export function dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWebResourceRequirementsToHclTerraform(struct?: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWebResourceRequirements | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    claims: {
      value: cdktf.listMapperHcl(dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWebResourceRequirementsClaimsToHclTerraform, false)(struct!.claims),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWebResourceRequirementsClaimsList",
    },
    limits: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.limits),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    requests: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.requests),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWebResourceRequirementsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWebResourceRequirements | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._claims?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.claims = this._claims?.internalValue;
    }
    if (this._limits !== undefined) {
      hasAnyValues = true;
      internalValueResult.limits = this._limits;
    }
    if (this._requests !== undefined) {
      hasAnyValues = true;
      internalValueResult.requests = this._requests;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWebResourceRequirements | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._claims.internalValue = undefined;
      this._limits = undefined;
      this._requests = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._claims.internalValue = value.claims;
      this._limits = value.limits;
      this._requests = value.requests;
    }
  }

  // claims - computed: false, optional: true, required: false
  private _claims = new DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWebResourceRequirementsClaimsList(this, "claims", false);
  public get claims() {
    return this._claims;
  }
  public putClaims(value: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWebResourceRequirementsClaims[] | cdktf.IResolvable) {
    this._claims.internalValue = value;
  }
  public resetClaims() {
    this._claims.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get claimsInput() {
    return this._claims.internalValue;
  }

  // limits - computed: false, optional: true, required: false
  private _limits?: { [key: string]: string }; 
  public get limits() {
    return this.getStringMapAttribute('limits');
  }
  public set limits(value: { [key: string]: string }) {
    this._limits = value;
  }
  public resetLimits() {
    this._limits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitsInput() {
    return this._limits;
  }

  // requests - computed: false, optional: true, required: false
  private _requests?: { [key: string]: string }; 
  public get requests() {
    return this.getStringMapAttribute('requests');
  }
  public set requests(value: { [key: string]: string }) {
    this._requests = value;
  }
  public resetRequests() {
    this._requests = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestsInput() {
    return this._requests;
  }
}
export interface DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWebStrategyRollingUpdate {
  /**
  * The maximum number of pods that can be scheduled above the desired number of pods. Value can be an absolute number (ex: 5) or a percentage of desired pods (ex: 10%). This can not be 0 if MaxUnavailable is 0. Absolute number is calculated from percentage by rounding up. Defaults to 25%. Example: when this is set to 30%, the new ReplicaSet can be scaled up immediately when the rolling update starts, such that the total number of old and new pods do not exceed 130% of desired pods. Once old pods have been killed, new ReplicaSet can be scaled up further, ensuring that total number of pods running at any time during the update is at most 130% of desired pods.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/repo_manager_pulpproject_org_pulp_v1beta2_manifest#max_surge DataK8SRepoManagerPulpprojectOrgPulpV1Beta2Manifest#max_surge}
  */
  readonly maxSurge?: string;
  /**
  * The maximum number of pods that can be unavailable during the update. Value can be an absolute number (ex: 5) or a percentage of desired pods (ex: 10%). Absolute number is calculated from percentage by rounding down. This can not be 0 if MaxSurge is 0. Defaults to 25%. Example: when this is set to 30%, the old ReplicaSet can be scaled down to 70% of desired pods immediately when the rolling update starts. Once new pods are ready, old ReplicaSet can be scaled down further, followed by scaling up the new ReplicaSet, ensuring that the total number of pods available at all times during the update is at least 70% of desired pods.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/repo_manager_pulpproject_org_pulp_v1beta2_manifest#max_unavailable DataK8SRepoManagerPulpprojectOrgPulpV1Beta2Manifest#max_unavailable}
  */
  readonly maxUnavailable?: string;
}

export function dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWebStrategyRollingUpdateToTerraform(struct?: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWebStrategyRollingUpdate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_surge: cdktf.stringToTerraform(struct!.maxSurge),
    max_unavailable: cdktf.stringToTerraform(struct!.maxUnavailable),
  }
}


export function dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWebStrategyRollingUpdateToHclTerraform(struct?: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWebStrategyRollingUpdate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_surge: {
      value: cdktf.stringToHclTerraform(struct!.maxSurge),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_unavailable: {
      value: cdktf.stringToHclTerraform(struct!.maxUnavailable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWebStrategyRollingUpdateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWebStrategyRollingUpdate | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxSurge !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxSurge = this._maxSurge;
    }
    if (this._maxUnavailable !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxUnavailable = this._maxUnavailable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWebStrategyRollingUpdate | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maxSurge = undefined;
      this._maxUnavailable = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maxSurge = value.maxSurge;
      this._maxUnavailable = value.maxUnavailable;
    }
  }

  // max_surge - computed: false, optional: true, required: false
  private _maxSurge?: string; 
  public get maxSurge() {
    return this.getStringAttribute('max_surge');
  }
  public set maxSurge(value: string) {
    this._maxSurge = value;
  }
  public resetMaxSurge() {
    this._maxSurge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxSurgeInput() {
    return this._maxSurge;
  }

  // max_unavailable - computed: false, optional: true, required: false
  private _maxUnavailable?: string; 
  public get maxUnavailable() {
    return this.getStringAttribute('max_unavailable');
  }
  public set maxUnavailable(value: string) {
    this._maxUnavailable = value;
  }
  public resetMaxUnavailable() {
    this._maxUnavailable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxUnavailableInput() {
    return this._maxUnavailable;
  }
}
export interface DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWebStrategy {
  /**
  * Rolling update config params. Present only if DeploymentStrategyType = RollingUpdate. --- TODO: Update this to follow our convention for oneOf, whatever we decide it to be.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/repo_manager_pulpproject_org_pulp_v1beta2_manifest#rolling_update DataK8SRepoManagerPulpprojectOrgPulpV1Beta2Manifest#rolling_update}
  */
  readonly rollingUpdate?: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWebStrategyRollingUpdate;
  /**
  * Type of deployment. Can be 'Recreate' or 'RollingUpdate'. Default is RollingUpdate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/repo_manager_pulpproject_org_pulp_v1beta2_manifest#type DataK8SRepoManagerPulpprojectOrgPulpV1Beta2Manifest#type}
  */
  readonly type?: string;
}

export function dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWebStrategyToTerraform(struct?: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWebStrategy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    rolling_update: dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWebStrategyRollingUpdateToTerraform(struct!.rollingUpdate),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWebStrategyToHclTerraform(struct?: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWebStrategy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    rolling_update: {
      value: dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWebStrategyRollingUpdateToHclTerraform(struct!.rollingUpdate),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWebStrategyRollingUpdate",
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

export class DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWebStrategyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWebStrategy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._rollingUpdate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rollingUpdate = this._rollingUpdate?.internalValue;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWebStrategy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._rollingUpdate.internalValue = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._rollingUpdate.internalValue = value.rollingUpdate;
      this._type = value.type;
    }
  }

  // rolling_update - computed: false, optional: true, required: false
  private _rollingUpdate = new DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWebStrategyRollingUpdateOutputReference(this, "rolling_update");
  public get rollingUpdate() {
    return this._rollingUpdate;
  }
  public putRollingUpdate(value: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWebStrategyRollingUpdate) {
    this._rollingUpdate.internalValue = value;
  }
  public resetRollingUpdate() {
    this._rollingUpdate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rollingUpdateInput() {
    return this._rollingUpdate.internalValue;
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
export interface DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWeb {
  /**
  * Annotations for the web deployment
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/repo_manager_pulpproject_org_pulp_v1beta2_manifest#deployment_annotations DataK8SRepoManagerPulpprojectOrgPulpV1Beta2Manifest#deployment_annotations}
  */
  readonly deploymentAnnotations?: { [key: string]: string };
  /**
  * Environment variables to add to pulpcore-web container
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/repo_manager_pulpproject_org_pulp_v1beta2_manifest#env_vars DataK8SRepoManagerPulpprojectOrgPulpV1Beta2Manifest#env_vars}
  */
  readonly envVars?: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWebEnvVars[] | cdktf.IResolvable;
  /**
  * Periodic probe of container liveness. Container will be restarted if the probe fails.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/repo_manager_pulpproject_org_pulp_v1beta2_manifest#liveness_probe DataK8SRepoManagerPulpprojectOrgPulpV1Beta2Manifest#liveness_probe}
  */
  readonly livenessProbe?: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWebLivenessProbe;
  /**
  * NodeSelector for the Web pods.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/repo_manager_pulpproject_org_pulp_v1beta2_manifest#node_selector DataK8SRepoManagerPulpprojectOrgPulpV1Beta2Manifest#node_selector}
  */
  readonly nodeSelector?: { [key: string]: string };
  /**
  * PodDisruptionBudget is an object to define the max disruption that can be caused to a collection of pods
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/repo_manager_pulpproject_org_pulp_v1beta2_manifest#pdb DataK8SRepoManagerPulpprojectOrgPulpV1Beta2Manifest#pdb}
  */
  readonly pdb?: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWebPdb;
  /**
  * Periodic probe of container service readiness. Container will be removed from service endpoints if the probe fails.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/repo_manager_pulpproject_org_pulp_v1beta2_manifest#readiness_probe DataK8SRepoManagerPulpprojectOrgPulpV1Beta2Manifest#readiness_probe}
  */
  readonly readinessProbe?: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWebReadinessProbe;
  /**
  * Size is the size of number of pulp-web replicas. Default: 1
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/repo_manager_pulpproject_org_pulp_v1beta2_manifest#replicas DataK8SRepoManagerPulpprojectOrgPulpV1Beta2Manifest#replicas}
  */
  readonly replicas?: number;
  /**
  * Resource requirements for the pulp-web container
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/repo_manager_pulpproject_org_pulp_v1beta2_manifest#resource_requirements DataK8SRepoManagerPulpprojectOrgPulpV1Beta2Manifest#resource_requirements}
  */
  readonly resourceRequirements?: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWebResourceRequirements;
  /**
  * Annotations for the service
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/repo_manager_pulpproject_org_pulp_v1beta2_manifest#service_annotations DataK8SRepoManagerPulpprojectOrgPulpV1Beta2Manifest#service_annotations}
  */
  readonly serviceAnnotations?: { [key: string]: string };
  /**
  * The deployment strategy to use to replace existing pods with new ones.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/repo_manager_pulpproject_org_pulp_v1beta2_manifest#strategy DataK8SRepoManagerPulpprojectOrgPulpV1Beta2Manifest#strategy}
  */
  readonly strategy?: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWebStrategy;
  /**
  * The secure TLS termination mechanism to use Default: 'edge'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/repo_manager_pulpproject_org_pulp_v1beta2_manifest#tls_termination_mechanism DataK8SRepoManagerPulpprojectOrgPulpV1Beta2Manifest#tls_termination_mechanism}
  */
  readonly tlsTerminationMechanism?: string;
}

export function dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWebToTerraform(struct?: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWeb | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    deployment_annotations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.deploymentAnnotations),
    env_vars: cdktf.listMapper(dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWebEnvVarsToTerraform, false)(struct!.envVars),
    liveness_probe: dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWebLivenessProbeToTerraform(struct!.livenessProbe),
    node_selector: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.nodeSelector),
    pdb: dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWebPdbToTerraform(struct!.pdb),
    readiness_probe: dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWebReadinessProbeToTerraform(struct!.readinessProbe),
    replicas: cdktf.numberToTerraform(struct!.replicas),
    resource_requirements: dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWebResourceRequirementsToTerraform(struct!.resourceRequirements),
    service_annotations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.serviceAnnotations),
    strategy: dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWebStrategyToTerraform(struct!.strategy),
    tls_termination_mechanism: cdktf.stringToTerraform(struct!.tlsTerminationMechanism),
  }
}


export function dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWebToHclTerraform(struct?: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWeb | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    deployment_annotations: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.deploymentAnnotations),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    env_vars: {
      value: cdktf.listMapperHcl(dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWebEnvVarsToHclTerraform, false)(struct!.envVars),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWebEnvVarsList",
    },
    liveness_probe: {
      value: dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWebLivenessProbeToHclTerraform(struct!.livenessProbe),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWebLivenessProbe",
    },
    node_selector: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.nodeSelector),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    pdb: {
      value: dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWebPdbToHclTerraform(struct!.pdb),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWebPdb",
    },
    readiness_probe: {
      value: dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWebReadinessProbeToHclTerraform(struct!.readinessProbe),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWebReadinessProbe",
    },
    replicas: {
      value: cdktf.numberToHclTerraform(struct!.replicas),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    resource_requirements: {
      value: dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWebResourceRequirementsToHclTerraform(struct!.resourceRequirements),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWebResourceRequirements",
    },
    service_annotations: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.serviceAnnotations),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    strategy: {
      value: dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWebStrategyToHclTerraform(struct!.strategy),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWebStrategy",
    },
    tls_termination_mechanism: {
      value: cdktf.stringToHclTerraform(struct!.tlsTerminationMechanism),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWebOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWeb | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._deploymentAnnotations !== undefined) {
      hasAnyValues = true;
      internalValueResult.deploymentAnnotations = this._deploymentAnnotations;
    }
    if (this._envVars?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.envVars = this._envVars?.internalValue;
    }
    if (this._livenessProbe?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.livenessProbe = this._livenessProbe?.internalValue;
    }
    if (this._nodeSelector !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeSelector = this._nodeSelector;
    }
    if (this._pdb?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pdb = this._pdb?.internalValue;
    }
    if (this._readinessProbe?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.readinessProbe = this._readinessProbe?.internalValue;
    }
    if (this._replicas !== undefined) {
      hasAnyValues = true;
      internalValueResult.replicas = this._replicas;
    }
    if (this._resourceRequirements?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceRequirements = this._resourceRequirements?.internalValue;
    }
    if (this._serviceAnnotations !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAnnotations = this._serviceAnnotations;
    }
    if (this._strategy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.strategy = this._strategy?.internalValue;
    }
    if (this._tlsTerminationMechanism !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsTerminationMechanism = this._tlsTerminationMechanism;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWeb | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._deploymentAnnotations = undefined;
      this._envVars.internalValue = undefined;
      this._livenessProbe.internalValue = undefined;
      this._nodeSelector = undefined;
      this._pdb.internalValue = undefined;
      this._readinessProbe.internalValue = undefined;
      this._replicas = undefined;
      this._resourceRequirements.internalValue = undefined;
      this._serviceAnnotations = undefined;
      this._strategy.internalValue = undefined;
      this._tlsTerminationMechanism = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._deploymentAnnotations = value.deploymentAnnotations;
      this._envVars.internalValue = value.envVars;
      this._livenessProbe.internalValue = value.livenessProbe;
      this._nodeSelector = value.nodeSelector;
      this._pdb.internalValue = value.pdb;
      this._readinessProbe.internalValue = value.readinessProbe;
      this._replicas = value.replicas;
      this._resourceRequirements.internalValue = value.resourceRequirements;
      this._serviceAnnotations = value.serviceAnnotations;
      this._strategy.internalValue = value.strategy;
      this._tlsTerminationMechanism = value.tlsTerminationMechanism;
    }
  }

  // deployment_annotations - computed: false, optional: true, required: false
  private _deploymentAnnotations?: { [key: string]: string }; 
  public get deploymentAnnotations() {
    return this.getStringMapAttribute('deployment_annotations');
  }
  public set deploymentAnnotations(value: { [key: string]: string }) {
    this._deploymentAnnotations = value;
  }
  public resetDeploymentAnnotations() {
    this._deploymentAnnotations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deploymentAnnotationsInput() {
    return this._deploymentAnnotations;
  }

  // env_vars - computed: false, optional: true, required: false
  private _envVars = new DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWebEnvVarsList(this, "env_vars", false);
  public get envVars() {
    return this._envVars;
  }
  public putEnvVars(value: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWebEnvVars[] | cdktf.IResolvable) {
    this._envVars.internalValue = value;
  }
  public resetEnvVars() {
    this._envVars.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get envVarsInput() {
    return this._envVars.internalValue;
  }

  // liveness_probe - computed: false, optional: true, required: false
  private _livenessProbe = new DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWebLivenessProbeOutputReference(this, "liveness_probe");
  public get livenessProbe() {
    return this._livenessProbe;
  }
  public putLivenessProbe(value: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWebLivenessProbe) {
    this._livenessProbe.internalValue = value;
  }
  public resetLivenessProbe() {
    this._livenessProbe.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get livenessProbeInput() {
    return this._livenessProbe.internalValue;
  }

  // node_selector - computed: false, optional: true, required: false
  private _nodeSelector?: { [key: string]: string }; 
  public get nodeSelector() {
    return this.getStringMapAttribute('node_selector');
  }
  public set nodeSelector(value: { [key: string]: string }) {
    this._nodeSelector = value;
  }
  public resetNodeSelector() {
    this._nodeSelector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeSelectorInput() {
    return this._nodeSelector;
  }

  // pdb - computed: false, optional: true, required: false
  private _pdb = new DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWebPdbOutputReference(this, "pdb");
  public get pdb() {
    return this._pdb;
  }
  public putPdb(value: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWebPdb) {
    this._pdb.internalValue = value;
  }
  public resetPdb() {
    this._pdb.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pdbInput() {
    return this._pdb.internalValue;
  }

  // readiness_probe - computed: false, optional: true, required: false
  private _readinessProbe = new DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWebReadinessProbeOutputReference(this, "readiness_probe");
  public get readinessProbe() {
    return this._readinessProbe;
  }
  public putReadinessProbe(value: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWebReadinessProbe) {
    this._readinessProbe.internalValue = value;
  }
  public resetReadinessProbe() {
    this._readinessProbe.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readinessProbeInput() {
    return this._readinessProbe.internalValue;
  }

  // replicas - computed: false, optional: true, required: false
  private _replicas?: number; 
  public get replicas() {
    return this.getNumberAttribute('replicas');
  }
  public set replicas(value: number) {
    this._replicas = value;
  }
  public resetReplicas() {
    this._replicas = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicasInput() {
    return this._replicas;
  }

  // resource_requirements - computed: false, optional: true, required: false
  private _resourceRequirements = new DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWebResourceRequirementsOutputReference(this, "resource_requirements");
  public get resourceRequirements() {
    return this._resourceRequirements;
  }
  public putResourceRequirements(value: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWebResourceRequirements) {
    this._resourceRequirements.internalValue = value;
  }
  public resetResourceRequirements() {
    this._resourceRequirements.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceRequirementsInput() {
    return this._resourceRequirements.internalValue;
  }

  // service_annotations - computed: false, optional: true, required: false
  private _serviceAnnotations?: { [key: string]: string }; 
  public get serviceAnnotations() {
    return this.getStringMapAttribute('service_annotations');
  }
  public set serviceAnnotations(value: { [key: string]: string }) {
    this._serviceAnnotations = value;
  }
  public resetServiceAnnotations() {
    this._serviceAnnotations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAnnotationsInput() {
    return this._serviceAnnotations;
  }

  // strategy - computed: false, optional: true, required: false
  private _strategy = new DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWebStrategyOutputReference(this, "strategy");
  public get strategy() {
    return this._strategy;
  }
  public putStrategy(value: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWebStrategy) {
    this._strategy.internalValue = value;
  }
  public resetStrategy() {
    this._strategy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get strategyInput() {
    return this._strategy.internalValue;
  }

  // tls_termination_mechanism - computed: false, optional: true, required: false
  private _tlsTerminationMechanism?: string; 
  public get tlsTerminationMechanism() {
    return this.getStringAttribute('tls_termination_mechanism');
  }
  public set tlsTerminationMechanism(value: string) {
    this._tlsTerminationMechanism = value;
  }
  public resetTlsTerminationMechanism() {
    this._tlsTerminationMechanism = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsTerminationMechanismInput() {
    return this._tlsTerminationMechanism;
  }
}
export interface DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressions {
  /**
  * The label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/repo_manager_pulpproject_org_pulp_v1beta2_manifest#key DataK8SRepoManagerPulpprojectOrgPulpV1Beta2Manifest#key}
  */
  readonly key: string;
  /**
  * Represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists, DoesNotExist. Gt, and Lt.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/repo_manager_pulpproject_org_pulp_v1beta2_manifest#operator DataK8SRepoManagerPulpprojectOrgPulpV1Beta2Manifest#operator}
  */
  readonly operator: string;
  /**
  * An array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. If the operator is Gt or Lt, the values array must have a single element, which will be interpreted as an integer. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/repo_manager_pulpproject_org_pulp_v1beta2_manifest#values DataK8SRepoManagerPulpprojectOrgPulpV1Beta2Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressionsToTerraform(struct?: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressionsToHclTerraform(struct?: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressions | cdktf.IResolvable): any {
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
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
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

export class DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._operator = undefined;
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
      this._operator = value.operator;
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

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
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

export class DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressionsOutputReference {
    return new DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFields {
  /**
  * The label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/repo_manager_pulpproject_org_pulp_v1beta2_manifest#key DataK8SRepoManagerPulpprojectOrgPulpV1Beta2Manifest#key}
  */
  readonly key: string;
  /**
  * Represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists, DoesNotExist. Gt, and Lt.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/repo_manager_pulpproject_org_pulp_v1beta2_manifest#operator DataK8SRepoManagerPulpprojectOrgPulpV1Beta2Manifest#operator}
  */
  readonly operator: string;
  /**
  * An array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. If the operator is Gt or Lt, the values array must have a single element, which will be interpreted as an integer. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/repo_manager_pulpproject_org_pulp_v1beta2_manifest#values DataK8SRepoManagerPulpprojectOrgPulpV1Beta2Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFieldsToTerraform(struct?: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFields | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFieldsToHclTerraform(struct?: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFields | cdktf.IResolvable): any {
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
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
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

export class DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFieldsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFields | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFields | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._operator = undefined;
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
      this._operator = value.operator;
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

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
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

export class DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFieldsList extends cdktf.ComplexList {
  public internalValue? : DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFields[] | cdktf.IResolvable

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
  public get(index: number): DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFieldsOutputReference {
    return new DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFieldsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreference {
  /**
  * A list of node selector requirements by node's labels.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/repo_manager_pulpproject_org_pulp_v1beta2_manifest#match_expressions DataK8SRepoManagerPulpprojectOrgPulpV1Beta2Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressions[] | cdktf.IResolvable;
  /**
  * A list of node selector requirements by node's fields.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/repo_manager_pulpproject_org_pulp_v1beta2_manifest#match_fields DataK8SRepoManagerPulpprojectOrgPulpV1Beta2Manifest#match_fields}
  */
  readonly matchFields?: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFields[] | cdktf.IResolvable;
}

export function dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceToTerraform(struct?: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreference | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_fields: cdktf.listMapper(dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFieldsToTerraform, false)(struct!.matchFields),
  }
}


export function dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceToHclTerraform(struct?: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreference | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressionsList",
    },
    match_fields: {
      value: cdktf.listMapperHcl(dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFieldsToHclTerraform, false)(struct!.matchFields),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFieldsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreference | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchExpressions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchExpressions = this._matchExpressions?.internalValue;
    }
    if (this._matchFields?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchFields = this._matchFields?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreference | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchExpressions.internalValue = undefined;
      this._matchFields.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matchExpressions.internalValue = value.matchExpressions;
      this._matchFields.internalValue = value.matchFields;
    }
  }

  // match_expressions - computed: false, optional: true, required: false
  private _matchExpressions = new DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressions[] | cdktf.IResolvable) {
    this._matchExpressions.internalValue = value;
  }
  public resetMatchExpressions() {
    this._matchExpressions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchExpressionsInput() {
    return this._matchExpressions.internalValue;
  }

  // match_fields - computed: false, optional: true, required: false
  private _matchFields = new DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFieldsList(this, "match_fields", false);
  public get matchFields() {
    return this._matchFields;
  }
  public putMatchFields(value: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFields[] | cdktf.IResolvable) {
    this._matchFields.internalValue = value;
  }
  public resetMatchFields() {
    this._matchFields.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchFieldsInput() {
    return this._matchFields.internalValue;
  }
}
export interface DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecution {
  /**
  * A node selector term, associated with the corresponding weight.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/repo_manager_pulpproject_org_pulp_v1beta2_manifest#preference DataK8SRepoManagerPulpprojectOrgPulpV1Beta2Manifest#preference}
  */
  readonly preference: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreference;
  /**
  * Weight associated with matching the corresponding nodeSelectorTerm, in the range 1-100.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/repo_manager_pulpproject_org_pulp_v1beta2_manifest#weight DataK8SRepoManagerPulpprojectOrgPulpV1Beta2Manifest#weight}
  */
  readonly weight: number;
}

export function dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionToTerraform(struct?: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    preference: dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceToTerraform(struct!.preference),
    weight: cdktf.numberToTerraform(struct!.weight),
  }
}


export function dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionToHclTerraform(struct?: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    preference: {
      value: dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceToHclTerraform(struct!.preference),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreference",
    },
    weight: {
      value: cdktf.numberToHclTerraform(struct!.weight),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._preference?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.preference = this._preference?.internalValue;
    }
    if (this._weight !== undefined) {
      hasAnyValues = true;
      internalValueResult.weight = this._weight;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._preference.internalValue = undefined;
      this._weight = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._preference.internalValue = value.preference;
      this._weight = value.weight;
    }
  }

  // preference - computed: false, optional: false, required: true
  private _preference = new DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceOutputReference(this, "preference");
  public get preference() {
    return this._preference;
  }
  public putPreference(value: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreference) {
    this._preference.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get preferenceInput() {
    return this._preference.internalValue;
  }

  // weight - computed: false, optional: false, required: true
  private _weight?: number; 
  public get weight() {
    return this.getNumberAttribute('weight');
  }
  public set weight(value: number) {
    this._weight = value;
  }
  // Temporarily expose input value. Use with caution.
  public get weightInput() {
    return this._weight;
  }
}

export class DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionList extends cdktf.ComplexList {
  public internalValue? : DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecution[] | cdktf.IResolvable

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
  public get(index: number): DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionOutputReference {
    return new DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressions {
  /**
  * The label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/repo_manager_pulpproject_org_pulp_v1beta2_manifest#key DataK8SRepoManagerPulpprojectOrgPulpV1Beta2Manifest#key}
  */
  readonly key: string;
  /**
  * Represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists, DoesNotExist. Gt, and Lt.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/repo_manager_pulpproject_org_pulp_v1beta2_manifest#operator DataK8SRepoManagerPulpprojectOrgPulpV1Beta2Manifest#operator}
  */
  readonly operator: string;
  /**
  * An array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. If the operator is Gt or Lt, the values array must have a single element, which will be interpreted as an integer. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/repo_manager_pulpproject_org_pulp_v1beta2_manifest#values DataK8SRepoManagerPulpprojectOrgPulpV1Beta2Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressionsToTerraform(struct?: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressionsToHclTerraform(struct?: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressions | cdktf.IResolvable): any {
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
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
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

export class DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._operator = undefined;
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
      this._operator = value.operator;
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

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
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

export class DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressionsOutputReference {
    return new DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFields {
  /**
  * The label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/repo_manager_pulpproject_org_pulp_v1beta2_manifest#key DataK8SRepoManagerPulpprojectOrgPulpV1Beta2Manifest#key}
  */
  readonly key: string;
  /**
  * Represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists, DoesNotExist. Gt, and Lt.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/repo_manager_pulpproject_org_pulp_v1beta2_manifest#operator DataK8SRepoManagerPulpprojectOrgPulpV1Beta2Manifest#operator}
  */
  readonly operator: string;
  /**
  * An array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. If the operator is Gt or Lt, the values array must have a single element, which will be interpreted as an integer. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/repo_manager_pulpproject_org_pulp_v1beta2_manifest#values DataK8SRepoManagerPulpprojectOrgPulpV1Beta2Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFieldsToTerraform(struct?: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFields | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFieldsToHclTerraform(struct?: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFields | cdktf.IResolvable): any {
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
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
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

export class DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFieldsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFields | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFields | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._operator = undefined;
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
      this._operator = value.operator;
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

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
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

export class DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFieldsList extends cdktf.ComplexList {
  public internalValue? : DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFields[] | cdktf.IResolvable

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
  public get(index: number): DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFieldsOutputReference {
    return new DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFieldsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTerms {
  /**
  * A list of node selector requirements by node's labels.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/repo_manager_pulpproject_org_pulp_v1beta2_manifest#match_expressions DataK8SRepoManagerPulpprojectOrgPulpV1Beta2Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressions[] | cdktf.IResolvable;
  /**
  * A list of node selector requirements by node's fields.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/repo_manager_pulpproject_org_pulp_v1beta2_manifest#match_fields DataK8SRepoManagerPulpprojectOrgPulpV1Beta2Manifest#match_fields}
  */
  readonly matchFields?: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFields[] | cdktf.IResolvable;
}

export function dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsToTerraform(struct?: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTerms | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_fields: cdktf.listMapper(dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFieldsToTerraform, false)(struct!.matchFields),
  }
}


export function dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsToHclTerraform(struct?: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTerms | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressionsList",
    },
    match_fields: {
      value: cdktf.listMapperHcl(dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFieldsToHclTerraform, false)(struct!.matchFields),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFieldsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTerms | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchExpressions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchExpressions = this._matchExpressions?.internalValue;
    }
    if (this._matchFields?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchFields = this._matchFields?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTerms | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchExpressions.internalValue = undefined;
      this._matchFields.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matchExpressions.internalValue = value.matchExpressions;
      this._matchFields.internalValue = value.matchFields;
    }
  }

  // match_expressions - computed: false, optional: true, required: false
  private _matchExpressions = new DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressions[] | cdktf.IResolvable) {
    this._matchExpressions.internalValue = value;
  }
  public resetMatchExpressions() {
    this._matchExpressions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchExpressionsInput() {
    return this._matchExpressions.internalValue;
  }

  // match_fields - computed: false, optional: true, required: false
  private _matchFields = new DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFieldsList(this, "match_fields", false);
  public get matchFields() {
    return this._matchFields;
  }
  public putMatchFields(value: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFields[] | cdktf.IResolvable) {
    this._matchFields.internalValue = value;
  }
  public resetMatchFields() {
    this._matchFields.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchFieldsInput() {
    return this._matchFields.internalValue;
  }
}

export class DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsList extends cdktf.ComplexList {
  public internalValue? : DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTerms[] | cdktf.IResolvable

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
  public get(index: number): DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsOutputReference {
    return new DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecution {
  /**
  * Required. A list of node selector terms. The terms are ORed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/repo_manager_pulpproject_org_pulp_v1beta2_manifest#node_selector_terms DataK8SRepoManagerPulpprojectOrgPulpV1Beta2Manifest#node_selector_terms}
  */
  readonly nodeSelectorTerms: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTerms[] | cdktf.IResolvable;
}

export function dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionToTerraform(struct?: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    node_selector_terms: cdktf.listMapper(dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsToTerraform, false)(struct!.nodeSelectorTerms),
  }
}


export function dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionToHclTerraform(struct?: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    node_selector_terms: {
      value: cdktf.listMapperHcl(dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsToHclTerraform, false)(struct!.nodeSelectorTerms),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nodeSelectorTerms?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeSelectorTerms = this._nodeSelectorTerms?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._nodeSelectorTerms.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._nodeSelectorTerms.internalValue = value.nodeSelectorTerms;
    }
  }

  // node_selector_terms - computed: false, optional: false, required: true
  private _nodeSelectorTerms = new DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsList(this, "node_selector_terms", false);
  public get nodeSelectorTerms() {
    return this._nodeSelectorTerms;
  }
  public putNodeSelectorTerms(value: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTerms[] | cdktf.IResolvable) {
    this._nodeSelectorTerms.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeSelectorTermsInput() {
    return this._nodeSelectorTerms.internalValue;
  }
}
export interface DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityNodeAffinity {
  /**
  * The scheduler will prefer to schedule pods to nodes that satisfy the affinity expressions specified by this field, but it may choose a node that violates one or more of the expressions. The node that is most preferred is the one with the greatest sum of weights, i.e. for each node that meets all of the scheduling requirements (resource request, requiredDuringScheduling affinity expressions, etc.), compute a sum by iterating through the elements of this field and adding 'weight' to the sum if the node matches the corresponding matchExpressions; the node(s) with the highest sum are the most preferred.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/repo_manager_pulpproject_org_pulp_v1beta2_manifest#preferred_during_scheduling_ignored_during_execution DataK8SRepoManagerPulpprojectOrgPulpV1Beta2Manifest#preferred_during_scheduling_ignored_during_execution}
  */
  readonly preferredDuringSchedulingIgnoredDuringExecution?: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecution[] | cdktf.IResolvable;
  /**
  * If the affinity requirements specified by this field are not met at scheduling time, the pod will not be scheduled onto the node. If the affinity requirements specified by this field cease to be met at some point during pod execution (e.g. due to an update), the system may or may not try to eventually evict the pod from its node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/repo_manager_pulpproject_org_pulp_v1beta2_manifest#required_during_scheduling_ignored_during_execution DataK8SRepoManagerPulpprojectOrgPulpV1Beta2Manifest#required_during_scheduling_ignored_during_execution}
  */
  readonly requiredDuringSchedulingIgnoredDuringExecution?: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecution;
}

export function dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityNodeAffinityToTerraform(struct?: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityNodeAffinity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    preferred_during_scheduling_ignored_during_execution: cdktf.listMapper(dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionToTerraform, false)(struct!.preferredDuringSchedulingIgnoredDuringExecution),
    required_during_scheduling_ignored_during_execution: dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionToTerraform(struct!.requiredDuringSchedulingIgnoredDuringExecution),
  }
}


export function dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityNodeAffinityToHclTerraform(struct?: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityNodeAffinity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    preferred_during_scheduling_ignored_during_execution: {
      value: cdktf.listMapperHcl(dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionToHclTerraform, false)(struct!.preferredDuringSchedulingIgnoredDuringExecution),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionList",
    },
    required_during_scheduling_ignored_during_execution: {
      value: dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionToHclTerraform(struct!.requiredDuringSchedulingIgnoredDuringExecution),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecution",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityNodeAffinityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityNodeAffinity | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._preferredDuringSchedulingIgnoredDuringExecution?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.preferredDuringSchedulingIgnoredDuringExecution = this._preferredDuringSchedulingIgnoredDuringExecution?.internalValue;
    }
    if (this._requiredDuringSchedulingIgnoredDuringExecution?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.requiredDuringSchedulingIgnoredDuringExecution = this._requiredDuringSchedulingIgnoredDuringExecution?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityNodeAffinity | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._preferredDuringSchedulingIgnoredDuringExecution.internalValue = undefined;
      this._requiredDuringSchedulingIgnoredDuringExecution.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._preferredDuringSchedulingIgnoredDuringExecution.internalValue = value.preferredDuringSchedulingIgnoredDuringExecution;
      this._requiredDuringSchedulingIgnoredDuringExecution.internalValue = value.requiredDuringSchedulingIgnoredDuringExecution;
    }
  }

  // preferred_during_scheduling_ignored_during_execution - computed: false, optional: true, required: false
  private _preferredDuringSchedulingIgnoredDuringExecution = new DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionList(this, "preferred_during_scheduling_ignored_during_execution", false);
  public get preferredDuringSchedulingIgnoredDuringExecution() {
    return this._preferredDuringSchedulingIgnoredDuringExecution;
  }
  public putPreferredDuringSchedulingIgnoredDuringExecution(value: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecution[] | cdktf.IResolvable) {
    this._preferredDuringSchedulingIgnoredDuringExecution.internalValue = value;
  }
  public resetPreferredDuringSchedulingIgnoredDuringExecution() {
    this._preferredDuringSchedulingIgnoredDuringExecution.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferredDuringSchedulingIgnoredDuringExecutionInput() {
    return this._preferredDuringSchedulingIgnoredDuringExecution.internalValue;
  }

  // required_during_scheduling_ignored_during_execution - computed: false, optional: true, required: false
  private _requiredDuringSchedulingIgnoredDuringExecution = new DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionOutputReference(this, "required_during_scheduling_ignored_during_execution");
  public get requiredDuringSchedulingIgnoredDuringExecution() {
    return this._requiredDuringSchedulingIgnoredDuringExecution;
  }
  public putRequiredDuringSchedulingIgnoredDuringExecution(value: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecution) {
    this._requiredDuringSchedulingIgnoredDuringExecution.internalValue = value;
  }
  public resetRequiredDuringSchedulingIgnoredDuringExecution() {
    this._requiredDuringSchedulingIgnoredDuringExecution.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredDuringSchedulingIgnoredDuringExecutionInput() {
    return this._requiredDuringSchedulingIgnoredDuringExecution.internalValue;
  }
}
export interface DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/repo_manager_pulpproject_org_pulp_v1beta2_manifest#key DataK8SRepoManagerPulpprojectOrgPulpV1Beta2Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/repo_manager_pulpproject_org_pulp_v1beta2_manifest#operator DataK8SRepoManagerPulpprojectOrgPulpV1Beta2Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/repo_manager_pulpproject_org_pulp_v1beta2_manifest#values DataK8SRepoManagerPulpprojectOrgPulpV1Beta2Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsToTerraform(struct?: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsToHclTerraform(struct?: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions | cdktf.IResolvable): any {
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
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
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

export class DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._operator = undefined;
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
      this._operator = value.operator;
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

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
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

export class DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsOutputReference {
    return new DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector {
  /**
  * matchExpressions is a list of label selector requirements. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/repo_manager_pulpproject_org_pulp_v1beta2_manifest#match_expressions DataK8SRepoManagerPulpprojectOrgPulpV1Beta2Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/repo_manager_pulpproject_org_pulp_v1beta2_manifest#match_labels DataK8SRepoManagerPulpprojectOrgPulpV1Beta2Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorToTerraform(struct?: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorToHclTerraform(struct?: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsList",
    },
    match_labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.matchLabels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchExpressions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchExpressions = this._matchExpressions?.internalValue;
    }
    if (this._matchLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchLabels = this._matchLabels;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchExpressions.internalValue = undefined;
      this._matchLabels = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matchExpressions.internalValue = value.matchExpressions;
      this._matchLabels = value.matchLabels;
    }
  }

  // match_expressions - computed: false, optional: true, required: false
  private _matchExpressions = new DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions[] | cdktf.IResolvable) {
    this._matchExpressions.internalValue = value;
  }
  public resetMatchExpressions() {
    this._matchExpressions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchExpressionsInput() {
    return this._matchExpressions.internalValue;
  }

  // match_labels - computed: false, optional: true, required: false
  private _matchLabels?: { [key: string]: string }; 
  public get matchLabels() {
    return this.getStringMapAttribute('match_labels');
  }
  public set matchLabels(value: { [key: string]: string }) {
    this._matchLabels = value;
  }
  public resetMatchLabels() {
    this._matchLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchLabelsInput() {
    return this._matchLabels;
  }
}
export interface DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/repo_manager_pulpproject_org_pulp_v1beta2_manifest#key DataK8SRepoManagerPulpprojectOrgPulpV1Beta2Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/repo_manager_pulpproject_org_pulp_v1beta2_manifest#operator DataK8SRepoManagerPulpprojectOrgPulpV1Beta2Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/repo_manager_pulpproject_org_pulp_v1beta2_manifest#values DataK8SRepoManagerPulpprojectOrgPulpV1Beta2Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsToTerraform(struct?: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsToHclTerraform(struct?: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions | cdktf.IResolvable): any {
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
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
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

export class DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._operator = undefined;
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
      this._operator = value.operator;
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

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
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

export class DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsOutputReference {
    return new DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector {
  /**
  * matchExpressions is a list of label selector requirements. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/repo_manager_pulpproject_org_pulp_v1beta2_manifest#match_expressions DataK8SRepoManagerPulpprojectOrgPulpV1Beta2Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/repo_manager_pulpproject_org_pulp_v1beta2_manifest#match_labels DataK8SRepoManagerPulpprojectOrgPulpV1Beta2Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorToTerraform(struct?: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorToHclTerraform(struct?: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsList",
    },
    match_labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.matchLabels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchExpressions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchExpressions = this._matchExpressions?.internalValue;
    }
    if (this._matchLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchLabels = this._matchLabels;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchExpressions.internalValue = undefined;
      this._matchLabels = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matchExpressions.internalValue = value.matchExpressions;
      this._matchLabels = value.matchLabels;
    }
  }

  // match_expressions - computed: false, optional: true, required: false
  private _matchExpressions = new DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions[] | cdktf.IResolvable) {
    this._matchExpressions.internalValue = value;
  }
  public resetMatchExpressions() {
    this._matchExpressions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchExpressionsInput() {
    return this._matchExpressions.internalValue;
  }

  // match_labels - computed: false, optional: true, required: false
  private _matchLabels?: { [key: string]: string }; 
  public get matchLabels() {
    return this.getStringMapAttribute('match_labels');
  }
  public set matchLabels(value: { [key: string]: string }) {
    this._matchLabels = value;
  }
  public resetMatchLabels() {
    this._matchLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchLabelsInput() {
    return this._matchLabels;
  }
}
export interface DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm {
  /**
  * A label query over a set of resources, in this case pods. If it's null, this PodAffinityTerm matches with no Pods.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/repo_manager_pulpproject_org_pulp_v1beta2_manifest#label_selector DataK8SRepoManagerPulpprojectOrgPulpV1Beta2Manifest#label_selector}
  */
  readonly labelSelector?: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector;
  /**
  * MatchLabelKeys is a set of pod label keys to select which pods will be taken into consideration. The keys are used to lookup values from the incoming pod labels, those key-value labels are merged with 'labelSelector' as 'key in (value)' to select the group of existing pods which pods will be taken into consideration for the incoming pod's pod (anti) affinity. Keys that don't exist in the incoming pod labels will be ignored. The default value is empty. The same key is forbidden to exist in both matchLabelKeys and labelSelector. Also, matchLabelKeys cannot be set when labelSelector isn't set. This is an alpha field and requires enabling MatchLabelKeysInPodAffinity feature gate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/repo_manager_pulpproject_org_pulp_v1beta2_manifest#match_label_keys DataK8SRepoManagerPulpprojectOrgPulpV1Beta2Manifest#match_label_keys}
  */
  readonly matchLabelKeys?: string[];
  /**
  * MismatchLabelKeys is a set of pod label keys to select which pods will be taken into consideration. The keys are used to lookup values from the incoming pod labels, those key-value labels are merged with 'labelSelector' as 'key notin (value)' to select the group of existing pods which pods will be taken into consideration for the incoming pod's pod (anti) affinity. Keys that don't exist in the incoming pod labels will be ignored. The default value is empty. The same key is forbidden to exist in both mismatchLabelKeys and labelSelector. Also, mismatchLabelKeys cannot be set when labelSelector isn't set. This is an alpha field and requires enabling MatchLabelKeysInPodAffinity feature gate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/repo_manager_pulpproject_org_pulp_v1beta2_manifest#mismatch_label_keys DataK8SRepoManagerPulpprojectOrgPulpV1Beta2Manifest#mismatch_label_keys}
  */
  readonly mismatchLabelKeys?: string[];
  /**
  * A label query over the set of namespaces that the term applies to. The term is applied to the union of the namespaces selected by this field and the ones listed in the namespaces field. null selector and null or empty namespaces list means 'this pod's namespace'. An empty selector ({}) matches all namespaces.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/repo_manager_pulpproject_org_pulp_v1beta2_manifest#namespace_selector DataK8SRepoManagerPulpprojectOrgPulpV1Beta2Manifest#namespace_selector}
  */
  readonly namespaceSelector?: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector;
  /**
  * namespaces specifies a static list of namespace names that the term applies to. The term is applied to the union of the namespaces listed in this field and the ones selected by namespaceSelector. null or empty namespaces list and null namespaceSelector means 'this pod's namespace'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/repo_manager_pulpproject_org_pulp_v1beta2_manifest#namespaces DataK8SRepoManagerPulpprojectOrgPulpV1Beta2Manifest#namespaces}
  */
  readonly namespaces?: string[];
  /**
  * This pod should be co-located (affinity) or not co-located (anti-affinity) with the pods matching the labelSelector in the specified namespaces, where co-located is defined as running on a node whose value of the label with key topologyKey matches that of any node on which any of the selected pods is running. Empty topologyKey is not allowed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/repo_manager_pulpproject_org_pulp_v1beta2_manifest#topology_key DataK8SRepoManagerPulpprojectOrgPulpV1Beta2Manifest#topology_key}
  */
  readonly topologyKey: string;
}

export function dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermToTerraform(struct?: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    label_selector: dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorToTerraform(struct!.labelSelector),
    match_label_keys: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.matchLabelKeys),
    mismatch_label_keys: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.mismatchLabelKeys),
    namespace_selector: dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorToTerraform(struct!.namespaceSelector),
    namespaces: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.namespaces),
    topology_key: cdktf.stringToTerraform(struct!.topologyKey),
  }
}


export function dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermToHclTerraform(struct?: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    label_selector: {
      value: dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorToHclTerraform(struct!.labelSelector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector",
    },
    match_label_keys: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.matchLabelKeys),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    mismatch_label_keys: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.mismatchLabelKeys),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    namespace_selector: {
      value: dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorToHclTerraform(struct!.namespaceSelector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector",
    },
    namespaces: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.namespaces),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    topology_key: {
      value: cdktf.stringToHclTerraform(struct!.topologyKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._labelSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.labelSelector = this._labelSelector?.internalValue;
    }
    if (this._matchLabelKeys !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchLabelKeys = this._matchLabelKeys;
    }
    if (this._mismatchLabelKeys !== undefined) {
      hasAnyValues = true;
      internalValueResult.mismatchLabelKeys = this._mismatchLabelKeys;
    }
    if (this._namespaceSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespaceSelector = this._namespaceSelector?.internalValue;
    }
    if (this._namespaces !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespaces = this._namespaces;
    }
    if (this._topologyKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.topologyKey = this._topologyKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._labelSelector.internalValue = undefined;
      this._matchLabelKeys = undefined;
      this._mismatchLabelKeys = undefined;
      this._namespaceSelector.internalValue = undefined;
      this._namespaces = undefined;
      this._topologyKey = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._labelSelector.internalValue = value.labelSelector;
      this._matchLabelKeys = value.matchLabelKeys;
      this._mismatchLabelKeys = value.mismatchLabelKeys;
      this._namespaceSelector.internalValue = value.namespaceSelector;
      this._namespaces = value.namespaces;
      this._topologyKey = value.topologyKey;
    }
  }

  // label_selector - computed: false, optional: true, required: false
  private _labelSelector = new DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorOutputReference(this, "label_selector");
  public get labelSelector() {
    return this._labelSelector;
  }
  public putLabelSelector(value: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector) {
    this._labelSelector.internalValue = value;
  }
  public resetLabelSelector() {
    this._labelSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelSelectorInput() {
    return this._labelSelector.internalValue;
  }

  // match_label_keys - computed: false, optional: true, required: false
  private _matchLabelKeys?: string[]; 
  public get matchLabelKeys() {
    return this.getListAttribute('match_label_keys');
  }
  public set matchLabelKeys(value: string[]) {
    this._matchLabelKeys = value;
  }
  public resetMatchLabelKeys() {
    this._matchLabelKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchLabelKeysInput() {
    return this._matchLabelKeys;
  }

  // mismatch_label_keys - computed: false, optional: true, required: false
  private _mismatchLabelKeys?: string[]; 
  public get mismatchLabelKeys() {
    return this.getListAttribute('mismatch_label_keys');
  }
  public set mismatchLabelKeys(value: string[]) {
    this._mismatchLabelKeys = value;
  }
  public resetMismatchLabelKeys() {
    this._mismatchLabelKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mismatchLabelKeysInput() {
    return this._mismatchLabelKeys;
  }

  // namespace_selector - computed: false, optional: true, required: false
  private _namespaceSelector = new DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorOutputReference(this, "namespace_selector");
  public get namespaceSelector() {
    return this._namespaceSelector;
  }
  public putNamespaceSelector(value: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector) {
    this._namespaceSelector.internalValue = value;
  }
  public resetNamespaceSelector() {
    this._namespaceSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceSelectorInput() {
    return this._namespaceSelector.internalValue;
  }

  // namespaces - computed: false, optional: true, required: false
  private _namespaces?: string[]; 
  public get namespaces() {
    return this.getListAttribute('namespaces');
  }
  public set namespaces(value: string[]) {
    this._namespaces = value;
  }
  public resetNamespaces() {
    this._namespaces = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespacesInput() {
    return this._namespaces;
  }

  // topology_key - computed: false, optional: false, required: true
  private _topologyKey?: string; 
  public get topologyKey() {
    return this.getStringAttribute('topology_key');
  }
  public set topologyKey(value: string) {
    this._topologyKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get topologyKeyInput() {
    return this._topologyKey;
  }
}
export interface DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecution {
  /**
  * Required. A pod affinity term, associated with the corresponding weight.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/repo_manager_pulpproject_org_pulp_v1beta2_manifest#pod_affinity_term DataK8SRepoManagerPulpprojectOrgPulpV1Beta2Manifest#pod_affinity_term}
  */
  readonly podAffinityTerm: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm;
  /**
  * weight associated with matching the corresponding podAffinityTerm, in the range 1-100.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/repo_manager_pulpproject_org_pulp_v1beta2_manifest#weight DataK8SRepoManagerPulpprojectOrgPulpV1Beta2Manifest#weight}
  */
  readonly weight: number;
}

export function dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionToTerraform(struct?: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    pod_affinity_term: dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermToTerraform(struct!.podAffinityTerm),
    weight: cdktf.numberToTerraform(struct!.weight),
  }
}


export function dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionToHclTerraform(struct?: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    pod_affinity_term: {
      value: dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermToHclTerraform(struct!.podAffinityTerm),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm",
    },
    weight: {
      value: cdktf.numberToHclTerraform(struct!.weight),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._podAffinityTerm?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.podAffinityTerm = this._podAffinityTerm?.internalValue;
    }
    if (this._weight !== undefined) {
      hasAnyValues = true;
      internalValueResult.weight = this._weight;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._podAffinityTerm.internalValue = undefined;
      this._weight = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._podAffinityTerm.internalValue = value.podAffinityTerm;
      this._weight = value.weight;
    }
  }

  // pod_affinity_term - computed: false, optional: false, required: true
  private _podAffinityTerm = new DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermOutputReference(this, "pod_affinity_term");
  public get podAffinityTerm() {
    return this._podAffinityTerm;
  }
  public putPodAffinityTerm(value: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm) {
    this._podAffinityTerm.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get podAffinityTermInput() {
    return this._podAffinityTerm.internalValue;
  }

  // weight - computed: false, optional: false, required: true
  private _weight?: number; 
  public get weight() {
    return this.getNumberAttribute('weight');
  }
  public set weight(value: number) {
    this._weight = value;
  }
  // Temporarily expose input value. Use with caution.
  public get weightInput() {
    return this._weight;
  }
}

export class DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionList extends cdktf.ComplexList {
  public internalValue? : DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecution[] | cdktf.IResolvable

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
  public get(index: number): DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionOutputReference {
    return new DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/repo_manager_pulpproject_org_pulp_v1beta2_manifest#key DataK8SRepoManagerPulpprojectOrgPulpV1Beta2Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/repo_manager_pulpproject_org_pulp_v1beta2_manifest#operator DataK8SRepoManagerPulpprojectOrgPulpV1Beta2Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/repo_manager_pulpproject_org_pulp_v1beta2_manifest#values DataK8SRepoManagerPulpprojectOrgPulpV1Beta2Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsToTerraform(struct?: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsToHclTerraform(struct?: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions | cdktf.IResolvable): any {
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
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
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

export class DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._operator = undefined;
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
      this._operator = value.operator;
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

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
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

export class DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsOutputReference {
    return new DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector {
  /**
  * matchExpressions is a list of label selector requirements. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/repo_manager_pulpproject_org_pulp_v1beta2_manifest#match_expressions DataK8SRepoManagerPulpprojectOrgPulpV1Beta2Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/repo_manager_pulpproject_org_pulp_v1beta2_manifest#match_labels DataK8SRepoManagerPulpprojectOrgPulpV1Beta2Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorToTerraform(struct?: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorToHclTerraform(struct?: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsList",
    },
    match_labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.matchLabels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchExpressions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchExpressions = this._matchExpressions?.internalValue;
    }
    if (this._matchLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchLabels = this._matchLabels;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchExpressions.internalValue = undefined;
      this._matchLabels = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matchExpressions.internalValue = value.matchExpressions;
      this._matchLabels = value.matchLabels;
    }
  }

  // match_expressions - computed: false, optional: true, required: false
  private _matchExpressions = new DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions[] | cdktf.IResolvable) {
    this._matchExpressions.internalValue = value;
  }
  public resetMatchExpressions() {
    this._matchExpressions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchExpressionsInput() {
    return this._matchExpressions.internalValue;
  }

  // match_labels - computed: false, optional: true, required: false
  private _matchLabels?: { [key: string]: string }; 
  public get matchLabels() {
    return this.getStringMapAttribute('match_labels');
  }
  public set matchLabels(value: { [key: string]: string }) {
    this._matchLabels = value;
  }
  public resetMatchLabels() {
    this._matchLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchLabelsInput() {
    return this._matchLabels;
  }
}
export interface DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/repo_manager_pulpproject_org_pulp_v1beta2_manifest#key DataK8SRepoManagerPulpprojectOrgPulpV1Beta2Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/repo_manager_pulpproject_org_pulp_v1beta2_manifest#operator DataK8SRepoManagerPulpprojectOrgPulpV1Beta2Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/repo_manager_pulpproject_org_pulp_v1beta2_manifest#values DataK8SRepoManagerPulpprojectOrgPulpV1Beta2Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsToTerraform(struct?: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsToHclTerraform(struct?: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions | cdktf.IResolvable): any {
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
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
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

export class DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._operator = undefined;
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
      this._operator = value.operator;
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

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
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

export class DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsOutputReference {
    return new DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector {
  /**
  * matchExpressions is a list of label selector requirements. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/repo_manager_pulpproject_org_pulp_v1beta2_manifest#match_expressions DataK8SRepoManagerPulpprojectOrgPulpV1Beta2Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/repo_manager_pulpproject_org_pulp_v1beta2_manifest#match_labels DataK8SRepoManagerPulpprojectOrgPulpV1Beta2Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorToTerraform(struct?: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorToHclTerraform(struct?: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsList",
    },
    match_labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.matchLabels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchExpressions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchExpressions = this._matchExpressions?.internalValue;
    }
    if (this._matchLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchLabels = this._matchLabels;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchExpressions.internalValue = undefined;
      this._matchLabels = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matchExpressions.internalValue = value.matchExpressions;
      this._matchLabels = value.matchLabels;
    }
  }

  // match_expressions - computed: false, optional: true, required: false
  private _matchExpressions = new DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions[] | cdktf.IResolvable) {
    this._matchExpressions.internalValue = value;
  }
  public resetMatchExpressions() {
    this._matchExpressions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchExpressionsInput() {
    return this._matchExpressions.internalValue;
  }

  // match_labels - computed: false, optional: true, required: false
  private _matchLabels?: { [key: string]: string }; 
  public get matchLabels() {
    return this.getStringMapAttribute('match_labels');
  }
  public set matchLabels(value: { [key: string]: string }) {
    this._matchLabels = value;
  }
  public resetMatchLabels() {
    this._matchLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchLabelsInput() {
    return this._matchLabels;
  }
}
export interface DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecution {
  /**
  * A label query over a set of resources, in this case pods. If it's null, this PodAffinityTerm matches with no Pods.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/repo_manager_pulpproject_org_pulp_v1beta2_manifest#label_selector DataK8SRepoManagerPulpprojectOrgPulpV1Beta2Manifest#label_selector}
  */
  readonly labelSelector?: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector;
  /**
  * MatchLabelKeys is a set of pod label keys to select which pods will be taken into consideration. The keys are used to lookup values from the incoming pod labels, those key-value labels are merged with 'labelSelector' as 'key in (value)' to select the group of existing pods which pods will be taken into consideration for the incoming pod's pod (anti) affinity. Keys that don't exist in the incoming pod labels will be ignored. The default value is empty. The same key is forbidden to exist in both matchLabelKeys and labelSelector. Also, matchLabelKeys cannot be set when labelSelector isn't set. This is an alpha field and requires enabling MatchLabelKeysInPodAffinity feature gate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/repo_manager_pulpproject_org_pulp_v1beta2_manifest#match_label_keys DataK8SRepoManagerPulpprojectOrgPulpV1Beta2Manifest#match_label_keys}
  */
  readonly matchLabelKeys?: string[];
  /**
  * MismatchLabelKeys is a set of pod label keys to select which pods will be taken into consideration. The keys are used to lookup values from the incoming pod labels, those key-value labels are merged with 'labelSelector' as 'key notin (value)' to select the group of existing pods which pods will be taken into consideration for the incoming pod's pod (anti) affinity. Keys that don't exist in the incoming pod labels will be ignored. The default value is empty. The same key is forbidden to exist in both mismatchLabelKeys and labelSelector. Also, mismatchLabelKeys cannot be set when labelSelector isn't set. This is an alpha field and requires enabling MatchLabelKeysInPodAffinity feature gate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/repo_manager_pulpproject_org_pulp_v1beta2_manifest#mismatch_label_keys DataK8SRepoManagerPulpprojectOrgPulpV1Beta2Manifest#mismatch_label_keys}
  */
  readonly mismatchLabelKeys?: string[];
  /**
  * A label query over the set of namespaces that the term applies to. The term is applied to the union of the namespaces selected by this field and the ones listed in the namespaces field. null selector and null or empty namespaces list means 'this pod's namespace'. An empty selector ({}) matches all namespaces.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/repo_manager_pulpproject_org_pulp_v1beta2_manifest#namespace_selector DataK8SRepoManagerPulpprojectOrgPulpV1Beta2Manifest#namespace_selector}
  */
  readonly namespaceSelector?: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector;
  /**
  * namespaces specifies a static list of namespace names that the term applies to. The term is applied to the union of the namespaces listed in this field and the ones selected by namespaceSelector. null or empty namespaces list and null namespaceSelector means 'this pod's namespace'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/repo_manager_pulpproject_org_pulp_v1beta2_manifest#namespaces DataK8SRepoManagerPulpprojectOrgPulpV1Beta2Manifest#namespaces}
  */
  readonly namespaces?: string[];
  /**
  * This pod should be co-located (affinity) or not co-located (anti-affinity) with the pods matching the labelSelector in the specified namespaces, where co-located is defined as running on a node whose value of the label with key topologyKey matches that of any node on which any of the selected pods is running. Empty topologyKey is not allowed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/repo_manager_pulpproject_org_pulp_v1beta2_manifest#topology_key DataK8SRepoManagerPulpprojectOrgPulpV1Beta2Manifest#topology_key}
  */
  readonly topologyKey: string;
}

export function dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionToTerraform(struct?: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    label_selector: dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorToTerraform(struct!.labelSelector),
    match_label_keys: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.matchLabelKeys),
    mismatch_label_keys: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.mismatchLabelKeys),
    namespace_selector: dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorToTerraform(struct!.namespaceSelector),
    namespaces: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.namespaces),
    topology_key: cdktf.stringToTerraform(struct!.topologyKey),
  }
}


export function dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionToHclTerraform(struct?: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    label_selector: {
      value: dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorToHclTerraform(struct!.labelSelector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector",
    },
    match_label_keys: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.matchLabelKeys),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    mismatch_label_keys: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.mismatchLabelKeys),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    namespace_selector: {
      value: dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorToHclTerraform(struct!.namespaceSelector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector",
    },
    namespaces: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.namespaces),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    topology_key: {
      value: cdktf.stringToHclTerraform(struct!.topologyKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._labelSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.labelSelector = this._labelSelector?.internalValue;
    }
    if (this._matchLabelKeys !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchLabelKeys = this._matchLabelKeys;
    }
    if (this._mismatchLabelKeys !== undefined) {
      hasAnyValues = true;
      internalValueResult.mismatchLabelKeys = this._mismatchLabelKeys;
    }
    if (this._namespaceSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespaceSelector = this._namespaceSelector?.internalValue;
    }
    if (this._namespaces !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespaces = this._namespaces;
    }
    if (this._topologyKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.topologyKey = this._topologyKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._labelSelector.internalValue = undefined;
      this._matchLabelKeys = undefined;
      this._mismatchLabelKeys = undefined;
      this._namespaceSelector.internalValue = undefined;
      this._namespaces = undefined;
      this._topologyKey = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._labelSelector.internalValue = value.labelSelector;
      this._matchLabelKeys = value.matchLabelKeys;
      this._mismatchLabelKeys = value.mismatchLabelKeys;
      this._namespaceSelector.internalValue = value.namespaceSelector;
      this._namespaces = value.namespaces;
      this._topologyKey = value.topologyKey;
    }
  }

  // label_selector - computed: false, optional: true, required: false
  private _labelSelector = new DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorOutputReference(this, "label_selector");
  public get labelSelector() {
    return this._labelSelector;
  }
  public putLabelSelector(value: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector) {
    this._labelSelector.internalValue = value;
  }
  public resetLabelSelector() {
    this._labelSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelSelectorInput() {
    return this._labelSelector.internalValue;
  }

  // match_label_keys - computed: false, optional: true, required: false
  private _matchLabelKeys?: string[]; 
  public get matchLabelKeys() {
    return this.getListAttribute('match_label_keys');
  }
  public set matchLabelKeys(value: string[]) {
    this._matchLabelKeys = value;
  }
  public resetMatchLabelKeys() {
    this._matchLabelKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchLabelKeysInput() {
    return this._matchLabelKeys;
  }

  // mismatch_label_keys - computed: false, optional: true, required: false
  private _mismatchLabelKeys?: string[]; 
  public get mismatchLabelKeys() {
    return this.getListAttribute('mismatch_label_keys');
  }
  public set mismatchLabelKeys(value: string[]) {
    this._mismatchLabelKeys = value;
  }
  public resetMismatchLabelKeys() {
    this._mismatchLabelKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mismatchLabelKeysInput() {
    return this._mismatchLabelKeys;
  }

  // namespace_selector - computed: false, optional: true, required: false
  private _namespaceSelector = new DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorOutputReference(this, "namespace_selector");
  public get namespaceSelector() {
    return this._namespaceSelector;
  }
  public putNamespaceSelector(value: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector) {
    this._namespaceSelector.internalValue = value;
  }
  public resetNamespaceSelector() {
    this._namespaceSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceSelectorInput() {
    return this._namespaceSelector.internalValue;
  }

  // namespaces - computed: false, optional: true, required: false
  private _namespaces?: string[]; 
  public get namespaces() {
    return this.getListAttribute('namespaces');
  }
  public set namespaces(value: string[]) {
    this._namespaces = value;
  }
  public resetNamespaces() {
    this._namespaces = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespacesInput() {
    return this._namespaces;
  }

  // topology_key - computed: false, optional: false, required: true
  private _topologyKey?: string; 
  public get topologyKey() {
    return this.getStringAttribute('topology_key');
  }
  public set topologyKey(value: string) {
    this._topologyKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get topologyKeyInput() {
    return this._topologyKey;
  }
}

export class DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionList extends cdktf.ComplexList {
  public internalValue? : DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecution[] | cdktf.IResolvable

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
  public get(index: number): DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionOutputReference {
    return new DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityPodAffinity {
  /**
  * The scheduler will prefer to schedule pods to nodes that satisfy the affinity expressions specified by this field, but it may choose a node that violates one or more of the expressions. The node that is most preferred is the one with the greatest sum of weights, i.e. for each node that meets all of the scheduling requirements (resource request, requiredDuringScheduling affinity expressions, etc.), compute a sum by iterating through the elements of this field and adding 'weight' to the sum if the node has pods which matches the corresponding podAffinityTerm; the node(s) with the highest sum are the most preferred.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/repo_manager_pulpproject_org_pulp_v1beta2_manifest#preferred_during_scheduling_ignored_during_execution DataK8SRepoManagerPulpprojectOrgPulpV1Beta2Manifest#preferred_during_scheduling_ignored_during_execution}
  */
  readonly preferredDuringSchedulingIgnoredDuringExecution?: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecution[] | cdktf.IResolvable;
  /**
  * If the affinity requirements specified by this field are not met at scheduling time, the pod will not be scheduled onto the node. If the affinity requirements specified by this field cease to be met at some point during pod execution (e.g. due to a pod label update), the system may or may not try to eventually evict the pod from its node. When there are multiple elements, the lists of nodes corresponding to each podAffinityTerm are intersected, i.e. all terms must be satisfied.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/repo_manager_pulpproject_org_pulp_v1beta2_manifest#required_during_scheduling_ignored_during_execution DataK8SRepoManagerPulpprojectOrgPulpV1Beta2Manifest#required_during_scheduling_ignored_during_execution}
  */
  readonly requiredDuringSchedulingIgnoredDuringExecution?: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecution[] | cdktf.IResolvable;
}

export function dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityPodAffinityToTerraform(struct?: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityPodAffinity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    preferred_during_scheduling_ignored_during_execution: cdktf.listMapper(dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionToTerraform, false)(struct!.preferredDuringSchedulingIgnoredDuringExecution),
    required_during_scheduling_ignored_during_execution: cdktf.listMapper(dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionToTerraform, false)(struct!.requiredDuringSchedulingIgnoredDuringExecution),
  }
}


export function dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityPodAffinityToHclTerraform(struct?: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityPodAffinity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    preferred_during_scheduling_ignored_during_execution: {
      value: cdktf.listMapperHcl(dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionToHclTerraform, false)(struct!.preferredDuringSchedulingIgnoredDuringExecution),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionList",
    },
    required_during_scheduling_ignored_during_execution: {
      value: cdktf.listMapperHcl(dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionToHclTerraform, false)(struct!.requiredDuringSchedulingIgnoredDuringExecution),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityPodAffinityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityPodAffinity | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._preferredDuringSchedulingIgnoredDuringExecution?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.preferredDuringSchedulingIgnoredDuringExecution = this._preferredDuringSchedulingIgnoredDuringExecution?.internalValue;
    }
    if (this._requiredDuringSchedulingIgnoredDuringExecution?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.requiredDuringSchedulingIgnoredDuringExecution = this._requiredDuringSchedulingIgnoredDuringExecution?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityPodAffinity | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._preferredDuringSchedulingIgnoredDuringExecution.internalValue = undefined;
      this._requiredDuringSchedulingIgnoredDuringExecution.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._preferredDuringSchedulingIgnoredDuringExecution.internalValue = value.preferredDuringSchedulingIgnoredDuringExecution;
      this._requiredDuringSchedulingIgnoredDuringExecution.internalValue = value.requiredDuringSchedulingIgnoredDuringExecution;
    }
  }

  // preferred_during_scheduling_ignored_during_execution - computed: false, optional: true, required: false
  private _preferredDuringSchedulingIgnoredDuringExecution = new DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionList(this, "preferred_during_scheduling_ignored_during_execution", false);
  public get preferredDuringSchedulingIgnoredDuringExecution() {
    return this._preferredDuringSchedulingIgnoredDuringExecution;
  }
  public putPreferredDuringSchedulingIgnoredDuringExecution(value: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecution[] | cdktf.IResolvable) {
    this._preferredDuringSchedulingIgnoredDuringExecution.internalValue = value;
  }
  public resetPreferredDuringSchedulingIgnoredDuringExecution() {
    this._preferredDuringSchedulingIgnoredDuringExecution.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferredDuringSchedulingIgnoredDuringExecutionInput() {
    return this._preferredDuringSchedulingIgnoredDuringExecution.internalValue;
  }

  // required_during_scheduling_ignored_during_execution - computed: false, optional: true, required: false
  private _requiredDuringSchedulingIgnoredDuringExecution = new DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionList(this, "required_during_scheduling_ignored_during_execution", false);
  public get requiredDuringSchedulingIgnoredDuringExecution() {
    return this._requiredDuringSchedulingIgnoredDuringExecution;
  }
  public putRequiredDuringSchedulingIgnoredDuringExecution(value: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecution[] | cdktf.IResolvable) {
    this._requiredDuringSchedulingIgnoredDuringExecution.internalValue = value;
  }
  public resetRequiredDuringSchedulingIgnoredDuringExecution() {
    this._requiredDuringSchedulingIgnoredDuringExecution.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredDuringSchedulingIgnoredDuringExecutionInput() {
    return this._requiredDuringSchedulingIgnoredDuringExecution.internalValue;
  }
}
export interface DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/repo_manager_pulpproject_org_pulp_v1beta2_manifest#key DataK8SRepoManagerPulpprojectOrgPulpV1Beta2Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/repo_manager_pulpproject_org_pulp_v1beta2_manifest#operator DataK8SRepoManagerPulpprojectOrgPulpV1Beta2Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/repo_manager_pulpproject_org_pulp_v1beta2_manifest#values DataK8SRepoManagerPulpprojectOrgPulpV1Beta2Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsToTerraform(struct?: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsToHclTerraform(struct?: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions | cdktf.IResolvable): any {
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
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
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

export class DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._operator = undefined;
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
      this._operator = value.operator;
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

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
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

export class DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsOutputReference {
    return new DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector {
  /**
  * matchExpressions is a list of label selector requirements. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/repo_manager_pulpproject_org_pulp_v1beta2_manifest#match_expressions DataK8SRepoManagerPulpprojectOrgPulpV1Beta2Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/repo_manager_pulpproject_org_pulp_v1beta2_manifest#match_labels DataK8SRepoManagerPulpprojectOrgPulpV1Beta2Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorToTerraform(struct?: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorToHclTerraform(struct?: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsList",
    },
    match_labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.matchLabels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchExpressions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchExpressions = this._matchExpressions?.internalValue;
    }
    if (this._matchLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchLabels = this._matchLabels;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchExpressions.internalValue = undefined;
      this._matchLabels = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matchExpressions.internalValue = value.matchExpressions;
      this._matchLabels = value.matchLabels;
    }
  }

  // match_expressions - computed: false, optional: true, required: false
  private _matchExpressions = new DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions[] | cdktf.IResolvable) {
    this._matchExpressions.internalValue = value;
  }
  public resetMatchExpressions() {
    this._matchExpressions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchExpressionsInput() {
    return this._matchExpressions.internalValue;
  }

  // match_labels - computed: false, optional: true, required: false
  private _matchLabels?: { [key: string]: string }; 
  public get matchLabels() {
    return this.getStringMapAttribute('match_labels');
  }
  public set matchLabels(value: { [key: string]: string }) {
    this._matchLabels = value;
  }
  public resetMatchLabels() {
    this._matchLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchLabelsInput() {
    return this._matchLabels;
  }
}
export interface DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/repo_manager_pulpproject_org_pulp_v1beta2_manifest#key DataK8SRepoManagerPulpprojectOrgPulpV1Beta2Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/repo_manager_pulpproject_org_pulp_v1beta2_manifest#operator DataK8SRepoManagerPulpprojectOrgPulpV1Beta2Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/repo_manager_pulpproject_org_pulp_v1beta2_manifest#values DataK8SRepoManagerPulpprojectOrgPulpV1Beta2Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsToTerraform(struct?: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsToHclTerraform(struct?: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions | cdktf.IResolvable): any {
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
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
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

export class DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._operator = undefined;
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
      this._operator = value.operator;
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

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
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

export class DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsOutputReference {
    return new DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector {
  /**
  * matchExpressions is a list of label selector requirements. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/repo_manager_pulpproject_org_pulp_v1beta2_manifest#match_expressions DataK8SRepoManagerPulpprojectOrgPulpV1Beta2Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/repo_manager_pulpproject_org_pulp_v1beta2_manifest#match_labels DataK8SRepoManagerPulpprojectOrgPulpV1Beta2Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorToTerraform(struct?: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorToHclTerraform(struct?: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsList",
    },
    match_labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.matchLabels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchExpressions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchExpressions = this._matchExpressions?.internalValue;
    }
    if (this._matchLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchLabels = this._matchLabels;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchExpressions.internalValue = undefined;
      this._matchLabels = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matchExpressions.internalValue = value.matchExpressions;
      this._matchLabels = value.matchLabels;
    }
  }

  // match_expressions - computed: false, optional: true, required: false
  private _matchExpressions = new DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions[] | cdktf.IResolvable) {
    this._matchExpressions.internalValue = value;
  }
  public resetMatchExpressions() {
    this._matchExpressions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchExpressionsInput() {
    return this._matchExpressions.internalValue;
  }

  // match_labels - computed: false, optional: true, required: false
  private _matchLabels?: { [key: string]: string }; 
  public get matchLabels() {
    return this.getStringMapAttribute('match_labels');
  }
  public set matchLabels(value: { [key: string]: string }) {
    this._matchLabels = value;
  }
  public resetMatchLabels() {
    this._matchLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchLabelsInput() {
    return this._matchLabels;
  }
}
export interface DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm {
  /**
  * A label query over a set of resources, in this case pods. If it's null, this PodAffinityTerm matches with no Pods.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/repo_manager_pulpproject_org_pulp_v1beta2_manifest#label_selector DataK8SRepoManagerPulpprojectOrgPulpV1Beta2Manifest#label_selector}
  */
  readonly labelSelector?: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector;
  /**
  * MatchLabelKeys is a set of pod label keys to select which pods will be taken into consideration. The keys are used to lookup values from the incoming pod labels, those key-value labels are merged with 'labelSelector' as 'key in (value)' to select the group of existing pods which pods will be taken into consideration for the incoming pod's pod (anti) affinity. Keys that don't exist in the incoming pod labels will be ignored. The default value is empty. The same key is forbidden to exist in both matchLabelKeys and labelSelector. Also, matchLabelKeys cannot be set when labelSelector isn't set. This is an alpha field and requires enabling MatchLabelKeysInPodAffinity feature gate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/repo_manager_pulpproject_org_pulp_v1beta2_manifest#match_label_keys DataK8SRepoManagerPulpprojectOrgPulpV1Beta2Manifest#match_label_keys}
  */
  readonly matchLabelKeys?: string[];
  /**
  * MismatchLabelKeys is a set of pod label keys to select which pods will be taken into consideration. The keys are used to lookup values from the incoming pod labels, those key-value labels are merged with 'labelSelector' as 'key notin (value)' to select the group of existing pods which pods will be taken into consideration for the incoming pod's pod (anti) affinity. Keys that don't exist in the incoming pod labels will be ignored. The default value is empty. The same key is forbidden to exist in both mismatchLabelKeys and labelSelector. Also, mismatchLabelKeys cannot be set when labelSelector isn't set. This is an alpha field and requires enabling MatchLabelKeysInPodAffinity feature gate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/repo_manager_pulpproject_org_pulp_v1beta2_manifest#mismatch_label_keys DataK8SRepoManagerPulpprojectOrgPulpV1Beta2Manifest#mismatch_label_keys}
  */
  readonly mismatchLabelKeys?: string[];
  /**
  * A label query over the set of namespaces that the term applies to. The term is applied to the union of the namespaces selected by this field and the ones listed in the namespaces field. null selector and null or empty namespaces list means 'this pod's namespace'. An empty selector ({}) matches all namespaces.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/repo_manager_pulpproject_org_pulp_v1beta2_manifest#namespace_selector DataK8SRepoManagerPulpprojectOrgPulpV1Beta2Manifest#namespace_selector}
  */
  readonly namespaceSelector?: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector;
  /**
  * namespaces specifies a static list of namespace names that the term applies to. The term is applied to the union of the namespaces listed in this field and the ones selected by namespaceSelector. null or empty namespaces list and null namespaceSelector means 'this pod's namespace'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/repo_manager_pulpproject_org_pulp_v1beta2_manifest#namespaces DataK8SRepoManagerPulpprojectOrgPulpV1Beta2Manifest#namespaces}
  */
  readonly namespaces?: string[];
  /**
  * This pod should be co-located (affinity) or not co-located (anti-affinity) with the pods matching the labelSelector in the specified namespaces, where co-located is defined as running on a node whose value of the label with key topologyKey matches that of any node on which any of the selected pods is running. Empty topologyKey is not allowed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/repo_manager_pulpproject_org_pulp_v1beta2_manifest#topology_key DataK8SRepoManagerPulpprojectOrgPulpV1Beta2Manifest#topology_key}
  */
  readonly topologyKey: string;
}

export function dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermToTerraform(struct?: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    label_selector: dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorToTerraform(struct!.labelSelector),
    match_label_keys: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.matchLabelKeys),
    mismatch_label_keys: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.mismatchLabelKeys),
    namespace_selector: dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorToTerraform(struct!.namespaceSelector),
    namespaces: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.namespaces),
    topology_key: cdktf.stringToTerraform(struct!.topologyKey),
  }
}


export function dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermToHclTerraform(struct?: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    label_selector: {
      value: dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorToHclTerraform(struct!.labelSelector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector",
    },
    match_label_keys: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.matchLabelKeys),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    mismatch_label_keys: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.mismatchLabelKeys),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    namespace_selector: {
      value: dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorToHclTerraform(struct!.namespaceSelector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector",
    },
    namespaces: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.namespaces),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    topology_key: {
      value: cdktf.stringToHclTerraform(struct!.topologyKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._labelSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.labelSelector = this._labelSelector?.internalValue;
    }
    if (this._matchLabelKeys !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchLabelKeys = this._matchLabelKeys;
    }
    if (this._mismatchLabelKeys !== undefined) {
      hasAnyValues = true;
      internalValueResult.mismatchLabelKeys = this._mismatchLabelKeys;
    }
    if (this._namespaceSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespaceSelector = this._namespaceSelector?.internalValue;
    }
    if (this._namespaces !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespaces = this._namespaces;
    }
    if (this._topologyKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.topologyKey = this._topologyKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._labelSelector.internalValue = undefined;
      this._matchLabelKeys = undefined;
      this._mismatchLabelKeys = undefined;
      this._namespaceSelector.internalValue = undefined;
      this._namespaces = undefined;
      this._topologyKey = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._labelSelector.internalValue = value.labelSelector;
      this._matchLabelKeys = value.matchLabelKeys;
      this._mismatchLabelKeys = value.mismatchLabelKeys;
      this._namespaceSelector.internalValue = value.namespaceSelector;
      this._namespaces = value.namespaces;
      this._topologyKey = value.topologyKey;
    }
  }

  // label_selector - computed: false, optional: true, required: false
  private _labelSelector = new DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorOutputReference(this, "label_selector");
  public get labelSelector() {
    return this._labelSelector;
  }
  public putLabelSelector(value: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector) {
    this._labelSelector.internalValue = value;
  }
  public resetLabelSelector() {
    this._labelSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelSelectorInput() {
    return this._labelSelector.internalValue;
  }

  // match_label_keys - computed: false, optional: true, required: false
  private _matchLabelKeys?: string[]; 
  public get matchLabelKeys() {
    return this.getListAttribute('match_label_keys');
  }
  public set matchLabelKeys(value: string[]) {
    this._matchLabelKeys = value;
  }
  public resetMatchLabelKeys() {
    this._matchLabelKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchLabelKeysInput() {
    return this._matchLabelKeys;
  }

  // mismatch_label_keys - computed: false, optional: true, required: false
  private _mismatchLabelKeys?: string[]; 
  public get mismatchLabelKeys() {
    return this.getListAttribute('mismatch_label_keys');
  }
  public set mismatchLabelKeys(value: string[]) {
    this._mismatchLabelKeys = value;
  }
  public resetMismatchLabelKeys() {
    this._mismatchLabelKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mismatchLabelKeysInput() {
    return this._mismatchLabelKeys;
  }

  // namespace_selector - computed: false, optional: true, required: false
  private _namespaceSelector = new DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorOutputReference(this, "namespace_selector");
  public get namespaceSelector() {
    return this._namespaceSelector;
  }
  public putNamespaceSelector(value: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector) {
    this._namespaceSelector.internalValue = value;
  }
  public resetNamespaceSelector() {
    this._namespaceSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceSelectorInput() {
    return this._namespaceSelector.internalValue;
  }

  // namespaces - computed: false, optional: true, required: false
  private _namespaces?: string[]; 
  public get namespaces() {
    return this.getListAttribute('namespaces');
  }
  public set namespaces(value: string[]) {
    this._namespaces = value;
  }
  public resetNamespaces() {
    this._namespaces = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespacesInput() {
    return this._namespaces;
  }

  // topology_key - computed: false, optional: false, required: true
  private _topologyKey?: string; 
  public get topologyKey() {
    return this.getStringAttribute('topology_key');
  }
  public set topologyKey(value: string) {
    this._topologyKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get topologyKeyInput() {
    return this._topologyKey;
  }
}
export interface DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecution {
  /**
  * Required. A pod affinity term, associated with the corresponding weight.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/repo_manager_pulpproject_org_pulp_v1beta2_manifest#pod_affinity_term DataK8SRepoManagerPulpprojectOrgPulpV1Beta2Manifest#pod_affinity_term}
  */
  readonly podAffinityTerm: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm;
  /**
  * weight associated with matching the corresponding podAffinityTerm, in the range 1-100.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/repo_manager_pulpproject_org_pulp_v1beta2_manifest#weight DataK8SRepoManagerPulpprojectOrgPulpV1Beta2Manifest#weight}
  */
  readonly weight: number;
}

export function dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionToTerraform(struct?: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    pod_affinity_term: dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermToTerraform(struct!.podAffinityTerm),
    weight: cdktf.numberToTerraform(struct!.weight),
  }
}


export function dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionToHclTerraform(struct?: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    pod_affinity_term: {
      value: dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermToHclTerraform(struct!.podAffinityTerm),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm",
    },
    weight: {
      value: cdktf.numberToHclTerraform(struct!.weight),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._podAffinityTerm?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.podAffinityTerm = this._podAffinityTerm?.internalValue;
    }
    if (this._weight !== undefined) {
      hasAnyValues = true;
      internalValueResult.weight = this._weight;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._podAffinityTerm.internalValue = undefined;
      this._weight = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._podAffinityTerm.internalValue = value.podAffinityTerm;
      this._weight = value.weight;
    }
  }

  // pod_affinity_term - computed: false, optional: false, required: true
  private _podAffinityTerm = new DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermOutputReference(this, "pod_affinity_term");
  public get podAffinityTerm() {
    return this._podAffinityTerm;
  }
  public putPodAffinityTerm(value: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm) {
    this._podAffinityTerm.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get podAffinityTermInput() {
    return this._podAffinityTerm.internalValue;
  }

  // weight - computed: false, optional: false, required: true
  private _weight?: number; 
  public get weight() {
    return this.getNumberAttribute('weight');
  }
  public set weight(value: number) {
    this._weight = value;
  }
  // Temporarily expose input value. Use with caution.
  public get weightInput() {
    return this._weight;
  }
}

export class DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionList extends cdktf.ComplexList {
  public internalValue? : DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecution[] | cdktf.IResolvable

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
  public get(index: number): DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionOutputReference {
    return new DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/repo_manager_pulpproject_org_pulp_v1beta2_manifest#key DataK8SRepoManagerPulpprojectOrgPulpV1Beta2Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/repo_manager_pulpproject_org_pulp_v1beta2_manifest#operator DataK8SRepoManagerPulpprojectOrgPulpV1Beta2Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/repo_manager_pulpproject_org_pulp_v1beta2_manifest#values DataK8SRepoManagerPulpprojectOrgPulpV1Beta2Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsToTerraform(struct?: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsToHclTerraform(struct?: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions | cdktf.IResolvable): any {
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
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
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

export class DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._operator = undefined;
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
      this._operator = value.operator;
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

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
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

export class DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsOutputReference {
    return new DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector {
  /**
  * matchExpressions is a list of label selector requirements. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/repo_manager_pulpproject_org_pulp_v1beta2_manifest#match_expressions DataK8SRepoManagerPulpprojectOrgPulpV1Beta2Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/repo_manager_pulpproject_org_pulp_v1beta2_manifest#match_labels DataK8SRepoManagerPulpprojectOrgPulpV1Beta2Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorToTerraform(struct?: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorToHclTerraform(struct?: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsList",
    },
    match_labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.matchLabels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchExpressions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchExpressions = this._matchExpressions?.internalValue;
    }
    if (this._matchLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchLabels = this._matchLabels;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchExpressions.internalValue = undefined;
      this._matchLabels = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matchExpressions.internalValue = value.matchExpressions;
      this._matchLabels = value.matchLabels;
    }
  }

  // match_expressions - computed: false, optional: true, required: false
  private _matchExpressions = new DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions[] | cdktf.IResolvable) {
    this._matchExpressions.internalValue = value;
  }
  public resetMatchExpressions() {
    this._matchExpressions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchExpressionsInput() {
    return this._matchExpressions.internalValue;
  }

  // match_labels - computed: false, optional: true, required: false
  private _matchLabels?: { [key: string]: string }; 
  public get matchLabels() {
    return this.getStringMapAttribute('match_labels');
  }
  public set matchLabels(value: { [key: string]: string }) {
    this._matchLabels = value;
  }
  public resetMatchLabels() {
    this._matchLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchLabelsInput() {
    return this._matchLabels;
  }
}
export interface DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/repo_manager_pulpproject_org_pulp_v1beta2_manifest#key DataK8SRepoManagerPulpprojectOrgPulpV1Beta2Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/repo_manager_pulpproject_org_pulp_v1beta2_manifest#operator DataK8SRepoManagerPulpprojectOrgPulpV1Beta2Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/repo_manager_pulpproject_org_pulp_v1beta2_manifest#values DataK8SRepoManagerPulpprojectOrgPulpV1Beta2Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsToTerraform(struct?: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsToHclTerraform(struct?: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions | cdktf.IResolvable): any {
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
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
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

export class DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._operator = undefined;
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
      this._operator = value.operator;
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

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
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

export class DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsOutputReference {
    return new DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector {
  /**
  * matchExpressions is a list of label selector requirements. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/repo_manager_pulpproject_org_pulp_v1beta2_manifest#match_expressions DataK8SRepoManagerPulpprojectOrgPulpV1Beta2Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/repo_manager_pulpproject_org_pulp_v1beta2_manifest#match_labels DataK8SRepoManagerPulpprojectOrgPulpV1Beta2Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorToTerraform(struct?: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorToHclTerraform(struct?: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsList",
    },
    match_labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.matchLabels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchExpressions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchExpressions = this._matchExpressions?.internalValue;
    }
    if (this._matchLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchLabels = this._matchLabels;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchExpressions.internalValue = undefined;
      this._matchLabels = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matchExpressions.internalValue = value.matchExpressions;
      this._matchLabels = value.matchLabels;
    }
  }

  // match_expressions - computed: false, optional: true, required: false
  private _matchExpressions = new DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions[] | cdktf.IResolvable) {
    this._matchExpressions.internalValue = value;
  }
  public resetMatchExpressions() {
    this._matchExpressions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchExpressionsInput() {
    return this._matchExpressions.internalValue;
  }

  // match_labels - computed: false, optional: true, required: false
  private _matchLabels?: { [key: string]: string }; 
  public get matchLabels() {
    return this.getStringMapAttribute('match_labels');
  }
  public set matchLabels(value: { [key: string]: string }) {
    this._matchLabels = value;
  }
  public resetMatchLabels() {
    this._matchLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchLabelsInput() {
    return this._matchLabels;
  }
}
export interface DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecution {
  /**
  * A label query over a set of resources, in this case pods. If it's null, this PodAffinityTerm matches with no Pods.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/repo_manager_pulpproject_org_pulp_v1beta2_manifest#label_selector DataK8SRepoManagerPulpprojectOrgPulpV1Beta2Manifest#label_selector}
  */
  readonly labelSelector?: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector;
  /**
  * MatchLabelKeys is a set of pod label keys to select which pods will be taken into consideration. The keys are used to lookup values from the incoming pod labels, those key-value labels are merged with 'labelSelector' as 'key in (value)' to select the group of existing pods which pods will be taken into consideration for the incoming pod's pod (anti) affinity. Keys that don't exist in the incoming pod labels will be ignored. The default value is empty. The same key is forbidden to exist in both matchLabelKeys and labelSelector. Also, matchLabelKeys cannot be set when labelSelector isn't set. This is an alpha field and requires enabling MatchLabelKeysInPodAffinity feature gate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/repo_manager_pulpproject_org_pulp_v1beta2_manifest#match_label_keys DataK8SRepoManagerPulpprojectOrgPulpV1Beta2Manifest#match_label_keys}
  */
  readonly matchLabelKeys?: string[];
  /**
  * MismatchLabelKeys is a set of pod label keys to select which pods will be taken into consideration. The keys are used to lookup values from the incoming pod labels, those key-value labels are merged with 'labelSelector' as 'key notin (value)' to select the group of existing pods which pods will be taken into consideration for the incoming pod's pod (anti) affinity. Keys that don't exist in the incoming pod labels will be ignored. The default value is empty. The same key is forbidden to exist in both mismatchLabelKeys and labelSelector. Also, mismatchLabelKeys cannot be set when labelSelector isn't set. This is an alpha field and requires enabling MatchLabelKeysInPodAffinity feature gate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/repo_manager_pulpproject_org_pulp_v1beta2_manifest#mismatch_label_keys DataK8SRepoManagerPulpprojectOrgPulpV1Beta2Manifest#mismatch_label_keys}
  */
  readonly mismatchLabelKeys?: string[];
  /**
  * A label query over the set of namespaces that the term applies to. The term is applied to the union of the namespaces selected by this field and the ones listed in the namespaces field. null selector and null or empty namespaces list means 'this pod's namespace'. An empty selector ({}) matches all namespaces.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/repo_manager_pulpproject_org_pulp_v1beta2_manifest#namespace_selector DataK8SRepoManagerPulpprojectOrgPulpV1Beta2Manifest#namespace_selector}
  */
  readonly namespaceSelector?: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector;
  /**
  * namespaces specifies a static list of namespace names that the term applies to. The term is applied to the union of the namespaces listed in this field and the ones selected by namespaceSelector. null or empty namespaces list and null namespaceSelector means 'this pod's namespace'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/repo_manager_pulpproject_org_pulp_v1beta2_manifest#namespaces DataK8SRepoManagerPulpprojectOrgPulpV1Beta2Manifest#namespaces}
  */
  readonly namespaces?: string[];
  /**
  * This pod should be co-located (affinity) or not co-located (anti-affinity) with the pods matching the labelSelector in the specified namespaces, where co-located is defined as running on a node whose value of the label with key topologyKey matches that of any node on which any of the selected pods is running. Empty topologyKey is not allowed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/repo_manager_pulpproject_org_pulp_v1beta2_manifest#topology_key DataK8SRepoManagerPulpprojectOrgPulpV1Beta2Manifest#topology_key}
  */
  readonly topologyKey: string;
}

export function dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionToTerraform(struct?: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    label_selector: dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorToTerraform(struct!.labelSelector),
    match_label_keys: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.matchLabelKeys),
    mismatch_label_keys: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.mismatchLabelKeys),
    namespace_selector: dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorToTerraform(struct!.namespaceSelector),
    namespaces: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.namespaces),
    topology_key: cdktf.stringToTerraform(struct!.topologyKey),
  }
}


export function dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionToHclTerraform(struct?: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    label_selector: {
      value: dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorToHclTerraform(struct!.labelSelector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector",
    },
    match_label_keys: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.matchLabelKeys),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    mismatch_label_keys: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.mismatchLabelKeys),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    namespace_selector: {
      value: dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorToHclTerraform(struct!.namespaceSelector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector",
    },
    namespaces: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.namespaces),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    topology_key: {
      value: cdktf.stringToHclTerraform(struct!.topologyKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._labelSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.labelSelector = this._labelSelector?.internalValue;
    }
    if (this._matchLabelKeys !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchLabelKeys = this._matchLabelKeys;
    }
    if (this._mismatchLabelKeys !== undefined) {
      hasAnyValues = true;
      internalValueResult.mismatchLabelKeys = this._mismatchLabelKeys;
    }
    if (this._namespaceSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespaceSelector = this._namespaceSelector?.internalValue;
    }
    if (this._namespaces !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespaces = this._namespaces;
    }
    if (this._topologyKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.topologyKey = this._topologyKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._labelSelector.internalValue = undefined;
      this._matchLabelKeys = undefined;
      this._mismatchLabelKeys = undefined;
      this._namespaceSelector.internalValue = undefined;
      this._namespaces = undefined;
      this._topologyKey = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._labelSelector.internalValue = value.labelSelector;
      this._matchLabelKeys = value.matchLabelKeys;
      this._mismatchLabelKeys = value.mismatchLabelKeys;
      this._namespaceSelector.internalValue = value.namespaceSelector;
      this._namespaces = value.namespaces;
      this._topologyKey = value.topologyKey;
    }
  }

  // label_selector - computed: false, optional: true, required: false
  private _labelSelector = new DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorOutputReference(this, "label_selector");
  public get labelSelector() {
    return this._labelSelector;
  }
  public putLabelSelector(value: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector) {
    this._labelSelector.internalValue = value;
  }
  public resetLabelSelector() {
    this._labelSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelSelectorInput() {
    return this._labelSelector.internalValue;
  }

  // match_label_keys - computed: false, optional: true, required: false
  private _matchLabelKeys?: string[]; 
  public get matchLabelKeys() {
    return this.getListAttribute('match_label_keys');
  }
  public set matchLabelKeys(value: string[]) {
    this._matchLabelKeys = value;
  }
  public resetMatchLabelKeys() {
    this._matchLabelKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchLabelKeysInput() {
    return this._matchLabelKeys;
  }

  // mismatch_label_keys - computed: false, optional: true, required: false
  private _mismatchLabelKeys?: string[]; 
  public get mismatchLabelKeys() {
    return this.getListAttribute('mismatch_label_keys');
  }
  public set mismatchLabelKeys(value: string[]) {
    this._mismatchLabelKeys = value;
  }
  public resetMismatchLabelKeys() {
    this._mismatchLabelKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mismatchLabelKeysInput() {
    return this._mismatchLabelKeys;
  }

  // namespace_selector - computed: false, optional: true, required: false
  private _namespaceSelector = new DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorOutputReference(this, "namespace_selector");
  public get namespaceSelector() {
    return this._namespaceSelector;
  }
  public putNamespaceSelector(value: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector) {
    this._namespaceSelector.internalValue = value;
  }
  public resetNamespaceSelector() {
    this._namespaceSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceSelectorInput() {
    return this._namespaceSelector.internalValue;
  }

  // namespaces - computed: false, optional: true, required: false
  private _namespaces?: string[]; 
  public get namespaces() {
    return this.getListAttribute('namespaces');
  }
  public set namespaces(value: string[]) {
    this._namespaces = value;
  }
  public resetNamespaces() {
    this._namespaces = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespacesInput() {
    return this._namespaces;
  }

  // topology_key - computed: false, optional: false, required: true
  private _topologyKey?: string; 
  public get topologyKey() {
    return this.getStringAttribute('topology_key');
  }
  public set topologyKey(value: string) {
    this._topologyKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get topologyKeyInput() {
    return this._topologyKey;
  }
}

export class DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionList extends cdktf.ComplexList {
  public internalValue? : DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecution[] | cdktf.IResolvable

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
  public get(index: number): DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionOutputReference {
    return new DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityPodAntiAffinity {
  /**
  * The scheduler will prefer to schedule pods to nodes that satisfy the anti-affinity expressions specified by this field, but it may choose a node that violates one or more of the expressions. The node that is most preferred is the one with the greatest sum of weights, i.e. for each node that meets all of the scheduling requirements (resource request, requiredDuringScheduling anti-affinity expressions, etc.), compute a sum by iterating through the elements of this field and adding 'weight' to the sum if the node has pods which matches the corresponding podAffinityTerm; the node(s) with the highest sum are the most preferred.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/repo_manager_pulpproject_org_pulp_v1beta2_manifest#preferred_during_scheduling_ignored_during_execution DataK8SRepoManagerPulpprojectOrgPulpV1Beta2Manifest#preferred_during_scheduling_ignored_during_execution}
  */
  readonly preferredDuringSchedulingIgnoredDuringExecution?: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecution[] | cdktf.IResolvable;
  /**
  * If the anti-affinity requirements specified by this field are not met at scheduling time, the pod will not be scheduled onto the node. If the anti-affinity requirements specified by this field cease to be met at some point during pod execution (e.g. due to a pod label update), the system may or may not try to eventually evict the pod from its node. When there are multiple elements, the lists of nodes corresponding to each podAffinityTerm are intersected, i.e. all terms must be satisfied.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/repo_manager_pulpproject_org_pulp_v1beta2_manifest#required_during_scheduling_ignored_during_execution DataK8SRepoManagerPulpprojectOrgPulpV1Beta2Manifest#required_during_scheduling_ignored_during_execution}
  */
  readonly requiredDuringSchedulingIgnoredDuringExecution?: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecution[] | cdktf.IResolvable;
}

export function dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityPodAntiAffinityToTerraform(struct?: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityPodAntiAffinity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    preferred_during_scheduling_ignored_during_execution: cdktf.listMapper(dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionToTerraform, false)(struct!.preferredDuringSchedulingIgnoredDuringExecution),
    required_during_scheduling_ignored_during_execution: cdktf.listMapper(dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionToTerraform, false)(struct!.requiredDuringSchedulingIgnoredDuringExecution),
  }
}


export function dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityPodAntiAffinityToHclTerraform(struct?: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityPodAntiAffinity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    preferred_during_scheduling_ignored_during_execution: {
      value: cdktf.listMapperHcl(dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionToHclTerraform, false)(struct!.preferredDuringSchedulingIgnoredDuringExecution),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionList",
    },
    required_during_scheduling_ignored_during_execution: {
      value: cdktf.listMapperHcl(dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionToHclTerraform, false)(struct!.requiredDuringSchedulingIgnoredDuringExecution),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityPodAntiAffinityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityPodAntiAffinity | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._preferredDuringSchedulingIgnoredDuringExecution?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.preferredDuringSchedulingIgnoredDuringExecution = this._preferredDuringSchedulingIgnoredDuringExecution?.internalValue;
    }
    if (this._requiredDuringSchedulingIgnoredDuringExecution?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.requiredDuringSchedulingIgnoredDuringExecution = this._requiredDuringSchedulingIgnoredDuringExecution?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityPodAntiAffinity | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._preferredDuringSchedulingIgnoredDuringExecution.internalValue = undefined;
      this._requiredDuringSchedulingIgnoredDuringExecution.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._preferredDuringSchedulingIgnoredDuringExecution.internalValue = value.preferredDuringSchedulingIgnoredDuringExecution;
      this._requiredDuringSchedulingIgnoredDuringExecution.internalValue = value.requiredDuringSchedulingIgnoredDuringExecution;
    }
  }

  // preferred_during_scheduling_ignored_during_execution - computed: false, optional: true, required: false
  private _preferredDuringSchedulingIgnoredDuringExecution = new DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionList(this, "preferred_during_scheduling_ignored_during_execution", false);
  public get preferredDuringSchedulingIgnoredDuringExecution() {
    return this._preferredDuringSchedulingIgnoredDuringExecution;
  }
  public putPreferredDuringSchedulingIgnoredDuringExecution(value: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecution[] | cdktf.IResolvable) {
    this._preferredDuringSchedulingIgnoredDuringExecution.internalValue = value;
  }
  public resetPreferredDuringSchedulingIgnoredDuringExecution() {
    this._preferredDuringSchedulingIgnoredDuringExecution.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferredDuringSchedulingIgnoredDuringExecutionInput() {
    return this._preferredDuringSchedulingIgnoredDuringExecution.internalValue;
  }

  // required_during_scheduling_ignored_during_execution - computed: false, optional: true, required: false
  private _requiredDuringSchedulingIgnoredDuringExecution = new DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionList(this, "required_during_scheduling_ignored_during_execution", false);
  public get requiredDuringSchedulingIgnoredDuringExecution() {
    return this._requiredDuringSchedulingIgnoredDuringExecution;
  }
  public putRequiredDuringSchedulingIgnoredDuringExecution(value: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecution[] | cdktf.IResolvable) {
    this._requiredDuringSchedulingIgnoredDuringExecution.internalValue = value;
  }
  public resetRequiredDuringSchedulingIgnoredDuringExecution() {
    this._requiredDuringSchedulingIgnoredDuringExecution.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredDuringSchedulingIgnoredDuringExecutionInput() {
    return this._requiredDuringSchedulingIgnoredDuringExecution.internalValue;
  }
}
export interface DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinity {
  /**
  * Describes node affinity scheduling rules for the pod.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/repo_manager_pulpproject_org_pulp_v1beta2_manifest#node_affinity DataK8SRepoManagerPulpprojectOrgPulpV1Beta2Manifest#node_affinity}
  */
  readonly nodeAffinity?: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityNodeAffinity;
  /**
  * Describes pod affinity scheduling rules (e.g. co-locate this pod in the same node, zone, etc. as some other pod(s)).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/repo_manager_pulpproject_org_pulp_v1beta2_manifest#pod_affinity DataK8SRepoManagerPulpprojectOrgPulpV1Beta2Manifest#pod_affinity}
  */
  readonly podAffinity?: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityPodAffinity;
  /**
  * Describes pod anti-affinity scheduling rules (e.g. avoid putting this pod in the same node, zone, etc. as some other pod(s)).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/repo_manager_pulpproject_org_pulp_v1beta2_manifest#pod_anti_affinity DataK8SRepoManagerPulpprojectOrgPulpV1Beta2Manifest#pod_anti_affinity}
  */
  readonly podAntiAffinity?: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityPodAntiAffinity;
}

export function dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityToTerraform(struct?: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    node_affinity: dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityNodeAffinityToTerraform(struct!.nodeAffinity),
    pod_affinity: dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityPodAffinityToTerraform(struct!.podAffinity),
    pod_anti_affinity: dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityPodAntiAffinityToTerraform(struct!.podAntiAffinity),
  }
}


export function dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityToHclTerraform(struct?: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    node_affinity: {
      value: dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityNodeAffinityToHclTerraform(struct!.nodeAffinity),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityNodeAffinity",
    },
    pod_affinity: {
      value: dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityPodAffinityToHclTerraform(struct!.podAffinity),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityPodAffinity",
    },
    pod_anti_affinity: {
      value: dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityPodAntiAffinityToHclTerraform(struct!.podAntiAffinity),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityPodAntiAffinity",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinity | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nodeAffinity?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeAffinity = this._nodeAffinity?.internalValue;
    }
    if (this._podAffinity?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.podAffinity = this._podAffinity?.internalValue;
    }
    if (this._podAntiAffinity?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.podAntiAffinity = this._podAntiAffinity?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinity | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._nodeAffinity.internalValue = undefined;
      this._podAffinity.internalValue = undefined;
      this._podAntiAffinity.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._nodeAffinity.internalValue = value.nodeAffinity;
      this._podAffinity.internalValue = value.podAffinity;
      this._podAntiAffinity.internalValue = value.podAntiAffinity;
    }
  }

  // node_affinity - computed: false, optional: true, required: false
  private _nodeAffinity = new DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityNodeAffinityOutputReference(this, "node_affinity");
  public get nodeAffinity() {
    return this._nodeAffinity;
  }
  public putNodeAffinity(value: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityNodeAffinity) {
    this._nodeAffinity.internalValue = value;
  }
  public resetNodeAffinity() {
    this._nodeAffinity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeAffinityInput() {
    return this._nodeAffinity.internalValue;
  }

  // pod_affinity - computed: false, optional: true, required: false
  private _podAffinity = new DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityPodAffinityOutputReference(this, "pod_affinity");
  public get podAffinity() {
    return this._podAffinity;
  }
  public putPodAffinity(value: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityPodAffinity) {
    this._podAffinity.internalValue = value;
  }
  public resetPodAffinity() {
    this._podAffinity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podAffinityInput() {
    return this._podAffinity.internalValue;
  }

  // pod_anti_affinity - computed: false, optional: true, required: false
  private _podAntiAffinity = new DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityPodAntiAffinityOutputReference(this, "pod_anti_affinity");
  public get podAntiAffinity() {
    return this._podAntiAffinity;
  }
  public putPodAntiAffinity(value: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityPodAntiAffinity) {
    this._podAntiAffinity.internalValue = value;
  }
  public resetPodAntiAffinity() {
    this._podAntiAffinity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podAntiAffinityInput() {
    return this._podAntiAffinity.internalValue;
  }
}
export interface DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerEnvVarsValueFromConfigMapKeyRef {
  /**
  * The key to select.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/repo_manager_pulpproject_org_pulp_v1beta2_manifest#key DataK8SRepoManagerPulpprojectOrgPulpV1Beta2Manifest#key}
  */
  readonly key: string;
  /**
  * Name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. TODO: Add other useful fields. apiVersion, kind, uid? More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Drop 'kubebuilder:default' when controller-gen doesn't need it https://github.com/kubernetes-sigs/kubebuilder/issues/3896.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/repo_manager_pulpproject_org_pulp_v1beta2_manifest#name DataK8SRepoManagerPulpprojectOrgPulpV1Beta2Manifest#name}
  */
  readonly name?: string;
  /**
  * Specify whether the ConfigMap or its key must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/repo_manager_pulpproject_org_pulp_v1beta2_manifest#optional DataK8SRepoManagerPulpprojectOrgPulpV1Beta2Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerEnvVarsValueFromConfigMapKeyRefToTerraform(struct?: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerEnvVarsValueFromConfigMapKeyRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    name: cdktf.stringToTerraform(struct!.name),
    optional: cdktf.booleanToTerraform(struct!.optional),
  }
}


export function dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerEnvVarsValueFromConfigMapKeyRefToHclTerraform(struct?: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerEnvVarsValueFromConfigMapKeyRef | cdktf.IResolvable): any {
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
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    optional: {
      value: cdktf.booleanToHclTerraform(struct!.optional),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerEnvVarsValueFromConfigMapKeyRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerEnvVarsValueFromConfigMapKeyRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._optional !== undefined) {
      hasAnyValues = true;
      internalValueResult.optional = this._optional;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerEnvVarsValueFromConfigMapKeyRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._name = undefined;
      this._optional = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._name = value.name;
      this._optional = value.optional;
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

  // name - computed: false, optional: true, required: false
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

  // optional - computed: false, optional: true, required: false
  private _optional?: boolean | cdktf.IResolvable; 
  public get optional() {
    return this.getBooleanAttribute('optional');
  }
  public set optional(value: boolean | cdktf.IResolvable) {
    this._optional = value;
  }
  public resetOptional() {
    this._optional = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalInput() {
    return this._optional;
  }
}
export interface DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerEnvVarsValueFromFieldRef {
  /**
  * Version of the schema the FieldPath is written in terms of, defaults to 'v1'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/repo_manager_pulpproject_org_pulp_v1beta2_manifest#api_version DataK8SRepoManagerPulpprojectOrgPulpV1Beta2Manifest#api_version}
  */
  readonly apiVersion?: string;
  /**
  * Path of the field to select in the specified API version.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/repo_manager_pulpproject_org_pulp_v1beta2_manifest#field_path DataK8SRepoManagerPulpprojectOrgPulpV1Beta2Manifest#field_path}
  */
  readonly fieldPath: string;
}

export function dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerEnvVarsValueFromFieldRefToTerraform(struct?: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerEnvVarsValueFromFieldRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_version: cdktf.stringToTerraform(struct!.apiVersion),
    field_path: cdktf.stringToTerraform(struct!.fieldPath),
  }
}


export function dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerEnvVarsValueFromFieldRefToHclTerraform(struct?: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerEnvVarsValueFromFieldRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    api_version: {
      value: cdktf.stringToHclTerraform(struct!.apiVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    field_path: {
      value: cdktf.stringToHclTerraform(struct!.fieldPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerEnvVarsValueFromFieldRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerEnvVarsValueFromFieldRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiVersion = this._apiVersion;
    }
    if (this._fieldPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldPath = this._fieldPath;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerEnvVarsValueFromFieldRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiVersion = undefined;
      this._fieldPath = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._apiVersion = value.apiVersion;
      this._fieldPath = value.fieldPath;
    }
  }

  // api_version - computed: false, optional: true, required: false
  private _apiVersion?: string; 
  public get apiVersion() {
    return this.getStringAttribute('api_version');
  }
  public set apiVersion(value: string) {
    this._apiVersion = value;
  }
  public resetApiVersion() {
    this._apiVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiVersionInput() {
    return this._apiVersion;
  }

  // field_path - computed: false, optional: false, required: true
  private _fieldPath?: string; 
  public get fieldPath() {
    return this.getStringAttribute('field_path');
  }
  public set fieldPath(value: string) {
    this._fieldPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldPathInput() {
    return this._fieldPath;
  }
}
export interface DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerEnvVarsValueFromResourceFieldRef {
  /**
  * Container name: required for volumes, optional for env vars
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/repo_manager_pulpproject_org_pulp_v1beta2_manifest#container_name DataK8SRepoManagerPulpprojectOrgPulpV1Beta2Manifest#container_name}
  */
  readonly containerName?: string;
  /**
  * Specifies the output format of the exposed resources, defaults to '1'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/repo_manager_pulpproject_org_pulp_v1beta2_manifest#divisor DataK8SRepoManagerPulpprojectOrgPulpV1Beta2Manifest#divisor}
  */
  readonly divisor?: string;
  /**
  * Required: resource to select
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/repo_manager_pulpproject_org_pulp_v1beta2_manifest#resource DataK8SRepoManagerPulpprojectOrgPulpV1Beta2Manifest#resource}
  */
  readonly resource: string;
}

export function dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerEnvVarsValueFromResourceFieldRefToTerraform(struct?: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerEnvVarsValueFromResourceFieldRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    container_name: cdktf.stringToTerraform(struct!.containerName),
    divisor: cdktf.stringToTerraform(struct!.divisor),
    resource: cdktf.stringToTerraform(struct!.resource),
  }
}


export function dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerEnvVarsValueFromResourceFieldRefToHclTerraform(struct?: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerEnvVarsValueFromResourceFieldRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    container_name: {
      value: cdktf.stringToHclTerraform(struct!.containerName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    divisor: {
      value: cdktf.stringToHclTerraform(struct!.divisor),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource: {
      value: cdktf.stringToHclTerraform(struct!.resource),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerEnvVarsValueFromResourceFieldRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerEnvVarsValueFromResourceFieldRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._containerName !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerName = this._containerName;
    }
    if (this._divisor !== undefined) {
      hasAnyValues = true;
      internalValueResult.divisor = this._divisor;
    }
    if (this._resource !== undefined) {
      hasAnyValues = true;
      internalValueResult.resource = this._resource;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerEnvVarsValueFromResourceFieldRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._containerName = undefined;
      this._divisor = undefined;
      this._resource = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._containerName = value.containerName;
      this._divisor = value.divisor;
      this._resource = value.resource;
    }
  }

  // container_name - computed: false, optional: true, required: false
  private _containerName?: string; 
  public get containerName() {
    return this.getStringAttribute('container_name');
  }
  public set containerName(value: string) {
    this._containerName = value;
  }
  public resetContainerName() {
    this._containerName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerNameInput() {
    return this._containerName;
  }

  // divisor - computed: false, optional: true, required: false
  private _divisor?: string; 
  public get divisor() {
    return this.getStringAttribute('divisor');
  }
  public set divisor(value: string) {
    this._divisor = value;
  }
  public resetDivisor() {
    this._divisor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get divisorInput() {
    return this._divisor;
  }

  // resource - computed: false, optional: false, required: true
  private _resource?: string; 
  public get resource() {
    return this.getStringAttribute('resource');
  }
  public set resource(value: string) {
    this._resource = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceInput() {
    return this._resource;
  }
}
export interface DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerEnvVarsValueFromSecretKeyRef {
  /**
  * The key of the secret to select from. Must be a valid secret key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/repo_manager_pulpproject_org_pulp_v1beta2_manifest#key DataK8SRepoManagerPulpprojectOrgPulpV1Beta2Manifest#key}
  */
  readonly key: string;
  /**
  * Name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. TODO: Add other useful fields. apiVersion, kind, uid? More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Drop 'kubebuilder:default' when controller-gen doesn't need it https://github.com/kubernetes-sigs/kubebuilder/issues/3896.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/repo_manager_pulpproject_org_pulp_v1beta2_manifest#name DataK8SRepoManagerPulpprojectOrgPulpV1Beta2Manifest#name}
  */
  readonly name?: string;
  /**
  * Specify whether the Secret or its key must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/repo_manager_pulpproject_org_pulp_v1beta2_manifest#optional DataK8SRepoManagerPulpprojectOrgPulpV1Beta2Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerEnvVarsValueFromSecretKeyRefToTerraform(struct?: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerEnvVarsValueFromSecretKeyRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    name: cdktf.stringToTerraform(struct!.name),
    optional: cdktf.booleanToTerraform(struct!.optional),
  }
}


export function dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerEnvVarsValueFromSecretKeyRefToHclTerraform(struct?: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerEnvVarsValueFromSecretKeyRef | cdktf.IResolvable): any {
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
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    optional: {
      value: cdktf.booleanToHclTerraform(struct!.optional),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerEnvVarsValueFromSecretKeyRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerEnvVarsValueFromSecretKeyRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._optional !== undefined) {
      hasAnyValues = true;
      internalValueResult.optional = this._optional;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerEnvVarsValueFromSecretKeyRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._name = undefined;
      this._optional = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._name = value.name;
      this._optional = value.optional;
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

  // name - computed: false, optional: true, required: false
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

  // optional - computed: false, optional: true, required: false
  private _optional?: boolean | cdktf.IResolvable; 
  public get optional() {
    return this.getBooleanAttribute('optional');
  }
  public set optional(value: boolean | cdktf.IResolvable) {
    this._optional = value;
  }
  public resetOptional() {
    this._optional = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalInput() {
    return this._optional;
  }
}
export interface DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerEnvVarsValueFrom {
  /**
  * Selects a key of a ConfigMap.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/repo_manager_pulpproject_org_pulp_v1beta2_manifest#config_map_key_ref DataK8SRepoManagerPulpprojectOrgPulpV1Beta2Manifest#config_map_key_ref}
  */
  readonly configMapKeyRef?: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerEnvVarsValueFromConfigMapKeyRef;
  /**
  * Selects a field of the pod: supports metadata.name, metadata.namespace, 'metadata.labels['<KEY>']', 'metadata.annotations['<KEY>']', spec.nodeName, spec.serviceAccountName, status.hostIP, status.podIP, status.podIPs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/repo_manager_pulpproject_org_pulp_v1beta2_manifest#field_ref DataK8SRepoManagerPulpprojectOrgPulpV1Beta2Manifest#field_ref}
  */
  readonly fieldRef?: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerEnvVarsValueFromFieldRef;
  /**
  * Selects a resource of the container: only resources limits and requests (limits.cpu, limits.memory, limits.ephemeral-storage, requests.cpu, requests.memory and requests.ephemeral-storage) are currently supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/repo_manager_pulpproject_org_pulp_v1beta2_manifest#resource_field_ref DataK8SRepoManagerPulpprojectOrgPulpV1Beta2Manifest#resource_field_ref}
  */
  readonly resourceFieldRef?: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerEnvVarsValueFromResourceFieldRef;
  /**
  * Selects a key of a secret in the pod's namespace
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/repo_manager_pulpproject_org_pulp_v1beta2_manifest#secret_key_ref DataK8SRepoManagerPulpprojectOrgPulpV1Beta2Manifest#secret_key_ref}
  */
  readonly secretKeyRef?: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerEnvVarsValueFromSecretKeyRef;
}

export function dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerEnvVarsValueFromToTerraform(struct?: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerEnvVarsValueFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config_map_key_ref: dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerEnvVarsValueFromConfigMapKeyRefToTerraform(struct!.configMapKeyRef),
    field_ref: dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerEnvVarsValueFromFieldRefToTerraform(struct!.fieldRef),
    resource_field_ref: dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerEnvVarsValueFromResourceFieldRefToTerraform(struct!.resourceFieldRef),
    secret_key_ref: dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerEnvVarsValueFromSecretKeyRefToTerraform(struct!.secretKeyRef),
  }
}


export function dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerEnvVarsValueFromToHclTerraform(struct?: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerEnvVarsValueFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    config_map_key_ref: {
      value: dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerEnvVarsValueFromConfigMapKeyRefToHclTerraform(struct!.configMapKeyRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerEnvVarsValueFromConfigMapKeyRef",
    },
    field_ref: {
      value: dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerEnvVarsValueFromFieldRefToHclTerraform(struct!.fieldRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerEnvVarsValueFromFieldRef",
    },
    resource_field_ref: {
      value: dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerEnvVarsValueFromResourceFieldRefToHclTerraform(struct!.resourceFieldRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerEnvVarsValueFromResourceFieldRef",
    },
    secret_key_ref: {
      value: dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerEnvVarsValueFromSecretKeyRefToHclTerraform(struct!.secretKeyRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerEnvVarsValueFromSecretKeyRef",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerEnvVarsValueFromOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerEnvVarsValueFrom | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._configMapKeyRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.configMapKeyRef = this._configMapKeyRef?.internalValue;
    }
    if (this._fieldRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldRef = this._fieldRef?.internalValue;
    }
    if (this._resourceFieldRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceFieldRef = this._resourceFieldRef?.internalValue;
    }
    if (this._secretKeyRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretKeyRef = this._secretKeyRef?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerEnvVarsValueFrom | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._configMapKeyRef.internalValue = undefined;
      this._fieldRef.internalValue = undefined;
      this._resourceFieldRef.internalValue = undefined;
      this._secretKeyRef.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._configMapKeyRef.internalValue = value.configMapKeyRef;
      this._fieldRef.internalValue = value.fieldRef;
      this._resourceFieldRef.internalValue = value.resourceFieldRef;
      this._secretKeyRef.internalValue = value.secretKeyRef;
    }
  }

  // config_map_key_ref - computed: false, optional: true, required: false
  private _configMapKeyRef = new DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerEnvVarsValueFromConfigMapKeyRefOutputReference(this, "config_map_key_ref");
  public get configMapKeyRef() {
    return this._configMapKeyRef;
  }
  public putConfigMapKeyRef(value: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerEnvVarsValueFromConfigMapKeyRef) {
    this._configMapKeyRef.internalValue = value;
  }
  public resetConfigMapKeyRef() {
    this._configMapKeyRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configMapKeyRefInput() {
    return this._configMapKeyRef.internalValue;
  }

  // field_ref - computed: false, optional: true, required: false
  private _fieldRef = new DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerEnvVarsValueFromFieldRefOutputReference(this, "field_ref");
  public get fieldRef() {
    return this._fieldRef;
  }
  public putFieldRef(value: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerEnvVarsValueFromFieldRef) {
    this._fieldRef.internalValue = value;
  }
  public resetFieldRef() {
    this._fieldRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldRefInput() {
    return this._fieldRef.internalValue;
  }

  // resource_field_ref - computed: false, optional: true, required: false
  private _resourceFieldRef = new DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerEnvVarsValueFromResourceFieldRefOutputReference(this, "resource_field_ref");
  public get resourceFieldRef() {
    return this._resourceFieldRef;
  }
  public putResourceFieldRef(value: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerEnvVarsValueFromResourceFieldRef) {
    this._resourceFieldRef.internalValue = value;
  }
  public resetResourceFieldRef() {
    this._resourceFieldRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceFieldRefInput() {
    return this._resourceFieldRef.internalValue;
  }

  // secret_key_ref - computed: false, optional: true, required: false
  private _secretKeyRef = new DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerEnvVarsValueFromSecretKeyRefOutputReference(this, "secret_key_ref");
  public get secretKeyRef() {
    return this._secretKeyRef;
  }
  public putSecretKeyRef(value: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerEnvVarsValueFromSecretKeyRef) {
    this._secretKeyRef.internalValue = value;
  }
  public resetSecretKeyRef() {
    this._secretKeyRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretKeyRefInput() {
    return this._secretKeyRef.internalValue;
  }
}
export interface DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerEnvVars {
  /**
  * Name of the environment variable. Must be a C_IDENTIFIER.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/repo_manager_pulpproject_org_pulp_v1beta2_manifest#name DataK8SRepoManagerPulpprojectOrgPulpV1Beta2Manifest#name}
  */
  readonly name: string;
  /**
  * Variable references $(VAR_NAME) are expanded using the previously defined environment variables in the container and any service environment variables. If a variable cannot be resolved, the reference in the input string will be unchanged. Double $$ are reduced to a single $, which allows for escaping the $(VAR_NAME) syntax: i.e. '$$(VAR_NAME)' will produce the string literal '$(VAR_NAME)'. Escaped references will never be expanded, regardless of whether the variable exists or not. Defaults to ''.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/repo_manager_pulpproject_org_pulp_v1beta2_manifest#value DataK8SRepoManagerPulpprojectOrgPulpV1Beta2Manifest#value}
  */
  readonly value?: string;
  /**
  * Source for the environment variable's value. Cannot be used if value is not empty.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/repo_manager_pulpproject_org_pulp_v1beta2_manifest#value_from DataK8SRepoManagerPulpprojectOrgPulpV1Beta2Manifest#value_from}
  */
  readonly valueFrom?: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerEnvVarsValueFrom;
}

export function dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerEnvVarsToTerraform(struct?: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerEnvVars | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
    value_from: dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerEnvVarsValueFromToTerraform(struct!.valueFrom),
  }
}


export function dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerEnvVarsToHclTerraform(struct?: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerEnvVars | cdktf.IResolvable): any {
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
    value_from: {
      value: dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerEnvVarsValueFromToHclTerraform(struct!.valueFrom),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerEnvVarsValueFrom",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerEnvVarsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerEnvVars | cdktf.IResolvable | undefined {
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
    if (this._valueFrom?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.valueFrom = this._valueFrom?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerEnvVars | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
      this._valueFrom.internalValue = undefined;
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
      this._valueFrom.internalValue = value.valueFrom;
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

  // value_from - computed: false, optional: true, required: false
  private _valueFrom = new DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerEnvVarsValueFromOutputReference(this, "value_from");
  public get valueFrom() {
    return this._valueFrom;
  }
  public putValueFrom(value: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerEnvVarsValueFrom) {
    this._valueFrom.internalValue = value;
  }
  public resetValueFrom() {
    this._valueFrom.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueFromInput() {
    return this._valueFrom.internalValue;
  }
}

export class DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerEnvVarsList extends cdktf.ComplexList {
  public internalValue? : DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerEnvVars[] | cdktf.IResolvable

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
  public get(index: number): DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerEnvVarsOutputReference {
    return new DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerEnvVarsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerInitContainerEnvVarsValueFromConfigMapKeyRef {
  /**
  * The key to select.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/repo_manager_pulpproject_org_pulp_v1beta2_manifest#key DataK8SRepoManagerPulpprojectOrgPulpV1Beta2Manifest#key}
  */
  readonly key: string;
  /**
  * Name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. TODO: Add other useful fields. apiVersion, kind, uid? More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Drop 'kubebuilder:default' when controller-gen doesn't need it https://github.com/kubernetes-sigs/kubebuilder/issues/3896.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/repo_manager_pulpproject_org_pulp_v1beta2_manifest#name DataK8SRepoManagerPulpprojectOrgPulpV1Beta2Manifest#name}
  */
  readonly name?: string;
  /**
  * Specify whether the ConfigMap or its key must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/repo_manager_pulpproject_org_pulp_v1beta2_manifest#optional DataK8SRepoManagerPulpprojectOrgPulpV1Beta2Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerInitContainerEnvVarsValueFromConfigMapKeyRefToTerraform(struct?: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerInitContainerEnvVarsValueFromConfigMapKeyRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    name: cdktf.stringToTerraform(struct!.name),
    optional: cdktf.booleanToTerraform(struct!.optional),
  }
}


export function dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerInitContainerEnvVarsValueFromConfigMapKeyRefToHclTerraform(struct?: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerInitContainerEnvVarsValueFromConfigMapKeyRef | cdktf.IResolvable): any {
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
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    optional: {
      value: cdktf.booleanToHclTerraform(struct!.optional),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerInitContainerEnvVarsValueFromConfigMapKeyRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerInitContainerEnvVarsValueFromConfigMapKeyRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._optional !== undefined) {
      hasAnyValues = true;
      internalValueResult.optional = this._optional;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerInitContainerEnvVarsValueFromConfigMapKeyRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._name = undefined;
      this._optional = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._name = value.name;
      this._optional = value.optional;
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

  // name - computed: false, optional: true, required: false
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

  // optional - computed: false, optional: true, required: false
  private _optional?: boolean | cdktf.IResolvable; 
  public get optional() {
    return this.getBooleanAttribute('optional');
  }
  public set optional(value: boolean | cdktf.IResolvable) {
    this._optional = value;
  }
  public resetOptional() {
    this._optional = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalInput() {
    return this._optional;
  }
}
export interface DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerInitContainerEnvVarsValueFromFieldRef {
  /**
  * Version of the schema the FieldPath is written in terms of, defaults to 'v1'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/repo_manager_pulpproject_org_pulp_v1beta2_manifest#api_version DataK8SRepoManagerPulpprojectOrgPulpV1Beta2Manifest#api_version}
  */
  readonly apiVersion?: string;
  /**
  * Path of the field to select in the specified API version.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/repo_manager_pulpproject_org_pulp_v1beta2_manifest#field_path DataK8SRepoManagerPulpprojectOrgPulpV1Beta2Manifest#field_path}
  */
  readonly fieldPath: string;
}

export function dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerInitContainerEnvVarsValueFromFieldRefToTerraform(struct?: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerInitContainerEnvVarsValueFromFieldRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_version: cdktf.stringToTerraform(struct!.apiVersion),
    field_path: cdktf.stringToTerraform(struct!.fieldPath),
  }
}


export function dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerInitContainerEnvVarsValueFromFieldRefToHclTerraform(struct?: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerInitContainerEnvVarsValueFromFieldRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    api_version: {
      value: cdktf.stringToHclTerraform(struct!.apiVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    field_path: {
      value: cdktf.stringToHclTerraform(struct!.fieldPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerInitContainerEnvVarsValueFromFieldRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerInitContainerEnvVarsValueFromFieldRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiVersion = this._apiVersion;
    }
    if (this._fieldPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldPath = this._fieldPath;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerInitContainerEnvVarsValueFromFieldRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiVersion = undefined;
      this._fieldPath = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._apiVersion = value.apiVersion;
      this._fieldPath = value.fieldPath;
    }
  }

  // api_version - computed: false, optional: true, required: false
  private _apiVersion?: string; 
  public get apiVersion() {
    return this.getStringAttribute('api_version');
  }
  public set apiVersion(value: string) {
    this._apiVersion = value;
  }
  public resetApiVersion() {
    this._apiVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiVersionInput() {
    return this._apiVersion;
  }

  // field_path - computed: false, optional: false, required: true
  private _fieldPath?: string; 
  public get fieldPath() {
    return this.getStringAttribute('field_path');
  }
  public set fieldPath(value: string) {
    this._fieldPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldPathInput() {
    return this._fieldPath;
  }
}
export interface DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerInitContainerEnvVarsValueFromResourceFieldRef {
  /**
  * Container name: required for volumes, optional for env vars
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/repo_manager_pulpproject_org_pulp_v1beta2_manifest#container_name DataK8SRepoManagerPulpprojectOrgPulpV1Beta2Manifest#container_name}
  */
  readonly containerName?: string;
  /**
  * Specifies the output format of the exposed resources, defaults to '1'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/repo_manager_pulpproject_org_pulp_v1beta2_manifest#divisor DataK8SRepoManagerPulpprojectOrgPulpV1Beta2Manifest#divisor}
  */
  readonly divisor?: string;
  /**
  * Required: resource to select
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/repo_manager_pulpproject_org_pulp_v1beta2_manifest#resource DataK8SRepoManagerPulpprojectOrgPulpV1Beta2Manifest#resource}
  */
  readonly resource: string;
}

export function dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerInitContainerEnvVarsValueFromResourceFieldRefToTerraform(struct?: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerInitContainerEnvVarsValueFromResourceFieldRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    container_name: cdktf.stringToTerraform(struct!.containerName),
    divisor: cdktf.stringToTerraform(struct!.divisor),
    resource: cdktf.stringToTerraform(struct!.resource),
  }
}


export function dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerInitContainerEnvVarsValueFromResourceFieldRefToHclTerraform(struct?: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerInitContainerEnvVarsValueFromResourceFieldRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    container_name: {
      value: cdktf.stringToHclTerraform(struct!.containerName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    divisor: {
      value: cdktf.stringToHclTerraform(struct!.divisor),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource: {
      value: cdktf.stringToHclTerraform(struct!.resource),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerInitContainerEnvVarsValueFromResourceFieldRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerInitContainerEnvVarsValueFromResourceFieldRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._containerName !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerName = this._containerName;
    }
    if (this._divisor !== undefined) {
      hasAnyValues = true;
      internalValueResult.divisor = this._divisor;
    }
    if (this._resource !== undefined) {
      hasAnyValues = true;
      internalValueResult.resource = this._resource;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerInitContainerEnvVarsValueFromResourceFieldRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._containerName = undefined;
      this._divisor = undefined;
      this._resource = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._containerName = value.containerName;
      this._divisor = value.divisor;
      this._resource = value.resource;
    }
  }

  // container_name - computed: false, optional: true, required: false
  private _containerName?: string; 
  public get containerName() {
    return this.getStringAttribute('container_name');
  }
  public set containerName(value: string) {
    this._containerName = value;
  }
  public resetContainerName() {
    this._containerName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerNameInput() {
    return this._containerName;
  }

  // divisor - computed: false, optional: true, required: false
  private _divisor?: string; 
  public get divisor() {
    return this.getStringAttribute('divisor');
  }
  public set divisor(value: string) {
    this._divisor = value;
  }
  public resetDivisor() {
    this._divisor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get divisorInput() {
    return this._divisor;
  }

  // resource - computed: false, optional: false, required: true
  private _resource?: string; 
  public get resource() {
    return this.getStringAttribute('resource');
  }
  public set resource(value: string) {
    this._resource = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceInput() {
    return this._resource;
  }
}
export interface DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerInitContainerEnvVarsValueFromSecretKeyRef {
  /**
  * The key of the secret to select from. Must be a valid secret key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/repo_manager_pulpproject_org_pulp_v1beta2_manifest#key DataK8SRepoManagerPulpprojectOrgPulpV1Beta2Manifest#key}
  */
  readonly key: string;
  /**
  * Name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. TODO: Add other useful fields. apiVersion, kind, uid? More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Drop 'kubebuilder:default' when controller-gen doesn't need it https://github.com/kubernetes-sigs/kubebuilder/issues/3896.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/repo_manager_pulpproject_org_pulp_v1beta2_manifest#name DataK8SRepoManagerPulpprojectOrgPulpV1Beta2Manifest#name}
  */
  readonly name?: string;
  /**
  * Specify whether the Secret or its key must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/repo_manager_pulpproject_org_pulp_v1beta2_manifest#optional DataK8SRepoManagerPulpprojectOrgPulpV1Beta2Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerInitContainerEnvVarsValueFromSecretKeyRefToTerraform(struct?: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerInitContainerEnvVarsValueFromSecretKeyRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    name: cdktf.stringToTerraform(struct!.name),
    optional: cdktf.booleanToTerraform(struct!.optional),
  }
}


export function dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerInitContainerEnvVarsValueFromSecretKeyRefToHclTerraform(struct?: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerInitContainerEnvVarsValueFromSecretKeyRef | cdktf.IResolvable): any {
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
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    optional: {
      value: cdktf.booleanToHclTerraform(struct!.optional),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerInitContainerEnvVarsValueFromSecretKeyRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerInitContainerEnvVarsValueFromSecretKeyRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._optional !== undefined) {
      hasAnyValues = true;
      internalValueResult.optional = this._optional;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerInitContainerEnvVarsValueFromSecretKeyRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._name = undefined;
      this._optional = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._name = value.name;
      this._optional = value.optional;
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

  // name - computed: false, optional: true, required: false
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

  // optional - computed: false, optional: true, required: false
  private _optional?: boolean | cdktf.IResolvable; 
  public get optional() {
    return this.getBooleanAttribute('optional');
  }
  public set optional(value: boolean | cdktf.IResolvable) {
    this._optional = value;
  }
  public resetOptional() {
    this._optional = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalInput() {
    return this._optional;
  }
}
export interface DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerInitContainerEnvVarsValueFrom {
  /**
  * Selects a key of a ConfigMap.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/repo_manager_pulpproject_org_pulp_v1beta2_manifest#config_map_key_ref DataK8SRepoManagerPulpprojectOrgPulpV1Beta2Manifest#config_map_key_ref}
  */
  readonly configMapKeyRef?: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerInitContainerEnvVarsValueFromConfigMapKeyRef;
  /**
  * Selects a field of the pod: supports metadata.name, metadata.namespace, 'metadata.labels['<KEY>']', 'metadata.annotations['<KEY>']', spec.nodeName, spec.serviceAccountName, status.hostIP, status.podIP, status.podIPs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/repo_manager_pulpproject_org_pulp_v1beta2_manifest#field_ref DataK8SRepoManagerPulpprojectOrgPulpV1Beta2Manifest#field_ref}
  */
  readonly fieldRef?: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerInitContainerEnvVarsValueFromFieldRef;
  /**
  * Selects a resource of the container: only resources limits and requests (limits.cpu, limits.memory, limits.ephemeral-storage, requests.cpu, requests.memory and requests.ephemeral-storage) are currently supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/repo_manager_pulpproject_org_pulp_v1beta2_manifest#resource_field_ref DataK8SRepoManagerPulpprojectOrgPulpV1Beta2Manifest#resource_field_ref}
  */
  readonly resourceFieldRef?: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerInitContainerEnvVarsValueFromResourceFieldRef;
  /**
  * Selects a key of a secret in the pod's namespace
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/repo_manager_pulpproject_org_pulp_v1beta2_manifest#secret_key_ref DataK8SRepoManagerPulpprojectOrgPulpV1Beta2Manifest#secret_key_ref}
  */
  readonly secretKeyRef?: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerInitContainerEnvVarsValueFromSecretKeyRef;
}

export function dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerInitContainerEnvVarsValueFromToTerraform(struct?: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerInitContainerEnvVarsValueFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config_map_key_ref: dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerInitContainerEnvVarsValueFromConfigMapKeyRefToTerraform(struct!.configMapKeyRef),
    field_ref: dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerInitContainerEnvVarsValueFromFieldRefToTerraform(struct!.fieldRef),
    resource_field_ref: dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerInitContainerEnvVarsValueFromResourceFieldRefToTerraform(struct!.resourceFieldRef),
    secret_key_ref: dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerInitContainerEnvVarsValueFromSecretKeyRefToTerraform(struct!.secretKeyRef),
  }
}


export function dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerInitContainerEnvVarsValueFromToHclTerraform(struct?: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerInitContainerEnvVarsValueFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    config_map_key_ref: {
      value: dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerInitContainerEnvVarsValueFromConfigMapKeyRefToHclTerraform(struct!.configMapKeyRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerInitContainerEnvVarsValueFromConfigMapKeyRef",
    },
    field_ref: {
      value: dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerInitContainerEnvVarsValueFromFieldRefToHclTerraform(struct!.fieldRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerInitContainerEnvVarsValueFromFieldRef",
    },
    resource_field_ref: {
      value: dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerInitContainerEnvVarsValueFromResourceFieldRefToHclTerraform(struct!.resourceFieldRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerInitContainerEnvVarsValueFromResourceFieldRef",
    },
    secret_key_ref: {
      value: dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerInitContainerEnvVarsValueFromSecretKeyRefToHclTerraform(struct!.secretKeyRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerInitContainerEnvVarsValueFromSecretKeyRef",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerInitContainerEnvVarsValueFromOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerInitContainerEnvVarsValueFrom | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._configMapKeyRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.configMapKeyRef = this._configMapKeyRef?.internalValue;
    }
    if (this._fieldRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldRef = this._fieldRef?.internalValue;
    }
    if (this._resourceFieldRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceFieldRef = this._resourceFieldRef?.internalValue;
    }
    if (this._secretKeyRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretKeyRef = this._secretKeyRef?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerInitContainerEnvVarsValueFrom | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._configMapKeyRef.internalValue = undefined;
      this._fieldRef.internalValue = undefined;
      this._resourceFieldRef.internalValue = undefined;
      this._secretKeyRef.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._configMapKeyRef.internalValue = value.configMapKeyRef;
      this._fieldRef.internalValue = value.fieldRef;
      this._resourceFieldRef.internalValue = value.resourceFieldRef;
      this._secretKeyRef.internalValue = value.secretKeyRef;
    }
  }

  // config_map_key_ref - computed: false, optional: true, required: false
  private _configMapKeyRef = new DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerInitContainerEnvVarsValueFromConfigMapKeyRefOutputReference(this, "config_map_key_ref");
  public get configMapKeyRef() {
    return this._configMapKeyRef;
  }
  public putConfigMapKeyRef(value: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerInitContainerEnvVarsValueFromConfigMapKeyRef) {
    this._configMapKeyRef.internalValue = value;
  }
  public resetConfigMapKeyRef() {
    this._configMapKeyRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configMapKeyRefInput() {
    return this._configMapKeyRef.internalValue;
  }

  // field_ref - computed: false, optional: true, required: false
  private _fieldRef = new DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerInitContainerEnvVarsValueFromFieldRefOutputReference(this, "field_ref");
  public get fieldRef() {
    return this._fieldRef;
  }
  public putFieldRef(value: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerInitContainerEnvVarsValueFromFieldRef) {
    this._fieldRef.internalValue = value;
  }
  public resetFieldRef() {
    this._fieldRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldRefInput() {
    return this._fieldRef.internalValue;
  }

  // resource_field_ref - computed: false, optional: true, required: false
  private _resourceFieldRef = new DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerInitContainerEnvVarsValueFromResourceFieldRefOutputReference(this, "resource_field_ref");
  public get resourceFieldRef() {
    return this._resourceFieldRef;
  }
  public putResourceFieldRef(value: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerInitContainerEnvVarsValueFromResourceFieldRef) {
    this._resourceFieldRef.internalValue = value;
  }
  public resetResourceFieldRef() {
    this._resourceFieldRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceFieldRefInput() {
    return this._resourceFieldRef.internalValue;
  }

  // secret_key_ref - computed: false, optional: true, required: false
  private _secretKeyRef = new DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerInitContainerEnvVarsValueFromSecretKeyRefOutputReference(this, "secret_key_ref");
  public get secretKeyRef() {
    return this._secretKeyRef;
  }
  public putSecretKeyRef(value: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerInitContainerEnvVarsValueFromSecretKeyRef) {
    this._secretKeyRef.internalValue = value;
  }
  public resetSecretKeyRef() {
    this._secretKeyRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretKeyRefInput() {
    return this._secretKeyRef.internalValue;
  }
}
export interface DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerInitContainerEnvVars {
  /**
  * Name of the environment variable. Must be a C_IDENTIFIER.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/repo_manager_pulpproject_org_pulp_v1beta2_manifest#name DataK8SRepoManagerPulpprojectOrgPulpV1Beta2Manifest#name}
  */
  readonly name: string;
  /**
  * Variable references $(VAR_NAME) are expanded using the previously defined environment variables in the container and any service environment variables. If a variable cannot be resolved, the reference in the input string will be unchanged. Double $$ are reduced to a single $, which allows for escaping the $(VAR_NAME) syntax: i.e. '$$(VAR_NAME)' will produce the string literal '$(VAR_NAME)'. Escaped references will never be expanded, regardless of whether the variable exists or not. Defaults to ''.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/repo_manager_pulpproject_org_pulp_v1beta2_manifest#value DataK8SRepoManagerPulpprojectOrgPulpV1Beta2Manifest#value}
  */
  readonly value?: string;
  /**
  * Source for the environment variable's value. Cannot be used if value is not empty.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/repo_manager_pulpproject_org_pulp_v1beta2_manifest#value_from DataK8SRepoManagerPulpprojectOrgPulpV1Beta2Manifest#value_from}
  */
  readonly valueFrom?: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerInitContainerEnvVarsValueFrom;
}

export function dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerInitContainerEnvVarsToTerraform(struct?: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerInitContainerEnvVars | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
    value_from: dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerInitContainerEnvVarsValueFromToTerraform(struct!.valueFrom),
  }
}


export function dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerInitContainerEnvVarsToHclTerraform(struct?: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerInitContainerEnvVars | cdktf.IResolvable): any {
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
    value_from: {
      value: dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerInitContainerEnvVarsValueFromToHclTerraform(struct!.valueFrom),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerInitContainerEnvVarsValueFrom",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerInitContainerEnvVarsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerInitContainerEnvVars | cdktf.IResolvable | undefined {
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
    if (this._valueFrom?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.valueFrom = this._valueFrom?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerInitContainerEnvVars | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
      this._valueFrom.internalValue = undefined;
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
      this._valueFrom.internalValue = value.valueFrom;
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

  // value_from - computed: false, optional: true, required: false
  private _valueFrom = new DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerInitContainerEnvVarsValueFromOutputReference(this, "value_from");
  public get valueFrom() {
    return this._valueFrom;
  }
  public putValueFrom(value: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerInitContainerEnvVarsValueFrom) {
    this._valueFrom.internalValue = value;
  }
  public resetValueFrom() {
    this._valueFrom.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueFromInput() {
    return this._valueFrom.internalValue;
  }
}

export class DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerInitContainerEnvVarsList extends cdktf.ComplexList {
  public internalValue? : DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerInitContainerEnvVars[] | cdktf.IResolvable

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
  public get(index: number): DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerInitContainerEnvVarsOutputReference {
    return new DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerInitContainerEnvVarsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerInitContainerResourceRequirementsClaims {
  /**
  * Name must match the name of one entry in pod.spec.resourceClaims of the Pod where this field is used. It makes that resource available inside a container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/repo_manager_pulpproject_org_pulp_v1beta2_manifest#name DataK8SRepoManagerPulpprojectOrgPulpV1Beta2Manifest#name}
  */
  readonly name: string;
}

export function dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerInitContainerResourceRequirementsClaimsToTerraform(struct?: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerInitContainerResourceRequirementsClaims | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerInitContainerResourceRequirementsClaimsToHclTerraform(struct?: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerInitContainerResourceRequirementsClaims | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerInitContainerResourceRequirementsClaimsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerInitContainerResourceRequirementsClaims | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerInitContainerResourceRequirementsClaims | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
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
}

export class DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerInitContainerResourceRequirementsClaimsList extends cdktf.ComplexList {
  public internalValue? : DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerInitContainerResourceRequirementsClaims[] | cdktf.IResolvable

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
  public get(index: number): DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerInitContainerResourceRequirementsClaimsOutputReference {
    return new DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerInitContainerResourceRequirementsClaimsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerInitContainerResourceRequirements {
  /**
  * Claims lists the names of resources, defined in spec.resourceClaims, that are used by this container. This is an alpha field and requires enabling the DynamicResourceAllocation feature gate. This field is immutable. It can only be set for containers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/repo_manager_pulpproject_org_pulp_v1beta2_manifest#claims DataK8SRepoManagerPulpprojectOrgPulpV1Beta2Manifest#claims}
  */
  readonly claims?: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerInitContainerResourceRequirementsClaims[] | cdktf.IResolvable;
  /**
  * Limits describes the maximum amount of compute resources allowed. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/repo_manager_pulpproject_org_pulp_v1beta2_manifest#limits DataK8SRepoManagerPulpprojectOrgPulpV1Beta2Manifest#limits}
  */
  readonly limits?: { [key: string]: string };
  /**
  * Requests describes the minimum amount of compute resources required. If Requests is omitted for a container, it defaults to Limits if that is explicitly specified, otherwise to an implementation-defined value. Requests cannot exceed Limits. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/repo_manager_pulpproject_org_pulp_v1beta2_manifest#requests DataK8SRepoManagerPulpprojectOrgPulpV1Beta2Manifest#requests}
  */
  readonly requests?: { [key: string]: string };
}

export function dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerInitContainerResourceRequirementsToTerraform(struct?: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerInitContainerResourceRequirements | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    claims: cdktf.listMapper(dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerInitContainerResourceRequirementsClaimsToTerraform, false)(struct!.claims),
    limits: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.limits),
    requests: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.requests),
  }
}


export function dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerInitContainerResourceRequirementsToHclTerraform(struct?: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerInitContainerResourceRequirements | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    claims: {
      value: cdktf.listMapperHcl(dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerInitContainerResourceRequirementsClaimsToHclTerraform, false)(struct!.claims),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerInitContainerResourceRequirementsClaimsList",
    },
    limits: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.limits),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    requests: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.requests),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerInitContainerResourceRequirementsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerInitContainerResourceRequirements | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._claims?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.claims = this._claims?.internalValue;
    }
    if (this._limits !== undefined) {
      hasAnyValues = true;
      internalValueResult.limits = this._limits;
    }
    if (this._requests !== undefined) {
      hasAnyValues = true;
      internalValueResult.requests = this._requests;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerInitContainerResourceRequirements | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._claims.internalValue = undefined;
      this._limits = undefined;
      this._requests = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._claims.internalValue = value.claims;
      this._limits = value.limits;
      this._requests = value.requests;
    }
  }

  // claims - computed: false, optional: true, required: false
  private _claims = new DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerInitContainerResourceRequirementsClaimsList(this, "claims", false);
  public get claims() {
    return this._claims;
  }
  public putClaims(value: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerInitContainerResourceRequirementsClaims[] | cdktf.IResolvable) {
    this._claims.internalValue = value;
  }
  public resetClaims() {
    this._claims.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get claimsInput() {
    return this._claims.internalValue;
  }

  // limits - computed: false, optional: true, required: false
  private _limits?: { [key: string]: string }; 
  public get limits() {
    return this.getStringMapAttribute('limits');
  }
  public set limits(value: { [key: string]: string }) {
    this._limits = value;
  }
  public resetLimits() {
    this._limits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitsInput() {
    return this._limits;
  }

  // requests - computed: false, optional: true, required: false
  private _requests?: { [key: string]: string }; 
  public get requests() {
    return this.getStringMapAttribute('requests');
  }
  public set requests(value: { [key: string]: string }) {
    this._requests = value;
  }
  public resetRequests() {
    this._requests = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestsInput() {
    return this._requests;
  }
}
export interface DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerInitContainer {
  /**
  * Environment variables to add to the container
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/repo_manager_pulpproject_org_pulp_v1beta2_manifest#env_vars DataK8SRepoManagerPulpprojectOrgPulpV1Beta2Manifest#env_vars}
  */
  readonly envVars?: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerInitContainerEnvVars[] | cdktf.IResolvable;
  /**
  * The image name for the container. By default, if not provided, it will use the same image from .Spec.Image. WARN: defining a different image than the one used by API pods can cause unexpected behaviors!
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/repo_manager_pulpproject_org_pulp_v1beta2_manifest#image DataK8SRepoManagerPulpprojectOrgPulpV1Beta2Manifest#image}
  */
  readonly image?: string;
  /**
  * Resource requirements for pulpcore aux container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/repo_manager_pulpproject_org_pulp_v1beta2_manifest#resource_requirements DataK8SRepoManagerPulpprojectOrgPulpV1Beta2Manifest#resource_requirements}
  */
  readonly resourceRequirements?: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerInitContainerResourceRequirements;
}

export function dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerInitContainerToTerraform(struct?: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerInitContainer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    env_vars: cdktf.listMapper(dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerInitContainerEnvVarsToTerraform, false)(struct!.envVars),
    image: cdktf.stringToTerraform(struct!.image),
    resource_requirements: dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerInitContainerResourceRequirementsToTerraform(struct!.resourceRequirements),
  }
}


export function dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerInitContainerToHclTerraform(struct?: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerInitContainer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    env_vars: {
      value: cdktf.listMapperHcl(dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerInitContainerEnvVarsToHclTerraform, false)(struct!.envVars),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerInitContainerEnvVarsList",
    },
    image: {
      value: cdktf.stringToHclTerraform(struct!.image),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource_requirements: {
      value: dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerInitContainerResourceRequirementsToHclTerraform(struct!.resourceRequirements),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerInitContainerResourceRequirements",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerInitContainerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerInitContainer | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._envVars?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.envVars = this._envVars?.internalValue;
    }
    if (this._image !== undefined) {
      hasAnyValues = true;
      internalValueResult.image = this._image;
    }
    if (this._resourceRequirements?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceRequirements = this._resourceRequirements?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerInitContainer | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._envVars.internalValue = undefined;
      this._image = undefined;
      this._resourceRequirements.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._envVars.internalValue = value.envVars;
      this._image = value.image;
      this._resourceRequirements.internalValue = value.resourceRequirements;
    }
  }

  // env_vars - computed: false, optional: true, required: false
  private _envVars = new DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerInitContainerEnvVarsList(this, "env_vars", false);
  public get envVars() {
    return this._envVars;
  }
  public putEnvVars(value: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerInitContainerEnvVars[] | cdktf.IResolvable) {
    this._envVars.internalValue = value;
  }
  public resetEnvVars() {
    this._envVars.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get envVarsInput() {
    return this._envVars.internalValue;
  }

  // image - computed: false, optional: true, required: false
  private _image?: string; 
  public get image() {
    return this.getStringAttribute('image');
  }
  public set image(value: string) {
    this._image = value;
  }
  public resetImage() {
    this._image = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageInput() {
    return this._image;
  }

  // resource_requirements - computed: false, optional: true, required: false
  private _resourceRequirements = new DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerInitContainerResourceRequirementsOutputReference(this, "resource_requirements");
  public get resourceRequirements() {
    return this._resourceRequirements;
  }
  public putResourceRequirements(value: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerInitContainerResourceRequirements) {
    this._resourceRequirements.internalValue = value;
  }
  public resetResourceRequirements() {
    this._resourceRequirements.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceRequirementsInput() {
    return this._resourceRequirements.internalValue;
  }
}
export interface DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerLivenessProbeExec {
  /**
  * Command is the command line to execute inside the container, the working directory for the command is root ('/') in the container's filesystem. The command is simply exec'd, it is not run inside a shell, so traditional shell instructions ('|', etc) won't work. To use a shell, you need to explicitly call out to that shell. Exit status of 0 is treated as live/healthy and non-zero is unhealthy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/repo_manager_pulpproject_org_pulp_v1beta2_manifest#command DataK8SRepoManagerPulpprojectOrgPulpV1Beta2Manifest#command}
  */
  readonly command?: string[];
}

export function dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerLivenessProbeExecToTerraform(struct?: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerLivenessProbeExec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    command: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.command),
  }
}


export function dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerLivenessProbeExecToHclTerraform(struct?: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerLivenessProbeExec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    command: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.command),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerLivenessProbeExecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerLivenessProbeExec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._command !== undefined) {
      hasAnyValues = true;
      internalValueResult.command = this._command;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerLivenessProbeExec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._command = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._command = value.command;
    }
  }

  // command - computed: false, optional: true, required: false
  private _command?: string[]; 
  public get command() {
    return this.getListAttribute('command');
  }
  public set command(value: string[]) {
    this._command = value;
  }
  public resetCommand() {
    this._command = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commandInput() {
    return this._command;
  }
}
export interface DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerLivenessProbeGrpc {
  /**
  * Port number of the gRPC service. Number must be in the range 1 to 65535.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/repo_manager_pulpproject_org_pulp_v1beta2_manifest#port DataK8SRepoManagerPulpprojectOrgPulpV1Beta2Manifest#port}
  */
  readonly port: number;
  /**
  * Service is the name of the service to place in the gRPC HealthCheckRequest (see https://github.com/grpc/grpc/blob/master/doc/health-checking.md). If this is not specified, the default behavior is defined by gRPC.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/repo_manager_pulpproject_org_pulp_v1beta2_manifest#service DataK8SRepoManagerPulpprojectOrgPulpV1Beta2Manifest#service}
  */
  readonly service?: string;
}

export function dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerLivenessProbeGrpcToTerraform(struct?: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerLivenessProbeGrpc | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    port: cdktf.numberToTerraform(struct!.port),
    service: cdktf.stringToTerraform(struct!.service),
  }
}


export function dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerLivenessProbeGrpcToHclTerraform(struct?: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerLivenessProbeGrpc | cdktf.IResolvable): any {
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
    service: {
      value: cdktf.stringToHclTerraform(struct!.service),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerLivenessProbeGrpcOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerLivenessProbeGrpc | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._service !== undefined) {
      hasAnyValues = true;
      internalValueResult.service = this._service;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerLivenessProbeGrpc | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._port = undefined;
      this._service = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._port = value.port;
      this._service = value.service;
    }
  }

  // port - computed: false, optional: false, required: true
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // service - computed: false, optional: true, required: false
  private _service?: string; 
  public get service() {
    return this.getStringAttribute('service');
  }
  public set service(value: string) {
    this._service = value;
  }
  public resetService() {
    this._service = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceInput() {
    return this._service;
  }
}
export interface DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerLivenessProbeHttpGetHttpHeaders {
  /**
  * The header field name. This will be canonicalized upon output, so case-variant names will be understood as the same header.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/repo_manager_pulpproject_org_pulp_v1beta2_manifest#name DataK8SRepoManagerPulpprojectOrgPulpV1Beta2Manifest#name}
  */
  readonly name: string;
  /**
  * The header field value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/repo_manager_pulpproject_org_pulp_v1beta2_manifest#value DataK8SRepoManagerPulpprojectOrgPulpV1Beta2Manifest#value}
  */
  readonly value: string;
}

export function dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerLivenessProbeHttpGetHttpHeadersToTerraform(struct?: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerLivenessProbeHttpGetHttpHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerLivenessProbeHttpGetHttpHeadersToHclTerraform(struct?: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerLivenessProbeHttpGetHttpHeaders | cdktf.IResolvable): any {
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

export class DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerLivenessProbeHttpGetHttpHeadersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerLivenessProbeHttpGetHttpHeaders | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerLivenessProbeHttpGetHttpHeaders | cdktf.IResolvable | undefined) {
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

export class DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerLivenessProbeHttpGetHttpHeadersList extends cdktf.ComplexList {
  public internalValue? : DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerLivenessProbeHttpGetHttpHeaders[] | cdktf.IResolvable

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
  public get(index: number): DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerLivenessProbeHttpGetHttpHeadersOutputReference {
    return new DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerLivenessProbeHttpGetHttpHeadersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerLivenessProbeHttpGet {
  /**
  * Host name to connect to, defaults to the pod IP. You probably want to set 'Host' in httpHeaders instead.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/repo_manager_pulpproject_org_pulp_v1beta2_manifest#host DataK8SRepoManagerPulpprojectOrgPulpV1Beta2Manifest#host}
  */
  readonly host?: string;
  /**
  * Custom headers to set in the request. HTTP allows repeated headers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/repo_manager_pulpproject_org_pulp_v1beta2_manifest#http_headers DataK8SRepoManagerPulpprojectOrgPulpV1Beta2Manifest#http_headers}
  */
  readonly httpHeaders?: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerLivenessProbeHttpGetHttpHeaders[] | cdktf.IResolvable;
  /**
  * Path to access on the HTTP server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/repo_manager_pulpproject_org_pulp_v1beta2_manifest#path DataK8SRepoManagerPulpprojectOrgPulpV1Beta2Manifest#path}
  */
  readonly path?: string;
  /**
  * Name or number of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/repo_manager_pulpproject_org_pulp_v1beta2_manifest#port DataK8SRepoManagerPulpprojectOrgPulpV1Beta2Manifest#port}
  */
  readonly port: string;
  /**
  * Scheme to use for connecting to the host. Defaults to HTTP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/repo_manager_pulpproject_org_pulp_v1beta2_manifest#scheme DataK8SRepoManagerPulpprojectOrgPulpV1Beta2Manifest#scheme}
  */
  readonly scheme?: string;
}

export function dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerLivenessProbeHttpGetToTerraform(struct?: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerLivenessProbeHttpGet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host: cdktf.stringToTerraform(struct!.host),
    http_headers: cdktf.listMapper(dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerLivenessProbeHttpGetHttpHeadersToTerraform, false)(struct!.httpHeaders),
    path: cdktf.stringToTerraform(struct!.path),
    port: cdktf.stringToTerraform(struct!.port),
    scheme: cdktf.stringToTerraform(struct!.scheme),
  }
}


export function dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerLivenessProbeHttpGetToHclTerraform(struct?: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerLivenessProbeHttpGet | cdktf.IResolvable): any {
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
    http_headers: {
      value: cdktf.listMapperHcl(dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerLivenessProbeHttpGetHttpHeadersToHclTerraform, false)(struct!.httpHeaders),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerLivenessProbeHttpGetHttpHeadersList",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.stringToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scheme: {
      value: cdktf.stringToHclTerraform(struct!.scheme),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerLivenessProbeHttpGetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerLivenessProbeHttpGet | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._httpHeaders?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpHeaders = this._httpHeaders?.internalValue;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._scheme !== undefined) {
      hasAnyValues = true;
      internalValueResult.scheme = this._scheme;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerLivenessProbeHttpGet | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._host = undefined;
      this._httpHeaders.internalValue = undefined;
      this._path = undefined;
      this._port = undefined;
      this._scheme = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._host = value.host;
      this._httpHeaders.internalValue = value.httpHeaders;
      this._path = value.path;
      this._port = value.port;
      this._scheme = value.scheme;
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

  // http_headers - computed: false, optional: true, required: false
  private _httpHeaders = new DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerLivenessProbeHttpGetHttpHeadersList(this, "http_headers", false);
  public get httpHeaders() {
    return this._httpHeaders;
  }
  public putHttpHeaders(value: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerLivenessProbeHttpGetHttpHeaders[] | cdktf.IResolvable) {
    this._httpHeaders.internalValue = value;
  }
  public resetHttpHeaders() {
    this._httpHeaders.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpHeadersInput() {
    return this._httpHeaders.internalValue;
  }

  // path - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // port - computed: false, optional: false, required: true
  private _port?: string; 
  public get port() {
    return this.getStringAttribute('port');
  }
  public set port(value: string) {
    this._port = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // scheme - computed: false, optional: true, required: false
  private _scheme?: string; 
  public get scheme() {
    return this.getStringAttribute('scheme');
  }
  public set scheme(value: string) {
    this._scheme = value;
  }
  public resetScheme() {
    this._scheme = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemeInput() {
    return this._scheme;
  }
}
export interface DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerLivenessProbeTcpSocket {
  /**
  * Optional: Host name to connect to, defaults to the pod IP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/repo_manager_pulpproject_org_pulp_v1beta2_manifest#host DataK8SRepoManagerPulpprojectOrgPulpV1Beta2Manifest#host}
  */
  readonly host?: string;
  /**
  * Number or name of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/repo_manager_pulpproject_org_pulp_v1beta2_manifest#port DataK8SRepoManagerPulpprojectOrgPulpV1Beta2Manifest#port}
  */
  readonly port: string;
}

export function dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerLivenessProbeTcpSocketToTerraform(struct?: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerLivenessProbeTcpSocket | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host: cdktf.stringToTerraform(struct!.host),
    port: cdktf.stringToTerraform(struct!.port),
  }
}


export function dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerLivenessProbeTcpSocketToHclTerraform(struct?: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerLivenessProbeTcpSocket | cdktf.IResolvable): any {
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
    port: {
      value: cdktf.stringToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerLivenessProbeTcpSocketOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerLivenessProbeTcpSocket | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerLivenessProbeTcpSocket | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._host = undefined;
      this._port = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._host = value.host;
      this._port = value.port;
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

  // port - computed: false, optional: false, required: true
  private _port?: string; 
  public get port() {
    return this.getStringAttribute('port');
  }
  public set port(value: string) {
    this._port = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }
}
export interface DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerLivenessProbe {
  /**
  * Exec specifies the action to take.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/repo_manager_pulpproject_org_pulp_v1beta2_manifest#exec DataK8SRepoManagerPulpprojectOrgPulpV1Beta2Manifest#exec}
  */
  readonly exec?: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerLivenessProbeExec;
  /**
  * Minimum consecutive failures for the probe to be considered failed after having succeeded. Defaults to 3. Minimum value is 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/repo_manager_pulpproject_org_pulp_v1beta2_manifest#failure_threshold DataK8SRepoManagerPulpprojectOrgPulpV1Beta2Manifest#failure_threshold}
  */
  readonly failureThreshold?: number;
  /**
  * GRPC specifies an action involving a GRPC port.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/repo_manager_pulpproject_org_pulp_v1beta2_manifest#grpc DataK8SRepoManagerPulpprojectOrgPulpV1Beta2Manifest#grpc}
  */
  readonly grpc?: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerLivenessProbeGrpc;
  /**
  * HTTPGet specifies the http request to perform.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/repo_manager_pulpproject_org_pulp_v1beta2_manifest#http_get DataK8SRepoManagerPulpprojectOrgPulpV1Beta2Manifest#http_get}
  */
  readonly httpGet?: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerLivenessProbeHttpGet;
  /**
  * Number of seconds after the container has started before liveness probes are initiated. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/repo_manager_pulpproject_org_pulp_v1beta2_manifest#initial_delay_seconds DataK8SRepoManagerPulpprojectOrgPulpV1Beta2Manifest#initial_delay_seconds}
  */
  readonly initialDelaySeconds?: number;
  /**
  * How often (in seconds) to perform the probe. Default to 10 seconds. Minimum value is 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/repo_manager_pulpproject_org_pulp_v1beta2_manifest#period_seconds DataK8SRepoManagerPulpprojectOrgPulpV1Beta2Manifest#period_seconds}
  */
  readonly periodSeconds?: number;
  /**
  * Minimum consecutive successes for the probe to be considered successful after having failed. Defaults to 1. Must be 1 for liveness and startup. Minimum value is 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/repo_manager_pulpproject_org_pulp_v1beta2_manifest#success_threshold DataK8SRepoManagerPulpprojectOrgPulpV1Beta2Manifest#success_threshold}
  */
  readonly successThreshold?: number;
  /**
  * TCPSocket specifies an action involving a TCP port.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/repo_manager_pulpproject_org_pulp_v1beta2_manifest#tcp_socket DataK8SRepoManagerPulpprojectOrgPulpV1Beta2Manifest#tcp_socket}
  */
  readonly tcpSocket?: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerLivenessProbeTcpSocket;
  /**
  * Optional duration in seconds the pod needs to terminate gracefully upon probe failure. The grace period is the duration in seconds after the processes running in the pod are sent a termination signal and the time when the processes are forcibly halted with a kill signal. Set this value longer than the expected cleanup time for your process. If this value is nil, the pod's terminationGracePeriodSeconds will be used. Otherwise, this value overrides the value provided by the pod spec. Value must be non-negative integer. The value zero indicates stop immediately via the kill signal (no opportunity to shut down). This is a beta field and requires enabling ProbeTerminationGracePeriod feature gate. Minimum value is 1. spec.terminationGracePeriodSeconds is used if unset.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/repo_manager_pulpproject_org_pulp_v1beta2_manifest#termination_grace_period_seconds DataK8SRepoManagerPulpprojectOrgPulpV1Beta2Manifest#termination_grace_period_seconds}
  */
  readonly terminationGracePeriodSeconds?: number;
  /**
  * Number of seconds after which the probe times out. Defaults to 1 second. Minimum value is 1. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/repo_manager_pulpproject_org_pulp_v1beta2_manifest#timeout_seconds DataK8SRepoManagerPulpprojectOrgPulpV1Beta2Manifest#timeout_seconds}
  */
  readonly timeoutSeconds?: number;
}

export function dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerLivenessProbeToTerraform(struct?: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerLivenessProbe | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exec: dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerLivenessProbeExecToTerraform(struct!.exec),
    failure_threshold: cdktf.numberToTerraform(struct!.failureThreshold),
    grpc: dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerLivenessProbeGrpcToTerraform(struct!.grpc),
    http_get: dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerLivenessProbeHttpGetToTerraform(struct!.httpGet),
    initial_delay_seconds: cdktf.numberToTerraform(struct!.initialDelaySeconds),
    period_seconds: cdktf.numberToTerraform(struct!.periodSeconds),
    success_threshold: cdktf.numberToTerraform(struct!.successThreshold),
    tcp_socket: dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerLivenessProbeTcpSocketToTerraform(struct!.tcpSocket),
    termination_grace_period_seconds: cdktf.numberToTerraform(struct!.terminationGracePeriodSeconds),
    timeout_seconds: cdktf.numberToTerraform(struct!.timeoutSeconds),
  }
}


export function dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerLivenessProbeToHclTerraform(struct?: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerLivenessProbe | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exec: {
      value: dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerLivenessProbeExecToHclTerraform(struct!.exec),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerLivenessProbeExec",
    },
    failure_threshold: {
      value: cdktf.numberToHclTerraform(struct!.failureThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    grpc: {
      value: dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerLivenessProbeGrpcToHclTerraform(struct!.grpc),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerLivenessProbeGrpc",
    },
    http_get: {
      value: dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerLivenessProbeHttpGetToHclTerraform(struct!.httpGet),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerLivenessProbeHttpGet",
    },
    initial_delay_seconds: {
      value: cdktf.numberToHclTerraform(struct!.initialDelaySeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    period_seconds: {
      value: cdktf.numberToHclTerraform(struct!.periodSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    success_threshold: {
      value: cdktf.numberToHclTerraform(struct!.successThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_socket: {
      value: dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerLivenessProbeTcpSocketToHclTerraform(struct!.tcpSocket),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerLivenessProbeTcpSocket",
    },
    termination_grace_period_seconds: {
      value: cdktf.numberToHclTerraform(struct!.terminationGracePeriodSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    timeout_seconds: {
      value: cdktf.numberToHclTerraform(struct!.timeoutSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerLivenessProbeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerLivenessProbe | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exec?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.exec = this._exec?.internalValue;
    }
    if (this._failureThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.failureThreshold = this._failureThreshold;
    }
    if (this._grpc?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.grpc = this._grpc?.internalValue;
    }
    if (this._httpGet?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpGet = this._httpGet?.internalValue;
    }
    if (this._initialDelaySeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.initialDelaySeconds = this._initialDelaySeconds;
    }
    if (this._periodSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.periodSeconds = this._periodSeconds;
    }
    if (this._successThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.successThreshold = this._successThreshold;
    }
    if (this._tcpSocket?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpSocket = this._tcpSocket?.internalValue;
    }
    if (this._terminationGracePeriodSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.terminationGracePeriodSeconds = this._terminationGracePeriodSeconds;
    }
    if (this._timeoutSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeoutSeconds = this._timeoutSeconds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerLivenessProbe | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._exec.internalValue = undefined;
      this._failureThreshold = undefined;
      this._grpc.internalValue = undefined;
      this._httpGet.internalValue = undefined;
      this._initialDelaySeconds = undefined;
      this._periodSeconds = undefined;
      this._successThreshold = undefined;
      this._tcpSocket.internalValue = undefined;
      this._terminationGracePeriodSeconds = undefined;
      this._timeoutSeconds = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._exec.internalValue = value.exec;
      this._failureThreshold = value.failureThreshold;
      this._grpc.internalValue = value.grpc;
      this._httpGet.internalValue = value.httpGet;
      this._initialDelaySeconds = value.initialDelaySeconds;
      this._periodSeconds = value.periodSeconds;
      this._successThreshold = value.successThreshold;
      this._tcpSocket.internalValue = value.tcpSocket;
      this._terminationGracePeriodSeconds = value.terminationGracePeriodSeconds;
      this._timeoutSeconds = value.timeoutSeconds;
    }
  }

  // exec - computed: false, optional: true, required: false
  private _exec = new DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerLivenessProbeExecOutputReference(this, "exec");
  public get exec() {
    return this._exec;
  }
  public putExec(value: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerLivenessProbeExec) {
    this._exec.internalValue = value;
  }
  public resetExec() {
    this._exec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get execInput() {
    return this._exec.internalValue;
  }

  // failure_threshold - computed: false, optional: true, required: false
  private _failureThreshold?: number; 
  public get failureThreshold() {
    return this.getNumberAttribute('failure_threshold');
  }
  public set failureThreshold(value: number) {
    this._failureThreshold = value;
  }
  public resetFailureThreshold() {
    this._failureThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failureThresholdInput() {
    return this._failureThreshold;
  }

  // grpc - computed: false, optional: true, required: false
  private _grpc = new DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerLivenessProbeGrpcOutputReference(this, "grpc");
  public get grpc() {
    return this._grpc;
  }
  public putGrpc(value: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerLivenessProbeGrpc) {
    this._grpc.internalValue = value;
  }
  public resetGrpc() {
    this._grpc.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get grpcInput() {
    return this._grpc.internalValue;
  }

  // http_get - computed: false, optional: true, required: false
  private _httpGet = new DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerLivenessProbeHttpGetOutputReference(this, "http_get");
  public get httpGet() {
    return this._httpGet;
  }
  public putHttpGet(value: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerLivenessProbeHttpGet) {
    this._httpGet.internalValue = value;
  }
  public resetHttpGet() {
    this._httpGet.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpGetInput() {
    return this._httpGet.internalValue;
  }

  // initial_delay_seconds - computed: false, optional: true, required: false
  private _initialDelaySeconds?: number; 
  public get initialDelaySeconds() {
    return this.getNumberAttribute('initial_delay_seconds');
  }
  public set initialDelaySeconds(value: number) {
    this._initialDelaySeconds = value;
  }
  public resetInitialDelaySeconds() {
    this._initialDelaySeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initialDelaySecondsInput() {
    return this._initialDelaySeconds;
  }

  // period_seconds - computed: false, optional: true, required: false
  private _periodSeconds?: number; 
  public get periodSeconds() {
    return this.getNumberAttribute('period_seconds');
  }
  public set periodSeconds(value: number) {
    this._periodSeconds = value;
  }
  public resetPeriodSeconds() {
    this._periodSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get periodSecondsInput() {
    return this._periodSeconds;
  }

  // success_threshold - computed: false, optional: true, required: false
  private _successThreshold?: number; 
  public get successThreshold() {
    return this.getNumberAttribute('success_threshold');
  }
  public set successThreshold(value: number) {
    this._successThreshold = value;
  }
  public resetSuccessThreshold() {
    this._successThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get successThresholdInput() {
    return this._successThreshold;
  }

  // tcp_socket - computed: false, optional: true, required: false
  private _tcpSocket = new DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerLivenessProbeTcpSocketOutputReference(this, "tcp_socket");
  public get tcpSocket() {
    return this._tcpSocket;
  }
  public putTcpSocket(value: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerLivenessProbeTcpSocket) {
    this._tcpSocket.internalValue = value;
  }
  public resetTcpSocket() {
    this._tcpSocket.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpSocketInput() {
    return this._tcpSocket.internalValue;
  }

  // termination_grace_period_seconds - computed: false, optional: true, required: false
  private _terminationGracePeriodSeconds?: number; 
  public get terminationGracePeriodSeconds() {
    return this.getNumberAttribute('termination_grace_period_seconds');
  }
  public set terminationGracePeriodSeconds(value: number) {
    this._terminationGracePeriodSeconds = value;
  }
  public resetTerminationGracePeriodSeconds() {
    this._terminationGracePeriodSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get terminationGracePeriodSecondsInput() {
    return this._terminationGracePeriodSeconds;
  }

  // timeout_seconds - computed: false, optional: true, required: false
  private _timeoutSeconds?: number; 
  public get timeoutSeconds() {
    return this.getNumberAttribute('timeout_seconds');
  }
  public set timeoutSeconds(value: number) {
    this._timeoutSeconds = value;
  }
  public resetTimeoutSeconds() {
    this._timeoutSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutSecondsInput() {
    return this._timeoutSeconds;
  }
}
export interface DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerPdbSelectorMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/repo_manager_pulpproject_org_pulp_v1beta2_manifest#key DataK8SRepoManagerPulpprojectOrgPulpV1Beta2Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/repo_manager_pulpproject_org_pulp_v1beta2_manifest#operator DataK8SRepoManagerPulpprojectOrgPulpV1Beta2Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/repo_manager_pulpproject_org_pulp_v1beta2_manifest#values DataK8SRepoManagerPulpprojectOrgPulpV1Beta2Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerPdbSelectorMatchExpressionsToTerraform(struct?: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerPdbSelectorMatchExpressions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerPdbSelectorMatchExpressionsToHclTerraform(struct?: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerPdbSelectorMatchExpressions | cdktf.IResolvable): any {
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
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
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

export class DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerPdbSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerPdbSelectorMatchExpressions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerPdbSelectorMatchExpressions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._operator = undefined;
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
      this._operator = value.operator;
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

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
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

export class DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerPdbSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerPdbSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerPdbSelectorMatchExpressionsOutputReference {
    return new DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerPdbSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerPdbSelector {
  /**
  * matchExpressions is a list of label selector requirements. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/repo_manager_pulpproject_org_pulp_v1beta2_manifest#match_expressions DataK8SRepoManagerPulpprojectOrgPulpV1Beta2Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerPdbSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/repo_manager_pulpproject_org_pulp_v1beta2_manifest#match_labels DataK8SRepoManagerPulpprojectOrgPulpV1Beta2Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerPdbSelectorToTerraform(struct?: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerPdbSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerPdbSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerPdbSelectorToHclTerraform(struct?: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerPdbSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerPdbSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerPdbSelectorMatchExpressionsList",
    },
    match_labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.matchLabels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerPdbSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerPdbSelector | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchExpressions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchExpressions = this._matchExpressions?.internalValue;
    }
    if (this._matchLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchLabels = this._matchLabels;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerPdbSelector | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchExpressions.internalValue = undefined;
      this._matchLabels = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matchExpressions.internalValue = value.matchExpressions;
      this._matchLabels = value.matchLabels;
    }
  }

  // match_expressions - computed: false, optional: true, required: false
  private _matchExpressions = new DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerPdbSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerPdbSelectorMatchExpressions[] | cdktf.IResolvable) {
    this._matchExpressions.internalValue = value;
  }
  public resetMatchExpressions() {
    this._matchExpressions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchExpressionsInput() {
    return this._matchExpressions.internalValue;
  }

  // match_labels - computed: false, optional: true, required: false
  private _matchLabels?: { [key: string]: string }; 
  public get matchLabels() {
    return this.getStringMapAttribute('match_labels');
  }
  public set matchLabels(value: { [key: string]: string }) {
    this._matchLabels = value;
  }
  public resetMatchLabels() {
    this._matchLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchLabelsInput() {
    return this._matchLabels;
  }
}
export interface DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerPdb {
  /**
  * An eviction is allowed if at most 'maxUnavailable' pods selected by 'selector' are unavailable after the eviction, i.e. even in absence of the evicted pod. For example, one can prevent all voluntary evictions by specifying 0. This is a mutually exclusive setting with 'minAvailable'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/repo_manager_pulpproject_org_pulp_v1beta2_manifest#max_unavailable DataK8SRepoManagerPulpprojectOrgPulpV1Beta2Manifest#max_unavailable}
  */
  readonly maxUnavailable?: string;
  /**
  * An eviction is allowed if at least 'minAvailable' pods selected by 'selector' will still be available after the eviction, i.e. even in the absence of the evicted pod. So for example you can prevent all voluntary evictions by specifying '100%'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/repo_manager_pulpproject_org_pulp_v1beta2_manifest#min_available DataK8SRepoManagerPulpprojectOrgPulpV1Beta2Manifest#min_available}
  */
  readonly minAvailable?: string;
  /**
  * Label query over pods whose evictions are managed by the disruption budget. A null selector will match no pods, while an empty ({}) selector will select all pods within the namespace.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/repo_manager_pulpproject_org_pulp_v1beta2_manifest#selector DataK8SRepoManagerPulpprojectOrgPulpV1Beta2Manifest#selector}
  */
  readonly selector?: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerPdbSelector;
  /**
  * UnhealthyPodEvictionPolicy defines the criteria for when unhealthy pods should be considered for eviction. Current implementation considers healthy pods, as pods that have status.conditions item with type='Ready',status='True'. Valid policies are IfHealthyBudget and AlwaysAllow. If no policy is specified, the default behavior will be used, which corresponds to the IfHealthyBudget policy. IfHealthyBudget policy means that running pods (status.phase='Running'), but not yet healthy can be evicted only if the guarded application is not disrupted (status.currentHealthy is at least equal to status.desiredHealthy). Healthy pods will be subject to the PDB for eviction. AlwaysAllow policy means that all running pods (status.phase='Running'), but not yet healthy are considered disrupted and can be evicted regardless of whether the criteria in a PDB is met. This means perspective running pods of a disrupted application might not get a chance to become healthy. Healthy pods will be subject to the PDB for eviction. Additional policies may be added in the future. Clients making eviction decisions should disallow eviction of unhealthy pods if they encounter an unrecognized policy in this field. This field is beta-level. The eviction API uses this field when the feature gate PDBUnhealthyPodEvictionPolicy is enabled (enabled by default).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/repo_manager_pulpproject_org_pulp_v1beta2_manifest#unhealthy_pod_eviction_policy DataK8SRepoManagerPulpprojectOrgPulpV1Beta2Manifest#unhealthy_pod_eviction_policy}
  */
  readonly unhealthyPodEvictionPolicy?: string;
}

export function dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerPdbToTerraform(struct?: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerPdb | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_unavailable: cdktf.stringToTerraform(struct!.maxUnavailable),
    min_available: cdktf.stringToTerraform(struct!.minAvailable),
    selector: dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerPdbSelectorToTerraform(struct!.selector),
    unhealthy_pod_eviction_policy: cdktf.stringToTerraform(struct!.unhealthyPodEvictionPolicy),
  }
}


export function dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerPdbToHclTerraform(struct?: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerPdb | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_unavailable: {
      value: cdktf.stringToHclTerraform(struct!.maxUnavailable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    min_available: {
      value: cdktf.stringToHclTerraform(struct!.minAvailable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    selector: {
      value: dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerPdbSelectorToHclTerraform(struct!.selector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerPdbSelector",
    },
    unhealthy_pod_eviction_policy: {
      value: cdktf.stringToHclTerraform(struct!.unhealthyPodEvictionPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerPdbOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerPdb | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxUnavailable !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxUnavailable = this._maxUnavailable;
    }
    if (this._minAvailable !== undefined) {
      hasAnyValues = true;
      internalValueResult.minAvailable = this._minAvailable;
    }
    if (this._selector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.selector = this._selector?.internalValue;
    }
    if (this._unhealthyPodEvictionPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.unhealthyPodEvictionPolicy = this._unhealthyPodEvictionPolicy;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerPdb | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maxUnavailable = undefined;
      this._minAvailable = undefined;
      this._selector.internalValue = undefined;
      this._unhealthyPodEvictionPolicy = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maxUnavailable = value.maxUnavailable;
      this._minAvailable = value.minAvailable;
      this._selector.internalValue = value.selector;
      this._unhealthyPodEvictionPolicy = value.unhealthyPodEvictionPolicy;
    }
  }

  // max_unavailable - computed: false, optional: true, required: false
  private _maxUnavailable?: string; 
  public get maxUnavailable() {
    return this.getStringAttribute('max_unavailable');
  }
  public set maxUnavailable(value: string) {
    this._maxUnavailable = value;
  }
  public resetMaxUnavailable() {
    this._maxUnavailable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxUnavailableInput() {
    return this._maxUnavailable;
  }

  // min_available - computed: false, optional: true, required: false
  private _minAvailable?: string; 
  public get minAvailable() {
    return this.getStringAttribute('min_available');
  }
  public set minAvailable(value: string) {
    this._minAvailable = value;
  }
  public resetMinAvailable() {
    this._minAvailable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minAvailableInput() {
    return this._minAvailable;
  }

  // selector - computed: false, optional: true, required: false
  private _selector = new DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerPdbSelectorOutputReference(this, "selector");
  public get selector() {
    return this._selector;
  }
  public putSelector(value: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerPdbSelector) {
    this._selector.internalValue = value;
  }
  public resetSelector() {
    this._selector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorInput() {
    return this._selector.internalValue;
  }

  // unhealthy_pod_eviction_policy - computed: false, optional: true, required: false
  private _unhealthyPodEvictionPolicy?: string; 
  public get unhealthyPodEvictionPolicy() {
    return this.getStringAttribute('unhealthy_pod_eviction_policy');
  }
  public set unhealthyPodEvictionPolicy(value: string) {
    this._unhealthyPodEvictionPolicy = value;
  }
  public resetUnhealthyPodEvictionPolicy() {
    this._unhealthyPodEvictionPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unhealthyPodEvictionPolicyInput() {
    return this._unhealthyPodEvictionPolicy;
  }
}
export interface DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerReadinessProbeExec {
  /**
  * Command is the command line to execute inside the container, the working directory for the command is root ('/') in the container's filesystem. The command is simply exec'd, it is not run inside a shell, so traditional shell instructions ('|', etc) won't work. To use a shell, you need to explicitly call out to that shell. Exit status of 0 is treated as live/healthy and non-zero is unhealthy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/repo_manager_pulpproject_org_pulp_v1beta2_manifest#command DataK8SRepoManagerPulpprojectOrgPulpV1Beta2Manifest#command}
  */
  readonly command?: string[];
}

export function dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerReadinessProbeExecToTerraform(struct?: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerReadinessProbeExec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    command: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.command),
  }
}


export function dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerReadinessProbeExecToHclTerraform(struct?: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerReadinessProbeExec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    command: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.command),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerReadinessProbeExecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerReadinessProbeExec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._command !== undefined) {
      hasAnyValues = true;
      internalValueResult.command = this._command;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerReadinessProbeExec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._command = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._command = value.command;
    }
  }

  // command - computed: false, optional: true, required: false
  private _command?: string[]; 
  public get command() {
    return this.getListAttribute('command');
  }
  public set command(value: string[]) {
    this._command = value;
  }
  public resetCommand() {
    this._command = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commandInput() {
    return this._command;
  }
}
export interface DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerReadinessProbeGrpc {
  /**
  * Port number of the gRPC service. Number must be in the range 1 to 65535.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/repo_manager_pulpproject_org_pulp_v1beta2_manifest#port DataK8SRepoManagerPulpprojectOrgPulpV1Beta2Manifest#port}
  */
  readonly port: number;
  /**
  * Service is the name of the service to place in the gRPC HealthCheckRequest (see https://github.com/grpc/grpc/blob/master/doc/health-checking.md). If this is not specified, the default behavior is defined by gRPC.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/repo_manager_pulpproject_org_pulp_v1beta2_manifest#service DataK8SRepoManagerPulpprojectOrgPulpV1Beta2Manifest#service}
  */
  readonly service?: string;
}

export function dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerReadinessProbeGrpcToTerraform(struct?: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerReadinessProbeGrpc | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    port: cdktf.numberToTerraform(struct!.port),
    service: cdktf.stringToTerraform(struct!.service),
  }
}


export function dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerReadinessProbeGrpcToHclTerraform(struct?: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerReadinessProbeGrpc | cdktf.IResolvable): any {
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
    service: {
      value: cdktf.stringToHclTerraform(struct!.service),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerReadinessProbeGrpcOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerReadinessProbeGrpc | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._service !== undefined) {
      hasAnyValues = true;
      internalValueResult.service = this._service;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerReadinessProbeGrpc | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._port = undefined;
      this._service = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._port = value.port;
      this._service = value.service;
    }
  }

  // port - computed: false, optional: false, required: true
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // service - computed: false, optional: true, required: false
  private _service?: string; 
  public get service() {
    return this.getStringAttribute('service');
  }
  public set service(value: string) {
    this._service = value;
  }
  public resetService() {
    this._service = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceInput() {
    return this._service;
  }
}
export interface DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerReadinessProbeHttpGetHttpHeaders {
  /**
  * The header field name. This will be canonicalized upon output, so case-variant names will be understood as the same header.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/repo_manager_pulpproject_org_pulp_v1beta2_manifest#name DataK8SRepoManagerPulpprojectOrgPulpV1Beta2Manifest#name}
  */
  readonly name: string;
  /**
  * The header field value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/repo_manager_pulpproject_org_pulp_v1beta2_manifest#value DataK8SRepoManagerPulpprojectOrgPulpV1Beta2Manifest#value}
  */
  readonly value: string;
}

export function dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerReadinessProbeHttpGetHttpHeadersToTerraform(struct?: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerReadinessProbeHttpGetHttpHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerReadinessProbeHttpGetHttpHeadersToHclTerraform(struct?: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerReadinessProbeHttpGetHttpHeaders | cdktf.IResolvable): any {
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

export class DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerReadinessProbeHttpGetHttpHeadersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerReadinessProbeHttpGetHttpHeaders | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerReadinessProbeHttpGetHttpHeaders | cdktf.IResolvable | undefined) {
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

export class DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerReadinessProbeHttpGetHttpHeadersList extends cdktf.ComplexList {
  public internalValue? : DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerReadinessProbeHttpGetHttpHeaders[] | cdktf.IResolvable

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
  public get(index: number): DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerReadinessProbeHttpGetHttpHeadersOutputReference {
    return new DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerReadinessProbeHttpGetHttpHeadersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerReadinessProbeHttpGet {
  /**
  * Host name to connect to, defaults to the pod IP. You probably want to set 'Host' in httpHeaders instead.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/repo_manager_pulpproject_org_pulp_v1beta2_manifest#host DataK8SRepoManagerPulpprojectOrgPulpV1Beta2Manifest#host}
  */
  readonly host?: string;
  /**
  * Custom headers to set in the request. HTTP allows repeated headers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/repo_manager_pulpproject_org_pulp_v1beta2_manifest#http_headers DataK8SRepoManagerPulpprojectOrgPulpV1Beta2Manifest#http_headers}
  */
  readonly httpHeaders?: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerReadinessProbeHttpGetHttpHeaders[] | cdktf.IResolvable;
  /**
  * Path to access on the HTTP server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/repo_manager_pulpproject_org_pulp_v1beta2_manifest#path DataK8SRepoManagerPulpprojectOrgPulpV1Beta2Manifest#path}
  */
  readonly path?: string;
  /**
  * Name or number of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/repo_manager_pulpproject_org_pulp_v1beta2_manifest#port DataK8SRepoManagerPulpprojectOrgPulpV1Beta2Manifest#port}
  */
  readonly port: string;
  /**
  * Scheme to use for connecting to the host. Defaults to HTTP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/repo_manager_pulpproject_org_pulp_v1beta2_manifest#scheme DataK8SRepoManagerPulpprojectOrgPulpV1Beta2Manifest#scheme}
  */
  readonly scheme?: string;
}

export function dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerReadinessProbeHttpGetToTerraform(struct?: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerReadinessProbeHttpGet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host: cdktf.stringToTerraform(struct!.host),
    http_headers: cdktf.listMapper(dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerReadinessProbeHttpGetHttpHeadersToTerraform, false)(struct!.httpHeaders),
    path: cdktf.stringToTerraform(struct!.path),
    port: cdktf.stringToTerraform(struct!.port),
    scheme: cdktf.stringToTerraform(struct!.scheme),
  }
}


export function dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerReadinessProbeHttpGetToHclTerraform(struct?: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerReadinessProbeHttpGet | cdktf.IResolvable): any {
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
    http_headers: {
      value: cdktf.listMapperHcl(dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerReadinessProbeHttpGetHttpHeadersToHclTerraform, false)(struct!.httpHeaders),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerReadinessProbeHttpGetHttpHeadersList",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.stringToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scheme: {
      value: cdktf.stringToHclTerraform(struct!.scheme),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerReadinessProbeHttpGetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerReadinessProbeHttpGet | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._httpHeaders?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpHeaders = this._httpHeaders?.internalValue;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._scheme !== undefined) {
      hasAnyValues = true;
      internalValueResult.scheme = this._scheme;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerReadinessProbeHttpGet | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._host = undefined;
      this._httpHeaders.internalValue = undefined;
      this._path = undefined;
      this._port = undefined;
      this._scheme = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._host = value.host;
      this._httpHeaders.internalValue = value.httpHeaders;
      this._path = value.path;
      this._port = value.port;
      this._scheme = value.scheme;
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

  // http_headers - computed: false, optional: true, required: false
  private _httpHeaders = new DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerReadinessProbeHttpGetHttpHeadersList(this, "http_headers", false);
  public get httpHeaders() {
    return this._httpHeaders;
  }
  public putHttpHeaders(value: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerReadinessProbeHttpGetHttpHeaders[] | cdktf.IResolvable) {
    this._httpHeaders.internalValue = value;
  }
  public resetHttpHeaders() {
    this._httpHeaders.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpHeadersInput() {
    return this._httpHeaders.internalValue;
  }

  // path - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // port - computed: false, optional: false, required: true
  private _port?: string; 
  public get port() {
    return this.getStringAttribute('port');
  }
  public set port(value: string) {
    this._port = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // scheme - computed: false, optional: true, required: false
  private _scheme?: string; 
  public get scheme() {
    return this.getStringAttribute('scheme');
  }
  public set scheme(value: string) {
    this._scheme = value;
  }
  public resetScheme() {
    this._scheme = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemeInput() {
    return this._scheme;
  }
}
export interface DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerReadinessProbeTcpSocket {
  /**
  * Optional: Host name to connect to, defaults to the pod IP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/repo_manager_pulpproject_org_pulp_v1beta2_manifest#host DataK8SRepoManagerPulpprojectOrgPulpV1Beta2Manifest#host}
  */
  readonly host?: string;
  /**
  * Number or name of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/repo_manager_pulpproject_org_pulp_v1beta2_manifest#port DataK8SRepoManagerPulpprojectOrgPulpV1Beta2Manifest#port}
  */
  readonly port: string;
}

export function dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerReadinessProbeTcpSocketToTerraform(struct?: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerReadinessProbeTcpSocket | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host: cdktf.stringToTerraform(struct!.host),
    port: cdktf.stringToTerraform(struct!.port),
  }
}


export function dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerReadinessProbeTcpSocketToHclTerraform(struct?: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerReadinessProbeTcpSocket | cdktf.IResolvable): any {
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
    port: {
      value: cdktf.stringToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerReadinessProbeTcpSocketOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerReadinessProbeTcpSocket | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerReadinessProbeTcpSocket | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._host = undefined;
      this._port = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._host = value.host;
      this._port = value.port;
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

  // port - computed: false, optional: false, required: true
  private _port?: string; 
  public get port() {
    return this.getStringAttribute('port');
  }
  public set port(value: string) {
    this._port = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }
}
export interface DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerReadinessProbe {
  /**
  * Exec specifies the action to take.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/repo_manager_pulpproject_org_pulp_v1beta2_manifest#exec DataK8SRepoManagerPulpprojectOrgPulpV1Beta2Manifest#exec}
  */
  readonly exec?: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerReadinessProbeExec;
  /**
  * Minimum consecutive failures for the probe to be considered failed after having succeeded. Defaults to 3. Minimum value is 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/repo_manager_pulpproject_org_pulp_v1beta2_manifest#failure_threshold DataK8SRepoManagerPulpprojectOrgPulpV1Beta2Manifest#failure_threshold}
  */
  readonly failureThreshold?: number;
  /**
  * GRPC specifies an action involving a GRPC port.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/repo_manager_pulpproject_org_pulp_v1beta2_manifest#grpc DataK8SRepoManagerPulpprojectOrgPulpV1Beta2Manifest#grpc}
  */
  readonly grpc?: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerReadinessProbeGrpc;
  /**
  * HTTPGet specifies the http request to perform.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/repo_manager_pulpproject_org_pulp_v1beta2_manifest#http_get DataK8SRepoManagerPulpprojectOrgPulpV1Beta2Manifest#http_get}
  */
  readonly httpGet?: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerReadinessProbeHttpGet;
  /**
  * Number of seconds after the container has started before liveness probes are initiated. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/repo_manager_pulpproject_org_pulp_v1beta2_manifest#initial_delay_seconds DataK8SRepoManagerPulpprojectOrgPulpV1Beta2Manifest#initial_delay_seconds}
  */
  readonly initialDelaySeconds?: number;
  /**
  * How often (in seconds) to perform the probe. Default to 10 seconds. Minimum value is 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/repo_manager_pulpproject_org_pulp_v1beta2_manifest#period_seconds DataK8SRepoManagerPulpprojectOrgPulpV1Beta2Manifest#period_seconds}
  */
  readonly periodSeconds?: number;
  /**
  * Minimum consecutive successes for the probe to be considered successful after having failed. Defaults to 1. Must be 1 for liveness and startup. Minimum value is 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/repo_manager_pulpproject_org_pulp_v1beta2_manifest#success_threshold DataK8SRepoManagerPulpprojectOrgPulpV1Beta2Manifest#success_threshold}
  */
  readonly successThreshold?: number;
  /**
  * TCPSocket specifies an action involving a TCP port.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/repo_manager_pulpproject_org_pulp_v1beta2_manifest#tcp_socket DataK8SRepoManagerPulpprojectOrgPulpV1Beta2Manifest#tcp_socket}
  */
  readonly tcpSocket?: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerReadinessProbeTcpSocket;
  /**
  * Optional duration in seconds the pod needs to terminate gracefully upon probe failure. The grace period is the duration in seconds after the processes running in the pod are sent a termination signal and the time when the processes are forcibly halted with a kill signal. Set this value longer than the expected cleanup time for your process. If this value is nil, the pod's terminationGracePeriodSeconds will be used. Otherwise, this value overrides the value provided by the pod spec. Value must be non-negative integer. The value zero indicates stop immediately via the kill signal (no opportunity to shut down). This is a beta field and requires enabling ProbeTerminationGracePeriod feature gate. Minimum value is 1. spec.terminationGracePeriodSeconds is used if unset.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/repo_manager_pulpproject_org_pulp_v1beta2_manifest#termination_grace_period_seconds DataK8SRepoManagerPulpprojectOrgPulpV1Beta2Manifest#termination_grace_period_seconds}
  */
  readonly terminationGracePeriodSeconds?: number;
  /**
  * Number of seconds after which the probe times out. Defaults to 1 second. Minimum value is 1. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/repo_manager_pulpproject_org_pulp_v1beta2_manifest#timeout_seconds DataK8SRepoManagerPulpprojectOrgPulpV1Beta2Manifest#timeout_seconds}
  */
  readonly timeoutSeconds?: number;
}

export function dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerReadinessProbeToTerraform(struct?: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerReadinessProbe | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exec: dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerReadinessProbeExecToTerraform(struct!.exec),
    failure_threshold: cdktf.numberToTerraform(struct!.failureThreshold),
    grpc: dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerReadinessProbeGrpcToTerraform(struct!.grpc),
    http_get: dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerReadinessProbeHttpGetToTerraform(struct!.httpGet),
    initial_delay_seconds: cdktf.numberToTerraform(struct!.initialDelaySeconds),
    period_seconds: cdktf.numberToTerraform(struct!.periodSeconds),
    success_threshold: cdktf.numberToTerraform(struct!.successThreshold),
    tcp_socket: dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerReadinessProbeTcpSocketToTerraform(struct!.tcpSocket),
    termination_grace_period_seconds: cdktf.numberToTerraform(struct!.terminationGracePeriodSeconds),
    timeout_seconds: cdktf.numberToTerraform(struct!.timeoutSeconds),
  }
}


export function dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerReadinessProbeToHclTerraform(struct?: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerReadinessProbe | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exec: {
      value: dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerReadinessProbeExecToHclTerraform(struct!.exec),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerReadinessProbeExec",
    },
    failure_threshold: {
      value: cdktf.numberToHclTerraform(struct!.failureThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    grpc: {
      value: dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerReadinessProbeGrpcToHclTerraform(struct!.grpc),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerReadinessProbeGrpc",
    },
    http_get: {
      value: dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerReadinessProbeHttpGetToHclTerraform(struct!.httpGet),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerReadinessProbeHttpGet",
    },
    initial_delay_seconds: {
      value: cdktf.numberToHclTerraform(struct!.initialDelaySeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    period_seconds: {
      value: cdktf.numberToHclTerraform(struct!.periodSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    success_threshold: {
      value: cdktf.numberToHclTerraform(struct!.successThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_socket: {
      value: dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerReadinessProbeTcpSocketToHclTerraform(struct!.tcpSocket),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerReadinessProbeTcpSocket",
    },
    termination_grace_period_seconds: {
      value: cdktf.numberToHclTerraform(struct!.terminationGracePeriodSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    timeout_seconds: {
      value: cdktf.numberToHclTerraform(struct!.timeoutSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerReadinessProbeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerReadinessProbe | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exec?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.exec = this._exec?.internalValue;
    }
    if (this._failureThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.failureThreshold = this._failureThreshold;
    }
    if (this._grpc?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.grpc = this._grpc?.internalValue;
    }
    if (this._httpGet?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpGet = this._httpGet?.internalValue;
    }
    if (this._initialDelaySeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.initialDelaySeconds = this._initialDelaySeconds;
    }
    if (this._periodSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.periodSeconds = this._periodSeconds;
    }
    if (this._successThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.successThreshold = this._successThreshold;
    }
    if (this._tcpSocket?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpSocket = this._tcpSocket?.internalValue;
    }
    if (this._terminationGracePeriodSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.terminationGracePeriodSeconds = this._terminationGracePeriodSeconds;
    }
    if (this._timeoutSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeoutSeconds = this._timeoutSeconds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerReadinessProbe | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._exec.internalValue = undefined;
      this._failureThreshold = undefined;
      this._grpc.internalValue = undefined;
      this._httpGet.internalValue = undefined;
      this._initialDelaySeconds = undefined;
      this._periodSeconds = undefined;
      this._successThreshold = undefined;
      this._tcpSocket.internalValue = undefined;
      this._terminationGracePeriodSeconds = undefined;
      this._timeoutSeconds = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._exec.internalValue = value.exec;
      this._failureThreshold = value.failureThreshold;
      this._grpc.internalValue = value.grpc;
      this._httpGet.internalValue = value.httpGet;
      this._initialDelaySeconds = value.initialDelaySeconds;
      this._periodSeconds = value.periodSeconds;
      this._successThreshold = value.successThreshold;
      this._tcpSocket.internalValue = value.tcpSocket;
      this._terminationGracePeriodSeconds = value.terminationGracePeriodSeconds;
      this._timeoutSeconds = value.timeoutSeconds;
    }
  }

  // exec - computed: false, optional: true, required: false
  private _exec = new DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerReadinessProbeExecOutputReference(this, "exec");
  public get exec() {
    return this._exec;
  }
  public putExec(value: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerReadinessProbeExec) {
    this._exec.internalValue = value;
  }
  public resetExec() {
    this._exec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get execInput() {
    return this._exec.internalValue;
  }

  // failure_threshold - computed: false, optional: true, required: false
  private _failureThreshold?: number; 
  public get failureThreshold() {
    return this.getNumberAttribute('failure_threshold');
  }
  public set failureThreshold(value: number) {
    this._failureThreshold = value;
  }
  public resetFailureThreshold() {
    this._failureThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failureThresholdInput() {
    return this._failureThreshold;
  }

  // grpc - computed: false, optional: true, required: false
  private _grpc = new DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerReadinessProbeGrpcOutputReference(this, "grpc");
  public get grpc() {
    return this._grpc;
  }
  public putGrpc(value: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerReadinessProbeGrpc) {
    this._grpc.internalValue = value;
  }
  public resetGrpc() {
    this._grpc.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get grpcInput() {
    return this._grpc.internalValue;
  }

  // http_get - computed: false, optional: true, required: false
  private _httpGet = new DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerReadinessProbeHttpGetOutputReference(this, "http_get");
  public get httpGet() {
    return this._httpGet;
  }
  public putHttpGet(value: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerReadinessProbeHttpGet) {
    this._httpGet.internalValue = value;
  }
  public resetHttpGet() {
    this._httpGet.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpGetInput() {
    return this._httpGet.internalValue;
  }

  // initial_delay_seconds - computed: false, optional: true, required: false
  private _initialDelaySeconds?: number; 
  public get initialDelaySeconds() {
    return this.getNumberAttribute('initial_delay_seconds');
  }
  public set initialDelaySeconds(value: number) {
    this._initialDelaySeconds = value;
  }
  public resetInitialDelaySeconds() {
    this._initialDelaySeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initialDelaySecondsInput() {
    return this._initialDelaySeconds;
  }

  // period_seconds - computed: false, optional: true, required: false
  private _periodSeconds?: number; 
  public get periodSeconds() {
    return this.getNumberAttribute('period_seconds');
  }
  public set periodSeconds(value: number) {
    this._periodSeconds = value;
  }
  public resetPeriodSeconds() {
    this._periodSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get periodSecondsInput() {
    return this._periodSeconds;
  }

  // success_threshold - computed: false, optional: true, required: false
  private _successThreshold?: number; 
  public get successThreshold() {
    return this.getNumberAttribute('success_threshold');
  }
  public set successThreshold(value: number) {
    this._successThreshold = value;
  }
  public resetSuccessThreshold() {
    this._successThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get successThresholdInput() {
    return this._successThreshold;
  }

  // tcp_socket - computed: false, optional: true, required: false
  private _tcpSocket = new DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerReadinessProbeTcpSocketOutputReference(this, "tcp_socket");
  public get tcpSocket() {
    return this._tcpSocket;
  }
  public putTcpSocket(value: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerReadinessProbeTcpSocket) {
    this._tcpSocket.internalValue = value;
  }
  public resetTcpSocket() {
    this._tcpSocket.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpSocketInput() {
    return this._tcpSocket.internalValue;
  }

  // termination_grace_period_seconds - computed: false, optional: true, required: false
  private _terminationGracePeriodSeconds?: number; 
  public get terminationGracePeriodSeconds() {
    return this.getNumberAttribute('termination_grace_period_seconds');
  }
  public set terminationGracePeriodSeconds(value: number) {
    this._terminationGracePeriodSeconds = value;
  }
  public resetTerminationGracePeriodSeconds() {
    this._terminationGracePeriodSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get terminationGracePeriodSecondsInput() {
    return this._terminationGracePeriodSeconds;
  }

  // timeout_seconds - computed: false, optional: true, required: false
  private _timeoutSeconds?: number; 
  public get timeoutSeconds() {
    return this.getNumberAttribute('timeout_seconds');
  }
  public set timeoutSeconds(value: number) {
    this._timeoutSeconds = value;
  }
  public resetTimeoutSeconds() {
    this._timeoutSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutSecondsInput() {
    return this._timeoutSeconds;
  }
}
export interface DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerResourceRequirementsClaims {
  /**
  * Name must match the name of one entry in pod.spec.resourceClaims of the Pod where this field is used. It makes that resource available inside a container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/repo_manager_pulpproject_org_pulp_v1beta2_manifest#name DataK8SRepoManagerPulpprojectOrgPulpV1Beta2Manifest#name}
  */
  readonly name: string;
}

export function dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerResourceRequirementsClaimsToTerraform(struct?: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerResourceRequirementsClaims | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerResourceRequirementsClaimsToHclTerraform(struct?: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerResourceRequirementsClaims | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerResourceRequirementsClaimsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerResourceRequirementsClaims | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerResourceRequirementsClaims | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
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
}

export class DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerResourceRequirementsClaimsList extends cdktf.ComplexList {
  public internalValue? : DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerResourceRequirementsClaims[] | cdktf.IResolvable

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
  public get(index: number): DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerResourceRequirementsClaimsOutputReference {
    return new DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerResourceRequirementsClaimsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerResourceRequirements {
  /**
  * Claims lists the names of resources, defined in spec.resourceClaims, that are used by this container. This is an alpha field and requires enabling the DynamicResourceAllocation feature gate. This field is immutable. It can only be set for containers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/repo_manager_pulpproject_org_pulp_v1beta2_manifest#claims DataK8SRepoManagerPulpprojectOrgPulpV1Beta2Manifest#claims}
  */
  readonly claims?: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerResourceRequirementsClaims[] | cdktf.IResolvable;
  /**
  * Limits describes the maximum amount of compute resources allowed. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/repo_manager_pulpproject_org_pulp_v1beta2_manifest#limits DataK8SRepoManagerPulpprojectOrgPulpV1Beta2Manifest#limits}
  */
  readonly limits?: { [key: string]: string };
  /**
  * Requests describes the minimum amount of compute resources required. If Requests is omitted for a container, it defaults to Limits if that is explicitly specified, otherwise to an implementation-defined value. Requests cannot exceed Limits. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/repo_manager_pulpproject_org_pulp_v1beta2_manifest#requests DataK8SRepoManagerPulpprojectOrgPulpV1Beta2Manifest#requests}
  */
  readonly requests?: { [key: string]: string };
}

export function dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerResourceRequirementsToTerraform(struct?: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerResourceRequirements | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    claims: cdktf.listMapper(dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerResourceRequirementsClaimsToTerraform, false)(struct!.claims),
    limits: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.limits),
    requests: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.requests),
  }
}


export function dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerResourceRequirementsToHclTerraform(struct?: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerResourceRequirements | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    claims: {
      value: cdktf.listMapperHcl(dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerResourceRequirementsClaimsToHclTerraform, false)(struct!.claims),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerResourceRequirementsClaimsList",
    },
    limits: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.limits),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    requests: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.requests),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerResourceRequirementsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerResourceRequirements | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._claims?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.claims = this._claims?.internalValue;
    }
    if (this._limits !== undefined) {
      hasAnyValues = true;
      internalValueResult.limits = this._limits;
    }
    if (this._requests !== undefined) {
      hasAnyValues = true;
      internalValueResult.requests = this._requests;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerResourceRequirements | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._claims.internalValue = undefined;
      this._limits = undefined;
      this._requests = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._claims.internalValue = value.claims;
      this._limits = value.limits;
      this._requests = value.requests;
    }
  }

  // claims - computed: false, optional: true, required: false
  private _claims = new DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerResourceRequirementsClaimsList(this, "claims", false);
  public get claims() {
    return this._claims;
  }
  public putClaims(value: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerResourceRequirementsClaims[] | cdktf.IResolvable) {
    this._claims.internalValue = value;
  }
  public resetClaims() {
    this._claims.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get claimsInput() {
    return this._claims.internalValue;
  }

  // limits - computed: false, optional: true, required: false
  private _limits?: { [key: string]: string }; 
  public get limits() {
    return this.getStringMapAttribute('limits');
  }
  public set limits(value: { [key: string]: string }) {
    this._limits = value;
  }
  public resetLimits() {
    this._limits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitsInput() {
    return this._limits;
  }

  // requests - computed: false, optional: true, required: false
  private _requests?: { [key: string]: string }; 
  public get requests() {
    return this.getStringMapAttribute('requests');
  }
  public set requests(value: { [key: string]: string }) {
    this._requests = value;
  }
  public resetRequests() {
    this._requests = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestsInput() {
    return this._requests;
  }
}
export interface DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerStrategyRollingUpdate {
  /**
  * The maximum number of pods that can be scheduled above the desired number of pods. Value can be an absolute number (ex: 5) or a percentage of desired pods (ex: 10%). This can not be 0 if MaxUnavailable is 0. Absolute number is calculated from percentage by rounding up. Defaults to 25%. Example: when this is set to 30%, the new ReplicaSet can be scaled up immediately when the rolling update starts, such that the total number of old and new pods do not exceed 130% of desired pods. Once old pods have been killed, new ReplicaSet can be scaled up further, ensuring that total number of pods running at any time during the update is at most 130% of desired pods.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/repo_manager_pulpproject_org_pulp_v1beta2_manifest#max_surge DataK8SRepoManagerPulpprojectOrgPulpV1Beta2Manifest#max_surge}
  */
  readonly maxSurge?: string;
  /**
  * The maximum number of pods that can be unavailable during the update. Value can be an absolute number (ex: 5) or a percentage of desired pods (ex: 10%). Absolute number is calculated from percentage by rounding down. This can not be 0 if MaxSurge is 0. Defaults to 25%. Example: when this is set to 30%, the old ReplicaSet can be scaled down to 70% of desired pods immediately when the rolling update starts. Once new pods are ready, old ReplicaSet can be scaled down further, followed by scaling up the new ReplicaSet, ensuring that the total number of pods available at all times during the update is at least 70% of desired pods.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/repo_manager_pulpproject_org_pulp_v1beta2_manifest#max_unavailable DataK8SRepoManagerPulpprojectOrgPulpV1Beta2Manifest#max_unavailable}
  */
  readonly maxUnavailable?: string;
}

export function dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerStrategyRollingUpdateToTerraform(struct?: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerStrategyRollingUpdate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_surge: cdktf.stringToTerraform(struct!.maxSurge),
    max_unavailable: cdktf.stringToTerraform(struct!.maxUnavailable),
  }
}


export function dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerStrategyRollingUpdateToHclTerraform(struct?: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerStrategyRollingUpdate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_surge: {
      value: cdktf.stringToHclTerraform(struct!.maxSurge),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_unavailable: {
      value: cdktf.stringToHclTerraform(struct!.maxUnavailable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerStrategyRollingUpdateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerStrategyRollingUpdate | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxSurge !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxSurge = this._maxSurge;
    }
    if (this._maxUnavailable !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxUnavailable = this._maxUnavailable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerStrategyRollingUpdate | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maxSurge = undefined;
      this._maxUnavailable = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maxSurge = value.maxSurge;
      this._maxUnavailable = value.maxUnavailable;
    }
  }

  // max_surge - computed: false, optional: true, required: false
  private _maxSurge?: string; 
  public get maxSurge() {
    return this.getStringAttribute('max_surge');
  }
  public set maxSurge(value: string) {
    this._maxSurge = value;
  }
  public resetMaxSurge() {
    this._maxSurge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxSurgeInput() {
    return this._maxSurge;
  }

  // max_unavailable - computed: false, optional: true, required: false
  private _maxUnavailable?: string; 
  public get maxUnavailable() {
    return this.getStringAttribute('max_unavailable');
  }
  public set maxUnavailable(value: string) {
    this._maxUnavailable = value;
  }
  public resetMaxUnavailable() {
    this._maxUnavailable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxUnavailableInput() {
    return this._maxUnavailable;
  }
}
export interface DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerStrategy {
  /**
  * Rolling update config params. Present only if DeploymentStrategyType = RollingUpdate. --- TODO: Update this to follow our convention for oneOf, whatever we decide it to be.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/repo_manager_pulpproject_org_pulp_v1beta2_manifest#rolling_update DataK8SRepoManagerPulpprojectOrgPulpV1Beta2Manifest#rolling_update}
  */
  readonly rollingUpdate?: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerStrategyRollingUpdate;
  /**
  * Type of deployment. Can be 'Recreate' or 'RollingUpdate'. Default is RollingUpdate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/repo_manager_pulpproject_org_pulp_v1beta2_manifest#type DataK8SRepoManagerPulpprojectOrgPulpV1Beta2Manifest#type}
  */
  readonly type?: string;
}

export function dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerStrategyToTerraform(struct?: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerStrategy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    rolling_update: dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerStrategyRollingUpdateToTerraform(struct!.rollingUpdate),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerStrategyToHclTerraform(struct?: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerStrategy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    rolling_update: {
      value: dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerStrategyRollingUpdateToHclTerraform(struct!.rollingUpdate),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerStrategyRollingUpdate",
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

export class DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerStrategyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerStrategy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._rollingUpdate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rollingUpdate = this._rollingUpdate?.internalValue;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerStrategy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._rollingUpdate.internalValue = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._rollingUpdate.internalValue = value.rollingUpdate;
      this._type = value.type;
    }
  }

  // rolling_update - computed: false, optional: true, required: false
  private _rollingUpdate = new DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerStrategyRollingUpdateOutputReference(this, "rolling_update");
  public get rollingUpdate() {
    return this._rollingUpdate;
  }
  public putRollingUpdate(value: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerStrategyRollingUpdate) {
    this._rollingUpdate.internalValue = value;
  }
  public resetRollingUpdate() {
    this._rollingUpdate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rollingUpdateInput() {
    return this._rollingUpdate.internalValue;
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
export interface DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerTolerations {
  /**
  * Effect indicates the taint effect to match. Empty means match all taint effects. When specified, allowed values are NoSchedule, PreferNoSchedule and NoExecute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/repo_manager_pulpproject_org_pulp_v1beta2_manifest#effect DataK8SRepoManagerPulpprojectOrgPulpV1Beta2Manifest#effect}
  */
  readonly effect?: string;
  /**
  * Key is the taint key that the toleration applies to. Empty means match all taint keys. If the key is empty, operator must be Exists; this combination means to match all values and all keys.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/repo_manager_pulpproject_org_pulp_v1beta2_manifest#key DataK8SRepoManagerPulpprojectOrgPulpV1Beta2Manifest#key}
  */
  readonly key?: string;
  /**
  * Operator represents a key's relationship to the value. Valid operators are Exists and Equal. Defaults to Equal. Exists is equivalent to wildcard for value, so that a pod can tolerate all taints of a particular category.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/repo_manager_pulpproject_org_pulp_v1beta2_manifest#operator DataK8SRepoManagerPulpprojectOrgPulpV1Beta2Manifest#operator}
  */
  readonly operator?: string;
  /**
  * TolerationSeconds represents the period of time the toleration (which must be of effect NoExecute, otherwise this field is ignored) tolerates the taint. By default, it is not set, which means tolerate the taint forever (do not evict). Zero and negative values will be treated as 0 (evict immediately) by the system.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/repo_manager_pulpproject_org_pulp_v1beta2_manifest#toleration_seconds DataK8SRepoManagerPulpprojectOrgPulpV1Beta2Manifest#toleration_seconds}
  */
  readonly tolerationSeconds?: number;
  /**
  * Value is the taint value the toleration matches to. If the operator is Exists, the value should be empty, otherwise just a regular string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/repo_manager_pulpproject_org_pulp_v1beta2_manifest#value DataK8SRepoManagerPulpprojectOrgPulpV1Beta2Manifest#value}
  */
  readonly value?: string;
}

export function dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerTolerationsToTerraform(struct?: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerTolerations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    effect: cdktf.stringToTerraform(struct!.effect),
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    toleration_seconds: cdktf.numberToTerraform(struct!.tolerationSeconds),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerTolerationsToHclTerraform(struct?: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerTolerations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    effect: {
      value: cdktf.stringToHclTerraform(struct!.effect),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    toleration_seconds: {
      value: cdktf.numberToHclTerraform(struct!.tolerationSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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

export class DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerTolerationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerTolerations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._effect !== undefined) {
      hasAnyValues = true;
      internalValueResult.effect = this._effect;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._tolerationSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.tolerationSeconds = this._tolerationSeconds;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerTolerations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._effect = undefined;
      this._key = undefined;
      this._operator = undefined;
      this._tolerationSeconds = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._effect = value.effect;
      this._key = value.key;
      this._operator = value.operator;
      this._tolerationSeconds = value.tolerationSeconds;
      this._value = value.value;
    }
  }

  // effect - computed: false, optional: true, required: false
  private _effect?: string; 
  public get effect() {
    return this.getStringAttribute('effect');
  }
  public set effect(value: string) {
    this._effect = value;
  }
  public resetEffect() {
    this._effect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get effectInput() {
    return this._effect;
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
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

  // toleration_seconds - computed: false, optional: true, required: false
  private _tolerationSeconds?: number; 
  public get tolerationSeconds() {
    return this.getNumberAttribute('toleration_seconds');
  }
  public set tolerationSeconds(value: number) {
    this._tolerationSeconds = value;
  }
  public resetTolerationSeconds() {
    this._tolerationSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tolerationSecondsInput() {
    return this._tolerationSeconds;
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

export class DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerTolerationsList extends cdktf.ComplexList {
  public internalValue? : DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerTolerations[] | cdktf.IResolvable

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
  public get(index: number): DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerTolerationsOutputReference {
    return new DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerTolerationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerTopologySpreadConstraintsLabelSelectorMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/repo_manager_pulpproject_org_pulp_v1beta2_manifest#key DataK8SRepoManagerPulpprojectOrgPulpV1Beta2Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/repo_manager_pulpproject_org_pulp_v1beta2_manifest#operator DataK8SRepoManagerPulpprojectOrgPulpV1Beta2Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/repo_manager_pulpproject_org_pulp_v1beta2_manifest#values DataK8SRepoManagerPulpprojectOrgPulpV1Beta2Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerTopologySpreadConstraintsLabelSelectorMatchExpressionsToTerraform(struct?: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerTopologySpreadConstraintsLabelSelectorMatchExpressions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerTopologySpreadConstraintsLabelSelectorMatchExpressionsToHclTerraform(struct?: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerTopologySpreadConstraintsLabelSelectorMatchExpressions | cdktf.IResolvable): any {
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
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
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

export class DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerTopologySpreadConstraintsLabelSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerTopologySpreadConstraintsLabelSelectorMatchExpressions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerTopologySpreadConstraintsLabelSelectorMatchExpressions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._operator = undefined;
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
      this._operator = value.operator;
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

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
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

export class DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerTopologySpreadConstraintsLabelSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerTopologySpreadConstraintsLabelSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerTopologySpreadConstraintsLabelSelectorMatchExpressionsOutputReference {
    return new DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerTopologySpreadConstraintsLabelSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerTopologySpreadConstraintsLabelSelector {
  /**
  * matchExpressions is a list of label selector requirements. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/repo_manager_pulpproject_org_pulp_v1beta2_manifest#match_expressions DataK8SRepoManagerPulpprojectOrgPulpV1Beta2Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerTopologySpreadConstraintsLabelSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/repo_manager_pulpproject_org_pulp_v1beta2_manifest#match_labels DataK8SRepoManagerPulpprojectOrgPulpV1Beta2Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerTopologySpreadConstraintsLabelSelectorToTerraform(struct?: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerTopologySpreadConstraintsLabelSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerTopologySpreadConstraintsLabelSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerTopologySpreadConstraintsLabelSelectorToHclTerraform(struct?: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerTopologySpreadConstraintsLabelSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerTopologySpreadConstraintsLabelSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerTopologySpreadConstraintsLabelSelectorMatchExpressionsList",
    },
    match_labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.matchLabels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerTopologySpreadConstraintsLabelSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerTopologySpreadConstraintsLabelSelector | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchExpressions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchExpressions = this._matchExpressions?.internalValue;
    }
    if (this._matchLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchLabels = this._matchLabels;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerTopologySpreadConstraintsLabelSelector | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchExpressions.internalValue = undefined;
      this._matchLabels = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matchExpressions.internalValue = value.matchExpressions;
      this._matchLabels = value.matchLabels;
    }
  }

  // match_expressions - computed: false, optional: true, required: false
  private _matchExpressions = new DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerTopologySpreadConstraintsLabelSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerTopologySpreadConstraintsLabelSelectorMatchExpressions[] | cdktf.IResolvable) {
    this._matchExpressions.internalValue = value;
  }
  public resetMatchExpressions() {
    this._matchExpressions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchExpressionsInput() {
    return this._matchExpressions.internalValue;
  }

  // match_labels - computed: false, optional: true, required: false
  private _matchLabels?: { [key: string]: string }; 
  public get matchLabels() {
    return this.getStringMapAttribute('match_labels');
  }
  public set matchLabels(value: { [key: string]: string }) {
    this._matchLabels = value;
  }
  public resetMatchLabels() {
    this._matchLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchLabelsInput() {
    return this._matchLabels;
  }
}
export interface DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerTopologySpreadConstraints {
  /**
  * LabelSelector is used to find matching pods. Pods that match this label selector are counted to determine the number of pods in their corresponding topology domain.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/repo_manager_pulpproject_org_pulp_v1beta2_manifest#label_selector DataK8SRepoManagerPulpprojectOrgPulpV1Beta2Manifest#label_selector}
  */
  readonly labelSelector?: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerTopologySpreadConstraintsLabelSelector;
  /**
  * MatchLabelKeys is a set of pod label keys to select the pods over which spreading will be calculated. The keys are used to lookup values from the incoming pod labels, those key-value labels are ANDed with labelSelector to select the group of existing pods over which spreading will be calculated for the incoming pod. The same key is forbidden to exist in both MatchLabelKeys and LabelSelector. MatchLabelKeys cannot be set when LabelSelector isn't set. Keys that don't exist in the incoming pod labels will be ignored. A null or empty list means only match against labelSelector. This is a beta field and requires the MatchLabelKeysInPodTopologySpread feature gate to be enabled (enabled by default).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/repo_manager_pulpproject_org_pulp_v1beta2_manifest#match_label_keys DataK8SRepoManagerPulpprojectOrgPulpV1Beta2Manifest#match_label_keys}
  */
  readonly matchLabelKeys?: string[];
  /**
  * MaxSkew describes the degree to which pods may be unevenly distributed. When 'whenUnsatisfiable=DoNotSchedule', it is the maximum permitted difference between the number of matching pods in the target topology and the global minimum. The global minimum is the minimum number of matching pods in an eligible domain or zero if the number of eligible domains is less than MinDomains. For example, in a 3-zone cluster, MaxSkew is set to 1, and pods with the same labelSelector spread as 2/2/1: In this case, the global minimum is 1. | zone1 | zone2 | zone3 | | P P | P P | P | - if MaxSkew is 1, incoming pod can only be scheduled to zone3 to become 2/2/2; scheduling it onto zone1(zone2) would make the ActualSkew(3-1) on zone1(zone2) violate MaxSkew(1). - if MaxSkew is 2, incoming pod can be scheduled onto any zone. When 'whenUnsatisfiable=ScheduleAnyway', it is used to give higher precedence to topologies that satisfy it. It's a required field. Default value is 1 and 0 is not allowed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/repo_manager_pulpproject_org_pulp_v1beta2_manifest#max_skew DataK8SRepoManagerPulpprojectOrgPulpV1Beta2Manifest#max_skew}
  */
  readonly maxSkew: number;
  /**
  * MinDomains indicates a minimum number of eligible domains. When the number of eligible domains with matching topology keys is less than minDomains, Pod Topology Spread treats 'global minimum' as 0, and then the calculation of Skew is performed. And when the number of eligible domains with matching topology keys equals or greater than minDomains, this value has no effect on scheduling. As a result, when the number of eligible domains is less than minDomains, scheduler won't schedule more than maxSkew Pods to those domains. If value is nil, the constraint behaves as if MinDomains is equal to 1. Valid values are integers greater than 0. When value is not nil, WhenUnsatisfiable must be DoNotSchedule. For example, in a 3-zone cluster, MaxSkew is set to 2, MinDomains is set to 5 and pods with the same labelSelector spread as 2/2/2: | zone1 | zone2 | zone3 | | P P | P P | P P | The number of domains is less than 5(MinDomains), so 'global minimum' is treated as 0. In this situation, new pod with the same labelSelector cannot be scheduled, because computed skew will be 3(3 - 0) if new Pod is scheduled to any of the three zones, it will violate MaxSkew.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/repo_manager_pulpproject_org_pulp_v1beta2_manifest#min_domains DataK8SRepoManagerPulpprojectOrgPulpV1Beta2Manifest#min_domains}
  */
  readonly minDomains?: number;
  /**
  * NodeAffinityPolicy indicates how we will treat Pod's nodeAffinity/nodeSelector when calculating pod topology spread skew. Options are: - Honor: only nodes matching nodeAffinity/nodeSelector are included in the calculations. - Ignore: nodeAffinity/nodeSelector are ignored. All nodes are included in the calculations. If this value is nil, the behavior is equivalent to the Honor policy. This is a beta-level feature default enabled by the NodeInclusionPolicyInPodTopologySpread feature flag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/repo_manager_pulpproject_org_pulp_v1beta2_manifest#node_affinity_policy DataK8SRepoManagerPulpprojectOrgPulpV1Beta2Manifest#node_affinity_policy}
  */
  readonly nodeAffinityPolicy?: string;
  /**
  * NodeTaintsPolicy indicates how we will treat node taints when calculating pod topology spread skew. Options are: - Honor: nodes without taints, along with tainted nodes for which the incoming pod has a toleration, are included. - Ignore: node taints are ignored. All nodes are included. If this value is nil, the behavior is equivalent to the Ignore policy. This is a beta-level feature default enabled by the NodeInclusionPolicyInPodTopologySpread feature flag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/repo_manager_pulpproject_org_pulp_v1beta2_manifest#node_taints_policy DataK8SRepoManagerPulpprojectOrgPulpV1Beta2Manifest#node_taints_policy}
  */
  readonly nodeTaintsPolicy?: string;
  /**
  * TopologyKey is the key of node labels. Nodes that have a label with this key and identical values are considered to be in the same topology. We consider each <key, value> as a 'bucket', and try to put balanced number of pods into each bucket. We define a domain as a particular instance of a topology. Also, we define an eligible domain as a domain whose nodes meet the requirements of nodeAffinityPolicy and nodeTaintsPolicy. e.g. If TopologyKey is 'kubernetes.io/hostname', each Node is a domain of that topology. And, if TopologyKey is 'topology.kubernetes.io/zone', each zone is a domain of that topology. It's a required field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/repo_manager_pulpproject_org_pulp_v1beta2_manifest#topology_key DataK8SRepoManagerPulpprojectOrgPulpV1Beta2Manifest#topology_key}
  */
  readonly topologyKey: string;
  /**
  * WhenUnsatisfiable indicates how to deal with a pod if it doesn't satisfy the spread constraint. - DoNotSchedule (default) tells the scheduler not to schedule it. - ScheduleAnyway tells the scheduler to schedule the pod in any location, but giving higher precedence to topologies that would help reduce the skew. A constraint is considered 'Unsatisfiable' for an incoming pod if and only if every possible node assignment for that pod would violate 'MaxSkew' on some topology. For example, in a 3-zone cluster, MaxSkew is set to 1, and pods with the same labelSelector spread as 3/1/1: | zone1 | zone2 | zone3 | | P P P | P | P | If WhenUnsatisfiable is set to DoNotSchedule, incoming pod can only be scheduled to zone2(zone3) to become 3/2/1(3/1/2) as ActualSkew(2-1) on zone2(zone3) satisfies MaxSkew(1). In other words, the cluster can still be imbalanced, but scheduler won't make it *more* imbalanced. It's a required field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/repo_manager_pulpproject_org_pulp_v1beta2_manifest#when_unsatisfiable DataK8SRepoManagerPulpprojectOrgPulpV1Beta2Manifest#when_unsatisfiable}
  */
  readonly whenUnsatisfiable: string;
}

export function dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerTopologySpreadConstraintsToTerraform(struct?: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerTopologySpreadConstraints | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    label_selector: dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerTopologySpreadConstraintsLabelSelectorToTerraform(struct!.labelSelector),
    match_label_keys: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.matchLabelKeys),
    max_skew: cdktf.numberToTerraform(struct!.maxSkew),
    min_domains: cdktf.numberToTerraform(struct!.minDomains),
    node_affinity_policy: cdktf.stringToTerraform(struct!.nodeAffinityPolicy),
    node_taints_policy: cdktf.stringToTerraform(struct!.nodeTaintsPolicy),
    topology_key: cdktf.stringToTerraform(struct!.topologyKey),
    when_unsatisfiable: cdktf.stringToTerraform(struct!.whenUnsatisfiable),
  }
}


export function dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerTopologySpreadConstraintsToHclTerraform(struct?: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerTopologySpreadConstraints | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    label_selector: {
      value: dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerTopologySpreadConstraintsLabelSelectorToHclTerraform(struct!.labelSelector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerTopologySpreadConstraintsLabelSelector",
    },
    match_label_keys: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.matchLabelKeys),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    max_skew: {
      value: cdktf.numberToHclTerraform(struct!.maxSkew),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_domains: {
      value: cdktf.numberToHclTerraform(struct!.minDomains),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    node_affinity_policy: {
      value: cdktf.stringToHclTerraform(struct!.nodeAffinityPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    node_taints_policy: {
      value: cdktf.stringToHclTerraform(struct!.nodeTaintsPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    topology_key: {
      value: cdktf.stringToHclTerraform(struct!.topologyKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    when_unsatisfiable: {
      value: cdktf.stringToHclTerraform(struct!.whenUnsatisfiable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerTopologySpreadConstraintsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerTopologySpreadConstraints | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._labelSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.labelSelector = this._labelSelector?.internalValue;
    }
    if (this._matchLabelKeys !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchLabelKeys = this._matchLabelKeys;
    }
    if (this._maxSkew !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxSkew = this._maxSkew;
    }
    if (this._minDomains !== undefined) {
      hasAnyValues = true;
      internalValueResult.minDomains = this._minDomains;
    }
    if (this._nodeAffinityPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeAffinityPolicy = this._nodeAffinityPolicy;
    }
    if (this._nodeTaintsPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeTaintsPolicy = this._nodeTaintsPolicy;
    }
    if (this._topologyKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.topologyKey = this._topologyKey;
    }
    if (this._whenUnsatisfiable !== undefined) {
      hasAnyValues = true;
      internalValueResult.whenUnsatisfiable = this._whenUnsatisfiable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerTopologySpreadConstraints | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._labelSelector.internalValue = undefined;
      this._matchLabelKeys = undefined;
      this._maxSkew = undefined;
      this._minDomains = undefined;
      this._nodeAffinityPolicy = undefined;
      this._nodeTaintsPolicy = undefined;
      this._topologyKey = undefined;
      this._whenUnsatisfiable = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._labelSelector.internalValue = value.labelSelector;
      this._matchLabelKeys = value.matchLabelKeys;
      this._maxSkew = value.maxSkew;
      this._minDomains = value.minDomains;
      this._nodeAffinityPolicy = value.nodeAffinityPolicy;
      this._nodeTaintsPolicy = value.nodeTaintsPolicy;
      this._topologyKey = value.topologyKey;
      this._whenUnsatisfiable = value.whenUnsatisfiable;
    }
  }

  // label_selector - computed: false, optional: true, required: false
  private _labelSelector = new DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerTopologySpreadConstraintsLabelSelectorOutputReference(this, "label_selector");
  public get labelSelector() {
    return this._labelSelector;
  }
  public putLabelSelector(value: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerTopologySpreadConstraintsLabelSelector) {
    this._labelSelector.internalValue = value;
  }
  public resetLabelSelector() {
    this._labelSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelSelectorInput() {
    return this._labelSelector.internalValue;
  }

  // match_label_keys - computed: false, optional: true, required: false
  private _matchLabelKeys?: string[]; 
  public get matchLabelKeys() {
    return this.getListAttribute('match_label_keys');
  }
  public set matchLabelKeys(value: string[]) {
    this._matchLabelKeys = value;
  }
  public resetMatchLabelKeys() {
    this._matchLabelKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchLabelKeysInput() {
    return this._matchLabelKeys;
  }

  // max_skew - computed: false, optional: false, required: true
  private _maxSkew?: number; 
  public get maxSkew() {
    return this.getNumberAttribute('max_skew');
  }
  public set maxSkew(value: number) {
    this._maxSkew = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxSkewInput() {
    return this._maxSkew;
  }

  // min_domains - computed: false, optional: true, required: false
  private _minDomains?: number; 
  public get minDomains() {
    return this.getNumberAttribute('min_domains');
  }
  public set minDomains(value: number) {
    this._minDomains = value;
  }
  public resetMinDomains() {
    this._minDomains = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minDomainsInput() {
    return this._minDomains;
  }

  // node_affinity_policy - computed: false, optional: true, required: false
  private _nodeAffinityPolicy?: string; 
  public get nodeAffinityPolicy() {
    return this.getStringAttribute('node_affinity_policy');
  }
  public set nodeAffinityPolicy(value: string) {
    this._nodeAffinityPolicy = value;
  }
  public resetNodeAffinityPolicy() {
    this._nodeAffinityPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeAffinityPolicyInput() {
    return this._nodeAffinityPolicy;
  }

  // node_taints_policy - computed: false, optional: true, required: false
  private _nodeTaintsPolicy?: string; 
  public get nodeTaintsPolicy() {
    return this.getStringAttribute('node_taints_policy');
  }
  public set nodeTaintsPolicy(value: string) {
    this._nodeTaintsPolicy = value;
  }
  public resetNodeTaintsPolicy() {
    this._nodeTaintsPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeTaintsPolicyInput() {
    return this._nodeTaintsPolicy;
  }

  // topology_key - computed: false, optional: false, required: true
  private _topologyKey?: string; 
  public get topologyKey() {
    return this.getStringAttribute('topology_key');
  }
  public set topologyKey(value: string) {
    this._topologyKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get topologyKeyInput() {
    return this._topologyKey;
  }

  // when_unsatisfiable - computed: false, optional: false, required: true
  private _whenUnsatisfiable?: string; 
  public get whenUnsatisfiable() {
    return this.getStringAttribute('when_unsatisfiable');
  }
  public set whenUnsatisfiable(value: string) {
    this._whenUnsatisfiable = value;
  }
  // Temporarily expose input value. Use with caution.
  public get whenUnsatisfiableInput() {
    return this._whenUnsatisfiable;
  }
}

export class DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerTopologySpreadConstraintsList extends cdktf.ComplexList {
  public internalValue? : DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerTopologySpreadConstraints[] | cdktf.IResolvable

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
  public get(index: number): DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerTopologySpreadConstraintsOutputReference {
    return new DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerTopologySpreadConstraintsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorker {
  /**
  * Affinity is a group of affinity scheduling rules.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/repo_manager_pulpproject_org_pulp_v1beta2_manifest#affinity DataK8SRepoManagerPulpprojectOrgPulpV1Beta2Manifest#affinity}
  */
  readonly affinity?: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinity;
  /**
  * Annotations for the worker deployment
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/repo_manager_pulpproject_org_pulp_v1beta2_manifest#deployment_annotations DataK8SRepoManagerPulpprojectOrgPulpV1Beta2Manifest#deployment_annotations}
  */
  readonly deploymentAnnotations?: { [key: string]: string };
  /**
  * Environment variables to add to pulpcore-worker container
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/repo_manager_pulpproject_org_pulp_v1beta2_manifest#env_vars DataK8SRepoManagerPulpprojectOrgPulpV1Beta2Manifest#env_vars}
  */
  readonly envVars?: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerEnvVars[] | cdktf.IResolvable;
  /**
  * InitContainer defines configuration of the init-containers that run in pulpcore pods
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/repo_manager_pulpproject_org_pulp_v1beta2_manifest#init_container DataK8SRepoManagerPulpprojectOrgPulpV1Beta2Manifest#init_container}
  */
  readonly initContainer?: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerInitContainer;
  /**
  * Periodic probe of container liveness. Container will be restarted if the probe fails.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/repo_manager_pulpproject_org_pulp_v1beta2_manifest#liveness_probe DataK8SRepoManagerPulpprojectOrgPulpV1Beta2Manifest#liveness_probe}
  */
  readonly livenessProbe?: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerLivenessProbe;
  /**
  * NodeSelector for the Pulp pods.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/repo_manager_pulpproject_org_pulp_v1beta2_manifest#node_selector DataK8SRepoManagerPulpprojectOrgPulpV1Beta2Manifest#node_selector}
  */
  readonly nodeSelector?: { [key: string]: string };
  /**
  * PodDisruptionBudget is an object to define the max disruption that can be caused to a collection of pods
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/repo_manager_pulpproject_org_pulp_v1beta2_manifest#pdb DataK8SRepoManagerPulpprojectOrgPulpV1Beta2Manifest#pdb}
  */
  readonly pdb?: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerPdb;
  /**
  * Periodic probe of container service readiness. Container will be removed from service endpoints if the probe fails.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/repo_manager_pulpproject_org_pulp_v1beta2_manifest#readiness_probe DataK8SRepoManagerPulpprojectOrgPulpV1Beta2Manifest#readiness_probe}
  */
  readonly readinessProbe?: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerReadinessProbe;
  /**
  * Size is the size of number of pulp-worker replicas. Default: 2
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/repo_manager_pulpproject_org_pulp_v1beta2_manifest#replicas DataK8SRepoManagerPulpprojectOrgPulpV1Beta2Manifest#replicas}
  */
  readonly replicas?: number;
  /**
  * Resource requirements for the pulp-api container
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/repo_manager_pulpproject_org_pulp_v1beta2_manifest#resource_requirements DataK8SRepoManagerPulpprojectOrgPulpV1Beta2Manifest#resource_requirements}
  */
  readonly resourceRequirements?: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerResourceRequirements;
  /**
  * The deployment strategy to use to replace existing pods with new ones.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/repo_manager_pulpproject_org_pulp_v1beta2_manifest#strategy DataK8SRepoManagerPulpprojectOrgPulpV1Beta2Manifest#strategy}
  */
  readonly strategy?: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerStrategy;
  /**
  * Node tolerations for the Pulp pods.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/repo_manager_pulpproject_org_pulp_v1beta2_manifest#tolerations DataK8SRepoManagerPulpprojectOrgPulpV1Beta2Manifest#tolerations}
  */
  readonly tolerations?: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerTolerations[] | cdktf.IResolvable;
  /**
  * Topology rule(s) for the pods.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/repo_manager_pulpproject_org_pulp_v1beta2_manifest#topology_spread_constraints DataK8SRepoManagerPulpprojectOrgPulpV1Beta2Manifest#topology_spread_constraints}
  */
  readonly topologySpreadConstraints?: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerTopologySpreadConstraints[] | cdktf.IResolvable;
}

export function dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerToTerraform(struct?: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorker | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    affinity: dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityToTerraform(struct!.affinity),
    deployment_annotations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.deploymentAnnotations),
    env_vars: cdktf.listMapper(dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerEnvVarsToTerraform, false)(struct!.envVars),
    init_container: dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerInitContainerToTerraform(struct!.initContainer),
    liveness_probe: dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerLivenessProbeToTerraform(struct!.livenessProbe),
    node_selector: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.nodeSelector),
    pdb: dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerPdbToTerraform(struct!.pdb),
    readiness_probe: dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerReadinessProbeToTerraform(struct!.readinessProbe),
    replicas: cdktf.numberToTerraform(struct!.replicas),
    resource_requirements: dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerResourceRequirementsToTerraform(struct!.resourceRequirements),
    strategy: dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerStrategyToTerraform(struct!.strategy),
    tolerations: cdktf.listMapper(dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerTolerationsToTerraform, false)(struct!.tolerations),
    topology_spread_constraints: cdktf.listMapper(dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerTopologySpreadConstraintsToTerraform, false)(struct!.topologySpreadConstraints),
  }
}


export function dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerToHclTerraform(struct?: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorker | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    affinity: {
      value: dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityToHclTerraform(struct!.affinity),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinity",
    },
    deployment_annotations: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.deploymentAnnotations),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    env_vars: {
      value: cdktf.listMapperHcl(dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerEnvVarsToHclTerraform, false)(struct!.envVars),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerEnvVarsList",
    },
    init_container: {
      value: dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerInitContainerToHclTerraform(struct!.initContainer),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerInitContainer",
    },
    liveness_probe: {
      value: dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerLivenessProbeToHclTerraform(struct!.livenessProbe),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerLivenessProbe",
    },
    node_selector: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.nodeSelector),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    pdb: {
      value: dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerPdbToHclTerraform(struct!.pdb),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerPdb",
    },
    readiness_probe: {
      value: dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerReadinessProbeToHclTerraform(struct!.readinessProbe),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerReadinessProbe",
    },
    replicas: {
      value: cdktf.numberToHclTerraform(struct!.replicas),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    resource_requirements: {
      value: dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerResourceRequirementsToHclTerraform(struct!.resourceRequirements),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerResourceRequirements",
    },
    strategy: {
      value: dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerStrategyToHclTerraform(struct!.strategy),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerStrategy",
    },
    tolerations: {
      value: cdktf.listMapperHcl(dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerTolerationsToHclTerraform, false)(struct!.tolerations),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerTolerationsList",
    },
    topology_spread_constraints: {
      value: cdktf.listMapperHcl(dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerTopologySpreadConstraintsToHclTerraform, false)(struct!.topologySpreadConstraints),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerTopologySpreadConstraintsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorker | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._affinity?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.affinity = this._affinity?.internalValue;
    }
    if (this._deploymentAnnotations !== undefined) {
      hasAnyValues = true;
      internalValueResult.deploymentAnnotations = this._deploymentAnnotations;
    }
    if (this._envVars?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.envVars = this._envVars?.internalValue;
    }
    if (this._initContainer?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.initContainer = this._initContainer?.internalValue;
    }
    if (this._livenessProbe?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.livenessProbe = this._livenessProbe?.internalValue;
    }
    if (this._nodeSelector !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeSelector = this._nodeSelector;
    }
    if (this._pdb?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pdb = this._pdb?.internalValue;
    }
    if (this._readinessProbe?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.readinessProbe = this._readinessProbe?.internalValue;
    }
    if (this._replicas !== undefined) {
      hasAnyValues = true;
      internalValueResult.replicas = this._replicas;
    }
    if (this._resourceRequirements?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceRequirements = this._resourceRequirements?.internalValue;
    }
    if (this._strategy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.strategy = this._strategy?.internalValue;
    }
    if (this._tolerations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tolerations = this._tolerations?.internalValue;
    }
    if (this._topologySpreadConstraints?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.topologySpreadConstraints = this._topologySpreadConstraints?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorker | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._affinity.internalValue = undefined;
      this._deploymentAnnotations = undefined;
      this._envVars.internalValue = undefined;
      this._initContainer.internalValue = undefined;
      this._livenessProbe.internalValue = undefined;
      this._nodeSelector = undefined;
      this._pdb.internalValue = undefined;
      this._readinessProbe.internalValue = undefined;
      this._replicas = undefined;
      this._resourceRequirements.internalValue = undefined;
      this._strategy.internalValue = undefined;
      this._tolerations.internalValue = undefined;
      this._topologySpreadConstraints.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._affinity.internalValue = value.affinity;
      this._deploymentAnnotations = value.deploymentAnnotations;
      this._envVars.internalValue = value.envVars;
      this._initContainer.internalValue = value.initContainer;
      this._livenessProbe.internalValue = value.livenessProbe;
      this._nodeSelector = value.nodeSelector;
      this._pdb.internalValue = value.pdb;
      this._readinessProbe.internalValue = value.readinessProbe;
      this._replicas = value.replicas;
      this._resourceRequirements.internalValue = value.resourceRequirements;
      this._strategy.internalValue = value.strategy;
      this._tolerations.internalValue = value.tolerations;
      this._topologySpreadConstraints.internalValue = value.topologySpreadConstraints;
    }
  }

  // affinity - computed: false, optional: true, required: false
  private _affinity = new DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinityOutputReference(this, "affinity");
  public get affinity() {
    return this._affinity;
  }
  public putAffinity(value: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerAffinity) {
    this._affinity.internalValue = value;
  }
  public resetAffinity() {
    this._affinity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get affinityInput() {
    return this._affinity.internalValue;
  }

  // deployment_annotations - computed: false, optional: true, required: false
  private _deploymentAnnotations?: { [key: string]: string }; 
  public get deploymentAnnotations() {
    return this.getStringMapAttribute('deployment_annotations');
  }
  public set deploymentAnnotations(value: { [key: string]: string }) {
    this._deploymentAnnotations = value;
  }
  public resetDeploymentAnnotations() {
    this._deploymentAnnotations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deploymentAnnotationsInput() {
    return this._deploymentAnnotations;
  }

  // env_vars - computed: false, optional: true, required: false
  private _envVars = new DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerEnvVarsList(this, "env_vars", false);
  public get envVars() {
    return this._envVars;
  }
  public putEnvVars(value: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerEnvVars[] | cdktf.IResolvable) {
    this._envVars.internalValue = value;
  }
  public resetEnvVars() {
    this._envVars.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get envVarsInput() {
    return this._envVars.internalValue;
  }

  // init_container - computed: false, optional: true, required: false
  private _initContainer = new DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerInitContainerOutputReference(this, "init_container");
  public get initContainer() {
    return this._initContainer;
  }
  public putInitContainer(value: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerInitContainer) {
    this._initContainer.internalValue = value;
  }
  public resetInitContainer() {
    this._initContainer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initContainerInput() {
    return this._initContainer.internalValue;
  }

  // liveness_probe - computed: false, optional: true, required: false
  private _livenessProbe = new DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerLivenessProbeOutputReference(this, "liveness_probe");
  public get livenessProbe() {
    return this._livenessProbe;
  }
  public putLivenessProbe(value: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerLivenessProbe) {
    this._livenessProbe.internalValue = value;
  }
  public resetLivenessProbe() {
    this._livenessProbe.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get livenessProbeInput() {
    return this._livenessProbe.internalValue;
  }

  // node_selector - computed: false, optional: true, required: false
  private _nodeSelector?: { [key: string]: string }; 
  public get nodeSelector() {
    return this.getStringMapAttribute('node_selector');
  }
  public set nodeSelector(value: { [key: string]: string }) {
    this._nodeSelector = value;
  }
  public resetNodeSelector() {
    this._nodeSelector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeSelectorInput() {
    return this._nodeSelector;
  }

  // pdb - computed: false, optional: true, required: false
  private _pdb = new DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerPdbOutputReference(this, "pdb");
  public get pdb() {
    return this._pdb;
  }
  public putPdb(value: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerPdb) {
    this._pdb.internalValue = value;
  }
  public resetPdb() {
    this._pdb.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pdbInput() {
    return this._pdb.internalValue;
  }

  // readiness_probe - computed: false, optional: true, required: false
  private _readinessProbe = new DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerReadinessProbeOutputReference(this, "readiness_probe");
  public get readinessProbe() {
    return this._readinessProbe;
  }
  public putReadinessProbe(value: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerReadinessProbe) {
    this._readinessProbe.internalValue = value;
  }
  public resetReadinessProbe() {
    this._readinessProbe.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readinessProbeInput() {
    return this._readinessProbe.internalValue;
  }

  // replicas - computed: false, optional: true, required: false
  private _replicas?: number; 
  public get replicas() {
    return this.getNumberAttribute('replicas');
  }
  public set replicas(value: number) {
    this._replicas = value;
  }
  public resetReplicas() {
    this._replicas = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicasInput() {
    return this._replicas;
  }

  // resource_requirements - computed: false, optional: true, required: false
  private _resourceRequirements = new DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerResourceRequirementsOutputReference(this, "resource_requirements");
  public get resourceRequirements() {
    return this._resourceRequirements;
  }
  public putResourceRequirements(value: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerResourceRequirements) {
    this._resourceRequirements.internalValue = value;
  }
  public resetResourceRequirements() {
    this._resourceRequirements.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceRequirementsInput() {
    return this._resourceRequirements.internalValue;
  }

  // strategy - computed: false, optional: true, required: false
  private _strategy = new DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerStrategyOutputReference(this, "strategy");
  public get strategy() {
    return this._strategy;
  }
  public putStrategy(value: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerStrategy) {
    this._strategy.internalValue = value;
  }
  public resetStrategy() {
    this._strategy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get strategyInput() {
    return this._strategy.internalValue;
  }

  // tolerations - computed: false, optional: true, required: false
  private _tolerations = new DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerTolerationsList(this, "tolerations", false);
  public get tolerations() {
    return this._tolerations;
  }
  public putTolerations(value: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerTolerations[] | cdktf.IResolvable) {
    this._tolerations.internalValue = value;
  }
  public resetTolerations() {
    this._tolerations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tolerationsInput() {
    return this._tolerations.internalValue;
  }

  // topology_spread_constraints - computed: false, optional: true, required: false
  private _topologySpreadConstraints = new DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerTopologySpreadConstraintsList(this, "topology_spread_constraints", false);
  public get topologySpreadConstraints() {
    return this._topologySpreadConstraints;
  }
  public putTopologySpreadConstraints(value: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerTopologySpreadConstraints[] | cdktf.IResolvable) {
    this._topologySpreadConstraints.internalValue = value;
  }
  public resetTopologySpreadConstraints() {
    this._topologySpreadConstraints.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topologySpreadConstraintsInput() {
    return this._topologySpreadConstraints.internalValue;
  }
}
export interface DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpec {
  /**
  * Job to reset pulp admin password
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/repo_manager_pulpproject_org_pulp_v1beta2_manifest#admin_password_job DataK8SRepoManagerPulpprojectOrgPulpV1Beta2Manifest#admin_password_job}
  */
  readonly adminPasswordJob?: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecAdminPasswordJob;
  /**
  * Secret where the administrator password can be found. Default: <operator's name> + '-admin-password'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/repo_manager_pulpproject_org_pulp_v1beta2_manifest#admin_password_secret DataK8SRepoManagerPulpprojectOrgPulpV1Beta2Manifest#admin_password_secret}
  */
  readonly adminPasswordSecret?: string;
  /**
  * List of allowed checksum algorithms used to verify repository's integrity. Valid options: ['md5','sha1','sha256','sha512'].
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/repo_manager_pulpproject_org_pulp_v1beta2_manifest#allowed_content_checksums DataK8SRepoManagerPulpprojectOrgPulpV1Beta2Manifest#allowed_content_checksums}
  */
  readonly allowedContentChecksums?: string[];
  /**
  * Api defines desired state of pulpcore-api resources
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/repo_manager_pulpproject_org_pulp_v1beta2_manifest#api DataK8SRepoManagerPulpprojectOrgPulpV1Beta2Manifest#api}
  */
  readonly api: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecApi;
  /**
  * Cache defines desired state of redis resources
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/repo_manager_pulpproject_org_pulp_v1beta2_manifest#cache DataK8SRepoManagerPulpprojectOrgPulpV1Beta2Manifest#cache}
  */
  readonly cache?: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecCache;
  /**
  * Private Key name from '<operator's name> + '-container-auth-certs'' Secret. Default: 'container_auth_private_key.pem'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/repo_manager_pulpproject_org_pulp_v1beta2_manifest#container_auth_private_key_name DataK8SRepoManagerPulpprojectOrgPulpV1Beta2Manifest#container_auth_private_key_name}
  */
  readonly containerAuthPrivateKeyName?: string;
  /**
  * Public Key name from '<operator's name> + '-container-auth-certs'' Secret. Default: 'container_auth_public_key.pem'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/repo_manager_pulpproject_org_pulp_v1beta2_manifest#container_auth_public_key_name DataK8SRepoManagerPulpprojectOrgPulpV1Beta2Manifest#container_auth_public_key_name}
  */
  readonly containerAuthPublicKeyName?: string;
  /**
  * Secret where the container token certificates are stored. Default: <operator's name> + '-container-auth'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/repo_manager_pulpproject_org_pulp_v1beta2_manifest#container_token_secret DataK8SRepoManagerPulpprojectOrgPulpV1Beta2Manifest#container_token_secret}
  */
  readonly containerTokenSecret?: string;
  /**
  * Content defines desired state of pulpcore-content resources
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/repo_manager_pulpproject_org_pulp_v1beta2_manifest#content DataK8SRepoManagerPulpprojectOrgPulpV1Beta2Manifest#content}
  */
  readonly content?: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecContent;
  /**
  * Name of the ConfigMap to define Pulp configurations not available through this CR.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/repo_manager_pulpproject_org_pulp_v1beta2_manifest#custom_pulp_settings DataK8SRepoManagerPulpprojectOrgPulpV1Beta2Manifest#custom_pulp_settings}
  */
  readonly customPulpSettings?: string;
  /**
  * Database defines desired state of postgres resources
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/repo_manager_pulpproject_org_pulp_v1beta2_manifest#database DataK8SRepoManagerPulpprojectOrgPulpV1Beta2Manifest#database}
  */
  readonly database?: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecDatabase;
  /**
  * Secret where the Fernet symmetric encryption key is stored. Default: <operators's name>-'-db-fields-encryption'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/repo_manager_pulpproject_org_pulp_v1beta2_manifest#db_fields_encryption_secret DataK8SRepoManagerPulpprojectOrgPulpV1Beta2Manifest#db_fields_encryption_secret}
  */
  readonly dbFieldsEncryptionSecret?: string;
  /**
  * Define if the operator should or should not deploy the default Execution Environments. Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/repo_manager_pulpproject_org_pulp_v1beta2_manifest#deploy_ee_defaults DataK8SRepoManagerPulpprojectOrgPulpV1Beta2Manifest#deploy_ee_defaults}
  */
  readonly deployEeDefaults?: boolean | cdktf.IResolvable;
  /**
  * Name of the deployment type. Default: 'pulp'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/repo_manager_pulpproject_org_pulp_v1beta2_manifest#deployment_type DataK8SRepoManagerPulpprojectOrgPulpV1Beta2Manifest#deployment_type}
  */
  readonly deploymentType?: string;
  /**
  * Disable database migrations. Useful for situations in which we don't want to automatically run the database migrations, for example, during restore.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/repo_manager_pulpproject_org_pulp_v1beta2_manifest#disable_migrations DataK8SRepoManagerPulpprojectOrgPulpV1Beta2Manifest#disable_migrations}
  */
  readonly disableMigrations?: boolean | cdktf.IResolvable;
  /**
  * Name of the ConfigMap with the list of Execution Environments that should be synchronized. Default: ee-default-images
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/repo_manager_pulpproject_org_pulp_v1beta2_manifest#ee_defaults DataK8SRepoManagerPulpprojectOrgPulpV1Beta2Manifest#ee_defaults}
  */
  readonly eeDefaults?: string;
  /**
  * By default Pulp logs at INFO level, but enabling DEBUG logging can be a helpful thing to get more insight when things don’t go as expected. Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/repo_manager_pulpproject_org_pulp_v1beta2_manifest#enable_debugging DataK8SRepoManagerPulpprojectOrgPulpV1Beta2Manifest#enable_debugging}
  */
  readonly enableDebugging?: boolean | cdktf.IResolvable;
  /**
  * The file storage access mode. This field should be used only if file_storage_storage_class is provided
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/repo_manager_pulpproject_org_pulp_v1beta2_manifest#file_storage_access_mode DataK8SRepoManagerPulpprojectOrgPulpV1Beta2Manifest#file_storage_access_mode}
  */
  readonly fileStorageAccessMode?: string;
  /**
  * The size of the file storage; for example 100Gi. This field should be used only if file_storage_storage_class is provided
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/repo_manager_pulpproject_org_pulp_v1beta2_manifest#file_storage_size DataK8SRepoManagerPulpprojectOrgPulpV1Beta2Manifest#file_storage_size}
  */
  readonly fileStorageSize?: string;
  /**
  * Storage class to use for the file persistentVolumeClaim
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/repo_manager_pulpproject_org_pulp_v1beta2_manifest#file_storage_storage_class DataK8SRepoManagerPulpprojectOrgPulpV1Beta2Manifest#file_storage_storage_class}
  */
  readonly fileStorageStorageClass?: string;
  /**
  * The timeout for HAProxy. Default: '180s'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/repo_manager_pulpproject_org_pulp_v1beta2_manifest#haproxy_timeout DataK8SRepoManagerPulpprojectOrgPulpV1Beta2Manifest#haproxy_timeout}
  */
  readonly haproxyTimeout?: string;
  /**
  * The image name (repo name) for the pulp image. Default: 'quay.io/pulp/pulp-minimal:stable'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/repo_manager_pulpproject_org_pulp_v1beta2_manifest#image DataK8SRepoManagerPulpprojectOrgPulpV1Beta2Manifest#image}
  */
  readonly image?: string;
  /**
  * Image pull policy for container image. Default: 'IfNotPresent'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/repo_manager_pulpproject_org_pulp_v1beta2_manifest#image_pull_policy DataK8SRepoManagerPulpprojectOrgPulpV1Beta2Manifest#image_pull_policy}
  */
  readonly imagePullPolicy?: string;
  /**
  * Image pull secrets for container images. Default: []
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/repo_manager_pulpproject_org_pulp_v1beta2_manifest#image_pull_secrets DataK8SRepoManagerPulpprojectOrgPulpV1Beta2Manifest#image_pull_secrets}
  */
  readonly imagePullSecrets?: string[];
  /**
  * The image version for the pulp image. Default: 'stable'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/repo_manager_pulpproject_org_pulp_v1beta2_manifest#image_version DataK8SRepoManagerPulpprojectOrgPulpV1Beta2Manifest#image_version}
  */
  readonly imageVersion?: string;
  /**
  * The image name (repo name) for the pulp webserver image. Default: 'quay.io/pulp/pulp-web'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/repo_manager_pulpproject_org_pulp_v1beta2_manifest#image_web DataK8SRepoManagerPulpprojectOrgPulpV1Beta2Manifest#image_web}
  */
  readonly imageWeb?: string;
  /**
  * The image version for the pulp webserver image. Default: 'stable'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/repo_manager_pulpproject_org_pulp_v1beta2_manifest#image_web_version DataK8SRepoManagerPulpprojectOrgPulpV1Beta2Manifest#image_web_version}
  */
  readonly imageWebVersion?: string;
  /**
  * Annotations for the Ingress
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/repo_manager_pulpproject_org_pulp_v1beta2_manifest#ingress_annotations DataK8SRepoManagerPulpprojectOrgPulpV1Beta2Manifest#ingress_annotations}
  */
  readonly ingressAnnotations?: { [key: string]: string };
  /**
  * IngressClassName is used to inform the operator which ingressclass should be used to provision the ingress. Default: '' (will use the default ingress class)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/repo_manager_pulpproject_org_pulp_v1beta2_manifest#ingress_class_name DataK8SRepoManagerPulpprojectOrgPulpV1Beta2Manifest#ingress_class_name}
  */
  readonly ingressClassName?: string;
  /**
  * Ingress DNS host
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/repo_manager_pulpproject_org_pulp_v1beta2_manifest#ingress_host DataK8SRepoManagerPulpprojectOrgPulpV1Beta2Manifest#ingress_host}
  */
  readonly ingressHost?: string;
  /**
  * Ingress TLS secret
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/repo_manager_pulpproject_org_pulp_v1beta2_manifest#ingress_tls_secret DataK8SRepoManagerPulpprojectOrgPulpV1Beta2Manifest#ingress_tls_secret}
  */
  readonly ingressTlsSecret?: string;
  /**
  * The ingress type to use to reach the deployed instance. Default: none (will not expose the service)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/repo_manager_pulpproject_org_pulp_v1beta2_manifest#ingress_type DataK8SRepoManagerPulpprojectOrgPulpV1Beta2Manifest#ingress_type}
  */
  readonly ingressType?: string;
  /**
  * Relax the check of image_version and image_web_version not matching. Default: 'false'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/repo_manager_pulpproject_org_pulp_v1beta2_manifest#inhibit_version_constraint DataK8SRepoManagerPulpprojectOrgPulpV1Beta2Manifest#inhibit_version_constraint}
  */
  readonly inhibitVersionConstraint?: boolean | cdktf.IResolvable;
  /**
  * Disable ipv6 for pulpcore and pulp-web pods
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/repo_manager_pulpproject_org_pulp_v1beta2_manifest#ipv6_disabled DataK8SRepoManagerPulpprojectOrgPulpV1Beta2Manifest#ipv6_disabled}
  */
  readonly ipv6Disabled?: boolean | cdktf.IResolvable;
  /**
  * Define if the IngressClass provided has Nginx as Ingress Controller. If the Ingress Controller is not nginx the operator will automatically provision 'pulp-web' pods to redirect the traffic. If it is a nginx controller the traffic will be forwarded to api and content pods. This variable is a workaround to avoid having to grant a ClusterRole (to do a get into the IngressClass and verify the controller). Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/repo_manager_pulpproject_org_pulp_v1beta2_manifest#is_nginx_ingress DataK8SRepoManagerPulpprojectOrgPulpV1Beta2Manifest#is_nginx_ingress}
  */
  readonly isNginxIngress?: boolean | cdktf.IResolvable;
  /**
  * LDAP defines the ldap resources used by pulpcore containers to integrate Pulp with LDAP authentication
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/repo_manager_pulpproject_org_pulp_v1beta2_manifest#ldap DataK8SRepoManagerPulpprojectOrgPulpV1Beta2Manifest#ldap}
  */
  readonly ldap?: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecLdap;
  /**
  * Port exposed by pulp-web service when ingress_type==loadbalancer
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/repo_manager_pulpproject_org_pulp_v1beta2_manifest#loadbalancer_port DataK8SRepoManagerPulpprojectOrgPulpV1Beta2Manifest#loadbalancer_port}
  */
  readonly loadbalancerPort?: number;
  /**
  * Protocol used by pulp-web service when ingress_type==loadbalancer
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/repo_manager_pulpproject_org_pulp_v1beta2_manifest#loadbalancer_protocol DataK8SRepoManagerPulpprojectOrgPulpV1Beta2Manifest#loadbalancer_protocol}
  */
  readonly loadbalancerProtocol?: string;
  /**
  * Job to run django migrations
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/repo_manager_pulpproject_org_pulp_v1beta2_manifest#migration_job DataK8SRepoManagerPulpprojectOrgPulpV1Beta2Manifest#migration_job}
  */
  readonly migrationJob?: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecMigrationJob;
  /**
  * Define if the operator should or should not mount the custom CA certificates added to the cluster via cluster-wide proxy config. Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/repo_manager_pulpproject_org_pulp_v1beta2_manifest#mount_trusted_ca DataK8SRepoManagerPulpprojectOrgPulpV1Beta2Manifest#mount_trusted_ca}
  */
  readonly mountTrustedCa?: boolean | cdktf.IResolvable;
  /**
  * The client max body size for Nginx Ingress. Default: '10m'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/repo_manager_pulpproject_org_pulp_v1beta2_manifest#nginx_client_max_body_size DataK8SRepoManagerPulpprojectOrgPulpV1Beta2Manifest#nginx_client_max_body_size}
  */
  readonly nginxClientMaxBodySize?: string;
  /**
  * The proxy body size for Nginx Ingress. Default: '0'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/repo_manager_pulpproject_org_pulp_v1beta2_manifest#nginx_proxy_body_size DataK8SRepoManagerPulpprojectOrgPulpV1Beta2Manifest#nginx_proxy_body_size}
  */
  readonly nginxProxyBodySize?: string;
  /**
  * The proxy connect timeout for Nginx Ingress. Default: '120s'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/repo_manager_pulpproject_org_pulp_v1beta2_manifest#nginx_proxy_connect_timeout DataK8SRepoManagerPulpprojectOrgPulpV1Beta2Manifest#nginx_proxy_connect_timeout}
  */
  readonly nginxProxyConnectTimeout?: string;
  /**
  * The proxy read timeout for Nginx Ingress. Default: '120s'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/repo_manager_pulpproject_org_pulp_v1beta2_manifest#nginx_proxy_read_timeout DataK8SRepoManagerPulpprojectOrgPulpV1Beta2Manifest#nginx_proxy_read_timeout}
  */
  readonly nginxProxyReadTimeout?: string;
  /**
  * The proxy send timeout for Nginx Ingress. Default: '120s'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/repo_manager_pulpproject_org_pulp_v1beta2_manifest#nginx_proxy_send_timeout DataK8SRepoManagerPulpprojectOrgPulpV1Beta2Manifest#nginx_proxy_send_timeout}
  */
  readonly nginxProxySendTimeout?: string;
  /**
  * Provide requested port value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/repo_manager_pulpproject_org_pulp_v1beta2_manifest#nodeport_port DataK8SRepoManagerPulpprojectOrgPulpV1Beta2Manifest#nodeport_port}
  */
  readonly nodeportPort?: number;
  /**
  * The secret for Azure compliant object storage configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/repo_manager_pulpproject_org_pulp_v1beta2_manifest#object_storage_azure_secret DataK8SRepoManagerPulpprojectOrgPulpV1Beta2Manifest#object_storage_azure_secret}
  */
  readonly objectStorageAzureSecret?: string;
  /**
  * The secret for S3 compliant object storage configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/repo_manager_pulpproject_org_pulp_v1beta2_manifest#object_storage_s3_secret DataK8SRepoManagerPulpprojectOrgPulpV1Beta2Manifest#object_storage_s3_secret}
  */
  readonly objectStorageS3Secret?: string;
  /**
  * Name of the Secret to provide Django cryptographic signing. Default: 'pulp-secret-key'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/repo_manager_pulpproject_org_pulp_v1beta2_manifest#pulp_secret_key DataK8SRepoManagerPulpprojectOrgPulpV1Beta2Manifest#pulp_secret_key}
  */
  readonly pulpSecretKey?: string;
  /**
  * [DEPRECATED] Definition of /etc/pulp/settings.py config file. This field is deprecated and will be removed in the future, use the custom_pulp_settings field instead.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/repo_manager_pulpproject_org_pulp_v1beta2_manifest#pulp_settings DataK8SRepoManagerPulpprojectOrgPulpV1Beta2Manifest#pulp_settings}
  */
  readonly pulpSettings?: { [key: string]: string };
  /**
  * PersistenVolumeClaim name that will be used by Pulp pods. If defined, the PVC must be provisioned by the user and the operator will only configure the deployment to use it
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/repo_manager_pulpproject_org_pulp_v1beta2_manifest#pvc DataK8SRepoManagerPulpprojectOrgPulpV1Beta2Manifest#pvc}
  */
  readonly pvc?: string;
  /**
  * RouteAnnotations will append custom annotation(s) into routes (used by router shard routeSelector).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/repo_manager_pulpproject_org_pulp_v1beta2_manifest#route_annotations DataK8SRepoManagerPulpprojectOrgPulpV1Beta2Manifest#route_annotations}
  */
  readonly routeAnnotations?: { [key: string]: string };
  /**
  * Route DNS host. Default: <operator's name> + '.' + ingress.Spec.Domain
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/repo_manager_pulpproject_org_pulp_v1beta2_manifest#route_host DataK8SRepoManagerPulpprojectOrgPulpV1Beta2Manifest#route_host}
  */
  readonly routeHost?: string;
  /**
  * RouteLabels will append custom label(s) into routes (used by router shard routeSelector). Default: {'pulp_cr': '<operator's name>', 'owner': 'pulp-dev' }
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/repo_manager_pulpproject_org_pulp_v1beta2_manifest#route_labels DataK8SRepoManagerPulpprojectOrgPulpV1Beta2Manifest#route_labels}
  */
  readonly routeLabels?: { [key: string]: string };
  /**
  * Name of the secret with the certificates/keys used by route encryption
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/repo_manager_pulpproject_org_pulp_v1beta2_manifest#route_tls_secret DataK8SRepoManagerPulpprojectOrgPulpV1Beta2Manifest#route_tls_secret}
  */
  readonly routeTlsSecret?: string;
  /**
  * ServiceAccount.metadata.annotations that will be used in Pulp pods.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/repo_manager_pulpproject_org_pulp_v1beta2_manifest#sa_annotations DataK8SRepoManagerPulpprojectOrgPulpV1Beta2Manifest#sa_annotations}
  */
  readonly saAnnotations?: { [key: string]: string };
  /**
  * ServiceAccount.metadata.labels that will be used in Pulp pods.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/repo_manager_pulpproject_org_pulp_v1beta2_manifest#sa_labels DataK8SRepoManagerPulpprojectOrgPulpV1Beta2Manifest#sa_labels}
  */
  readonly saLabels?: { [key: string]: string };
  /**
  * Job to store signing metadata scripts
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/repo_manager_pulpproject_org_pulp_v1beta2_manifest#signing_job DataK8SRepoManagerPulpprojectOrgPulpV1Beta2Manifest#signing_job}
  */
  readonly signingJob?: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecSigningJob;
  /**
  * Name of the Secret where the signing scripts are stored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/repo_manager_pulpproject_org_pulp_v1beta2_manifest#signing_scripts DataK8SRepoManagerPulpprojectOrgPulpV1Beta2Manifest#signing_scripts}
  */
  readonly signingScripts?: string;
  /**
  * [DEPRECATED] ConfigMap where the signing scripts are stored. This field is deprecated and will be removed in the future, use the signing_scripts field instead.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/repo_manager_pulpproject_org_pulp_v1beta2_manifest#signing_scripts_configmap DataK8SRepoManagerPulpprojectOrgPulpV1Beta2Manifest#signing_scripts_configmap}
  */
  readonly signingScriptsConfigmap?: string;
  /**
  * Name of the Secret where the gpg key is stored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/repo_manager_pulpproject_org_pulp_v1beta2_manifest#signing_secret DataK8SRepoManagerPulpprojectOrgPulpV1Beta2Manifest#signing_secret}
  */
  readonly signingSecret?: string;
  /**
  * Secret where Single Sign-on configuration can be found
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/repo_manager_pulpproject_org_pulp_v1beta2_manifest#sso_secret DataK8SRepoManagerPulpprojectOrgPulpV1Beta2Manifest#sso_secret}
  */
  readonly ssoSecret?: string;
  /**
  * Telemetry defines the OpenTelemetry configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/repo_manager_pulpproject_org_pulp_v1beta2_manifest#telemetry DataK8SRepoManagerPulpprojectOrgPulpV1Beta2Manifest#telemetry}
  */
  readonly telemetry?: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecTelemetry;
  /**
  * Define if the operator should stop managing Pulp resources. If set to true, the operator will not execute any task (it will be 'disabled'). Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/repo_manager_pulpproject_org_pulp_v1beta2_manifest#unmanaged DataK8SRepoManagerPulpprojectOrgPulpV1Beta2Manifest#unmanaged}
  */
  readonly unmanaged?: boolean | cdktf.IResolvable;
  /**
  * Web defines desired state of pulpcore-web (reverse-proxy) resources
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/repo_manager_pulpproject_org_pulp_v1beta2_manifest#web DataK8SRepoManagerPulpprojectOrgPulpV1Beta2Manifest#web}
  */
  readonly web?: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWeb;
  /**
  * Worker defines desired state of pulpcore-worker resources
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/repo_manager_pulpproject_org_pulp_v1beta2_manifest#worker DataK8SRepoManagerPulpprojectOrgPulpV1Beta2Manifest#worker}
  */
  readonly worker?: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorker;
}

export function dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecToTerraform(struct?: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    admin_password_job: dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecAdminPasswordJobToTerraform(struct!.adminPasswordJob),
    admin_password_secret: cdktf.stringToTerraform(struct!.adminPasswordSecret),
    allowed_content_checksums: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowedContentChecksums),
    api: dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecApiToTerraform(struct!.api),
    cache: dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecCacheToTerraform(struct!.cache),
    container_auth_private_key_name: cdktf.stringToTerraform(struct!.containerAuthPrivateKeyName),
    container_auth_public_key_name: cdktf.stringToTerraform(struct!.containerAuthPublicKeyName),
    container_token_secret: cdktf.stringToTerraform(struct!.containerTokenSecret),
    content: dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecContentToTerraform(struct!.content),
    custom_pulp_settings: cdktf.stringToTerraform(struct!.customPulpSettings),
    database: dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecDatabaseToTerraform(struct!.database),
    db_fields_encryption_secret: cdktf.stringToTerraform(struct!.dbFieldsEncryptionSecret),
    deploy_ee_defaults: cdktf.booleanToTerraform(struct!.deployEeDefaults),
    deployment_type: cdktf.stringToTerraform(struct!.deploymentType),
    disable_migrations: cdktf.booleanToTerraform(struct!.disableMigrations),
    ee_defaults: cdktf.stringToTerraform(struct!.eeDefaults),
    enable_debugging: cdktf.booleanToTerraform(struct!.enableDebugging),
    file_storage_access_mode: cdktf.stringToTerraform(struct!.fileStorageAccessMode),
    file_storage_size: cdktf.stringToTerraform(struct!.fileStorageSize),
    file_storage_storage_class: cdktf.stringToTerraform(struct!.fileStorageStorageClass),
    haproxy_timeout: cdktf.stringToTerraform(struct!.haproxyTimeout),
    image: cdktf.stringToTerraform(struct!.image),
    image_pull_policy: cdktf.stringToTerraform(struct!.imagePullPolicy),
    image_pull_secrets: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.imagePullSecrets),
    image_version: cdktf.stringToTerraform(struct!.imageVersion),
    image_web: cdktf.stringToTerraform(struct!.imageWeb),
    image_web_version: cdktf.stringToTerraform(struct!.imageWebVersion),
    ingress_annotations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.ingressAnnotations),
    ingress_class_name: cdktf.stringToTerraform(struct!.ingressClassName),
    ingress_host: cdktf.stringToTerraform(struct!.ingressHost),
    ingress_tls_secret: cdktf.stringToTerraform(struct!.ingressTlsSecret),
    ingress_type: cdktf.stringToTerraform(struct!.ingressType),
    inhibit_version_constraint: cdktf.booleanToTerraform(struct!.inhibitVersionConstraint),
    ipv6_disabled: cdktf.booleanToTerraform(struct!.ipv6Disabled),
    is_nginx_ingress: cdktf.booleanToTerraform(struct!.isNginxIngress),
    ldap: dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecLdapToTerraform(struct!.ldap),
    loadbalancer_port: cdktf.numberToTerraform(struct!.loadbalancerPort),
    loadbalancer_protocol: cdktf.stringToTerraform(struct!.loadbalancerProtocol),
    migration_job: dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecMigrationJobToTerraform(struct!.migrationJob),
    mount_trusted_ca: cdktf.booleanToTerraform(struct!.mountTrustedCa),
    nginx_client_max_body_size: cdktf.stringToTerraform(struct!.nginxClientMaxBodySize),
    nginx_proxy_body_size: cdktf.stringToTerraform(struct!.nginxProxyBodySize),
    nginx_proxy_connect_timeout: cdktf.stringToTerraform(struct!.nginxProxyConnectTimeout),
    nginx_proxy_read_timeout: cdktf.stringToTerraform(struct!.nginxProxyReadTimeout),
    nginx_proxy_send_timeout: cdktf.stringToTerraform(struct!.nginxProxySendTimeout),
    nodeport_port: cdktf.numberToTerraform(struct!.nodeportPort),
    object_storage_azure_secret: cdktf.stringToTerraform(struct!.objectStorageAzureSecret),
    object_storage_s3_secret: cdktf.stringToTerraform(struct!.objectStorageS3Secret),
    pulp_secret_key: cdktf.stringToTerraform(struct!.pulpSecretKey),
    pulp_settings: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.pulpSettings),
    pvc: cdktf.stringToTerraform(struct!.pvc),
    route_annotations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.routeAnnotations),
    route_host: cdktf.stringToTerraform(struct!.routeHost),
    route_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.routeLabels),
    route_tls_secret: cdktf.stringToTerraform(struct!.routeTlsSecret),
    sa_annotations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.saAnnotations),
    sa_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.saLabels),
    signing_job: dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecSigningJobToTerraform(struct!.signingJob),
    signing_scripts: cdktf.stringToTerraform(struct!.signingScripts),
    signing_scripts_configmap: cdktf.stringToTerraform(struct!.signingScriptsConfigmap),
    signing_secret: cdktf.stringToTerraform(struct!.signingSecret),
    sso_secret: cdktf.stringToTerraform(struct!.ssoSecret),
    telemetry: dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecTelemetryToTerraform(struct!.telemetry),
    unmanaged: cdktf.booleanToTerraform(struct!.unmanaged),
    web: dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWebToTerraform(struct!.web),
    worker: dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerToTerraform(struct!.worker),
  }
}


export function dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecToHclTerraform(struct?: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    admin_password_job: {
      value: dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecAdminPasswordJobToHclTerraform(struct!.adminPasswordJob),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecAdminPasswordJob",
    },
    admin_password_secret: {
      value: cdktf.stringToHclTerraform(struct!.adminPasswordSecret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    allowed_content_checksums: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowedContentChecksums),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    api: {
      value: dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecApiToHclTerraform(struct!.api),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecApi",
    },
    cache: {
      value: dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecCacheToHclTerraform(struct!.cache),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecCache",
    },
    container_auth_private_key_name: {
      value: cdktf.stringToHclTerraform(struct!.containerAuthPrivateKeyName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    container_auth_public_key_name: {
      value: cdktf.stringToHclTerraform(struct!.containerAuthPublicKeyName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    container_token_secret: {
      value: cdktf.stringToHclTerraform(struct!.containerTokenSecret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    content: {
      value: dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecContentToHclTerraform(struct!.content),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecContent",
    },
    custom_pulp_settings: {
      value: cdktf.stringToHclTerraform(struct!.customPulpSettings),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    database: {
      value: dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecDatabaseToHclTerraform(struct!.database),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecDatabase",
    },
    db_fields_encryption_secret: {
      value: cdktf.stringToHclTerraform(struct!.dbFieldsEncryptionSecret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    deploy_ee_defaults: {
      value: cdktf.booleanToHclTerraform(struct!.deployEeDefaults),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    deployment_type: {
      value: cdktf.stringToHclTerraform(struct!.deploymentType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    disable_migrations: {
      value: cdktf.booleanToHclTerraform(struct!.disableMigrations),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ee_defaults: {
      value: cdktf.stringToHclTerraform(struct!.eeDefaults),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enable_debugging: {
      value: cdktf.booleanToHclTerraform(struct!.enableDebugging),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    file_storage_access_mode: {
      value: cdktf.stringToHclTerraform(struct!.fileStorageAccessMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    file_storage_size: {
      value: cdktf.stringToHclTerraform(struct!.fileStorageSize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    file_storage_storage_class: {
      value: cdktf.stringToHclTerraform(struct!.fileStorageStorageClass),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    haproxy_timeout: {
      value: cdktf.stringToHclTerraform(struct!.haproxyTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    image: {
      value: cdktf.stringToHclTerraform(struct!.image),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    image_pull_policy: {
      value: cdktf.stringToHclTerraform(struct!.imagePullPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    image_pull_secrets: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.imagePullSecrets),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    image_version: {
      value: cdktf.stringToHclTerraform(struct!.imageVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    image_web: {
      value: cdktf.stringToHclTerraform(struct!.imageWeb),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    image_web_version: {
      value: cdktf.stringToHclTerraform(struct!.imageWebVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ingress_annotations: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.ingressAnnotations),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    ingress_class_name: {
      value: cdktf.stringToHclTerraform(struct!.ingressClassName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ingress_host: {
      value: cdktf.stringToHclTerraform(struct!.ingressHost),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ingress_tls_secret: {
      value: cdktf.stringToHclTerraform(struct!.ingressTlsSecret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ingress_type: {
      value: cdktf.stringToHclTerraform(struct!.ingressType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    inhibit_version_constraint: {
      value: cdktf.booleanToHclTerraform(struct!.inhibitVersionConstraint),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ipv6_disabled: {
      value: cdktf.booleanToHclTerraform(struct!.ipv6Disabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    is_nginx_ingress: {
      value: cdktf.booleanToHclTerraform(struct!.isNginxIngress),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ldap: {
      value: dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecLdapToHclTerraform(struct!.ldap),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecLdap",
    },
    loadbalancer_port: {
      value: cdktf.numberToHclTerraform(struct!.loadbalancerPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    loadbalancer_protocol: {
      value: cdktf.stringToHclTerraform(struct!.loadbalancerProtocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    migration_job: {
      value: dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecMigrationJobToHclTerraform(struct!.migrationJob),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecMigrationJob",
    },
    mount_trusted_ca: {
      value: cdktf.booleanToHclTerraform(struct!.mountTrustedCa),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    nginx_client_max_body_size: {
      value: cdktf.stringToHclTerraform(struct!.nginxClientMaxBodySize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    nginx_proxy_body_size: {
      value: cdktf.stringToHclTerraform(struct!.nginxProxyBodySize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    nginx_proxy_connect_timeout: {
      value: cdktf.stringToHclTerraform(struct!.nginxProxyConnectTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    nginx_proxy_read_timeout: {
      value: cdktf.stringToHclTerraform(struct!.nginxProxyReadTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    nginx_proxy_send_timeout: {
      value: cdktf.stringToHclTerraform(struct!.nginxProxySendTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    nodeport_port: {
      value: cdktf.numberToHclTerraform(struct!.nodeportPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    object_storage_azure_secret: {
      value: cdktf.stringToHclTerraform(struct!.objectStorageAzureSecret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    object_storage_s3_secret: {
      value: cdktf.stringToHclTerraform(struct!.objectStorageS3Secret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pulp_secret_key: {
      value: cdktf.stringToHclTerraform(struct!.pulpSecretKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pulp_settings: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.pulpSettings),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    pvc: {
      value: cdktf.stringToHclTerraform(struct!.pvc),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    route_annotations: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.routeAnnotations),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    route_host: {
      value: cdktf.stringToHclTerraform(struct!.routeHost),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    route_labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.routeLabels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    route_tls_secret: {
      value: cdktf.stringToHclTerraform(struct!.routeTlsSecret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sa_annotations: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.saAnnotations),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    sa_labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.saLabels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    signing_job: {
      value: dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecSigningJobToHclTerraform(struct!.signingJob),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecSigningJob",
    },
    signing_scripts: {
      value: cdktf.stringToHclTerraform(struct!.signingScripts),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    signing_scripts_configmap: {
      value: cdktf.stringToHclTerraform(struct!.signingScriptsConfigmap),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    signing_secret: {
      value: cdktf.stringToHclTerraform(struct!.signingSecret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sso_secret: {
      value: cdktf.stringToHclTerraform(struct!.ssoSecret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    telemetry: {
      value: dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecTelemetryToHclTerraform(struct!.telemetry),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecTelemetry",
    },
    unmanaged: {
      value: cdktf.booleanToHclTerraform(struct!.unmanaged),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    web: {
      value: dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWebToHclTerraform(struct!.web),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWeb",
    },
    worker: {
      value: dataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerToHclTerraform(struct!.worker),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorker",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._adminPasswordJob?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.adminPasswordJob = this._adminPasswordJob?.internalValue;
    }
    if (this._adminPasswordSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.adminPasswordSecret = this._adminPasswordSecret;
    }
    if (this._allowedContentChecksums !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedContentChecksums = this._allowedContentChecksums;
    }
    if (this._api?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.api = this._api?.internalValue;
    }
    if (this._cache?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cache = this._cache?.internalValue;
    }
    if (this._containerAuthPrivateKeyName !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerAuthPrivateKeyName = this._containerAuthPrivateKeyName;
    }
    if (this._containerAuthPublicKeyName !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerAuthPublicKeyName = this._containerAuthPublicKeyName;
    }
    if (this._containerTokenSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerTokenSecret = this._containerTokenSecret;
    }
    if (this._content?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.content = this._content?.internalValue;
    }
    if (this._customPulpSettings !== undefined) {
      hasAnyValues = true;
      internalValueResult.customPulpSettings = this._customPulpSettings;
    }
    if (this._database?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.database = this._database?.internalValue;
    }
    if (this._dbFieldsEncryptionSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.dbFieldsEncryptionSecret = this._dbFieldsEncryptionSecret;
    }
    if (this._deployEeDefaults !== undefined) {
      hasAnyValues = true;
      internalValueResult.deployEeDefaults = this._deployEeDefaults;
    }
    if (this._deploymentType !== undefined) {
      hasAnyValues = true;
      internalValueResult.deploymentType = this._deploymentType;
    }
    if (this._disableMigrations !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableMigrations = this._disableMigrations;
    }
    if (this._eeDefaults !== undefined) {
      hasAnyValues = true;
      internalValueResult.eeDefaults = this._eeDefaults;
    }
    if (this._enableDebugging !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableDebugging = this._enableDebugging;
    }
    if (this._fileStorageAccessMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileStorageAccessMode = this._fileStorageAccessMode;
    }
    if (this._fileStorageSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileStorageSize = this._fileStorageSize;
    }
    if (this._fileStorageStorageClass !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileStorageStorageClass = this._fileStorageStorageClass;
    }
    if (this._haproxyTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.haproxyTimeout = this._haproxyTimeout;
    }
    if (this._image !== undefined) {
      hasAnyValues = true;
      internalValueResult.image = this._image;
    }
    if (this._imagePullPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.imagePullPolicy = this._imagePullPolicy;
    }
    if (this._imagePullSecrets !== undefined) {
      hasAnyValues = true;
      internalValueResult.imagePullSecrets = this._imagePullSecrets;
    }
    if (this._imageVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageVersion = this._imageVersion;
    }
    if (this._imageWeb !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageWeb = this._imageWeb;
    }
    if (this._imageWebVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageWebVersion = this._imageWebVersion;
    }
    if (this._ingressAnnotations !== undefined) {
      hasAnyValues = true;
      internalValueResult.ingressAnnotations = this._ingressAnnotations;
    }
    if (this._ingressClassName !== undefined) {
      hasAnyValues = true;
      internalValueResult.ingressClassName = this._ingressClassName;
    }
    if (this._ingressHost !== undefined) {
      hasAnyValues = true;
      internalValueResult.ingressHost = this._ingressHost;
    }
    if (this._ingressTlsSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.ingressTlsSecret = this._ingressTlsSecret;
    }
    if (this._ingressType !== undefined) {
      hasAnyValues = true;
      internalValueResult.ingressType = this._ingressType;
    }
    if (this._inhibitVersionConstraint !== undefined) {
      hasAnyValues = true;
      internalValueResult.inhibitVersionConstraint = this._inhibitVersionConstraint;
    }
    if (this._ipv6Disabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6Disabled = this._ipv6Disabled;
    }
    if (this._isNginxIngress !== undefined) {
      hasAnyValues = true;
      internalValueResult.isNginxIngress = this._isNginxIngress;
    }
    if (this._ldap?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ldap = this._ldap?.internalValue;
    }
    if (this._loadbalancerPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.loadbalancerPort = this._loadbalancerPort;
    }
    if (this._loadbalancerProtocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.loadbalancerProtocol = this._loadbalancerProtocol;
    }
    if (this._migrationJob?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.migrationJob = this._migrationJob?.internalValue;
    }
    if (this._mountTrustedCa !== undefined) {
      hasAnyValues = true;
      internalValueResult.mountTrustedCa = this._mountTrustedCa;
    }
    if (this._nginxClientMaxBodySize !== undefined) {
      hasAnyValues = true;
      internalValueResult.nginxClientMaxBodySize = this._nginxClientMaxBodySize;
    }
    if (this._nginxProxyBodySize !== undefined) {
      hasAnyValues = true;
      internalValueResult.nginxProxyBodySize = this._nginxProxyBodySize;
    }
    if (this._nginxProxyConnectTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.nginxProxyConnectTimeout = this._nginxProxyConnectTimeout;
    }
    if (this._nginxProxyReadTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.nginxProxyReadTimeout = this._nginxProxyReadTimeout;
    }
    if (this._nginxProxySendTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.nginxProxySendTimeout = this._nginxProxySendTimeout;
    }
    if (this._nodeportPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeportPort = this._nodeportPort;
    }
    if (this._objectStorageAzureSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectStorageAzureSecret = this._objectStorageAzureSecret;
    }
    if (this._objectStorageS3Secret !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectStorageS3Secret = this._objectStorageS3Secret;
    }
    if (this._pulpSecretKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.pulpSecretKey = this._pulpSecretKey;
    }
    if (this._pulpSettings !== undefined) {
      hasAnyValues = true;
      internalValueResult.pulpSettings = this._pulpSettings;
    }
    if (this._pvc !== undefined) {
      hasAnyValues = true;
      internalValueResult.pvc = this._pvc;
    }
    if (this._routeAnnotations !== undefined) {
      hasAnyValues = true;
      internalValueResult.routeAnnotations = this._routeAnnotations;
    }
    if (this._routeHost !== undefined) {
      hasAnyValues = true;
      internalValueResult.routeHost = this._routeHost;
    }
    if (this._routeLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.routeLabels = this._routeLabels;
    }
    if (this._routeTlsSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.routeTlsSecret = this._routeTlsSecret;
    }
    if (this._saAnnotations !== undefined) {
      hasAnyValues = true;
      internalValueResult.saAnnotations = this._saAnnotations;
    }
    if (this._saLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.saLabels = this._saLabels;
    }
    if (this._signingJob?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.signingJob = this._signingJob?.internalValue;
    }
    if (this._signingScripts !== undefined) {
      hasAnyValues = true;
      internalValueResult.signingScripts = this._signingScripts;
    }
    if (this._signingScriptsConfigmap !== undefined) {
      hasAnyValues = true;
      internalValueResult.signingScriptsConfigmap = this._signingScriptsConfigmap;
    }
    if (this._signingSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.signingSecret = this._signingSecret;
    }
    if (this._ssoSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.ssoSecret = this._ssoSecret;
    }
    if (this._telemetry?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.telemetry = this._telemetry?.internalValue;
    }
    if (this._unmanaged !== undefined) {
      hasAnyValues = true;
      internalValueResult.unmanaged = this._unmanaged;
    }
    if (this._web?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.web = this._web?.internalValue;
    }
    if (this._worker?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.worker = this._worker?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._adminPasswordJob.internalValue = undefined;
      this._adminPasswordSecret = undefined;
      this._allowedContentChecksums = undefined;
      this._api.internalValue = undefined;
      this._cache.internalValue = undefined;
      this._containerAuthPrivateKeyName = undefined;
      this._containerAuthPublicKeyName = undefined;
      this._containerTokenSecret = undefined;
      this._content.internalValue = undefined;
      this._customPulpSettings = undefined;
      this._database.internalValue = undefined;
      this._dbFieldsEncryptionSecret = undefined;
      this._deployEeDefaults = undefined;
      this._deploymentType = undefined;
      this._disableMigrations = undefined;
      this._eeDefaults = undefined;
      this._enableDebugging = undefined;
      this._fileStorageAccessMode = undefined;
      this._fileStorageSize = undefined;
      this._fileStorageStorageClass = undefined;
      this._haproxyTimeout = undefined;
      this._image = undefined;
      this._imagePullPolicy = undefined;
      this._imagePullSecrets = undefined;
      this._imageVersion = undefined;
      this._imageWeb = undefined;
      this._imageWebVersion = undefined;
      this._ingressAnnotations = undefined;
      this._ingressClassName = undefined;
      this._ingressHost = undefined;
      this._ingressTlsSecret = undefined;
      this._ingressType = undefined;
      this._inhibitVersionConstraint = undefined;
      this._ipv6Disabled = undefined;
      this._isNginxIngress = undefined;
      this._ldap.internalValue = undefined;
      this._loadbalancerPort = undefined;
      this._loadbalancerProtocol = undefined;
      this._migrationJob.internalValue = undefined;
      this._mountTrustedCa = undefined;
      this._nginxClientMaxBodySize = undefined;
      this._nginxProxyBodySize = undefined;
      this._nginxProxyConnectTimeout = undefined;
      this._nginxProxyReadTimeout = undefined;
      this._nginxProxySendTimeout = undefined;
      this._nodeportPort = undefined;
      this._objectStorageAzureSecret = undefined;
      this._objectStorageS3Secret = undefined;
      this._pulpSecretKey = undefined;
      this._pulpSettings = undefined;
      this._pvc = undefined;
      this._routeAnnotations = undefined;
      this._routeHost = undefined;
      this._routeLabels = undefined;
      this._routeTlsSecret = undefined;
      this._saAnnotations = undefined;
      this._saLabels = undefined;
      this._signingJob.internalValue = undefined;
      this._signingScripts = undefined;
      this._signingScriptsConfigmap = undefined;
      this._signingSecret = undefined;
      this._ssoSecret = undefined;
      this._telemetry.internalValue = undefined;
      this._unmanaged = undefined;
      this._web.internalValue = undefined;
      this._worker.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._adminPasswordJob.internalValue = value.adminPasswordJob;
      this._adminPasswordSecret = value.adminPasswordSecret;
      this._allowedContentChecksums = value.allowedContentChecksums;
      this._api.internalValue = value.api;
      this._cache.internalValue = value.cache;
      this._containerAuthPrivateKeyName = value.containerAuthPrivateKeyName;
      this._containerAuthPublicKeyName = value.containerAuthPublicKeyName;
      this._containerTokenSecret = value.containerTokenSecret;
      this._content.internalValue = value.content;
      this._customPulpSettings = value.customPulpSettings;
      this._database.internalValue = value.database;
      this._dbFieldsEncryptionSecret = value.dbFieldsEncryptionSecret;
      this._deployEeDefaults = value.deployEeDefaults;
      this._deploymentType = value.deploymentType;
      this._disableMigrations = value.disableMigrations;
      this._eeDefaults = value.eeDefaults;
      this._enableDebugging = value.enableDebugging;
      this._fileStorageAccessMode = value.fileStorageAccessMode;
      this._fileStorageSize = value.fileStorageSize;
      this._fileStorageStorageClass = value.fileStorageStorageClass;
      this._haproxyTimeout = value.haproxyTimeout;
      this._image = value.image;
      this._imagePullPolicy = value.imagePullPolicy;
      this._imagePullSecrets = value.imagePullSecrets;
      this._imageVersion = value.imageVersion;
      this._imageWeb = value.imageWeb;
      this._imageWebVersion = value.imageWebVersion;
      this._ingressAnnotations = value.ingressAnnotations;
      this._ingressClassName = value.ingressClassName;
      this._ingressHost = value.ingressHost;
      this._ingressTlsSecret = value.ingressTlsSecret;
      this._ingressType = value.ingressType;
      this._inhibitVersionConstraint = value.inhibitVersionConstraint;
      this._ipv6Disabled = value.ipv6Disabled;
      this._isNginxIngress = value.isNginxIngress;
      this._ldap.internalValue = value.ldap;
      this._loadbalancerPort = value.loadbalancerPort;
      this._loadbalancerProtocol = value.loadbalancerProtocol;
      this._migrationJob.internalValue = value.migrationJob;
      this._mountTrustedCa = value.mountTrustedCa;
      this._nginxClientMaxBodySize = value.nginxClientMaxBodySize;
      this._nginxProxyBodySize = value.nginxProxyBodySize;
      this._nginxProxyConnectTimeout = value.nginxProxyConnectTimeout;
      this._nginxProxyReadTimeout = value.nginxProxyReadTimeout;
      this._nginxProxySendTimeout = value.nginxProxySendTimeout;
      this._nodeportPort = value.nodeportPort;
      this._objectStorageAzureSecret = value.objectStorageAzureSecret;
      this._objectStorageS3Secret = value.objectStorageS3Secret;
      this._pulpSecretKey = value.pulpSecretKey;
      this._pulpSettings = value.pulpSettings;
      this._pvc = value.pvc;
      this._routeAnnotations = value.routeAnnotations;
      this._routeHost = value.routeHost;
      this._routeLabels = value.routeLabels;
      this._routeTlsSecret = value.routeTlsSecret;
      this._saAnnotations = value.saAnnotations;
      this._saLabels = value.saLabels;
      this._signingJob.internalValue = value.signingJob;
      this._signingScripts = value.signingScripts;
      this._signingScriptsConfigmap = value.signingScriptsConfigmap;
      this._signingSecret = value.signingSecret;
      this._ssoSecret = value.ssoSecret;
      this._telemetry.internalValue = value.telemetry;
      this._unmanaged = value.unmanaged;
      this._web.internalValue = value.web;
      this._worker.internalValue = value.worker;
    }
  }

  // admin_password_job - computed: false, optional: true, required: false
  private _adminPasswordJob = new DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecAdminPasswordJobOutputReference(this, "admin_password_job");
  public get adminPasswordJob() {
    return this._adminPasswordJob;
  }
  public putAdminPasswordJob(value: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecAdminPasswordJob) {
    this._adminPasswordJob.internalValue = value;
  }
  public resetAdminPasswordJob() {
    this._adminPasswordJob.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminPasswordJobInput() {
    return this._adminPasswordJob.internalValue;
  }

  // admin_password_secret - computed: false, optional: true, required: false
  private _adminPasswordSecret?: string; 
  public get adminPasswordSecret() {
    return this.getStringAttribute('admin_password_secret');
  }
  public set adminPasswordSecret(value: string) {
    this._adminPasswordSecret = value;
  }
  public resetAdminPasswordSecret() {
    this._adminPasswordSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminPasswordSecretInput() {
    return this._adminPasswordSecret;
  }

  // allowed_content_checksums - computed: false, optional: true, required: false
  private _allowedContentChecksums?: string[]; 
  public get allowedContentChecksums() {
    return this.getListAttribute('allowed_content_checksums');
  }
  public set allowedContentChecksums(value: string[]) {
    this._allowedContentChecksums = value;
  }
  public resetAllowedContentChecksums() {
    this._allowedContentChecksums = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedContentChecksumsInput() {
    return this._allowedContentChecksums;
  }

  // api - computed: false, optional: false, required: true
  private _api = new DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecApiOutputReference(this, "api");
  public get api() {
    return this._api;
  }
  public putApi(value: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecApi) {
    this._api.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiInput() {
    return this._api.internalValue;
  }

  // cache - computed: false, optional: true, required: false
  private _cache = new DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecCacheOutputReference(this, "cache");
  public get cache() {
    return this._cache;
  }
  public putCache(value: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecCache) {
    this._cache.internalValue = value;
  }
  public resetCache() {
    this._cache.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheInput() {
    return this._cache.internalValue;
  }

  // container_auth_private_key_name - computed: false, optional: true, required: false
  private _containerAuthPrivateKeyName?: string; 
  public get containerAuthPrivateKeyName() {
    return this.getStringAttribute('container_auth_private_key_name');
  }
  public set containerAuthPrivateKeyName(value: string) {
    this._containerAuthPrivateKeyName = value;
  }
  public resetContainerAuthPrivateKeyName() {
    this._containerAuthPrivateKeyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerAuthPrivateKeyNameInput() {
    return this._containerAuthPrivateKeyName;
  }

  // container_auth_public_key_name - computed: false, optional: true, required: false
  private _containerAuthPublicKeyName?: string; 
  public get containerAuthPublicKeyName() {
    return this.getStringAttribute('container_auth_public_key_name');
  }
  public set containerAuthPublicKeyName(value: string) {
    this._containerAuthPublicKeyName = value;
  }
  public resetContainerAuthPublicKeyName() {
    this._containerAuthPublicKeyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerAuthPublicKeyNameInput() {
    return this._containerAuthPublicKeyName;
  }

  // container_token_secret - computed: false, optional: true, required: false
  private _containerTokenSecret?: string; 
  public get containerTokenSecret() {
    return this.getStringAttribute('container_token_secret');
  }
  public set containerTokenSecret(value: string) {
    this._containerTokenSecret = value;
  }
  public resetContainerTokenSecret() {
    this._containerTokenSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerTokenSecretInput() {
    return this._containerTokenSecret;
  }

  // content - computed: false, optional: true, required: false
  private _content = new DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecContentOutputReference(this, "content");
  public get content() {
    return this._content;
  }
  public putContent(value: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecContent) {
    this._content.internalValue = value;
  }
  public resetContent() {
    this._content.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentInput() {
    return this._content.internalValue;
  }

  // custom_pulp_settings - computed: false, optional: true, required: false
  private _customPulpSettings?: string; 
  public get customPulpSettings() {
    return this.getStringAttribute('custom_pulp_settings');
  }
  public set customPulpSettings(value: string) {
    this._customPulpSettings = value;
  }
  public resetCustomPulpSettings() {
    this._customPulpSettings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customPulpSettingsInput() {
    return this._customPulpSettings;
  }

  // database - computed: false, optional: true, required: false
  private _database = new DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecDatabaseOutputReference(this, "database");
  public get database() {
    return this._database;
  }
  public putDatabase(value: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecDatabase) {
    this._database.internalValue = value;
  }
  public resetDatabase() {
    this._database.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseInput() {
    return this._database.internalValue;
  }

  // db_fields_encryption_secret - computed: false, optional: true, required: false
  private _dbFieldsEncryptionSecret?: string; 
  public get dbFieldsEncryptionSecret() {
    return this.getStringAttribute('db_fields_encryption_secret');
  }
  public set dbFieldsEncryptionSecret(value: string) {
    this._dbFieldsEncryptionSecret = value;
  }
  public resetDbFieldsEncryptionSecret() {
    this._dbFieldsEncryptionSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbFieldsEncryptionSecretInput() {
    return this._dbFieldsEncryptionSecret;
  }

  // deploy_ee_defaults - computed: false, optional: true, required: false
  private _deployEeDefaults?: boolean | cdktf.IResolvable; 
  public get deployEeDefaults() {
    return this.getBooleanAttribute('deploy_ee_defaults');
  }
  public set deployEeDefaults(value: boolean | cdktf.IResolvable) {
    this._deployEeDefaults = value;
  }
  public resetDeployEeDefaults() {
    this._deployEeDefaults = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deployEeDefaultsInput() {
    return this._deployEeDefaults;
  }

  // deployment_type - computed: false, optional: true, required: false
  private _deploymentType?: string; 
  public get deploymentType() {
    return this.getStringAttribute('deployment_type');
  }
  public set deploymentType(value: string) {
    this._deploymentType = value;
  }
  public resetDeploymentType() {
    this._deploymentType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deploymentTypeInput() {
    return this._deploymentType;
  }

  // disable_migrations - computed: false, optional: true, required: false
  private _disableMigrations?: boolean | cdktf.IResolvable; 
  public get disableMigrations() {
    return this.getBooleanAttribute('disable_migrations');
  }
  public set disableMigrations(value: boolean | cdktf.IResolvable) {
    this._disableMigrations = value;
  }
  public resetDisableMigrations() {
    this._disableMigrations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableMigrationsInput() {
    return this._disableMigrations;
  }

  // ee_defaults - computed: false, optional: true, required: false
  private _eeDefaults?: string; 
  public get eeDefaults() {
    return this.getStringAttribute('ee_defaults');
  }
  public set eeDefaults(value: string) {
    this._eeDefaults = value;
  }
  public resetEeDefaults() {
    this._eeDefaults = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eeDefaultsInput() {
    return this._eeDefaults;
  }

  // enable_debugging - computed: false, optional: true, required: false
  private _enableDebugging?: boolean | cdktf.IResolvable; 
  public get enableDebugging() {
    return this.getBooleanAttribute('enable_debugging');
  }
  public set enableDebugging(value: boolean | cdktf.IResolvable) {
    this._enableDebugging = value;
  }
  public resetEnableDebugging() {
    this._enableDebugging = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableDebuggingInput() {
    return this._enableDebugging;
  }

  // file_storage_access_mode - computed: false, optional: true, required: false
  private _fileStorageAccessMode?: string; 
  public get fileStorageAccessMode() {
    return this.getStringAttribute('file_storage_access_mode');
  }
  public set fileStorageAccessMode(value: string) {
    this._fileStorageAccessMode = value;
  }
  public resetFileStorageAccessMode() {
    this._fileStorageAccessMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileStorageAccessModeInput() {
    return this._fileStorageAccessMode;
  }

  // file_storage_size - computed: false, optional: true, required: false
  private _fileStorageSize?: string; 
  public get fileStorageSize() {
    return this.getStringAttribute('file_storage_size');
  }
  public set fileStorageSize(value: string) {
    this._fileStorageSize = value;
  }
  public resetFileStorageSize() {
    this._fileStorageSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileStorageSizeInput() {
    return this._fileStorageSize;
  }

  // file_storage_storage_class - computed: false, optional: true, required: false
  private _fileStorageStorageClass?: string; 
  public get fileStorageStorageClass() {
    return this.getStringAttribute('file_storage_storage_class');
  }
  public set fileStorageStorageClass(value: string) {
    this._fileStorageStorageClass = value;
  }
  public resetFileStorageStorageClass() {
    this._fileStorageStorageClass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileStorageStorageClassInput() {
    return this._fileStorageStorageClass;
  }

  // haproxy_timeout - computed: false, optional: true, required: false
  private _haproxyTimeout?: string; 
  public get haproxyTimeout() {
    return this.getStringAttribute('haproxy_timeout');
  }
  public set haproxyTimeout(value: string) {
    this._haproxyTimeout = value;
  }
  public resetHaproxyTimeout() {
    this._haproxyTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get haproxyTimeoutInput() {
    return this._haproxyTimeout;
  }

  // image - computed: false, optional: true, required: false
  private _image?: string; 
  public get image() {
    return this.getStringAttribute('image');
  }
  public set image(value: string) {
    this._image = value;
  }
  public resetImage() {
    this._image = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageInput() {
    return this._image;
  }

  // image_pull_policy - computed: false, optional: true, required: false
  private _imagePullPolicy?: string; 
  public get imagePullPolicy() {
    return this.getStringAttribute('image_pull_policy');
  }
  public set imagePullPolicy(value: string) {
    this._imagePullPolicy = value;
  }
  public resetImagePullPolicy() {
    this._imagePullPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imagePullPolicyInput() {
    return this._imagePullPolicy;
  }

  // image_pull_secrets - computed: false, optional: true, required: false
  private _imagePullSecrets?: string[]; 
  public get imagePullSecrets() {
    return this.getListAttribute('image_pull_secrets');
  }
  public set imagePullSecrets(value: string[]) {
    this._imagePullSecrets = value;
  }
  public resetImagePullSecrets() {
    this._imagePullSecrets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imagePullSecretsInput() {
    return this._imagePullSecrets;
  }

  // image_version - computed: false, optional: true, required: false
  private _imageVersion?: string; 
  public get imageVersion() {
    return this.getStringAttribute('image_version');
  }
  public set imageVersion(value: string) {
    this._imageVersion = value;
  }
  public resetImageVersion() {
    this._imageVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageVersionInput() {
    return this._imageVersion;
  }

  // image_web - computed: false, optional: true, required: false
  private _imageWeb?: string; 
  public get imageWeb() {
    return this.getStringAttribute('image_web');
  }
  public set imageWeb(value: string) {
    this._imageWeb = value;
  }
  public resetImageWeb() {
    this._imageWeb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageWebInput() {
    return this._imageWeb;
  }

  // image_web_version - computed: false, optional: true, required: false
  private _imageWebVersion?: string; 
  public get imageWebVersion() {
    return this.getStringAttribute('image_web_version');
  }
  public set imageWebVersion(value: string) {
    this._imageWebVersion = value;
  }
  public resetImageWebVersion() {
    this._imageWebVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageWebVersionInput() {
    return this._imageWebVersion;
  }

  // ingress_annotations - computed: false, optional: true, required: false
  private _ingressAnnotations?: { [key: string]: string }; 
  public get ingressAnnotations() {
    return this.getStringMapAttribute('ingress_annotations');
  }
  public set ingressAnnotations(value: { [key: string]: string }) {
    this._ingressAnnotations = value;
  }
  public resetIngressAnnotations() {
    this._ingressAnnotations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ingressAnnotationsInput() {
    return this._ingressAnnotations;
  }

  // ingress_class_name - computed: false, optional: true, required: false
  private _ingressClassName?: string; 
  public get ingressClassName() {
    return this.getStringAttribute('ingress_class_name');
  }
  public set ingressClassName(value: string) {
    this._ingressClassName = value;
  }
  public resetIngressClassName() {
    this._ingressClassName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ingressClassNameInput() {
    return this._ingressClassName;
  }

  // ingress_host - computed: false, optional: true, required: false
  private _ingressHost?: string; 
  public get ingressHost() {
    return this.getStringAttribute('ingress_host');
  }
  public set ingressHost(value: string) {
    this._ingressHost = value;
  }
  public resetIngressHost() {
    this._ingressHost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ingressHostInput() {
    return this._ingressHost;
  }

  // ingress_tls_secret - computed: false, optional: true, required: false
  private _ingressTlsSecret?: string; 
  public get ingressTlsSecret() {
    return this.getStringAttribute('ingress_tls_secret');
  }
  public set ingressTlsSecret(value: string) {
    this._ingressTlsSecret = value;
  }
  public resetIngressTlsSecret() {
    this._ingressTlsSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ingressTlsSecretInput() {
    return this._ingressTlsSecret;
  }

  // ingress_type - computed: false, optional: true, required: false
  private _ingressType?: string; 
  public get ingressType() {
    return this.getStringAttribute('ingress_type');
  }
  public set ingressType(value: string) {
    this._ingressType = value;
  }
  public resetIngressType() {
    this._ingressType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ingressTypeInput() {
    return this._ingressType;
  }

  // inhibit_version_constraint - computed: false, optional: true, required: false
  private _inhibitVersionConstraint?: boolean | cdktf.IResolvable; 
  public get inhibitVersionConstraint() {
    return this.getBooleanAttribute('inhibit_version_constraint');
  }
  public set inhibitVersionConstraint(value: boolean | cdktf.IResolvable) {
    this._inhibitVersionConstraint = value;
  }
  public resetInhibitVersionConstraint() {
    this._inhibitVersionConstraint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inhibitVersionConstraintInput() {
    return this._inhibitVersionConstraint;
  }

  // ipv6_disabled - computed: false, optional: true, required: false
  private _ipv6Disabled?: boolean | cdktf.IResolvable; 
  public get ipv6Disabled() {
    return this.getBooleanAttribute('ipv6_disabled');
  }
  public set ipv6Disabled(value: boolean | cdktf.IResolvable) {
    this._ipv6Disabled = value;
  }
  public resetIpv6Disabled() {
    this._ipv6Disabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6DisabledInput() {
    return this._ipv6Disabled;
  }

  // is_nginx_ingress - computed: false, optional: true, required: false
  private _isNginxIngress?: boolean | cdktf.IResolvable; 
  public get isNginxIngress() {
    return this.getBooleanAttribute('is_nginx_ingress');
  }
  public set isNginxIngress(value: boolean | cdktf.IResolvable) {
    this._isNginxIngress = value;
  }
  public resetIsNginxIngress() {
    this._isNginxIngress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isNginxIngressInput() {
    return this._isNginxIngress;
  }

  // ldap - computed: false, optional: true, required: false
  private _ldap = new DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecLdapOutputReference(this, "ldap");
  public get ldap() {
    return this._ldap;
  }
  public putLdap(value: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecLdap) {
    this._ldap.internalValue = value;
  }
  public resetLdap() {
    this._ldap.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ldapInput() {
    return this._ldap.internalValue;
  }

  // loadbalancer_port - computed: false, optional: true, required: false
  private _loadbalancerPort?: number; 
  public get loadbalancerPort() {
    return this.getNumberAttribute('loadbalancer_port');
  }
  public set loadbalancerPort(value: number) {
    this._loadbalancerPort = value;
  }
  public resetLoadbalancerPort() {
    this._loadbalancerPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loadbalancerPortInput() {
    return this._loadbalancerPort;
  }

  // loadbalancer_protocol - computed: false, optional: true, required: false
  private _loadbalancerProtocol?: string; 
  public get loadbalancerProtocol() {
    return this.getStringAttribute('loadbalancer_protocol');
  }
  public set loadbalancerProtocol(value: string) {
    this._loadbalancerProtocol = value;
  }
  public resetLoadbalancerProtocol() {
    this._loadbalancerProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loadbalancerProtocolInput() {
    return this._loadbalancerProtocol;
  }

  // migration_job - computed: false, optional: true, required: false
  private _migrationJob = new DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecMigrationJobOutputReference(this, "migration_job");
  public get migrationJob() {
    return this._migrationJob;
  }
  public putMigrationJob(value: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecMigrationJob) {
    this._migrationJob.internalValue = value;
  }
  public resetMigrationJob() {
    this._migrationJob.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get migrationJobInput() {
    return this._migrationJob.internalValue;
  }

  // mount_trusted_ca - computed: false, optional: true, required: false
  private _mountTrustedCa?: boolean | cdktf.IResolvable; 
  public get mountTrustedCa() {
    return this.getBooleanAttribute('mount_trusted_ca');
  }
  public set mountTrustedCa(value: boolean | cdktf.IResolvable) {
    this._mountTrustedCa = value;
  }
  public resetMountTrustedCa() {
    this._mountTrustedCa = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mountTrustedCaInput() {
    return this._mountTrustedCa;
  }

  // nginx_client_max_body_size - computed: false, optional: true, required: false
  private _nginxClientMaxBodySize?: string; 
  public get nginxClientMaxBodySize() {
    return this.getStringAttribute('nginx_client_max_body_size');
  }
  public set nginxClientMaxBodySize(value: string) {
    this._nginxClientMaxBodySize = value;
  }
  public resetNginxClientMaxBodySize() {
    this._nginxClientMaxBodySize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nginxClientMaxBodySizeInput() {
    return this._nginxClientMaxBodySize;
  }

  // nginx_proxy_body_size - computed: false, optional: true, required: false
  private _nginxProxyBodySize?: string; 
  public get nginxProxyBodySize() {
    return this.getStringAttribute('nginx_proxy_body_size');
  }
  public set nginxProxyBodySize(value: string) {
    this._nginxProxyBodySize = value;
  }
  public resetNginxProxyBodySize() {
    this._nginxProxyBodySize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nginxProxyBodySizeInput() {
    return this._nginxProxyBodySize;
  }

  // nginx_proxy_connect_timeout - computed: false, optional: true, required: false
  private _nginxProxyConnectTimeout?: string; 
  public get nginxProxyConnectTimeout() {
    return this.getStringAttribute('nginx_proxy_connect_timeout');
  }
  public set nginxProxyConnectTimeout(value: string) {
    this._nginxProxyConnectTimeout = value;
  }
  public resetNginxProxyConnectTimeout() {
    this._nginxProxyConnectTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nginxProxyConnectTimeoutInput() {
    return this._nginxProxyConnectTimeout;
  }

  // nginx_proxy_read_timeout - computed: false, optional: true, required: false
  private _nginxProxyReadTimeout?: string; 
  public get nginxProxyReadTimeout() {
    return this.getStringAttribute('nginx_proxy_read_timeout');
  }
  public set nginxProxyReadTimeout(value: string) {
    this._nginxProxyReadTimeout = value;
  }
  public resetNginxProxyReadTimeout() {
    this._nginxProxyReadTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nginxProxyReadTimeoutInput() {
    return this._nginxProxyReadTimeout;
  }

  // nginx_proxy_send_timeout - computed: false, optional: true, required: false
  private _nginxProxySendTimeout?: string; 
  public get nginxProxySendTimeout() {
    return this.getStringAttribute('nginx_proxy_send_timeout');
  }
  public set nginxProxySendTimeout(value: string) {
    this._nginxProxySendTimeout = value;
  }
  public resetNginxProxySendTimeout() {
    this._nginxProxySendTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nginxProxySendTimeoutInput() {
    return this._nginxProxySendTimeout;
  }

  // nodeport_port - computed: false, optional: true, required: false
  private _nodeportPort?: number; 
  public get nodeportPort() {
    return this.getNumberAttribute('nodeport_port');
  }
  public set nodeportPort(value: number) {
    this._nodeportPort = value;
  }
  public resetNodeportPort() {
    this._nodeportPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeportPortInput() {
    return this._nodeportPort;
  }

  // object_storage_azure_secret - computed: false, optional: true, required: false
  private _objectStorageAzureSecret?: string; 
  public get objectStorageAzureSecret() {
    return this.getStringAttribute('object_storage_azure_secret');
  }
  public set objectStorageAzureSecret(value: string) {
    this._objectStorageAzureSecret = value;
  }
  public resetObjectStorageAzureSecret() {
    this._objectStorageAzureSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectStorageAzureSecretInput() {
    return this._objectStorageAzureSecret;
  }

  // object_storage_s3_secret - computed: false, optional: true, required: false
  private _objectStorageS3Secret?: string; 
  public get objectStorageS3Secret() {
    return this.getStringAttribute('object_storage_s3_secret');
  }
  public set objectStorageS3Secret(value: string) {
    this._objectStorageS3Secret = value;
  }
  public resetObjectStorageS3Secret() {
    this._objectStorageS3Secret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectStorageS3SecretInput() {
    return this._objectStorageS3Secret;
  }

  // pulp_secret_key - computed: false, optional: true, required: false
  private _pulpSecretKey?: string; 
  public get pulpSecretKey() {
    return this.getStringAttribute('pulp_secret_key');
  }
  public set pulpSecretKey(value: string) {
    this._pulpSecretKey = value;
  }
  public resetPulpSecretKey() {
    this._pulpSecretKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pulpSecretKeyInput() {
    return this._pulpSecretKey;
  }

  // pulp_settings - computed: false, optional: true, required: false
  private _pulpSettings?: { [key: string]: string }; 
  public get pulpSettings() {
    return this.getStringMapAttribute('pulp_settings');
  }
  public set pulpSettings(value: { [key: string]: string }) {
    this._pulpSettings = value;
  }
  public resetPulpSettings() {
    this._pulpSettings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pulpSettingsInput() {
    return this._pulpSettings;
  }

  // pvc - computed: false, optional: true, required: false
  private _pvc?: string; 
  public get pvc() {
    return this.getStringAttribute('pvc');
  }
  public set pvc(value: string) {
    this._pvc = value;
  }
  public resetPvc() {
    this._pvc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pvcInput() {
    return this._pvc;
  }

  // route_annotations - computed: false, optional: true, required: false
  private _routeAnnotations?: { [key: string]: string }; 
  public get routeAnnotations() {
    return this.getStringMapAttribute('route_annotations');
  }
  public set routeAnnotations(value: { [key: string]: string }) {
    this._routeAnnotations = value;
  }
  public resetRouteAnnotations() {
    this._routeAnnotations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeAnnotationsInput() {
    return this._routeAnnotations;
  }

  // route_host - computed: false, optional: true, required: false
  private _routeHost?: string; 
  public get routeHost() {
    return this.getStringAttribute('route_host');
  }
  public set routeHost(value: string) {
    this._routeHost = value;
  }
  public resetRouteHost() {
    this._routeHost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeHostInput() {
    return this._routeHost;
  }

  // route_labels - computed: false, optional: true, required: false
  private _routeLabels?: { [key: string]: string }; 
  public get routeLabels() {
    return this.getStringMapAttribute('route_labels');
  }
  public set routeLabels(value: { [key: string]: string }) {
    this._routeLabels = value;
  }
  public resetRouteLabels() {
    this._routeLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeLabelsInput() {
    return this._routeLabels;
  }

  // route_tls_secret - computed: false, optional: true, required: false
  private _routeTlsSecret?: string; 
  public get routeTlsSecret() {
    return this.getStringAttribute('route_tls_secret');
  }
  public set routeTlsSecret(value: string) {
    this._routeTlsSecret = value;
  }
  public resetRouteTlsSecret() {
    this._routeTlsSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeTlsSecretInput() {
    return this._routeTlsSecret;
  }

  // sa_annotations - computed: false, optional: true, required: false
  private _saAnnotations?: { [key: string]: string }; 
  public get saAnnotations() {
    return this.getStringMapAttribute('sa_annotations');
  }
  public set saAnnotations(value: { [key: string]: string }) {
    this._saAnnotations = value;
  }
  public resetSaAnnotations() {
    this._saAnnotations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get saAnnotationsInput() {
    return this._saAnnotations;
  }

  // sa_labels - computed: false, optional: true, required: false
  private _saLabels?: { [key: string]: string }; 
  public get saLabels() {
    return this.getStringMapAttribute('sa_labels');
  }
  public set saLabels(value: { [key: string]: string }) {
    this._saLabels = value;
  }
  public resetSaLabels() {
    this._saLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get saLabelsInput() {
    return this._saLabels;
  }

  // signing_job - computed: false, optional: true, required: false
  private _signingJob = new DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecSigningJobOutputReference(this, "signing_job");
  public get signingJob() {
    return this._signingJob;
  }
  public putSigningJob(value: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecSigningJob) {
    this._signingJob.internalValue = value;
  }
  public resetSigningJob() {
    this._signingJob.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get signingJobInput() {
    return this._signingJob.internalValue;
  }

  // signing_scripts - computed: false, optional: true, required: false
  private _signingScripts?: string; 
  public get signingScripts() {
    return this.getStringAttribute('signing_scripts');
  }
  public set signingScripts(value: string) {
    this._signingScripts = value;
  }
  public resetSigningScripts() {
    this._signingScripts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get signingScriptsInput() {
    return this._signingScripts;
  }

  // signing_scripts_configmap - computed: false, optional: true, required: false
  private _signingScriptsConfigmap?: string; 
  public get signingScriptsConfigmap() {
    return this.getStringAttribute('signing_scripts_configmap');
  }
  public set signingScriptsConfigmap(value: string) {
    this._signingScriptsConfigmap = value;
  }
  public resetSigningScriptsConfigmap() {
    this._signingScriptsConfigmap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get signingScriptsConfigmapInput() {
    return this._signingScriptsConfigmap;
  }

  // signing_secret - computed: false, optional: true, required: false
  private _signingSecret?: string; 
  public get signingSecret() {
    return this.getStringAttribute('signing_secret');
  }
  public set signingSecret(value: string) {
    this._signingSecret = value;
  }
  public resetSigningSecret() {
    this._signingSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get signingSecretInput() {
    return this._signingSecret;
  }

  // sso_secret - computed: false, optional: true, required: false
  private _ssoSecret?: string; 
  public get ssoSecret() {
    return this.getStringAttribute('sso_secret');
  }
  public set ssoSecret(value: string) {
    this._ssoSecret = value;
  }
  public resetSsoSecret() {
    this._ssoSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ssoSecretInput() {
    return this._ssoSecret;
  }

  // telemetry - computed: false, optional: true, required: false
  private _telemetry = new DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecTelemetryOutputReference(this, "telemetry");
  public get telemetry() {
    return this._telemetry;
  }
  public putTelemetry(value: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecTelemetry) {
    this._telemetry.internalValue = value;
  }
  public resetTelemetry() {
    this._telemetry.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get telemetryInput() {
    return this._telemetry.internalValue;
  }

  // unmanaged - computed: false, optional: true, required: false
  private _unmanaged?: boolean | cdktf.IResolvable; 
  public get unmanaged() {
    return this.getBooleanAttribute('unmanaged');
  }
  public set unmanaged(value: boolean | cdktf.IResolvable) {
    this._unmanaged = value;
  }
  public resetUnmanaged() {
    this._unmanaged = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unmanagedInput() {
    return this._unmanaged;
  }

  // web - computed: false, optional: true, required: false
  private _web = new DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWebOutputReference(this, "web");
  public get web() {
    return this._web;
  }
  public putWeb(value: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWeb) {
    this._web.internalValue = value;
  }
  public resetWeb() {
    this._web.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webInput() {
    return this._web.internalValue;
  }

  // worker - computed: false, optional: true, required: false
  private _worker = new DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorkerOutputReference(this, "worker");
  public get worker() {
    return this._worker;
  }
  public putWorker(value: DataK8SRepoManagerPulpprojectOrgPulpV1Beta2ManifestSpecWorker) {
    this._worker.internalValue = value;
  }
  public resetWorker() {
    this._worker.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workerInput() {
    return this._worker.internalValue;
  }
}
