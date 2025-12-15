import * as cdktf from 'cdktf';
import { DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsReadinessProbeExec,
dataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsReadinessProbeExecToTerraform,
dataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsReadinessProbeExecToHclTerraform,
DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsReadinessProbeExecOutputReference,
DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsEnv,
dataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsEnvToTerraform,
dataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsEnvToHclTerraform,
DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsEnvList,
DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsEnvFrom,
dataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsEnvFromToTerraform,
dataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsEnvFromToHclTerraform,
DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsEnvFromList,
DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsLifecycle,
dataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsLifecycleToTerraform,
dataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsLifecycleToHclTerraform,
DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsLifecycleOutputReference,
DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsLivenessProbe,
dataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsLivenessProbeToTerraform,
dataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsLivenessProbeToHclTerraform,
DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsLivenessProbeOutputReference,
DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsPorts,
dataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsPortsToTerraform,
dataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsPortsToHclTerraform,
DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsPortsList,
DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerAffinity,
dataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerAffinityToTerraform,
dataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerAffinityToHclTerraform,
DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerAffinityOutputReference,
DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerConfig,
dataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerConfigToTerraform,
dataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerConfigToHclTerraform,
DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerConfigOutputReference,
DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerContainers,
dataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerContainersToTerraform,
dataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerContainersToHclTerraform,
DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerContainersOutputReference,
DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerCustomTlsSecret,
dataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerCustomTlsSecretToTerraform,
dataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerCustomTlsSecretToHclTerraform,
DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerCustomTlsSecretOutputReference,
DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerExpose,
dataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerExposeToTerraform,
dataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerExposeToHclTerraform,
DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerExposeOutputReference,
DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerMetadata,
dataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerMetadataToTerraform,
dataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerMetadataToHclTerraform,
DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerMetadataOutputReference,
DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerResources,
dataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerResourcesToTerraform,
dataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerResourcesToHclTerraform,
DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerResourcesOutputReference,
DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSecurityContext,
dataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSecurityContextToTerraform,
dataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSecurityContextToHclTerraform,
DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSecurityContextOutputReference,
DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecInstances,
dataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecInstancesToTerraform,
dataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecInstancesToHclTerraform,
DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecInstancesList,
DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecMetadata,
dataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecMetadataToTerraform,
dataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecMetadataToHclTerraform,
DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecMetadataOutputReference,
DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecPatroni,
dataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecPatroniToTerraform,
dataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecPatroniToHclTerraform,
DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecPatroniOutputReference,
DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecPmm,
dataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecPmmToTerraform,
dataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecPmmToHclTerraform,
DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecPmmOutputReference } from './structs1200'
import { DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecBackups,
dataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecBackupsToTerraform,
dataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecBackupsToHclTerraform,
DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecBackupsOutputReference } from './structs400'
import { DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecDataSource,
dataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecDataSourceToTerraform,
dataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecDataSourceToHclTerraform,
DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecDataSourceOutputReference,
DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecDatabaseInitSql,
dataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecDatabaseInitSqlToTerraform,
dataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecDatabaseInitSqlToHclTerraform,
DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecDatabaseInitSqlOutputReference,
DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecExpose,
dataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecExposeToTerraform,
dataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecExposeToHclTerraform,
DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecExposeOutputReference,
DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecExposeReplicas,
dataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecExposeReplicasToTerraform,
dataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecExposeReplicasToHclTerraform,
DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecExposeReplicasOutputReference,
DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecExtensions,
dataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecExtensionsToTerraform,
dataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecExtensionsToHclTerraform,
DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecExtensionsOutputReference,
DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecImagePullSecrets,
dataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecImagePullSecretsToTerraform,
dataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecImagePullSecretsToHclTerraform,
DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecImagePullSecretsList } from './structs800'
export interface DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsReadinessProbeGrpc {
  /**
  * Port number of the gRPC service. Number must be in the range 1 to 65535.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/pgv2_percona_com_percona_pg_cluster_v2_manifest#port DataK8SPgv2PerconaComPerconaPgClusterV2Manifest#port}
  */
  readonly port: number;
  /**
  * Service is the name of the service to place in the gRPC HealthCheckRequest (see https://github.com/grpc/grpc/blob/master/doc/health-checking.md). If this is not specified, the default behavior is defined by gRPC.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/pgv2_percona_com_percona_pg_cluster_v2_manifest#service DataK8SPgv2PerconaComPerconaPgClusterV2Manifest#service}
  */
  readonly service?: string;
}

export function dataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsReadinessProbeGrpcToTerraform(struct?: DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsReadinessProbeGrpc | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    port: cdktf.numberToTerraform(struct!.port),
    service: cdktf.stringToTerraform(struct!.service),
  }
}


export function dataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsReadinessProbeGrpcToHclTerraform(struct?: DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsReadinessProbeGrpc | cdktf.IResolvable): any {
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

export class DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsReadinessProbeGrpcOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsReadinessProbeGrpc | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsReadinessProbeGrpc | cdktf.IResolvable | undefined) {
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
export interface DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsReadinessProbeHttpGetHttpHeaders {
  /**
  * The header field name. This will be canonicalized upon output, so case-variant names will be understood as the same header.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/pgv2_percona_com_percona_pg_cluster_v2_manifest#name DataK8SPgv2PerconaComPerconaPgClusterV2Manifest#name}
  */
  readonly name: string;
  /**
  * The header field value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/pgv2_percona_com_percona_pg_cluster_v2_manifest#value DataK8SPgv2PerconaComPerconaPgClusterV2Manifest#value}
  */
  readonly value: string;
}

export function dataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsReadinessProbeHttpGetHttpHeadersToTerraform(struct?: DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsReadinessProbeHttpGetHttpHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsReadinessProbeHttpGetHttpHeadersToHclTerraform(struct?: DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsReadinessProbeHttpGetHttpHeaders | cdktf.IResolvable): any {
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

export class DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsReadinessProbeHttpGetHttpHeadersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsReadinessProbeHttpGetHttpHeaders | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsReadinessProbeHttpGetHttpHeaders | cdktf.IResolvable | undefined) {
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

export class DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsReadinessProbeHttpGetHttpHeadersList extends cdktf.ComplexList {
  public internalValue? : DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsReadinessProbeHttpGetHttpHeaders[] | cdktf.IResolvable

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
  public get(index: number): DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsReadinessProbeHttpGetHttpHeadersOutputReference {
    return new DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsReadinessProbeHttpGetHttpHeadersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsReadinessProbeHttpGet {
  /**
  * Host name to connect to, defaults to the pod IP. You probably want to set 'Host' in httpHeaders instead.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/pgv2_percona_com_percona_pg_cluster_v2_manifest#host DataK8SPgv2PerconaComPerconaPgClusterV2Manifest#host}
  */
  readonly host?: string;
  /**
  * Custom headers to set in the request. HTTP allows repeated headers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/pgv2_percona_com_percona_pg_cluster_v2_manifest#http_headers DataK8SPgv2PerconaComPerconaPgClusterV2Manifest#http_headers}
  */
  readonly httpHeaders?: DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsReadinessProbeHttpGetHttpHeaders[] | cdktf.IResolvable;
  /**
  * Path to access on the HTTP server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/pgv2_percona_com_percona_pg_cluster_v2_manifest#path DataK8SPgv2PerconaComPerconaPgClusterV2Manifest#path}
  */
  readonly path?: string;
  /**
  * Name or number of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/pgv2_percona_com_percona_pg_cluster_v2_manifest#port DataK8SPgv2PerconaComPerconaPgClusterV2Manifest#port}
  */
  readonly port: string;
  /**
  * Scheme to use for connecting to the host. Defaults to HTTP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/pgv2_percona_com_percona_pg_cluster_v2_manifest#scheme DataK8SPgv2PerconaComPerconaPgClusterV2Manifest#scheme}
  */
  readonly scheme?: string;
}

export function dataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsReadinessProbeHttpGetToTerraform(struct?: DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsReadinessProbeHttpGet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host: cdktf.stringToTerraform(struct!.host),
    http_headers: cdktf.listMapper(dataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsReadinessProbeHttpGetHttpHeadersToTerraform, false)(struct!.httpHeaders),
    path: cdktf.stringToTerraform(struct!.path),
    port: cdktf.stringToTerraform(struct!.port),
    scheme: cdktf.stringToTerraform(struct!.scheme),
  }
}


export function dataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsReadinessProbeHttpGetToHclTerraform(struct?: DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsReadinessProbeHttpGet | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(dataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsReadinessProbeHttpGetHttpHeadersToHclTerraform, false)(struct!.httpHeaders),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsReadinessProbeHttpGetHttpHeadersList",
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

export class DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsReadinessProbeHttpGetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsReadinessProbeHttpGet | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsReadinessProbeHttpGet | cdktf.IResolvable | undefined) {
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
  private _httpHeaders = new DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsReadinessProbeHttpGetHttpHeadersList(this, "http_headers", false);
  public get httpHeaders() {
    return this._httpHeaders;
  }
  public putHttpHeaders(value: DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsReadinessProbeHttpGetHttpHeaders[] | cdktf.IResolvable) {
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
export interface DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsReadinessProbeTcpSocket {
  /**
  * Optional: Host name to connect to, defaults to the pod IP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/pgv2_percona_com_percona_pg_cluster_v2_manifest#host DataK8SPgv2PerconaComPerconaPgClusterV2Manifest#host}
  */
  readonly host?: string;
  /**
  * Number or name of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/pgv2_percona_com_percona_pg_cluster_v2_manifest#port DataK8SPgv2PerconaComPerconaPgClusterV2Manifest#port}
  */
  readonly port: string;
}

export function dataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsReadinessProbeTcpSocketToTerraform(struct?: DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsReadinessProbeTcpSocket | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host: cdktf.stringToTerraform(struct!.host),
    port: cdktf.stringToTerraform(struct!.port),
  }
}


export function dataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsReadinessProbeTcpSocketToHclTerraform(struct?: DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsReadinessProbeTcpSocket | cdktf.IResolvable): any {
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

export class DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsReadinessProbeTcpSocketOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsReadinessProbeTcpSocket | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsReadinessProbeTcpSocket | cdktf.IResolvable | undefined) {
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
export interface DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsReadinessProbe {
  /**
  * Exec specifies the action to take.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/pgv2_percona_com_percona_pg_cluster_v2_manifest#exec DataK8SPgv2PerconaComPerconaPgClusterV2Manifest#exec}
  */
  readonly exec?: DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsReadinessProbeExec;
  /**
  * Minimum consecutive failures for the probe to be considered failed after having succeeded. Defaults to 3. Minimum value is 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/pgv2_percona_com_percona_pg_cluster_v2_manifest#failure_threshold DataK8SPgv2PerconaComPerconaPgClusterV2Manifest#failure_threshold}
  */
  readonly failureThreshold?: number;
  /**
  * GRPC specifies an action involving a GRPC port.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/pgv2_percona_com_percona_pg_cluster_v2_manifest#grpc DataK8SPgv2PerconaComPerconaPgClusterV2Manifest#grpc}
  */
  readonly grpc?: DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsReadinessProbeGrpc;
  /**
  * HTTPGet specifies the http request to perform.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/pgv2_percona_com_percona_pg_cluster_v2_manifest#http_get DataK8SPgv2PerconaComPerconaPgClusterV2Manifest#http_get}
  */
  readonly httpGet?: DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsReadinessProbeHttpGet;
  /**
  * Number of seconds after the container has started before liveness probes are initiated. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/pgv2_percona_com_percona_pg_cluster_v2_manifest#initial_delay_seconds DataK8SPgv2PerconaComPerconaPgClusterV2Manifest#initial_delay_seconds}
  */
  readonly initialDelaySeconds?: number;
  /**
  * How often (in seconds) to perform the probe. Default to 10 seconds. Minimum value is 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/pgv2_percona_com_percona_pg_cluster_v2_manifest#period_seconds DataK8SPgv2PerconaComPerconaPgClusterV2Manifest#period_seconds}
  */
  readonly periodSeconds?: number;
  /**
  * Minimum consecutive successes for the probe to be considered successful after having failed. Defaults to 1. Must be 1 for liveness and startup. Minimum value is 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/pgv2_percona_com_percona_pg_cluster_v2_manifest#success_threshold DataK8SPgv2PerconaComPerconaPgClusterV2Manifest#success_threshold}
  */
  readonly successThreshold?: number;
  /**
  * TCPSocket specifies an action involving a TCP port.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/pgv2_percona_com_percona_pg_cluster_v2_manifest#tcp_socket DataK8SPgv2PerconaComPerconaPgClusterV2Manifest#tcp_socket}
  */
  readonly tcpSocket?: DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsReadinessProbeTcpSocket;
  /**
  * Optional duration in seconds the pod needs to terminate gracefully upon probe failure. The grace period is the duration in seconds after the processes running in the pod are sent a termination signal and the time when the processes are forcibly halted with a kill signal. Set this value longer than the expected cleanup time for your process. If this value is nil, the pod's terminationGracePeriodSeconds will be used. Otherwise, this value overrides the value provided by the pod spec. Value must be non-negative integer. The value zero indicates stop immediately via the kill signal (no opportunity to shut down). This is a beta field and requires enabling ProbeTerminationGracePeriod feature gate. Minimum value is 1. spec.terminationGracePeriodSeconds is used if unset.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/pgv2_percona_com_percona_pg_cluster_v2_manifest#termination_grace_period_seconds DataK8SPgv2PerconaComPerconaPgClusterV2Manifest#termination_grace_period_seconds}
  */
  readonly terminationGracePeriodSeconds?: number;
  /**
  * Number of seconds after which the probe times out. Defaults to 1 second. Minimum value is 1. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/pgv2_percona_com_percona_pg_cluster_v2_manifest#timeout_seconds DataK8SPgv2PerconaComPerconaPgClusterV2Manifest#timeout_seconds}
  */
  readonly timeoutSeconds?: number;
}

export function dataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsReadinessProbeToTerraform(struct?: DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsReadinessProbe | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exec: dataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsReadinessProbeExecToTerraform(struct!.exec),
    failure_threshold: cdktf.numberToTerraform(struct!.failureThreshold),
    grpc: dataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsReadinessProbeGrpcToTerraform(struct!.grpc),
    http_get: dataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsReadinessProbeHttpGetToTerraform(struct!.httpGet),
    initial_delay_seconds: cdktf.numberToTerraform(struct!.initialDelaySeconds),
    period_seconds: cdktf.numberToTerraform(struct!.periodSeconds),
    success_threshold: cdktf.numberToTerraform(struct!.successThreshold),
    tcp_socket: dataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsReadinessProbeTcpSocketToTerraform(struct!.tcpSocket),
    termination_grace_period_seconds: cdktf.numberToTerraform(struct!.terminationGracePeriodSeconds),
    timeout_seconds: cdktf.numberToTerraform(struct!.timeoutSeconds),
  }
}


export function dataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsReadinessProbeToHclTerraform(struct?: DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsReadinessProbe | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exec: {
      value: dataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsReadinessProbeExecToHclTerraform(struct!.exec),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsReadinessProbeExec",
    },
    failure_threshold: {
      value: cdktf.numberToHclTerraform(struct!.failureThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    grpc: {
      value: dataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsReadinessProbeGrpcToHclTerraform(struct!.grpc),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsReadinessProbeGrpc",
    },
    http_get: {
      value: dataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsReadinessProbeHttpGetToHclTerraform(struct!.httpGet),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsReadinessProbeHttpGet",
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
      value: dataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsReadinessProbeTcpSocketToHclTerraform(struct!.tcpSocket),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsReadinessProbeTcpSocket",
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

export class DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsReadinessProbeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsReadinessProbe | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsReadinessProbe | cdktf.IResolvable | undefined) {
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
  private _exec = new DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsReadinessProbeExecOutputReference(this, "exec");
  public get exec() {
    return this._exec;
  }
  public putExec(value: DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsReadinessProbeExec) {
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
  private _grpc = new DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsReadinessProbeGrpcOutputReference(this, "grpc");
  public get grpc() {
    return this._grpc;
  }
  public putGrpc(value: DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsReadinessProbeGrpc) {
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
  private _httpGet = new DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsReadinessProbeHttpGetOutputReference(this, "http_get");
  public get httpGet() {
    return this._httpGet;
  }
  public putHttpGet(value: DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsReadinessProbeHttpGet) {
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
  private _tcpSocket = new DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsReadinessProbeTcpSocketOutputReference(this, "tcp_socket");
  public get tcpSocket() {
    return this._tcpSocket;
  }
  public putTcpSocket(value: DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsReadinessProbeTcpSocket) {
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
export interface DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsResizePolicy {
  /**
  * Name of the resource to which this resource resize policy applies. Supported values: cpu, memory.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/pgv2_percona_com_percona_pg_cluster_v2_manifest#resource_name DataK8SPgv2PerconaComPerconaPgClusterV2Manifest#resource_name}
  */
  readonly resourceName: string;
  /**
  * Restart policy to apply when specified resource is resized. If not specified, it defaults to NotRequired.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/pgv2_percona_com_percona_pg_cluster_v2_manifest#restart_policy DataK8SPgv2PerconaComPerconaPgClusterV2Manifest#restart_policy}
  */
  readonly restartPolicy: string;
}

export function dataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsResizePolicyToTerraform(struct?: DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsResizePolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    resource_name: cdktf.stringToTerraform(struct!.resourceName),
    restart_policy: cdktf.stringToTerraform(struct!.restartPolicy),
  }
}


export function dataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsResizePolicyToHclTerraform(struct?: DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsResizePolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    resource_name: {
      value: cdktf.stringToHclTerraform(struct!.resourceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    restart_policy: {
      value: cdktf.stringToHclTerraform(struct!.restartPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsResizePolicyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsResizePolicy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._resourceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceName = this._resourceName;
    }
    if (this._restartPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.restartPolicy = this._restartPolicy;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsResizePolicy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._resourceName = undefined;
      this._restartPolicy = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._resourceName = value.resourceName;
      this._restartPolicy = value.restartPolicy;
    }
  }

  // resource_name - computed: false, optional: false, required: true
  private _resourceName?: string; 
  public get resourceName() {
    return this.getStringAttribute('resource_name');
  }
  public set resourceName(value: string) {
    this._resourceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceNameInput() {
    return this._resourceName;
  }

  // restart_policy - computed: false, optional: false, required: true
  private _restartPolicy?: string; 
  public get restartPolicy() {
    return this.getStringAttribute('restart_policy');
  }
  public set restartPolicy(value: string) {
    this._restartPolicy = value;
  }
  // Temporarily expose input value. Use with caution.
  public get restartPolicyInput() {
    return this._restartPolicy;
  }
}

export class DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsResizePolicyList extends cdktf.ComplexList {
  public internalValue? : DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsResizePolicy[] | cdktf.IResolvable

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
  public get(index: number): DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsResizePolicyOutputReference {
    return new DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsResizePolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsResourcesClaims {
  /**
  * Name must match the name of one entry in pod.spec.resourceClaims of the Pod where this field is used. It makes that resource available inside a container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/pgv2_percona_com_percona_pg_cluster_v2_manifest#name DataK8SPgv2PerconaComPerconaPgClusterV2Manifest#name}
  */
  readonly name: string;
  /**
  * Request is the name chosen for a request in the referenced claim. If empty, everything from the claim is made available, otherwise only the result of this request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/pgv2_percona_com_percona_pg_cluster_v2_manifest#request DataK8SPgv2PerconaComPerconaPgClusterV2Manifest#request}
  */
  readonly request?: string;
}

export function dataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsResourcesClaimsToTerraform(struct?: DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsResourcesClaims | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    request: cdktf.stringToTerraform(struct!.request),
  }
}


export function dataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsResourcesClaimsToHclTerraform(struct?: DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsResourcesClaims | cdktf.IResolvable): any {
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
    request: {
      value: cdktf.stringToHclTerraform(struct!.request),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsResourcesClaimsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsResourcesClaims | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._request !== undefined) {
      hasAnyValues = true;
      internalValueResult.request = this._request;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsResourcesClaims | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._request = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._request = value.request;
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

  // request - computed: false, optional: true, required: false
  private _request?: string; 
  public get request() {
    return this.getStringAttribute('request');
  }
  public set request(value: string) {
    this._request = value;
  }
  public resetRequest() {
    this._request = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestInput() {
    return this._request;
  }
}

export class DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsResourcesClaimsList extends cdktf.ComplexList {
  public internalValue? : DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsResourcesClaims[] | cdktf.IResolvable

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
  public get(index: number): DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsResourcesClaimsOutputReference {
    return new DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsResourcesClaimsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsResources {
  /**
  * Claims lists the names of resources, defined in spec.resourceClaims, that are used by this container. This is an alpha field and requires enabling the DynamicResourceAllocation feature gate. This field is immutable. It can only be set for containers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/pgv2_percona_com_percona_pg_cluster_v2_manifest#claims DataK8SPgv2PerconaComPerconaPgClusterV2Manifest#claims}
  */
  readonly claims?: DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsResourcesClaims[] | cdktf.IResolvable;
  /**
  * Limits describes the maximum amount of compute resources allowed. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/pgv2_percona_com_percona_pg_cluster_v2_manifest#limits DataK8SPgv2PerconaComPerconaPgClusterV2Manifest#limits}
  */
  readonly limits?: { [key: string]: string };
  /**
  * Requests describes the minimum amount of compute resources required. If Requests is omitted for a container, it defaults to Limits if that is explicitly specified, otherwise to an implementation-defined value. Requests cannot exceed Limits. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/pgv2_percona_com_percona_pg_cluster_v2_manifest#requests DataK8SPgv2PerconaComPerconaPgClusterV2Manifest#requests}
  */
  readonly requests?: { [key: string]: string };
}

export function dataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsResourcesToTerraform(struct?: DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    claims: cdktf.listMapper(dataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsResourcesClaimsToTerraform, false)(struct!.claims),
    limits: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.limits),
    requests: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.requests),
  }
}


export function dataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsResourcesToHclTerraform(struct?: DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    claims: {
      value: cdktf.listMapperHcl(dataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsResourcesClaimsToHclTerraform, false)(struct!.claims),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsResourcesClaimsList",
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

export class DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsResourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsResources | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsResources | cdktf.IResolvable | undefined) {
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
  private _claims = new DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsResourcesClaimsList(this, "claims", false);
  public get claims() {
    return this._claims;
  }
  public putClaims(value: DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsResourcesClaims[] | cdktf.IResolvable) {
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
export interface DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsSecurityContextAppArmorProfile {
  /**
  * localhostProfile indicates a profile loaded on the node that should be used. The profile must be preconfigured on the node to work. Must match the loaded name of the profile. Must be set if and only if type is 'Localhost'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/pgv2_percona_com_percona_pg_cluster_v2_manifest#localhost_profile DataK8SPgv2PerconaComPerconaPgClusterV2Manifest#localhost_profile}
  */
  readonly localhostProfile?: string;
  /**
  * type indicates which kind of AppArmor profile will be applied. Valid options are: Localhost - a profile pre-loaded on the node. RuntimeDefault - the container runtime's default profile. Unconfined - no AppArmor enforcement.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/pgv2_percona_com_percona_pg_cluster_v2_manifest#type DataK8SPgv2PerconaComPerconaPgClusterV2Manifest#type}
  */
  readonly type: string;
}

export function dataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsSecurityContextAppArmorProfileToTerraform(struct?: DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsSecurityContextAppArmorProfile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    localhost_profile: cdktf.stringToTerraform(struct!.localhostProfile),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsSecurityContextAppArmorProfileToHclTerraform(struct?: DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsSecurityContextAppArmorProfile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    localhost_profile: {
      value: cdktf.stringToHclTerraform(struct!.localhostProfile),
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

export class DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsSecurityContextAppArmorProfileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsSecurityContextAppArmorProfile | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._localhostProfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.localhostProfile = this._localhostProfile;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsSecurityContextAppArmorProfile | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._localhostProfile = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._localhostProfile = value.localhostProfile;
      this._type = value.type;
    }
  }

  // localhost_profile - computed: false, optional: true, required: false
  private _localhostProfile?: string; 
  public get localhostProfile() {
    return this.getStringAttribute('localhost_profile');
  }
  public set localhostProfile(value: string) {
    this._localhostProfile = value;
  }
  public resetLocalhostProfile() {
    this._localhostProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localhostProfileInput() {
    return this._localhostProfile;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}
export interface DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsSecurityContextCapabilities {
  /**
  * Added capabilities
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/pgv2_percona_com_percona_pg_cluster_v2_manifest#add DataK8SPgv2PerconaComPerconaPgClusterV2Manifest#add}
  */
  readonly add?: string[];
  /**
  * Removed capabilities
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/pgv2_percona_com_percona_pg_cluster_v2_manifest#drop DataK8SPgv2PerconaComPerconaPgClusterV2Manifest#drop}
  */
  readonly drop?: string[];
}

export function dataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsSecurityContextCapabilitiesToTerraform(struct?: DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsSecurityContextCapabilities | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    add: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.add),
    drop: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.drop),
  }
}


export function dataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsSecurityContextCapabilitiesToHclTerraform(struct?: DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsSecurityContextCapabilities | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    add: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.add),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    drop: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.drop),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsSecurityContextCapabilitiesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsSecurityContextCapabilities | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._add !== undefined) {
      hasAnyValues = true;
      internalValueResult.add = this._add;
    }
    if (this._drop !== undefined) {
      hasAnyValues = true;
      internalValueResult.drop = this._drop;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsSecurityContextCapabilities | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._add = undefined;
      this._drop = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._add = value.add;
      this._drop = value.drop;
    }
  }

  // add - computed: false, optional: true, required: false
  private _add?: string[]; 
  public get add() {
    return this.getListAttribute('add');
  }
  public set add(value: string[]) {
    this._add = value;
  }
  public resetAdd() {
    this._add = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addInput() {
    return this._add;
  }

  // drop - computed: false, optional: true, required: false
  private _drop?: string[]; 
  public get drop() {
    return this.getListAttribute('drop');
  }
  public set drop(value: string[]) {
    this._drop = value;
  }
  public resetDrop() {
    this._drop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropInput() {
    return this._drop;
  }
}
export interface DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsSecurityContextSeLinuxOptions {
  /**
  * Level is SELinux level label that applies to the container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/pgv2_percona_com_percona_pg_cluster_v2_manifest#level DataK8SPgv2PerconaComPerconaPgClusterV2Manifest#level}
  */
  readonly level?: string;
  /**
  * Role is a SELinux role label that applies to the container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/pgv2_percona_com_percona_pg_cluster_v2_manifest#role DataK8SPgv2PerconaComPerconaPgClusterV2Manifest#role}
  */
  readonly role?: string;
  /**
  * Type is a SELinux type label that applies to the container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/pgv2_percona_com_percona_pg_cluster_v2_manifest#type DataK8SPgv2PerconaComPerconaPgClusterV2Manifest#type}
  */
  readonly type?: string;
  /**
  * User is a SELinux user label that applies to the container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/pgv2_percona_com_percona_pg_cluster_v2_manifest#user DataK8SPgv2PerconaComPerconaPgClusterV2Manifest#user}
  */
  readonly user?: string;
}

export function dataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsSecurityContextSeLinuxOptionsToTerraform(struct?: DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsSecurityContextSeLinuxOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    level: cdktf.stringToTerraform(struct!.level),
    role: cdktf.stringToTerraform(struct!.role),
    type: cdktf.stringToTerraform(struct!.type),
    user: cdktf.stringToTerraform(struct!.user),
  }
}


export function dataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsSecurityContextSeLinuxOptionsToHclTerraform(struct?: DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsSecurityContextSeLinuxOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    level: {
      value: cdktf.stringToHclTerraform(struct!.level),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role: {
      value: cdktf.stringToHclTerraform(struct!.role),
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
    user: {
      value: cdktf.stringToHclTerraform(struct!.user),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsSecurityContextSeLinuxOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsSecurityContextSeLinuxOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._level !== undefined) {
      hasAnyValues = true;
      internalValueResult.level = this._level;
    }
    if (this._role !== undefined) {
      hasAnyValues = true;
      internalValueResult.role = this._role;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._user !== undefined) {
      hasAnyValues = true;
      internalValueResult.user = this._user;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsSecurityContextSeLinuxOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._level = undefined;
      this._role = undefined;
      this._type = undefined;
      this._user = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._level = value.level;
      this._role = value.role;
      this._type = value.type;
      this._user = value.user;
    }
  }

  // level - computed: false, optional: true, required: false
  private _level?: string; 
  public get level() {
    return this.getStringAttribute('level');
  }
  public set level(value: string) {
    this._level = value;
  }
  public resetLevel() {
    this._level = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get levelInput() {
    return this._level;
  }

  // role - computed: false, optional: true, required: false
  private _role?: string; 
  public get role() {
    return this.getStringAttribute('role');
  }
  public set role(value: string) {
    this._role = value;
  }
  public resetRole() {
    this._role = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleInput() {
    return this._role;
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

  // user - computed: false, optional: true, required: false
  private _user?: string; 
  public get user() {
    return this.getStringAttribute('user');
  }
  public set user(value: string) {
    this._user = value;
  }
  public resetUser() {
    this._user = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userInput() {
    return this._user;
  }
}
export interface DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsSecurityContextSeccompProfile {
  /**
  * localhostProfile indicates a profile defined in a file on the node should be used. The profile must be preconfigured on the node to work. Must be a descending path, relative to the kubelet's configured seccomp profile location. Must be set if type is 'Localhost'. Must NOT be set for any other type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/pgv2_percona_com_percona_pg_cluster_v2_manifest#localhost_profile DataK8SPgv2PerconaComPerconaPgClusterV2Manifest#localhost_profile}
  */
  readonly localhostProfile?: string;
  /**
  * type indicates which kind of seccomp profile will be applied. Valid options are: Localhost - a profile defined in a file on the node should be used. RuntimeDefault - the container runtime default profile should be used. Unconfined - no profile should be applied.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/pgv2_percona_com_percona_pg_cluster_v2_manifest#type DataK8SPgv2PerconaComPerconaPgClusterV2Manifest#type}
  */
  readonly type: string;
}

export function dataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsSecurityContextSeccompProfileToTerraform(struct?: DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsSecurityContextSeccompProfile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    localhost_profile: cdktf.stringToTerraform(struct!.localhostProfile),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsSecurityContextSeccompProfileToHclTerraform(struct?: DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsSecurityContextSeccompProfile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    localhost_profile: {
      value: cdktf.stringToHclTerraform(struct!.localhostProfile),
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

export class DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsSecurityContextSeccompProfileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsSecurityContextSeccompProfile | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._localhostProfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.localhostProfile = this._localhostProfile;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsSecurityContextSeccompProfile | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._localhostProfile = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._localhostProfile = value.localhostProfile;
      this._type = value.type;
    }
  }

  // localhost_profile - computed: false, optional: true, required: false
  private _localhostProfile?: string; 
  public get localhostProfile() {
    return this.getStringAttribute('localhost_profile');
  }
  public set localhostProfile(value: string) {
    this._localhostProfile = value;
  }
  public resetLocalhostProfile() {
    this._localhostProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localhostProfileInput() {
    return this._localhostProfile;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}
export interface DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsSecurityContextWindowsOptions {
  /**
  * GMSACredentialSpec is where the GMSA admission webhook (https://github.com/kubernetes-sigs/windows-gmsa) inlines the contents of the GMSA credential spec named by the GMSACredentialSpecName field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/pgv2_percona_com_percona_pg_cluster_v2_manifest#gmsa_credential_spec DataK8SPgv2PerconaComPerconaPgClusterV2Manifest#gmsa_credential_spec}
  */
  readonly gmsaCredentialSpec?: string;
  /**
  * GMSACredentialSpecName is the name of the GMSA credential spec to use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/pgv2_percona_com_percona_pg_cluster_v2_manifest#gmsa_credential_spec_name DataK8SPgv2PerconaComPerconaPgClusterV2Manifest#gmsa_credential_spec_name}
  */
  readonly gmsaCredentialSpecName?: string;
  /**
  * HostProcess determines if a container should be run as a 'Host Process' container. All of a Pod's containers must have the same effective HostProcess value (it is not allowed to have a mix of HostProcess containers and non-HostProcess containers). In addition, if HostProcess is true then HostNetwork must also be set to true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/pgv2_percona_com_percona_pg_cluster_v2_manifest#host_process DataK8SPgv2PerconaComPerconaPgClusterV2Manifest#host_process}
  */
  readonly hostProcess?: boolean | cdktf.IResolvable;
  /**
  * The UserName in Windows to run the entrypoint of the container process. Defaults to the user specified in image metadata if unspecified. May also be set in PodSecurityContext. If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/pgv2_percona_com_percona_pg_cluster_v2_manifest#run_as_user_name DataK8SPgv2PerconaComPerconaPgClusterV2Manifest#run_as_user_name}
  */
  readonly runAsUserName?: string;
}

export function dataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsSecurityContextWindowsOptionsToTerraform(struct?: DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsSecurityContextWindowsOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    gmsa_credential_spec: cdktf.stringToTerraform(struct!.gmsaCredentialSpec),
    gmsa_credential_spec_name: cdktf.stringToTerraform(struct!.gmsaCredentialSpecName),
    host_process: cdktf.booleanToTerraform(struct!.hostProcess),
    run_as_user_name: cdktf.stringToTerraform(struct!.runAsUserName),
  }
}


export function dataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsSecurityContextWindowsOptionsToHclTerraform(struct?: DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsSecurityContextWindowsOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    gmsa_credential_spec: {
      value: cdktf.stringToHclTerraform(struct!.gmsaCredentialSpec),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    gmsa_credential_spec_name: {
      value: cdktf.stringToHclTerraform(struct!.gmsaCredentialSpecName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    host_process: {
      value: cdktf.booleanToHclTerraform(struct!.hostProcess),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    run_as_user_name: {
      value: cdktf.stringToHclTerraform(struct!.runAsUserName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsSecurityContextWindowsOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsSecurityContextWindowsOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._gmsaCredentialSpec !== undefined) {
      hasAnyValues = true;
      internalValueResult.gmsaCredentialSpec = this._gmsaCredentialSpec;
    }
    if (this._gmsaCredentialSpecName !== undefined) {
      hasAnyValues = true;
      internalValueResult.gmsaCredentialSpecName = this._gmsaCredentialSpecName;
    }
    if (this._hostProcess !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostProcess = this._hostProcess;
    }
    if (this._runAsUserName !== undefined) {
      hasAnyValues = true;
      internalValueResult.runAsUserName = this._runAsUserName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsSecurityContextWindowsOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._gmsaCredentialSpec = undefined;
      this._gmsaCredentialSpecName = undefined;
      this._hostProcess = undefined;
      this._runAsUserName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._gmsaCredentialSpec = value.gmsaCredentialSpec;
      this._gmsaCredentialSpecName = value.gmsaCredentialSpecName;
      this._hostProcess = value.hostProcess;
      this._runAsUserName = value.runAsUserName;
    }
  }

  // gmsa_credential_spec - computed: false, optional: true, required: false
  private _gmsaCredentialSpec?: string; 
  public get gmsaCredentialSpec() {
    return this.getStringAttribute('gmsa_credential_spec');
  }
  public set gmsaCredentialSpec(value: string) {
    this._gmsaCredentialSpec = value;
  }
  public resetGmsaCredentialSpec() {
    this._gmsaCredentialSpec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gmsaCredentialSpecInput() {
    return this._gmsaCredentialSpec;
  }

  // gmsa_credential_spec_name - computed: false, optional: true, required: false
  private _gmsaCredentialSpecName?: string; 
  public get gmsaCredentialSpecName() {
    return this.getStringAttribute('gmsa_credential_spec_name');
  }
  public set gmsaCredentialSpecName(value: string) {
    this._gmsaCredentialSpecName = value;
  }
  public resetGmsaCredentialSpecName() {
    this._gmsaCredentialSpecName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gmsaCredentialSpecNameInput() {
    return this._gmsaCredentialSpecName;
  }

  // host_process - computed: false, optional: true, required: false
  private _hostProcess?: boolean | cdktf.IResolvable; 
  public get hostProcess() {
    return this.getBooleanAttribute('host_process');
  }
  public set hostProcess(value: boolean | cdktf.IResolvable) {
    this._hostProcess = value;
  }
  public resetHostProcess() {
    this._hostProcess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostProcessInput() {
    return this._hostProcess;
  }

  // run_as_user_name - computed: false, optional: true, required: false
  private _runAsUserName?: string; 
  public get runAsUserName() {
    return this.getStringAttribute('run_as_user_name');
  }
  public set runAsUserName(value: string) {
    this._runAsUserName = value;
  }
  public resetRunAsUserName() {
    this._runAsUserName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runAsUserNameInput() {
    return this._runAsUserName;
  }
}
export interface DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsSecurityContext {
  /**
  * AllowPrivilegeEscalation controls whether a process can gain more privileges than its parent process. This bool directly controls if the no_new_privs flag will be set on the container process. AllowPrivilegeEscalation is true always when the container is: 1) run as Privileged 2) has CAP_SYS_ADMIN Note that this field cannot be set when spec.os.name is windows.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/pgv2_percona_com_percona_pg_cluster_v2_manifest#allow_privilege_escalation DataK8SPgv2PerconaComPerconaPgClusterV2Manifest#allow_privilege_escalation}
  */
  readonly allowPrivilegeEscalation?: boolean | cdktf.IResolvable;
  /**
  * appArmorProfile is the AppArmor options to use by this container. If set, this profile overrides the pod's appArmorProfile. Note that this field cannot be set when spec.os.name is windows.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/pgv2_percona_com_percona_pg_cluster_v2_manifest#app_armor_profile DataK8SPgv2PerconaComPerconaPgClusterV2Manifest#app_armor_profile}
  */
  readonly appArmorProfile?: DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsSecurityContextAppArmorProfile;
  /**
  * The capabilities to add/drop when running containers. Defaults to the default set of capabilities granted by the container runtime. Note that this field cannot be set when spec.os.name is windows.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/pgv2_percona_com_percona_pg_cluster_v2_manifest#capabilities DataK8SPgv2PerconaComPerconaPgClusterV2Manifest#capabilities}
  */
  readonly capabilities?: DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsSecurityContextCapabilities;
  /**
  * Run container in privileged mode. Processes in privileged containers are essentially equivalent to root on the host. Defaults to false. Note that this field cannot be set when spec.os.name is windows.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/pgv2_percona_com_percona_pg_cluster_v2_manifest#privileged DataK8SPgv2PerconaComPerconaPgClusterV2Manifest#privileged}
  */
  readonly privileged?: boolean | cdktf.IResolvable;
  /**
  * procMount denotes the type of proc mount to use for the containers. The default value is Default which uses the container runtime defaults for readonly paths and masked paths. This requires the ProcMountType feature flag to be enabled. Note that this field cannot be set when spec.os.name is windows.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/pgv2_percona_com_percona_pg_cluster_v2_manifest#proc_mount DataK8SPgv2PerconaComPerconaPgClusterV2Manifest#proc_mount}
  */
  readonly procMount?: string;
  /**
  * Whether this container has a read-only root filesystem. Default is false. Note that this field cannot be set when spec.os.name is windows.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/pgv2_percona_com_percona_pg_cluster_v2_manifest#read_only_root_filesystem DataK8SPgv2PerconaComPerconaPgClusterV2Manifest#read_only_root_filesystem}
  */
  readonly readOnlyRootFilesystem?: boolean | cdktf.IResolvable;
  /**
  * The GID to run the entrypoint of the container process. Uses runtime default if unset. May also be set in PodSecurityContext. If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence. Note that this field cannot be set when spec.os.name is windows.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/pgv2_percona_com_percona_pg_cluster_v2_manifest#run_as_group DataK8SPgv2PerconaComPerconaPgClusterV2Manifest#run_as_group}
  */
  readonly runAsGroup?: number;
  /**
  * Indicates that the container must run as a non-root user. If true, the Kubelet will validate the image at runtime to ensure that it does not run as UID 0 (root) and fail to start the container if it does. If unset or false, no such validation will be performed. May also be set in PodSecurityContext. If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/pgv2_percona_com_percona_pg_cluster_v2_manifest#run_as_non_root DataK8SPgv2PerconaComPerconaPgClusterV2Manifest#run_as_non_root}
  */
  readonly runAsNonRoot?: boolean | cdktf.IResolvable;
  /**
  * The UID to run the entrypoint of the container process. Defaults to user specified in image metadata if unspecified. May also be set in PodSecurityContext. If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence. Note that this field cannot be set when spec.os.name is windows.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/pgv2_percona_com_percona_pg_cluster_v2_manifest#run_as_user DataK8SPgv2PerconaComPerconaPgClusterV2Manifest#run_as_user}
  */
  readonly runAsUser?: number;
  /**
  * The SELinux context to be applied to the container. If unspecified, the container runtime will allocate a random SELinux context for each container. May also be set in PodSecurityContext. If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence. Note that this field cannot be set when spec.os.name is windows.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/pgv2_percona_com_percona_pg_cluster_v2_manifest#se_linux_options DataK8SPgv2PerconaComPerconaPgClusterV2Manifest#se_linux_options}
  */
  readonly seLinuxOptions?: DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsSecurityContextSeLinuxOptions;
  /**
  * The seccomp options to use by this container. If seccomp options are provided at both the pod & container level, the container options override the pod options. Note that this field cannot be set when spec.os.name is windows.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/pgv2_percona_com_percona_pg_cluster_v2_manifest#seccomp_profile DataK8SPgv2PerconaComPerconaPgClusterV2Manifest#seccomp_profile}
  */
  readonly seccompProfile?: DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsSecurityContextSeccompProfile;
  /**
  * The Windows specific settings applied to all containers. If unspecified, the options from the PodSecurityContext will be used. If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence. Note that this field cannot be set when spec.os.name is linux.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/pgv2_percona_com_percona_pg_cluster_v2_manifest#windows_options DataK8SPgv2PerconaComPerconaPgClusterV2Manifest#windows_options}
  */
  readonly windowsOptions?: DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsSecurityContextWindowsOptions;
}

export function dataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsSecurityContextToTerraform(struct?: DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsSecurityContext | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_privilege_escalation: cdktf.booleanToTerraform(struct!.allowPrivilegeEscalation),
    app_armor_profile: dataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsSecurityContextAppArmorProfileToTerraform(struct!.appArmorProfile),
    capabilities: dataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsSecurityContextCapabilitiesToTerraform(struct!.capabilities),
    privileged: cdktf.booleanToTerraform(struct!.privileged),
    proc_mount: cdktf.stringToTerraform(struct!.procMount),
    read_only_root_filesystem: cdktf.booleanToTerraform(struct!.readOnlyRootFilesystem),
    run_as_group: cdktf.numberToTerraform(struct!.runAsGroup),
    run_as_non_root: cdktf.booleanToTerraform(struct!.runAsNonRoot),
    run_as_user: cdktf.numberToTerraform(struct!.runAsUser),
    se_linux_options: dataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsSecurityContextSeLinuxOptionsToTerraform(struct!.seLinuxOptions),
    seccomp_profile: dataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsSecurityContextSeccompProfileToTerraform(struct!.seccompProfile),
    windows_options: dataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsSecurityContextWindowsOptionsToTerraform(struct!.windowsOptions),
  }
}


export function dataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsSecurityContextToHclTerraform(struct?: DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsSecurityContext | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_privilege_escalation: {
      value: cdktf.booleanToHclTerraform(struct!.allowPrivilegeEscalation),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    app_armor_profile: {
      value: dataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsSecurityContextAppArmorProfileToHclTerraform(struct!.appArmorProfile),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsSecurityContextAppArmorProfile",
    },
    capabilities: {
      value: dataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsSecurityContextCapabilitiesToHclTerraform(struct!.capabilities),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsSecurityContextCapabilities",
    },
    privileged: {
      value: cdktf.booleanToHclTerraform(struct!.privileged),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    proc_mount: {
      value: cdktf.stringToHclTerraform(struct!.procMount),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    read_only_root_filesystem: {
      value: cdktf.booleanToHclTerraform(struct!.readOnlyRootFilesystem),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    run_as_group: {
      value: cdktf.numberToHclTerraform(struct!.runAsGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    run_as_non_root: {
      value: cdktf.booleanToHclTerraform(struct!.runAsNonRoot),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    run_as_user: {
      value: cdktf.numberToHclTerraform(struct!.runAsUser),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    se_linux_options: {
      value: dataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsSecurityContextSeLinuxOptionsToHclTerraform(struct!.seLinuxOptions),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsSecurityContextSeLinuxOptions",
    },
    seccomp_profile: {
      value: dataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsSecurityContextSeccompProfileToHclTerraform(struct!.seccompProfile),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsSecurityContextSeccompProfile",
    },
    windows_options: {
      value: dataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsSecurityContextWindowsOptionsToHclTerraform(struct!.windowsOptions),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsSecurityContextWindowsOptions",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsSecurityContextOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsSecurityContext | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowPrivilegeEscalation !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowPrivilegeEscalation = this._allowPrivilegeEscalation;
    }
    if (this._appArmorProfile?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.appArmorProfile = this._appArmorProfile?.internalValue;
    }
    if (this._capabilities?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.capabilities = this._capabilities?.internalValue;
    }
    if (this._privileged !== undefined) {
      hasAnyValues = true;
      internalValueResult.privileged = this._privileged;
    }
    if (this._procMount !== undefined) {
      hasAnyValues = true;
      internalValueResult.procMount = this._procMount;
    }
    if (this._readOnlyRootFilesystem !== undefined) {
      hasAnyValues = true;
      internalValueResult.readOnlyRootFilesystem = this._readOnlyRootFilesystem;
    }
    if (this._runAsGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.runAsGroup = this._runAsGroup;
    }
    if (this._runAsNonRoot !== undefined) {
      hasAnyValues = true;
      internalValueResult.runAsNonRoot = this._runAsNonRoot;
    }
    if (this._runAsUser !== undefined) {
      hasAnyValues = true;
      internalValueResult.runAsUser = this._runAsUser;
    }
    if (this._seLinuxOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.seLinuxOptions = this._seLinuxOptions?.internalValue;
    }
    if (this._seccompProfile?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.seccompProfile = this._seccompProfile?.internalValue;
    }
    if (this._windowsOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.windowsOptions = this._windowsOptions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsSecurityContext | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowPrivilegeEscalation = undefined;
      this._appArmorProfile.internalValue = undefined;
      this._capabilities.internalValue = undefined;
      this._privileged = undefined;
      this._procMount = undefined;
      this._readOnlyRootFilesystem = undefined;
      this._runAsGroup = undefined;
      this._runAsNonRoot = undefined;
      this._runAsUser = undefined;
      this._seLinuxOptions.internalValue = undefined;
      this._seccompProfile.internalValue = undefined;
      this._windowsOptions.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowPrivilegeEscalation = value.allowPrivilegeEscalation;
      this._appArmorProfile.internalValue = value.appArmorProfile;
      this._capabilities.internalValue = value.capabilities;
      this._privileged = value.privileged;
      this._procMount = value.procMount;
      this._readOnlyRootFilesystem = value.readOnlyRootFilesystem;
      this._runAsGroup = value.runAsGroup;
      this._runAsNonRoot = value.runAsNonRoot;
      this._runAsUser = value.runAsUser;
      this._seLinuxOptions.internalValue = value.seLinuxOptions;
      this._seccompProfile.internalValue = value.seccompProfile;
      this._windowsOptions.internalValue = value.windowsOptions;
    }
  }

  // allow_privilege_escalation - computed: false, optional: true, required: false
  private _allowPrivilegeEscalation?: boolean | cdktf.IResolvable; 
  public get allowPrivilegeEscalation() {
    return this.getBooleanAttribute('allow_privilege_escalation');
  }
  public set allowPrivilegeEscalation(value: boolean | cdktf.IResolvable) {
    this._allowPrivilegeEscalation = value;
  }
  public resetAllowPrivilegeEscalation() {
    this._allowPrivilegeEscalation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowPrivilegeEscalationInput() {
    return this._allowPrivilegeEscalation;
  }

  // app_armor_profile - computed: false, optional: true, required: false
  private _appArmorProfile = new DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsSecurityContextAppArmorProfileOutputReference(this, "app_armor_profile");
  public get appArmorProfile() {
    return this._appArmorProfile;
  }
  public putAppArmorProfile(value: DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsSecurityContextAppArmorProfile) {
    this._appArmorProfile.internalValue = value;
  }
  public resetAppArmorProfile() {
    this._appArmorProfile.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appArmorProfileInput() {
    return this._appArmorProfile.internalValue;
  }

  // capabilities - computed: false, optional: true, required: false
  private _capabilities = new DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsSecurityContextCapabilitiesOutputReference(this, "capabilities");
  public get capabilities() {
    return this._capabilities;
  }
  public putCapabilities(value: DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsSecurityContextCapabilities) {
    this._capabilities.internalValue = value;
  }
  public resetCapabilities() {
    this._capabilities.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get capabilitiesInput() {
    return this._capabilities.internalValue;
  }

  // privileged - computed: false, optional: true, required: false
  private _privileged?: boolean | cdktf.IResolvable; 
  public get privileged() {
    return this.getBooleanAttribute('privileged');
  }
  public set privileged(value: boolean | cdktf.IResolvable) {
    this._privileged = value;
  }
  public resetPrivileged() {
    this._privileged = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privilegedInput() {
    return this._privileged;
  }

  // proc_mount - computed: false, optional: true, required: false
  private _procMount?: string; 
  public get procMount() {
    return this.getStringAttribute('proc_mount');
  }
  public set procMount(value: string) {
    this._procMount = value;
  }
  public resetProcMount() {
    this._procMount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get procMountInput() {
    return this._procMount;
  }

  // read_only_root_filesystem - computed: false, optional: true, required: false
  private _readOnlyRootFilesystem?: boolean | cdktf.IResolvable; 
  public get readOnlyRootFilesystem() {
    return this.getBooleanAttribute('read_only_root_filesystem');
  }
  public set readOnlyRootFilesystem(value: boolean | cdktf.IResolvable) {
    this._readOnlyRootFilesystem = value;
  }
  public resetReadOnlyRootFilesystem() {
    this._readOnlyRootFilesystem = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readOnlyRootFilesystemInput() {
    return this._readOnlyRootFilesystem;
  }

  // run_as_group - computed: false, optional: true, required: false
  private _runAsGroup?: number; 
  public get runAsGroup() {
    return this.getNumberAttribute('run_as_group');
  }
  public set runAsGroup(value: number) {
    this._runAsGroup = value;
  }
  public resetRunAsGroup() {
    this._runAsGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runAsGroupInput() {
    return this._runAsGroup;
  }

  // run_as_non_root - computed: false, optional: true, required: false
  private _runAsNonRoot?: boolean | cdktf.IResolvable; 
  public get runAsNonRoot() {
    return this.getBooleanAttribute('run_as_non_root');
  }
  public set runAsNonRoot(value: boolean | cdktf.IResolvable) {
    this._runAsNonRoot = value;
  }
  public resetRunAsNonRoot() {
    this._runAsNonRoot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runAsNonRootInput() {
    return this._runAsNonRoot;
  }

  // run_as_user - computed: false, optional: true, required: false
  private _runAsUser?: number; 
  public get runAsUser() {
    return this.getNumberAttribute('run_as_user');
  }
  public set runAsUser(value: number) {
    this._runAsUser = value;
  }
  public resetRunAsUser() {
    this._runAsUser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runAsUserInput() {
    return this._runAsUser;
  }

  // se_linux_options - computed: false, optional: true, required: false
  private _seLinuxOptions = new DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsSecurityContextSeLinuxOptionsOutputReference(this, "se_linux_options");
  public get seLinuxOptions() {
    return this._seLinuxOptions;
  }
  public putSeLinuxOptions(value: DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsSecurityContextSeLinuxOptions) {
    this._seLinuxOptions.internalValue = value;
  }
  public resetSeLinuxOptions() {
    this._seLinuxOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seLinuxOptionsInput() {
    return this._seLinuxOptions.internalValue;
  }

  // seccomp_profile - computed: false, optional: true, required: false
  private _seccompProfile = new DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsSecurityContextSeccompProfileOutputReference(this, "seccomp_profile");
  public get seccompProfile() {
    return this._seccompProfile;
  }
  public putSeccompProfile(value: DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsSecurityContextSeccompProfile) {
    this._seccompProfile.internalValue = value;
  }
  public resetSeccompProfile() {
    this._seccompProfile.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seccompProfileInput() {
    return this._seccompProfile.internalValue;
  }

  // windows_options - computed: false, optional: true, required: false
  private _windowsOptions = new DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsSecurityContextWindowsOptionsOutputReference(this, "windows_options");
  public get windowsOptions() {
    return this._windowsOptions;
  }
  public putWindowsOptions(value: DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsSecurityContextWindowsOptions) {
    this._windowsOptions.internalValue = value;
  }
  public resetWindowsOptions() {
    this._windowsOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get windowsOptionsInput() {
    return this._windowsOptions.internalValue;
  }
}
export interface DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsStartupProbeExec {
  /**
  * Command is the command line to execute inside the container, the working directory for the command is root ('/') in the container's filesystem. The command is simply exec'd, it is not run inside a shell, so traditional shell instructions ('|', etc) won't work. To use a shell, you need to explicitly call out to that shell. Exit status of 0 is treated as live/healthy and non-zero is unhealthy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/pgv2_percona_com_percona_pg_cluster_v2_manifest#command DataK8SPgv2PerconaComPerconaPgClusterV2Manifest#command}
  */
  readonly command?: string[];
}

export function dataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsStartupProbeExecToTerraform(struct?: DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsStartupProbeExec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    command: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.command),
  }
}


export function dataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsStartupProbeExecToHclTerraform(struct?: DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsStartupProbeExec | cdktf.IResolvable): any {
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

export class DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsStartupProbeExecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsStartupProbeExec | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsStartupProbeExec | cdktf.IResolvable | undefined) {
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
export interface DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsStartupProbeGrpc {
  /**
  * Port number of the gRPC service. Number must be in the range 1 to 65535.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/pgv2_percona_com_percona_pg_cluster_v2_manifest#port DataK8SPgv2PerconaComPerconaPgClusterV2Manifest#port}
  */
  readonly port: number;
  /**
  * Service is the name of the service to place in the gRPC HealthCheckRequest (see https://github.com/grpc/grpc/blob/master/doc/health-checking.md). If this is not specified, the default behavior is defined by gRPC.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/pgv2_percona_com_percona_pg_cluster_v2_manifest#service DataK8SPgv2PerconaComPerconaPgClusterV2Manifest#service}
  */
  readonly service?: string;
}

export function dataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsStartupProbeGrpcToTerraform(struct?: DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsStartupProbeGrpc | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    port: cdktf.numberToTerraform(struct!.port),
    service: cdktf.stringToTerraform(struct!.service),
  }
}


export function dataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsStartupProbeGrpcToHclTerraform(struct?: DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsStartupProbeGrpc | cdktf.IResolvable): any {
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

export class DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsStartupProbeGrpcOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsStartupProbeGrpc | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsStartupProbeGrpc | cdktf.IResolvable | undefined) {
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
export interface DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsStartupProbeHttpGetHttpHeaders {
  /**
  * The header field name. This will be canonicalized upon output, so case-variant names will be understood as the same header.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/pgv2_percona_com_percona_pg_cluster_v2_manifest#name DataK8SPgv2PerconaComPerconaPgClusterV2Manifest#name}
  */
  readonly name: string;
  /**
  * The header field value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/pgv2_percona_com_percona_pg_cluster_v2_manifest#value DataK8SPgv2PerconaComPerconaPgClusterV2Manifest#value}
  */
  readonly value: string;
}

export function dataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsStartupProbeHttpGetHttpHeadersToTerraform(struct?: DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsStartupProbeHttpGetHttpHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsStartupProbeHttpGetHttpHeadersToHclTerraform(struct?: DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsStartupProbeHttpGetHttpHeaders | cdktf.IResolvable): any {
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

export class DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsStartupProbeHttpGetHttpHeadersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsStartupProbeHttpGetHttpHeaders | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsStartupProbeHttpGetHttpHeaders | cdktf.IResolvable | undefined) {
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

export class DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsStartupProbeHttpGetHttpHeadersList extends cdktf.ComplexList {
  public internalValue? : DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsStartupProbeHttpGetHttpHeaders[] | cdktf.IResolvable

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
  public get(index: number): DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsStartupProbeHttpGetHttpHeadersOutputReference {
    return new DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsStartupProbeHttpGetHttpHeadersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsStartupProbeHttpGet {
  /**
  * Host name to connect to, defaults to the pod IP. You probably want to set 'Host' in httpHeaders instead.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/pgv2_percona_com_percona_pg_cluster_v2_manifest#host DataK8SPgv2PerconaComPerconaPgClusterV2Manifest#host}
  */
  readonly host?: string;
  /**
  * Custom headers to set in the request. HTTP allows repeated headers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/pgv2_percona_com_percona_pg_cluster_v2_manifest#http_headers DataK8SPgv2PerconaComPerconaPgClusterV2Manifest#http_headers}
  */
  readonly httpHeaders?: DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsStartupProbeHttpGetHttpHeaders[] | cdktf.IResolvable;
  /**
  * Path to access on the HTTP server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/pgv2_percona_com_percona_pg_cluster_v2_manifest#path DataK8SPgv2PerconaComPerconaPgClusterV2Manifest#path}
  */
  readonly path?: string;
  /**
  * Name or number of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/pgv2_percona_com_percona_pg_cluster_v2_manifest#port DataK8SPgv2PerconaComPerconaPgClusterV2Manifest#port}
  */
  readonly port: string;
  /**
  * Scheme to use for connecting to the host. Defaults to HTTP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/pgv2_percona_com_percona_pg_cluster_v2_manifest#scheme DataK8SPgv2PerconaComPerconaPgClusterV2Manifest#scheme}
  */
  readonly scheme?: string;
}

export function dataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsStartupProbeHttpGetToTerraform(struct?: DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsStartupProbeHttpGet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host: cdktf.stringToTerraform(struct!.host),
    http_headers: cdktf.listMapper(dataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsStartupProbeHttpGetHttpHeadersToTerraform, false)(struct!.httpHeaders),
    path: cdktf.stringToTerraform(struct!.path),
    port: cdktf.stringToTerraform(struct!.port),
    scheme: cdktf.stringToTerraform(struct!.scheme),
  }
}


export function dataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsStartupProbeHttpGetToHclTerraform(struct?: DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsStartupProbeHttpGet | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(dataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsStartupProbeHttpGetHttpHeadersToHclTerraform, false)(struct!.httpHeaders),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsStartupProbeHttpGetHttpHeadersList",
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

export class DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsStartupProbeHttpGetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsStartupProbeHttpGet | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsStartupProbeHttpGet | cdktf.IResolvable | undefined) {
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
  private _httpHeaders = new DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsStartupProbeHttpGetHttpHeadersList(this, "http_headers", false);
  public get httpHeaders() {
    return this._httpHeaders;
  }
  public putHttpHeaders(value: DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsStartupProbeHttpGetHttpHeaders[] | cdktf.IResolvable) {
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
export interface DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsStartupProbeTcpSocket {
  /**
  * Optional: Host name to connect to, defaults to the pod IP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/pgv2_percona_com_percona_pg_cluster_v2_manifest#host DataK8SPgv2PerconaComPerconaPgClusterV2Manifest#host}
  */
  readonly host?: string;
  /**
  * Number or name of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/pgv2_percona_com_percona_pg_cluster_v2_manifest#port DataK8SPgv2PerconaComPerconaPgClusterV2Manifest#port}
  */
  readonly port: string;
}

export function dataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsStartupProbeTcpSocketToTerraform(struct?: DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsStartupProbeTcpSocket | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host: cdktf.stringToTerraform(struct!.host),
    port: cdktf.stringToTerraform(struct!.port),
  }
}


export function dataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsStartupProbeTcpSocketToHclTerraform(struct?: DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsStartupProbeTcpSocket | cdktf.IResolvable): any {
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

export class DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsStartupProbeTcpSocketOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsStartupProbeTcpSocket | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsStartupProbeTcpSocket | cdktf.IResolvable | undefined) {
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
export interface DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsStartupProbe {
  /**
  * Exec specifies the action to take.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/pgv2_percona_com_percona_pg_cluster_v2_manifest#exec DataK8SPgv2PerconaComPerconaPgClusterV2Manifest#exec}
  */
  readonly exec?: DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsStartupProbeExec;
  /**
  * Minimum consecutive failures for the probe to be considered failed after having succeeded. Defaults to 3. Minimum value is 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/pgv2_percona_com_percona_pg_cluster_v2_manifest#failure_threshold DataK8SPgv2PerconaComPerconaPgClusterV2Manifest#failure_threshold}
  */
  readonly failureThreshold?: number;
  /**
  * GRPC specifies an action involving a GRPC port.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/pgv2_percona_com_percona_pg_cluster_v2_manifest#grpc DataK8SPgv2PerconaComPerconaPgClusterV2Manifest#grpc}
  */
  readonly grpc?: DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsStartupProbeGrpc;
  /**
  * HTTPGet specifies the http request to perform.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/pgv2_percona_com_percona_pg_cluster_v2_manifest#http_get DataK8SPgv2PerconaComPerconaPgClusterV2Manifest#http_get}
  */
  readonly httpGet?: DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsStartupProbeHttpGet;
  /**
  * Number of seconds after the container has started before liveness probes are initiated. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/pgv2_percona_com_percona_pg_cluster_v2_manifest#initial_delay_seconds DataK8SPgv2PerconaComPerconaPgClusterV2Manifest#initial_delay_seconds}
  */
  readonly initialDelaySeconds?: number;
  /**
  * How often (in seconds) to perform the probe. Default to 10 seconds. Minimum value is 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/pgv2_percona_com_percona_pg_cluster_v2_manifest#period_seconds DataK8SPgv2PerconaComPerconaPgClusterV2Manifest#period_seconds}
  */
  readonly periodSeconds?: number;
  /**
  * Minimum consecutive successes for the probe to be considered successful after having failed. Defaults to 1. Must be 1 for liveness and startup. Minimum value is 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/pgv2_percona_com_percona_pg_cluster_v2_manifest#success_threshold DataK8SPgv2PerconaComPerconaPgClusterV2Manifest#success_threshold}
  */
  readonly successThreshold?: number;
  /**
  * TCPSocket specifies an action involving a TCP port.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/pgv2_percona_com_percona_pg_cluster_v2_manifest#tcp_socket DataK8SPgv2PerconaComPerconaPgClusterV2Manifest#tcp_socket}
  */
  readonly tcpSocket?: DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsStartupProbeTcpSocket;
  /**
  * Optional duration in seconds the pod needs to terminate gracefully upon probe failure. The grace period is the duration in seconds after the processes running in the pod are sent a termination signal and the time when the processes are forcibly halted with a kill signal. Set this value longer than the expected cleanup time for your process. If this value is nil, the pod's terminationGracePeriodSeconds will be used. Otherwise, this value overrides the value provided by the pod spec. Value must be non-negative integer. The value zero indicates stop immediately via the kill signal (no opportunity to shut down). This is a beta field and requires enabling ProbeTerminationGracePeriod feature gate. Minimum value is 1. spec.terminationGracePeriodSeconds is used if unset.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/pgv2_percona_com_percona_pg_cluster_v2_manifest#termination_grace_period_seconds DataK8SPgv2PerconaComPerconaPgClusterV2Manifest#termination_grace_period_seconds}
  */
  readonly terminationGracePeriodSeconds?: number;
  /**
  * Number of seconds after which the probe times out. Defaults to 1 second. Minimum value is 1. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/pgv2_percona_com_percona_pg_cluster_v2_manifest#timeout_seconds DataK8SPgv2PerconaComPerconaPgClusterV2Manifest#timeout_seconds}
  */
  readonly timeoutSeconds?: number;
}

export function dataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsStartupProbeToTerraform(struct?: DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsStartupProbe | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exec: dataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsStartupProbeExecToTerraform(struct!.exec),
    failure_threshold: cdktf.numberToTerraform(struct!.failureThreshold),
    grpc: dataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsStartupProbeGrpcToTerraform(struct!.grpc),
    http_get: dataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsStartupProbeHttpGetToTerraform(struct!.httpGet),
    initial_delay_seconds: cdktf.numberToTerraform(struct!.initialDelaySeconds),
    period_seconds: cdktf.numberToTerraform(struct!.periodSeconds),
    success_threshold: cdktf.numberToTerraform(struct!.successThreshold),
    tcp_socket: dataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsStartupProbeTcpSocketToTerraform(struct!.tcpSocket),
    termination_grace_period_seconds: cdktf.numberToTerraform(struct!.terminationGracePeriodSeconds),
    timeout_seconds: cdktf.numberToTerraform(struct!.timeoutSeconds),
  }
}


export function dataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsStartupProbeToHclTerraform(struct?: DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsStartupProbe | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exec: {
      value: dataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsStartupProbeExecToHclTerraform(struct!.exec),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsStartupProbeExec",
    },
    failure_threshold: {
      value: cdktf.numberToHclTerraform(struct!.failureThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    grpc: {
      value: dataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsStartupProbeGrpcToHclTerraform(struct!.grpc),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsStartupProbeGrpc",
    },
    http_get: {
      value: dataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsStartupProbeHttpGetToHclTerraform(struct!.httpGet),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsStartupProbeHttpGet",
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
      value: dataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsStartupProbeTcpSocketToHclTerraform(struct!.tcpSocket),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsStartupProbeTcpSocket",
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

export class DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsStartupProbeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsStartupProbe | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsStartupProbe | cdktf.IResolvable | undefined) {
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
  private _exec = new DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsStartupProbeExecOutputReference(this, "exec");
  public get exec() {
    return this._exec;
  }
  public putExec(value: DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsStartupProbeExec) {
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
  private _grpc = new DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsStartupProbeGrpcOutputReference(this, "grpc");
  public get grpc() {
    return this._grpc;
  }
  public putGrpc(value: DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsStartupProbeGrpc) {
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
  private _httpGet = new DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsStartupProbeHttpGetOutputReference(this, "http_get");
  public get httpGet() {
    return this._httpGet;
  }
  public putHttpGet(value: DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsStartupProbeHttpGet) {
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
  private _tcpSocket = new DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsStartupProbeTcpSocketOutputReference(this, "tcp_socket");
  public get tcpSocket() {
    return this._tcpSocket;
  }
  public putTcpSocket(value: DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsStartupProbeTcpSocket) {
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
export interface DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsVolumeDevices {
  /**
  * devicePath is the path inside of the container that the device will be mapped to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/pgv2_percona_com_percona_pg_cluster_v2_manifest#device_path DataK8SPgv2PerconaComPerconaPgClusterV2Manifest#device_path}
  */
  readonly devicePath: string;
  /**
  * name must match the name of a persistentVolumeClaim in the pod
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/pgv2_percona_com_percona_pg_cluster_v2_manifest#name DataK8SPgv2PerconaComPerconaPgClusterV2Manifest#name}
  */
  readonly name: string;
}

export function dataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsVolumeDevicesToTerraform(struct?: DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsVolumeDevices | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    device_path: cdktf.stringToTerraform(struct!.devicePath),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsVolumeDevicesToHclTerraform(struct?: DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsVolumeDevices | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    device_path: {
      value: cdktf.stringToHclTerraform(struct!.devicePath),
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

export class DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsVolumeDevicesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsVolumeDevices | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._devicePath !== undefined) {
      hasAnyValues = true;
      internalValueResult.devicePath = this._devicePath;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsVolumeDevices | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._devicePath = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._devicePath = value.devicePath;
      this._name = value.name;
    }
  }

  // device_path - computed: false, optional: false, required: true
  private _devicePath?: string; 
  public get devicePath() {
    return this.getStringAttribute('device_path');
  }
  public set devicePath(value: string) {
    this._devicePath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get devicePathInput() {
    return this._devicePath;
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

export class DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsVolumeDevicesList extends cdktf.ComplexList {
  public internalValue? : DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsVolumeDevices[] | cdktf.IResolvable

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
  public get(index: number): DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsVolumeDevicesOutputReference {
    return new DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsVolumeDevicesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsVolumeMounts {
  /**
  * Path within the container at which the volume should be mounted. Must not contain ':'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/pgv2_percona_com_percona_pg_cluster_v2_manifest#mount_path DataK8SPgv2PerconaComPerconaPgClusterV2Manifest#mount_path}
  */
  readonly mountPath: string;
  /**
  * mountPropagation determines how mounts are propagated from the host to container and the other way around. When not set, MountPropagationNone is used. This field is beta in 1.10. When RecursiveReadOnly is set to IfPossible or to Enabled, MountPropagation must be None or unspecified (which defaults to None).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/pgv2_percona_com_percona_pg_cluster_v2_manifest#mount_propagation DataK8SPgv2PerconaComPerconaPgClusterV2Manifest#mount_propagation}
  */
  readonly mountPropagation?: string;
  /**
  * This must match the Name of a Volume.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/pgv2_percona_com_percona_pg_cluster_v2_manifest#name DataK8SPgv2PerconaComPerconaPgClusterV2Manifest#name}
  */
  readonly name: string;
  /**
  * Mounted read-only if true, read-write otherwise (false or unspecified). Defaults to false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/pgv2_percona_com_percona_pg_cluster_v2_manifest#read_only DataK8SPgv2PerconaComPerconaPgClusterV2Manifest#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
  /**
  * RecursiveReadOnly specifies whether read-only mounts should be handled recursively. If ReadOnly is false, this field has no meaning and must be unspecified. If ReadOnly is true, and this field is set to Disabled, the mount is not made recursively read-only. If this field is set to IfPossible, the mount is made recursively read-only, if it is supported by the container runtime. If this field is set to Enabled, the mount is made recursively read-only if it is supported by the container runtime, otherwise the pod will not be started and an error will be generated to indicate the reason. If this field is set to IfPossible or Enabled, MountPropagation must be set to None (or be unspecified, which defaults to None). If this field is not specified, it is treated as an equivalent of Disabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/pgv2_percona_com_percona_pg_cluster_v2_manifest#recursive_read_only DataK8SPgv2PerconaComPerconaPgClusterV2Manifest#recursive_read_only}
  */
  readonly recursiveReadOnly?: string;
  /**
  * Path within the volume from which the container's volume should be mounted. Defaults to '' (volume's root).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/pgv2_percona_com_percona_pg_cluster_v2_manifest#sub_path DataK8SPgv2PerconaComPerconaPgClusterV2Manifest#sub_path}
  */
  readonly subPath?: string;
  /**
  * Expanded path within the volume from which the container's volume should be mounted. Behaves similarly to SubPath but environment variable references $(VAR_NAME) are expanded using the container's environment. Defaults to '' (volume's root). SubPathExpr and SubPath are mutually exclusive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/pgv2_percona_com_percona_pg_cluster_v2_manifest#sub_path_expr DataK8SPgv2PerconaComPerconaPgClusterV2Manifest#sub_path_expr}
  */
  readonly subPathExpr?: string;
}

export function dataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsVolumeMountsToTerraform(struct?: DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsVolumeMounts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mount_path: cdktf.stringToTerraform(struct!.mountPath),
    mount_propagation: cdktf.stringToTerraform(struct!.mountPropagation),
    name: cdktf.stringToTerraform(struct!.name),
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
    recursive_read_only: cdktf.stringToTerraform(struct!.recursiveReadOnly),
    sub_path: cdktf.stringToTerraform(struct!.subPath),
    sub_path_expr: cdktf.stringToTerraform(struct!.subPathExpr),
  }
}


export function dataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsVolumeMountsToHclTerraform(struct?: DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsVolumeMounts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mount_path: {
      value: cdktf.stringToHclTerraform(struct!.mountPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mount_propagation: {
      value: cdktf.stringToHclTerraform(struct!.mountPropagation),
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
    read_only: {
      value: cdktf.booleanToHclTerraform(struct!.readOnly),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    recursive_read_only: {
      value: cdktf.stringToHclTerraform(struct!.recursiveReadOnly),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sub_path: {
      value: cdktf.stringToHclTerraform(struct!.subPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sub_path_expr: {
      value: cdktf.stringToHclTerraform(struct!.subPathExpr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsVolumeMountsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsVolumeMounts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mountPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.mountPath = this._mountPath;
    }
    if (this._mountPropagation !== undefined) {
      hasAnyValues = true;
      internalValueResult.mountPropagation = this._mountPropagation;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._readOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.readOnly = this._readOnly;
    }
    if (this._recursiveReadOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.recursiveReadOnly = this._recursiveReadOnly;
    }
    if (this._subPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.subPath = this._subPath;
    }
    if (this._subPathExpr !== undefined) {
      hasAnyValues = true;
      internalValueResult.subPathExpr = this._subPathExpr;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsVolumeMounts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._mountPath = undefined;
      this._mountPropagation = undefined;
      this._name = undefined;
      this._readOnly = undefined;
      this._recursiveReadOnly = undefined;
      this._subPath = undefined;
      this._subPathExpr = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._mountPath = value.mountPath;
      this._mountPropagation = value.mountPropagation;
      this._name = value.name;
      this._readOnly = value.readOnly;
      this._recursiveReadOnly = value.recursiveReadOnly;
      this._subPath = value.subPath;
      this._subPathExpr = value.subPathExpr;
    }
  }

  // mount_path - computed: false, optional: false, required: true
  private _mountPath?: string; 
  public get mountPath() {
    return this.getStringAttribute('mount_path');
  }
  public set mountPath(value: string) {
    this._mountPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mountPathInput() {
    return this._mountPath;
  }

  // mount_propagation - computed: false, optional: true, required: false
  private _mountPropagation?: string; 
  public get mountPropagation() {
    return this.getStringAttribute('mount_propagation');
  }
  public set mountPropagation(value: string) {
    this._mountPropagation = value;
  }
  public resetMountPropagation() {
    this._mountPropagation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mountPropagationInput() {
    return this._mountPropagation;
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

  // read_only - computed: false, optional: true, required: false
  private _readOnly?: boolean | cdktf.IResolvable; 
  public get readOnly() {
    return this.getBooleanAttribute('read_only');
  }
  public set readOnly(value: boolean | cdktf.IResolvable) {
    this._readOnly = value;
  }
  public resetReadOnly() {
    this._readOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readOnlyInput() {
    return this._readOnly;
  }

  // recursive_read_only - computed: false, optional: true, required: false
  private _recursiveReadOnly?: string; 
  public get recursiveReadOnly() {
    return this.getStringAttribute('recursive_read_only');
  }
  public set recursiveReadOnly(value: string) {
    this._recursiveReadOnly = value;
  }
  public resetRecursiveReadOnly() {
    this._recursiveReadOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recursiveReadOnlyInput() {
    return this._recursiveReadOnly;
  }

  // sub_path - computed: false, optional: true, required: false
  private _subPath?: string; 
  public get subPath() {
    return this.getStringAttribute('sub_path');
  }
  public set subPath(value: string) {
    this._subPath = value;
  }
  public resetSubPath() {
    this._subPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subPathInput() {
    return this._subPath;
  }

  // sub_path_expr - computed: false, optional: true, required: false
  private _subPathExpr?: string; 
  public get subPathExpr() {
    return this.getStringAttribute('sub_path_expr');
  }
  public set subPathExpr(value: string) {
    this._subPathExpr = value;
  }
  public resetSubPathExpr() {
    this._subPathExpr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subPathExprInput() {
    return this._subPathExpr;
  }
}

export class DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsVolumeMountsList extends cdktf.ComplexList {
  public internalValue? : DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsVolumeMounts[] | cdktf.IResolvable

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
  public get(index: number): DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsVolumeMountsOutputReference {
    return new DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsVolumeMountsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecars {
  /**
  * Arguments to the entrypoint. The container image's CMD is used if this is not provided. Variable references $(VAR_NAME) are expanded using the container's environment. If a variable cannot be resolved, the reference in the input string will be unchanged. Double $$ are reduced to a single $, which allows for escaping the $(VAR_NAME) syntax: i.e. '$$(VAR_NAME)' will produce the string literal '$(VAR_NAME)'. Escaped references will never be expanded, regardless of whether the variable exists or not. Cannot be updated. More info: https://kubernetes.io/docs/tasks/inject-data-application/define-command-argument-container/#running-a-command-in-a-shell
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/pgv2_percona_com_percona_pg_cluster_v2_manifest#args DataK8SPgv2PerconaComPerconaPgClusterV2Manifest#args}
  */
  readonly args?: string[];
  /**
  * Entrypoint array. Not executed within a shell. The container image's ENTRYPOINT is used if this is not provided. Variable references $(VAR_NAME) are expanded using the container's environment. If a variable cannot be resolved, the reference in the input string will be unchanged. Double $$ are reduced to a single $, which allows for escaping the $(VAR_NAME) syntax: i.e. '$$(VAR_NAME)' will produce the string literal '$(VAR_NAME)'. Escaped references will never be expanded, regardless of whether the variable exists or not. Cannot be updated. More info: https://kubernetes.io/docs/tasks/inject-data-application/define-command-argument-container/#running-a-command-in-a-shell
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/pgv2_percona_com_percona_pg_cluster_v2_manifest#command DataK8SPgv2PerconaComPerconaPgClusterV2Manifest#command}
  */
  readonly command?: string[];
  /**
  * List of environment variables to set in the container. Cannot be updated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/pgv2_percona_com_percona_pg_cluster_v2_manifest#env DataK8SPgv2PerconaComPerconaPgClusterV2Manifest#env}
  */
  readonly env?: DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsEnv[] | cdktf.IResolvable;
  /**
  * List of sources to populate environment variables in the container. The keys defined within a source must be a C_IDENTIFIER. All invalid keys will be reported as an event when the container is starting. When a key exists in multiple sources, the value associated with the last source will take precedence. Values defined by an Env with a duplicate key will take precedence. Cannot be updated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/pgv2_percona_com_percona_pg_cluster_v2_manifest#env_from DataK8SPgv2PerconaComPerconaPgClusterV2Manifest#env_from}
  */
  readonly envFrom?: DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsEnvFrom[] | cdktf.IResolvable;
  /**
  * Container image name. More info: https://kubernetes.io/docs/concepts/containers/images This field is optional to allow higher level config management to default or override container images in workload controllers like Deployments and StatefulSets.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/pgv2_percona_com_percona_pg_cluster_v2_manifest#image DataK8SPgv2PerconaComPerconaPgClusterV2Manifest#image}
  */
  readonly image?: string;
  /**
  * Image pull policy. One of Always, Never, IfNotPresent. Defaults to Always if :latest tag is specified, or IfNotPresent otherwise. Cannot be updated. More info: https://kubernetes.io/docs/concepts/containers/images#updating-images
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/pgv2_percona_com_percona_pg_cluster_v2_manifest#image_pull_policy DataK8SPgv2PerconaComPerconaPgClusterV2Manifest#image_pull_policy}
  */
  readonly imagePullPolicy?: string;
  /**
  * Actions that the management system should take in response to container lifecycle events. Cannot be updated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/pgv2_percona_com_percona_pg_cluster_v2_manifest#lifecycle DataK8SPgv2PerconaComPerconaPgClusterV2Manifest#lifecycle}
  */
  readonly lifecycle?: DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsLifecycle;
  /**
  * Periodic probe of container liveness. Container will be restarted if the probe fails. Cannot be updated. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/pgv2_percona_com_percona_pg_cluster_v2_manifest#liveness_probe DataK8SPgv2PerconaComPerconaPgClusterV2Manifest#liveness_probe}
  */
  readonly livenessProbe?: DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsLivenessProbe;
  /**
  * Name of the container specified as a DNS_LABEL. Each container in a pod must have a unique name (DNS_LABEL). Cannot be updated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/pgv2_percona_com_percona_pg_cluster_v2_manifest#name DataK8SPgv2PerconaComPerconaPgClusterV2Manifest#name}
  */
  readonly name: string;
  /**
  * List of ports to expose from the container. Not specifying a port here DOES NOT prevent that port from being exposed. Any port which is listening on the default '0.0.0.0' address inside a container will be accessible from the network. Modifying this array with strategic merge patch may corrupt the data. For more information See https://github.com/kubernetes/kubernetes/issues/108255. Cannot be updated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/pgv2_percona_com_percona_pg_cluster_v2_manifest#ports DataK8SPgv2PerconaComPerconaPgClusterV2Manifest#ports}
  */
  readonly ports?: DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsPorts[] | cdktf.IResolvable;
  /**
  * Periodic probe of container service readiness. Container will be removed from service endpoints if the probe fails. Cannot be updated. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/pgv2_percona_com_percona_pg_cluster_v2_manifest#readiness_probe DataK8SPgv2PerconaComPerconaPgClusterV2Manifest#readiness_probe}
  */
  readonly readinessProbe?: DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsReadinessProbe;
  /**
  * Resources resize policy for the container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/pgv2_percona_com_percona_pg_cluster_v2_manifest#resize_policy DataK8SPgv2PerconaComPerconaPgClusterV2Manifest#resize_policy}
  */
  readonly resizePolicy?: DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsResizePolicy[] | cdktf.IResolvable;
  /**
  * Compute Resources required by this container. Cannot be updated. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/pgv2_percona_com_percona_pg_cluster_v2_manifest#resources DataK8SPgv2PerconaComPerconaPgClusterV2Manifest#resources}
  */
  readonly resources?: DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsResources;
  /**
  * RestartPolicy defines the restart behavior of individual containers in a pod. This field may only be set for init containers, and the only allowed value is 'Always'. For non-init containers or when this field is not specified, the restart behavior is defined by the Pod's restart policy and the container type. Setting the RestartPolicy as 'Always' for the init container will have the following effect: this init container will be continually restarted on exit until all regular containers have terminated. Once all regular containers have completed, all init containers with restartPolicy 'Always' will be shut down. This lifecycle differs from normal init containers and is often referred to as a 'sidecar' container. Although this init container still starts in the init container sequence, it does not wait for the container to complete before proceeding to the next init container. Instead, the next init container starts immediately after this init container is started, or after any startupProbe has successfully completed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/pgv2_percona_com_percona_pg_cluster_v2_manifest#restart_policy DataK8SPgv2PerconaComPerconaPgClusterV2Manifest#restart_policy}
  */
  readonly restartPolicy?: string;
  /**
  * SecurityContext defines the security options the container should be run with. If set, the fields of SecurityContext override the equivalent fields of PodSecurityContext. More info: https://kubernetes.io/docs/tasks/configure-pod-container/security-context/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/pgv2_percona_com_percona_pg_cluster_v2_manifest#security_context DataK8SPgv2PerconaComPerconaPgClusterV2Manifest#security_context}
  */
  readonly securityContext?: DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsSecurityContext;
  /**
  * StartupProbe indicates that the Pod has successfully initialized. If specified, no other probes are executed until this completes successfully. If this probe fails, the Pod will be restarted, just as if the livenessProbe failed. This can be used to provide different probe parameters at the beginning of a Pod's lifecycle, when it might take a long time to load data or warm a cache, than during steady-state operation. This cannot be updated. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/pgv2_percona_com_percona_pg_cluster_v2_manifest#startup_probe DataK8SPgv2PerconaComPerconaPgClusterV2Manifest#startup_probe}
  */
  readonly startupProbe?: DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsStartupProbe;
  /**
  * Whether this container should allocate a buffer for stdin in the container runtime. If this is not set, reads from stdin in the container will always result in EOF. Default is false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/pgv2_percona_com_percona_pg_cluster_v2_manifest#stdin DataK8SPgv2PerconaComPerconaPgClusterV2Manifest#stdin}
  */
  readonly stdin?: boolean | cdktf.IResolvable;
  /**
  * Whether the container runtime should close the stdin channel after it has been opened by a single attach. When stdin is true the stdin stream will remain open across multiple attach sessions. If stdinOnce is set to true, stdin is opened on container start, is empty until the first client attaches to stdin, and then remains open and accepts data until the client disconnects, at which time stdin is closed and remains closed until the container is restarted. If this flag is false, a container processes that reads from stdin will never receive an EOF. Default is false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/pgv2_percona_com_percona_pg_cluster_v2_manifest#stdin_once DataK8SPgv2PerconaComPerconaPgClusterV2Manifest#stdin_once}
  */
  readonly stdinOnce?: boolean | cdktf.IResolvable;
  /**
  * Optional: Path at which the file to which the container's termination message will be written is mounted into the container's filesystem. Message written is intended to be brief final status, such as an assertion failure message. Will be truncated by the node if greater than 4096 bytes. The total message length across all containers will be limited to 12kb. Defaults to /dev/termination-log. Cannot be updated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/pgv2_percona_com_percona_pg_cluster_v2_manifest#termination_message_path DataK8SPgv2PerconaComPerconaPgClusterV2Manifest#termination_message_path}
  */
  readonly terminationMessagePath?: string;
  /**
  * Indicate how the termination message should be populated. File will use the contents of terminationMessagePath to populate the container status message on both success and failure. FallbackToLogsOnError will use the last chunk of container log output if the termination message file is empty and the container exited with an error. The log output is limited to 2048 bytes or 80 lines, whichever is smaller. Defaults to File. Cannot be updated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/pgv2_percona_com_percona_pg_cluster_v2_manifest#termination_message_policy DataK8SPgv2PerconaComPerconaPgClusterV2Manifest#termination_message_policy}
  */
  readonly terminationMessagePolicy?: string;
  /**
  * Whether this container should allocate a TTY for itself, also requires 'stdin' to be true. Default is false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/pgv2_percona_com_percona_pg_cluster_v2_manifest#tty DataK8SPgv2PerconaComPerconaPgClusterV2Manifest#tty}
  */
  readonly tty?: boolean | cdktf.IResolvable;
  /**
  * volumeDevices is the list of block devices to be used by the container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/pgv2_percona_com_percona_pg_cluster_v2_manifest#volume_devices DataK8SPgv2PerconaComPerconaPgClusterV2Manifest#volume_devices}
  */
  readonly volumeDevices?: DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsVolumeDevices[] | cdktf.IResolvable;
  /**
  * Pod volumes to mount into the container's filesystem. Cannot be updated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/pgv2_percona_com_percona_pg_cluster_v2_manifest#volume_mounts DataK8SPgv2PerconaComPerconaPgClusterV2Manifest#volume_mounts}
  */
  readonly volumeMounts?: DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsVolumeMounts[] | cdktf.IResolvable;
  /**
  * Container's working directory. If not specified, the container runtime's default will be used, which might be configured in the container image. Cannot be updated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/pgv2_percona_com_percona_pg_cluster_v2_manifest#working_dir DataK8SPgv2PerconaComPerconaPgClusterV2Manifest#working_dir}
  */
  readonly workingDir?: string;
}

export function dataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsToTerraform(struct?: DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecars | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    args: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.args),
    command: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.command),
    env: cdktf.listMapper(dataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsEnvToTerraform, false)(struct!.env),
    env_from: cdktf.listMapper(dataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsEnvFromToTerraform, false)(struct!.envFrom),
    image: cdktf.stringToTerraform(struct!.image),
    image_pull_policy: cdktf.stringToTerraform(struct!.imagePullPolicy),
    lifecycle: dataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsLifecycleToTerraform(struct!.lifecycle),
    liveness_probe: dataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsLivenessProbeToTerraform(struct!.livenessProbe),
    name: cdktf.stringToTerraform(struct!.name),
    ports: cdktf.listMapper(dataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsPortsToTerraform, false)(struct!.ports),
    readiness_probe: dataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsReadinessProbeToTerraform(struct!.readinessProbe),
    resize_policy: cdktf.listMapper(dataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsResizePolicyToTerraform, false)(struct!.resizePolicy),
    resources: dataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsResourcesToTerraform(struct!.resources),
    restart_policy: cdktf.stringToTerraform(struct!.restartPolicy),
    security_context: dataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsSecurityContextToTerraform(struct!.securityContext),
    startup_probe: dataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsStartupProbeToTerraform(struct!.startupProbe),
    stdin: cdktf.booleanToTerraform(struct!.stdin),
    stdin_once: cdktf.booleanToTerraform(struct!.stdinOnce),
    termination_message_path: cdktf.stringToTerraform(struct!.terminationMessagePath),
    termination_message_policy: cdktf.stringToTerraform(struct!.terminationMessagePolicy),
    tty: cdktf.booleanToTerraform(struct!.tty),
    volume_devices: cdktf.listMapper(dataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsVolumeDevicesToTerraform, false)(struct!.volumeDevices),
    volume_mounts: cdktf.listMapper(dataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsVolumeMountsToTerraform, false)(struct!.volumeMounts),
    working_dir: cdktf.stringToTerraform(struct!.workingDir),
  }
}


export function dataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsToHclTerraform(struct?: DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecars | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    args: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.args),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    command: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.command),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    env: {
      value: cdktf.listMapperHcl(dataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsEnvToHclTerraform, false)(struct!.env),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsEnvList",
    },
    env_from: {
      value: cdktf.listMapperHcl(dataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsEnvFromToHclTerraform, false)(struct!.envFrom),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsEnvFromList",
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
    lifecycle: {
      value: dataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsLifecycleToHclTerraform(struct!.lifecycle),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsLifecycle",
    },
    liveness_probe: {
      value: dataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsLivenessProbeToHclTerraform(struct!.livenessProbe),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsLivenessProbe",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ports: {
      value: cdktf.listMapperHcl(dataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsPortsToHclTerraform, false)(struct!.ports),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsPortsList",
    },
    readiness_probe: {
      value: dataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsReadinessProbeToHclTerraform(struct!.readinessProbe),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsReadinessProbe",
    },
    resize_policy: {
      value: cdktf.listMapperHcl(dataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsResizePolicyToHclTerraform, false)(struct!.resizePolicy),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsResizePolicyList",
    },
    resources: {
      value: dataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsResourcesToHclTerraform(struct!.resources),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsResources",
    },
    restart_policy: {
      value: cdktf.stringToHclTerraform(struct!.restartPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    security_context: {
      value: dataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsSecurityContextToHclTerraform(struct!.securityContext),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsSecurityContext",
    },
    startup_probe: {
      value: dataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsStartupProbeToHclTerraform(struct!.startupProbe),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsStartupProbe",
    },
    stdin: {
      value: cdktf.booleanToHclTerraform(struct!.stdin),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    stdin_once: {
      value: cdktf.booleanToHclTerraform(struct!.stdinOnce),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    termination_message_path: {
      value: cdktf.stringToHclTerraform(struct!.terminationMessagePath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    termination_message_policy: {
      value: cdktf.stringToHclTerraform(struct!.terminationMessagePolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tty: {
      value: cdktf.booleanToHclTerraform(struct!.tty),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    volume_devices: {
      value: cdktf.listMapperHcl(dataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsVolumeDevicesToHclTerraform, false)(struct!.volumeDevices),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsVolumeDevicesList",
    },
    volume_mounts: {
      value: cdktf.listMapperHcl(dataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsVolumeMountsToHclTerraform, false)(struct!.volumeMounts),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsVolumeMountsList",
    },
    working_dir: {
      value: cdktf.stringToHclTerraform(struct!.workingDir),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecars | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._args !== undefined) {
      hasAnyValues = true;
      internalValueResult.args = this._args;
    }
    if (this._command !== undefined) {
      hasAnyValues = true;
      internalValueResult.command = this._command;
    }
    if (this._env?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.env = this._env?.internalValue;
    }
    if (this._envFrom?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.envFrom = this._envFrom?.internalValue;
    }
    if (this._image !== undefined) {
      hasAnyValues = true;
      internalValueResult.image = this._image;
    }
    if (this._imagePullPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.imagePullPolicy = this._imagePullPolicy;
    }
    if (this._lifecycle?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.lifecycle = this._lifecycle?.internalValue;
    }
    if (this._livenessProbe?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.livenessProbe = this._livenessProbe?.internalValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._ports?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ports = this._ports?.internalValue;
    }
    if (this._readinessProbe?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.readinessProbe = this._readinessProbe?.internalValue;
    }
    if (this._resizePolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resizePolicy = this._resizePolicy?.internalValue;
    }
    if (this._resources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resources = this._resources?.internalValue;
    }
    if (this._restartPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.restartPolicy = this._restartPolicy;
    }
    if (this._securityContext?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityContext = this._securityContext?.internalValue;
    }
    if (this._startupProbe?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.startupProbe = this._startupProbe?.internalValue;
    }
    if (this._stdin !== undefined) {
      hasAnyValues = true;
      internalValueResult.stdin = this._stdin;
    }
    if (this._stdinOnce !== undefined) {
      hasAnyValues = true;
      internalValueResult.stdinOnce = this._stdinOnce;
    }
    if (this._terminationMessagePath !== undefined) {
      hasAnyValues = true;
      internalValueResult.terminationMessagePath = this._terminationMessagePath;
    }
    if (this._terminationMessagePolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.terminationMessagePolicy = this._terminationMessagePolicy;
    }
    if (this._tty !== undefined) {
      hasAnyValues = true;
      internalValueResult.tty = this._tty;
    }
    if (this._volumeDevices?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeDevices = this._volumeDevices?.internalValue;
    }
    if (this._volumeMounts?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeMounts = this._volumeMounts?.internalValue;
    }
    if (this._workingDir !== undefined) {
      hasAnyValues = true;
      internalValueResult.workingDir = this._workingDir;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecars | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._args = undefined;
      this._command = undefined;
      this._env.internalValue = undefined;
      this._envFrom.internalValue = undefined;
      this._image = undefined;
      this._imagePullPolicy = undefined;
      this._lifecycle.internalValue = undefined;
      this._livenessProbe.internalValue = undefined;
      this._name = undefined;
      this._ports.internalValue = undefined;
      this._readinessProbe.internalValue = undefined;
      this._resizePolicy.internalValue = undefined;
      this._resources.internalValue = undefined;
      this._restartPolicy = undefined;
      this._securityContext.internalValue = undefined;
      this._startupProbe.internalValue = undefined;
      this._stdin = undefined;
      this._stdinOnce = undefined;
      this._terminationMessagePath = undefined;
      this._terminationMessagePolicy = undefined;
      this._tty = undefined;
      this._volumeDevices.internalValue = undefined;
      this._volumeMounts.internalValue = undefined;
      this._workingDir = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._args = value.args;
      this._command = value.command;
      this._env.internalValue = value.env;
      this._envFrom.internalValue = value.envFrom;
      this._image = value.image;
      this._imagePullPolicy = value.imagePullPolicy;
      this._lifecycle.internalValue = value.lifecycle;
      this._livenessProbe.internalValue = value.livenessProbe;
      this._name = value.name;
      this._ports.internalValue = value.ports;
      this._readinessProbe.internalValue = value.readinessProbe;
      this._resizePolicy.internalValue = value.resizePolicy;
      this._resources.internalValue = value.resources;
      this._restartPolicy = value.restartPolicy;
      this._securityContext.internalValue = value.securityContext;
      this._startupProbe.internalValue = value.startupProbe;
      this._stdin = value.stdin;
      this._stdinOnce = value.stdinOnce;
      this._terminationMessagePath = value.terminationMessagePath;
      this._terminationMessagePolicy = value.terminationMessagePolicy;
      this._tty = value.tty;
      this._volumeDevices.internalValue = value.volumeDevices;
      this._volumeMounts.internalValue = value.volumeMounts;
      this._workingDir = value.workingDir;
    }
  }

  // args - computed: false, optional: true, required: false
  private _args?: string[]; 
  public get args() {
    return this.getListAttribute('args');
  }
  public set args(value: string[]) {
    this._args = value;
  }
  public resetArgs() {
    this._args = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get argsInput() {
    return this._args;
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

  // env - computed: false, optional: true, required: false
  private _env = new DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsEnvList(this, "env", false);
  public get env() {
    return this._env;
  }
  public putEnv(value: DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsEnv[] | cdktf.IResolvable) {
    this._env.internalValue = value;
  }
  public resetEnv() {
    this._env.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get envInput() {
    return this._env.internalValue;
  }

  // env_from - computed: false, optional: true, required: false
  private _envFrom = new DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsEnvFromList(this, "env_from", false);
  public get envFrom() {
    return this._envFrom;
  }
  public putEnvFrom(value: DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsEnvFrom[] | cdktf.IResolvable) {
    this._envFrom.internalValue = value;
  }
  public resetEnvFrom() {
    this._envFrom.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get envFromInput() {
    return this._envFrom.internalValue;
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

  // lifecycle - computed: false, optional: true, required: false
  private _lifecycle = new DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsLifecycleOutputReference(this, "lifecycle");
  public get lifecycle() {
    return this._lifecycle;
  }
  public putLifecycle(value: DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsLifecycle) {
    this._lifecycle.internalValue = value;
  }
  public resetLifecycle() {
    this._lifecycle.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lifecycleInput() {
    return this._lifecycle.internalValue;
  }

  // liveness_probe - computed: false, optional: true, required: false
  private _livenessProbe = new DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsLivenessProbeOutputReference(this, "liveness_probe");
  public get livenessProbe() {
    return this._livenessProbe;
  }
  public putLivenessProbe(value: DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsLivenessProbe) {
    this._livenessProbe.internalValue = value;
  }
  public resetLivenessProbe() {
    this._livenessProbe.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get livenessProbeInput() {
    return this._livenessProbe.internalValue;
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

  // ports - computed: false, optional: true, required: false
  private _ports = new DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsPortsList(this, "ports", false);
  public get ports() {
    return this._ports;
  }
  public putPorts(value: DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsPorts[] | cdktf.IResolvable) {
    this._ports.internalValue = value;
  }
  public resetPorts() {
    this._ports.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portsInput() {
    return this._ports.internalValue;
  }

  // readiness_probe - computed: false, optional: true, required: false
  private _readinessProbe = new DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsReadinessProbeOutputReference(this, "readiness_probe");
  public get readinessProbe() {
    return this._readinessProbe;
  }
  public putReadinessProbe(value: DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsReadinessProbe) {
    this._readinessProbe.internalValue = value;
  }
  public resetReadinessProbe() {
    this._readinessProbe.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readinessProbeInput() {
    return this._readinessProbe.internalValue;
  }

  // resize_policy - computed: false, optional: true, required: false
  private _resizePolicy = new DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsResizePolicyList(this, "resize_policy", false);
  public get resizePolicy() {
    return this._resizePolicy;
  }
  public putResizePolicy(value: DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsResizePolicy[] | cdktf.IResolvable) {
    this._resizePolicy.internalValue = value;
  }
  public resetResizePolicy() {
    this._resizePolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resizePolicyInput() {
    return this._resizePolicy.internalValue;
  }

  // resources - computed: false, optional: true, required: false
  private _resources = new DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsResourcesOutputReference(this, "resources");
  public get resources() {
    return this._resources;
  }
  public putResources(value: DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsResources) {
    this._resources.internalValue = value;
  }
  public resetResources() {
    this._resources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesInput() {
    return this._resources.internalValue;
  }

  // restart_policy - computed: false, optional: true, required: false
  private _restartPolicy?: string; 
  public get restartPolicy() {
    return this.getStringAttribute('restart_policy');
  }
  public set restartPolicy(value: string) {
    this._restartPolicy = value;
  }
  public resetRestartPolicy() {
    this._restartPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restartPolicyInput() {
    return this._restartPolicy;
  }

  // security_context - computed: false, optional: true, required: false
  private _securityContext = new DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsSecurityContextOutputReference(this, "security_context");
  public get securityContext() {
    return this._securityContext;
  }
  public putSecurityContext(value: DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsSecurityContext) {
    this._securityContext.internalValue = value;
  }
  public resetSecurityContext() {
    this._securityContext.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityContextInput() {
    return this._securityContext.internalValue;
  }

  // startup_probe - computed: false, optional: true, required: false
  private _startupProbe = new DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsStartupProbeOutputReference(this, "startup_probe");
  public get startupProbe() {
    return this._startupProbe;
  }
  public putStartupProbe(value: DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsStartupProbe) {
    this._startupProbe.internalValue = value;
  }
  public resetStartupProbe() {
    this._startupProbe.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startupProbeInput() {
    return this._startupProbe.internalValue;
  }

  // stdin - computed: false, optional: true, required: false
  private _stdin?: boolean | cdktf.IResolvable; 
  public get stdin() {
    return this.getBooleanAttribute('stdin');
  }
  public set stdin(value: boolean | cdktf.IResolvable) {
    this._stdin = value;
  }
  public resetStdin() {
    this._stdin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stdinInput() {
    return this._stdin;
  }

  // stdin_once - computed: false, optional: true, required: false
  private _stdinOnce?: boolean | cdktf.IResolvable; 
  public get stdinOnce() {
    return this.getBooleanAttribute('stdin_once');
  }
  public set stdinOnce(value: boolean | cdktf.IResolvable) {
    this._stdinOnce = value;
  }
  public resetStdinOnce() {
    this._stdinOnce = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stdinOnceInput() {
    return this._stdinOnce;
  }

  // termination_message_path - computed: false, optional: true, required: false
  private _terminationMessagePath?: string; 
  public get terminationMessagePath() {
    return this.getStringAttribute('termination_message_path');
  }
  public set terminationMessagePath(value: string) {
    this._terminationMessagePath = value;
  }
  public resetTerminationMessagePath() {
    this._terminationMessagePath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get terminationMessagePathInput() {
    return this._terminationMessagePath;
  }

  // termination_message_policy - computed: false, optional: true, required: false
  private _terminationMessagePolicy?: string; 
  public get terminationMessagePolicy() {
    return this.getStringAttribute('termination_message_policy');
  }
  public set terminationMessagePolicy(value: string) {
    this._terminationMessagePolicy = value;
  }
  public resetTerminationMessagePolicy() {
    this._terminationMessagePolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get terminationMessagePolicyInput() {
    return this._terminationMessagePolicy;
  }

  // tty - computed: false, optional: true, required: false
  private _tty?: boolean | cdktf.IResolvable; 
  public get tty() {
    return this.getBooleanAttribute('tty');
  }
  public set tty(value: boolean | cdktf.IResolvable) {
    this._tty = value;
  }
  public resetTty() {
    this._tty = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ttyInput() {
    return this._tty;
  }

  // volume_devices - computed: false, optional: true, required: false
  private _volumeDevices = new DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsVolumeDevicesList(this, "volume_devices", false);
  public get volumeDevices() {
    return this._volumeDevices;
  }
  public putVolumeDevices(value: DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsVolumeDevices[] | cdktf.IResolvable) {
    this._volumeDevices.internalValue = value;
  }
  public resetVolumeDevices() {
    this._volumeDevices.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeDevicesInput() {
    return this._volumeDevices.internalValue;
  }

  // volume_mounts - computed: false, optional: true, required: false
  private _volumeMounts = new DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsVolumeMountsList(this, "volume_mounts", false);
  public get volumeMounts() {
    return this._volumeMounts;
  }
  public putVolumeMounts(value: DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsVolumeMounts[] | cdktf.IResolvable) {
    this._volumeMounts.internalValue = value;
  }
  public resetVolumeMounts() {
    this._volumeMounts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeMountsInput() {
    return this._volumeMounts.internalValue;
  }

  // working_dir - computed: false, optional: true, required: false
  private _workingDir?: string; 
  public get workingDir() {
    return this.getStringAttribute('working_dir');
  }
  public set workingDir(value: string) {
    this._workingDir = value;
  }
  public resetWorkingDir() {
    this._workingDir = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workingDirInput() {
    return this._workingDir;
  }
}

export class DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsList extends cdktf.ComplexList {
  public internalValue? : DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecars[] | cdktf.IResolvable

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
  public get(index: number): DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsOutputReference {
    return new DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerTolerations {
  /**
  * Effect indicates the taint effect to match. Empty means match all taint effects. When specified, allowed values are NoSchedule, PreferNoSchedule and NoExecute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/pgv2_percona_com_percona_pg_cluster_v2_manifest#effect DataK8SPgv2PerconaComPerconaPgClusterV2Manifest#effect}
  */
  readonly effect?: string;
  /**
  * Key is the taint key that the toleration applies to. Empty means match all taint keys. If the key is empty, operator must be Exists; this combination means to match all values and all keys.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/pgv2_percona_com_percona_pg_cluster_v2_manifest#key DataK8SPgv2PerconaComPerconaPgClusterV2Manifest#key}
  */
  readonly key?: string;
  /**
  * Operator represents a key's relationship to the value. Valid operators are Exists and Equal. Defaults to Equal. Exists is equivalent to wildcard for value, so that a pod can tolerate all taints of a particular category.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/pgv2_percona_com_percona_pg_cluster_v2_manifest#operator DataK8SPgv2PerconaComPerconaPgClusterV2Manifest#operator}
  */
  readonly operator?: string;
  /**
  * TolerationSeconds represents the period of time the toleration (which must be of effect NoExecute, otherwise this field is ignored) tolerates the taint. By default, it is not set, which means tolerate the taint forever (do not evict). Zero and negative values will be treated as 0 (evict immediately) by the system.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/pgv2_percona_com_percona_pg_cluster_v2_manifest#toleration_seconds DataK8SPgv2PerconaComPerconaPgClusterV2Manifest#toleration_seconds}
  */
  readonly tolerationSeconds?: number;
  /**
  * Value is the taint value the toleration matches to. If the operator is Exists, the value should be empty, otherwise just a regular string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/pgv2_percona_com_percona_pg_cluster_v2_manifest#value DataK8SPgv2PerconaComPerconaPgClusterV2Manifest#value}
  */
  readonly value?: string;
}

export function dataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerTolerationsToTerraform(struct?: DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerTolerations | cdktf.IResolvable): any {
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


export function dataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerTolerationsToHclTerraform(struct?: DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerTolerations | cdktf.IResolvable): any {
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

export class DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerTolerationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerTolerations | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerTolerations | cdktf.IResolvable | undefined) {
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

export class DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerTolerationsList extends cdktf.ComplexList {
  public internalValue? : DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerTolerations[] | cdktf.IResolvable

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
  public get(index: number): DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerTolerationsOutputReference {
    return new DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerTolerationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerTopologySpreadConstraintsLabelSelectorMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/pgv2_percona_com_percona_pg_cluster_v2_manifest#key DataK8SPgv2PerconaComPerconaPgClusterV2Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/pgv2_percona_com_percona_pg_cluster_v2_manifest#operator DataK8SPgv2PerconaComPerconaPgClusterV2Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/pgv2_percona_com_percona_pg_cluster_v2_manifest#values DataK8SPgv2PerconaComPerconaPgClusterV2Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerTopologySpreadConstraintsLabelSelectorMatchExpressionsToTerraform(struct?: DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerTopologySpreadConstraintsLabelSelectorMatchExpressions | cdktf.IResolvable): any {
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


export function dataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerTopologySpreadConstraintsLabelSelectorMatchExpressionsToHclTerraform(struct?: DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerTopologySpreadConstraintsLabelSelectorMatchExpressions | cdktf.IResolvable): any {
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

export class DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerTopologySpreadConstraintsLabelSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerTopologySpreadConstraintsLabelSelectorMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerTopologySpreadConstraintsLabelSelectorMatchExpressions | cdktf.IResolvable | undefined) {
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

export class DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerTopologySpreadConstraintsLabelSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerTopologySpreadConstraintsLabelSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerTopologySpreadConstraintsLabelSelectorMatchExpressionsOutputReference {
    return new DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerTopologySpreadConstraintsLabelSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerTopologySpreadConstraintsLabelSelector {
  /**
  * matchExpressions is a list of label selector requirements. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/pgv2_percona_com_percona_pg_cluster_v2_manifest#match_expressions DataK8SPgv2PerconaComPerconaPgClusterV2Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerTopologySpreadConstraintsLabelSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/pgv2_percona_com_percona_pg_cluster_v2_manifest#match_labels DataK8SPgv2PerconaComPerconaPgClusterV2Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerTopologySpreadConstraintsLabelSelectorToTerraform(struct?: DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerTopologySpreadConstraintsLabelSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerTopologySpreadConstraintsLabelSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerTopologySpreadConstraintsLabelSelectorToHclTerraform(struct?: DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerTopologySpreadConstraintsLabelSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerTopologySpreadConstraintsLabelSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerTopologySpreadConstraintsLabelSelectorMatchExpressionsList",
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

export class DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerTopologySpreadConstraintsLabelSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerTopologySpreadConstraintsLabelSelector | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerTopologySpreadConstraintsLabelSelector | cdktf.IResolvable | undefined) {
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
  private _matchExpressions = new DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerTopologySpreadConstraintsLabelSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerTopologySpreadConstraintsLabelSelectorMatchExpressions[] | cdktf.IResolvable) {
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
export interface DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerTopologySpreadConstraints {
  /**
  * LabelSelector is used to find matching pods. Pods that match this label selector are counted to determine the number of pods in their corresponding topology domain.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/pgv2_percona_com_percona_pg_cluster_v2_manifest#label_selector DataK8SPgv2PerconaComPerconaPgClusterV2Manifest#label_selector}
  */
  readonly labelSelector?: DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerTopologySpreadConstraintsLabelSelector;
  /**
  * MatchLabelKeys is a set of pod label keys to select the pods over which spreading will be calculated. The keys are used to lookup values from the incoming pod labels, those key-value labels are ANDed with labelSelector to select the group of existing pods over which spreading will be calculated for the incoming pod. The same key is forbidden to exist in both MatchLabelKeys and LabelSelector. MatchLabelKeys cannot be set when LabelSelector isn't set. Keys that don't exist in the incoming pod labels will be ignored. A null or empty list means only match against labelSelector. This is a beta field and requires the MatchLabelKeysInPodTopologySpread feature gate to be enabled (enabled by default).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/pgv2_percona_com_percona_pg_cluster_v2_manifest#match_label_keys DataK8SPgv2PerconaComPerconaPgClusterV2Manifest#match_label_keys}
  */
  readonly matchLabelKeys?: string[];
  /**
  * MaxSkew describes the degree to which pods may be unevenly distributed. When 'whenUnsatisfiable=DoNotSchedule', it is the maximum permitted difference between the number of matching pods in the target topology and the global minimum. The global minimum is the minimum number of matching pods in an eligible domain or zero if the number of eligible domains is less than MinDomains. For example, in a 3-zone cluster, MaxSkew is set to 1, and pods with the same labelSelector spread as 2/2/1: In this case, the global minimum is 1. | zone1 | zone2 | zone3 | | P P | P P | P | - if MaxSkew is 1, incoming pod can only be scheduled to zone3 to become 2/2/2; scheduling it onto zone1(zone2) would make the ActualSkew(3-1) on zone1(zone2) violate MaxSkew(1). - if MaxSkew is 2, incoming pod can be scheduled onto any zone. When 'whenUnsatisfiable=ScheduleAnyway', it is used to give higher precedence to topologies that satisfy it. It's a required field. Default value is 1 and 0 is not allowed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/pgv2_percona_com_percona_pg_cluster_v2_manifest#max_skew DataK8SPgv2PerconaComPerconaPgClusterV2Manifest#max_skew}
  */
  readonly maxSkew: number;
  /**
  * MinDomains indicates a minimum number of eligible domains. When the number of eligible domains with matching topology keys is less than minDomains, Pod Topology Spread treats 'global minimum' as 0, and then the calculation of Skew is performed. And when the number of eligible domains with matching topology keys equals or greater than minDomains, this value has no effect on scheduling. As a result, when the number of eligible domains is less than minDomains, scheduler won't schedule more than maxSkew Pods to those domains. If value is nil, the constraint behaves as if MinDomains is equal to 1. Valid values are integers greater than 0. When value is not nil, WhenUnsatisfiable must be DoNotSchedule. For example, in a 3-zone cluster, MaxSkew is set to 2, MinDomains is set to 5 and pods with the same labelSelector spread as 2/2/2: | zone1 | zone2 | zone3 | | P P | P P | P P | The number of domains is less than 5(MinDomains), so 'global minimum' is treated as 0. In this situation, new pod with the same labelSelector cannot be scheduled, because computed skew will be 3(3 - 0) if new Pod is scheduled to any of the three zones, it will violate MaxSkew.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/pgv2_percona_com_percona_pg_cluster_v2_manifest#min_domains DataK8SPgv2PerconaComPerconaPgClusterV2Manifest#min_domains}
  */
  readonly minDomains?: number;
  /**
  * NodeAffinityPolicy indicates how we will treat Pod's nodeAffinity/nodeSelector when calculating pod topology spread skew. Options are: - Honor: only nodes matching nodeAffinity/nodeSelector are included in the calculations. - Ignore: nodeAffinity/nodeSelector are ignored. All nodes are included in the calculations. If this value is nil, the behavior is equivalent to the Honor policy. This is a beta-level feature default enabled by the NodeInclusionPolicyInPodTopologySpread feature flag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/pgv2_percona_com_percona_pg_cluster_v2_manifest#node_affinity_policy DataK8SPgv2PerconaComPerconaPgClusterV2Manifest#node_affinity_policy}
  */
  readonly nodeAffinityPolicy?: string;
  /**
  * NodeTaintsPolicy indicates how we will treat node taints when calculating pod topology spread skew. Options are: - Honor: nodes without taints, along with tainted nodes for which the incoming pod has a toleration, are included. - Ignore: node taints are ignored. All nodes are included. If this value is nil, the behavior is equivalent to the Ignore policy. This is a beta-level feature default enabled by the NodeInclusionPolicyInPodTopologySpread feature flag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/pgv2_percona_com_percona_pg_cluster_v2_manifest#node_taints_policy DataK8SPgv2PerconaComPerconaPgClusterV2Manifest#node_taints_policy}
  */
  readonly nodeTaintsPolicy?: string;
  /**
  * TopologyKey is the key of node labels. Nodes that have a label with this key and identical values are considered to be in the same topology. We consider each <key, value> as a 'bucket', and try to put balanced number of pods into each bucket. We define a domain as a particular instance of a topology. Also, we define an eligible domain as a domain whose nodes meet the requirements of nodeAffinityPolicy and nodeTaintsPolicy. e.g. If TopologyKey is 'kubernetes.io/hostname', each Node is a domain of that topology. And, if TopologyKey is 'topology.kubernetes.io/zone', each zone is a domain of that topology. It's a required field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/pgv2_percona_com_percona_pg_cluster_v2_manifest#topology_key DataK8SPgv2PerconaComPerconaPgClusterV2Manifest#topology_key}
  */
  readonly topologyKey: string;
  /**
  * WhenUnsatisfiable indicates how to deal with a pod if it doesn't satisfy the spread constraint. - DoNotSchedule (default) tells the scheduler not to schedule it. - ScheduleAnyway tells the scheduler to schedule the pod in any location, but giving higher precedence to topologies that would help reduce the skew. A constraint is considered 'Unsatisfiable' for an incoming pod if and only if every possible node assignment for that pod would violate 'MaxSkew' on some topology. For example, in a 3-zone cluster, MaxSkew is set to 1, and pods with the same labelSelector spread as 3/1/1: | zone1 | zone2 | zone3 | | P P P | P | P | If WhenUnsatisfiable is set to DoNotSchedule, incoming pod can only be scheduled to zone2(zone3) to become 3/2/1(3/1/2) as ActualSkew(2-1) on zone2(zone3) satisfies MaxSkew(1). In other words, the cluster can still be imbalanced, but scheduler won't make it *more* imbalanced. It's a required field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/pgv2_percona_com_percona_pg_cluster_v2_manifest#when_unsatisfiable DataK8SPgv2PerconaComPerconaPgClusterV2Manifest#when_unsatisfiable}
  */
  readonly whenUnsatisfiable: string;
}

export function dataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerTopologySpreadConstraintsToTerraform(struct?: DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerTopologySpreadConstraints | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    label_selector: dataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerTopologySpreadConstraintsLabelSelectorToTerraform(struct!.labelSelector),
    match_label_keys: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.matchLabelKeys),
    max_skew: cdktf.numberToTerraform(struct!.maxSkew),
    min_domains: cdktf.numberToTerraform(struct!.minDomains),
    node_affinity_policy: cdktf.stringToTerraform(struct!.nodeAffinityPolicy),
    node_taints_policy: cdktf.stringToTerraform(struct!.nodeTaintsPolicy),
    topology_key: cdktf.stringToTerraform(struct!.topologyKey),
    when_unsatisfiable: cdktf.stringToTerraform(struct!.whenUnsatisfiable),
  }
}


export function dataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerTopologySpreadConstraintsToHclTerraform(struct?: DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerTopologySpreadConstraints | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    label_selector: {
      value: dataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerTopologySpreadConstraintsLabelSelectorToHclTerraform(struct!.labelSelector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerTopologySpreadConstraintsLabelSelector",
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

export class DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerTopologySpreadConstraintsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerTopologySpreadConstraints | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerTopologySpreadConstraints | cdktf.IResolvable | undefined) {
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
  private _labelSelector = new DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerTopologySpreadConstraintsLabelSelectorOutputReference(this, "label_selector");
  public get labelSelector() {
    return this._labelSelector;
  }
  public putLabelSelector(value: DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerTopologySpreadConstraintsLabelSelector) {
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

export class DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerTopologySpreadConstraintsList extends cdktf.ComplexList {
  public internalValue? : DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerTopologySpreadConstraints[] | cdktf.IResolvable

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
  public get(index: number): DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerTopologySpreadConstraintsOutputReference {
    return new DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerTopologySpreadConstraintsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncer {
  /**
  * Scheduling constraints of a PgBouncer pod. Changing this value causes PgBouncer to restart. More info: https://kubernetes.io/docs/concepts/scheduling-eviction/assign-pod-node
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/pgv2_percona_com_percona_pg_cluster_v2_manifest#affinity DataK8SPgv2PerconaComPerconaPgClusterV2Manifest#affinity}
  */
  readonly affinity?: DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerAffinity;
  /**
  * Configuration settings for the PgBouncer process. Changes to any of these values will be automatically reloaded without validation. Be careful, as you may put PgBouncer into an unusable state. More info: https://www.pgbouncer.org/usage.html#reload
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/pgv2_percona_com_percona_pg_cluster_v2_manifest#config DataK8SPgv2PerconaComPerconaPgClusterV2Manifest#config}
  */
  readonly config?: DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerConfig;
  /**
  * Configuration for pgBouncer default sidecar containers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/pgv2_percona_com_percona_pg_cluster_v2_manifest#containers DataK8SPgv2PerconaComPerconaPgClusterV2Manifest#containers}
  */
  readonly containers?: DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerContainers;
  /**
  * A secret projection containing a certificate and key with which to encrypt connections to PgBouncer. The 'tls.crt', 'tls.key', and 'ca.crt' paths must be PEM-encoded certificates and keys. Changing this value causes PgBouncer to restart. More info: https://kubernetes.io/docs/concepts/configuration/secret/#projection-of-secret-keys-to-specific-paths
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/pgv2_percona_com_percona_pg_cluster_v2_manifest#custom_tls_secret DataK8SPgv2PerconaComPerconaPgClusterV2Manifest#custom_tls_secret}
  */
  readonly customTlsSecret?: DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerCustomTlsSecret;
  /**
  * Specification of the service that exposes PgBouncer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/pgv2_percona_com_percona_pg_cluster_v2_manifest#expose DataK8SPgv2PerconaComPerconaPgClusterV2Manifest#expose}
  */
  readonly expose?: DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerExpose;
  /**
  * Allow SUPERUSERs to connect through PGBouncer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/pgv2_percona_com_percona_pg_cluster_v2_manifest#expose_superusers DataK8SPgv2PerconaComPerconaPgClusterV2Manifest#expose_superusers}
  */
  readonly exposeSuperusers?: boolean | cdktf.IResolvable;
  /**
  * Name of a container image that can run PgBouncer 1.15 or newer. Changing this value causes PgBouncer to restart. The image may also be set using the RELATED_IMAGE_PGBOUNCER environment variable. More info: https://kubernetes.io/docs/concepts/containers/images
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/pgv2_percona_com_percona_pg_cluster_v2_manifest#image DataK8SPgv2PerconaComPerconaPgClusterV2Manifest#image}
  */
  readonly image?: string;
  /**
  * Metadata contains metadata for custom resources
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/pgv2_percona_com_percona_pg_cluster_v2_manifest#metadata DataK8SPgv2PerconaComPerconaPgClusterV2Manifest#metadata}
  */
  readonly metadata?: DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerMetadata;
  /**
  * Minimum number of pods that should be available at a time. Defaults to one when the replicas field is greater than one.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/pgv2_percona_com_percona_pg_cluster_v2_manifest#min_available DataK8SPgv2PerconaComPerconaPgClusterV2Manifest#min_available}
  */
  readonly minAvailable?: string;
  /**
  * Port on which PgBouncer should listen for client connections. Changing this value causes PgBouncer to restart.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/pgv2_percona_com_percona_pg_cluster_v2_manifest#port DataK8SPgv2PerconaComPerconaPgClusterV2Manifest#port}
  */
  readonly port?: number;
  /**
  * Priority class name for the pgBouncer pod. Changing this value causes PostgreSQL to restart. More info: https://kubernetes.io/docs/concepts/scheduling-eviction/pod-priority-preemption/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/pgv2_percona_com_percona_pg_cluster_v2_manifest#priority_class_name DataK8SPgv2PerconaComPerconaPgClusterV2Manifest#priority_class_name}
  */
  readonly priorityClassName?: string;
  /**
  * Number of desired PgBouncer pods.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/pgv2_percona_com_percona_pg_cluster_v2_manifest#replicas DataK8SPgv2PerconaComPerconaPgClusterV2Manifest#replicas}
  */
  readonly replicas?: number;
  /**
  * Compute resources of a PgBouncer container. Changing this value causes PgBouncer to restart. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/pgv2_percona_com_percona_pg_cluster_v2_manifest#resources DataK8SPgv2PerconaComPerconaPgClusterV2Manifest#resources}
  */
  readonly resources?: DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerResources;
  /**
  * SecurityContext defines the security settings for PGBouncer pods.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/pgv2_percona_com_percona_pg_cluster_v2_manifest#security_context DataK8SPgv2PerconaComPerconaPgClusterV2Manifest#security_context}
  */
  readonly securityContext?: DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSecurityContext;
  /**
  * Custom sidecars for a PgBouncer pod. Changing this value causes PgBouncer to restart.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/pgv2_percona_com_percona_pg_cluster_v2_manifest#sidecars DataK8SPgv2PerconaComPerconaPgClusterV2Manifest#sidecars}
  */
  readonly sidecars?: DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecars[] | cdktf.IResolvable;
  /**
  * Tolerations of a PgBouncer pod. Changing this value causes PgBouncer to restart. More info: https://kubernetes.io/docs/concepts/scheduling-eviction/taint-and-toleration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/pgv2_percona_com_percona_pg_cluster_v2_manifest#tolerations DataK8SPgv2PerconaComPerconaPgClusterV2Manifest#tolerations}
  */
  readonly tolerations?: DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerTolerations[] | cdktf.IResolvable;
  /**
  * Topology spread constraints of a PgBouncer pod. Changing this value causes PgBouncer to restart. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-topology-spread-constraints/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/pgv2_percona_com_percona_pg_cluster_v2_manifest#topology_spread_constraints DataK8SPgv2PerconaComPerconaPgClusterV2Manifest#topology_spread_constraints}
  */
  readonly topologySpreadConstraints?: DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerTopologySpreadConstraints[] | cdktf.IResolvable;
}

export function dataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerToTerraform(struct?: DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    affinity: dataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerAffinityToTerraform(struct!.affinity),
    config: dataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerConfigToTerraform(struct!.config),
    containers: dataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerContainersToTerraform(struct!.containers),
    custom_tls_secret: dataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerCustomTlsSecretToTerraform(struct!.customTlsSecret),
    expose: dataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerExposeToTerraform(struct!.expose),
    expose_superusers: cdktf.booleanToTerraform(struct!.exposeSuperusers),
    image: cdktf.stringToTerraform(struct!.image),
    metadata: dataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerMetadataToTerraform(struct!.metadata),
    min_available: cdktf.stringToTerraform(struct!.minAvailable),
    port: cdktf.numberToTerraform(struct!.port),
    priority_class_name: cdktf.stringToTerraform(struct!.priorityClassName),
    replicas: cdktf.numberToTerraform(struct!.replicas),
    resources: dataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerResourcesToTerraform(struct!.resources),
    security_context: dataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSecurityContextToTerraform(struct!.securityContext),
    sidecars: cdktf.listMapper(dataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsToTerraform, false)(struct!.sidecars),
    tolerations: cdktf.listMapper(dataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerTolerationsToTerraform, false)(struct!.tolerations),
    topology_spread_constraints: cdktf.listMapper(dataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerTopologySpreadConstraintsToTerraform, false)(struct!.topologySpreadConstraints),
  }
}


export function dataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerToHclTerraform(struct?: DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    affinity: {
      value: dataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerAffinityToHclTerraform(struct!.affinity),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerAffinity",
    },
    config: {
      value: dataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerConfigToHclTerraform(struct!.config),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerConfig",
    },
    containers: {
      value: dataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerContainersToHclTerraform(struct!.containers),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerContainers",
    },
    custom_tls_secret: {
      value: dataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerCustomTlsSecretToHclTerraform(struct!.customTlsSecret),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerCustomTlsSecret",
    },
    expose: {
      value: dataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerExposeToHclTerraform(struct!.expose),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerExpose",
    },
    expose_superusers: {
      value: cdktf.booleanToHclTerraform(struct!.exposeSuperusers),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    image: {
      value: cdktf.stringToHclTerraform(struct!.image),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metadata: {
      value: dataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerMetadataToHclTerraform(struct!.metadata),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerMetadata",
    },
    min_available: {
      value: cdktf.stringToHclTerraform(struct!.minAvailable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    priority_class_name: {
      value: cdktf.stringToHclTerraform(struct!.priorityClassName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    replicas: {
      value: cdktf.numberToHclTerraform(struct!.replicas),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    resources: {
      value: dataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerResourcesToHclTerraform(struct!.resources),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerResources",
    },
    security_context: {
      value: dataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSecurityContextToHclTerraform(struct!.securityContext),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSecurityContext",
    },
    sidecars: {
      value: cdktf.listMapperHcl(dataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsToHclTerraform, false)(struct!.sidecars),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsList",
    },
    tolerations: {
      value: cdktf.listMapperHcl(dataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerTolerationsToHclTerraform, false)(struct!.tolerations),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerTolerationsList",
    },
    topology_spread_constraints: {
      value: cdktf.listMapperHcl(dataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerTopologySpreadConstraintsToHclTerraform, false)(struct!.topologySpreadConstraints),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerTopologySpreadConstraintsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncer | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._affinity?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.affinity = this._affinity?.internalValue;
    }
    if (this._config?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.config = this._config?.internalValue;
    }
    if (this._containers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.containers = this._containers?.internalValue;
    }
    if (this._customTlsSecret?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customTlsSecret = this._customTlsSecret?.internalValue;
    }
    if (this._expose?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.expose = this._expose?.internalValue;
    }
    if (this._exposeSuperusers !== undefined) {
      hasAnyValues = true;
      internalValueResult.exposeSuperusers = this._exposeSuperusers;
    }
    if (this._image !== undefined) {
      hasAnyValues = true;
      internalValueResult.image = this._image;
    }
    if (this._metadata?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadata = this._metadata?.internalValue;
    }
    if (this._minAvailable !== undefined) {
      hasAnyValues = true;
      internalValueResult.minAvailable = this._minAvailable;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._priorityClassName !== undefined) {
      hasAnyValues = true;
      internalValueResult.priorityClassName = this._priorityClassName;
    }
    if (this._replicas !== undefined) {
      hasAnyValues = true;
      internalValueResult.replicas = this._replicas;
    }
    if (this._resources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resources = this._resources?.internalValue;
    }
    if (this._securityContext?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityContext = this._securityContext?.internalValue;
    }
    if (this._sidecars?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sidecars = this._sidecars?.internalValue;
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

  public set internalValue(value: DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncer | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._affinity.internalValue = undefined;
      this._config.internalValue = undefined;
      this._containers.internalValue = undefined;
      this._customTlsSecret.internalValue = undefined;
      this._expose.internalValue = undefined;
      this._exposeSuperusers = undefined;
      this._image = undefined;
      this._metadata.internalValue = undefined;
      this._minAvailable = undefined;
      this._port = undefined;
      this._priorityClassName = undefined;
      this._replicas = undefined;
      this._resources.internalValue = undefined;
      this._securityContext.internalValue = undefined;
      this._sidecars.internalValue = undefined;
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
      this._config.internalValue = value.config;
      this._containers.internalValue = value.containers;
      this._customTlsSecret.internalValue = value.customTlsSecret;
      this._expose.internalValue = value.expose;
      this._exposeSuperusers = value.exposeSuperusers;
      this._image = value.image;
      this._metadata.internalValue = value.metadata;
      this._minAvailable = value.minAvailable;
      this._port = value.port;
      this._priorityClassName = value.priorityClassName;
      this._replicas = value.replicas;
      this._resources.internalValue = value.resources;
      this._securityContext.internalValue = value.securityContext;
      this._sidecars.internalValue = value.sidecars;
      this._tolerations.internalValue = value.tolerations;
      this._topologySpreadConstraints.internalValue = value.topologySpreadConstraints;
    }
  }

  // affinity - computed: false, optional: true, required: false
  private _affinity = new DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerAffinityOutputReference(this, "affinity");
  public get affinity() {
    return this._affinity;
  }
  public putAffinity(value: DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerAffinity) {
    this._affinity.internalValue = value;
  }
  public resetAffinity() {
    this._affinity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get affinityInput() {
    return this._affinity.internalValue;
  }

  // config - computed: false, optional: true, required: false
  private _config = new DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerConfigOutputReference(this, "config");
  public get config() {
    return this._config;
  }
  public putConfig(value: DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerConfig) {
    this._config.internalValue = value;
  }
  public resetConfig() {
    this._config.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config.internalValue;
  }

  // containers - computed: false, optional: true, required: false
  private _containers = new DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerContainersOutputReference(this, "containers");
  public get containers() {
    return this._containers;
  }
  public putContainers(value: DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerContainers) {
    this._containers.internalValue = value;
  }
  public resetContainers() {
    this._containers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containersInput() {
    return this._containers.internalValue;
  }

  // custom_tls_secret - computed: false, optional: true, required: false
  private _customTlsSecret = new DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerCustomTlsSecretOutputReference(this, "custom_tls_secret");
  public get customTlsSecret() {
    return this._customTlsSecret;
  }
  public putCustomTlsSecret(value: DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerCustomTlsSecret) {
    this._customTlsSecret.internalValue = value;
  }
  public resetCustomTlsSecret() {
    this._customTlsSecret.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customTlsSecretInput() {
    return this._customTlsSecret.internalValue;
  }

  // expose - computed: false, optional: true, required: false
  private _expose = new DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerExposeOutputReference(this, "expose");
  public get expose() {
    return this._expose;
  }
  public putExpose(value: DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerExpose) {
    this._expose.internalValue = value;
  }
  public resetExpose() {
    this._expose.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exposeInput() {
    return this._expose.internalValue;
  }

  // expose_superusers - computed: false, optional: true, required: false
  private _exposeSuperusers?: boolean | cdktf.IResolvable; 
  public get exposeSuperusers() {
    return this.getBooleanAttribute('expose_superusers');
  }
  public set exposeSuperusers(value: boolean | cdktf.IResolvable) {
    this._exposeSuperusers = value;
  }
  public resetExposeSuperusers() {
    this._exposeSuperusers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exposeSuperusersInput() {
    return this._exposeSuperusers;
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

  // metadata - computed: false, optional: true, required: false
  private _metadata = new DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerMetadata) {
    this._metadata.internalValue = value;
  }
  public resetMetadata() {
    this._metadata.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
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

  // port - computed: false, optional: true, required: false
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

  // priority_class_name - computed: false, optional: true, required: false
  private _priorityClassName?: string; 
  public get priorityClassName() {
    return this.getStringAttribute('priority_class_name');
  }
  public set priorityClassName(value: string) {
    this._priorityClassName = value;
  }
  public resetPriorityClassName() {
    this._priorityClassName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityClassNameInput() {
    return this._priorityClassName;
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

  // resources - computed: false, optional: true, required: false
  private _resources = new DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerResourcesOutputReference(this, "resources");
  public get resources() {
    return this._resources;
  }
  public putResources(value: DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerResources) {
    this._resources.internalValue = value;
  }
  public resetResources() {
    this._resources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesInput() {
    return this._resources.internalValue;
  }

  // security_context - computed: false, optional: true, required: false
  private _securityContext = new DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSecurityContextOutputReference(this, "security_context");
  public get securityContext() {
    return this._securityContext;
  }
  public putSecurityContext(value: DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSecurityContext) {
    this._securityContext.internalValue = value;
  }
  public resetSecurityContext() {
    this._securityContext.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityContextInput() {
    return this._securityContext.internalValue;
  }

  // sidecars - computed: false, optional: true, required: false
  private _sidecars = new DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecarsList(this, "sidecars", false);
  public get sidecars() {
    return this._sidecars;
  }
  public putSidecars(value: DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerSidecars[] | cdktf.IResolvable) {
    this._sidecars.internalValue = value;
  }
  public resetSidecars() {
    this._sidecars.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sidecarsInput() {
    return this._sidecars.internalValue;
  }

  // tolerations - computed: false, optional: true, required: false
  private _tolerations = new DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerTolerationsList(this, "tolerations", false);
  public get tolerations() {
    return this._tolerations;
  }
  public putTolerations(value: DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerTolerations[] | cdktf.IResolvable) {
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
  private _topologySpreadConstraints = new DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerTopologySpreadConstraintsList(this, "topology_spread_constraints", false);
  public get topologySpreadConstraints() {
    return this._topologySpreadConstraints;
  }
  public putTopologySpreadConstraints(value: DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerTopologySpreadConstraints[] | cdktf.IResolvable) {
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
export interface DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxy {
  /**
  * Defines a PgBouncer proxy and connection pooler.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/pgv2_percona_com_percona_pg_cluster_v2_manifest#pg_bouncer DataK8SPgv2PerconaComPerconaPgClusterV2Manifest#pg_bouncer}
  */
  readonly pgBouncer: DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncer;
}

export function dataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyToTerraform(struct?: DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    pg_bouncer: dataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerToTerraform(struct!.pgBouncer),
  }
}


export function dataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyToHclTerraform(struct?: DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    pg_bouncer: {
      value: dataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerToHclTerraform(struct!.pgBouncer),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncer",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._pgBouncer?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pgBouncer = this._pgBouncer?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._pgBouncer.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._pgBouncer.internalValue = value.pgBouncer;
    }
  }

  // pg_bouncer - computed: false, optional: false, required: true
  private _pgBouncer = new DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncerOutputReference(this, "pg_bouncer");
  public get pgBouncer() {
    return this._pgBouncer;
  }
  public putPgBouncer(value: DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyPgBouncer) {
    this._pgBouncer.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pgBouncerInput() {
    return this._pgBouncer.internalValue;
  }
}
export interface DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecSecretsCustomReplicationTlsSecretItems {
  /**
  * key is the key to project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/pgv2_percona_com_percona_pg_cluster_v2_manifest#key DataK8SPgv2PerconaComPerconaPgClusterV2Manifest#key}
  */
  readonly key: string;
  /**
  * mode is Optional: mode bits used to set permissions on this file. Must be an octal value between 0000 and 0777 or a decimal value between 0 and 511. YAML accepts both octal and decimal values, JSON requires decimal values for mode bits. If not specified, the volume defaultMode will be used. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/pgv2_percona_com_percona_pg_cluster_v2_manifest#mode DataK8SPgv2PerconaComPerconaPgClusterV2Manifest#mode}
  */
  readonly mode?: number;
  /**
  * path is the relative path of the file to map the key to. May not be an absolute path. May not contain the path element '..'. May not start with the string '..'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/pgv2_percona_com_percona_pg_cluster_v2_manifest#path DataK8SPgv2PerconaComPerconaPgClusterV2Manifest#path}
  */
  readonly path: string;
}

export function dataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecSecretsCustomReplicationTlsSecretItemsToTerraform(struct?: DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecSecretsCustomReplicationTlsSecretItems | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    mode: cdktf.numberToTerraform(struct!.mode),
    path: cdktf.stringToTerraform(struct!.path),
  }
}


export function dataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecSecretsCustomReplicationTlsSecretItemsToHclTerraform(struct?: DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecSecretsCustomReplicationTlsSecretItems | cdktf.IResolvable): any {
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
    mode: {
      value: cdktf.numberToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecSecretsCustomReplicationTlsSecretItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecSecretsCustomReplicationTlsSecretItems | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecSecretsCustomReplicationTlsSecretItems | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._mode = undefined;
      this._path = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._mode = value.mode;
      this._path = value.path;
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

  // mode - computed: false, optional: true, required: false
  private _mode?: number; 
  public get mode() {
    return this.getNumberAttribute('mode');
  }
  public set mode(value: number) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
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
}

export class DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecSecretsCustomReplicationTlsSecretItemsList extends cdktf.ComplexList {
  public internalValue? : DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecSecretsCustomReplicationTlsSecretItems[] | cdktf.IResolvable

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
  public get(index: number): DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecSecretsCustomReplicationTlsSecretItemsOutputReference {
    return new DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecSecretsCustomReplicationTlsSecretItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecSecretsCustomReplicationTlsSecret {
  /**
  * items if unspecified, each key-value pair in the Data field of the referenced Secret will be projected into the volume as a file whose name is the key and content is the value. If specified, the listed keys will be projected into the specified paths, and unlisted keys will not be present. If a key is specified which is not present in the Secret, the volume setup will error unless it is marked optional. Paths must be relative and may not contain the '..' path or start with '..'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/pgv2_percona_com_percona_pg_cluster_v2_manifest#items DataK8SPgv2PerconaComPerconaPgClusterV2Manifest#items}
  */
  readonly items?: DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecSecretsCustomReplicationTlsSecretItems[] | cdktf.IResolvable;
  /**
  * Name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/pgv2_percona_com_percona_pg_cluster_v2_manifest#name DataK8SPgv2PerconaComPerconaPgClusterV2Manifest#name}
  */
  readonly name?: string;
  /**
  * optional field specify whether the Secret or its key must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/pgv2_percona_com_percona_pg_cluster_v2_manifest#optional DataK8SPgv2PerconaComPerconaPgClusterV2Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecSecretsCustomReplicationTlsSecretToTerraform(struct?: DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecSecretsCustomReplicationTlsSecret | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    items: cdktf.listMapper(dataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecSecretsCustomReplicationTlsSecretItemsToTerraform, false)(struct!.items),
    name: cdktf.stringToTerraform(struct!.name),
    optional: cdktf.booleanToTerraform(struct!.optional),
  }
}


export function dataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecSecretsCustomReplicationTlsSecretToHclTerraform(struct?: DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecSecretsCustomReplicationTlsSecret | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    items: {
      value: cdktf.listMapperHcl(dataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecSecretsCustomReplicationTlsSecretItemsToHclTerraform, false)(struct!.items),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecSecretsCustomReplicationTlsSecretItemsList",
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

export class DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecSecretsCustomReplicationTlsSecretOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecSecretsCustomReplicationTlsSecret | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._items?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.items = this._items?.internalValue;
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

  public set internalValue(value: DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecSecretsCustomReplicationTlsSecret | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._items.internalValue = undefined;
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
      this._items.internalValue = value.items;
      this._name = value.name;
      this._optional = value.optional;
    }
  }

  // items - computed: false, optional: true, required: false
  private _items = new DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecSecretsCustomReplicationTlsSecretItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
  public putItems(value: DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecSecretsCustomReplicationTlsSecretItems[] | cdktf.IResolvable) {
    this._items.internalValue = value;
  }
  public resetItems() {
    this._items.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get itemsInput() {
    return this._items.internalValue;
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
export interface DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecSecretsCustomRootCatlsSecretItems {
  /**
  * key is the key to project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/pgv2_percona_com_percona_pg_cluster_v2_manifest#key DataK8SPgv2PerconaComPerconaPgClusterV2Manifest#key}
  */
  readonly key: string;
  /**
  * mode is Optional: mode bits used to set permissions on this file. Must be an octal value between 0000 and 0777 or a decimal value between 0 and 511. YAML accepts both octal and decimal values, JSON requires decimal values for mode bits. If not specified, the volume defaultMode will be used. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/pgv2_percona_com_percona_pg_cluster_v2_manifest#mode DataK8SPgv2PerconaComPerconaPgClusterV2Manifest#mode}
  */
  readonly mode?: number;
  /**
  * path is the relative path of the file to map the key to. May not be an absolute path. May not contain the path element '..'. May not start with the string '..'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/pgv2_percona_com_percona_pg_cluster_v2_manifest#path DataK8SPgv2PerconaComPerconaPgClusterV2Manifest#path}
  */
  readonly path: string;
}

export function dataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecSecretsCustomRootCatlsSecretItemsToTerraform(struct?: DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecSecretsCustomRootCatlsSecretItems | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    mode: cdktf.numberToTerraform(struct!.mode),
    path: cdktf.stringToTerraform(struct!.path),
  }
}


export function dataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecSecretsCustomRootCatlsSecretItemsToHclTerraform(struct?: DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecSecretsCustomRootCatlsSecretItems | cdktf.IResolvable): any {
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
    mode: {
      value: cdktf.numberToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecSecretsCustomRootCatlsSecretItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecSecretsCustomRootCatlsSecretItems | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecSecretsCustomRootCatlsSecretItems | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._mode = undefined;
      this._path = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._mode = value.mode;
      this._path = value.path;
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

  // mode - computed: false, optional: true, required: false
  private _mode?: number; 
  public get mode() {
    return this.getNumberAttribute('mode');
  }
  public set mode(value: number) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
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
}

export class DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecSecretsCustomRootCatlsSecretItemsList extends cdktf.ComplexList {
  public internalValue? : DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecSecretsCustomRootCatlsSecretItems[] | cdktf.IResolvable

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
  public get(index: number): DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecSecretsCustomRootCatlsSecretItemsOutputReference {
    return new DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecSecretsCustomRootCatlsSecretItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecSecretsCustomRootCatlsSecret {
  /**
  * items if unspecified, each key-value pair in the Data field of the referenced Secret will be projected into the volume as a file whose name is the key and content is the value. If specified, the listed keys will be projected into the specified paths, and unlisted keys will not be present. If a key is specified which is not present in the Secret, the volume setup will error unless it is marked optional. Paths must be relative and may not contain the '..' path or start with '..'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/pgv2_percona_com_percona_pg_cluster_v2_manifest#items DataK8SPgv2PerconaComPerconaPgClusterV2Manifest#items}
  */
  readonly items?: DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecSecretsCustomRootCatlsSecretItems[] | cdktf.IResolvable;
  /**
  * Name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/pgv2_percona_com_percona_pg_cluster_v2_manifest#name DataK8SPgv2PerconaComPerconaPgClusterV2Manifest#name}
  */
  readonly name?: string;
  /**
  * optional field specify whether the Secret or its key must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/pgv2_percona_com_percona_pg_cluster_v2_manifest#optional DataK8SPgv2PerconaComPerconaPgClusterV2Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecSecretsCustomRootCatlsSecretToTerraform(struct?: DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecSecretsCustomRootCatlsSecret | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    items: cdktf.listMapper(dataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecSecretsCustomRootCatlsSecretItemsToTerraform, false)(struct!.items),
    name: cdktf.stringToTerraform(struct!.name),
    optional: cdktf.booleanToTerraform(struct!.optional),
  }
}


export function dataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecSecretsCustomRootCatlsSecretToHclTerraform(struct?: DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecSecretsCustomRootCatlsSecret | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    items: {
      value: cdktf.listMapperHcl(dataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecSecretsCustomRootCatlsSecretItemsToHclTerraform, false)(struct!.items),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecSecretsCustomRootCatlsSecretItemsList",
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

export class DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecSecretsCustomRootCatlsSecretOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecSecretsCustomRootCatlsSecret | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._items?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.items = this._items?.internalValue;
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

  public set internalValue(value: DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecSecretsCustomRootCatlsSecret | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._items.internalValue = undefined;
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
      this._items.internalValue = value.items;
      this._name = value.name;
      this._optional = value.optional;
    }
  }

  // items - computed: false, optional: true, required: false
  private _items = new DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecSecretsCustomRootCatlsSecretItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
  public putItems(value: DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecSecretsCustomRootCatlsSecretItems[] | cdktf.IResolvable) {
    this._items.internalValue = value;
  }
  public resetItems() {
    this._items.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get itemsInput() {
    return this._items.internalValue;
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
export interface DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecSecretsCustomTlsSecretItems {
  /**
  * key is the key to project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/pgv2_percona_com_percona_pg_cluster_v2_manifest#key DataK8SPgv2PerconaComPerconaPgClusterV2Manifest#key}
  */
  readonly key: string;
  /**
  * mode is Optional: mode bits used to set permissions on this file. Must be an octal value between 0000 and 0777 or a decimal value between 0 and 511. YAML accepts both octal and decimal values, JSON requires decimal values for mode bits. If not specified, the volume defaultMode will be used. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/pgv2_percona_com_percona_pg_cluster_v2_manifest#mode DataK8SPgv2PerconaComPerconaPgClusterV2Manifest#mode}
  */
  readonly mode?: number;
  /**
  * path is the relative path of the file to map the key to. May not be an absolute path. May not contain the path element '..'. May not start with the string '..'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/pgv2_percona_com_percona_pg_cluster_v2_manifest#path DataK8SPgv2PerconaComPerconaPgClusterV2Manifest#path}
  */
  readonly path: string;
}

export function dataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecSecretsCustomTlsSecretItemsToTerraform(struct?: DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecSecretsCustomTlsSecretItems | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    mode: cdktf.numberToTerraform(struct!.mode),
    path: cdktf.stringToTerraform(struct!.path),
  }
}


export function dataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecSecretsCustomTlsSecretItemsToHclTerraform(struct?: DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecSecretsCustomTlsSecretItems | cdktf.IResolvable): any {
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
    mode: {
      value: cdktf.numberToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecSecretsCustomTlsSecretItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecSecretsCustomTlsSecretItems | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecSecretsCustomTlsSecretItems | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._mode = undefined;
      this._path = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._mode = value.mode;
      this._path = value.path;
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

  // mode - computed: false, optional: true, required: false
  private _mode?: number; 
  public get mode() {
    return this.getNumberAttribute('mode');
  }
  public set mode(value: number) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
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
}

export class DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecSecretsCustomTlsSecretItemsList extends cdktf.ComplexList {
  public internalValue? : DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecSecretsCustomTlsSecretItems[] | cdktf.IResolvable

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
  public get(index: number): DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecSecretsCustomTlsSecretItemsOutputReference {
    return new DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecSecretsCustomTlsSecretItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecSecretsCustomTlsSecret {
  /**
  * items if unspecified, each key-value pair in the Data field of the referenced Secret will be projected into the volume as a file whose name is the key and content is the value. If specified, the listed keys will be projected into the specified paths, and unlisted keys will not be present. If a key is specified which is not present in the Secret, the volume setup will error unless it is marked optional. Paths must be relative and may not contain the '..' path or start with '..'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/pgv2_percona_com_percona_pg_cluster_v2_manifest#items DataK8SPgv2PerconaComPerconaPgClusterV2Manifest#items}
  */
  readonly items?: DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecSecretsCustomTlsSecretItems[] | cdktf.IResolvable;
  /**
  * Name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/pgv2_percona_com_percona_pg_cluster_v2_manifest#name DataK8SPgv2PerconaComPerconaPgClusterV2Manifest#name}
  */
  readonly name?: string;
  /**
  * optional field specify whether the Secret or its key must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/pgv2_percona_com_percona_pg_cluster_v2_manifest#optional DataK8SPgv2PerconaComPerconaPgClusterV2Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecSecretsCustomTlsSecretToTerraform(struct?: DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecSecretsCustomTlsSecret | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    items: cdktf.listMapper(dataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecSecretsCustomTlsSecretItemsToTerraform, false)(struct!.items),
    name: cdktf.stringToTerraform(struct!.name),
    optional: cdktf.booleanToTerraform(struct!.optional),
  }
}


export function dataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecSecretsCustomTlsSecretToHclTerraform(struct?: DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecSecretsCustomTlsSecret | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    items: {
      value: cdktf.listMapperHcl(dataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecSecretsCustomTlsSecretItemsToHclTerraform, false)(struct!.items),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecSecretsCustomTlsSecretItemsList",
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

export class DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecSecretsCustomTlsSecretOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecSecretsCustomTlsSecret | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._items?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.items = this._items?.internalValue;
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

  public set internalValue(value: DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecSecretsCustomTlsSecret | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._items.internalValue = undefined;
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
      this._items.internalValue = value.items;
      this._name = value.name;
      this._optional = value.optional;
    }
  }

  // items - computed: false, optional: true, required: false
  private _items = new DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecSecretsCustomTlsSecretItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
  public putItems(value: DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecSecretsCustomTlsSecretItems[] | cdktf.IResolvable) {
    this._items.internalValue = value;
  }
  public resetItems() {
    this._items.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get itemsInput() {
    return this._items.internalValue;
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
export interface DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecSecrets {
  /**
  * The secret containing the replication client certificates and keys for secure connections to the PostgreSQL server. It will need to contain the client TLS certificate, TLS key and the Certificate Authority certificate with the data keys set to tls.crt, tls.key and ca.crt, respectively. NOTE: If CustomReplicationClientTLSSecret is provided, CustomTLSSecret MUST be provided and the ca.crt provided must be the same.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/pgv2_percona_com_percona_pg_cluster_v2_manifest#custom_replication_tls_secret DataK8SPgv2PerconaComPerconaPgClusterV2Manifest#custom_replication_tls_secret}
  */
  readonly customReplicationTlsSecret?: DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecSecretsCustomReplicationTlsSecret;
  /**
  * The secret containing the root CA certificate and key for secure connections to the PostgreSQL server. It will need to contain the CA TLS certificate and CA TLS key with the data keys set to root.crt and root.key, respectively.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/pgv2_percona_com_percona_pg_cluster_v2_manifest#custom_root_catls_secret DataK8SPgv2PerconaComPerconaPgClusterV2Manifest#custom_root_catls_secret}
  */
  readonly customRootCatlsSecret?: DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecSecretsCustomRootCatlsSecret;
  /**
  * The secret containing the Certificates and Keys to encrypt PostgreSQL traffic will need to contain the server TLS certificate, TLS key and the Certificate Authority certificate with the data keys set to tls.crt, tls.key and ca.crt, respectively. It will then be mounted as a volume projection to the '/pgconf/tls' directory. For more information on Kubernetes secret projections, please see https://k8s.io/docs/concepts/configuration/secret/#projection-of-secret-keys-to-specific-paths NOTE: If CustomTLSSecret is provided, CustomReplicationClientTLSSecret MUST be provided and the ca.crt provided must be the same.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/pgv2_percona_com_percona_pg_cluster_v2_manifest#custom_tls_secret DataK8SPgv2PerconaComPerconaPgClusterV2Manifest#custom_tls_secret}
  */
  readonly customTlsSecret?: DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecSecretsCustomTlsSecret;
}

export function dataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecSecretsToTerraform(struct?: DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecSecrets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_replication_tls_secret: dataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecSecretsCustomReplicationTlsSecretToTerraform(struct!.customReplicationTlsSecret),
    custom_root_catls_secret: dataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecSecretsCustomRootCatlsSecretToTerraform(struct!.customRootCatlsSecret),
    custom_tls_secret: dataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecSecretsCustomTlsSecretToTerraform(struct!.customTlsSecret),
  }
}


export function dataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecSecretsToHclTerraform(struct?: DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecSecrets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    custom_replication_tls_secret: {
      value: dataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecSecretsCustomReplicationTlsSecretToHclTerraform(struct!.customReplicationTlsSecret),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecSecretsCustomReplicationTlsSecret",
    },
    custom_root_catls_secret: {
      value: dataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecSecretsCustomRootCatlsSecretToHclTerraform(struct!.customRootCatlsSecret),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecSecretsCustomRootCatlsSecret",
    },
    custom_tls_secret: {
      value: dataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecSecretsCustomTlsSecretToHclTerraform(struct!.customTlsSecret),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecSecretsCustomTlsSecret",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecSecretsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecSecrets | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customReplicationTlsSecret?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customReplicationTlsSecret = this._customReplicationTlsSecret?.internalValue;
    }
    if (this._customRootCatlsSecret?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customRootCatlsSecret = this._customRootCatlsSecret?.internalValue;
    }
    if (this._customTlsSecret?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customTlsSecret = this._customTlsSecret?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecSecrets | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._customReplicationTlsSecret.internalValue = undefined;
      this._customRootCatlsSecret.internalValue = undefined;
      this._customTlsSecret.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._customReplicationTlsSecret.internalValue = value.customReplicationTlsSecret;
      this._customRootCatlsSecret.internalValue = value.customRootCatlsSecret;
      this._customTlsSecret.internalValue = value.customTlsSecret;
    }
  }

  // custom_replication_tls_secret - computed: false, optional: true, required: false
  private _customReplicationTlsSecret = new DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecSecretsCustomReplicationTlsSecretOutputReference(this, "custom_replication_tls_secret");
  public get customReplicationTlsSecret() {
    return this._customReplicationTlsSecret;
  }
  public putCustomReplicationTlsSecret(value: DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecSecretsCustomReplicationTlsSecret) {
    this._customReplicationTlsSecret.internalValue = value;
  }
  public resetCustomReplicationTlsSecret() {
    this._customReplicationTlsSecret.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customReplicationTlsSecretInput() {
    return this._customReplicationTlsSecret.internalValue;
  }

  // custom_root_catls_secret - computed: false, optional: true, required: false
  private _customRootCatlsSecret = new DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecSecretsCustomRootCatlsSecretOutputReference(this, "custom_root_catls_secret");
  public get customRootCatlsSecret() {
    return this._customRootCatlsSecret;
  }
  public putCustomRootCatlsSecret(value: DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecSecretsCustomRootCatlsSecret) {
    this._customRootCatlsSecret.internalValue = value;
  }
  public resetCustomRootCatlsSecret() {
    this._customRootCatlsSecret.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customRootCatlsSecretInput() {
    return this._customRootCatlsSecret.internalValue;
  }

  // custom_tls_secret - computed: false, optional: true, required: false
  private _customTlsSecret = new DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecSecretsCustomTlsSecretOutputReference(this, "custom_tls_secret");
  public get customTlsSecret() {
    return this._customTlsSecret;
  }
  public putCustomTlsSecret(value: DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecSecretsCustomTlsSecret) {
    this._customTlsSecret.internalValue = value;
  }
  public resetCustomTlsSecret() {
    this._customTlsSecret.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customTlsSecretInput() {
    return this._customTlsSecret.internalValue;
  }
}
export interface DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecStandby {
  /**
  * Whether or not the PostgreSQL cluster should be read-only. When this is true, WAL files are applied from a pgBackRest repository or another PostgreSQL server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/pgv2_percona_com_percona_pg_cluster_v2_manifest#enabled DataK8SPgv2PerconaComPerconaPgClusterV2Manifest#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Network address of the PostgreSQL server to follow via streaming replication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/pgv2_percona_com_percona_pg_cluster_v2_manifest#host DataK8SPgv2PerconaComPerconaPgClusterV2Manifest#host}
  */
  readonly host?: string;
  /**
  * Network port of the PostgreSQL server to follow via streaming replication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/pgv2_percona_com_percona_pg_cluster_v2_manifest#port DataK8SPgv2PerconaComPerconaPgClusterV2Manifest#port}
  */
  readonly port?: number;
  /**
  * The name of the pgBackRest repository to follow for WAL files.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/pgv2_percona_com_percona_pg_cluster_v2_manifest#repo_name DataK8SPgv2PerconaComPerconaPgClusterV2Manifest#repo_name}
  */
  readonly repoName?: string;
}

export function dataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecStandbyToTerraform(struct?: DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecStandby | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    host: cdktf.stringToTerraform(struct!.host),
    port: cdktf.numberToTerraform(struct!.port),
    repo_name: cdktf.stringToTerraform(struct!.repoName),
  }
}


export function dataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecStandbyToHclTerraform(struct?: DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecStandby | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    host: {
      value: cdktf.stringToHclTerraform(struct!.host),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    repo_name: {
      value: cdktf.stringToHclTerraform(struct!.repoName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecStandbyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecStandby | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._repoName !== undefined) {
      hasAnyValues = true;
      internalValueResult.repoName = this._repoName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecStandby | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
      this._host = undefined;
      this._port = undefined;
      this._repoName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
      this._host = value.host;
      this._port = value.port;
      this._repoName = value.repoName;
    }
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
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

  // port - computed: false, optional: true, required: false
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

  // repo_name - computed: false, optional: true, required: false
  private _repoName?: string; 
  public get repoName() {
    return this.getStringAttribute('repo_name');
  }
  public set repoName(value: string) {
    this._repoName = value;
  }
  public resetRepoName() {
    this._repoName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repoNameInput() {
    return this._repoName;
  }
}
export interface DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecUsersPassword {
  /**
  * Type of password to generate. Defaults to ASCII. Valid options are ASCII and AlphaNumeric. 'ASCII' passwords contain letters, numbers, and symbols from the US-ASCII character set. 'AlphaNumeric' passwords contain letters and numbers from the US-ASCII character set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/pgv2_percona_com_percona_pg_cluster_v2_manifest#type DataK8SPgv2PerconaComPerconaPgClusterV2Manifest#type}
  */
  readonly type: string;
}

export function dataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecUsersPasswordToTerraform(struct?: DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecUsersPassword | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecUsersPasswordToHclTerraform(struct?: DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecUsersPassword | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecUsersPasswordOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecUsersPassword | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecUsersPassword | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._type = value.type;
    }
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}
export interface DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecUsers {
  /**
  * Databases to which this user can connect and create objects. Removing a database from this list does NOT revoke access. This field is ignored for the 'postgres' user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/pgv2_percona_com_percona_pg_cluster_v2_manifest#databases DataK8SPgv2PerconaComPerconaPgClusterV2Manifest#databases}
  */
  readonly databases?: string[];
  /**
  * The name of this PostgreSQL user. The value may contain only lowercase letters, numbers, and hyphen so that it fits into Kubernetes metadata.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/pgv2_percona_com_percona_pg_cluster_v2_manifest#name DataK8SPgv2PerconaComPerconaPgClusterV2Manifest#name}
  */
  readonly name: string;
  /**
  * ALTER ROLE options except for PASSWORD. This field is ignored for the 'postgres' user. More info: https://www.postgresql.org/docs/current/role-attributes.html
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/pgv2_percona_com_percona_pg_cluster_v2_manifest#options DataK8SPgv2PerconaComPerconaPgClusterV2Manifest#options}
  */
  readonly options?: string;
  /**
  * Properties of the password generated for this user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/pgv2_percona_com_percona_pg_cluster_v2_manifest#password DataK8SPgv2PerconaComPerconaPgClusterV2Manifest#password}
  */
  readonly password?: DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecUsersPassword;
  /**
  * The secret name to generate user, password, connection info this PostgreSQL user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/pgv2_percona_com_percona_pg_cluster_v2_manifest#secret_name DataK8SPgv2PerconaComPerconaPgClusterV2Manifest#secret_name}
  */
  readonly secretName?: string;
}

export function dataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecUsersToTerraform(struct?: DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecUsers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    databases: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.databases),
    name: cdktf.stringToTerraform(struct!.name),
    options: cdktf.stringToTerraform(struct!.options),
    password: dataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecUsersPasswordToTerraform(struct!.password),
    secret_name: cdktf.stringToTerraform(struct!.secretName),
  }
}


export function dataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecUsersToHclTerraform(struct?: DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecUsers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    databases: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.databases),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    options: {
      value: cdktf.stringToHclTerraform(struct!.options),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    password: {
      value: dataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecUsersPasswordToHclTerraform(struct!.password),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecUsersPassword",
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

export class DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecUsersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecUsers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._databases !== undefined) {
      hasAnyValues = true;
      internalValueResult.databases = this._databases;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._options !== undefined) {
      hasAnyValues = true;
      internalValueResult.options = this._options;
    }
    if (this._password?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password?.internalValue;
    }
    if (this._secretName !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretName = this._secretName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecUsers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._databases = undefined;
      this._name = undefined;
      this._options = undefined;
      this._password.internalValue = undefined;
      this._secretName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._databases = value.databases;
      this._name = value.name;
      this._options = value.options;
      this._password.internalValue = value.password;
      this._secretName = value.secretName;
    }
  }

  // databases - computed: false, optional: true, required: false
  private _databases?: string[]; 
  public get databases() {
    return this.getListAttribute('databases');
  }
  public set databases(value: string[]) {
    this._databases = value;
  }
  public resetDatabases() {
    this._databases = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databasesInput() {
    return this._databases;
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

  // options - computed: false, optional: true, required: false
  private _options?: string; 
  public get options() {
    return this.getStringAttribute('options');
  }
  public set options(value: string) {
    this._options = value;
  }
  public resetOptions() {
    this._options = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionsInput() {
    return this._options;
  }

  // password - computed: false, optional: true, required: false
  private _password = new DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecUsersPasswordOutputReference(this, "password");
  public get password() {
    return this._password;
  }
  public putPassword(value: DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecUsersPassword) {
    this._password.internalValue = value;
  }
  public resetPassword() {
    this._password.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password.internalValue;
  }

  // secret_name - computed: false, optional: true, required: false
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

export class DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecUsersList extends cdktf.ComplexList {
  public internalValue? : DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecUsers[] | cdktf.IResolvable

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
  public get(index: number): DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecUsersOutputReference {
    return new DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecUsersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpec {
  /**
  * PostgreSQL backup configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/pgv2_percona_com_percona_pg_cluster_v2_manifest#backups DataK8SPgv2PerconaComPerconaPgClusterV2Manifest#backups}
  */
  readonly backups: DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecBackups;
  /**
  * Version of the operator. Update this to new version after operator upgrade to apply changes to Kubernetes objects. Default is the latest version.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/pgv2_percona_com_percona_pg_cluster_v2_manifest#cr_version DataK8SPgv2PerconaComPerconaPgClusterV2Manifest#cr_version}
  */
  readonly crVersion?: string;
  /**
  * Specifies a data source for bootstrapping the PostgreSQL cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/pgv2_percona_com_percona_pg_cluster_v2_manifest#data_source DataK8SPgv2PerconaComPerconaPgClusterV2Manifest#data_source}
  */
  readonly dataSource?: DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecDataSource;
  /**
  * DatabaseInitSQL defines a ConfigMap containing custom SQL that will be run after the cluster is initialized. This ConfigMap must be in the same namespace as the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/pgv2_percona_com_percona_pg_cluster_v2_manifest#database_init_sql DataK8SPgv2PerconaComPerconaPgClusterV2Manifest#database_init_sql}
  */
  readonly databaseInitSql?: DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecDatabaseInitSql;
  /**
  * Specification of the service that exposes the PostgreSQL primary instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/pgv2_percona_com_percona_pg_cluster_v2_manifest#expose DataK8SPgv2PerconaComPerconaPgClusterV2Manifest#expose}
  */
  readonly expose?: DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecExpose;
  /**
  * Specification of the service that exposes PostgreSQL replica instances
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/pgv2_percona_com_percona_pg_cluster_v2_manifest#expose_replicas DataK8SPgv2PerconaComPerconaPgClusterV2Manifest#expose_replicas}
  */
  readonly exposeReplicas?: DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecExposeReplicas;
  /**
  * The specification of extensions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/pgv2_percona_com_percona_pg_cluster_v2_manifest#extensions DataK8SPgv2PerconaComPerconaPgClusterV2Manifest#extensions}
  */
  readonly extensions?: DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecExtensions;
  /**
  * The image name to use for PostgreSQL containers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/pgv2_percona_com_percona_pg_cluster_v2_manifest#image DataK8SPgv2PerconaComPerconaPgClusterV2Manifest#image}
  */
  readonly image?: string;
  /**
  * ImagePullPolicy is used to determine when Kubernetes will attempt to pull (download) container images. More info: https://kubernetes.io/docs/concepts/containers/images/#image-pull-policy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/pgv2_percona_com_percona_pg_cluster_v2_manifest#image_pull_policy DataK8SPgv2PerconaComPerconaPgClusterV2Manifest#image_pull_policy}
  */
  readonly imagePullPolicy?: string;
  /**
  * The image pull secrets used to pull from a private registry Changing this value causes all running pods to restart. https://k8s.io/docs/tasks/configure-pod-container/pull-image-private-registry/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/pgv2_percona_com_percona_pg_cluster_v2_manifest#image_pull_secrets DataK8SPgv2PerconaComPerconaPgClusterV2Manifest#image_pull_secrets}
  */
  readonly imagePullSecrets?: DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecImagePullSecrets[] | cdktf.IResolvable;
  /**
  * Specifies one or more sets of PostgreSQL pods that replicate data for this cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/pgv2_percona_com_percona_pg_cluster_v2_manifest#instances DataK8SPgv2PerconaComPerconaPgClusterV2Manifest#instances}
  */
  readonly instances: DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecInstances[] | cdktf.IResolvable;
  /**
  * Metadata contains metadata for custom resources
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/pgv2_percona_com_percona_pg_cluster_v2_manifest#metadata DataK8SPgv2PerconaComPerconaPgClusterV2Manifest#metadata}
  */
  readonly metadata?: DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecMetadata;
  /**
  * Whether or not the PostgreSQL cluster is being deployed to an OpenShift environment. If the field is unset, the operator will automatically detect the environment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/pgv2_percona_com_percona_pg_cluster_v2_manifest#openshift DataK8SPgv2PerconaComPerconaPgClusterV2Manifest#openshift}
  */
  readonly openshift?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/pgv2_percona_com_percona_pg_cluster_v2_manifest#patroni DataK8SPgv2PerconaComPerconaPgClusterV2Manifest#patroni}
  */
  readonly patroni?: DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecPatroni;
  /**
  * Whether or not the PostgreSQL cluster should be stopped. When this is true, workloads are scaled to zero and CronJobs are suspended. Other resources, such as Services and Volumes, remain in place.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/pgv2_percona_com_percona_pg_cluster_v2_manifest#pause DataK8SPgv2PerconaComPerconaPgClusterV2Manifest#pause}
  */
  readonly pause?: boolean | cdktf.IResolvable;
  /**
  * The specification of PMM sidecars.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/pgv2_percona_com_percona_pg_cluster_v2_manifest#pmm DataK8SPgv2PerconaComPerconaPgClusterV2Manifest#pmm}
  */
  readonly pmm?: DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecPmm;
  /**
  * The port on which PostgreSQL should listen.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/pgv2_percona_com_percona_pg_cluster_v2_manifest#port DataK8SPgv2PerconaComPerconaPgClusterV2Manifest#port}
  */
  readonly port?: number;
  /**
  * The major version of PostgreSQL installed in the PostgreSQL image
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/pgv2_percona_com_percona_pg_cluster_v2_manifest#postgres_version DataK8SPgv2PerconaComPerconaPgClusterV2Manifest#postgres_version}
  */
  readonly postgresVersion: number;
  /**
  * The specification of a proxy that connects to PostgreSQL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/pgv2_percona_com_percona_pg_cluster_v2_manifest#proxy DataK8SPgv2PerconaComPerconaPgClusterV2Manifest#proxy}
  */
  readonly proxy?: DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxy;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/pgv2_percona_com_percona_pg_cluster_v2_manifest#secrets DataK8SPgv2PerconaComPerconaPgClusterV2Manifest#secrets}
  */
  readonly secrets?: DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecSecrets;
  /**
  * Run this cluster as a read-only copy of an existing cluster or archive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/pgv2_percona_com_percona_pg_cluster_v2_manifest#standby DataK8SPgv2PerconaComPerconaPgClusterV2Manifest#standby}
  */
  readonly standby?: DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecStandby;
  /**
  * Suspends the rollout and reconciliation of changes made to the PostgresCluster spec.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/pgv2_percona_com_percona_pg_cluster_v2_manifest#unmanaged DataK8SPgv2PerconaComPerconaPgClusterV2Manifest#unmanaged}
  */
  readonly unmanaged?: boolean | cdktf.IResolvable;
  /**
  * Users to create inside PostgreSQL and the databases they should access. The default creates one user that can access one database matching the PostgresCluster name. An empty list creates no users. Removing a user from this list does NOT drop the user nor revoke their access.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/pgv2_percona_com_percona_pg_cluster_v2_manifest#users DataK8SPgv2PerconaComPerconaPgClusterV2Manifest#users}
  */
  readonly users?: DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecUsers[] | cdktf.IResolvable;
}

export function dataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecToTerraform(struct?: DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    backups: dataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecBackupsToTerraform(struct!.backups),
    cr_version: cdktf.stringToTerraform(struct!.crVersion),
    data_source: dataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecDataSourceToTerraform(struct!.dataSource),
    database_init_sql: dataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecDatabaseInitSqlToTerraform(struct!.databaseInitSql),
    expose: dataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecExposeToTerraform(struct!.expose),
    expose_replicas: dataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecExposeReplicasToTerraform(struct!.exposeReplicas),
    extensions: dataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecExtensionsToTerraform(struct!.extensions),
    image: cdktf.stringToTerraform(struct!.image),
    image_pull_policy: cdktf.stringToTerraform(struct!.imagePullPolicy),
    image_pull_secrets: cdktf.listMapper(dataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecImagePullSecretsToTerraform, false)(struct!.imagePullSecrets),
    instances: cdktf.listMapper(dataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecInstancesToTerraform, false)(struct!.instances),
    metadata: dataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecMetadataToTerraform(struct!.metadata),
    openshift: cdktf.booleanToTerraform(struct!.openshift),
    patroni: dataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecPatroniToTerraform(struct!.patroni),
    pause: cdktf.booleanToTerraform(struct!.pause),
    pmm: dataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecPmmToTerraform(struct!.pmm),
    port: cdktf.numberToTerraform(struct!.port),
    postgres_version: cdktf.numberToTerraform(struct!.postgresVersion),
    proxy: dataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyToTerraform(struct!.proxy),
    secrets: dataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecSecretsToTerraform(struct!.secrets),
    standby: dataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecStandbyToTerraform(struct!.standby),
    unmanaged: cdktf.booleanToTerraform(struct!.unmanaged),
    users: cdktf.listMapper(dataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecUsersToTerraform, false)(struct!.users),
  }
}


export function dataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecToHclTerraform(struct?: DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    backups: {
      value: dataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecBackupsToHclTerraform(struct!.backups),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecBackups",
    },
    cr_version: {
      value: cdktf.stringToHclTerraform(struct!.crVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    data_source: {
      value: dataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecDataSourceToHclTerraform(struct!.dataSource),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecDataSource",
    },
    database_init_sql: {
      value: dataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecDatabaseInitSqlToHclTerraform(struct!.databaseInitSql),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecDatabaseInitSql",
    },
    expose: {
      value: dataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecExposeToHclTerraform(struct!.expose),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecExpose",
    },
    expose_replicas: {
      value: dataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecExposeReplicasToHclTerraform(struct!.exposeReplicas),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecExposeReplicas",
    },
    extensions: {
      value: dataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecExtensionsToHclTerraform(struct!.extensions),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecExtensions",
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
      value: cdktf.listMapperHcl(dataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecImagePullSecretsToHclTerraform, false)(struct!.imagePullSecrets),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecImagePullSecretsList",
    },
    instances: {
      value: cdktf.listMapperHcl(dataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecInstancesToHclTerraform, false)(struct!.instances),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecInstancesList",
    },
    metadata: {
      value: dataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecMetadataToHclTerraform(struct!.metadata),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecMetadata",
    },
    openshift: {
      value: cdktf.booleanToHclTerraform(struct!.openshift),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    patroni: {
      value: dataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecPatroniToHclTerraform(struct!.patroni),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecPatroni",
    },
    pause: {
      value: cdktf.booleanToHclTerraform(struct!.pause),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    pmm: {
      value: dataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecPmmToHclTerraform(struct!.pmm),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecPmm",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    postgres_version: {
      value: cdktf.numberToHclTerraform(struct!.postgresVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    proxy: {
      value: dataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyToHclTerraform(struct!.proxy),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxy",
    },
    secrets: {
      value: dataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecSecretsToHclTerraform(struct!.secrets),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecSecrets",
    },
    standby: {
      value: dataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecStandbyToHclTerraform(struct!.standby),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecStandby",
    },
    unmanaged: {
      value: cdktf.booleanToHclTerraform(struct!.unmanaged),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    users: {
      value: cdktf.listMapperHcl(dataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecUsersToHclTerraform, false)(struct!.users),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecUsersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._backups?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.backups = this._backups?.internalValue;
    }
    if (this._crVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.crVersion = this._crVersion;
    }
    if (this._dataSource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataSource = this._dataSource?.internalValue;
    }
    if (this._databaseInitSql?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.databaseInitSql = this._databaseInitSql?.internalValue;
    }
    if (this._expose?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.expose = this._expose?.internalValue;
    }
    if (this._exposeReplicas?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.exposeReplicas = this._exposeReplicas?.internalValue;
    }
    if (this._extensions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.extensions = this._extensions?.internalValue;
    }
    if (this._image !== undefined) {
      hasAnyValues = true;
      internalValueResult.image = this._image;
    }
    if (this._imagePullPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.imagePullPolicy = this._imagePullPolicy;
    }
    if (this._imagePullSecrets?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.imagePullSecrets = this._imagePullSecrets?.internalValue;
    }
    if (this._instances?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.instances = this._instances?.internalValue;
    }
    if (this._metadata?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadata = this._metadata?.internalValue;
    }
    if (this._openshift !== undefined) {
      hasAnyValues = true;
      internalValueResult.openshift = this._openshift;
    }
    if (this._patroni?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.patroni = this._patroni?.internalValue;
    }
    if (this._pause !== undefined) {
      hasAnyValues = true;
      internalValueResult.pause = this._pause;
    }
    if (this._pmm?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pmm = this._pmm?.internalValue;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._postgresVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.postgresVersion = this._postgresVersion;
    }
    if (this._proxy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.proxy = this._proxy?.internalValue;
    }
    if (this._secrets?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secrets = this._secrets?.internalValue;
    }
    if (this._standby?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.standby = this._standby?.internalValue;
    }
    if (this._unmanaged !== undefined) {
      hasAnyValues = true;
      internalValueResult.unmanaged = this._unmanaged;
    }
    if (this._users?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.users = this._users?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._backups.internalValue = undefined;
      this._crVersion = undefined;
      this._dataSource.internalValue = undefined;
      this._databaseInitSql.internalValue = undefined;
      this._expose.internalValue = undefined;
      this._exposeReplicas.internalValue = undefined;
      this._extensions.internalValue = undefined;
      this._image = undefined;
      this._imagePullPolicy = undefined;
      this._imagePullSecrets.internalValue = undefined;
      this._instances.internalValue = undefined;
      this._metadata.internalValue = undefined;
      this._openshift = undefined;
      this._patroni.internalValue = undefined;
      this._pause = undefined;
      this._pmm.internalValue = undefined;
      this._port = undefined;
      this._postgresVersion = undefined;
      this._proxy.internalValue = undefined;
      this._secrets.internalValue = undefined;
      this._standby.internalValue = undefined;
      this._unmanaged = undefined;
      this._users.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._backups.internalValue = value.backups;
      this._crVersion = value.crVersion;
      this._dataSource.internalValue = value.dataSource;
      this._databaseInitSql.internalValue = value.databaseInitSql;
      this._expose.internalValue = value.expose;
      this._exposeReplicas.internalValue = value.exposeReplicas;
      this._extensions.internalValue = value.extensions;
      this._image = value.image;
      this._imagePullPolicy = value.imagePullPolicy;
      this._imagePullSecrets.internalValue = value.imagePullSecrets;
      this._instances.internalValue = value.instances;
      this._metadata.internalValue = value.metadata;
      this._openshift = value.openshift;
      this._patroni.internalValue = value.patroni;
      this._pause = value.pause;
      this._pmm.internalValue = value.pmm;
      this._port = value.port;
      this._postgresVersion = value.postgresVersion;
      this._proxy.internalValue = value.proxy;
      this._secrets.internalValue = value.secrets;
      this._standby.internalValue = value.standby;
      this._unmanaged = value.unmanaged;
      this._users.internalValue = value.users;
    }
  }

  // backups - computed: false, optional: false, required: true
  private _backups = new DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecBackupsOutputReference(this, "backups");
  public get backups() {
    return this._backups;
  }
  public putBackups(value: DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecBackups) {
    this._backups.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get backupsInput() {
    return this._backups.internalValue;
  }

  // cr_version - computed: false, optional: true, required: false
  private _crVersion?: string; 
  public get crVersion() {
    return this.getStringAttribute('cr_version');
  }
  public set crVersion(value: string) {
    this._crVersion = value;
  }
  public resetCrVersion() {
    this._crVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crVersionInput() {
    return this._crVersion;
  }

  // data_source - computed: false, optional: true, required: false
  private _dataSource = new DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecDataSourceOutputReference(this, "data_source");
  public get dataSource() {
    return this._dataSource;
  }
  public putDataSource(value: DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecDataSource) {
    this._dataSource.internalValue = value;
  }
  public resetDataSource() {
    this._dataSource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataSourceInput() {
    return this._dataSource.internalValue;
  }

  // database_init_sql - computed: false, optional: true, required: false
  private _databaseInitSql = new DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecDatabaseInitSqlOutputReference(this, "database_init_sql");
  public get databaseInitSql() {
    return this._databaseInitSql;
  }
  public putDatabaseInitSql(value: DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecDatabaseInitSql) {
    this._databaseInitSql.internalValue = value;
  }
  public resetDatabaseInitSql() {
    this._databaseInitSql.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseInitSqlInput() {
    return this._databaseInitSql.internalValue;
  }

  // expose - computed: false, optional: true, required: false
  private _expose = new DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecExposeOutputReference(this, "expose");
  public get expose() {
    return this._expose;
  }
  public putExpose(value: DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecExpose) {
    this._expose.internalValue = value;
  }
  public resetExpose() {
    this._expose.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exposeInput() {
    return this._expose.internalValue;
  }

  // expose_replicas - computed: false, optional: true, required: false
  private _exposeReplicas = new DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecExposeReplicasOutputReference(this, "expose_replicas");
  public get exposeReplicas() {
    return this._exposeReplicas;
  }
  public putExposeReplicas(value: DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecExposeReplicas) {
    this._exposeReplicas.internalValue = value;
  }
  public resetExposeReplicas() {
    this._exposeReplicas.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exposeReplicasInput() {
    return this._exposeReplicas.internalValue;
  }

  // extensions - computed: false, optional: true, required: false
  private _extensions = new DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecExtensionsOutputReference(this, "extensions");
  public get extensions() {
    return this._extensions;
  }
  public putExtensions(value: DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecExtensions) {
    this._extensions.internalValue = value;
  }
  public resetExtensions() {
    this._extensions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extensionsInput() {
    return this._extensions.internalValue;
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
  private _imagePullSecrets = new DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecImagePullSecretsList(this, "image_pull_secrets", false);
  public get imagePullSecrets() {
    return this._imagePullSecrets;
  }
  public putImagePullSecrets(value: DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecImagePullSecrets[] | cdktf.IResolvable) {
    this._imagePullSecrets.internalValue = value;
  }
  public resetImagePullSecrets() {
    this._imagePullSecrets.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imagePullSecretsInput() {
    return this._imagePullSecrets.internalValue;
  }

  // instances - computed: false, optional: false, required: true
  private _instances = new DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecInstancesList(this, "instances", false);
  public get instances() {
    return this._instances;
  }
  public putInstances(value: DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecInstances[] | cdktf.IResolvable) {
    this._instances.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instancesInput() {
    return this._instances.internalValue;
  }

  // metadata - computed: false, optional: true, required: false
  private _metadata = new DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecMetadata) {
    this._metadata.internalValue = value;
  }
  public resetMetadata() {
    this._metadata.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // openshift - computed: false, optional: true, required: false
  private _openshift?: boolean | cdktf.IResolvable; 
  public get openshift() {
    return this.getBooleanAttribute('openshift');
  }
  public set openshift(value: boolean | cdktf.IResolvable) {
    this._openshift = value;
  }
  public resetOpenshift() {
    this._openshift = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get openshiftInput() {
    return this._openshift;
  }

  // patroni - computed: false, optional: true, required: false
  private _patroni = new DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecPatroniOutputReference(this, "patroni");
  public get patroni() {
    return this._patroni;
  }
  public putPatroni(value: DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecPatroni) {
    this._patroni.internalValue = value;
  }
  public resetPatroni() {
    this._patroni.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get patroniInput() {
    return this._patroni.internalValue;
  }

  // pause - computed: false, optional: true, required: false
  private _pause?: boolean | cdktf.IResolvable; 
  public get pause() {
    return this.getBooleanAttribute('pause');
  }
  public set pause(value: boolean | cdktf.IResolvable) {
    this._pause = value;
  }
  public resetPause() {
    this._pause = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pauseInput() {
    return this._pause;
  }

  // pmm - computed: false, optional: true, required: false
  private _pmm = new DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecPmmOutputReference(this, "pmm");
  public get pmm() {
    return this._pmm;
  }
  public putPmm(value: DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecPmm) {
    this._pmm.internalValue = value;
  }
  public resetPmm() {
    this._pmm.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pmmInput() {
    return this._pmm.internalValue;
  }

  // port - computed: false, optional: true, required: false
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

  // postgres_version - computed: false, optional: false, required: true
  private _postgresVersion?: number; 
  public get postgresVersion() {
    return this.getNumberAttribute('postgres_version');
  }
  public set postgresVersion(value: number) {
    this._postgresVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get postgresVersionInput() {
    return this._postgresVersion;
  }

  // proxy - computed: false, optional: true, required: false
  private _proxy = new DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxyOutputReference(this, "proxy");
  public get proxy() {
    return this._proxy;
  }
  public putProxy(value: DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecProxy) {
    this._proxy.internalValue = value;
  }
  public resetProxy() {
    this._proxy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyInput() {
    return this._proxy.internalValue;
  }

  // secrets - computed: false, optional: true, required: false
  private _secrets = new DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecSecretsOutputReference(this, "secrets");
  public get secrets() {
    return this._secrets;
  }
  public putSecrets(value: DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecSecrets) {
    this._secrets.internalValue = value;
  }
  public resetSecrets() {
    this._secrets.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretsInput() {
    return this._secrets.internalValue;
  }

  // standby - computed: false, optional: true, required: false
  private _standby = new DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecStandbyOutputReference(this, "standby");
  public get standby() {
    return this._standby;
  }
  public putStandby(value: DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecStandby) {
    this._standby.internalValue = value;
  }
  public resetStandby() {
    this._standby.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get standbyInput() {
    return this._standby.internalValue;
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

  // users - computed: false, optional: true, required: false
  private _users = new DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecUsersList(this, "users", false);
  public get users() {
    return this._users;
  }
  public putUsers(value: DataK8SPgv2PerconaComPerconaPgClusterV2ManifestSpecUsers[] | cdktf.IResolvable) {
    this._users.internalValue = value;
  }
  public resetUsers() {
    this._users.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usersInput() {
    return this._users.internalValue;
  }
}
