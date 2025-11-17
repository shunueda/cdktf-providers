import * as cdktf from 'cdktf';
import { DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersLivenessProbeExec,
dataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersLivenessProbeExecToTerraform,
dataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersLivenessProbeExecToHclTerraform,
DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersLivenessProbeExecOutputReference,
DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersEnv,
dataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersEnvToTerraform,
dataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersEnvToHclTerraform,
DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersEnvList,
DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersEnvFrom,
dataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersEnvFromToTerraform,
dataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersEnvFromToHclTerraform,
DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersEnvFromList,
DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersLifecycle,
dataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersLifecycleToTerraform,
dataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersLifecycleToHclTerraform,
DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersLifecycleOutputReference,
DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecAffinity,
dataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecAffinityToTerraform,
dataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecAffinityToHclTerraform,
DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecAffinityOutputReference,
DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecContainerSecurityContext,
dataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecContainerSecurityContextToTerraform,
dataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecContainerSecurityContextToHclTerraform,
DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecContainerSecurityContextOutputReference,
DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecEnv,
dataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecEnvToTerraform,
dataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecEnvToHclTerraform,
DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecEnvList,
DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecEnvFrom,
dataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecEnvFromToTerraform,
dataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecEnvFromToHclTerraform,
DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecEnvFromList,
DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecExtraContainers,
dataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecExtraContainersToTerraform,
dataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecExtraContainersToHclTerraform,
DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecExtraContainersList,
DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecExtraVolumeMounts,
dataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecExtraVolumeMountsToTerraform,
dataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecExtraVolumeMountsToHclTerraform,
DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecExtraVolumeMountsList,
DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecExtraVolumes,
dataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecExtraVolumesToTerraform,
dataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecExtraVolumesToHclTerraform,
DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecExtraVolumesList } from './structs800'
import { DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateMetadata,
dataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateMetadataToTerraform,
dataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateMetadataToHclTerraform,
DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateMetadataOutputReference,
DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecCoreTemplate,
dataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecCoreTemplateToTerraform,
dataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecCoreTemplateToHclTerraform,
DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecCoreTemplateOutputReference,
DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecDashboardServiceTemplate,
dataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecDashboardServiceTemplateToTerraform,
dataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecDashboardServiceTemplateToHclTerraform,
DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecDashboardServiceTemplateOutputReference,
DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecImagePullSecrets,
dataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecImagePullSecretsToTerraform,
dataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecImagePullSecretsToHclTerraform,
DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecImagePullSecretsList,
DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecListenersServiceTemplate,
dataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecListenersServiceTemplateToTerraform,
dataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecListenersServiceTemplateToHclTerraform,
DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecListenersServiceTemplateOutputReference } from './structs400'
import { DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecBootstrapApiKeys,
dataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecBootstrapApiKeysToTerraform,
dataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecBootstrapApiKeysToHclTerraform,
DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecBootstrapApiKeysList,
DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecConfig,
dataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecConfigToTerraform,
dataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecConfigToHclTerraform,
DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecConfigOutputReference } from './structs0'
export interface DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersLivenessProbeGrpc {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_v2beta1_manifest#port DataK8SAppsEmqxIoEmqxV2Beta1Manifest#port}
  */
  readonly port: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_v2beta1_manifest#service DataK8SAppsEmqxIoEmqxV2Beta1Manifest#service}
  */
  readonly service?: string;
}

export function dataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersLivenessProbeGrpcToTerraform(struct?: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersLivenessProbeGrpc | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    port: cdktf.numberToTerraform(struct!.port),
    service: cdktf.stringToTerraform(struct!.service),
  }
}


export function dataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersLivenessProbeGrpcToHclTerraform(struct?: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersLivenessProbeGrpc | cdktf.IResolvable): any {
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

export class DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersLivenessProbeGrpcOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersLivenessProbeGrpc | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersLivenessProbeGrpc | cdktf.IResolvable | undefined) {
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
export interface DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersLivenessProbeHttpGetHttpHeaders {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_v2beta1_manifest#name DataK8SAppsEmqxIoEmqxV2Beta1Manifest#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_v2beta1_manifest#value DataK8SAppsEmqxIoEmqxV2Beta1Manifest#value}
  */
  readonly value: string;
}

export function dataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersLivenessProbeHttpGetHttpHeadersToTerraform(struct?: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersLivenessProbeHttpGetHttpHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersLivenessProbeHttpGetHttpHeadersToHclTerraform(struct?: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersLivenessProbeHttpGetHttpHeaders | cdktf.IResolvable): any {
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

export class DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersLivenessProbeHttpGetHttpHeadersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersLivenessProbeHttpGetHttpHeaders | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersLivenessProbeHttpGetHttpHeaders | cdktf.IResolvable | undefined) {
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

export class DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersLivenessProbeHttpGetHttpHeadersList extends cdktf.ComplexList {
  public internalValue? : DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersLivenessProbeHttpGetHttpHeaders[] | cdktf.IResolvable

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
  public get(index: number): DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersLivenessProbeHttpGetHttpHeadersOutputReference {
    return new DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersLivenessProbeHttpGetHttpHeadersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersLivenessProbeHttpGet {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_v2beta1_manifest#host DataK8SAppsEmqxIoEmqxV2Beta1Manifest#host}
  */
  readonly host?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_v2beta1_manifest#http_headers DataK8SAppsEmqxIoEmqxV2Beta1Manifest#http_headers}
  */
  readonly httpHeaders?: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersLivenessProbeHttpGetHttpHeaders[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_v2beta1_manifest#path DataK8SAppsEmqxIoEmqxV2Beta1Manifest#path}
  */
  readonly path?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_v2beta1_manifest#port DataK8SAppsEmqxIoEmqxV2Beta1Manifest#port}
  */
  readonly port: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_v2beta1_manifest#scheme DataK8SAppsEmqxIoEmqxV2Beta1Manifest#scheme}
  */
  readonly scheme?: string;
}

export function dataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersLivenessProbeHttpGetToTerraform(struct?: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersLivenessProbeHttpGet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host: cdktf.stringToTerraform(struct!.host),
    http_headers: cdktf.listMapper(dataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersLivenessProbeHttpGetHttpHeadersToTerraform, false)(struct!.httpHeaders),
    path: cdktf.stringToTerraform(struct!.path),
    port: cdktf.stringToTerraform(struct!.port),
    scheme: cdktf.stringToTerraform(struct!.scheme),
  }
}


export function dataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersLivenessProbeHttpGetToHclTerraform(struct?: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersLivenessProbeHttpGet | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(dataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersLivenessProbeHttpGetHttpHeadersToHclTerraform, false)(struct!.httpHeaders),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersLivenessProbeHttpGetHttpHeadersList",
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

export class DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersLivenessProbeHttpGetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersLivenessProbeHttpGet | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersLivenessProbeHttpGet | cdktf.IResolvable | undefined) {
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
  private _httpHeaders = new DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersLivenessProbeHttpGetHttpHeadersList(this, "http_headers", false);
  public get httpHeaders() {
    return this._httpHeaders;
  }
  public putHttpHeaders(value: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersLivenessProbeHttpGetHttpHeaders[] | cdktf.IResolvable) {
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
export interface DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersLivenessProbeTcpSocket {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_v2beta1_manifest#host DataK8SAppsEmqxIoEmqxV2Beta1Manifest#host}
  */
  readonly host?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_v2beta1_manifest#port DataK8SAppsEmqxIoEmqxV2Beta1Manifest#port}
  */
  readonly port: string;
}

export function dataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersLivenessProbeTcpSocketToTerraform(struct?: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersLivenessProbeTcpSocket | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host: cdktf.stringToTerraform(struct!.host),
    port: cdktf.stringToTerraform(struct!.port),
  }
}


export function dataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersLivenessProbeTcpSocketToHclTerraform(struct?: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersLivenessProbeTcpSocket | cdktf.IResolvable): any {
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

export class DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersLivenessProbeTcpSocketOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersLivenessProbeTcpSocket | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersLivenessProbeTcpSocket | cdktf.IResolvable | undefined) {
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
export interface DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersLivenessProbe {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_v2beta1_manifest#exec DataK8SAppsEmqxIoEmqxV2Beta1Manifest#exec}
  */
  readonly exec?: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersLivenessProbeExec;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_v2beta1_manifest#failure_threshold DataK8SAppsEmqxIoEmqxV2Beta1Manifest#failure_threshold}
  */
  readonly failureThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_v2beta1_manifest#grpc DataK8SAppsEmqxIoEmqxV2Beta1Manifest#grpc}
  */
  readonly grpc?: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersLivenessProbeGrpc;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_v2beta1_manifest#http_get DataK8SAppsEmqxIoEmqxV2Beta1Manifest#http_get}
  */
  readonly httpGet?: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersLivenessProbeHttpGet;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_v2beta1_manifest#initial_delay_seconds DataK8SAppsEmqxIoEmqxV2Beta1Manifest#initial_delay_seconds}
  */
  readonly initialDelaySeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_v2beta1_manifest#period_seconds DataK8SAppsEmqxIoEmqxV2Beta1Manifest#period_seconds}
  */
  readonly periodSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_v2beta1_manifest#success_threshold DataK8SAppsEmqxIoEmqxV2Beta1Manifest#success_threshold}
  */
  readonly successThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_v2beta1_manifest#tcp_socket DataK8SAppsEmqxIoEmqxV2Beta1Manifest#tcp_socket}
  */
  readonly tcpSocket?: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersLivenessProbeTcpSocket;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_v2beta1_manifest#termination_grace_period_seconds DataK8SAppsEmqxIoEmqxV2Beta1Manifest#termination_grace_period_seconds}
  */
  readonly terminationGracePeriodSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_v2beta1_manifest#timeout_seconds DataK8SAppsEmqxIoEmqxV2Beta1Manifest#timeout_seconds}
  */
  readonly timeoutSeconds?: number;
}

export function dataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersLivenessProbeToTerraform(struct?: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersLivenessProbe | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exec: dataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersLivenessProbeExecToTerraform(struct!.exec),
    failure_threshold: cdktf.numberToTerraform(struct!.failureThreshold),
    grpc: dataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersLivenessProbeGrpcToTerraform(struct!.grpc),
    http_get: dataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersLivenessProbeHttpGetToTerraform(struct!.httpGet),
    initial_delay_seconds: cdktf.numberToTerraform(struct!.initialDelaySeconds),
    period_seconds: cdktf.numberToTerraform(struct!.periodSeconds),
    success_threshold: cdktf.numberToTerraform(struct!.successThreshold),
    tcp_socket: dataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersLivenessProbeTcpSocketToTerraform(struct!.tcpSocket),
    termination_grace_period_seconds: cdktf.numberToTerraform(struct!.terminationGracePeriodSeconds),
    timeout_seconds: cdktf.numberToTerraform(struct!.timeoutSeconds),
  }
}


export function dataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersLivenessProbeToHclTerraform(struct?: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersLivenessProbe | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exec: {
      value: dataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersLivenessProbeExecToHclTerraform(struct!.exec),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersLivenessProbeExec",
    },
    failure_threshold: {
      value: cdktf.numberToHclTerraform(struct!.failureThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    grpc: {
      value: dataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersLivenessProbeGrpcToHclTerraform(struct!.grpc),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersLivenessProbeGrpc",
    },
    http_get: {
      value: dataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersLivenessProbeHttpGetToHclTerraform(struct!.httpGet),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersLivenessProbeHttpGet",
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
      value: dataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersLivenessProbeTcpSocketToHclTerraform(struct!.tcpSocket),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersLivenessProbeTcpSocket",
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

export class DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersLivenessProbeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersLivenessProbe | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersLivenessProbe | cdktf.IResolvable | undefined) {
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
  private _exec = new DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersLivenessProbeExecOutputReference(this, "exec");
  public get exec() {
    return this._exec;
  }
  public putExec(value: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersLivenessProbeExec) {
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
  private _grpc = new DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersLivenessProbeGrpcOutputReference(this, "grpc");
  public get grpc() {
    return this._grpc;
  }
  public putGrpc(value: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersLivenessProbeGrpc) {
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
  private _httpGet = new DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersLivenessProbeHttpGetOutputReference(this, "http_get");
  public get httpGet() {
    return this._httpGet;
  }
  public putHttpGet(value: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersLivenessProbeHttpGet) {
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
  private _tcpSocket = new DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersLivenessProbeTcpSocketOutputReference(this, "tcp_socket");
  public get tcpSocket() {
    return this._tcpSocket;
  }
  public putTcpSocket(value: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersLivenessProbeTcpSocket) {
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
export interface DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersPorts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_v2beta1_manifest#container_port DataK8SAppsEmqxIoEmqxV2Beta1Manifest#container_port}
  */
  readonly containerPort: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_v2beta1_manifest#host_ip DataK8SAppsEmqxIoEmqxV2Beta1Manifest#host_ip}
  */
  readonly hostIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_v2beta1_manifest#host_port DataK8SAppsEmqxIoEmqxV2Beta1Manifest#host_port}
  */
  readonly hostPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_v2beta1_manifest#name DataK8SAppsEmqxIoEmqxV2Beta1Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_v2beta1_manifest#protocol DataK8SAppsEmqxIoEmqxV2Beta1Manifest#protocol}
  */
  readonly protocol?: string;
}

export function dataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersPortsToTerraform(struct?: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersPorts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    container_port: cdktf.numberToTerraform(struct!.containerPort),
    host_ip: cdktf.stringToTerraform(struct!.hostIp),
    host_port: cdktf.numberToTerraform(struct!.hostPort),
    name: cdktf.stringToTerraform(struct!.name),
    protocol: cdktf.stringToTerraform(struct!.protocol),
  }
}


export function dataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersPortsToHclTerraform(struct?: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersPorts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    container_port: {
      value: cdktf.numberToHclTerraform(struct!.containerPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    host_ip: {
      value: cdktf.stringToHclTerraform(struct!.hostIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    host_port: {
      value: cdktf.numberToHclTerraform(struct!.hostPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersPortsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersPorts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._containerPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerPort = this._containerPort;
    }
    if (this._hostIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostIp = this._hostIp;
    }
    if (this._hostPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostPort = this._hostPort;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersPorts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._containerPort = undefined;
      this._hostIp = undefined;
      this._hostPort = undefined;
      this._name = undefined;
      this._protocol = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._containerPort = value.containerPort;
      this._hostIp = value.hostIp;
      this._hostPort = value.hostPort;
      this._name = value.name;
      this._protocol = value.protocol;
    }
  }

  // container_port - computed: false, optional: false, required: true
  private _containerPort?: number; 
  public get containerPort() {
    return this.getNumberAttribute('container_port');
  }
  public set containerPort(value: number) {
    this._containerPort = value;
  }
  // Temporarily expose input value. Use with caution.
  public get containerPortInput() {
    return this._containerPort;
  }

  // host_ip - computed: false, optional: true, required: false
  private _hostIp?: string; 
  public get hostIp() {
    return this.getStringAttribute('host_ip');
  }
  public set hostIp(value: string) {
    this._hostIp = value;
  }
  public resetHostIp() {
    this._hostIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostIpInput() {
    return this._hostIp;
  }

  // host_port - computed: false, optional: true, required: false
  private _hostPort?: number; 
  public get hostPort() {
    return this.getNumberAttribute('host_port');
  }
  public set hostPort(value: number) {
    this._hostPort = value;
  }
  public resetHostPort() {
    this._hostPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostPortInput() {
    return this._hostPort;
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
}

export class DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersPortsList extends cdktf.ComplexList {
  public internalValue? : DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersPorts[] | cdktf.IResolvable

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
  public get(index: number): DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersPortsOutputReference {
    return new DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersPortsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersReadinessProbeExec {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_v2beta1_manifest#command DataK8SAppsEmqxIoEmqxV2Beta1Manifest#command}
  */
  readonly command?: string[];
}

export function dataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersReadinessProbeExecToTerraform(struct?: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersReadinessProbeExec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    command: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.command),
  }
}


export function dataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersReadinessProbeExecToHclTerraform(struct?: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersReadinessProbeExec | cdktf.IResolvable): any {
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

export class DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersReadinessProbeExecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersReadinessProbeExec | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersReadinessProbeExec | cdktf.IResolvable | undefined) {
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
export interface DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersReadinessProbeGrpc {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_v2beta1_manifest#port DataK8SAppsEmqxIoEmqxV2Beta1Manifest#port}
  */
  readonly port: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_v2beta1_manifest#service DataK8SAppsEmqxIoEmqxV2Beta1Manifest#service}
  */
  readonly service?: string;
}

export function dataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersReadinessProbeGrpcToTerraform(struct?: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersReadinessProbeGrpc | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    port: cdktf.numberToTerraform(struct!.port),
    service: cdktf.stringToTerraform(struct!.service),
  }
}


export function dataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersReadinessProbeGrpcToHclTerraform(struct?: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersReadinessProbeGrpc | cdktf.IResolvable): any {
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

export class DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersReadinessProbeGrpcOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersReadinessProbeGrpc | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersReadinessProbeGrpc | cdktf.IResolvable | undefined) {
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
export interface DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersReadinessProbeHttpGetHttpHeaders {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_v2beta1_manifest#name DataK8SAppsEmqxIoEmqxV2Beta1Manifest#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_v2beta1_manifest#value DataK8SAppsEmqxIoEmqxV2Beta1Manifest#value}
  */
  readonly value: string;
}

export function dataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersReadinessProbeHttpGetHttpHeadersToTerraform(struct?: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersReadinessProbeHttpGetHttpHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersReadinessProbeHttpGetHttpHeadersToHclTerraform(struct?: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersReadinessProbeHttpGetHttpHeaders | cdktf.IResolvable): any {
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

export class DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersReadinessProbeHttpGetHttpHeadersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersReadinessProbeHttpGetHttpHeaders | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersReadinessProbeHttpGetHttpHeaders | cdktf.IResolvable | undefined) {
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

export class DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersReadinessProbeHttpGetHttpHeadersList extends cdktf.ComplexList {
  public internalValue? : DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersReadinessProbeHttpGetHttpHeaders[] | cdktf.IResolvable

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
  public get(index: number): DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersReadinessProbeHttpGetHttpHeadersOutputReference {
    return new DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersReadinessProbeHttpGetHttpHeadersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersReadinessProbeHttpGet {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_v2beta1_manifest#host DataK8SAppsEmqxIoEmqxV2Beta1Manifest#host}
  */
  readonly host?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_v2beta1_manifest#http_headers DataK8SAppsEmqxIoEmqxV2Beta1Manifest#http_headers}
  */
  readonly httpHeaders?: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersReadinessProbeHttpGetHttpHeaders[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_v2beta1_manifest#path DataK8SAppsEmqxIoEmqxV2Beta1Manifest#path}
  */
  readonly path?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_v2beta1_manifest#port DataK8SAppsEmqxIoEmqxV2Beta1Manifest#port}
  */
  readonly port: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_v2beta1_manifest#scheme DataK8SAppsEmqxIoEmqxV2Beta1Manifest#scheme}
  */
  readonly scheme?: string;
}

export function dataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersReadinessProbeHttpGetToTerraform(struct?: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersReadinessProbeHttpGet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host: cdktf.stringToTerraform(struct!.host),
    http_headers: cdktf.listMapper(dataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersReadinessProbeHttpGetHttpHeadersToTerraform, false)(struct!.httpHeaders),
    path: cdktf.stringToTerraform(struct!.path),
    port: cdktf.stringToTerraform(struct!.port),
    scheme: cdktf.stringToTerraform(struct!.scheme),
  }
}


export function dataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersReadinessProbeHttpGetToHclTerraform(struct?: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersReadinessProbeHttpGet | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(dataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersReadinessProbeHttpGetHttpHeadersToHclTerraform, false)(struct!.httpHeaders),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersReadinessProbeHttpGetHttpHeadersList",
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

export class DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersReadinessProbeHttpGetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersReadinessProbeHttpGet | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersReadinessProbeHttpGet | cdktf.IResolvable | undefined) {
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
  private _httpHeaders = new DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersReadinessProbeHttpGetHttpHeadersList(this, "http_headers", false);
  public get httpHeaders() {
    return this._httpHeaders;
  }
  public putHttpHeaders(value: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersReadinessProbeHttpGetHttpHeaders[] | cdktf.IResolvable) {
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
export interface DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersReadinessProbeTcpSocket {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_v2beta1_manifest#host DataK8SAppsEmqxIoEmqxV2Beta1Manifest#host}
  */
  readonly host?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_v2beta1_manifest#port DataK8SAppsEmqxIoEmqxV2Beta1Manifest#port}
  */
  readonly port: string;
}

export function dataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersReadinessProbeTcpSocketToTerraform(struct?: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersReadinessProbeTcpSocket | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host: cdktf.stringToTerraform(struct!.host),
    port: cdktf.stringToTerraform(struct!.port),
  }
}


export function dataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersReadinessProbeTcpSocketToHclTerraform(struct?: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersReadinessProbeTcpSocket | cdktf.IResolvable): any {
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

export class DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersReadinessProbeTcpSocketOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersReadinessProbeTcpSocket | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersReadinessProbeTcpSocket | cdktf.IResolvable | undefined) {
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
export interface DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersReadinessProbe {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_v2beta1_manifest#exec DataK8SAppsEmqxIoEmqxV2Beta1Manifest#exec}
  */
  readonly exec?: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersReadinessProbeExec;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_v2beta1_manifest#failure_threshold DataK8SAppsEmqxIoEmqxV2Beta1Manifest#failure_threshold}
  */
  readonly failureThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_v2beta1_manifest#grpc DataK8SAppsEmqxIoEmqxV2Beta1Manifest#grpc}
  */
  readonly grpc?: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersReadinessProbeGrpc;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_v2beta1_manifest#http_get DataK8SAppsEmqxIoEmqxV2Beta1Manifest#http_get}
  */
  readonly httpGet?: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersReadinessProbeHttpGet;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_v2beta1_manifest#initial_delay_seconds DataK8SAppsEmqxIoEmqxV2Beta1Manifest#initial_delay_seconds}
  */
  readonly initialDelaySeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_v2beta1_manifest#period_seconds DataK8SAppsEmqxIoEmqxV2Beta1Manifest#period_seconds}
  */
  readonly periodSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_v2beta1_manifest#success_threshold DataK8SAppsEmqxIoEmqxV2Beta1Manifest#success_threshold}
  */
  readonly successThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_v2beta1_manifest#tcp_socket DataK8SAppsEmqxIoEmqxV2Beta1Manifest#tcp_socket}
  */
  readonly tcpSocket?: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersReadinessProbeTcpSocket;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_v2beta1_manifest#termination_grace_period_seconds DataK8SAppsEmqxIoEmqxV2Beta1Manifest#termination_grace_period_seconds}
  */
  readonly terminationGracePeriodSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_v2beta1_manifest#timeout_seconds DataK8SAppsEmqxIoEmqxV2Beta1Manifest#timeout_seconds}
  */
  readonly timeoutSeconds?: number;
}

export function dataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersReadinessProbeToTerraform(struct?: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersReadinessProbe | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exec: dataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersReadinessProbeExecToTerraform(struct!.exec),
    failure_threshold: cdktf.numberToTerraform(struct!.failureThreshold),
    grpc: dataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersReadinessProbeGrpcToTerraform(struct!.grpc),
    http_get: dataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersReadinessProbeHttpGetToTerraform(struct!.httpGet),
    initial_delay_seconds: cdktf.numberToTerraform(struct!.initialDelaySeconds),
    period_seconds: cdktf.numberToTerraform(struct!.periodSeconds),
    success_threshold: cdktf.numberToTerraform(struct!.successThreshold),
    tcp_socket: dataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersReadinessProbeTcpSocketToTerraform(struct!.tcpSocket),
    termination_grace_period_seconds: cdktf.numberToTerraform(struct!.terminationGracePeriodSeconds),
    timeout_seconds: cdktf.numberToTerraform(struct!.timeoutSeconds),
  }
}


export function dataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersReadinessProbeToHclTerraform(struct?: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersReadinessProbe | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exec: {
      value: dataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersReadinessProbeExecToHclTerraform(struct!.exec),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersReadinessProbeExec",
    },
    failure_threshold: {
      value: cdktf.numberToHclTerraform(struct!.failureThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    grpc: {
      value: dataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersReadinessProbeGrpcToHclTerraform(struct!.grpc),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersReadinessProbeGrpc",
    },
    http_get: {
      value: dataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersReadinessProbeHttpGetToHclTerraform(struct!.httpGet),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersReadinessProbeHttpGet",
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
      value: dataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersReadinessProbeTcpSocketToHclTerraform(struct!.tcpSocket),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersReadinessProbeTcpSocket",
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

export class DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersReadinessProbeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersReadinessProbe | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersReadinessProbe | cdktf.IResolvable | undefined) {
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
  private _exec = new DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersReadinessProbeExecOutputReference(this, "exec");
  public get exec() {
    return this._exec;
  }
  public putExec(value: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersReadinessProbeExec) {
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
  private _grpc = new DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersReadinessProbeGrpcOutputReference(this, "grpc");
  public get grpc() {
    return this._grpc;
  }
  public putGrpc(value: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersReadinessProbeGrpc) {
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
  private _httpGet = new DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersReadinessProbeHttpGetOutputReference(this, "http_get");
  public get httpGet() {
    return this._httpGet;
  }
  public putHttpGet(value: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersReadinessProbeHttpGet) {
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
  private _tcpSocket = new DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersReadinessProbeTcpSocketOutputReference(this, "tcp_socket");
  public get tcpSocket() {
    return this._tcpSocket;
  }
  public putTcpSocket(value: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersReadinessProbeTcpSocket) {
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
export interface DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersResizePolicy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_v2beta1_manifest#resource_name DataK8SAppsEmqxIoEmqxV2Beta1Manifest#resource_name}
  */
  readonly resourceName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_v2beta1_manifest#restart_policy DataK8SAppsEmqxIoEmqxV2Beta1Manifest#restart_policy}
  */
  readonly restartPolicy: string;
}

export function dataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersResizePolicyToTerraform(struct?: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersResizePolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    resource_name: cdktf.stringToTerraform(struct!.resourceName),
    restart_policy: cdktf.stringToTerraform(struct!.restartPolicy),
  }
}


export function dataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersResizePolicyToHclTerraform(struct?: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersResizePolicy | cdktf.IResolvable): any {
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

export class DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersResizePolicyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersResizePolicy | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersResizePolicy | cdktf.IResolvable | undefined) {
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

export class DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersResizePolicyList extends cdktf.ComplexList {
  public internalValue? : DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersResizePolicy[] | cdktf.IResolvable

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
  public get(index: number): DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersResizePolicyOutputReference {
    return new DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersResizePolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersResourcesClaims {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_v2beta1_manifest#name DataK8SAppsEmqxIoEmqxV2Beta1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersResourcesClaimsToTerraform(struct?: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersResourcesClaims | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersResourcesClaimsToHclTerraform(struct?: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersResourcesClaims | cdktf.IResolvable): any {
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

export class DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersResourcesClaimsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersResourcesClaims | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersResourcesClaims | cdktf.IResolvable | undefined) {
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

export class DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersResourcesClaimsList extends cdktf.ComplexList {
  public internalValue? : DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersResourcesClaims[] | cdktf.IResolvable

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
  public get(index: number): DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersResourcesClaimsOutputReference {
    return new DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersResourcesClaimsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersResources {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_v2beta1_manifest#claims DataK8SAppsEmqxIoEmqxV2Beta1Manifest#claims}
  */
  readonly claims?: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersResourcesClaims[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_v2beta1_manifest#limits DataK8SAppsEmqxIoEmqxV2Beta1Manifest#limits}
  */
  readonly limits?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_v2beta1_manifest#requests DataK8SAppsEmqxIoEmqxV2Beta1Manifest#requests}
  */
  readonly requests?: { [key: string]: string };
}

export function dataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersResourcesToTerraform(struct?: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    claims: cdktf.listMapper(dataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersResourcesClaimsToTerraform, false)(struct!.claims),
    limits: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.limits),
    requests: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.requests),
  }
}


export function dataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersResourcesToHclTerraform(struct?: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    claims: {
      value: cdktf.listMapperHcl(dataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersResourcesClaimsToHclTerraform, false)(struct!.claims),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersResourcesClaimsList",
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

export class DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersResourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersResources | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersResources | cdktf.IResolvable | undefined) {
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
  private _claims = new DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersResourcesClaimsList(this, "claims", false);
  public get claims() {
    return this._claims;
  }
  public putClaims(value: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersResourcesClaims[] | cdktf.IResolvable) {
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
export interface DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersSecurityContextCapabilities {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_v2beta1_manifest#add DataK8SAppsEmqxIoEmqxV2Beta1Manifest#add}
  */
  readonly add?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_v2beta1_manifest#drop DataK8SAppsEmqxIoEmqxV2Beta1Manifest#drop}
  */
  readonly drop?: string[];
}

export function dataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersSecurityContextCapabilitiesToTerraform(struct?: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersSecurityContextCapabilities | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    add: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.add),
    drop: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.drop),
  }
}


export function dataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersSecurityContextCapabilitiesToHclTerraform(struct?: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersSecurityContextCapabilities | cdktf.IResolvable): any {
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

export class DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersSecurityContextCapabilitiesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersSecurityContextCapabilities | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersSecurityContextCapabilities | cdktf.IResolvable | undefined) {
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
export interface DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersSecurityContextSeLinuxOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_v2beta1_manifest#level DataK8SAppsEmqxIoEmqxV2Beta1Manifest#level}
  */
  readonly level?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_v2beta1_manifest#role DataK8SAppsEmqxIoEmqxV2Beta1Manifest#role}
  */
  readonly role?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_v2beta1_manifest#type DataK8SAppsEmqxIoEmqxV2Beta1Manifest#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_v2beta1_manifest#user DataK8SAppsEmqxIoEmqxV2Beta1Manifest#user}
  */
  readonly user?: string;
}

export function dataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersSecurityContextSeLinuxOptionsToTerraform(struct?: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersSecurityContextSeLinuxOptions | cdktf.IResolvable): any {
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


export function dataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersSecurityContextSeLinuxOptionsToHclTerraform(struct?: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersSecurityContextSeLinuxOptions | cdktf.IResolvable): any {
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

export class DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersSecurityContextSeLinuxOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersSecurityContextSeLinuxOptions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersSecurityContextSeLinuxOptions | cdktf.IResolvable | undefined) {
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
export interface DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersSecurityContextSeccompProfile {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_v2beta1_manifest#localhost_profile DataK8SAppsEmqxIoEmqxV2Beta1Manifest#localhost_profile}
  */
  readonly localhostProfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_v2beta1_manifest#type DataK8SAppsEmqxIoEmqxV2Beta1Manifest#type}
  */
  readonly type: string;
}

export function dataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersSecurityContextSeccompProfileToTerraform(struct?: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersSecurityContextSeccompProfile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    localhost_profile: cdktf.stringToTerraform(struct!.localhostProfile),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersSecurityContextSeccompProfileToHclTerraform(struct?: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersSecurityContextSeccompProfile | cdktf.IResolvable): any {
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

export class DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersSecurityContextSeccompProfileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersSecurityContextSeccompProfile | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersSecurityContextSeccompProfile | cdktf.IResolvable | undefined) {
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
export interface DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersSecurityContextWindowsOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_v2beta1_manifest#gmsa_credential_spec DataK8SAppsEmqxIoEmqxV2Beta1Manifest#gmsa_credential_spec}
  */
  readonly gmsaCredentialSpec?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_v2beta1_manifest#gmsa_credential_spec_name DataK8SAppsEmqxIoEmqxV2Beta1Manifest#gmsa_credential_spec_name}
  */
  readonly gmsaCredentialSpecName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_v2beta1_manifest#host_process DataK8SAppsEmqxIoEmqxV2Beta1Manifest#host_process}
  */
  readonly hostProcess?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_v2beta1_manifest#run_as_user_name DataK8SAppsEmqxIoEmqxV2Beta1Manifest#run_as_user_name}
  */
  readonly runAsUserName?: string;
}

export function dataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersSecurityContextWindowsOptionsToTerraform(struct?: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersSecurityContextWindowsOptions | cdktf.IResolvable): any {
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


export function dataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersSecurityContextWindowsOptionsToHclTerraform(struct?: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersSecurityContextWindowsOptions | cdktf.IResolvable): any {
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

export class DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersSecurityContextWindowsOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersSecurityContextWindowsOptions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersSecurityContextWindowsOptions | cdktf.IResolvable | undefined) {
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
export interface DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersSecurityContext {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_v2beta1_manifest#allow_privilege_escalation DataK8SAppsEmqxIoEmqxV2Beta1Manifest#allow_privilege_escalation}
  */
  readonly allowPrivilegeEscalation?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_v2beta1_manifest#capabilities DataK8SAppsEmqxIoEmqxV2Beta1Manifest#capabilities}
  */
  readonly capabilities?: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersSecurityContextCapabilities;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_v2beta1_manifest#privileged DataK8SAppsEmqxIoEmqxV2Beta1Manifest#privileged}
  */
  readonly privileged?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_v2beta1_manifest#proc_mount DataK8SAppsEmqxIoEmqxV2Beta1Manifest#proc_mount}
  */
  readonly procMount?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_v2beta1_manifest#read_only_root_filesystem DataK8SAppsEmqxIoEmqxV2Beta1Manifest#read_only_root_filesystem}
  */
  readonly readOnlyRootFilesystem?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_v2beta1_manifest#run_as_group DataK8SAppsEmqxIoEmqxV2Beta1Manifest#run_as_group}
  */
  readonly runAsGroup?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_v2beta1_manifest#run_as_non_root DataK8SAppsEmqxIoEmqxV2Beta1Manifest#run_as_non_root}
  */
  readonly runAsNonRoot?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_v2beta1_manifest#run_as_user DataK8SAppsEmqxIoEmqxV2Beta1Manifest#run_as_user}
  */
  readonly runAsUser?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_v2beta1_manifest#se_linux_options DataK8SAppsEmqxIoEmqxV2Beta1Manifest#se_linux_options}
  */
  readonly seLinuxOptions?: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersSecurityContextSeLinuxOptions;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_v2beta1_manifest#seccomp_profile DataK8SAppsEmqxIoEmqxV2Beta1Manifest#seccomp_profile}
  */
  readonly seccompProfile?: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersSecurityContextSeccompProfile;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_v2beta1_manifest#windows_options DataK8SAppsEmqxIoEmqxV2Beta1Manifest#windows_options}
  */
  readonly windowsOptions?: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersSecurityContextWindowsOptions;
}

export function dataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersSecurityContextToTerraform(struct?: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersSecurityContext | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_privilege_escalation: cdktf.booleanToTerraform(struct!.allowPrivilegeEscalation),
    capabilities: dataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersSecurityContextCapabilitiesToTerraform(struct!.capabilities),
    privileged: cdktf.booleanToTerraform(struct!.privileged),
    proc_mount: cdktf.stringToTerraform(struct!.procMount),
    read_only_root_filesystem: cdktf.booleanToTerraform(struct!.readOnlyRootFilesystem),
    run_as_group: cdktf.numberToTerraform(struct!.runAsGroup),
    run_as_non_root: cdktf.booleanToTerraform(struct!.runAsNonRoot),
    run_as_user: cdktf.numberToTerraform(struct!.runAsUser),
    se_linux_options: dataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersSecurityContextSeLinuxOptionsToTerraform(struct!.seLinuxOptions),
    seccomp_profile: dataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersSecurityContextSeccompProfileToTerraform(struct!.seccompProfile),
    windows_options: dataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersSecurityContextWindowsOptionsToTerraform(struct!.windowsOptions),
  }
}


export function dataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersSecurityContextToHclTerraform(struct?: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersSecurityContext | cdktf.IResolvable): any {
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
    capabilities: {
      value: dataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersSecurityContextCapabilitiesToHclTerraform(struct!.capabilities),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersSecurityContextCapabilities",
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
      value: dataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersSecurityContextSeLinuxOptionsToHclTerraform(struct!.seLinuxOptions),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersSecurityContextSeLinuxOptions",
    },
    seccomp_profile: {
      value: dataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersSecurityContextSeccompProfileToHclTerraform(struct!.seccompProfile),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersSecurityContextSeccompProfile",
    },
    windows_options: {
      value: dataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersSecurityContextWindowsOptionsToHclTerraform(struct!.windowsOptions),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersSecurityContextWindowsOptions",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersSecurityContextOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersSecurityContext | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowPrivilegeEscalation !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowPrivilegeEscalation = this._allowPrivilegeEscalation;
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

  public set internalValue(value: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersSecurityContext | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowPrivilegeEscalation = undefined;
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

  // capabilities - computed: false, optional: true, required: false
  private _capabilities = new DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersSecurityContextCapabilitiesOutputReference(this, "capabilities");
  public get capabilities() {
    return this._capabilities;
  }
  public putCapabilities(value: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersSecurityContextCapabilities) {
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
  private _seLinuxOptions = new DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersSecurityContextSeLinuxOptionsOutputReference(this, "se_linux_options");
  public get seLinuxOptions() {
    return this._seLinuxOptions;
  }
  public putSeLinuxOptions(value: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersSecurityContextSeLinuxOptions) {
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
  private _seccompProfile = new DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersSecurityContextSeccompProfileOutputReference(this, "seccomp_profile");
  public get seccompProfile() {
    return this._seccompProfile;
  }
  public putSeccompProfile(value: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersSecurityContextSeccompProfile) {
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
  private _windowsOptions = new DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersSecurityContextWindowsOptionsOutputReference(this, "windows_options");
  public get windowsOptions() {
    return this._windowsOptions;
  }
  public putWindowsOptions(value: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersSecurityContextWindowsOptions) {
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
export interface DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersStartupProbeExec {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_v2beta1_manifest#command DataK8SAppsEmqxIoEmqxV2Beta1Manifest#command}
  */
  readonly command?: string[];
}

export function dataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersStartupProbeExecToTerraform(struct?: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersStartupProbeExec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    command: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.command),
  }
}


export function dataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersStartupProbeExecToHclTerraform(struct?: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersStartupProbeExec | cdktf.IResolvable): any {
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

export class DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersStartupProbeExecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersStartupProbeExec | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersStartupProbeExec | cdktf.IResolvable | undefined) {
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
export interface DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersStartupProbeGrpc {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_v2beta1_manifest#port DataK8SAppsEmqxIoEmqxV2Beta1Manifest#port}
  */
  readonly port: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_v2beta1_manifest#service DataK8SAppsEmqxIoEmqxV2Beta1Manifest#service}
  */
  readonly service?: string;
}

export function dataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersStartupProbeGrpcToTerraform(struct?: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersStartupProbeGrpc | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    port: cdktf.numberToTerraform(struct!.port),
    service: cdktf.stringToTerraform(struct!.service),
  }
}


export function dataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersStartupProbeGrpcToHclTerraform(struct?: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersStartupProbeGrpc | cdktf.IResolvable): any {
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

export class DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersStartupProbeGrpcOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersStartupProbeGrpc | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersStartupProbeGrpc | cdktf.IResolvable | undefined) {
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
export interface DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersStartupProbeHttpGetHttpHeaders {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_v2beta1_manifest#name DataK8SAppsEmqxIoEmqxV2Beta1Manifest#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_v2beta1_manifest#value DataK8SAppsEmqxIoEmqxV2Beta1Manifest#value}
  */
  readonly value: string;
}

export function dataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersStartupProbeHttpGetHttpHeadersToTerraform(struct?: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersStartupProbeHttpGetHttpHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersStartupProbeHttpGetHttpHeadersToHclTerraform(struct?: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersStartupProbeHttpGetHttpHeaders | cdktf.IResolvable): any {
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

export class DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersStartupProbeHttpGetHttpHeadersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersStartupProbeHttpGetHttpHeaders | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersStartupProbeHttpGetHttpHeaders | cdktf.IResolvable | undefined) {
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

export class DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersStartupProbeHttpGetHttpHeadersList extends cdktf.ComplexList {
  public internalValue? : DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersStartupProbeHttpGetHttpHeaders[] | cdktf.IResolvable

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
  public get(index: number): DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersStartupProbeHttpGetHttpHeadersOutputReference {
    return new DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersStartupProbeHttpGetHttpHeadersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersStartupProbeHttpGet {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_v2beta1_manifest#host DataK8SAppsEmqxIoEmqxV2Beta1Manifest#host}
  */
  readonly host?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_v2beta1_manifest#http_headers DataK8SAppsEmqxIoEmqxV2Beta1Manifest#http_headers}
  */
  readonly httpHeaders?: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersStartupProbeHttpGetHttpHeaders[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_v2beta1_manifest#path DataK8SAppsEmqxIoEmqxV2Beta1Manifest#path}
  */
  readonly path?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_v2beta1_manifest#port DataK8SAppsEmqxIoEmqxV2Beta1Manifest#port}
  */
  readonly port: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_v2beta1_manifest#scheme DataK8SAppsEmqxIoEmqxV2Beta1Manifest#scheme}
  */
  readonly scheme?: string;
}

export function dataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersStartupProbeHttpGetToTerraform(struct?: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersStartupProbeHttpGet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host: cdktf.stringToTerraform(struct!.host),
    http_headers: cdktf.listMapper(dataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersStartupProbeHttpGetHttpHeadersToTerraform, false)(struct!.httpHeaders),
    path: cdktf.stringToTerraform(struct!.path),
    port: cdktf.stringToTerraform(struct!.port),
    scheme: cdktf.stringToTerraform(struct!.scheme),
  }
}


export function dataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersStartupProbeHttpGetToHclTerraform(struct?: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersStartupProbeHttpGet | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(dataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersStartupProbeHttpGetHttpHeadersToHclTerraform, false)(struct!.httpHeaders),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersStartupProbeHttpGetHttpHeadersList",
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

export class DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersStartupProbeHttpGetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersStartupProbeHttpGet | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersStartupProbeHttpGet | cdktf.IResolvable | undefined) {
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
  private _httpHeaders = new DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersStartupProbeHttpGetHttpHeadersList(this, "http_headers", false);
  public get httpHeaders() {
    return this._httpHeaders;
  }
  public putHttpHeaders(value: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersStartupProbeHttpGetHttpHeaders[] | cdktf.IResolvable) {
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
export interface DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersStartupProbeTcpSocket {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_v2beta1_manifest#host DataK8SAppsEmqxIoEmqxV2Beta1Manifest#host}
  */
  readonly host?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_v2beta1_manifest#port DataK8SAppsEmqxIoEmqxV2Beta1Manifest#port}
  */
  readonly port: string;
}

export function dataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersStartupProbeTcpSocketToTerraform(struct?: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersStartupProbeTcpSocket | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host: cdktf.stringToTerraform(struct!.host),
    port: cdktf.stringToTerraform(struct!.port),
  }
}


export function dataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersStartupProbeTcpSocketToHclTerraform(struct?: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersStartupProbeTcpSocket | cdktf.IResolvable): any {
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

export class DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersStartupProbeTcpSocketOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersStartupProbeTcpSocket | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersStartupProbeTcpSocket | cdktf.IResolvable | undefined) {
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
export interface DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersStartupProbe {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_v2beta1_manifest#exec DataK8SAppsEmqxIoEmqxV2Beta1Manifest#exec}
  */
  readonly exec?: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersStartupProbeExec;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_v2beta1_manifest#failure_threshold DataK8SAppsEmqxIoEmqxV2Beta1Manifest#failure_threshold}
  */
  readonly failureThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_v2beta1_manifest#grpc DataK8SAppsEmqxIoEmqxV2Beta1Manifest#grpc}
  */
  readonly grpc?: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersStartupProbeGrpc;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_v2beta1_manifest#http_get DataK8SAppsEmqxIoEmqxV2Beta1Manifest#http_get}
  */
  readonly httpGet?: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersStartupProbeHttpGet;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_v2beta1_manifest#initial_delay_seconds DataK8SAppsEmqxIoEmqxV2Beta1Manifest#initial_delay_seconds}
  */
  readonly initialDelaySeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_v2beta1_manifest#period_seconds DataK8SAppsEmqxIoEmqxV2Beta1Manifest#period_seconds}
  */
  readonly periodSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_v2beta1_manifest#success_threshold DataK8SAppsEmqxIoEmqxV2Beta1Manifest#success_threshold}
  */
  readonly successThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_v2beta1_manifest#tcp_socket DataK8SAppsEmqxIoEmqxV2Beta1Manifest#tcp_socket}
  */
  readonly tcpSocket?: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersStartupProbeTcpSocket;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_v2beta1_manifest#termination_grace_period_seconds DataK8SAppsEmqxIoEmqxV2Beta1Manifest#termination_grace_period_seconds}
  */
  readonly terminationGracePeriodSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_v2beta1_manifest#timeout_seconds DataK8SAppsEmqxIoEmqxV2Beta1Manifest#timeout_seconds}
  */
  readonly timeoutSeconds?: number;
}

export function dataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersStartupProbeToTerraform(struct?: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersStartupProbe | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exec: dataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersStartupProbeExecToTerraform(struct!.exec),
    failure_threshold: cdktf.numberToTerraform(struct!.failureThreshold),
    grpc: dataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersStartupProbeGrpcToTerraform(struct!.grpc),
    http_get: dataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersStartupProbeHttpGetToTerraform(struct!.httpGet),
    initial_delay_seconds: cdktf.numberToTerraform(struct!.initialDelaySeconds),
    period_seconds: cdktf.numberToTerraform(struct!.periodSeconds),
    success_threshold: cdktf.numberToTerraform(struct!.successThreshold),
    tcp_socket: dataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersStartupProbeTcpSocketToTerraform(struct!.tcpSocket),
    termination_grace_period_seconds: cdktf.numberToTerraform(struct!.terminationGracePeriodSeconds),
    timeout_seconds: cdktf.numberToTerraform(struct!.timeoutSeconds),
  }
}


export function dataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersStartupProbeToHclTerraform(struct?: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersStartupProbe | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exec: {
      value: dataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersStartupProbeExecToHclTerraform(struct!.exec),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersStartupProbeExec",
    },
    failure_threshold: {
      value: cdktf.numberToHclTerraform(struct!.failureThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    grpc: {
      value: dataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersStartupProbeGrpcToHclTerraform(struct!.grpc),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersStartupProbeGrpc",
    },
    http_get: {
      value: dataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersStartupProbeHttpGetToHclTerraform(struct!.httpGet),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersStartupProbeHttpGet",
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
      value: dataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersStartupProbeTcpSocketToHclTerraform(struct!.tcpSocket),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersStartupProbeTcpSocket",
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

export class DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersStartupProbeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersStartupProbe | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersStartupProbe | cdktf.IResolvable | undefined) {
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
  private _exec = new DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersStartupProbeExecOutputReference(this, "exec");
  public get exec() {
    return this._exec;
  }
  public putExec(value: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersStartupProbeExec) {
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
  private _grpc = new DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersStartupProbeGrpcOutputReference(this, "grpc");
  public get grpc() {
    return this._grpc;
  }
  public putGrpc(value: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersStartupProbeGrpc) {
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
  private _httpGet = new DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersStartupProbeHttpGetOutputReference(this, "http_get");
  public get httpGet() {
    return this._httpGet;
  }
  public putHttpGet(value: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersStartupProbeHttpGet) {
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
  private _tcpSocket = new DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersStartupProbeTcpSocketOutputReference(this, "tcp_socket");
  public get tcpSocket() {
    return this._tcpSocket;
  }
  public putTcpSocket(value: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersStartupProbeTcpSocket) {
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
export interface DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersVolumeDevices {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_v2beta1_manifest#device_path DataK8SAppsEmqxIoEmqxV2Beta1Manifest#device_path}
  */
  readonly devicePath: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_v2beta1_manifest#name DataK8SAppsEmqxIoEmqxV2Beta1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersVolumeDevicesToTerraform(struct?: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersVolumeDevices | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    device_path: cdktf.stringToTerraform(struct!.devicePath),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersVolumeDevicesToHclTerraform(struct?: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersVolumeDevices | cdktf.IResolvable): any {
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

export class DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersVolumeDevicesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersVolumeDevices | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersVolumeDevices | cdktf.IResolvable | undefined) {
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

export class DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersVolumeDevicesList extends cdktf.ComplexList {
  public internalValue? : DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersVolumeDevices[] | cdktf.IResolvable

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
  public get(index: number): DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersVolumeDevicesOutputReference {
    return new DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersVolumeDevicesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersVolumeMounts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_v2beta1_manifest#mount_path DataK8SAppsEmqxIoEmqxV2Beta1Manifest#mount_path}
  */
  readonly mountPath: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_v2beta1_manifest#mount_propagation DataK8SAppsEmqxIoEmqxV2Beta1Manifest#mount_propagation}
  */
  readonly mountPropagation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_v2beta1_manifest#name DataK8SAppsEmqxIoEmqxV2Beta1Manifest#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_v2beta1_manifest#read_only DataK8SAppsEmqxIoEmqxV2Beta1Manifest#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_v2beta1_manifest#sub_path DataK8SAppsEmqxIoEmqxV2Beta1Manifest#sub_path}
  */
  readonly subPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_v2beta1_manifest#sub_path_expr DataK8SAppsEmqxIoEmqxV2Beta1Manifest#sub_path_expr}
  */
  readonly subPathExpr?: string;
}

export function dataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersVolumeMountsToTerraform(struct?: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersVolumeMounts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mount_path: cdktf.stringToTerraform(struct!.mountPath),
    mount_propagation: cdktf.stringToTerraform(struct!.mountPropagation),
    name: cdktf.stringToTerraform(struct!.name),
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
    sub_path: cdktf.stringToTerraform(struct!.subPath),
    sub_path_expr: cdktf.stringToTerraform(struct!.subPathExpr),
  }
}


export function dataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersVolumeMountsToHclTerraform(struct?: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersVolumeMounts | cdktf.IResolvable): any {
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

export class DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersVolumeMountsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersVolumeMounts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersVolumeMounts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._mountPath = undefined;
      this._mountPropagation = undefined;
      this._name = undefined;
      this._readOnly = undefined;
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

export class DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersVolumeMountsList extends cdktf.ComplexList {
  public internalValue? : DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersVolumeMounts[] | cdktf.IResolvable

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
  public get(index: number): DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersVolumeMountsOutputReference {
    return new DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersVolumeMountsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainers {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_v2beta1_manifest#args DataK8SAppsEmqxIoEmqxV2Beta1Manifest#args}
  */
  readonly args?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_v2beta1_manifest#command DataK8SAppsEmqxIoEmqxV2Beta1Manifest#command}
  */
  readonly command?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_v2beta1_manifest#env DataK8SAppsEmqxIoEmqxV2Beta1Manifest#env}
  */
  readonly env?: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersEnv[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_v2beta1_manifest#env_from DataK8SAppsEmqxIoEmqxV2Beta1Manifest#env_from}
  */
  readonly envFrom?: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersEnvFrom[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_v2beta1_manifest#image DataK8SAppsEmqxIoEmqxV2Beta1Manifest#image}
  */
  readonly image?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_v2beta1_manifest#image_pull_policy DataK8SAppsEmqxIoEmqxV2Beta1Manifest#image_pull_policy}
  */
  readonly imagePullPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_v2beta1_manifest#lifecycle DataK8SAppsEmqxIoEmqxV2Beta1Manifest#lifecycle}
  */
  readonly lifecycle?: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersLifecycle;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_v2beta1_manifest#liveness_probe DataK8SAppsEmqxIoEmqxV2Beta1Manifest#liveness_probe}
  */
  readonly livenessProbe?: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersLivenessProbe;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_v2beta1_manifest#name DataK8SAppsEmqxIoEmqxV2Beta1Manifest#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_v2beta1_manifest#ports DataK8SAppsEmqxIoEmqxV2Beta1Manifest#ports}
  */
  readonly ports?: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersPorts[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_v2beta1_manifest#readiness_probe DataK8SAppsEmqxIoEmqxV2Beta1Manifest#readiness_probe}
  */
  readonly readinessProbe?: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersReadinessProbe;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_v2beta1_manifest#resize_policy DataK8SAppsEmqxIoEmqxV2Beta1Manifest#resize_policy}
  */
  readonly resizePolicy?: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersResizePolicy[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_v2beta1_manifest#resources DataK8SAppsEmqxIoEmqxV2Beta1Manifest#resources}
  */
  readonly resources?: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersResources;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_v2beta1_manifest#restart_policy DataK8SAppsEmqxIoEmqxV2Beta1Manifest#restart_policy}
  */
  readonly restartPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_v2beta1_manifest#security_context DataK8SAppsEmqxIoEmqxV2Beta1Manifest#security_context}
  */
  readonly securityContext?: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersSecurityContext;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_v2beta1_manifest#startup_probe DataK8SAppsEmqxIoEmqxV2Beta1Manifest#startup_probe}
  */
  readonly startupProbe?: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersStartupProbe;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_v2beta1_manifest#stdin DataK8SAppsEmqxIoEmqxV2Beta1Manifest#stdin}
  */
  readonly stdin?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_v2beta1_manifest#stdin_once DataK8SAppsEmqxIoEmqxV2Beta1Manifest#stdin_once}
  */
  readonly stdinOnce?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_v2beta1_manifest#termination_message_path DataK8SAppsEmqxIoEmqxV2Beta1Manifest#termination_message_path}
  */
  readonly terminationMessagePath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_v2beta1_manifest#termination_message_policy DataK8SAppsEmqxIoEmqxV2Beta1Manifest#termination_message_policy}
  */
  readonly terminationMessagePolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_v2beta1_manifest#tty DataK8SAppsEmqxIoEmqxV2Beta1Manifest#tty}
  */
  readonly tty?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_v2beta1_manifest#volume_devices DataK8SAppsEmqxIoEmqxV2Beta1Manifest#volume_devices}
  */
  readonly volumeDevices?: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersVolumeDevices[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_v2beta1_manifest#volume_mounts DataK8SAppsEmqxIoEmqxV2Beta1Manifest#volume_mounts}
  */
  readonly volumeMounts?: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersVolumeMounts[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_v2beta1_manifest#working_dir DataK8SAppsEmqxIoEmqxV2Beta1Manifest#working_dir}
  */
  readonly workingDir?: string;
}

export function dataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersToTerraform(struct?: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    args: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.args),
    command: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.command),
    env: cdktf.listMapper(dataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersEnvToTerraform, false)(struct!.env),
    env_from: cdktf.listMapper(dataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersEnvFromToTerraform, false)(struct!.envFrom),
    image: cdktf.stringToTerraform(struct!.image),
    image_pull_policy: cdktf.stringToTerraform(struct!.imagePullPolicy),
    lifecycle: dataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersLifecycleToTerraform(struct!.lifecycle),
    liveness_probe: dataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersLivenessProbeToTerraform(struct!.livenessProbe),
    name: cdktf.stringToTerraform(struct!.name),
    ports: cdktf.listMapper(dataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersPortsToTerraform, false)(struct!.ports),
    readiness_probe: dataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersReadinessProbeToTerraform(struct!.readinessProbe),
    resize_policy: cdktf.listMapper(dataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersResizePolicyToTerraform, false)(struct!.resizePolicy),
    resources: dataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersResourcesToTerraform(struct!.resources),
    restart_policy: cdktf.stringToTerraform(struct!.restartPolicy),
    security_context: dataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersSecurityContextToTerraform(struct!.securityContext),
    startup_probe: dataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersStartupProbeToTerraform(struct!.startupProbe),
    stdin: cdktf.booleanToTerraform(struct!.stdin),
    stdin_once: cdktf.booleanToTerraform(struct!.stdinOnce),
    termination_message_path: cdktf.stringToTerraform(struct!.terminationMessagePath),
    termination_message_policy: cdktf.stringToTerraform(struct!.terminationMessagePolicy),
    tty: cdktf.booleanToTerraform(struct!.tty),
    volume_devices: cdktf.listMapper(dataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersVolumeDevicesToTerraform, false)(struct!.volumeDevices),
    volume_mounts: cdktf.listMapper(dataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersVolumeMountsToTerraform, false)(struct!.volumeMounts),
    working_dir: cdktf.stringToTerraform(struct!.workingDir),
  }
}


export function dataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersToHclTerraform(struct?: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainers | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(dataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersEnvToHclTerraform, false)(struct!.env),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersEnvList",
    },
    env_from: {
      value: cdktf.listMapperHcl(dataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersEnvFromToHclTerraform, false)(struct!.envFrom),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersEnvFromList",
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
      value: dataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersLifecycleToHclTerraform(struct!.lifecycle),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersLifecycle",
    },
    liveness_probe: {
      value: dataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersLivenessProbeToHclTerraform(struct!.livenessProbe),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersLivenessProbe",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ports: {
      value: cdktf.listMapperHcl(dataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersPortsToHclTerraform, false)(struct!.ports),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersPortsList",
    },
    readiness_probe: {
      value: dataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersReadinessProbeToHclTerraform(struct!.readinessProbe),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersReadinessProbe",
    },
    resize_policy: {
      value: cdktf.listMapperHcl(dataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersResizePolicyToHclTerraform, false)(struct!.resizePolicy),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersResizePolicyList",
    },
    resources: {
      value: dataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersResourcesToHclTerraform(struct!.resources),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersResources",
    },
    restart_policy: {
      value: cdktf.stringToHclTerraform(struct!.restartPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    security_context: {
      value: dataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersSecurityContextToHclTerraform(struct!.securityContext),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersSecurityContext",
    },
    startup_probe: {
      value: dataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersStartupProbeToHclTerraform(struct!.startupProbe),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersStartupProbe",
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
      value: cdktf.listMapperHcl(dataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersVolumeDevicesToHclTerraform, false)(struct!.volumeDevices),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersVolumeDevicesList",
    },
    volume_mounts: {
      value: cdktf.listMapperHcl(dataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersVolumeMountsToHclTerraform, false)(struct!.volumeMounts),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersVolumeMountsList",
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

export class DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainers | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainers | cdktf.IResolvable | undefined) {
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
  private _env = new DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersEnvList(this, "env", false);
  public get env() {
    return this._env;
  }
  public putEnv(value: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersEnv[] | cdktf.IResolvable) {
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
  private _envFrom = new DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersEnvFromList(this, "env_from", false);
  public get envFrom() {
    return this._envFrom;
  }
  public putEnvFrom(value: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersEnvFrom[] | cdktf.IResolvable) {
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
  private _lifecycle = new DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersLifecycleOutputReference(this, "lifecycle");
  public get lifecycle() {
    return this._lifecycle;
  }
  public putLifecycle(value: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersLifecycle) {
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
  private _livenessProbe = new DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersLivenessProbeOutputReference(this, "liveness_probe");
  public get livenessProbe() {
    return this._livenessProbe;
  }
  public putLivenessProbe(value: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersLivenessProbe) {
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
  private _ports = new DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersPortsList(this, "ports", false);
  public get ports() {
    return this._ports;
  }
  public putPorts(value: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersPorts[] | cdktf.IResolvable) {
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
  private _readinessProbe = new DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersReadinessProbeOutputReference(this, "readiness_probe");
  public get readinessProbe() {
    return this._readinessProbe;
  }
  public putReadinessProbe(value: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersReadinessProbe) {
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
  private _resizePolicy = new DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersResizePolicyList(this, "resize_policy", false);
  public get resizePolicy() {
    return this._resizePolicy;
  }
  public putResizePolicy(value: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersResizePolicy[] | cdktf.IResolvable) {
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
  private _resources = new DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersResourcesOutputReference(this, "resources");
  public get resources() {
    return this._resources;
  }
  public putResources(value: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersResources) {
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
  private _securityContext = new DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersSecurityContextOutputReference(this, "security_context");
  public get securityContext() {
    return this._securityContext;
  }
  public putSecurityContext(value: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersSecurityContext) {
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
  private _startupProbe = new DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersStartupProbeOutputReference(this, "startup_probe");
  public get startupProbe() {
    return this._startupProbe;
  }
  public putStartupProbe(value: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersStartupProbe) {
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
  private _volumeDevices = new DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersVolumeDevicesList(this, "volume_devices", false);
  public get volumeDevices() {
    return this._volumeDevices;
  }
  public putVolumeDevices(value: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersVolumeDevices[] | cdktf.IResolvable) {
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
  private _volumeMounts = new DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersVolumeMountsList(this, "volume_mounts", false);
  public get volumeMounts() {
    return this._volumeMounts;
  }
  public putVolumeMounts(value: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersVolumeMounts[] | cdktf.IResolvable) {
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

export class DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersList extends cdktf.ComplexList {
  public internalValue? : DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainers[] | cdktf.IResolvable

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
  public get(index: number): DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersOutputReference {
    return new DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecLifecyclePostStartExec {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_v2beta1_manifest#command DataK8SAppsEmqxIoEmqxV2Beta1Manifest#command}
  */
  readonly command?: string[];
}

export function dataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecLifecyclePostStartExecToTerraform(struct?: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecLifecyclePostStartExec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    command: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.command),
  }
}


export function dataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecLifecyclePostStartExecToHclTerraform(struct?: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecLifecyclePostStartExec | cdktf.IResolvable): any {
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

export class DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecLifecyclePostStartExecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecLifecyclePostStartExec | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecLifecyclePostStartExec | cdktf.IResolvable | undefined) {
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
export interface DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecLifecyclePostStartHttpGetHttpHeaders {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_v2beta1_manifest#name DataK8SAppsEmqxIoEmqxV2Beta1Manifest#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_v2beta1_manifest#value DataK8SAppsEmqxIoEmqxV2Beta1Manifest#value}
  */
  readonly value: string;
}

export function dataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecLifecyclePostStartHttpGetHttpHeadersToTerraform(struct?: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecLifecyclePostStartHttpGetHttpHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecLifecyclePostStartHttpGetHttpHeadersToHclTerraform(struct?: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecLifecyclePostStartHttpGetHttpHeaders | cdktf.IResolvable): any {
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

export class DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecLifecyclePostStartHttpGetHttpHeadersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecLifecyclePostStartHttpGetHttpHeaders | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecLifecyclePostStartHttpGetHttpHeaders | cdktf.IResolvable | undefined) {
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

export class DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecLifecyclePostStartHttpGetHttpHeadersList extends cdktf.ComplexList {
  public internalValue? : DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecLifecyclePostStartHttpGetHttpHeaders[] | cdktf.IResolvable

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
  public get(index: number): DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecLifecyclePostStartHttpGetHttpHeadersOutputReference {
    return new DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecLifecyclePostStartHttpGetHttpHeadersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecLifecyclePostStartHttpGet {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_v2beta1_manifest#host DataK8SAppsEmqxIoEmqxV2Beta1Manifest#host}
  */
  readonly host?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_v2beta1_manifest#http_headers DataK8SAppsEmqxIoEmqxV2Beta1Manifest#http_headers}
  */
  readonly httpHeaders?: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecLifecyclePostStartHttpGetHttpHeaders[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_v2beta1_manifest#path DataK8SAppsEmqxIoEmqxV2Beta1Manifest#path}
  */
  readonly path?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_v2beta1_manifest#port DataK8SAppsEmqxIoEmqxV2Beta1Manifest#port}
  */
  readonly port: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_v2beta1_manifest#scheme DataK8SAppsEmqxIoEmqxV2Beta1Manifest#scheme}
  */
  readonly scheme?: string;
}

export function dataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecLifecyclePostStartHttpGetToTerraform(struct?: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecLifecyclePostStartHttpGet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host: cdktf.stringToTerraform(struct!.host),
    http_headers: cdktf.listMapper(dataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecLifecyclePostStartHttpGetHttpHeadersToTerraform, false)(struct!.httpHeaders),
    path: cdktf.stringToTerraform(struct!.path),
    port: cdktf.stringToTerraform(struct!.port),
    scheme: cdktf.stringToTerraform(struct!.scheme),
  }
}


export function dataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecLifecyclePostStartHttpGetToHclTerraform(struct?: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecLifecyclePostStartHttpGet | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(dataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecLifecyclePostStartHttpGetHttpHeadersToHclTerraform, false)(struct!.httpHeaders),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecLifecyclePostStartHttpGetHttpHeadersList",
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

export class DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecLifecyclePostStartHttpGetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecLifecyclePostStartHttpGet | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecLifecyclePostStartHttpGet | cdktf.IResolvable | undefined) {
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
  private _httpHeaders = new DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecLifecyclePostStartHttpGetHttpHeadersList(this, "http_headers", false);
  public get httpHeaders() {
    return this._httpHeaders;
  }
  public putHttpHeaders(value: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecLifecyclePostStartHttpGetHttpHeaders[] | cdktf.IResolvable) {
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
export interface DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecLifecyclePostStartSleep {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_v2beta1_manifest#seconds DataK8SAppsEmqxIoEmqxV2Beta1Manifest#seconds}
  */
  readonly seconds: number;
}

export function dataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecLifecyclePostStartSleepToTerraform(struct?: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecLifecyclePostStartSleep | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    seconds: cdktf.numberToTerraform(struct!.seconds),
  }
}


export function dataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecLifecyclePostStartSleepToHclTerraform(struct?: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecLifecyclePostStartSleep | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    seconds: {
      value: cdktf.numberToHclTerraform(struct!.seconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecLifecyclePostStartSleepOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecLifecyclePostStartSleep | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._seconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.seconds = this._seconds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecLifecyclePostStartSleep | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._seconds = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._seconds = value.seconds;
    }
  }

  // seconds - computed: false, optional: false, required: true
  private _seconds?: number; 
  public get seconds() {
    return this.getNumberAttribute('seconds');
  }
  public set seconds(value: number) {
    this._seconds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secondsInput() {
    return this._seconds;
  }
}
export interface DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecLifecyclePostStartTcpSocket {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_v2beta1_manifest#host DataK8SAppsEmqxIoEmqxV2Beta1Manifest#host}
  */
  readonly host?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_v2beta1_manifest#port DataK8SAppsEmqxIoEmqxV2Beta1Manifest#port}
  */
  readonly port: string;
}

export function dataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecLifecyclePostStartTcpSocketToTerraform(struct?: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecLifecyclePostStartTcpSocket | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host: cdktf.stringToTerraform(struct!.host),
    port: cdktf.stringToTerraform(struct!.port),
  }
}


export function dataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecLifecyclePostStartTcpSocketToHclTerraform(struct?: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecLifecyclePostStartTcpSocket | cdktf.IResolvable): any {
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

export class DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecLifecyclePostStartTcpSocketOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecLifecyclePostStartTcpSocket | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecLifecyclePostStartTcpSocket | cdktf.IResolvable | undefined) {
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
export interface DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecLifecyclePostStart {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_v2beta1_manifest#exec DataK8SAppsEmqxIoEmqxV2Beta1Manifest#exec}
  */
  readonly exec?: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecLifecyclePostStartExec;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_v2beta1_manifest#http_get DataK8SAppsEmqxIoEmqxV2Beta1Manifest#http_get}
  */
  readonly httpGet?: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecLifecyclePostStartHttpGet;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_v2beta1_manifest#sleep DataK8SAppsEmqxIoEmqxV2Beta1Manifest#sleep}
  */
  readonly sleep?: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecLifecyclePostStartSleep;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_v2beta1_manifest#tcp_socket DataK8SAppsEmqxIoEmqxV2Beta1Manifest#tcp_socket}
  */
  readonly tcpSocket?: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecLifecyclePostStartTcpSocket;
}

export function dataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecLifecyclePostStartToTerraform(struct?: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecLifecyclePostStart | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exec: dataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecLifecyclePostStartExecToTerraform(struct!.exec),
    http_get: dataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecLifecyclePostStartHttpGetToTerraform(struct!.httpGet),
    sleep: dataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecLifecyclePostStartSleepToTerraform(struct!.sleep),
    tcp_socket: dataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecLifecyclePostStartTcpSocketToTerraform(struct!.tcpSocket),
  }
}


export function dataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecLifecyclePostStartToHclTerraform(struct?: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecLifecyclePostStart | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exec: {
      value: dataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecLifecyclePostStartExecToHclTerraform(struct!.exec),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecLifecyclePostStartExec",
    },
    http_get: {
      value: dataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecLifecyclePostStartHttpGetToHclTerraform(struct!.httpGet),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecLifecyclePostStartHttpGet",
    },
    sleep: {
      value: dataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecLifecyclePostStartSleepToHclTerraform(struct!.sleep),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecLifecyclePostStartSleep",
    },
    tcp_socket: {
      value: dataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecLifecyclePostStartTcpSocketToHclTerraform(struct!.tcpSocket),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecLifecyclePostStartTcpSocket",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecLifecyclePostStartOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecLifecyclePostStart | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exec?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.exec = this._exec?.internalValue;
    }
    if (this._httpGet?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpGet = this._httpGet?.internalValue;
    }
    if (this._sleep?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sleep = this._sleep?.internalValue;
    }
    if (this._tcpSocket?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpSocket = this._tcpSocket?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecLifecyclePostStart | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._exec.internalValue = undefined;
      this._httpGet.internalValue = undefined;
      this._sleep.internalValue = undefined;
      this._tcpSocket.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._exec.internalValue = value.exec;
      this._httpGet.internalValue = value.httpGet;
      this._sleep.internalValue = value.sleep;
      this._tcpSocket.internalValue = value.tcpSocket;
    }
  }

  // exec - computed: false, optional: true, required: false
  private _exec = new DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecLifecyclePostStartExecOutputReference(this, "exec");
  public get exec() {
    return this._exec;
  }
  public putExec(value: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecLifecyclePostStartExec) {
    this._exec.internalValue = value;
  }
  public resetExec() {
    this._exec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get execInput() {
    return this._exec.internalValue;
  }

  // http_get - computed: false, optional: true, required: false
  private _httpGet = new DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecLifecyclePostStartHttpGetOutputReference(this, "http_get");
  public get httpGet() {
    return this._httpGet;
  }
  public putHttpGet(value: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecLifecyclePostStartHttpGet) {
    this._httpGet.internalValue = value;
  }
  public resetHttpGet() {
    this._httpGet.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpGetInput() {
    return this._httpGet.internalValue;
  }

  // sleep - computed: false, optional: true, required: false
  private _sleep = new DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecLifecyclePostStartSleepOutputReference(this, "sleep");
  public get sleep() {
    return this._sleep;
  }
  public putSleep(value: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecLifecyclePostStartSleep) {
    this._sleep.internalValue = value;
  }
  public resetSleep() {
    this._sleep.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sleepInput() {
    return this._sleep.internalValue;
  }

  // tcp_socket - computed: false, optional: true, required: false
  private _tcpSocket = new DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecLifecyclePostStartTcpSocketOutputReference(this, "tcp_socket");
  public get tcpSocket() {
    return this._tcpSocket;
  }
  public putTcpSocket(value: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecLifecyclePostStartTcpSocket) {
    this._tcpSocket.internalValue = value;
  }
  public resetTcpSocket() {
    this._tcpSocket.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpSocketInput() {
    return this._tcpSocket.internalValue;
  }
}
export interface DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecLifecyclePreStopExec {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_v2beta1_manifest#command DataK8SAppsEmqxIoEmqxV2Beta1Manifest#command}
  */
  readonly command?: string[];
}

export function dataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecLifecyclePreStopExecToTerraform(struct?: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecLifecyclePreStopExec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    command: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.command),
  }
}


export function dataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecLifecyclePreStopExecToHclTerraform(struct?: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecLifecyclePreStopExec | cdktf.IResolvable): any {
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

export class DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecLifecyclePreStopExecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecLifecyclePreStopExec | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecLifecyclePreStopExec | cdktf.IResolvable | undefined) {
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
export interface DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecLifecyclePreStopHttpGetHttpHeaders {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_v2beta1_manifest#name DataK8SAppsEmqxIoEmqxV2Beta1Manifest#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_v2beta1_manifest#value DataK8SAppsEmqxIoEmqxV2Beta1Manifest#value}
  */
  readonly value: string;
}

export function dataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecLifecyclePreStopHttpGetHttpHeadersToTerraform(struct?: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecLifecyclePreStopHttpGetHttpHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecLifecyclePreStopHttpGetHttpHeadersToHclTerraform(struct?: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecLifecyclePreStopHttpGetHttpHeaders | cdktf.IResolvable): any {
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

export class DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecLifecyclePreStopHttpGetHttpHeadersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecLifecyclePreStopHttpGetHttpHeaders | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecLifecyclePreStopHttpGetHttpHeaders | cdktf.IResolvable | undefined) {
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

export class DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecLifecyclePreStopHttpGetHttpHeadersList extends cdktf.ComplexList {
  public internalValue? : DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecLifecyclePreStopHttpGetHttpHeaders[] | cdktf.IResolvable

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
  public get(index: number): DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecLifecyclePreStopHttpGetHttpHeadersOutputReference {
    return new DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecLifecyclePreStopHttpGetHttpHeadersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecLifecyclePreStopHttpGet {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_v2beta1_manifest#host DataK8SAppsEmqxIoEmqxV2Beta1Manifest#host}
  */
  readonly host?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_v2beta1_manifest#http_headers DataK8SAppsEmqxIoEmqxV2Beta1Manifest#http_headers}
  */
  readonly httpHeaders?: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecLifecyclePreStopHttpGetHttpHeaders[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_v2beta1_manifest#path DataK8SAppsEmqxIoEmqxV2Beta1Manifest#path}
  */
  readonly path?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_v2beta1_manifest#port DataK8SAppsEmqxIoEmqxV2Beta1Manifest#port}
  */
  readonly port: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_v2beta1_manifest#scheme DataK8SAppsEmqxIoEmqxV2Beta1Manifest#scheme}
  */
  readonly scheme?: string;
}

export function dataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecLifecyclePreStopHttpGetToTerraform(struct?: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecLifecyclePreStopHttpGet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host: cdktf.stringToTerraform(struct!.host),
    http_headers: cdktf.listMapper(dataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecLifecyclePreStopHttpGetHttpHeadersToTerraform, false)(struct!.httpHeaders),
    path: cdktf.stringToTerraform(struct!.path),
    port: cdktf.stringToTerraform(struct!.port),
    scheme: cdktf.stringToTerraform(struct!.scheme),
  }
}


export function dataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecLifecyclePreStopHttpGetToHclTerraform(struct?: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecLifecyclePreStopHttpGet | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(dataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecLifecyclePreStopHttpGetHttpHeadersToHclTerraform, false)(struct!.httpHeaders),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecLifecyclePreStopHttpGetHttpHeadersList",
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

export class DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecLifecyclePreStopHttpGetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecLifecyclePreStopHttpGet | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecLifecyclePreStopHttpGet | cdktf.IResolvable | undefined) {
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
  private _httpHeaders = new DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecLifecyclePreStopHttpGetHttpHeadersList(this, "http_headers", false);
  public get httpHeaders() {
    return this._httpHeaders;
  }
  public putHttpHeaders(value: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecLifecyclePreStopHttpGetHttpHeaders[] | cdktf.IResolvable) {
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
export interface DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecLifecyclePreStopSleep {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_v2beta1_manifest#seconds DataK8SAppsEmqxIoEmqxV2Beta1Manifest#seconds}
  */
  readonly seconds: number;
}

export function dataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecLifecyclePreStopSleepToTerraform(struct?: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecLifecyclePreStopSleep | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    seconds: cdktf.numberToTerraform(struct!.seconds),
  }
}


export function dataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecLifecyclePreStopSleepToHclTerraform(struct?: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecLifecyclePreStopSleep | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    seconds: {
      value: cdktf.numberToHclTerraform(struct!.seconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecLifecyclePreStopSleepOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecLifecyclePreStopSleep | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._seconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.seconds = this._seconds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecLifecyclePreStopSleep | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._seconds = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._seconds = value.seconds;
    }
  }

  // seconds - computed: false, optional: false, required: true
  private _seconds?: number; 
  public get seconds() {
    return this.getNumberAttribute('seconds');
  }
  public set seconds(value: number) {
    this._seconds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secondsInput() {
    return this._seconds;
  }
}
export interface DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecLifecyclePreStopTcpSocket {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_v2beta1_manifest#host DataK8SAppsEmqxIoEmqxV2Beta1Manifest#host}
  */
  readonly host?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_v2beta1_manifest#port DataK8SAppsEmqxIoEmqxV2Beta1Manifest#port}
  */
  readonly port: string;
}

export function dataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecLifecyclePreStopTcpSocketToTerraform(struct?: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecLifecyclePreStopTcpSocket | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host: cdktf.stringToTerraform(struct!.host),
    port: cdktf.stringToTerraform(struct!.port),
  }
}


export function dataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecLifecyclePreStopTcpSocketToHclTerraform(struct?: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecLifecyclePreStopTcpSocket | cdktf.IResolvable): any {
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

export class DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecLifecyclePreStopTcpSocketOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecLifecyclePreStopTcpSocket | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecLifecyclePreStopTcpSocket | cdktf.IResolvable | undefined) {
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
export interface DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecLifecyclePreStop {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_v2beta1_manifest#exec DataK8SAppsEmqxIoEmqxV2Beta1Manifest#exec}
  */
  readonly exec?: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecLifecyclePreStopExec;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_v2beta1_manifest#http_get DataK8SAppsEmqxIoEmqxV2Beta1Manifest#http_get}
  */
  readonly httpGet?: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecLifecyclePreStopHttpGet;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_v2beta1_manifest#sleep DataK8SAppsEmqxIoEmqxV2Beta1Manifest#sleep}
  */
  readonly sleep?: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecLifecyclePreStopSleep;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_v2beta1_manifest#tcp_socket DataK8SAppsEmqxIoEmqxV2Beta1Manifest#tcp_socket}
  */
  readonly tcpSocket?: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecLifecyclePreStopTcpSocket;
}

export function dataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecLifecyclePreStopToTerraform(struct?: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecLifecyclePreStop | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exec: dataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecLifecyclePreStopExecToTerraform(struct!.exec),
    http_get: dataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecLifecyclePreStopHttpGetToTerraform(struct!.httpGet),
    sleep: dataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecLifecyclePreStopSleepToTerraform(struct!.sleep),
    tcp_socket: dataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecLifecyclePreStopTcpSocketToTerraform(struct!.tcpSocket),
  }
}


export function dataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecLifecyclePreStopToHclTerraform(struct?: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecLifecyclePreStop | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exec: {
      value: dataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecLifecyclePreStopExecToHclTerraform(struct!.exec),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecLifecyclePreStopExec",
    },
    http_get: {
      value: dataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecLifecyclePreStopHttpGetToHclTerraform(struct!.httpGet),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecLifecyclePreStopHttpGet",
    },
    sleep: {
      value: dataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecLifecyclePreStopSleepToHclTerraform(struct!.sleep),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecLifecyclePreStopSleep",
    },
    tcp_socket: {
      value: dataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecLifecyclePreStopTcpSocketToHclTerraform(struct!.tcpSocket),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecLifecyclePreStopTcpSocket",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecLifecyclePreStopOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecLifecyclePreStop | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exec?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.exec = this._exec?.internalValue;
    }
    if (this._httpGet?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpGet = this._httpGet?.internalValue;
    }
    if (this._sleep?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sleep = this._sleep?.internalValue;
    }
    if (this._tcpSocket?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpSocket = this._tcpSocket?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecLifecyclePreStop | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._exec.internalValue = undefined;
      this._httpGet.internalValue = undefined;
      this._sleep.internalValue = undefined;
      this._tcpSocket.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._exec.internalValue = value.exec;
      this._httpGet.internalValue = value.httpGet;
      this._sleep.internalValue = value.sleep;
      this._tcpSocket.internalValue = value.tcpSocket;
    }
  }

  // exec - computed: false, optional: true, required: false
  private _exec = new DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecLifecyclePreStopExecOutputReference(this, "exec");
  public get exec() {
    return this._exec;
  }
  public putExec(value: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecLifecyclePreStopExec) {
    this._exec.internalValue = value;
  }
  public resetExec() {
    this._exec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get execInput() {
    return this._exec.internalValue;
  }

  // http_get - computed: false, optional: true, required: false
  private _httpGet = new DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecLifecyclePreStopHttpGetOutputReference(this, "http_get");
  public get httpGet() {
    return this._httpGet;
  }
  public putHttpGet(value: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecLifecyclePreStopHttpGet) {
    this._httpGet.internalValue = value;
  }
  public resetHttpGet() {
    this._httpGet.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpGetInput() {
    return this._httpGet.internalValue;
  }

  // sleep - computed: false, optional: true, required: false
  private _sleep = new DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecLifecyclePreStopSleepOutputReference(this, "sleep");
  public get sleep() {
    return this._sleep;
  }
  public putSleep(value: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecLifecyclePreStopSleep) {
    this._sleep.internalValue = value;
  }
  public resetSleep() {
    this._sleep.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sleepInput() {
    return this._sleep.internalValue;
  }

  // tcp_socket - computed: false, optional: true, required: false
  private _tcpSocket = new DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecLifecyclePreStopTcpSocketOutputReference(this, "tcp_socket");
  public get tcpSocket() {
    return this._tcpSocket;
  }
  public putTcpSocket(value: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecLifecyclePreStopTcpSocket) {
    this._tcpSocket.internalValue = value;
  }
  public resetTcpSocket() {
    this._tcpSocket.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpSocketInput() {
    return this._tcpSocket.internalValue;
  }
}
export interface DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecLifecycle {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_v2beta1_manifest#post_start DataK8SAppsEmqxIoEmqxV2Beta1Manifest#post_start}
  */
  readonly postStart?: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecLifecyclePostStart;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_v2beta1_manifest#pre_stop DataK8SAppsEmqxIoEmqxV2Beta1Manifest#pre_stop}
  */
  readonly preStop?: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecLifecyclePreStop;
}

export function dataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecLifecycleToTerraform(struct?: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecLifecycle | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    post_start: dataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecLifecyclePostStartToTerraform(struct!.postStart),
    pre_stop: dataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecLifecyclePreStopToTerraform(struct!.preStop),
  }
}


export function dataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecLifecycleToHclTerraform(struct?: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecLifecycle | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    post_start: {
      value: dataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecLifecyclePostStartToHclTerraform(struct!.postStart),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecLifecyclePostStart",
    },
    pre_stop: {
      value: dataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecLifecyclePreStopToHclTerraform(struct!.preStop),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecLifecyclePreStop",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecLifecycleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecLifecycle | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._postStart?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.postStart = this._postStart?.internalValue;
    }
    if (this._preStop?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.preStop = this._preStop?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecLifecycle | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._postStart.internalValue = undefined;
      this._preStop.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._postStart.internalValue = value.postStart;
      this._preStop.internalValue = value.preStop;
    }
  }

  // post_start - computed: false, optional: true, required: false
  private _postStart = new DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecLifecyclePostStartOutputReference(this, "post_start");
  public get postStart() {
    return this._postStart;
  }
  public putPostStart(value: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecLifecyclePostStart) {
    this._postStart.internalValue = value;
  }
  public resetPostStart() {
    this._postStart.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get postStartInput() {
    return this._postStart.internalValue;
  }

  // pre_stop - computed: false, optional: true, required: false
  private _preStop = new DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecLifecyclePreStopOutputReference(this, "pre_stop");
  public get preStop() {
    return this._preStop;
  }
  public putPreStop(value: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecLifecyclePreStop) {
    this._preStop.internalValue = value;
  }
  public resetPreStop() {
    this._preStop.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preStopInput() {
    return this._preStop.internalValue;
  }
}
export interface DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecLivenessProbeExec {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_v2beta1_manifest#command DataK8SAppsEmqxIoEmqxV2Beta1Manifest#command}
  */
  readonly command?: string[];
}

export function dataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecLivenessProbeExecToTerraform(struct?: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecLivenessProbeExec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    command: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.command),
  }
}


export function dataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecLivenessProbeExecToHclTerraform(struct?: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecLivenessProbeExec | cdktf.IResolvable): any {
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

export class DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecLivenessProbeExecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecLivenessProbeExec | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecLivenessProbeExec | cdktf.IResolvable | undefined) {
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
export interface DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecLivenessProbeGrpc {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_v2beta1_manifest#port DataK8SAppsEmqxIoEmqxV2Beta1Manifest#port}
  */
  readonly port: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_v2beta1_manifest#service DataK8SAppsEmqxIoEmqxV2Beta1Manifest#service}
  */
  readonly service?: string;
}

export function dataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecLivenessProbeGrpcToTerraform(struct?: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecLivenessProbeGrpc | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    port: cdktf.numberToTerraform(struct!.port),
    service: cdktf.stringToTerraform(struct!.service),
  }
}


export function dataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecLivenessProbeGrpcToHclTerraform(struct?: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecLivenessProbeGrpc | cdktf.IResolvable): any {
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

export class DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecLivenessProbeGrpcOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecLivenessProbeGrpc | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecLivenessProbeGrpc | cdktf.IResolvable | undefined) {
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
export interface DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecLivenessProbeHttpGetHttpHeaders {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_v2beta1_manifest#name DataK8SAppsEmqxIoEmqxV2Beta1Manifest#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_v2beta1_manifest#value DataK8SAppsEmqxIoEmqxV2Beta1Manifest#value}
  */
  readonly value: string;
}

export function dataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecLivenessProbeHttpGetHttpHeadersToTerraform(struct?: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecLivenessProbeHttpGetHttpHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecLivenessProbeHttpGetHttpHeadersToHclTerraform(struct?: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecLivenessProbeHttpGetHttpHeaders | cdktf.IResolvable): any {
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

export class DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecLivenessProbeHttpGetHttpHeadersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecLivenessProbeHttpGetHttpHeaders | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecLivenessProbeHttpGetHttpHeaders | cdktf.IResolvable | undefined) {
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

export class DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecLivenessProbeHttpGetHttpHeadersList extends cdktf.ComplexList {
  public internalValue? : DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecLivenessProbeHttpGetHttpHeaders[] | cdktf.IResolvable

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
  public get(index: number): DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecLivenessProbeHttpGetHttpHeadersOutputReference {
    return new DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecLivenessProbeHttpGetHttpHeadersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecLivenessProbeHttpGet {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_v2beta1_manifest#host DataK8SAppsEmqxIoEmqxV2Beta1Manifest#host}
  */
  readonly host?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_v2beta1_manifest#http_headers DataK8SAppsEmqxIoEmqxV2Beta1Manifest#http_headers}
  */
  readonly httpHeaders?: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecLivenessProbeHttpGetHttpHeaders[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_v2beta1_manifest#path DataK8SAppsEmqxIoEmqxV2Beta1Manifest#path}
  */
  readonly path?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_v2beta1_manifest#port DataK8SAppsEmqxIoEmqxV2Beta1Manifest#port}
  */
  readonly port: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_v2beta1_manifest#scheme DataK8SAppsEmqxIoEmqxV2Beta1Manifest#scheme}
  */
  readonly scheme?: string;
}

export function dataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecLivenessProbeHttpGetToTerraform(struct?: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecLivenessProbeHttpGet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host: cdktf.stringToTerraform(struct!.host),
    http_headers: cdktf.listMapper(dataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecLivenessProbeHttpGetHttpHeadersToTerraform, false)(struct!.httpHeaders),
    path: cdktf.stringToTerraform(struct!.path),
    port: cdktf.stringToTerraform(struct!.port),
    scheme: cdktf.stringToTerraform(struct!.scheme),
  }
}


export function dataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecLivenessProbeHttpGetToHclTerraform(struct?: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecLivenessProbeHttpGet | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(dataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecLivenessProbeHttpGetHttpHeadersToHclTerraform, false)(struct!.httpHeaders),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecLivenessProbeHttpGetHttpHeadersList",
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

export class DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecLivenessProbeHttpGetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecLivenessProbeHttpGet | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecLivenessProbeHttpGet | cdktf.IResolvable | undefined) {
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
  private _httpHeaders = new DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecLivenessProbeHttpGetHttpHeadersList(this, "http_headers", false);
  public get httpHeaders() {
    return this._httpHeaders;
  }
  public putHttpHeaders(value: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecLivenessProbeHttpGetHttpHeaders[] | cdktf.IResolvable) {
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
export interface DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecLivenessProbeTcpSocket {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_v2beta1_manifest#host DataK8SAppsEmqxIoEmqxV2Beta1Manifest#host}
  */
  readonly host?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_v2beta1_manifest#port DataK8SAppsEmqxIoEmqxV2Beta1Manifest#port}
  */
  readonly port: string;
}

export function dataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecLivenessProbeTcpSocketToTerraform(struct?: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecLivenessProbeTcpSocket | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host: cdktf.stringToTerraform(struct!.host),
    port: cdktf.stringToTerraform(struct!.port),
  }
}


export function dataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecLivenessProbeTcpSocketToHclTerraform(struct?: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecLivenessProbeTcpSocket | cdktf.IResolvable): any {
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

export class DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecLivenessProbeTcpSocketOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecLivenessProbeTcpSocket | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecLivenessProbeTcpSocket | cdktf.IResolvable | undefined) {
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
export interface DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecLivenessProbe {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_v2beta1_manifest#exec DataK8SAppsEmqxIoEmqxV2Beta1Manifest#exec}
  */
  readonly exec?: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecLivenessProbeExec;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_v2beta1_manifest#failure_threshold DataK8SAppsEmqxIoEmqxV2Beta1Manifest#failure_threshold}
  */
  readonly failureThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_v2beta1_manifest#grpc DataK8SAppsEmqxIoEmqxV2Beta1Manifest#grpc}
  */
  readonly grpc?: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecLivenessProbeGrpc;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_v2beta1_manifest#http_get DataK8SAppsEmqxIoEmqxV2Beta1Manifest#http_get}
  */
  readonly httpGet?: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecLivenessProbeHttpGet;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_v2beta1_manifest#initial_delay_seconds DataK8SAppsEmqxIoEmqxV2Beta1Manifest#initial_delay_seconds}
  */
  readonly initialDelaySeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_v2beta1_manifest#period_seconds DataK8SAppsEmqxIoEmqxV2Beta1Manifest#period_seconds}
  */
  readonly periodSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_v2beta1_manifest#success_threshold DataK8SAppsEmqxIoEmqxV2Beta1Manifest#success_threshold}
  */
  readonly successThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_v2beta1_manifest#tcp_socket DataK8SAppsEmqxIoEmqxV2Beta1Manifest#tcp_socket}
  */
  readonly tcpSocket?: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecLivenessProbeTcpSocket;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_v2beta1_manifest#termination_grace_period_seconds DataK8SAppsEmqxIoEmqxV2Beta1Manifest#termination_grace_period_seconds}
  */
  readonly terminationGracePeriodSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_v2beta1_manifest#timeout_seconds DataK8SAppsEmqxIoEmqxV2Beta1Manifest#timeout_seconds}
  */
  readonly timeoutSeconds?: number;
}

export function dataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecLivenessProbeToTerraform(struct?: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecLivenessProbe | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exec: dataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecLivenessProbeExecToTerraform(struct!.exec),
    failure_threshold: cdktf.numberToTerraform(struct!.failureThreshold),
    grpc: dataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecLivenessProbeGrpcToTerraform(struct!.grpc),
    http_get: dataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecLivenessProbeHttpGetToTerraform(struct!.httpGet),
    initial_delay_seconds: cdktf.numberToTerraform(struct!.initialDelaySeconds),
    period_seconds: cdktf.numberToTerraform(struct!.periodSeconds),
    success_threshold: cdktf.numberToTerraform(struct!.successThreshold),
    tcp_socket: dataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecLivenessProbeTcpSocketToTerraform(struct!.tcpSocket),
    termination_grace_period_seconds: cdktf.numberToTerraform(struct!.terminationGracePeriodSeconds),
    timeout_seconds: cdktf.numberToTerraform(struct!.timeoutSeconds),
  }
}


export function dataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecLivenessProbeToHclTerraform(struct?: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecLivenessProbe | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exec: {
      value: dataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecLivenessProbeExecToHclTerraform(struct!.exec),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecLivenessProbeExec",
    },
    failure_threshold: {
      value: cdktf.numberToHclTerraform(struct!.failureThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    grpc: {
      value: dataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecLivenessProbeGrpcToHclTerraform(struct!.grpc),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecLivenessProbeGrpc",
    },
    http_get: {
      value: dataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecLivenessProbeHttpGetToHclTerraform(struct!.httpGet),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecLivenessProbeHttpGet",
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
      value: dataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecLivenessProbeTcpSocketToHclTerraform(struct!.tcpSocket),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecLivenessProbeTcpSocket",
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

export class DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecLivenessProbeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecLivenessProbe | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecLivenessProbe | cdktf.IResolvable | undefined) {
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
  private _exec = new DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecLivenessProbeExecOutputReference(this, "exec");
  public get exec() {
    return this._exec;
  }
  public putExec(value: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecLivenessProbeExec) {
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
  private _grpc = new DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecLivenessProbeGrpcOutputReference(this, "grpc");
  public get grpc() {
    return this._grpc;
  }
  public putGrpc(value: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecLivenessProbeGrpc) {
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
  private _httpGet = new DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecLivenessProbeHttpGetOutputReference(this, "http_get");
  public get httpGet() {
    return this._httpGet;
  }
  public putHttpGet(value: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecLivenessProbeHttpGet) {
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
  private _tcpSocket = new DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecLivenessProbeTcpSocketOutputReference(this, "tcp_socket");
  public get tcpSocket() {
    return this._tcpSocket;
  }
  public putTcpSocket(value: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecLivenessProbeTcpSocket) {
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
export interface DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecPodSecurityContextSeLinuxOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_v2beta1_manifest#level DataK8SAppsEmqxIoEmqxV2Beta1Manifest#level}
  */
  readonly level?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_v2beta1_manifest#role DataK8SAppsEmqxIoEmqxV2Beta1Manifest#role}
  */
  readonly role?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_v2beta1_manifest#type DataK8SAppsEmqxIoEmqxV2Beta1Manifest#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_v2beta1_manifest#user DataK8SAppsEmqxIoEmqxV2Beta1Manifest#user}
  */
  readonly user?: string;
}

export function dataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecPodSecurityContextSeLinuxOptionsToTerraform(struct?: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecPodSecurityContextSeLinuxOptions | cdktf.IResolvable): any {
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


export function dataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecPodSecurityContextSeLinuxOptionsToHclTerraform(struct?: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecPodSecurityContextSeLinuxOptions | cdktf.IResolvable): any {
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

export class DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecPodSecurityContextSeLinuxOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecPodSecurityContextSeLinuxOptions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecPodSecurityContextSeLinuxOptions | cdktf.IResolvable | undefined) {
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
export interface DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecPodSecurityContextSeccompProfile {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_v2beta1_manifest#localhost_profile DataK8SAppsEmqxIoEmqxV2Beta1Manifest#localhost_profile}
  */
  readonly localhostProfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_v2beta1_manifest#type DataK8SAppsEmqxIoEmqxV2Beta1Manifest#type}
  */
  readonly type: string;
}

export function dataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecPodSecurityContextSeccompProfileToTerraform(struct?: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecPodSecurityContextSeccompProfile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    localhost_profile: cdktf.stringToTerraform(struct!.localhostProfile),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecPodSecurityContextSeccompProfileToHclTerraform(struct?: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecPodSecurityContextSeccompProfile | cdktf.IResolvable): any {
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

export class DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecPodSecurityContextSeccompProfileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecPodSecurityContextSeccompProfile | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecPodSecurityContextSeccompProfile | cdktf.IResolvable | undefined) {
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
export interface DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecPodSecurityContextSysctls {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_v2beta1_manifest#name DataK8SAppsEmqxIoEmqxV2Beta1Manifest#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_v2beta1_manifest#value DataK8SAppsEmqxIoEmqxV2Beta1Manifest#value}
  */
  readonly value: string;
}

export function dataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecPodSecurityContextSysctlsToTerraform(struct?: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecPodSecurityContextSysctls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecPodSecurityContextSysctlsToHclTerraform(struct?: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecPodSecurityContextSysctls | cdktf.IResolvable): any {
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

export class DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecPodSecurityContextSysctlsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecPodSecurityContextSysctls | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecPodSecurityContextSysctls | cdktf.IResolvable | undefined) {
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

export class DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecPodSecurityContextSysctlsList extends cdktf.ComplexList {
  public internalValue? : DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecPodSecurityContextSysctls[] | cdktf.IResolvable

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
  public get(index: number): DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecPodSecurityContextSysctlsOutputReference {
    return new DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecPodSecurityContextSysctlsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecPodSecurityContextWindowsOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_v2beta1_manifest#gmsa_credential_spec DataK8SAppsEmqxIoEmqxV2Beta1Manifest#gmsa_credential_spec}
  */
  readonly gmsaCredentialSpec?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_v2beta1_manifest#gmsa_credential_spec_name DataK8SAppsEmqxIoEmqxV2Beta1Manifest#gmsa_credential_spec_name}
  */
  readonly gmsaCredentialSpecName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_v2beta1_manifest#host_process DataK8SAppsEmqxIoEmqxV2Beta1Manifest#host_process}
  */
  readonly hostProcess?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_v2beta1_manifest#run_as_user_name DataK8SAppsEmqxIoEmqxV2Beta1Manifest#run_as_user_name}
  */
  readonly runAsUserName?: string;
}

export function dataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecPodSecurityContextWindowsOptionsToTerraform(struct?: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecPodSecurityContextWindowsOptions | cdktf.IResolvable): any {
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


export function dataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecPodSecurityContextWindowsOptionsToHclTerraform(struct?: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecPodSecurityContextWindowsOptions | cdktf.IResolvable): any {
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

export class DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecPodSecurityContextWindowsOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecPodSecurityContextWindowsOptions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecPodSecurityContextWindowsOptions | cdktf.IResolvable | undefined) {
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
export interface DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecPodSecurityContext {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_v2beta1_manifest#fs_group DataK8SAppsEmqxIoEmqxV2Beta1Manifest#fs_group}
  */
  readonly fsGroup?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_v2beta1_manifest#fs_group_change_policy DataK8SAppsEmqxIoEmqxV2Beta1Manifest#fs_group_change_policy}
  */
  readonly fsGroupChangePolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_v2beta1_manifest#run_as_group DataK8SAppsEmqxIoEmqxV2Beta1Manifest#run_as_group}
  */
  readonly runAsGroup?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_v2beta1_manifest#run_as_non_root DataK8SAppsEmqxIoEmqxV2Beta1Manifest#run_as_non_root}
  */
  readonly runAsNonRoot?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_v2beta1_manifest#run_as_user DataK8SAppsEmqxIoEmqxV2Beta1Manifest#run_as_user}
  */
  readonly runAsUser?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_v2beta1_manifest#se_linux_options DataK8SAppsEmqxIoEmqxV2Beta1Manifest#se_linux_options}
  */
  readonly seLinuxOptions?: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecPodSecurityContextSeLinuxOptions;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_v2beta1_manifest#seccomp_profile DataK8SAppsEmqxIoEmqxV2Beta1Manifest#seccomp_profile}
  */
  readonly seccompProfile?: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecPodSecurityContextSeccompProfile;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_v2beta1_manifest#supplemental_groups DataK8SAppsEmqxIoEmqxV2Beta1Manifest#supplemental_groups}
  */
  readonly supplementalGroups?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_v2beta1_manifest#sysctls DataK8SAppsEmqxIoEmqxV2Beta1Manifest#sysctls}
  */
  readonly sysctls?: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecPodSecurityContextSysctls[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_v2beta1_manifest#windows_options DataK8SAppsEmqxIoEmqxV2Beta1Manifest#windows_options}
  */
  readonly windowsOptions?: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecPodSecurityContextWindowsOptions;
}

export function dataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecPodSecurityContextToTerraform(struct?: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecPodSecurityContext | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fs_group: cdktf.numberToTerraform(struct!.fsGroup),
    fs_group_change_policy: cdktf.stringToTerraform(struct!.fsGroupChangePolicy),
    run_as_group: cdktf.numberToTerraform(struct!.runAsGroup),
    run_as_non_root: cdktf.booleanToTerraform(struct!.runAsNonRoot),
    run_as_user: cdktf.numberToTerraform(struct!.runAsUser),
    se_linux_options: dataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecPodSecurityContextSeLinuxOptionsToTerraform(struct!.seLinuxOptions),
    seccomp_profile: dataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecPodSecurityContextSeccompProfileToTerraform(struct!.seccompProfile),
    supplemental_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.supplementalGroups),
    sysctls: cdktf.listMapper(dataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecPodSecurityContextSysctlsToTerraform, false)(struct!.sysctls),
    windows_options: dataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecPodSecurityContextWindowsOptionsToTerraform(struct!.windowsOptions),
  }
}


export function dataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecPodSecurityContextToHclTerraform(struct?: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecPodSecurityContext | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fs_group: {
      value: cdktf.numberToHclTerraform(struct!.fsGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fs_group_change_policy: {
      value: cdktf.stringToHclTerraform(struct!.fsGroupChangePolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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
      value: dataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecPodSecurityContextSeLinuxOptionsToHclTerraform(struct!.seLinuxOptions),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecPodSecurityContextSeLinuxOptions",
    },
    seccomp_profile: {
      value: dataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecPodSecurityContextSeccompProfileToHclTerraform(struct!.seccompProfile),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecPodSecurityContextSeccompProfile",
    },
    supplemental_groups: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.supplementalGroups),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    sysctls: {
      value: cdktf.listMapperHcl(dataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecPodSecurityContextSysctlsToHclTerraform, false)(struct!.sysctls),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecPodSecurityContextSysctlsList",
    },
    windows_options: {
      value: dataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecPodSecurityContextWindowsOptionsToHclTerraform(struct!.windowsOptions),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecPodSecurityContextWindowsOptions",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecPodSecurityContextOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecPodSecurityContext | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fsGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.fsGroup = this._fsGroup;
    }
    if (this._fsGroupChangePolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.fsGroupChangePolicy = this._fsGroupChangePolicy;
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
    if (this._supplementalGroups !== undefined) {
      hasAnyValues = true;
      internalValueResult.supplementalGroups = this._supplementalGroups;
    }
    if (this._sysctls?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sysctls = this._sysctls?.internalValue;
    }
    if (this._windowsOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.windowsOptions = this._windowsOptions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecPodSecurityContext | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fsGroup = undefined;
      this._fsGroupChangePolicy = undefined;
      this._runAsGroup = undefined;
      this._runAsNonRoot = undefined;
      this._runAsUser = undefined;
      this._seLinuxOptions.internalValue = undefined;
      this._seccompProfile.internalValue = undefined;
      this._supplementalGroups = undefined;
      this._sysctls.internalValue = undefined;
      this._windowsOptions.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fsGroup = value.fsGroup;
      this._fsGroupChangePolicy = value.fsGroupChangePolicy;
      this._runAsGroup = value.runAsGroup;
      this._runAsNonRoot = value.runAsNonRoot;
      this._runAsUser = value.runAsUser;
      this._seLinuxOptions.internalValue = value.seLinuxOptions;
      this._seccompProfile.internalValue = value.seccompProfile;
      this._supplementalGroups = value.supplementalGroups;
      this._sysctls.internalValue = value.sysctls;
      this._windowsOptions.internalValue = value.windowsOptions;
    }
  }

  // fs_group - computed: false, optional: true, required: false
  private _fsGroup?: number; 
  public get fsGroup() {
    return this.getNumberAttribute('fs_group');
  }
  public set fsGroup(value: number) {
    this._fsGroup = value;
  }
  public resetFsGroup() {
    this._fsGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fsGroupInput() {
    return this._fsGroup;
  }

  // fs_group_change_policy - computed: false, optional: true, required: false
  private _fsGroupChangePolicy?: string; 
  public get fsGroupChangePolicy() {
    return this.getStringAttribute('fs_group_change_policy');
  }
  public set fsGroupChangePolicy(value: string) {
    this._fsGroupChangePolicy = value;
  }
  public resetFsGroupChangePolicy() {
    this._fsGroupChangePolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fsGroupChangePolicyInput() {
    return this._fsGroupChangePolicy;
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
  private _seLinuxOptions = new DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecPodSecurityContextSeLinuxOptionsOutputReference(this, "se_linux_options");
  public get seLinuxOptions() {
    return this._seLinuxOptions;
  }
  public putSeLinuxOptions(value: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecPodSecurityContextSeLinuxOptions) {
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
  private _seccompProfile = new DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecPodSecurityContextSeccompProfileOutputReference(this, "seccomp_profile");
  public get seccompProfile() {
    return this._seccompProfile;
  }
  public putSeccompProfile(value: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecPodSecurityContextSeccompProfile) {
    this._seccompProfile.internalValue = value;
  }
  public resetSeccompProfile() {
    this._seccompProfile.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seccompProfileInput() {
    return this._seccompProfile.internalValue;
  }

  // supplemental_groups - computed: false, optional: true, required: false
  private _supplementalGroups?: string[]; 
  public get supplementalGroups() {
    return this.getListAttribute('supplemental_groups');
  }
  public set supplementalGroups(value: string[]) {
    this._supplementalGroups = value;
  }
  public resetSupplementalGroups() {
    this._supplementalGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get supplementalGroupsInput() {
    return this._supplementalGroups;
  }

  // sysctls - computed: false, optional: true, required: false
  private _sysctls = new DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecPodSecurityContextSysctlsList(this, "sysctls", false);
  public get sysctls() {
    return this._sysctls;
  }
  public putSysctls(value: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecPodSecurityContextSysctls[] | cdktf.IResolvable) {
    this._sysctls.internalValue = value;
  }
  public resetSysctls() {
    this._sysctls.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sysctlsInput() {
    return this._sysctls.internalValue;
  }

  // windows_options - computed: false, optional: true, required: false
  private _windowsOptions = new DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecPodSecurityContextWindowsOptionsOutputReference(this, "windows_options");
  public get windowsOptions() {
    return this._windowsOptions;
  }
  public putWindowsOptions(value: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecPodSecurityContextWindowsOptions) {
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
export interface DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecPorts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_v2beta1_manifest#container_port DataK8SAppsEmqxIoEmqxV2Beta1Manifest#container_port}
  */
  readonly containerPort: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_v2beta1_manifest#host_ip DataK8SAppsEmqxIoEmqxV2Beta1Manifest#host_ip}
  */
  readonly hostIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_v2beta1_manifest#host_port DataK8SAppsEmqxIoEmqxV2Beta1Manifest#host_port}
  */
  readonly hostPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_v2beta1_manifest#name DataK8SAppsEmqxIoEmqxV2Beta1Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_v2beta1_manifest#protocol DataK8SAppsEmqxIoEmqxV2Beta1Manifest#protocol}
  */
  readonly protocol?: string;
}

export function dataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecPortsToTerraform(struct?: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecPorts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    container_port: cdktf.numberToTerraform(struct!.containerPort),
    host_ip: cdktf.stringToTerraform(struct!.hostIp),
    host_port: cdktf.numberToTerraform(struct!.hostPort),
    name: cdktf.stringToTerraform(struct!.name),
    protocol: cdktf.stringToTerraform(struct!.protocol),
  }
}


export function dataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecPortsToHclTerraform(struct?: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecPorts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    container_port: {
      value: cdktf.numberToHclTerraform(struct!.containerPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    host_ip: {
      value: cdktf.stringToHclTerraform(struct!.hostIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    host_port: {
      value: cdktf.numberToHclTerraform(struct!.hostPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecPortsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecPorts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._containerPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerPort = this._containerPort;
    }
    if (this._hostIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostIp = this._hostIp;
    }
    if (this._hostPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostPort = this._hostPort;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecPorts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._containerPort = undefined;
      this._hostIp = undefined;
      this._hostPort = undefined;
      this._name = undefined;
      this._protocol = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._containerPort = value.containerPort;
      this._hostIp = value.hostIp;
      this._hostPort = value.hostPort;
      this._name = value.name;
      this._protocol = value.protocol;
    }
  }

  // container_port - computed: false, optional: false, required: true
  private _containerPort?: number; 
  public get containerPort() {
    return this.getNumberAttribute('container_port');
  }
  public set containerPort(value: number) {
    this._containerPort = value;
  }
  // Temporarily expose input value. Use with caution.
  public get containerPortInput() {
    return this._containerPort;
  }

  // host_ip - computed: false, optional: true, required: false
  private _hostIp?: string; 
  public get hostIp() {
    return this.getStringAttribute('host_ip');
  }
  public set hostIp(value: string) {
    this._hostIp = value;
  }
  public resetHostIp() {
    this._hostIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostIpInput() {
    return this._hostIp;
  }

  // host_port - computed: false, optional: true, required: false
  private _hostPort?: number; 
  public get hostPort() {
    return this.getNumberAttribute('host_port');
  }
  public set hostPort(value: number) {
    this._hostPort = value;
  }
  public resetHostPort() {
    this._hostPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostPortInput() {
    return this._hostPort;
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
}

export class DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecPortsList extends cdktf.ComplexList {
  public internalValue? : DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecPorts[] | cdktf.IResolvable

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
  public get(index: number): DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecPortsOutputReference {
    return new DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecPortsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecReadinessProbeExec {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_v2beta1_manifest#command DataK8SAppsEmqxIoEmqxV2Beta1Manifest#command}
  */
  readonly command?: string[];
}

export function dataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecReadinessProbeExecToTerraform(struct?: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecReadinessProbeExec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    command: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.command),
  }
}


export function dataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecReadinessProbeExecToHclTerraform(struct?: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecReadinessProbeExec | cdktf.IResolvable): any {
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

export class DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecReadinessProbeExecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecReadinessProbeExec | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecReadinessProbeExec | cdktf.IResolvable | undefined) {
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
export interface DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecReadinessProbeGrpc {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_v2beta1_manifest#port DataK8SAppsEmqxIoEmqxV2Beta1Manifest#port}
  */
  readonly port: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_v2beta1_manifest#service DataK8SAppsEmqxIoEmqxV2Beta1Manifest#service}
  */
  readonly service?: string;
}

export function dataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecReadinessProbeGrpcToTerraform(struct?: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecReadinessProbeGrpc | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    port: cdktf.numberToTerraform(struct!.port),
    service: cdktf.stringToTerraform(struct!.service),
  }
}


export function dataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecReadinessProbeGrpcToHclTerraform(struct?: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecReadinessProbeGrpc | cdktf.IResolvable): any {
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

export class DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecReadinessProbeGrpcOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecReadinessProbeGrpc | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecReadinessProbeGrpc | cdktf.IResolvable | undefined) {
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
export interface DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecReadinessProbeHttpGetHttpHeaders {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_v2beta1_manifest#name DataK8SAppsEmqxIoEmqxV2Beta1Manifest#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_v2beta1_manifest#value DataK8SAppsEmqxIoEmqxV2Beta1Manifest#value}
  */
  readonly value: string;
}

export function dataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecReadinessProbeHttpGetHttpHeadersToTerraform(struct?: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecReadinessProbeHttpGetHttpHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecReadinessProbeHttpGetHttpHeadersToHclTerraform(struct?: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecReadinessProbeHttpGetHttpHeaders | cdktf.IResolvable): any {
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

export class DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecReadinessProbeHttpGetHttpHeadersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecReadinessProbeHttpGetHttpHeaders | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecReadinessProbeHttpGetHttpHeaders | cdktf.IResolvable | undefined) {
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

export class DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecReadinessProbeHttpGetHttpHeadersList extends cdktf.ComplexList {
  public internalValue? : DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecReadinessProbeHttpGetHttpHeaders[] | cdktf.IResolvable

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
  public get(index: number): DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecReadinessProbeHttpGetHttpHeadersOutputReference {
    return new DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecReadinessProbeHttpGetHttpHeadersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecReadinessProbeHttpGet {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_v2beta1_manifest#host DataK8SAppsEmqxIoEmqxV2Beta1Manifest#host}
  */
  readonly host?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_v2beta1_manifest#http_headers DataK8SAppsEmqxIoEmqxV2Beta1Manifest#http_headers}
  */
  readonly httpHeaders?: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecReadinessProbeHttpGetHttpHeaders[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_v2beta1_manifest#path DataK8SAppsEmqxIoEmqxV2Beta1Manifest#path}
  */
  readonly path?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_v2beta1_manifest#port DataK8SAppsEmqxIoEmqxV2Beta1Manifest#port}
  */
  readonly port: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_v2beta1_manifest#scheme DataK8SAppsEmqxIoEmqxV2Beta1Manifest#scheme}
  */
  readonly scheme?: string;
}

export function dataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecReadinessProbeHttpGetToTerraform(struct?: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecReadinessProbeHttpGet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host: cdktf.stringToTerraform(struct!.host),
    http_headers: cdktf.listMapper(dataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecReadinessProbeHttpGetHttpHeadersToTerraform, false)(struct!.httpHeaders),
    path: cdktf.stringToTerraform(struct!.path),
    port: cdktf.stringToTerraform(struct!.port),
    scheme: cdktf.stringToTerraform(struct!.scheme),
  }
}


export function dataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecReadinessProbeHttpGetToHclTerraform(struct?: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecReadinessProbeHttpGet | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(dataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecReadinessProbeHttpGetHttpHeadersToHclTerraform, false)(struct!.httpHeaders),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecReadinessProbeHttpGetHttpHeadersList",
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

export class DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecReadinessProbeHttpGetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecReadinessProbeHttpGet | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecReadinessProbeHttpGet | cdktf.IResolvable | undefined) {
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
  private _httpHeaders = new DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecReadinessProbeHttpGetHttpHeadersList(this, "http_headers", false);
  public get httpHeaders() {
    return this._httpHeaders;
  }
  public putHttpHeaders(value: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecReadinessProbeHttpGetHttpHeaders[] | cdktf.IResolvable) {
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
export interface DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecReadinessProbeTcpSocket {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_v2beta1_manifest#host DataK8SAppsEmqxIoEmqxV2Beta1Manifest#host}
  */
  readonly host?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_v2beta1_manifest#port DataK8SAppsEmqxIoEmqxV2Beta1Manifest#port}
  */
  readonly port: string;
}

export function dataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecReadinessProbeTcpSocketToTerraform(struct?: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecReadinessProbeTcpSocket | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host: cdktf.stringToTerraform(struct!.host),
    port: cdktf.stringToTerraform(struct!.port),
  }
}


export function dataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecReadinessProbeTcpSocketToHclTerraform(struct?: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecReadinessProbeTcpSocket | cdktf.IResolvable): any {
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

export class DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecReadinessProbeTcpSocketOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecReadinessProbeTcpSocket | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecReadinessProbeTcpSocket | cdktf.IResolvable | undefined) {
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
export interface DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecReadinessProbe {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_v2beta1_manifest#exec DataK8SAppsEmqxIoEmqxV2Beta1Manifest#exec}
  */
  readonly exec?: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecReadinessProbeExec;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_v2beta1_manifest#failure_threshold DataK8SAppsEmqxIoEmqxV2Beta1Manifest#failure_threshold}
  */
  readonly failureThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_v2beta1_manifest#grpc DataK8SAppsEmqxIoEmqxV2Beta1Manifest#grpc}
  */
  readonly grpc?: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecReadinessProbeGrpc;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_v2beta1_manifest#http_get DataK8SAppsEmqxIoEmqxV2Beta1Manifest#http_get}
  */
  readonly httpGet?: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecReadinessProbeHttpGet;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_v2beta1_manifest#initial_delay_seconds DataK8SAppsEmqxIoEmqxV2Beta1Manifest#initial_delay_seconds}
  */
  readonly initialDelaySeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_v2beta1_manifest#period_seconds DataK8SAppsEmqxIoEmqxV2Beta1Manifest#period_seconds}
  */
  readonly periodSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_v2beta1_manifest#success_threshold DataK8SAppsEmqxIoEmqxV2Beta1Manifest#success_threshold}
  */
  readonly successThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_v2beta1_manifest#tcp_socket DataK8SAppsEmqxIoEmqxV2Beta1Manifest#tcp_socket}
  */
  readonly tcpSocket?: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecReadinessProbeTcpSocket;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_v2beta1_manifest#termination_grace_period_seconds DataK8SAppsEmqxIoEmqxV2Beta1Manifest#termination_grace_period_seconds}
  */
  readonly terminationGracePeriodSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_v2beta1_manifest#timeout_seconds DataK8SAppsEmqxIoEmqxV2Beta1Manifest#timeout_seconds}
  */
  readonly timeoutSeconds?: number;
}

export function dataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecReadinessProbeToTerraform(struct?: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecReadinessProbe | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exec: dataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecReadinessProbeExecToTerraform(struct!.exec),
    failure_threshold: cdktf.numberToTerraform(struct!.failureThreshold),
    grpc: dataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecReadinessProbeGrpcToTerraform(struct!.grpc),
    http_get: dataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecReadinessProbeHttpGetToTerraform(struct!.httpGet),
    initial_delay_seconds: cdktf.numberToTerraform(struct!.initialDelaySeconds),
    period_seconds: cdktf.numberToTerraform(struct!.periodSeconds),
    success_threshold: cdktf.numberToTerraform(struct!.successThreshold),
    tcp_socket: dataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecReadinessProbeTcpSocketToTerraform(struct!.tcpSocket),
    termination_grace_period_seconds: cdktf.numberToTerraform(struct!.terminationGracePeriodSeconds),
    timeout_seconds: cdktf.numberToTerraform(struct!.timeoutSeconds),
  }
}


export function dataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecReadinessProbeToHclTerraform(struct?: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecReadinessProbe | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exec: {
      value: dataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecReadinessProbeExecToHclTerraform(struct!.exec),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecReadinessProbeExec",
    },
    failure_threshold: {
      value: cdktf.numberToHclTerraform(struct!.failureThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    grpc: {
      value: dataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecReadinessProbeGrpcToHclTerraform(struct!.grpc),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecReadinessProbeGrpc",
    },
    http_get: {
      value: dataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecReadinessProbeHttpGetToHclTerraform(struct!.httpGet),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecReadinessProbeHttpGet",
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
      value: dataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecReadinessProbeTcpSocketToHclTerraform(struct!.tcpSocket),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecReadinessProbeTcpSocket",
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

export class DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecReadinessProbeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecReadinessProbe | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecReadinessProbe | cdktf.IResolvable | undefined) {
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
  private _exec = new DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecReadinessProbeExecOutputReference(this, "exec");
  public get exec() {
    return this._exec;
  }
  public putExec(value: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecReadinessProbeExec) {
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
  private _grpc = new DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecReadinessProbeGrpcOutputReference(this, "grpc");
  public get grpc() {
    return this._grpc;
  }
  public putGrpc(value: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecReadinessProbeGrpc) {
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
  private _httpGet = new DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecReadinessProbeHttpGetOutputReference(this, "http_get");
  public get httpGet() {
    return this._httpGet;
  }
  public putHttpGet(value: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecReadinessProbeHttpGet) {
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
  private _tcpSocket = new DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecReadinessProbeTcpSocketOutputReference(this, "tcp_socket");
  public get tcpSocket() {
    return this._tcpSocket;
  }
  public putTcpSocket(value: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecReadinessProbeTcpSocket) {
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
export interface DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecResourcesClaims {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_v2beta1_manifest#name DataK8SAppsEmqxIoEmqxV2Beta1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecResourcesClaimsToTerraform(struct?: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecResourcesClaims | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecResourcesClaimsToHclTerraform(struct?: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecResourcesClaims | cdktf.IResolvable): any {
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

export class DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecResourcesClaimsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecResourcesClaims | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecResourcesClaims | cdktf.IResolvable | undefined) {
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

export class DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecResourcesClaimsList extends cdktf.ComplexList {
  public internalValue? : DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecResourcesClaims[] | cdktf.IResolvable

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
  public get(index: number): DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecResourcesClaimsOutputReference {
    return new DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecResourcesClaimsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecResources {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_v2beta1_manifest#claims DataK8SAppsEmqxIoEmqxV2Beta1Manifest#claims}
  */
  readonly claims?: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecResourcesClaims[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_v2beta1_manifest#limits DataK8SAppsEmqxIoEmqxV2Beta1Manifest#limits}
  */
  readonly limits?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_v2beta1_manifest#requests DataK8SAppsEmqxIoEmqxV2Beta1Manifest#requests}
  */
  readonly requests?: { [key: string]: string };
}

export function dataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecResourcesToTerraform(struct?: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    claims: cdktf.listMapper(dataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecResourcesClaimsToTerraform, false)(struct!.claims),
    limits: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.limits),
    requests: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.requests),
  }
}


export function dataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecResourcesToHclTerraform(struct?: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    claims: {
      value: cdktf.listMapperHcl(dataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecResourcesClaimsToHclTerraform, false)(struct!.claims),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecResourcesClaimsList",
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

export class DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecResourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecResources | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecResources | cdktf.IResolvable | undefined) {
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
  private _claims = new DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecResourcesClaimsList(this, "claims", false);
  public get claims() {
    return this._claims;
  }
  public putClaims(value: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecResourcesClaims[] | cdktf.IResolvable) {
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
export interface DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecStartupProbeExec {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_v2beta1_manifest#command DataK8SAppsEmqxIoEmqxV2Beta1Manifest#command}
  */
  readonly command?: string[];
}

export function dataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecStartupProbeExecToTerraform(struct?: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecStartupProbeExec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    command: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.command),
  }
}


export function dataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecStartupProbeExecToHclTerraform(struct?: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecStartupProbeExec | cdktf.IResolvable): any {
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

export class DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecStartupProbeExecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecStartupProbeExec | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecStartupProbeExec | cdktf.IResolvable | undefined) {
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
export interface DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecStartupProbeGrpc {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_v2beta1_manifest#port DataK8SAppsEmqxIoEmqxV2Beta1Manifest#port}
  */
  readonly port: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_v2beta1_manifest#service DataK8SAppsEmqxIoEmqxV2Beta1Manifest#service}
  */
  readonly service?: string;
}

export function dataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecStartupProbeGrpcToTerraform(struct?: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecStartupProbeGrpc | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    port: cdktf.numberToTerraform(struct!.port),
    service: cdktf.stringToTerraform(struct!.service),
  }
}


export function dataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecStartupProbeGrpcToHclTerraform(struct?: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecStartupProbeGrpc | cdktf.IResolvable): any {
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

export class DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecStartupProbeGrpcOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecStartupProbeGrpc | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecStartupProbeGrpc | cdktf.IResolvable | undefined) {
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
export interface DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecStartupProbeHttpGetHttpHeaders {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_v2beta1_manifest#name DataK8SAppsEmqxIoEmqxV2Beta1Manifest#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_v2beta1_manifest#value DataK8SAppsEmqxIoEmqxV2Beta1Manifest#value}
  */
  readonly value: string;
}

export function dataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecStartupProbeHttpGetHttpHeadersToTerraform(struct?: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecStartupProbeHttpGetHttpHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecStartupProbeHttpGetHttpHeadersToHclTerraform(struct?: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecStartupProbeHttpGetHttpHeaders | cdktf.IResolvable): any {
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

export class DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecStartupProbeHttpGetHttpHeadersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecStartupProbeHttpGetHttpHeaders | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecStartupProbeHttpGetHttpHeaders | cdktf.IResolvable | undefined) {
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

export class DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecStartupProbeHttpGetHttpHeadersList extends cdktf.ComplexList {
  public internalValue? : DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecStartupProbeHttpGetHttpHeaders[] | cdktf.IResolvable

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
  public get(index: number): DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecStartupProbeHttpGetHttpHeadersOutputReference {
    return new DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecStartupProbeHttpGetHttpHeadersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecStartupProbeHttpGet {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_v2beta1_manifest#host DataK8SAppsEmqxIoEmqxV2Beta1Manifest#host}
  */
  readonly host?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_v2beta1_manifest#http_headers DataK8SAppsEmqxIoEmqxV2Beta1Manifest#http_headers}
  */
  readonly httpHeaders?: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecStartupProbeHttpGetHttpHeaders[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_v2beta1_manifest#path DataK8SAppsEmqxIoEmqxV2Beta1Manifest#path}
  */
  readonly path?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_v2beta1_manifest#port DataK8SAppsEmqxIoEmqxV2Beta1Manifest#port}
  */
  readonly port: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_v2beta1_manifest#scheme DataK8SAppsEmqxIoEmqxV2Beta1Manifest#scheme}
  */
  readonly scheme?: string;
}

export function dataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecStartupProbeHttpGetToTerraform(struct?: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecStartupProbeHttpGet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host: cdktf.stringToTerraform(struct!.host),
    http_headers: cdktf.listMapper(dataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecStartupProbeHttpGetHttpHeadersToTerraform, false)(struct!.httpHeaders),
    path: cdktf.stringToTerraform(struct!.path),
    port: cdktf.stringToTerraform(struct!.port),
    scheme: cdktf.stringToTerraform(struct!.scheme),
  }
}


export function dataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecStartupProbeHttpGetToHclTerraform(struct?: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecStartupProbeHttpGet | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(dataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecStartupProbeHttpGetHttpHeadersToHclTerraform, false)(struct!.httpHeaders),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecStartupProbeHttpGetHttpHeadersList",
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

export class DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecStartupProbeHttpGetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecStartupProbeHttpGet | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecStartupProbeHttpGet | cdktf.IResolvable | undefined) {
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
  private _httpHeaders = new DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecStartupProbeHttpGetHttpHeadersList(this, "http_headers", false);
  public get httpHeaders() {
    return this._httpHeaders;
  }
  public putHttpHeaders(value: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecStartupProbeHttpGetHttpHeaders[] | cdktf.IResolvable) {
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
export interface DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecStartupProbeTcpSocket {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_v2beta1_manifest#host DataK8SAppsEmqxIoEmqxV2Beta1Manifest#host}
  */
  readonly host?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_v2beta1_manifest#port DataK8SAppsEmqxIoEmqxV2Beta1Manifest#port}
  */
  readonly port: string;
}

export function dataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecStartupProbeTcpSocketToTerraform(struct?: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecStartupProbeTcpSocket | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host: cdktf.stringToTerraform(struct!.host),
    port: cdktf.stringToTerraform(struct!.port),
  }
}


export function dataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecStartupProbeTcpSocketToHclTerraform(struct?: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecStartupProbeTcpSocket | cdktf.IResolvable): any {
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

export class DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecStartupProbeTcpSocketOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecStartupProbeTcpSocket | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecStartupProbeTcpSocket | cdktf.IResolvable | undefined) {
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
export interface DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecStartupProbe {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_v2beta1_manifest#exec DataK8SAppsEmqxIoEmqxV2Beta1Manifest#exec}
  */
  readonly exec?: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecStartupProbeExec;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_v2beta1_manifest#failure_threshold DataK8SAppsEmqxIoEmqxV2Beta1Manifest#failure_threshold}
  */
  readonly failureThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_v2beta1_manifest#grpc DataK8SAppsEmqxIoEmqxV2Beta1Manifest#grpc}
  */
  readonly grpc?: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecStartupProbeGrpc;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_v2beta1_manifest#http_get DataK8SAppsEmqxIoEmqxV2Beta1Manifest#http_get}
  */
  readonly httpGet?: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecStartupProbeHttpGet;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_v2beta1_manifest#initial_delay_seconds DataK8SAppsEmqxIoEmqxV2Beta1Manifest#initial_delay_seconds}
  */
  readonly initialDelaySeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_v2beta1_manifest#period_seconds DataK8SAppsEmqxIoEmqxV2Beta1Manifest#period_seconds}
  */
  readonly periodSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_v2beta1_manifest#success_threshold DataK8SAppsEmqxIoEmqxV2Beta1Manifest#success_threshold}
  */
  readonly successThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_v2beta1_manifest#tcp_socket DataK8SAppsEmqxIoEmqxV2Beta1Manifest#tcp_socket}
  */
  readonly tcpSocket?: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecStartupProbeTcpSocket;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_v2beta1_manifest#termination_grace_period_seconds DataK8SAppsEmqxIoEmqxV2Beta1Manifest#termination_grace_period_seconds}
  */
  readonly terminationGracePeriodSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_v2beta1_manifest#timeout_seconds DataK8SAppsEmqxIoEmqxV2Beta1Manifest#timeout_seconds}
  */
  readonly timeoutSeconds?: number;
}

export function dataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecStartupProbeToTerraform(struct?: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecStartupProbe | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exec: dataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecStartupProbeExecToTerraform(struct!.exec),
    failure_threshold: cdktf.numberToTerraform(struct!.failureThreshold),
    grpc: dataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecStartupProbeGrpcToTerraform(struct!.grpc),
    http_get: dataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecStartupProbeHttpGetToTerraform(struct!.httpGet),
    initial_delay_seconds: cdktf.numberToTerraform(struct!.initialDelaySeconds),
    period_seconds: cdktf.numberToTerraform(struct!.periodSeconds),
    success_threshold: cdktf.numberToTerraform(struct!.successThreshold),
    tcp_socket: dataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecStartupProbeTcpSocketToTerraform(struct!.tcpSocket),
    termination_grace_period_seconds: cdktf.numberToTerraform(struct!.terminationGracePeriodSeconds),
    timeout_seconds: cdktf.numberToTerraform(struct!.timeoutSeconds),
  }
}


export function dataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecStartupProbeToHclTerraform(struct?: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecStartupProbe | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exec: {
      value: dataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecStartupProbeExecToHclTerraform(struct!.exec),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecStartupProbeExec",
    },
    failure_threshold: {
      value: cdktf.numberToHclTerraform(struct!.failureThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    grpc: {
      value: dataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecStartupProbeGrpcToHclTerraform(struct!.grpc),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecStartupProbeGrpc",
    },
    http_get: {
      value: dataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecStartupProbeHttpGetToHclTerraform(struct!.httpGet),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecStartupProbeHttpGet",
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
      value: dataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecStartupProbeTcpSocketToHclTerraform(struct!.tcpSocket),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecStartupProbeTcpSocket",
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

export class DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecStartupProbeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecStartupProbe | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecStartupProbe | cdktf.IResolvable | undefined) {
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
  private _exec = new DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecStartupProbeExecOutputReference(this, "exec");
  public get exec() {
    return this._exec;
  }
  public putExec(value: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecStartupProbeExec) {
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
  private _grpc = new DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecStartupProbeGrpcOutputReference(this, "grpc");
  public get grpc() {
    return this._grpc;
  }
  public putGrpc(value: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecStartupProbeGrpc) {
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
  private _httpGet = new DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecStartupProbeHttpGetOutputReference(this, "http_get");
  public get httpGet() {
    return this._httpGet;
  }
  public putHttpGet(value: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecStartupProbeHttpGet) {
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
  private _tcpSocket = new DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecStartupProbeTcpSocketOutputReference(this, "tcp_socket");
  public get tcpSocket() {
    return this._tcpSocket;
  }
  public putTcpSocket(value: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecStartupProbeTcpSocket) {
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
export interface DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecToleRations {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_v2beta1_manifest#effect DataK8SAppsEmqxIoEmqxV2Beta1Manifest#effect}
  */
  readonly effect?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_v2beta1_manifest#key DataK8SAppsEmqxIoEmqxV2Beta1Manifest#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_v2beta1_manifest#operator DataK8SAppsEmqxIoEmqxV2Beta1Manifest#operator}
  */
  readonly operator?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_v2beta1_manifest#toleration_seconds DataK8SAppsEmqxIoEmqxV2Beta1Manifest#toleration_seconds}
  */
  readonly tolerationSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_v2beta1_manifest#value DataK8SAppsEmqxIoEmqxV2Beta1Manifest#value}
  */
  readonly value?: string;
}

export function dataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecToleRationsToTerraform(struct?: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecToleRations | cdktf.IResolvable): any {
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


export function dataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecToleRationsToHclTerraform(struct?: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecToleRations | cdktf.IResolvable): any {
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

export class DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecToleRationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecToleRations | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecToleRations | cdktf.IResolvable | undefined) {
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

export class DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecToleRationsList extends cdktf.ComplexList {
  public internalValue? : DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecToleRations[] | cdktf.IResolvable

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
  public get(index: number): DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecToleRationsOutputReference {
    return new DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecToleRationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecTolerations {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_v2beta1_manifest#effect DataK8SAppsEmqxIoEmqxV2Beta1Manifest#effect}
  */
  readonly effect?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_v2beta1_manifest#key DataK8SAppsEmqxIoEmqxV2Beta1Manifest#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_v2beta1_manifest#operator DataK8SAppsEmqxIoEmqxV2Beta1Manifest#operator}
  */
  readonly operator?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_v2beta1_manifest#toleration_seconds DataK8SAppsEmqxIoEmqxV2Beta1Manifest#toleration_seconds}
  */
  readonly tolerationSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_v2beta1_manifest#value DataK8SAppsEmqxIoEmqxV2Beta1Manifest#value}
  */
  readonly value?: string;
}

export function dataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecTolerationsToTerraform(struct?: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecTolerations | cdktf.IResolvable): any {
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


export function dataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecTolerationsToHclTerraform(struct?: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecTolerations | cdktf.IResolvable): any {
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

export class DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecTolerationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecTolerations | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecTolerations | cdktf.IResolvable | undefined) {
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

export class DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecTolerationsList extends cdktf.ComplexList {
  public internalValue? : DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecTolerations[] | cdktf.IResolvable

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
  public get(index: number): DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecTolerationsOutputReference {
    return new DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecTolerationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecTopologySpreadConstraintsLabelSelectorMatchExpressions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_v2beta1_manifest#key DataK8SAppsEmqxIoEmqxV2Beta1Manifest#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_v2beta1_manifest#operator DataK8SAppsEmqxIoEmqxV2Beta1Manifest#operator}
  */
  readonly operator: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_v2beta1_manifest#values DataK8SAppsEmqxIoEmqxV2Beta1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecTopologySpreadConstraintsLabelSelectorMatchExpressionsToTerraform(struct?: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecTopologySpreadConstraintsLabelSelectorMatchExpressions | cdktf.IResolvable): any {
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


export function dataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecTopologySpreadConstraintsLabelSelectorMatchExpressionsToHclTerraform(struct?: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecTopologySpreadConstraintsLabelSelectorMatchExpressions | cdktf.IResolvable): any {
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

export class DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecTopologySpreadConstraintsLabelSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecTopologySpreadConstraintsLabelSelectorMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecTopologySpreadConstraintsLabelSelectorMatchExpressions | cdktf.IResolvable | undefined) {
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

export class DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecTopologySpreadConstraintsLabelSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecTopologySpreadConstraintsLabelSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecTopologySpreadConstraintsLabelSelectorMatchExpressionsOutputReference {
    return new DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecTopologySpreadConstraintsLabelSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecTopologySpreadConstraintsLabelSelector {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_v2beta1_manifest#match_expressions DataK8SAppsEmqxIoEmqxV2Beta1Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecTopologySpreadConstraintsLabelSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_v2beta1_manifest#match_labels DataK8SAppsEmqxIoEmqxV2Beta1Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecTopologySpreadConstraintsLabelSelectorToTerraform(struct?: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecTopologySpreadConstraintsLabelSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecTopologySpreadConstraintsLabelSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecTopologySpreadConstraintsLabelSelectorToHclTerraform(struct?: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecTopologySpreadConstraintsLabelSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecTopologySpreadConstraintsLabelSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecTopologySpreadConstraintsLabelSelectorMatchExpressionsList",
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

export class DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecTopologySpreadConstraintsLabelSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecTopologySpreadConstraintsLabelSelector | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecTopologySpreadConstraintsLabelSelector | cdktf.IResolvable | undefined) {
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
  private _matchExpressions = new DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecTopologySpreadConstraintsLabelSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecTopologySpreadConstraintsLabelSelectorMatchExpressions[] | cdktf.IResolvable) {
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
export interface DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecTopologySpreadConstraints {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_v2beta1_manifest#label_selector DataK8SAppsEmqxIoEmqxV2Beta1Manifest#label_selector}
  */
  readonly labelSelector?: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecTopologySpreadConstraintsLabelSelector;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_v2beta1_manifest#match_label_keys DataK8SAppsEmqxIoEmqxV2Beta1Manifest#match_label_keys}
  */
  readonly matchLabelKeys?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_v2beta1_manifest#max_skew DataK8SAppsEmqxIoEmqxV2Beta1Manifest#max_skew}
  */
  readonly maxSkew: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_v2beta1_manifest#min_domains DataK8SAppsEmqxIoEmqxV2Beta1Manifest#min_domains}
  */
  readonly minDomains?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_v2beta1_manifest#node_affinity_policy DataK8SAppsEmqxIoEmqxV2Beta1Manifest#node_affinity_policy}
  */
  readonly nodeAffinityPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_v2beta1_manifest#node_taints_policy DataK8SAppsEmqxIoEmqxV2Beta1Manifest#node_taints_policy}
  */
  readonly nodeTaintsPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_v2beta1_manifest#topology_key DataK8SAppsEmqxIoEmqxV2Beta1Manifest#topology_key}
  */
  readonly topologyKey: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_v2beta1_manifest#when_unsatisfiable DataK8SAppsEmqxIoEmqxV2Beta1Manifest#when_unsatisfiable}
  */
  readonly whenUnsatisfiable: string;
}

export function dataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecTopologySpreadConstraintsToTerraform(struct?: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecTopologySpreadConstraints | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    label_selector: dataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecTopologySpreadConstraintsLabelSelectorToTerraform(struct!.labelSelector),
    match_label_keys: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.matchLabelKeys),
    max_skew: cdktf.numberToTerraform(struct!.maxSkew),
    min_domains: cdktf.numberToTerraform(struct!.minDomains),
    node_affinity_policy: cdktf.stringToTerraform(struct!.nodeAffinityPolicy),
    node_taints_policy: cdktf.stringToTerraform(struct!.nodeTaintsPolicy),
    topology_key: cdktf.stringToTerraform(struct!.topologyKey),
    when_unsatisfiable: cdktf.stringToTerraform(struct!.whenUnsatisfiable),
  }
}


export function dataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecTopologySpreadConstraintsToHclTerraform(struct?: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecTopologySpreadConstraints | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    label_selector: {
      value: dataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecTopologySpreadConstraintsLabelSelectorToHclTerraform(struct!.labelSelector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecTopologySpreadConstraintsLabelSelector",
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

export class DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecTopologySpreadConstraintsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecTopologySpreadConstraints | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecTopologySpreadConstraints | cdktf.IResolvable | undefined) {
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
  private _labelSelector = new DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecTopologySpreadConstraintsLabelSelectorOutputReference(this, "label_selector");
  public get labelSelector() {
    return this._labelSelector;
  }
  public putLabelSelector(value: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecTopologySpreadConstraintsLabelSelector) {
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

export class DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecTopologySpreadConstraintsList extends cdktf.ComplexList {
  public internalValue? : DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecTopologySpreadConstraints[] | cdktf.IResolvable

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
  public get(index: number): DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecTopologySpreadConstraintsOutputReference {
    return new DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecTopologySpreadConstraintsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpec {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_v2beta1_manifest#affinity DataK8SAppsEmqxIoEmqxV2Beta1Manifest#affinity}
  */
  readonly affinity?: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecAffinity;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_v2beta1_manifest#args DataK8SAppsEmqxIoEmqxV2Beta1Manifest#args}
  */
  readonly args?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_v2beta1_manifest#command DataK8SAppsEmqxIoEmqxV2Beta1Manifest#command}
  */
  readonly command?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_v2beta1_manifest#container_security_context DataK8SAppsEmqxIoEmqxV2Beta1Manifest#container_security_context}
  */
  readonly containerSecurityContext?: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecContainerSecurityContext;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_v2beta1_manifest#env DataK8SAppsEmqxIoEmqxV2Beta1Manifest#env}
  */
  readonly env?: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecEnv[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_v2beta1_manifest#env_from DataK8SAppsEmqxIoEmqxV2Beta1Manifest#env_from}
  */
  readonly envFrom?: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecEnvFrom[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_v2beta1_manifest#extra_containers DataK8SAppsEmqxIoEmqxV2Beta1Manifest#extra_containers}
  */
  readonly extraContainers?: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecExtraContainers[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_v2beta1_manifest#extra_volume_mounts DataK8SAppsEmqxIoEmqxV2Beta1Manifest#extra_volume_mounts}
  */
  readonly extraVolumeMounts?: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecExtraVolumeMounts[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_v2beta1_manifest#extra_volumes DataK8SAppsEmqxIoEmqxV2Beta1Manifest#extra_volumes}
  */
  readonly extraVolumes?: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecExtraVolumes[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_v2beta1_manifest#init_containers DataK8SAppsEmqxIoEmqxV2Beta1Manifest#init_containers}
  */
  readonly initContainers?: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainers[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_v2beta1_manifest#lifecycle DataK8SAppsEmqxIoEmqxV2Beta1Manifest#lifecycle}
  */
  readonly lifecycle?: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecLifecycle;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_v2beta1_manifest#liveness_probe DataK8SAppsEmqxIoEmqxV2Beta1Manifest#liveness_probe}
  */
  readonly livenessProbe?: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecLivenessProbe;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_v2beta1_manifest#node_name DataK8SAppsEmqxIoEmqxV2Beta1Manifest#node_name}
  */
  readonly nodeName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_v2beta1_manifest#node_selector DataK8SAppsEmqxIoEmqxV2Beta1Manifest#node_selector}
  */
  readonly nodeSelector?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_v2beta1_manifest#pod_security_context DataK8SAppsEmqxIoEmqxV2Beta1Manifest#pod_security_context}
  */
  readonly podSecurityContext?: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecPodSecurityContext;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_v2beta1_manifest#ports DataK8SAppsEmqxIoEmqxV2Beta1Manifest#ports}
  */
  readonly ports?: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecPorts[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_v2beta1_manifest#readiness_probe DataK8SAppsEmqxIoEmqxV2Beta1Manifest#readiness_probe}
  */
  readonly readinessProbe?: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecReadinessProbe;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_v2beta1_manifest#replicas DataK8SAppsEmqxIoEmqxV2Beta1Manifest#replicas}
  */
  readonly replicas?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_v2beta1_manifest#resources DataK8SAppsEmqxIoEmqxV2Beta1Manifest#resources}
  */
  readonly resources?: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecResources;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_v2beta1_manifest#startup_probe DataK8SAppsEmqxIoEmqxV2Beta1Manifest#startup_probe}
  */
  readonly startupProbe?: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecStartupProbe;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_v2beta1_manifest#tole_rations DataK8SAppsEmqxIoEmqxV2Beta1Manifest#tole_rations}
  */
  readonly toleRations?: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecToleRations[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_v2beta1_manifest#tolerations DataK8SAppsEmqxIoEmqxV2Beta1Manifest#tolerations}
  */
  readonly tolerations?: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecTolerations[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_v2beta1_manifest#topology_spread_constraints DataK8SAppsEmqxIoEmqxV2Beta1Manifest#topology_spread_constraints}
  */
  readonly topologySpreadConstraints?: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecTopologySpreadConstraints[] | cdktf.IResolvable;
}

export function dataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecToTerraform(struct?: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    affinity: dataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecAffinityToTerraform(struct!.affinity),
    args: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.args),
    command: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.command),
    container_security_context: dataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecContainerSecurityContextToTerraform(struct!.containerSecurityContext),
    env: cdktf.listMapper(dataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecEnvToTerraform, false)(struct!.env),
    env_from: cdktf.listMapper(dataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecEnvFromToTerraform, false)(struct!.envFrom),
    extra_containers: cdktf.listMapper(dataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecExtraContainersToTerraform, false)(struct!.extraContainers),
    extra_volume_mounts: cdktf.listMapper(dataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecExtraVolumeMountsToTerraform, false)(struct!.extraVolumeMounts),
    extra_volumes: cdktf.listMapper(dataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecExtraVolumesToTerraform, false)(struct!.extraVolumes),
    init_containers: cdktf.listMapper(dataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersToTerraform, false)(struct!.initContainers),
    lifecycle: dataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecLifecycleToTerraform(struct!.lifecycle),
    liveness_probe: dataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecLivenessProbeToTerraform(struct!.livenessProbe),
    node_name: cdktf.stringToTerraform(struct!.nodeName),
    node_selector: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.nodeSelector),
    pod_security_context: dataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecPodSecurityContextToTerraform(struct!.podSecurityContext),
    ports: cdktf.listMapper(dataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecPortsToTerraform, false)(struct!.ports),
    readiness_probe: dataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecReadinessProbeToTerraform(struct!.readinessProbe),
    replicas: cdktf.numberToTerraform(struct!.replicas),
    resources: dataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecResourcesToTerraform(struct!.resources),
    startup_probe: dataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecStartupProbeToTerraform(struct!.startupProbe),
    tole_rations: cdktf.listMapper(dataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecToleRationsToTerraform, false)(struct!.toleRations),
    tolerations: cdktf.listMapper(dataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecTolerationsToTerraform, false)(struct!.tolerations),
    topology_spread_constraints: cdktf.listMapper(dataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecTopologySpreadConstraintsToTerraform, false)(struct!.topologySpreadConstraints),
  }
}


export function dataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecToHclTerraform(struct?: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    affinity: {
      value: dataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecAffinityToHclTerraform(struct!.affinity),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecAffinity",
    },
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
    container_security_context: {
      value: dataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecContainerSecurityContextToHclTerraform(struct!.containerSecurityContext),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecContainerSecurityContext",
    },
    env: {
      value: cdktf.listMapperHcl(dataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecEnvToHclTerraform, false)(struct!.env),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecEnvList",
    },
    env_from: {
      value: cdktf.listMapperHcl(dataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecEnvFromToHclTerraform, false)(struct!.envFrom),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecEnvFromList",
    },
    extra_containers: {
      value: cdktf.listMapperHcl(dataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecExtraContainersToHclTerraform, false)(struct!.extraContainers),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecExtraContainersList",
    },
    extra_volume_mounts: {
      value: cdktf.listMapperHcl(dataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecExtraVolumeMountsToHclTerraform, false)(struct!.extraVolumeMounts),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecExtraVolumeMountsList",
    },
    extra_volumes: {
      value: cdktf.listMapperHcl(dataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecExtraVolumesToHclTerraform, false)(struct!.extraVolumes),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecExtraVolumesList",
    },
    init_containers: {
      value: cdktf.listMapperHcl(dataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersToHclTerraform, false)(struct!.initContainers),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersList",
    },
    lifecycle: {
      value: dataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecLifecycleToHclTerraform(struct!.lifecycle),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecLifecycle",
    },
    liveness_probe: {
      value: dataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecLivenessProbeToHclTerraform(struct!.livenessProbe),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecLivenessProbe",
    },
    node_name: {
      value: cdktf.stringToHclTerraform(struct!.nodeName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    node_selector: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.nodeSelector),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    pod_security_context: {
      value: dataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecPodSecurityContextToHclTerraform(struct!.podSecurityContext),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecPodSecurityContext",
    },
    ports: {
      value: cdktf.listMapperHcl(dataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecPortsToHclTerraform, false)(struct!.ports),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecPortsList",
    },
    readiness_probe: {
      value: dataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecReadinessProbeToHclTerraform(struct!.readinessProbe),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecReadinessProbe",
    },
    replicas: {
      value: cdktf.numberToHclTerraform(struct!.replicas),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    resources: {
      value: dataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecResourcesToHclTerraform(struct!.resources),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecResources",
    },
    startup_probe: {
      value: dataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecStartupProbeToHclTerraform(struct!.startupProbe),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecStartupProbe",
    },
    tole_rations: {
      value: cdktf.listMapperHcl(dataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecToleRationsToHclTerraform, false)(struct!.toleRations),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecToleRationsList",
    },
    tolerations: {
      value: cdktf.listMapperHcl(dataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecTolerationsToHclTerraform, false)(struct!.tolerations),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecTolerationsList",
    },
    topology_spread_constraints: {
      value: cdktf.listMapperHcl(dataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecTopologySpreadConstraintsToHclTerraform, false)(struct!.topologySpreadConstraints),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecTopologySpreadConstraintsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._affinity?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.affinity = this._affinity?.internalValue;
    }
    if (this._args !== undefined) {
      hasAnyValues = true;
      internalValueResult.args = this._args;
    }
    if (this._command !== undefined) {
      hasAnyValues = true;
      internalValueResult.command = this._command;
    }
    if (this._containerSecurityContext?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerSecurityContext = this._containerSecurityContext?.internalValue;
    }
    if (this._env?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.env = this._env?.internalValue;
    }
    if (this._envFrom?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.envFrom = this._envFrom?.internalValue;
    }
    if (this._extraContainers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.extraContainers = this._extraContainers?.internalValue;
    }
    if (this._extraVolumeMounts?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.extraVolumeMounts = this._extraVolumeMounts?.internalValue;
    }
    if (this._extraVolumes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.extraVolumes = this._extraVolumes?.internalValue;
    }
    if (this._initContainers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.initContainers = this._initContainers?.internalValue;
    }
    if (this._lifecycle?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.lifecycle = this._lifecycle?.internalValue;
    }
    if (this._livenessProbe?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.livenessProbe = this._livenessProbe?.internalValue;
    }
    if (this._nodeName !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeName = this._nodeName;
    }
    if (this._nodeSelector !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeSelector = this._nodeSelector;
    }
    if (this._podSecurityContext?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.podSecurityContext = this._podSecurityContext?.internalValue;
    }
    if (this._ports?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ports = this._ports?.internalValue;
    }
    if (this._readinessProbe?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.readinessProbe = this._readinessProbe?.internalValue;
    }
    if (this._replicas !== undefined) {
      hasAnyValues = true;
      internalValueResult.replicas = this._replicas;
    }
    if (this._resources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resources = this._resources?.internalValue;
    }
    if (this._startupProbe?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.startupProbe = this._startupProbe?.internalValue;
    }
    if (this._toleRations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.toleRations = this._toleRations?.internalValue;
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

  public set internalValue(value: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._affinity.internalValue = undefined;
      this._args = undefined;
      this._command = undefined;
      this._containerSecurityContext.internalValue = undefined;
      this._env.internalValue = undefined;
      this._envFrom.internalValue = undefined;
      this._extraContainers.internalValue = undefined;
      this._extraVolumeMounts.internalValue = undefined;
      this._extraVolumes.internalValue = undefined;
      this._initContainers.internalValue = undefined;
      this._lifecycle.internalValue = undefined;
      this._livenessProbe.internalValue = undefined;
      this._nodeName = undefined;
      this._nodeSelector = undefined;
      this._podSecurityContext.internalValue = undefined;
      this._ports.internalValue = undefined;
      this._readinessProbe.internalValue = undefined;
      this._replicas = undefined;
      this._resources.internalValue = undefined;
      this._startupProbe.internalValue = undefined;
      this._toleRations.internalValue = undefined;
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
      this._args = value.args;
      this._command = value.command;
      this._containerSecurityContext.internalValue = value.containerSecurityContext;
      this._env.internalValue = value.env;
      this._envFrom.internalValue = value.envFrom;
      this._extraContainers.internalValue = value.extraContainers;
      this._extraVolumeMounts.internalValue = value.extraVolumeMounts;
      this._extraVolumes.internalValue = value.extraVolumes;
      this._initContainers.internalValue = value.initContainers;
      this._lifecycle.internalValue = value.lifecycle;
      this._livenessProbe.internalValue = value.livenessProbe;
      this._nodeName = value.nodeName;
      this._nodeSelector = value.nodeSelector;
      this._podSecurityContext.internalValue = value.podSecurityContext;
      this._ports.internalValue = value.ports;
      this._readinessProbe.internalValue = value.readinessProbe;
      this._replicas = value.replicas;
      this._resources.internalValue = value.resources;
      this._startupProbe.internalValue = value.startupProbe;
      this._toleRations.internalValue = value.toleRations;
      this._tolerations.internalValue = value.tolerations;
      this._topologySpreadConstraints.internalValue = value.topologySpreadConstraints;
    }
  }

  // affinity - computed: false, optional: true, required: false
  private _affinity = new DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecAffinityOutputReference(this, "affinity");
  public get affinity() {
    return this._affinity;
  }
  public putAffinity(value: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecAffinity) {
    this._affinity.internalValue = value;
  }
  public resetAffinity() {
    this._affinity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get affinityInput() {
    return this._affinity.internalValue;
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

  // container_security_context - computed: false, optional: true, required: false
  private _containerSecurityContext = new DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecContainerSecurityContextOutputReference(this, "container_security_context");
  public get containerSecurityContext() {
    return this._containerSecurityContext;
  }
  public putContainerSecurityContext(value: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecContainerSecurityContext) {
    this._containerSecurityContext.internalValue = value;
  }
  public resetContainerSecurityContext() {
    this._containerSecurityContext.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerSecurityContextInput() {
    return this._containerSecurityContext.internalValue;
  }

  // env - computed: false, optional: true, required: false
  private _env = new DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecEnvList(this, "env", false);
  public get env() {
    return this._env;
  }
  public putEnv(value: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecEnv[] | cdktf.IResolvable) {
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
  private _envFrom = new DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecEnvFromList(this, "env_from", false);
  public get envFrom() {
    return this._envFrom;
  }
  public putEnvFrom(value: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecEnvFrom[] | cdktf.IResolvable) {
    this._envFrom.internalValue = value;
  }
  public resetEnvFrom() {
    this._envFrom.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get envFromInput() {
    return this._envFrom.internalValue;
  }

  // extra_containers - computed: false, optional: true, required: false
  private _extraContainers = new DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecExtraContainersList(this, "extra_containers", false);
  public get extraContainers() {
    return this._extraContainers;
  }
  public putExtraContainers(value: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecExtraContainers[] | cdktf.IResolvable) {
    this._extraContainers.internalValue = value;
  }
  public resetExtraContainers() {
    this._extraContainers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extraContainersInput() {
    return this._extraContainers.internalValue;
  }

  // extra_volume_mounts - computed: false, optional: true, required: false
  private _extraVolumeMounts = new DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecExtraVolumeMountsList(this, "extra_volume_mounts", false);
  public get extraVolumeMounts() {
    return this._extraVolumeMounts;
  }
  public putExtraVolumeMounts(value: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecExtraVolumeMounts[] | cdktf.IResolvable) {
    this._extraVolumeMounts.internalValue = value;
  }
  public resetExtraVolumeMounts() {
    this._extraVolumeMounts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extraVolumeMountsInput() {
    return this._extraVolumeMounts.internalValue;
  }

  // extra_volumes - computed: false, optional: true, required: false
  private _extraVolumes = new DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecExtraVolumesList(this, "extra_volumes", false);
  public get extraVolumes() {
    return this._extraVolumes;
  }
  public putExtraVolumes(value: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecExtraVolumes[] | cdktf.IResolvable) {
    this._extraVolumes.internalValue = value;
  }
  public resetExtraVolumes() {
    this._extraVolumes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extraVolumesInput() {
    return this._extraVolumes.internalValue;
  }

  // init_containers - computed: false, optional: true, required: false
  private _initContainers = new DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainersList(this, "init_containers", false);
  public get initContainers() {
    return this._initContainers;
  }
  public putInitContainers(value: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecInitContainers[] | cdktf.IResolvable) {
    this._initContainers.internalValue = value;
  }
  public resetInitContainers() {
    this._initContainers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initContainersInput() {
    return this._initContainers.internalValue;
  }

  // lifecycle - computed: false, optional: true, required: false
  private _lifecycle = new DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecLifecycleOutputReference(this, "lifecycle");
  public get lifecycle() {
    return this._lifecycle;
  }
  public putLifecycle(value: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecLifecycle) {
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
  private _livenessProbe = new DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecLivenessProbeOutputReference(this, "liveness_probe");
  public get livenessProbe() {
    return this._livenessProbe;
  }
  public putLivenessProbe(value: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecLivenessProbe) {
    this._livenessProbe.internalValue = value;
  }
  public resetLivenessProbe() {
    this._livenessProbe.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get livenessProbeInput() {
    return this._livenessProbe.internalValue;
  }

  // node_name - computed: false, optional: true, required: false
  private _nodeName?: string; 
  public get nodeName() {
    return this.getStringAttribute('node_name');
  }
  public set nodeName(value: string) {
    this._nodeName = value;
  }
  public resetNodeName() {
    this._nodeName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeNameInput() {
    return this._nodeName;
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

  // pod_security_context - computed: false, optional: true, required: false
  private _podSecurityContext = new DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecPodSecurityContextOutputReference(this, "pod_security_context");
  public get podSecurityContext() {
    return this._podSecurityContext;
  }
  public putPodSecurityContext(value: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecPodSecurityContext) {
    this._podSecurityContext.internalValue = value;
  }
  public resetPodSecurityContext() {
    this._podSecurityContext.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podSecurityContextInput() {
    return this._podSecurityContext.internalValue;
  }

  // ports - computed: false, optional: true, required: false
  private _ports = new DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecPortsList(this, "ports", false);
  public get ports() {
    return this._ports;
  }
  public putPorts(value: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecPorts[] | cdktf.IResolvable) {
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
  private _readinessProbe = new DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecReadinessProbeOutputReference(this, "readiness_probe");
  public get readinessProbe() {
    return this._readinessProbe;
  }
  public putReadinessProbe(value: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecReadinessProbe) {
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

  // resources - computed: false, optional: true, required: false
  private _resources = new DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecResourcesOutputReference(this, "resources");
  public get resources() {
    return this._resources;
  }
  public putResources(value: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecResources) {
    this._resources.internalValue = value;
  }
  public resetResources() {
    this._resources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesInput() {
    return this._resources.internalValue;
  }

  // startup_probe - computed: false, optional: true, required: false
  private _startupProbe = new DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecStartupProbeOutputReference(this, "startup_probe");
  public get startupProbe() {
    return this._startupProbe;
  }
  public putStartupProbe(value: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecStartupProbe) {
    this._startupProbe.internalValue = value;
  }
  public resetStartupProbe() {
    this._startupProbe.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startupProbeInput() {
    return this._startupProbe.internalValue;
  }

  // tole_rations - computed: false, optional: true, required: false
  private _toleRations = new DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecToleRationsList(this, "tole_rations", false);
  public get toleRations() {
    return this._toleRations;
  }
  public putToleRations(value: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecToleRations[] | cdktf.IResolvable) {
    this._toleRations.internalValue = value;
  }
  public resetToleRations() {
    this._toleRations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get toleRationsInput() {
    return this._toleRations.internalValue;
  }

  // tolerations - computed: false, optional: true, required: false
  private _tolerations = new DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecTolerationsList(this, "tolerations", false);
  public get tolerations() {
    return this._tolerations;
  }
  public putTolerations(value: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecTolerations[] | cdktf.IResolvable) {
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
  private _topologySpreadConstraints = new DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecTopologySpreadConstraintsList(this, "topology_spread_constraints", false);
  public get topologySpreadConstraints() {
    return this._topologySpreadConstraints;
  }
  public putTopologySpreadConstraints(value: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecTopologySpreadConstraints[] | cdktf.IResolvable) {
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
export interface DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplate {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_v2beta1_manifest#metadata DataK8SAppsEmqxIoEmqxV2Beta1Manifest#metadata}
  */
  readonly metadata?: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateMetadata;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_v2beta1_manifest#spec DataK8SAppsEmqxIoEmqxV2Beta1Manifest#spec}
  */
  readonly spec?: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpec;
}

export function dataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateToTerraform(struct?: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metadata: dataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateMetadataToTerraform(struct!.metadata),
    spec: dataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecToTerraform(struct!.spec),
  }
}


export function dataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateToHclTerraform(struct?: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    metadata: {
      value: dataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateMetadataToHclTerraform(struct!.metadata),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateMetadata",
    },
    spec: {
      value: dataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecToHclTerraform(struct!.spec),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpec",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplate | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metadata?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadata = this._metadata?.internalValue;
    }
    if (this._spec?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.spec = this._spec?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplate | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._metadata.internalValue = undefined;
      this._spec.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._metadata.internalValue = value.metadata;
      this._spec.internalValue = value.spec;
    }
  }

  // metadata - computed: false, optional: true, required: false
  private _metadata = new DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateMetadata) {
    this._metadata.internalValue = value;
  }
  public resetMetadata() {
    this._metadata.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateSpec) {
    this._spec.internalValue = value;
  }
  public resetSpec() {
    this._spec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get specInput() {
    return this._spec.internalValue;
  }
}
export interface DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecUpdateStrategyEvacuationStrategy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_v2beta1_manifest#conn_evict_rate DataK8SAppsEmqxIoEmqxV2Beta1Manifest#conn_evict_rate}
  */
  readonly connEvictRate?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_v2beta1_manifest#sess_evict_rate DataK8SAppsEmqxIoEmqxV2Beta1Manifest#sess_evict_rate}
  */
  readonly sessEvictRate?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_v2beta1_manifest#wait_takeover DataK8SAppsEmqxIoEmqxV2Beta1Manifest#wait_takeover}
  */
  readonly waitTakeover?: number;
}

export function dataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecUpdateStrategyEvacuationStrategyToTerraform(struct?: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecUpdateStrategyEvacuationStrategy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    conn_evict_rate: cdktf.numberToTerraform(struct!.connEvictRate),
    sess_evict_rate: cdktf.numberToTerraform(struct!.sessEvictRate),
    wait_takeover: cdktf.numberToTerraform(struct!.waitTakeover),
  }
}


export function dataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecUpdateStrategyEvacuationStrategyToHclTerraform(struct?: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecUpdateStrategyEvacuationStrategy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    conn_evict_rate: {
      value: cdktf.numberToHclTerraform(struct!.connEvictRate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sess_evict_rate: {
      value: cdktf.numberToHclTerraform(struct!.sessEvictRate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    wait_takeover: {
      value: cdktf.numberToHclTerraform(struct!.waitTakeover),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecUpdateStrategyEvacuationStrategyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecUpdateStrategyEvacuationStrategy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._connEvictRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.connEvictRate = this._connEvictRate;
    }
    if (this._sessEvictRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessEvictRate = this._sessEvictRate;
    }
    if (this._waitTakeover !== undefined) {
      hasAnyValues = true;
      internalValueResult.waitTakeover = this._waitTakeover;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecUpdateStrategyEvacuationStrategy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._connEvictRate = undefined;
      this._sessEvictRate = undefined;
      this._waitTakeover = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._connEvictRate = value.connEvictRate;
      this._sessEvictRate = value.sessEvictRate;
      this._waitTakeover = value.waitTakeover;
    }
  }

  // conn_evict_rate - computed: false, optional: true, required: false
  private _connEvictRate?: number; 
  public get connEvictRate() {
    return this.getNumberAttribute('conn_evict_rate');
  }
  public set connEvictRate(value: number) {
    this._connEvictRate = value;
  }
  public resetConnEvictRate() {
    this._connEvictRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connEvictRateInput() {
    return this._connEvictRate;
  }

  // sess_evict_rate - computed: false, optional: true, required: false
  private _sessEvictRate?: number; 
  public get sessEvictRate() {
    return this.getNumberAttribute('sess_evict_rate');
  }
  public set sessEvictRate(value: number) {
    this._sessEvictRate = value;
  }
  public resetSessEvictRate() {
    this._sessEvictRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessEvictRateInput() {
    return this._sessEvictRate;
  }

  // wait_takeover - computed: false, optional: true, required: false
  private _waitTakeover?: number; 
  public get waitTakeover() {
    return this.getNumberAttribute('wait_takeover');
  }
  public set waitTakeover(value: number) {
    this._waitTakeover = value;
  }
  public resetWaitTakeover() {
    this._waitTakeover = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get waitTakeoverInput() {
    return this._waitTakeover;
  }
}
export interface DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecUpdateStrategy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_v2beta1_manifest#evacuation_strategy DataK8SAppsEmqxIoEmqxV2Beta1Manifest#evacuation_strategy}
  */
  readonly evacuationStrategy?: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecUpdateStrategyEvacuationStrategy;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_v2beta1_manifest#initial_delay_seconds DataK8SAppsEmqxIoEmqxV2Beta1Manifest#initial_delay_seconds}
  */
  readonly initialDelaySeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_v2beta1_manifest#type DataK8SAppsEmqxIoEmqxV2Beta1Manifest#type}
  */
  readonly type?: string;
}

export function dataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecUpdateStrategyToTerraform(struct?: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecUpdateStrategy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    evacuation_strategy: dataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecUpdateStrategyEvacuationStrategyToTerraform(struct!.evacuationStrategy),
    initial_delay_seconds: cdktf.numberToTerraform(struct!.initialDelaySeconds),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecUpdateStrategyToHclTerraform(struct?: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecUpdateStrategy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    evacuation_strategy: {
      value: dataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecUpdateStrategyEvacuationStrategyToHclTerraform(struct!.evacuationStrategy),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecUpdateStrategyEvacuationStrategy",
    },
    initial_delay_seconds: {
      value: cdktf.numberToHclTerraform(struct!.initialDelaySeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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

export class DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecUpdateStrategyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecUpdateStrategy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._evacuationStrategy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.evacuationStrategy = this._evacuationStrategy?.internalValue;
    }
    if (this._initialDelaySeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.initialDelaySeconds = this._initialDelaySeconds;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecUpdateStrategy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._evacuationStrategy.internalValue = undefined;
      this._initialDelaySeconds = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._evacuationStrategy.internalValue = value.evacuationStrategy;
      this._initialDelaySeconds = value.initialDelaySeconds;
      this._type = value.type;
    }
  }

  // evacuation_strategy - computed: false, optional: true, required: false
  private _evacuationStrategy = new DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecUpdateStrategyEvacuationStrategyOutputReference(this, "evacuation_strategy");
  public get evacuationStrategy() {
    return this._evacuationStrategy;
  }
  public putEvacuationStrategy(value: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecUpdateStrategyEvacuationStrategy) {
    this._evacuationStrategy.internalValue = value;
  }
  public resetEvacuationStrategy() {
    this._evacuationStrategy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get evacuationStrategyInput() {
    return this._evacuationStrategy.internalValue;
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
export interface DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpec {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_v2beta1_manifest#bootstrap_api_keys DataK8SAppsEmqxIoEmqxV2Beta1Manifest#bootstrap_api_keys}
  */
  readonly bootstrapApiKeys?: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecBootstrapApiKeys[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_v2beta1_manifest#cluster_domain DataK8SAppsEmqxIoEmqxV2Beta1Manifest#cluster_domain}
  */
  readonly clusterDomain?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_v2beta1_manifest#config DataK8SAppsEmqxIoEmqxV2Beta1Manifest#config}
  */
  readonly config?: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecConfig;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_v2beta1_manifest#core_template DataK8SAppsEmqxIoEmqxV2Beta1Manifest#core_template}
  */
  readonly coreTemplate?: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecCoreTemplate;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_v2beta1_manifest#dashboard_service_template DataK8SAppsEmqxIoEmqxV2Beta1Manifest#dashboard_service_template}
  */
  readonly dashboardServiceTemplate?: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecDashboardServiceTemplate;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_v2beta1_manifest#image DataK8SAppsEmqxIoEmqxV2Beta1Manifest#image}
  */
  readonly image: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_v2beta1_manifest#image_pull_policy DataK8SAppsEmqxIoEmqxV2Beta1Manifest#image_pull_policy}
  */
  readonly imagePullPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_v2beta1_manifest#image_pull_secrets DataK8SAppsEmqxIoEmqxV2Beta1Manifest#image_pull_secrets}
  */
  readonly imagePullSecrets?: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecImagePullSecrets[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_v2beta1_manifest#listeners_service_template DataK8SAppsEmqxIoEmqxV2Beta1Manifest#listeners_service_template}
  */
  readonly listenersServiceTemplate?: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecListenersServiceTemplate;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_v2beta1_manifest#replicant_template DataK8SAppsEmqxIoEmqxV2Beta1Manifest#replicant_template}
  */
  readonly replicantTemplate?: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplate;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_v2beta1_manifest#revision_history_limit DataK8SAppsEmqxIoEmqxV2Beta1Manifest#revision_history_limit}
  */
  readonly revisionHistoryLimit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_v2beta1_manifest#service_account_name DataK8SAppsEmqxIoEmqxV2Beta1Manifest#service_account_name}
  */
  readonly serviceAccountName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/apps_emqx_io_emqx_v2beta1_manifest#update_strategy DataK8SAppsEmqxIoEmqxV2Beta1Manifest#update_strategy}
  */
  readonly updateStrategy?: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecUpdateStrategy;
}

export function dataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecToTerraform(struct?: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bootstrap_api_keys: cdktf.listMapper(dataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecBootstrapApiKeysToTerraform, false)(struct!.bootstrapApiKeys),
    cluster_domain: cdktf.stringToTerraform(struct!.clusterDomain),
    config: dataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecConfigToTerraform(struct!.config),
    core_template: dataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecCoreTemplateToTerraform(struct!.coreTemplate),
    dashboard_service_template: dataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecDashboardServiceTemplateToTerraform(struct!.dashboardServiceTemplate),
    image: cdktf.stringToTerraform(struct!.image),
    image_pull_policy: cdktf.stringToTerraform(struct!.imagePullPolicy),
    image_pull_secrets: cdktf.listMapper(dataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecImagePullSecretsToTerraform, false)(struct!.imagePullSecrets),
    listeners_service_template: dataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecListenersServiceTemplateToTerraform(struct!.listenersServiceTemplate),
    replicant_template: dataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateToTerraform(struct!.replicantTemplate),
    revision_history_limit: cdktf.numberToTerraform(struct!.revisionHistoryLimit),
    service_account_name: cdktf.stringToTerraform(struct!.serviceAccountName),
    update_strategy: dataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecUpdateStrategyToTerraform(struct!.updateStrategy),
  }
}


export function dataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecToHclTerraform(struct?: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bootstrap_api_keys: {
      value: cdktf.listMapperHcl(dataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecBootstrapApiKeysToHclTerraform, false)(struct!.bootstrapApiKeys),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecBootstrapApiKeysList",
    },
    cluster_domain: {
      value: cdktf.stringToHclTerraform(struct!.clusterDomain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    config: {
      value: dataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecConfigToHclTerraform(struct!.config),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecConfig",
    },
    core_template: {
      value: dataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecCoreTemplateToHclTerraform(struct!.coreTemplate),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecCoreTemplate",
    },
    dashboard_service_template: {
      value: dataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecDashboardServiceTemplateToHclTerraform(struct!.dashboardServiceTemplate),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecDashboardServiceTemplate",
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
      value: cdktf.listMapperHcl(dataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecImagePullSecretsToHclTerraform, false)(struct!.imagePullSecrets),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecImagePullSecretsList",
    },
    listeners_service_template: {
      value: dataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecListenersServiceTemplateToHclTerraform(struct!.listenersServiceTemplate),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecListenersServiceTemplate",
    },
    replicant_template: {
      value: dataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateToHclTerraform(struct!.replicantTemplate),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplate",
    },
    revision_history_limit: {
      value: cdktf.numberToHclTerraform(struct!.revisionHistoryLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    service_account_name: {
      value: cdktf.stringToHclTerraform(struct!.serviceAccountName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update_strategy: {
      value: dataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecUpdateStrategyToHclTerraform(struct!.updateStrategy),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecUpdateStrategy",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bootstrapApiKeys?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bootstrapApiKeys = this._bootstrapApiKeys?.internalValue;
    }
    if (this._clusterDomain !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterDomain = this._clusterDomain;
    }
    if (this._config?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.config = this._config?.internalValue;
    }
    if (this._coreTemplate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.coreTemplate = this._coreTemplate?.internalValue;
    }
    if (this._dashboardServiceTemplate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dashboardServiceTemplate = this._dashboardServiceTemplate?.internalValue;
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
    if (this._listenersServiceTemplate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.listenersServiceTemplate = this._listenersServiceTemplate?.internalValue;
    }
    if (this._replicantTemplate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.replicantTemplate = this._replicantTemplate?.internalValue;
    }
    if (this._revisionHistoryLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.revisionHistoryLimit = this._revisionHistoryLimit;
    }
    if (this._serviceAccountName !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccountName = this._serviceAccountName;
    }
    if (this._updateStrategy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.updateStrategy = this._updateStrategy?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bootstrapApiKeys.internalValue = undefined;
      this._clusterDomain = undefined;
      this._config.internalValue = undefined;
      this._coreTemplate.internalValue = undefined;
      this._dashboardServiceTemplate.internalValue = undefined;
      this._image = undefined;
      this._imagePullPolicy = undefined;
      this._imagePullSecrets.internalValue = undefined;
      this._listenersServiceTemplate.internalValue = undefined;
      this._replicantTemplate.internalValue = undefined;
      this._revisionHistoryLimit = undefined;
      this._serviceAccountName = undefined;
      this._updateStrategy.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bootstrapApiKeys.internalValue = value.bootstrapApiKeys;
      this._clusterDomain = value.clusterDomain;
      this._config.internalValue = value.config;
      this._coreTemplate.internalValue = value.coreTemplate;
      this._dashboardServiceTemplate.internalValue = value.dashboardServiceTemplate;
      this._image = value.image;
      this._imagePullPolicy = value.imagePullPolicy;
      this._imagePullSecrets.internalValue = value.imagePullSecrets;
      this._listenersServiceTemplate.internalValue = value.listenersServiceTemplate;
      this._replicantTemplate.internalValue = value.replicantTemplate;
      this._revisionHistoryLimit = value.revisionHistoryLimit;
      this._serviceAccountName = value.serviceAccountName;
      this._updateStrategy.internalValue = value.updateStrategy;
    }
  }

  // bootstrap_api_keys - computed: false, optional: true, required: false
  private _bootstrapApiKeys = new DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecBootstrapApiKeysList(this, "bootstrap_api_keys", false);
  public get bootstrapApiKeys() {
    return this._bootstrapApiKeys;
  }
  public putBootstrapApiKeys(value: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecBootstrapApiKeys[] | cdktf.IResolvable) {
    this._bootstrapApiKeys.internalValue = value;
  }
  public resetBootstrapApiKeys() {
    this._bootstrapApiKeys.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bootstrapApiKeysInput() {
    return this._bootstrapApiKeys.internalValue;
  }

  // cluster_domain - computed: false, optional: true, required: false
  private _clusterDomain?: string; 
  public get clusterDomain() {
    return this.getStringAttribute('cluster_domain');
  }
  public set clusterDomain(value: string) {
    this._clusterDomain = value;
  }
  public resetClusterDomain() {
    this._clusterDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterDomainInput() {
    return this._clusterDomain;
  }

  // config - computed: false, optional: true, required: false
  private _config = new DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecConfigOutputReference(this, "config");
  public get config() {
    return this._config;
  }
  public putConfig(value: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecConfig) {
    this._config.internalValue = value;
  }
  public resetConfig() {
    this._config.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config.internalValue;
  }

  // core_template - computed: false, optional: true, required: false
  private _coreTemplate = new DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecCoreTemplateOutputReference(this, "core_template");
  public get coreTemplate() {
    return this._coreTemplate;
  }
  public putCoreTemplate(value: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecCoreTemplate) {
    this._coreTemplate.internalValue = value;
  }
  public resetCoreTemplate() {
    this._coreTemplate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get coreTemplateInput() {
    return this._coreTemplate.internalValue;
  }

  // dashboard_service_template - computed: false, optional: true, required: false
  private _dashboardServiceTemplate = new DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecDashboardServiceTemplateOutputReference(this, "dashboard_service_template");
  public get dashboardServiceTemplate() {
    return this._dashboardServiceTemplate;
  }
  public putDashboardServiceTemplate(value: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecDashboardServiceTemplate) {
    this._dashboardServiceTemplate.internalValue = value;
  }
  public resetDashboardServiceTemplate() {
    this._dashboardServiceTemplate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dashboardServiceTemplateInput() {
    return this._dashboardServiceTemplate.internalValue;
  }

  // image - computed: false, optional: false, required: true
  private _image?: string; 
  public get image() {
    return this.getStringAttribute('image');
  }
  public set image(value: string) {
    this._image = value;
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
  private _imagePullSecrets = new DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecImagePullSecretsList(this, "image_pull_secrets", false);
  public get imagePullSecrets() {
    return this._imagePullSecrets;
  }
  public putImagePullSecrets(value: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecImagePullSecrets[] | cdktf.IResolvable) {
    this._imagePullSecrets.internalValue = value;
  }
  public resetImagePullSecrets() {
    this._imagePullSecrets.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imagePullSecretsInput() {
    return this._imagePullSecrets.internalValue;
  }

  // listeners_service_template - computed: false, optional: true, required: false
  private _listenersServiceTemplate = new DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecListenersServiceTemplateOutputReference(this, "listeners_service_template");
  public get listenersServiceTemplate() {
    return this._listenersServiceTemplate;
  }
  public putListenersServiceTemplate(value: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecListenersServiceTemplate) {
    this._listenersServiceTemplate.internalValue = value;
  }
  public resetListenersServiceTemplate() {
    this._listenersServiceTemplate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get listenersServiceTemplateInput() {
    return this._listenersServiceTemplate.internalValue;
  }

  // replicant_template - computed: false, optional: true, required: false
  private _replicantTemplate = new DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplateOutputReference(this, "replicant_template");
  public get replicantTemplate() {
    return this._replicantTemplate;
  }
  public putReplicantTemplate(value: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecReplicantTemplate) {
    this._replicantTemplate.internalValue = value;
  }
  public resetReplicantTemplate() {
    this._replicantTemplate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicantTemplateInput() {
    return this._replicantTemplate.internalValue;
  }

  // revision_history_limit - computed: false, optional: true, required: false
  private _revisionHistoryLimit?: number; 
  public get revisionHistoryLimit() {
    return this.getNumberAttribute('revision_history_limit');
  }
  public set revisionHistoryLimit(value: number) {
    this._revisionHistoryLimit = value;
  }
  public resetRevisionHistoryLimit() {
    this._revisionHistoryLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get revisionHistoryLimitInput() {
    return this._revisionHistoryLimit;
  }

  // service_account_name - computed: false, optional: true, required: false
  private _serviceAccountName?: string; 
  public get serviceAccountName() {
    return this.getStringAttribute('service_account_name');
  }
  public set serviceAccountName(value: string) {
    this._serviceAccountName = value;
  }
  public resetServiceAccountName() {
    this._serviceAccountName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountNameInput() {
    return this._serviceAccountName;
  }

  // update_strategy - computed: false, optional: true, required: false
  private _updateStrategy = new DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecUpdateStrategyOutputReference(this, "update_strategy");
  public get updateStrategy() {
    return this._updateStrategy;
  }
  public putUpdateStrategy(value: DataK8SAppsEmqxIoEmqxV2Beta1ManifestSpecUpdateStrategy) {
    this._updateStrategy.internalValue = value;
  }
  public resetUpdateStrategy() {
    this._updateStrategy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateStrategyInput() {
    return this._updateStrategy.internalValue;
  }
}
